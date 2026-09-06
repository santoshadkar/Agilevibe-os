import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 mt-20 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1 */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-sapphire-600 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading font-extrabold text-lg text-white">RTE NEXUS</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The ultimate executive AI command center and continuous learning portal for SAFe Release Train Engineers (RTEs), Scrum Masters, and LACE transformation leaders.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Leadership & Roles</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('foundations')} className="hover:text-sapphire-400 transition-colors">RTE Definition & Roles</button></li>
            <li><button onClick={() => setActiveTab('servant-leadership')} className="hover:text-sapphire-400 transition-colors">Servant Leadership & Fresh ART</button></li>
            <li><button onClick={() => setActiveTab('art-dynamics')} className="hover:text-sapphire-400 transition-colors">Tuckman Ladder & 5 Dysfunctions</button></li>
            <li><button onClick={() => setActiveTab('day-in-life')} className="hover:text-sapphire-400 transition-colors">Day in the Life Playbook</button></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Workshops & Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('workshop-studio')} className="hover:text-sky-400 transition-colors">ART & Team Canvas Studio</button></li>
            <li><button onClick={() => setActiveTab('alm-tools')} className="hover:text-sky-400 transition-colors">ALM Stack & Jira/ADO Setup</button></li>
            <li><button onClick={() => setActiveTab('reporting-engine')} className="hover:text-emerald-400 transition-colors">Cadence Reporting Engine</button></li>
            <li><button onClick={() => setActiveTab('ai-copilot')} className="hover:text-sky-400 transition-colors">AI Prompt Library & Simulator</button></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">SAFe 6.0 Resources</h4>
          <div className="space-y-2 text-xs">
            <a href="https://scaledagileframework.com/release-train-engineer-and-solution-train-engineer/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sapphire-400">
              <span>Scaled Agile Framework RTE Reference</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://scaledagileframework.com/pi-planning/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sapphire-400">
              <span>PI Planning Playbook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://scaledagileframework.com/lean-agile-center-of-excellence/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sapphire-400">
              <span>LACE Operational Blueprint</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/60 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 RTE Nexus. Executive Portal for Release Train Engineers worldwide.</p>
        <p className="flex items-center space-x-1 mt-2 sm:mt-0">
          <span>Engineered with Vibe Coding & Generative AI</span>
        </p>
      </div>
    </footer>
  );
}
