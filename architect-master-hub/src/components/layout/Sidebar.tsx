'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, BookOpen, Shield, Building2, Zap, 
  Settings, User, Home, ChevronLeft, ChevronRight, Brain 
} from 'lucide-react';

interface NavItem {
  type: 'link' | 'divider';
  href?: string;
  label: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { type: 'link', href: '/', label: 'Home', icon: <Home size={20} /> },
  { type: 'link', href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  
  { type: 'divider', label: 'LEARN' },
  { type: 'link', href: '/learn', label: 'Learning Hub', icon: <BookOpen size={20} /> },
  { type: 'link', href: '/learn/togaf', label: 'TOGAF v10', icon: <Building2 size={20} /> },
  { type: 'link', href: '/learn/ai-architecture', label: 'AI Architecture', icon: <Brain size={20} /> },
  { type: 'link', href: '/learn/cybersecurity', label: 'Cybersecurity', icon: <Shield size={20} /> },
  { type: 'link', href: '/learn/enterprise', label: 'Enterprise', icon: <Building2 size={20} /> },
  { type: 'link', href: '/learn/solution', label: 'Solution Arch', icon: <Zap size={20} /> },
  { type: 'link', href: '/learn/technical', label: 'Technical Arch', icon: <Settings size={20} /> },
  
  { type: 'divider', label: 'ASSESS' },
  { type: 'link', href: '/assessment/togaf', label: 'TOGAF Assess', icon: <Building2 size={20} /> },
  { type: 'link', href: '/assessment/ai-architecture', label: 'AI Assess', icon: <Brain size={20} /> },
  { type: 'link', href: '/assessment/cybersecurity', label: 'Cyber Assess', icon: <Shield size={20} /> },
  { type: 'link', href: '/assessment/enterprise', label: 'Ent Assess', icon: <Building2 size={20} /> },
  { type: 'link', href: '/assessment/solution', label: 'Sol Assess', icon: <Zap size={20} /> },
  { type: 'link', href: '/assessment/technical', label: 'Tech Assess', icon: <Settings size={20} /> },
  
  { type: 'divider', label: 'ACCOUNT' },
  { type: 'link', href: '/profile', label: 'Profile', icon: <User size={20} /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Fix hydration issues by avoiding window checking on first render
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = collapsed ? '80px' : '260px';

  return (
    <aside 
      className="glass"
      style={{
        width: isMobile ? '100%' : sidebarWidth,
        height: isMobile ? 'auto' : '100vh',
        position: isMobile ? 'fixed' : 'sticky',
        bottom: isMobile ? 0 : 'auto',
        top: 0,
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        transition: 'width 0.3s ease, padding 0.3s ease',
        zIndex: 50,
        borderRight: isMobile ? 'none' : '1px solid var(--border-1)',
        borderTop: isMobile ? '1px solid var(--border-1)' : 'none',
        borderRadius: isMobile ? 'var(--radius-xl) var(--radius-xl) 0 0' : '0',
        padding: isMobile ? '0.5rem' : '1rem',
      }}
    >
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
              width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 'bold', fontSize: '1.25rem', color: '#fff',
              flexShrink: 0
            }}>
              AMH
            </div>
            {!collapsed && (
              <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                Architect Master Hub
              </span>
            )}
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              display: 'flex',
              padding: '0.25rem',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      )}

      <nav style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: isMobile ? 'row' : 'column', 
        gap: '0.5rem',
        overflowX: isMobile ? 'auto' : 'hidden',
        overflowY: isMobile ? 'hidden' : 'auto',
        paddingBottom: isMobile ? 0 : '1rem'
      }}>
        {navItems.map((item, i) => {
          if (item.type === 'divider') {
            if (isMobile || collapsed) return null;
            return (
              <div key={`div-${i}`} style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
                marginTop: '1rem',
                marginBottom: '0.25rem',
                paddingLeft: '1rem'
              }}>
                {item.label}
              </div>
            );
          }

          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href || '#'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                color: isActive ? '#fff' : 'var(--text-secondary)',
                background: isActive ? 'var(--surface-3)' : 'transparent',
                borderLeft: !isMobile && isActive ? '3px solid var(--violet)' : '3px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? 'inset 0 0 10px rgba(124, 58, 237, 0.1)' : 'none',
                flexShrink: 0,
                justifyContent: collapsed || isMobile ? 'center' : 'flex-start',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'var(--surface-2)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <div style={{ color: isActive ? 'var(--cyan)' : 'inherit' }}>
                {item.icon}
              </div>
              {!collapsed && !isMobile && (
                <span style={{ fontWeight: isActive ? 600 : 400, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {!isMobile && (
        <div style={{ 
          marginTop: 'auto', 
          padding: '1rem',
          textAlign: 'center',
          borderTop: '1px solid var(--border-1)',
          display: collapsed ? 'none' : 'block'
        }}>
          <span style={{ 
            fontSize: '0.75rem', 
            color: 'var(--text-muted)',
            background: 'var(--surface-2)',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--radius-sm)'
          }}>
            v1.0 Premium
          </span>
        </div>
      )}
    </aside>
  );
}
