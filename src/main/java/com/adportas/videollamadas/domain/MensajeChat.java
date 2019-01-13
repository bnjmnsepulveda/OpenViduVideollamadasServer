
package com.adportas.videollamadas.domain;

import com.adportas.videollamadas.enumerated.TipoMensajeChat;
import java.util.Date;

/**
 *
 * @author benjamin
 */
public class MensajeChat {

    long id;
    String contenido;
    UsuarioChat emisor;
    Date fecha;
    TipoMensajeChat tipoMensaje;

    public MensajeChat() {
    }

    public MensajeChat(long id, String contenido, UsuarioChat emisor, Date fecha, TipoMensajeChat tipoMensaje) {
        this.id = id;
        this.contenido = contenido;
        this.emisor = emisor;
        this.fecha = fecha;
        this.tipoMensaje = tipoMensaje;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public UsuarioChat getEmisor() {
        return emisor;
    }

    public void setEmisor(UsuarioChat emisor) {
        this.emisor = emisor;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public TipoMensajeChat getTipoMensaje() {
        return tipoMensaje;
    }

    public void setTipoMensaje(TipoMensajeChat tipoMensaje) {
        this.tipoMensaje = tipoMensaje;
    }
    
}
