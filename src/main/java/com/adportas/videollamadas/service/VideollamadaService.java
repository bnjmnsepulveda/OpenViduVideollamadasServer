package com.adportas.videollamadas.service;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.SesionVideollamada;
import com.adportas.videollamadas.enumerated.EstadoVideoLLamada;
import com.adportas.videollamadas.exceptions.VideollamadasException;
import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.OpenViduRole;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.TokenOptions;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 *
 * @author benjamin
 */
@Service
public class VideollamadaService {

    private final OpenVidu openVidu;
    // --- URL OPENVIDU AND SECRET WORD FOR AUTHENTICATION ---
    private final String OPENVIDU_URL;
    private final String SECRET;
    private final Map<String, SesionVideollamada> sessions = Collections.synchronizedMap(new HashMap());
    private static final Logger logger = LogManager.getLogger(VideollamadaService.class);

    public VideollamadaService(@Value("openvidu.url") String OPENVIDU_URL, @Value("openvidu.secret") String SECRET) {
        this.OPENVIDU_URL = OPENVIDU_URL;
        this.SECRET = SECRET;
        this.openVidu = new OpenVidu(this.OPENVIDU_URL, this.SECRET);
    }

    /**
     * Registra una videollamada que esta en peticion de ser contestada.
     *
     * @param videollamadaId identificador creado con la info de los
     * participantes de la videollamada.
     * @return
     */
    public boolean registrarVideollamada(String videollamadaId) {
        if (sessions.get(videollamadaId) == null) {
            SesionVideollamada sesionVideollamada = new SesionVideollamada();
            sesionVideollamada.setVideollamadaId(videollamadaId);
            sesionVideollamada.setEstado(EstadoVideoLLamada.PETICION);
            sessions.put(videollamadaId, sesionVideollamada);
            logger.info("Registro videollamada ok [id=" + videollamadaId + "], cantidad de sesiones " + sessions.size());
            return true;
        }
        return false;
    }

    /**
     * Crea una sesion OpenVidu para realizar la videollamada.
     *
     * @param videollamadaId
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     */
    public void crearSesionVideollamada(String videollamadaId) throws OpenViduJavaClientException, OpenViduHttpException {
        logger.info("crear sesion para videollamada [id=" + videollamadaId + "] sesiones cantidad = " + sessions.size());
        SesionVideollamada sesionVideollamada = sessions.get(videollamadaId);
        if (sesionVideollamada != null) {
            sesionVideollamada = new SesionVideollamada();
            Session session = this.openVidu.createSession();// --- crear sesion en openvidu server ---
            sesionVideollamada.setSession(session);
            sesionVideollamada.setVideollamadaId(videollamadaId);
            sesionVideollamada.setEstado(EstadoVideoLLamada.ESTABLECIDA);
            sessions.put(videollamadaId, sesionVideollamada);
            logger.info("Sesion OpenVidu creada y asociada a videollamada [id=" + videollamadaId + "], cantidad de sesiones " + sessions.size());
        }
    }

    /**
     * Crea un token de videollamada asociado a una videollamadaId.
     *
     * @param videollamadaId
     * @param contacto
     * @return
     * @throws OpenViduJavaClientException
     * @throws OpenViduHttpException
     */
    public String crearTokenVideollamada(String videollamadaId, ContactoAgente contacto) throws OpenViduJavaClientException, OpenViduHttpException {
        if (videollamadaId == null) {
            throw new NullPointerException("videollamadId esta en nulo");
        }
        SesionVideollamada sesionVideollamada = sessions.get(videollamadaId);
        if (sesionVideollamada == null) {
            throw new VideollamadasException("No se puede crear un token en una sesion de videollamada inexistente");
        }
        String serverData = "{\"serverData\": \"" + contacto.getUsuarioOperkall() + "\"}";
        // --- Build tokenOptions object with the serverData and the role ---
        TokenOptions tokenOptions = new TokenOptions.Builder()
                .data(serverData)
                .role(OpenViduRole.MODERATOR)
                .build();
        Session sesion = sesionVideollamada.getSession();
        String token = sesion.generateToken(tokenOptions);
        sesionVideollamada.agregarParticipante(token, contacto);
        sessions.put(videollamadaId, sesionVideollamada);
        logger.info("Token " + token + " asignado a videollamadaId [" + videollamadaId + "], cantidad de sesiones " + sessions.size());
        return token;
    }

    /**
     * Actualiza el estado de una videollamada.
     *
     * @param videollamadaId
     * @param estado
     * @return
     */
    public boolean actualizarEstadoVideollamada(String videollamadaId, EstadoVideoLLamada estado) {
        if (sessions.get(videollamadaId) != null) {
            sessions.get(videollamadaId).setEstado(estado);
            return true;
        }
        return false;
    }

    public SesionVideollamada buscarSesionVideollamada(String videollamadaId) {
        return sessions.get(videollamadaId);
    }

    public boolean isContactoDisponible(ContactoAgente contacto) {
        boolean disponible = true;
        return disponible;
    }

    public void removeSession(String videollamadaId) throws OpenViduJavaClientException, OpenViduHttpException {
        SesionVideollamada sesion = sessions.remove(videollamadaId);
        if (sesion.getSession() != null) {
            sesion.getSession().close();
        }
    }

    public void removeSessionByWebsocketSessionId(String sessionId) throws OpenViduJavaClientException, OpenViduHttpException {
        SesionVideollamada sesion = sessions.remove(sessionId);
        sesion.getSession().close();
    }

    public String generateVideollamadaId(long emisor, long receptor) {
        return "from_" + emisor + "_to_" + receptor + "_at_" + System.currentTimeMillis();
    }

    public int cantidadSesiones() {
        return sessions.size();
    }
}
