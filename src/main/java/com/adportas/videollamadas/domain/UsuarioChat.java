
package com.adportas.videollamadas.domain;

/**
 *
 * @author benjamin
 */
public class UsuarioChat {

    private long id;
    private String username;
    private boolean habilitado;
    private boolean enLinea;
    private String sessionId;
    private String rol;

    public UsuarioChat() {
    }

    public UsuarioChat(String username, boolean habilitado, boolean enLinea, String rol) {
        this.username = username;
        this.habilitado = habilitado;
        this.enLinea = enLinea;
        this.rol = rol;
    }
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isHabilitado() {
        return habilitado;
    }

    public void setHabilitado(boolean habilitado) {
        this.habilitado = habilitado;
    }

    public boolean isEnLinea() {
        return enLinea;
    }

    public void setEnLinea(boolean enLinea) {
        this.enLinea = enLinea;
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
