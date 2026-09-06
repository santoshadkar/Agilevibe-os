import re
from typing import List, Dict, Any
from rank_bm25 import BM25Okapi

class HybridRetriever:
    """Combines Dense Cosine Similarity + Sparse BM25 Keyword Search using RRF (Reciprocal Rank Fusion)."""
    
    def __init__(self, vector_store):
        self.vector_store = vector_store
        self.bm25 = None
        self.all_chunks = []

    def build_bm25_index(self, chunks: List[Dict[str, Any]]):
        """Builds BM25 sparse index over all text chunks."""
        self.all_chunks = chunks
        if not chunks:
            self.bm25 = None
            return

        tokenized_corpus = [self._tokenize(c["text"]) for c in chunks]
        self.bm25 = BM25Okapi(tokenized_corpus)

    def _tokenize(self, text: str) -> List[str]:
        """Simple lower-case alphanumeric tokenization."""
        return re.findall(r'\w+', text.lower())

    def hybrid_search(self, query: str, top_k: int = 4, alpha: float = 0.5) -> List[Dict[str, Any]]:
        """
        Executes Reciprocal Rank Fusion (RRF) combining Dense & BM25 Sparse rankings:
        RRF_Score = 1 / (k + rank_dense) + 1 / (k + rank_bm25)
        """
        # 1. Dense Search
        dense_hits = self.vector_store.dense_search(query, top_k=top_k * 2)
        
        # 2. Sparse BM25 Search
        bm25_hits = []
        if self.bm25 and self.all_chunks:
            tokenized_query = self._tokenize(query)
            bm25_scores = self.bm25.get_scores(tokenized_query)
            
            # Pair scores with chunk objects
            scored_chunks = []
            for i, score in enumerate(bm25_scores):
                if score > 0:
                    scored_chunks.append((score, self.all_chunks[i]))
                    
            scored_chunks.sort(key=lambda x: x[0], reverse=True)
            for score, chunk in scored_chunks[:top_k * 2]:
                bm25_hits.append({
                    "id": chunk["id"],
                    "text": chunk["text"],
                    "metadata": chunk["metadata"],
                    "bm25_score": float(score)
                })

        # 3. Reciprocal Rank Fusion (RRF)
        rrf_scores = {}
        chunk_map = {}
        rrf_k = 60 # RRF constant

        for rank, hit in enumerate(dense_hits):
            cid = hit["id"]
            chunk_map[cid] = hit
            rrf_scores[cid] = rrf_scores.get(cid, 0.0) + (1.0 / (rrf_k + rank + 1))

        for rank, hit in enumerate(bm25_hits):
            cid = hit["id"]
            if cid not in chunk_map:
                chunk_map[cid] = hit
            rrf_scores[cid] = rrf_scores.get(cid, 0.0) + (1.0 / (rrf_k + rank + 1))

        # Sort combined results by RRF score
        sorted_cids = sorted(rrf_scores.keys(), key=lambda cid: rrf_scores[cid], reverse=True)
        
        final_results = []
        for cid in sorted_cids[:top_k]:
            item = chunk_map[cid]
            item["rrf_score"] = float(rrf_scores[cid])
            final_results.append(item)

        return final_results
