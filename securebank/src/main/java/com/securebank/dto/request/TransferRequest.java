package com.securebank.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransferRequest {
    @NotBlank
    private String fromAccountNumber;
    @NotBlank
    private String toAccountNumber;
    @NotNull
    @DecimalMin(value = "1.00")
    private BigDecimal amount;
    private String description;
    private String ifscCode; // for external transfers
}
