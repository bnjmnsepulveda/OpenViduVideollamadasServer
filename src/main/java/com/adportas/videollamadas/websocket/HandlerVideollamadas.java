package com.adportas.videollamadas.websocket;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.service.VideollamadaService;
import com.adportas.videollamadas.service.WebsocketService;
import com.adportas.videollamadas.websocket.mensajes.MensajeVideoLLamada;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
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
        try {
            String tipoMensaje = jsonObject.get("tipoMensaje").getAsString();
            if (tipoMensaje.equals(TipoMensaje.REGISTRO_USUARIO.name())) {
                MensajeWebsocket<ContactoAgente> msg = JsonHelper.convertirObjeto(getTypeMessageRegistroUsuario(), payload);
                websocketService.registerUser(session.getId(), msg.getContenido());
                logger.info("Usuario registrado " + msg.getContenido().getUsuarioOperkall() + " en sesion websocket [" + session.getId() + "]");
            } else if (tipoMensaje.equals(TipoMensaje.VIDEO_LLAMADA.name())) {
                MensajeWebsocket<MensajeVideoLLamada> msg = JsonHelper.convertirObjeto(getTypeMessageVideoLLamada(), payload);
                logger.info("Iniciar videollamada [ emisor=" 
                        + msg.getContenido().getEmisor().getUsuarioOperkall() 
                        + ", receptor=" + msg.getContenido().getReceptor().getUsuarioOperkall() + "]");
            }

        } catch (Exception e) {
            logger.error(e.getMessage(),e);
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
    
}
