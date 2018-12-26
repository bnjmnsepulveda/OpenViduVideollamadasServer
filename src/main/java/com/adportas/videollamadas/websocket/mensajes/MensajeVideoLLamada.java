
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.ContactoAgente;

/**
 *
 * @author benjamin
 */
public class MensajeVideoLLamada {

    String idLLamada;
    ContactoAgente emisor;
    ContactoAgente receptor;

    public String getIdLLamada() {
        return idLLamada;
    }

    public void setIdLLamada(String idLLamada) {
        this.idLLamada = idLLamada;
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
