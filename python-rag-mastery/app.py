import os
import streamlit as st
import tempfile
from rag.document_loader import DocumentLoader
from rag.chunker import TextChunker
from rag.vector_store import VectorStoreManager
from rag.hybrid_retriever import HybridRetriever
from rag.llm_generator import LLMGenerator

# Streamlit Page Config
st.set_page_config(
    page_title="Python RAG Mastery from Scratch",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling
st.markdown("""
<style>
    .main-title {
        font-size: 2.2rem;
        font-weight: 800;
        background: linear-gradient(90deg, #06b6d4, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 0.2rem;
    }
    .sub-title {
        color: #94a3b8;
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
    }
    .citation-card {
        background-color: #0f172a;
        border: 1px solid #1e293b;
        border-radius: 8px;
        padding: 12px;
        margin-bottom: 10px;
    }
</style>
""", unsafe_allow_html=True)

# App Header
st.markdown('<div class="main-title">⚡ Python RAG System from Scratch</div>', unsafe_allow_html=True)
st.markdown('<div class="sub-title">Interactive Learning Portal for Retrieval-Augmented Generation (ChromaDB + Hybrid BM25 + Embeddings)</div>', unsafe_allow_html=True)

# Initialize Session State
if "indexed_chunks" not in st.session_state:
    st.session_state.indexed_chunks = []
if "vector_store" not in st.session_state:
    st.session_state.vector_store = None
if "hybrid_retriever" not in st.session_state:
    st.session_state.hybrid_retriever = None

# Sidebar Controls
with st.sidebar:
    st.header("⚙️ RAG Hyperparameters")
    
    # Provider selection
    provider = st.selectbox(
        "LLM Provider",
        options=["Offline Local (Template)", "OpenAI Cloud", "Local Ollama"],
        index=0
    )
    
    openai_key = ""
    ollama_model = "phi3"
    
    if provider == "OpenAI Cloud":
        openai_key = st.text_input("OpenAI API Key", type="password", value=os.getenv("OPENAI_API_KEY", ""))
        model_name = st.selectbox("OpenAI Model", ["gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo"])
    elif provider == "Local Ollama":
        ollama_model = st.text_input("Ollama Model Name", value="phi3")
        model_name = ollama_model
    else:
        model_name = "offline-template"

    st.markdown("---")
    st.subheader("✂️ Chunking & Indexing")
    chunk_size = st.slider("Chunk Size (characters)", min_value=100, max_value=1000, value=300, step=50)
    chunk_overlap = st.slider("Chunk Overlap (characters)", min_value=0, max_value=200, value=50, step=10)
    top_k = st.slider("Top-K Retrieved Chunks", min_value=1, max_value=10, value=3)

    st.markdown("---")
    use_openai_embeddings = st.checkbox("Use OpenAI Embeddings", value=False)
    
    reindex_btn = st.button("🔄 Re-Index Knowledge Base", use_container_width=True)

# Helper function to initialize or re-index
def initialize_knowledge_base(sample_file="data/sample_knowledge.json", custom_files=None):
    with st.spinner("Indexing document chunks into ChromaDB & BM25..."):
        all_docs = []
        
        # Load sample knowledge
        if os.path.exists(sample_file):
            sample_docs = DocumentLoader.load_file(sample_file)
            all_docs.extend(sample_docs)

        # Load custom files
        if custom_files:
            for uploaded_file in custom_files:
                with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(uploaded_file.name)[1]) as tmp:
                    tmp.write(uploaded_file.getvalue())
                    tmp_path = tmp.name
                
                custom_docs = DocumentLoader.load_file(tmp_path)
                all_docs.extend(custom_docs)
                os.remove(tmp_path)

        # Chunking
        chunker = TextChunker(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
        chunks = chunker.chunk_documents(all_docs)
        st.session_state.indexed_chunks = chunks

        # Vector Store
        vstore = VectorStoreManager(
            collection_name="rag_mastery_demo",
            use_openai=use_openai_embeddings,
            openai_api_key=openai_key
        )
        vstore.add_chunks(chunks)
        st.session_state.vector_store = vstore

        # Hybrid Retriever
        retriever = HybridRetriever(vstore)
        retriever.build_bm25_index(chunks)
        st.session_state.hybrid_retriever = retriever

# Initial Auto-Index on first run
if st.session_state.vector_store is None or reindex_btn:
    initialize_knowledge_base()

# Metrics Banner
col1, col2, col3, col4 = st.columns(4)
col1.metric("Indexed Chunks", len(st.session_state.indexed_chunks))
col2.metric("Vector Index", "ChromaDB (Local)")
col3.metric("Embedding Model", "text-embedding-3-small" if use_openai_embeddings else "all-MiniLM-L6-v2")
col4.metric("Search Strategy", "Dense Cosine + BM25 Hybrid")

# Layout Tabs
tab1, tab2, tab3 = st.tabs(["💬 Grounded RAG Assistant", "📂 Document Ingestion & Chunking", "🔍 Vector Search Inspector"])

# TAB 1: Grounded RAG Chat
with tab1:
    st.subheader("Ask Questions Grounded in Knowledge Base")
    
    # Preset Prompts
    st.markdown("**Quick Preset Questions:**")
    presets = [
        "What are Lyssa Adkins 8 Agile Coaching competencies?",
        "How to calculate WSJF prioritization score in SAFe?",
        "Explain MITRE ATT&CK T1190 Initial Access exploit",
        "How to defend against OWASP LLM01 Prompt Injection?",
        "Compare Edge SLMs (Phi-3, Gemma) vs Cloud LLMs"
    ]
    
    selected_preset = st.radio("Select a preset prompt:", presets, index=0, horizontal=True)
    
    user_query = st.text_input("Or enter your custom question:", value=selected_preset)
    
    if st.button("🚀 Execute RAG Query", type="primary"):
        if not user_query.strip():
            st.warning("Please enter a valid query.")
        else:
            with st.spinner("Retrieving vector chunks and generating response..."):
                retriever = st.session_state.hybrid_retriever
                top_chunks = retriever.hybrid_search(user_query, top_k=top_k)
                
                # LLM Generator
                prov_key = "openai" if provider == "OpenAI Cloud" else ("ollama" if provider == "Local Ollama" else "offline")
                generator = LLMGenerator(provider=prov_key, api_key=openai_key, model=model_name)
                
                answer, citations = generator.generate_grounded_answer(user_query, top_chunks)
                
                st.markdown("### 🤖 Grounded AI Response")
                st.markdown(answer)
                
                st.markdown("---")
                st.markdown("### 📚 Source Citations & Retrieved Chunks")
                for cite in citations:
                    with st.expander(f"{cite['ref']} — Source: {cite['source']} (Score: {cite['score']:.4f})"):
                        st.markdown(f"```text\n{cite['text']}\n```")

# TAB 2: Document Ingestion & Chunking
with tab2:
    st.subheader("Upload Custom Files & Inspect Token Chunking")
    
    uploaded_files = st.file_uploader(
        "Drag and drop custom PDF, TXT, MD, or JSON files:",
        type=["pdf", "txt", "md", "json"],
        accept_multiple_files=True
    )
    
    if st.button("⚡ Index Uploaded Documents"):
        if uploaded_files:
            initialize_knowledge_base(custom_files=uploaded_files)
            st.success(f"Successfully indexed {len(uploaded_files)} custom file(s)!")
        else:
            st.info("No files selected. Click 'Re-Index' in sidebar to refresh sample knowledge.")

    st.markdown("---")
    st.subheader("🔍 Chunking Debugger")
    st.write(f"Showing first 10 chunks out of {len(st.session_state.indexed_chunks)} total chunks:")
    
    for c in st.session_state.indexed_chunks[:10]:
        with st.expander(f"Chunk ID: {c['id']} | Source: {c['metadata'].get('source')} | Length: {c['metadata']['char_length']} chars"):
            st.code(c['text'])
            st.json(c['metadata'])

# TAB 3: Vector Search Inspector
with tab3:
    st.subheader("Inspect Dense Cosine & BM25 Search Scores")
    
    search_term = st.text_input("Enter search term to inspect raw vector rankings:", value="Scrum Guide rules")
    
    if search_term:
        retriever = st.session_state.hybrid_retriever
        raw_dense = st.session_state.vector_store.dense_search(search_term, top_k=top_k)
        hybrid_hits = retriever.hybrid_search(search_term, top_k=top_k)
        
        col_a, col_b = st.columns(2)
        
        with col_a:
            st.markdown("#### 🎯 Dense Vector Similarity (Cosine)")
            for hit in raw_dense:
                st.markdown(f"**Score:** `{hit['dense_score']:.4f}` | **Source:** `{hit['metadata'].get('source')}`")
                st.text(hit['text'][:180] + "...")
                st.markdown("---")
                
        with col_b:
            st.markdown("#### 🔀 Hybrid RRF (Dense + BM25)")
            for hit in hybrid_hits:
                st.markdown(f"**RRF Score:** `{hit.get('rrf_score', 0):.4f}` | **Source:** `{hit['metadata'].get('source')}`")
                st.text(hit['text'][:180] + "...")
                st.markdown("---")
