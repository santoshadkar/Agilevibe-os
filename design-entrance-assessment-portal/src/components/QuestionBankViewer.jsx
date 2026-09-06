import React, { useState } from 'react';
import { BookOpen, Search, Filter, Layers, ArrowLeft, Download } from 'lucide-react';
import MCQQuestion from './questionTypes/MCQQuestion';
import MSQQuestion from './questionTypes/MSQQuestion';
import NATQuestion from './questionTypes/NATQuestion';
import MatchColumnQuestion from './questionTypes/MatchColumnQuestion';
import FillBlankQuestion from './questionTypes/FillBlankQuestion';
import SubjectiveQuestion from './questionTypes/SubjectiveQuestion';
import DrawingCanvas from './questionTypes/DrawingCanvas';
import { downloadQuestionBankPDF } from '../utils/pdfGenerator';

export default function QuestionBankViewer({ allQuestions = {}, onClose }) {
  const [selectedExam, setSelectedExam] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const seedList = allQuestions.seed || [];
  const mitidList = allQuestions.mitid || [];
  const uceedList = allQuestions.uceed || [];
  const mahBdesList = allQuestions.mah_bdes || [];
  const acetList = allQuestions.acet || [];

  let combined = [];
  if (selectedExam === 'seed') combined = seedList;
  else if (selectedExam === 'mitid') combined = mitidList;
  else if (selectedExam === 'uceed') combined = uceedList;
  else if (selectedExam === 'mah_bdes') combined = mahBdesList;
  else if (selectedExam === 'acet') combined = acetList;
  else combined = [...seedList, ...mitidList, ...uceedList, ...mahBdesList, ...acetList];

  const filtered = combined.filter(q => {
    const matchesType = selectedType === 'all' || q.type === selectedType;
    const matchesQuery = !searchQuery || 
      (q.question && q.question.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.topic && q.topic.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesQuery;
  });

  const handleExportFilteredPDF = () => {
    const titleLabel = selectedExam === 'all' ? 'All Entrance Exams' : selectedExam.toUpperCase();
    downloadQuestionBankPDF(filtered, `${titleLabel} Question Bank`, `DesignPrep_PRO_${selectedExam}_Questions`);
  };

  return (
    <div style={{ maxWidth: '1240px', margin: '32px auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={onClose} className="btn-secondary">
            <ArrowLeft size={16} /> Back to Portal
          </button>
          <div>
            <h1 style={{ fontSize: '1.8rem', color: '#fff' }}>Question Bank Repository</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Browse and study {filtered.length} authentic entrance exam questions with complete solution keys
            </p>
          </div>
        </div>

        <button
          onClick={handleExportFilteredPDF}
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '10px 20px' }}
        >
          <Download size={18} /> Export PDF Booklet ({filtered.length} Qs)
        </button>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Search Field */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '10px 16px', borderRadius: '12px', flex: 1, maxWidth: '380px' }}>
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topic, keyword (e.g. Perspective, Physics, Color)..."
            style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '0.92rem' }}
          />
        </div>

        {/* Exam Module Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Exam:</span>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            style={{ background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', fontSize: '0.88rem' }}
          >
            <option value="all">All 5 Exams (SEED, MITID, UCEED, MAH-CET, ACET)</option>
            <option value="seed">SEED Symbiosis (120 Qs)</option>
            <option value="mitid">MITID DAT (40 Qs)</option>
            <option value="uceed">IIT UCEED National (70 Qs)</option>
            <option value="mah_bdes">MAH-B.Design CET (100 Qs)</option>
            <option value="acet">ACET Exam (200 Qs)</option>
          </select>
        </div>

        {/* Question Format Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Format:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', fontSize: '0.88rem' }}
          >
            <option value="all">All Question Types</option>
            <option value="mcq">MCQs</option>
            <option value="msq">MSQs (Multiple Select)</option>
            <option value="nat">NAT (Numerical)</option>
            <option value="match_column">Match Columns</option>
            <option value="fill_blank">Fill-in-the-Blanks</option>
            <option value="subjective">Subjective Scenarios</option>
            <option value="sketching">Drawing Canvas Prompts</option>
          </select>
        </div>
      </div>

      {/* Question Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filtered.map((q, idx) => (
          <div key={q.id || idx} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="badge badge-cyan">
                {q.id?.startsWith('seed') ? 'SEED' : q.id?.startsWith('mitid') ? 'MITID' : q.id?.startsWith('uceed') ? 'IIT UCEED' : q.id?.startsWith('mah') ? 'MAH-CET' : 'ACET'} • Q{q.number}
              </span>
              <span className="badge badge-purple">{q.topic || 'General'}</span>
            </div>

            {q.type === 'mcq' && <MCQQuestion question={q} isReviewMode={true} />}
            {q.type === 'msq' && <MSQQuestion question={q} isReviewMode={true} />}
            {q.type === 'nat' && <NATQuestion question={q} isReviewMode={true} />}
            {q.type === 'match_column' && <MatchColumnQuestion question={q} isReviewMode={true} />}
            {q.type === 'fill_blank' && <FillBlankQuestion question={q} isReviewMode={true} />}
            {q.type === 'subjective' && <SubjectiveQuestion question={q} isReviewMode={true} />}
            {q.type === 'sketching' && <DrawingCanvas question={q} isReviewMode={true} />}
          </div>
        ))}
      </div>
    </div>
  );
}
