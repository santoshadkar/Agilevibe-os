package com.securebank.controller;

import com.securebank.dto.request.AddBeneficiaryRequest;
import com.securebank.dto.response.*;
import com.securebank.service.BeneficiaryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/beneficiary")
@RequiredArgsConstructor
public class BeneficiaryController {

    private final BeneficiaryService beneficiaryService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<BeneficiaryResponse>> addBeneficiary(
            @Valid @RequestBody AddBeneficiaryRequest request,
            Authentication auth) {
        return ResponseEntity.ok(beneficiaryService.addBeneficiary(request, auth.getName()));
    }

    @GetMapping("/list")
    public ResponseEntity<ApiResponse<List<BeneficiaryResponse>>> getBeneficiaries(Authentication auth) {
        return ResponseEntity.ok(ApiResponse.success("Beneficiaries retrieved",
                beneficiaryService.getBeneficiaries(auth.getName())));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> removeBeneficiary(
            @PathVariable Long id,
            Authentication auth) {
        return ResponseEntity.ok(beneficiaryService.removeBeneficiary(id, auth.getName()));
    }
}
