package com.adportas.videollamadas.domain;

import java.util.List;

/**
 *
 * @author benjamin
 */
public class Conversacion {

    long id;
    String titulo;
    List<MensajeChat> mensajes;
    List<UsuarioChat> participantes;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public List<MensajeChat> getMensajes() {
        return mensajes;
    }

    public void setMensajes(List<MensajeChat> mensajes) {
        this.mensajes = mensajes;
    }

    public List<UsuarioChat> getParticipantes() {
        return participantes;
    }

    public void setParticipantes(List<UsuarioChat> participantes) {
        this.participantes = participantes;
    }

}
