import React, { useState } from 'react';
import { REPORTING_ENGINE_DATA, REPORTING_TEMPLATES_DATA } from '../data/rteData';
import { 
  FileSpreadsheet, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Wand2,
  Calendar,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function ReportingEngine() {
  const [selectedCadenceKey, setSelectedCadenceKey] = useState('weekly'); // 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'halfyear' | 'annual'
  const [artName, setArtName] = useState('Titan Value Stream');
  const [piName, setPiName] = useState('PI-2026.3');
  const [rteName, setRteName] = useState('Sarah Jenkins (RTE)');
  const [predictabilityPct, setPredictabilityPct] = useState('91.5');
  const [flowEfficiency, setFlowEfficiency] = useState('32');
  const [generatedReport, setGeneratedReport] = useState('');
  const [copied, setCopied] = useState(false);

  const cadences = [
    { key: 'weekly', label: 'Weekly SoS Report', dataIdx: 0 },
    { key: 'biweekly', label: 'Bi-Weekly System Demo', dataIdx: 1 },
    { key: 'monthly', label: 'Monthly Flow Metrics', dataIdx: 2 },
    { key: 'quarterly', label: 'Quarterly PI Executive Deck', dataIdx: 3 },
    { key: 'halfyear', label: 'Half-Year Flow Trend', dataIdx: 4 },
    { key: 'annual', label: 'Annual Transformation ROI', dataIdx: 5 },
  ];

  const currentReportData = REPORTING_ENGINE_DATA.find((_, idx) => cadences.find(c => c.key === selectedCadenceKey)?.dataIdx === idx) || REPORTING_ENGINE_DATA[0];

  const handleGenerateTemplate = () => {
    let rawTemplate = REPORTING_TEMPLATES_DATA[selectedCadenceKey] || REPORTING_TEMPLATES_DATA.weekly;
    
    // Substitute variables
    const filled = rawTemplate
      .replace(/{ART_NAME}/g, artName)
      .replace(/{PI_NAME}/g, piName)
      .replace(/{RTE_NAME}/g, rteName)
      .replace(/{DATE}/g, new Date().toLocaleDateString())
      .replace(/{PREDICTABILITY_PCT}/g, predictabilityPct)
      .replace(/{FLOW_EFFICIENCY}/g, flowEfficiency)
      .replace(/{ITERATION_NUMBER}/g, 'Iteration 3')
      .replace(/{PLANNED_LOAD}/g, '450')
      .replace(/{COMPLETED_LOAD}/g, '310')
      .replace(/{EXECUTIVE_SUMMARY}/g, 'ART execution on track. 2 cross-team blockers being actively managed in SoS.')
      .replace(/{DEMOED_FEATURES_COUNT}/g, '4 Integrated Features')
      .replace(/{BUSINESS_OWNERS_LIST}/g, 'VP Product, Lead Architect')
      .replace(/{ACCEPTANCE_SCORE}/g, '9.2')
      .replace(/{FLOW_VELOCITY}/g, '48')
      .replace(/{FLOW_LOAD}/g, '35')
      .replace(/{WIP_LIMIT}/g, '30')
      .replace(/{FLOW_TIME}/g, '14')
      .replace(/{TOTAL_CAPACITY}/g, '500')
      .replace(/{FEATURE_ALLOC}/g, '75')
      .replace(/{TECH_DEBT_ALLOC}/g, '15')
      .replace(/{DEFECT_ALLOC}/g, '10')
      .replace(/{PLANNED_PTS}/g, '450')
      .replace(/{ACHIEVED_PTS}/g, '412')
      .replace(/{RESOLVED_COUNT}/g, '8')
      .replace(/{OWNED_COUNT}/g, '3')
      .replace(/{ACCEPTED_COUNT}/g, '2')
      .replace(/{MITIGATED_COUNT}/g, '5')
      .replace(/{VALUE_STREAM_NAME}/g, 'Global Payments Stream')
      .replace(/{YEAR}/g, '2026')
      .replace(/{V1}/g, '38')
      .replace(/{V2}/g, '48')
      .replace(/{PCT_INC}/g, '26')
      .replace(/{E1}/g, '22')
      .replace(/{E2}/g, '32')
      .replace(/{AVG_PRED}/g, '90.2')
      .replace(/{PORTFOLIO_NAME}/g, 'Enterprise Core Services')
      .replace(/{ANNUAL_OBJECTIVES_COUNT}/g, '34')
      .replace(/{ANNUAL_PRED}/g, '91.8')
      .replace(/{LEAD_TIME_REDUCTION_PCT}/g, '35')
      .replace(/{DEFECT_REDUCTION_PCT}/g, '42');

    setGeneratedReport(filled);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border border-sapphire-500/30 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold">
          <FileSpreadsheet className="w-3.5 h-3.5 text-sapphire-400" />
          <span>Cadence Reporting Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          RTE Executive <span className="text-gradient">Reporting Engine & Templates</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Standardized, executable report templates for every RTE cadence: Weekly SoS, Bi-Weekly System Demo, Monthly Flow Metrics, Quarterly PI Executive Deck, 6-Month Trends, and Annual Transformation ROI.
        </p>
      </div>

      {/* Cadence Selector Buttons */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {cadences.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setSelectedCadenceKey(c.key);
              setGeneratedReport('');
            }}
            className={`px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              selectedCadenceKey === c.key
                ? 'bg-sapphire-600 text-white shadow-glow-sapphire scale-[1.02]'
                : 'bg-navy-900/80 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Interactive Report Generator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Form */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">{currentReportData.cadence}</span>
            <h2 className="text-xl font-heading font-bold text-white">{currentReportData.title}</h2>
          </div>

          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-300 block mb-1">ART Name</label>
                <input
                  type="text"
                  value={artName}
                  onChange={(e) => setArtName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-bold text-slate-300 block mb-1">PI Name</label>
                <input
                  type="text"
                  value={piName}
                  onChange={(e) => setPiName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-300 block mb-1">Predictability Index (%)</label>
                <input
                  type="text"
                  value={predictabilityPct}
                  onChange={(e) => setPredictabilityPct(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="font-bold text-slate-300 block mb-1">Flow Efficiency (%)</label>
                <input
                  type="text"
                  value={flowEfficiency}
                  onChange={(e) => setFlowEfficiency(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sapphire-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
              <strong className="text-slate-400 block">Required Telemetry Items:</strong>
              <ul className="space-y-1 text-slate-300">
                {currentReportData.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleGenerateTemplate}
              className="w-full py-3.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-sapphire transition-all"
            >
              <Wand2 className="w-4 h-4" />
              <span>Synthesize Executable Markdown Report</span>
            </button>
          </div>
        </div>

        {/* Right Output */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider">Report Markdown Output</span>
              {generatedReport && (
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sapphire-600 hover:bg-sapphire-500 text-white text-xs font-semibold"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Report Copied!' : 'Copy Markdown'}</span>
                </button>
              )}
            </div>

            {generatedReport ? (
              <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[420px] overflow-y-auto">
                {generatedReport}
              </pre>
            ) : (
              <div className="h-72 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                <FileSpreadsheet className="w-10 h-10 text-slate-700" />
                <p className="text-xs">Fill in your telemetry parameters and click <strong>"Synthesize Executable Markdown Report"</strong>.</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
