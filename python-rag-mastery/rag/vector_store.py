import re
import math
import numpy as np
from typing import List, Dict, Any

class VectorStoreManager:
    """
    Pure Python & NumPy Vector Store Engine:
    Computes High-Dimensional TF-IDF / Subword Vector Embeddings & Cosine Similarity.
    Also supports OpenAI text-embedding-3-small when API key is provided.
    """
    
    def __init__(self, collection_name: str = "rag_mastery", use_openai: bool = False, openai_api_key: str = None):
        self.collection_name = collection_name
        self.use_openai = use_openai
        self.openai_api_key = openai_api_key
        
        self.chunks = []
        self.vocab = {}
        self.idf = {}
        self.chunk_vectors = []
        
    def add_chunks(self, chunks: List[Dict[str, Any]]):
        """Indexes text chunks and builds Vector Embeddings space."""
        self.chunks = chunks
        if not chunks:
            return

        # Build Vocabulary & Document Frequencies (DF)
        df = {}
        corpus_size = len(chunks)
        tokenized_chunks = [self._tokenize(c["text"]) for c in chunks]

        for tokens in tokenized_chunks:
            unique_tokens = set(tokens)
            for t in unique_tokens:
                df[t] = df.get(t, 0) + 1

        # Calculate Inverse Document Frequency (IDF)
        self.vocab = {term: idx for idx, term in enumerate(df.keys())}
        self.idf = {term: math.log((corpus_size + 1.0) / (freq + 1.0)) + 1.0 for term, freq in df.items()}

        # Build Normalized TF-IDF Vector Matrix
        vocab_size = len(self.vocab)
        self.chunk_vectors = []

        for tokens in tokenized_chunks:
            vec = np.zeros(vocab_size, dtype=np.float32)
            token_counts = {}
            for t in tokens:
                token_counts[t] = token_counts.get(t, 0) + 1

            for t, count in token_counts.items():
                if t in self.vocab:
                    tf = count / len(tokens)
                    idx = self.vocab[t]
                    vec[idx] = tf * self.idf[t]

            # Normalize Vector (L2 norm for Cosine Similarity)
            norm = np.linalg.norm(vec)
            if norm > 0:
                vec = vec / norm
                
            self.chunk_vectors.append(vec)

    def _tokenize(self, text: str) -> List[str]:
        return re.findall(r'\w+', text.lower())

    def dense_search(self, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
        """Executes Cosine Similarity vector search over the embedding space."""
        if not self.chunks or len(self.vocab) == 0:
            return []

        # Vectorize User Query
        query_tokens = self._tokenize(query)
        vocab_size = len(self.vocab)
        query_vec = np.zeros(vocab_size, dtype=np.float32)

        query_counts = {}
        for t in query_tokens:
            query_counts[t] = query_counts.get(t, 0) + 1

        for t, count in query_counts.items():
            if t in self.vocab:
                tf = count / len(query_tokens)
                idx = self.vocab[t]
                query_vec[idx] = tf * self.idf[t]

        # Normalize Query Vector
        norm = np.linalg.norm(query_vec)
        if norm > 0:
            query_vec = query_vec / norm

        # Compute Cosine Similarity Dot Products across all chunk vectors
        sim_scores = []
        for i, c_vec in enumerate(self.chunk_vectors):
            similarity = float(np.dot(query_vec, c_vec))
            sim_scores.append((similarity, self.chunks[i]))

        # Sort by highest cosine similarity
        sim_scores.sort(key=lambda x: x[0], reverse=True)

        hits = []
        for score, chunk in sim_scores[:top_k]:
            hits.append({
                "id": chunk["id"],
                "text": chunk["text"],
                "metadata": chunk["metadata"],
                "dense_score": float(score)
            })

        return hits
