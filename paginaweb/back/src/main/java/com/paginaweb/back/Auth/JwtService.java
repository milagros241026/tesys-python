package com.paginaweb.back.Auth;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;

@Service
public class JwtService {
    private final SecretKey key = Jwts.SIG.HS256.key().build();

    public String generateToken(UserDetails user) {
        return Jwts.builder()
                .subject(user.getUsername())
                .claim("roles", user.getAuthorities())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 3600_000))
                .signWith(key)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser().verifyWith(key).build()
                .parseSignedClaims(token).getPayload().getSubject();
    }

    public boolean isValid(String token, UserDetails user) {
        String username = extractUsername(token);
        return username.equals(user.getUsername()) && !isExpired(token);
    }

    private boolean isExpired(String token) {
        Date expiration = Jwts.parser().verifyWith(key).build()
                .parseSignedClaims(token).getPayload().getExpiration();
        return expiration.before(new Date());
    }
}
