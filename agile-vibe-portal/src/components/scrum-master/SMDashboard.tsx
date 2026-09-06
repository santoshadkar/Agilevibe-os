import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KNOWLEDGE_TOPICS } from '../../data/mockData';
import { ROLE_DEEP_GUIDES } from '../../data/roleGuides';
import { KNOWLEDGE_HUB_RESOURCES } from '../../data/knowledgeHubData';
import type { KnowledgeLevel } from '../../types';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  AlertTriangle, 
  Users, 
  Zap, 
  ArrowUpRight,
  TrendingUp,
  BookOpen,
  ChevronDown,
  Globe,
  Bot,
  Calendar,
  AlertOctagon,
  CheckCircle2,
  ExternalLink,
  BookMarked,
  UserCheck,
  Wrench
} from 'lucide-react';
import { MOCK_BURNDOWN_DATA } from '../../data/mockData';

export const SMDashboard: React.FC = () => {
  const { setActiveTab } = useApp();
  const [selectedLevel, setSelectedLevel] = useState<KnowledgeLevel>('Basics');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>('sm_basics_1');
  const [activeSectionTab, setActiveSectionTab] = useState<'overview' | 'events' | 'stances' | 'workshops' | 'ai-scaled' | 'library' | 'knowledge'>('overview');

  const guide = ROLE_DEEP_GUIDES['scrum-master'];
  const smTopics = KNOWLEDGE_TOPICS.filter(t => t.role === 'scrum-master');
  const filteredTopics = smTopics.filter(t => t.level === selectedLevel);
  const smResources = KNOWLEDGE_HUB_RESOURCES.filter(r => r.role === 'scrum-master' || r.role === 'all');

  return (
    <div className="space-y-6">
      {/* Top Banner & Mission */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/50 via-slate-900 to-blue-950/50 space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-xl shadow-cyan-500/20">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-white tracking-tight">{guide.title}</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
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
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>40-Q Assessment</span>
            </button>
            <button
              onClick={() => setActiveTab('ai-studio')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI SM Studio</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex gap-2 pt-2 overflow-x-auto border-t border-slate-800/80">
          <button
            onClick={() => setActiveSectionTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'overview'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Role Importance & Overview
          </button>
          <button
            onClick={() => setActiveSectionTab('stances')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'stances'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            SM vs Coach Stances & 8 Hats
          </button>
          <button
            onClick={() => setActiveSectionTab('workshops')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'workshops'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Facilitation Workshops & Liberating Structures
          </button>
          <button
            onClick={() => setActiveSectionTab('library')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'library'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Literature Library & Research
          </button>
          <button
            onClick={() => setActiveSectionTab('events')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'events'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Scrum Event Expectations (SM)
          </button>
          <button
            onClick={() => setActiveSectionTab('ai-scaled')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'ai-scaled'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            AI in Scaled Frameworks
          </button>
          <button
            onClick={() => setActiveSectionTab('knowledge')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
              activeSectionTab === 'knowledge'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
            }`}
          >
            Knowledge Base (Basics, Inter, Adv)
          </button>
        </div>
      </div>

      {/* SECTION: OVERVIEW */}
      {activeSectionTab === 'overview' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              Why the Scrum Master Role is Vital in Today's World
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guide.whyVitalToday.map((item, idx) => {
                const [title, desc] = item.split(': ');
                return (
                  <div key={idx} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800/80 space-y-1.5">
                    <span className="text-xs font-bold text-cyan-300 block">{title}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Velocity Predictability</span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-white">92.4%</div>
                <div className="text-[10px] text-emerald-400">+3.1% vs last sprint</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Avg Cycle Time</span>
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xl font-bold text-white">3.2 Days</div>
                <div className="text-[10px] text-cyan-400">Top 10% benchmark</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Impediments Cleared</span>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-bold text-white">14 / 15</div>
                <div className="text-[10px] text-amber-400">1 active blocker</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                  <span>Team Safety Index</span>
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-xl font-bold text-white">8.9 / 10</div>
                <div className="text-[10px] text-purple-400">Spotify Squad Model</div>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    Sprint 24 Burndown Chart (Story Points)
                  </h3>
                  <p className="text-[11px] text-slate-400">Ideal burndown vs Actual story point resolution</p>
                </div>
                <button
                  onClick={() => setActiveTab('jira')}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  <span>View in Jira Hub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={MOCK_BURNDOWN_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="day" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff' }} />
                    <Line type="monotone" dataKey="idealRemaining" stroke="#64748b" strokeDasharray="5 5" name="Ideal Burndown" strokeWidth={2} />
                    <Line type="monotone" dataKey="actualRemaining" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: '#06b6d4' }} name="Actual Remaining" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: COACHING STANCES & 8 HATS */}
      {activeSectionTab === 'stances' && guide.coachingStancesGuide && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-cyan-400" />
              {guide.coachingStancesGuide.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Clear guidelines on when to operate as a squad Scrum Master vs when to transition into an Enterprise Agile Coach, and when to wear Lyssa Adkins 8 hats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-cyan-950/20 rounded-2xl border border-cyan-500/30 space-y-3">
              <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                🛡️ When to be a Squad Scrum Master (SM):
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                {guide.coachingStancesGuide.whenToBeSM.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-indigo-950/20 rounded-2xl border border-indigo-500/30 space-y-3">
              <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                🚀 When to Become an Enterprise Agile Coach:
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                {guide.coachingStancesGuide.whenToBecomeCoach.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8 Hats Matrix Table */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-sm font-bold text-white">The 8 Hats & Coaching Stances Matrix</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guide.coachingStancesGuide.eightHats.map((hatItem, idx) => (
                <div key={idx} className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 text-xs">
                  <span className="font-bold text-amber-400 block text-sm">{hatItem.hat}</span>
                  <p className="text-cyan-300 text-[11px]"><strong>When to wear: </strong>{hatItem.whenToWear}</p>
                  <p className="text-slate-300 leading-relaxed">{hatItem.keyBehavior}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION: FACILITATION WORKSHOPS & LIBERATING STRUCTURES */}
      {activeSectionTab === 'workshops' && guide.facilitationWorkshops && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-cyan-400" />
              {guide.facilitationWorkshops.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Step-by-step team-level workshop blueprints and Liberating Structures for retrospectives, refinement, and team agreements.
            </p>
          </div>

          <div className="space-y-4">
            {guide.facilitationWorkshops.techniques.map((tech, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-cyan-300">{tech.name}</h4>
                  <span className="px-2 py-0.5 text-[10px] rounded bg-cyan-500/20 text-cyan-200 font-semibold uppercase">
                    Team Workshop Blueprint
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="font-bold text-white block">Workshop Format:</span>
                    <p className="text-slate-300 leading-relaxed">{tech.format}</p>
                  </div>

                  <div className="p-3 bg-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-1">
                    <span className="font-bold text-cyan-300 block">Team-Level Benefit:</span>
                    <p className="text-slate-300 leading-relaxed">{tech.teamBenefit}</p>
                  </div>

                  <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/30 space-y-1">
                    <span className="font-bold text-indigo-300 block">Step-by-Step Execution:</span>
                    <p className="text-slate-300 leading-relaxed">{tech.stepByStep}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: LITERATURE LIBRARY */}
      {activeSectionTab === 'library' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-cyan-400" />
              Scrum Master Knowledge Hub & Recommended Literature Library
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Curated official guides, coaching books, flow metrics research papers, and case studies with direct links.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smResources.map((res) => (
              <div key={res.id} className="p-5 bg-slate-900/90 rounded-2xl border border-cyan-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 text-[10px] rounded font-bold uppercase bg-cyan-500/20 text-cyan-300">
                      {res.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-slate-400">{res.readingTime}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">{res.title}</h4>
                  <p className="text-xs font-semibold text-cyan-400">By {res.author}</p>
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
                  className="w-full mt-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <span>Access Original Literature</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: SCRUM EVENT EXPECTATIONS */}
      {activeSectionTab === 'events' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              Scrum Event Wise Expectations for Scrum Masters
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Detailed breakdown of role accountability, preparation checklist, and anti-patterns to avoid for every Scrum event.
            </p>
          </div>

          <div className="space-y-4">
            {guide.eventExpectations.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {item.event}
                  </h4>
                  <span className="px-2.5 py-0.5 text-[10px] rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
                    SM Accountability
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="font-bold text-white block">Role Accountability:</span>
                    <p className="text-slate-300 leading-relaxed">{item.roleAccountability}</p>
                  </div>

                  <div className="p-3 bg-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-1">
                    <span className="font-bold text-cyan-300 block">Key Preparation Checklist:</span>
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

      {/* SECTION: AI IN SCALED FRAMEWORKS */}
      {activeSectionTab === 'ai-scaled' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              {guide.aiInScaledFrameworks.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Leveraging AI co-pilots, predictive risk models, and sentiment analytics in SAFe 6.0, LeSS, and Nexus scaled operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guide.aiInScaledFrameworks.useCases.map((uc, idx) => (
              <div key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-cyan-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 w-fit">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{uc.desc}</p>
                </div>

                <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/40 text-[11px] text-cyan-200">
                  <strong>Scaled Framework Benefit: </strong> {uc.scaledBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION: KNOWLEDGE BASE (BASICS / INTERMEDIATE / ADVANCED) */}
      {activeSectionTab === 'knowledge' && (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Scrum Master Knowledge Base</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Comprehensive guide covering Basics, Intermediate, and Advanced Scrum Master Facilitation
              </p>
            </div>

            <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
              {(['Basics', 'Intermediate', 'Advanced'] as KnowledgeLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedLevel === level
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {level} ({smTopics.filter(t => t.level === level).length} Topics)
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
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 text-[10px] rounded font-bold uppercase bg-cyan-500/20 text-cyan-300">
                            {topic.level}
                          </span>
                          <h4 className="text-sm font-bold text-white">{topic.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{topic.subtitle}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 space-y-4 border-t border-slate-800/80 pt-4 text-xs text-slate-300 animate-fadeIn">
                      <p className="leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-slate-200">
                        {topic.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                          <span className="font-bold text-cyan-400 uppercase tracking-wider text-[11px] block">
                            Key Agile Takeaways:
                          </span>
                          <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                            {topic.keyTakeaways.map((item: string, idx: number) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-cyan-950/20 rounded-xl border border-cyan-500/30 space-y-2">
                          <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block">
                            Scrum Master Best Practices:
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
