package com.securebank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SecurebankApplication {
    public static void main(String[] args) {
        SpringApplication.run(SecurebankApplication.class, args);
    }
}
