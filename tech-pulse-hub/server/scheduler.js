import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { runMorningBatch } from './aggregator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '..', 'data', 'news_db.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let executionLogs = [
  `[SYSTEM START] Batch daemon initialized at ${new Date().toLocaleTimeString()}`,
  `[SCHEDULER] Daily 08:00 AM Cron schedule configured: '0 8 * * *'`
];

function getDatabase() {
  if (fs.existsSync(DATA_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch (e) {
      console.error('Error reading news database:', e);
    }
  }
  return null;
}

// Ensure database exists on start
let currentDb = getDatabase();
if (!currentDb) {
  console.log('[INIT] Seeding initial database...');
  runMorningBatch().then(data => {
    currentDb = data;
    executionLogs.push(`[INIT BATCH] Seeded initial database with ${data.articles.length} articles.`);
  });
}

// -------------------------------------------------------------
// Daily 08:00 AM Cron Schedule Execution
// -------------------------------------------------------------
cron.schedule('0 8 * * *', async () => {
  const timeStr = new Date().toLocaleString();
  console.log(`[08:00 AM CRON TRIGGERED] Executing scheduled morning intelligence batch at ${timeStr}`);
  executionLogs.push(`[08:00 AM CRON] Triggered morning batch processing at ${timeStr}`);
  
  try {
    const updatedData = await runMorningBatch();
    currentDb = updatedData;
    executionLogs.push(`[08:00 AM CRON SUCCESS] Completed aggregation of ${updatedData.totalArticles} articles.`);
  } catch (err) {
    console.error('[08:00 AM CRON FAILED]', err);
    executionLogs.push(`[08:00 AM CRON ERROR] ${err.message}`);
  }
});

// API Routes
app.get('/api/news', (req, res) => {
  const db = getDatabase();
  if (db) {
    res.json({ success: true, data: db });
  } else {
    res.status(500).json({ success: false, message: 'Database not ready' });
  }
});

app.post('/api/run-batch', async (req, res) => {
  const startTime = new Date().toLocaleTimeString();
  executionLogs.push(`[MANUAL TRIGGER] User initiated batch job at ${startTime}`);
  try {
    const updatedData = await runMorningBatch();
    currentDb = updatedData;
    executionLogs.push(`[MANUAL TRIGGER SUCCESS] Finished processing ${updatedData.totalArticles} articles.`);
    res.json({ success: true, message: 'Morning batch run completed successfully', data: updatedData, logs: executionLogs });
  } catch (err) {
    executionLogs.push(`[MANUAL TRIGGER ERROR] ${err.message}`);
    res.status(500).json({ success: false, message: err.message, logs: executionLogs });
  }
});

app.get('/api/status', (req, res) => {
  const db = getDatabase();
  res.json({
    success: true,
    status: 'ACTIVE',
    cronSchedule: '08:00 AM Daily (0 8 * * *)',
    lastRunAt: db ? db.lastRunAt : 'Pending',
    totalArticles: db ? db.totalArticles : 0,
    logs: executionLogs.slice(-20)
  });
});

app.post('/api/bookmark', (req, res) => {
  const { id } = req.body;
  const db = getDatabase();
  if (!db) return res.status(500).json({ success: false });

  let targetArticle = db.articles.find(a => a.id === id);
  if (targetArticle) {
    targetArticle.bookmarked = !targetArticle.bookmarked;
    fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf-8');
    return res.json({ success: true, bookmarked: targetArticle.bookmarked });
  }
  res.status(404).json({ success: false, message: 'Article not found' });
});

app.get('/api/digest', (req, res) => {
  const db = getDatabase();
  if (!db) return res.status(500).send('No news database available');

  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  let markdown = `# ⚡ TECHPULSE MORNING EXECUTIVE BRIEFING\n*${todayStr} | Generated at 08:00 AM Batch*\n\n`;
  markdown += `## 📌 Top Executive Takeaways\n`;
  db.morningTLDR.forEach(bullet => {
    markdown += `- ${bullet}\n`;
  });
  markdown += `\n---\n\n`;

  const categories = [
    { key: 'ai', name: '🤖 ARTIFICIAL INTELLIGENCE' },
    { key: 'cybersecurity', name: '🛡️ CYBERSECURITY & THREAT INTEL' },
    { key: 'security', name: '🔐 SECURITY & INFOSEC GOVERNANCE' },
    { key: 'agile', name: '⚡ AGILE & DEVSECOPS' }
  ];

  categories.forEach(cat => {
    const articles = db.articles.filter(a => a.category === cat.key).slice(0, 2);
    if (articles.length > 0) {
      markdown += `### ${cat.name}\n\n`;
      articles.forEach(a => {
        markdown += `#### [${a.impact}] ${a.title}\n`;
        markdown += `**Source**: ${a.source} | **Read Time**: ${a.readTime}\n`;
        markdown += `> ${a.summary}\n\n`;
        markdown += `*Key Takeaways*:\n`;
        a.takeaways.forEach(t => markdown += `  * ${t}\n`);
        markdown += `\n`;
      });
    }
  });

  res.setHeader('Content-Type', 'text/plain');
  res.send(markdown);
});

app.listen(PORT, () => {
  console.log(`[TECHPULSE SERVER] Express background daemon listening on http://localhost:${PORT}`);
  console.log(`[SCHEDULER STATUS] Morning batch active for 08:00 AM daily.`);
});
