package com.adportas.videollamadas.domain;

import com.adportas.videollamadas.enumerated.EstadoVideoLLamada;
import io.openvidu.java.client.Session;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author benjamin
 */
public class SesionVideollamada {

    private String videollamadaId;
    private Session session;
    /**
     * Contiene una lista de participantes y los token de sesion openvidu de
     * videollamadas asignados.
     */
    private Map<String, ContactoAgente> participantes;
    private EstadoVideoLLamada estado;
    
    /**
     * Agrega un participante a una videollamada con su respectivo token de sesion openvidu.
     * @param token
     * @param contacto 
     */
    public void agregarParticipante(String token, ContactoAgente contacto) {
        if(participantes == null) {
            participantes = new HashMap();
        }
        participantes.put(token, contacto);
    }

    /**
     * devuelve los participantes de una videollmada con sus respectivos token de sesion openvidu.
     * @return 
     */
    public Map<String, ContactoAgente> getParticipantes() {
        return participantes;
    }

    public void setParticipantes(Map<String, ContactoAgente> participantes) {
        this.participantes = participantes;
    }

    public EstadoVideoLLamada getEstado() {
        return estado;
    }

    public void setEstado(EstadoVideoLLamada estado) {
        this.estado = estado;
    }

    public String getVideollamadaId() {
        return videollamadaId;
    }

    public void setVideollamadaId(String videollamadaId) {
        this.videollamadaId = videollamadaId;
    }
    
    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

}
