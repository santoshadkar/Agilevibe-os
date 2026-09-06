import React, { useState, useRef, useEffect } from 'react';
import { 
  PenTool, Clock, RotateCcw, Download, Sparkles, 
  Palette, RefreshCw, CheckCircle2, Layers, Info, Trash2
} from 'lucide-react';
import { DAILY_SKETCH_PROMPTS } from '../data/seedSyllabusData';
import VisualDiagram from './VisualDiagram';

export default function SpatialWorkshop() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSecs, setTimerSecs] = useState(DAILY_SKETCH_PROMPTS[0].timeLimitMinutes * 60);

  // Canvas Drawing State
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [lineWidth, setLineWidth] = useState(3);
  const [isEraser, setIsEraser] = useState(false);

  const activePrompt = DAILY_SKETCH_PROMPTS[promptIdx];

  // Timer Countdown logic
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSecs > 0) {
      interval = setInterval(() => {
        setTimerSecs((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSecs]);

  // Canvas context setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, []);

  const handleNextPrompt = () => {
    const nextIdx = (promptIdx + 1) % DAILY_SKETCH_PROMPTS.length;
    setPromptIdx(nextIdx);
    setTimerSecs(DAILY_SKETCH_PROMPTS[nextIdx].timeLimitMinutes * 60);
    setIsTimerRunning(false);
  };

  const handleStartTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  // Drawing event handlers
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = isEraser ? '#090d16' : color;
    ctx.lineWidth = isEraser ? lineWidth * 4 : lineWidth;
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <PenTool className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">Spatial Logic & Daily Sketching Workshop</h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Practice 3D paper nets, spatial transformations, and prepare for the SEED PRT Studio Test drawing round.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: Interactive Spatial Rotation & Nets Lab */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" /> Interactive Spatial Logic Simulator
        </h2>
        <VisualDiagram visualType="cube-unfolding" />
      </div>

      {/* Section 2: SEED Daily Sketching Studio Challenge */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-400 bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-500/30">
              PRT Studio Test Prompt #{activePrompt.id}
            </span>
            <h3 className="text-xl font-black text-white mt-2">{activePrompt.title}</h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono font-bold text-indigo-300 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-sm">
              <Clock className="w-4 h-4 text-indigo-400" /> {formatTimer(timerSecs)}
            </div>

            <button
              onClick={handleStartTimer}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                isTimerRunning
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-md'
              }`}
            >
              {isTimerRunning ? 'Pause Timer' : 'Start Practice Timer'}
            </button>

            <button
              onClick={handleNextPrompt}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all cursor-pointer"
              title="Next Prompt"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-semibold">
            "{activePrompt.promptText}"
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {activePrompt.tips.map((tip, idx) => (
              <span key={idx} className="text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> {tip}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive HTML5 Drawing Canvas Area */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
            {/* Color palette */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Brush Color:</span>
              {['#ffffff', '#f59e0b', '#38bdf8', '#ef4444', '#10b981', '#a855f7'].map((c) => (
                <button
                  key={c}
                  onClick={() => { setColor(c); setIsEraser(false); }}
                  className={`w-6 h-6 rounded-full transition-transform cursor-pointer ${
                    color === c && !isEraser ? 'ring-2 ring-white scale-110' : ''
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>

            {/* Controls (Thickness, Eraser, Clear) */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Size:</span>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={lineWidth}
                  onChange={(e) => setLineWidth(Number(e.target.value))}
                  className="w-20 accent-amber-500 cursor-pointer"
                />
              </div>

              <button
                onClick={() => setIsEraser(!isEraser)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                  isEraser ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {isEraser ? 'Eraser Active' : 'Eraser'}
              </button>

              <button
                onClick={clearCanvas}
                className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-rose-950/40 text-rose-300 border border-rose-500/30 hover:bg-rose-900/40 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear
              </button>
            </div>
          </div>

          {/* Canvas Box */}
          <div className="relative bg-[#090d16] border border-slate-800 rounded-2xl overflow-hidden shadow-inner flex justify-center">
            <canvas
              ref={canvasRef}
              width={750}
              height={400}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="w-full h-[380px] cursor-crosshair touch-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
