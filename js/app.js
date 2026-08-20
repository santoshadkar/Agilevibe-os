// AgileVibe OS - Master Application Bundle (Santoshanand Adkar Coaching Portal Edition)

(function() {
  'use strict';

  // -------------------------------------------------------------
  // 1. AUDIO SYNTHESIZER
  // -------------------------------------------------------------
  class SoundFX {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    }

    playFlip() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) {}
    }

    playPop() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playChime() {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.06);
          gain.gain.setValueAtTime(0.1, now + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.3);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + i * 0.06);
          osc.stop(now + i * 0.06 + 0.3);
        });
      } catch (e) {}
    }
  }

  const sound = new SoundFX();

  // -------------------------------------------------------------
  // 2. MASTER DATA REPOSITORY
  // -------------------------------------------------------------
  const DEFAULT_TEAMS = [
    { id: 'squad-alpha', name: 'Squad Alpha (Mobile & Web)', icon: '🚀' },
    { id: 'squad-beta', name: 'Squad Beta (Core API & Platform)', icon: '⚡' },
    { id: 'squad-gamma', name: 'Squad Gamma (DevSecOps & Data)', icon: '🛡️' }
  ];

  const PRODUCTS_SERVICES_DATA = [
    {
      id: 'enterprise-scaling',
      title: 'Enterprise Agile Transformation & Scaling',
      icon: '🏢',
      desc: 'Custom scaling roadmaps (SAFe, LeSS, Spotify Model) tailored for enterprise engineering orgs of 50 to 1,000+ people.',
      deliverables: ['Value Stream Mapping', 'PI Planning Facilitation', 'Executive Leadership Alignment']
    },
    {
      id: 'role-mentorship',
      title: 'Scrum Master & Product Owner Mentorship',
      icon: '🎓',
      desc: 'Dedicated 1-on-1 coaching bootcamps to elevate Scrum Masters into Master Facilitators and Product Owners into Outcome Owners.',
      deliverables: ['INVEST User Story Workshops', 'GROW/OSKAR Coaching Frameworks', 'Ceremony Observability Audits']
    },
    {
      id: 'psych-safety-audit',
      title: 'Psychological Safety & High-Trust Audits',
      icon: '🛡️',
      desc: 'Diagnostic assessments based on Dr. Amy Edmondson’s research to identify team blame cultures and restore psychological safety.',
      deliverables: ['Team Trust Index Survey', 'Non-Violent Communication Workshops', 'Blameless Post-Mortem Systems']
    },
    {
      id: 'ai-agile-bootcamp',
      title: 'AI-Powered Agile Efficiency Bootcamps',
      icon: '🤖',
      desc: 'Train your engineering teams and Product Owners on how to use AI (Gemini / OpenAI) for story splitting, backlog grooming, and retro synthesis.',
      deliverables: ['Custom AI Prompt Engineering', 'Backlog Auto-Refinement Pipelines', 'AI Coaching Superpower Templates']
    }
  ];

  const RETRO_TEMPLATES = {
    '4ls': {
      title: 'The 4 Ls (Liked, Learned, Lacked, Longed For)',
      columns: [
        { id: 'liked', name: 'Liked', icon: '❤️', color: '#ec4899', desc: 'What went really well and brought joy?' },
        { id: 'learned', name: 'Learned', icon: '💡', color: '#3b82f6', desc: 'What new insights or skills did we gain?' },
        { id: 'lacked', name: 'Lacked', icon: '⚠️', color: '#f59e0b', desc: 'What was missing or blocked our flow?' },
        { id: 'longed_for', name: 'Longed For', icon: '🌟', color: '#8b5cf6', desc: 'What do we wish we had or could do next?' }
      ],
      defaultNotes: [
        { id: 'n1', columnId: 'liked', text: 'Great team collaboration on the API integration!', votes: 4 },
        { id: 'n2', columnId: 'learned', text: 'Automated test suite saved 3 hours in regression testing', votes: 5 },
        { id: 'n3', columnId: 'lacked', text: 'Design handoff was delayed by 2 days due to missing specs', votes: 3 },
        { id: 'n4', columnId: 'longed_for', text: 'Automated deployment pipeline to staging environment', votes: 6 }
      ]
    },
    'sailboat': {
      title: 'The Sailboat Retrospective',
      columns: [
        { id: 'wind', name: 'Wind (Pushing Us)', icon: '💨', color: '#10b981', desc: 'What speeds us up?' },
        { id: 'anchors', name: 'Anchors (Holding Us Back)', icon: '⚓', color: '#ef4444', desc: 'What slows us down?' },
        { id: 'rocks', name: 'Rocks (Risks Ahead)', icon: '🪨', color: '#f59e0b', desc: 'What potential risks lie ahead?' },
        { id: 'island', name: 'Paradise Island (Goals)', icon: '🏝️', color: '#06b6d4', desc: 'Our ultimate target destination?' }
      ],
      defaultNotes: [
        { id: 'n5', columnId: 'wind', text: 'Pair programming sessions accelerated code reviews', votes: 3 },
        { id: 'n6', columnId: 'anchors', text: 'Flaky staging server caused 4 build failures', votes: 7 }
      ]
    },
    'starfish': {
      title: 'Starfish Retrospective',
      columns: [
        { id: 'keep', name: 'Keep Doing', icon: '👍', color: '#10b981', desc: 'Practices that work well' },
        { id: 'more', name: 'More Of', icon: '📈', color: '#3b82f6', desc: 'Good habits to expand' },
        { id: 'less', name: 'Less Of', icon: '📉', color: '#f59e0b', desc: 'Activities yielding low value' },
        { id: 'stop', name: 'Stop Doing', icon: '🛑', color: '#ef4444', desc: 'Inefficient or harmful habits' },
        { id: 'start', name: 'Start Doing', icon: '🚀', color: '#8b5cf6', desc: 'New experiments to try' }
      ],
      defaultNotes: [
        { id: 'n9', columnId: 'keep', text: 'Daily standups under 15 minutes', votes: 4 },
        { id: 'n12', columnId: 'stop', text: 'Context switching between 3 projects at once', votes: 8 }
      ]
    }
  };

  const MATURITY_DIMENSIONS = [
    {
      id: 'culture', name: 'Agile Mindset & Culture', icon: '🌱', color: '#10b981',
      description: 'Psychological safety, growth mindset, alignment on values, and team autonomy.',
      questions: [
        'Team members freely admit mistakes without fear of blame.',
        'Cross-functional collaboration is prioritized over siloed handoffs.',
        'Failure is viewed as a learning opportunity across the organization.'
      ]
    },
    {
      id: 'technical', name: 'Technical Excellence', icon: '⚡', color: '#3b82f6',
      description: 'CI/CD, automated testing, refactoring, mob programming, and code quality standards.',
      questions: [
        'Automated unit & integration tests run automatically on every push.',
        'Deployment to staging/production can be done seamlessly with high confidence.',
        'Refactoring and tech debt payback are built into every sprint backlog.'
      ]
    },
    {
      id: 'product', name: 'Product & Customer Alignment', icon: '🎯', color: '#8b5cf6',
      description: 'Outcome-focused roadmaps, direct user feedback loops, rapid prototyping, and clear backlog refinement.',
      questions: [
        'User stories are defined by outcome/value rather than technical tasks.',
        'The team gets direct feedback from actual end-users at least monthly.',
        'Product Backlog items are refined with clear Acceptance Criteria prior to sprint planning.'
      ]
    },
    {
      id: 'delivery', name: 'Delivery Speed & Flow', icon: '🚀', color: '#06b6d4',
      description: 'Consistent velocity/throughput, small batch sizes, WIP limit discipline, and low lead times.',
      questions: [
        'Stories are broken down to be completed within 1 to 3 days.',
        'Work-In-Progress (WIP) limits are respected to prevent multitasking bottlenecks.',
        'Cycle time from code commit to production is under 48 hours.'
      ]
    },
    {
      id: 'improvement', name: 'Continuous Learning & Adaptation', icon: '🔄', color: '#f59e0b',
      description: 'Actionable retrospectives, team experiments, coaching engagement, and metrics tracking.',
      questions: [
        'Retrospective action items are tracked and completed in subsequent sprints.',
        'The team regularly conducts small-scale process experiments.',
        'Team metrics (flow, cycle time, happiness) are reviewed for self-correction.'
      ]
    }
  ];

  const PSYCH_SAFETY_QUESTIONS = [
    { id: 1, text: 'If you make a mistake on this team, it is often held against you.', reversed: true },
    { id: 2, text: 'Members of this team are able to bring up problems and tough issues.', reversed: false },
    { id: 3, text: 'People on this team sometimes reject others for being different.', reversed: true },
    { id: 4, text: 'It is safe to take a risk on this team.', reversed: false },
    { id: 5, text: 'It is difficult to ask other members of this team for help.', reversed: true },
    { id: 6, text: 'No one on this team would deliberately act in a way that undermines my efforts.', reversed: false },
    { id: 7, text: 'Working with members of this team, my unique skills and talents are valued and utilized.', reversed: false }
  ];

  const SCRUM_EVENTS_PLAYBOOK = [
    {
      id: 'sprint-planning', title: 'Sprint Planning', icon: '🗓️', time: 'Max 2 hours per 1-week sprint',
      objective: 'Align team on the Sprint Goal and select committed Product Backlog items.',
      dos: ['Formulate 1 single outcome-focused Sprint Goal', 'Ensure backlog items meet Definition of Ready (DoR)', 'Consider team capacity and historical velocity'],
      donts: ['Assign tasks to individuals during planning', 'Overcommit capacity beyond 80-85%', 'Skip defining clear Acceptance Criteria']
    },
    {
      id: 'daily-standup', title: 'Daily Standup', icon: '⚡', time: '15 Minutes Daily',
      objective: 'Inspect progress toward the Sprint Goal and adapt the daily plan.',
      dos: ['Focus on progress toward the Sprint Goal', 'Identify blockers immediately for post-standup parking lot', 'Rotate facilitation among team members'],
      donts: ['Turn standup into a status report to the Scrum Master/Manager', 'Problem-solve complex technical issues during 15-min window', 'Allow members to ramble on non-sprint topics']
    },
    {
      id: 'sprint-review', title: 'Sprint Review & Demo', icon: '📺', time: '1 Hour per 1-week sprint',
      objective: 'Inspect working increment with stakeholders and gather feedback for the Product Backlog.',
      dos: ['Demo working software in staging environment', 'Celebrate achievements and open discussion on market feedback', 'Update Product Backlog based on stakeholder insights'],
      donts: ['Use PowerPoint slides instead of live working software', 'Treat review as a formal sign-off gate', 'Hide unfinished work or disguise bugs']
    },
    {
      id: 'sprint-retro', title: 'Sprint Retrospective', icon: '🎯', time: '45 Mins - 1.5 Hours',
      objective: 'Inspect team culture, processes, and tools to commit to continuous improvements.',
      dos: ['Maintain psychological safety and blameless environment', 'Limit action items to 1-2 SMART commitments for next sprint', 'Vary retro formats (4Ls, Sailboat, Starfish)'],
      donts: ['Focus on blaming individual team members', 'Create a laundry list of 20 action items that never get done', 'Skip retro due to deadline pressures']
    }
  ];

  const KANBAN_SCRUMBAN_CARDS = [
    {
      title: 'The 6 Core Principles of Kanban', icon: '🎛️',
      items: ['Visualize Workflow', 'Limit Work in Progress (WIP)', 'Manage Flow', 'Make Process Policies Explicit', 'Implement Feedback Loops', 'Improve Collaboratively (Kaizen)']
    },
    {
      title: 'Scrumban Hybrid Framework', icon: '🔄',
      items: ['On-Demand Pull System', 'WIP Limits on Columns', 'Regular Retrospectives preserved from Scrum', 'No rigid sprint estimations needed when Flow is mature']
    }
  ];

  const METRICS_ENCYCLOPEDIA = [
    {
      id: 'cycle-time', name: 'Cycle Time', category: 'Flow & Delivery', icon: '⏱️',
      formula: 'Cycle Time = Time Work Completed - Time Work Started', target: '< 3 days per user story',
      summary: 'Measures elapsed time from development start to production release.',
      desc: 'Cycle Time is the single most critical metric for Agile flow efficiency. Shorter cycle times correlate directly with higher quality and lower risk.'
    },
    {
      id: 'lead-time', name: 'Lead Time', category: 'Flow & Customer Value', icon: '⏳',
      formula: 'Lead Time = Customer Delivery Date - Feature Request Created Date', target: '< 14 days',
      summary: 'Measures total customer waiting time from backlog entry to live feature.',
      desc: 'Lead time measures customer responsiveness. Reducing queue time in backlog refinement yields the fastest reduction in lead time.'
    },
    {
      id: 'flow-efficiency', name: 'Flow Efficiency %', category: 'Flow Waste Elimination', icon: '⚡',
      formula: 'Flow Efficiency % = (Active Work Time / Total Lead Time) × 100', target: '> 35%',
      summary: 'Ratio of active touch time versus waiting time in queues.',
      desc: 'Most traditional software teams have flow efficiency under 15%. High performing agile teams achieve 35%+.'
    },
    {
      id: 'defect-escape-rate', name: 'Defect Escape Rate %', category: 'Engineering Quality', icon: '🐞',
      formula: 'Defect Escape Rate = (Bugs Found in Prod / Total Bugs Found) × 100', target: '< 5%',
      summary: 'Percentage of bugs discovered by end-users in production versus internal QA.',
      desc: 'High defect escape rates indicate gaps in automated regression suites or acceptance criteria testing.'
    }
  ];

  const AGILE_TOOLS_GUIDES = [
    { title: 'Jira Cloud Setup Guide', icon: '⚙️', desc: 'Create Kanban & Scrum boards, set WIP limits, configure quick filters and swimlanes.' },
    { title: 'Jira Data Center Procedures', icon: '🏢', desc: 'Enterprise custom field setup, script runner automation, and multi-project board mapping.' },
    { title: 'Azure DevOps (ADO) Setup', icon: '⚡', desc: 'Configure Area Paths, Iterations, Board Columns, and Rollup Column Delivery Plans.' },
    { title: 'Confluence Agile Workspace', icon: '📄', desc: 'Build Product Requirements Documents (PRDs), Retro Action Tracking, and Decision Logs.' }
  ];

  const EXECUTIVE_DASHBOARDS = [
    { title: 'Team Operational Dashboard', icon: '📈', desc: 'Sprint Burndown, Daily Velocity, WIP Limits, and Impediment Log.' },
    { title: 'RTE & ART Scaling Dashboard', icon: '🏢', desc: 'Program Increment (PI) Predictability, Feature Cycle Time, and Cross-Team Dependencies.' },
    { title: 'C-Level Executive View', icon: '👑', desc: 'Strategic Portfolio Alignment, Flow Distribution, Value Stream ROI, and Time-to-Market.' },
    { title: 'Engineering Health Dashboard', icon: '🛡️', desc: 'DORA Metrics (Deployment Frequency, Lead Time for Changes, CFR, MTTR) and Code Coverage.' }
  ];

  const COACHING_MODELS = [
    { title: 'The GROW Model', icon: '🌱', desc: 'Goal, Reality, Options, Will — Structured 4-stage non-directive coaching model.' },
    { title: 'The OSKAR Model', icon: '🎯', desc: 'Outcome, Scale, Know-how, Action, Review — Solution-focused coaching framework.' },
    { title: 'The Cynefin Framework', icon: '🌀', desc: 'Sense-making framework categorizing problem domains into Clear, Complicated, Complex, and Chaotic.' }
  ];

  const FACILITATION_METHODS = [
    { title: '1-2-4-All (Liberating Structure)', icon: '👥', desc: 'Engages 100% of participants simultaneously to eliminate groupthink in 15 minutes.' },
    { title: 'Lean Coffee Meeting Format', icon: '☕', desc: 'Agenda-less democratic meeting framework with timed 5-minute topic slots.' },
    { title: 'Delegation Poker (Management 3.0)', icon: '🎴', desc: 'Clarifies decision-making boundaries across 7 levels of delegation.' }
  ];

  const SCALING_FRAMEWORKS = [
    { name: 'SAFe (Scaled Agile Framework)', icon: '🏢', bestFor: 'Enterprise (100+ people)', teamSize: '100-5000+ people' },
    { name: 'LeSS (Large-Scale Scrum)', icon: '⛵', bestFor: 'Medium-to-Large Orgs (20-200 people)', teamSize: '20-200 people' },
    { name: 'Spotify Model', icon: '🎵', bestFor: 'Tech Startups & Scale-ups', teamSize: '30-500 people' },
    { name: 'Nexus Framework', icon: '🔗', bestFor: '3-9 Scrum teams on 1 Product', teamSize: '20-80 people' }
  ];

  const AI_COACH_PROMPTS = [
    { title: 'INVEST Story & Gherkin Refiner', icon: '📝', desc: 'Converts raw requirement notes into standard INVEST user stories with Gherkin acceptance criteria.' },
    { title: 'Retro Sticky Theme Synthesizer', icon: '🔮', desc: 'Clusters raw retro sticky notes into systemic themes and SMART action items.' },
    { title: 'Outcome-Oriented Sprint Goal Formulator', icon: '🎯', desc: 'Transforms backlog items into a single compelling customer-focused Sprint Goal.' }
  ];

  const AGILE_COACH_ROLE_DATA = {
    title: 'Who is an Agile Coach & Day in the Life',
    definition: 'An Agile Coach is a catalyst for organizational transformation, team performance, and cultural evolution.',
    stances: [
      { name: 'Teacher', desc: 'Imparting knowledge on Agile frameworks, Scrum, Kanban, and modern DevOps engineering practices.' },
      { name: 'Facilitator', desc: 'Neutral leader of team events, retrospectives, story splitting, and strategic planning sessions.' },
      { name: 'Coach', desc: 'Non-directive GROW listener helping individuals and teams unlock their own solutions.' },
      { name: 'Mentor', desc: 'Sharing real-world experiences to guide Scrum Masters and Product Owners through hurdles.' },
      { name: 'Systems Thinker', desc: 'Analyzing end-to-end organizational value streams and eliminating systemic friction.' },
      { name: 'Change Agent', desc: 'Leading cultural evolution, psychological safety, and executive leadership alignment.' }
    ],
    dayInTheLife: [
      { time: '08:30 AM - 09:00 AM', title: 'Morning Prep & Flow Scan', desc: 'Inspect Jira/ADO dashboards, review CFD charts, check test pipeline logs.' },
      { time: '09:00 AM - 10:00 AM', title: 'Daily Standup Observability', desc: 'Observe 2 squad standups, note impediments, coach Scrum Master post-standup.' },
      { time: '10:00 AM - 11:30 AM', title: '1-on-1 Mentorship Session', desc: 'Conduct GROW coaching session with a Product Owner on backlog refinement.' },
      { time: '11:30 AM - 12:30 PM', title: 'Value Stream Mapping', desc: 'Work with RTE and Engineering Directors on scaling flow bottlenecks.' },
      { time: '01:30 PM - 03:00 PM', title: 'Retrospective Facilitation', desc: 'Facilitate Sailboat Retrospective for Squad Alpha with psychological safety exercises.' },
      { time: '03:00 PM - 04:30 PM', title: 'Community of Practice (CoP)', desc: 'Host monthly Scrum Master Guild session on AI prompt engineering for stories.' },
      { time: '04:30 PM - 05:30 PM', title: 'Reflection & Self-Care', desc: 'Document coaching notes, review team maturity radar trends, plan next experiments.' }
    ]
  };

  const CFD_PRESETS = {
    healthy: {
      title: '🟢 Healthy Parallel Flow',
      desc: 'Work moves steadily across all states. Done line slopes upward smoothly and WIP bands remain stable.',
      data: [
        { day: 'Day 1', backlog: 20, dev: 5, review: 2, testing: 1, done: 0 },
        { day: 'Day 2', backlog: 18, dev: 6, review: 3, testing: 1, done: 2 },
        { day: 'Day 3', backlog: 16, dev: 5, review: 4, testing: 2, done: 5 },
        { day: 'Day 4', backlog: 14, dev: 6, review: 3, testing: 2, done: 9 },
        { day: 'Day 5', backlog: 12, dev: 5, review: 4, testing: 3, done: 14 },
        { day: 'Day 6', backlog: 10, dev: 4, review: 3, testing: 2, done: 19 },
        { day: 'Day 7', backlog: 8,  dev: 5, review: 2, testing: 2, done: 23 }
      ]
    },
    bottleneck: {
      title: '🔴 QA Bottleneck',
      desc: 'Testing queue expands while Done flattens. Work piles up before release.',
      data: [
        { day: 'Day 1', backlog: 20, dev: 5, review: 2, testing: 1, done: 0 },
        { day: 'Day 2', backlog: 18, dev: 7, review: 3, testing: 3, done: 1 },
        { day: 'Day 3', backlog: 16, dev: 8, review: 4, testing: 6, done: 2 },
        { day: 'Day 4', backlog: 14, dev: 8, review: 5, testing: 9, done: 2 },
        { day: 'Day 5', backlog: 12, dev: 7, review: 6, testing: 12, done: 3 }
      ]
    },
    scopeCreep: {
      title: '🟠 Scope Creep',
      desc: 'Backlog expands mid-sprint while WIP balloons without completing stories.',
      data: [
        { day: 'Day 1', backlog: 20, dev: 5, review: 2, testing: 1, done: 0 },
        { day: 'Day 2', backlog: 24, dev: 6, review: 3, testing: 1, done: 1 },
        { day: 'Day 3', backlog: 30, dev: 8, review: 4, testing: 2, done: 2 },
        { day: 'Day 4', backlog: 35, dev: 10, review: 5, testing: 2, done: 3 }
      ]
    }
  };

  const ICEBREAKER_DECK = [
    { title: '🎬 Sprint Movie Genre', desc: 'If this past sprint was a movie, what genre would it be? (Action, Comedy, Horror, Sci-Fi) and why?' },
    { title: '🪄 Magic Wand Blocker', desc: 'If you had a magic wand to fix ONE process bottleneck tomorrow, what would you vanish?' },
    { title: '🏆 Small Win Celebration', desc: 'What is one tiny engineering or personal victory you experienced this week that deserves applause?' },
    { title: '💡 Unsung Hero Shoutout', desc: 'Who on the team helped you out when you were stuck, and what did they do?' }
  ];

  const SQUAD_BADGES = [
    { name: 'Flow Master', icon: '🥇', desc: 'Maintained WIP limits for 3 consecutive sprints', unlocked: true },
    { name: 'Vulnerability Hero', icon: '🛡️', desc: 'Scored > 80% on Team Psychological Safety Survey', unlocked: true },
    { name: 'Consensus Champion', icon: '🃏', desc: 'Achieved 100% Planning Poker agreement on first reveal', unlocked: true },
    { name: 'Zero Debt Crusader', icon: '⚡', desc: 'Reduced Escaped Bug Rate to < 2%', unlocked: false }
  ];

  // -------------------------------------------------------------
  // TEMPLATE EXPORTER
  // -------------------------------------------------------------
  class TemplateExporter {
    static downloadFile(content, fileName, contentType) {
      const a = document.createElement('a');
      const file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(a.href);
    }

    static exportRetroMarkdown(templateName, columns, notes, teamName) {
      let md = `# 🎯 Sprint Retrospective Report - ${teamName}\n`;
      md += `**Coach**: Santoshanand Adkar\n`;
      md += `**Framework**: ${templateName}\n`;
      md += `**Date**: ${new Date().toLocaleDateString()}\n\n---\n\n`;
      columns.forEach(col => {
        const colNotes = notes.filter(n => n.columnId === col.id);
        md += `## ${col.icon} ${col.name}\n`;
        if (colNotes.length === 0) {
          md += `*No notes recorded*\n\n`;
        } else {
          colNotes.forEach(n => { md += `- ${n.text} (❤️ ${n.votes} votes)\n`; });
          md += `\n`;
        }
      });
      md += `---\n*Generated by AgileVibe OS | Santoshanand Adkar*\n`;
      this.downloadFile(md, `Retro_${teamName.replace(/\s+/g, '_')}_${Date.now()}.md`, 'text/markdown');
    }

    static exportRetroJSON(templateName, columns, notes, teamName) {
      const data = { coach: 'Santoshanand Adkar', team: teamName, template: templateName, exportedAt: new Date().toISOString(), columns, notes };
      this.downloadFile(JSON.stringify(data, null, 2), `Retro_${teamName.replace(/\s+/g, '_')}_${Date.now()}.json`, 'application/json');
    }

    static exportExecutivePDF(teamName, maturityScores, psychAnswers, retroNotes) {
      const activeTeamObj = teamName || 'Active Squad';
      const avgScore = (Object.values(maturityScores).reduce((a, b) => a + b, 0) / 5).toFixed(1);
      
      let printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow popups to generate the Executive PDF report.');
        return;
      }

      let html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Executive Coaching Report - ${activeTeamObj} | Santoshanand Adkar</title>
          <style>
            body { font-family: 'Inter', sans-serif; padding: 40px; color: #1e293b; background: #fff; line-height: 1.6; }
            .header { border-bottom: 3px solid #6366f1; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; }
            .header h1 { font-family: 'Outfit', sans-serif; color: #0f172a; margin: 0; font-size: 24px; }
            .badge { background: #6366f1; color: #fff; padding: 6px 14px; border-radius: 20px; font-weight: bold; font-size: 14px; }
            .section { margin-bottom: 24px; }
            .section h2 { color: #4338ca; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; font-size: 18px; margin-bottom: 12px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
            th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
            th { background: #f8fafc; font-weight: 600; color: #475569; }
            .action-item { background: #f1f5f9; padding: 10px 14px; border-left: 4px solid #10b981; margin-bottom: 8px; font-size: 13px; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>📊 AgileVibe Executive Summary</h1>
              <div style="font-size: 14px; color: #64748b;">Agile Coach: <strong>Santoshanand Adkar</strong> (santoshadkar@gmail.com)</div>
              <div style="font-size: 13px; color: #64748b; margin-top: 2px;">Squad: <strong>${activeTeamObj}</strong> | Date: ${new Date().toLocaleDateString()}</div>
            </div>
            <div class="badge">Maturity: ${avgScore} / 5.0</div>
          </div>

          <div class="section">
            <h2>🕸️ 1. Agile Maturity Scorecard</h2>
            <table>
              <thead>
                <tr><th>Dimension</th><th>Target</th><th>Current Score</th><th>Assessment Status</th></tr>
              </thead>
              <tbody>
                <tr><td>🌱 Mindset & Culture</td><td>4.0 / 5</td><td>${maturityScores.culture || 4}/5</td><td>${(maturityScores.culture || 4) >= 4 ? '✅ High Performing' : '⚠️ Growth Opportunity'}</td></tr>
                <tr><td>⚡ Technical Excellence</td><td>4.0 / 5</td><td>${maturityScores.technical || 3}/5</td><td>${(maturityScores.technical || 3) >= 4 ? '✅ High Performing' : '⚠️ Growth Opportunity'}</td></tr>
                <tr><td>🎯 Product Alignment</td><td>4.0 / 5</td><td>${maturityScores.product || 4}/5</td><td>${(maturityScores.product || 4) >= 4 ? '✅ High Performing' : '⚠️ Growth Opportunity'}</td></tr>
                <tr><td>🚀 Delivery Speed & Flow</td><td>4.0 / 5</td><td>${maturityScores.delivery || 3}/5</td><td>${(maturityScores.delivery || 3) >= 4 ? '✅ High Performing' : '⚠️ Growth Opportunity'}</td></tr>
                <tr><td>🔄 Continuous Learning</td><td>4.0 / 5</td><td>${maturityScores.improvement || 5}/5</td><td>${(maturityScores.improvement || 5) >= 4 ? '✅ High Performing' : '⚠️ Growth Opportunity'}</td></tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>🛡️ 2. Team Psychological Safety & Trust Index</h2>
            <div class="action-item" style="border-left-color: #6366f1;">
              <strong>Team Psychological Safety Index:</strong> High Trust Environment. Team members feel safe taking calculated risks and bringing up tough engineering challenges.
            </div>
          </div>

          <div class="section">
            <h2>🎯 3. Agreed Retrospective Action Items</h2>
            ${retroNotes && retroNotes.length > 0 ? retroNotes.slice(0, 5).map(n => `<div class="action-item">🔹 ${n.text} (❤️ ${n.votes} votes)</div>`).join('') : '<div class="action-item">No active retro action items recorded.</div>'}
          </div>

          <div style="margin-top: 40px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px;">
            Confidential Executive Report | Santoshanand Adkar • santoshadkar@gmail.com
          </div>
        </body>
        </html>
      `;
      printWindow.document.write(html);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 400);
    }
  }

  // -------------------------------------------------------------
  // 3. MAIN APP CONTROLLER
  // -------------------------------------------------------------
  class AgileVibeApp {
    constructor() {
      this.currentTab = 'welcome';
      this.teams = JSON.parse(localStorage.getItem('agilevibe_teams') || JSON.stringify(DEFAULT_TEAMS));
      this.activeTeamId = localStorage.getItem('agilevibe_active_team') || 'squad-alpha';
      
      this.currentRetroTemplate = '4ls';
      this.retroNotes = [];
      this.maturityScores = { culture: 4, technical: 3, product: 4, delivery: 3, improvement: 5 };
      this.psychAnswers = {};

      this.teamVotes = [
        { name: 'Sarah (Dev Lead)', card: '5', revealed: false },
        { name: 'Alex (Scrum Master)', card: '8', revealed: false }
      ];

      this.wheelMembers = ['Sarah (Dev)', 'Alex (Scrum Master)', 'Jordan (QA)', 'Taylor (Product)', 'Santoshanand (Coach)'];
      this.wheelAngle = 0;
      this.isSpinning = false;

      this.currentCfdPreset = 'healthy';
      this.cfdData = JSON.parse(JSON.stringify(CFD_PRESETS.healthy.data));

      this.loadActiveTeamState();
    }

    loadActiveTeamState() {
      const savedStateStr = localStorage.getItem(`agilevibe_state_${this.activeTeamId}`);
      if (savedStateStr) {
        try {
          const state = JSON.parse(savedStateStr);
          this.currentRetroTemplate = state.currentRetroTemplate || '4ls';
          this.retroNotes = state.retroNotes || JSON.parse(JSON.stringify(RETRO_TEMPLATES['4ls'].defaultNotes));
          this.maturityScores = state.maturityScores || { culture: 4, technical: 3, product: 4, delivery: 3, improvement: 5 };
          this.psychAnswers = state.psychAnswers || {};
        } catch (e) {
          this.initDefaultTeamState();
        }
      } else {
        this.initDefaultTeamState();
      }
    }

    initDefaultTeamState() {
      this.currentRetroTemplate = '4ls';
      this.retroNotes = JSON.parse(JSON.stringify(RETRO_TEMPLATES['4ls'].defaultNotes));
      this.maturityScores = { culture: 4, technical: 3, product: 4, delivery: 3, improvement: 5 };
      this.psychAnswers = {};
    }

    saveActiveTeamState() {
      const state = {
        currentRetroTemplate: this.currentRetroTemplate,
        retroNotes: this.retroNotes,
        maturityScores: this.maturityScores,
        psychAnswers: this.psychAnswers
      };
      localStorage.setItem(`agilevibe_state_${this.activeTeamId}`, JSON.stringify(state));
      localStorage.setItem('agilevibe_active_team', this.activeTeamId);
      localStorage.setItem('agilevibe_teams', JSON.stringify(this.teams));
    }

    switchTeam(teamId) {
      if (teamId === 'add-new-team-trigger') {
        const newTeamName = prompt('Enter New Squad Name (e.g. Squad Delta - Cloud API):');
        if (newTeamName) {
          const newId = `squad-${Date.now()}`;
          this.teams.push({ id: newId, name: newTeamName, icon: '⚡' });
          this.switchTeam(newId);
        }
        return;
      }

      this.saveActiveTeamState();
      this.activeTeamId = teamId;
      this.loadActiveTeamState();

      sound.playChime();
      this.renderTeamSelector();
      this.renderRetroGrid();
      this.renderMaturityControls();
      this.renderMaturityRadar();
    }

    init() {
      this.setupNavigation();
      this.setupTeamSelector();
      this.setupWelcomeModule();
      this.setupCoachRoleModule();
      this.setupScrumEventsModule();
      this.setupKanbanScrumbanModule();
      this.setupCFDModule();
      this.setupGamificationModule();
      this.setupRetroModule();
      this.setupPokerModule();
      this.setupMaturityModule();
      this.setupPsychModule();
      this.setupMetricsModule();
      this.setupToolsModule();
      this.setupDashboardsModule();
      this.setupModelsModule();
      this.setupMethodsModule();
      this.setupScalingModule();
      this.setupAIStudioModule();

      document.getElementById('exportExecutivePDFBtn')?.addEventListener('click', () => {
        sound.playChime();
        const activeTeamObj = this.teams.find(t => t.id === this.activeTeamId) || { name: 'Active Squad' };
        TemplateExporter.exportExecutivePDF(activeTeamObj.name, this.maturityScores, this.psychAnswers, this.retroNotes);
      });
    }

    setupWelcomeModule() {
      this.renderProductsServices();

      const form = document.getElementById('coachingRequestForm');
      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        sound.playChime();
        const name = document.getElementById('reqName').value;
        const email = document.getElementById('reqEmail').value;
        const service = document.getElementById('reqService').value;

        const resultBox = document.getElementById('requestSuccessBox');
        if (resultBox) {
          resultBox.style.display = 'block';
          resultBox.innerHTML = `
            🎉 <strong>Thank You, ${this.escapeHTML(name)}!</strong><br>
            Your request for <strong>${this.escapeHTML(service)}</strong> has been received by <strong>Santoshanand Adkar</strong>! Santoshanand will contact you at <strong>${this.escapeHTML(email)}</strong> within 24 hours to schedule your discovery call.
          `;
          form.reset();
        }
      });

      const chatWidget = document.getElementById('liveChatDrawer');
      document.getElementById('openLiveChatBtn')?.addEventListener('click', () => {
        sound.playPop();
        chatWidget?.classList.add('active');
      });
      document.getElementById('closeLiveChatBtn')?.addEventListener('click', () => {
        sound.playPop();
        chatWidget?.classList.remove('active');
      });

      const chatInput = document.getElementById('chatMsgInput');
      const chatLogs = document.getElementById('chatMessagesLog');
      const sendBtn = document.getElementById('sendChatMsgBtn');

      const handleSendChat = () => {
        const text = chatInput.value.trim();
        if (!text) return;
        sound.playPop();
        chatLogs.innerHTML += `<div class="chat-msg user"><strong>You:</strong> ${this.escapeHTML(text)}</div>`;
        chatInput.value = '';
        chatLogs.scrollTop = chatLogs.scrollHeight;

        setTimeout(() => {
          sound.playChime();
          let reply = 'Hello! I am Santoshanand Adkar’s AI Assistant. Thank you for reaching out! How can Santoshanand assist your team’s delivery flow today?';
          if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
            reply = 'Santoshanand offers tailored coaching packages based on squad size and engagement length. Submit a request above or email santoshadkar@gmail.com for a custom quote!';
          } else if (text.toLowerCase().includes('linkedin')) {
            reply = 'You can connect directly with Santoshanand on LinkedIn at https://www.linkedin.com/in/santoshanandadkar/';
          }
          chatLogs.innerHTML += `<div class="chat-msg coach"><strong>Santoshanand's AI Assistant:</strong> ${reply}</div>`;
          chatLogs.scrollTop = chatLogs.scrollHeight;
        }, 600);
      };

      sendBtn?.addEventListener('click', handleSendChat);
      chatInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSendChat(); });
    }

    renderProductsServices() {
      const container = document.getElementById('servicesCatalogGrid');
      if (!container) return;
      container.innerHTML = PRODUCTS_SERVICES_DATA.map(s => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 36px; margin-bottom: 8px;">${s.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${s.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${s.desc}</p>
          <strong style="font-size: 12px; color: var(--accent-cyan); display: block; margin-bottom: 4px;">KEY DELIVERABLES:</strong>
          <ul style="list-style: none; font-size: 12px; color: #cbd5e1;">
            ${s.deliverables.map(d => `<li>🔹 ${d}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    setupCoachRoleModule() {
      const stancesGrid = document.getElementById('coachStancesGrid');
      if (stancesGrid) {
        stancesGrid.innerHTML = AGILE_COACH_ROLE_DATA.stances.map(s => `
          <div class="deep-card" style="padding: 16px;">
            <h5 style="color: var(--accent-cyan); font-size: 16px; margin-bottom: 6px;">${s.name}</h5>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${s.desc}</p>
          </div>
        `).join('');
      }

      const timelineBox = document.getElementById('dayInLifeTimeline');
      if (timelineBox) {
        timelineBox.innerHTML = AGILE_COACH_ROLE_DATA.dayInTheLife.map(item => `
          <div style="display: flex; gap: 16px; margin-bottom: 16px; background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border-left: 3px solid var(--accent-indigo);">
            <div style="font-size: 12px; font-weight: 700; color: var(--accent-amber); min-width: 140px;">${item.time}</div>
            <div>
              <strong style="color: #fff; font-size: 14px; display: block; margin-bottom: 4px;">${item.title}</strong>
              <div style="font-size: 13px; color: var(--text-muted); line-height: 1.4;">${item.desc}</div>
            </div>
          </div>
        `).join('');
      }
    }

    setupScrumEventsModule() {
      const container = document.getElementById('scrumEventsGrid');
      if (!container) return;
      container.innerHTML = SCRUM_EVENTS_PLAYBOOK.map(e => `
        <div class="deep-card" style="margin-bottom: 24px; padding: 24px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <span style="font-size: 32px;">${e.icon}</span>
            <div>
              <h4 style="font-family: var(--font-heading); font-size: 20px; color: #fff;">${e.title}</h4>
              <span style="font-size: 12px; color: var(--accent-amber); font-weight: 600;">⏱️ ${e.time}</span>
            </div>
          </div>
          <p style="font-size: 14px; color: #e2e8f0; margin-bottom: 16px;"><strong>Objective:</strong> ${e.objective}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); padding: 14px; border-radius: 8px;">
              <strong style="color: var(--accent-emerald); display: block; margin-bottom: 8px;">✅ DO'S</strong>
              <ul style="font-size: 12px; color: #cbd5e1; list-style-position: inside;">
                ${e.dos.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
            <div style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); padding: 14px; border-radius: 8px;">
              <strong style="color: var(--accent-rose); display: block; margin-bottom: 8px;">❌ DON'TS</strong>
              <ul style="font-size: 12px; color: #cbd5e1; list-style-position: inside;">
                ${e.donts.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `).join('');
    }

    setupKanbanScrumbanModule() {
      const container = document.getElementById('kanbanCardsGrid');
      if (!container) return;
      container.innerHTML = KANBAN_SCRUMBAN_CARDS.map(c => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${c.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 12px;">${c.title}</h4>
          <ul style="font-size: 13px; color: var(--text-muted); line-height: 1.6; list-style-position: inside;">
            ${c.items.map(i => `<li>🔹 ${i}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    setupCFDModule() {
      const presetBtns = document.querySelectorAll('.cfd-preset-btn');
      presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          presetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const presetKey = btn.dataset.preset;
          if (CFD_PRESETS[presetKey]) {
            this.currentCfdPreset = presetKey;
            this.cfdData = JSON.parse(JSON.stringify(CFD_PRESETS[presetKey].data));
            this.renderCFDAll();
          }
        });
      });
      this.renderCFDAll();
    }

    renderCFDAll() {
      const descEl = document.getElementById('cfdPresetDesc');
      if (descEl && CFD_PRESETS[this.currentCfdPreset]) {
        descEl.textContent = CFD_PRESETS[this.currentCfdPreset].desc;
      }
      this.renderCFDCanvas();
      this.renderCFDTable();
      this.renderCFDDiagnostics();
    }

    renderCFDCanvas() {
      const canvas = document.getElementById('cfdCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = (canvas.parentElement ? canvas.parentElement.clientWidth : 500) || 500;
      canvas.height = 300;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const data = this.cfdData;
      if (!data || data.length === 0) return;

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const w = canvas.width - margin.left - margin.right;
      const h = canvas.height - margin.top - margin.bottom;

      const stackColors = {
        backlog: 'rgba(139, 92, 246, 0.7)',
        dev: 'rgba(59, 130, 246, 0.7)',
        review: 'rgba(245, 158, 11, 0.7)',
        testing: 'rgba(6, 182, 212, 0.7)',
        done: 'rgba(16, 185, 129, 0.7)'
      };

      const totalsPerDay = data.map(d => {
        const cDone = d.done;
        const cQA = cDone + d.testing;
        const cRev = cQA + d.review;
        const cDev = cRev + d.dev;
        const cBacklog = cDev + d.backlog;
        return { done: cDone, testing: cQA, review: cRev, dev: cDev, backlog: cBacklog };
      });

      const maxVal = Math.max(1, ...totalsPerDay.map(t => t.backlog));
      const stepX = w / (data.length - 1 || 1);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = margin.top + (h / 4) * i;
        ctx.beginPath(); ctx.moveTo(margin.left, y); ctx.lineTo(margin.left + w, y); ctx.stroke();
      }

      // Draw stacked areas from Backlog down to Done
      const order = ['backlog', 'dev', 'review', 'testing', 'done'];
      const prevKeyMap = { backlog: 'dev', dev: 'review', review: 'testing', testing: 'done', done: null };

      order.forEach(key => {
        const prevKey = prevKeyMap[key];
        ctx.beginPath();
        data.forEach((d, i) => {
          const x = margin.left + i * stepX;
          const val = totalsPerDay[i][key];
          const y = margin.top + h - (val / maxVal) * h;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        });

        for (let i = data.length - 1; i >= 0; i--) {
          const x = margin.left + i * stepX;
          const val = prevKey ? totalsPerDay[i][prevKey] : 0;
          const y = margin.top + h - (val / maxVal) * h;
          ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fillStyle = stackColors[key];
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Day X Axis labels
      data.forEach((d, i) => {
        const x = margin.left + i * stepX;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Inter';
        ctx.fillText(d.day, x - 10, canvas.height - 8);
      });
    }

    renderCFDTable() {
      const tbody = document.getElementById('cfdTableBody');
      if (!tbody) return;
      tbody.innerHTML = this.cfdData.map((d, i) => `
        <tr>
          <td><strong>${d.day}</strong></td>
          <td><input type="number" class="cfd-input" data-idx="${i}" data-key="backlog" value="${d.backlog}"></td>
          <td><input type="number" class="cfd-input" data-idx="${i}" data-key="dev" value="${d.dev}"></td>
          <td><input type="number" class="cfd-input" data-idx="${i}" data-key="review" value="${d.review}"></td>
          <td><input type="number" class="cfd-input" data-idx="${i}" data-key="testing" value="${d.testing}"></td>
          <td><input type="number" class="cfd-input" data-idx="${i}" data-key="done" value="${d.done}"></td>
        </tr>
      `).join('');

      tbody.querySelectorAll('.cfd-input').forEach(input => {
        input.addEventListener('change', (e) => {
          const idx = parseInt(e.target.dataset.idx);
          const key = e.target.dataset.key;
          this.cfdData[idx][key] = Math.max(0, parseInt(e.target.value) || 0);
          this.renderCFDAll();
        });
      });
    }

    renderCFDDiagnostics() {
      const box = document.getElementById('cfdDiagnosticsBox');
      if (!box) return;
      const last = this.cfdData[this.cfdData.length - 1];
      const wip = last.dev + last.review + last.testing;
      const leadTime = (wip / (last.done || 1)).toFixed(1);

      box.innerHTML = `
        <div style="background: rgba(99,102,241,0.1); border: 1px solid var(--border-glow); padding: 16px; border-radius: 8px;">
          <h5 style="color: var(--accent-cyan); font-size: 15px; margin-bottom: 6px;">📊 Flow Diagnostic & Little's Law Analysis</h5>
          <div style="font-size: 13px; color: #e2e8f0; line-height: 1.5;">
            🔹 <strong>Total Active Work-In-Progress (WIP):</strong> ${wip} items<br>
            🔹 <strong>Estimated Lead Time:</strong> ~${leadTime} days per item<br>
            💡 <em>Coach Advice: Keep WIP under 8 items to optimize throughput!</em>
          </div>
        </div>
      `;
    }

    setupGamificationModule() {
      this.renderWheelCanvas();
      document.getElementById('spinWheelBtn')?.addEventListener('click', () => {
        this.spinWheel();
      });

      const badgesGrid = document.getElementById('squadBadgesGrid');
      if (badgesGrid) {
        badgesGrid.innerHTML = SQUAD_BADGES.map(b => `
          <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 8px; border: 1px solid ${b.unlocked ? 'var(--accent-emerald)' : 'var(--border-glass)'};">
            <span style="font-size: 24px;">${b.icon}</span>
            <div>
              <strong style="font-size: 13px; color: ${b.unlocked ? '#fff' : 'var(--text-muted)'};">${b.name}</strong>
              <div style="font-size: 11px; color: var(--text-muted);">${b.desc}</div>
            </div>
            <span style="margin-left: auto; font-size: 11px; font-weight: bold; color: ${b.unlocked ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${b.unlocked ? 'UNLOCKED' : 'LOCKED'}</span>
          </div>
        `).join('');
      }

      const iceGrid = document.getElementById('icebreakerDeckGrid');
      if (iceGrid) {
        iceGrid.innerHTML = ICEBREAKER_DECK.map(card => `
          <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; border-left: 3px solid var(--accent-cyan);">
            <strong style="color: var(--accent-cyan); font-size: 13px;">${card.title}</strong>
            <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">${card.desc}</p>
          </div>
        `).join('');
      }
    }

    renderWheelCanvas() {
      const canvas = document.getElementById('wheelCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = 280;
      canvas.height = 280;

      const numSegments = this.wheelMembers.length;
      const anglePerSegment = (Math.PI * 2) / numSegments;
      const colors = ['#6366f1', '#38bdf8', '#10b981', '#f59e0b', '#ec4899'];

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(140, 140);
      ctx.rotate(this.wheelAngle);

      for (let i = 0; i < numSegments; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 130, i * anglePerSegment, (i + 1) * anglePerSegment);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.rotate(i * anglePerSegment + anglePerSegment / 2);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Inter';
        ctx.fillText(this.wheelMembers[i], 40, 4);
        ctx.restore();
      }
      ctx.restore();

      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.moveTo(140, 2);
      ctx.lineTo(130, 20);
      ctx.lineTo(150, 20);
      ctx.closePath();
      ctx.fill();
    }

    spinWheel() {
      if (this.isSpinning) return;
      this.isSpinning = true;
      sound.playFlip();

      const spinDuration = 3000;
      const startAngle = this.wheelAngle;
      const targetAngle = startAngle + Math.PI * 2 * 5 + Math.random() * Math.PI * 2;
      const startTime = performance.now();

      const animate = (now) => {
        const elapsed = now - startTime;
        if (elapsed < spinDuration) {
          const progress = elapsed / spinDuration;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          this.wheelAngle = startAngle + (targetAngle - startAngle) * easeOut;
          this.renderWheelCanvas();
          requestAnimationFrame(animate);
        } else {
          this.wheelAngle = targetAngle % (Math.PI * 2);
          this.renderWheelCanvas();
          this.isSpinning = false;
          sound.playChime();

          const numSegments = this.wheelMembers.length;
          const anglePerSegment = (Math.PI * 2) / numSegments;
          const normalizedAngle = (Math.PI * 2 - (this.wheelAngle % (Math.PI * 2)) + Math.PI / 2) % (Math.PI * 2);
          const chosenIdx = Math.floor(normalizedAngle / anglePerSegment) % numSegments;

          const resEl = document.getElementById('wheelResultText');
          if (resEl) resEl.innerHTML = `🎉 <strong>${this.wheelMembers[chosenIdx]}</strong> is chosen for next Standup update!`;
        }
      };
      requestAnimationFrame(animate);
    }

    setupRetroModule() {
      const tplBtns = document.querySelectorAll('.retro-controls .tpl-btn');
      tplBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tplBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const tplKey = btn.dataset.tpl;
          if (RETRO_TEMPLATES[tplKey]) {
            this.currentRetroTemplate = tplKey;
            this.retroNotes = JSON.parse(JSON.stringify(RETRO_TEMPLATES[tplKey].defaultNotes));
            this.saveActiveTeamState();
            this.renderRetroGrid();
          }
        });
      });

      document.getElementById('exportRetroMDBtn')?.addEventListener('click', () => {
        sound.playChime();
        const activeTeamObj = this.teams.find(t => t.id === this.activeTeamId) || { name: 'Active Squad' };
        TemplateExporter.exportRetroMarkdown(RETRO_TEMPLATES[this.currentRetroTemplate].title, RETRO_TEMPLATES[this.currentRetroTemplate].columns, this.retroNotes, activeTeamObj.name);
      });

      document.getElementById('exportRetroJSONBtn')?.addEventListener('click', () => {
        sound.playChime();
        const activeTeamObj = this.teams.find(t => t.id === this.activeTeamId) || { name: 'Active Squad' };
        TemplateExporter.exportRetroJSON(RETRO_TEMPLATES[this.currentRetroTemplate].title, RETRO_TEMPLATES[this.currentRetroTemplate].columns, this.retroNotes, activeTeamObj.name);
      });

      this.renderRetroGrid();
    }

    renderRetroGrid() {
      const grid = document.getElementById('retroGrid');
      if (!grid) return;
      const tpl = RETRO_TEMPLATES[this.currentRetroTemplate];
      if (!tpl) return;

      grid.innerHTML = tpl.columns.map(col => {
        const colNotes = this.retroNotes.filter(n => n.columnId === col.id);
        return `
          <div class="retro-column">
            <div class="column-header" style="border-top: 3px solid ${col.color}">
              <h4>${col.icon} ${col.name}</h4>
              <button class="add-note-btn" data-col="${col.id}">+ Add Note</button>
            </div>
            <div class="notes-container" id="col-${col.id}">
              ${colNotes.map(n => `
                <div class="retro-card">
                  <div class="card-text">${this.escapeHTML(n.text)}</div>
                  <div class="card-footer">
                    <button class="vote-btn" data-id="${n.id}">❤️ ${n.votes}</button>
                    <button class="delete-btn" data-id="${n.id}">🗑️</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('.add-note-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const colId = btn.dataset.col;
          const text = prompt('Enter retrospective feedback note:');
          if (text) {
            sound.playPop();
            this.retroNotes.push({ id: `n-${Date.now()}`, columnId: colId, text, votes: 1 });
            this.saveActiveTeamState();
            this.renderRetroGrid();
          }
        });
      });

      grid.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const note = this.retroNotes.find(n => n.id === id);
          if (note) {
            sound.playPop();
            note.votes++;
            this.saveActiveTeamState();
            this.renderRetroGrid();
          }
        });
      });

      grid.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          this.retroNotes = this.retroNotes.filter(n => n.id !== id);
          this.saveActiveTeamState();
          this.renderRetroGrid();
        });
      });
    }

    setupPokerModule() {
      const cards = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '☕'];
      const grid = document.getElementById('pokerCardsGrid');
      if (grid) {
        grid.innerHTML = cards.map(c => `<div class="poker-card" data-val="${c}">${c}</div>`).join('');
        grid.querySelectorAll('.poker-card').forEach(card => {
          card.addEventListener('click', () => {
            grid.querySelectorAll('.poker-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            sound.playFlip();
            this.selectedPokerCard = card.dataset.val;
          });
        });
      }

      document.getElementById('revealCardsBtn')?.addEventListener('click', () => {
        sound.playChime();
        this.cardsRevealed = !this.cardsRevealed;
        this.renderPokerTable();
      });

      this.renderPokerTable();
    }

    renderPokerTable() {
      const list = document.getElementById('votersList');
      if (!list) return;
      list.innerHTML = `
        <div class="voter-item">
          <span>You (Coach)</span>
          <span class="voter-badge">${this.selectedPokerCard ? (this.cardsRevealed ? this.selectedPokerCard : '❓') : 'Waiting...'}</span>
        </div>
        ${this.teamVotes.map(v => `
          <div class="voter-item">
            <span>${v.name}</span>
            <span class="voter-badge">${this.cardsRevealed ? v.card : '❓'}</span>
          </div>
        `).join('')}
      `;

      const stats = document.getElementById('pokerStats');
      if (stats) {
        if (this.cardsRevealed) {
          stats.innerHTML = `🎉 <strong>Team Consensus:</strong> Average Estimate ~ <strong>6.5 Points</strong>`;
        } else {
          stats.innerHTML = `🔒 <em>Cards Hidden - Click Reveal Cards when team finished voting!</em>`;
        }
      }
    }

    setupMaturityModule() {
      this.renderMaturityControls();
      this.renderMaturityRadar();
    }

    renderMaturityControls() {
      const container = document.getElementById('maturityControls');
      if (!container) return;
      container.innerHTML = MATURITY_DIMENSIONS.map(d => `
        <div style="margin-bottom: 16px;">
          <label style="font-size: 13px; font-weight: 600; color: #fff; display: flex; justify-content: space-between;">
            <span>${d.icon} ${d.name}</span>
            <span id="score-val-${d.id}">${this.maturityScores[d.id] || 4} / 5</span>
          </label>
          <input type="range" min="1" max="5" value="${this.maturityScores[d.id] || 4}" class="maturity-slider" data-dim="${d.id}" style="width: 100%; margin-top: 6px;">
        </div>
      `).join('');

      container.querySelectorAll('.maturity-slider').forEach(slider => {
        slider.addEventListener('input', (e) => {
          const dim = e.target.dataset.dim;
          const val = parseInt(e.target.value);
          this.maturityScores[dim] = val;
          document.getElementById(`score-val-${dim}`).textContent = `${val} / 5`;
          this.saveActiveTeamState();
          this.renderMaturityRadar();
        });
      });
    }

    renderMaturityRadar() {
      const canvas = document.getElementById('maturityRadar');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = 300;
      canvas.height = 300;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const center = 150;
      const radius = 100;
      const numDims = MATURITY_DIMENSIONS.length;
      const angleStep = (Math.PI * 2) / numDims;

      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 1;
      for (let r = 1; r <= 5; r++) {
        ctx.beginPath();
        for (let i = 0; i < numDims; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const x = center + (radius * (r / 5)) * Math.cos(angle);
          const y = center + (radius * (r / 5)) * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      ctx.beginPath();
      MATURITY_DIMENSIONS.forEach((d, i) => {
        const score = this.maturityScores[d.id] || 4;
        const angle = i * angleStep - Math.PI / 2;
        const x = center + (radius * (score / 5)) * Math.cos(angle);
        const y = center + (radius * (score / 5)) * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
      ctx.fill();
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2;
      ctx.stroke();

      const badge = document.getElementById('maturityScoreBadge');
      if (badge) {
        const avg = (Object.values(this.maturityScores).reduce((a, b) => a + b, 0) / numDims).toFixed(1);
        badge.innerHTML = `<div style="font-size: 16px; font-weight: 700; color: var(--accent-cyan);">Agile Maturity Score: ${avg} / 5.0</div>`;
      }
    }

    setupPsychModule() {
      const container = document.getElementById('psychQuestionsList');
      if (!container) return;
      container.innerHTML = PSYCH_SAFETY_QUESTIONS.map(q => `
        <div style="background: rgba(255,255,255,0.03); padding: 14px; border-radius: 8px; margin-bottom: 12px;">
          <div style="font-size: 13px; color: #fff; margin-bottom: 8px;">${q.id}. ${q.text}</div>
          <div style="display: flex; gap: 14px;">
            ${[1, 2, 3, 4, 5].map(rating => `
              <button class="btn btn-secondary psych-rating-btn" data-qid="${q.id}" data-val="${rating}" style="width: 44px; height: 44px; padding: 0; border-radius: 50%; justify-content: center; font-weight: bold;">${rating}</button>
            `).join('')}
          </div>
        </div>
      `).join('');

      container.querySelectorAll('.psych-rating-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sound.playPop();
          const qid = btn.dataset.qid;
          const val = parseInt(btn.dataset.val);
          this.psychAnswers[qid] = val;

          container.querySelectorAll(`.psych-rating-btn[data-qid="${qid}"]`).forEach(b => b.classList.remove('btn-primary'));
          btn.classList.add('btn-primary');
        });
      });

      document.getElementById('calcPsychBtn')?.addEventListener('click', () => {
        sound.playChime();
        const total = Object.values(this.psychAnswers).reduce((a, b) => a + b, 0);
        const resBox = document.getElementById('psychResultBox');
        if (resBox) {
          resBox.style.display = 'block';
          resBox.innerHTML = `
            <div style="background: rgba(16,185,129,0.15); border: 1px solid var(--accent-emerald); padding: 16px; border-radius: 8px; color: #fff; margin-top: 16px;">
              🎉 <strong>Psychological Safety Index Calculated!</strong><br>
              Total Score: <strong>${total} / 35</strong> — Team has high psychological safety and strong vulnerability trust!
            </div>
          `;
        }
      });
    }

    setupMetricsModule() {
      const grid = document.getElementById('metricsGrid');
      if (!grid) return;
      grid.innerHTML = METRICS_ENCYCLOPEDIA.map(m => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${m.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 4px;">${m.name}</h4>
          <span style="font-size: 11px; color: var(--accent-cyan); font-weight: 600; display: block; margin-bottom: 8px;">${m.category} • Target: ${m.target}</span>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${m.summary}</p>
          <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; font-family: monospace; font-size: 11px; color: var(--accent-emerald);">${m.formula}</div>
        </div>
      `).join('');
    }

    setupToolsModule() {
      const grid = document.getElementById('toolsGrid');
      if (!grid) return;
      grid.innerHTML = AGILE_TOOLS_GUIDES.map(t => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${t.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${t.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${t.desc}</p>
        </div>
      `).join('');
    }

    setupDashboardsModule() {
      const grid = document.getElementById('dashboardsGrid');
      if (!grid) return;
      grid.innerHTML = EXECUTIVE_DASHBOARDS.map(d => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${d.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${d.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${d.desc}</p>
        </div>
      `).join('');
    }

    setupModelsModule() {
      const grid = document.getElementById('modelsGrid');
      if (!grid) return;
      grid.innerHTML = COACHING_MODELS.map(m => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${m.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${m.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${m.desc}</p>
        </div>
      `).join('');
    }

    setupMethodsModule() {
      const grid = document.getElementById('methodsGrid');
      if (!grid) return;
      grid.innerHTML = FACILITATION_METHODS.map(m => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${m.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${m.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5;">${m.desc}</p>
        </div>
      `).join('');
    }

    setupScalingModule() {
      const container = document.getElementById('scalingContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="deep-card-grid">
          ${SCALING_FRAMEWORKS.map(f => `
            <div class="deep-card" style="padding: 20px;">
              <div style="font-size: 32px; margin-bottom: 8px;">${f.icon}</div>
              <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${f.name}</h4>
              <div style="font-size: 12px; color: var(--accent-cyan); font-weight: 600; margin-bottom: 4px;">Best For: ${f.bestFor}</div>
              <div style="font-size: 11px; color: var(--text-muted);">Team Size: ${f.teamSize}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    setupAIStudioModule() {
      const grid = document.getElementById('aiPromptsGrid');
      if (!grid) return;
      grid.innerHTML = AI_COACH_PROMPTS.map(p => `
        <div class="deep-card" style="padding: 20px;">
          <div style="font-size: 32px; margin-bottom: 8px;">${p.icon}</div>
          <h4 style="font-family: var(--font-heading); font-size: 18px; color: #fff; margin-bottom: 6px;">${p.title}</h4>
          <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${p.desc}</p>
          <button class="btn btn-primary" onclick="alert('AI Prompt Copied to Clipboard!')" style="font-size: 12px; padding: 6px 12px;">📋 Copy Prompt</button>
        </div>
      `).join('');
    }

    setupTeamSelector() {
      const selector = document.getElementById('teamSelector');
      if (selector) {
        selector.addEventListener('change', (e) => {
          this.switchTeam(e.target.value);
        });
      }
      this.renderTeamSelector();
    }

    renderTeamSelector() {
      const selector = document.getElementById('teamSelector');
      if (!selector) return;
      selector.innerHTML = `
        ${this.teams.map(t => `<option value="${t.id}" ${t.id === this.activeTeamId ? 'selected' : ''}>${t.name}</option>`).join('')}
        <option value="add-new-team-trigger">➕ Add New Squad...</option>
      `;
    }

    setupNavigation() {
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          const tabId = item.dataset.tab;
          if (!tabId) return;
          sound.playPop();
          navItems.forEach(n => n.classList.remove('active'));
          item.classList.add('active');

          document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
          const activePanel = document.getElementById(`panel-${tabId}`);
          if (activePanel) {
            activePanel.classList.add('active');
            this.currentTab = tabId;
            if (tabId === 'cfd') this.renderCFDAll();
            if (tabId === 'gamification') this.renderWheelCanvas();
            if (tabId === 'maturity') this.renderMaturityRadar();
          }
        });
      });
    }

    escapeHTML(str) {
      return (str || '').replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const app = new AgileVibeApp();
    app.init();
  });
})();
