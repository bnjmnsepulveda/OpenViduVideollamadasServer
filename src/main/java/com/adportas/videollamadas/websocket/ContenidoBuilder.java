
package com.adportas.videollamadas.websocket;

import java.util.HashMap;
import java.util.Map;

/**
 * Clase de ayuda para construir el contenido de un mensaje 
 * websocket {@link com.adportas.videollamadas.websocket.MensajeWebsocket}.
 * 
 * @author benjamin
 */
public class ContenidoBuilder {

    private final Map<String, Object> contenido = new HashMap();
    
    /**
     * Agrega una objeto al contenido y devuelve la instancia del contenido 
     * para poder agregar otra propiedad.
     * @param key
     * @param property
     * @return 
     */
    public ContenidoBuilder agrearPropiedad(String key, Object property){
        contenido.put(key, property);
        return this;
    }
    
    /**
     * Devuelve un {@link java.util.Map} con las propiedades personalizadas 
     * de contenido.
     * @return 
     */
    public Map buildContenido() {
        return contenido;
    }
}
