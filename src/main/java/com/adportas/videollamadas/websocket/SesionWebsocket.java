
package com.adportas.videollamadas.websocket;

import com.adportas.videollamadas.domain.ContactoAgente;
import org.springframework.web.socket.WebSocketSession;

/**
 *
 * @author benjamin
 */
public class SesionWebsocket {

    private String sessionId;
    private ContactoAgente contactoAgente;
    private WebSocketSession session;

    public SesionWebsocket() {
    }

    public SesionWebsocket(String sessionId, WebSocketSession session) {
        this.sessionId = sessionId;
        this.session = session;
    }
    
    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public ContactoAgente getContactoAgente() {
        return contactoAgente;
    }

    public void setContactoAgente(ContactoAgente contactoAgente) {
        this.contactoAgente = contactoAgente;
    }

    public WebSocketSession getSession() {
        return session;
    }

    public void setSession(WebSocketSession session) {
        this.session = session;
    }
    
}
