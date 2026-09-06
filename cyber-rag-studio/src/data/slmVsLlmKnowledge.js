export const slmVsLlmKnowledge = [
  {
    id: "slm-001",
    title: "Small Language Models (SLMs) vs Large Language Models (LLMs) Benchmark",
    category: "Model Architecture & Benchmarks",
    tags: ["SLM", "LLM", "Phi-3", "Gemma 2B", "Llama 3 70B", "GPT-4o"],
    content: `Small Language Models (SLMs) with 1B–7B parameters (e.g., Microsoft Phi-3-mini 3.8B, Google Gemma 2B/7B, Mistral 7B, Qwen 2.5 1.5B) have fundamentally shifted edge deployment.
- Latency & Throughput: SLMs generate 80–180 tokens/second on standard client hardware (Apple M-series or NVIDIA RTX 4060 GPUs), compared to cloud LLMs (GPT-4o, Claude 3.5) with network latency overheads.
- Memory & Quantization: Quantized 4-bit (GGUF Q4_K_M) SLMs require only 2.4 GB to 4.8 GB VRAM, fitting directly on smartphones and SOCs.
- Privacy & Air-Gapped Security: SLMs run completely offline without emitting telemetry or sensitive context to cloud servers, making them ideal for military, healthcare, and air-gapped cybersecurity SOC environments.`,
    score: 0.98
  },
  {
    id: "slm-002",
    title: "RAG Performance Efficiency: SLMs vs LLMs in Document Grounding",
    category: "RAG Architecture & Defense",
    tags: ["RAG Efficiency", "SLM RAG", "Context Window", "Needle In A Haystack"],
    content: `When paired with dense RAG pipelines, SLMs achieve comparable task accuracy to 70B+ LLMs while consuming a fraction of compute cost:
- High Retrieval Precision: SLMs don't need to memorize world knowledge in parameters; RAG provides exact contextual facts dynamically.
- Reduced Context Window Overhead: Feeding targeted top-3 chunks (500 tokens total) to a 3B SLM yields >92% answer fidelity on domain Q&A tasks.
- Cost Comparison: Cloud LLMs cost $2.50–$15.00 per million tokens, whereas self-hosted SLMs run at near-zero marginal inference cost post-deployment.`,
    score: 0.95
  },
  {
    id: "slm-003",
    title: "Quantization Techniques (GGUF, AWQ, GPTQ, FP16 vs INT4)",
    category: "Model Optimization & Quantization",
    tags: ["Quantization", "GGUF", "AWQ", "GPTQ", "VRAM Optimization"],
    content: `Quantization reduces model parameter precision from 16-bit floating point (FP16) to 8-bit or 4-bit integer values:
- GGUF (llama.cpp standard): Popular format supporting CPU/GPU offloading with granular quantization levels (Q4_K_M, Q5_K_S, Q8_0).
- AWQ (Activation-aware Weight Quantization): Protects 1% of salient weights based on activation magnitude, maintaining high accuracy at 4-bit quantization.
- Memory Savings: Reduces a 7B parameter FP16 model from 14 GB VRAM down to 3.8 GB VRAM with under 1.5% perplexity degradation.`,
    score: 0.94
  }
];
