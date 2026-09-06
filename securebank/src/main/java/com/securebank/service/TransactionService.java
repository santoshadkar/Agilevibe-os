package com.securebank.service;

import com.securebank.dto.request.BillPaymentRequest;
import com.securebank.dto.request.TransferRequest;
import com.securebank.dto.response.ApiResponse;
import com.securebank.dto.response.TransactionResponse;
import com.securebank.model.Account;
import com.securebank.model.Transaction;
import com.securebank.repository.AccountRepository;
import com.securebank.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class TransactionService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final AccountNumberGenerator generator;

    @Transactional
    public ApiResponse<TransactionResponse> transferFunds(TransferRequest request, String customerId) {
        Account fromAccount = accountRepository.findByAccountNumber(request.getFromAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Source account not found"));

        if (!fromAccount.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Unauthorized access to account");
        }
        if (fromAccount.getStatus() != Account.AccountStatus.ACTIVE) {
            throw new IllegalStateException("Source account is not active");
        }
        if (fromAccount.getBalance().subtract(request.getAmount()).compareTo(fromAccount.getMinimumBalance()) < 0) {
            throw new IllegalArgumentException("Insufficient balance");
        }

        String txnId = generator.generateTransactionId();
        fromAccount.setBalance(fromAccount.getBalance().subtract(request.getAmount()));
        accountRepository.save(fromAccount);

        Transaction debitTxn = Transaction.builder()
                .transactionId(txnId)
                .transactionType(Transaction.TransactionType.FUND_TRANSFER)
                .fromAccount(fromAccount.getAccountNumber())
                .toAccount(request.getToAccountNumber())
                .amount(request.getAmount())
                .description(request.getDescription())
                .balanceAfter(fromAccount.getBalance())
                .account(fromAccount)
                .build();
        transactionRepository.save(debitTxn);

        // Credit to destination if internal account exists in SecureBank
        accountRepository.findByAccountNumber(request.getToAccountNumber()).ifPresent(toAccount -> {
            toAccount.setBalance(toAccount.getBalance().add(request.getAmount()));
            accountRepository.save(toAccount);

            // Credit entry gets its own unique transaction ID to avoid DB unique constraint violation
            String creditTxnId = generator.generateTransactionId();
            Transaction creditTxn = Transaction.builder()
                    .transactionId(creditTxnId)
                    .transactionType(Transaction.TransactionType.FUND_TRANSFER)
                    .fromAccount(fromAccount.getAccountNumber())
                    .toAccount(toAccount.getAccountNumber())
                    .amount(request.getAmount())
                    .description(request.getDescription() != null ? request.getDescription() : "Inward Transfer")
                    .balanceAfter(toAccount.getBalance())
                    .account(toAccount)
                    .build();
            transactionRepository.save(creditTxn);
        });

        return ApiResponse.success("Transfer successful", mapTransaction(debitTxn, fromAccount.getAccountNumber()));
    }

    @Transactional
    public ApiResponse<TransactionResponse> payBill(BillPaymentRequest request, String customerId) {
        Account fromAccount = accountRepository.findByAccountNumber(request.getFromAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        if (!fromAccount.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Unauthorized access to account");
        }
        if (fromAccount.getBalance().subtract(request.getAmount()).compareTo(fromAccount.getMinimumBalance()) < 0) {
            throw new IllegalArgumentException("Insufficient balance");
        }

        fromAccount.setBalance(fromAccount.getBalance().subtract(request.getAmount()));
        accountRepository.save(fromAccount);

        Transaction.TransactionType type = switch (request.getBillType().toUpperCase()) {
            case "PHONE" -> Transaction.TransactionType.BILL_PAYMENT_PHONE;
            case "ELECTRICITY" -> Transaction.TransactionType.BILL_PAYMENT_ELECTRICITY;
            case "CREDIT_CARD" -> Transaction.TransactionType.BILL_PAYMENT_CREDIT_CARD;
            default -> Transaction.TransactionType.DEBIT;
        };

        Transaction txn = Transaction.builder()
                .transactionId(generator.generateTransactionId())
                .transactionType(type)
                .fromAccount(fromAccount.getAccountNumber())
                .toAccount(request.getBillerNumber())
                .amount(request.getAmount())
                .description("Bill payment: " + request.getRemarks())
                .beneficiaryName(request.getBillerName())
                .balanceAfter(fromAccount.getBalance())
                .account(fromAccount)
                .build();
        transactionRepository.save(txn);

        return ApiResponse.success("Bill payment successful", mapTransaction(txn, fromAccount.getAccountNumber()));
    }

    public List<TransactionResponse> getRecentTransactions(String accountNumber, String customerId) {
        Account account = accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        if (!account.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Unauthorized access to account");
        }

        return transactionRepository.findTop10ByAccountOrderByTimestampDesc(account).stream()
                .map(t -> mapTransaction(t, accountNumber))
                .collect(Collectors.toList());
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
