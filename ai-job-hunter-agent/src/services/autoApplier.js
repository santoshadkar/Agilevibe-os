/**
 * Auto-Apply Execution Engine
 * Automatically applies on behalf of the user for jobs meeting the minimum match score threshold,
 * marks them as Applied in the pipeline tracker, and dispatches confirmation email alerts.
 */

const fs = require('fs');
const path = require('path');

const { getAllJobs } = require('./jobAggregator');
const { getCandidateCV, scoreAllJobs } = require('./aiMatcher');
const { getSettings, sendApplicationEmail } = require('./emailNotifier');

const isVercel = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
const DATA_DIR = isVercel ? '/tmp/data' : path.join(__dirname, '../../data');
const TRACKER_FILE = path.join(DATA_DIR, 'tracker.json');

function getTrackerData() {
  if (!fs.existsSync(TRACKER_FILE)) {
    return { saved: [], applied: [], interviewing: [], offered: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(TRACKER_FILE, 'utf-8'));
  } catch (e) {
    return { saved: [], applied: [], interviewing: [], offered: [] };
  }
}

function saveTrackerData(data) {
  fs.writeFileSync(TRACKER_FILE, JSON.stringify(data, null, 2));
}

/**
 * Runs the automated application process for all high-probability jobs
 */
async function runAutoApplyForHighMatches(minScoreOverride = null) {
  const settings = getSettings();
  const cv = getCandidateCV();

  const minScore = minScoreOverride !== null ? minScoreOverride : (settings.minAutoApplyScore || 80);
  const rawJobs = getAllJobs();
  const scoredJobs = scoreAllJobs(rawJobs);
  const tracker = getTrackerData();

  // Find eligible jobs: matchScore >= minScore AND not already applied/interviewing/offered
  const alreadyHandled = new Set([...tracker.applied, ...tracker.interviewing, ...tracker.offered]);

  const eligibleJobs = scoredJobs.filter(j => 
    j.match.matchScore >= minScore && !alreadyHandled.has(j.id)
  );

  let newlyApplied = [];

  for (const job of eligibleJobs) {
    // Mark as applied in tracker
    if (!tracker.applied.includes(job.id)) {
      tracker.applied.push(job.id);
    }
    // Remove from saved if present
    tracker.saved = tracker.saved.filter(id => id !== job.id);

    // Dispatch email notification
    const emailLog = await sendApplicationEmail(job, cv);

    newlyApplied.push({
      jobId: job.id,
      title: job.title,
      company: job.company,
      matchScore: job.match.matchScore,
      emailSentTo: emailLog.recipient,
      timestamp: emailLog.timestamp
    });
  }

  saveTrackerData(tracker);

  return {
    success: true,
    totalAutoApplied: newlyApplied.length,
    appliedJobs: newlyApplied,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  runAutoApplyForHighMatches
};
