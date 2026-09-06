package com.securebank.service;

import com.securebank.repository.AccountRepository;
import com.securebank.repository.CardRepository;
import com.securebank.repository.CustomerRepository;
import com.securebank.repository.FixedDepositRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class AccountNumberGenerator {

    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final CardRepository cardRepository;
    private final FixedDepositRepository fdRepository;
    private final SecureRandom random = new SecureRandom();

    public String generateAccountNumber() {
        String accNum;
        do {
            accNum = String.format("%010d", random.nextLong(10000000000L));
        } while (accountRepository.existsByAccountNumber(accNum));
        return accNum;
    }

    public String generateCustomerId() {
        String custId;
        do {
            custId = "CUST" + String.format("%08d", random.nextInt(100000000));
        } while (customerRepository.findByCustomerId(custId).isPresent());
        return custId;
    }

    public String generateCardNumber() {
        String cardNum;
        do {
            // Generating 15 random digits and 1 check digit for Luhn
            long prefix = 400000000000000L + random.nextLong(100000000000000L); 
            cardNum = String.valueOf(prefix);
            // simplified: just random 16 digits
            cardNum = String.format("%016d", Math.abs(random.nextLong()));
            if (cardNum.length() > 16) {
                cardNum = cardNum.substring(0, 16);
            }
        } while (cardRepository.existsByCardNumber(cardNum));
        return cardNum;
    }

    public String generateFdNumber() {
        String fdNum;
        do {
            fdNum = "FD" + String.format("%08d", random.nextInt(100000000));
        } while (fdRepository.existsByFdNumber(fdNum));
        return fdNum;
    }

    public String generateTransactionId() {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        String randomSuffix = String.format("%04d", random.nextInt(10000));
        return "TXN" + timestamp + randomSuffix;
    }
}
