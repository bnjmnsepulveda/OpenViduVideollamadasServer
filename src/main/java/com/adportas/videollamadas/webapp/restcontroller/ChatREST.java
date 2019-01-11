package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.UsuarioChatDAO;
import com.adportas.videollamadas.domain.Conversacion;
import com.adportas.videollamadas.domain.UsuarioChat;
import com.adportas.videollamadas.service.ChatService;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author benjamin
 */
@CrossOrigin
@RestController
@RequestMapping("mensajeria")
public class ChatREST {

    @Autowired
    private ChatService chatService;
    @Autowired
    private UsuarioChatDAO usuarioChatDAO;
    private static final Logger logger = LogManager.getLogger(ChatREST.class);

    @GetMapping(path = "/conversacion", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Conversacion getConversacionByUsuariosId(HttpServletRequest request, @RequestParam(value = "usuarioId") long[] usuariosId) {
        logger.info("peticion: " + request.getServletPath());
        Conversacion c = chatService.buscarConversacionByUsuariosChat(usuariosId);
        if (c == null) {
            logger.info("no se encontro conversacion, se creara 1");
            c = new Conversacion();
            List<UsuarioChat> participantes = new ArrayList();
            for (long id : usuariosId) {
                participantes.add(usuarioChatDAO.readById(id));
            }
            c.setParticipantes(participantes);
            c.setId(System.currentTimeMillis());
            c.setTitulo("Conversacion agente a agente");
            chatService.crearConversacion(c);
        }
        return c;
    }
}
