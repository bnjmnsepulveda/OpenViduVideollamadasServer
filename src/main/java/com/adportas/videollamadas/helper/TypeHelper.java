package com.adportas.videollamadas.helper;

import com.adportas.videollamadas.domain.ContactoAgente;
import com.adportas.videollamadas.websocket.MensajeWebsocket;
import com.adportas.videollamadas.websocket.mensajes.MensajeCancelarLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeContestarLLamada;
import com.adportas.videollamadas.websocket.mensajes.MensajeSimple;
import com.adportas.videollamadas.websocket.mensajes.MensajeVideoLLamada;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;

/**
 * Clase de ayuda para obtener el {@link Type} del MensajeWebsocket<T>
 * para parsear Objetos Json con Genericos.
 *
 * @author benjamin
 */
public class TypeHelper {

    public static Type getRegistroUsuario() {
        Type type = new TypeToken<MensajeWebsocket<ContactoAgente>>() {
        }.getType();
        return type;
    }

    public static Type getMensajeVideoLLamada() {
        Type type = new TypeToken<MensajeWebsocket<MensajeVideoLLamada>>() {
        }.getType();
        return type;
    }

    public static Type getContestarVideoLLamada() {
        Type type = new TypeToken<MensajeWebsocket<MensajeContestarLLamada>>() {
        }.getType();
        return type;
    }

    public static Type getCancelarVideoLLamada() {
        Type type = new TypeToken<MensajeWebsocket<MensajeCancelarLLamada>>() {
        }.getType();
        return type;
    }

    public static Type getMensajeSimple() {
        Type type = new TypeToken<MensajeWebsocket<MensajeSimple>>() {
        }.getType();
        return type;
    }

}
