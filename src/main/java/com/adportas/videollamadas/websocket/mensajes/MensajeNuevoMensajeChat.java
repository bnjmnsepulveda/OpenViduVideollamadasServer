
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.MensajeChat;

/**
 *
 * @author benjamin
 */
public class MensajeNuevoMensajeChat {

    long conversacionId;
    MensajeChat mensajeChat;

    public MensajeNuevoMensajeChat() {
    }

    public MensajeNuevoMensajeChat(long conversacionId, MensajeChat mensajeChat) {
        this.conversacionId = conversacionId;
        this.mensajeChat = mensajeChat;
    }

    public long getConversacionId() {
        return conversacionId;
    }

    public void setConversacionId(long conversacionId) {
        this.conversacionId = conversacionId;
    }

    public MensajeChat getMensajeChat() {
        return mensajeChat;
    }

    public void setMensajeChat(MensajeChat mensajeChat) {
        this.mensajeChat = mensajeChat;
    }
    
}
