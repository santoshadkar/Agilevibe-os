package com.securebank.controller;

import com.securebank.dto.request.*;
import com.securebank.dto.response.*;
import com.securebank.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<?>> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login/step1")
    public ResponseEntity<ApiResponse<AuthResponse>> loginStep1(@Valid @RequestBody LoginStep1Request request) {
        return ResponseEntity.ok(authService.loginStep1(request));
    }

    @PostMapping("/login/step2")
    public ResponseEntity<ApiResponse<AuthResponse>> loginStep2(@Valid @RequestBody LoginStep2Request request) {
        return ResponseEntity.ok(authService.loginStep2(request));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<String>> forgotPassword(@RequestParam String email) {
        return ResponseEntity.ok(authService.forgotPassword(email));
    }

    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<String>> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        return ResponseEntity.ok(authService.resetPassword(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<String>> logout(@RequestHeader("Authorization") String authHeader) {
        String token = authHeader.substring(7);
        return ResponseEntity.ok(authService.logout(token));
    }

    @GetMapping("/session/validate")
    public ResponseEntity<ApiResponse<String>> validateSession() {
        // If filter passes, session is valid
        return ResponseEntity.ok(ApiResponse.success("Session valid", "OK"));
    }
}
