'use client';
import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: number; label: string };
  color?: string;
}

export default function StatsCard({ title, value, subtitle, icon, trend, color = 'var(--cyan)' }: StatsCardProps) {
  return (
    <div 
      className="glass"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 20px -5px ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 500 }}>
          {title}
        </span>
        <div style={{ 
          color: color, 
          background: 'var(--surface-2)',
          padding: '0.5rem',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
          {value}
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {trend && (
            <span style={{ 
              color: trend.value >= 0 ? 'var(--emerald)' : '#f87171',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
          )}
          
          {(subtitle || trend) && (
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {subtitle || (trend && trend.label)}
            </span>
          )}
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '-10px',
        right: '-10px',
        width: '60px',
        height: '60px',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }} />
    </div>
  );
}
