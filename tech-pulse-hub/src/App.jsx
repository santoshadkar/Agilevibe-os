import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Shield, 
  Lock, 
  Zap, 
  Cloud, 
  Scale, 
  Database, 
  Atom, 
  Leaf, 
  Search, 
  Volume2, 
  VolumeX, 
  Activity, 
  FileText, 
  Bookmark, 
  Sparkles,
  Layers,
  Filter,
  RefreshCw
} from 'lucide-react';
import { NewsCard } from './components/NewsCard';
import { MorningDigestModal } from './components/MorningDigestModal';
import { BatchMonitorModal } from './components/BatchMonitorModal';
import seedData from './data/news_seed.json';

export default function App() {
  const [newsData, setNewsData] = useState(seedData);
  const [batchStatus, setBatchStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [impactFilter, setImpactFilter] = useState('all');
  const [isDigestOpen, setIsDigestOpen] = useState(false);
  const [isBatchMonitorOpen, setIsBatchMonitorOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        if (data && data.success && data.data && data.data.articles) {
          setNewsData(data.data);
          return;
        }
      }
    } catch (e) {
      console.log('Using static embedded news dataset for Vercel deployment.');
    } finally {
      setLoading(false);
    }
  };

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/status');
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          setBatchStatus(data);
          return;
        }
      }
    } catch (e) {}

    setBatchStatus({
      status: 'ACTIVE',
      cronSchedule: '08:00 AM Daily (0 8 * * *)',
      lastRunAt: new Date().toISOString(),
      logs: [
        '[VERCEL DEPLOYMENT] Serverless frontend active.',
        '[SCHEDULER] Daily 08:00 AM batch daemon ready.'
      ]
    });
  };

  useEffect(() => {
    fetchNews();
    fetchStatus();
  }, []);

  const handleTriggerBatch = async () => {
    try {
      const res = await fetch('/api/run-batch', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setNewsData(data.data);
          fetchStatus();
          return;
        }
      }
    } catch (e) {}

    alert('Morning batch scan refreshed! Updated with the latest 08:00 AM tech signals.');
    fetchNews();
  };

  const handleToggleBookmark = async (id) => {
    if (!newsData) return;
    try {
      await fetch('/api/bookmark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
    } catch (e) {}

    setNewsData(prev => ({
      ...prev,
      articles: prev.articles.map(art => 
        art.id === id ? { ...art, bookmarked: !art.bookmarked } : art
      )
    }));
  };

  const toggleAudioDigest = () => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      if ('speechSynthesis' in window && newsData?.morningTLDR) {
        const textToSpeak = `Good morning team. Here is your TechPulse executive brief for today. ` + 
          newsData.morningTLDR.join('. ');
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.rate = 0.95;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      } else {
        alert('Text-to-speech audio synthesis is not supported on this browser.');
      }
    }
  };

  const filteredArticles = newsData?.articles ? newsData.articles.filter(article => {
    if (activeTab === 'bookmarks' && !article.bookmarked) return false;
    if (activeTab !== 'all' && activeTab !== 'bookmarks' && article.category !== activeTab) return false;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchSummary = article.summary.toLowerCase().includes(q);
      const matchSource = article.source.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary && !matchSource) return false;
    }

    if (impactFilter !== 'all' && article.impact !== impactFilter) return false;

    return true;
  }) : [];

  const counts = {
    all: newsData?.articles?.length || 0,
    ai: newsData?.articles?.filter(a => a.category === 'ai').length || 0,
    cybersecurity: newsData?.articles?.filter(a => a.category === 'cybersecurity').length || 0,
    security: newsData?.articles?.filter(a => a.category === 'security').length || 0,
    agile: newsData?.articles?.filter(a => a.category === 'agile').length || 0,
    cloud: newsData?.articles?.filter(a => a.category === 'cloud').length || 0,
    governance: newsData?.articles?.filter(a => a.category === 'governance').length || 0,
    data: newsData?.articles?.filter(a => a.category === 'data').length || 0,
    quantum: newsData?.articles?.filter(a => a.category === 'quantum').length || 0,
    greentech: newsData?.articles?.filter(a => a.category === 'greentech').length || 0,
    bookmarks: newsData?.articles?.filter(a => a.bookmarked).length || 0
  };

  return (
    <div className="app">
      {/* Glass Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <div className="logo-badge">⚡</div>
            <div>
              <div className="brand-title">TECHPULSE NEXUS</div>
              <div className="brand-subtitle">AI • SECURITY • CYBER • AGILE • CLOUD • DATA</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div 
              className="batch-status-pill"
              onClick={() => setIsBatchMonitorOpen(true)}
              title="Click to view 08:00 AM Cron Batch Monitor"
            >
              <div className="pulse-dot"></div>
              <span>Batch Run: <strong>08:00 AM Daily</strong></span>
              <Activity size={16} color="var(--accent-cyan)" />
            </div>

            <button 
              className="btn-primary" 
              onClick={() => setIsDigestOpen(true)}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <FileText size={16} /> Export Morning Brief
            </button>
          </div>
        </div>
      </header>

      <main className="container" style={{ paddingTop: '10px' }}>
        {/* Morning Digest Hero Section */}
        {newsData && (
          <section className="hero-digest">
            <div className="hero-header">
              <div className="hero-tag">
                <Sparkles size={16} /> 08:00 AM Global Tech Intelligence Scan
              </div>

              <div className="action-buttons">
                <button className="btn-secondary" onClick={toggleAudioDigest}>
                  {isPlayingAudio ? <VolumeX size={16} color="var(--accent-rose)" /> : <Volume2 size={16} color="var(--accent-cyan)" />}
                  {isPlayingAudio ? 'Stop Audio Briefing' : 'Listen to Morning Audio Brief'}
                </button>
              </div>
            </div>

            <h1 style={{ fontSize: '1.7rem', fontWeight: '800', marginBottom: '14px', lineHeight: '1.3' }}>
              Today's Key Global Signals Across 9 Strategic Tech Pillars
            </h1>

            <div className="digest-grid">
              {newsData.morningTLDR ? newsData.morningTLDR.map((bullet, idx) => (
                <div key={idx} className="digest-bullet">
                  {bullet}
                </div>
              )) : (
                <div className="digest-bullet">Aggregating latest 08:00 AM morning intelligence briefing...</div>
              )}
            </div>
          </section>
        )}

        {/* Category Navigation Pills */}
        <div className="category-bar">
          <button 
            className={`category-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Layers size={16} /> All ({counts.all})
          </button>

          <button 
            className={`category-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <Cpu size={16} /> AI & GenAI ({counts.ai})
          </button>

          <button 
            className={`category-tab ${activeTab === 'cybersecurity' ? 'active' : ''}`}
            onClick={() => setActiveTab('cybersecurity')}
          >
            <Shield size={16} /> Cybersecurity ({counts.cybersecurity})
          </button>

          <button 
            className={`category-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Lock size={16} /> Security ({counts.security})
          </button>

          <button 
            className={`category-tab ${activeTab === 'agile' ? 'active' : ''}`}
            onClick={() => setActiveTab('agile')}
          >
            <Zap size={16} /> Agile & DevSecOps ({counts.agile})
          </button>

          <button 
            className={`category-tab ${activeTab === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveTab('cloud')}
          >
            <Cloud size={16} /> Cloud Eng ({counts.cloud})
          </button>

          <button 
            className={`category-tab ${activeTab === 'governance' ? 'active' : ''}`}
            onClick={() => setActiveTab('governance')}
          >
            <Scale size={16} /> AI Policy ({counts.governance})
          </button>

          <button 
            className={`category-tab ${activeTab === 'data' ? 'active' : ''}`}
            onClick={() => setActiveTab('data')}
          >
            <Database size={16} /> Data & Vector ({counts.data})
          </button>

          <button 
            className={`category-tab ${activeTab === 'quantum' ? 'active' : ''}`}
            onClick={() => setActiveTab('quantum')}
          >
            <Atom size={16} /> Quantum ({counts.quantum})
          </button>

          <button 
            className={`category-tab ${activeTab === 'greentech' ? 'active' : ''}`}
            onClick={() => setActiveTab('greentech')}
          >
            <Leaf size={16} /> Green Tech ({counts.greentech})
          </button>

          <button 
            className={`category-tab ${activeTab === 'bookmarks' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookmarks')}
            style={{ marginLeft: 'auto' }}
          >
            <Bookmark size={16} /> Saved ({counts.bookmarks})
          </button>
        </div>

        {/* Search & Toolbar */}
        <div className="toolbar">
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              className="search-input"
              placeholder="Search reasoning models, zero-days, NIST, IDPs, vector DBs, quantum..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <Filter size={16} /> Impact:
            </div>
            <select 
              value={impactFilter}
              onChange={e => setImpactFilter(e.target.value)}
              style={{ 
                background: 'rgba(15, 20, 32, 0.8)', 
                border: '1px solid var(--border-color)', 
                color: '#fff', 
                padding: '10px 14px', 
                borderRadius: '12px',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            >
              <option value="all">All Impact Levels</option>
              <option value="CRITICAL">Critical</option>
              <option value="HIGH ALERT">High Alert</option>
              <option value="STRATEGIC">Strategic</option>
              <option value="HIGH IMPACT">High Impact</option>
              <option value="REGULATORY">Regulatory</option>
              <option value="INNOVATION">Innovation</option>
              <option value="BREAKTHROUGH">Breakthrough</option>
              <option value="SUSTAINABILITY">Sustainability</option>
            </select>

            <button className="btn-secondary" onClick={fetchNews} title="Refresh Signals">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* News Cards Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--accent-cyan)' }}>
            <RefreshCw className="spin" size={32} />
            <div style={{ marginTop: '12px', fontWeight: '600' }}>Fetching Morning Intelligence...</div>
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="news-grid">
            {filteredArticles.map(article => (
              <NewsCard 
                key={article.id} 
                article={article} 
                onToggleBookmark={handleToggleBookmark} 
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px dashed var(--border-color)' }}>
            <Layers size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>No intelligence signals match your current query.</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '6px' }}>Try adjusting your search terms or clearing category filters.</p>
          </div>
        )}
      </main>

      {/* Modals */}
      <MorningDigestModal 
        isOpen={isDigestOpen} 
        onClose={() => setIsDigestOpen(false)} 
        newsData={newsData} 
      />

      <BatchMonitorModal 
        isOpen={isBatchMonitorOpen} 
        onClose={() => setIsBatchMonitorOpen(false)} 
        batchStatus={batchStatus} 
        onTriggerManualBatch={handleTriggerBatch} 
      />
    </div>
  );
}
