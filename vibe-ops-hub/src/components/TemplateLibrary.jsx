import React, { useState } from 'react';
import { PRODUCTION_TEMPLATES } from '../data/opsData';
import { FileText, Copy, Check, Download, Terminal, Code, Filter, BookOpen } from 'lucide-react';

export default function TemplateLibrary({ searchQuery, selectedPersona }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['all', 'AIOps & Observability', 'SRE Reliability', 'FinOps', 'SRE Operations', 'Forward Deployed Engineering'];

  const matchesSearch = (template) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return template.name.toLowerCase().includes(query) ||
           template.category.toLowerCase().includes(query) ||
           template.filename.toLowerCase().includes(query) ||
           template.description.toLowerCase().includes(query) ||
           template.code.toLowerCase().includes(query);
  };

  const matchesPersona = (template) => {
    if (!selectedPersona || selectedPersona === 'all') return true;
    const category = template.category.toLowerCase();
    if (selectedPersona === 'sre') return category.includes('sre') || category.includes('observability');
    if (selectedPersona === 'ml') return category.includes('engineering') || category.includes('aiops');
    if (selectedPersona === 'finops') return category.includes('finops');
    if (selectedPersona === 'exec') return true;
    return true;
  };

  const filteredTemplates = PRODUCTION_TEMPLATES.filter(t => {
    const categoryMatch = selectedCategory === 'all' || t.category === selectedCategory;
    return categoryMatch && matchesSearch(t) && matchesPersona(t);
  });

  const copyCode = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadTemplate = (template) => {
    const element = document.createElement("a");
    const file = new Blob([template.code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = template.filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px 60px 24px' }}>
      
      {/* Search/Persona Active Banner */}
      {(searchQuery || selectedPersona !== 'all') && (
        <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '12px 20px', borderRadius: '12px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#38bdf8' }}>
          <Filter size={16} />
          <div>
            <strong>Active Template Filters:</strong> {searchQuery && <span>Search: "{searchQuery}" </span>} {selectedPersona !== 'all' && <span>Persona: <strong>{selectedPersona.toUpperCase()}</strong></span>} ({filteredTemplates.length} templates matching)
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '20px', fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, marginBottom: '12px' }}>
          <FileText size={14} /> Ready-to-Use Artifacts
        </div>
        <h2 style={{ fontSize: '2.4rem', marginBottom: '8px' }}>
          Production <span className="gradient-text-triad">Copy-Paste Template Library</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '850px' }}>
          Download or copy production-ready OpenTelemetry configs, Prometheus burn-rate rules, FOCUS 1.0 SQL queries, Google SRE post-mortems, and FDE specs directly into your projects.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid transparent',
              background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255,255,255,0.03)',
              color: selectedCategory === cat ? '#38bdf8' : 'var(--text-muted)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem',
              whiteSpace: 'nowrap'
            }}
          >
            {cat === 'all' ? 'All Templates' : cat}
          </button>
        ))}
      </div>

      {/* Template Cards Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {filteredTemplates.map(template => (
          <div key={template.id} className="glass-panel" style={{ overflow: 'hidden' }}>
            
            {/* Template Header */}
            <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 10px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    {template.category}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    {template.filename}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{template.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '2px' }}>{template.description}</p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => copyCode(template.code, template.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', color: '#38bdf8', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  {copiedId === template.id ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copiedId === template.id ? "Copied to Clipboard!" : "Copy Code"}
                </button>

                <button
                  onClick={() => downloadTemplate(template)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
                >
                  <Download size={16} /> Download File
                </button>
              </div>
            </div>

            {/* Code Block */}
            <pre style={{ padding: '20px 24px', background: '#090d16', overflowX: 'auto', margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.6 }}>
              <code>{template.code}</code>
            </pre>

          </div>
        ))}
      </div>

    </section>
  );
}
