
package com.adportas.videollamadas.websocket.mensajes;

/**
 *
 * @author benjamin
 */
public class MensajeConexionVideoLLamada {

    String videollamadaId;
    String token;

    public MensajeConexionVideoLLamada() {
    }

    public MensajeConexionVideoLLamada(String videollamadaId, String token) {
        this.videollamadaId = videollamadaId;
        this.token = token;
    }

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    
}
