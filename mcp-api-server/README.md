# MCP REST API Server for Claude

A Model Context Protocol (MCP) server written in TypeScript using `@modelcontextprotocol/sdk`. This server allows Claude (in Claude Desktop, Claude Code, or any MCP host) to interact with external REST APIs and Web Services.

## Features

1. **`fetch_rest_api`**: Make HTTP GET requests to any REST API endpoint with headers & query parameters.
2. **`post_rest_api`**: Send HTTP POST JSON payloads to any REST API endpoint.
3. **`get_weather_forecast`**: Example specialized tool calling Open-Meteo Weather API.
4. **`get_mock_posts`**: Example specialized tool calling JSONPlaceholder API.

---

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Build TypeScript Source
```bash
npm run build
```

This will generate the compiled JavaScript output in `./build/index.js`.

---

## Testing with MCP Inspector

You can visually test and debug your MCP tools in a web interface using the official MCP Inspector:

```bash
npm run inspector
```

This will launch the MCP Inspector web UI in your browser where you can inspect registered tools and execute them interactively.

---

## Integration with Claude Desktop

To connect this MCP server to **Claude Desktop**:

1. Open your Claude Desktop configuration file:
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

2. Add your server under the `mcpServers` section:

```json
{
  "mcpServers": {
    "api-server": {
      "command": "node",
      "args": [
        "C:\\Users\\anany\\.gemini\\antigravity\\scratch\\mcp-api-server\\build\\index.js"
      ]
    }
  }
}
```

3. Restart Claude Desktop.
4. You will see a hammer 🔨 icon inside Claude Desktop showing your new MCP tools available for Claude to use!

---

## Adding Custom REST APIs / Tools

To add your own API endpoints, simply edit `src/index.ts` and add a new `server.tool(...)` definition:

```typescript
server.tool(
  "my_custom_tool",
  "Description of what this tool does for Claude",
  {
    paramName: z.string().describe("Description of parameter")
  },
  async ({ paramName }) => {
    // Perform API fetch or computation here...
    return {
      content: [{ type: "text", text: "Result string or JSON" }]
    };
  }
);
```

Then re-run `npm run build`!
