
package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.datasource.ContactoAgenteDAO;
import com.adportas.videollamadas.domain.ContactoAgente;
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
    private static final Logger logger = LogManager.getLogger(ContactoAgenteREST.class);

    
    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ContactoAgente getAgentebyId(@PathVariable("id")int id){
        return contactoAgenteDAO.readById(id);
    }
    
    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<ContactoAgente> getAgentes(){
        return contactoAgenteDAO.readAll();
    }
    
}
