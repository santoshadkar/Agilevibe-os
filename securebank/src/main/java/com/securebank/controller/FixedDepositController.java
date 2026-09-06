package com.securebank.controller;

import com.securebank.dto.request.FDCreateRequest;
import com.securebank.dto.response.*;
import com.securebank.service.FixedDepositService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/fd")
@RequiredArgsConstructor
public class FixedDepositController {

    private final FixedDepositService fdService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<FDResponse>> createFD(
            @Valid @RequestBody FDCreateRequest request,
            Authentication auth) {
        return ResponseEntity.ok(fdService.createFD(request, auth.getName()));
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<ApiResponse<List<FDResponse>>> getFDs(
            @PathVariable String accountNumber,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponse.success("FDs retrieved",
                fdService.getFDsByAccount(accountNumber, auth.getName())));
    }

    @PostMapping("/close/{fdId}")
    public ResponseEntity<ApiResponse<FDResponse>> closeFD(
            @PathVariable Long fdId,
            Authentication auth) {
        return ResponseEntity.ok(fdService.closeFDPrematurely(fdId, auth.getName()));
    }

    @GetMapping("/rates")
    public ResponseEntity<ApiResponse<Map<String, BigDecimal>>> getInterestRates() {
        Map<String, BigDecimal> rates = Map.of(
            "1-5 months", new BigDecimal("4.5"),
            "6-11 months", new BigDecimal("5.5"),
            "12-23 months", new BigDecimal("6.5"),
            "24-35 months", new BigDecimal("7.0"),
            "36-59 months", new BigDecimal("7.25"),
            "60-120 months", new BigDecimal("7.5")
        );
        return ResponseEntity.ok(ApiResponse.success("Interest rates", rates));
    }
}
