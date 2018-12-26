
package com.adportas.videollamadas.datasource.interfaces;

import com.adportas.videollamadas.domain.ContactoAgente;
import java.util.List;

/**
 *
 * @author benjamin
 */
public interface IContactoAgenteDAO {
    
    ContactoAgente readById(int id);    
    List<ContactoAgente> readAll();
    
}
