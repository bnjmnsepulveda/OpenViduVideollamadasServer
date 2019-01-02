
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.ContactoAgente;

/**
 *
 * @author benjamin
 */
public class MensajeContestarLLamada {
    
    String videollamadaId;
    ContactoAgente receptor;
    ContactoAgente emisor;

    public MensajeContestarLLamada(String videollamadaId, ContactoAgente receptor) {
        this.videollamadaId = videollamadaId;
        this.receptor = receptor;
    }

    public MensajeContestarLLamada() {
    }

    public MensajeContestarLLamada(String videollamadaId, ContactoAgente receptor, ContactoAgente emisor) {
        this.videollamadaId = videollamadaId;
        this.receptor = receptor;
        this.emisor = emisor;
    }

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }

    public ContactoAgente getReceptor() {
        return receptor;
    }

    public void setReceptor(ContactoAgente receptor) {
        this.receptor = receptor;
    }

    public ContactoAgente getEmisor() {
        return emisor;
    }

    public void setEmisor(ContactoAgente emisor) {
        this.emisor = emisor;
    }
    

}
