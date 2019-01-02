
package com.adportas.videollamadas.exceptions;

/**
 *
 * @author benjamin
 */
public class VideollamadasException extends RuntimeException{

    public VideollamadasException(String message) {
        super(message);
    }

    public VideollamadasException(String message, Throwable cause) {
        super(message, cause);
    }

    public VideollamadasException(Throwable cause) {
        super(cause);
    }

}
