import os
import requests
from typing import List, Dict, Any, Tuple
from openai import OpenAI

class LLMGenerator:
    """Generates grounded responses using OpenAI, local Ollama, or a fallback engine."""
    
    def __init__(self, provider: str = "openai", api_key: str = None, model: str = "gpt-4o-mini"):
        self.provider = provider
        self.api_key = api_key or os.getenv("OPENAI_API_KEY")
        self.model = model
        
        if provider == "openai" and self.api_key:
            self.client = OpenAI(api_key=self.api_key)
        else:
            self.client = None

    def generate_grounded_answer(self, query: str, context_chunks: List[Dict[str, Any]]) -> Tuple[str, List[Dict[str, Any]]]:
        """
        Synthesizes context chunks into a grounded response with source citations.
        """
        if not context_chunks:
            return "No relevant context found in the knowledge base to answer this query.", []

        # Build context payload with citations
        context_str = ""
        citations = []
        
        for i, chunk in enumerate(context_chunks, 1):
            src = chunk["metadata"].get("source", "Document")
            page = chunk["metadata"].get("page")
            page_info = f", Page {page}" if page else ""
            
            ref_tag = f"[Ref {i}]"
            context_str += f"\n{ref_tag} (Source: {src}{page_info}):\n{chunk['text']}\n"
            
            citations.append({
                "ref": ref_tag,
                "source": src,
                "text": chunk["text"],
                "score": chunk.get("rrf_score") or chunk.get("dense_score", 0.0)
            })

        system_instruction = f"""
You are an expert RAG Assistant. Your objective is to answer the user's question accurately using ONLY the provided retrieved context below.

Rules:
1. Cite references using [Ref 1], [Ref 2], etc., matching the exact sources provided.
2. If the context does not contain enough information, state that clearly without inventing details.
3. Be structured, concise, and highlight technical takeaways.

Retrieved Grounding Context:
{context_str}
"""

        # Generation Logic
        if self.provider == "openai" and self.client:
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=[
                        {"role": "system", "content": system_instruction},
                        {"role": "user", "content": query}
                    ],
                    temperature=0.2
                )
                return response.choices[0].message.content, citations
            except Exception as e:
                return f"[OpenAI API Error: {str(e)}]\n\nFalling back to Grounded Summary:\n" + self._fallback_response(query, citations), citations

        elif self.provider == "ollama":
            try:
                # Local Ollama REST endpoint (http://localhost:11434/api/generate)
                res = requests.post("http://localhost:11434/api/generate", json={
                    "model": self.model or "phi3",
                    "prompt": f"{system_instruction}\nUser Question: {query}\nAnswer:",
                    "stream": False
                }, timeout=10)
                if res.status_code == 200:
                    return res.json().get("response", ""), citations
                else:
                    return f"[Ollama Error: Code {res.status_code}]\n" + self._fallback_response(query, citations), citations
            except Exception:
                return self._fallback_response(query, citations), citations
        else:
            return self._fallback_response(query, citations), citations

    def _fallback_response(self, query: str, citations: List[Dict[str, Any]]) -> str:
        """Fallback grounded response when no cloud API key is configured."""
        summary = f"### Grounded Response for: *'{query}'*\n\n"
        summary += "*(Offline Local Mode — Answer synthesized from top retrieved vector chunks)*\n\n"
        
        for c in citations:
            summary += f"- **{c['ref']}** (*{c['source']}*):\n  \"{c['text'].strip()}\"\n\n"
            
        summary += "\n> 💡 **Tip**: Add an OpenAI API key or launch local `ollama` in the sidebar for full conversational LLM generation!"
        return summary
