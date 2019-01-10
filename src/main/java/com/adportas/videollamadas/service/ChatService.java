package com.adportas.videollamadas.service;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.Conversacion;
import com.adportas.videollamadas.domain.MensajeChat;
import com.adportas.videollamadas.domain.UsuarioChat;
import com.adportas.videollamadas.websocket.MensajeWebsocket;
import com.adportas.videollamadas.websocket.TipoMensaje;
import java.io.IOException;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author benjamin
 */
@Service
public class ChatService {

    @Autowired
    private WebsocketService websocketService;
    private final Map<Long, Conversacion> conversaciones = Collections.synchronizedMap(new HashMap());

    public void crearConversacion(Conversacion conversacion) {
        conversaciones.put(conversacion.getId(), conversacion);
    }

    public void enviarMensaje(long conversacionId, MensajeChat mensaje) throws IOException {
        Conversacion conversacion = conversaciones.get(conversacionId);
        if (conversacion != null) {
            MensajeWebsocket<MensajeChat> msgSocket = new MensajeWebsocket<>(new Date(), TipoMensaje.TIMEOUT_LLAMADA, mensaje);
            for (UsuarioChat participante : conversacion.getParticipantes()) {
                ContactoAgente contacto = websocketService.findContactoAgenteByUsuarioChat(participante.getId());
                if(contacto!= null) {
                    websocketService.sendMessage(contacto, msgSocket);
                }
            }
        }
    }

    public Conversacion buscarConversacionById(long id) {
        return conversaciones.get(id);
    }

    public Conversacion buscarConversacionByUsuariosChat(long... usuarioChatIdArray) {
        Conversacion conversacion = null;
        for (Map.Entry<Long, Conversacion> entry : conversaciones.entrySet()) {
            List<UsuarioChat> participantes = entry.getValue().getParticipantes();
            boolean coincidencia = false;
            for (UsuarioChat usuario : participantes) {
                for (long idUsuario : usuarioChatIdArray) {
                    if (usuario.getId() == idUsuario) {
                        coincidencia = true;
                        break;
                    }
                }
                if (!coincidencia) {
                    break;
                }
            }
            if (coincidencia) {
                conversacion = entry.getValue();
                break;
            }
        }
        return conversacion;
    }

}
