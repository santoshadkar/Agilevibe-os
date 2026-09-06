import React from 'react';
import { ShieldCheck, BookOpen, CheckSquare, Map, Database, FileText, BarChart3, Sun, Moon } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, readinessScore, theme, toggleTheme }) {
  const navItems = [
    { id: 'overview', label: 'Standard Details', icon: BookOpen },
    { id: 'assessment', label: 'Self-Assessment', icon: CheckSquare },
    { id: 'roadmap', label: 'Readiness Roadmap', icon: Map },
    { id: 'soa', label: 'Annex A & SoA', icon: Database },
    { id: 'documents', label: 'Mandatory Docs', icon: FileText },
    { id: 'report', label: 'Executive Report', icon: BarChart3 }
  ];

  return (
    <header className="navbar">
      <div className="nav-content">
        <div className="nav-brand">
          <div className="brand-icon">
            <ShieldCheck size={24} />
          </div>
          <div>
            <span style={{ fontWeight: 800 }}>ISO 27001</span>
            <span style={{ fontWeight: 300, marginLeft: '6px', color: 'var(--accent-cyan)' }}>Readiness</span>
          </div>
          <span className="brand-badge">2022 Revision</span>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="nav-actions">
          <div className="readiness-pill">
            <span style={{ color: 'var(--text-muted)' }}>Readiness:</span>
            <span className="pill-val">{readinessScore}%</span>
          </div>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
