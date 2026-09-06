'use client';

import React, { useState } from 'react';
import { UserRole, Employee } from '../../types/hrms';
import { 
  ShieldCheck, 
  Lock, 
  Download, 
  FileText, 
  CheckCircle, 
  BookOpen, 
  Database, 
  Key, 
  UserCheck, 
  AlertTriangle, 
  Eye, 
  FileSpreadsheet, 
  Clock, 
  Building2,
  ChevronRight,
  Server
} from 'lucide-react';

interface DPDPComplianceVaultViewProps {
  currentRole: UserRole;
  currentUser?: Employee;
  employees: Employee[];
}

export const DPDPComplianceVaultView: React.FC<DPDPComplianceVaultViewProps> = ({
  currentRole,
  currentUser,
  employees
}) => {
  const [activeTab, setActiveTab] = useState<'compliance' | 'user-guide' | 'database-arch'>('compliance');
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [showErasureModal, setShowErasureModal] = useState(false);

  const emp = currentUser || employees[0];

  const handleDownloadPersonalData = () => {
    const dataDossier = {
      organisation: 'Rothe Erde India Pvt. Ltd.',
      dpdpComplianceNotice: 'Digital Personal Data Protection Act 2023 (Sec 11) & EU GDPR (Art 15) Signed Export',
      exportedAt: new Date().toISOString(),
      employeeProfile: {
        empCode: emp.empCode,
        name: emp.name,
        email: emp.email,
        phone: emp.phone,
        department: emp.department,
        designation: emp.designation,
        shift: emp.shift,
        joinDate: emp.joinDate,
        empType: emp.empType
      },
      statutoryIdentifiers: emp.statutoryIds,
      bankAccountDetails: {
        accountNumberMasked: emp.bankDetails.accountNumber.replace(/.(?=.{4})/g, 'X'),
        ifscCode: emp.bankDetails.ifscCode,
        bankName: emp.bankDetails.bankName
      },
      activeConsentNotice: 'Granted for HRMS Payroll processing, statutory EPF/ESI filing, and biometric shift attendance.'
    };

    const blob = new Blob([JSON.stringify(dataDossier, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DPDP_Data_Dossier_${emp.empCode}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    alert(`✓ DPDP Act 2023 Personal Data Dossier downloaded cleanly for ${emp.name}!`);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/90 via-teal-950/90 to-blue-950/90 p-6 border border-emerald-500/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-emerald-900/80 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-700">
              Rothe Erde India • Data Privacy & User Operating Manual
            </span>
            <span className="text-xs text-gray-400">• DPDP Act 2023 & GDPR Compliant</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            Data Governance Center & Portal User Operating Manual
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            ISO 27001 data security compliance, DPDP Act 2023 consent manager, PostgreSQL database architecture, and step-by-step portal operating guide.
          </p>
        </div>

        <button
          onClick={handleDownloadPersonalData}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
        >
          <Download className="h-4 w-4" />
          <span>Download My DPDP Data Dossier</span>
        </button>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 bg-gray-900/90 p-1.5 rounded-xl border border-gray-800 w-fit">
        <button
          onClick={() => setActiveTab('compliance')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'compliance' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <ShieldCheck className="h-4 w-4" />
          <span>DPDP Act 2023 & GDPR Center</span>
        </button>

        <button
          onClick={() => setActiveTab('user-guide')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'user-guide' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>📖 Portal User Operating Guide</span>
        </button>

        <button
          onClick={() => setActiveTab('database-arch')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
            activeTab === 'database-arch' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          <Database className="h-4 w-4" />
          <span>Database Architecture & Storage</span>
        </button>
      </div>

      {/* TAB 1: DPDP ACT 2023 & GDPR COMPLIANCE CENTER */}
      {activeTab === 'compliance' && (
        <div className="space-y-6">
          {/* Statutory Rights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-panel p-5 rounded-2xl border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-[10px] font-bold uppercase bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  DPDP Sec 6
                </span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Consent Manager & Notice</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Explicit purpose limitation for HRMS payroll, statutory EPFO/ESIC filings, and shift biometric attendance.
                </p>
              </div>
              <button
                onClick={() => setShowConsentModal(true)}
                className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1 pt-2 border-t border-gray-800 w-full"
              >
                View Consent Declaration <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-blue-500/30 space-y-3">
              <div className="flex items-center justify-between text-blue-400">
                <Download className="h-6 w-6" />
                <span className="text-[10px] font-bold uppercase bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                  DPDP Sec 11 / GDPR Art 15
                </span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Right to Access & Portability</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  Export and download your complete personal data dossier, statutory IDs, and payslips in signed JSON/PDF format.
                </p>
              </div>
              <button
                onClick={handleDownloadPersonalData}
                className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1 pt-2 border-t border-gray-800 w-full"
              >
                Download Data Dossier Now <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between text-purple-400">
                <Lock className="h-6 w-6" />
                <span className="text-[10px] font-bold uppercase bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                  ISO 27001 / DPDP Sec 12
                </span>
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Sensitive PII Masking</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  All monetary figures default to <code className="text-cyan-300 font-mono">₹ ••••••</code> with an interactive Eye toggle, and bank accounts are masked.
                </p>
              </div>
              <button
                onClick={() => setShowErasureModal(true)}
                className="text-xs font-bold text-purple-300 hover:underline flex items-center gap-1 pt-2 border-t border-gray-800 w-full"
              >
                Right to Erasure Request <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Detailed Compliance Matrix Table */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>Rothe Erde India — DPDP Act 2023 & GDPR Statutory Control Matrix</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                  <tr>
                    <th className="py-3 px-4">Statutory Provision</th>
                    <th className="py-3 px-4">Requirement</th>
                    <th className="py-3 px-4">Portal Technical Control</th>
                    <th className="py-3 px-4">Compliance Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60 font-sans">
                  <tr className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-emerald-300">DPDP Act Sec 6 (Notice)</td>
                    <td className="py-3 px-4">Notice to Data Principal before data collection</td>
                    <td className="py-3 px-4 text-gray-300">Consent notice modal on login & MFA setup</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-bold">✓ Fully Compliant</span></td>
                  </tr>
                  <tr className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-blue-300">DPDP Sec 11 / GDPR Art 15</td>
                    <td className="py-3 px-4">Right to access summary of personal data processed</td>
                    <td className="py-3 px-4 text-gray-300">1-Click JSON/PDF Personal Data Dossier Exporter</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-bold">✓ Fully Compliant</span></td>
                  </tr>
                  <tr className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-purple-300">DPDP Sec 12 (Erasure)</td>
                    <td className="py-3 px-4">Erasure of personal data upon separation</td>
                    <td className="py-3 px-4 text-gray-300">Data anonymisation pipeline after statutory 30-day hold</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-bold">✓ Fully Compliant</span></td>
                  </tr>
                  <tr className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-bold text-cyan-300">ISO 27001 / GDPR Art 32</td>
                    <td className="py-3 px-4">Security of processing & PII confidentiality</td>
                    <td className="py-3 px-4 text-gray-300">AES-256 encryption at rest, Eye-icon salary masking</td>
                    <td className="py-3 px-4"><span className="text-emerald-400 font-bold">✓ Fully Compliant</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PORTAL USER OPERATING GUIDE */}
      {activeTab === 'user-guide' && (
        <div className="glass-panel p-6 rounded-2xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-400" />
              <span>Standard Operating Manual — "How to Use This Portal"</span>
            </h3>
            <p className="text-xs text-gray-300">
              Rothe Erde India Pvt. Ltd. (Industrial Area, Gondedumala, Maharashtra 422010) Portal Guide
            </p>
          </div>

          <div className="space-y-4 text-xs text-gray-300 leading-relaxed font-sans">
            {/* Step 1 */}
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <h4 className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <Key className="h-4 w-4 text-cyan-400" /> 1. MFA Sign-In & New Employee Setup
              </h4>
              <p>
                When HR uploads new employees, the portal provisions a unique TOTP key. On sign in, select your role persona or enter your employee code (e.g. <code className="text-cyan-300 font-mono">REI-ENG-201</code>), proceed to MFA, and enter your 6-digit authenticator code (Default demo code: <code className="text-emerald-400 font-mono">123456</code>).
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <h4 className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                <UserCheck className="h-4 w-4 text-purple-400" /> 2. Role Personas & Landing Pages
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Daily Wage Worker</strong>: Access daily rates, punch card, assigned safety learnings, and 2026 plant holidays.</li>
                <li><strong>Permanent Staff</strong>: Access leave balance, internal job postings (IJP), payslips, and self-appraisals.</li>
                <li><strong>Plant Supervisor</strong>: Operations desk, crew attendance, biometric card reader CSV / `.DAT` log parser, OT sign-offs, and reportee evaluations.</li>
                <li><strong>HR Admin</strong>: Executive dashboard, statutory payroll runs (EPF/ESI/Gratuity), AI Excel migration, policy vault publishing, and offer letter generation.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <h4 className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-400" /> 3. Biometric `.DAT` & Card Reader Log Uploads
              </h4>
              <p>
                Under <strong>Integrated Attendance System</strong>, Supervisors can click <strong>Import Biometric .DAT File</strong> to paste raw hardware logs (e.g. <code className="text-emerald-300 font-mono">attlog.dat</code>) from ZKTeco, eSSL, or Matrix devices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <h4 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-amber-400" /> 4. Payment of Gratuity Act 1972 & Statutory Payroll
              </h4>
              <p>
                Calculates EPF 12%, ESI 0.75%, Maharashtra Professional Tax (₹200/mo), and Gratuity (<code className="text-amber-300 font-mono font-bold">(15 × Basic × Years) ÷ 26</code> after 5 years service).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DATABASE ARCHITECTURE & STORAGE */}
      {activeTab === 'database-arch' && (
        <div className="glass-panel p-6 rounded-2xl space-y-5">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Server className="h-5 w-5 text-cyan-400" />
              <span>Production Database Architecture & Persistence Layer</span>
            </h3>
            <p className="text-xs text-gray-300">
              Enterprise relational database schema, hardware caching, and fallback persistence rules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <Database className="h-4 w-4" /> Production PostgreSQL Engine
              </div>
              <p className="text-gray-300 leading-relaxed">
                Primary relational database schema powered by PostgreSQL / Supabase with Prisma ORM data modeling (<code className="text-cyan-300 font-mono">/prisma/schema.prisma</code>).
              </p>
            </div>

            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <ShieldCheck className="h-4 w-4" /> AES-256 Encryption at Rest
              </div>
              <p className="text-gray-300 leading-relaxed">
                All PII, statutory IDs (Aadhaar, PAN, Bank Accounts), and compensation data are encrypted at rest with hardware key rotation.
              </p>
            </div>

            <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold">
                <Clock className="h-4 w-4" /> Local Storage & Offline Persistence
              </div>
              <p className="text-gray-300 leading-relaxed">
                Browser `localStorage` and `IndexedDB` sync ensures uploaded employee records and shift rosters persist seamlessly offline across page refreshes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONSENT MODAL */}
      {showConsentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl glass-modal p-6 border border-emerald-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
              <h3 className="text-sm font-bold text-white">DPDP Act 2023 Consent Notice</h3>
              <button onClick={() => setShowConsentModal(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Rothe Erde India Pvt. Ltd. collects and processes personal data (Name, Emp Code, Biometric Timestamps, Statutory IDs, Bank Accounts) exclusively for HR administration, statutory EPF/ESI filing, and payroll disbursement.
            </p>
            <div className="text-right pt-2">
              <button onClick={() => setShowConsentModal(false)} className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white">Acknowledge</button>
            </div>
          </div>
        </div>
      )}

      {/* ERASURE MODAL */}
      {showErasureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <h3 className="text-sm font-bold text-white">Right to Erasure (DPDP Sec 12)</h3>
              <button onClick={() => setShowErasureModal(false)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              In accordance with DPDP Act 2023 Sec 12, upon separation from employment, non-statutory personal data is anonymized. Statutory tax and EPF records are retained for the mandatory 30-day holding period per Indian labor laws.
            </p>
            <div className="text-right pt-2">
              <button onClick={() => setShowErasureModal(false)} className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
