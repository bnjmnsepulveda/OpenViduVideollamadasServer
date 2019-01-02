
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.ContactoAgente;

/**
 *
 * @author benjamin
 */
public class MensajeSolicitudVideoLLamada {

    ContactoAgente emisor;
    ContactoAgente receptor;
    String videollamadaId;

    public MensajeSolicitudVideoLLamada() {
    }

    public MensajeSolicitudVideoLLamada(ContactoAgente emisor, ContactoAgente receptor, String videollamadaId) {
        this.emisor = emisor;
        this.receptor = receptor;
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

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }
    
}
