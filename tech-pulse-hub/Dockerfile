# TechPulse Nexus Production Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy source code and server files
COPY . .

# Build Vite static assets
RUN npx vite build

# Expose API & Web ports
EXPOSE 5000 3000

# Start 08:00 AM Cron Daemon & API Server
CMD ["node", "server/scheduler.js"]
