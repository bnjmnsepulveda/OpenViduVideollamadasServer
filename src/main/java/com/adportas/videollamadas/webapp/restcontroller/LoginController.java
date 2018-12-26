package com.adportas.videollamadas.webapp.restcontroller;

import com.adportas.videollamadas.webapp.response.LoginResponse;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.openvidu.java.client.OpenViduRole;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api-login")
public class LoginController {

	public class MyUser {

		String name;
		String pass;
		OpenViduRole role;

		public MyUser(String name, String pass, OpenViduRole role) {
			this.name = name;
			this.pass = pass;
			this.role = role;
		}
	}

	public static Map<String, MyUser> users = new ConcurrentHashMap<>();

	public LoginController() {
		users.put("publisher1", new MyUser("publisher1", "pass", OpenViduRole.PUBLISHER));
		users.put("publisher2", new MyUser("publisher2", "pass", OpenViduRole.PUBLISHER));
		users.put("subscriber", new MyUser("subscriber", "pass", OpenViduRole.SUBSCRIBER));
	}
 
        @RequestMapping(value = "/login2", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public LoginResponse login(@RequestParam("user")String user,@RequestParam("pass") String pass, HttpSession httpSession) throws ParseException {

		System.out.println("Logging in | user="+user +", pass=" + pass);
		// Retrieve params from POST body
		if (login(user, pass)) { // Correct user-pass
			// Validate session and return OK 
			// Value stored in HttpSession allows us to identify the user in future requests
			httpSession.setAttribute("loggedUser", user);
			return new LoginResponse("loggedUser=" + user, HttpStatus.OK.toString());
		} else { // Wrong user-pass
			// Invalidate session and return error
			httpSession.invalidate();
			return new LoginResponse("User/Pass incorrect", HttpStatus.UNAUTHORIZED.toString());
		}
	}

	@RequestMapping(value = "/logout", method = RequestMethod.POST)
	public ResponseEntity<Object> logout(HttpSession session) {
		System.out.println("'" + session.getAttribute("loggedUser") + "' has logged out");
		session.invalidate();
		return new ResponseEntity<>(HttpStatus.OK);
	}

	private boolean login(String user, String pass) {
		return (users.containsKey(user) && users.get(user).pass.equals(pass));
	}

}
