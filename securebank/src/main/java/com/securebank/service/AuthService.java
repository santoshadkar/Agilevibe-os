package com.securebank.service;

import com.securebank.dto.request.*;
import com.securebank.dto.response.ApiResponse;
import com.securebank.dto.response.AuthResponse;
import com.securebank.model.Account;
import com.securebank.model.Customer;
import com.securebank.model.OtpRecord;
import com.securebank.model.Transaction;
import com.securebank.repository.AccountRepository;
import com.securebank.repository.CustomerRepository;
import com.securebank.repository.TransactionRepository;
import com.securebank.security.JwtService;
import com.securebank.security.SessionManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    @Value("${app.bank.ifsc}")
    private String bankIfsc;

    @Value("${app.bank.branch.code}")
    private String bankBranchCode;

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final AccountNumberGenerator generator;
    private final PasswordEncoder passwordEncoder;
    private final OtpService otpService;
    private final EmailService emailService;
    private final CardService cardService;
    private final JwtService jwtService;
    private final SessionManager sessionManager;

    @Transactional
    public ApiResponse<Map<String, String>> register(RegisterRequest request) {
        if (customerRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already in use");
        }
        if (customerRepository.existsByPhone(request.getPhone())) {
            throw new IllegalArgumentException("Phone number already in use");
        }
        if (customerRepository.existsByPanNumber(request.getPanNumber())) {
            throw new IllegalArgumentException("PAN number already registered");
        }
        if (customerRepository.existsByAadharNumber(request.getAadharNumber())) {
            throw new IllegalArgumentException("Aadhaar number already registered");
        }

        Customer customer = Customer.builder()
                .customerId(generator.generateCustomerId())
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .dateOfBirth(request.getDateOfBirth())
                .address(request.getAddress())
                .city(request.getCity())
                .state(request.getState())
                .pincode(request.getPincode())
                .panNumber(request.getPanNumber())
                .aadharNumber(request.getAadharNumber())
                .occupation(request.getOccupation())
                .annualIncome(request.getAnnualIncome())
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .build();
        customerRepository.save(customer);

        Account.AccountType type = Account.AccountType.valueOf(request.getAccountType().toUpperCase());
        BigDecimal minBalance = switch (type) {
            case SAVINGS -> new BigDecimal("500.00");
            case CURRENT -> new BigDecimal("5000.00");
            case CORPORATE -> new BigDecimal("25000.00");
        };

        BigDecimal initialDeposit = BigDecimal.valueOf(request.getInitialDeposit());
        if (initialDeposit.compareTo(minBalance) < 0) {
            throw new IllegalArgumentException("Initial deposit must be at least " + minBalance);
        }

        Account account = Account.builder()
                .accountNumber(generator.generateAccountNumber())
                .accountType(type)
                .balance(initialDeposit)
                .minimumBalance(minBalance)
                .customer(customer)
                .branchCode(bankBranchCode)
                .ifscCode(bankIfsc)
                .build();
        accountRepository.save(account);

        cardService.issueCards(account);

        Transaction txn = Transaction.builder()
                .transactionId(generator.generateTransactionId())
                .transactionType(Transaction.TransactionType.ACCOUNT_OPENING)
                .fromAccount("CASH")
                .toAccount(account.getAccountNumber())
                .amount(initialDeposit)
                .description("Initial Deposit")
                .balanceAfter(account.getBalance())
                .account(account)
                .build();
        transactionRepository.save(txn);

        emailService.sendWelcomeEmail(customer.getEmail(), customer.getFullName(), customer.getCustomerId(), account.getAccountNumber());

        return ApiResponse.success("Registration successful", Map.of(
                "customerId", customer.getCustomerId(),
                "accountNumber", account.getAccountNumber()
        ));
    }

    @Transactional
    public ApiResponse<AuthResponse> loginStep1(LoginStep1Request request) {
        Customer customer = customerRepository.findByCustomerId(request.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));

        if (!customer.isActive()) {
            throw new SecurityException("Account is locked");
        }

        if (!passwordEncoder.matches(request.getPassword(), customer.getPasswordHash())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        String otpCode = otpService.generateAndSendOtp(customer, OtpRecord.OtpPurpose.LOGIN);

        return ApiResponse.success("OTP sent", AuthResponse.builder()
                .success(true)
                .message("OTP sent to registered email")
                .customerId(customer.getCustomerId())
                .customerName(customer.getFullName())
                .step("OTP_SENT")
                .devOtp(otpCode)
                .build());
    }

    @Transactional
    public ApiResponse<AuthResponse> loginStep2(LoginStep2Request request) {
        Customer customer = customerRepository.findByCustomerId(request.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Invalid customer ID"));

        boolean isValid = otpService.validateOtp(customer.getCustomerId(), request.getOtp(), OtpRecord.OtpPurpose.LOGIN);
        if (!isValid) {
            throw new IllegalArgumentException("Invalid or expired OTP");
        }

        UserDetails userDetails = User.builder()
                .username(customer.getCustomerId())
                .password(customer.getPasswordHash())
                .roles("CUSTOMER")
                .build();

        String token = jwtService.generateToken(userDetails);
        sessionManager.registerSession(customer.getCustomerId(), token);

        return ApiResponse.success("Login successful", AuthResponse.builder()
                .success(true)
                .token(token)
                .customerId(customer.getCustomerId())
                .customerName(customer.getFullName())
                .step("AUTHENTICATED")
                .build());
    }

    @Transactional
    public ApiResponse<String> forgotPassword(String email) {
        Customer customer = customerRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Email not found"));

        otpService.generateAndSendOtp(customer, OtpRecord.OtpPurpose.PASSWORD_RESET);
        return ApiResponse.success("Password reset OTP sent", "OTP_SENT");
    }

    @Transactional
    public ApiResponse<String> resetPassword(ResetPasswordRequest request) {
        Customer customer = customerRepository.findByCustomerId(request.getCustomerId())
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        boolean isValid = otpService.validateOtp(customer.getCustomerId(), request.getOtp(), OtpRecord.OtpPurpose.PASSWORD_RESET);
        if (!isValid) {
            throw new IllegalArgumentException("Invalid or expired OTP");
        }

        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }

        customer.setPasswordHash(passwordEncoder.encode(request.getNewPassword()));
        customerRepository.save(customer);

        return ApiResponse.success("Password reset successful", "OK");
    }

    @Transactional
    public ApiResponse<String> logout(String token) {
        String customerId = jwtService.extractUsername(token);
        if (customerId != null) {
            sessionManager.invalidateSession(customerId);
        }
        return ApiResponse.success("Logged out successfully", "OK");
    }
}
