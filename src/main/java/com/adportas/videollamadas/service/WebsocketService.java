package com.adportas.videollamadas.service;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.service.interfaces.IWebsocketService;
import com.adportas.videollamadas.websocket.MensajeWebsocket;
import com.adportas.videollamadas.websocket.SesionWebsocket;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

/**
 *
 * @author benjamin
 */
@Service
public class WebsocketService implements IWebsocketService<MensajeWebsocket> {

    private final Map<String, SesionWebsocket> sessions = Collections.synchronizedMap(new HashMap<>());
    private static final Logger logger = LogManager.getLogger(WebsocketService.class);

    @Override
    public void addSession(WebSocketSession session) {
        SesionWebsocket sesionUsuario = new SesionWebsocket(session.getId(), session);
        sessions.put(session.getId(), sesionUsuario);
    }

    @Override
    public void registerUser(String sessionId, ContactoAgente contactoAgente) {
        if (sessions.containsKey(sessionId)) {
            SesionWebsocket sesion = sessions.get(sessionId);
            contactoAgente.setEnLinea(true);
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
        sessions.forEach((sessionId, sesion) -> {
            try {
                String json = JsonHelper.convertirJson(mensaje);
                sesion.getSession().sendMessage(new TextMessage(json));
            } catch (IOException e) {
                logger.warn("Mensaje bradcasting no pudo se enviado a sesion websocket [id="+ sessionId + "]");
            }
        });
    }

    public SesionWebsocket findSesionWebsocketByContacto(ContactoAgente contacto) {
        for (Map.Entry<String, SesionWebsocket> entry : sessions.entrySet()) {
            if (entry.getValue().getContactoAgente().equals(contacto)) {
                return entry.getValue();
            }
        }
        return null;
    }

    public ContactoAgente findContactoAgenteBySessionId(String sessionId) {
        SesionWebsocket sesion = sessions.get(sessionId);
        if (sesion != null) {
            return sesion.getContactoAgente();
        }
        return null;
    }
    
    public ContactoAgente findContactoAgenteByUsuarioChat(long usuarioChatId) {
        for (Map.Entry<String, SesionWebsocket> entry : sessions.entrySet()) {
            ContactoAgente contacto = entry.getValue().getContactoAgente();
            if(contacto.getUsuarioChat() != null && contacto.getUsuarioChat().getId() == usuarioChatId) {
                return contacto;
            }
        }
        return null;
    }

    public List<ContactoAgente> findContactosEnLinea() {
        List<ContactoAgente> contactos = new ArrayList();
        sessions.forEach((key, value) -> {
            contactos.add(value.getContactoAgente());
        });
        return contactos;
    }

    @Override
    public SesionWebsocket findSesionWebsocketBySeessionId(String sessionId) {
        return sessions.get(sessionId);
    }
}
