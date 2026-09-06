'use client';

import React, { useState } from 'react';
import { HRDocumentPolicy, UserRole, Employee } from '../../types/hrms';
import { SensitiveSalaryMask } from '../ui/SensitiveSalaryMask';
import { 
  FileText, 
  ShieldCheck, 
  Plus, 
  Download, 
  Search, 
  Sparkles, 
  X, 
  BookOpen, 
  Building2, 
  Clock, 
  Calculator, 
  CheckCircle,
  FileSpreadsheet,
  Lock,
  Eye
} from 'lucide-react';

interface HRPolicyVaultViewProps {
  policies: HRDocumentPolicy[];
  employees: Employee[];
  currentRole: UserRole;
  currentUser?: Employee;
  onPublishPolicy?: (policy: HRDocumentPolicy) => void;
}

export const HRPolicyVaultView: React.FC<HRPolicyVaultViewProps> = ({
  policies,
  employees,
  currentRole,
  currentUser,
  onPublishPolicy
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPublishModal, setShowPublishModal] = useState(false);

  // Publish Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<any>('EPF_ESI_GRATUITY');
  const [newAudience, setNewAudience] = useState<any>('ALL_WORKFORCE');
  const [newSummary, setNewSummary] = useState('');
  const [newVersion, setNewVersion] = useState('v1.0');

  const isHR = currentRole === 'HR_ADMIN';

  const categories = [
    { id: 'ALL', label: 'All HR Policies' },
    { id: 'EPF_ESI_GRATUITY', label: 'EPF, ESI & Gratuity Act' },
    { id: 'ATTENDANCE', label: 'Attendance & Night Shift Rules' },
    { id: 'PAYROLL', label: 'Statutory Payroll & PT Slabs' },
    { id: 'CODE_OF_CONDUCT', label: '5S Shopfloor Safety Rules' },
    { id: 'COMPENSATION_BENEFITS', label: 'Compensation & Benefits' },
    { id: 'STATUTORY_RECORDS', label: 'Employee Statutory Records' }
  ];

  const filteredPolicies = policies.filter(pol => {
    const matchesCategory = activeCategory === 'ALL' || pol.category === activeCategory;
    const matchesSearch = pol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pol.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: HRDocumentPolicy = {
      id: `pol-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      targetAudience: newAudience,
      publishedDate: new Date().toISOString().split('T')[0],
      summary: newSummary || 'Official plant policy document published by Rothe Erde HR Department.',
      version: newVersion
    };

    if (onPublishPolicy) onPublishPolicy(created);
    setShowPublishModal(false);
    setNewTitle('');
    setNewSummary('');
    alert(`HR Policy "${created.title}" published successfully to plant portal!`);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-purple-950/90 p-6 border border-blue-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-900/80 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-blue-700">
              Rothe Erde India • Statutory & Document Hub
            </span>
            <span className="text-xs text-gray-400">• ISO 9001 / EPF Act / Gratuity Act Compliance</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            HR Policy Vault, Gratuity Guidelines & Statutory Records
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Official company policies for attendance, payroll statutory deductions, Payment of Gratuity Act 1972, ESIC medical rules, and employee statutory records.
          </p>
        </div>

        {isHR && (
          <button
            onClick={() => setShowPublishModal(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
          >
            <Plus className="h-4 w-4" />
            <span>Publish New Policy / Document</span>
          </button>
        )}
      </div>

      {/* Categories & Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-3 rounded-2xl">
        <div className="flex flex-wrap items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeCategory === cat.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search policies or statutory terms..."
            className="w-full rounded-xl bg-gray-950 pl-9 pr-3 py-2 text-xs text-white border border-gray-800 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* STATUTORY HIGHLIGHT: PAYMENT OF GRATUITY ACT 1972 EXPLAINER CARD */}
      <div className="glass-panel p-5 rounded-2xl border border-emerald-500/40 space-y-3 bg-gradient-to-r from-emerald-950/40 via-teal-950/40 to-gray-950">
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck className="h-5 w-5" />
          <h3 className="text-sm font-extrabold text-white">Payment of Gratuity Act 1972 — Statutory Policy Highlights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-300">
          <div className="bg-gray-900/90 p-3 rounded-xl border border-emerald-800/40">
            <span className="font-bold text-emerald-300 block mb-1">Eligibility Criteria</span>
            <p className="text-[11px] text-gray-300">Minimum <strong>5 continuous years of service</strong> at Rothe Erde India Pvt. Ltd.</p>
          </div>
          <div className="bg-gray-900/90 p-3 rounded-xl border border-emerald-800/40">
            <span className="font-bold text-emerald-300 block mb-1">Statutory Formula</span>
            <p className="text-[11px] text-gray-300 font-mono">Gratuity = (15 × Last Drawn Basic × Tenure Years) ÷ 26</p>
          </div>
          <div className="bg-gray-900/90 p-3 rounded-xl border border-emerald-800/40">
            <span className="font-bold text-emerald-300 block mb-1">Tax Exemption Ceiling</span>
            <p className="text-[11px] text-gray-300">Fully tax-exempt up to <strong>₹20,00,000 (₹20 Lakhs)</strong> under Income Tax Act Sec 10(10).</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA: POLICIES OR STATUTORY RECORDS */}
      {activeCategory !== 'STATUTORY_RECORDS' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPolicies.map(pol => (
            <div key={pol.id} className="rounded-xl bg-gray-900/90 p-5 border border-gray-800 space-y-3 hover:border-blue-500/40 transition">
              <div className="flex justify-between items-start">
                <div>
                  <span className="rounded-md bg-blue-950 px-2 py-0.5 text-[10px] font-bold text-cyan-300 border border-blue-800">
                    {pol.category.replace('_', ' ')}
                  </span>
                  <h4 className="text-xs font-extrabold text-white mt-1.5">{pol.title}</h4>
                </div>
                <span className="text-[10px] font-mono text-gray-400">{pol.version}</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">{pol.summary}</p>

              <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-[11px]">
                <span className="text-gray-400">Published: {pol.publishedDate} • Audience: {pol.targetAudience}</span>
                <button
                  onClick={() => alert(`Downloading PDF copy of "${pol.title}" - Rothe Erde India HR Department...`)}
                  className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white hover:bg-blue-500 transition flex items-center gap-1"
                >
                  <Download className="h-3.5 w-3.5" /> PDF Policy
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* STATUTORY RECORDS REPOSITORY FOR EMPLOYEES */
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-purple-400" />
            <span>Employee Statutory Documents & EPFO / ESIC Records Vault</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">UAN / EPF Number</th>
                  <th className="py-3 px-4">ESIC Insurance No</th>
                  <th className="py-3 px-4">Gratuity Nomination (Form F)</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {employees.map(emp => (
                  <tr key={emp.id} className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-white">
                      {emp.name} ({emp.empCode})
                      <span className="block text-[10px] text-gray-400 font-normal">{emp.department}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-300">
                      {emp.statutoryIds.uan || '100982347100'}
                    </td>
                    <td className="py-3 px-4 font-mono text-gray-300">
                      {emp.statutoryIds.esiNo || '3190283700'}
                    </td>
                    <td className="py-3 px-4">
                      <span className="rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-800">
                        ✓ Form F Submitted
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => alert(`Downloading official Statutory Enrollment Records for ${emp.name}...`)}
                        className="rounded-lg bg-gray-800 px-3 py-1 text-xs font-semibold text-blue-400 hover:bg-gray-700 transition flex items-center gap-1 ml-auto"
                      >
                        <Download className="h-3 w-3" /> Statutory Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* HR PUBLISH POLICY MODAL */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-blue-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-blue-500/30 pb-3">
              <div className="flex items-center gap-2 text-blue-300">
                <FileText className="h-5 w-5 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Publish HR Policy / Document</h3>
              </div>
              <button onClick={() => setShowPublishModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handlePublishSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Document Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Gratuity & Retirement Benefit Rules 2026"
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  >
                    <option value="EPF_ESI_GRATUITY">EPF, ESI & Gratuity Act</option>
                    <option value="ATTENDANCE">Attendance & Night Shift Rules</option>
                    <option value="PAYROLL">Payroll & PT Guidelines</option>
                    <option value="CODE_OF_CONDUCT">5S Shopfloor Safety</option>
                    <option value="COMPENSATION_BENEFITS">Compensation & Benefits</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-300 font-semibold mb-1 block">Version Number</label>
                  <input
                    type="text"
                    value={newVersion}
                    onChange={(e) => setNewVersion(e.target.value)}
                    className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Target Audience</label>
                <select
                  value={newAudience}
                  onChange={(e) => setNewAudience(e.target.value as any)}
                  className="w-full rounded-xl bg-gray-950 px-3 py-2 text-xs text-white border border-gray-800 focus:outline-none"
                >
                  <option value="ALL_WORKFORCE">All Plant Workforce</option>
                  <option value="PERMANENT_STAFF">Permanent Staff Only</option>
                  <option value="DAILY_WAGE_LABOUR">Daily Wage / Contract Labour Only</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 font-semibold mb-1 block">Policy Summary / Mandate Details</label>
                <textarea
                  rows={3}
                  required
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Enter policy overview, statutory compliance clauses, or rules..."
                  className="w-full rounded-xl bg-gray-950 p-3 text-xs text-white border border-gray-800 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPublishModal(false)}
                  className="rounded-xl bg-gray-800 px-4 py-2 text-xs font-bold text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-lg hover:bg-blue-500 transition"
                >
                  Publish Policy to Vault
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
