import re
from typing import List, Dict, Any

class TextChunker:
    """
    Pure Python Sliding-Window Text Chunker:
    Splits text into chunks of specified size with character overlap without external library dependencies.
    """
    
    def __init__(self, chunk_size: int = 300, chunk_overlap: int = 50):
        self.chunk_size = chunk_size
        self.chunk_overlap = max(0, min(chunk_overlap, chunk_size - 10))

    def chunk_documents(self, documents: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Splits a list of document objects into smaller text chunks with sliding overlap.
        """
        chunks = []
        global_chunk_id = 0
        
        for doc in documents:
            text = doc["text"]
            base_meta = doc["metadata"]
            
            raw_chunks = self._split_text(text)
            for i, chunk_text in enumerate(raw_chunks):
                if not chunk_text.strip():
                    continue
                chunk_meta = base_meta.copy()
                chunk_meta["chunk_id"] = global_chunk_id
                chunk_meta["chunk_index"] = i
                chunk_meta["char_length"] = len(chunk_text)
                
                chunks.append({
                    "id": f"chunk_{global_chunk_id}",
                    "text": chunk_text,
                    "metadata": chunk_meta
                })
                global_chunk_id += 1
                
        return chunks

    def _split_text(self, text: str) -> List[str]:
        """Sliding window text splitter with separator boundaries."""
        if len(text) <= self.chunk_size:
            return [text]

        chunks = []
        start = 0

        while start < len(text):
            end = start + self.chunk_size
            chunk_slice = text[start:end]

            # Try to snap end boundary to natural sentence or line breaks
            if end < len(text):
                last_break = max(
                    chunk_slice.rfind("\n\n"),
                    chunk_slice.rfind("\n"),
                    chunk_slice.rfind(". "),
                    chunk_slice.rfind(" ")
                )
                if last_break > int(self.chunk_size * 0.4):
                    chunk_slice = chunk_slice[:last_break + 1]

            chunks.append(chunk_slice.strip())
            start += max(1, len(chunk_slice) - self.chunk_overlap)

        return chunks
