
package com.adportas.videollamadas.datasource;

import com.adportas.videollamadas.domain.UsuarioChat;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Repository;

/**
 *
 * @author benjamin
 */
@Repository
public class UsuarioChatDAO {

    private final Map<Long,UsuarioChat> usuarios = Collections.synchronizedMap(new HashMap());
    
    public void create(UsuarioChat usuarioChat){
        usuarios.put(usuarioChat.getId(), usuarioChat);
    }
    
    public UsuarioChat readById(long id){
        return usuarios.get(id);
    }
    
    
}
