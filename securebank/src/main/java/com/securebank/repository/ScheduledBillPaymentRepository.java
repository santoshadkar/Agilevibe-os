package com.securebank.repository;

import com.securebank.model.Customer;
import com.securebank.model.ScheduledBillPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScheduledBillPaymentRepository extends JpaRepository<ScheduledBillPayment, Long> {
    List<ScheduledBillPayment> findByCustomer(Customer customer);
    List<ScheduledBillPayment> findByCustomerOrderByScheduledDateAsc(Customer customer);
    List<ScheduledBillPayment> findByStatusAndScheduledDateLessThanEqual(
            ScheduledBillPayment.ScheduleStatus status, LocalDate date);
}
