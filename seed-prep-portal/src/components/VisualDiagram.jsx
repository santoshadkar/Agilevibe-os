import React, { useState } from 'react';
import { Layers, Eye, RefreshCw, ZoomIn, Info, CheckCircle2 } from 'lucide-react';

export default function VisualDiagram({ visualType }) {
  const [activeFoldStep, setActiveFoldStep] = useState(0);
  const [activeGestaltIndex, setActiveGestaltIndex] = useState(0);
  const [activeLeverClass, setActiveLeverClass] = useState(1);
  const [showGoldenSpiral, setShowGoldenSpiral] = useState(true);

  if (visualType === 'cube-unfolding') {
    return (
      <div className="bg-slate-900 border border-slate-700/60 rounded-xl p-5 text-slate-100 shadow-inner my-4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Interactive 2D Net to 3D Cube Folding Simulator</h4>
          </div>
          <button 
            onClick={() => setActiveFoldStep((prev) => (prev + 1) % 4)}
            className="flex items-center gap-1.5 text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-3 py-1.5 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Fold Step: {activeFoldStep + 1}/4
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* SVG Canvas for Net */}
          <div className="flex flex-col items-center justify-center bg-slate-950/80 p-4 rounded-xl border border-slate-800">
            <svg viewBox="0 0 300 240" className="w-full max-w-[260px] h-auto">
              {/* T-shaped net representation */}
              <defs>
                <linearGradient id="cubeFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Net Top Wing */}
              <rect x="110" y="10" width="50" height="50" rx="4" fill="url(#cubeFaceGrad)" stroke="#fef3c7" strokeWidth="2" />
              <text x="135" y="40" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">TOP (D)</text>

              {/* Net Left Wing */}
              <rect x="50" y="70" width="50" height="50" rx="4" fill="url(#cubeFaceGrad)" stroke="#fef3c7" strokeWidth="2" />
              <text x="75" y="100" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">LEFT (B)</text>

              {/* Net Center */}
              <rect x="110" y="70" width="50" height="50" rx="4" fill="#3b82f6" stroke="#bfdbfe" strokeWidth="2.5" />
              <text x="135" y="100" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">BASE (A)</text>

              {/* Net Right Wing */}
              <rect x="170" y="70" width="50" height="50" rx="4" fill="url(#cubeFaceGrad)" stroke="#fef3c7" strokeWidth="2" />
              <text x="195" y="100" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">RIGHT (C)</text>

              {/* Net Bottom 1 */}
              <rect x="110" y="130" width="50" height="50" rx="4" fill="url(#cubeFaceGrad)" stroke="#fef3c7" strokeWidth="2" />
              <text x="135" y="160" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">FRONT (E)</text>

              {/* Net Bottom 2 */}
              <rect x="110" y="190" width="50" height="45" rx="4" fill="#ec4899" stroke="#fbcfe8" strokeWidth="2.5" />
              <text x="135" y="218" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="14">BACK (F)</text>

              {/* Fold Indicator Dotted lines */}
              <line x1="110" y1="70" x2="160" y2="70" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
              <line x1="110" y1="70" x2="110" y2="120" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
              <line x1="160" y1="70" x2="160" y2="120" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
              <line x1="110" y1="130" x2="160" y2="130" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
              <line x1="110" y1="190" x2="160" y2="190" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4" />
            </svg>
            <p className="text-xs text-slate-400 mt-2 text-center">Standard T-Net with labeled faces</p>
          </div>

          {/* 3D Assembled Perspective Representation */}
          <div className="space-y-3">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm leading-relaxed space-y-2">
              <div className="flex items-center justify-between text-amber-400 font-semibold">
                <span>Stage {activeFoldStep + 1}: {
                  activeFoldStep === 0 ? 'Flat 2D Unfolded Net' :
                  activeFoldStep === 1 ? 'Fold Side Wings 90° UP' :
                  activeFoldStep === 2 ? 'Fold Top & Front Panels' : 'Complete 3D Cube Formed!'
                }</span>
              </div>
              <p className="text-slate-300">
                {activeFoldStep === 0 && 'Notice how Base A is surrounded by B, C, D, E. Face F is attached to E.'}
                {activeFoldStep === 1 && 'Left (B) and Right (C) fold 90° upward relative to Base (A). They become opposite side walls.'}
                {activeFoldStep === 2 && 'Top (D) folds down while Front (E) folds up 90°.'}
                {activeFoldStep === 3 && 'Back (F) folds over the top lid. Notice that Base A is directly opposite Back F!'}
              </p>
            </div>

            <div className="bg-amber-950/30 border border-amber-500/30 p-3 rounded-xl flex items-start gap-2.5 text-xs text-amber-200">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong>SEED Exam Trick:</strong> Apply the <em>Skip-1 Rule</em>. In a straight chain of squares (D → A → E → F), A and F skip E, so A is always opposite F!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'gestalt-laws') {
    const gestaltLaws = [
      { name: 'Law of Closure', desc: 'The mind fills missing contours to complete a figure (like seeing a triangle or circle).' },
      { name: 'Law of Proximity', desc: 'Dots grouped closely together are perceived as distinct vertical columns.' },
      { name: 'Figure-Ground', desc: 'Perceiving negative space versus positive subject space.' }
    ];

    return (
      <div className="bg-slate-900 border border-slate-700/60 rounded-xl p-5 text-slate-100 shadow-inner my-4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-cyan-400" />
            <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Interactive Gestalt Perception Visualizer</h4>
          </div>
          <div className="flex gap-1.5">
            {gestaltLaws.map((law, idx) => (
              <button
                key={law.name}
                onClick={() => setActiveGestaltIndex(idx)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all border cursor-pointer ${
                  activeGestaltIndex === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {idx + 1}. {law.name.split(' ')[2] || law.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center justify-center bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[200px]">
            {activeGestaltIndex === 0 && (
              <svg viewBox="0 0 200 200" className="w-44 h-44">
                {/* Kanizsa Triangle Illusion */}
                <circle cx="50" cy="50" r="24" fill="#06b6d4" />
                <path d="M 50 50 L 74 50 L 50 74 Z" fill="#020617" />
                
                <circle cx="150" cy="50" r="24" fill="#06b6d4" />
                <path d="M 150 50 L 126 50 L 150 74 Z" fill="#020617" />

                <circle cx="100" cy="150" r="24" fill="#06b6d4" />
                <path d="M 100 150 L 100 126 L 118 138 Z" fill="#020617" />

                {/* Perceived white inverted triangle */}
                <polygon points="100,40 45,135 155,135" fill="none" stroke="#67e8f9" strokeWidth="2" strokeDasharray="4" />
              </svg>
            )}

            {activeGestaltIndex === 1 && (
              <svg viewBox="0 0 200 200" className="w-44 h-44">
                {/* Proximity columns */}
                {[30, 60, 140, 170].map((x) =>
                  [30, 65, 100, 135, 170].map((y, i) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="10" fill={x < 100 ? '#38bdf8' : '#a855f7'} />
                  ))
                )}
              </svg>
            )}

            {activeGestaltIndex === 2 && (
              <svg viewBox="0 0 200 200" className="w-44 h-44">
                {/* Rubin's Vase / Figure Ground */}
                <rect x="0" y="0" width="200" height="200" fill="#0f172a" />
                {/* White Vase profile */}
                <path d="M 60,20 C 80,20 80,60 65,90 C 50,120 40,160 30,180 L 170,180 C 160,160 150,120 135,90 C 120,60 120,20 140,20 Z" fill="#f8fafc" />
                <text x="100" y="105" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">VASE</text>
                <text x="25" y="100" textAnchor="middle" fill="#38bdf8" fontSize="10">PROFILE 1</text>
                <text x="175" y="100" textAnchor="middle" fill="#38bdf8" fontSize="10">PROFILE 2</text>
              </svg>
            )}
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-cyan-300 text-base">{gestaltLaws[activeGestaltIndex].name}</h5>
            <p className="text-slate-300 text-sm leading-relaxed">
              {gestaltLaws[activeGestaltIndex].desc}
            </p>
            <div className="bg-cyan-950/40 border border-cyan-500/30 p-3 rounded-lg text-xs text-cyan-200">
              <strong>Perceptual Insight:</strong> SEED questions test how quickly your brain catches implicit negative shapes and patterns. Practice looking at both dark and light zones in logos!
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'levers-gears-physics') {
    return (
      <div className="bg-slate-900 border border-slate-700/60 rounded-xl p-5 text-slate-100 shadow-inner my-4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-emerald-400" />
            <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Physics of Simple Machines: Levers Visualizer</h4>
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((cls) => (
              <button
                key={cls}
                onClick={() => setActiveLeverClass(cls)}
                className={`text-xs px-2.5 py-1 rounded-lg transition-all border cursor-pointer ${
                  activeLeverClass === cls
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center justify-center bg-slate-950 p-4 rounded-xl border border-slate-800">
            <svg viewBox="0 0 260 160" className="w-full max-w-[240px]">
              {/* Lever Beam */}
              <line x1="20" y1="90" x2="240" y2="90" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />

              {activeLeverClass === 1 && (
                <>
                  {/* Fulcrum in Middle */}
                  <polygon points="130,94 115,130 145,130" fill="#10b981" />
                  <text x="130" y="145" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">FULCRUM</text>
                  
                  {/* Load on Left */}
                  <rect x="35" y="60" width="30" height="30" fill="#ef4444" rx="4" />
                  <text x="50" y="50" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">LOAD</text>

                  {/* Effort on Right */}
                  <path d="M 210,40 L 210,80 M 205,70 L 210,80 L 215,70" stroke="#3b82f6" strokeWidth="3" />
                  <text x="210" y="30" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">EFFORT</text>
                </>
              )}

              {activeLeverClass === 2 && (
                <>
                  {/* Fulcrum on Left */}
                  <polygon points="35,94 20,130 50,130" fill="#10b981" />
                  <text x="35" y="145" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">FULCRUM</text>
                  
                  {/* Load in Middle */}
                  <rect x="115" y="60" width="30" height="30" fill="#ef4444" rx="4" />
                  <text x="130" y="50" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">LOAD</text>

                  {/* Effort on Right */}
                  <path d="M 220,120 L 220,80 M 215,90 L 220,80 L 225,90" stroke="#3b82f6" strokeWidth="3" />
                  <text x="220" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">EFFORT</text>
                </>
              )}

              {activeLeverClass === 3 && (
                <>
                  {/* Fulcrum on Left */}
                  <polygon points="35,94 20,130 50,130" fill="#10b981" />
                  <text x="35" y="145" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">FULCRUM</text>
                  
                  {/* Effort in Middle */}
                  <path d="M 120,120 L 120,80 M 115,90 L 120,80 L 125,90" stroke="#3b82f6" strokeWidth="3" />
                  <text x="120" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">EFFORT</text>

                  {/* Load on Far Right */}
                  <rect x="195" y="60" width="30" height="30" fill="#ef4444" rx="4" />
                  <text x="210" y="50" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">LOAD</text>
                </>
              )}
            </svg>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-emerald-300 text-base">
              {activeLeverClass === 1 && 'Class 1 Lever: Fulcrum in the Middle'}
              {activeLeverClass === 2 && 'Class 2 Lever: Load in the Middle'}
              {activeLeverClass === 3 && 'Class 3 Lever: Effort in the Middle'}
            </h5>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {activeLeverClass === 1 && 'Examples: Scissors, pliers, seesaws, crowbars. Reverses the direction of force.'}
              {activeLeverClass === 2 && 'Examples: Wheelbarrows, nutcrackers, bottle openers. Mechanical advantage is always > 1 (multiplies force).'}
              {activeLeverClass === 3 && 'Examples: Tweezers, baseball bats, human forearms. Increases speed and movement distance rather than force.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (visualType === 'golden-ratio-spiral') {
    return (
      <div className="bg-slate-900 border border-slate-700/60 rounded-xl p-5 text-slate-100 shadow-inner my-4">
        <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-emerald-400" />
            <h4 className="font-semibold text-slate-100 text-sm sm:text-base">Golden Ratio Spiral (Phi = 1.618) Geometric Model</h4>
          </div>
          <button 
            onClick={() => setShowGoldenSpiral(!showGoldenSpiral)}
            className="text-xs bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-3 py-1.5 rounded-lg border border-emerald-500/30 transition-all cursor-pointer"
          >
            {showGoldenSpiral ? 'Hide Spiral' : 'Show Golden Spiral'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center justify-center bg-slate-950 p-4 rounded-xl border border-slate-800">
            <svg viewBox="0 0 260 160" className="w-full max-w-[240px]">
              {/* Fibonacci Rectangles 13x8 proportionally */}
              <rect x="10" y="10" width="240" height="148" fill="none" stroke="#10b981" strokeWidth="2" />
              <rect x="10" y="10" width="148" height="148" fill="#10b981" fillOpacity="0.1" stroke="#34d399" strokeWidth="1.5" />
              <rect x="158" y="10" width="92" height="92" fill="#06b6d4" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="1.5" />
              <rect x="158" y="102" width="56" height="56" fill="#8b5cf6" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1.5" />

              {/* Golden Spiral overlay */}
              {showGoldenSpiral && (
                <path 
                  d="M 10,158 A 148,148 0 0,1 158,10 A 92,92 0 0,1 250,102 A 56,56 0 0,1 194,158" 
                  fill="none" 
                  stroke="#fbbf24" 
                  strokeWidth="3" 
                />
              )}

              <text x="75" y="85" fill="#34d399" fontSize="16" fontWeight="bold">8</text>
              <text x="200" y="60" fill="#38bdf8" fontSize="14" fontWeight="bold">5</text>
              <text x="180" y="135" fill="#a78bfa" fontSize="12" fontWeight="bold">3</text>
            </svg>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-emerald-300 text-base">Mathematical Harmony in Nature & Design</h5>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Fibonacci numbers: <strong>1, 1, 2, 3, 5, 8, 13, 21, 34...</strong>
              Dividing any Fibonacci number by its predecessor yields approximately <strong>1.618</strong>. This ratio creates natural, pleasing visual balance used in Taj Mahal, Parthenon, and Apple logo design.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fallback default visual banner
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 my-4 flex items-center justify-between text-xs text-slate-400">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-slate-500" />
        <span>Visual concept diagram & illustrative breakdown loaded.</span>
      </div>
    </div>
  );
}
