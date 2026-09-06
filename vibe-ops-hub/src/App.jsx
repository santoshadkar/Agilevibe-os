import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TriadMatrix from './components/TriadMatrix';
import DomainView from './components/DomainView';
import Calculators from './components/Calculators';
import TeamAndRoles from './components/TeamAndRoles';
import InteractiveSimulators from './components/InteractiveSimulators';
import TemplateLibrary from './components/TemplateLibrary';
import { Layers, Search, Filter } from 'lucide-react';

export default function App() {
  const [activeDomain, setActiveDomain] = useState('aiops');
  const [activeView, setActiveView] = useState('deepdive');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('all');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Header Navigation */}
      <Navbar 
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedPersona={selectedPersona}
        setSelectedPersona={setSelectedPersona}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Hero Section */}
      <Hero 
        activeDomain={activeDomain}
        setActiveDomain={setActiveDomain}
        setActiveView={setActiveView}
      />

      {/* Global Search Banner when active */}
      {searchQuery && (
        <div style={{ maxWidth: '1400px', margin: '0 auto 20px auto', padding: '0 24px', width: '100%' }}>
          <div style={{ background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)', padding: '14px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#38bdf8', fontSize: '0.92rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Search size={18} />
              <span>Filtering VibeOps content for keyword: <strong>"{searchQuery}"</strong></span>
            </div>
            <button 
              onClick={() => setSearchQuery('')}
              style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Clear Search
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeView === 'deepdive' && (
          <DomainView 
            activeDomain={activeDomain}
            setActiveDomain={setActiveDomain}
            searchQuery={searchQuery}
            selectedPersona={selectedPersona}
          />
        )}

        {activeView === 'matrix' && (
          <TriadMatrix 
            setActiveDomain={setActiveDomain}
            setActiveView={setActiveView}
          />
        )}

        {activeView === 'calculators' && (
          <Calculators />
        )}

        {activeView === 'team-roles' && (
          <TeamAndRoles 
            searchQuery={searchQuery}
            selectedPersona={selectedPersona}
          />
        )}

        {activeView === 'simulators' && (
          <InteractiveSimulators />
        )}

        {activeView === 'templates' && (
          <TemplateLibrary 
            searchQuery={searchQuery}
            selectedPersona={selectedPersona}
          />
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(11, 15, 25, 0.95)', padding: '32px 24px', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={18} color="#fff" />
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <strong>VibeOps Masterclass Hub</strong> • Systems • Teams • Roles • Live Labs & Production Templates
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-dim)', flexWrap: 'wrap' }}>
            <span>AIOps Observability</span>
            <span>•</span>
            <span>MLOps Lifecycle</span>
            <span>•</span>
            <span>FinOps Unit Economics</span>
            <span>•</span>
            <span>Team Topologies & Roles</span>
            <span>•</span>
            <span>Live Labs & Templates</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
