import React, { useState } from 'react';
import { 
  Award, 
  Compass, 
  UserCheck, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  HelpCircle, 
  BookOpen, 
  Briefcase, 
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Layers,
  BarChart3,
  Star
} from 'lucide-react';

export default function RteCareerHub() {
  const [activeTab, setActiveTab] = useState('assessment'); // 'assessment' | 'eligibility' | 'certifications' | 'roadmap'

  // SELF ASSESSMENT DIAGNOSTIC STATE
  const [answers, setAnswers] = useState({
    q1: 3, q2: 3, q3: 3, q4: 3, q5: 3,
    q6: 3, q7: 3, q8: 3, q9: 3, q10: 3
  });

  const handleScoreChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: Number(value) }));
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0); // Max 50 points
  const scorePct = Math.round((totalScore / 50) * 100);

  const getReadinessLevel = () => {
    if (scorePct >= 90) return { title: "Master RTE (STE Ready)", color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/30", badge: "Gold Standard", text: "You possess advanced mastery of servant leadership, flow telemetry, and enterprise dependency ROAMing. You are ready to facilitate multi-train Solution Trains (STE)." };
    if (scorePct >= 75) return { title: "Practicing RTE (Solid ART Facilitator)", color: "text-sky-400 border-sky-500/40 bg-sky-950/30", badge: "High Performing", text: "You demonstrate strong event orchestration and risk management. Focus on deepening DevOps pipeline coaching and executive flow telemetry reporting." };
    if (scorePct >= 60) return { title: "Emerging RTE (Transitioning Practitioner)", color: "text-amber-400 border-amber-500/40 bg-amber-950/30", badge: "Emerging Lead", text: "You have solid foundational skills from your background. Prioritize SAFe RTE 6.0 certification and shadow senior RTEs during PI Breakout Management Reviews." };
    return { title: "Agile Foundation Phase", color: "text-rose-400 border-rose-500/40 bg-rose-950/30", badge: "Developing", text: "Focus on strengthening Scrum Master fundamentals, SAFe for Teams concepts, and team velocity baselining before stepping into ART facilitation." };
  };

  const readiness = getReadinessLevel();

  const assessmentQuestions = [
    { id: 'q1', category: 'Servant Leadership', text: 'How effectively do you handle cross-team conflict during high-stress PI Breakouts?' },
    { id: 'q2', category: 'Servant Leadership', text: 'To what extent do you lead through influence and empathy rather than top-down authority?' },
    { id: 'q3', category: 'Event Orchestration', text: 'How confident are you facilitating 100+ person PI Planning events and overnight Management Reviews?' },
    { id: 'q4', category: 'Event Orchestration', text: 'How consistently do you run structured Inspect & Adapt (I&A) 5-Whys Problem Solving workshops?' },
    { id: 'q5', category: 'Risk ROAMing', text: 'How proactively do you ROAM cross-team dependencies and enforce SLA ownership?' },
    { id: 'q6', category: 'Risk ROAMing', text: 'How effectively do you engage Business Owners to sign off on Accepted risks?' },
    { id: 'q7', category: 'Flow Telemetry', text: 'How accurately can you diagnose ART Predictability Index drops and Flow Efficiency queues?' },
    { id: 'q8', category: 'Flow Telemetry', text: 'How frequently do you present data-driven flow scorecards to executive sponsors?' },
    { id: 'q9', category: 'DevOps & Pipeline', text: 'How well do you coach teams on decoupling deployment from release (Feature Toggles)?' },
    { id: 'q10', category: 'DevOps & Pipeline', text: 'How proactively do you track DORA metrics (Deployment Frequency, Lead Time, CFR, MTTR)?' }
  ];

  const candidateProfiles = [
    {
      role: "Scrum Master / Senior Agile Coach",
      matchScore: "95% Natural Fit",
      strengths: "Servant leadership, team dynamics, retro facilitation, Agile mindsets.",
      gapsToBridge: "Enterprise Lean budgets, cross-ART program dependency board mechanics, C-suite executive reporting.",
      transitionStrategy: "Co-facilitate Scrum of Scrums (SoS) with current RTE, complete SAFe RTE 6.0 course, shadow PI Management Reviews."
    },
    {
      role: "Project Manager / Program Manager (PMP)",
      matchScore: "85% High Transition Potential",
      strengths: "Risk management, milestone tracking, executive status reporting, governance.",
      gapsToBridge: "Shifting from command-and-control to servant coaching, trusting team self-organization, Lean-Agile flow principles.",
      transitionStrategy: "Unlearn rigid Gantt chart dependencies, complete SAFe Agilist (SA) or POPM, practice non-directive coaching."
    },
    {
      role: "Engineering Manager / Development Lead",
      matchScore: "80% Technical Fit",
      strengths: "Continuous Delivery Pipeline awareness, technical architecture, engineering standards.",
      gapsToBridge: "Large-scale workshop facilitation, psychological safety cultivation, Tuckman team dynamics.",
      transitionStrategy: "Partner with Lead SM to hone soft-skills coaching, lead DevOps CoP sessions, obtain SAFe RTE certification."
    },
    {
      role: "Product Manager / Lead Product Owner",
      matchScore: "75% Strategic Fit",
      strengths: "Feature vision, WSJF backlog prioritization, customer outcome orientation.",
      gapsToBridge: "Impediment removal mechanics, team velocity estimation, CI/CD pipeline bottlenecks.",
      transitionStrategy: "Immerse in SoS execution rhythms, learn ALM board hygiene (Jira/ADO), shadow RTE during dependency mapping."
    },
    {
      role: "System Architect / Enterprise Architect",
      matchScore: "70% Technical Alignment",
      strengths: "Architectural Runway, Enabler Features, NFR compliance, microservice decoupling.",
      gapsToBridge: "Facilitating 100-person breakout rooms, resolving interpersonal team conflict, event orchestration.",
      transitionStrategy: "Co-facilitate Architecture CoP, champion Technical Debt reduction in IP Iterations, transition into RTE or STE."
    }
  ];

  const certifications = [
    {
      name: "SAFe 6.0 Release Train Engineer (RTE)",
      issuer: "Scaled Agile, Inc.",
      badgeColor: "border-amber-500/40 bg-amber-950/20 text-amber-300",
      description: "The gold-standard credential for facilitating ART value delivery, PI Planning, Inspect & Adapt, and servant leadership.",
      prerequisites: "SAFe Agilist (SA), SAFe Scrum Master (SSM), or active RTE experience.",
      examFormat: "60 Questions | 120 Minutes | 75% Passing Score | Multiple Choice",
      coreTopics: "PI Execution, Coaching SMs, Relentless Improvement, SAFe Flow Metrics, Enterprise ROAMing."
    },
    {
      name: "SAFe Practice Consultant (SPC 6.0)",
      issuer: "Scaled Agile, Inc.",
      badgeColor: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300",
      description: "Enterprise transformation certification empowering practitioners to launch ARTs, coach executives, and train SAFe roles.",
      prerequisites: "Deep Agile background, consulting background, or 3+ years enterprise coaching.",
      examFormat: "60 Questions | 120 Minutes | 80% Passing Score | Advanced Case Studies",
      coreTopics: "Leading SAFe, Value Stream Identification, Launching ARTs, Portfolio Management."
    },
    {
      name: "PMI Agile Certified Practitioner (PMI-ACP)",
      issuer: "Project Management Institute",
      badgeColor: "border-sky-500/40 bg-sky-950/20 text-sky-300",
      description: "Broad Agile certification validating expertise across Scrum, Kanban, Lean, XP, and TDD methodologies.",
      prerequisites: "2,000 hours project experience + 1,500 hours Agile team experience.",
      examFormat: "120 Questions | 3 Hours | Psychometric Passing Score",
      coreTopics: "Agile Principles, Value-Driven Delivery, Stakeholder Engagement, Team Performance."
    }
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5 text-sapphire-400" />
          <span>Career Progression & Mastery Hub</span>
        </div>
        <h1 className="text-3xl font-heading font-extrabold text-white">
          RTE Self-Assessment, <span className="text-gradient">Certifications & Career Roadmap</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Evaluate your RTE readiness with our interactive 360° self-assessment, explore eligibility transition paths for Scrum Masters, PMPs, and Engineers, review official SAFe RTE certifications, and trace your 5-year trajectory to Solution Train Engineer (STE).
        </p>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'assessment' ? 'bg-sapphire-600 text-white shadow-glow-sapphire' : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Interactive Self-Assessment</span>
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'eligibility' ? 'bg-sapphire-600 text-white shadow-glow-sapphire' : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Who Can Become an RTE?</span>
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'certifications' ? 'bg-sapphire-600 text-white shadow-glow-sapphire' : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Certification Matrix</span>
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'roadmap' ? 'bg-sapphire-600 text-white shadow-glow-sapphire' : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>5-Year Career Roadmap</span>
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SELF-ASSESSMENT */}
      {activeTab === 'assessment' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Scorecard Box */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-navy-900/90">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Your Diagnostic Readiness Score</span>
              <h2 className="text-2xl font-heading font-extrabold text-white flex items-center space-x-3">
                <span>{scorePct}% Mastery Score</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${readiness.color}`}>
                  {readiness.badge}
                </span>
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">{readiness.text}</p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 text-center shrink-0 min-w-[200px]">
              <span className="text-xs text-slate-400 block font-semibold mb-1">Total Diagnostic Points</span>
              <span className="text-4xl font-heading font-extrabold text-sapphire-300">{totalScore} / 50</span>
            </div>
          </div>

          {/* Questions Grid */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-heading font-bold text-white border-b border-slate-800 pb-3">
              10-Question RTE Competency Self-Diagnostic
            </h3>

            <div className="space-y-6">
              {assessmentQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs font-bold text-sapphire-400">Question {idx + 1} • {q.category}</span>
                    <span className="text-xs font-bold text-slate-300">Rating: {answers[q.id]} / 5</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white font-medium">{q.text}</p>

                  <div className="flex items-center space-x-3 pt-2">
                    <span className="text-[10px] text-slate-500 font-semibold">1 (Emerging)</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={answers[q.id]}
                      onChange={(e) => handleScoreChange(q.id, e.target.value)}
                      className="w-full h-2 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-sapphire-500"
                    />
                    <span className="text-[10px] text-emerald-400 font-semibold">5 (Mastery)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: WHO CAN BECOME AN RTE */}
      {activeTab === 'eligibility' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-3">
            <h2 className="text-2xl font-heading font-extrabold text-white">
              Who Can Become a <span className="text-gradient">Release Train Engineer?</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              The RTE role is open to practitioners from diverse Agile, engineering, and project management backgrounds. Here is how your existing skills translate and what gaps to bridge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {candidateProfiles.map((prof, idx) => (
              <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-navy-900/90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                  <h3 className="text-lg font-heading font-bold text-white flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-sapphire-400" />
                    <span>{prof.role}</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 bg-emerald-950/30 text-emerald-300">
                    {prof.matchScore}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                    <strong className="text-emerald-400 block uppercase text-[10px]">Transferable Strengths</strong>
                    <p className="text-slate-200">{prof.strengths}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                    <strong className="text-amber-400 block uppercase text-[10px]">Skill Gaps to Bridge</strong>
                    <p className="text-slate-200">{prof.gapsToBridge}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-navy-950 border border-sapphire-500/30 space-y-1">
                    <strong className="text-sapphire-300 block uppercase text-[10px]">Actionable Transition Strategy</strong>
                    <p className="text-slate-200">{prof.transitionStrategy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CERTIFICATION MATRIX */}
      {activeTab === 'certifications' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-3">
            <h2 className="text-2xl font-heading font-extrabold text-white">
              Official RTE <span className="text-gradient">Certification & Exam Blueprint</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              Detailed roadmap of enterprise certifications that validate your capability as a Scaled Agile Release Train Engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between bg-navy-900/90">
                <div className="space-y-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border inline-block ${cert.badgeColor}`}>
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">{cert.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <strong className="text-slate-400 block text-[10px] uppercase">Prerequisites</strong>
                    <span className="text-slate-200 font-medium">{cert.prerequisites}</span>
                  </div>
                  <div>
                    <strong className="text-slate-400 block text-[10px] uppercase">Exam Format</strong>
                    <span className="text-sky-300 font-mono text-[11px]">{cert.examFormat}</span>
                  </div>
                  <div>
                    <strong className="text-slate-400 block text-[10px] uppercase">Core Exam Domains</strong>
                    <span className="text-slate-200">{cert.coreTopics}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: 5-YEAR CAREER ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-3">
            <h2 className="text-2xl font-heading font-extrabold text-white">
              The RTE <span className="text-gradient">5-Year Career Trajectory</span>
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
              From Scrum Master or Project Manager to Solution Train Engineer (STE) and Enterprise VMO Leader.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { phase: "Year 0 – 1: Foundation & Co-Facilitation", title: "Agile Coach / Co-RTE", desc: "Co-facilitates Scrum of Scrums (SoS), shadows senior RTE during PI Breakouts, baselines team velocity metrics." },
              { phase: "Year 1 – 3: Full ART Leadership", title: "Release Train Engineer (RTE)", desc: "Facilitates 100-person ART, manages PI Planning Day 1 & 2, drives ART Predictability Index >= 85%, leads Inspect & Adapt." },
              { phase: "Year 3 – 5: Enterprise LACE Champion", title: "Lead / Senior RTE", desc: "Mentors junior RTEs across multiple ARTs, sets ALM tool standards (Jira Align / ADO), drives Lean Budget guardrails with LPM." },
              { phase: "Year 5+: Solution Train & Portfolio Leadership", title: "Solution Train Engineer (STE) / VMO Director", desc: "Facilitates multi-train Solution Trains (500+ people), orchestrates Pre/Post Solution PI Planning, leads Value Stream transformation." }
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-navy-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-sapphire-400">{step.phase}</span>
                  <h3 className="text-lg font-heading font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
                <div className="shrink-0">
                  <span className="px-4 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs font-bold text-slate-300">
                    Step {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
