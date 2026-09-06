package com.securebank.service;

import com.securebank.model.Customer;
import com.securebank.model.OtpRecord;
import com.securebank.repository.OtpRecordRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class OtpService {

    private final OtpRecordRepository otpRecordRepository;
    private final EmailService emailService;
    private final SecureRandom secureRandom = new SecureRandom();

    @Transactional
    public String generateAndSendOtp(Customer customer, OtpRecord.OtpPurpose purpose) {
        otpRecordRepository.invalidateAllOtps(customer.getCustomerId(), purpose);

        String otpCode = String.format("%06d", secureRandom.nextInt(1000000));
        
        OtpRecord otpRecord = OtpRecord.builder()
                .customerId(customer.getCustomerId())
                .email(customer.getEmail())
                .otpCode(otpCode)
                .otpPurpose(purpose)
                .expiresAt(LocalDateTime.now().plusMinutes(5))
                .build();
                
        otpRecordRepository.save(otpRecord);
        emailService.sendOtpEmail(customer.getEmail(), customer.getFullName(), otpCode, purpose.name());

        // ============================================================
        // CONSOLE FALLBACK: OTP is always printed here for easy testing
        // Check the IntelliJ Run console if email is not arriving
        // ============================================================
        log.info("\n\n*** SECUREBANK OTP ***\n" +
                 "Customer : {}\n" +
                 "Purpose  : {}\n" +
                 "OTP Code : {}\n" +
                 "Expires  : 5 minutes\n" +
                 "**********************\n",
                 customer.getFullName(), purpose, otpCode);

        return otpCode;
    }

    @Transactional
    public boolean validateOtp(String customerId, String otpCode, OtpRecord.OtpPurpose purpose) {
        Optional<OtpRecord> recordOpt = otpRecordRepository.findTopByCustomerIdAndOtpPurposeAndUsedFalseAndExpiresAtAfterOrderByCreatedAtDesc(
                customerId, purpose, LocalDateTime.now());

        if (recordOpt.isEmpty()) {
            log.warn("No valid OTP found for customer {} and purpose {}", customerId, purpose);
            return false;
        }

        OtpRecord otpRecord = recordOpt.get();

        if (otpRecord.getAttempts() >= 3) {
            otpRecord.setUsed(true); // invalidate it
            otpRecordRepository.save(otpRecord);
            log.warn("OTP attempts exceeded for customer {}", customerId);
            return false;
        }

        if (otpRecord.getOtpCode().equals(otpCode)) {
            otpRecord.setUsed(true);
            otpRecordRepository.save(otpRecord);
            return true;
        } else {
            otpRecord.setAttempts(otpRecord.getAttempts() + 1);
            otpRecordRepository.save(otpRecord);
            return false;
        }
    }
}
