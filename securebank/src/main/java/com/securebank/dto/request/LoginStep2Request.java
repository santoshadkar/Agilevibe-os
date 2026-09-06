package com.securebank.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginStep2Request {
    @NotBlank
    private String customerId;
    @NotBlank
    @jakarta.validation.constraints.Size(min = 6, max = 6)
    private String otp;
}
