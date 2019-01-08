package com.adportas.videollamadas.websocket;

import java.util.Date;

/**
 *
 * @author benjamin
 * @param <T>
 */
public class MensajeWebsocket<T> {

    private Date fecha;
    private TipoMensaje tipoMensaje;
    private T contenido;

    public MensajeWebsocket() {
    }

    public MensajeWebsocket(TipoMensaje tipoMensaje) {
        this.tipoMensaje = tipoMensaje;
    }
    
    public MensajeWebsocket(TipoMensaje tipoMensaje, T contenido) {
        this.fecha = new java.util.Date();
        this.tipoMensaje = tipoMensaje;
        this.contenido = contenido;
    }

    public MensajeWebsocket(Date fecha, TipoMensaje tipoMensaje, T contenido) {
        this.fecha = fecha;
        this.tipoMensaje = tipoMensaje;
        this.contenido = contenido;
    }
    
    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public TipoMensaje getTipoMensaje() {
        return tipoMensaje;
    }

    public void setTipoMensaje(TipoMensaje tipoMensaje) {
        this.tipoMensaje = tipoMensaje;
    }

    public T getContenido() {
        return contenido;
    }

    public void setContenido(T contenido) {
        this.contenido = contenido;
    }

}
