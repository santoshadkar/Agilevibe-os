package com.securebank.service;

import com.securebank.dto.request.PaymentWebhookRequest;
import com.securebank.dto.response.AgentExecutionResponse;
import com.securebank.model.*;
import com.securebank.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class SmartTransferAgentService {

    private final AccountRepository accountRepository;
    private final FixedDepositRepository fdRepository;
    private final TransactionRepository transactionRepository;
    private final AgentAuditLogRepository auditLogRepository;

    @Transactional
    public AgentExecutionResponse processPaymentWebhook(PaymentWebhookRequest request) {
        log.info("SmartTransferAgent triggered for biller: {}, amount: {}", request.getBillerName(), request.getAmount());

        Map<String, Object> details = new HashMap<>();
        details.put("billerName", request.getBillerName());
        details.put("billerId", request.getBillerId());
        details.put("requestedAmount", request.getAmount());

        // Locate account
        Account account;
        if (request.getAccountNumber() != null && !request.getAccountNumber().isEmpty()) {
            account = accountRepository.findByAccountNumber(request.getAccountNumber())
                    .orElse(accountRepository.findAll().stream().findFirst()
                            .orElseThrow(() -> new IllegalArgumentException("No account found")));
        } else {
            account = accountRepository.findAll().stream().findFirst()
                    .orElseThrow(() -> new IllegalArgumentException("No active account found in system"));
        }

        details.put("accountNumber", account.getAccountNumber());
        BigDecimal initialBalance = account.getBalance();
        details.put("initialCheckingBalance", initialBalance);

        boolean autoSweepApplied = false;
        BigDecimal sweptAmount = BigDecimal.ZERO;

        // Step 1: Liquidity Audit & Auto-Sweep
        if (account.getBalance().compareTo(request.getAmount()) < 0) {
            BigDecimal shortfall = request.getAmount().subtract(account.getBalance());
            log.info("Checking balance insufficient. Shortfall: ${}. Initiating FD Auto-Sweep...", shortfall);

            List<FixedDeposit> activeFds = fdRepository.findByAccountAndStatus(account, FixedDeposit.FDStatus.ACTIVE);
            if (!activeFds.isEmpty()) {
                FixedDeposit targetFd = activeFds.get(0);
                sweptAmount = shortfall.min(targetFd.getPrincipalAmount());
                
                // Sweep cash from FD to Checking
                account.setBalance(account.getBalance().add(sweptAmount));
                targetFd.setPrincipalAmount(targetFd.getPrincipalAmount().subtract(sweptAmount));
                if (targetFd.getPrincipalAmount().compareTo(BigDecimal.ZERO) <= 0) {
                    targetFd.setStatus(FixedDeposit.FDStatus.CLOSED_PREMATURELY);
                }
                fdRepository.save(targetFd);
                accountRepository.save(account);

                autoSweepApplied = true;
                details.put("fdAutoSweepApplied", true);
                details.put("sweptFromFdId", "FD-" + targetFd.getId());
                details.put("sweptAmount", sweptAmount);
                details.put("newBalancePostSweep", account.getBalance());
            } else {
                details.put("fdAutoSweepApplied", false);
                details.put("reason", "Insufficient checking balance and no active Fixed Deposits available to sweep");
            }
        } else {
            details.put("fdAutoSweepApplied", false);
            details.put("liquidityStatus", "SUFFICIENT_CHECKING_FUNDS");
        }

        // Step 2: Transfer Execution
        if (account.getBalance().compareTo(request.getAmount()) >= 0) {
            account.setBalance(account.getBalance().subtract(request.getAmount()));
            accountRepository.save(account);

            Transaction txn = Transaction.builder()
                    .transactionId("TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                    .transactionType(Transaction.TransactionType.BILL_PAYMENT_ELECTRICITY)
                    .fromAccount(account.getAccountNumber())
                    .toAccount(request.getBillerId())
                    .amount(request.getAmount())
                    .description("Autonomous Webhook Auto-Pay: " + request.getBillerName())
                    .beneficiaryName(request.getBillerName())
                    .status(Transaction.TransactionStatus.SUCCESS)
                    .balanceAfter(account.getBalance())
                    .timestamp(LocalDateTime.now())
                    .account(account)
                    .build();
            transactionRepository.save(txn);

            details.put("executedTransactionId", txn.getTransactionId());
            details.put("finalAccountBalance", account.getBalance());

            // Save Audit Log
            String execSummary = String.format("Auto-paid $%s to %s. FD Sweep Applied: %s ($%s). Final Balance: $%s.",
                    request.getAmount(), request.getBillerName(), autoSweepApplied, sweptAmount, account.getBalance());

            AgentAuditLog logEntry = AgentAuditLog.builder()
                    .agentName("SmartTransferAgent")
                    .eventType("WEBHOOK_PAYMENT_EXECUTION")
                    .status("COMPLETED")
                    .executionDetails(execSummary)
                    .timestamp(LocalDateTime.now())
                    .build();
            auditLogRepository.save(logEntry);

            return AgentExecutionResponse.builder()
                    .agentName("SmartTransferAgent")
                    .eventType("WEBHOOK_PAYMENT_EXECUTION")
                    .status("COMPLETED")
                    .decision("TRANSFER_EXECUTED_SUCCESSFULLY")
                    .details(details)
                    .timestamp(LocalDateTime.now())
                    .callbackDispatched(true)
                    .build();
        } else {
            AgentAuditLog logEntry = AgentAuditLog.builder()
                    .agentName("SmartTransferAgent")
                    .eventType("WEBHOOK_PAYMENT_EXECUTION")
                    .status("FAILED")
                    .executionDetails("Transfer declined due to insufficient total liquidity.")
                    .timestamp(LocalDateTime.now())
                    .build();
            auditLogRepository.save(logEntry);

            return AgentExecutionResponse.builder()
                    .agentName("SmartTransferAgent")
                    .eventType("WEBHOOK_PAYMENT_EXECUTION")
                    .status("DECLINED")
                    .decision("INSUFFICIENT_LIQUIDITY")
                    .details(details)
                    .timestamp(LocalDateTime.now())
                    .callbackDispatched(false)
                    .build();
        }
    }
}
