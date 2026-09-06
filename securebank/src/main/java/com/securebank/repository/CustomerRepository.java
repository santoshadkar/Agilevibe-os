package com.securebank.repository;

import com.securebank.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByCustomerId(String customerId);
    Optional<Customer> findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsByPanNumber(String panNumber);
    boolean existsByAadharNumber(String aadharNumber);
    boolean existsByPhone(String phone);
}
