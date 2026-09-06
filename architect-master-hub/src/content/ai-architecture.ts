import { TopicContent } from '../lib/content-types';

export const aiArchTopics: TopicContent[] = [
  {
    "id": "ai-ml-system-design",
    "frameworkId": "ai-architecture",
    "title": "ML System Design",
    "subtitle": "Architecting end-to-end machine learning systems for scale.",
    "estimatedMinutes": 60,
    "difficulty": "practitioner",
    "domain": "AI Architecture",
    "overview": "Machine Learning System Design goes beyond simply training models; it encompasses data ingestion, feature engineering, model training, serving, and co...",
    "sections": [
      {
        "id": "sec-1",
        "title": "End-to-End ML Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Machine Learning System Design goes beyond simply training models; it encompasses data ingestion, feature engineering, model training, serving, and continuous monitoring."
          },
          {
            "type": "bullets",
            "items": [
              "Key architectural components include:",
              "**Data Pipeline**: Ingestion of structured and unstructured data via batch (e.g., Apache Spark) or streaming (e.g., Kafka).",
              "**Feature Store**: Centralized repository for training and serving features.",
              "**Model Registry**: Version control for trained models.",
              "**Inference Service**: Real-time or batch prediction endpoints."
            ]
          },
          {
            "type": "paragraph",
            "content": "### Enterprise Example: E-Commerce Recommendation\nA large retailer processes millions of clicks. Real-time events stream through Kafka into a Feature Store. A model trained nightly predicts user preferences, served via a low-latency gRPC microservice."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Batch vs. Real-time Inference",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Choosing the right inference pattern is crucial for system design."
          },
          {
            "type": "paragraph",
            "content": "1. **Batch Inference**: Predictions are generated asynchronously on a schedule and stored in a database (e.g., Redis or Cassandra) for fast retrieval. Best for recommendations that do not change by the minute.\n2. **Real-time Inference**: Predictions are generated on-the-fly via an API endpoint. Best for fraud detection or dynamic pricing where the context is highly volatile."
          },
          {
            "type": "paragraph",
            "content": "*Design Trade-offs*: Real-time systems require complex infrastructure to handle latency and throughput, while batch systems are easier to scale but provide stale predictions."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Designing Machine Learning Systems",
        "type": "book",
        "url": "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
        "description": "A comprehensive guide to designing end-to-end ML systems, covering data engineering, training, and deployment.",
        "isFree": false,
        "publisher": "O'Reilly",
        "duration": "By Chip Huyen"
      },
      {
        "title": "Practitioners guide to MLOps",
        "type": "official-doc",
        "url": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
        "description": "Google's official guide on MLOps architecture and system design patterns.",
        "isFree": true,
        "publisher": "Google Cloud",
        "duration": ""
      },
      {
        "title": "Stanford CS229: Machine Learning",
        "type": "course",
        "url": "https://cs229.stanford.edu/",
        "description": "Foundational machine learning concepts and system design considerations.",
        "isFree": true,
        "publisher": "Stanford University",
        "duration": ""
      },
      {
        "title": "Machine Learning Lens - AWS Well-Architected Framework",
        "type": "official-doc",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html",
        "description": "Best practices for architecting ML workloads on AWS.",
        "isFree": true,
        "publisher": "AWS",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-feature-stores",
    "frameworkId": "ai-architecture",
    "title": "Feature Stores",
    "subtitle": "Managing and serving ML features at enterprise scale.",
    "estimatedMinutes": 45,
    "difficulty": "practitioner",
    "domain": "AI Architecture",
    "overview": "A Feature Store is a data management system that organizes, stores, and serves machine learning features to models. It acts as a single source of trut...",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is a Feature Store?",
        "blocks": [
          {
            "type": "paragraph",
            "content": "A Feature Store is a data management system that organizes, stores, and serves machine learning features to models. It acts as a single source of truth, bridging the gap between data engineering and data science."
          },
          {
            "type": "bullets",
            "items": [
              "Core Capabilities*:",
              "**Registry**: A catalog of features with metadata.",
              "**Serving**: Low-latency retrieval for real-time inference and high-throughput retrieval for batch training.",
              "**Transformation**: Orchestrating feature pipelines.",
              "**Monitoring**: Tracking feature drift and data quality."
            ]
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Architecture & Implementation",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Feature Stores typically employ a dual-database architecture:\n1. **Offline Store**: A data warehouse or data lake (e.g., Snowflake, BigQuery, S3) optimized for batch processing and generating training datasets.\n2. **Online Store**: A low-latency key-value store (e.g., Redis, DynamoDB, Cassandra) optimized for serving features during real-time inference."
          },
          {
            "type": "example",
            "title": "Case Study: Uber's Michelangelo",
            "content": "Uber pioneered the concept of a Feature Store within their Michelangelo platform, enabling teams to share thousands of features across dispatch, fraud, and pricing models, drastically reducing time-to-market."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Feast: Open Source Feature Store",
        "type": "official-doc",
        "url": "https://feast.dev/",
        "description": "Documentation for Feast, a popular open-source feature store for machine learning.",
        "isFree": true,
        "publisher": "Feast",
        "duration": ""
      },
      {
        "title": "Meet Michelangelo: Uber’s Machine Learning Platform",
        "type": "article",
        "url": "https://eng.uber.com/michelangelo-machine-learning-platform/",
        "description": "The foundational article introducing the concept of a feature store in enterprise ML.",
        "isFree": true,
        "publisher": "Uber Engineering",
        "duration": ""
      },
      {
        "title": "FeatureStore.org",
        "type": "article",
        "url": "https://www.featurestore.org/",
        "description": "A comprehensive hub for comparing feature store architectures and implementations.",
        "isFree": true,
        "publisher": "FeatureStore.org",
        "duration": ""
      },
      {
        "title": "What is a Feature Store?",
        "type": "article",
        "url": "https://www.tecton.ai/blog/what-is-a-feature-store/",
        "description": "An in-depth guide on the capabilities and architecture of modern feature stores.",
        "isFree": true,
        "publisher": "Tecton",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-mlops-pipelines",
    "frameworkId": "ai-architecture",
    "title": "MLOps & CI/CD for AI",
    "subtitle": "Continuous Integration, Delivery, and Training for machine learning.",
    "estimatedMinutes": 60,
    "difficulty": "expert",
    "domain": "AI Architecture",
    "overview": "MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It aims to unify ML system development and operation, ensuring continuous...",
    "sections": [
      {
        "id": "sec-1",
        "title": "The MLOps Lifecycle",
        "blocks": [
          {
            "type": "paragraph",
            "content": "MLOps (Machine Learning Operations) applies DevOps principles to ML systems. It aims to unify ML system development and operation, ensuring continuous delivery of high-performing models in production."
          },
          {
            "type": "paragraph",
            "content": "Key differences from traditional CI/CD:\n- **Code, Data, and Model**: MLOps tracks not just code, but data versions and model artifacts.\n- **Continuous Training (CT)**: Automated pipelines to retrain models when data drifts or performance degrades.\n- **Model Registry**: Centralized repository for managing the lifecycle of models."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Automated ML Pipelines",
        "blocks": [
          {
            "type": "paragraph",
            "content": "An automated ML pipeline consists of several orchestrated steps (e.g., using Kubeflow or Apache Airflow):\n1. **Data Extraction & Validation**: Pulling new data and checking for anomalies.\n2. **Data Preparation**: Feature engineering and transformation.\n3. **Model Training**: Running distributed training jobs.\n4. **Model Evaluation**: Comparing against a baseline; if better, proceed to deployment.\n5. **Model Deployment**: Releasing to a shadow environment or canary rollout."
          },
          {
            "type": "paragraph",
            "content": "### Real-world Example\nA financial institution uses automated CT pipelines to retrain credit scoring models weekly, ensuring that the models adapt to changing economic indicators without manual intervention."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "MLOps: Continuous delivery and automation pipelines in ML",
        "type": "official-doc",
        "url": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
        "description": "A foundational whitepaper defining MLOps maturity levels and architecture.",
        "isFree": true,
        "publisher": "Google Cloud",
        "duration": ""
      },
      {
        "title": "Introducing MLOps",
        "type": "book",
        "url": "https://www.oreilly.com/library/view/introducing-mlops/9781098107116/",
        "description": "How to scale machine learning in the enterprise.",
        "isFree": false,
        "publisher": "O'Reilly",
        "duration": "By Mark Treveil et al."
      },
      {
        "title": "MLOps Community",
        "type": "video",
        "url": "https://mlops.community/",
        "description": "A vast collection of talks, podcasts, and articles on practical MLOps.",
        "isFree": true,
        "publisher": "MLOps Community",
        "duration": ""
      },
      {
        "title": "Kubeflow Documentation",
        "type": "official-doc",
        "url": "https://www.kubeflow.org/docs/",
        "description": "Official docs for deploying and managing ML pipelines on Kubernetes.",
        "isFree": true,
        "publisher": "Kubeflow",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-llm-rag-architecture",
    "frameworkId": "ai-architecture",
    "title": "LLMs & RAG Architecture",
    "subtitle": "Building robust Retrieval-Augmented Generation systems.",
    "estimatedMinutes": 90,
    "difficulty": "expert",
    "domain": "AI Architecture",
    "overview": "RAG is an architectural pattern that improves the efficacy of Large Language Models (LLMs) by grounding them in external knowledge bases. This mitigat...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Retrieval-Augmented Generation (RAG)",
        "blocks": [
          {
            "type": "paragraph",
            "content": "RAG is an architectural pattern that improves the efficacy of Large Language Models (LLMs) by grounding them in external knowledge bases. This mitigates hallucinations and provides access to private, up-to-date information."
          },
          {
            "type": "paragraph",
            "content": "**The RAG Workflow**:\n1. **Index Pipeline**:\n   - Ingest documents (PDFs, wikis, databases).\n   - Chunk text into manageable segments.\n   - Generate embeddings using an embedding model.\n   - Store embeddings in a Vector Database.\n2. **Retrieval & Generation Pipeline**:\n   - User submits a query.\n   - Query is embedded.\n   - Vector Database performs similarity search to retrieve relevant chunks.\n   - Retrieved context and the original query are passed to the LLM as a prompt.\n   - LLM generates a grounded response."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Advanced RAG Patterns",
        "blocks": [
          {
            "type": "paragraph",
            "content": "As RAG systems mature, architectures evolve to handle complex queries:\n- **Query Routing**: Directing queries to different indexes or tools based on intent.\n- **Query Transformation**: Rewriting or expanding the user query for better retrieval (e.g., HyDE).\n- **Re-ranking**: Using a cross-encoder model to re-score retrieved documents for higher precision before passing them to the LLM.\n- **Agentic RAG**: Equipping LLMs with tools to iteratively search and synthesize information."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Building LLM Powered Applications",
        "type": "book",
        "url": "https://www.packtpub.com/product/building-llm-powered-applications/9781835462317",
        "description": "A guide to creating intelligent apps with LangChain, Pinecone, and LLMs.",
        "isFree": false,
        "publisher": "Packt",
        "duration": "By Valentina Alto"
      },
      {
        "title": "Building Production RAG Systems",
        "type": "course",
        "url": "https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/",
        "description": "Advanced techniques for building and evaluating RAG applications.",
        "isFree": true,
        "publisher": "DeepLearning.AI",
        "duration": ""
      },
      {
        "title": "LangChain Documentation",
        "type": "official-doc",
        "url": "https://python.langchain.com/docs/get_started/introduction",
        "description": "Framework documentation for building LLM applications.",
        "isFree": true,
        "publisher": "LangChain",
        "duration": ""
      },
      {
        "title": "LlamaIndex Documentation",
        "type": "official-doc",
        "url": "https://docs.llamaindex.ai/en/stable/",
        "description": "Data framework for LLM applications, specializing in RAG architectures.",
        "isFree": true,
        "publisher": "LlamaIndex",
        "duration": ""
      },
      {
        "title": "Advanced RAG Techniques",
        "type": "article",
        "url": "https://pub.towardsai.net/advanced-rag-techniques-an-illustrated-overview-04d193d8fec7",
        "description": "An illustrated guide to query transformations, routing, and re-ranking.",
        "isFree": true,
        "publisher": "Towards AI",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-vector-databases",
    "frameworkId": "ai-architecture",
    "title": "Vector Databases",
    "subtitle": "Storing and retrieving high-dimensional embeddings for AI.",
    "estimatedMinutes": 45,
    "difficulty": "practitioner",
    "domain": "AI Architecture",
    "overview": "Vector databases are specialized storage systems designed to store, manage, and query high-dimensional vectors (embeddings). They are foundational to ...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Understanding Vector Databases",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Vector databases are specialized storage systems designed to store, manage, and query high-dimensional vectors (embeddings). They are foundational to modern AI architectures, particularly RAG and semantic search."
          },
          {
            "type": "paragraph",
            "content": "*Unlike relational databases* that match exact values, vector databases perform **similarity searches**, finding vectors that are closest to a query vector in space."
          },
          {
            "type": "paragraph",
            "content": "Key indexing algorithms include:\n- **HNSW (Hierarchical Navigable Small World)**: A graph-based algorithm offering a great balance of speed and recall.\n- **IVF (Inverted File Index)**: Partitions the vector space into clusters for faster search.\n- **PQ (Product Quantization)**: Compresses vectors to reduce memory footprint."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Vector Database Architectures",
        "blocks": [
          {
            "type": "paragraph",
            "content": "When architecting systems with vector databases, consider:\n- **Dedicated vs. Native**: Using purpose-built databases (Pinecone, Milvus, Weaviate) vs. adding vector support to existing databases (pgvector for PostgreSQL).\n- **Filtering**: Combining metadata filters (e.g., \"date > 2023\") with vector similarity. This is often the hardest technical challenge.\n- **Scalability**: Sharding and replicating vector indexes across distributed clusters."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Pinecone Vector Database Architecture Guide",
        "type": "official-doc",
        "url": "https://www.pinecone.io/learn/vector-database/",
        "description": "Comprehensive guide to how vector databases work under the hood.",
        "isFree": true,
        "publisher": "Pinecone",
        "duration": ""
      },
      {
        "title": "Milvus Documentation",
        "type": "official-doc",
        "url": "https://milvus.io/docs",
        "description": "Architecture and usage of the open-source Milvus vector database.",
        "isFree": true,
        "publisher": "Milvus",
        "duration": ""
      },
      {
        "title": "pgvector: Open-source vector similarity search for Postgres",
        "type": "official-doc",
        "url": "https://github.com/pgvector/pgvector",
        "description": "Documentation for the popular PostgreSQL vector extension.",
        "isFree": true,
        "publisher": "pgvector",
        "duration": ""
      },
      {
        "title": "Weaviate Architecture",
        "type": "official-doc",
        "url": "https://weaviate.io/developers/weaviate/architecture",
        "description": "Detailed architecture of the Weaviate vector search engine.",
        "isFree": true,
        "publisher": "Weaviate",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-agentic-architecture",
    "frameworkId": "ai-architecture",
    "title": "Agentic Architectures",
    "subtitle": "Designing autonomous AI agents and multi-agent systems.",
    "estimatedMinutes": 60,
    "difficulty": "expert",
    "domain": "AI Architecture",
    "overview": "An AI Agent is a system that uses an LLM as its reasoning engine to determine which actions to take and in what order. Unlike standard LLM application...",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is an AI Agent?",
        "blocks": [
          {
            "type": "paragraph",
            "content": "An AI Agent is a system that uses an LLM as its reasoning engine to determine which actions to take and in what order. Unlike standard LLM applications which simply generate text, agents can interact with the external world."
          },
          {
            "type": "paragraph",
            "content": "Core components of an agent:\n- **LLM / Brain**: Processes input and decides actions.\n- **Memory**: Short-term (context window) and long-term (vector DB) storage of past interactions.\n- **Tools / Plugins**: Executable functions (e.g., Web Search, SQL Query, Code Execution).\n- **Planning**: The ability to break down a complex task into smaller steps."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Multi-Agent Architectures",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Multi-agent systems involve several specialized agents collaborating to solve complex tasks."
          },
          {
            "type": "paragraph",
            "content": "*Architectural Patterns*:\n- **Supervisor / Hierarchical**: A main agent breaks down tasks and delegates them to worker agents (e.g., a Coding Agent, a QA Agent).\n- **Collaborative Chat**: Agents converse with each other in a shared environment to reach consensus."
          },
          {
            "type": "example",
            "title": "Example: AutoGen",
            "content": "Frameworks like Microsoft AutoGen allow developers to define diverse agents that can write code, critique it, and execute it in an isolated container, acting as a complete virtual development team."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "LangGraph Documentation",
        "type": "official-doc",
        "url": "https://python.langchain.com/docs/langgraph",
        "description": "Framework for building stateful, multi-actor applications with LLMs.",
        "isFree": true,
        "publisher": "LangChain",
        "duration": ""
      },
      {
        "title": "Microsoft AutoGen",
        "type": "official-doc",
        "url": "https://microsoft.github.io/autogen/",
        "description": "A framework that enables the development of LLM applications using multiple agents.",
        "isFree": true,
        "publisher": "Microsoft",
        "duration": ""
      },
      {
        "title": "LLM Powered Autonomous Agents",
        "type": "article",
        "url": "https://lilianweng.github.io/posts/2023-06-23-agent/",
        "description": "A deep dive into the architecture of autonomous agents.",
        "isFree": true,
        "publisher": "Lilian Weng (OpenAI)",
        "duration": ""
      },
      {
        "title": "Agentic Design Patterns Part 1",
        "type": "article",
        "url": "https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/",
        "description": "Andrew Ng discusses architectural patterns for AI agents.",
        "isFree": true,
        "publisher": "DeepLearning.AI",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-governance-nist-act",
    "frameworkId": "ai-architecture",
    "title": "AI Governance & Compliance",
    "subtitle": "Navigating the NIST AI RMF and the EU AI Act.",
    "estimatedMinutes": 50,
    "difficulty": "practitioner",
    "domain": "AI Architecture",
    "overview": "The NIST AI RMF (Risk Management Framework) provides guidelines for designing, developing, and deploying AI systems to manage risks and promote trustw...",
    "sections": [
      {
        "id": "sec-1",
        "title": "NIST AI Risk Management Framework",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The NIST AI RMF (Risk Management Framework) provides guidelines for designing, developing, and deploying AI systems to manage risks and promote trustworthy AI."
          },
          {
            "type": "paragraph",
            "content": "It revolves around four core functions:\n1. **GOVERN**: Establish policies, roles, and organizational culture regarding AI risk.\n2. **MAP**: Understand context, categorize risks, and map the AI system lifecycle.\n3. **MEASURE**: Assess AI risks using quantitative and qualitative methods.\n4. **MANAGE**: Prioritize and mitigate mapped and measured risks."
          },
          {
            "type": "paragraph",
            "content": "*Architectural Impact*: Requires logging, tracing, and auditability at every stage of the ML pipeline."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "The EU AI Act",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The EU AI Act is a pioneering regulatory framework that classifies AI systems by risk:\n- **Unacceptable Risk**: Banned systems (e.g., social scoring, biometric categorization).\n- **High Risk**: Regulated systems (e.g., critical infrastructure, employment, credit scoring). Requires stringent conformity assessments, risk management systems, and human oversight.\n- **Limited/Minimal Risk**: Systems subject to transparency obligations (e.g., chatbots, deepfakes)."
          },
          {
            "type": "paragraph",
            "content": "Enterprise architects must build systems that can demonstrate compliance through rigorous documentation, data provenance, and monitoring."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "NIST AI Risk Management Framework (AI RMF 1.0)",
        "type": "official-doc",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "description": "Official framework for improving the trustworthiness of AI systems.",
        "isFree": true,
        "publisher": "NIST",
        "duration": ""
      },
      {
        "title": "EU AI Act Official Text & Compliance Guide",
        "type": "official-doc",
        "url": "https://artificialintelligenceact.eu/",
        "description": "Comprehensive guide and official texts of the European AI Act.",
        "isFree": true,
        "publisher": "Future of Life Institute",
        "duration": ""
      },
      {
        "title": "AI Governance: A Comprehensive Guide",
        "type": "book",
        "url": "https://www.amazon.com/AI-Governance-Comprehensive-Implementing-Intelligence/dp/B0C91H8XZ7",
        "description": "Strategies for implementing AI governance in corporate environments.",
        "isFree": false,
        "publisher": "Independently Published",
        "duration": ""
      },
      {
        "title": "Presidio AI Framework",
        "type": "article",
        "url": "https://www.weforum.org/publications/presidio-ai-framework-towards-safe-generative-ai-models/",
        "description": "Framework for the safe development and deployment of Generative AI.",
        "isFree": true,
        "publisher": "World Economic Forum",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-responsible-ethics",
    "frameworkId": "ai-architecture",
    "title": "Responsible AI & Ethics",
    "subtitle": "Designing AI systems that are fair, transparent, and secure.",
    "estimatedMinutes": 40,
    "difficulty": "foundation",
    "domain": "AI Architecture",
    "overview": "Responsible AI (RAI) is the practice of designing, developing, and deploying AI with good intention to empower employees and businesses, and fairly im...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Core Principles of Responsible AI",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Responsible AI (RAI) is the practice of designing, developing, and deploying AI with good intention to empower employees and businesses, and fairly impact customers and society."
          },
          {
            "type": "paragraph",
            "content": "Key Principles:\n- **Fairness**: Ensuring AI systems do not exhibit bias or discrimination against certain groups.\n- **Transparency & Explainability**: Understanding how an AI model makes its decisions (e.g., using SHAP or LIME).\n- **Privacy & Security**: Protecting user data during training and inference (e.g., Differential Privacy, Federated Learning).\n- **Accountability**: Establishing clear responsibility for AI system outcomes."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Architecting for Fairness and Explainability",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Integrating RAI into the architecture involves specific tools and processes:\n- **Data Auditing Pipelines**: Automated checks for bias in training datasets.\n- **Explainability Microservices**: Endpoints that return feature importance alongside predictions.\n- **Guardrails for LLMs**: Implementing proxy layers (e.g., NeMo Guardrails) that intercept LLM inputs and outputs to filter toxic content, PII, or off-topic responses."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Google Responsible AI Practices",
        "type": "official-doc",
        "url": "https://ai.google/responsibility/principles/",
        "description": "Google's principles and practices for responsible AI development.",
        "isFree": true,
        "publisher": "Google",
        "duration": ""
      },
      {
        "title": "Microsoft Responsible AI Standard",
        "type": "official-doc",
        "url": "https://www.microsoft.com/en-us/ai/responsible-ai",
        "description": "Guidelines and tools from Microsoft for ethical AI design.",
        "isFree": true,
        "publisher": "Microsoft",
        "duration": ""
      },
      {
        "title": "Fairness and Machine Learning: Limitations and Opportunities",
        "type": "book",
        "url": "https://fairmlbook.org/",
        "description": "An open-access book on the ethical implications and fairness in ML.",
        "isFree": true,
        "publisher": "MIT Press",
        "duration": "By Solon Barocas et al."
      },
      {
        "title": "NeMo Guardrails Documentation",
        "type": "official-doc",
        "url": "https://github.com/NVIDIA/NeMo-Guardrails",
        "description": "Toolkit for adding programmable guardrails to LLM conversational systems.",
        "isFree": true,
        "publisher": "NVIDIA",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-model-monitoring-drift",
    "frameworkId": "ai-architecture",
    "title": "Model Monitoring & Drift",
    "subtitle": "Detecting data drift, concept drift, and model degradation.",
    "estimatedMinutes": 45,
    "difficulty": "practitioner",
    "domain": "AI Architecture",
    "overview": "Unlike traditional software, machine learning models degrade over time. Their performance drops because the world changes, but the model remains stati...",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Need for Model Monitoring",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Unlike traditional software, machine learning models degrade over time. Their performance drops because the world changes, but the model remains static. This requires robust monitoring architectures."
          },
          {
            "type": "paragraph",
            "content": "Types of degradation:\n1. **Data Drift (Feature Drift)**: The distribution of input features changes. (e.g., A sudden increase in a certain type of loan application).\n2. **Concept Drift**: The relationship between inputs and the target variable changes. (e.g., Purchasing behavior changes during a pandemic).\n3. **Label Drift**: The distribution of the target variable changes."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Monitoring Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "content": "An enterprise model monitoring system includes:\n- **Telemetry Logging**: Capturing every input request and model prediction, often logging to a data lake.\n- **Ground Truth Ingestion**: Asynchronously joining predictions with actual outcomes (labels) when they become available.\n- **Statistical Monitoring Engine**: Running continuous statistical tests (e.g., Kolmogorov-Smirnov, Population Stability Index) comparing serving data against training data baselines.\n- **Alerting & Retraining**: Triggering alerts in PagerDuty and automatically kicking off an MLOps pipeline for retraining when drift thresholds are exceeded."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Evidently AI Documentation",
        "type": "official-doc",
        "url": "https://docs.evidentlyai.com/",
        "description": "Open-source tool to analyze and monitor machine learning models.",
        "isFree": true,
        "publisher": "Evidently",
        "duration": ""
      },
      {
        "title": "A Guide to Model Drift",
        "type": "article",
        "url": "https://www.fiddler.ai/blog/a-guide-to-model-drift-in-machine-learning",
        "description": "Detailed explanation of data drift, concept drift, and how to detect them.",
        "isFree": true,
        "publisher": "Fiddler AI",
        "duration": ""
      },
      {
        "title": "Amazon SageMaker Model Monitor",
        "type": "official-doc",
        "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html",
        "description": "Architecture and usage of AWS's native model monitoring service.",
        "isFree": true,
        "publisher": "AWS",
        "duration": ""
      },
      {
        "title": "Machine Learning Engineering for Production (MLOps)",
        "type": "course",
        "url": "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
        "description": "Covers model monitoring and maintenance in production environments.",
        "isFree": false,
        "publisher": "DeepLearning.AI",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "ai-multimodal-patterns",
    "frameworkId": "ai-architecture",
    "title": "Multimodal AI Patterns",
    "subtitle": "Architecting systems that process text, image, audio, and video.",
    "estimatedMinutes": 50,
    "difficulty": "expert",
    "domain": "AI Architecture",
    "overview": "Multimodal AI systems can understand and process multiple types of data inputs simultaneously (e.g., an image and a text prompt)....",
    "sections": [
      {
        "id": "sec-1",
        "title": "Multimodal Architectures",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Multimodal AI systems can understand and process multiple types of data inputs simultaneously (e.g., an image and a text prompt)."
          },
          {
            "type": "paragraph",
            "content": "Modern foundation models (like GPT-4V or Gemini) are inherently multimodal, trained jointly on different data types. However, architecting enterprise systems around them requires specific patterns:\n- **Multimodal RAG**: Indexing both text and images into a vector database (using models like CLIP) to retrieve context across media types.\n- **Data Preprocessing Pipelines**: Standardizing image resolutions, chunking videos into frames, and transcribing audio before sending to the model."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Use Cases and Considerations",
        "blocks": [
          {
            "type": "paragraph",
            "content": "### Enterprise Use Cases\n- **Healthcare**: Analyzing medical records (text) alongside X-rays (images) for diagnostics.\n- **E-commerce**: Enabling users to search for products using a photo and a text description (\"I want shoes like this but in blue\")."
          },
          {
            "type": "paragraph",
            "content": "### Architectural Challenges\n- **Latency**: Processing images and video is significantly slower than text. Systems often require asynchronous processing and specialized GPU infrastructure.\n- **Storage**: Managing large binary assets (videos/images) efficiently in conjunction with vector embeddings."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Learning Transferable Visual Models From Natural Language Supervision",
        "type": "article",
        "url": "https://arxiv.org/abs/2103.00020",
        "description": "The seminal paper on the CLIP model, foundational for multimodal AI.",
        "isFree": true,
        "publisher": "OpenAI",
        "duration": ""
      },
      {
        "title": "Multimodal RAG Architecture",
        "type": "article",
        "url": "https://docs.llamaindex.ai/en/stable/use_cases/multimodal/",
        "description": "Guide to building RAG applications that search across text and images.",
        "isFree": true,
        "publisher": "LlamaIndex",
        "duration": ""
      },
      {
        "title": "Gemini API Documentation",
        "type": "official-doc",
        "url": "https://ai.google.dev/docs",
        "description": "Official docs for building with Google's multimodal foundation model.",
        "isFree": true,
        "publisher": "Google",
        "duration": ""
      },
      {
        "title": "Multimodal Deep Learning",
        "type": "course",
        "url": "https://www.coursera.org/learn/multimodal-deep-learning",
        "description": "Academic course covering the architectures of multimodal neural networks.",
        "isFree": false,
        "publisher": "Coursera",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  }
];
