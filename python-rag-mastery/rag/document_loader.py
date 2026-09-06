import os
import json
from typing import List, Dict, Any
from pypdf import PdfReader

class DocumentLoader:
    """Loads and extracts text content from TXT, MD, PDF, and JSON files."""
    
    @staticmethod
    def load_file(file_path: str) -> List[Dict[str, Any]]:
        """
        Extracts document text and returns a list of document objects:
        [{ "text": "...", "metadata": { "source": "file.pdf", "page": 1 } }]
        """
        ext = os.path.splitext(file_path)[1].lower()
        filename = os.path.basename(file_path)
        
        if ext in ['.txt', '.md']:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            return [{
                "text": content,
                "metadata": {"source": filename, "type": ext[1:].upper()}
            }]
            
        elif ext == '.pdf':
            reader = PdfReader(file_path)
            documents = []
            for i, page in enumerate(reader.pages):
                text = page.extract_text() or ""
                if text.strip():
                    documents.append({
                        "text": text,
                        "metadata": {"source": filename, "page": i + 1, "type": "PDF"}
                    })
            return documents
            
        elif ext == '.json':
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                data = json.load(f)
            
            documents = []
            if isinstance(data, list):
                for idx, item in enumerate(data):
                    text = item.get("content") or item.get("text") or str(item)
                    title = item.get("title") or item.get("topic") or f"Item {idx+1}"
                    documents.append({
                        "text": f"[{title}]\n{text}",
                        "metadata": {"source": filename, "item_id": idx, "type": "JSON"}
                    })
            elif isinstance(data, dict):
                for key, val in data.items():
                    text = val.get("content") if isinstance(val, dict) else str(val)
                    documents.append({
                        "text": f"[{key}]\n{text}",
                        "metadata": {"source": filename, "topic": key, "type": "JSON"}
                    })
            return documents
        else:
            raise ValueError(f"Unsupported file format: {ext}")
