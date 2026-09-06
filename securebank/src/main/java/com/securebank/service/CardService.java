package com.securebank.service;

import com.securebank.model.Account;
import com.securebank.model.Card;
import com.securebank.repository.CardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CardService {

    private final CardRepository cardRepository;
    private final AccountNumberGenerator generator;
    private final PasswordEncoder passwordEncoder;
    private final SecureRandom random = new SecureRandom();

    @Transactional
    public void issueCards(Account account) {
        BigDecimal creditLimit;
        BigDecimal dailyLimit;

        switch (account.getAccountType()) {
            case SAVINGS -> {
                creditLimit = new BigDecimal("50000.00");
                dailyLimit = new BigDecimal("25000.00");
            }
            case CURRENT -> {
                creditLimit = new BigDecimal("100000.00");
                dailyLimit = new BigDecimal("50000.00");
            }
            case CORPORATE -> {
                creditLimit = new BigDecimal("500000.00");
                dailyLimit = new BigDecimal("200000.00");
            }
            default -> {
                creditLimit = BigDecimal.ZERO;
                dailyLimit = BigDecimal.ZERO;
            }
        }

        Card debitCard = createCard(account, Card.CardType.DEBIT, null, dailyLimit);
        Card creditCard = createCard(account, Card.CardType.CREDIT, creditLimit, dailyLimit);

        cardRepository.save(debitCard);
        cardRepository.save(creditCard);
        log.info("Issued DEBIT and CREDIT cards for account {}", account.getAccountNumber());
    }

    private Card createCard(Account account, Card.CardType type, BigDecimal creditLimit, BigDecimal dailyLimit) {
        String cvv = String.format("%03d", random.nextInt(1000));
        String cvvHash = passwordEncoder.encode(cvv);

        return Card.builder()
                .cardNumber(generator.generateCardNumber())
                .cardType(type)
                .cardHolderName(account.getCustomer().getFullName())
                .expiryDate(LocalDate.now().plusYears(5))
                .cvvHash(cvvHash)
                .creditLimit(creditLimit)
                .dailyLimit(dailyLimit)
                .account(account)
                .build();
    }

    public List<Card> getCardsByAccount(String accountNumber) {
        // We'll rely on calling method to provide account
        return List.of();
    }
}
