package com.securebank.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
@Slf4j
public class RateLimitingFilter extends OncePerRequestFilter {

    private static final int MAX_REQUESTS_PER_MINUTE = 120;
    private final Map<String, RequestTracker> clientRequests = new ConcurrentHashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // 1. Inject Enterprise Cyber Security Headers
        response.setHeader("X-Frame-Options", "SAMEORIGIN");
        response.setHeader("X-Content-Type-Options", "nosniff");
        response.setHeader("X-XSS-Protection", "1; mode=block");
        response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

        // 2. Rate Limiting Check
        String clientIp = getClientIp(request);
        long now = System.currentTimeMillis();

        RequestTracker tracker = clientRequests.compute(clientIp, (ip, currentTracker) -> {
            if (currentTracker == null || (now - currentTracker.getStartTime()) > 60000) {
                return new RequestTracker(now, new AtomicInteger(1));
            } else {
                currentTracker.getCount().incrementAndGet();
                return currentTracker;
            }
        });

        if (tracker.getCount().get() > MAX_REQUESTS_PER_MINUTE) {
            log.warn("RateLimitingFilter: IP {} exceeded rate limit ({}/min)", clientIp, tracker.getCount().get());
            response.setStatus(429);
            response.setContentType("application/json");
            response.getWriter().write("{\"success\":false,\"message\":\"⚠️ Security Protection: Rate limit exceeded. Too many requests from this IP.\"}");
            return;
        }

        filterChain.doFilter(request, response);
    }

    private String getClientIp(HttpServletRequest request) {
        String xf = request.getHeader("X-Forwarded-For");
        if (xf == null || xf.isEmpty()) {
            return request.getRemoteAddr();
        }
        return xf.split(",")[0];
    }

    private static class RequestTracker {
        private final long startTime;
        private final AtomicInteger count;

        public RequestTracker(long startTime, AtomicInteger count) {
            this.startTime = startTime;
            this.count = count;
        }

        public long getStartTime() {
            return startTime;
        }

        public AtomicInteger getCount() {
            return count;
        }
    }
}
