#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import axios from "axios";

/**
 * Initialize the MCP Server instance for Claude
 */
const server = new McpServer({
  name: "api-integration-server",
  version: "1.0.0",
});

/**
 * Tool 1: General GET Request to any public or authenticated REST API
 */
server.tool(
  "fetch_rest_api",
  "Fetch data from any public REST API endpoint via GET request",
  {
    url: z.string().url().describe("The full URL of the REST API endpoint to call"),
    headers: z
      .record(z.string())
      .optional()
      .describe("Optional HTTP header key-value pairs (e.g. Authorization, Accept)"),
    params: z
      .record(z.string())
      .optional()
      .describe("Optional URL query parameters"),
  },
  async ({ url, headers, params }) => {
    try {
      const response = await axios.get(url, {
        headers: headers || {},
        params: params || {},
        timeout: 15000,
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response.data, null, 2),
          },
        ],
      };
    } catch (error: any) {
      const errorMessage = error.response
        ? `HTTP ${error.response.status}: ${JSON.stringify(error.response.data)}`
        : error.message;

      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Error fetching REST API endpoint: ${errorMessage}`,
          },
        ],
      };
    }
  }
);

/**
 * Tool 2: General POST Request to send JSON payloads to a REST API
 */
server.tool(
  "post_rest_api",
  "Send POST JSON payload to a REST API endpoint",
  {
    url: z.string().url().describe("The full URL of the REST API endpoint"),
    payload: z.record(z.any()).describe("JSON payload body to send"),
    headers: z
      .record(z.string())
      .optional()
      .describe("Optional HTTP headers (e.g., Content-Type, Authorization)"),
  },
  async ({ url, payload, headers }) => {
    try {
      const response = await axios.post(url, payload, {
        headers: headers || { "Content-Type": "application/json" },
        timeout: 15000,
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response.data, null, 2),
          },
        ],
      };
    } catch (error: any) {
      const errorMessage = error.response
        ? `HTTP ${error.response.status}: ${JSON.stringify(error.response.data)}`
        : error.message;

      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Error posting to REST API endpoint: ${errorMessage}`,
          },
        ],
      };
    }
  }
);

/**
 * Tool 3: Sample Specialized API - Open-Meteo Weather Forecast API
 */
server.tool(
  "get_weather_forecast",
  "Get real-time weather forecast for latitude and longitude coordinates using Open-Meteo API",
  {
    latitude: z
      .number()
      .describe("Latitude coordinate (e.g. 37.7749 for San Francisco, 28.6139 for New Delhi)"),
    longitude: z
      .number()
      .describe("Longitude coordinate (e.g. -122.4194 for San Francisco, 77.2090 for New Delhi)"),
    current_weather: z
      .boolean()
      .default(true)
      .describe("Whether to include current weather conditions"),
  },
  async ({ latitude, longitude, current_weather }) => {
    try {
      const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
          latitude,
          longitude,
          current_weather: current_weather ? "true" : "false",
          hourly: "temperature_2m,relative_humidity_2m,precipitation",
        },
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response.data, null, 2),
          },
        ],
      };
    } catch (error: any) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Failed to retrieve weather forecast: ${error.message}`,
          },
        ],
      };
    }
  }
);

/**
 * Tool 4: Sample Specialized API - JSONPlaceholder Mock Service
 */
server.tool(
  "get_mock_posts",
  "Retrieve sample posts from JSONPlaceholder mock API service",
  {
    limit: z
      .number()
      .min(1)
      .max(20)
      .default(5)
      .describe("Number of mock posts to retrieve (1 to 20)"),
  },
  async ({ limit }) => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: { _limit: limit },
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response.data, null, 2),
          },
        ],
      };
    } catch (error: any) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Failed to fetch mock posts: ${error.message}`,
          },
        ],
      };
    }
  }
);

/**
 * Connect to Stdio Transport for Claude Desktop / CLI integration
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP REST API Integration Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error starting MCP server:", error);
  process.exit(1);
});
