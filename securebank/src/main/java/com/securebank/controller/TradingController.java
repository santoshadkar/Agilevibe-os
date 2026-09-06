package com.securebank.controller;

import com.securebank.dto.response.ApiResponse;
import com.securebank.model.StockOrder;
import com.securebank.service.TradingService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Collection;

@RestController
@RequestMapping("/api/trading")
@RequiredArgsConstructor
public class TradingController {

    private final TradingService tradingService;

    @GetMapping("/market-prices")
    public ResponseEntity<ApiResponse<Collection<TradingService.MarketAsset>>> getMarketPrices() {
        return ResponseEntity.ok(ApiResponse.success("Market prices updated", tradingService.getLiveMarketPrices()));
    }

    @GetMapping("/portfolio")
    public ResponseEntity<ApiResponse<TradingService.PortfolioSummary>> getPortfolio(Authentication auth) {
        String customerId = (auth != null && auth.getName() != null) ? auth.getName() : "anonymousUser";
        return ResponseEntity.ok(ApiResponse.success("Portfolio loaded", tradingService.getPortfolio(customerId)));
    }

    @PostMapping("/order")
    public ResponseEntity<ApiResponse<StockOrder>> executeOrder(@RequestBody TradeOrderRequest request, Authentication auth) {
        String customerId = (auth != null && auth.getName() != null) ? auth.getName() : "anonymousUser";
        
        StockOrder.OrderType type = StockOrder.OrderType.valueOf(request.getOrderType().toUpperCase());
        StockOrder executed = tradingService.executeOrder(
                customerId,
                request.getSymbol(),
                type,
                request.getQuantity(),
                request.getStopLossPrice(),
                request.getTakeProfitPrice()
        );
        return ResponseEntity.ok(ApiResponse.success("Trade executed successfully via SecureBank Trading Desk", executed));
    }

    @Data
    public static class TradeOrderRequest {
        private String symbol;
        private String orderType; // BUY or SELL
        private BigDecimal quantity;
        private BigDecimal stopLossPrice;
        private BigDecimal takeProfitPrice;
        private String securityPin;
    }
}
