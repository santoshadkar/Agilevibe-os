import React, { useEffect, useRef, useState } from "react";
import { projectTo2D, cosineSimilarity, euclideanDistance } from "../utils/vectorMath";
import { executeRAGQuery } from "../utils/ragEngine";
import { Database, Compass, Eye, Sparkles, Filter } from "lucide-react";

export default function VectorSpaceCanvas({ ragResult, query }) {
  const canvasRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [metricType, setMetricType] = useState("cosine"); // cosine or euclidean

  // Fallback to default RAG vector result if no search query executed yet
  const defaultRagResult = executeRAGQuery(
    "Agile Coaching, Scrum Mastery & AI Security Architecture",
    "all",
    { topK: 3, strategy: "hybrid", chunkSize: 280, overlap: 40 }
  );

  const activeRagResult = ragResult || defaultRagResult;
  const activeQuery = query || "Agile Coaching & AI Security Embedding Vectors";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;


      // Draw background vector space grid & concentric similarity circles
      ctx.strokeStyle = "rgba(30, 41, 59, 0.6)";
      ctx.lineWidth = 1;

      // Distance concentric circles (Cosine Sim concentric rings: 0.9, 0.7, 0.5, 0.3)
      const rings = [40, 90, 150, 210];
      const ringLabels = ["Sim: 0.95", "Sim: 0.75", "Sim: 0.50", "Sim: 0.25"];
      
      rings.forEach((r, idx) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = "rgba(51, 65, 85, 0.5)";
        ctx.stroke();
        ctx.setLineDash([]);

        // Label
        ctx.fillStyle = "#64748b";
        ctx.font = "10px Inter, sans-serif";
        ctx.fillText(ringLabels[idx], centerX + 8, centerY - r + 12);
      });

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - 240, centerY);
      ctx.lineTo(centerX + 240, centerY);
      ctx.moveTo(centerX, centerY - 240);
      ctx.lineTo(centerX, centerY + 240);
      ctx.strokeStyle = "rgba(30, 41, 59, 0.4)";
      ctx.stroke();

      // Draw Center Query Vector Node
      const queryGlow = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, 25);
      queryGlow.addColorStop(0, "rgba(6, 182, 212, 0.8)");
      queryGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = queryGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#06b6d4";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 7 + Math.sin(time * 3) * 1.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Search Vector (Query)", centerX, centerY - 14);

      // Process and plot document chunk nodes
      const chunks = activeRagResult.allChunks || [];
      const topIds = new Set((activeRagResult.topChunks || []).map((c) => c.id));

      chunks.forEach((chunk, i) => {
        const proj = projectTo2D(chunk, activeRagResult.queryVector, i, chunks.length);
        const nodeX = centerX + proj.x;
        const nodeY = centerY + proj.y;

        const isTopK = topIds.has(chunk.id);
        const isHovered = hoveredNode && hoveredNode.id === chunk.id;

        // Draw distance line from query vector to chunk node
        if (isTopK || isHovered) {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(nodeX, nodeY);
          ctx.strokeStyle = isTopK ? "rgba(6, 182, 212, 0.4)" : "rgba(147, 51, 234, 0.3)";
          ctx.lineWidth = isHovered ? 2 : 1;
          ctx.setLineDash(isHovered ? [2, 2] : []);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Node circle
        const radius = isHovered ? 10 : isTopK ? 7 : 5;

        if (isTopK) {
          ctx.fillStyle = "rgba(16, 185, 129, 0.3)";
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, radius + 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isTopK ? "#10b981" : isHovered ? "#a855f7" : "#64748b";
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Node Title Label
        if (isTopK || isHovered) {
          ctx.fillStyle = isTopK ? "#34d399" : "#c084fc";
          ctx.font = isHovered ? "bold 11px Inter, sans-serif" : "10px Inter, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(
            `${chunk.docTitle.substring(0, 22)}... (${(chunk.finalScore * 100).toFixed(0)}%)`,
            nodeX,
            nodeY + radius + 14
          );
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeRagResult, hoveredNode]);

  // Handle Mouse Move for tooltips
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || !activeRagResult) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const chunks = activeRagResult.allChunks || [];
    let found = null;

    chunks.forEach((chunk, i) => {
      const proj = projectTo2D(chunk, activeRagResult.queryVector, i, chunks.length);
      const nodeX = centerX + proj.x;
      const nodeY = centerY + proj.y;

      const dist = Math.hypot(mouseX - nodeX, mouseY - nodeY);
      if (dist < 14) {
        found = chunk;
      }
    });

    setHoveredNode(found);
  };


  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-indigo-400" />
            <h3 className="font-bold text-lg text-slate-100">
              Vector Space Canvas (High-Dimensional Embedding Projections)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            2D PCA projection of TF-IDF & Dense Embeddings. Top-K nearest neighbors highlighted in emerald.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMetricType("cosine")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              metricType === "cosine"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Cosine Similarity
          </button>
          <button
            onClick={() => setMetricType("euclidean")}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              metricType === "euclidean"
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            Euclidean Distance
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative flex justify-center items-center bg-slate-950/80 rounded-xl border border-slate-800/80 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={640}
          height={480}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredNode(null)}
          className="cursor-crosshair w-full max-w-[640px] h-auto"
        />

        {/* Hovered Node Tooltip Floating Overlay */}
        {hoveredNode && (
          <div className="absolute top-4 right-4 bg-slate-900/95 border border-purple-500/40 backdrop-blur-md rounded-xl p-3.5 max-w-xs text-xs shadow-2xl z-20">
            <div className="flex items-center justify-between font-bold text-purple-300 mb-1">
              <span>{hoveredNode.docTitle}</span>
              <span className="bg-purple-950 text-purple-400 px-2 py-0.5 rounded text-[10px]">
                Score: {(hoveredNode.finalScore * 100).toFixed(1)}%
              </span>
            </div>
            <p className="text-slate-300 italic mb-2 line-clamp-3">
              "{hoveredNode.text}"
            </p>
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-1.5">
              <span>Dense Cosine: {(hoveredNode.denseScore * 100).toFixed(1)}%</span>
              <span>Tokens: {hoveredNode.tokens}</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800/80 gap-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
            <span>Search Query</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span>Top-K Retrieved Chunks</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-slate-500" />
            <span>Unretrieved Vectors</span>
          </div>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Total Indexed Vectors: {activeRagResult?.totalChunksScored || 0}
        </div>

      </div>
    </div>
  );
}
