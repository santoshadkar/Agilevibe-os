import React, { useState } from 'react';
import { ALM_TOOLS_DATA } from '../data/rteData';
import { 
  Wrench, 
  Sparkles, 
  CheckCircle, 
  Lightbulb, 
  Layers, 
  Settings,
  ExternalLink
} from 'lucide-react';

export default function AlmToolsGuide() {
  const [selectedToolIndex, setSelectedToolIndex] = useState(0);

  const currentTool = ALM_TOOLS_DATA[selectedToolIndex];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
          <Settings className="w-3.5 h-3.5 text-sapphire-400" />
          <span>ALM Stack Mastery</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          ALM Tools & Dashboards <span className="text-gradient">Configurator for RTEs</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Configuring your Agile Lifecycle Management (ALM) tool stack correctly is critical for real-time visibility into dependencies, flow metrics, and ART predictability.
        </p>
      </div>

      {/* Tool Selector Buttons */}
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-none">
        {ALM_TOOLS_DATA.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedToolIndex(idx)}
            className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              selectedToolIndex === idx
                ? 'bg-sapphire-600 text-white shadow-glow-sapphire scale-[1.02]'
                : 'bg-navy-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {t.tool}
          </button>
        ))}
      </div>

      {/* Detailed Tool Configuration Panel */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">{currentTool.purpose}</span>
            <h2 className="text-2xl font-heading font-extrabold text-white">{currentTool.tool}</h2>
          </div>
          <span className="text-xs text-slate-400 bg-navy-950 px-3 py-1.5 rounded-full border border-slate-800">
            RTE Setup Guide
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 cols: Step by step configuration */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Recommended RTE Setup Steps
            </h3>

            <div className="space-y-3">
              {currentTool.rteConfiguration.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-sapphire-500/20 text-sapphire-300 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-200 font-medium leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right col: Pro Tip */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Field Pro-Tip
            </h3>
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-3">
              <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>RTE Board Rule</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">
                "{currentTool.proTip}"
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
