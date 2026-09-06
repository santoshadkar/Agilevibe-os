import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KNOWLEDGE_TOPICS } from '../../data/mockData';
import { ROLE_DEEP_GUIDES } from '../../data/roleGuides';
import { KNOWLEDGE_HUB_RESOURCES } from '../../data/knowledgeHubData';
import type { KnowledgeLevel } from '../../types';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { 
  Target, 
  Sparkles, 
  TrendingUp, 
  BookOpen, 
  DollarSign, 
  Users, 
  BarChart2, 
  Zap,
  Rocket,
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

export const PMDashboard: React.FC = () => {
  const { setActiveTab } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<KnowledgeLevel>('Basics');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('pm_basics_1');
  const [activeSectionTab, setActiveSectionTab] = useState<'overview' | 'events' | 'ai-scaled' | 'library' | 'knowledge'>('overview');

  const guide = ROLE_DEEP_GUIDES['product-manager'];
  const pmTopics = KNOWLEDGE_TOPICS.filter(t => t.role === 'product-manager');
  const filteredTopics = pmTopics.filter(t => t.level === selectedLevel);
  const pmResources = KNOWLEDGE_HUB_RESOURCES.filter(r => r.role === 'product-manager' || r.role === 'all');

  const okrProgressData = [
    { metric: 'KR1: Retention Rate', target: 85, current: 82 },
    { metric: 'KR2: Onboarding TTV', target: 90, current: 88 },
    { metric: 'KR3: MRR Growth', target: 100, current: 94 },
    { metric: 'KR4: CSAT Index', target: 95, current: 92 }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner & Mission */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-slate-900 to-purple-950/50 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 shadow-xl shadow-indigo-500/20">
              <Target className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{guide.title}</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
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
              <Activity className="w-4 h-4 text-indigo-400" />
              <span>40-Q Assessment</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-studio')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI PM Studio</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex gap-2 pt-2 overflow-x-auto border-t border-slate-800/80">
          <button
            onClick={() => setActiveSectionTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'overview'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Role Importance & Overview
          </button>
          <button
            onClick={() => setActiveSectionTab('library')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'library'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Knowledge Hub & Literature Library
          </button>
          <button
            onClick={() => setActiveSectionTab('events')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'events'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Strategic Event Expectations (PM)
          </button>
          <button
            onClick={() => setActiveSectionTab('ai-scaled')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'ai-scaled'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            AI in Scaled Frameworks (SAFe/LeSS)
          </button>
          <button
            onClick={() => setActiveSectionTab('knowledge')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeSectionTab === 'knowledge'
                ? 'bg-indigo-600 text-white font-bold shadow-md'
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
              <Globe className="w-5 h-5 text-indigo-400" />
              Why the Product Manager Role is Vital in Today's World
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.whyVitalToday.map((item, idx) => {
                const [title, desc] = item.split(': ');
                return (
                  <div key={idx} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80 space-y-1.5">
                    <span className="text-xs font-bold text-indigo-300 block">{title}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Performance Stats & OKR Progress */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Monthly Recurring Revenue</span>
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white">$420K MRR</div>
                <div className="text-[10px] text-emerald-400">+22% YoY Growth</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>User Retention Rate</span>
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="text-xl font-bold text-white">82% D30</div>
                <div className="text-[10px] text-indigo-400">Top quartile SaaS</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>LTV / CAC Ratio</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white">4.2 x</div>
                <div className="text-[10px] text-amber-400">Healthy PLG unit economics</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Net Promoter Score</span>
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-xl font-bold text-white">+64 NPS</div>
                <div className="text-[10px] text-purple-400">CSAT 4.9/5.0</div>
              </div>
            </div>

            {/* OKRs Bar Chart */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-indigo-400" />
                    Quarterly OKR Key Results Progress
                  </h3>
                  <p className="text-[11px] text-slate-400">Current actual status vs quarterly target outcomes</p>
                </div>
                <span className="text-xs text-indigo-400 font-bold">Q3 Execution</span>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={okrProgressData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis type="number" domain={[0, 100]} stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis type="category" dataKey="metric" stroke="#64748b" tick={{ fill: '#cbd5e1', fontSize: 10 }} width={130} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                    <Bar dataKey="target" fill="#312e81" radius={[0, 4, 4, 0]} name="Target Key Result" />
                    <Bar dataKey="current" fill="#6366f1" radius={[0, 4, 4, 0]} name="Current Actual" />
                  </BarChart>
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
              <BookMarked className="w-5 h-5 text-indigo-400" />
              Product Manager Knowledge Hub & Recommended Literature Library
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Curated books on Product Management (INSPIRED), HBR classics, OKR handbooks, and Product-Led Growth (PLG) guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pmResources.map((res) => (
              <div key={res.id} className="p-5 bg-slate-900/90 rounded-2xl border border-indigo-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[10px] rounded font-bold uppercase bg-indigo-500/20 text-indigo-300">
                      {res.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-slate-400">{res.readingTime}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">{res.title}</h4>
                  <p className="text-xs font-semibold text-indigo-400">By {res.author}</p>
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
                  className="w-full mt-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Access Original Literature</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: STRATEGIC EVENT EXPECTATIONS MATRIX */}
      {activeSectionTab === 'events' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Strategic Event Expectations for Product Managers
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Detailed breakdown of role accountability, preparation checklist, and anti-patterns to avoid across strategic planning events.
            </p>
          </div>

          <div className="space-y-4">
            {guide.eventExpectations.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    {item.event}
                  </h4>
                  <span className="px-2.5 py-0.5 text-[10px] rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">
                    PM Accountability
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="font-bold text-white block">Role Accountability:</span>
                    <p className="text-slate-300 leading-relaxed">{item.roleAccountability}</p>
                  </div>

                  <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1">
                    <span className="font-bold text-indigo-300 block">Key Preparation Checklist:</span>
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
              <Bot className="w-5 h-5 text-indigo-400" />
              {guide.aiInScaledFrameworks.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Leveraging AI vision canvasing, outcome roadmap matrix alignment, and competitor intelligence in SAFe 6.0, LeSS, and Nexus scaled operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guide.aiInScaledFrameworks.useCases.map((uc, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-indigo-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 w-fit">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{uc.desc}</p>
                </div>

                <div className="p-3 bg-indigo-950/30 rounded-xl border border-indigo-500/40 text-[11px] text-indigo-200">
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
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Product Manager Single Source of Truth</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Comprehensive guide covering Basics, Intermediate, and Advanced Product Leadership
              </p>
            </div>

            <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
              {(['Basics', 'Intermediate', 'Advanced'] as KnowledgeLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedLevel === level
                      ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20'
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
                      ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl shadow-indigo-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded font-bold uppercase bg-indigo-500/20 text-indigo-300">
                            {topic.level}
                          </span>
                          <h4 className="text-sm font-bold text-white">{topic.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{topic.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-indigo-400' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-4 border-t border-slate-800/80 pt-4 text-xs text-slate-300 animate-fadeIn">
                      <p className="leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-200">
                        {topic.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                          <span className="font-bold text-indigo-400 uppercase tracking-wider text-[11px] block">
                            Key Strategic Takeaways:
                          </span>
                          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                            {topic.keyTakeaways.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-2">
                          <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">
                            PM Best Practices:
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
