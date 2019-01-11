package com.adportas.videollamadas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 * @author benjamin
 */
@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("POST", "GET", "PUT", "DELETE", "HEAD", "OPTIONS")
                        .allowCredentials(true)
                        .allowedHeaders(
                                "Origin",
                                "Accept",
                                "x-auth-token",
                                "Content-Type",
                                "Access-Control-Request-Method",
                                "Access-Control-Request-Headers"
                        );
            }
        };
    }
}
