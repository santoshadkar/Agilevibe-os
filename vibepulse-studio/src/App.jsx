import React, { useState, useEffect } from 'react';
import VisualizerCanvas from './components/VisualizerCanvas';
import FlowTimer from './components/FlowTimer';
import SoundscapeMixer from './components/SoundscapeMixer';
import DayPlanner from './components/DayPlanner';
import TaskKanban from './components/TaskKanban';
import Scratchpad from './components/Scratchpad';
import { Radio, Maximize2, Minimize2, Eye, ShieldCheck } from 'lucide-react';

export default function App() {
  const [visualMode, setVisualMode] = useState('aurora'); // aurora, starfield, raindrops, pulsing_rings
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-purple-500 selection:text-white pb-12">
      {/* Background Interactive Canvas Visualizer */}
      <VisualizerCanvas mode={visualMode} isPlaying={isTimerRunning} />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Navigation / Header Bar */}
        <header className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Radio className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-extrabold tracking-tight text-white">VibePulse Studio</h1>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  v1.1 Planner Edition
                </span>
              </div>
              <p className="text-xs text-slate-400">Procedural Soundscape, Day Planner & Focus Workspace</p>
            </div>
          </div>

          {/* Controls: Canvas Visual Mode + Fullscreen */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Visualizer Theme selector */}
            <div className="flex items-center space-x-1 bg-slate-950/60 border border-slate-800 p-1 rounded-xl">
              <span className="text-xs text-slate-500 px-2 flex items-center space-x-1">
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Theme:</span>
              </span>
              {[
                { id: 'aurora', label: 'Aurora' },
                { id: 'starfield', label: 'Starfield' },
                { id: 'raindrops', label: 'Rain' },
                { id: 'pulsing_rings', label: 'Rings' }
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setVisualMode(theme.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    visualMode === theme.id
                      ? 'bg-purple-600/30 border border-purple-500/50 text-purple-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {theme.label}
                </button>
              ))}
            </div>

            {/* Live Clock Badge */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white transition-all"
              title="Toggle Fullscreen Focus Mode"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Dashboard Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Timer & Audio Mixer (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <FlowTimer onTimerStateChange={setIsTimerRunning} />
            <SoundscapeMixer />
          </div>

          {/* Right Column: Day Planner, Task Kanban & Markdown Scratchpad (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <DayPlanner />
            <TaskKanban />
            <Scratchpad />
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center pt-4 pb-2 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between border-t border-slate-800/60">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Client-Side Web Audio & Local Storage</span>
          </div>
          <div className="flex items-center space-x-1 pt-2 sm:pt-0">
            <span>Built for flow state productivity</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
