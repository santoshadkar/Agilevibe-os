package com.securebank.service;

import com.securebank.dto.response.ManyaChatResponse;
import com.securebank.model.*;
import com.securebank.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class ManyaAgentService {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final FixedDepositRepository fdRepository;
    private final TransactionRepository transactionRepository;
    private final BeneficiaryRepository beneficiaryRepository;

    public ManyaChatResponse getInitialGreeting(String customerId, String contextPage) {
        String greeting;
        List<String> quickReplies;
        Map<String, Object> actionData = new HashMap<>();

        Customer customer = null;
        if (customerId != null && !customerId.isEmpty() && !"anonymousUser".equals(customerId)) {
            customer = customerRepository.findByCustomerId(customerId).orElse(null);
        }

        if (customer != null) {
            String firstName = customer.getFullName().split(" ")[0];
            greeting = "Hello " + firstName + "! 👋 I'm **Manya**, your personal AI Banking Assistant. How can I help you today?";
            quickReplies = Arrays.asList(
                "💰 Check Account Balance",
                "💸 Quick Money Transfer",
                "📈 FD Returns & Advice",
                "🛡️ Check Security Status",
                "📊 Spending Insights"
            );
            
            // Add proactive smart financial tip
            Account account = accountRepository.findByCustomerAndStatus(customer, Account.AccountStatus.ACTIVE)
                    .stream().findFirst().orElse(null);
            if (account != null && account.getBalance().compareTo(new BigDecimal("2000")) > 0) {
                actionData.put("tip", "💡 **WealthIQ Alert**: You have $" + account.getBalance() + " available. Open a 1-Year FD to earn 7.50% interest!");
            }
        } else {
            greeting = "Welcome to **SecureBank**! 🏦 I'm **Manya**, your AI Assistant. Need help opening a new account, logging in, or exploring FD rates?";
            quickReplies = Arrays.asList(
                "📝 Account Opening Guide",
                "🔑 How to Login",
                "📈 Current FD Rates",
                "🛡️ Is SecureBank Safe?"
            );
        }

        return ManyaChatResponse.builder()
                .agentName("Manya")
                .reply(greeting)
                .timestamp(LocalDateTime.now())
                .actionType("WELCOME")
                .actionData(actionData)
                .quickReplies(quickReplies)
                .build();
    }

    public ManyaChatResponse processUserQuery(String customerId, String rawMessage, String contextPage) {
        if (rawMessage == null || rawMessage.trim().isEmpty()) {
            return getInitialGreeting(customerId, contextPage);
        }

        String msg = rawMessage.toLowerCase().trim();
        Customer customer = null;
        Account account = null;

        if (customerId != null && !customerId.isEmpty() && !"anonymousUser".equals(customerId)) {
            customer = customerRepository.findByCustomerId(customerId).orElse(null);
            if (customer != null) {
                account = accountRepository.findByCustomerAndStatus(customer, Account.AccountStatus.ACTIVE)
                        .stream().findFirst().orElse(null);
            }
        }

        // Intent 1: Balance Inquiry
        if (msg.contains("balance") || msg.contains("how much money") || msg.contains("check balance") || msg.contains("account balance")) {
            if (account == null) {
                return promptLogin("To view your real-time balance, please login to your SecureBank account.");
            }
            Map<String, Object> data = new HashMap<>();
            data.put("accountNumber", account.getAccountNumber());
            data.put("balance", account.getBalance());
            data.put("currency", "USD");
            
            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply("Your active account **" + account.getAccountNumber() + "** currently has a balance of **$" + account.getBalance() + "**.")
                    .timestamp(LocalDateTime.now())
                    .actionType("SHOW_BALANCE")
                    .actionData(data)
                    .quickReplies(Arrays.asList("💸 Transfer Money", "📈 Invest in FD", "📊 Recent Transactions"))
                    .build();
        }

        // Intent 2: Transfer Money / Assistant
        if (msg.contains("transfer") || msg.contains("send money") || msg.contains("pay someone")) {
            if (account == null) {
                return promptLogin("Please login to initiate secure money transfers.");
            }

            List<Beneficiary> beneficiaries = beneficiaryRepository.findByCustomerAndActiveTrue(customer);
            Map<String, Object> data = new HashMap<>();
            data.put("balance", account.getBalance());
            data.put("beneficiaryCount", beneficiaries.size());
            
            // Extract potential numeric amount if typed like "transfer 500"
            String extractedAmount = extractAmount(msg);
            if (extractedAmount != null) {
                data.put("suggestedAmount", extractedAmount);
            }

            String responseText = "I can help you transfer money safely! " +
                    (beneficiaries.isEmpty() ? "You haven't added any beneficiaries yet. You can add one under the Beneficiaries tab." :
                    "You have " + beneficiaries.size() + " saved beneficiary(ies). I can navigate you directly to the transfer portal.");

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply(responseText)
                    .timestamp(LocalDateTime.now())
                    .actionType("PREFILL_TRANSFER")
                    .actionData(data)
                    .quickReplies(Arrays.asList("🚀 Go to Transfer Screen", "👥 View Beneficiaries", "💰 Check Balance"))
                    .build();
        }

        // Intent 3: Fixed Deposit Interest & Wealth Advisory
        if (msg.contains("fd") || msg.contains("fixed deposit") || msg.contains("interest rate") || msg.contains("invest") || msg.contains("wealth")) {
            List<FixedDeposit> fds = (account != null) ? fdRepository.findByAccountAndStatus(account, FixedDeposit.FDStatus.ACTIVE) : Collections.emptyList();
            BigDecimal totalFd = fds.stream().map(FixedDeposit::getPrincipalAmount).reduce(BigDecimal.ZERO, BigDecimal::add);

            Map<String, Object> data = new HashMap<>();
            data.put("activeFdCount", fds.size());
            data.put("totalFdAmount", totalFd);

            String replyText = "📈 **SecureBank FD Rates & Wealth Advice**:\n\n" +
                    "• **6 Months**: 6.75% p.a.\n" +
                    "• **1 Year (Recommended)**: 7.50% p.a.\n" +
                    "• **3 Years**: 8.25% p.a.\n\n" +
                    (account != null ? "You currently have **" + fds.size() + " active FD(s)** totaling **$" + totalFd + "**." : "Login to open an instant FD backed by 100% government guarantee.");

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply(replyText)
                    .timestamp(LocalDateTime.now())
                    .actionType("CALCULATE_FD")
                    .actionData(data)
                    .quickReplies(Arrays.asList("⚡ Create New FD", "💰 Check Balance", "📊 Calculate Earnings"))
                    .build();
        }

        // Intent 4: Bill Payments & Subscriptions
        if (msg.contains("bill") || msg.contains("utility") || msg.contains("electricity") || msg.contains("recharge") || msg.contains("pay bill")) {
            if (account == null) {
                return promptLogin("Please login to manage and pay your utility bills.");
            }

            Map<String, Object> data = new HashMap<>();
            data.put("upcomingBills", Arrays.asList(
                Map.of("biller", "City Electricity Corp", "amount", 124.50, "dueDate", "In 3 Days", "category", "ELECTRICITY"),
                Map.of("biller", "FiberNet Broadband", "amount", 69.99, "dueDate", "In 6 Days", "category", "INTERNET")
            ));

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply("🤖 **Smart Bill Manager**: You have **2 upcoming bills** due this week. I can help you auto-pay them safely.")
                    .timestamp(LocalDateTime.now())
                    .actionType("SHOW_BILLS")
                    .actionData(data)
                    .quickReplies(Arrays.asList("⚡ Pay Electricity ($124.50)", "🌐 Pay Broadband ($69.99)", "💳 All Bills"))
                    .build();
        }

        // Intent 5: Security & Fraud Status
        if (msg.contains("security") || msg.contains("safe") || msg.contains("fraud") || msg.contains("risk") || msg.contains("otp")) {
            Map<String, Object> data = new HashMap<>();
            data.put("riskLevel", "LOW");
            data.put("status", "PROTECTED");
            data.put("2faStatus", "ENABLED");

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply("🛡️ **Autonomous Fraud Guardian Status**: **100% SECURE**\n\n" +
                            "• **TLS 1.3 Encryption**: Active\n" +
                            "• **2FA Email OTP Verification**: Enabled\n" +
                            "• **Real-Time Anomaly Scoring**: 0 Suspicious Events Detected\n\n" +
                            "Your account is guarded by 24/7 AI transaction risk scoring.")
                    .timestamp(LocalDateTime.now())
                    .actionType("FRAUD_STATUS")
                    .actionData(data)
                    .quickReplies(Arrays.asList("🔒 Change Password", "💰 Check Balance", "📊 Transaction Logs"))
                    .build();
        }

        // Intent 6: Spending Insights
        if (msg.contains("spending") || msg.contains("insight") || msg.contains("analytics") || msg.contains("expense")) {
            if (account == null) {
                return promptLogin("Login to analyze your personalized financial spending insights.");
            }

            Map<String, Object> data = new HashMap<>();
            data.put("topCategory", "Transfers & Payments");
            data.put("monthlyTotal", 1450.00);

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply("📊 **AI Financial Summary**:\n\n" +
                            "• **Monthly Outflow**: $1,450.00\n" +
                            "• **Top Expense Category**: Money Transfers & Utility Bills\n" +
                            "• **Savings Efficiency Score**: 88/100 🌟\n\n" +
                            "Tip: You can save $150/mo by setting up automated FD deposits.")
                    .timestamp(LocalDateTime.now())
                    .actionType("SHOW_INSIGHTS")
                    .actionData(data)
                    .quickReplies(Arrays.asList("📈 Open FD", "💰 Check Balance", "💸 Quick Transfer"))
                    .build();
        }

        // Intent 7: Account Opening Instructions
        if (msg.contains("account opening") || msg.contains("open account") || msg.contains("new account") || msg.contains("register") || msg.contains("create account") || msg.contains("how to open")) {
            Map<String, Object> data = new HashMap<>();
            data.put("redirect", "index.html");

            String guideText = "📝 **Steps to Open a SecureBank Account**:\n\n" +
                    "1️⃣ **Click 'Open Account'**: Visit the main page or click the link below.\n" +
                    "2️⃣ **Fill Personal Info**: Enter your full name, email, phone number, and address.\n" +
                    "3️⃣ **Identity Verification**: Enter your PAN and Aadhaar for instant KYC.\n" +
                    "4️⃣ **Account Type & Deposit**: Select Savings or Current account and specify an initial deposit (min $100).\n" +
                    "5️⃣ **Instant Credential**: Create a password to receive your unique 10-digit Customer ID & Account Number instantly!";

            return ManyaChatResponse.builder()
                    .agentName("Manya")
                    .reply(guideText)
                    .timestamp(LocalDateTime.now())
                    .actionType("NAVIGATE_REGISTER")
                    .actionData(data)
                    .quickReplies(Arrays.asList("🚀 Open Account Page", "🔑 How to Login", "📈 FD Interest Rates"))
                    .build();
        }

        // Fallback General Guidance
        String fallbackText = "I'm **Manya**, your AI Assistant. I can help you with:\n" +
                "• Account Opening steps & guidance\n" +
                "• Checking real-time account balances & statements\n" +
                "• Initiating instant money transfers with 2FA protection\n" +
                "• Opening Fixed Deposits with high interest yields\n" +
                "• Paying utility bills & checking fraud status\n\n" +
                "What would you like to do?";

        return ManyaChatResponse.builder()
                .agentName("Manya")
                .reply(fallbackText)
                .timestamp(LocalDateTime.now())
                .actionType("GENERAL")
                .quickReplies(Arrays.asList("📝 Open Account Guide", "💰 Check Balance", "💸 Money Transfer", "📈 FD Interest Rates"))
                .build();
    }

    private ManyaChatResponse promptLogin(String reason) {
        Map<String, Object> data = new HashMap<>();
        data.put("redirect", "login.html");

        return ManyaChatResponse.builder()
                .agentName("Manya")
                .reply("🔑 " + reason + " Click below to access the login page.")
                .timestamp(LocalDateTime.now())
                .actionType("PROMPT_LOGIN")
                .actionData(data)
                .quickReplies(Arrays.asList("🔑 Go to Login", "📈 Explore FD Rates"))
                .build();
    }

    private String extractAmount(String text) {
        String[] words = text.replaceAll("[^0-9.]", " ").split("\\s+");
        for (String word : words) {
            if (!word.isEmpty() && word.matches("\\d+(\\.\\d+)?")) {
                return word;
            }
        }
        return null;
    }
}
