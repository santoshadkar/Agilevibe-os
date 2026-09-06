import React, { useState } from 'react';
import { RTE_ROLES_DATA } from '../data/rteData';
import { 
  HeartHandshake, 
  Sparkles, 
  HelpCircle, 
  ArrowRightLeft, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle,
  Compass,
  Zap
} from 'lucide-react';

export default function ServantLeadershipDeepDive() {
  const [activeSubSection, setActiveSubSection] = useState('paradox'); // 'paradox' | 'protocols' | 'fresh-art'

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
              <HeartHandshake className="w-3.5 h-3.5 text-sapphire-400" />
              <span>Demystifying Servant Leadership</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              Servant Leadership & <span className="text-gradient">Fresh ART Playbook</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {RTE_ROLES_DATA.overview}
            </p>
          </div>

          {/* Sub Navigation Pills */}
          <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSubSection('paradox')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubSection === 'paradox'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Myths vs Reality
            </button>
            <button
              onClick={() => setActiveSubSection('protocols')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubSection === 'protocols'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Engagement Protocols
            </button>
            <button
              onClick={() => setActiveSubSection('fresh-art')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubSection === 'fresh-art'
                  ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fresh ART (0-90 Days)
            </button>
          </div>
        </div>
      </div>

      {/* SUB-SECTION 1: MYTHS VS REALITY */}
      {activeSubSection === 'paradox' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Clarifying the Servant Leadership Paradox</span>
            </h2>
            <p className="text-xs text-slate-400">The 3 most common misconceptions RTEs face and how to overcome them.</p>
          </div>

          <div className="space-y-4">
            {RTE_ROLES_DATA.servantLeaderParadox.map((p, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3 glass-panel-hover">
                <div className="flex items-start space-x-3 text-rose-300 text-xs font-bold bg-rose-500/10 p-3 rounded-xl border border-rose-500/20">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{p.myth}</span>
                </div>
                <div className="flex items-start space-x-3 text-emerald-300 text-xs font-semibold bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{p.reality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-SECTION 2: BIDIRECTIONAL ENGAGEMENT PROTOCOLS */}
      {activeSubSection === 'protocols' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <ArrowRightLeft className="w-5 h-5 text-sapphire-400" />
              <span>ART & RTE Interaction Protocols</span>
            </h2>
            <p className="text-xs text-slate-400">Clear guidelines on how the train approaches the RTE and how the RTE proactively approaches the train.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RTE_ROLES_DATA.interactionProtocols.map((proto, idx) => (
              <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
                <h3 className="font-heading font-bold text-lg text-white flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <span className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-sky-400' : 'bg-indigo-400'}`}></span>
                  <span>{proto.direction}</span>
                </h3>

                <div className="space-y-3">
                  {proto.scenarios.map((sc, scIdx) => (
                    <div key={scIdx} className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-1.5">
                      <span className="text-xs font-bold text-sapphire-300 block">Scenario: {sc.scenario}</span>
                      <p className="text-xs text-slate-300 leading-relaxed"><strong>Action:</strong> {sc.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-SECTION 3: FRESH ART 0-90 DAY PLAYBOOK */}
      {activeSubSection === 'fresh-art' && (
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Rocket className="w-5 h-5 text-emerald-400" />
              <span>What Should an RTE Do if the ART is Brand New? (0–90 Days Roadmap)</span>
            </h2>
            <p className="text-xs text-slate-400">The battle-tested 3-stage playbook for launching or inheriting a freshly created Agile Release Train.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RTE_ROLES_DATA.freshArtPlaybook.map((stage, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 glass-panel-hover">
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sapphire-500/10 text-sapphire-300 border border-sapphire-500/30">
                    Phase {idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-base text-white">{stage.phase}</h3>
                  <p className="text-xs font-medium text-emerald-400">Focus: {stage.focus}</p>

                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                    {stage.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
