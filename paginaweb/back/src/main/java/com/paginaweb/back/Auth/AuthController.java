package com.paginaweb.back.Auth;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired private AuthenticationManager authManager;
    @Autowired private UserDetailsService userDetailsService;
    @Autowired private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        authManager.authenticate(
            new UsernamePasswordAuthenticationToken(req.username(), req.password()));
        UserDetails user = userDetailsService.loadUserByUsername(req.username());
        String token = jwtService.generateToken(user);
        return ResponseEntity.ok(Map.of("token", token));
    }

    public record LoginRequest(String username, String password) {
    }
}
