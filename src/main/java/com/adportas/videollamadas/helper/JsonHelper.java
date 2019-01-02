
package com.adportas.videollamadas.helper;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.lang.reflect.Type;

/**
 *
 * @author benjamin
 */
public class JsonHelper {

    private static final Gson gson;
    private static final GsonBuilder gsonBuilder;
    
    static {
        gsonBuilder = new GsonBuilder();
        gsonBuilder.setPrettyPrinting();
        gson = gsonBuilder.create();
    }
    
    public static String convertirJson(Object entity){
        return gson.toJson(entity);
    }
    
    public static <T> T convertirObjeto(Class<T> objectClass,String json){
        return gson.fromJson(json, objectClass);
    }
    
    public static <T> T convertirObjeto(Type type,String json){
        return gson.fromJson(json, type);
    }
    
    public static Gson getGson() {
        return gson;
    }
    
}
