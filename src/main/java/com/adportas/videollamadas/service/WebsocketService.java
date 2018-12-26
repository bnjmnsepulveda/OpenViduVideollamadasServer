package com.adportas.videollamadas.service;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.service.interfaces.IWebsocketService;
import com.adportas.videollamadas.websocket.MensajeWebsocket;
import com.adportas.videollamadas.websocket.SesionWebsocket;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduRole;
import io.openvidu.java.client.Session;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

/**
 *
 * @author benjamin
 */
@Service
public class WebsocketService implements IWebsocketService<MensajeWebsocket> {

    // Collection to pair session names and OpenVidu Session objects
    private Map<String, Session> mapSessions = new ConcurrentHashMap<>();
    // Collection to pair session names and tokens (the inner Map pairs tokens and role associated)
    private Map<String, Map<String, OpenViduRole>> mapSessionNamesTokens = new ConcurrentHashMap<>();

    private final OpenVidu openVidu;
    // --- URL OPENVIDU AND SECRET WORD FOR AUTHENTICATION ---
    private final String OPENVIDU_URL;
    private final String SECRET;    
    private final Map<String, SesionWebsocket> sessions = Collections.synchronizedMap(new HashMap<>());
    private static final Logger logger = LogManager.getLogger(WebsocketService.class);

    public WebsocketService(@Value("openvidu.url")String OPENVIDU_URL,@Value("openvidu.secret") String SECRET) {
        this.OPENVIDU_URL = OPENVIDU_URL;
        this.SECRET = SECRET;
        this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
    }
    
    @Override
    public void addSession(WebSocketSession session) {
        SesionWebsocket sesionUsuario = new SesionWebsocket(session.getId(), session);
        sessions.put(session.getId(), sesionUsuario);
    }

    @Override
    public void registerUser(String sessionId, ContactoAgente contactoAgente) {
        if (sessions.containsKey(sessionId)) {
            SesionWebsocket sesion = sessions.get(sessionId);
            sesion.setContactoAgente(contactoAgente);
            sessions.put(sessionId, sesion);
        }
    }

    @Override
    public void removeSession(WebSocketSession session) {
        sessions.remove(session.getId());
    }

    @Override
    public void sendMessage(ContactoAgente contactoAgente, MensajeWebsocket mensaje) throws IOException {
        SesionWebsocket sesion = this.findSesionWebsocketByContacto(contactoAgente);
        if (sesion == null) {
            logger.warn("sesion no encontrada para agente " + contactoAgente.getId());
            return;
        }
        String json = JsonHelper.convertirJson(mensaje);
        sesion.getSession().sendMessage(new TextMessage(json));
    }

    @Override
    public void sendBroadcastMessage(MensajeWebsocket mensaje) throws IOException {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public SesionWebsocket findSesionWebsocketByContacto(ContactoAgente contacto) {
        for (Map.Entry<String, SesionWebsocket> entry : sessions.entrySet()) {
            if (entry.getValue().getContactoAgente().equals(contacto)) {
                return entry.getValue();
            }
        }
        return null;
    }
}
