package com.securebank.repository;

import com.securebank.model.Account;
import com.securebank.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    List<Card> findByAccount(Account account);
    List<Card> findByAccountAndCardType(Account account, Card.CardType cardType);
    Optional<Card> findByCardNumber(String cardNumber);
    boolean existsByCardNumber(String cardNumber);
}
