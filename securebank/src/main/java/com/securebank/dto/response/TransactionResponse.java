package com.securebank.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionResponse {
    private String transactionId;
    private String transactionType;
    private String fromAccount;
    private String toAccount;
    private BigDecimal amount;
    private String description;
    private String beneficiaryName;
    private String status;
    private BigDecimal balanceAfter;
    private LocalDateTime timestamp;
    private boolean isCredit; // true if money came in
}
