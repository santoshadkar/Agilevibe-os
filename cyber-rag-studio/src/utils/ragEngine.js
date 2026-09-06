import { cybersecurityKnowledge } from "../data/cybersecurityKnowledge";
import { aiSecurityKnowledge } from "../data/aiSecurityKnowledge";
import { slmVsLlmKnowledge } from "../data/slmVsLlmKnowledge";
import { notebookLlmKnowledge } from "../data/notebookLlmKnowledge";
import { agileKnowledge } from "../data/agileKnowledge";
import { tokenize, getTF, cosineSimilarity } from "./vectorMath";

// Helper to strip double asterisks (**) from text
export function cleanText(str) {
  if (typeof str !== "string") return str;
  return str.replace(/\*\*/g, "");
}

export const ALL_DOMAINS = {
  cybersecurity: { name: "Cybersecurity Threat Intel", data: cybersecurityKnowledge, badge: "CYBER" },
  aiSecurity: { name: "AI & LLM Security", data: aiSecurityKnowledge, badge: "AI-SEC" },
  slmVsLlm: { name: "SLMs vs LLMs Architecture", data: slmVsLlmKnowledge, badge: "SLM/LLM" },
  notebookLlm: { name: "NotebookLLM Studio", data: notebookLlmKnowledge, badge: "NOTEBOOK" },
  agileCoach: { name: "Agile Coaching & Scrum Mastery", data: agileKnowledge, badge: "AGILE" }
};



// Chunk text according to size and overlap settings
export function chunkDocument(documentText, chunkSize = 300, overlap = 50) {
  const words = documentText.split(/\s+/);
  const chunks = [];
  let i = 0;
  
  while (i < words.length) {
    const chunkWords = words.slice(i, i + chunkSize);
    const chunkText = chunkWords.join(" ");
    chunks.push({
      startIndex: i,
      endIndex: i + chunkWords.length,
      text: chunkText,
      tokens: chunkWords.length
    });
    i += (chunkSize - overlap);
  }
  return chunks;
}

// Perform Hybrid RAG Retrieval (Dense Cosine + Sparse Keyword BM25 + RRF Re-ranking)
export function executeRAGQuery(query, domainKey = "all", options = { topK: 3, strategy: "hybrid", chunkSize: 300, overlap: 50 }) {
  const queryTokens = tokenize(query);
  const queryTF = getTF(queryTokens);

  // Gather documents from selected domain or all domains
  let rawDocs = [];
  if (domainKey === "all") {
    Object.values(ALL_DOMAINS).forEach((d) => {
      rawDocs = rawDocs.concat(d.data);
    });
  } else if (ALL_DOMAINS[domainKey]) {
    rawDocs = ALL_DOMAINS[domainKey].data;
  } else {
    Object.values(ALL_DOMAINS).forEach((d) => {
      rawDocs = rawDocs.concat(d.data);
    });
  }

  // Create chunks and vectorize
  const indexedChunks = [];
  rawDocs.forEach((doc) => {
    const docChunks = chunkDocument(doc.content, options.chunkSize, options.overlap);
    docChunks.forEach((chunk, idx) => {
      const chunkTokens = tokenize(chunk.text + " " + doc.title + " " + doc.tags.join(" "));
      const chunkTF = getTF(chunkTokens);
      
      // Dense score
      const denseSim = cosineSimilarity(queryTF, chunkTF);
      
      // Sparse BM25 score simulation
      let sparseScore = 0;
      queryTokens.forEach((qt) => {
        if (chunkTokens.includes(qt)) {
          sparseScore += 1.5;
        }
      });
      
      indexedChunks.push({
        id: `${doc.id}-chunk-${idx}`,
        docId: doc.id,
        docTitle: doc.title,
        category: doc.category,
        tags: doc.tags,
        text: chunk.text,
        tokens: chunk.tokens,
        vector: chunkTF,
        denseScore: denseSim,
        sparseScore: sparseScore
      });
    });
  });

  // Calculate scores based on retrieval strategy
  indexedChunks.forEach((c) => {
    if (options.strategy === "dense") {
      c.finalScore = c.denseScore;
    } else if (options.strategy === "sparse") {
      c.finalScore = c.sparseScore / 5; // normalize
    } else {
      // Hybrid RRF (Reciprocal Rank Fusion) score
      c.finalScore = (0.65 * c.denseScore) + (0.35 * Math.min(1, c.sparseScore / 4));
    }
  });

  // Sort descending
  indexedChunks.sort((a, b) => b.finalScore - a.finalScore);

  const topChunks = indexedChunks.slice(0, options.topK);

  return {
    query,
    queryVector: queryTF,
    allChunks: indexedChunks,
    topChunks,
    totalChunksScored: indexedChunks.length
  };
}

// Generate model responses (LLM vs SLM vs NotebookLLM) with citations
export function generateModelResponses(query, retrievedChunks) {
  const contextText = retrievedChunks
    .map((c, i) => `[Source ${i + 1}: ${c.docTitle}]\n"${c.text}"`)
    .join("\n\n");

  const sourcesList = retrievedChunks.map((c, i) => ({
    id: i + 1,
    title: c.docTitle,
    category: c.category,
    score: (c.finalScore * 100).toFixed(1),
    snippet: c.text.substring(0, 180) + "..."
  }));

  // Helper to remove double asterisks (**) from text
  const removeBoldMarkers = (str) => typeof str === "string" ? str.replace(/\*\*/g, "") : str;

  // Synthesis engine responses simulation
  const gpt4oResponse = removeBoldMarkers(`Based on the ingested threat intelligence and framework documentation [Source 1]:

${retrievedChunks[0]?.text.split('\n')[0] || "Target domain knowledge verified."}

Key Analysis & Action Items:
1. Architectural Guardrails: Enforce strict isolation as specified in [Source 1]. ${retrievedChunks[1] ? `Furthermore, [Source 2] highlights that "${retrievedChunks[1].text.substring(0, 120)}..."` : ''}
2. Mitigation Strategy: Implement dual-LLM validation, continuous SIEM telemetry monitoring, and zero-trust policy enforcement points.
3. Grounding Verification: High confidence score (${(retrievedChunks[0]?.finalScore * 100).toFixed(1)}%) across retrieved knowledge bases.`);

  const phi3Response = removeBoldMarkers(`[Local SLM - Phi-3 Mini 3.8B execution output]:

Analysis of "${query}":
- Main finding: ${retrievedChunks[0]?.text.substring(0, 150)}... [Source 1]
- Recommendation: Deploy 4-bit quantized edge models for air-gapped security operations to prevent data leakage and system prompt exposure.
- Execution Stats: 0.14s latency, 142 tokens/sec, 3.4 GB VRAM used.`);

  const notebookLlmResponse = {
    summary: removeBoldMarkers(`Executive Notebook Briefing on "${query}":\n\n` +
      retrievedChunks.map((c, i) => `• [Ref ${i+1}] ${c.docTitle}: ${c.text.substring(0, 130)}...`).join("\n")),
    podcastScript: [
      { speaker: "Host A (Analytical Lead)", text: removeBoldMarkers(`Hey everyone! Today we're diving deep into our security repository to address: "${query}".`) },
      { speaker: "Host B (Tech Specialist)", text: removeBoldMarkers(`Right! And looking at our primary source document, ${retrievedChunks[0]?.docTitle || "our intelligence data"}, the data is super clear.`) },
      { speaker: "Host A (Analytical Lead)", text: removeBoldMarkers(`Exactly. It says right here: "${retrievedChunks[0]?.text.substring(0, 140)}...". That's a huge deal for enterprise security!`) },
      { speaker: "Host B (Tech Specialist)", text: removeBoldMarkers(`Wait, so how does that compare with Small Language Models vs Cloud LLMs?`) },
      { speaker: "Host A (Analytical Lead)", text: removeBoldMarkers(`SLMs running locally completely eliminate cloud telemetry exposure, keeping enterprise context strictly on-premise!`) }
    ],
    faq: [
      { q: removeBoldMarkers(`What is the primary risk associated with ${query}?`), a: removeBoldMarkers(`${retrievedChunks[0]?.text.substring(0, 180)}... [Source 1]`) },
      { q: removeBoldMarkers(`How do we verify source grounding?`), a: removeBoldMarkers(`By inspecting chunk similarity scores (${(retrievedChunks[0]?.finalScore * 100).toFixed(1)}%) and cross-referencing text boundaries.`) }
    ]
  };

  return {
    contextText,
    sourcesList,
    models: {
      llm: {
        name: "GPT-4o / Claude 3.5 Sonnet (Frontier LLM)",
        badge: "CLOUD LLM",
        response: gpt4oResponse,
        latency: "0.85s",
        tokensPerSec: "75 tok/s",
        cost: "$0.0042",
        accuracyScore: 98.4
      },
      slm: {
        name: "Microsoft Phi-3 Mini / Gemma 2B (Local SLM)",
        badge: "LOCAL SLM",
        response: phi3Response,
        latency: "0.14s",
        tokensPerSec: "158 tok/s",
        cost: "$0.0000 (Local)",
        accuracyScore: 94.2
      },
      notebook: notebookLlmResponse
    }
  };
}

