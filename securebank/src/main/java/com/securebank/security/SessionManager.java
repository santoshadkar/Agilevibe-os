package com.securebank.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Slf4j
public class SessionManager {

    @Value("${app.session.timeout}")
    private long sessionTimeoutMs;

    // customerId -> last activity timestamp
    private final Map<String, Instant> lastActivityMap = new ConcurrentHashMap<>();
    // customerId -> JWT token (for invalidation)
    private final Map<String, String> activeTokenMap = new ConcurrentHashMap<>();
    // Invalidated tokens set
    private final Map<String, Boolean> invalidatedTokens = new ConcurrentHashMap<>();

    public void recordActivity(String customerId, String token) {
        lastActivityMap.put(customerId, Instant.now());
        activeTokenMap.put(customerId, token);
    }

    public void registerSession(String customerId, String token) {
        lastActivityMap.put(customerId, Instant.now());
        activeTokenMap.put(customerId, token);
    }

    public boolean isSessionValid(String customerId, String token) {
        if (invalidatedTokens.containsKey(token)) {
            return false;
        }
        Instant lastActivity = lastActivityMap.get(customerId);
        if (lastActivity == null) {
            return false;
        }
        long elapsedMs = Instant.now().toEpochMilli() - lastActivity.toEpochMilli();
        return elapsedMs <= sessionTimeoutMs;
    }

    public void invalidateSession(String customerId) {
        String token = activeTokenMap.remove(customerId);
        if (token != null) {
            invalidatedTokens.put(token, true);
        }
        lastActivityMap.remove(customerId);
        log.info("Session invalidated for customer: {}", customerId);
    }

    public boolean isTokenInvalidated(String token) {
        return invalidatedTokens.containsKey(token);
    }

    // Clean up expired sessions every minute
    @Scheduled(fixedRate = 60000)
    public void cleanExpiredSessions() {
        Instant cutoff = Instant.now().minusMillis(sessionTimeoutMs);
        lastActivityMap.entrySet().removeIf(entry -> {
            if (entry.getValue().isBefore(cutoff)) {
                String customerId = entry.getKey();
                String token = activeTokenMap.remove(customerId);
                if (token != null) {
                    invalidatedTokens.put(token, true);
                }
                log.info("Auto-expired idle session for customer: {}", customerId);
                return true;
            }
            return false;
        });
    }

    // Clean old invalidated tokens every hour
    @Scheduled(fixedRate = 3600000)
    public void cleanInvalidatedTokens() {
        // In production, would track timestamps; here we limit to 10000 entries
        if (invalidatedTokens.size() > 10000) {
            invalidatedTokens.clear();
        }
    }
}
