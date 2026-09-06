const express = require('express');
const cors = require('cors');
const path = require('path');
const cron = require('node-cron');
const fs = require('fs');

const { getAllJobs, saveJobs, scrapeJobsFromPortals } = require('./src/services/jobAggregator');
const { getCandidateCV, saveCandidateCV, scoreAllJobs } = require('./src/services/aiMatcher');
const { getSettings, saveSettings, getEmailLogs, sendApplicationEmail } = require('./src/services/emailNotifier');
const { runAutoApplyForHighMatches } = require('./src/services/autoApplier');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const isVercel = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
const DATA_DIR = isVercel ? '/tmp/data' : path.join(__dirname, 'data');
const TRACKER_FILE = path.join(DATA_DIR, 'tracker.json');
const LOGS_FILE = path.join(DATA_DIR, 'scheduler_logs.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function getTrackerData() {
  ensureDataDir();
  if (!fs.existsSync(TRACKER_FILE)) {
    const initialTracker = {
      saved: [],
      applied: [],
      interviewing: [],
      offered: []
    };
    fs.writeFileSync(TRACKER_FILE, JSON.stringify(initialTracker, null, 2));
    return initialTracker;
  }
  try {
    return JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf-8'));
  } catch (e) {
    return { saved: [], applied: [], interviewing: [], offered: [] };
  }
}

function saveTrackerData(data) {
  ensureDataDir();
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(data, null, 2));
}

function logSchedulerRun(statusMessage, details = {}) {
  ensureDataDir();
  let logs = [];
  if (fs.existsSync(LOGS_FILE)) {
    try {
      logs = JSON.parse(fs.readFileSync(LOGS_FILE, 'utf-8'));
    } catch (e) {
      logs = [];
    }
  }
  const entry = {
    id: "log-" + Date.now(),
    timestamp: new Date().toISOString(),
    message: statusMessage,
    ...details
  };
  logs.unshift(entry);
  if (logs.length > 50) logs = logs.slice(0, 50);
  fs.writeFileSync(LOGS_FILE, JSON.stringify(logs, null, 2));
  return entry;
}

// -------------------------------------------------------------
// REST API ENDPOINTS
// -------------------------------------------------------------

// Get Scored Jobs Feed
app.get('/api/jobs', (req, res) => {
  try {
    const rawJobs = getAllJobs();
    let scoredJobs = scoreAllJobs(rawJobs);

    const { category, location, workType, search, minScore, highMatchOnly } = req.query;

    if (category && category !== 'All') {
      scoredJobs = scoredJobs.filter(j => j.category.toLowerCase() === category.toLowerCase());
    }

    if (location && location !== 'All') {
      scoredJobs = scoredJobs.filter(j => j.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (workType && workType !== 'All') {
      scoredJobs = scoredJobs.filter(j => j.workType.toLowerCase() === workType.toLowerCase());
    }

    if (highMatchOnly === 'true') {
      scoredJobs = scoredJobs.filter(j => j.match.isHighMatch);
    }

    if (minScore) {
      const min = parseInt(minScore, 10);
      if (!isNaN(min)) {
        scoredJobs = scoredJobs.filter(j => j.match.matchScore >= min);
      }
    }

    if (search) {
      const term = search.toLowerCase();
      scoredJobs = scoredJobs.filter(j => 
        j.title.toLowerCase().includes(term) ||
        j.company.toLowerCase().includes(term) ||
        j.description.toLowerCase().includes(term) ||
        (j.skills || []).some(s => s.toLowerCase().includes(term))
      );
    }

    const tracker = getTrackerData();

    scoredJobs = scoredJobs.map(job => {
      let status = "New";
      if (tracker.saved.includes(job.id)) status = "Saved";
      if (tracker.applied.includes(job.id)) status = "Applied";
      if (tracker.interviewing.includes(job.id)) status = "Interviewing";
      if (tracker.offered.includes(job.id)) status = "Offered";
      return { ...job, userStatus: status };
    });

    res.json({
      success: true,
      totalCount: scoredJobs.length,
      jobs: scoredJobs
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Trigger Job Scrape
app.post('/api/jobs/scrape', (req, res) => {
  try {
    const result = scrapeJobsFromPortals();
    logSchedulerRun(`Manual/On-Demand Job Aggregation executed. Found ${result.newJobsScraped} new postings.`, {
      type: "manual",
      newJobsScraped: result.newJobsScraped
    });

    // Check if auto-apply settings should trigger auto-apply after scraping
    const settings = getSettings();
    let autoApplyResult = null;
    if (settings.autoApplyEnabled) {
      autoApplyResult = runAutoApplyForHighMatches(settings.minAutoApplyScore);
    }

    res.json({ ...result, autoApplyResult });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Trigger Auto-Apply on Demand
app.post('/api/auto-apply', async (req, res) => {
  try {
    const { minScore } = req.body;
    const result = await runAutoApplyForHighMatches(minScore || null);
    logSchedulerRun(`AI Auto-Apply Agent executed. Automatically applied for ${result.totalAutoApplied} high-probability jobs and dispatched email alerts.`, {
      type: "auto_apply",
      totalApplied: result.totalAutoApplied
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get/Update Agent Settings & Email Config
app.get('/api/settings', (req, res) => {
  try {
    const settings = getSettings();
    res.json({ success: true, settings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/settings', (req, res) => {
  try {
    const updatedSettings = saveSettings(req.body);
    logSchedulerRun("Agent & Email Notification Settings updated.");
    res.json({ success: true, settings: updatedSettings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Email Audit Trail Logs
app.get('/api/email-logs', (req, res) => {
  try {
    const logs = getEmailLogs();
    res.json({ success: true, logs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get/Update Candidate CV
app.get('/api/cv', (req, res) => {
  try {
    const cv = getCandidateCV();
    res.json({ success: true, cv });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/cv', (req, res) => {
  try {
    const cvData = req.body;
    if (!cvData || !cvData.skills) {
      return res.status(400).json({ success: false, error: "CV data must include skills array." });
    }
    const updatedCV = saveCandidateCV(cvData);
    logSchedulerRun("Candidate CV Profile updated successfully.");
    res.json({ success: true, cv: updatedCV });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Pipeline Tracker
app.get('/api/tracker', (req, res) => {
  try {
    const tracker = getTrackerData();
    const allJobs = getAllJobs();
    const scoredJobs = scoreAllJobs(allJobs);
    
    const grouped = { saved: [], applied: [], interviewing: [], offered: [] };

    scoredJobs.forEach(j => {
      if (tracker.saved.includes(j.id)) grouped.saved.push(j);
      if (tracker.applied.includes(j.id)) grouped.applied.push(j);
      if (tracker.interviewing.includes(j.id)) grouped.interviewing.push(j);
      if (tracker.offered.includes(j.id)) grouped.offered.push(j);
    });

    res.json({ success: true, tracker, jobsByStatus: grouped });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/tracker', async (req, res) => {
  try {
    const { jobId, newStatus, triggerEmail } = req.body;
    if (!jobId || !newStatus) {
      return res.status(400).json({ success: false, error: "jobId and newStatus are required." });
    }

    const tracker = getTrackerData();

    ['saved', 'applied', 'interviewing', 'offered'].forEach(key => {
      tracker[key] = tracker[key].filter(id => id !== jobId);
    });

    const targetKey = newStatus.toLowerCase();
    if (tracker[targetKey]) {
      tracker[targetKey].push(jobId);
    }

    saveTrackerData(tracker);

    // If user marked as Applied (or clicked Auto-Apply), dispatch email confirmation
    let emailResult = null;
    if (newStatus === 'Applied' || triggerEmail) {
      const allJobs = getAllJobs();
      const targetJob = scoreAllJobs(allJobs).find(j => j.id === jobId);
      if (targetJob) {
        const cv = getCandidateCV();
        emailResult = await sendApplicationEmail(targetJob, cv);
      }
    }

    res.json({ success: true, jobId, newStatus, tracker, emailResult });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Stats
app.get('/api/stats', (req, res) => {
  try {
    const rawJobs = getAllJobs();
    const scoredJobs = scoreAllJobs(rawJobs);
    const tracker = getTrackerData();
    const emailLogs = getEmailLogs();
    const settings = getSettings();

    const highMatchCount = scoredJobs.filter(j => j.match.isHighMatch).length;
    const categoryCounts = {
      "Agile Coach": scoredJobs.filter(j => j.category === "Agile Coach").length,
      "AI Consultant": scoredJobs.filter(j => j.category === "AI Consultant").length,
      "AI Leader": scoredJobs.filter(j => j.category === "AI Leader").length,
      "Cyber Security Consultant": scoredJobs.filter(j => j.category === "Cyber Security Consultant").length
    };

    let logs = [];
    if (fs.existsSync(LOGS_FILE)) {
      try { logs = JSON.parse(fs.readFileSync(LOGS_FILE, 'utf-8')); } catch(e){}
    }

    res.json({
      success: true,
      totalJobs: scoredJobs.length,
      highMatchCount: highMatchCount,
      appliedCount: tracker.applied.length,
      interviewingCount: tracker.interviewing.length,
      autoAppliedCount: emailLogs.length,
      categoryCounts,
      settings,
      lastScrapeTime: logs[0] ? logs[0].timestamp : new Date().toISOString(),
      recentLogs: logs.slice(0, 8),
      recentEmailLogs: emailLogs.slice(0, 5)
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// -------------------------------------------------------------
// AUTOMATED MORNING SCHEDULER & AUTO-APPLY (node-cron)
// -------------------------------------------------------------
cron.schedule('0 8 * * *', async () => {
  console.log('⏰ Running Automated Morning Job Collection & AI Auto-Apply...');
  try {
    const scrapeResult = scrapeJobsFromPortals();
    logSchedulerRun(`Automated Morning Run completed. Found ${scrapeResult.newJobsScraped} new postings.`, {
      type: "scheduled_morning",
      newJobsScraped: scrapeResult.newJobsScraped
    });

    const settings = getSettings();
    if (settings.autoApplyEnabled) {
      const applyResult = await runAutoApplyForHighMatches(settings.minAutoApplyScore);
      logSchedulerRun(`Automated Morning Auto-Apply completed. Auto-applied for ${applyResult.totalAutoApplied} high match jobs and dispatched email alerts.`, {
        type: "scheduled_auto_apply",
        totalApplied: applyResult.totalAutoApplied
      });
    }
  } catch (err) {
    logSchedulerRun(`Automated Morning Run error: ${err.message}`, { type: "scheduled_morning_error" });
  }
});

logSchedulerRun("AI Job Hunter Agent active with Auto-Apply & Email Dispatcher (08:00 AM daily).");

if (!isVercel) {
  app.listen(PORT, () => {
    console.log(`🚀 AI Job Hunter Agent Portal running at http://localhost:${PORT}`);
  });
}

module.exports = app;
