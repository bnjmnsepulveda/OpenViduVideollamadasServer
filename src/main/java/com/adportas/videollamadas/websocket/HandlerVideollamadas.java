package com.adportas.videollamadas.websocket;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.SesionVideollamada;
import com.adportas.videollamadas.enumerated.EstadoVideoLLamada;
import com.adportas.videollamadas.exceptions.VideollamadasException;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.helper.TypeHelper;
import com.adportas.videollamadas.service.VideollamadaService;
import com.adportas.videollamadas.service.WebsocketService;
import com.adportas.videollamadas.websocket.mensajes.MensajeCancelarLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeConexionVideoLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeContestarLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeError;
import com.adportas.videollamadas.websocket.mensajes.MensajeSimple;
import com.adportas.videollamadas.websocket.mensajes.MensajeSolicitudVideoLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeVideoLLamada;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 *
 * @author benjamin
 */
public class HandlerVideollamadas extends TextWebSocketHandler {

    @Autowired
    private WebsocketService websocketService;
    @Autowired
    private VideollamadaService videollamadaService;
    private static final Logger logger = LogManager.getLogger(HandlerVideollamadas.class);

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        logger.info("Creando sesion [" + session.getId() + "]");
        websocketService.addSession(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        logger.info("Removiendo sesion [" + session.getId() + "]");
        SesionWebsocket sesionCerrada = websocketService.findSesionWebsocketBySeessionId(session.getId());
        websocketService.removeSession(session);
        if (sesionCerrada != null) {
            String contenido = sesionCerrada.getContactoAgente().getUsuarioOperkall() + " se ha desconectado";
            logger.info(contenido);
            MensajeWebsocket<MensajeSimple> broadcasting = new MensajeWebsocket<>(TipoMensaje.ACTUALIZAR_CONTACTOS);
            broadcasting.setContenido(new MensajeSimple(contenido));
            websocketService.sendBroadcastMessage(broadcasting);
        }

    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        logger.info("Payload=" + payload);
        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject) jsonParser.parse(payload);
        try {
            String tipoMensaje = jsonObject.get("tipoMensaje").getAsString();
            if (tipoMensaje.equals(TipoMensaje.REGISTRO_USUARIO.name())) {
                // --- PETICION REGISTRO USUARIO ---
                MensajeWebsocket<ContactoAgente> msg = JsonHelper.convertirObjeto(TypeHelper.getRegistroUsuario(), payload);
                registroUsuario(session, msg);
            } else if (tipoMensaje.equals(TipoMensaje.INICIAR_VIDEO_LLAMADA.name())) {

                // --- PETICION INICIAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeVideoLLamada> msg = JsonHelper.convertirObjeto(TypeHelper.getMensajeVideoLLamada(), payload);
                logger.info("Iniciar videollamada [emisor="
                        + msg.getContenido().getEmisor().getUsuarioOperkall()
                        + ", receptor=" + msg.getContenido().getReceptor().getUsuarioOperkall() + "]");
                // --- generar id unico de videollamada ---
                String videollamadaId = videollamadaService
                        .generateVideollamadaId(msg.getContenido().getEmisor().getId(),
                                msg.getContenido().getReceptor().getId());
                logger.info("Registrando videollamada [id=" + videollamadaId + "]");
                videollamadaService.registrarVideollamada(videollamadaId);
                // --- enviar videollamadaId a usuario que inicia llamada ---
                websocketService.sendMessage(msg.getContenido().getEmisor(), new MensajeWebsocket(TipoMensaje.VIDEOLLAMADA_ID_ASIGNADO, videollamadaId));
                // --- crear peticion a usuario destino  de videollamada ---                
                MensajeSolicitudVideoLLamada contenidoReceptor = new MensajeSolicitudVideoLLamada();
                contenidoReceptor.setEmisor(msg.getContenido().getEmisor());
                contenidoReceptor.setReceptor(msg.getContenido().getReceptor());
                contenidoReceptor.setVideollamadaId(videollamadaId);
                MensajeWebsocket responseReceptor = new MensajeWebsocket(TipoMensaje.SOLICITUD_VIDEO_LLAMADA, contenidoReceptor);
                websocketService.sendMessage(msg.getContenido().getReceptor(), responseReceptor);// <--- envio mensaje ---
                // --- Creando timeout para videollamada ---
                List<ContactoAgente> participantes = new ArrayList();
                participantes.add(msg.getContenido().getEmisor());
                participantes.add(msg.getContenido().getReceptor());
                Thread timeoutVideollamada = new Thread(new Runnable() {
                    @Override
                    public void run() {
                        try {
                            Thread.sleep(10000);
                        } catch (Exception e) {
                        }
                        try {
                            SesionVideollamada sesion = videollamadaService.buscarSesionVideollamada(videollamadaId);
                            if (sesion != null && sesion.getEstado() == EstadoVideoLLamada.PETICION) {
                                logger.warn("Timeout videollamada " + videollamadaId);
                                for (ContactoAgente participante : participantes) {
                                    MensajeSimple contenido = new MensajeSimple("Expiro el tiempo de videollamada");
                                    websocketService.sendMessage(participante, new MensajeWebsocket(TipoMensaje.TIMEOUT_LLAMADA, contenido));
                                }
                            }
                        } catch (Exception e) {
                            logger.error(e.getMessage());
                        }
                    }
                });
                timeoutVideollamada.start();
            } else if (tipoMensaje.equals(TipoMensaje.CONTESTAR_LLAMADA.name())) {
                // --- PETICION CONTESTAR LLAMADA ---
                MensajeWebsocket<MensajeContestarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getContestarVideoLLamada(), payload);
                String videollamadaId = request.getContenido().getVideollamadaId();
                logger.info("Se acepto la videollamada [id=" + videollamadaId + "]");
                videollamadaService.crearSesionVideollamada(videollamadaId);
                String tokenReceptor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getReceptor());
                String tokenEmisor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getEmisor());
                MensajeConexionVideoLLamada contenidoEmisor = new MensajeConexionVideoLLamada(videollamadaId, tokenEmisor);
                MensajeConexionVideoLLamada contenidoReceptor = new MensajeConexionVideoLLamada(videollamadaId, tokenReceptor);
                // --- crear respuesta de tokens para inicia videollamada
                //    websocketService.sendMessage(contacto, response);// <--- envio mensaje ---
                MensajeWebsocket responseEmisor = new MensajeWebsocket(TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoEmisor);
                MensajeWebsocket responseReceptor = new MensajeWebsocket(TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoReceptor);
                websocketService.sendMessage(request.getContenido().getReceptor(), responseReceptor);
                websocketService.sendMessage(request.getContenido().getEmisor(), responseEmisor);
                logger.info("hay " + videollamadaService.cantidadSesiones() + " sesiones de videollamadas");
                videollamadaService.actualizarEstadoVideollamada(videollamadaId, EstadoVideoLLamada.ESTABLECIDA);
            } else if (tipoMensaje.equals(TipoMensaje.RECHAZAR_VIDEOLLAMADA.name())) {
                // --- PETICION RECHAZAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeCancelarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getCancelarVideoLLamada(), payload);
                String videollamadaId = request.getContenido().getVideollamadaId();
                if (request.getContenido().getNotificarContactos() != null) {
                    for (ContactoAgente contacto : request.getContenido().getNotificarContactos()) {
                        websocketService.sendMessage(contacto, new MensajeWebsocket(TipoMensaje.RECHAZAR_VIDEOLLAMADA, new MensajeSimple("Videollamada rechazada")));
                    }
                    videollamadaService.removeSession(videollamadaId);
                }
            } else if (tipoMensaje.equals(TipoMensaje.SOLICITUD_CANCELAR_LLAMADA.name())) {
                // --- PETICION CANCELAR LLAMADA ---                
                MensajeWebsocket<MensajeCancelarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getCancelarVideoLLamada(), payload);
                String videollamadaId = request.getContenido().getVideollamadaId();
                for (ContactoAgente contacto : request.getContenido().getNotificarContactos()) {
                    websocketService.sendMessage(contacto, new MensajeWebsocket(TipoMensaje.CANCELAR_LLAMADA, ""));
                }
                videollamadaService.removeSession(videollamadaId);
            } else if (tipoMensaje.equals(TipoMensaje.TERMINAR_VIDEOLLAMADA.name())) {
                // --- PETICION TERMINAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeSimple> request = JsonHelper.convertirObjeto(TypeHelper.getMensajeSimple(), payload);
                String videollamadaId = request.getContenido().getMensaje();
                logger.info("Terminando videollamada [id=" + videollamadaId + "]");
                SesionVideollamada sesion = videollamadaService.removeSession(videollamadaId);
                ContactoAgente contactoCortante = websocketService.findContactoAgenteBySessionId(session.getId());
                MensajeWebsocket<MensajeSimple> response;
                MensajeSimple contenido = new MensajeSimple(contactoCortante.getUsuarioOperkall() + " ha cortado la llamada");
                // --- recorrer participantes para enviar mensjae cancelar videollamada ---
                for (Map.Entry<String, ContactoAgente> entry : sesion.getParticipantes().entrySet()) {
                    response = new MensajeWebsocket(TipoMensaje.TERMINAR_VIDEOLLAMADA, contenido);
                    websocketService.sendMessage(entry.getValue(), response);
                }
            } else if(tipoMensaje.equals(TipoMensaje.MENSAJE_CHAT.name())) {
                // --- NOTIFICAR USUARIOS DE NUEVO MENSAJE ---
            }

        } catch (OpenViduJavaClientException | OpenViduHttpException e) {
            logger.error(e.getMessage());
            ContactoAgente c = websocketService.findContactoAgenteBySessionId(session.getId());
            MensajeError msError = new MensajeError("Error", "Problemas creando videollamada " + e.getMessage());
            MensajeWebsocket msWs = new MensajeWebsocket(new Date(), TipoMensaje.ERROR_VIDEOLLAMADA, msError);
            websocketService.sendMessage(c, msWs);
        } catch (VideollamadasException e) {
            logger.error(e.getMessage());
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    private void registroUsuario(WebSocketSession session, MensajeWebsocket<ContactoAgente> msg) throws IOException {
        websocketService.registerUser(session.getId(), msg.getContenido());
        logger.info("Usuario " + msg.getContenido().getUsuarioOperkall() + " registrado en sesion websocket [id=" + session.getId() + "]");
        logger.info("Se enviara mensaje de nuevo usuario en linea");
        MensajeWebsocket<MensajeSimple> broadcasting = new MensajeWebsocket(TipoMensaje.ACTUALIZAR_CONTACTOS);
        broadcasting.setContenido(new MensajeSimple(msg.getContenido().getUsuarioOperkall() + " en linea"));
        websocketService.sendBroadcastMessage(broadcasting);
    }

}
