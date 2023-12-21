package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Services.AuthenticationService;
import com.nhom10.MagicPost.utils.AuthenticationRequest;
import com.nhom10.MagicPost.utils.AuthenticationResponse;
import com.nhom10.MagicPost.utils.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }
    @GetMapping("/confirm")
    public String confirm(@RequestParam("token") String token) {
        return service.confirmToken(token);
    }
    //login return a token
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

}
