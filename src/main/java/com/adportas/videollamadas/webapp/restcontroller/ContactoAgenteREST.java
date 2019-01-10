package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.ContactoAgenteDAO;
import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.UsuarioChat;
import com.adportas.videollamadas.service.WebsocketService;
import java.util.List;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author benjamin
 */
@CrossOrigin
@RestController
@RequestMapping("/agente")
public class ContactoAgenteREST {

    @Autowired
    private ContactoAgenteDAO contactoAgenteDAO;
    @Autowired
    private WebsocketService websocketService;
    private static final Logger logger = LogManager.getLogger(ContactoAgenteREST.class);

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ContactoAgente getAgentebyId(@PathVariable("id") int id) {
        ContactoAgente contacto = contactoAgenteDAO.readById(id);
        // --- crear usuario chat en memoria ---
        UsuarioChat usuarioChat = new UsuarioChat();
        usuarioChat.setId(contacto.getId());
        usuarioChat.setEnLinea(true);
        usuarioChat.setHabilitado(true);
        usuarioChat.setRol("agente");
        usuarioChat.setUsername(contacto.getUsuarioOperkall());
        contacto.setUsuarioChat(usuarioChat);
        return contacto;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<ContactoAgente> getAgentes() {
        List<ContactoAgente> contactos = contactoAgenteDAO.readAll();
        List<ContactoAgente> contactosEnLinea = websocketService.findContactosEnLinea();
        contactos.forEach(contacto -> {
            // --- crear usuario chat en memoria ---
            UsuarioChat usuarioChat = new UsuarioChat();
            usuarioChat.setId(contacto.getId());
            usuarioChat.setEnLinea(true);
            usuarioChat.setHabilitado(true);
            usuarioChat.setRol("agente");
            usuarioChat.setUsername(contacto.getUsuarioOperkall());
            contacto.setUsuarioChat(usuarioChat);
            // --- setear estado enlinea ---
            if (contactosEnLinea.contains(contacto)) {
                logger.info(contacto.getUsuarioOperkall() + " en linea");
                contacto.setEnLinea(true);
            }
        });
        return contactos;
    }

}
