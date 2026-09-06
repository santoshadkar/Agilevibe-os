package com.securebank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock_orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StockOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "symbol", nullable = false, length = 10)
    private String symbol; // e.g. NVDA, AAPL, BTC, ETH

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Enumerated(EnumType.STRING)
    @Column(name = "asset_type", nullable = false)
    private AssetType assetType; // STOCK, CRYPTO

    @Enumerated(EnumType.STRING)
    @Column(name = "order_type", nullable = false)
    private OrderType orderType; // BUY, SELL

    @Column(name = "quantity", nullable = false, precision = 12, scale = 4)
    private BigDecimal quantity;

    @Column(name = "price_per_unit", nullable = false, precision = 12, scale = 2)
    private BigDecimal pricePerUnit;

    @Column(name = "total_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal totalAmount;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    @Builder.Default
    private OrderStatus status = OrderStatus.EXECUTED;

    @Column(name = "stop_loss_price", precision = 12, scale = 2)
    private BigDecimal stopLossPrice;

    @Column(name = "take_profit_price", precision = 12, scale = 2)
    private BigDecimal takeProfitPrice;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnore
    private Customer customer;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public enum AssetType {
        STOCK, CRYPTO
    }

    public enum OrderType {
        BUY, SELL
    }

    public enum OrderStatus {
        EXECUTED, PENDING, STOP_LOSS_TRIGGERED, TAKE_PROFIT_TRIGGERED, CANCELLED
    }
}
