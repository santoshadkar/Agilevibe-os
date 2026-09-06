package com.securebank.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {
    private String customerName;
    private String customerId;
    private String email;
    private String phone;

    // Account info
    private String accountNumber;
    private String accountType;
    private String accountStatus;
    private BigDecimal balance;
    private LocalDateTime accountOpeningDate;
    private String ifscCode;
    private String branchCode;

    // Card details
    private CardDetail debitCard;
    private CardDetail creditCard;

    // Recent transactions
    private List<TransactionResponse> recentTransactions;

    // FD summary
    private int activeFdCount;
    private BigDecimal totalFdAmount;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CardDetail {
        private String maskedCardNumber; // **** **** **** 1234
        private String cardHolderName;
        private String expiryDate; // MM/YY
        private String cardType;
        private boolean active;
        private BigDecimal creditLimit; // only for credit card
        private BigDecimal outstandingBalance; // only for credit card
    }
}
