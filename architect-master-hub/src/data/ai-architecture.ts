import { Framework, Question } from '../lib/types';

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
  // MCQs (1-25)
  {
    id: 'ai-001',
    type: 'mcq' as const,
    domain: 'ml-design',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which architecture pattern separates online feature computation from offline batch training?',
    options: [
      { id: 'a', text: 'Lambda Architecture', isCorrect: true },
      { id: 'b', text: 'Kappa Architecture', isCorrect: false },
      { id: 'c', text: 'Microservices Architecture', isCorrect: false },
      { id: 'd', text: 'Event Sourcing', isCorrect: false }
    ],
    explanation: 'Lambda Architecture uses both batch and speed layers, separating offline training from real-time serving.',
    reference: 'Designing Machine Learning Systems, Chip Huyen'
  },
  {
    id: 'ai-002',
    type: 'mcq' as const,
    domain: 'data-arch-ai',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the primary role of a Feature Store in an ML architecture?',
    options: [
      { id: 'a', text: 'To store pre-trained foundation models', isCorrect: false },
      { id: 'b', text: 'To serve as a central repository for ML features, preventing training-serving skew', isCorrect: true },
      { id: 'c', text: 'To label unstructured data automatically', isCorrect: false },
      { id: 'd', text: 'To manage model deployments across clouds', isCorrect: false }
    ],
    explanation: 'Feature stores provide consistent feature definitions and values for both training (offline) and inference (online), preventing training-serving skew.',
    reference: 'ML System Design Patterns'
  },
  {
    id: 'ai-003',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In MLOps, what is the main purpose of a Model Registry?',
    options: [
      { id: 'a', text: 'To track model versions, lineage, and lifecycle stages (e.g. Staging, Production)', isCorrect: true },
      { id: 'b', text: 'To distribute training data across GPU clusters', isCorrect: false },
      { id: 'c', text: 'To write code for neural networks', isCorrect: false },
      { id: 'd', text: 'To compile models for edge devices', isCorrect: false }
    ],
    explanation: 'A model registry is a centralized store for managing the lifecycle of ML models, including versioning and stage transitions.',
    reference: 'MLOps principles'
  },
  {
    id: 'ai-004',
    type: 'mcq' as const,
    domain: 'llm-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the key advantage of Retrieval-Augmented Generation (RAG) over model fine-tuning?',
    options: [
      { id: 'a', text: 'RAG requires less computing power at inference time', isCorrect: false },
      { id: 'b', text: 'RAG allows the model to access up-to-date, external knowledge without retraining', isCorrect: true },
      { id: 'c', text: 'RAG fundamentally changes the weights of the foundation model', isCorrect: false },
      { id: 'd', text: 'RAG eliminates the need for prompts', isCorrect: false }
    ],
    explanation: 'RAG retrieves relevant context at runtime and passes it to the LLM, ensuring responses are grounded in current, external data without expensive retraining.',
    reference: 'LLM Architecture Patterns'
  },
  {
    id: 'ai-005',
    type: 'mcq' as const,
    domain: 'llm-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which of the following best describes the ReAct pattern for LLM Agents?',
    options: [
      { id: 'a', text: 'Reactive programming for UI updates', isCorrect: false },
      { id: 'b', text: 'Interleaving Reasoning (chain-of-thought) and Acting (tool use) in a continuous loop', isCorrect: true },
      { id: 'c', text: 'Re-activating dormant neurons in a neural network', isCorrect: false },
      { id: 'd', text: 'A data pipeline that reacts to streaming data', isCorrect: false }
    ],
    explanation: 'ReAct (Reasoning and Acting) prompts the LLM to think about its next step, choose a tool, observe the result, and repeat until the task is solved.',
    reference: 'Agentic AI Architectures'
  },
  {
    id: 'ai-006',
    type: 'mcq' as const,
    domain: 'ai-governance',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Under the EU AI Act, how are AI systems that manipulate human behavior or exploit vulnerabilities classified?',
    options: [
      { id: 'a', text: 'High Risk', isCorrect: false },
      { id: 'b', text: 'Unacceptable Risk', isCorrect: true },
      { id: 'c', text: 'Limited Risk', isCorrect: false },
      { id: 'd', text: 'Minimal Risk', isCorrect: false }
    ],
    explanation: 'Systems presenting an unacceptable risk (such as subliminal manipulation or social scoring) are prohibited under the EU AI Act.',
    reference: 'EU AI Act'
  },
  {
    id: 'ai-007',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What phenomenon occurs when the statistical properties of the target variable change over time, degrading model performance?',
    options: [
      { id: 'a', text: 'Data Drift', isCorrect: false },
      { id: 'b', text: 'Concept Drift', isCorrect: true },
      { id: 'c', text: 'Training Skew', isCorrect: false },
      { id: 'd', text: 'Overfitting', isCorrect: false }
    ],
    explanation: 'Concept drift refers to a shift in the relationship between the inputs and the target variable, meaning the concept being learned has changed.',
    reference: 'ML System Monitoring'
  },
  {
    id: 'ai-008',
    type: 'mcq' as const,
    domain: 'data-arch-ai',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the primary function of a Vector Database in an AI application?',
    options: [
      { id: 'a', text: 'To store highly structured relational data', isCorrect: false },
      { id: 'b', text: 'To index and quickly search high-dimensional embeddings for semantic similarity', isCorrect: true },
      { id: 'c', text: 'To store time-series telemetry metrics for models', isCorrect: false },
      { id: 'd', text: 'To replace standard SQL databases entirely', isCorrect: false }
    ],
    explanation: 'Vector databases are optimized for storing and querying embeddings using approximate nearest neighbor search to find semantically similar items.',
    reference: 'Data Architecture for AI'
  },
  {
    id: 'ai-009',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'When performing A/B testing on an ML model in production, what is being evaluated?',
    options: [
      { id: 'a', text: 'Code syntax differences between version A and B', isCorrect: false },
      { id: 'b', text: 'The offline validation loss of two different algorithms', isCorrect: false },
      { id: 'c', text: 'The real-world business impact or user behavior when comparing model A against model B', isCorrect: true },
      { id: 'd', text: 'The compilation time of the models', isCorrect: false }
    ],
    explanation: 'A/B testing involves directing live traffic to different models to measure real-world impact and business metrics.',
    reference: 'MLOps Deployment Strategies'
  },
  {
    id: 'ai-010',
    type: 'mcq' as const,
    domain: 'ai-governance',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'According to Responsible AI principles, what does "Explainability" refer to?',
    options: [
      { id: 'a', text: 'The ability of a system to translate languages', isCorrect: false },
      { id: 'b', text: 'The ability to understand and articulate how an AI model arrived at a specific decision', isCorrect: true },
      { id: 'c', text: 'The ability of the model to explain its source code', isCorrect: false },
      { id: 'd', text: 'The speed at which the model responds', isCorrect: false }
    ],
    explanation: 'Explainability ensures transparency, allowing humans to comprehend the reasoning behind AI-driven outcomes.',
    reference: 'Responsible AI Principles'
  },
  {
    id: 'ai-011',
    type: 'mcq' as const,
    domain: 'ml-design',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In batch inference architectures, what is typically used to handle the workload?',
    options: [
      { id: 'a', text: 'Low-latency REST APIs', isCorrect: false },
      { id: 'b', text: 'Distributed data processing frameworks like Apache Spark', isCorrect: true },
      { id: 'c', text: 'Synchronous gRPC endpoints', isCorrect: false },
      { id: 'd', text: 'In-memory caches exclusively', isCorrect: false }
    ],
    explanation: 'Batch inference usually involves running predictions over large datasets offline, leveraging distributed frameworks like Spark.',
    reference: 'ML System Design Patterns'
  },
  {
    id: 'ai-012',
    type: 'mcq' as const,
    domain: 'llm-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is parameter-efficient fine-tuning (PEFT)?',
    options: [
      { id: 'a', text: 'Training a model from scratch with fewer parameters', isCorrect: false },
      { id: 'b', text: 'Updating all weights of a foundation model using distributed training', isCorrect: false },
      { id: 'c', text: 'Updating only a small subset of parameters (e.g. using LoRA) to adapt a large model cheaply', isCorrect: true },
      { id: 'd', text: 'Prompt engineering techniques to reduce token usage', isCorrect: false }
    ],
    explanation: 'PEFT techniques like LoRA allow adapting large models by training a very small number of extra parameters, saving memory and compute.',
    reference: 'GenAI Architecture'
  },
  {
    id: 'ai-013',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What role does MLflow play in an MLOps architecture?',
    options: [
      { id: 'a', text: 'It is a database for storing unstructured images', isCorrect: false },
      { id: 'b', text: 'It manages the end-to-end ML lifecycle including experiment tracking, reproducibility, and deployment', isCorrect: true },
      { id: 'c', text: 'It is an algorithm for training deep neural networks', isCorrect: false },
      { id: 'd', text: 'It is a cloud hosting provider', isCorrect: false }
    ],
    explanation: 'MLflow is a popular open-source platform to manage the ML lifecycle, focusing on tracking experiments, packaging code, and sharing models.',
    reference: 'MLOps Tools'
  },
  {
    id: 'ai-014',
    type: 'mcq' as const,
    domain: 'data-arch-ai',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In a modern data architecture for AI, what is a "Data Lakehouse"?',
    options: [
      { id: 'a', text: 'A small physical server for data storage', isCorrect: false },
      { id: 'b', text: 'A hybrid architecture combining the flexibility of data lakes with the data management features of data warehouses', isCorrect: true },
      { id: 'c', text: 'A graph database optimized for relations', isCorrect: false },
      { id: 'd', text: 'An exclusively streaming data platform', isCorrect: false }
    ],
    explanation: 'Lakehouses provide scalable storage for raw unstructured data while enabling ACID transactions and structured querying capabilities.',
    reference: 'Data Architecture'
  },
  {
    id: 'ai-015',
    type: 'mcq' as const,
    domain: 'ai-governance',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the purpose of the NIST AI Risk Management Framework (AI RMF)?',
    options: [
      { id: 'a', text: 'To mandate specific algorithms for US companies', isCorrect: false },
      { id: 'b', text: 'To provide a voluntary framework to better manage risks associated with AI systems', isCorrect: true },
      { id: 'c', text: 'To enforce GDPR compliance', isCorrect: false },
      { id: 'd', text: 'To eliminate all risks in AI systems', isCorrect: false }
    ],
    explanation: 'NIST AI RMF is a voluntary resource designed to help organizations integrate risk management into the design and use of AI.',
    reference: 'NIST AI RMF'
  },
  {
    id: 'ai-016',
    type: 'mcq' as const,
    domain: 'llm-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'When designing a multimodal AI system, what is the primary challenge?',
    options: [
      { id: 'a', text: 'Integrating and aligning different data modalities (e.g. text, image, audio) into a shared representation space', isCorrect: true },
      { id: 'b', text: 'Writing HTML code for the frontend', isCorrect: false },
      { id: 'c', text: 'Reducing the size of the database', isCorrect: false },
      { id: 'd', text: 'Choosing between AWS and Azure', isCorrect: false }
    ],
    explanation: 'Multimodal systems must process and relate diverse types of data, requiring complex alignment in their latent spaces.',
    reference: 'GenAI Architecture'
  },
  {
    id: 'ai-017',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In a continuous training (CT) pipeline, what typically triggers a model retraining event?',
    options: [
      { id: 'a', text: 'A manual request from the CEO', isCorrect: false },
      { id: 'b', text: 'Detection of data drift, performance degradation, or scheduled intervals', isCorrect: true },
      { id: 'c', text: 'A change in the frontend UI', isCorrect: false },
      { id: 'd', text: 'Upgrading the operating system on a server', isCorrect: false }
    ],
    explanation: 'CT pipelines automate the retraining process, often triggered by monitoring systems detecting drift or accuracy drops.',
    reference: 'MLOps Architecture'
  },
  {
    id: 'ai-018',
    type: 'mcq' as const,
    domain: 'ml-design',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which deployment strategy routes a small percentage of live traffic to a new model version while keeping the rest on the old version?',
    options: [
      { id: 'a', text: 'Blue-Green Deployment', isCorrect: false },
      { id: 'b', text: 'Canary Deployment', isCorrect: true },
      { id: 'c', text: 'Shadow Deployment', isCorrect: false },
      { id: 'd', text: 'Big Bang Deployment', isCorrect: false }
    ],
    explanation: 'Canary deployments minimize risk by exposing the new model to a small subset of users before a full rollout.',
    reference: 'MLOps Deployment Patterns'
  },
  {
    id: 'ai-019',
    type: 'mcq' as const,
    domain: 'ai-governance',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is a core tenet of Fairness in AI?',
    options: [
      { id: 'a', text: 'Ensuring the model predicts with 100% accuracy for all classes', isCorrect: false },
      { id: 'b', text: 'Ensuring AI systems do not disproportionately harm or disadvantage specific demographic groups', isCorrect: true },
      { id: 'c', text: 'Paying data labelers a fair wage', isCorrect: false },
      { id: 'd', text: 'Providing free access to all models', isCorrect: false }
    ],
    explanation: 'Fairness in AI aims to mitigate algorithmic bias and prevent discrimination against protected groups.',
    reference: 'Responsible AI'
  },
  {
    id: 'ai-020',
    type: 'mcq' as const,
    domain: 'data-arch-ai',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the purpose of an embedding model in a RAG architecture?',
    options: [
      { id: 'a', text: 'To generate the final natural language response', isCorrect: false },
      { id: 'b', text: 'To compress the context window', isCorrect: false },
      { id: 'c', text: 'To convert text chunks and user queries into dense vectors for similarity search', isCorrect: true },
      { id: 'd', text: 'To fine-tune the LLM', isCorrect: false }
    ],
    explanation: 'Embedding models translate text into vector space, enabling semantic retrieval from vector databases.',
    reference: 'LLM Architecture'
  },
  {
    id: 'ai-021',
    type: 'mcq' as const,
    domain: 'ml-design',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'When is a Shadow Deployment strategy most useful?',
    options: [
      { id: 'a', text: 'When you want to replace the old model immediately', isCorrect: false },
      { id: 'b', text: 'When testing a new model with live traffic without affecting the end-user response', isCorrect: true },
      { id: 'c', text: 'When deploying to edge devices only', isCorrect: false },
      { id: 'd', text: 'When you have no monitoring infrastructure', isCorrect: false }
    ],
    explanation: 'In a shadow deployment, the new model processes live requests alongside the production model, but its outputs are not returned to the user, allowing safe evaluation.',
    reference: 'MLOps Deployment Patterns'
  },
  {
    id: 'ai-022',
    type: 'mcq' as const,
    domain: 'llm-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What architectural mechanism allows LLMs to interact with external systems (like APIs or calculators)?',
    options: [
      { id: 'a', text: 'Tool Use / Function Calling', isCorrect: true },
      { id: 'b', text: 'Model distillation', isCorrect: false },
      { id: 'c', text: 'Quantization', isCorrect: false },
      { id: 'd', text: 'Hyperparameter tuning', isCorrect: false }
    ],
    explanation: 'Function calling allows the LLM to output structured data indicating which tool to call and with what arguments.',
    reference: 'Agentic AI Architectures'
  },
  {
    id: 'ai-023',
    type: 'mcq' as const,
    domain: 'mlops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is an essential component of a reproducible ML pipeline?',
    options: [
      { id: 'a', text: 'Manual Jupyter notebooks', isCorrect: false },
      { id: 'b', text: 'Hardcoded file paths', isCorrect: false },
      { id: 'c', text: 'Data and code versioning (e.g. DVC, Git)', isCorrect: true },
      { id: 'd', text: 'A single monolithic script', isCorrect: false }
    ],
    explanation: 'Reproducibility requires tracking exactly which version of code, data, and hyperparameters produced a specific model.',
    reference: 'MLOps Principles'
  },
  {
    id: 'ai-024',
    type: 'mcq' as const,
    domain: 'ai-governance',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Under the EU AI Act, AI systems used in critical infrastructure or employment are generally classified as:',
    options: [
      { id: 'a', text: 'Unacceptable Risk', isCorrect: false },
      { id: 'b', text: 'High Risk', isCorrect: true },
      { id: 'c', text: 'Limited Risk', isCorrect: false },
      { id: 'd', text: 'Minimal Risk', isCorrect: false }
    ],
    explanation: 'These systems pose a significant threat to health, safety, or fundamental rights and face strict compliance obligations.',
    reference: 'EU AI Act'
  },
  {
    id: 'ai-025',
    type: 'mcq' as const,
    domain: 'data-arch-ai',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the purpose of chunking in a RAG pipeline?',
    options: [
      { id: 'a', text: 'To break down large documents into smaller segments for better retrieval accuracy and to fit within context windows', isCorrect: true },
      { id: 'b', text: 'To group identical queries together', isCorrect: false },
      { id: 'c', text: 'To divide the neural network into smaller layers', isCorrect: false },
      { id: 'd', text: 'To compress vector embeddings', isCorrect: false }
    ],
    explanation: 'Chunking ensures that retrieved information is highly relevant and fits within the LLMs token limits.',
    reference: 'LLM Architecture Patterns'
  },

  // SCENARIOS (26-35)
  {
    id: 'ai-026',
    type: 'scenario' as const,
    domain: 'mlops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your ML model has been deployed in production for 3 months. The data science team notices that model accuracy has dropped from 94% to 78% over the past two weeks. The input data distribution appears to have shifted significantly.',
    question: 'What is the most appropriate initial architectural response to this situation?',
    options: [
      { id: 'a', text: 'Immediately retrain the model on recent data', isCorrect: false },
      { id: 'b', text: 'Implement automated data drift detection and trigger a retraining pipeline', isCorrect: true },
      { id: 'c', text: 'Roll back to the previous model version', isCorrect: false },
      { id: 'd', text: 'Increase the training dataset size', isCorrect: false }
    ],
    explanation: 'Automated drift detection with triggered retraining is the architectural solution - it addresses the root cause systematically rather than as a one-time fix.',
    reference: 'MLOps: Continuous Delivery for ML'
  },
  {
    id: 'ai-027',
    type: 'scenario' as const,
    domain: 'llm-arch',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are designing a customer support chatbot that must answer questions based on a rapidly changing database of thousands of product manuals. The company cannot afford to retrain the model every time a manual is updated.',
    question: 'Which architectural pattern is most suited for this requirement?',
    options: [
      { id: 'a', text: 'Continuous Pre-training', isCorrect: false },
      { id: 'b', text: 'Retrieval-Augmented Generation (RAG)', isCorrect: true },
      { id: 'c', text: 'Parameter-Efficient Fine-Tuning (PEFT)', isCorrect: false },
      { id: 'd', text: 'Rule-based expert system', isCorrect: false }
    ],
    explanation: 'RAG dynamically retrieves the most current manuals from a database at query time, bypassing the need to retrain or fine-tune the LLM on volatile data.',
    reference: 'GenAI Architectures'
  },
  {
    id: 'ai-028',
    type: 'scenario' as const,
    domain: 'ml-design',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your recommendation engine requires calculating complex features (e.g., user purchase history over 1 year) which takes several minutes. However, the API must return recommendations in under 100 milliseconds.',
    question: 'How should you architect the feature computation?',
    options: [
      { id: 'a', text: 'Compute all features synchronously at the time of the API request', isCorrect: false },
      { id: 'b', text: 'Use a Feature Store to pre-compute complex features offline and serve them via a low-latency online cache', isCorrect: true },
      { id: 'c', text: 'Deploy the model to the client\'s browser to reduce network latency', isCorrect: false },
      { id: 'd', text: 'Optimize the model to require fewer features', isCorrect: false }
    ],
    explanation: 'Feature stores bridge the gap between heavy offline batch computation and strict online latency requirements.',
    reference: 'ML System Design Patterns'
  },
  {
    id: 'ai-029',
    type: 'scenario' as const,
    domain: 'ai-governance',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'A financial institution is deploying an AI system to automatically approve or deny loan applications. Under the EU AI Act, this system falls into a specific risk category requiring strict conformity assessments and human oversight.',
    question: 'What risk category does this system belong to?',
    options: [
      { id: 'a', text: 'Unacceptable Risk', isCorrect: false },
      { id: 'b', text: 'High Risk', isCorrect: true },
      { id: 'c', text: 'Limited Risk', isCorrect: false },
      { id: 'd', text: 'Minimal Risk', isCorrect: false }
    ],
    explanation: 'AI systems used in determining access to financial services/credit scores are classified as High Risk.',
    reference: 'EU AI Act'
  },
  {
    id: 'ai-030',
    type: 'scenario' as const,
    domain: 'llm-arch',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your LLM application occasionally hallucinates confident but incorrect answers. You want to architect a safeguard to evaluate the LLM\'s output against retrieved documents before returning the response to the user.',
    question: 'Which architectural component should you introduce?',
    options: [
      { id: 'a', text: 'A larger foundation model', isCorrect: false },
      { id: 'b', text: 'A semantic cache layer', isCorrect: false },
      { id: 'c', text: 'An LLM evaluation/moderation agent (Validator) in the pipeline', isCorrect: true },
      { id: 'd', text: 'A faster vector database', isCorrect: false }
    ],
    explanation: 'Adding a secondary validation agent or step in the chain can check the primary output against the retrieved context to catch hallucinations.',
    reference: 'Agentic AI Architectures'
  },
  {
    id: 'ai-031',
    type: 'scenario' as const,
    domain: 'mlops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are deploying a new version of a fraud detection model. Because a false negative (missed fraud) is highly costly, you want to test the new model in production on real data, but you do not want its predictions to block any transactions until you are confident in its accuracy.',
    question: 'Which deployment pattern should you use?',
    options: [
      { id: 'a', text: 'Canary Deployment', isCorrect: false },
      { id: 'b', text: 'Shadow Deployment', isCorrect: true },
      { id: 'c', text: 'A/B Testing', isCorrect: false },
      { id: 'd', text: 'Blue-Green Deployment', isCorrect: false }
    ],
    explanation: 'Shadow deployment runs the new model silently alongside the active model without affecting the actual business process.',
    reference: 'MLOps Deployment Patterns'
  },
  {
    id: 'ai-032',
    type: 'scenario' as const,
    domain: 'data-arch-ai',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your company handles both structured tabular data (CRM logs) and massive amounts of unstructured data (audio calls and images). Data scientists need a unified platform to query both using SQL and train models using Python without copying data around.',
    question: 'What is the most appropriate data architecture?',
    options: [
      { id: 'a', text: 'Traditional Data Warehouse', isCorrect: false },
      { id: 'b', text: 'Data Lakehouse', isCorrect: true },
      { id: 'c', text: 'Transactional Relational Database (OLTP)', isCorrect: false },
      { id: 'd', text: 'Document Store (NoSQL)', isCorrect: false }
    ],
    explanation: 'A Data Lakehouse combines the unstructured storage capabilities of a lake with the governance and structured query power of a warehouse.',
    reference: 'Data Architecture for AI'
  },
  {
    id: 'ai-033',
    type: 'scenario' as const,
    domain: 'ai-governance',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are tasked with operationalizing the NIST AI Risk Management Framework. You need to establish the organizational context, identify the AI system\'s intended purpose, and categorize its potential risks.',
    question: 'Which core function of the NIST AI RMF are you executing?',
    options: [
      { id: 'a', text: 'GOVERN', isCorrect: false },
      { id: 'b', text: 'MAP', isCorrect: true },
      { id: 'c', text: 'MEASURE', isCorrect: false },
      { id: 'd', text: 'MANAGE', isCorrect: false }
    ],
    explanation: 'The MAP function establishes context and identifies risks, setting the foundation for measuring and managing them.',
    reference: 'NIST AI RMF 1.0'
  },
  {
    id: 'ai-034',
    type: 'scenario' as const,
    domain: 'llm-arch',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are building an AI assistant that can write code, run it, read the output, and fix errors automatically. It requires deciding which steps to take dynamically based on the error messages it receives.',
    question: 'Which architecture pattern enables this autonomous behavior?',
    options: [
      { id: 'a', text: 'Static Prompt Chaining', isCorrect: false },
      { id: 'b', text: 'ReAct (Reason + Act) Agent pattern with tool execution', isCorrect: true },
      { id: 'c', text: 'Standard RAG', isCorrect: false },
      { id: 'd', text: 'Unsupervised Learning', isCorrect: false }
    ],
    explanation: 'The ReAct agent pattern allows an LLM to reason about its current state and execute tools (like a code interpreter) dynamically in a loop.',
    reference: 'Agentic AI Architectures'
  },
  {
    id: 'ai-035',
    type: 'scenario' as const,
    domain: 'mlops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'A machine learning pipeline fails sporadically during the feature engineering phase because an upstream API changes its schema without warning. You need an architectural solution to prevent broken data from poisoning the model training process.',
    question: 'What should you implement?',
    options: [
      { id: 'a', text: 'Automated data validation and schema contracts (e.g. Great Expectations)', isCorrect: true },
      { id: 'b', text: 'A larger try-catch block around the entire pipeline', isCorrect: false },
      { id: 'c', text: 'Model registry versioning', isCorrect: false },
      { id: 'd', text: 'Manual review of all data before training', isCorrect: false }
    ],
    explanation: 'Data validation tools enforce schema contracts and data quality checks, halting the pipeline if upstream data is malformed.',
    reference: 'MLOps Continuous Integration'
  },

  // DRAG-DROP (36-40)
  {
    id: 'ai-036',
    type: 'drag-drop' as const,
    domain: 'ai-governance',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match each NIST AI RMF function to its primary activity.',
    items: [
      { id: 'item-1', content: 'GOVERN', correctZone: 'zone-1' },
      { id: 'item-2', content: 'MAP', correctZone: 'zone-2' },
      { id: 'item-3', content: 'MEASURE', correctZone: 'zone-3' },
      { id: 'item-4', content: 'MANAGE', correctZone: 'zone-4' },
    ],
    zones: [
      { id: 'zone-1', label: 'Establish AI risk culture and policies' },
      { id: 'zone-2', label: 'Identify and categorize AI risks' },
      { id: 'zone-3', label: 'Analyze and assess risk metrics' },
      { id: 'zone-4', label: 'Prioritize and respond to risks' },
    ],
    explanation: 'The NIST AI RMF four functions provide a structured approach to AI risk management.',
    reference: 'NIST AI RMF 1.0'
  },
  {
    id: 'ai-037',
    type: 'drag-drop' as const,
    domain: 'mlops',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the MLOps pipeline stage to its primary output or tool.',
    items: [
      { id: 'item-1', content: 'Experiment Tracking', correctZone: 'zone-1' },
      { id: 'item-2', content: 'Feature Engineering', correctZone: 'zone-2' },
      { id: 'item-3', content: 'Model Registry', correctZone: 'zone-3' },
      { id: 'item-4', content: 'Model Serving', correctZone: 'zone-4' },
    ],
    zones: [
      { id: 'zone-1', label: 'MLflow Tracking / Weights & Biases' },
      { id: 'zone-2', label: 'Feature Store (e.g., Feast)' },
      { id: 'zone-3', label: 'Centralized model version control' },
      { id: 'zone-4', label: 'REST/gRPC endpoints (e.g., Seldon, Triton)' },
    ],
    explanation: 'MLOps architectures rely on specialized tools for tracking, features, registration, and serving.',
    reference: 'MLOps Architectures'
  },
  {
    id: 'ai-038',
    type: 'drag-drop' as const,
    domain: 'ai-governance',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the EU AI Act risk category to the example AI system.',
    items: [
      { id: 'item-1', content: 'Unacceptable Risk', correctZone: 'zone-1' },
      { id: 'item-2', content: 'High Risk', correctZone: 'zone-2' },
      { id: 'item-3', content: 'Limited Risk', correctZone: 'zone-3' },
      { id: 'item-4', content: 'Minimal Risk', correctZone: 'zone-4' },
    ],
    zones: [
      { id: 'zone-1', label: 'Social scoring systems by governments' },
      { id: 'zone-2', label: 'AI used in automated recruitment/hiring' },
      { id: 'zone-3', label: 'Chatbots (requires transparency/disclosure)' },
      { id: 'zone-4', label: 'Spam filters or AI-enabled video games' },
    ],
    explanation: 'The EU AI Act classifies systems by risk level, dictating the regulatory burden.',
    reference: 'EU AI Act'
  },
  {
    id: 'ai-039',
    type: 'drag-drop' as const,
    domain: 'llm-arch',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the GenAI architecture component to its primary function.',
    items: [
      { id: 'item-1', content: 'Embedding Model', correctZone: 'zone-1' },
      { id: 'item-2', content: 'Vector Database', correctZone: 'zone-2' },
      { id: 'item-3', content: 'Orchestrator (e.g., LangChain)', correctZone: 'zone-3' },
      { id: 'item-4', content: 'Foundation Model (LLM)', correctZone: 'zone-4' },
    ],
    zones: [
      { id: 'zone-1', label: 'Converts text into high-dimensional vectors' },
      { id: 'zone-2', label: 'Stores and performs similarity search on vectors' },
      { id: 'zone-3', label: 'Chains prompts, tools, and retrievers together' },
      { id: 'zone-4', label: 'Generates final natural language responses' },
    ],
    explanation: 'A modern RAG/Agent architecture relies on the orchestration of embeddings, vector DBs, and LLMs.',
    reference: 'GenAI Architectures'
  },
  {
    id: 'ai-040',
    type: 'drag-drop' as const,
    domain: 'ml-design',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the deployment strategy to its characteristic.',
    items: [
      { id: 'item-1', content: 'Canary Deployment', correctZone: 'zone-1' },
      { id: 'item-2', content: 'Shadow Deployment', correctZone: 'zone-2' },
      { id: 'item-3', content: 'A/B Testing', correctZone: 'zone-3' },
      { id: 'item-4', content: 'Blue-Green Deployment', correctZone: 'zone-4' },
    ],
    zones: [
      { id: 'zone-1', label: 'Routes a small percentage (e.g. 5%) of traffic to the new model' },
      { id: 'zone-2', label: 'Runs in parallel with prod, but predictions are not served to users' },
      { id: 'zone-3', label: 'Splits traffic to measure business metrics/user behavior differences' },
      { id: 'zone-4', label: 'Maintains two identical environments, switching router to the new one' },
    ],
    explanation: 'Different deployment patterns manage risk and enable evaluation in production differently.',
    reference: 'MLOps Deployment Patterns'
  }
,
{
  "id": "ai-041",
  "type": "mcq",
  "domain": "llm-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the primary benefit of speculative decoding in LLM inference architecture?",
  "options": [
    {
      "id": "a",
      "text": "Accelerating token generation by using a small draft model to propose tokens, validated in parallel by the target model.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Increasing model weights.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Reducing vector database cost.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Replacing GPUs with CPUs.",
      "isCorrect": false
    }
  ],
  "explanation": "Speculative decoding uses a smaller draft model to generate candidate tokens quickly, verified in parallel by the main LLM.",
  "reference": "LLM Inference Optimization"
},
{
  "id": "ai-042",
  "type": "scenario",
  "domain": "llm-arch",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A financial institution wants to deploy a enterprise RAG assistant over 500,000 internal PDF audit reports. Hallucination must be strictly controlled and compliance audits require full source citation.",
  "question": "Which architectural strategy minimizes hallucination and provides verifiable citations?",
  "options": [
    {
      "id": "a",
      "text": "Use hybrid search (dense vector + BM25 keyword), re-ranking (Cross-Encoder), and structured prompt constraints with document chunk metadata.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Fine-tune a 7B model without retrieval augmentation.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Increase LLM temperature to 1.5.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Pass all 500,000 PDFs in a single prompt context window.",
      "isCorrect": false
    }
  ],
  "explanation": "Hybrid search combined with re-ranking and metadata filtering provides highly accurate chunks and strict source attribution.",
  "reference": "Enterprise RAG Best Practices"
},
{
  "id": "ai-043",
  "type": "mcq",
  "domain": "mlops",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is shadow deployment in MLOps pipeline architecture?",
  "options": [
    {
      "id": "a",
      "text": "Routing production traffic to a new model alongside the current model without returning the new model's prediction to end users.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Deleting offline feature stores.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Encrypting model weights on disk.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Running ML training on dark web servers.",
      "isCorrect": false
    }
  ],
  "explanation": "Shadow deployment evaluates new models under live production load without customer impact.",
  "reference": "MLOps Serving Patterns"
},
{
  "id": "ai-044",
  "type": "mcq",
  "domain": "ai-governance",
  "difficulty": "expert",
  "points": 1,
  "question": "Under the EU AI Act, what risk category do biometric identification systems in public spaces belong to?",
  "options": [
    {
      "id": "a",
      "text": "High Risk / Unacceptable Risk (subject to strict prohibitions and conformity assessments)",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Minimal Risk",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Low Risk",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Exempt from regulation",
      "isCorrect": false
    }
  ],
  "explanation": "Biometric identification in public spaces is classified as High/Unacceptable risk requiring rigorous oversight.",
  "reference": "EU AI Act Classification"
},
{
  "id": "ai-045",
  "type": "mcq",
  "domain": "data-arch-ai",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is HNSW in vector database architecture?",
  "options": [
    {
      "id": "a",
      "text": "Hierarchical Navigable Small World - a graph-based indexing algorithm for fast Approximate Nearest Neighbor (ANN) search.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A relational database join operator.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A hardware GPU driver.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A network encryption protocol.",
      "isCorrect": false
    }
  ],
  "explanation": "HNSW is a top-performing graph-based vector index for high-dimensional embedding similarity search.",
  "reference": "Vector Indexing Algorithms"
},
{
  "id": "ai-046",
  "type": "scenario",
  "domain": "ml-design",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An autonomous fraud detection system processes 50,000 transactions per second with a strict 20ms p99 latency SLA.",
  "question": "How should feature serving and model inference be architected?",
  "options": [
    {
      "id": "a",
      "text": "Pre-compute batch features in Redis Online Feature Store and serve lightweight ONNX/TensorRT compiled models via C++ inference engine.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Run Python Pandas feature transformations inside a synchronous web server.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Query SQL database directly for every inference request.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Execute online training during live customer checkout.",
      "isCorrect": false
    }
  ],
  "explanation": "Ultra-low latency inference requires optimized key-value online stores and compiled inference runtimes (ONNX/TensorRT).",
  "reference": "High-Throughput ML Architecture"
},
{
  "id": "ai-047",
  "type": "mcq",
  "domain": "llm-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is LoRA (Low-Rank Adaptation) in LLM fine-tuning?",
  "options": [
    {
      "id": "a",
      "text": "A parameter-efficient fine-tuning technique that freezes base model weights and trains rank decomposition matrices.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A method for compressing text prompts.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A hardware accelerator for CPUs.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A vector embedding loss function.",
      "isCorrect": false
    }
  ],
  "explanation": "LoRA reduces trainable parameters by up to 99% by injecting trainable rank decomposition matrices into transformer layers.",
  "reference": "PEFT Techniques"
},
{
  "id": "ai-048",
  "type": "mcq",
  "domain": "mlops",
  "difficulty": "expert",
  "points": 1,
  "question": "What causes Data Drift versus Concept Drift in production ML monitoring?",
  "options": [
    {
      "id": "a",
      "text": "Data Drift is a shift in input feature distribution P(X), while Concept Drift is a shift in the relationship between input features and target output P(Y|X).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Data Drift applies only to LLMs, Concept Drift to decision trees.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Concept Drift means database disk corruption.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "They are identical terms.",
      "isCorrect": false
    }
  ],
  "explanation": "Data Drift affects feature distributions; Concept Drift alters underlying business dynamics linking features to outcomes.",
  "reference": "ML Model Monitoring"
},
{
  "id": "ai-049",
  "type": "scenario",
  "domain": "ai-governance",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A medical diagnostic AI system must comply with NIST AI RMF 1.0 guidelines across Map, Measure, and Manage functions.",
  "question": "Which activity fulfills the \"Manage\" function of NIST AI RMF?",
  "options": [
    {
      "id": "a",
      "text": "Allocating resources to continuously monitor model risk, establishing fallback procedures, and implementing incident response plans.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Writing marketing blog posts.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Decommissioning all AI models immediately.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Disabling model audit logging.",
      "isCorrect": false
    }
  ],
  "explanation": "The Manage function in NIST AI RMF allocates resources to treat, monitor, and mitigate identified AI risks.",
  "reference": "NIST AI RMF 1.0"
},
{
  "id": "ai-050",
  "type": "mcq",
  "domain": "llm-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "In agentic AI architecture (e.g. ReAct pattern), what are the core components of an Autonomous AI Agent?",
  "options": [
    {
      "id": "a",
      "text": "Planning (reasoning), Memory (short-term & long-term), Tool Execution (APIs/SDKs), and Environment Feedback loop.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "SQL database, HTML template, CSS styling.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Hardcoded switch-case statements.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Static JSON file repository.",
      "isCorrect": false
    }
  ],
  "explanation": "Autonomous agents combine LLM reasoning (ReAct), memory, tools, and iterative action-perception feedback loops.",
  "reference": "Agentic AI Architecture"
}
];
