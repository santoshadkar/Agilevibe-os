import React, { useState } from 'react';
import { MANDATORY_DOCUMENTS } from '../data/iso27001Data';
import { FileText, CheckCircle2, Clock, AlertTriangle, FileCheck, Eye, Download, Info } from 'lucide-react';

const STATUS_CONFIG = {
  'not_started': { label: 'Not Started', color: 'var(--accent-rose)', badge: 'badge-rose' },
  'draft': { label: 'In Draft', color: 'var(--accent-amber)', badge: 'badge-amber' },
  'approved': { label: 'Approved', color: 'var(--accent-cyan)', badge: 'badge-cyan' },
  'audited': { label: 'Audited & Verified', color: 'var(--accent-emerald)', badge: 'badge-emerald' }
};

export default function DocumentTracker({ docState, updateDocStatus, showToast }) {
  const [selectedDocForGuidance, setSelectedDocForGuidance] = useState(null);

  const totalDocs = MANDATORY_DOCUMENTS.length;
  let readyDocsCount = 0;
  
  MANDATORY_DOCUMENTS.forEach(doc => {
    const status = docState[doc.id] || 'not_started';
    if (status === 'approved' || status === 'audited') {
      readyDocsCount++;
    }
  });

  const docProgress = Math.round((readyDocsCount / totalDocs) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Card */}
      <div className="card">
        <div className="card-glow" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
              <FileText size={14} /> Mandatory Documentation Governance
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0.2rem 0' }}>Mandatory Documents Tracker</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Track the drafting, management review, executive approval, and audit verification of mandatory ISO/IEC 27001 policies.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Doc Readiness</div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>
                {docProgress}%
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{readyDocsCount} of {totalDocs} Approved/Audited</div>
            </div>

            <div style={{ width: '120px' }}>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${docProgress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid-2">
        {MANDATORY_DOCUMENTS.map((doc) => {
          const currentStatus = docState[doc.id] || 'not_started';
          const cfg = STATUS_CONFIG[currentStatus];

          return (
            <div
              key={doc.id}
              className="card"
              style={{
                borderLeft: `4px solid ${cfg.color}`,
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge badge-purple">{doc.clause}</span>
                  <span className={`badge ${cfg.badge}`}>{cfg.label}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>{doc.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{doc.desc}</p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                {/* Status Selector */}
                <select
                  className="select-control"
                  style={{ width: '170px', fontSize: '0.82rem', padding: '0.4rem 0.6rem' }}
                  value={currentStatus}
                  onChange={(e) => {
                    updateDocStatus(doc.id, e.target.value);
                    showToast(`Updated status of "${doc.title}"`);
                  }}
                >
                  <option value="not_started">Not Started</option>
                  <option value="draft">In Draft</option>
                  <option value="approved">Approved</option>
                  <option value="audited">Audited & Verified</option>
                </select>

                <button
                  className="btn btn-secondary"
                  style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem' }}
                  onClick={() => setSelectedDocForGuidance(doc)}
                >
                  <Info size={14} /> Structure Guide
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Structure Guidance Modal */}
      {selectedDocForGuidance && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: '1.5rem'
        }}>
          <div className="card" style={{ maxWidth: '650px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge badge-purple">{selectedDocForGuidance.clause}</span>
              <button
                onClick={() => setSelectedDocForGuidance(null)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
              {selectedDocForGuidance.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {selectedDocForGuidance.desc}
            </p>

            <div style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-emerald)', marginBottom: '0.5rem' }}>Required Sections Auditor Expects:</h4>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Document Control Header (Title, Author, Approver, Version, Date).</li>
                <li>Purpose, Scope, and Target Audience.</li>
                <li>Policy Statements & Governance Mandatory Rules.</li>
                <li>Roles & Responsibilities (RACI Matrix).</li>
                <li>Exceptions Management & Non-Compliance Penalties.</li>
                <li>Review & Maintenance Schedule (Minimum Annual).</li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary" onClick={() => setSelectedDocForGuidance(null)}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
