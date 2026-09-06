import React, { useState } from 'react';
import { Calculator, DollarSign, Activity, Cpu, TrendingUp, Zap, ShieldAlert } from 'lucide-react';

export default function Calculators() {
  // FinOps Calculator State
  const [cloudSpend, setCloudSpend] = useState(50000);
  const [llmSpend, setLlmSpend] = useState(15000);

  // AIOps Calculator State
  const [alertVolume, setAlertVolume] = useState(15000);
  const [engRate, setEngRate] = useState(120);

  // MLOps Calculator State
  const [modelCount, setModelCount] = useState(12);
  const [manualDeployDays, setManualDeployDays] = useState(14);

  // FinOps Calculations
  const cloudSavings = Math.round(cloudSpend * 0.32); // 32% waste reduction via rightsizing + RIs
  const llmSavings = Math.round(llmSpend * 0.45); // 45% reduction via caching + model tiering
  const totalAnnualSavings = (cloudSavings + llmSavings) * 12;

  // AIOps Calculations
  const noiseSuppressedAlerts = Math.round(alertVolume * 0.82); // 82% noise reduction
  const incidentTickets = Math.round((alertVolume - noiseSuppressedAlerts) / 5);
  const hoursSavedMonthly = Math.round((noiseSuppressedAlerts * 0.15)); // 9 mins per alert context switch
  const annualAIOpsSavings = Math.round(hoursSavedMonthly * engRate * 12);

  // MLOps Calculations
  const automatedDeployHours = 0.5; // 30 mins automated deploy vs days manual
  const daysSavedPerModel = Math.max(0, manualDeployDays - 0.1);
  const totalEngHoursSavedYearly = Math.round(modelCount * daysSavedPerModel * 8 * 12);
  const mlopsValueCreated = Math.round(totalEngHoursSavedYearly * engRate);

  return (
    <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px 24px 60px 24px' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '20px', fontSize: '0.8rem', color: '#34d399', fontWeight: 600, marginBottom: '12px' }}>
          <Calculator size={14} /> Interactive ROI & Outcome Simulators
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
          Engineering Ops <span className="gradient-text-green">ROI & Impact Calculators</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '800px' }}>
          Adjust operational parameters to model financial savings, engineering hours reclaimed, alert noise suppression, and deployment acceleration across your organization.
        </p>
      </div>

      <div className="grid-3">
        
        {/* 1. FINOPS CALCULATOR */}
        <div className="glass-panel" style={{ padding: '28px', borderTop: '4px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DollarSign size={20} color="#10b981" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>FinOps Spend Optimizer</h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Cloud & GenAI Unit Economics</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Monthly Cloud Spend:</span>
                <strong style={{ color: '#34d399' }}>${cloudSpend.toLocaleString()}</strong>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="300000" 
                step="5000"
                value={cloudSpend} 
                onChange={(e) => setCloudSpend(Number(e.target.value))}
                style={{ accentColor: '#10b981' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Monthly LLM API / GPU Spend:</span>
                <strong style={{ color: '#34d399' }}>${llmSpend.toLocaleString()}</strong>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={llmSpend} 
                onChange={(e) => setLlmSpend(Number(e.target.value))}
                style={{ accentColor: '#10b981' }}
              />
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Projected Annual FinOps Savings</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', margin: '4px 0' }}>
              ${totalAnnualSavings.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
              Includes 32% cloud waste cleanup (RIs/rightsizing) + 45% LLM prompt caching & model tiering.
            </div>
          </div>
        </div>

        {/* 2. AIOPS CALCULATOR */}
        <div className="glass-panel" style={{ padding: '28px', borderTop: '4px solid #06b6d4' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={20} color="#06b6d4" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>AIOps Noise & MTTR Reducer</h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Incident Correlation & Toil Saved</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Monthly Raw Alert Volume:</span>
                <strong style={{ color: '#38bdf8' }}>{alertVolume.toLocaleString()} alerts</strong>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={alertVolume} 
                onChange={(e) => setAlertVolume(Number(e.target.value))}
                style={{ accentColor: '#06b6d4' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Engineer Hourly Rate:</span>
                <strong style={{ color: '#38bdf8' }}>${engRate}/hr</strong>
              </div>
              <input 
                type="range" 
                min="50" 
                max="250" 
                step="10"
                value={engRate} 
                onChange={(e) => setEngRate(Number(e.target.value))}
                style={{ accentColor: '#06b6d4' }}
              />
            </div>
          </div>

          <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Annual Engineering Toil Value Saved</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', margin: '4px 0' }}>
              ${annualAIOpsSavings.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
              Suppresses {noiseSuppressedAlerts.toLocaleString()} duplicate alerts (82% reduction) & reclaims {hoursSavedMonthly * 12} eng hours/yr.
            </div>
          </div>
        </div>

        {/* 3. MLOPS CALCULATOR */}
        <div className="glass-panel" style={{ padding: '28px', borderTop: '4px solid #a855f7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={20} color="#a855f7" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>MLOps Pipeline Accelerator</h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Time-to-Market & Drift Prevention</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Models Managed / Year:</span>
                <strong style={{ color: '#c084fc' }}>{modelCount} models</strong>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                step="1"
                value={modelCount} 
                onChange={(e) => setModelCount(Number(e.target.value))}
                style={{ accentColor: '#a855f7' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Manual Handoff Days / Model:</span>
                <strong style={{ color: '#c084fc' }}>{manualDeployDays} days</strong>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={manualDeployDays} 
                onChange={(e) => setManualDeployDays(Number(e.target.value))}
                style={{ accentColor: '#a855f7' }}
              />
            </div>
          </div>

          <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>ML Velocity Value Unlocked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c084fc', margin: '4px 0' }}>
              ${mlopsValueCreated.toLocaleString()}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
              Reclaims {totalEngHoursSavedYearly.toLocaleString()} data scientist hours annually by automating CI/CD pipelines & CT triggers.
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
