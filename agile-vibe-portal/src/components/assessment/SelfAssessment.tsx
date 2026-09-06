import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { FrameworkDomain, AssessmentResult } from '../../types';
import { DOMAIN_METADATA } from '../../data/assessmentBank';
import { GET_ROLE_ASSESSMENT_QUESTIONS } from '../../data/roleAssessmentBanks';
import { KNOWLEDGE_HUB_RESOURCES } from '../../data/knowledgeHubData';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  BookOpen, 
  BrainCircuit,
  ExternalLink,
  Target,
  Rocket,
  Compass,
  Zap,
  TrendingUp
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';

export const SelfAssessment: React.FC = () => {
  const { submitAssessmentResult, activeRole } = useApp();
  
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<FrameworkDomain | 'all'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [latestResult, setLatestResult] = useState<AssessmentResult | null>(null);

  // Load 40 distinct questions for activeRole
  const roleQuestions = GET_ROLE_ASSESSMENT_QUESTIONS(activeRole);

  const filteredQuestions = selectedDomainFilter === 'all'
    ? roleQuestions
    : roleQuestions.filter(q => q.domain === selectedDomainFilter);

  // Ensure currentQ never accesses out-of-bounds index
  const safeIndex = Math.min(currentQuestionIndex, Math.max(0, filteredQuestions.length - 1));
  const currentQ = filteredQuestions[safeIndex] || roleQuestions[0];

  const handleDomainFilterChange = (domain: FrameworkDomain | 'all') => {
    setSelectedDomainFilter(domain);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowExplanation({});
    setIsTestCompleted(false);
    setLatestResult(null);
  };

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (userAnswers[questionId] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setShowExplanation(prev => ({ ...prev, [questionId]: true }));
  };

  const handleNextQuestion = () => {
    if (safeIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateAndFinishAssessment();
    }
  };

  const calculateAndFinishAssessment = () => {
    const domainScores: Record<FrameworkDomain, number> = {
      'scrum-framework': 0,
      'agile-principles': 0,
      'kanban-flow': 0,
      'scrumban-hybrid': 0,
      'scaling-agile': 0,
      'product-ownership': 0,
      'product-strategy': 0,
      'ai-augmented-agile': 0
    };

    const domainTotals: Record<FrameworkDomain, number> = {
      'scrum-framework': 0,
      'agile-principles': 0,
      'kanban-flow': 0,
      'scrumban-hybrid': 0,
      'scaling-agile': 0,
      'product-ownership': 0,
      'product-strategy': 0,
      'ai-augmented-agile': 0
    };

    filteredQuestions.forEach(q => {
      domainTotals[q.domain] += 1;
      if (userAnswers[q.id] === q.correctIndex) {
        domainScores[q.domain] += 1;
      }
    });

    const finalDomainScores: Record<FrameworkDomain, number> = {
      'scrum-framework': domainTotals['scrum-framework'] ? Math.round((domainScores['scrum-framework'] / domainTotals['scrum-framework']) * 100) : 85,
      'agile-principles': domainTotals['agile-principles'] ? Math.round((domainScores['agile-principles'] / domainTotals['agile-principles']) * 100) : 90,
      'kanban-flow': domainTotals['kanban-flow'] ? Math.round((domainScores['kanban-flow'] / domainTotals['kanban-flow']) * 100) : 80,
      'scrumban-hybrid': domainTotals['scrumban-hybrid'] ? Math.round((domainScores['scrumban-hybrid'] / domainTotals['scrumban-hybrid']) * 100) : 85,
      'scaling-agile': domainTotals['scaling-agile'] ? Math.round((domainScores['scaling-agile'] / domainTotals['scaling-agile']) * 100) : 75,
      'product-ownership': domainTotals['product-ownership'] ? Math.round((domainScores['product-ownership'] / domainTotals['product-ownership']) * 100) : 88,
      'product-strategy': domainTotals['product-strategy'] ? Math.round((domainScores['product-strategy'] / domainTotals['product-strategy']) * 100) : 92,
      'ai-augmented-agile': domainTotals['ai-augmented-agile'] ? Math.round((domainScores['ai-augmented-agile'] / domainTotals['ai-augmented-agile']) * 100) : 95
    };

    const overallPct = Math.round(
      Object.values(finalDomainScores).reduce((a, b) => a + b, 0) / 8
    );

    const passedDomains = Object.entries(finalDomainScores)
      .filter(([_, score]) => score >= 75)
      .map(([dom, _]) => dom);

    const growthAreas = Object.entries(finalDomainScores)
      .filter(([_, score]) => score < 75)
      .map(([dom, _]) => dom);

    const recommendations: string[] = [];
    if (activeRole === 'scrum-master') {
      recommendations.push('Re-visit official Scrum Guide 2020 to protect Developer self-management boundaries.');
      recommendations.push('Establish WIP limits and track Cumulative Flow Diagrams (CFD) in Jira Hub.');
    } else if (activeRole === 'product-owner') {
      recommendations.push('Adopt BDD Gherkin syntax (Given/When/Then) and INVEST criteria during refinement.');
      recommendations.push('Use WSJF (Cost of Delay ÷ Job Size) transparently to resolve VP prioritization battles.');
    } else {
      recommendations.push('Shift roadmap focus from output feature dates to outcome-based "Now / Next / Later" horizons.');
      recommendations.push('Optimize PLG user onboarding funnels before scaling new enterprise modules.');
    }

    const roadmap = {
      day30: [
        `Complete deep-dive reading on ${activeRole.replace('-', ' ')} Literature in Knowledge Hub.`,
        'Eliminate anti-patterns during sprint events by protecting timeboxes.',
        'Practice 5 AI Scenario Arena exercises on mid-sprint trade-offs.'
      ],
      day60: [
        'Establish visual WIP limits and track Cycle Time 85th percentile SLAs.',
        'Facilitate multi-theme Retrospectives (Sailboat, Racecar) or WSJF matrix sessions.',
        'Maintain 2 sprints of "Ready" backlog items with INVEST quality verification.'
      ],
      day90: [
        'Drive SAFe PI Planning dependency mapping and ROAM risk categorization.',
        'Integrate AI prompt workflows into weekly refinement and OKR outcome reviews.',
        'Publish squad flow metric SLAs and unit economics CAC:LTV performance.'
      ]
    };

    const result: AssessmentResult = {
      date: new Date().toLocaleDateString(),
      role: activeRole,
      domainScores: finalDomainScores,
      overallScore: overallPct,
      passedDomains,
      growthAreas,
      recommendations,
      roadmap
    };

    submitAssessmentResult(result);
    setLatestResult(result);
    setIsTestCompleted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const restartAssessment = () => {
    setUserAnswers({});
    setShowExplanation({});
    setCurrentQuestionIndex(0);
    setIsTestCompleted(false);
    setLatestResult(null);
  };

  const allDomainsKeys: FrameworkDomain[] = [
    'scrum-framework',
    'agile-principles',
    'kanban-flow',
    'scrumban-hybrid',
    'scaling-agile',
    'product-ownership',
    'product-strategy',
    'ai-augmented-agile'
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">40-Question Assessment Suite ({activeRole.toUpperCase().replace('-', ' ')})</h2>
                <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Role-Specific Question Bank
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                40 distinct scenario-based questions tailored specifically for {activeRole.replace('-', ' ')}s across 8 dimensions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-slate-900 text-amber-400 border border-amber-500/30 font-semibold">
              40 Questions Total • {activeRole.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* 8 Domain Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => handleDomainFilterChange('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
            selectedDomainFilter === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          All 8 Dimensions ({roleQuestions.length} Qs)
        </button>
        {allDomainsKeys.map(dom => {
          const domCount = roleQuestions.filter(q => q.domain === dom).length;
          return (
            <button
              key={dom}
              onClick={() => handleDomainFilterChange(dom)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                selectedDomainFilter === dom
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {DOMAIN_METADATA[dom].name} ({domCount} Qs)
            </button>
          );
        })}
      </div>

      {/* Main Assessment Engine */}
      {!isTestCompleted ? (
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
          {/* Header Progress */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`font-bold ${DOMAIN_METADATA[currentQ.domain]?.color || 'text-amber-400'}`}>
                [{DOMAIN_METADATA[currentQ.domain]?.name || currentQ.domain}]
              </span>
              <span className="text-slate-400">
                Question {safeIndex + 1} of {filteredQuestions.length}
              </span>
            </div>
            <div className="w-40 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-cyan-500 to-purple-500 transition-all duration-300"
                style={{ width: `${((safeIndex + 1) / filteredQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Scenario Context Box */}
          <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5" />
              Real-World Scenario Challenge ({activeRole.toUpperCase()})
            </div>
            <p className="text-xs text-slate-300 italic leading-relaxed">{currentQ.scenario}</p>
          </div>

          {/* Question Text */}
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
            {currentQ.question}
          </h3>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((optionText, idx) => {
              const isSelected = userAnswers[currentQ.id] === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const hasAnswered = userAnswers[currentQ.id] !== undefined;

              let btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700';

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500/60 text-emerald-200 shadow-md shadow-emerald-500/10 font-semibold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-500/20 border-rose-500/60 text-rose-200';
                } else {
                  btnStyle = 'bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={hasAnswered}
                  onClick={() => handleOptionSelect(currentQ.id, idx)}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl border text-left text-xs transition-all ${btnStyle}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                    hasAnswered && isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{optionText}</span>
                  {hasAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {hasAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation[currentQ.id] && (
            <div className="p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/40 text-xs space-y-1.5 animate-fadeIn">
              <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                Agile & Product Best Practice Explanation
              </div>
              <p className="text-slate-300 leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {userAnswers[currentQ.id] !== undefined && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>{safeIndex < filteredQuestions.length - 1 ? 'Next Scenario' : 'Reveal My Role Scorecard & Roadmap'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* SCORE REVELATION & 30-60-90 DAY ROADMAP */
        <div className="space-y-6 animate-fadeIn">
          {/* Main Score Banner */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/50 bg-gradient-to-r from-amber-950/50 via-slate-900 to-indigo-950/50 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase">
                <Award className="w-4 h-4" />
                {activeRole.toUpperCase()} SCORECARD REVEALED
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Practitioner Mastery Score: <span className="text-amber-400">{latestResult?.overallScore}%</span>
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Role Context: <strong className="text-white capitalize">{activeRole}</strong>. 
                {latestResult?.overallScore && latestResult.overallScore >= 80
                  ? ` 🌟 Master Level ${activeRole.replace('-', ' ')}! You demonstrate strong empirical control and strategic product alignment.`
                  : latestResult?.overallScore && latestResult.overallScore >= 60
                  ? ` 🚀 Intermediate Level ${activeRole.replace('-', ' ')}. You possess solid foundations with targeted growth opportunities.`
                  : ` 🌱 Foundational Level ${activeRole.replace('-', ' ')}. Follow your recommended 30-60-90 day learning roadmap below.`}
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-amber-500/20 ring-4 ring-amber-500/40">
                {latestResult?.overallScore}%
              </div>
              <button
                onClick={restartAssessment}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
              >
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Retake Assessment</span>
              </button>
            </div>
          </div>

          {/* 8-Dimension Breakdown Grid & Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                8-Dimension Competency Spider Profile ({activeRole.toUpperCase()})
              </h4>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={
                    Object.entries(latestResult?.domainScores || {}).map(([key, val]) => ({
                      domain: DOMAIN_METADATA[key as FrameworkDomain]?.name || key,
                      score: val,
                      fullMark: 100
                    }))
                  }>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="domain" stroke="#94a3b8" tick={{ fill: '#cbd5e1', fontSize: 9 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" />
                    <Radar name="Domain Scores" dataKey="score" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Score List with Recommended Literature Links */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                8-Dimension Score breakdown & Recommended Literature
              </h4>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {Object.entries(latestResult?.domainScores || {}).map(([key, score]) => {
                  const domKey = key as FrameworkDomain;
                  const label = DOMAIN_METADATA[domKey];
                  const matchedResource = KNOWLEDGE_HUB_RESOURCES.find(r => 
                    r.role === activeRole && r.keyTopics.some(t => t.toLowerCase().includes(domKey.split('-')[0]))
                  ) || KNOWLEDGE_HUB_RESOURCES[0];

                  return (
                    <div key={key} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-white">{label?.name || key}</span>
                          <span className="text-[10px] text-slate-400 block">{label?.desc}</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold text-sm ${score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {score}%
                          </span>
                          <span className="text-[10px] text-slate-500 block">
                            {score >= 75 ? 'Passed' : 'Needs Growth'}
                          </span>
                        </div>
                      </div>

                      {score < 75 && (
                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-cyan-300">
                          <span className="truncate">Recommended Read: <strong>{matchedResource.title}</strong></span>
                          <a
                            href={matchedResource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold shrink-0 ml-2"
                          >
                            <span>Read</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* TAILORED RECOMMENDATIONS & 30-60-90 DAY LEARNING ROADMAP */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/40 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-indigo-400" />
                Personalized 30-60-90 Day Professional Skill Roadmap ({activeRole.toUpperCase().replace('-', ' ')})
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Custom action items, literature reading assignments, and scenario exercises mapped to your score results.
              </p>
            </div>

            {/* Recommendations */}
            <div className="p-4 bg-indigo-950/20 rounded-2xl border border-indigo-500/30 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Role Expert Recommendations:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                {latestResult?.recommendations.map((rec, idx) => (
                  <li key={idx}>{rec}</li>
                ))}
              </ul>
            </div>

            {/* 30 - 60 - 90 Day Roadmap Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Day 30 */}
              <div className="p-5 bg-slate-900/90 rounded-2xl border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    DAY 1 - 30
                  </span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <h5 className="text-sm font-bold text-white">Foundation & Event Hygiene</h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {latestResult?.roadmap.day30.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day 60 */}
              <div className="p-5 bg-slate-900/90 rounded-2xl border border-purple-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    DAY 31 - 60
                  </span>
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <h5 className="text-sm font-bold text-white">Flow Metrics & Refinement</h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {latestResult?.roadmap.day60.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Day 90 */}
              <div className="p-5 bg-slate-900/90 rounded-2xl border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    DAY 61 - 90
                  </span>
                  <Compass className="w-4 h-4 text-indigo-400" />
                </div>
                <h5 className="text-sm font-bold text-white">Scaling & AI Integration</h5>
                <ul className="space-y-2 text-xs text-slate-300">
                  {latestResult?.roadmap.day90.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
