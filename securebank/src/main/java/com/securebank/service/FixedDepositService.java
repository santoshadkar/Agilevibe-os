package com.securebank.service;

import com.securebank.dto.request.FDCreateRequest;
import com.securebank.dto.response.ApiResponse;
import com.securebank.dto.response.FDResponse;
import com.securebank.model.Account;
import com.securebank.model.FixedDeposit;
import com.securebank.model.Transaction;
import com.securebank.repository.AccountRepository;
import com.securebank.repository.FixedDepositRepository;
import com.securebank.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class FixedDepositService {

    private final FixedDepositRepository fdRepository;
    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final AccountNumberGenerator generator;

    public static BigDecimal getInterestRate(int months) {
        if (months >= 1 && months <= 5) return new BigDecimal("4.5");
        if (months >= 6 && months <= 11) return new BigDecimal("5.5");
        if (months >= 12 && months <= 23) return new BigDecimal("6.5");
        if (months >= 24 && months <= 35) return new BigDecimal("7.0");
        if (months >= 36 && months <= 59) return new BigDecimal("7.25");
        if (months >= 60 && months <= 120) return new BigDecimal("7.5");
        throw new IllegalArgumentException("Invalid tenure");
    }

    @Transactional
    public ApiResponse<FDResponse> createFD(FDCreateRequest request, String customerId) {
        Account account = accountRepository.findByAccountNumber(request.getAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        if (!account.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Not authorized for this account");
        }

        BigDecimal p = request.getPrincipalAmount();
        if (account.getBalance().subtract(p).compareTo(account.getMinimumBalance()) < 0) {
            throw new IllegalArgumentException("Insufficient balance to create FD");
        }

        BigDecimal rate = getInterestRate(request.getTenureMonths());
        BigDecimal timeInYears = new BigDecimal(request.getTenureMonths()).divide(new BigDecimal("12"), 4, RoundingMode.HALF_UP);
        BigDecimal interest = p.multiply(rate).multiply(timeInYears).divide(new BigDecimal("100"), 2, RoundingMode.HALF_UP);
        BigDecimal maturityAmt = p.add(interest);

        account.setBalance(account.getBalance().subtract(p));
        accountRepository.save(account);

        FixedDeposit fd = FixedDeposit.builder()
                .fdNumber(generator.generateFdNumber())
                .principalAmount(p)
                .interestRate(rate)
                .tenureMonths(request.getTenureMonths())
                .maturityAmount(maturityAmt)
                .startDate(LocalDate.now())
                .maturityDate(LocalDate.now().plusMonths(request.getTenureMonths()))
                .account(account)
                .build();
        fdRepository.save(fd);

        Transaction txn = Transaction.builder()
                .transactionId(generator.generateTransactionId())
                .transactionType(Transaction.TransactionType.FD_CREATION)
                .fromAccount(account.getAccountNumber())
                .toAccount(fd.getFdNumber())
                .amount(p)
                .description("FD Created: " + request.getTenureMonths() + " months")
                .balanceAfter(account.getBalance())
                .account(account)
                .build();
        transactionRepository.save(txn);

        return ApiResponse.success("FD created successfully", mapToResponse(fd));
    }

    @Transactional
    public ApiResponse<FDResponse> closeFDPrematurely(Long fdId, String customerId) {
        FixedDeposit fd = fdRepository.findById(fdId)
                .orElseThrow(() -> new IllegalArgumentException("FD not found"));

        if (!fd.getAccount().getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Not authorized for this FD");
        }

        if (fd.getStatus() != FixedDeposit.FDStatus.ACTIVE) {
            throw new IllegalStateException("FD is not active");
        }

        // Calculate penalty
        long daysPassed = ChronoUnit.DAYS.between(fd.getStartDate(), LocalDate.now());
        BigDecimal yearsPassed = new BigDecimal(daysPassed).divide(new BigDecimal("365.25"), 4, RoundingMode.HALF_UP);
        BigDecimal penalizedRate = fd.getInterestRate().subtract(fd.getPrematureWithdrawalPenalty());
        if (penalizedRate.compareTo(BigDecimal.ZERO) < 0) penalizedRate = BigDecimal.ZERO;

        BigDecimal actualInterest = fd.getPrincipalAmount().multiply(penalizedRate).multiply(yearsPassed).divide(new BigDecimal("100"), 2, RoundingMode.HALF_UP);
        BigDecimal actualMaturity = fd.getPrincipalAmount().add(actualInterest);

        fd.setStatus(FixedDeposit.FDStatus.CLOSED_PREMATURELY);
        fd.setActualMaturityAmount(actualMaturity);
        fd.setClosureDate(LocalDateTime.now());
        fd.setClosureReason("Premature Withdrawal");
        fdRepository.save(fd);

        Account account = fd.getAccount();
        account.setBalance(account.getBalance().add(actualMaturity));
        accountRepository.save(account);

        Transaction txn = Transaction.builder()
                .transactionId(generator.generateTransactionId())
                .transactionType(Transaction.TransactionType.FD_CLOSURE)
                .fromAccount(fd.getFdNumber())
                .toAccount(account.getAccountNumber())
                .amount(actualMaturity)
                .description("FD Premature Closure")
                .balanceAfter(account.getBalance())
                .account(account)
                .build();
        transactionRepository.save(txn);

        return ApiResponse.success("FD closed prematurely", mapToResponse(fd));
    }

    public List<FDResponse> getFDsByAccount(String accountNumber, String customerId) {
        Account account = accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));
        if (!account.getCustomer().getCustomerId().equals(customerId)) {
            throw new SecurityException("Not authorized");
        }
        return fdRepository.findByAccount(account).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private FDResponse mapToResponse(FixedDeposit fd) {
        return FDResponse.builder()
                .id(fd.getId())
                .fdNumber(fd.getFdNumber())
                .principalAmount(fd.getPrincipalAmount())
                .interestRate(fd.getInterestRate())
                .tenureMonths(fd.getTenureMonths())
                .maturityAmount(fd.getMaturityAmount())
                .startDate(fd.getStartDate())
                .maturityDate(fd.getMaturityDate())
                .status(fd.getStatus().name())
                .prematureWithdrawalPenalty(fd.getPrematureWithdrawalPenalty())
                .actualMaturityAmount(fd.getActualMaturityAmount())
                .accountNumber(fd.getAccount().getAccountNumber())
                .daysRemaining(Math.max(0, ChronoUnit.DAYS.between(LocalDate.now(), fd.getMaturityDate())))
                .build();
    }
}
