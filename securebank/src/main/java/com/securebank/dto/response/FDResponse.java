package com.securebank.dto.response;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FDResponse {
    private Long id;
    private String fdNumber;
    private BigDecimal principalAmount;
    private BigDecimal interestRate;
    private Integer tenureMonths;
    private BigDecimal maturityAmount;
    private LocalDate startDate;
    private LocalDate maturityDate;
    private String status;
    private BigDecimal prematureWithdrawalPenalty;
    private BigDecimal actualMaturityAmount;
    private String accountNumber;
    private long daysRemaining;
}
