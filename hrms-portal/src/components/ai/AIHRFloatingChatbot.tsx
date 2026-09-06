'use client';

import React, { useState } from 'react';
import { ChatMessage, Employee } from '../../types/hrms';
import { getAIHRResponse } from '../../lib/aiEngine';
import { Bot, Send, X, Globe, Sparkles, User, RefreshCw } from 'lucide-react';

interface AIHRFloatingChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  currentEmployee?: Employee;
}

export const AIHRFloatingChatbot: React.FC<AIHRFloatingChatbotProps> = ({
  isOpen,
  onClose,
  currentEmployee
}) => {
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'AI_ASSISTANT',
      text: `Hello ${currentEmployee ? currentEmployee.name : 'Team Member'}! I am your AI HR Assistant for Windmill Rings Manufacturing. Ask me about leave balances, night shift allowances, EPF/ESI rules, or shopfloor safety.`,
      language: 'EN',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: ['Apply Leave', 'Night Shift Allowance', 'Explain PF Rules', 'नाइट शिफ्ट नियम']
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'USER',
      text: query,
      language,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = getAIHRResponse(query, currentEmployee, language);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'AI_ASSISTANT',
        text: aiReplyText,
        language,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 w-96 rounded-2xl glass-modal border border-purple-500/30 flex flex-col shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/90 to-purple-900/90 px-4 py-3 border-b border-purple-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/30 text-purple-300 border border-purple-400/30">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>AI HR Assistant</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            </h3>
            <p className="text-[10px] text-purple-200">Policy, Leave & Statutory Support</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={() => {
              const nextLang = language === 'EN' ? 'HI' : 'EN';
              setLanguage(nextLang);
              handleSend(nextLang === 'HI' ? 'हिंदी में सहायता चाहिए' : 'Switch to English');
            }}
            className="flex items-center gap-1 rounded-md bg-purple-950/80 px-2 py-1 text-[11px] font-bold text-purple-300 border border-purple-700/50 hover:bg-purple-800/50 transition"
          >
            <Globe className="h-3 w-3 text-purple-400" />
            <span>{language === 'EN' ? 'English' : 'हिंदी'}</span>
          </button>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="p-4 h-80 overflow-y-auto space-y-3 bg-gray-950/70 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'USER' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
              {msg.sender === 'USER' ? (
                <>
                  <span>You</span>
                  <User className="h-3 w-3" />
                </>
              ) : (
                <>
                  <Bot className="h-3 w-3 text-purple-400" />
                  <span>AI Assistant ({msg.language})</span>
                </>
              )}
            </div>

            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'USER'
                  ? 'bg-blue-600 text-white rounded-br-none shadow-md shadow-blue-500/20'
                  : 'bg-gray-900/90 text-gray-200 border border-purple-500/20 rounded-bl-none shadow-md'
              }`}
            >
              {msg.text}
            </div>

            {/* Suggested Chips */}
            {msg.suggestedActions && msg.suggestedActions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {msg.suggestedActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(action)}
                    className="rounded-full bg-purple-950/70 hover:bg-purple-800/70 text-purple-300 text-[10px] px-2.5 py-0.5 border border-purple-700/40 transition"
                  >
                    ⚡ {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-purple-400 text-[11px] animate-pulse">
            <RefreshCw className="h-3 w-3 animate-spin" />
            <span>AI Assistant is thinking...</span>
          </div>
        )}
      </div>

      {/* Input footer */}
      <div className="p-3 bg-gray-900 border-t border-gray-800 flex items-center gap-2">
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={language === 'EN' ? "Ask HR question in English..." : "अपनी समस्या हिंदी में लिखें..."}
          className="flex-1 rounded-xl bg-gray-950 px-3 py-2 text-xs text-gray-200 placeholder-gray-500 border border-gray-800 focus:border-purple-500 focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 hover:scale-105 transition"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
