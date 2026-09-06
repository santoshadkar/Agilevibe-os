import os

ai_content = "import { Question } from '../lib/types';\n\nexport const aiArchQuestions: Question[] = [\n"

topics_mcq = ["data pipelines", "model deployment", "inference optimization", "training costs", "data drift"]
for i in range(1, 36):
    topic = topics_mcq[i % len(topics_mcq)]
    ai_content += f"""  {{
    id: 'ai-{i:03d}',
    type: 'mcq',
    category: 'AI Architecture',
    difficulty: 'medium',
    text: 'Regarding {topic}, what is a key architectural consideration {i}?',
    options: ['Optimize throughput', 'Minimize latency', 'Maximize model size', 'Reduce security'],
    correctAnswers: ['Optimize throughput'],
    explanation: 'Optimizing throughput is crucial for {topic} in scenario {i}.'
  }},
"""

topics_scenario = ["RAG implementation", "agentic workflows", "feature store latencies", "fine-tuning vs RAG", "multi-modal inference"]
for i in range(36, 46):
    topic = topics_scenario[(i-36) % len(topics_scenario)]
    ai_content += f"""  {{
    id: 'ai-{i:03d}',
    type: 'scenario',
    category: 'AI Architecture',
    difficulty: 'hard',
    text: 'A company is deploying {topic} {i}. They experience high latency. What is the most robust architectural solution?',
    options: ['Implement caching layer', 'Switch to a smaller model', 'Increase batch size', 'Disable logging'],
    correctAnswers: ['Implement caching layer'],
    explanation: 'For {topic}, a caching layer effectively addresses latency {i}.'
  }},
"""

topics_drag = ["vector databases", "embedding models", "prompt templates", "evaluation metrics"]
for i in range(46, 51):
    topic = topics_drag[(i-46) % len(topics_drag)]
    ai_content += f"""  {{
    id: 'ai-{i:03d}',
    type: 'drag-drop',
    category: 'AI Architecture',
    difficulty: 'medium',
    text: 'Match the components correctly for an architecture involving {topic} {i}.',
    draggables: ['Component A', 'Component B', 'Component C'],
    dropZones: ['Zone 1', 'Zone 2', 'Zone 3'],
    correctMapping: {{ 'Zone 1': 'Component A', 'Zone 2': 'Component B', 'Zone 3': 'Component C' }},
    explanation: 'Correct architectural alignment for {topic} {i}.'
  }},
"""

ai_content += "];\n"

cyber_content = "import { Question } from '../lib/types';\n\nexport const cyberQuestions: Question[] = [\n"

c_topics_mcq = ["encryption", "identity access management", "network segmentation", "incident response", "endpoint protection"]
for i in range(1, 33):
    topic = c_topics_mcq[i % len(c_topics_mcq)]
    cyber_content += f"""  {{
    id: 'cyber-{i:03d}',
    type: 'mcq',
    category: 'Cybersecurity',
    difficulty: 'medium',
    text: 'When designing a system for {topic} {i}, which control is most effective?',
    options: ['MFA', 'Single Sign-On', 'Disabling firewalls', 'Using default passwords'],
    correctAnswers: ['MFA'],
    explanation: 'MFA provides strong mitigation for {topic} {i}.'
  }},
"""

c_topics_scenario = ["Zero Trust NIST SP 800-207", "SABSA layers", "cloud threat modeling", "ransomware containment", "insider threat mitigation"]
for i in range(33, 43):
    topic = c_topics_scenario[(i-33) % len(c_topics_scenario)]
    cyber_content += f"""  {{
    id: 'cyber-{i:03d}',
    type: 'scenario',
    category: 'Cybersecurity',
    difficulty: 'hard',
    text: 'An enterprise is applying {topic} principles {i}. A legacy system cannot support modern auth. What is the best compensating control?',
    options: ['Micro-segmentation', 'Risk acceptance', 'Decommissioning', 'Ignoring the issue'],
    correctAnswers: ['Micro-segmentation'],
    explanation: 'Micro-segmentation isolates the legacy system in accordance with {topic} {i}.'
  }},
"""

for i in range(43, 51):
    cyber_content += f"""  {{
    id: 'cyber-{i:03d}',
    type: 'drag-drop',
    category: 'Cybersecurity',
    difficulty: 'medium',
    text: 'Align the SABSA framework attributes to their corresponding elements {i}.',
    draggables: ['Assets', 'Motivation', 'Process'],
    dropZones: ['What', 'Why', 'How'],
    correctMapping: {{ 'What': 'Assets', 'Why': 'Motivation', 'How': 'Process' }},
    explanation: 'SABSA interrogatives {i} correctly mapped.'
  }},
"""

cyber_content += "];\n"

os.makedirs(r'C:\Users\anany\.gemini\antigravity\scratch\architect-master-hub\src\data', exist_ok=True)

with open(r'C:\Users\anany\.gemini\antigravity\scratch\architect-master-hub\src\data\ai-architecture.ts', 'w', encoding='utf-8') as f:
    f.write(ai_content)

with open(r'C:\Users\anany\.gemini\antigravity\scratch\architect-master-hub\src\data\cybersecurity.ts', 'w', encoding='utf-8') as f:
    f.write(cyber_content)

print("Files generated successfully.")
