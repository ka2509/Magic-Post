package com.nhom10.MagicPost.Controller;

import com.nhom10.MagicPost.Services.AuthenticationService;
import com.nhom10.MagicPost.utils.AuthenticationRequest;
import com.nhom10.MagicPost.utils.AuthenticationResponse;
import com.nhom10.MagicPost.utils.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author Do Quang Anh
 */

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"})
public class AuthenticationController {

    private final AuthenticationService service;

    //register
    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    //confirm email  by sending an localhost link to the email registed
    @GetMapping("/confirm")
    public String confirm(@RequestParam("token") String token) {
        return service.confirmToken(token);
    }

    //login return a token
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        if (service.authenticate(request).getToken() == null) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(service.authenticate(request));
    }

}
