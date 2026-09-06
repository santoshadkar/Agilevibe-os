'use client';

import React, { useState } from 'react';
import { 
  Employee, 
  PayrollRun, 
  Payslip, 
  AIAnomaly, 
  UserRole 
} from '../../types/hrms';
import { calculateIndiaStatutorySalary } from '../../lib/statutoryCalculator';
import { explainPayslipInPlainLanguage } from '../../lib/aiEngine';
import { RotheErdeLogo } from '../ui/RotheErdeLogo';
import { SensitiveSalaryMask } from '../ui/SensitiveSalaryMask';
import { 
  Calculator, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  HelpCircle, 
  FileText, 
  Sparkles, 
  X, 
  Check,
  Moon,
  MapPin,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PayrollViewProps {
  employees: Employee[];
  payrollRuns: PayrollRun[];
  anomalies: AIAnomaly[];
  currentRole: UserRole;
  currentUser?: Employee;
  onApproveAnomaly: (anomalyId: string) => void;
  onDisbursePayroll: (runId: string) => void;
}

export const PayrollView: React.FC<PayrollViewProps> = ({
  employees,
  payrollRuns,
  anomalies,
  currentRole,
  currentUser,
  onApproveAnomaly,
  onDisbursePayroll
}) => {
  const [activeRunId, setActiveRunId] = useState<string>(payrollRuns[0]?.id || 'payrun-2026-08');
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);
  const [explainerModalText, setExplainerModalText] = useState<string | null>(null);

  const isHR = currentRole === 'HR_ADMIN';

  // STRICT PRIVACY CHECK FOR DAILY WAGE WORKERS
  if (currentRole === 'DAILY_WAGE_WORKER') {
    return (
      <div className="glass-panel p-8 rounded-2xl border border-rose-500/30 text-center space-y-4 max-w-2xl mx-auto my-12 shadow-2xl">
        <div className="h-12 w-12 rounded-2xl bg-rose-950 text-rose-400 flex items-center justify-center mx-auto border border-rose-800">
          <Lock className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">Payroll Module Restricted</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Company-wide statutory payroll data is restricted to <strong>HR Administrators</strong>. Daily wage workers can view their personal daily wage rate and estimated payout in their <strong>Daily Wage Portal</strong>.
          </p>
        </div>
      </div>
    );
  }

  const activeRun = payrollRuns.find(r => r.id === activeRunId) || payrollRuns[0];

  const allPayslips: Payslip[] = employees.map((emp, idx) => {
    const nightShiftCount = idx === 2 || idx === 3 ? 4 : 0;
    const calc = calculateIndiaStatutorySalary(
      emp.empType === 'PERMANENT' ? emp.baseSalaryMonthly : (emp.dailyWageRate || 650),
      25,
      26,
      idx === 2 ? 14 : 2,
      emp.empType,
      'Maharashtra',
      nightShiftCount
    );

    return {
      id: `ps-${activeRun.id}-${emp.id}`,
      payrollRunId: activeRun.id,
      employeeId: emp.id,
      empCode: emp.empCode,
      employeeName: emp.name,
      department: emp.department,
      designation: emp.designation,
      empType: emp.empType,
      month: activeRun.month,
      year: activeRun.year,
      workingDays: 26,
      presentDays: 25,
      leaveDays: 1,
      basic: calc.basic,
      hra: calc.hra,
      specialAllowance: calc.specialAllowance,
      overtimePay: calc.overtimePay,
      nightShiftAllowance: calc.nightShiftAllowance,
      grossPay: calc.grossPay,
      epfEmployee: calc.epfEmployee,
      epfEmployer: calc.epfEmployer,
      esiEmployee: calc.esiEmployee,
      esiEmployer: calc.esiEmployer,
      professionalTax: calc.professionalTax,
      tds: calc.tds,
      totalDeductions: calc.totalEmployeeDeductions,
      netPay: calc.netPay,
      contractorFee: calc.contractorFee,
      status: 'PAID'
    };
  });

  // DATA PRIVACY FILTER FOR PERMANENT STAFF: Only see OWN payslip!
  const displayPayslips = isHR 
    ? allPayslips 
    : allPayslips.filter(ps => ps.employeeId === (currentUser?.id || 'emp-301'));

  const handleDisburseClick = () => {
    onDisbursePayroll(activeRun.id);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleExplainPayslip = (ps: Payslip) => {
    const explanation = explainPayslipInPlainLanguage(ps);
    setExplainerModalText(explanation);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-cyan-950/90 p-6 border border-blue-800/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-900/80 px-2.5 py-0.5 text-xs font-bold text-cyan-300 border border-blue-700">
              Rothe Erde India Pvt. Ltd. • Statutory Verified
            </span>
            <span className="text-xs text-gray-400">• EPF Act 1952 / ESI Act 1948 / PT Maharashtra / TDS Sec 192</span>
          </div>
          <h2 className="text-xl font-extrabold text-white mt-1">
            {isHR ? 'Indian Statutory Payroll & Compensation Engine' : `My Monthly Salary Payslips (${currentUser?.name})`}
          </h2>
          <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
            {isHR 
              ? 'Industrial Area, Gondedumala, Maharashtra 422010. Monthly payroll runs, statutory Provident Fund (12%), ESI, Professional Tax, TDS withholding, Night Allowances, and Contract Labour Form V Muster-Roll logs.'
              : 'Private payslip portal. Download your official monthly payslips and inspect statutory deductions.'
            }
          </p>
        </div>

        {isHR && activeRun.status !== 'DISBURSED' && (
          <button
            onClick={handleDisburseClick}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 hover:scale-105 transition"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Approve & Disburse August Payroll</span>
          </button>
        )}
      </div>

      {/* AI Payroll Anomalies Section (HR ADMIN ONLY) */}
      {isHR && anomalies.length > 0 && (
        <div className="glass-panel p-5 rounded-2xl border-amber-500/40 space-y-3">
          <div className="flex items-center gap-2 text-amber-400">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <h3 className="text-sm font-bold text-white">AI Feature 3 • Payroll Anomaly Detector Flags</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {anomalies.map(anom => (
              <div key={anom.id} className="rounded-xl bg-gray-900/90 p-3.5 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">{anom.type}</span>
                  <span className="text-[10px] text-rose-400 font-semibold">{anom.severity}</span>
                </div>
                <p className="text-xs font-bold text-white">{anom.employeeName} ({anom.empCode})</p>
                <p className="text-[11px] text-gray-300">{anom.description}</p>
                <button
                  onClick={() => onApproveAnomaly(anom.id)}
                  className="w-full mt-2 rounded-lg bg-amber-500/20 py-1.5 text-[11px] font-bold text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition flex items-center justify-center gap-1"
                >
                  <Check className="h-3 w-3" /> Human Sign-Off & Resolve
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Statutory Summary Matrix (HR ADMIN ONLY) */}
      {isHR && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-blue-400 uppercase">Total EPF Contribution (EPFO)</p>
            <p className="text-xl font-bold text-white">₹36,80,000</p>
            <p className="text-[10px] text-gray-400">Emp 12% + Employer 12% (EPS ₹1250 Cap)</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-emerald-400 uppercase">Total ESI Contribution (ESIC)</p>
            <p className="text-xl font-bold text-white">₹4,18,000</p>
            <p className="text-[10px] text-gray-400">Emp 0.75% + Employer 3.25% (Gross ≤ ₹21k)</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-amber-400 uppercase">Professional Tax (MH Govt)</p>
            <p className="text-xl font-bold text-white">₹1,47,000</p>
            <p className="text-[10px] text-gray-400">₹200/mo Maharashtra Statutory Slab</p>
          </div>

          <div className="glass-panel p-4 rounded-xl space-y-1">
            <p className="text-[11px] font-bold text-purple-400 uppercase">Income Tax (TDS Sec 192)</p>
            <p className="text-xl font-bold text-white">₹29,50,000</p>
            <p className="text-[10px] text-gray-400">New Tax Regime Slabs (Sec 192 Withholding)</p>
          </div>
        </div>
      )}

      {/* Payslips Table */}
      <div className="glass-panel rounded-2xl overflow-hidden p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">
            {isHR ? 'August 2026 Plant Payslip Register' : 'My Official August 2026 Payslip'}
          </h3>
          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="h-4 w-4" /> Data Encrypted & Protected
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-300">
            <thead className="bg-gray-900/90 text-[11px] uppercase font-bold text-gray-400 border-b border-gray-800">
              <tr>
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Gross Earnings</th>
                <th className="py-3 px-4">EPF (12%)</th>
                <th className="py-3 px-4">ESI (0.75%)</th>
                <th className="py-3 px-4">PT & TDS</th>
                <th className="py-3 px-4 font-bold text-white">Net Payout</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {displayPayslips.map(ps => (
                <tr key={ps.id} className="hover:bg-gray-900/40 transition">
                  <td className="py-3 px-4">
                    <p className="font-bold text-white">{ps.employeeName}</p>
                    <p className="text-[10px] text-gray-400">{ps.empCode} • {ps.department}</p>
                  </td>

                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      ps.empType === 'PERMANENT' ? 'badge-permanent' : 'badge-contract'
                    }`}>
                      {ps.empType.replace('_', ' ')}
                    </span>
                  </td>

                  <td className="py-3 px-4 font-semibold text-gray-200">
                    <SensitiveSalaryMask value={ps.grossPay} />
                    {ps.overtimePay > 0 && <span className="text-[10px] text-amber-400 block">+₹{ps.overtimePay} OT</span>}
                    {ps.nightShiftAllowance > 0 && <span className="text-[10px] text-purple-300 block">+₹{ps.nightShiftAllowance} Night Allowance</span>}
                  </td>

                  <td className="py-3 px-4 font-mono text-gray-300">
                    <SensitiveSalaryMask value={ps.epfEmployee} />
                  </td>
                  <td className="py-3 px-4 font-mono text-gray-300">
                    <SensitiveSalaryMask value={ps.esiEmployee} />
                  </td>
                  <td className="py-3 px-4 font-mono text-gray-300">
                    <SensitiveSalaryMask value={ps.professionalTax + ps.tds} />
                  </td>

                  <td className="py-3 px-4 font-extrabold text-emerald-400">
                    <SensitiveSalaryMask value={ps.netPay} className="text-emerald-400 font-extrabold" />
                  </td>

                  <td className="py-3 px-4 text-right space-x-2">
                    <button
                      onClick={() => handleExplainPayslip(ps)}
                      className="rounded-lg bg-purple-950/80 px-2.5 py-1 text-[10px] font-bold text-purple-300 border border-purple-700/50 hover:bg-purple-800/50 transition inline-flex items-center gap-1"
                    >
                      <Sparkles className="h-3 w-3" /> AI Explainer
                    </button>
                    <button
                      onClick={() => setSelectedPayslip(ps)}
                      className="rounded-lg bg-gray-800 px-2.5 py-1 text-[10px] font-semibold text-blue-400 hover:bg-gray-700 transition"
                    >
                      View Payslip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PAYSLIP DETAIL MODAL */}
      {selectedPayslip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-xl rounded-2xl glass-modal p-6 border border-gray-700 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-3">
                <RotheErdeLogo size="sm" />
                <div>
                  <h3 className="text-sm font-extrabold text-white">Rothe Erde India Pvt. Ltd.</h3>
                  <p className="text-[11px] text-gray-400">Industrial Area, Gondedumala, Maharashtra 422010</p>
                </div>
              </div>
              <button onClick={() => setSelectedPayslip(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-900/90 p-3 rounded-xl border border-gray-800">
                <div>
                  <p className="text-gray-400 text-[10px]">Employee Name</p>
                  <p className="font-bold text-white">{selectedPayslip.employeeName} ({selectedPayslip.empCode})</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[10px]">Designation & Dept</p>
                  <p className="font-bold text-white">{selectedPayslip.designation}</p>
                </div>
              </div>

              {/* Earnings vs Deductions */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-950/30 p-3 rounded-xl border border-emerald-800/40 space-y-1.5">
                  <p className="font-bold text-emerald-400 text-[11px]">Gross Earnings</p>
                  <div className="flex justify-between"><span>Basic Pay</span><SensitiveSalaryMask value={selectedPayslip.basic} /></div>
                  <div className="flex justify-between"><span>HRA Allowance</span><SensitiveSalaryMask value={selectedPayslip.hra} /></div>
                  <div className="flex justify-between pt-1 border-t border-emerald-800 font-bold text-white">
                    <span>Total Gross</span><SensitiveSalaryMask value={selectedPayslip.grossPay} className="font-bold text-white" />
                  </div>
                </div>

                <div className="bg-rose-950/30 p-3 rounded-xl border border-rose-800/40 space-y-1.5">
                  <p className="font-bold text-rose-400 text-[11px]">Statutory Deductions</p>
                  <div className="flex justify-between"><span>Provident Fund (EPF)</span><SensitiveSalaryMask value={selectedPayslip.epfEmployee} /></div>
                  <div className="flex justify-between"><span>ESI Deduction</span><SensitiveSalaryMask value={selectedPayslip.esiEmployee} /></div>
                  <div className="flex justify-between pt-1 border-t border-rose-800 font-bold text-white">
                    <span>Total Deductions</span><SensitiveSalaryMask value={selectedPayslip.totalDeductions} className="font-bold text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-950 to-teal-950 p-4 rounded-xl border border-emerald-700/50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-300">Net Take-Home Salary</p>
                  <div className="text-2xl font-extrabold text-white mt-1">
                    <SensitiveSalaryMask value={selectedPayslip.netPay} className="text-2xl font-extrabold text-white" />
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading official PDF Payslip for ${selectedPayslip.employeeName} - Rothe Erde India Pvt. Ltd....`)}
                  className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-emerald-500 transition"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI PAYSLIP EXPLAINER MODAL */}
      {explainerModalText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-2xl glass-modal p-6 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
              <div className="flex items-center gap-2 text-purple-300">
                <Sparkles className="h-5 w-5 animate-pulse text-purple-400" />
                <h3 className="text-sm font-bold text-white">AI Feature 4 • Plain-Language Payslip Explainer</h3>
              </div>
              <button onClick={() => setExplainerModalText(null)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-gray-950/80 p-4 rounded-xl border border-purple-900/50 text-xs text-gray-200 leading-relaxed whitespace-pre-wrap font-sans">
              {explainerModalText}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setExplainerModalText(null)}
                className="rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-500 transition"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
