
package com.adportas.videollamadas.domain;

/**
 *
 * @author benjamin
 */
public class UsuarioChat {

    private int id;
    private String username;
    private boolean enlinea;
    private String sessionId;
    private String rol;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isEnlinea() {
        return enlinea;
    }

    public void setEnlinea(boolean enlinea) {
        this.enlinea = enlinea;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
    
}
