
package com.adportas.videollamadas.webapp.response;

/**
 *
 * @author benjamin
 */
public class LoginResponse {

    String text;
    String status;

    public LoginResponse() {
    }

    public LoginResponse(String text, String status) {
        this.text = text;
        this.status = status;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
}
