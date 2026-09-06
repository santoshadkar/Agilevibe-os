package com.securebank.repository;

import com.securebank.model.Customer;
import com.securebank.model.StockOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockOrderRepository extends JpaRepository<StockOrder, Long> {
    List<StockOrder> findByCustomerOrderByCreatedAtDesc(Customer customer);
    List<StockOrder> findByCustomerAndStatus(Customer customer, StockOrder.OrderStatus status);
    List<StockOrder> findByStatus(StockOrder.OrderStatus status);
}
