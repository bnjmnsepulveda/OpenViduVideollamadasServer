
package com.adportas.videollamadas.domain;

import java.io.Serializable;

/**
 *
 * @author benjamin
 */
public class ContactoAgente implements Serializable {

    private String nombre;
    private String apellido;
    private String usuarioOperkall;
    private boolean enLinea;
    private UsuarioChat usuarioChat;
    private Long id;

    public UsuarioChat getUsuarioChat() {
        return usuarioChat;
    }

    public void setUsuarioChat(UsuarioChat usuarioChat) {
        this.usuarioChat = usuarioChat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getUsuarioOperkall() {
        return usuarioOperkall;
    }

    public void setUsuarioOperkall(String usuarioOperkall) {
        this.usuarioOperkall = usuarioOperkall;
    }

    
    public boolean isEnLinea() {
        return enLinea;
    }

    public void setEnLinea(boolean enLinea) {
        this.enLinea = enLinea;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof ContactoAgente)) {
            return false;
        }
        ContactoAgente other = (ContactoAgente) object;
        return !((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id)));
    }

    @Override
    public String toString() {
        return "com.adportas.videollamadas.domain.ContactoAgente[ id=" + id + " ]";
    }

}
