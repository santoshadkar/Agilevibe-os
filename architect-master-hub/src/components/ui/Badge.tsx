'use client';
import React from 'react';

interface BadgeProps {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  glow?: boolean;
}

export default function Badge({ variant, size = 'md', children, glow = false }: BadgeProps) {
  let bg = 'var(--surface-3)';
  let color = 'var(--text-primary)';
  let border = 'var(--border-2)';
  let shadow = 'none';

  switch (variant) {
    case 'success':
      bg = 'rgba(16, 185, 129, 0.1)';
      color = 'var(--emerald)';
      border = 'rgba(16, 185, 129, 0.2)';
      if (glow) shadow = '0 0 10px rgba(16, 185, 129, 0.4)';
      break;
    case 'warning':
      bg = 'rgba(245, 158, 11, 0.1)';
      color = '#fbbf24';
      border = 'rgba(245, 158, 11, 0.2)';
      if (glow) shadow = '0 0 10px rgba(245, 158, 11, 0.4)';
      break;
    case 'danger':
      bg = 'rgba(239, 68, 68, 0.1)';
      color = '#f87171';
      border = 'rgba(239, 68, 68, 0.2)';
      if (glow) shadow = '0 0 10px rgba(239, 68, 68, 0.4)';
      break;
    case 'info':
      bg = 'rgba(6, 182, 212, 0.1)';
      color = 'var(--cyan)';
      border = 'rgba(6, 182, 212, 0.2)';
      if (glow) shadow = 'var(--shadow-glow-cyan)';
      break;
    case 'neutral':
      bg = 'var(--surface-2)';
      color = 'var(--text-secondary)';
      border = 'var(--border-1)';
      break;
  }

  const padding = size === 'sm' ? '0.15rem 0.5rem' : size === 'lg' ? '0.4rem 1rem' : '0.25rem 0.75rem';
  const fontSize = size === 'sm' ? '0.7rem' : size === 'lg' ? '0.9rem' : '0.8rem';

  return (
    <span style={{
      background: bg,
      color,
      border: `1px solid ${border}`,
      padding,
      fontSize,
      borderRadius: 'var(--radius-full)',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: shadow,
      whiteSpace: 'nowrap'
    }}>
      {children}
    </span>
  );
}
