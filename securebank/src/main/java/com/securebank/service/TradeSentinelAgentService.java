package com.securebank.service;

import com.securebank.model.AgentAuditLog;
import com.securebank.model.StockOrder;
import com.securebank.repository.AgentAuditLogRepository;
import com.securebank.repository.StockOrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TradeSentinelAgentService {

    private final StockOrderRepository stockOrderRepository;
    private final TradingService tradingService;
    private final AgentAuditLogRepository auditLogRepository;
    private final EmailService emailService;

    @Scheduled(fixedRate = 30000)
    @Transactional
    public void monitorPortfolioRisk() {
        List<StockOrder> activeOrders = stockOrderRepository.findByStatus(StockOrder.OrderStatus.EXECUTED);
        if (activeOrders.isEmpty()) return;

        Collection<TradingService.MarketAsset> liveAssets = tradingService.getLiveMarketPrices();

        for (StockOrder order : activeOrders) {
            if (order.getStopLossPrice() == null && order.getTakeProfitPrice() == null) {
                continue;
            }

            TradingService.MarketAsset currentAsset = liveAssets.stream()
                    .filter(a -> a.getSymbol().equalsIgnoreCase(order.getSymbol()))
                    .findFirst().orElse(null);

            if (currentAsset == null) continue;

            BigDecimal currentPrice = currentAsset.getCurrentPrice();

            // Check Stop-Loss Trigger
            if (order.getStopLossPrice() != null && currentPrice.compareTo(order.getStopLossPrice()) <= 0) {
                executeAutonomousExit(order, currentPrice, StockOrder.OrderStatus.STOP_LOSS_TRIGGERED, "STOP_LOSS");
            }
            // Check Take-Profit Trigger
            else if (order.getTakeProfitPrice() != null && currentPrice.compareTo(order.getTakeProfitPrice()) >= 0) {
                executeAutonomousExit(order, currentPrice, StockOrder.OrderStatus.TAKE_PROFIT_TRIGGERED, "TAKE_PROFIT");
            }
        }
    }

    private void executeAutonomousExit(StockOrder order, BigDecimal currentPrice, StockOrder.OrderStatus newStatus, String triggerType) {
        order.setStatus(newStatus);
        stockOrderRepository.save(order);

        // Execute sell trade
        try {
            tradingService.executeOrder(
                    order.getCustomer().getCustomerId(),
                    order.getSymbol(),
                    StockOrder.OrderType.SELL,
                    order.getQuantity(),
                    null,
                    null
            );
        } catch (Exception e) {
            log.error("TradeSentinelAgent: Error executing auto-exit sell: {}", e.getMessage());
        }

        String auditMsg = String.format("🤖 AI TRADE SENTINEL: Triggered %s for %s (%s shares @ $%s). Autonomous Sell Executed.",
                triggerType, order.getSymbol(), order.getQuantity(), currentPrice);
        log.info(auditMsg);

        auditLogRepository.save(AgentAuditLog.builder()
                .agentName("TradeSentinelAgent")
                .eventType(triggerType + "_EXECUTED")
                .status("SUCCESS")
                .executionDetails(auditMsg)
                .timestamp(LocalDateTime.now())
                .build());

        if (order.getCustomer().getEmail() != null) {
            emailService.sendBillPaymentEmail(
                    order.getCustomer().getEmail(),
                    order.getCustomer().getFullName(),
                    "AI Trade Sentinel: " + order.getSymbol(),
                    order.getTotalAmount(),
                    "EXECUTED (" + triggerType + ")",
                    "The SecureBank AI Trade Sentinel autonomously executed your " + triggerType + " target order at $" + currentPrice
            );
        }
    }
}
