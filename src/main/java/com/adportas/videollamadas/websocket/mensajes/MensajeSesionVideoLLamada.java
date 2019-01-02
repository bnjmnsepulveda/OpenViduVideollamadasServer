
package com.adportas.videollamadas.websocket.mensajes;

/**
 *
 * @author benjamin
 */
public class MensajeSesionVideoLLamada {
    
    String token;
    String roomVideollamada;

    public MensajeSesionVideoLLamada() {
    }

    public MensajeSesionVideoLLamada(String token, String roomVideollamada) {
        this.token = token;
        this.roomVideollamada = roomVideollamada;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRoomVideollamada() {
        return roomVideollamada;
    }

    public void setRoomVideollamada(String roomVideollamada) {
        this.roomVideollamada = roomVideollamada;
    }

}
