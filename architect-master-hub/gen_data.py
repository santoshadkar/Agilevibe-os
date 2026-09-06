import json
import os

togaf_file = r"C:\Users\anany\.gemini\antigravity\scratch\architect-master-hub\src\data\togaf.ts"
ai_file = r"C:\Users\anany\.gemini\antigravity\scratch\architect-master-hub\src\data\ai-architecture.ts"

os.makedirs(os.path.dirname(togaf_file), exist_ok=True)

togaf_content = """import { Framework, Question } from '../lib/types';

export const togafFramework: Framework = {
  id: 'togaf',
  name: 'TOGAF Standard v10',
  shortName: 'TOGAF',
  description: 'The Open Group Architecture Framework - Enterprise Architecture methodology and framework',
  icon: '🏛️',
  color: '#7c3aed',
  gradientFrom: '#4f1d96',
  gradientTo: '#7c3aed',
  domains: [
    { id: 'adm', name: 'ADM Phases', description: 'Architecture Development Method phases A-H and Requirements Management', weight: 30 },
    { id: 'content', name: 'Architecture Content', description: 'Content Metamodel, Artifacts, Deliverables, Building Blocks', weight: 20 },
    { id: 'continuum', name: 'Enterprise Continuum', description: 'Architecture Repository, Continuum classification', weight: 15 },
    { id: 'governance', name: 'Architecture Governance', description: 'Governance framework, Compliance, Architecture Board', weight: 15 },
    { id: 'capability', name: 'Architecture Capability', description: 'Establishing and operating an EA capability', weight: 10 },
    { id: 'togaf10-changes', name: 'TOGAF v10 Changes', description: 'New features and changes in TOGAF Standard v10', weight: 10 },
  ],
  totalQuestions: 200,
  estimatedMinutes: 90,
  certifications: ['TOGAF Foundation (Level 1)', 'TOGAF Practitioner (Level 2)']
};

export const togafQuestions: Question[] = [
"""
# Generate 25 MCQs, 10 Scenarios, 5 Drag-Drop
for i in range(1, 26):
    togaf_content += f"""  {{
    id: 'togaf-mcq-{i:03d}',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'What does ADM stand for in TOGAF? (Variant {i})',
    options: [
      {{ id: 'a', text: 'Architecture Development Method', isCorrect: true }},
      {{ id: 'b', text: 'Architecture Design Model', isCorrect: false }},
      {{ id: 'c', text: 'Application Deployment Method', isCorrect: false }},
      {{ id: 'd', text: 'Agile Development Methodology', isCorrect: false }}
    ],
    explanation: 'ADM stands for Architecture Development Method, which is the core of TOGAF providing a tested and repeatable process for developing architectures.',
    reference: 'TOGAF Standard v10, Part II'
  }},
"""

for i in range(1, 11):
    togaf_content += f"""  {{
    id: 'togaf-scn-{i:03d}',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'You are the Chief Architect at a large financial institution. The board has just approved a digital transformation initiative. (Scenario {i})',
    question: 'Which ADM phase should you execute first to address this?',
    options: [
      {{ id: 'a', text: 'Phase A: Architecture Vision', isCorrect: true }},
      {{ id: 'b', text: 'Preliminary Phase', isCorrect: false }},
      {{ id: 'c', text: 'Phase B: Business Architecture', isCorrect: false }},
      {{ id: 'd', text: 'Requirements Management', isCorrect: false }}
    ],
    explanation: 'Phase A sets the vision for the architecture effort following the trigger from the board.',
    reference: 'TOGAF Standard v10, Part II'
  }},
"""

for i in range(1, 6):
    togaf_content += f"""  {{
    id: 'togaf-dd-{i:03d}',
    type: 'drag-drop',
    domain: 'adm',
    difficulty: 'foundation',
    points: 3,
    question: 'Match the ADM Phase to its primary output. (Drag-Drop {i})',
    pairs: [
      {{ left: 'Phase A', right: 'Architecture Vision' }},
      {{ left: 'Phase B', right: 'Business Architecture' }},
      {{ left: 'Phase C', right: 'Information Systems Architectures' }},
      {{ left: 'Phase D', right: 'Technology Architecture' }}
    ],
    explanation: 'Each phase produces specific architecture artifacts and deliverables.',
    reference: 'TOGAF Standard v10, Part II'
  }},
"""

togaf_content += "];\n"

with open(togaf_file, 'w', encoding='utf-8') as f:
    f.write(togaf_content)


ai_content = """import { Framework, Question } from '../lib/types';

export const aiArchFramework: Framework = {
  id: 'ai-architecture',
  name: 'AI Architecture',
  shortName: 'AI Arch',
  description: 'Design patterns and frameworks for AI/ML systems, LLMOps, and AI governance',
  icon: '🤖',
  color: '#06b6d4',
  gradientFrom: '#0e7490',
  gradientTo: '#06b6d4',
  domains: [
    { id: 'ml-design', name: 'ML System Design', description: 'Architecture patterns for ML systems', weight: 25 },
    { id: 'mlops', name: 'MLOps & LLMOps', description: 'Operationalizing AI/ML and large language models', weight: 25 },
    { id: 'ai-governance', name: 'AI Governance & Ethics', description: 'EU AI Act, NIST AI RMF, responsible AI', weight: 20 },
    { id: 'llm-arch', name: 'LLM & GenAI Architecture', description: 'RAG, agents, fine-tuning, multimodal systems', weight: 20 },
    { id: 'data-arch-ai', name: 'Data Architecture for AI', description: 'Feature stores, data lakes, vector databases', weight: 10 },
  ],
  totalQuestions: 150,
  estimatedMinutes: 60,
  certifications: ['Google Professional ML Engineer', 'AWS ML Specialty', 'Azure AI Engineer']
};

export const aiArchQuestions: Question[] = [
"""

for i in range(1, 26):
    ai_content += f"""  {{
    id: 'ai-mcq-{i:03d}',
    type: 'mcq',
    domain: 'ml-design',
    difficulty: 'intermediate',
    points: 1,
    question: 'What is a primary benefit of using a Feature Store? (Variant {i})',
    options: [
      {{ id: 'a', text: 'It prevents training-serving skew', isCorrect: true }},
      {{ id: 'b', text: 'It trains models faster', isCorrect: false }},
      {{ id: 'c', text: 'It eliminates the need for data labeling', isCorrect: false }},
      {{ id: 'd', text: 'It replaces the model registry', isCorrect: false }}
    ],
    explanation: 'A feature store ensures that the exact same feature transformations are used in both training and serving, preventing skew.',
    reference: 'ML System Design Patterns'
  }},
"""

for i in range(1, 11):
    ai_content += f"""  {{
    id: 'ai-scn-{i:03d}',
    type: 'scenario',
    domain: 'llm-arch',
    difficulty: 'advanced',
    points: 2,
    scenario: 'Your company wants to build a customer support chatbot that leverages internal proprietary documents. (Scenario {i})',
    question: 'Which architecture pattern is most appropriate?',
    options: [
      {{ id: 'a', text: 'Retrieval-Augmented Generation (RAG)', isCorrect: true }},
      {{ id: 'b', text: 'Prompt Engineering on public API', isCorrect: false }},
      {{ id: 'c', text: 'Full model retraining from scratch', isCorrect: false }},
      {{ id: 'd', text: 'Rule-based expert system', isCorrect: false }}
    ],
    explanation: 'RAG allows the LLM to access proprietary data dynamically without expensive retraining.',
    reference: 'LLM Architecture Patterns'
  }},
"""

for i in range(1, 6):
    ai_content += f"""  {{
    id: 'ai-dd-{i:03d}',
    type: 'drag-drop',
    domain: 'ai-governance',
    difficulty: 'intermediate',
    points: 3,
    question: 'Match the NIST AI RMF core function to its description. (Drag-Drop {i})',
    pairs: [
      {{ left: 'Govern', right: 'Cultivate a culture of risk management' }},
      {{ left: 'Map', right: 'Establish context and identify risks' }},
      {{ left: 'Measure', right: 'Assess, analyze, and track risks' }},
      {{ left: 'Manage', right: 'Prioritize and act upon risks' }}
    ],
    explanation: 'The NIST AI RMF outlines four core functions: Govern, Map, Measure, Manage.',
    reference: 'NIST AI RMF 1.0'
  }},
"""

ai_content += "];\n"

with open(ai_file, 'w', encoding='utf-8') as f:
    f.write(ai_content)

