import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '../components/layout/Sidebar';

export const metadata: Metadata = {
  title: 'Architect Master Hub',
  description: 'Master TOGAF, AI Architecture, Cybersecurity, and more with detailed assessments and personalized learning paths',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', position: 'relative', zIndex: 1 }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden', position: 'relative', zIndex: 1 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
