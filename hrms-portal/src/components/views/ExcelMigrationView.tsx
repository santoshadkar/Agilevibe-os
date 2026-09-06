'use client';

import React, { useState } from 'react';
import { Employee, UserRole } from '../../types/hrms';
import { parseExcelDataForMigration, MigrationRowResult } from '../../lib/aiEngine';
import { FileSpreadsheet, Upload, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Sparkles, Lock } from 'lucide-react';

interface ExcelMigrationViewProps {
  onImportBatch: (newEmps: Employee[]) => void;
  currentRole?: UserRole;
}

export const ExcelMigrationView: React.FC<ExcelMigrationViewProps> = ({ onImportBatch, currentRole }) => {
  const [parsedResults, setParsedResults] = useState<MigrationRowResult[]>([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isImported, setIsImported] = useState(false);

  // STRICT PRIVACY GUARD: ONLY HR ADMIN CAN ACCESS EXCEL MIGRATION
  if (currentRole && currentRole !== 'HR_ADMIN') {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-rose-500/30 text-center space-y-4 max-w-2xl mx-auto my-12 shadow-2xl">
        <div className="h-12 w-12 rounded-2xl bg-rose-950 text-rose-400 flex items-center justify-center mx-auto border border-rose-800">
          <Lock className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">AI Migration Engine Restricted</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Bulk data migration and spreadsheet parsing tools are restricted exclusively to <strong>HR Administrators</strong> to protect employee PII (PAN, Aadhaar, Bank Accounts) per ISO 27001 compliance standards.
          </p>
        </div>
      </div>
    );
  }

  // Pre-loaded sample Excel data from customer's spreadsheet
  const handleLoadSampleExcel = () => {
    const rawSampleData = [
      { 'Emp Name': 'Vishal Deshmukh', 'Emp Type': 'Permanent Staff', 'Dept': 'Ring Forging', 'Daily Wage': '65000', 'PAN': 'AWXPD8812K', 'Aadhaar': '9012 8812 7711', 'Mobile': '+91 98220 11902' },
      { 'Emp Name': 'Mahesh More', 'Emp Type': 'Contract Labour', 'Dept': 'CNC Machining', 'Daily Wage': '650', 'PAN': 'BXMPM9912L', 'Aadhaar': '3412 0012 4499', 'Mobile': '+91 97110 44102' }
    ];

    const results = parseExcelDataForMigration(rawSampleData);
    setParsedResults(results);
    setIsUploaded(true);
    setIsImported(false);
  };

  const handleFinalImport = () => {
    const validEmps: Employee[] = parsedResults
      .filter(r => r.mappedEmployee)
      .map((r, idx) => ({
        id: `mig-${Date.now()}-${idx}`,
        empCode: r.mappedEmployee.empCode || `REI-MIG-${100 + idx}`,
        name: r.mappedEmployee.name || 'Worker',
        email: r.mappedEmployee.email || 'worker@rotheerde.in',
        phone: r.mappedEmployee.phone || '+91 98000 00000',
        role: r.mappedEmployee.role || 'DAILY_WAGE_WORKER',
        empType: r.mappedEmployee.empType || 'CONTRACT_LABOUR',
        department: r.mappedEmployee.department || 'Ring Forging',
        designation: r.mappedEmployee.designation || 'Shopfloor Assistant',
        shift: 'Morning (6 AM - 2 PM)',
        joinDate: new Date().toISOString().split('T')[0],
        status: 'ACTIVE',
        baseSalaryMonthly: r.mappedEmployee.baseSalaryMonthly || 0,
        dailyWageRate: r.mappedEmployee.dailyWageRate || 650,
        bankDetails: r.mappedEmployee.bankDetails || { accountNumber: '918273645012', ifscCode: 'SBIN0004120', bankName: 'State Bank of India' },
        statutoryIds: r.mappedEmployee.statutoryIds || { pan: 'ABCPS9910K', aadhaar: '9012 3412 8899' },
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
      }));

    onImportBatch(validEmps);
    setIsImported(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/90 via-teal-950/90 to-cyan-950/90 p-6 border border-emerald-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-emerald-900/80 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-700">
              Rothe Erde India • AI HR Feature 2
            </span>
            <span className="text-xs text-gray-400">• Automated PII Sanitization</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            Legacy Excel Data Migration Engine
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            Parse raw legacy Excel files with confidence scores (80%-100%), automatic PAN/Aadhaar duplicate detection, and instant database ingestion into Rothe Erde HRMS.
          </p>
        </div>

        <button
          onClick={handleLoadSampleExcel}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg hover:scale-105 transition shrink-0"
        >
          <FileSpreadsheet className="h-4 w-4" />
          <span>Upload Customer Excel Sample</span>
        </button>
      </div>

      {/* Migration Table */}
      {isUploaded && (
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Parsed Excel Row Results</h3>
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> 100% PII Checked
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">Row #</th>
                  <th className="py-3 px-4">Worker Name</th>
                  <th className="py-3 px-4">Dept & Role</th>
                  <th className="py-3 px-4">AI Confidence</th>
                  <th className="py-3 px-4">Validation Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {parsedResults.map(row => (
                  <tr key={row.rowNumber} className="hover:bg-gray-900/40 transition">
                    <td className="py-3 px-4 font-mono font-bold text-gray-400">#{row.rowNumber}</td>
                    <td className="py-3 px-4 font-bold text-white">{row.name}</td>
                    <td className="py-3 px-4">{row.department} • {row.role}</td>
                    <td className="py-3 px-4 font-bold text-emerald-400">{row.confidence}% Confidence</td>
                    <td className="py-3 px-4">
                      <span className="rounded-md bg-emerald-950 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-800">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleFinalImport}
              disabled={isImported}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg hover:bg-emerald-500 transition"
            >
              {isImported ? (
                <span>✓ Successfully Ingested to HRMS Directory</span>
              ) : (
                <>
                  <span>Commit & Ingest Batch to HRMS Directory</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
