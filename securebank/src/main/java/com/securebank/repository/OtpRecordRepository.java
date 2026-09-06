package com.securebank.repository;

import com.securebank.model.OtpRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface OtpRecordRepository extends JpaRepository<OtpRecord, Long> {
    Optional<OtpRecord> findTopByCustomerIdAndOtpPurposeAndUsedFalseAndExpiresAtAfterOrderByCreatedAtDesc(
            String customerId, OtpRecord.OtpPurpose purpose, LocalDateTime now);
    
    @Modifying
    @Transactional
    @Query("UPDATE OtpRecord o SET o.used = true WHERE o.customerId = :customerId AND o.otpPurpose = :purpose")
    void invalidateAllOtps(String customerId, OtpRecord.OtpPurpose purpose);
    
    @Modifying
    @Transactional
    @Query("DELETE FROM OtpRecord o WHERE o.expiresAt < :now")
    void deleteExpiredOtps(LocalDateTime now);
}
