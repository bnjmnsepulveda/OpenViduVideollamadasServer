package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.UsuarioChatDAO;
import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.Conversacion;
import com.adportas.videollamadas.domain.MensajeChat;
import com.adportas.videollamadas.domain.SesionVideollamada;
import com.adportas.videollamadas.domain.UsuarioChat;
import com.adportas.videollamadas.helper.JsonHelper;
import com.adportas.videollamadas.service.ChatService;
import com.adportas.videollamadas.service.VideollamadaService;
import com.adportas.videollamadas.websocket.ContenidoBuilder;
import com.adportas.videollamadas.websocket.MensajeWebsocket;
import com.adportas.videollamadas.websocket.MensajeWebsocketBuilder;
import com.adportas.videollamadas.websocket.TipoMensaje;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
    private VideollamadaService videollamadaService;
    @Autowired
    private UsuarioChatDAO usuarioChatDAO;
    private static final Logger logger = LogManager.getLogger(ChatREST.class);

    @GetMapping(path = "/test")
    public void testJson() {
        ContenidoBuilder contenido = new ContenidoBuilder();
        contenido.agregar("usuario", new UsuarioChat("chat", true, true, "usuario"));
        contenido.agregar("content-type", "json/application");
        contenido
                .agregar("username", "benjamin")
                .agregar("mascota", "chiripi")
                .agregar("text", "hola mundo");
        MensajeWebsocket msg = new MensajeWebsocket(TipoMensaje.MENSAJE_CHAT);
        msg.setContenido(contenido.buildContenido());
        MensajeWebsocketBuilder mensaje = new MensajeWebsocketBuilder(TipoMensaje.MENSAJE_CHAT);
        mensaje.agregar("username", "benjamin")
                .agregar("id", 2345);
        MensajeWebsocket msg2 = new MensajeWebsocket(TipoMensaje.MENSAJE_CHAT,"Soy un mensaje muy simple XD");
        System.out.println(JsonHelper.convertirJson(msg2));
        //System.out.println(JsonHelper.convertirJson(msg));
    }

    @GetMapping(path = "/conversacion", params = "usuarioId", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Conversacion getConversacionByUsuariosId(HttpServletRequest request, @RequestParam(value = "usuarioId") long[] usuariosId) {
        logger.info("peticion: " + request.getContextPath());
        Conversacion conversacion = chatService.buscarConversacionByUsuariosChat(usuariosId);
        if(conversacion == null) {
            logger.info("No existe conversacion asociada a los usuarios "+ Arrays.toString(usuariosId) + ", se creara nueva conversacion...");
            conversacion = chatService.crearConversacion(usuariosId);
        }
        return conversacion;
    }

    @GetMapping(path = "/conversacion/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Conversacion getConversacionById(@PathVariable("id") long id) {
        return chatService.buscarConversacionById(id);
    }
    
    @GetMapping(path = "/conversacion/videollamada/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Conversacion getConversacionByVideollamadaId(@PathVariable("id") String videollamadaId) {
        SesionVideollamada sesion = videollamadaService.buscarSesionVideollamada(videollamadaId);
        
        return null;
    }

    @GetMapping(path = "/conversacion", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Conversacion> getConversacionAll() {
        return chatService.buscarTodasLasCnversaciones();
    }

    @PostMapping(path = "/conversacion/{id}/mensaje", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void enviarMensaje(HttpServletRequest request, @RequestBody MensajeChat mensajeChat, @PathVariable("id") long id) throws IOException {
        logger.info("peticion: " + request.getServletPath());
        this.chatService.enviarMensaje(id, mensajeChat);
    }
    
    @PostMapping(path = "/conversacion/{idConversacion}/escribiendo/{idUsuarioChat}")
    public void escribiendoMensaje(@PathVariable("idConversacion") long idConversacion, @PathVariable("idUsuarioChat") long idUsuarioChat) throws IOException{
        logger.info("mensaje escribiendo de agente id=" + idUsuarioChat);
        UsuarioChat contacto = usuarioChatDAO.readById(idUsuarioChat);
        MensajeWebsocketBuilder builder = new MensajeWebsocketBuilder(TipoMensaje.MENSAJE_ESCRIBIENDO);
        builder.agregar("usuarioId", idUsuarioChat)
                .agregar("mensaje", contacto.getUsername() + " esta escribiendo...");
         chatService.enviarMensaje(idConversacion, builder.build());
    }

}
