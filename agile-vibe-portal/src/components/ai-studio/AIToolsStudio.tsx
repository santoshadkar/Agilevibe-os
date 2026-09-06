import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GET_ROLE_AI_TOOLS } from '../../data/roleAIToolPrompts';
import { RETRO_THEMES } from '../../data/roleGuides';
import type { AIToolPrompt, RetroThemeId, UserRole } from '../../types';
import { 
  Sparkles, 
  Bot, 
  Send, 
  Copy, 
  Check, 
  FileText, 
  Terminal, 
  Wand2,
  Share2,
  Anchor,
  ShieldCheck,
  Compass,
  Target
} from 'lucide-react';

export const AIToolsStudio: React.FC = () => {
  const { activeRole, addJiraIssue } = useApp();
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>(activeRole);

  const availableTools = GET_ROLE_AI_TOOLS(roleFilter === 'all' ? activeRole : roleFilter);
  const [selectedToolId, setSelectedToolId] = useState<string>(availableTools[0].id);
  const [selectedRetroTheme, setSelectedRetroTheme] = useState<RetroThemeId>('sailboat');
  const [userInput, setUserInput] = useState<string>('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pushedToJira, setPushedToJira] = useState(false);

  const currentTool = availableTools.find(t => t.id === selectedToolId) || availableTools[0];
  const activeRetroTheme = RETRO_THEMES.find(t => t.id === selectedRetroTheme) || RETRO_THEMES[0];

  const handleToolSelect = (tool: AIToolPrompt) => {
    setSelectedToolId(tool.id);
    setUserInput(tool.templateInput);
    setAiOutput(null);
    setPushedToJira(false);
  };

  const handleGenerateAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsGenerating(true);
    setAiOutput(null);
    setPushedToJira(false);

    setTimeout(() => {
      let result = '';

      if (currentTool.id.includes('retro')) {
        result = `🚀 AI RETROSPECTIVE FACILITATOR REPORT (${activeRetroTheme.name.toUpperCase()})
Metaphor: ${activeRetroTheme.metaphor}
----------------------------------------------------------------------
${activeRetroTheme.categories.map(cat => `${cat.name}:
• Items identified under ${cat.description}`).join('\n\n')}

💡 High-Impact Action Item Experiment for Next Sprint:
1. Implement automated QA environment health checks to prevent Day-6 deployment delays.
2. Enforce 15-minute timebox on Daily Standup walking the board right-to-left.`;
      } else if (currentTool.id.includes('story') || currentTool.id.includes('gherkin')) {
        result = `📝 BDD USER STORY & ACCEPTANCE CRITERIA (INVEST COMPLIANT)
----------------------------------------------------------------------
User Story:
As a Recurring Subscription Customer,
I want to save multiple payment methods and specify a primary card,
So that my monthly renewal payments process without service interruption.

INVEST Quality Verification:
[✓] Independent  [✓] Negotiable  [✓] Valuable  [✓] Estimable (3 pts)  [✓] Small  [✓] Testable

Acceptance Criteria (Gherkin BDD Syntax):
Scenario: Successfully setting a primary payment method
  Given the user is on the Checkout Account Settings page
  And has 2 valid credit cards saved in Stripe Vault
  When the user toggles "Set as Primary" on Card ending in 4242
  Then the system updates the primary payment token in Stripe API
  And displays notification "Primary card updated for auto-renewal".`;
      } else if (currentTool.id.includes('wsjf') || currentTool.id.includes('priorit')) {
        result = `⚖️ WSJF & RICE PRIORITIZATION SCORECARD
----------------------------------------------------------------------
Evaluated Backlog Feature: "${userInput}"

WSJF Calculation Matrix (SAFe 6.0):
• User & Business Value: 9 / 10
• Time Criticality: 8 / 10
• Risk Reduction / Opportunity Enablement: 7 / 10
Total Cost of Delay (CoD): 24
Job Size / Effort: 5 Story Points
Calculated WSJF Score = 24 / 5 = 4.80 (Rank #1 in Backlog)

RICE Calculation Matrix:
• Reach: 10,000 Users/mo
• Impact: Massive (3.0)
• Confidence: High (80%)
• Effort: 2 Person-Months
Calculated RICE Score = (10,000 × 3 × 0.8) ÷ 2 = 12,000`;
      } else if (currentTool.id.includes('vision') || currentTool.id.includes('strat')) {
        result = `🎯 PRODUCT VISION & STRATEGY CANVAS
----------------------------------------------------------------------
Product Vision (Aspirational Horizon):
"To empower global financial institutions with zero-friction, real-time cross-border settlement infrastructure that eliminates payment reconciliation latency."

Target Customer Segment: Tier 1 Financial Institutions & B2B SaaS Gateways
Unique Value Proposition: 100x faster transaction clearance with guaranteed 99.999% uptime.

North Star Metric: Monthly Settled Volume ($ Volume) with D30 Retention > 80%.`;
      } else if (currentTool.id.includes('okr') || currentTool.id.includes('roadmap')) {
        result = `🗺️ OUTCOME ROADMAP & OKR ALIGNMENT MATRIX
----------------------------------------------------------------------
Objective: Accelerate SaaS Onboarding Activation & Double Revenue Growth

Now Horizon (Sprint 24 - 26):
• KR1: Reduce user onboarding step-3 friction drop-off from 35% to 15%.
• Feature: 1-Click Identity Auto-Fill & Social Auth.

Next Horizon (Q4 Horizon):
• KR2: Increase Enterprise Add-On MRR by $150K.
• Feature: Multi-Tenant RBAC Audit Log Export.`;
      } else {
        result = `⚡ AI ASSISTANT ARTIFACT (${currentTool.name.toUpperCase()})
----------------------------------------------------------------------
Role Context: ${activeRole.toUpperCase()}
Evaluated Input: "${userInput}"

Key Recommendations:
1. Prioritize high-value items via WSJF score comparison.
2. Align sprint deliverables directly with quarterly OKR outcomes.
3. Validate acceptance criteria during backlog refinement.`;
      }

      setAiOutput(result);
      setIsGenerating(false);
    }, 1200);
  };

  const copyToClipboard = () => {
    if (!aiOutput) return;
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pushToJira = () => {
    if (!aiOutput) return;
    addJiraIssue({
      id: `issue_ai_${Date.now()}`,
      key: `PAYMENT-${Math.floor(Math.random() * 800 + 400)}`,
      summary: `AI Generated Artifact: ${currentTool.name}`,
      issueType: 'Story',
      status: 'To Do',
      priority: 'High',
      storyPoints: 5,
      assignee: {
        name: activeRole === 'scrum-master' ? 'Sarah Jenkins' : activeRole === 'product-owner' ? 'Marcus Vance' : 'Product Lead',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80'
      },
      epic: 'EPIC-20: AI Generated Artifacts',
      created: new Date().toISOString().split('T')[0]
    });
    setPushedToJira(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-violet-500/20 text-violet-400 border border-violet-500/40 shadow-lg shadow-violet-500/20">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">AI Tools Studio & Prompt Workbench</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  {availableTools.length} Tools for {activeRole.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                12 specialized AI co-pilot prompts per role for Scrum Masters, Product Owners, and Product Managers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => { setRoleFilter('scrum-master'); setSelectedToolId(GET_ROLE_AI_TOOLS('scrum-master')[0].id); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'scrum-master'
              ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Scrum Master (12 Tools)</span>
        </button>
        <button
          onClick={() => { setRoleFilter('product-owner'); setSelectedToolId(GET_ROLE_AI_TOOLS('product-owner')[0].id); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-owner'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Product Owner (12 Tools)</span>
        </button>
        <button
          onClick={() => { setRoleFilter('product-manager'); setSelectedToolId(GET_ROLE_AI_TOOLS('product-manager')[0].id); }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            roleFilter === 'product-manager'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Product Manager (12 Tools)</span>
        </button>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tool Selector Sidebar */}
        <div className="lg:col-span-1 glass-card p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-violet-400" />
              Available AI Assistants
            </h3>
            <span className="text-[10px] text-slate-400">{availableTools.length} Prompts</span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {availableTools.map((t) => {
              const isSelected = selectedToolId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleToolSelect(t)}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-500/10'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <Bot className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-violet-400' : 'text-slate-500'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white truncate">{t.name}</h4>
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-slate-800 text-slate-400 uppercase">
                        {t.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{t.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prompt Input & AI Output Console */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
          <form onSubmit={handleGenerateAI} className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-200 flex items-center gap-2">
                <FileText className="w-4 h-4 text-violet-400" />
                Prompt Template Input ({currentTool.name})
              </label>
              <button
                type="button"
                onClick={() => setUserInput(currentTool.templateInput)}
                className="text-[11px] text-violet-400 hover:text-violet-300"
              >
                Reset Example Input
              </button>
            </div>

            {/* Retrospective Theme Selector if AI Retro Facilitator is active */}
            {currentTool.id.includes('retro') && (
              <div className="p-4 bg-slate-900/90 rounded-xl border border-violet-500/30 space-y-2">
                <label className="text-xs font-bold text-violet-300 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-violet-400" />
                  Select Retrospective Facilitation Theme:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {RETRO_THEMES.map((theme) => (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => setSelectedRetroTheme(theme.id)}
                      className={`p-2 rounded-xl border text-center text-xs transition-all ${
                        selectedRetroTheme === theme.id
                          ? 'bg-violet-600/30 border-violet-500 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      <span className="block truncate">{theme.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <textarea
              rows={4}
              value={userInput || currentTool.templateInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full p-4 bg-slate-950 text-xs text-slate-200 rounded-xl border border-slate-800 focus:border-violet-500 focus:outline-none font-mono leading-relaxed"
              placeholder="Enter sprint context, user story details, or strategic goals..."
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isGenerating}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-500/25 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-amber-300" />
                    <span>AI Reasoning in Progress...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Generate Artifact with AI</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* AI Output Terminal */}
          {aiOutput && (
            <div className="space-y-3 pt-4 border-t border-slate-800/80 animate-fadeIn">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-violet-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  AI Generated Output Artifact
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={pushToJira}
                    disabled={pushedToJira}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                      pushedToJira
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{pushedToJira ? 'Pushed to Jira Stream' : 'Push to Jira Backlog'}</span>
                  </button>
                </div>
              </div>

              <pre className="p-5 bg-slate-950 font-mono text-xs text-slate-200 rounded-xl border border-violet-500/30 whitespace-pre-wrap leading-relaxed">
                {aiOutput}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
