package com.securebank.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddBeneficiaryRequest {
    @NotBlank
    private String beneficiaryName;
    @NotBlank
    private String accountNumber;
    @NotBlank
    private String ifscCode;
    private String bankName;
    private String nickname;
    private String beneficiaryType; // INTERNAL or EXTERNAL
}
