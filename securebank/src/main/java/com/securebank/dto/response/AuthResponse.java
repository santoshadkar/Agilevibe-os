package com.securebank.dto.response;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private boolean success;
    private String message;
    private String token;
    private String customerId;
    private String customerName;
    private String step; // "OTP_SENT" or "AUTHENTICATED"
    private String devOtp; // Demo OTP display for testing
}
