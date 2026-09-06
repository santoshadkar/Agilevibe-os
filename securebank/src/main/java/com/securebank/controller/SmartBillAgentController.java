package com.securebank.controller;

import com.securebank.dto.request.ScheduleBillRequest;
import com.securebank.dto.response.ApiResponse;
import com.securebank.model.ScheduledBillPayment;
import com.securebank.service.SmartBillSchedulerAgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai/scheduled-bills")
@RequiredArgsConstructor
public class SmartBillAgentController {

    private final SmartBillSchedulerAgentService billSchedulerAgentService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<ScheduledBillPayment>> scheduleBill(
            @RequestBody ScheduleBillRequest request,
            Authentication auth) {
        String customerId = (auth != null && auth.getName() != null) ? auth.getName() : "anonymousUser";
        ScheduledBillPayment scheduled = billSchedulerAgentService.scheduleBill(
                customerId,
                request.getBillerName(),
                request.getCategory(),
                request.getAmount(),
                request.getScheduledDate()
        );
        return ResponseEntity.ok(ApiResponse.success("Bill scheduled successfully for AI auto-payment", scheduled));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ScheduledBillPayment>>> getScheduledBills(Authentication auth) {
        String customerId = (auth != null && auth.getName() != null) ? auth.getName() : "anonymousUser";
        return ResponseEntity.ok(ApiResponse.success("Scheduled bills loaded", billSchedulerAgentService.getCustomerScheduledBills(customerId)));
    }

    @PostMapping("/{id}/execute-now")
    public ResponseEntity<ApiResponse<ScheduledBillPayment>> executeNow(
            @PathVariable Long id,
            Authentication auth) {
        String customerId = (auth != null && auth.getName() != null) ? auth.getName() : "anonymousUser";
        ScheduledBillPayment executed = billSchedulerAgentService.executeBillNow(id, customerId);
        return ResponseEntity.ok(ApiResponse.success("Autonomous AI execution complete", executed));
    }
}
