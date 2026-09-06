import React, { useState } from 'react';
import { Sparkles, RefreshCw, Star, Compass, Award } from 'lucide-react';

const ORACLE_CARDS = [
  {
    title: "The Golden Sun (Surya Prabha)",
    element: "Fire",
    keyword: "Vitality & Recognition",
    imageEmoji: "☀️",
    message: "Today brings immense clarity, renewed energy, and warm recognition. Speak your truth with confidence—the universe is shining brightly upon your efforts.",
    actionStep: "Take lead on an important task and share your creative vision freely.",
    mantra: "Om Suryaya Namah — I step boldly into my authentic light."
  },
  {
    title: "The Silver Moon (Chandra Kripa)",
    element: "Water",
    keyword: "Intuition & Gentle Peace",
    imageEmoji: "🌙",
    message: "Your inner intuitive voice is heightened today. Trust subtle feelings and allow emotional grace to guide your choices.",
    actionStep: "Spend 10 quiet minutes meditating near water or writing in a reflection journal.",
    mantra: "Om Chandraya Namah — I trust the natural flow of my intuitive wisdom."
  },
  {
    title: "The Cosmic Diamond (Vajra Shakti)",
    element: "Air",
    keyword: "Unshakable Strength & Clarity",
    imageEmoji: "💎",
    message: "Breakthrough ideas are crystalizing. Pressure faced in past weeks is now forming unbreakable resilience and genius insight.",
    actionStep: "Make that key decision you've been pondering; your judgment is razor-sharp.",
    mantra: "Om Budhaya Namah — My intellect is sharp, clear, and unburdened."
  },
  {
    title: "The Sacred Lotus (Padma Siddhi)",
    element: "Earth",
    keyword: "Abundance & Spiritual Grace",
    imageEmoji: "🪷",
    message: "Blossoming out of murky waters into pure beauty. Unexpected financial or emotional prosperity is reaching full bloom.",
    actionStep: "Express heartfelt gratitude to a mentor or family member who supported your journey.",
    mantra: "Om Gurave Namah — Abundance flows to me naturally and easily."
  },
  {
    title: "The Celestial Chariot (Ratha Yatra)",
    element: "Fire",
    keyword: "Momentum & Victory",
    imageEmoji: "🏹",
    message: "Obstacles are dissolving rapidly. You have the momentum, courage, and direction to reach your goal today.",
    actionStep: "Finalize long-pending tasks; momentum is 100% on your side.",
    mantra: "Om Bhaumaya Namah — I move forward with victorious determination."
  }
];

export default function DailyCardDraw() {
  const [drawnCard, setDrawnCard] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ORACLE_CARDS.length);
      setDrawnCard(ORACLE_CARDS[randomIndex]);
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 shadow-2xl space-y-6 text-center">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
          <Star className="w-3.5 h-3.5 text-amber-400" /> Daily Cosmic Oracle Guidance
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-cinzel">
          Draw Your <span className="bg-gradient-to-r from-amber-300 to-purple-300 bg-clip-text text-transparent">Daily Guidance Card</span>
        </h3>
        <p className="text-xs text-slate-400 max-w-lg mx-auto">
          Center your breath, focus your intent, and draw a cosmic oracle card for today's atmospheric guidance.
        </p>
      </div>

      {/* Card Display Area */}
      <div className="flex flex-col items-center justify-center min-h-[300px] py-4">
        {!drawnCard && !isFlipping && (
          <div
            onClick={drawCard}
            className="w-56 h-80 rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 border-2 border-amber-400/60 p-6 flex flex-col items-center justify-center space-y-4 shadow-[0_0_25px_rgba(245,158,11,0.25)] cursor-pointer hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-purple-950 border border-amber-400 flex items-center justify-center text-3xl group-hover:rotate-180 transition-transform duration-700">
              ✨
            </div>
            <span className="text-amber-300 font-cinzel font-bold text-sm tracking-wider">
              Tap to Draw Card
            </span>
            <p className="text-[10px] text-slate-400">Click to receive today's cosmic reading</p>
          </div>
        )}

        {isFlipping && (
          <div className="w-56 h-80 rounded-2xl bg-slate-950 border-2 border-purple-500 animate-spin flex items-center justify-center text-4xl text-amber-400">
            🌌
          </div>
        )}

        {drawnCard && !isFlipping && (
          <div className="w-full max-w-lg bg-slate-950/90 p-6 sm:p-8 rounded-2xl border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,158,11,0.3)] space-y-4 text-left transition-all duration-500 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{drawnCard.imageEmoji}</span>
                <div>
                  <h4 className="text-xl font-extrabold text-white font-cinzel">{drawnCard.title}</h4>
                  <span className="text-xs text-amber-400 font-semibold">{drawnCard.keyword}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-200 border border-purple-700 text-xs font-mono">
                {drawnCard.element}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{drawnCard.message}</p>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
              <strong className="text-cyan-300 block font-cinzel">Suggested Action Step:</strong>
              <p className="text-slate-300">{drawnCard.actionStep}</p>
            </div>

            <div className="p-3 bg-purple-950/50 rounded-xl border border-purple-500/30 text-xs text-center">
              <span className="text-amber-300 font-mono font-bold block">"{drawnCard.mantra}"</span>
            </div>

            <button
              onClick={drawCard}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-amber-300 font-cinzel text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Draw Another Card
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
