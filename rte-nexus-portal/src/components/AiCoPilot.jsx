import React, { useState } from 'react';
import { AI_PROMPT_LIBRARY, RTE_AI_SIMULATOR_SCENARIOS } from '../data/rteData';
import { 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  Wand2, 
  Search, 
  Play, 
  Sliders, 
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Tag
} from 'lucide-react';

export default function AiCoPilot() {
  const [activeSubTab, setActiveSubTab] = useState('workbench'); // 'library' | 'workbench' | 'simulator'
  const [selectedPrompt, setSelectedPrompt] = useState(AI_PROMPT_LIBRARY[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Workbench Form Inputs
  const [artName, setArtName] = useState('Titan Value Stream');
  const [targetPi, setTargetPi] = useState('PI-2026.3');
  const [featureName, setFeatureName] = useState('Real-Time Payment Gateway Integration');
  const [rawRisks, setRawRisks] = useState('1. Third-party OAuth API spec is unreleased.\n2. Team Beta lacks AWS Lambda expertise.\n3. Shared DBA resource bottleneck in Iteration 2.');
  const [capacityLoad, setCapacityLoad] = useState('Total Capacity: 450 pts | Planned Load: 490 pts (Overcapacity by 40 pts)');
  const [generatedCustomPrompt, setGeneratedCustomPrompt] = useState('');

  // Simulator State
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);

  const currentScenario = RTE_AI_SIMULATOR_SCENARIOS[activeScenarioIndex];

  // Filter prompt library
  const filteredPrompts = AI_PROMPT_LIBRARY.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopyPrompt = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleBuildCustomPrompt = () => {
    const prompt = `Act as an expert SAFe 6.0 Release Train Engineer (RTE) for ART '${artName}' planning for '${targetPi}'.

CONTEXT & ART DATA:
- Feature Under Refinement: ${featureName}
- Capacity vs Planned Load: ${capacityLoad}
- Identified Risks & Dependencies:
${rawRisks}

INSTRUCTIONS & EXECUTABLE DELIVERABLES:
1. Conduct a ROAMing Analysis (Resolved, Owned, Accepted, Mitigated) for all identified risks.
2. Draft a 1-page Executive Brief for Business Owners highlighting capacity adjustments required.
3. Formulate 3 Gherkin acceptance criteria for ${featureName}.
4. Provide a 3-step action plan for the next Scrum of Scrums (SoS) meeting.`;

    setGeneratedCustomPrompt(prompt);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Gen RTE AI Co-Pilot Suite</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
              AI Tools & Prompt Engineering for <span className="text-gradient">RTE Leverage</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Supercharge your Agile Release Train with AI. Build customized super-prompts, access battle-tested prompt libraries, and simulate complex RTE emergency scenarios.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSubTab('workbench')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'workbench'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prompt Workbench
            </button>
            <button
              onClick={() => setActiveSubTab('library')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'library'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prompt Library
            </button>
            <button
              onClick={() => setActiveSubTab('simulator')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'simulator'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Simulator
            </button>
          </div>
        </div>
      </div>

      {/* SUB TAB 1: PROMPT WORKBENCH */}
      {activeSubTab === 'workbench' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Controls */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-heading font-bold text-white">Interactive RTE Super-Prompt Builder</h2>
                <p className="text-xs text-slate-400">Fill in your ART parameters to generate a custom prompt for ChatGPT / Claude.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">ART Name</label>
                  <input 
                    type="text" 
                    value={artName}
                    onChange={(e) => setArtName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Target PI</label>
                  <input 
                    type="text" 
                    value={targetPi}
                    onChange={(e) => setTargetPi(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Feature Name Under Refinement</label>
                <input 
                  type="text" 
                  value={featureName}
                  onChange={(e) => setFeatureName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Capacity vs Load Summary</label>
                <input 
                  type="text" 
                  value={capacityLoad}
                  onChange={(e) => setCapacityLoad(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Identified Team Risks & Blockers</label>
                <textarea 
                  rows={4}
                  value={rawRisks}
                  onChange={(e) => setRawRisks(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-400 focus:outline-none font-mono"
                />
              </div>

              <button
                onClick={handleBuildCustomPrompt}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-glow-cyan transition-all"
              >
                <Wand2 className="w-4 h-4" />
                <span>Generate Customized AI Super-Prompt</span>
              </button>
            </div>
          </div>

          {/* Generated Prompt Output Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-slate-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Generated Executable Prompt</span>
                {generatedCustomPrompt && (
                  <button
                    onClick={() => handleCopyPrompt(generatedCustomPrompt, 'custom-wb')}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                  >
                    {copiedId === 'custom-wb' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Super-Prompt</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {generatedCustomPrompt ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-slate-900 p-4 rounded-2xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedCustomPrompt}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <Wand2 className="w-10 h-10 text-slate-700 animate-bounce" />
                  <p className="text-xs">Click <strong>"Generate Customized AI Super-Prompt"</strong> to synthesize your prompt.</p>
                </div>
              )}
            </div>

            {/* Quick AI LLM Direct Launch Links */}
            {generatedCustomPrompt && (
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Copy & paste into your preferred LLM:</span>
                <div className="flex items-center space-x-2">
                  <a href="https://chatgpt.com" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-800 flex items-center space-x-1">
                    <span>ChatGPT</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://claude.ai" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-indigo-400 border border-slate-800 flex items-center space-x-1">
                    <span>Claude</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* SUB TAB 2: PROMPT LIBRARY */}
      {activeSubTab === 'library' && (
        <div className="space-y-6">
          
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search prompts by category, title, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Showing <strong>{filteredPrompts.length}</strong> prompt templates
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Prompt List */}
            <div className="space-y-3">
              {filteredPrompts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPrompt(p)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    selectedPrompt.id === p.id
                      ? 'bg-indigo-950/60 border-indigo-500 shadow-md'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-white">{p.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.description}</p>
                </div>
              ))}
            </div>

            {/* Right Prompt Viewer */}
            <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-slate-950/90">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400">{selectedPrompt.category}</span>
                  <h2 className="text-xl font-heading font-bold text-white">{selectedPrompt.title}</h2>
                </div>

                <button
                  onClick={() => handleCopyPrompt(selectedPrompt.promptText, selectedPrompt.id)}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 shrink-0"
                >
                  {copiedId === selectedPrompt.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{selectedPrompt.description}</p>

              {/* Tags */}
              <div className="flex items-center space-x-2">
                <Tag className="w-3.5 h-3.5 text-slate-500" />
                <div className="flex flex-wrap gap-2">
                  {selectedPrompt.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prompt Text Box */}
              <div className="relative">
                <pre className="text-xs font-mono text-slate-200 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 whitespace-pre-wrap leading-relaxed max-h-[350px] overflow-y-auto">
                  {selectedPrompt.promptText}
                </pre>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SUB TAB 3: AI SIMULATOR */}
      {activeSubTab === 'simulator' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center space-x-1">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>RTE Crisis Simulator</span>
              </span>
              <h2 className="text-xl font-heading font-bold text-white mt-1">{currentScenario.title}</h2>
            </div>
            
            {/* Scenario Chooser */}
            <div className="flex space-x-2">
              {RTE_AI_SIMULATOR_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioIndex(idx);
                    setSelectedChoiceIndex(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${
                    activeScenarioIndex === idx
                      ? 'bg-indigo-600 text-white border-indigo-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Scenario {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200 leading-relaxed">
            <strong>Situation Context:</strong> {currentScenario.context}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white">How do you, as the RTE, handle this situation?</h3>
            <div className="space-y-3">
              {currentScenario.options.map((opt, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedChoiceIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                    selectedChoiceIndex === idx
                      ? opt.recommended
                        ? 'bg-emerald-950/60 border-emerald-500'
                        : 'bg-rose-950/60 border-rose-500'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <p className="text-xs font-semibold text-white">{opt.choice}</p>

                  {selectedChoiceIndex === idx && (
                    <div className={`p-3 rounded-xl text-xs mt-2 ${
                      opt.recommended ? 'bg-emerald-900/40 text-emerald-200' : 'bg-rose-900/40 text-rose-200'
                    }`}>
                      {opt.feedback}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {selectedChoiceIndex !== null && (
            <div className="p-5 rounded-2xl bg-indigo-950/50 border border-indigo-500/30 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                <span>AI Co-Pilot Strategic Advice:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">{currentScenario.aiCoPilotAdvice}</p>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
