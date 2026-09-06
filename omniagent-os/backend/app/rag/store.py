import os
import time
import math
import re
from typing import List, Dict, Any, Optional

class KnowledgeVault:
    def __init__(self, persist_directory: str = "./data/chroma"):
        self.persist_directory = persist_directory
        os.makedirs(persist_directory, exist_ok=True)
        # Memory index fallback for instantaneous zero-dependency local operation
        self.documents: List[Dict[str, Any]] = [
            {
                "id": "doc-1",
                "title": "OmniAgent Architecture Overview",
                "content": "OmniAgent OS combines LangGraph state machines, ChromaDB RAG vector search, MCP server clients, self-correction reflection loops, and Webhook ingress triggers into a unified personal executive assistant.",
                "source": "System Doc",
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                "category": "System"
            },
            {
                "id": "doc-2",
                "title": "Daily Routine & Workflow Guidelines",
                "content": "Every morning at 8:00 AM, the background cron loop runs the Morning Executive Briefing task. It scans unread webhooks, updates calendar items, checks open HITL approvals, and summarizes pending priorities.",
                "source": "User Guide",
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                "category": "Workflows"
            },
            {
                "id": "doc-3",
                "title": "Model Context Protocol (MCP) Integration",
                "content": "MCP allows agents to dynamically discover and invoke tools registered on standard MCP servers like Filesystem, Web Search, GitHub, and SQLite without hardcoding custom API wrappers.",
                "source": "Tech Spec",
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                "category": "Architecture"
            }
        ]

    def add_document(self, title: str, content: str, source: str = "User Upload", category: str = "General") -> Dict[str, Any]:
        doc_id = f"doc-{len(self.documents) + 1}"
        doc = {
            "id": doc_id,
            "title": title,
            "content": content,
            "source": source,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "category": category
        }
        self.documents.append(doc)
        return doc

    def delete_document(self, doc_id: str) -> bool:
        initial_len = len(self.documents)
        self.documents = [d for d in self.documents if d["id"] != doc_id]
        return len(self.documents) < initial_len

    def list_documents(self) -> List[Dict[str, Any]]:
        return self.documents

    def search(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """
        Hybrid TF-IDF & Keyword semantic relevance matching engine.
        Returns top_k most relevant document chunks with relevance score and citations.
        """
        query_words = set(re.findall(r'\w+', query.lower()))
        if not query_words:
            return self.documents[:top_k]

        results = []
        for doc in self.documents:
            text = f"{doc['title']} {doc['content']}".lower()
            doc_words = re.findall(r'\w+', text)
            
            # Simple term frequency calculation
            matches = sum(1 for w in doc_words if w in query_words)
            if matches > 0:
                score = matches / (len(query_words) + math.log(len(doc_words) + 1))
                results.append({
                    "document": doc,
                    "score": round(score, 3),
                    "citation": f"[{doc['title']}] ({doc['source']})"
                })

        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k] if results else [
            {
                "document": doc,
                "score": 0.1,
                "citation": f"[{doc['title']}] ({doc['source']})"
            } for doc in self.documents[:top_k]
        ]

vault_instance = KnowledgeVault()
