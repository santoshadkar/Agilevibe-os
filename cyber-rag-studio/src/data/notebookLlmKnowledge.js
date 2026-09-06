export const notebookLlmKnowledge = [
  {
    id: "nb-001",
    title: "NotebookLLM Grounded Document Synthesis & Source Citations",
    category: "NotebookLLM Studio",
    tags: ["NotebookLLM", "Source Grounding", "Synthesis", "Citations", "No Hallucination"],
    content: `NotebookLLM redefines document interaction by strictly constraining generative model responses to uploaded target sources:
- Zero-Hallucination Guardrails: Every single sentence in the summary or answer is back-linked to exact line numbers and page numbers in original uploaded PDFs, text files, or web links.
- Multi-Source Correlation: Synthesizes patterns across heterogeneous documents (e.g., combining a malware incident log with an AWS CloudTrail JSON trace and a NIST compliance guideline).
- Instant Artifact Generation: Converts raw research documents into formatted study guides, executive briefs, interactive FAQs, timeline matrices, and Audio Overview scripts.`,
    score: 0.99
  },
  {
    id: "nb-002",
    title: "Audio Overview & Deep Dive Podcast Script Architecture",
    category: "NotebookLLM Studio",
    tags: ["Audio Overview", "Podcast Script", "Host A & B", "Conversational AI"],
    content: `The Audio Overview feature in NotebookLLM synthesizes two AI voices (Host A: The Analytical Deep-Diver, Host B: The Inquisitive Host) who banter and debate technical findings from ingested documents:
- Natural Conversational Dynamics: Includes casual transitions ("Wait, hold on a second...", "That's crazy! So if an attacker uses prompt injection..."), analogies, and tone modulation.
- Source Grounded Scripting: Ensure hosts stay 100% faithful to the factual contents of the uploaded enterprise documents without inventing non-existent incidents.
- Waveform & Audio Player Integration: Renders generated scripts with interactive playback controls, speech synthesis, and speed controls.`,
    score: 0.97
  },
  {
    id: "nb-003",
    title: "Study Guide, Flashcards & Technical FAQ Generator",
    category: "NotebookLLM Studio",
    tags: ["Study Guide", "Flashcards", "FAQ", "Knowledge Testing"],
    content: `NotebookLLM automatically extracts key technical terms, acronyms, core formulas, and threat vectors into structured study materials:
- Interactive Flashcard Deck: Front (Concept / Question) and Back (Grounded Answer & Citation).
- Executive Threat Briefing: Key Findings, Impact Score, Recommended Action Items, and Open Vulnerabilities.
- Technical FAQ: Answers most common enterprise questions regarding security, latency, deployment, and risk mitigation.`,
    score: 0.95
  }
];
