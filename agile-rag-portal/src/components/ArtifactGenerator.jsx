import React, { useState } from 'react';
import { 
  FileCode, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  Layers, 
  Zap, 
  Bot,
  Sliders
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateRagResponse } from '../utils/geminiApi';
import { getRagIndex } from '../utils/ragEngine';

const ARTIFACT_TEMPLATES = [
  {
    id: 'user-story',
    name: 'User Story & Gherkin Acceptance Criteria',
    role: 'Product Owner',
    icon: '🎯',
    description: 'Generates INVEST-compliant user story with Given/When/Then criteria & estimation hints.',
    defaultTopic: 'OAuth2 Social Login Integration for Mobile Users'
  },
  {
    id: 'retro-plan',
    name: 'Sprint Retrospective Facilitation Guide',
    role: 'Scrum Master',
    icon: '🛡️',
    description: 'Generates a step-by-step facilitation agenda using Sailboat or 1-2-4-All format.',
    defaultTopic: 'Sprint 24 Retrospective for Remote Engineering Team facing deployment bottlenecks'
  },
  {
    id: 'team-health',
    name: 'Team Health Check & Psychological Safety Audit',
    role: 'Agile Coach',
    icon: '🧘',
    description: 'Generates a 5-dimension team health assessment survey & coaching intervention script.',
    defaultTopic: 'High friction between Developers and Product Owner over scope changes'
  },
  {
    id: 'wsjf-matrix',
    name: 'WSJF / RICE Backlog Prioritization Scorecard',
    role: 'Product Manager',
    icon: '📊',
    description: 'Generates Cost of Delay breakdown and WSJF mathematical prioritization matrix.',
    defaultTopic: 'Payment Gateway Upgrade vs AI Chatbot Assistant vs Dark Mode UI'
  }
];

export default function ArtifactGenerator({ apiKey }) {
  const [selectedTemplateId, setSelectedTemplateId] = useState('user-story');
  const [topicInput, setTopicInput] = useState(ARTIFACT_TEMPLATES[0].defaultTopic);
  const [extraContext, setExtraContext] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArtifact, setGeneratedArtifact] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedTemplate = ARTIFACT_TEMPLATES.find(t => t.id === selectedTemplateId);

  const handleSelectTemplate = (t) => {
    setSelectedTemplateId(t.id);
    setTopicInput(t.defaultTopic);
    setGeneratedArtifact('');
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!topicInput.trim() || isGenerating) return;

    setIsGenerating(true);
    setGeneratedArtifact('');

    try {
      // 1. Query RAG engine for relevant context
      const ragIndex = getRagIndex();
      const queryStr = `${selectedTemplate.name} ${topicInput} ${extraContext}`;
      const searchResult = ragIndex.search(queryStr, 4);

      // 2. Synthesize artifact text
      const personaId = selectedTemplate.role === 'Product Owner' || selectedTemplate.role === 'Product Manager'
        ? 'product'
        : selectedTemplate.role === 'Scrum Master'
        ? 'scrum'
        : 'coach';

      const promptQuery = `Generate a structured, professional ${selectedTemplate.name} artifact for topic: "${topicInput}". 
Additional Context: ${extraContext || 'None'}.
Format the output nicely with clear Markdown titles, tables, checklists, and bullet points.`;

      const responseObj = await generateRagResponse(
        promptQuery, 
        searchResult.topChunks, 
        personaId, 
        apiKey
      );

      setGeneratedArtifact(responseObj.text);

      // Trigger Confetti effect
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error("Error generating artifact:", err);
      setGeneratedArtifact(`⚠️ Failed to generate artifact: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedArtifact);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedArtifact], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate.id}-${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-indigo-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <FileCode className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">RAG Agile Artifact Generator</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Instantly create INVEST user stories, retrospective agendas, WSJF matrices, and coaching plans synthesized from your RAG vector knowledge base.
            </p>
          </div>
        </div>
      </div>

      {/* Template Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ARTIFACT_TEMPLATES.map((t) => {
          const isSelected = t.id === selectedTemplateId;
          return (
            <button
              key={t.id}
              onClick={() => handleSelectTemplate(t)}
              className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'glass-panel bg-indigo-950/60 border-indigo-500/60 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/40 scale-[1.02]'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 font-semibold border border-slate-700">
                    {t.role}
                  </span>
                </div>
                <h3 className="font-bold text-xs text-white mb-1">{t.name}</h3>
                <p className="text-[11px] text-slate-400 leading-snug">{t.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Input Parameters */}
      <div className="glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
        <form onSubmit={handleGenerate} className="space-y-4 text-xs">
          
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Artifact Focus / Feature Topic *
            </label>
            <input
              type="text"
              required
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              placeholder="Describe the feature, team situation, or retrospective scenario..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Additional Team Constraints or Technical Context (Optional)
            </label>
            <input
              type="text"
              value={extraContext}
              onChange={(e) => setExtraContext(e.target.value)}
              placeholder="e.g. Team size: 6 engineers, 2 week sprints, React frontend + Go backend"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isGenerating || !topicInput.trim()}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition transform active:scale-95 disabled:opacity-40"
            >
              <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Synthesizing with RAG...' : 'Generate Artifact'}</span>
            </button>
          </div>

        </form>
      </div>

      {/* Generated Artifact Display */}
      {generatedArtifact && (
        <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 animate-fadeIn">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{selectedTemplate.icon}</span>
              <h3 className="font-bold text-sm text-white">{selectedTemplate.name} Result</h3>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-xs text-indigo-300 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export .md</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-xs text-slate-200 font-sans leading-relaxed whitespace-pre-wrap">
            {generatedArtifact}
          </div>

        </div>
      )}

    </div>
  );
}
