
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.ContactoAgente;

/**
 *
 * @author benjamin
 */
public class MensajeVideoLLamada {

    String videollamadaId;
    ContactoAgente emisor;
    ContactoAgente receptor;

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }

    public ContactoAgente getEmisor() {
        return emisor;
    }

    public void setEmisor(ContactoAgente emisor) {
        this.emisor = emisor;
    }

    public ContactoAgente getReceptor() {
        return receptor;
    }

    public void setReceptor(ContactoAgente receptor) {
        this.receptor = receptor;
    }
    
}
