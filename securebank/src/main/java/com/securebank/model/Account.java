package com.securebank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "accounts")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "account_number", unique = true, nullable = false, length = 10)
    private String accountNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_type", nullable = false)
    private AccountType accountType;

    @Column(name = "balance", nullable = false, precision = 15, scale = 2)
    @Builder.Default
    private BigDecimal balance = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    @Builder.Default
    private AccountStatus status = AccountStatus.ACTIVE;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnore
    private Customer customer;

    @Column(name = "branch_code", nullable = false)
    private String branchCode;

    @Column(name = "ifsc_code", nullable = false)
    private String ifscCode;

    @Column(name = "opening_date", nullable = false, updatable = false)
    private LocalDateTime openingDate;

    @Column(name = "minimum_balance", nullable = false, precision = 10, scale = 2)
    private BigDecimal minimumBalance;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Card> cards;

    @PrePersist
    protected void onCreate() {
        openingDate = LocalDateTime.now();
    }

    public enum AccountType {
        SAVINGS, CURRENT, CORPORATE
    }

    public enum AccountStatus {
        ACTIVE, BLOCKED, CLOSED
    }
}
