package com.securebank.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ManyaChatResponse {
    @Builder.Default
    private String agentName = "Manya";
    private String reply;
    private LocalDateTime timestamp;
    private String actionType;
    private Map<String, Object> actionData;
    private List<String> quickReplies;
}
