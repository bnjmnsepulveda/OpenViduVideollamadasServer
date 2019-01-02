
package com.adportas.videollamadas.websocket.mensajes;

import com.adportas.videollamadas.domain.ContactoAgente;
import java.util.List;

/**
 *
 * @author benjamin
 */
public class MensajeCancelarLLamada {

    String videollamadaId;
    List<ContactoAgente> notificarContactos;

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }

    public List<ContactoAgente> getNotificarContactos() {
        return notificarContactos;
    }

    public void setNotificarContactos(List<ContactoAgente> notificarContactos) {
        this.notificarContactos = notificarContactos;
    }
    
}
