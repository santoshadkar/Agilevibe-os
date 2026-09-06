import React, { useState } from 'react';
import { ANNEX_A_CATEGORIES } from '../data/iso27001Data';
import { Database, Search, Filter, CheckCircle2, XCircle, Download, FileSpreadsheet, Edit3 } from 'lucide-react';

export default function SoaExplorer({ soaState, updateSoaControl, showToast }) {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingJustificationId, setEditingJustificationId] = useState(null);

  // Flatten all 93 controls
  const allControls = ANNEX_A_CATEGORIES.flatMap(cat => 
    cat.controls.map(ctrl => ({ ...ctrl, domainId: cat.id, domainName: cat.name }))
  );

  const filteredControls = allControls.filter(ctrl => {
    const matchesDomain = selectedDomain === 'all' || ctrl.domainId === selectedDomain;
    const matchesSearch = ctrl.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ctrl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ctrl.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const controlState = soaState[ctrl.id] || { status: 'included', justification: '' };
    const matchesStatus = statusFilter === 'all' || controlState.status === statusFilter;

    return matchesDomain && matchesSearch && matchesStatus;
  });

  // Calculate statistics
  let includedCount = 0;
  let excludedCount = 0;
  allControls.forEach(ctrl => {
    const st = soaState[ctrl.id]?.status || 'included';
    if (st === 'included') includedCount++;
    else if (st === 'excluded') excludedCount++;
  });

  const handleExportCsv = () => {
    const csvRows = [
      ["Control ID", "Control Name", "Domain", "Control Type", "Cybersecurity Concept", "SoA Status", "Justification / Notes"]
    ];

    allControls.forEach(ctrl => {
      const state = soaState[ctrl.id] || { status: 'included', justification: '' };
      csvRows.push([
        ctrl.id,
        `"${ctrl.name.replace(/"/g, '""')}"`,
        ctrl.domainName,
        ctrl.type,
        ctrl.concept,
        state.status.toUpperCase(),
        `"${(state.justification || '').replace(/"/g, '""')}"`
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ISO27001_Statement_of_Applicability.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Exported Statement of Applicability (SoA) to CSV!");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Card */}
      <div className="card">
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>
              <Database size={14} /> Annex A Controls & SoA Generator
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.2rem 0' }}>Statement of Applicability (SoA) Builder</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Manage all 93 ISO/IEC 27001:2022 Annex A controls. Define inclusion/exclusion decisions and document justifications for audit readiness.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Included Controls</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>{includedCount} / 93</div>
            </div>
            <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Excluded Controls</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-rose)' }}>{excludedCount} / 93</div>
            </div>
            <button className="btn btn-primary" onClick={handleExportCsv}>
              <Download size={16} /> Export SoA CSV
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <select
              className="select-control"
              style={{ width: '220px' }}
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
            >
              <option value="all">All Domains (93 Controls)</option>
              {ANNEX_A_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.id} - {cat.name} ({cat.count})</option>
              ))}
            </select>

            <select
              className="select-control"
              style={{ width: '180px' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All SoA Statuses</option>
              <option value="included">Included Only</option>
              <option value="excluded">Excluded Only</option>
            </select>

            <input
              type="text"
              className="input-control"
              style={{ width: '220px' }}
              placeholder="Search control ID or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Showing {filteredControls.length} of 93 controls
          </div>
        </div>
      </div>

      {/* Controls Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredControls.map((ctrl) => {
          const currentState = soaState[ctrl.id] || { status: 'included', justification: '' };
          const isIncluded = currentState.status === 'included';

          return (
            <div
              key={ctrl.id}
              className="card"
              style={{
                borderLeft: isIncluded ? '4px solid var(--accent-emerald)' : '4px solid var(--accent-rose)',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ maxWidth: '800px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span className="badge badge-purple">{ctrl.id}</span>
                    <span className="badge badge-cyan">{ctrl.type}</span>
                    <span className="badge badge-amber">{ctrl.concept}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{ctrl.domainName}</span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{ctrl.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {ctrl.desc}
                  </p>
                </div>

                {/* Inclusion Toggle Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => {
                      updateSoaControl(ctrl.id, 'included', currentState.justification);
                      showToast(`Set ${ctrl.id} to INCLUDED`);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: isIncluded ? 'var(--accent-emerald)' : 'var(--bg-primary)',
                      color: isIncluded ? '#000000' : 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      fontWeight: isIncluded ? 700 : 500,
                      fontSize: '0.82rem'
                    }}
                  >
                    <CheckCircle2 size={16} /> Included
                  </button>

                  <button
                    onClick={() => {
                      updateSoaControl(ctrl.id, 'excluded', currentState.justification || 'Control not applicable to scope');
                      showToast(`Set ${ctrl.id} to EXCLUDED`);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-md)',
                      background: !isIncluded ? 'var(--accent-rose)' : 'var(--bg-primary)',
                      color: !isIncluded ? '#ffffff' : 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      fontWeight: !isIncluded ? 700 : 500,
                      fontSize: '0.82rem'
                    }}
                  >
                    <XCircle size={16} /> Excluded
                  </button>
                </div>
              </div>

              {/* Justification note input */}
              <div style={{ marginTop: '0.85rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    SoA Justification / Risk Rationale:
                  </span>
                </div>
                <input
                  type="text"
                  className="input-control"
                  style={{ fontSize: '0.82rem', padding: '0.45rem 0.75rem' }}
                  placeholder={isIncluded ? "e.g. Mandatory control required by risk assessment & GDPR..." : "e.g. Excluded because organization operates 100% remote without physical data centers..."}
                  value={currentState.justification || ''}
                  onChange={(e) => updateSoaControl(ctrl.id, currentState.status, e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
