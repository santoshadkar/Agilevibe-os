package com.securebank.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FDCreateRequest {
    @NotBlank
    private String accountNumber;
    @NotNull
    @DecimalMin(value = "1000.00", message = "Minimum FD amount is 1000")
    private BigDecimal principalAmount;
    @NotNull
    @Min(value = 1, message = "Minimum tenure is 1 month")
    @Max(value = 120, message = "Maximum tenure is 120 months (10 years)")
    private Integer tenureMonths;
}
