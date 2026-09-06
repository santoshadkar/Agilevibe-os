package com.securebank.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResetPasswordRequest {
    @NotBlank
    private String customerId;
    @NotBlank
    private String otp;
    @NotBlank
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String newPassword;
    @NotBlank
    private String confirmPassword;
}
