'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const aiDomains = [
  { name: 'Machine Learning Concepts & System Design', desc: 'Supervised, unsupervised, streaming, and online inference patterns', weight: '25%', qCount: 38 },
  { name: 'Model Deployment & MLOps / LLMOps', desc: 'Serving, feature stores, monitoring, and pipeline orchestration', weight: '25%', qCount: 38 },
  { name: 'Data Architecture for AI', desc: 'Feature stores, vector databases, data lakes, and pipelines', weight: '15%', qCount: 22 },
  { name: 'AI Ethics & Governance', desc: 'EU AI Act, NIST AI RMF, explainability, and responsible AI', weight: '15%', qCount: 22 },
  { name: 'Generative AI & LLM Architecture', desc: 'RAG pipelines, agents, fine-tuning, and multimodal systems', weight: '20%', qCount: 30 }
];

export default function AIArchPage() {
  return (
    <FrameworkHubView
      id="ai-architecture"
      name="AI Architecture"
      shortName="AI Arch"
      description="Design patterns and frameworks for AI/ML systems, feature stores, MLOps, LLMOps, Retrieval-Augmented Generation (RAG), and responsible AI governance."
      iconName="ai-architecture"
      color="#06b6d4"
      fromColor="#0e7490"
      toColor="#06b6d4"
      totalQuestions={150}
      estimatedMinutes={60}
      certifications={['Google Professional ML Engineer', 'AWS ML Specialty', 'Azure AI Engineer']}
      domains={aiDomains}
    />
  );
}
