import React, { useState } from 'react';
import { LACE_DATA } from '../data/rteData';
import { 
  ShieldCheck, 
  Sparkles, 
  GitPullRequest, 
  Building2, 
  CheckCircle2,
  Award,
  FileText,
  Copy,
  Check
} from 'lucide-react';

export default function LaceGuide() {
  const [activeTab, setActiveTab] = useState('synergy'); // 'synergy' | 'charter' | 'assessment'
  const [copiedCharter, setCopiedCharter] = useState(false);

  // Diagnostic Matrix state
  const [scores, setScores] = useState({
    backlog: 3,
    coaching: 4,
    metrics: 3,
    sponsorship: 2,
    governance: 4
  });

  const questions = [
    { key: 'backlog', title: '1. Transformation Backlog Sync', desc: 'Does your ART send systemic impediments directly to the LACE Enterprise Transformation Backlog?' },
    { key: 'coaching', title: '2. SPC Coaching & Training Support', desc: 'Does LACE provide certified SPC training and coaching for your Scrum Masters and POs?' },
    { key: 'metrics', title: '3. Flow Metrics Telemetry Alignment', desc: 'Are your ART Flow Metrics integrated into the LACE portfolio-level dashboard?' },
    { key: 'sponsorship', title: '4. Executive Sponsor Engagement', desc: 'Does LACE help facilitate executive presence (Business Owners) at your PI System Demos?' },
    { key: 'governance', title: '5. Lean Guardrails & Tool Consistency', desc: 'Does your ART adhere to enterprise Lean Budget Guardrails defined by LACE?' }
  ];

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = questions.length * 5;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getMaturityBand = (pct) => {
    if (pct >= 80) return { label: 'High Synergy & Enterprise Alignment', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' };
    if (pct >= 50) return { label: 'Moderate Synergy (Active Growth Area)', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' };
    return { label: 'Siloed ART (Requires LACE Engagement)', color: 'text-rose-400 border-rose-500/30 bg-rose-500/10' };
  };

  const maturity = getMaturityBand(percentage);

  const handleCopyCharter = () => {
    navigator.clipboard.writeText(LACE_DATA.laceCharterTemplate);
    setCopiedCharter(true);
    setTimeout(() => setCopiedCharter(false), 2500);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sapphire-400" />
              <span>Enterprise SAFe Governance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Understanding <span className="text-gradient">LACE</span> & RTE Synergy
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {LACE_DATA.definition}
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('synergy')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'synergy' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              RTE-LACE Synergy
            </button>
            <button
              onClick={() => setActiveTab('charter')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'charter' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              LACE Charter
            </button>
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'assessment' ? 'bg-sapphire-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Synergy Assessor
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: SYNERGY VECTORS */}
      {activeTab === 'synergy' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <GitPullRequest className="w-5 h-5 text-sapphire-400" />
              <span>How RTEs Partner with LACE Across 4 Transformation Vectors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LACE_DATA.rteLaceSynergy.map((syn, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 glass-panel-hover">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="font-heading font-bold text-base text-white">{syn.area}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sapphire-400 bg-sapphire-500/10 px-2.5 py-0.5 rounded-full">
                    Vector {idx + 1}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 text-slate-300">
                    <strong className="text-sky-400 block mb-0.5">LACE Portfolio Role:</strong>
                    {syn.laceRole}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 text-slate-300">
                    <strong className="text-sapphire-400 block mb-0.5">RTE ART Role:</strong>
                    {syn.rteRole}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                  ✨ <strong>Synergy Outcome:</strong> {syn.synergy}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: LACE CHARTER TEMPLATE */}
      {activeTab === 'charter' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-navy-950/90">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Enterprise Blueprint</span>
              <h2 className="text-xl font-heading font-bold text-white">LACE Charter & Operating Model</h2>
            </div>

            <button
              onClick={handleCopyCharter}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-bold shadow-glow-sapphire"
            >
              {copiedCharter ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCharter ? 'Charter Copied!' : 'Copy LACE Charter'}</span>
            </button>
          </div>

          <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-6 rounded-2xl border border-slate-800 max-h-[420px] overflow-y-auto">
            {LACE_DATA.laceCharterTemplate}
          </pre>
        </div>
      )}

      {/* TAB 3: DIAGNOSTIC ASSESSOR */}
      {activeTab === 'assessment' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sapphire-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Diagnostic Tool</span>
              <h2 className="text-xl font-heading font-bold text-white">LACE-ART Synergy Alignment Assessor</h2>
            </div>

            <div className={`px-4 py-2 rounded-2xl border text-xs font-bold ${maturity.color} flex items-center space-x-2`}>
              <Award className="w-4 h-4" />
              <span>{percentage}% Maturity: {maturity.label}</span>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.key} className="p-4 rounded-2xl bg-navy-900/60 border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm text-white">{q.title}</h3>
                    <p className="text-xs text-slate-400">{q.desc}</p>
                  </div>

                  <div className="flex items-center space-x-1 shrink-0">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => setScores({ ...scores, [q.key]: val })}
                        className={`w-8 h-8 rounded-xl font-bold text-xs transition-all ${
                          scores[q.key] === val
                            ? 'bg-sapphire-600 text-white shadow-md scale-110'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
