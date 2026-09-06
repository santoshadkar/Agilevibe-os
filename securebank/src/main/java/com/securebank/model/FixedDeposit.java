package com.securebank.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "fixed_deposits")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FixedDeposit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fd_number", unique = true, nullable = false)
    private String fdNumber; // FD + 8-digit number

    @Column(name = "principal_amount", nullable = false, precision = 12, scale = 2)
    private BigDecimal principalAmount;

    @Column(name = "interest_rate", nullable = false, precision = 5, scale = 2)
    private BigDecimal interestRate;

    @Column(name = "tenure_months", nullable = false)
    private Integer tenureMonths;

    @Column(name = "maturity_amount", nullable = false, precision = 12, scale = 2)
    private BigDecimal maturityAmount;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "maturity_date", nullable = false)
    private LocalDate maturityDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    @Builder.Default
    private FDStatus status = FDStatus.ACTIVE;

    @Column(name = "premature_withdrawal_penalty", precision = 5, scale = 2)
    @Builder.Default
    private BigDecimal prematureWithdrawalPenalty = new BigDecimal("1.00"); // 1% penalty

    @Column(name = "actual_maturity_amount", precision = 12, scale = 2)
    private BigDecimal actualMaturityAmount; // filled on closure

    @Column(name = "closure_date")
    private LocalDateTime closureDate;

    @Column(name = "closure_reason")
    private String closureReason;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public enum FDStatus {
        ACTIVE, MATURED, CLOSED_PREMATURELY
    }
}
