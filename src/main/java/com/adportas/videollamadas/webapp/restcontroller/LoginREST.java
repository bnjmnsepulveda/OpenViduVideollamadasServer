
package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.ContactoAgenteDAO;
import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.domain.UsuarioChat;
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
@RequestMapping("login")
public class LoginREST {

    @Autowired
    private ContactoAgenteDAO contactoAgenteDAO;
    
    @GetMapping(path = "/cckall/{id}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ContactoAgente loginCCKALL(@PathVariable("id") int id){
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
    
}
