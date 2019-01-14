
package com.adportas.videollamadas.websocket;

import java.util.HashMap;
import java.util.Map;

/**
 * Clase de ayuda para crear un mensaje 
 * {@link com.adportas.videollamadas.websocket.MensajeWebsocket} con 
 * contenido dinamico.
 * @author benjamin
 */
public class MensajeWebsocketBuilder {

    private final MensajeWebsocket mensajeWebsocket;
    private final Map<String, Object> contenido = new HashMap();

    public MensajeWebsocketBuilder(TipoMensaje tipoMensaje) {
        mensajeWebsocket = new MensajeWebsocket(tipoMensaje);
    }
    
    /**
     * Agrega una objeto al contenido y devuelve la instancia del contenido 
     * para poder agregar otra propiedad.
     * @param key
     * @param property
     * @return 
     */
    public MensajeWebsocketBuilder agregar(String key, Object property){
        contenido.put(key, property);
        return this;
    }
    
    public MensajeWebsocket build() {
        mensajeWebsocket.setContenido(contenido);
        return mensajeWebsocket;
    }
}
