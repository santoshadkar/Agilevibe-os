module.exports = {
  apps: [
    {
      name: "techpulse-server",
      script: "./server/scheduler.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
