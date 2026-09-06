package com.securebank.repository;

import com.securebank.model.Account;
import com.securebank.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Optional<Account> findByAccountNumber(String accountNumber);
    List<Account> findByCustomer(Customer customer);
    List<Account> findByCustomerAndStatus(Customer customer, Account.AccountStatus status);
    boolean existsByAccountNumber(String accountNumber);
}
