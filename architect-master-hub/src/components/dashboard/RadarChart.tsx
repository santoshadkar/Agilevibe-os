'use client';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { RadarDataPoint } from '../../lib/types';

interface ArchitectRadarChartProps {
  data: RadarDataPoint[];
  title?: string;
}

export default function ArchitectRadarChart({ data, title }: ArchitectRadarChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="glass" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
        <p style={{ color: 'var(--text-muted)' }}>Not enough data to display chart.</p>
      </div>
    );
  }

  return (
    <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '350px' }}>
      {title && (
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
          {title}
        </h3>
      )}
      <div style={{ flex: 1, width: '100%', minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="var(--border-2)" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-2)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)'
              }}
              itemStyle={{ color: 'var(--cyan)' }}
            />
            <Radar
              name="Score"
              dataKey="score"
              stroke="var(--cyan)"
              strokeWidth={2}
              fill="var(--violet)"
              fillOpacity={0.4}
              isAnimationActive={true}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
