package com.securebank.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AgentExecutionResponse {
    private String agentName;
    private String eventType;
    private String status;
    private String decision;
    private Map<String, Object> details;
    private LocalDateTime timestamp;
    private boolean callbackDispatched;
}
