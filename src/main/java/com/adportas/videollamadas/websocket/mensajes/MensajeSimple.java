
package com.adportas.videollamadas.websocket.mensajes;

/**
 *
 * @author benjamin
 */
public class MensajeSimple {
    String mensaje;

    public MensajeSimple() {
    }

    public MensajeSimple(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
}
