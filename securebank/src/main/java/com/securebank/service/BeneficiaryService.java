package com.securebank.service;

import com.securebank.dto.request.AddBeneficiaryRequest;
import com.securebank.dto.response.ApiResponse;
import com.securebank.dto.response.BeneficiaryResponse;
import com.securebank.model.Beneficiary;
import com.securebank.model.Customer;
import com.securebank.repository.BeneficiaryRepository;
import com.securebank.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BeneficiaryService {

    private final BeneficiaryRepository beneficiaryRepository;
    private final CustomerRepository customerRepository;

    @Value("${app.bank.ifsc}")
    private String bankIfsc;

    @Transactional
    public ApiResponse<BeneficiaryResponse> addBeneficiary(AddBeneficiaryRequest request, String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        if (beneficiaryRepository.existsByCustomerAndAccountNumber(customer, request.getAccountNumber())) {
            throw new IllegalStateException("Beneficiary with this account number already exists");
        }

        Beneficiary.BeneficiaryType type = request.getIfscCode().equalsIgnoreCase(bankIfsc) ?
                Beneficiary.BeneficiaryType.INTERNAL : Beneficiary.BeneficiaryType.EXTERNAL;

        Beneficiary beneficiary = Beneficiary.builder()
                .beneficiaryName(request.getBeneficiaryName())
                .accountNumber(request.getAccountNumber())
                .ifscCode(request.getIfscCode())
                .bankName(request.getBankName())
                .nickname(request.getNickname())
                .beneficiaryType(type)
                .customer(customer)
                .build();

        beneficiaryRepository.save(beneficiary);

        return ApiResponse.success("Beneficiary added", mapToResponse(beneficiary));
    }

    public List<BeneficiaryResponse> getBeneficiaries(String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        return beneficiaryRepository.findByCustomerAndActiveTrue(customer).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public ApiResponse<String> removeBeneficiary(Long beneficiaryId, String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        Beneficiary beneficiary = beneficiaryRepository.findByIdAndCustomer(beneficiaryId, customer)
                .orElseThrow(() -> new IllegalArgumentException("Beneficiary not found or unauthorized"));

        beneficiary.setActive(false);
        beneficiaryRepository.save(beneficiary);

        return ApiResponse.success("Beneficiary removed successfully", "OK");
    }

    private BeneficiaryResponse mapToResponse(Beneficiary b) {
        return BeneficiaryResponse.builder()
                .id(b.getId())
                .beneficiaryName(b.getBeneficiaryName())
                .accountNumber(b.getAccountNumber())
                .ifscCode(b.getIfscCode())
                .bankName(b.getBankName())
                .nickname(b.getNickname())
                .beneficiaryType(b.getBeneficiaryType().name())
                .addedDate(b.getAddedDate())
                .build();
    }
}
