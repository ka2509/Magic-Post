package com.nhom10.MagicPost.utils;

import com.nhom10.MagicPost.Model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

import static io.jsonwebtoken.Jwts.jwsHeader;

/**
 * @author Do Quang Anh
 */

@Service
public class JwtService {
    private static final String SECRET_KEY = "quanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1stquanganhdepzaino1st";

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 1000))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public boolean isTokenValid(String token, UserDetails user) {
        final String username = user.getUsername();
        return (username.equals(getUsernameFromToken(token)));
    }


//    private Claims extractAllClaims(String token) {
//        return Jwts
//                .parserBuilder()
//                .setSigningKey(SECRET_KEY)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//    }
}
