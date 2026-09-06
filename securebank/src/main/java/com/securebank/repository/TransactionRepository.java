package com.securebank.repository;

import com.securebank.model.Account;
import com.securebank.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    Page<Transaction> findByAccountOrderByTimestampDesc(Account account, Pageable pageable);
    List<Transaction> findByAccountAndTimestampBetweenOrderByTimestampDesc(Account account, LocalDateTime from, LocalDateTime to);
    Optional<Transaction> findByTransactionId(String transactionId);
    List<Transaction> findTop10ByAccountOrderByTimestampDesc(Account account);
}
