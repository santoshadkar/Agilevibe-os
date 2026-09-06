package com.securebank.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "agent_audit_logs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AgentAuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String agentName;
    private String eventType;
    private String status;

    @Column(length = 2000)
    private String executionDetails;

    private LocalDateTime timestamp;
}
