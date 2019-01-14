package com.adportas.videollamadas.websocket;

/**
 * Indica el Tipo de Mensaje y que objeto tendria su contenido.
 *
 * @author benjamin
 */
public enum TipoMensaje {
    /**
     * indica que cliente inicia videollamada.
     */
    INICIAR_VIDEO_LLAMADA,
    /**
     * Indica que un cliente quiere establecer una videollamada con el usuario actual.
     */
    SOLICITUD_VIDEO_LLAMADA,
    /**
     * Indica el videollamadaId asignado a la llamada actual.
     */
    VIDEOLLAMADA_ID_ASIGNADO,
    /**
     * indica que un cliente se registra en el servidor de videollamadas.
     */
    REGISTRO_USUARIO,
    /**
     * se envia peticion para cancelar videollamada.
     */
    SOLICITUD_CANCELAR_LLAMADA,
    /**
     * Indica que el usuario que realiza la llamada , la cancela.
     */
    CANCELAR_LLAMADA,
    /**
     * Indica que el cliente que recibe una videollamada rechaza atenderla.
     */
    RECHAZAR_VIDEOLLAMADA,
    /**
     * Tiempo de espera terminado de una videollamada, el servidor elimina la
     * videollamada en memoria.
     */
    TIMEOUT_LLAMADA,
    /**
     * Indica que el cliente que recibe una videollamada ha contestado esta.
     */
    CONTESTAR_LLAMADA,
    /**
     * Indica que la videollamada se establecio en estado "EN_CURSO".
     */
    ESTABLECER_VIDEOLLAMADA,
    /**
     * Estblece el fin de la videollamada.
     */
    TERMINAR_VIDEOLLAMADA,
    /**
     * Token de sesion necesario en cliente web para establecer una sesion 
     * con Kurento server.
     */
    TOKEN_VIDEOLLAMADA,
    /**
     * Indica un error en servidor.
     */
    ERROR_SERVIDOR,
    /**
     * indica error en videollamada.
     */
    ERROR_VIDEOLLAMADA,
    /**
     * avisa que se debe actualizar la lista de contactos.
     */
    ACTUALIZAR_CONTACTOS,
    /**
     * Mensaje de chat recibido.
     */
    MENSAJE_CHAT,
    /**
     * notificacion de que un usuario esta escribiendo.
     */
    MENSAJE_ESCRIBIENDO;
}
