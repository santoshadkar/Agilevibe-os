import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, SkipForward, Flame, Award, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundscape } from '../audio/soundscapeEngine';

export default function FlowTimer({ onTimerStateChange }) {
  const [mode, setMode] = useState('pomodoro'); // pomodoro, shortBreak, longBreak, custom
  const [duration, setDuration] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('vibepulse_streak') || '0', 10));
  const [totalFocusedMinutes, setTotalFocusedMinutes] = useState(() => parseInt(localStorage.getItem('vibepulse_total_mins') || '0', 10));

  const timerRef = useRef(null);

  // Sync mode durations
  const setTimerMode = (newMode, minutes) => {
    setIsRunning(false);
    setMode(newMode);
    setDuration(minutes * 60);
    setTimeLeft(minutes * 60);
    if (onTimerStateChange) onTimerStateChange(false);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, mode]);

  const handleComplete = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    if (onTimerStateChange) onTimerStateChange(false);

    // Audio Chime
    soundscape.playCompletionChime();

    // Trigger Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch(e) {}

    if (mode === 'pomodoro' || mode === 'custom') {
      const newStreak = streak + 1;
      const minutesAdded = Math.round(duration / 60);
      const newTotal = totalFocusedMinutes + minutesAdded;
      
      setStreak(newStreak);
      setTotalFocusedMinutes(newTotal);

      localStorage.setItem('vibepulse_streak', newStreak.toString());
      localStorage.setItem('vibepulse_total_mins', newTotal.toString());
    }
  };

  const toggleTimer = () => {
    const nextState = !isRunning;
    setIsRunning(nextState);
    if (onTimerStateChange) onTimerStateChange(nextState);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration);
    if (onTimerStateChange) onTimerStateChange(false);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Circular SVG progress calculation
  const strokeDasharray = 440;
  const progress = duration > 0 ? (duration - timeLeft) / duration : 0;
  const strokeDashoffset = strokeDasharray * (1 - progress);

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-2xl space-y-6 text-center">
      {/* Mode Switches */}
      <div className="flex items-center justify-center space-x-2 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800">
        {[
          { id: 'pomodoro', label: 'Focus (25m)', mins: 25 },
          { id: 'shortBreak', label: 'Short Break (5m)', mins: 5 },
          { id: 'longBreak', label: 'Long Break (15m)', mins: 15 }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setTimerMode(item.id, item.mins)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              mode === item.id
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* SVG Glowing Timer Circle */}
      <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="70"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-800"
            fill="transparent"
          />
          <circle
            cx="128"
            cy="128"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Clock Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
          <span className="text-5xl font-extrabold tracking-tighter text-white font-mono drop-shadow-md">
            {formatTime(timeLeft)}
          </span>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
            {isRunning ? 'In Flow State' : 'Paused'}
          </span>
        </div>
      </div>

      {/* Timer Controls */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={resetTimer}
          className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all"
          title="Reset Timer"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={toggleTimer}
          className={`px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center space-x-2 transition-all shadow-xl ${
            isRunning
              ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 shadow-amber-500/10'
              : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-95 shadow-purple-500/20'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-5 h-5" />
              <span>PAUSE FLOW</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              <span>START FLOW</span>
            </>
          )}
        </button>

        <button
          onClick={() => setTimerMode('pomodoro', 25)}
          className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all"
          title="Skip to Focus"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Focus Stats Footer */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-left">
        <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Current Streak</span>
            <span className="text-sm font-bold text-white">{streak} Sessions</span>
          </div>
        </div>

        <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3 flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Total Focus</span>
            <span className="text-sm font-bold text-white">{totalFocusedMinutes} Mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
