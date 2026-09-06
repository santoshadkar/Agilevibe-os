package com.securebank.dto.request;

import com.securebank.model.ScheduledBillPayment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleBillRequest {
    private String billerName;
    private ScheduledBillPayment.BillCategory category;
    private BigDecimal amount;
    private LocalDate scheduledDate;
}
