package com.securebank.repository;

import com.securebank.model.Beneficiary;
import com.securebank.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Long> {
    List<Beneficiary> findByCustomerAndActiveTrue(Customer customer);
    Optional<Beneficiary> findByIdAndCustomer(Long id, Customer customer);
    boolean existsByCustomerAndAccountNumber(Customer customer, String accountNumber);
}
