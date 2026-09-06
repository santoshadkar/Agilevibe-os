package com.securebank.controller;

import com.securebank.dto.request.ManyaChatRequest;
import com.securebank.dto.response.ApiResponse;
import com.securebank.dto.response.ManyaChatResponse;
import com.securebank.service.ManyaAgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/manya")
@RequiredArgsConstructor
public class ManyaChatController {

    private final ManyaAgentService manyaAgentService;

    @GetMapping("/welcome")
    public ResponseEntity<ApiResponse<ManyaChatResponse>> getWelcome(
            @RequestParam(required = false) String contextPage,
            Authentication auth) {
        String customerId = (auth != null) ? auth.getName() : null;
        ManyaChatResponse response = manyaAgentService.getInitialGreeting(customerId, contextPage);
        return ResponseEntity.ok(ApiResponse.success("Manya initial greeting", response));
    }

    @PostMapping("/chat")
    public ResponseEntity<ApiResponse<ManyaChatResponse>> chat(
            @RequestBody ManyaChatRequest request,
            Authentication auth) {
        String customerId = (auth != null) ? auth.getName() : null;
        ManyaChatResponse response = manyaAgentService.processUserQuery(
                customerId,
                request.getMessage(),
                request.getContextPage()
        );
        return ResponseEntity.ok(ApiResponse.success("Manya chat processed", response));
    }
}
