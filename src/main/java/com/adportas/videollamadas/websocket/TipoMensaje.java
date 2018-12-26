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
    VIDEO_LLAMADA,
    /**
     * indica que un cliente se registra en el servidor de videollamadas.
     */
    REGISTRO_USUARIO,
    /**
     * Indica que el usuario que realiza la llamada , la cancela.
     */
    CANCELAR_LLAMADA,
    /**
     * Indica que el cliente que recibe una videollamada rechaza atenderal.
     */
    RECHAZAR_LLAMADA,
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
    ESTABLECER_VIDEOLLAMADA;
    
    
}
