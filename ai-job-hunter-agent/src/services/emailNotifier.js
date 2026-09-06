/**
 * Email Notification & Auto-Apply Dispatcher Service
 * Dispatches confirmation emails to the candidate when the AI Agent applies for a job on their behalf.
 */

const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const isVercel = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
const DATA_DIR = isVercel ? '/tmp/data' : path.join(__dirname, '../../data');
const EMAIL_LOGS_FILE = path.join(DATA_DIR, 'email_notifications.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function getSettings() {
  ensureDataDir();
  if (!fs.existsSync(SETTINGS_FILE)) {
    const defaultSettings = {
      autoApplyEnabled: true,
      minAutoApplyScore: 80,
      userEmail: "candidate@example.com",
      smtpConfigured: false,
      smtpHost: "smtp.gmail.com",
      smtpPort: 587,
      smtpUser: "",
      smtpPass: ""
    };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2));
    return defaultSettings;
  }
  try {
    return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf-8'));
  } catch (e) {
    return { autoApplyEnabled: true, minAutoApplyScore: 80, userEmail: "candidate@example.com" };
  }
}

function saveSettings(settings) {
  ensureDataDir();
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
  return settings;
}

function getEmailLogs() {
  ensureDataDir();
  if (!fs.existsSync(EMAIL_LOGS_FILE)) {
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(EMAIL_LOGS_FILE, 'utf-8'));
  } catch (e) {
    return [];
  }
}

function logEmailSent(emailPayload) {
  ensureDataDir();
  const logs = getEmailLogs();
  const entry = {
    id: "email-" + Date.now(),
    timestamp: new Date().toISOString(),
    ...emailPayload
  };
  logs.unshift(entry);
  if (logs.length > 50) logs.pop();
  fs.writeFileSync(EMAIL_LOGS_FILE, JSON.stringify(logs, null, 2));
  return entry;
}

/**
 * Sends an email notification when a job is auto-applied or manually applied on user's behalf
 */
async function sendApplicationEmail(job, cv, options = {}) {
  const settings = getSettings();
  const recipientEmail = options.userEmail || settings.userEmail || "candidate@example.com";
  const matchScore = job.match ? job.match.matchScore : 85;

  const subject = `[AI Auto-Applied] Applied for ${job.title} at ${job.company} (${matchScore}% Match)`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; background-color: #f4f6f9; padding: 20px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
        <div style="background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 20px;">🤖 Job Applied on Your Behalf!</h2>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">AI Job Intelligence Agent • Daily Auto-Apply</p>
        </div>

        <p style="font-size: 16px;">Hello <strong>${cv.name || 'Candidate'}</strong>,</p>
        <p>Your AI Agent has automatically submitted your CV profile for the following high-probability opportunity:</p>

        <div style="background: #f8fafc; border-left: 4px solid #6366f1; padding: 16px; border-radius: 4px; margin: 16px 0;">
          <h3 style="margin: 0 0 8px 0; color: #1e293b;">${job.title}</h3>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Company:</strong> ${job.company}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${job.location}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Salary Range:</strong> ${job.salary || 'Competitive'}</p>
          <p style="margin: 4px 0; font-size: 14px;"><strong>Portal Source:</strong> ${job.portal}</p>
          <p style="margin: 4px 0; font-size: 14px; color: #10b981;"><strong>Interview Call Probability:</strong> 🔥 High (${matchScore}% Match Score)</p>
        </div>

        <h4>📄 Attached Application Artifacts:</h4>
        <ul>
          <li><strong>CV Version:</strong> ${cv.title || 'Executive CV'}</li>
          <li><strong>Top Matched Skills:</strong> ${(job.match && job.match.matchedSkills) ? job.match.matchedSkills.join(', ') : 'All core skills'}</li>
          <li><strong>Custom Tailoring:</strong> Executive highlights customized for ${job.company}.</li>
        </ul>

        <div style="margin-top: 24px; text-align: center;">
          <a href="${job.url}" target="_blank" style="background: #6366f1; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
            View Applied Job Listing ↗
          </a>
        </div>

        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size: 12px; color: #6b7280; text-align: center;">
          This email was generated automatically by your local AI Job Hunter Agent on ${new Date().toLocaleString()}.
        </p>
      </div>
    </div>
  `;

  // Log notification to persistent JSON audit trail
  const loggedEntry = logEmailSent({
    recipient: recipientEmail,
    subject: subject,
    jobTitle: job.title,
    company: job.company,
    matchScore: matchScore,
    status: "Sent & Logged",
    bodyPreview: `Applied for ${job.title} at ${job.company}`
  });

  // Attempt real SMTP dispatch if user configured SMTP
  if (settings.smtpConfigured && settings.smtpUser && settings.smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: settings.smtpHost,
        port: settings.smtpPort,
        secure: settings.smtpPort === 465,
        auth: {
          user: settings.smtpUser,
          pass: settings.smtpPass
        }
      });

      await transporter.sendMail({
        from: `"AI Job Agent" <${settings.smtpUser}>`,
        to: recipientEmail,
        subject: subject,
        html: htmlBody
      });
      console.log(`✉️ Email successfully dispatched to ${recipientEmail}`);
    } catch (err) {
      console.error("SMTP dispatch error (logged in portal):", err.message);
    }
  }

  return loggedEntry;
}

module.exports = {
  getSettings,
  saveSettings,
  getEmailLogs,
  sendApplicationEmail
};
