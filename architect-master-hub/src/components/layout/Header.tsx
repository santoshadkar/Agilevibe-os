'use client';
import { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [time, setTime] = useState<Date | null>(null);
  const [userName, setUserName] = useState('Architect');

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    const storedName = localStorage.getItem('amh_user_name');
    if (storedName) setUserName(storedName);

    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className="glass"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        marginBottom: '2rem',
        borderBottom: '1px solid var(--border-1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        position: 'sticky',
        top: '1rem',
        zIndex: 40,
        margin: '1rem',
        borderRadius: 'var(--radius-xl)'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <span>Home</span>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{title}</span>
        </div>
        <h1 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
          {title}
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {time && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <Clock size={16} />
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          background: 'var(--surface-2)', 
          padding: '0.5rem 0.75rem', 
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-1)'
        }}>
          <Flame size={18} color="#f97316" style={{ filter: 'drop-shadow(0 0 5px rgba(249,115,22,0.5))' }} />
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>12 Days</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.95rem' }}>Hello, <strong>{userName}</strong></span>
          <Link 
            href="/dashboard"
            style={{
              background: 'linear-gradient(135deg, var(--violet), var(--cyan))',
              color: '#fff',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: 'var(--shadow-glow-violet)'
            }}
          >
            Start Assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
