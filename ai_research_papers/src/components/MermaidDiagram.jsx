import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  themeVariables: {
    fontFamily: 'Inter, sans-serif',
    primaryColor: '#1e293b',
    primaryTextColor: '#f8fafc',
    primaryBorderColor: '#38bdf8',
    lineColor: '#38bdf8',
    secondaryColor: '#0f172a',
    tertiaryColor: '#1e1b4b',
    textColor: '#e2e8f0',
    fontSize: '13px'
  },
  securityLevel: 'loose'
});

export const MermaidDiagram = ({ chart }) => {
  const containerRef = useRef(null);
  const [svg, setSvg] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const renderChart = async () => {
      if (!chart) return;
      try {
        const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        console.error("Mermaid Render Error:", err);
        if (isMounted) {
          setError(err.message || 'Diagram render error');
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 my-4 font-mono text-xs text-slate-400 overflow-x-auto">
        <div className="text-amber-400 font-semibold mb-1">Mermaid Diagram Preview</div>
        <pre className="text-slate-300">{chart}</pre>
      </div>
    );
  }

  return (
    <div 
      className="mermaid-wrapper my-6 p-4 bg-slate-900/60 border border-slate-800 rounded-xl overflow-x-auto flex justify-center shadow-inner"
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
};
