
package com.adportas.videollamadas.websocket.mensajes;

/**
 *
 * @author benjamin
 */
public class MensajeConexionVideoLLamada {

    long conversacionId;
    String videollamadaId;
    String token;

    public MensajeConexionVideoLLamada() {
    }

    public MensajeConexionVideoLLamada(String videollamadaId, String token) {
        this.videollamadaId = videollamadaId;
        this.token = token;
    }

    public MensajeConexionVideoLLamada(long conversacionId, String videollamadaId, String token) {
        this.conversacionId = conversacionId;
        this.videollamadaId = videollamadaId;
        this.token = token;
    }
    
    public long getConversacionId() {
        return conversacionId;
    }

    public void setConversacionId(long conversacionId) {
        this.conversacionId = conversacionId;
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
