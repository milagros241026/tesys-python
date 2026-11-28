package com.paginaweb.back.Auth;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        String username = req.username() == null ? "" : req.username().trim();
        if (username.isEmpty()) {
            return ResponseEntity.status(401).body(Map.of("message", "Ingresa un usuario"));
        }

        UserDetails user = User.withUsername(username)
                .password("{noop}demo")
                .roles("USER")
                .build();
        String token = jwtService.generateToken(user);
        return ResponseEntity.ok(Map.of(
                "token", token,
                "username", user.getUsername(),
                "expiresInMs", 3600_000L));
    }

    public record LoginRequest(String username, String password) {
    }
}
