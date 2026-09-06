package com.securebank.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BillPaymentRequest {
    @NotBlank
    private String fromAccountNumber;
    @NotBlank
    private String billType; // PHONE, ELECTRICITY, CREDIT_CARD
    @NotBlank
    private String billerNumber; // phone number / consumer number / card number
    @NotBlank
    private String billerName; // Airtel, BESCOM, HDFC etc.
    @NotNull
    @DecimalMin(value = "1.00")
    private BigDecimal amount;
    private String remarks;
}
