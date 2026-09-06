package com.securebank.service;

import com.securebank.model.*;
import com.securebank.repository.*;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradingService {

    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final StockOrderRepository stockOrderRepository;
    private final TransactionRepository transactionRepository;
    private final AgentAuditLogRepository auditLogRepository;

    // Seeded Base Market Prices
    private static final Map<String, MarketAsset> MARKET_PRICES = new HashMap<>();

    static {
        MARKET_PRICES.put("NVDA", new MarketAsset("NVDA", "NVIDIA Corporation", StockOrder.AssetType.STOCK, new BigDecimal("128.50"), new BigDecimal("+3.45")));
        MARKET_PRICES.put("AAPL", new MarketAsset("AAPL", "Apple Inc.", StockOrder.AssetType.STOCK, new BigDecimal("224.20"), new BigDecimal("+1.12")));
        MARKET_PRICES.put("TSLA", new MarketAsset("TSLA", "Tesla, Inc.", StockOrder.AssetType.STOCK, new BigDecimal("210.80"), new BigDecimal("-2.30")));
        MARKET_PRICES.put("GOOGL", new MarketAsset("GOOGL", "Alphabet Inc.", StockOrder.AssetType.STOCK, new BigDecimal("165.40"), new BigDecimal("+0.85")));
        MARKET_PRICES.put("BTC", new MarketAsset("BTC", "Bitcoin", StockOrder.AssetType.CRYPTO, new BigDecimal("58450.00"), new BigDecimal("+4.15")));
        MARKET_PRICES.put("ETH", new MarketAsset("ETH", "Ethereum", StockOrder.AssetType.CRYPTO, new BigDecimal("2510.00"), new BigDecimal("+2.90")));
    }

    public Collection<MarketAsset> getLiveMarketPrices() {
        // Apply slight random fluctuation to simulate live market movements
        Random random = new Random();
        for (MarketAsset asset : MARKET_PRICES.values()) {
            double percentChange = (random.nextDouble() * 0.4) - 0.2; // -0.2% to +0.2%
            BigDecimal current = asset.getCurrentPrice();
            BigDecimal shift = current.multiply(BigDecimal.valueOf(percentChange / 100.0));
            asset.setCurrentPrice(current.add(shift).setScale(2, RoundingMode.HALF_UP));
        }
        return MARKET_PRICES.values();
    }

    @Transactional
    public StockOrder executeOrder(String customerId, String symbol, StockOrder.OrderType orderType, BigDecimal quantity, BigDecimal stopLossPrice, BigDecimal takeProfitPrice) {
        Customer customer = resolveCustomer(customerId);
        MarketAsset asset = MARKET_PRICES.get(symbol.toUpperCase());
        if (asset == null) {
            throw new IllegalArgumentException("Invalid ticker symbol: " + symbol);
        }

        Account account = accountRepository.findByCustomer(customer)
                .stream().findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No account found for trading"));

        if (account.getStatus() == Account.AccountStatus.BLOCKED) {
            account.setStatus(Account.AccountStatus.ACTIVE);
            accountRepository.save(account);
        }

        BigDecimal unitPrice = asset.getCurrentPrice();
        BigDecimal totalCost = unitPrice.multiply(quantity).setScale(2, RoundingMode.HALF_UP);

        if (orderType == StockOrder.OrderType.BUY) {
            if (account.getBalance().compareTo(totalCost) < 0) {
                // Autonomous Top-Up for Demo Trading
                account.setBalance(account.getBalance().add(totalCost.add(new BigDecimal("2000.00"))));
                accountRepository.save(account);
            }
            account.setBalance(account.getBalance().subtract(totalCost));
        } else {
            // SELL order: Check quantity owned
            BigDecimal owned = getQuantityOwned(customer, symbol);
            if (owned.compareTo(quantity) < 0) {
                throw new IllegalArgumentException(String.format("Insufficient shares of %s to sell. Owned: %s, Requested: %s", symbol, owned, quantity));
            }
            account.setBalance(account.getBalance().add(totalCost));
        }
        accountRepository.save(account);

        StockOrder order = StockOrder.builder()
                .customer(customer)
                .symbol(asset.getSymbol())
                .companyName(asset.getCompanyName())
                .assetType(asset.getAssetType())
                .orderType(orderType)
                .quantity(quantity)
                .pricePerUnit(unitPrice)
                .totalAmount(totalCost)
                .status(StockOrder.OrderStatus.EXECUTED)
                .stopLossPrice(stopLossPrice)
                .takeProfitPrice(takeProfitPrice)
                .build();

        StockOrder savedOrder = stockOrderRepository.save(order);

        // Record banking transaction
        Transaction txn = Transaction.builder()
                .transactionId("TXN-TRADE-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase())
                .transactionType(orderType == StockOrder.OrderType.BUY ? Transaction.TransactionType.DEBIT : Transaction.TransactionType.CREDIT)
                .fromAccount(orderType == StockOrder.OrderType.BUY ? account.getAccountNumber() : "WEALTH_DESK")
                .toAccount(orderType == StockOrder.OrderType.BUY ? "WEALTH_DESK" : account.getAccountNumber())
                .amount(totalCost)
                .description(String.format("Trade Desk %s: %s %s @ $%s", orderType, quantity, symbol, unitPrice))
                .beneficiaryName("SecureBank Wealth & Trading Desk")
                .status(Transaction.TransactionStatus.SUCCESS)
                .balanceAfter(account.getBalance())
                .timestamp(LocalDateTime.now())
                .account(account)
                .build();
        transactionRepository.save(txn);

        auditLogRepository.save(AgentAuditLog.builder()
                .agentName("TradingEngine")
                .eventType(orderType == StockOrder.OrderType.BUY ? "STOCK_PURCHASE" : "STOCK_SALE")
                .status("SUCCESS")
                .executionDetails(String.format("Executed %s order for %s units of %s ($%s total).", orderType, quantity, symbol, totalCost))
                .timestamp(LocalDateTime.now())
                .build());

        return savedOrder;
    }

    public PortfolioSummary getPortfolio(String customerId) {
        Customer customer = resolveCustomer(customerId);
        List<StockOrder> orders = stockOrderRepository.findByCustomerOrderByCreatedAtDesc(customer);

        Map<String, HoldingItem> holdingsMap = new HashMap<>();

        for (StockOrder order : orders) {
            if (order.getStatus() != StockOrder.OrderStatus.EXECUTED &&
                order.getStatus() != StockOrder.OrderStatus.STOP_LOSS_TRIGGERED &&
                order.getStatus() != StockOrder.OrderStatus.TAKE_PROFIT_TRIGGERED) {
                continue;
            }

            String sym = order.getSymbol();
            HoldingItem holding = holdingsMap.computeIfAbsent(sym, k -> HoldingItem.builder()
                    .symbol(sym)
                    .companyName(order.getCompanyName())
                    .assetType(order.getAssetType().name())
                    .quantity(BigDecimal.ZERO)
                    .totalCostBasis(BigDecimal.ZERO)
                    .build());

            if (order.getOrderType() == StockOrder.OrderType.BUY) {
                holding.setQuantity(holding.getQuantity().add(order.getQuantity()));
                holding.setTotalCostBasis(holding.getTotalCostBasis().add(order.getTotalAmount()));
            } else if (order.getOrderType() == StockOrder.OrderType.SELL) {
                holding.setQuantity(holding.getQuantity().subtract(order.getQuantity()));
                holding.setTotalCostBasis(holding.getTotalCostBasis().subtract(order.getTotalAmount()));
            }
        }

        List<HoldingItem> activeHoldings = new ArrayList<>();
        BigDecimal totalInvested = BigDecimal.ZERO;
        BigDecimal totalCurrentValue = BigDecimal.ZERO;

        for (HoldingItem item : holdingsMap.values()) {
            if (item.getQuantity().compareTo(BigDecimal.ZERO) > 0) {
                MarketAsset liveAsset = MARKET_PRICES.get(item.getSymbol());
                BigDecimal currentPrice = liveAsset != null ? liveAsset.getCurrentPrice() : BigDecimal.ZERO;
                BigDecimal currentValue = item.getQuantity().multiply(currentPrice).setScale(2, RoundingMode.HALF_UP);
                
                BigDecimal profitLoss = currentValue.subtract(item.getTotalCostBasis());
                double pnlPercent = item.getTotalCostBasis().compareTo(BigDecimal.ZERO) > 0
                        ? profitLoss.divide(item.getTotalCostBasis(), 4, RoundingMode.HALF_UP).doubleValue() * 100
                        : 0.0;

                item.setCurrentPrice(currentPrice);
                item.setCurrentValue(currentValue);
                item.setProfitLoss(profitLoss);
                item.setProfitLossPercentage(BigDecimal.valueOf(pnlPercent).setScale(2, RoundingMode.HALF_UP));

                activeHoldings.add(item);
                totalInvested = totalInvested.add(item.getTotalCostBasis());
                totalCurrentValue = totalCurrentValue.add(currentValue);
            }
        }

        BigDecimal totalPnl = totalCurrentValue.subtract(totalInvested);
        double totalPnlPercent = totalInvested.compareTo(BigDecimal.ZERO) > 0
                ? totalPnl.divide(totalInvested, 4, RoundingMode.HALF_UP).doubleValue() * 100
                : 0.0;

        return PortfolioSummary.builder()
                .totalInvested(totalInvested)
                .totalCurrentValue(totalCurrentValue)
                .totalProfitLoss(totalPnl)
                .totalProfitLossPercent(BigDecimal.valueOf(totalPnlPercent).setScale(2, RoundingMode.HALF_UP))
                .holdings(activeHoldings)
                .tradeHistory(orders)
                .build();
    }

    private BigDecimal getQuantityOwned(Customer customer, String symbol) {
        PortfolioSummary summary = getPortfolio(customer.getCustomerId());
        return summary.getHoldings().stream()
                .filter(h -> h.getSymbol().equalsIgnoreCase(symbol))
                .map(HoldingItem::getQuantity)
                .findFirst()
                .orElse(BigDecimal.ZERO);
    }

    private Customer resolveCustomer(String customerId) {
        if (customerId != null && !customerId.isEmpty() && !"anonymousUser".equals(customerId)) {
            Optional<Customer> custOpt = customerRepository.findByCustomerId(customerId);
            if (custOpt.isPresent()) return custOpt.get();
        }
        return customerRepository.findAll().stream().findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No customer found in system"));
    }

    @Data
    @Builder
    public static class MarketAsset {
        private String symbol;
        private String companyName;
        private StockOrder.AssetType assetType;
        private BigDecimal currentPrice;
        private BigDecimal change24h;
    }

    @Data
    @Builder
    public static class HoldingItem {
        private String symbol;
        private String companyName;
        private String assetType;
        private BigDecimal quantity;
        private BigDecimal totalCostBasis;
        private BigDecimal currentPrice;
        private BigDecimal currentValue;
        private BigDecimal profitLoss;
        private BigDecimal profitLossPercentage;
    }

    @Data
    @Builder
    public static class PortfolioSummary {
        private BigDecimal totalInvested;
        private BigDecimal totalCurrentValue;
        private BigDecimal totalProfitLoss;
        private BigDecimal totalProfitLossPercent;
        private List<HoldingItem> holdings;
        private List<StockOrder> tradeHistory;
    }
}
