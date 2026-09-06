import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import RagVisualizer from './components/RagVisualizer';
import DocumentManager from './components/DocumentManager';
import ArtifactGenerator from './components/ArtifactGenerator';
import KnowledgeBaseViewer from './components/KnowledgeBaseViewer';
import ApiKeyModal from './components/ApiKeyModal';
import { INITIAL_KNOWLEDGE_BASE } from './data/agileKnowledgeBase';
import { getStoredCustomDocuments } from './utils/ragEngine';

const STORAGE_KEY_API_KEY = 'agilemind_gemini_api_key';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [activePersona, setActivePersona] = useState('coach');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(STORAGE_KEY_API_KEY) || '');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [corpusCount, setCorpusCount] = useState(() => INITIAL_KNOWLEDGE_BASE.length + getStoredCustomDocuments().length);

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    if (key) {
      localStorage.setItem(STORAGE_KEY_API_KEY, key);
    } else {
      localStorage.removeItem(STORAGE_KEY_API_KEY);
    }
  };

  const handleIndexUpdated = () => {
    setCorpusCount(INITIAL_KNOWLEDGE_BASE.length + getStoredCustomDocuments().length);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activePersona={activePersona}
        setActivePersona={setActivePersona}
        apiKey={apiKey}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        corpusCount={corpusCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'chat' && (
          <ChatInterface
            activePersona={activePersona}
            setActivePersona={setActivePersona}
            apiKey={apiKey}
          />
        )}

        {activeTab === 'visualizer' && (
          <RagVisualizer />
        )}

        {activeTab === 'artifacts' && (
          <ArtifactGenerator apiKey={apiKey} />
        )}

        {activeTab === 'documents' && (
          <DocumentManager onIndexUpdated={handleIndexUpdated} />
        )}

        {activeTab === 'corpus' && (
          <KnowledgeBaseViewer />
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-slate-800/80 bg-slate-950/60 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <span className="font-semibold text-slate-400">AgileMind RAG Intelligence</span> • Built for Agile Coaches, Scrum Masters & Product Managers
          </div>
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="text-slate-400">Client-Side Vector Engine</span>
            <span>•</span>
            <span className="text-indigo-400">TF-IDF & Cosine Similarity</span>
            <span>•</span>
            <span className="text-purple-400">Gemini 2.5 Integration</span>
          </div>
        </div>
      </footer>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

    </div>
  );
}
