package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.UsuarioChatDAO;
import com.adportas.videollamadas.domain.Conversacion;
import com.adportas.videollamadas.domain.MensajeChat;
import com.adportas.videollamadas.domain.UsuarioChat;
import com.adportas.videollamadas.service.ChatService;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author benjamin
 */
@RestController
@RequestMapping("/mensajeria")
public class ChatREST {

    @Autowired
    private ChatService chatService;
    @Autowired
    private UsuarioChatDAO usuarioChatDAO;
    private static final Logger logger = LogManager.getLogger(ChatREST.class);

    @GetMapping(path = "/conversacion", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Conversacion getConversacionByUsuariosId(HttpServletRequest request, @RequestParam(value = "usuarioId") long[] usuariosId) {
        logger.info("peticion: " + request.getContextPath());
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
    
    @PostMapping(path = "/conversacion/{id}/mensaje", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void enviarMensaje(HttpServletRequest request, @RequestBody MensajeChat mensajeChat, @PathVariable("id") long id) throws IOException{
        logger.info("peticion: " + request.getServletPath());
        this.chatService.enviarMensaje(id, mensajeChat);
    }
}
