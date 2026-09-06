'use client';

import React, { useState } from 'react';
import { UserRole, Employee } from '../../types/hrms';
import { RotheErdeLogo } from '../ui/RotheErdeLogo';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  Sparkles, 
  Smartphone,
  ShieldAlert,
  MapPin
} from 'lucide-react';

interface LoginPageProps {
  employees: Employee[];
  onLoginSuccess: (employee: Employee, role: UserRole) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ employees, onLoginSuccess }) => {
  const [step, setStep] = useState<'CREDENTIALS' | 'MFA'>('CREDENTIALS');
  
  // Selected Persona / Employee
  const [selectedEmp, setSelectedEmp] = useState<Employee>(
    employees.find(e => e.role === 'HR_ADMIN') || employees[0]
  );
  
  const [emailInput, setEmailInput] = useState(selectedEmp.email);
  const [passwordInput, setPasswordInput] = useState('••••••••••••');
  
  // MFA OTP State
  const [mfaCode, setMfaCode] = useState(['', '', '', '', '', '']);
  const [mfaError, setMfaError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Pre-configured Personas for 1-Click Testing
  const personas: { role: UserRole; title: string; empCode: string; desc: string; empId: string }[] = [
    {
      role: 'HR_ADMIN',
      title: 'HR Admin (Full Access)',
      empCode: 'REI-HR-001',
      desc: 'Payroll Run, Statutory PF/ESI/TDS, AI Excel Importer & System Config',
      empId: 'emp-101'
    },
    {
      role: 'PLANT_SUPERVISOR',
      title: 'Plant Supervisor',
      empCode: 'REI-MFG-101',
      desc: 'Shopfloor Shift Rosters, Overtime (OT) Sign-Off & Attendance',
      empId: 'emp-201'
    },
    {
      role: 'PERMANENT_STAFF',
      title: 'Permanent Engineer',
      empCode: 'REI-ENG-201',
      desc: 'Self-Service Portal, Leave Applications, Payslip Downloads & OKRs',
      empId: 'emp-301'
    },
    {
      role: 'DAILY_WAGE_WORKER',
      title: 'Daily Wage / Labour',
      empCode: 'REI-LAB-501',
      desc: 'Shopfloor Gate Kiosk Check-In, Muster-Roll Record & Night Shift Pay',
      empId: 'emp-401'
    }
  ];

  const handleSelectPersona = (empId: string) => {
    const found = employees.find(e => e.id === empId) || employees[0];
    setSelectedEmp(found);
    setEmailInput(found.email);
    setPasswordInput('••••••••••••');
  };

  const handleProceedToMFA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setStep('MFA');
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[val.length - 1];
    const newCode = [...mfaCode];
    newCode[index] = val;
    setMfaCode(newCode);
    setMfaError(false);

    if (val && index < 5) {
      const nextInput = document.getElementById(`mfa-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleAutoFillDemoMFA = () => {
    setMfaCode(['1', '2', '3', '4', '5', '6']);
    setMfaError(false);
  };

  const handleVerifyMFA = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = mfaCode.join('');
    
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (fullCode === '123456' || fullCode.length === 6) {
        onLoginSuccess(selectedEmp, selectedEmp.role);
      } else {
        setMfaError(true);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#080c14] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-4xl rounded-3xl glass-modal border border-gray-800 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 relative z-10">
        
        {/* Left Branding Side */}
        <div className="md:col-span-5 bg-gradient-to-b from-blue-950/90 via-indigo-950/90 to-purple-950/90 p-8 flex flex-col justify-between border-r border-gray-800/80">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <RotheErdeLogo size="lg" />
              <div>
                <h1 className="text-base font-black text-white tracking-tight uppercase">
                  thyssenkrupp <span className="text-cyan-400 font-extrabold lowercase font-sans">rothe erde</span>
                </h1>
                <p className="text-xs text-blue-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="h-3 w-3 text-cyan-400" /> Rothe Erde India • Gondedumala
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <p className="text-[11px] text-gray-300 leading-relaxed bg-blue-950/40 p-3 rounded-xl border border-blue-800/40">
                Industrial Area, Gondedumala, Maharashtra 422010
              </p>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Multi-Factor Authentication (MFA) Enforced</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <UserCheck className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Unified 750 Workforce Directory & RBAC</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <Sparkles className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                <span>8 Integrated AI Advisory Engines Active</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-900/50 text-[11px] text-gray-400 space-y-1">
            <p className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> ISO 27001 Security Standard
            </p>
            <p>Data Residency: Mumbai (ap-south-1)</p>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="md:col-span-7 p-8 bg-gray-950/80 flex flex-col justify-center">
          
          {/* STEP 1: CREDENTIALS & ROLE PERSONA SELECTOR */}
          {step === 'CREDENTIALS' && (
            <form onSubmit={handleProceedToMFA} className="space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">Rothe Erde Portal Sign In</h2>
                <p className="text-xs text-gray-400 mt-1">Select your Role Persona or enter account credentials</p>
              </div>

              {/* Quick Persona Selectors */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-purple-300 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                  <span>1-Click SME Persona Selector:</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {personas.map(p => (
                    <button
                      key={p.role}
                      type="button"
                      onClick={() => handleSelectPersona(p.empId)}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        selectedEmp.role === p.role 
                          ? 'bg-blue-600/20 border-blue-500 text-white shadow-md' 
                          : 'bg-gray-900/90 border-gray-800 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <p className="text-xs font-bold truncate">{p.title}</p>
                      <p className="text-[10px] text-gray-400 truncate">{p.empCode}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected User Account Highlight */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                <img src={selectedEmp.avatar} alt={selectedEmp.name} className="h-10 w-10 rounded-full object-cover border border-gray-700" />
                <div className="flex-1">
                  <p className="text-xs font-bold text-white">{selectedEmp.name}</p>
                  <p className="text-[11px] text-gray-400">{selectedEmp.designation} • {selectedEmp.department}</p>
                </div>
                <span className="rounded-full bg-blue-950 px-2.5 py-0.5 text-[10px] font-bold text-blue-400 border border-blue-800">
                  {selectedEmp.role}
                </span>
              </div>

              {/* Email & Password Input */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1 block">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full rounded-xl bg-gray-950 pl-9 pr-3 py-2 text-xs text-white border border-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 mb-1 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full rounded-xl bg-gray-950 pl-9 pr-3 py-2 text-xs text-white border border-gray-800 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition"
              >
                <span>Continue to MFA Verification</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          {/* STEP 2: MULTI-FACTOR AUTHENTICATION (MFA) */}
          {step === 'MFA' && (
            <form onSubmit={handleVerifyMFA} className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-1">
                  <Smartphone className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Step 2 of 2 • MFA Challenge</span>
                </div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">Enter 6-Digit MFA Code</h2>
                <p className="text-xs text-gray-400 mt-1">
                  Enter the time-based OTP code sent to your Authenticator App or work mobile (<strong className="text-gray-200">{selectedEmp.phone}</strong>)
                </p>
              </div>

              {/* Auto Fill Helper Chip for SME */}
              <button
                type="button"
                onClick={handleAutoFillDemoMFA}
                className="w-full rounded-xl bg-purple-950/70 p-3 border border-purple-800/50 hover:bg-purple-900/60 transition text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                  <span>SME Demo Test Helper: Auto-Fill MFA Code (123456)</span>
                </div>
                <span className="text-[10px] font-bold text-purple-200 underline">Click to Fill</span>
              </button>

              {/* 6 Digit OTP Inputs */}
              <div className="flex justify-between gap-2">
                {mfaCode.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`mfa-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-11 h-12 rounded-xl bg-gray-950 text-center text-lg font-bold text-white border border-gray-800 focus:border-purple-500 focus:outline-none"
                  />
                ))}
              </div>

              {mfaError && (
                <p className="text-xs font-bold text-rose-400 flex items-center gap-1">
                  <ShieldAlert className="h-4 w-4" /> Invalid MFA Code. Please use test code 123456.
                </p>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep('CREDENTIALS')}
                  className="rounded-xl bg-gray-900 px-4 py-3 text-xs font-bold text-gray-400 hover:text-white transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-lg shadow-purple-500/20 hover:scale-[1.01] transition"
                >
                  {isVerifying ? (
                    <span>Verifying Security Code...</span>
                  ) : (
                    <>
                      <KeyRound className="h-4 w-4" />
                      <span>Verify MFA & Launch Session</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
