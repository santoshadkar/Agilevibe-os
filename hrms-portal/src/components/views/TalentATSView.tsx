'use client';

import React, { useState } from 'react';
import { JobPosting, Candidate, UserRole, OfferLetterRecord } from '../../types/hrms';
import { matchCandidateResume, generateAIJobDescription } from '../../lib/aiEngine';
import { RotheErdeLogo } from '../ui/RotheErdeLogo';
import { 
  Briefcase, 
  Sparkles, 
  Plus, 
  FileText, 
  CheckCircle, 
  UserCheck, 
  ArrowRight, 
  X, 
  AlertCircle,
  Download,
  Send,
  Building2,
  Calendar,
  DollarSign
} from 'lucide-react';

interface TalentATSViewProps {
  jobs: JobPosting[];
  candidates: Candidate[];
  currentRole: UserRole;
  offerLetters?: OfferLetterRecord[];
  onUpdateCandidateStage: (candidateId: string, stage: any) => void;
  onAddCandidate: (candidate: Candidate) => void;
  onGenerateOfferLetter?: (offer: OfferLetterRecord) => void;
}

export const TalentATSView: React.FC<TalentATSViewProps> = ({
  jobs,
  candidates,
  currentRole,
  offerLetters = [],
  onUpdateCandidateStage,
  onAddCandidate,
  onGenerateOfferLetter
}) => {
  const [subTab, setSubTab] = useState<'pipeline' | 'offer-letters'>('pipeline');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [showJDModal, setShowJDModal] = useState(false);
  const [jdPromptTitle, setJdPromptTitle] = useState('Hydraulic Press Maintenance Engineer');
  const [jdPromptDept, setJdPromptDept] = useState('Plant Maintenance');
  const [generatedJDText, setGeneratedJDText] = useState('');

  // Resume Upload Simulator State
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [rawResumeInput, setRawResumeInput] = useState('');
  const [resumeMatchResult, setResumeMatchResult] = useState<any>(null);

  // Offer Letter Modal State
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerName, setOfferName] = useState('Vikram Salunkhe');
  const [offerEmail, setOfferEmail] = useState('vikram.salunkhe@gmail.com');
  const [offerDesignation, setOfferDesignation] = useState('Senior Ring Forging Engineer');
  const [offerDept, setOfferDept] = useState<any>('Ring Forging');
  const [offerCTC, setOfferCTC] = useState('950000');
  const [offerJoiningDate, setOfferJoiningDate] = useState('2026-09-15');
  const [selectedOfferPreview, setSelectedOfferPreview] = useState<OfferLetterRecord | null>(null);

  const stages: ('APPLIED' | 'SCREENING' | 'INTERVIEW' | 'OFFER' | 'HIRED')[] = [
    'APPLIED', 'SCREENING', 'INTERVIEW', 'OFFER', 'HIRED'
  ];

  const activeInterviewsCount = candidates.filter(c => c.stage === 'INTERVIEW' || c.stage === 'SCREENING').length;
  const isHR = currentRole === 'HR_ADMIN';

  if (currentRole === 'PERMANENT_STAFF' || currentRole === 'DAILY_WAGE_WORKER') {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-rose-500/30 text-center space-y-4 max-w-2xl mx-auto my-12 shadow-2xl">
        <div className="h-12 w-12 rounded-2xl bg-rose-950 text-rose-400 flex items-center justify-center mx-auto border border-rose-800">
          <Briefcase className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">Talent ATS Restricted</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Recruitment ATS and applicant pipeline data is restricted to <strong>HR Administrators</strong> and <strong>Plant Supervisors</strong> to ensure confidentiality per ISO 27001 compliance standards.
          </p>
        </div>
      </div>
    );
  }

  const handleGenerateJD = () => {
    const text = generateAIJobDescription(jdPromptTitle, jdPromptDept);
    setGeneratedJDText(text);
  };

  const handleRunResumeMatch = () => {
    const targetJob = jobs[0];
    const text = rawResumeInput || "6 years of experience in seamless ring rolling for wind turbine gearboxes. Proficient in radial-axial hydraulic press control, thermal treatment monitoring, and ISO 9001 quality audits.";
    const match = matchCandidateResume(targetJob, text);
    setResumeMatchResult(match);
  };

  const handleGenerateOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const annualNum = Number(offerCTC) || 950000;
    const newOffer: OfferLetterRecord = {
      id: `ofr-${Date.now()}`,
      candidateName: offerName,
      candidateEmail: offerEmail,
      designation: offerDesignation,
      department: offerDept,
      annualCTC: annualNum,
      monthlyGross: Math.round(annualNum / 12),
      joiningDate: offerJoiningDate,
      status: 'OFFER_SENT',
      generatedOn: new Date().toISOString().split('T')[0]
    };

    if (onGenerateOfferLetter) onGenerateOfferLetter(newOffer);
    setShowOfferModal(false);
    setSelectedOfferPreview(newOffer);
    alert(`Official thyssenkrupp rothe erde Offer Letter generated and dispatched to ${offerName}!`);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/90 via-indigo-950/90 to-blue-950/90 p-6 border border-purple-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-purple-900/80 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-700">
              Rothe Erde India • Talent Acquisition & Offer Hub
            </span>
            <span className="text-xs text-gray-400">• Active Interviews Status & Offer Generation</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            Recruitment ATS, Active Interviews Tracker & Offer Letter Hub
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Track active candidate interview stages, parse resumes with AI, and generate official thyssenkrupp rothe erde Offer Letters.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isHR && (
            <button
              onClick={() => setShowOfferModal(true)}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
            >
              <FileText className="h-4 w-4" />
              <span>Generate New Offer Letter</span>
            </button>
          )}

          <button
            onClick={() => setShowJDModal(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI JD Generator</span>
          </button>
        </div>
      </div>

      {/* Sub Navigation & Interview Status Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-3 rounded-2xl">
        <div className="flex items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800">
          <button
            onClick={() => setSubTab('pipeline')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              subTab === 'pipeline' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Candidate Pipeline ({candidates.length})
          </button>
          <button
            onClick={() => setSubTab('offer-letters')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              subTab === 'offer-letters' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            Offer Letters Hub ({offerLetters.length})
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="rounded-xl bg-purple-950/80 px-3 py-1.5 border border-purple-700/60 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
            <span className="text-gray-300">Active Interviews Going On: <strong className="text-white">{activeInterviewsCount} Candidates</strong></span>
          </div>
        </div>
      </div>

      {/* SUB-TAB 1: KANBAN PIPELINE */}
      {subTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {stages.map(stage => {
            const stageCandidates = candidates.filter(c => c.stage === stage);
            return (
              <div key={stage} className="glass-panel p-3 rounded-2xl space-y-3 border border-gray-800">
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <span className="text-xs font-bold text-gray-300 uppercase">{stage}</span>
                  <span className="rounded-full bg-gray-800 px-2 py-0.5 text-[10px] font-extrabold text-purple-300">
                    {stageCandidates.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {stageCandidates.map(cand => (
                    <div key={cand.id} className="rounded-xl bg-gray-900/90 p-3 border border-gray-800 space-y-2 hover:border-purple-500/40 transition">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-white">{cand.name}</h4>
                        <span className="text-[10px] font-extrabold text-emerald-400">{cand.matchScore}% AI Match</span>
                      </div>
                      <p className="text-[10px] text-purple-300">{cand.jobTitle}</p>
                      <p className="text-[10px] text-gray-400">{cand.experienceYears} Years Exp • {cand.phone}</p>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                        <button
                          onClick={() => setSelectedCandidate(cand)}
                          className="text-[10px] font-semibold text-purple-300 hover:text-white"
                        >
                          View Resume AI
                        </button>
                        {stage !== 'HIRED' && (
                          <button
                            onClick={() => {
                              const nextStageIndex = stages.indexOf(stage) + 1;
                              onUpdateCandidateStage(cand.id, stages[nextStageIndex]);
                            }}
                            className="text-[10px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-0.5"
                          >
                            Advance <ArrowRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* SUB-TAB 2: OFFER LETTERS HUB */}
      {subTab === 'offer-letters' && (
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                <span>Rothe Erde India — Generated Offer Letters Register</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Official offer letters generated with statutory compensation breakdown (Basic, HRA, EPF 12%, ESI).
              </p>
            </div>

            {isHR && (
              <button
                onClick={() => setShowOfferModal(true)}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition"
              >
                <Plus className="h-4 w-4" />
                <span>+ Create Offer Letter</span>
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Candidate Name</th>
                  <th className="py-3 px-4">Designation & Dept</th>
                  <th className="py-3 px-4">Annual CTC</th>
                  <th className="py-3 px-4">Joining Date</th>
                  <th className="py-3 px-4">Offer Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {offerLetters.map(ofr => (
                  <tr key={ofr.id} className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-white">
                      {ofr.candidateName}
                      <span className="block text-[10px] text-gray-400 font-normal">{ofr.candidateEmail}</span>
                    </td>
                    <td className="py-3 px-4">
                      {ofr.designation}
                      <span className="block text-[10px] text-purple-300">{ofr.department}</span>
                    </td>
                    <td className="py-3 px-4 font-mono font-extrabold text-emerald-400">
                      ₹{ofr.annualCTC.toLocaleString('en-IN')} / yr
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-300">{ofr.joiningDate}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        ofr.status === 'ACCEPTED' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-blue-950 text-cyan-300 border border-blue-800'
                      }`}>
                        {ofr.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => setSelectedOfferPreview(ofr)}
                        className="rounded-lg bg-gray-800 px-3 py-1 text-xs font-semibold text-blue-400 hover:bg-gray-700 transition"
                      >
                        Preview Offer PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: GENERATE NEW OFFER LETTER */}
      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
              <div className="flex items-center gap-2 text-emerald-300">
                <FileText className="h-5 w-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Generate Official Offer Letter</h3>
              </div>
              <button onClick={() => setShowOfferModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleGenerateOfferSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Candidate Full Name</label>
                <input
                  type="text"
                  required
                  value={offerName}
                  onChange={(e) => setOfferName(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Candidate Email</label>
                <input
                  type="email"
                  required
                  value={offerEmail}
                  onChange={(e) => setOfferEmail(e.target.value)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Designation</label>
                  <input
                    type="text"
                    required
                    value={offerDesignation}
                    onChange={(e) => setOfferDesignation(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Department</label>
                  <select
                    value={offerDept}
                    onChange={(e) => setOfferDept(e.target.value as any)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="Ring Forging">Ring Forging</option>
                    <option value="CNC Machining">CNC Machining</option>
                    <option value="Quality Inspection">Quality Inspection</option>
                    <option value="Plant Maintenance">Plant Maintenance</option>
                    <option value="HR & Finance">HR & Finance</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Annual CTC (INR)</label>
                  <input
                    type="number"
                    required
                    value={offerCTC}
                    onChange={(e) => setOfferCTC(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Joining Date</label>
                  <input
                    type="date"
                    required
                    value={offerJoiningDate}
                    onChange={(e) => setOfferJoiningDate(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowOfferModal(false)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-emerald-500 transition"
                >
                  Generate & Dispatch Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* OFFER LETTER PREVIEW MODAL */}
      {selectedOfferPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
              <RotheErdeLogo size="sm" showText={true} />
              <button onClick={() => setSelectedOfferPreview(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 text-xs text-gray-200 leading-relaxed font-sans space-y-2">
              <h4 className="text-sm font-extrabold text-white">CONFIDENTIAL OFFER OF EMPLOYMENT</h4>
              <p>Date: {selectedOfferPreview.generatedOn}</p>
              <p>Dear <strong>{selectedOfferPreview.candidateName}</strong>,</p>
              <p>
                We are pleased to offer you the position of <strong>{selectedOfferPreview.designation}</strong> in the <strong>{selectedOfferPreview.department}</strong> department at Rothe Erde India Pvt. Ltd. (Gondedumala Plant).
              </p>
              <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 space-y-1">
                <p>• <strong>Annual CTC:</strong> ₹{selectedOfferPreview.annualCTC.toLocaleString('en-IN')}</p>
                <p>• <strong>Est. Monthly Gross:</strong> ₹{selectedOfferPreview.monthlyGross.toLocaleString('en-IN')}</p>
                <p>• <strong>Target Joining Date:</strong> {selectedOfferPreview.joiningDate}</p>
                <p>• <strong>Statutory Benefits:</strong> EPF (12%), ESIC Medical Coverage, Gratuity Act 1972</p>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <span className="text-[11px] text-emerald-400 font-semibold">Status: {selectedOfferPreview.status}</span>
              <button
                onClick={() => alert(`Downloading official PDF Offer Letter for ${selectedOfferPreview.candidateName}...`)}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition"
              >
                <Download className="h-4 w-4" /> Download PDF Offer Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
