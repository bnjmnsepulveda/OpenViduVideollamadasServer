package com.adportas.videollamadas.websocket;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.enumerated.EstadoVideoLLamada;
import com.adportas.videollamadas.exceptions.VideollamadasException;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.service.VideollamadaService;
import com.adportas.videollamadas.service.WebsocketService;
import com.adportas.videollamadas.websocket.mensajes.MensajeConexionVideoLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeContestarLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeError;
import com.adportas.videollamadas.websocket.mensajes.MensajeSesionVideoLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeSolicitudVideoLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeVideoLLamada;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import java.lang.reflect.Type;
import java.util.Date;
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
        websocketService.removeSession(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject) jsonParser.parse(payload);
        MensajeWebsocket response;
        try {
            String tipoMensaje = jsonObject.get("tipoMensaje").getAsString();
            if (tipoMensaje.equals(TipoMensaje.REGISTRO_USUARIO.name())) {
                // --- PETICION REGISTRO USUARIO ---
                MensajeWebsocket<ContactoAgente> msg = JsonHelper.convertirObjeto(getTypeMessageRegistroUsuario(), payload);
                websocketService.registerUser(session.getId(), msg.getContenido());
                logger.info("Usuario " + msg.getContenido().getUsuarioOperkall() + " registrado en sesion websocket [id=" + session.getId() + "]");
            } else if (tipoMensaje.equals(TipoMensaje.INICIAR_VIDEO_LLAMADA.name())) {
                // --- PETICION INICIAR VIDEOLLAMADA ---
                MensajeWebsocket<MensajeVideoLLamada> msg = JsonHelper.convertirObjeto(getTypeMessageVideoLLamada(), payload);
                logger.info("Iniciar videollamada [ emisor="
                        + msg.getContenido().getEmisor().getUsuarioOperkall()
                        + ", receptor=" + msg.getContenido().getReceptor().getUsuarioOperkall() + "]");
                // --- generar id unico de videollamada ---
                String videollamadaId = videollamadaService
                        .generateVideollamadaId(msg.getContenido().getEmisor().getId(),
                                msg.getContenido().getReceptor().getId());
                logger.info("Registrando videollamada [id=" + videollamadaId + "]");
                videollamadaService.registrarVideollamada(videollamadaId);
                // --- crear peticion a usuario destino  de videollamada ---                
                MensajeSolicitudVideoLLamada contenidoReceptor = new MensajeSolicitudVideoLLamada();
                contenidoReceptor.setEmisor(msg.getContenido().getEmisor());
                contenidoReceptor.setReceptor(msg.getContenido().getReceptor());
                contenidoReceptor.setVideollamadaId(videollamadaId);
                MensajeWebsocket responseReceptor = new MensajeWebsocket(new Date(), TipoMensaje.SOLICITUD_VIDEO_LLAMADA, contenidoReceptor);
                websocketService.sendMessage(msg.getContenido().getReceptor(), responseReceptor);// <--- envio mensaje ---

            } else if (tipoMensaje.equals(TipoMensaje.CONTESTAR_LLAMADA.name())) {
                MensajeWebsocket<MensajeContestarLLamada> request = JsonHelper.convertirObjeto(getTypeMessageContestarVideoLLamada(), payload);
                String videollamadaId = request.getContenido().getVideollamadaId();
                logger.info("Se acepto la videollamada [id=" + videollamadaId + "]");
                videollamadaService.crearSesionVideollamada(videollamadaId);
                String tokenReceptor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getReceptor());
                String tokenEmisor = videollamadaService.crearTokenVideollamada(videollamadaId, request.getContenido().getEmisor());
                MensajeConexionVideoLLamada contenidoEmisor = new MensajeConexionVideoLLamada(videollamadaId, tokenEmisor);
                MensajeConexionVideoLLamada contenidoReceptor = new MensajeConexionVideoLLamada(videollamadaId, tokenReceptor);
                // --- crear respuesta de tokens para inicia videollamada
                //    websocketService.sendMessage(contacto, response);// <--- envio mensaje ---
                MensajeWebsocket responseEmisor = new MensajeWebsocket(new Date(), TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoEmisor);
                MensajeWebsocket responseReceptor = new MensajeWebsocket(new Date(), TipoMensaje.TOKEN_VIDEOLLAMADA, contenidoReceptor);
                websocketService.sendMessage(request.getContenido().getReceptor(), responseReceptor);
                websocketService.sendMessage(request.getContenido().getEmisor(), responseEmisor);
                logger.info("hay " + videollamadaService.cantidadSesiones() + " sesiones de videollamadas");
                videollamadaService.actualizarEstadoVideollamada(videollamadaId, EstadoVideoLLamada.ESTABLECIDA);
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

    public Type getTypeMessageRegistroUsuario() {
        Type type = new TypeToken<MensajeWebsocket<ContactoAgente>>() {
        }.getType();
        return type;
    }

    public Type getTypeMessageVideoLLamada() {
        Type type = new TypeToken<MensajeWebsocket<MensajeVideoLLamada>>() {
        }.getType();
        return type;
    }

    public Type getTypeMessageContestarVideoLLamada() {
        Type type = new TypeToken<MensajeWebsocket<MensajeContestarLLamada>>() {
        }.getType();
        return type;
    }

}
