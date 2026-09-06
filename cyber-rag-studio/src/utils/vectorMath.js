/**
 * Vector Math & Similarity Utilities for CyberRAG Studio
 */

// Simple tokenizer & word frequency calculator
export function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

// Compute term frequency (TF)
export function getTF(tokens) {
  const tf = {};
  const total = tokens.length || 1;
  tokens.forEach((t) => {
    tf[t] = (tf[t] || 0) + 1 / total;
  });
  return tf;
}

// Compute Cosine Similarity between two vector maps/arrays
export function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  const keys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  keys.forEach((k) => {
    const valA = vecA[k] || 0;
    const valB = vecB[k] || 0;
    dotProduct += valA * valB;
    normA += valA * valA;
    normB += valB * valB;
  });

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Compute Euclidean Distance
export function euclideanDistance(vecA, vecB) {
  let sumSq = 0;
  const keys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  keys.forEach((k) => {
    const diff = (vecA[k] || 0) - (vecB[k] || 0);
    sumSq += diff * diff;
  });
  return Math.sqrt(sumSq);
}

// Project arbitrary high-dimensional vector map to 2D coordinates for Canvas Visualization
export function projectTo2D(item, queryVec, index, total) {
  // Deterministic angle based on index and similarity
  const sim = cosineSimilarity(item.vector, queryVec);
  const dist = (1 - sim) * 220 + 30; // distance from center (higher sim = closer to center)
  
  // Hash title for deterministic angle
  let hash = 0;
  const str = item.title + (item.id || index);
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const angle = Math.abs(hash % 360) * (Math.PI / 180);

  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    similarity: sim,
    distance: dist
  };
}
