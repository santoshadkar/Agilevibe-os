package com.securebank.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentWebhookRequest {
    private String billerId;
    private String billerName;
    private BigDecimal amount;
    private String accountNumber;
    private String customerEmail;
    private String callbackUrl;
}
