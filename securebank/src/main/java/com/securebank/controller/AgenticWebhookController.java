package com.securebank.controller;

import com.securebank.dto.request.FraudCheckWebhookRequest;
import com.securebank.dto.request.PaymentWebhookRequest;
import com.securebank.dto.response.AgentExecutionResponse;
import com.securebank.dto.response.ApiResponse;
import com.securebank.model.AgentAuditLog;
import com.securebank.repository.AgentAuditLogRepository;
import com.securebank.service.FraudGuardianAgentService;
import com.securebank.service.SmartTransferAgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/webhooks")
@RequiredArgsConstructor
public class AgenticWebhookController {

    private final SmartTransferAgentService smartTransferAgentService;
    private final FraudGuardianAgentService fraudGuardianAgentService;
    private final AgentAuditLogRepository auditLogRepository;

    @PostMapping("/payment-request")
    public ResponseEntity<ApiResponse<AgentExecutionResponse>> handlePaymentWebhook(
            @RequestBody PaymentWebhookRequest request) {
        AgentExecutionResponse response = smartTransferAgentService.processPaymentWebhook(request);
        return ResponseEntity.ok(ApiResponse.success("SmartTransferAgent Webhook Processed", response));
    }

    @PostMapping("/fraud-check")
    public ResponseEntity<ApiResponse<AgentExecutionResponse>> handleFraudWebhook(
            @RequestBody FraudCheckWebhookRequest request) {
        AgentExecutionResponse response = fraudGuardianAgentService.analyzeAndIntervene(request);
        return ResponseEntity.ok(ApiResponse.success("FraudGuardianAgent Webhook Processed", response));
    }

    @GetMapping("/audit-logs")
    public ResponseEntity<ApiResponse<List<AgentAuditLog>>> getAuditLogs() {
        return ResponseEntity.ok(ApiResponse.success("Agent Audit Logs", auditLogRepository.findTop20ByOrderByTimestampDesc()));
    }
}
