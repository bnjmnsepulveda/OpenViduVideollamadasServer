package com.adportas.videollamadas.config;

import com.adportas.videollamadas.websocket.HandlerVideollamadas;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

/**
 *
 * @author benjamin
 */
@Configuration
@EnableWebSocket
public class WebsocketConfig implements WebSocketConfigurer {
    
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(gethandlerWebsocket(), "/chat")
                .setAllowedOrigins("*");
    }

    /**
     * Maneja los mensajes recibidos por clientes websockets.
     * @return 
     */
    @Bean
    public WebSocketHandler gethandlerWebsocket() {
        HandlerVideollamadas handler = new HandlerVideollamadas();
        return handler;
    }
    
}
