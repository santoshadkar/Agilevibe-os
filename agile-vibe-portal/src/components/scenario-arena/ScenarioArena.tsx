import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GET_ROLE_SCENARIOS } from '../../data/roleScenarioBanks';
import type { UserRole } from '../../types';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  BrainCircuit, 
  CheckCircle2, 
  XCircle, 
  Bot, 
  ChevronRight, 
  RotateCcw, 
  Award, 
  ShieldCheck, 
  Compass, 
  Target
} from 'lucide-react';

export const ScenarioArena: React.FC = () => {
  const { activeRole, submitScenarioAttempt } = useApp();

  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>(activeRole);

  const scenarios = GET_ROLE_SCENARIOS(roleFilter === 'all' ? activeRole : roleFilter);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenarios[0].id);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [userRationale, setUserRationale] = useState<string>('');
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const currentScenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];
  const selectedOption = currentScenario.options.find(o => o.id === selectedOptionId);

  const handleSubmitOption = (optionId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
    setHasSubmitted(true);

    const opt = currentScenario.options.find(o => o.id === optionId);
    const score = opt ? opt.score : 50;

    submitScenarioAttempt({
      scenarioId: currentScenario.id,
      selectedOptionId: optionId,
      userRationale,
      score,
      aiCoachingText: currentScenario.expertGuidance,
      timestamp: new Date().toISOString()
    });

    if (opt && opt.isOptimal) {
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // Fallback
      }
    }
  };

  const handleNextScenario = () => {
    const currentIndex = scenarios.findIndex(s => s.id === currentScenario.id);
    if (currentIndex < scenarios.length - 1) {
      const nextS = scenarios[currentIndex + 1];
      setSelectedScenarioId(nextS.id);
      setSelectedOptionId(null);
      setUserRationale('');
      setHasSubmitted(false);
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setUserRationale('');
    setHasSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">AI Scenario Arena & Real-World Simulator</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {scenarios.length} Scenarios for {activeRole.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Real-world Agile & Product decision simulations with instant AI coaching feedback and scorecards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => { setRoleFilter('scrum-master'); setSelectedOptionId(null); setHasSubmitted(false); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'scrum-master'
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Scrum Master (15 Scenarios)</span>
        </button>
        <button
          onClick={() => { setRoleFilter('product-owner'); setSelectedOptionId(null); setHasSubmitted(false); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-owner'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Product Owner (15 Scenarios)</span>
        </button>
        <button
          onClick={() => { setRoleFilter('product-manager'); setSelectedOptionId(null); setHasSubmitted(false); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-manager'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Product Manager (15 Scenarios)</span>
        </button>
      </div>

      {/* Arena Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scenario List Sidebar */}
        <div className="lg:col-span-1 glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Select Scenario Challenge:</h3>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {scenarios.map((scen) => {
              const isSelected = scen.id === currentScenario.id;
              return (
                <button
                  key={scen.id}
                  onClick={() => {
                    setSelectedScenarioId(scen.id);
                    setSelectedOptionId(null);
                    setUserRationale('');
                    setHasSubmitted(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[9px] rounded font-bold uppercase bg-slate-800 text-cyan-300">
                      {scen.framework}
                    </span>
                    <span className="text-[10px] text-amber-400 font-semibold">{scen.complexity}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1.5 truncate">{scen.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{scen.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Simulation Main Panel */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
          {/* Header Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                [{currentScenario.framework}] • {currentScenario.complexity} Challenge
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">{currentScenario.title}</h3>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-200 text-xs border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Arena</span>
            </button>
          </div>

          {/* Situation Context Box */}
          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Scenario Situation & Organizational Context
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.description}</p>
            <p className="text-xs text-slate-400 italic pt-1 border-t border-slate-800/80">
              <strong>Context Friction: </strong>{currentScenario.context}
            </p>
          </div>

          {/* Decision Options */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Select Your Strategic Action:
            </h4>

            {currentScenario.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              let btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700';

              if (hasSubmitted) {
                if (opt.isOptimal) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500/60 text-emerald-200 shadow-md shadow-emerald-500/10 font-semibold';
                } else if (isSelected && !opt.isOptimal) {
                  btnStyle = 'bg-rose-500/20 border-rose-500/60 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-900/30 border-slate-800/40 text-slate-500 opacity-50';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={hasSubmitted}
                  onClick={() => handleSubmitOption(opt.id)}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left text-xs transition-all ${btnStyle}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                    hasSubmitted && opt.isOptimal ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {opt.id.split('_')[1] || '•'}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt.text}</span>
                  {hasSubmitted && opt.isOptimal && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {hasSubmitted && isSelected && !opt.isOptimal && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* AI Coaching & Rationale Evaluation */}
          {hasSubmitted && (
            <div className="space-y-4 pt-4 border-t border-slate-800/80 animate-fadeIn">
              {/* Scorecard */}
              <div className="p-4 bg-slate-950 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Decision Scorecard</span>
                    <h4 className="text-base font-bold text-white">
                      Score: <span className={selectedOption?.isOptimal ? 'text-emerald-400' : 'text-amber-400'}>{selectedOption?.score} / 100</span>
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleNextScenario}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>Next Challenge</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* AI Expert Guidance */}
              <div className="p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/40 text-xs space-y-2">
                <div className="font-bold text-cyan-300 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  AI Agile Leadership Coaching Guidance
                </div>
                <p className="text-slate-300 leading-relaxed">{currentScenario.expertGuidance}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
