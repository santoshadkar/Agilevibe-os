import React, { useState } from 'react';
import { ROLE_PRE_PI_CHECKLISTS, RETROSPECTIVE_TEMPLATES } from '../data/rteData';
import { 
  Wrench, 
  Sparkles, 
  FileText, 
  Copy, 
  Check, 
  Users, 
  Target, 
  ShieldCheck, 
  Layers,
  Layout,
  CheckSquare,
  RefreshCw,
  Anchor,
  Compass
} from 'lucide-react';

export default function WorkshopStudio() {
  const [activeCanvas, setActiveCanvas] = useState('role-checklists'); // 'role-checklists' | 'retro-studio' | 'art-canvas' | 'team-canvas'

  // ==========================================
  // SUB-SECTION 1: ROLE PRE-PI CHECKLISTS STATE
  // ==========================================
  const [activeRoleKey, setActiveRoleKey] = useState('pm'); // 'pm' | 'po' | 'sm'
  const [roleChecklists, setRoleChecklists] = useState(ROLE_PRE_PI_CHECKLISTS);

  const toggleRoleChecklist = (roleKey, itemId) => {
    setRoleChecklists({
      ...roleChecklists,
      [roleKey]: {
        ...roleChecklists[roleKey],
        items: roleChecklists[roleKey].items.map(item => item.id === itemId ? { ...item, status: !item.status } : item)
      }
    });
  };

  const currentRoleData = roleChecklists[activeRoleKey];
  const completedRoleCount = currentRoleData.items.filter(i => i.status).length;
  const rolePct = Math.round((completedRoleCount / currentRoleData.items.length) * 100);

  // ==========================================
  // SUB-SECTION 2: RETROSPECTIVE STUDIO STATE
  // ==========================================
  const [activeRetroType, setActiveRetroType] = useState('piPlanningRetro'); // 'piPlanningRetro' | 'piExecutionRetro' | 'sailboatRetro'
  const [retroArtName, setRetroArtName] = useState('Titan Value Stream');
  const [retroPiName, setRetroPiName] = useState('PI-2026.3');
  const [retroRteName, setRetroRteName] = useState('Sarah Jenkins (RTE)');
  const [generatedRetro, setGeneratedRetro] = useState('');
  const [copiedRetro, setCopiedRetro] = useState(false);

  const handleGenerateRetro = () => {
    let raw = RETROSPECTIVE_TEMPLATES[activeRetroType] || RETROSPECTIVE_TEMPLATES.piPlanningRetro;
    const filled = raw
      .replace(/{ART_NAME}/g, retroArtName)
      .replace(/{PI_NAME}/g, retroPiName)
      .replace(/{RTE_NAME}/g, retroRteName)
      .replace(/{TEAM_NAME}/g, retroArtName)
      .replace(/{DATE}/g, new Date().toLocaleDateString())
      .replace(/{PREDICTABILITY_PCT}/g, '91.5')
      .replace(/{DELIVERED_FEATURES}/g, '14')
      .replace(/{PLANNED_FEATURES}/g, '15')
      .replace(/{ATTENDANCE_PCT}/g, '95');

    setGeneratedRetro(filled);
  };

  // ==========================================
  // SUB-SECTION 3: ART CANVAS STATE
  // ==========================================
  const [artName, setArtName] = useState('Titan Global Payment Stream');
  const [artVision, setArtVision] = useState('To deliver a secure, sub-second global payments infrastructure that empowers 10M+ daily transactions while maintaining 99.999% uptime.');
  const [artTeams, setArtTeams] = useState('Team Alpha (Checkout API), Team Beta (Fraud AI), Team Gamma (Ledger & Settlement), Team Delta (Mobile SDK)');
  const [artGuardrails, setArtGuardrails] = useState('1. Zero deployment without automated integration tests.\n2. Security compliance sign-off prior to Iteration 5.\n3. Capacity reserved: 75% Features, 15% Enablers, 10% Defect Fixes.');
  const [artMetrics, setArtMetrics] = useState('1. ART Predictability Index >= 85%\n2. Flow Efficiency >= 30%\n3. System Demo Executive Attendance >= 90%');
  const [generatedArtCanvas, setGeneratedArtCanvas] = useState('');
  const [copiedArt, setCopiedArt] = useState(false);

  // ==========================================
  // SUB-SECTION 4: TEAM CANVAS STATE
  // ==========================================
  const [teamName, setTeamName] = useState('Team Alpha (Checkout API)');
  const [teamRoles, setTeamRoles] = useState('Product Owner: Alex M. | Scrum Master: Priya K. | Tech Lead: David R. | Developers: 4 | QA: 2');
  const [teamGoals, setTeamGoals] = useState('Complete Payment Gateway v3.0 by Iteration 4 with zero high-severity open defects.');
  const [teamValues, setTeamValues] = useState('Transparency, Psychological Safety, Continuous Learning, Mutual Respect');
  const [teamRules, setTeamRules] = useState('1. Daily Standup strictly 15 mins at 09:30 AM.\n2. Blocked stories escalated to SM within 4 hours.\n3. PR reviews completed within 2 hours of request.');
  const [generatedTeamCanvas, setGeneratedTeamCanvas] = useState('');
  const [copiedTeam, setCopiedTeam] = useState(false);

  const handleGenerateArtCanvas = () => {
    const canvas = `# AGILE RELEASE TRAIN (ART) CANVAS\n**ART Name**: ${artName}\n**Date Created**: ${new Date().toLocaleDateString()}\n\n---\n\n## 1. Strategic Vision & Customer Value\n${artVision}\n\n## 2. Agile Teams on the Train\n${artTeams}\n\n## 3. Lean Budget & Architectural Guardrails\n${artGuardrails}\n\n## 4. Key Performance & Flow Metrics\n${artMetrics}\n\n---\n*Generated via RTE Nexus Workshop Studio*`;
    setGeneratedArtCanvas(canvas);
  };

  const handleGenerateTeamCanvas = () => {
    const canvas = `# TEAM CANVAS & WORKING AGREEMENTS\n**Team Name**: ${teamName}\n**Date Created**: ${new Date().toLocaleDateString()}\n\n---\n\n## 1. Team Roles & Skill Matrix\n${teamRoles}\n\n## 2. Shared Team Goals & PI Objectives\n${teamGoals}\n\n## 3. Core Values & Culture\n${teamValues}\n\n## 4. Operating Rules & Working Agreements\n${teamRules}\n\n---\n*Generated via RTE Nexus Workshop Studio*`;
    setGeneratedTeamCanvas(canvas);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
              <Layout className="w-3.5 h-3.5 text-sapphire-400" />
              <span>Live Workshop Studio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Role Pre-PI Checklists, <span className="text-gradient">Retrospectives</span> & Canvases
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Interactive pre-PI readiness checklists for PMs, POs, and SMs, Retrospective templates for PI Planning & Execution, and exportable ART & Team Canvases.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveCanvas('role-checklists')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCanvas === 'role-checklists' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Role Pre-PI Checklists
            </button>
            <button
              onClick={() => setActiveCanvas('retro-studio')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCanvas === 'retro-studio' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Retro Studio
            </button>
            <button
              onClick={() => setActiveCanvas('art-canvas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCanvas === 'art-canvas' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              ART Canvas
            </button>
            <button
              onClick={() => setActiveCanvas('team-canvas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCanvas === 'team-canvas' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Team Canvas
            </button>
          </div>
        </div>
      </div>

      {/* SUB-SECTION 1: ROLE-BASED PRE-PI CHECKLISTS */}
      {activeCanvas === 'role-checklists' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">RTE Audit Gate</span>
              <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                <span>Pre-PI Planning Readiness Checklists per Role</span>
              </h2>
            </div>

            {/* Role Switcher Pills */}
            <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveRoleKey('pm')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoleKey === 'pm' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Product Managers (PM)
              </button>
              <button
                onClick={() => setActiveRoleKey('po')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoleKey === 'po' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Product Owners (PO)
              </button>
              <button
                onClick={() => setActiveRoleKey('sm')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeRoleKey === 'sm' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Scrum Masters (SM)
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-sm">{currentRoleData.role}</h3>
              <p className="text-xs text-slate-400">Owner: {currentRoleData.owner}</p>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-emerald-400 block">{rolePct}% Complete</span>
              <span className="text-[11px] text-slate-500">{completedRoleCount} of {currentRoleData.items.length} Tasks Verified</span>
            </div>
          </div>

          <div className="space-y-3">
            {currentRoleData.items.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleRoleChecklist(activeRoleKey, item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center space-x-3 ${
                  item.status
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-navy-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                  item.status ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-slate-700 bg-navy-950'
                }`}>
                  {item.status && <Check className="w-3.5 h-3.5" />}
                </div>
                <span className={`text-xs font-medium ${item.status ? 'line-through opacity-80' : 'text-slate-200'}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-SECTION 2: RETROSPECTIVE STUDIO */}
      {activeCanvas === 'retro-studio' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Controls */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Continuous Improvement</span>
              <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                <Anchor className="w-5 h-5 text-sky-400" />
                <span>Retrospective Template Generator</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveRetroType('piPlanningRetro')}
                  className={`flex-1 py-2 rounded-xl font-bold transition-all ${
                    activeRetroType === 'piPlanningRetro' ? 'bg-sapphire-600 text-white' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  PI Planning Retro
                </button>
                <button
                  onClick={() => setActiveRetroType('piExecutionRetro')}
                  className={`flex-1 py-2 rounded-xl font-bold transition-all ${
                    activeRetroType === 'piExecutionRetro' ? 'bg-sapphire-600 text-white' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  PI Execution Retro (I&A)
                </button>
                <button
                  onClick={() => setActiveRetroType('sailboatRetro')}
                  className={`flex-1 py-2 rounded-xl font-bold transition-all ${
                    activeRetroType === 'sailboatRetro' ? 'bg-sapphire-600 text-white' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Sailboat Retro
                </button>
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">ART / Team Name</label>
                <input
                  type="text"
                  value={retroArtName}
                  onChange={(e) => setRetroArtName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">PI Target</label>
                <input
                  type="text"
                  value={retroPiName}
                  onChange={(e) => setRetroPiName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateRetro}
                className="w-full py-3.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-sapphire transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Generate Retrospective Artifact</span>
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Retrospective Markdown Output</span>
                {generatedRetro && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedRetro);
                      setCopiedRetro(true);
                      setTimeout(() => setCopiedRetro(false), 2500);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-semibold"
                  >
                    {copiedRetro ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedRetro ? 'Copied Retro!' : 'Copy Markdown'}</span>
                  </button>
                )}
              </div>

              {generatedRetro ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedRetro}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileText className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Choose a retro format and click <strong>"Generate Retrospective Artifact"</strong>.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* CANVAS 3: ART CANVAS */}
      {activeCanvas === 'art-canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-heading font-bold text-white border-b border-slate-800 pb-3 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-sapphire-400" />
              <span>Configure ART Canvas</span>
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">ART Name</label>
                <input
                  type="text"
                  value={artName}
                  onChange={(e) => setArtName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Strategic Vision</label>
                <textarea
                  rows={3}
                  value={artVision}
                  onChange={(e) => setArtVision(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Agile Teams on the Train</label>
                <input
                  type="text"
                  value={artTeams}
                  onChange={(e) => setArtTeams(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Lean Budget & Arch Guardrails</label>
                <textarea
                  rows={3}
                  value={artGuardrails}
                  onChange={(e) => setArtGuardrails(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none font-mono"
                />
              </div>

              <button
                onClick={handleGenerateArtCanvas}
                className="w-full py-3.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-sapphire transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Generate Markdown ART Canvas</span>
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">ART Canvas Output</span>
                {generatedArtCanvas && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedArtCanvas);
                      setCopiedArt(true);
                      setTimeout(() => setCopiedArt(false), 2500);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-semibold"
                  >
                    {copiedArt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedArt ? 'Copied!' : 'Copy Markdown'}</span>
                  </button>
                )}
              </div>

              {generatedArtCanvas ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedArtCanvas}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileText className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Fill in your ART details and click <strong>"Generate Markdown ART Canvas"</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CANVAS 4: TEAM CANVAS */}
      {activeCanvas === 'team-canvas' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-heading font-bold text-white border-b border-slate-800 pb-3 flex items-center space-x-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span>Configure Team Canvas</span>
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Roles & Skill Matrix</label>
                <input
                  type="text"
                  value={teamRoles}
                  onChange={(e) => setTeamRoles(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-emerald-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Operating Rules & Working Agreements</label>
                <textarea
                  rows={3}
                  value={teamRules}
                  onChange={(e) => setTeamRules(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-emerald-400 focus:outline-none font-mono"
                />
              </div>

              <button
                onClick={handleGenerateTeamCanvas}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-emerald transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Generate Markdown Team Canvas</span>
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Team Canvas Output</span>
                {generatedTeamCanvas && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedTeamCanvas);
                      setCopiedTeam(true);
                      setTimeout(() => setCopiedTeam(false), 2500);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                  >
                    {copiedTeam ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTeam ? 'Copied!' : 'Copy Markdown'}</span>
                  </button>
                )}
              </div>

              {generatedTeamCanvas ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedTeamCanvas}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileText className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Fill in your team details and click <strong>"Generate Markdown Team Canvas"</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
