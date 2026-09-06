import React, { useState } from "react";

import { Radio, Play, Square, Volume2, Mic, FileText, HelpCircle, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import { audioSynthesizer } from "../utils/audioSynthesizer";

export default function NotebookStudio({ modelResponses }) {
  const [activeTab, setActiveTab] = useState("podcast"); // podcast, summary, faq
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const defaultNotebookData = {
    summary: "Executive Briefing on Agile Coaching & AI Threat Intelligence:\n\n• [Ref 1] Lyssa Adkins Coaching Framework: 8 core competencies for Agile transformation.\n• [Ref 2] 2020 Scrum Guide Rules: Empiricism, Scrum Values, and Team Accountabilities.\n• [Ref 3] NIST SP 800-207 Zero Trust: Continuous authentication and microsegmentation.",
    podcastScript: [
      { speaker: "Host A (Analytical Lead)", text: "Hey everyone! Today we're diving deep into our unified RAG repository covering Agile Coaching & AI Threat Defense." },
      { speaker: "Host B (Tech Specialist)", text: "Right! Looking at our primary source documents, the 2020 Scrum Guide and NIST Zero Trust Architecture give a complete roadmap." },
      { speaker: "Host A (Analytical Lead)", text: "Exactly! And by pairing local SLMs like Microsoft Phi-3 with RAG, teams eliminate cloud telemetry leakage completely." },
      { speaker: "Host B (Tech Specialist)", text: "Wait, so how does that help Scrum Masters and Product Owners?" },
      { speaker: "Host A (Analytical Lead)", text: "Product Owners can calculate WSJF prioritization scores instantly while keeping user story data 100% on-premise!" }
    ],
    faq: [
      { q: "What is the primary benefit of unified Agile & Cyber RAG?", a: "It provides verified, zero-hallucination answers back-linked to official Scrum Guide and MITRE ATT&CK sources." },
      { q: "How do we verify source grounding?", a: "By inspecting chunk similarity scores and cross-referencing text boundaries in the source citation inspector." }
    ]
  };

  const activeData = modelResponses ? modelResponses.models.notebook : defaultNotebookData;
  const podcastScript = activeData.podcastScript || [];


  const handlePlayAudio = () => {
    if (isPlaying) {
      audioSynthesizer.stop();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      audioSynthesizer.playScript(
        podcastScript,
        (idx) => setActiveLineIndex(idx),
        () => setIsPlaying(false)
      );
    }
  };

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Radio className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-slate-100">
              NotebookLLM Studio & Audio Overview
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Grounded multi-document synthesis, conversational audio podcast generation, and automated study guides.
          </p>
        </div>

        <div className="flex space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab("podcast")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "podcast" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🎙️ Audio Podcast
          </button>
          <button
            onClick={() => setActiveTab("summary")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "summary" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            📝 Executive Brief
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "faq" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ❓ Grounded FAQ
          </button>
        </div>
      </div>

      {/* Tab 1: Audio Podcast Studio */}
      {activeTab === "podcast" && (
        <div className="space-y-6">
          
          {/* Audio Player Control Bar */}
          <div className="bg-gradient-to-r from-slate-950 via-emerald-950/40 to-slate-950 p-5 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlayAudio}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isPlaying
                    ? "bg-rose-500 hover:bg-rose-600 text-white animate-pulse"
                    : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30"
                }`}
              >
                {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
              </button>

              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-extrabold text-slate-100 text-sm">
                    AI Deep Dive Audio Overview
                  </h4>
                  <span className="bg-emerald-950 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                    Dual Host AI
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Host A (Analytical Lead) & Host B (Technical Specialist)
                </p>
              </div>
            </div>

            {/* Equalizer Visualizer Simulation */}
            <div className="flex items-center space-x-1.5 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              <Volume2 className="w-4 h-4 text-emerald-400 mr-1" />
              {[12, 24, 18, 30, 16, 28, 20, 14].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? "bg-emerald-400 animate-bounce" : "bg-slate-700"
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(8, (h + (i % 3) * 6) % 32)}px` : "12px",
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dialogue Transcript Stream */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Mic className="w-3.5 h-3.5 text-emerald-400" />
              <span>Grounded Conversational Script</span>
            </h4>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 scrollbar-thin">
              {podcastScript.map((line, idx) => {
                const isActive = isPlaying && activeLineIndex === idx;
                const isHostA = line.speaker.includes("Host A");

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-950/60 border-emerald-500/60 shadow-lg text-white"
                        : "bg-slate-950/70 border-slate-800 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1 font-bold">
                      <span className={isHostA ? "text-cyan-400" : "text-emerald-400"}>
                        {line.speaker}
                      </span>
                      {isActive && (
                        <span className="text-[10px] bg-emerald-500 text-slate-950 px-2 py-0.5 rounded font-mono font-extrabold animate-pulse">
                          SPEAKING
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed font-sans">
                      "{line.text}"
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Executive Brief */}
      {activeTab === "summary" && (
        <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-4">
          <h4 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Grounded Multi-Document Executive Summary</span>
          </h4>
          <div className="text-xs text-slate-300 leading-relaxed font-mono whitespace-pre-line bg-slate-900 p-4 rounded-lg border border-slate-800">
            {activeData.summary}
          </div>
        </div>
      )}

      {/* Tab 3: FAQ */}
      {activeTab === "faq" && (
        <div className="space-y-3">
          {activeData.faq.map((item, idx) => (
            <div key={idx} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-purple-300 flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Q: {item.q}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono pl-6 border-l-2 border-purple-500/40">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      )}


    </div>
  );
}
