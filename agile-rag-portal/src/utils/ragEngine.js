import { INITIAL_KNOWLEDGE_BASE } from '../data/agileKnowledgeBase';

const STORAGE_KEY_CUSTOM_DOCS = 'agilemind_custom_docs';

/**
 * Tokenizer & Normalizer for Vector Processing
 */
export function tokenize(text) {
  if (!text) return [];
  // Convert to lowercase, remove punctuation, split by whitespace, filter stop words
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
    'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'were',
    'will', 'with', 'the', 'this', 'but', 'they', 'have', 'had', 'what', 'when',
    'where', 'who', 'which', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
    'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own',
    'same', 'so', 'than', 'too', 'very', 'can', 'should', 'now'
  ]);

  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !stopWords.has(token));
}

/**
 * Document Chunker: Splits documents into clean semantic chunks
 */
export function chunkDocument(doc, chunkSize = 150, overlap = 30) {
  const words = doc.content.split(/\s+/);
  const chunks = [];
  let index = 0;

  if (words.length <= chunkSize) {
    return [{
      chunkId: `${doc.id}-chunk-0`,
      docId: doc.id,
      title: doc.title,
      category: doc.category,
      tags: doc.tags || [],
      content: doc.content,
      tokens: tokenize(doc.content),
      wordCount: words.length
    }];
  }

  while (index < words.length) {
    const chunkWords = words.slice(index, index + chunkSize);
    const chunkText = chunkWords.join(' ');
    chunks.push({
      chunkId: `${doc.id}-chunk-${chunks.length}`,
      docId: doc.id,
      title: doc.title,
      category: doc.category,
      tags: doc.tags || [],
      content: chunkText,
      tokens: tokenize(chunkText),
      wordCount: chunkWords.length
    });
    index += (chunkSize - overlap);
  }

  return chunks;
}

/**
 * Vector Space Model: TF-IDF Calculator and Cosine Similarity Matcher
 */
export class VectorIndex {
  constructor(documents = []) {
    this.documents = documents;
    this.chunks = [];
    this.vocabulary = new Set();
    this.idfMap = new Map();
    this.rebuildIndex();
  }

  rebuildIndex() {
    this.chunks = [];
    this.vocabulary.clear();
    this.idfMap.clear();

    // 1. Chunk all documents
    for (const doc of this.documents) {
      const docChunks = chunkDocument(doc);
      this.chunks.push(...docChunks);
    }

    // 2. Build vocabulary & document frequency
    const docCount = this.chunks.length;
    const dfMap = new Map();

    for (const chunk of this.chunks) {
      const uniqueTokensInChunk = new Set(chunk.tokens);
      for (const token of uniqueTokensInChunk) {
        this.vocabulary.add(token);
        dfMap.set(token, (dfMap.get(token) || 0) + 1);
      }
    }

    // 3. Compute IDF for each term: log( (N + 1) / (df + 1) ) + 1
    for (const [token, df] of dfMap.entries()) {
      const idf = Math.log((docCount + 1) / (df + 1)) + 1;
      this.idfMap.set(token, idf);
    }

    // 4. Compute TF-IDF vector for each chunk
    for (const chunk of this.chunks) {
      chunk.vector = this.computeTfidfVector(chunk.tokens);
    }
  }

  computeTfidfVector(tokens) {
    const tfMap = new Map();
    for (const t of tokens) {
      tfMap.set(t, (tfMap.get(t) || 0) + 1);
    }

    const vector = new Map();
    let normSq = 0;

    for (const [token, count] of tfMap.entries()) {
      const tf = count / tokens.length;
      const idf = this.idfMap.get(token) || 1.0;
      const weight = tf * idf;
      vector.set(token, weight);
      normSq += weight * weight;
    }

    const norm = Math.sqrt(normSq) || 1.0;
    // Normalize vector
    for (const [token, val] of vector.entries()) {
      vector.set(token, val / norm);
    }

    return vector;
  }

  /**
   * Search query against chunk vectors using Cosine Similarity
   */
  search(query, topK = 4, categoryFilter = null) {
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0) {
      return { topChunks: [], queryTokens: [], executionTimeMs: 0 };
    }

    const startTime = performance.now();
    const queryVector = this.computeTfidfVector(queryTokens);

    const scoredChunks = [];

    for (const chunk of this.chunks) {
      if (categoryFilter && chunk.category !== categoryFilter) {
        continue;
      }

      // Cosine similarity between normalized vectors = dot product
      let dotProduct = 0;
      const matchedTerms = [];

      for (const [token, qWeight] of queryVector.entries()) {
        if (chunk.vector.has(token)) {
          const cWeight = chunk.vector.get(token);
          dotProduct += qWeight * cWeight;
          matchedTerms.push(token);
        }
      }

      // Boost for exact tag or title matches
      let tagBoost = 0;
      const queryLower = query.toLowerCase();
      if (chunk.tags.some(t => queryLower.includes(t.toLowerCase()))) {
        tagBoost += 0.15;
      }
      if (chunk.title.toLowerCase().includes(queryLower)) {
        tagBoost += 0.2;
      }

      const finalScore = Math.min(1.0, dotProduct + tagBoost);

      if (finalScore > 0.05) {
        scoredChunks.push({
          chunk,
          score: finalScore,
          similarityPercentage: Math.round(finalScore * 100),
          matchedTerms: Array.from(new Set(matchedTerms))
        });
      }
    }

    // Sort descending by score
    scoredChunks.sort((a, b) => b.score - a.score);

    const endTime = performance.now();
    return {
      topChunks: scoredChunks.slice(0, topK),
      totalMatches: scoredChunks.length,
      queryTokens,
      executionTimeMs: Math.round((endTime - startTime) * 100) / 100
    };
  }
}

/**
 * Storage Helpers for Custom User Documents
 */
export function getStoredCustomDocuments() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_DOCS);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("Error reading custom documents from localStorage:", err);
    return [];
  }
}

export function saveCustomDocument(doc) {
  const existing = getStoredCustomDocuments();
  const updated = [doc, ...existing.filter(d => d.id !== doc.id)];
  localStorage.setItem(STORAGE_KEY_CUSTOM_DOCS, JSON.stringify(updated));
  return updated;
}

export function deleteCustomDocument(docId) {
  const existing = getStoredCustomDocuments();
  const updated = existing.filter(d => d.id !== docId);
  localStorage.setItem(STORAGE_KEY_CUSTOM_DOCS, JSON.stringify(updated));
  return updated;
}

/**
 * Singleton RAG Vector Index instance loader
 */
let indexInstance = null;

export function getRagIndex() {
  if (!indexInstance) {
    const customDocs = getStoredCustomDocuments();
    const allDocs = [...INITIAL_KNOWLEDGE_BASE, ...customDocs];
    indexInstance = new VectorIndex(allDocs);
  }
  return indexInstance;
}

export function refreshRagIndex() {
  const customDocs = getStoredCustomDocuments();
  const allDocs = [...INITIAL_KNOWLEDGE_BASE, ...customDocs];
  indexInstance = new VectorIndex(allDocs);
  return indexInstance;
}
