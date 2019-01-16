package com.adportas.videollamadas.websocket;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.Conversacion;
import com.adportas.videollamadas.domain.SesionVideollamada;
import com.adportas.videollamadas.enumerated.EstadoVideoLLamada;
import com.adportas.videollamadas.exceptions.VideollamadasException;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.helper.TypeHelper;
import com.adportas.videollamadas.service.ChatService;
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
    @Autowired
    private ChatService chatService;
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
        if (sesionCerrada != null && sesionCerrada.getContactoAgente() != null) {
            String contenido = sesionCerrada.getContactoAgente().getUsuarioOperkall() + " se ha desconectado";
            logger.info(contenido);
            MensajeWebsocket<String> broadcasting = new MensajeWebsocket(TipoMensaje.ACTUALIZAR_CONTACTOS);
            broadcasting.setContenido(contenido);
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
                MensajeWebsocket<MensajeVideoLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getMensajeVideoLLamada(), payload);
                iniciarVideoLLamada(request);

            } else if (tipoMensaje.equals(TipoMensaje.CONTESTAR_LLAMADA.name())) {
                // --- PETICION CONTESTAR LLAMADA ---
                MensajeWebsocket<MensajeContestarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getContestarVideoLLamada(), payload);
                contestarVideoLLamada(request);

            } else if (tipoMensaje.equals(TipoMensaje.RECHAZAR_VIDEOLLAMADA.name())) {
                // --- PETICION RECHAZAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeCancelarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getCancelarVideoLLamada(), payload);
                rechazarVideoLLamada(request);

            } else if (tipoMensaje.equals(TipoMensaje.SOLICITUD_CANCELAR_LLAMADA.name())) {
                // --- PETICION CANCELAR LLAMADA ---                
                MensajeWebsocket<MensajeCancelarLLamada> request = JsonHelper.convertirObjeto(TypeHelper.getCancelarVideoLLamada(), payload);
                solicitudCancelarVideoLLamada(request);

            } else if (tipoMensaje.equals(TipoMensaje.TERMINAR_VIDEOLLAMADA.name())) {
                // --- PETICION TERMINAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeSimple> request = JsonHelper.convertirObjeto(TypeHelper.getMensajeSimple(), payload);
                terminarVideoLLamada(session, request);

            } 

        } catch (OpenViduJavaClientException | OpenViduHttpException e) {
            logger.error(e.getMessage());
            ContactoAgente contacto = websocketService.findContactoAgenteBySessionId(session.getId());
            MensajeError msError = new MensajeError("Error", "Problemas creando videollamada " + e.getMessage());
            MensajeWebsocket msWs = new MensajeWebsocket(TipoMensaje.ERROR_VIDEOLLAMADA, msError);
            websocketService.sendMessage(contacto, msWs);
        } catch (VideollamadasException e) {
            logger.error(e.getMessage());
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    /**
     * Registra un usuario en el servicio de websocket
     * {@link com.adportas.videollamadas.service.WebsocketService}.
     *
     * @param session
     * @param request
     * @throws IOException
     */
    private void registroUsuario(WebSocketSession session, MensajeWebsocket<ContactoAgente> request) throws IOException {
        websocketService.registerUser(session.getId(), request.getContenido());
        logger.info("Usuario " + request.getContenido().getUsuarioOperkall() + " registrado en sesion websocket [id=" + session.getId() + "]");
        MensajeWebsocket<String> broadcasting = new MensajeWebsocket(TipoMensaje.ACTUALIZAR_CONTACTOS);
        broadcasting.setContenido(request.getContenido().getUsuarioOperkall() + " en linea");
        websocketService.sendBroadcastMessage(broadcasting);
    }

    /**
     * Inicia un videollamada generando una videollamadaId, registra la
     * videollamada en {@link com.adportas.videollamadas.service.VideollamadaService
     * }
     * y enviia los mensajes a los participantes para que puedan aceptar la
     * videollamada.
     *
     * @param request
     * @throws IOException
     */
    private void iniciarVideoLLamada(MensajeWebsocket<MensajeVideoLLamada> request) throws IOException {
        logger.info("Iniciar videollamada [emisor="
                + request.getContenido().getEmisor().getUsuarioOperkall()
                + ", receptor=" + request.getContenido().getReceptor().getUsuarioOperkall() + "]");
        // --- generar id unico de videollamada ---
        String videollamadaId = videollamadaService
                .generateVideollamadaId(request.getContenido().getEmisor().getId(),
                        request.getContenido().getReceptor().getId());
        logger.info("Registrando videollamada [id=" + videollamadaId + "]");
        videollamadaService.registrarVideollamada(videollamadaId);
        // --- enviar videollamadaId a usuario que inicia llamada ---
        websocketService.sendMessage(request.getContenido().getEmisor(), new MensajeWebsocket(TipoMensaje.VIDEOLLAMADA_ID_ASIGNADO, videollamadaId));
        // --- crear peticion a usuario destino  de videollamada ---                
        MensajeSolicitudVideoLLamada contenidoReceptor = new MensajeSolicitudVideoLLamada();
        contenidoReceptor.setEmisor(request.getContenido().getEmisor());
        contenidoReceptor.setReceptor(request.getContenido().getReceptor());
        contenidoReceptor.setVideollamadaId(videollamadaId);
        MensajeWebsocket responseReceptor = new MensajeWebsocket(TipoMensaje.SOLICITUD_VIDEO_LLAMADA, contenidoReceptor);
        websocketService.sendMessage(request.getContenido().getReceptor(), responseReceptor);// <--- envio mensaje ---
        // --- Creando timeout para videollamada ---
        List<ContactoAgente> participantes = new ArrayList();
        participantes.add(request.getContenido().getEmisor());
        participantes.add(request.getContenido().getReceptor());
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
                            websocketService.sendMessage(participante, new MensajeWebsocket(TipoMensaje.TIMEOUT_LLAMADA, "Expiro el tiempo de videollamada"));
                        }
                    }
                } catch (Exception e) {
                    logger.error(e.getMessage());
                }
            }
        });
        timeoutVideollamada.start();
    }

    /**
     * Se acepta la llamada y se crea los token de autorizacion para establecer
     * la comunicacion de streaming de la videollamada.
     *
     * @param request
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     * @throws IOException
     */
    private void contestarVideoLLamada(MensajeWebsocket<MensajeContestarLLamada> request)
            throws OpenViduJavaClientException, OpenViduHttpException, IOException {
        String videollamadaId = request.getContenido().getVideollamadaId();
        logger.info("Se acepto la videollamada [id=" + videollamadaId + "]");
        videollamadaService.crearSesionVideollamada(videollamadaId);
        String tokenReceptor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getReceptor());
        String tokenEmisor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getEmisor());
        // --- se obtiene conversacion asociada a participantes de videollamada ---
        Conversacion chat = chatService.buscarConversacionByUsuariosChat(
                request.getContenido().getReceptor().getId(),
                request.getContenido().getEmisor().getId()
        );
        if (chat == null) {
            chat = chatService.crearConversacion(new long[]{
                request.getContenido().getReceptor().getId(),
                request.getContenido().getEmisor().getId()
            });
        }
        MensajeConexionVideoLLamada contenidoEmisor = new MensajeConexionVideoLLamada(chat.getId(), videollamadaId, tokenEmisor);
        MensajeConexionVideoLLamada contenidoReceptor = new MensajeConexionVideoLLamada(chat.getId(), videollamadaId, tokenReceptor);
        // --- crear respuesta de tokens para inicia videollamada
        //    websocketService.sendMessage(contacto, response);// <--- envio mensaje ---
        MensajeWebsocket responseEmisor = new MensajeWebsocket(TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoEmisor);
        MensajeWebsocket responseReceptor = new MensajeWebsocket(TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoReceptor);
        websocketService.sendMessage(request.getContenido().getReceptor(), responseReceptor);
        websocketService.sendMessage(request.getContenido().getEmisor(), responseEmisor);
        logger.info("hay " + videollamadaService.cantidadSesiones() + " sesiones de videollamadas");
        videollamadaService.actualizarEstadoVideollamada(videollamadaId, EstadoVideoLLamada.ESTABLECIDA);
    }

    /**
     * rechaza una videollamada entrante y notifica al Usuario emisor.
     *
     * @param request
     * @throws IOException
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     */
    private void rechazarVideoLLamada(MensajeWebsocket<MensajeCancelarLLamada> request) throws IOException, OpenViduJavaClientException, OpenViduHttpException {
        String videollamadaId = request.getContenido().getVideollamadaId();
        if (request.getContenido().getNotificarContactos() != null) {
            for (ContactoAgente contacto : request.getContenido().getNotificarContactos()) {
                websocketService.sendMessage(contacto, new MensajeWebsocket(TipoMensaje.RECHAZAR_VIDEOLLAMADA, new MensajeSimple("Videollamada rechazada")));
            }
            videollamadaService.removeSession(videollamadaId);
        }
    }

    /**
     * Envio de solicitud de cancelar videollamada.
     *
     * @param request
     * @throws IOException
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     */
    private void solicitudCancelarVideoLLamada(MensajeWebsocket<MensajeCancelarLLamada> request) throws IOException, OpenViduJavaClientException, OpenViduHttpException {
        String videollamadaId = request.getContenido().getVideollamadaId();
        for (ContactoAgente contacto : request.getContenido().getNotificarContactos()) {
            websocketService.sendMessage(contacto, new MensajeWebsocket(TipoMensaje.CANCELAR_LLAMADA, ""));
        }
        videollamadaService.removeSession(videollamadaId);
    }

    /**
     * Termina la videollamada en estado ESTABLECIENDO.
     *
     * @param session
     * @param request
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     * @throws IOException
     */
    private void terminarVideoLLamada(WebSocketSession session, MensajeWebsocket<MensajeSimple> request) throws OpenViduJavaClientException, OpenViduHttpException, IOException {
        String videollamadaId = request.getContenido().getMensaje();
        logger.info("Terminando videollamada [id=" + videollamadaId + "]");
        SesionVideollamada sesion = videollamadaService.removeSession(videollamadaId);
        ContactoAgente contactoCortante = websocketService.findContactoAgenteBySessionId(session.getId());
        String contenido = contactoCortante.getUsuarioOperkall() + " ha cortado la llamada";
        MensajeWebsocket response = new MensajeWebsocket(TipoMensaje.TERMINAR_VIDEOLLAMADA, contenido);
        // --- recorrer participantes para enviar mensaje cancelar videollamada ---
        for (Map.Entry<String, ContactoAgente> entry : sesion.getParticipantes().entrySet()) {
            websocketService.sendMessage(entry.getValue(), response);
        }
    }

}
