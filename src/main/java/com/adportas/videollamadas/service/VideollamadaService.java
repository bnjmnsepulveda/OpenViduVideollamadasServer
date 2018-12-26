package com.adportas.videollamadas.service;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.SesionVideollamada;
import io.openvidu.java.client.OpenVidu;
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
        this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
    }

    public void registerSession(String sessionId, ContactoAgente contacto) {
        if (sessions.containsKey(sessionId)) {
            return;
        }
        try {
            SesionVideollamada sesion = new SesionVideollamada();
            String serverData = "{\"serverData\": \"" + contacto.getUsuarioOperkall() + "\"}";
            // --- Build tokenOptions object with the serverData and the role ---
            TokenOptions tokenOptions = new TokenOptions.Builder()
                    .data(serverData)
                    .role(OpenViduRole.MODERATOR)
                    .build();
            Session session = this.openVidu.createSession();// --- crear sesion en openvidu server ---
            String token = session.generateToken(tokenOptions);
            // --- crear objeto DTO para variables de sesion videollamada ---
            sesion.setContactoAgente(contacto);
            sesion.setSessionIdWebsocket(sessionId);
            sesion.setToken(token);
            sesion.setSession(session);
            sessions.put(sessionId, sesion);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    public void removeSession(String sessionId) {

    }
}
