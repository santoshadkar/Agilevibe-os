import React, { useState } from 'react';
import { RASHI_LIST } from '../utils/rashiData';
import { getHoroscopePredictions } from '../utils/predictionEngine';
import { Sparkles, Calendar, Clock, Compass, TrendingUp, Heart, Briefcase, DollarSign, Activity, ShieldCheck } from 'lucide-react';

export default function FutureTimeline() {
  const [selectedRashiId, setSelectedRashiId] = useState('aries');
  const [timelineMode, setTimelineMode] = useState('months'); // 'past', 'months', 'years'
  const [categoryFilter, setCategoryFilter] = useState('all'); // 'all', 'love', 'career', 'wealth', 'health'

  const selectedRashi = RASHI_LIST.find(r => r.id === selectedRashiId) || RASHI_LIST[0];
  const predictions = getHoroscopePredictions(selectedRashiId);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-400" /> Future Timeline & Life Phases
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white font-cinzel tracking-wide">
          Horoscope Predictions for <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">{selectedRashi.englishName}</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm">
          Explore past retrospectives, month-by-month breakdown, and multi-year planetary transit impacts (Jupiter, Saturn, Rahu-Ketu shifts).
        </p>
      </div>

      {/* Rashi Selector & Timeline Mode Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 backdrop-blur p-4 rounded-2xl border border-purple-500/20 shadow-xl">
        {/* Sign Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-xs text-slate-400 font-semibold font-cinzel whitespace-nowrap">Select Rashi:</span>
          <select
            value={selectedRashiId}
            onChange={(e) => setSelectedRashiId(e.target.value)}
            className="bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl px-3 py-2 text-xs text-amber-300 font-bold outline-none w-full md:w-56"
          >
            {RASHI_LIST.map((r) => (
              <option key={r.id} value={r.id}>
                {r.symbol} {r.vedicName} ({r.englishName})
              </option>
            ))}
          </select>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 w-full md:w-auto justify-center">
          {[
            { id: 'past', label: 'Previous 2 Years', icon: Clock },
            { id: 'months', label: 'Next Few Months', icon: Calendar },
            { id: 'years', label: 'Multi-Year (2026-2028)', icon: Compass }
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => setTimelineMode(mode.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-cinzel font-semibold flex items-center gap-1.5 transition ${
                timelineMode === mode.id
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <mode.icon className="w-3.5 h-3.5" />
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content according to mode */}
      <div className="space-y-6">
        {/* PAST RETROSPECTIVE MODE */}
        {timelineMode === 'past' && (
          <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-purple-500/20 pb-4">
              <Clock className="w-6 h-6 text-amber-400" />
              <div>
                <h3 className="text-xl font-bold text-white font-cinzel">{predictions.pastTimeline.title}</h3>
                <span className="text-xs text-purple-300 font-semibold">Retrospective & Karmic Growth Lessons</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{predictions.pastTimeline.overview}</p>

            <div className="space-y-3">
              <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wider">Key Milestones & Lessons Learned</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {predictions.pastTimeline.highlights.map((h, i) => (
                  <div key={i} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                    <span className="text-amber-400 font-mono font-bold text-sm block">0{i + 1}.</span>
                    <p>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-center text-xs text-purple-200">
              <strong className="text-amber-300 block text-sm font-cinzel mb-1">Core Karmic Takeaway:</strong>
              "{predictions.pastTimeline.keyLesson}"
            </div>
          </div>
        )}

        {/* NEXT MONTHS BREAKDOWN MODE */}
        {timelineMode === 'months' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {predictions.nextMonths.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/20 shadow-xl space-y-4 hover:border-amber-400/40 transition duration-300"
              >
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <div className="space-y-0.5">
                    <span className="text-xs text-amber-400 font-bold font-cinzel uppercase block">{m.period}</span>
                    <h4 className="text-base font-bold text-white font-cinzel">{m.theme}</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950 border border-purple-700 text-purple-200">
                    Lucky: {m.luckyDates}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-rose-300">Love:</strong> {m.love}</div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-cyan-300">Career:</strong> {m.career}</div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-emerald-300">Wealth:</strong> {m.wealth}</div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div><strong className="text-amber-300">Health:</strong> {m.health}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MULTI-YEAR FORECAST MODE */}
        {timelineMode === 'years' && (
          <div className="space-y-6">
            {predictions.yearlyForecast.map((yr, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-purple-500/30 shadow-2xl space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-4">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-cinzel block">
                      Yearly Horizon
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-cinzel">{yr.year}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-200 border border-purple-700 text-xs font-cinzel font-semibold">
                    {yr.headline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{yr.details}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-rose-300 font-cinzel block text-xs">❤️ Love & Marriage</strong>
                    <p className="text-slate-400">{yr.focusAreas.love}</p>
                  </div>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-cyan-300 font-cinzel block text-xs">💼 Career & Growth</strong>
                    <p className="text-slate-400">{yr.focusAreas.career}</p>
                  </div>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-emerald-300 font-cinzel block text-xs">💰 Net Worth & Assets</strong>
                    <p className="text-slate-400">{yr.focusAreas.wealth}</p>
                  </div>

                  <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <strong className="text-amber-300 font-cinzel block text-xs">🧘 Spiritual Alignment</strong>
                    <p className="text-slate-400">{yr.focusAreas.spiritual}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
