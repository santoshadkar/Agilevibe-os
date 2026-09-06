/**
 * AI CV Matcher & Interview Call Probability Engine
 * Compares Candidate CV profile against collected job listings to calculate match score,
 * interview call probability, matching strengths, skill gaps, and CV enhancement advice.
 */

const fs = require('fs');
const path = require('path');

const isVercel = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;
const DATA_DIR = isVercel ? '/tmp/data' : path.join(__dirname, '../../data');
const CV_FILE = path.join(DATA_DIR, 'cv.json');

// Default Candidate CV profile demonstrating executive expertise across target areas
const DEFAULT_CV = {
  name: "Alex Morgan",
  title: "Senior AI Consultant, Enterprise Agile Coach & Cyber Security Advisor",
  summary: "Results-driven technology executive with 12+ years of experience spearheading digital transformations, Generative AI strategy, enterprise SAFe agile coaching, and cyber security governance. Skilled in bridging C-suite vision with hands-on AI engineering and Zero Trust security architectures.",
  skills: [
    "Generative AI", "LLM Fine-tuning", "RAG Architecture", "Enterprise AI Strategy", "Python", "LangChain", 
    "SAFe 6.0", "Scaled Agile", "Executive Coaching", "Jira Align", "Change Management", "Value Stream Mapping",
    "CISSP", "CISM", "Zero Trust Architecture", "ISO 27001", "NIST CSF", "Cloud Security", "DevSecOps"
  ],
  certifications: [
    "SAFe Program Consultant (SPC 6.0)",
    "Certified Information Systems Security Professional (CISSP)",
    "Certified Information Security Manager (CISM)",
    "AWS Certified AI/ML Specialty",
    "Certified Scrum Master (CSM)"
  ],
  experience: [
    {
      role: "Lead AI & Agile Transformation Consultant",
      company: "Apex Tech Consulting",
      period: "2022 - Present",
      highlights: "Led 8 enterprise Generative AI pilot projects, saved $3.5M via automated workflows, coached 12 cross-functional squads in SAFe 6.0, and established ISO 27001 security compliance."
    },
    {
      role: "Senior Cyber Security & Enterprise Agile Coach",
      company: "SecureScale Global",
      period: "2018 - 2022",
      highlights: "Designed Zero Trust cloud security frameworks for Fortune 500 clients while facilitating executive agile workshops for over 250+ engineers."
    }
  ]
};

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function getCandidateCV() {
  ensureDataDir();
  if (!fs.existsSync(CV_FILE)) {
    fs.writeFileSync(CV_FILE, JSON.stringify(DEFAULT_CV, null, 2));
    return DEFAULT_CV;
  }
  try {
    const raw = fs.readFileSync(CV_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return DEFAULT_CV;
  }
}

function saveCandidateCV(cvData) {
  ensureDataDir();
  fs.writeFileSync(CV_FILE, JSON.stringify(cvData, null, 2));
  return cvData;
}

/**
 * Calculates match score and interview call probability for a job listing against the candidate CV
 */
function evaluateJobMatch(job, cv) {
  const cvSkills = new Set((cv.skills || []).map(s => s.toLowerCase()));
  const cvText = JSON.stringify(cv).toLowerCase();
  
  const jobSkills = job.skills || [];
  let matchedSkills = [];
  let missingSkills = [];

  jobSkills.forEach(skill => {
    const sLower = skill.toLowerCase();
    let isMatch = Array.from(cvSkills).some(cs => cs.includes(sLower) || sLower.includes(cs));
    if (!isMatch) {
      isMatch = cvText.includes(sLower);
    }
    if (isMatch) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  // Calculate Base Match Percentage
  const skillRatio = jobSkills.length > 0 ? (matchedSkills.length / jobSkills.length) : 0.8;
  
  // Category bonus if candidate summary hits domain keywords
  let domainBonus = 0.1;
  const categoryLower = (job.category || "").toLowerCase();
  if (cvText.includes(categoryLower) || cvText.includes(categoryLower.replace("consultant", "").trim())) {
    domainBonus = 0.2;
  }

  const rawScore = Math.min(100, Math.round((skillRatio * 80) + (domainBonus * 100)));

  // Interview Call Probability Rating
  let callProbability = "Medium";
  let probabilityBadge = "⚡ Medium (60-79%)";
  let probabilityColor = "#f59e0b"; // Amber

  if (rawScore >= 80) {
    callProbability = "High";
    probabilityBadge = "🔥 High (80-100%)";
    probabilityColor = "#10b981"; // Emerald green
  } else if (rawScore < 60) {
    callProbability = "Low";
    probabilityBadge = "💡 Low (<60%)";
    probabilityColor = "#ef4444"; // Red
  }

  // Generate tailored advice to boost interview call rate
  let customAdvice = [];
  if (matchedSkills.length > 0) {
    customAdvice.push(`Highlight your top matching skills (${matchedSkills.slice(0, 3).join(', ')}) in your CV header/summary.`);
  }
  if (missingSkills.length > 0) {
    customAdvice.push(`Consider adding keywords like '${missingSkills[0]}' or equivalent project experience in your bullet points to pass ATS screening.`);
  } else {
    customAdvice.push("Your CV matches 100% of requested skills! Submit application immediately for top priority response.");
  }
  if (job.workType === "Remote") {
    customAdvice.push("Emphasize remote team collaboration, async communications, and global delivery track record.");
  }

  return {
    jobId: job.id,
    matchScore: rawScore,
    callProbability: callProbability,
    probabilityBadge: probabilityBadge,
    probabilityColor: probabilityColor,
    matchedSkills: matchedSkills,
    missingSkills: missingSkills,
    recommendations: customAdvice,
    isHighMatch: rawScore >= 80
  };
}

/**
 * Scores a list of jobs against candidate CV
 */
function scoreAllJobs(jobs) {
  const cv = getCandidateCV();
  return jobs.map(job => {
    const matchResult = evaluateJobMatch(job, cv);
    return {
      ...job,
      match: matchResult
    };
  }).sort((a, b) => b.match.matchScore - a.match.matchScore);
}

module.exports = {
  getCandidateCV,
  saveCandidateCV,
  evaluateJobMatch,
  scoreAllJobs
};
