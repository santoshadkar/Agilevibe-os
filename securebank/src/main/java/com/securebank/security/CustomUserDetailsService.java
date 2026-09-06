package com.securebank.security;

import com.securebank.model.Customer;
import com.securebank.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String customerId) throws UsernameNotFoundException {
        Customer customer = customerRepository.findByCustomerId(customerId)
                .orElseThrow(() -> new UsernameNotFoundException("Customer not found: " + customerId));

        return User.builder()
                .username(customer.getCustomerId())
                .password(customer.getPasswordHash())
                .roles("CUSTOMER")
                .accountLocked(!customer.isActive())
                .build();
    }
}
