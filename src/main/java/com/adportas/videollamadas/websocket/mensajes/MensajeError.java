
package com.adportas.videollamadas.websocket.mensajes;

/**
 *
 * @author benjamin
 */
public class MensajeError {
    
    String titulo;
    String mensaje;

    public MensajeError() {
    }

    public MensajeError(String titulo, String mensaje) {
        this.titulo = titulo;
        this.mensaje = mensaje;
    }
    
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
}
