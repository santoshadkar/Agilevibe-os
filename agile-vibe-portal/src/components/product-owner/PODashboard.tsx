import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KNOWLEDGE_TOPICS } from '../../data/mockData';
import { ROLE_DEEP_GUIDES } from '../../data/roleGuides';
import { KNOWLEDGE_HUB_RESOURCES } from '../../data/knowledgeHubData';
import type { KnowledgeLevel } from '../../types';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { 
  Compass, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  DollarSign, 
  Target, 
  CheckCircle, 
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Globe,
  Bot,
  Calendar,
  AlertOctagon,
  CheckCircle2,
  ExternalLink,
  BookMarked,
  Activity
} from 'lucide-react';
import { MOCK_CFD_DATA } from '../../data/mockData';

export const PODashboard: React.FC = () => {
  const { setActiveTab } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<KnowledgeLevel>('Basics');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('po_basics_1');
  const [activeSectionTab, setActiveSectionTab] = useState<'overview' | 'events' | 'ai-scaled' | 'library' | 'knowledge'>('overview');

  const guide = ROLE_DEEP_GUIDES['product-owner'];
  const poTopics = KNOWLEDGE_TOPICS.filter(t => t.role === 'product-owner');
  const filteredTopics = poTopics.filter(t => t.level === selectedLevel);
  const poResources = KNOWLEDGE_HUB_RESOURCES.filter(r => r.role === 'product-owner' || r.role === 'all');

  return (
    <div className="space-y-6">
      {/* Top Banner & Mission */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 via-slate-900 to-pink-950/50 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-xl shadow-purple-500/20">
              <Compass className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{guide.title}</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Single Source of Truth
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {guide.mission}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('assessments')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <Activity className="w-4 h-4 text-purple-400" />
              <span>40-Q Assessment</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-studio')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white text-xs font-bold shadow-lg shadow-purple-500/25 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI PO Studio</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex gap-2 pt-2 overflow-x-auto border-t border-slate-800/80">
          <button
            onClick={() => setActiveSectionTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'overview'
                ? 'bg-purple-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Role Importance & Overview
          </button>
          <button
            onClick={() => setActiveSectionTab('library')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'library'
                ? 'bg-purple-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Knowledge Hub & Literature Library
          </button>
          <button
            onClick={() => setActiveSectionTab('events')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'events'
                ? 'bg-purple-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Scrum Event Expectations (PO)
          </button>
          <button
            onClick={() => setActiveSectionTab('ai-scaled')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'ai-scaled'
                ? 'bg-purple-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            AI in Scaled Frameworks (SAFe/LeSS)
          </button>
          <button
            onClick={() => setActiveSectionTab('knowledge')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'knowledge'
                ? 'bg-purple-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Knowledge Base (Basics to Advanced)
          </button>
        </div>
      </div>

      {/* SECTION 1: ROLE IMPORTANCE & OVERVIEW */}
      {activeSectionTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Why Vital Today Cards */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              Why the Product Owner Role is Vital in Today's World
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.whyVitalToday.map((item, idx) => {
                const [title, desc] = item.split(': ');
                return (
                  <div key={idx} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80 space-y-1.5">
                    <span className="text-xs font-bold text-purple-300 block">{title}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Stats & CFD */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Backlog Readiness</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white">94% Ready</div>
                <div className="text-[10px] text-emerald-400">2 Sprints pre-refined</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Value Points Delivered</span>
                  <Target className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-xl font-bold text-white">240 / 280</div>
                <div className="text-[10px] text-purple-400">85% target reached</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Projected Feature ROI</span>
                  <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white">$1.4M ARR</div>
                <div className="text-[10px] text-amber-400">+18% YoY Growth</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>CSAT Score</span>
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white">4.8 / 5.0</div>
                <div className="text-[10px] text-cyan-400">User feedback index</div>
              </div>
            </div>

            {/* CFD Chart */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" />
                    Cumulative Flow Diagram (CFD) & Feature Bottlenecks
                  </h3>
                  <p className="text-[11px] text-slate-400">Track feature flow across To Do, In Progress, In Review, and Done</p>
                </div>
                <button
                  onClick={() => setActiveTab('jira')}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold"
                >
                  <span>View Full CFD</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_CFD_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="date" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                    <Area type="monotone" dataKey="done" stackId="1" stroke="#10b981" fill="#10b981" name="Done" />
                    <Area type="monotone" dataKey="inReview" stackId="1" stroke="#38bdf8" fill="#38bdf8" name="In Review" />
                    <Area type="monotone" dataKey="inProgress" stackId="1" stroke="#a855f7" fill="#a855f7" name="In Progress" />
                    <Area type="monotone" dataKey="todo" stackId="1" stroke="#475569" fill="#475569" name="To Do" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: KNOWLEDGE HUB & LITERATURE LIBRARY */}
      {activeSectionTab === 'library' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-purple-400" />
              Product Owner Knowledge Hub & Recommended Literature Library
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Curated books on User Story Mapping, BDD Gherkin specifications, WSJF SAFe whitepapers, and PO anti-pattern guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {poResources.map((res) => (
              <div key={res.id} className="p-5 bg-slate-900/90 rounded-2xl border border-purple-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[10px] rounded font-bold uppercase bg-purple-500/20 text-purple-300">
                      {res.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-slate-400">{res.readingTime}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">{res.title}</h4>
                  <p className="text-xs font-semibold text-purple-400">By {res.author}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{res.summary}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {res.keyTopics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] rounded bg-slate-950 text-slate-400 border border-slate-800">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Access Original Literature</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: SCRUM EVENT EXPECTATIONS MATRIX */}
      {activeSectionTab === 'events' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              Scrum Event Wise Expectations for Product Owners
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Detailed breakdown of role accountability, preparation checklist, and anti-patterns to avoid for every Scrum event.
            </p>
          </div>

          <div className="space-y-4">
            {guide.eventExpectations.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    {item.event}
                  </h4>
                  <span className="px-2.5 py-0.5 text-[10px] rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                    PO Accountability
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="font-bold text-white block">Role Accountability:</span>
                    <p className="text-slate-300 leading-relaxed">{item.roleAccountability}</p>
                  </div>

                  <div className="p-3 bg-purple-950/20 rounded-xl border border-purple-500/30 space-y-1">
                    <span className="font-bold text-purple-300 block">Key Preparation Checklist:</span>
                    <p className="text-slate-300 leading-relaxed">{item.keyPreparation}</p>
                  </div>

                  <div className="p-3 bg-rose-950/20 rounded-xl border border-rose-500/30 space-y-1">
                    <span className="font-bold text-rose-300 flex items-center gap-1">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      Anti-Patterns to Avoid:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{item.antipatternsToAvoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: AI IN SCALED FRAMEWORKS */}
      {activeSectionTab === 'ai-scaled' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-400" />
              {guide.aiInScaledFrameworks.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Leveraging AI story generators, Gherkin BDD assistants, and automated WSJF score calculators in SAFe 6.0, LeSS, and Nexus scaled operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guide.aiInScaledFrameworks.useCases.map((uc, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-purple-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 w-fit">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{uc.desc}</p>
                </div>

                <div className="p-3 bg-purple-950/30 rounded-xl border border-purple-500/40 text-[11px] text-purple-200">
                  <strong>Scaled Framework Benefit: </strong> {uc.scaledBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 4: KNOWLEDGE BASE (BASICS TO ADVANCED) */}
      {activeSectionTab === 'knowledge' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Product Owner Single Source of Truth</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Comprehensive guide covering Basics, Intermediate, and Advanced Backlog & Product Ownership
              </p>
            </div>

            <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
              {(['Basics', 'Intermediate', 'Advanced'] as KnowledgeLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedLevel === level
                      ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredTopics.map((topic) => {
              const isExpanded = expandedTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border transition-all ${
                    isExpanded
                      ? 'bg-slate-900/90 border-purple-500/50 shadow-xl shadow-purple-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                        <Compass className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded font-bold uppercase bg-purple-500/20 text-purple-300">
                            {topic.level}
                          </span>
                          <h4 className="text-sm font-bold text-white">{topic.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{topic.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-purple-400' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-4 border-t border-slate-800/80 pt-4 text-xs text-slate-300 animate-fadeIn">
                      <p className="leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-200">
                        {topic.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                          <span className="font-bold text-purple-400 uppercase tracking-wider text-[11px] block">
                            Key Product Ownership Takeaways:
                          </span>
                          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                            {topic.keyTakeaways.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-purple-950/20 rounded-xl border border-purple-500/30 space-y-2">
                          <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">
                            PO Best Practices:
                          </span>
                          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                            {topic.bestPractices.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
