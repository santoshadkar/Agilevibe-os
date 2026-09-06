package com.securebank.controller;

import com.securebank.dto.request.*;
import com.securebank.dto.response.*;
import com.securebank.service.TransactionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/transaction")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/transfer")
    public ResponseEntity<ApiResponse<TransactionResponse>> transfer(
            @Valid @RequestBody TransferRequest request,
            Authentication auth) {
        return ResponseEntity.ok(transactionService.transferFunds(request, auth.getName()));
    }

    @PostMapping("/bill/pay")
    public ResponseEntity<ApiResponse<TransactionResponse>> payBill(
            @Valid @RequestBody BillPaymentRequest request,
            Authentication auth) {
        return ResponseEntity.ok(transactionService.payBill(request, auth.getName()));
    }
}
