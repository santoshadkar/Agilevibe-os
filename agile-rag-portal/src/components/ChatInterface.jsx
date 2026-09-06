import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  RefreshCw, 
  Layers,
  Search,
  Zap,
  HelpCircle
} from 'lucide-react';
import { PERSONA_CONFIGS, generateRagResponse } from '../utils/geminiApi';
import { getRagIndex } from '../utils/ragEngine';

const QUICK_PROMPTS = {
  coach: [
    "How to handle a team trapped in 'Artificial Harmony' and fear of conflict?",
    "How do I coach leadership on introducing WIP limits and Flow Efficiency?",
    "What key metrics should an Agile Coach measure across an enterprise portfolio?",
    "How do I transition a team from SAFe to a lighter LeSS framework?"
  ],
  scrum: [
    "What are the best retrospective techniques for a remote team experiencing low energy?",
    "How to deal with a Product Owner who constantly changes Sprint Goals mid-sprint?",
    "How do I facilitate Sprint Planning when developers say user stories lack detail?",
    "How should a Scrum Master help a team reduce technical debt in sprint cycles?"
  ],
  product: [
    "How do I calculate WSJF (Weighted Shortest Job First) for backlog prioritization?",
    "Write a high-quality INVEST user story with Gherkin acceptance criteria for user auth.",
    "What is the difference between Product Discovery and Delivery in outcome trees?",
    "How do I align Product Backlog Refinement with quarterly OKRs?"
  ]
};

export default function ChatInterface({ activePersona, setActivePersona, apiKey }) {
  const persona = PERSONA_CONFIGS[activePersona] || PERSONA_CONFIGS.coach;

  const [messages, setMessages] = useState([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: `Hello! I am your **${persona.name}** AI partner powered by Vector RAG.\n\nAsk me anything about framework rules, retrospective facilitation, backlog prioritization, or coaching interventions. I will retrieve context from our indexed Agile knowledge base to ground my guidance.`,
      retrievedChunks: [],
      retrievalMeta: null,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [expandedSourceMsgId, setExpandedSourceMsgId] = useState(null);
  const [copiedMsgId, setCopiedMsgId] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle Send Query
  const handleSend = async (queryText = inputQuery) => {
    const query = queryText.trim();
    if (!query || isLoading) return;

    setInputQuery('');

    // Add User Message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Step 1: Query Vector Engine
      setLoadingStep('Tokenizing query & calculating vector space embedding...');
      await new Promise(r => setTimeout(r, 250));

      const ragIndex = getRagIndex();
      setLoadingStep(`Searching vector chunks in Agile Knowledge Base...`);
      await new Promise(r => setTimeout(r, 250));

      const searchResult = ragIndex.search(query, 4);

      setLoadingStep(`Retrieved ${searchResult.topChunks.length} relevant chunks. Augmenting context...`);
      await new Promise(r => setTimeout(r, 300));

      setLoadingStep(`Synthesizing response via ${persona.name} persona...`);

      // Step 2: Generate LLM Response with Context
      const responseObj = await generateRagResponse(
        query, 
        searchResult.topChunks, 
        activePersona, 
        apiKey
      );

      // Add Assistant Response
      const assistantMsg = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseObj.text,
        retrievedChunks: searchResult.topChunks,
        retrievalMeta: {
          executionTimeMs: searchResult.executionTimeMs,
          totalMatches: searchResult.totalMatches,
          queryTokens: searchResult.queryTokens,
          modelName: responseObj.modelName,
          isLiveGemini: responseObj.isLiveGemini
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Error generating RAG response:", err);
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        sender: 'assistant',
        text: `⚠️ **An error occurred while retrieving or processing your request.**\n\n${err.message}`,
        retrievedChunks: [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
      setLoadingStep('');
    }
  };

  const handleCopyText = (msgId, text) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(msgId);
    setTimeout(() => setCopiedMsgId(null), 1500);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'assistant',
        text: `Conversation reset. Ready for your next query as **${persona.name}**.`,
        retrievedChunks: [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8.5rem)] max-w-6xl mx-auto w-full px-2 sm:px-4 py-3">
      
      {/* Top Bar: Persona Switcher & Options */}
      <div className="glass-panel rounded-2xl p-3 mb-3 flex flex-wrap items-center justify-between gap-3 border border-slate-800">
        
        {/* Active Persona Banner */}
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${persona.color} p-0.5 flex items-center justify-center shadow-lg shadow-purple-950/50`}>
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-xl">
              {persona.avatar}
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-white">{persona.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${persona.badgeColor} font-semibold`}>
                Active Persona
              </span>
            </div>
            <p className="text-xs text-slate-400">{persona.title}</p>
          </div>
        </div>

        {/* Persona Selector for Mobile / Quick Change */}
        <div className="flex items-center space-x-2">
          <div className="flex sm:hidden space-x-1">
            {Object.values(PERSONA_CONFIGS).map(p => (
              <button
                key={p.id}
                onClick={() => setActivePersona(p.id)}
                className={`p-2 rounded-lg text-sm ${activePersona === p.id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                {p.avatar}
              </button>
            ))}
          </div>

          <button
            onClick={handleClearHistory}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Chat</span>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}
            >
              
              {/* Sender Tag */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-400 px-1">
                {isUser ? (
                  <>
                    <span>You</span>
                    <User className="w-3 h-3 text-indigo-400" />
                  </>
                ) : (
                  <>
                    <Bot className="w-3 h-3 text-purple-400" />
                    <span>{persona.name} AI</span>
                    {msg.retrievalMeta?.isLiveGemini && (
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] border border-emerald-500/30">
                        Gemini 2.5
                      </span>
                    )}
                  </>
                )}
                <span>• {msg.timestamp}</span>
              </div>

              {/* Message Box */}
              <div
                className={`relative max-w-3xl rounded-2xl p-4 text-sm leading-relaxed shadow-lg ${
                  isUser
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none'
                    : 'glass-panel bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}
              >
                {/* Formatting Markdown-style Text */}
                <div className="whitespace-pre-wrap font-sans space-y-2">
                  {msg.text}
                </div>

                {/* Assistant Copy Action */}
                {!isUser && (
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    
                    {/* RAG Context Sources Trigger */}
                    {msg.retrievedChunks && msg.retrievedChunks.length > 0 ? (
                      <button
                        onClick={() => setExpandedSourceMsgId(expandedSourceMsgId === msg.id ? null : msg.id)}
                        className="flex items-center space-x-1.5 text-indigo-400 hover:text-indigo-300 font-medium transition"
                      >
                        <Database className="w-3.5 h-3.5 text-indigo-400" />
                        <span>RAG Sources ({msg.retrievedChunks.length} chunks)</span>
                        {expandedSourceMsgId === msg.id ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-500">General Guidance</span>
                    )}

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopyText(msg.id, msg.text)}
                      className="flex items-center space-x-1 hover:text-white transition"
                    >
                      {copiedMsgId === msg.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Expandable RAG Context Drawer */}
                {!isUser && expandedSourceMsgId === msg.id && msg.retrievedChunks && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-semibold text-indigo-300 border-b border-slate-800 pb-2">
                      <div className="flex items-center space-x-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Vector Retrieval Context</span>
                      </div>
                      {msg.retrievalMeta && (
                        <span className="text-[10px] text-slate-500">
                          {msg.retrievalMeta.executionTimeMs}ms execution time
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {msg.retrievedChunks.map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-slate-200">
                              [{idx + 1}] {item.chunk.title}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[10px] border border-indigo-500/30">
                              {item.similarityPercentage}% match
                            </span>
                          </div>

                          <p className="text-slate-400 text-[11px] line-clamp-3 italic mb-2">
                            "{item.chunk.content}"
                          </p>

                          <div className="flex flex-wrap gap-1 items-center">
                            <span className="text-[10px] text-slate-500 mr-1">Matched terms:</span>
                            {item.matchedTerms.map((term, tIdx) => (
                              <span key={tIdx} className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                                {term}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start space-x-3 p-3 rounded-2xl glass-panel bg-slate-900/80 border border-indigo-500/30 max-w-md animate-pulse">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/30 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-indigo-300">RAG Vector Pipeline Active</span>
              </div>
              <p className="text-xs text-slate-400">{loadingStep}</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Bar */}
      {messages.length <= 2 && (
        <div className="my-2 pt-2 border-t border-slate-800/80">
          <div className="flex items-center space-x-1 text-xs text-slate-400 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-semibold text-slate-300">Suggested Questions for {persona.name}:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {QUICK_PROMPTS[activePersona]?.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-left p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/40 text-xs text-slate-300 transition line-clamp-2"
              >
                ⚡ {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Query Input Box */}
      <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="mt-2 relative">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            disabled={isLoading}
            placeholder={`Ask ${persona.name} (e.g. "How to facilitate retrospective for remote team?")...`}
            className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition shadow-inner"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isLoading}
            className="absolute right-2 p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:opacity-40 text-white transition shadow-md shadow-indigo-600/30"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>

    </div>
  );
}
