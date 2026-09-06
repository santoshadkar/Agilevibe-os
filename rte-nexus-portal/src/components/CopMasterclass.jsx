import React, { useState } from 'react';
import { COP_DATA } from '../data/rteData';
import { 
  Users, 
  Sparkles, 
  CheckCircle, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  BookOpen,
  ArrowRight,
  UserCheck,
  Zap
} from 'lucide-react';

export default function CopMasterclass() {
  // Charter Builder State
  const [copDomain, setCopDomain] = useState('Scrum Master & Coaching Excellence CoP');
  const [copChampion, setCopChampion] = useState('Sarah Jenkins (Lead RTE) & Mark Torres (Senior SM)');
  const [copCadence, setCopCadence] = useState('Bi-weekly on Thursdays, 03:00 PM – 03:45 PM');
  const [copVision, setCopVision] = useState('To build a high-performing community of Agile Coaches and Scrum Masters across Titan Value Stream who continuously elevate team flow efficiency, psychological safety, and SAFe practice maturity.');
  const [copObjectives, setCopObjectives] = useState('1. Standardize Iteration Retrospective formats.\n2. Master SAFe Flow Metrics diagnostic dashboards.\n3. Conduct bi-weekly peer coaching and conflict resolution clinics.');
  const [generatedCharter, setGeneratedCharter] = useState('');
  const [copiedCharter, setCopiedCharter] = useState(false);

  const handleGenerateCharter = () => {
    const charter = `# COMMUNITY OF PRACTICE (CoP) CHARTER
**Domain**: ${copDomain}
**Executive Sponsor / RTE Champion**: ${copChampion}
**Meeting Cadence**: ${copCadence}

---

## 1. Vision & Purpose Statement
${copVision}

## 2. Key Objectives & Outcomes
${copObjectives}

## 3. Membership & Participation
- **Open Membership**: All Scrum Masters, Agile Coaches, and interested practitioners on the ART.
- **Participation Commitment**: Active contribution to bi-weekly clinics, sharing real-world case studies, and adopting shared practices.

## 4. Governance & IP Iteration Synergy
- CoP sessions will leverage Innovation & Planning (IP) Iterations for 2-hour deep-dive hackathons.
- Retrospective action items will be tracked on the CoP Continuous Improvement Board.

---
*Created via RTE Nexus CoP Toolkit*`;

    setGeneratedCharter(charter);
  };

  const handleCopyCharter = () => {
    navigator.clipboard.writeText(generatedCharter);
    setCopiedCharter(true);
    setTimeout(() => setCopiedCharter(false), 2500);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Users className="w-3.5 h-3.5 text-emerald-400" />
          <span>SAFe Community Mastery</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Communities of Practice <span className="text-gradient">CoP Masterclass</span> & Charter Builder
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {COP_DATA.definition}
        </p>
      </div>

      {/* What is CoP & RTE's Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-heading font-bold text-white">What is a CoP in SAFe?</h2>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Unlike functional silos or formal departments, Communities of Practice are cross-cutting passion groups. A Scrum Master CoP, for instance, links Scrum Masters across 10 different teams to share retro formats, solve systemic team friction, and learn flow metrics together.
          </p>
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-emerald-300 font-medium">
            💡 <strong>Key Benefit:</strong> Spreads Lean-Agile innovation organically across the ART without mandatory top-down directives.
          </div>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-heading font-bold text-white">How the RTE Powers CoPs</h2>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {COP_DATA.rteRoleInCop}
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Protects calendar slots during IP Iterations for CoP workshops.</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Connects CoP retro items directly into the ART Inspect & Adapt backlog.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Core CoP Types Grid */}
      <div>
        <div className="mb-6">
          <h2 className="text-xl font-heading font-bold text-white">Primary CoPs on an Agile Release Train</h2>
          <p className="text-xs text-slate-400">The 4 essential domain communities every RTE should encourage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COP_DATA.copTypes.map((cop, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {cop.cadence}
                </span>
                <h3 className="font-heading font-bold text-base text-white">{cop.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{cop.focus}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>Champion:</strong> <span className="text-slate-300">{cop.champion}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive CoP Charter Builder */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-heading font-bold text-white">Interactive CoP Charter Generator</h2>
            <p className="text-xs text-slate-400">Build and export a formal Charter to launch a new CoP on your train.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">CoP Domain Name</label>
              <input
                type="text"
                value={copDomain}
                onChange={(e) => setCopDomain(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">RTE Sponsor & Domain Champions</label>
              <input
                type="text"
                value={copChampion}
                onChange={(e) => setCopChampion(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Meeting Cadence & Time</label>
              <input
                type="text"
                value={copCadence}
                onChange={(e) => setCopCadence(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Vision Statement</label>
              <textarea
                rows={3}
                value={copVision}
                onChange={(e) => setCopVision(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Key Objectives & Deliverables</label>
              <textarea
                rows={3}
                value={copObjectives}
                onChange={(e) => setCopObjectives(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-emerald-400 focus:outline-none font-mono"
              />
            </div>

            <button
              onClick={handleGenerateCharter}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-glow-emerald transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Generate Markdown Charter Document</span>
            </button>
          </div>

          {/* Markdown Charter Preview */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 bg-slate-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Charter Markdown Output</span>
                {generatedCharter && (
                  <button
                    onClick={handleCopyCharter}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                  >
                    {copiedCharter ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-white" />
                        <span>Copied Charter!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Markdown</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {generatedCharter ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-slate-900 p-4 rounded-xl border border-slate-800 max-h-[360px] overflow-y-auto">
                  {generatedCharter}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileText className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Fill in your CoP details and click <strong>"Generate Markdown Charter Document"</strong>.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
