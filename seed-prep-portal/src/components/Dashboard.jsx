import React from 'react';
import { 
  Boxes, Eye, BrainCircuit, Palette, Calculator, 
  Sparkles, CheckCircle2, ArrowRight, BookOpen, Award, 
  Flame, Clock, HelpCircle, ShieldCheck, PenTool, Download, Star
} from 'lucide-react';
import { SEED_SYLLABUS_DOMAINS, SEED_EXAM_OVERVIEW_INFO, DAILY_SKETCH_PROMPTS } from '../data/seedSyllabusData';
import { generateFullSyllabusPDF } from '../utils/pdfGenerator';

const iconMap = {
  Boxes: Boxes,
  Eye: Eye,
  BrainCircuit: BrainCircuit,
  Palette: Palette,
  Calculator: Calculator
};

export default function Dashboard({ 
  onSelectDomain, 
  onStartQuiz, 
  onOpenSpatial, 
  completedTopicsMap, 
  readinessPercentage 
}) {
  const dailyPrompt = DAILY_SKETCH_PROMPTS[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner with Glassmorphism & Gradient accent */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Targeting SEED Design Entrance • Ultimate Prep Portal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Welcome to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-300">SEED Prep Journey</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Master all 5 official syllabus topics, tackle step-by-step solved questions, practice timed mock tests, and download printable PDF study guides—all built specifically for Symbiosis Entrance Exam for Design.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectDomain('creative-visualization')}
                className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <BookOpen className="w-4 h-4" />
                Start Learning Syllabus
              </button>

              <button
                onClick={generateFullSyllabusPDF}
                className="flex items-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-5 py-3 rounded-xl border border-amber-500/40 transition-all cursor-pointer text-sm shadow-md"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download PDF Study Guide
              </button>

              <button
                onClick={() => onStartQuiz(null)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold px-4 py-3 rounded-xl border border-slate-700 transition-all cursor-pointer text-sm"
              >
                <Award className="w-4 h-4 text-amber-400" />
                Take Mock Test
              </button>
            </div>
          </div>

          {/* Right Readiness Score Card */}
          <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
            <div className="relative flex items-center justify-center">
              {/* Circular Ring SVG */}
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="#1e293b"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="url(#readinessGrad)"
                  strokeWidth="10"
                  strokeDasharray={326}
                  strokeDashoffset={326 - (326 * readinessPercentage) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="readinessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-black text-white">{readinessPercentage}%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ready</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-100 text-sm">Overall Prep Readiness</h3>
              <p className="text-xs text-slate-400 mt-1">
                {Object.keys(completedTopicsMap).length} of 10 Core Topics Mastered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Syllabus Domains Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Core Syllabus Domains
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Explore thorough breakdowns, solved examples, recommended books, and video lessons.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEED_SYLLABUS_DOMAINS.map((domain) => {
            const IconComp = iconMap[domain.icon] || Boxes;
            const completedCount = domain.topics.filter(t => completedTopicsMap[t.id]).length;
            const totalCount = domain.topics.length;
            const domainProgress = Math.round((completedCount / totalCount) * 100);

            return (
              <div
                key={domain.id}
                onClick={() => onSelectDomain(domain.id)}
                className="group relative bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center shadow-md text-white font-bold`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                      {domain.weightage}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {domain.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Progress & CTA */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Coverage</span>
                    <span className="text-slate-200 font-semibold">{completedCount}/{totalCount} Topics</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${domain.color} transition-all duration-500`}
                      style={{ width: `${domainProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                      Explore Topics <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartQuiz(domain.id);
                      }}
                      className="text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700 transition-all"
                    >
                      Quiz
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secondary Grid: SEED Exam Pattern + Daily Sketch Prompt Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Exam Overview Widget */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-100 text-base">SEED Exam Pattern & Structure</h3>
              <p className="text-xs text-slate-400">Symbiosis Institute of Design (SID) Official Scheme</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center">
              <HelpCircle className="w-4 h-4 text-amber-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white">{SEED_EXAM_OVERVIEW_INFO.totalQuestions}</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Total MCQs</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center">
              <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white">{SEED_EXAM_OVERVIEW_INFO.durationMinutes} m</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Duration</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="text-sm font-black text-white">+1 / 0</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">No Negative</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-center">
              <Star className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <div className="text-sm font-black text-white">Online</div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Computer Based</div>
            </div>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Next Stage after SEED Written Test:</strong> Candidates short-listed based on SEED score qualify for PRT (Portfolio Review & Personal Interaction / Studio Test) at SID Pune.
            </div>
          </div>
        </div>

        {/* Daily Sketch Prompt Spotlight */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-indigo-400 bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-500/30">
                PRT Studio Test Prep
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-300" /> {dailyPrompt.timeLimitMinutes} mins
              </span>
            </div>

            <h3 className="font-bold text-slate-100 text-lg">{dailyPrompt.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              "{dailyPrompt.promptText}"
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800/80">
            <span className="text-xs text-indigo-300 font-semibold">{dailyPrompt.category}</span>
            <button
              onClick={onOpenSpatial}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer shadow-md"
            >
              <PenTool className="w-3.5 h-3.5" /> Open Studio Lab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
