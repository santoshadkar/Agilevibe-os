import React, { useRef, useState, useEffect } from 'react';
import { 
  Pencil, Eraser, Square, Circle as CircleIcon, Minus, 
  RotateCcw, Download, Upload, Trash2, CheckCircle2, Palette, Image as ImageIcon 
} from 'lucide-react';

export default function DrawingCanvas({ question, userResponse = {}, onSaveCanvas, isReviewMode }) {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [tool, setTool] = useState('pencil'); // pencil, pen, eraser, line, rect, circle
  const [color, setColor] = useState('#1e293b');
  const [lineWidth, setLineWidth] = useState(3);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(userResponse.uploadedImage || null);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill background with white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (userResponse.dataUrl) {
      const img = new Image();
      img.src = userResponse.dataUrl;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  }, []);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    setHistory(prev => [...prev.slice(-10), dataUrl]);
    onSaveCanvas({ dataUrl, uploadedImage });
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    if (isReviewMode) return;
    const pos = getCoordinates(e);
    setIsDrawing(true);
    setStartPos(pos);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = tool === 'eraser' ? lineWidth * 4 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    if (!isDrawing || isReviewMode) return;
    const pos = getCoordinates(e);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'pencil' || tool === 'pen' || tool === 'eraser') {
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
  };

  const stopDrawing = (e) => {
    if (!isDrawing || isReviewMode) return;
    setIsDrawing(false);
    
    const pos = e ? getCoordinates(e) : startPos;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'line') {
      ctx.beginPath();
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    } else if (tool === 'rect') {
      ctx.strokeRect(startPos.x, startPos.y, pos.x - startPos.x, pos.y - startPos.y);
    } else if (tool === 'circle') {
      const radius = Math.sqrt(Math.pow(pos.x - startPos.x, 2) + Math.pow(pos.y - startPos.y, 2));
      ctx.beginPath();
      ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    saveCanvasState();
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveCanvasState();
  };

  const handleUndo = () => {
    if (history.length <= 1) {
      handleClear();
      return;
    }
    const newHist = history.slice(0, -1);
    setHistory(newHist);
    const prevData = newHist[newHist.length - 1];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = prevData;
    img.onload = () => {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      onSaveCanvas({ dataUrl: prevData, uploadedImage });
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgData = event.target.result;
      setUploadedImage(imgData);
      const canvas = canvasRef.current;
      onSaveCanvas({ dataUrl: canvas ? canvas.toDataURL() : '', uploadedImage: imgData });
    };
    reader.readAsDataURL(file);
  };

  const downloadDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `${question.id}_sketch.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const colorPalette = ['#0f172a', '#475569', '#dc2626', '#d97706', '#16a34a', '#2563eb', '#9333ea', '#ffffff'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-main)', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
        {question.question}
      </div>

      <div style={{ background: 'rgba(99, 102, 241, 0.08)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
        <strong>Instructions:</strong> {question.instructions}
      </div>

      {/* Toolbar */}
      {!isReviewMode && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '12px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Tool selectors */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {[
              { id: 'pencil', icon: Pencil, label: 'Pencil' },
              { id: 'eraser', icon: Eraser, label: 'Eraser' },
              { id: 'line', icon: Minus, label: 'Line' },
              { id: 'rect', icon: Square, label: 'Rectangle' },
              { id: 'circle', icon: CircleIcon, label: 'Circle' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTool(t.id)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: tool === t.id ? '#6366f1' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem'
                }}
              >
                <t.icon size={16} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Color palette */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Palette size={16} color="#94a3b8" />
            {colorPalette.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: c,
                  border: color === c ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>

          {/* Stroke Width Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <span>Size:</span>
            <input
              type="range"
              min="1"
              max="20"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              style={{ width: '80px', accentColor: '#6366f1' }}
            />
            <span style={{ fontWeight: '600', color: '#fff' }}>{lineWidth}px</span>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={handleUndo} className="btn-secondary" style={{ padding: '6px 10px', fontSize: '0.8rem' }} title="Undo">
              <RotateCcw size={14} /> Undo
            </button>
            <button onClick={handleClear} className="btn-secondary" style={{ padding: '6px 10px', fontSize: '0.8rem', color: '#f43f5e' }} title="Clear Canvas">
              <Trash2 size={14} /> Clear
            </button>
            <button onClick={downloadDrawing} className="btn-secondary" style={{ padding: '6px 10px', fontSize: '0.8rem' }} title="Download PNG">
              <Download size={14} /> PNG
            </button>
          </div>
        </div>
      )}

      {/* HTML5 Canvas Workspace */}
      <div className="canvas-wrapper" style={{ display: 'flex', justifyContent: 'center', background: '#f8fafc', padding: '10px' }}>
        <canvas
          ref={canvasRef}
          width={760}
          height={480}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          style={{ width: '100%', maxWidth: '760px', height: 'auto', borderRadius: '8px', cursor: tool === 'eraser' ? 'cell' : 'crosshair', background: '#ffffff', touchAction: 'none' }}
        />
      </div>

      {/* Offline Hand Sketch Image Upload Option */}
      <div style={{
        padding: '16px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px border-dashed rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Upload size={18} color="#38bdf8" /> Upload Offline Hand Sketch Photo (Optional)
          </span>
          {!isReviewMode && (
            <button onClick={() => fileInputRef.current.click()} className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.85rem' }}>
              <ImageIcon size={16} /> Select Photo / Scan
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>

        {uploadedImage && (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px' }}>
            <img src={uploadedImage} alt="Uploaded sketch" style={{ width: '120px', height: '90px', objectFit: 'cover', borderRadius: '6px' }} />
            <div>
              <div style={{ color: '#34d399', fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} /> Hand-drawn photo attached successfully!
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
                This sketch photo will be evaluated alongside digital canvas submission.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Evaluation Rubrics */}
      {question.evaluationCriteria && (
        <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <h4 style={{ color: '#fbbf24', fontSize: '0.85rem', marginBottom: '6px' }}>Drawing Assessment Parameters:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {question.evaluationCriteria.map((c, i) => (
              <span key={i} className="badge badge-amber">{c}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
