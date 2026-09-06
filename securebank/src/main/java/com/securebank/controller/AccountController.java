package com.securebank.controller;

import com.securebank.dto.response.*;
import com.securebank.service.AccountService;
import com.securebank.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;
    private final TransactionService transactionService;

    @GetMapping("/dashboard")
    public ResponseEntity<ApiResponse<DashboardResponse>> getDashboard(Authentication auth) {
        String customerId = auth.getName();
        return ResponseEntity.ok(ApiResponse.success("Dashboard loaded", accountService.getDashboard(customerId)));
    }

    @GetMapping("/statement/{accountNumber}")
    public ResponseEntity<ApiResponse<Page<TransactionResponse>>> getStatement(
            @PathVariable String accountNumber,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponse.success("Statement retrieved",
                accountService.getStatement(accountNumber, auth.getName(), page, size)));
    }

    @GetMapping("/transactions/{accountNumber}")
    public ResponseEntity<ApiResponse<List<TransactionResponse>>> getRecentTransactions(
            @PathVariable String accountNumber,
            Authentication auth) {
        return ResponseEntity.ok(ApiResponse.success("Transactions retrieved",
                transactionService.getRecentTransactions(accountNumber, auth.getName())));
    }
}
