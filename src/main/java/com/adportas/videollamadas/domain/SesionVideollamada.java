package com.adportas.videollamadas.domain;

import io.openvidu.java.client.Session;

/**
 *
 * @author benjamin
 */
public class SesionVideollamada {

    private String sessionIdWebsocket;
    private String token;
    private Session session;
    private ContactoAgente contactoAgente;

    public String getSessionIdWebsocket() {
        return sessionIdWebsocket;
    }

    public void setSessionIdWebsocket(String sessionIdWebsocket) {
        this.sessionIdWebsocket = sessionIdWebsocket;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public ContactoAgente getContactoAgente() {
        return contactoAgente;
    }

    public void setContactoAgente(ContactoAgente contactoAgente) {
        this.contactoAgente = contactoAgente;
    }

}
