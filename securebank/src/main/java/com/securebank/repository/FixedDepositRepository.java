package com.securebank.repository;

import com.securebank.model.Account;
import com.securebank.model.FixedDeposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface FixedDepositRepository extends JpaRepository<FixedDeposit, Long> {
    List<FixedDeposit> findByAccount(Account account);
    List<FixedDeposit> findByAccountAndStatus(Account account, FixedDeposit.FDStatus status);
    Optional<FixedDeposit> findByFdNumber(String fdNumber);
    boolean existsByFdNumber(String fdNumber);
}
