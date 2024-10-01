package hu.kyberszittya.personal.backend.controller.auth;

import hu.kyberszittya.personal.backend.model.JwtResponse;
import hu.kyberszittya.personal.backend.model.LoginRequest;
import hu.kyberszittya.personal.backend.services.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService){
        this.jwtService = jwtService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
        System.out.println("Login request: " + request);
        if ("kyberszittya@protonmail.ch".equals(request.email()) && "password".equals(request.password())) {
            String token = jwtService.generateToken(request.email());
            return ResponseEntity.ok(new JwtResponse(token));
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }

    }
}
