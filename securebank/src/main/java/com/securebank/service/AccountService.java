package com.securebank.service;

import com.securebank.dto.response.DashboardResponse;
import com.securebank.dto.response.TransactionResponse;
import com.securebank.model.Account;
import com.securebank.model.Card;
import com.securebank.model.Customer;
import com.securebank.model.FixedDeposit;
import com.securebank.model.Transaction;
import com.securebank.repository.AccountRepository;
import com.securebank.repository.CardRepository;
import com.securebank.repository.CustomerRepository;
import com.securebank.repository.FixedDepositRepository;
import com.securebank.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AccountService {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final CardRepository cardRepository;
    private final TransactionRepository transactionRepository;
    private final FixedDepositRepository fdRepository;

    public DashboardResponse getDashboard(String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        Account account = accountRepository.findByCustomerAndStatus(customer, Account.AccountStatus.ACTIVE)
                .stream().findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No active account found"));

        List<Card> cards = cardRepository.findByAccount(account);
        Card debitCard = cards.stream().filter(c -> c.getCardType() == Card.CardType.DEBIT).findFirst().orElse(null);
        Card creditCard = cards.stream().filter(c -> c.getCardType() == Card.CardType.CREDIT).findFirst().orElse(null);

        List<Transaction> recentTxns = transactionRepository.findTop10ByAccountOrderByTimestampDesc(account);
        
        List<FixedDeposit> activeFds = fdRepository.findByAccountAndStatus(account, FixedDeposit.FDStatus.ACTIVE);
        int activeFdCount = activeFds.size();
        BigDecimal totalFdAmount = activeFds.stream().map(FixedDeposit::getPrincipalAmount).reduce(BigDecimal.ZERO, BigDecimal::add);

        return DashboardResponse.builder()
                .customerName(customer.getFullName())
                .customerId(customer.getCustomerId())
                .email(customer.getEmail())
                .phone(customer.getPhone())
                .accountNumber(account.getAccountNumber())
                .accountType(account.getAccountType().name())
                .accountStatus(account.getStatus().name())
                .balance(account.getBalance())
                .accountOpeningDate(account.getOpeningDate())
                .ifscCode(account.getIfscCode())
                .branchCode(account.getBranchCode())
                .debitCard(mapCard(debitCard))
                .creditCard(mapCard(creditCard))
                .recentTransactions(recentTxns.stream().map(t -> mapTransaction(t, account.getAccountNumber())).collect(Collectors.toList()))
                .activeFdCount(activeFdCount)
                .totalFdAmount(totalFdAmount)
                .build();
    }

    public Page<TransactionResponse> getStatement(String accountNumber, String customerId, int page, int size) {
        Account account = getAccountByNumber(accountNumber, customerId);
        return transactionRepository.findByAccountOrderByTimestampDesc(account, PageRequest.of(page, size))
                .map(t -> mapTransaction(t, accountNumber));
    }

    public Account getAccountByNumber(String accountNumber, String customerId) {
        Account account = accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        if (!account.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Unauthorized access to account");
        }
        return account;
    }

    private DashboardResponse.CardDetail mapCard(Card card) {
        if (card == null) return null;
        String masked = "**** **** **** " + card.getCardNumber().substring(12);
        DateTimeFormatter mmyy = DateTimeFormatter.ofPattern("MM/yy");
        return DashboardResponse.CardDetail.builder()
                .maskedCardNumber(masked)
                .cardHolderName(card.getCardHolderName())
                .expiryDate(card.getExpiryDate().format(mmyy))
                .cardType(card.getCardType().name())
                .active(card.isActive())
                .creditLimit(card.getCreditLimit())
                .outstandingBalance(card.getOutstandingBalance())
                .build();
    }

    private TransactionResponse mapTransaction(Transaction t, String accountNumber) {
        boolean isCredit = accountNumber.equals(t.getToAccount());
        return TransactionResponse.builder()
                .transactionId(t.getTransactionId())
                .transactionType(t.getTransactionType().name())
                .fromAccount(t.getFromAccount())
                .toAccount(t.getToAccount())
                .amount(t.getAmount())
                .description(t.getDescription())
                .beneficiaryName(t.getBeneficiaryName())
                .status(t.getStatus().name())
                .balanceAfter(t.getBalanceAfter())
                .timestamp(t.getTimestamp())
                .isCredit(isCredit)
                .build();
    }
}
