package com.securebank.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginStep1Request {
    @NotBlank
    private String customerId;
    @NotBlank
    private String password;
}
