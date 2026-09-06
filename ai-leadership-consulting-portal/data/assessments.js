window.AI_ASSESSMENTS_DATA = {
  quizzes: [
    {
      id: "quiz-foundational",
      title: "Foundational AI Taxonomy & Technical Concepts (Expanded Bank)",
      subtitle: "Master ML vs DL vs GenAI, Transformers, RAG, Fine-tuning, Quantization, and Agentic Systems.",
      questions: [
        {
          id: "q1",
          question: "An enterprise client wants to make their internal 100,000 PDF policy documents searchable with natural language and zero hallucinations. Which technical strategy is best?",
          options: [
            "A. Pre-train a custom LLM on the PDFs",
            "B. Fine-tune Llama 3 on the raw text of the PDFs",
            "C. Build a Retrieval-Augmented Generation (RAG) system with a Vector Database",
            "D. Write a complex system prompt with all 100,000 PDFs pasted into the context window"
          ],
          correctIndex: 2,
          explanation: "RAG retrieves relevant document chunks dynamically into the prompt context at query time, enabling real-time document updates, exact source citations, and eliminating hallucinations without costly model retraining."
        },
        {
          id: "q2",
          question: "When should an AI Consultant explicitly advise a client to choose Classical Machine Learning (e.g. XGBoost) over a Generative LLM?",
          options: [
            "A. When summarizing customer feedback emails",
            "B. When predicting tabular customer churn or financial fraud scores deterministically",
            "C. When creating an interactive shopping assistant chatbot",
            "D. When drafting legal contract clauses"
          ],
          correctIndex: 1,
          explanation: "Classical ML excels at structured tabular data prediction with high interpretability, low compute overhead, and 100% deterministic output—making it far superior to GenAI for structured numerical scoring like fraud or churn."
        },
        {
          id: "q3",
          question: "What is the primary function of a Vector Database in an enterprise GenAI architecture?",
          options: [
            "A. Store relational SQL tables with foreign key constraints",
            "B. Store high-dimensional numerical embeddings of text/documents for semantic search",
            "C. Execute Python code scripts asynchronously",
            "D. Encrypt API keys in secret vaults"
          ],
          correctIndex: 1,
          explanation: "Vector databases store mathematical vector embeddings representing semantic meanings of documents, enabling fast similarity search based on concepts rather than exact keyword matches."
        },
        {
          id: "q4",
          question: "Which LLM hyperparameter configuration should an AI Consultant mandate for enterprise financial RAG applications to prevent random output variations?",
          options: [
            "A. Temperature = 0.9, Top-P = 0.95",
            "B. Temperature = 0.0, Top-P = 0.1",
            "C. Frequency Penalty = -2.0",
            "D. Temperature = 1.5, Presence Penalty = 1.0"
          ],
          correctIndex: 1,
          explanation: "Setting Temperature to 0.0 flattens probability distributions, enforcing deterministic output generation so the model sticks strictly to provided context without creative variations."
        },
        {
          id: "q5",
          question: "What is the core technical advantage of LoRA (Low-Rank Adaptation) for enterprise fine-tuning?",
          options: [
            "A. It retrains all foundation model weights from ground zero",
            "B. It freezes base model weights and trains small low-rank matrix pairs, reducing GPU memory by 70%",
            "C. It converts text embeddings directly into SQL tables",
            "D. It removes the need for prompt engineering completely"
          ],
          correctIndex: 1,
          explanation: "LoRA freezes the original 70B parameters and injects small trainable rank-decomposition matrices into attention layers, slashing GPU VRAM requirements while retaining 99% accuracy."
        },
        {
          id: "q6",
          question: "How does the Transformer Self-Attention mechanism overcome the fundamental bottleneck of older Recurrent Neural Networks (RNNs)?",
          options: [
            "A. By compressing text into ZIP files",
            "B. By processing all tokens in a document in parallel rather than word-by-word sequentially",
            "C. By deleting words with low frequency",
            "D. By forcing models to run exclusively on CPU hardware"
          ],
          correctIndex: 1,
          explanation: "Transformers process entire documents simultaneously in parallel across GPU clusters, allowing models to learn long-range context without sequential bottleneck slowdowns."
        },
        {
          id: "q7",
          question: "In production RAG systems, why is Hybrid Search (BM25 + Dense Vectors) combined with Cross-Encoder Reranking considered superior to vector search alone?",
          options: [
            "A. Vector search alone cannot find exact product part numbers, acronyms, or proper names",
            "B. Vector search requires no database storage",
            "C. Hybrid search deletes the context window",
            "D. Reranking removes the need for embedding models"
          ],
          correctIndex: 0,
          explanation: "Dense vector search understands broad concepts but often misses exact acronyms or part numbers. Combining BM25 keyword matching with dense vectors and reranking yields pinpoint search accuracy."
        },
        {
          id: "q8",
          question: "What is the primary operational role of an LLM API Gateway (e.g. LiteLLM / Portkey) in enterprise MLOps?",
          options: [
            "A. To generate synthetic training images",
            "B. To handle rate limiting, provider fallback retries, token usage budget caps, and semantic caching",
            "C. To replace all frontend user interfaces",
            "D. To train open-source foundation models"
          ],
          correctIndex: 1,
          explanation: "API gateways act as central infrastructure proxies governing rate limits, token cost caps, load balancing across cloud endpoints, and semantic caching."
        }
      ]
    },
    {
      id: "quiz-strategic",
      title: "Strategic Leadership & Financial TCO",
      subtitle: "Test your ability to prioritize use cases, calculate TCO, and build AI strategy.",
      questions: [
        {
          id: "q1",
          question: "Which quadrant in the Impact vs Feasibility matrix should an enterprise prioritize for its first 90-day pilot budget?",
          options: [
            "A. Moonshots (High Impact, Low Feasibility)",
            "B. Quick Wins & Strategic Bets (High Impact, High Feasibility)",
            "C. Low-Hanging Fruit (Low Impact, High Feasibility)",
            "D. Money Pits (Low Impact, Low Feasibility)"
          ],
          correctIndex: 1,
          explanation: "High Impact, High Feasibility projects deliver tangible business value quickly, proving ROI to executive sponsors and securing long-term budget support."
        },
        {
          id: "q2",
          question: "In a 3-Year Total Cost of Ownership (TCO) model for Enterprise AI, which of the following is often overlooked by novice teams?",
          options: [
            "A. Initial software license cost",
            "B. Ongoing vector re-indexing, data pipeline maintenance, and continuous evaluation guardrails",
            "C. Laptop hardware for developers",
            "D. Domain registration fees"
          ],
          correctIndex: 1,
          explanation: "Data decay, embedding re-indexing, prompt guardrail maintenance, and model drift evaluation account for up to 40% of operational cost post-launch."
        }
      ]
    }
  ],

  csuiteDefense: [
    // 1. CFO Persona
    {
      id: "cfo-defense",
      role: "Chief Financial Officer (CFO)",
      name: "Arthur Vance",
      avatar: "💼",
      concern: "Cost Control, Predictable OpEx & Clear ROI",
      mindset: "CFOs do not care about AI technology hype. They care about Capital Allocation, Net Present Value (NPV), Payback Period, and preventing runaway variable cloud token expenses.",
      scenarios: [
        {
          id: "cfo-s1",
          question: "\"Look, everyone is throwing money at AI hype right now. I'm seeing $500k proposals for internal tools that save 10 minutes a day. How do I know this AI roadmap won't turn into a bottomless money pit with zero predictable ROI?\"",
          responses: [
            {
              text: "We enforce a strict 90-day pilot with a fixed budget cap ($75k) and explicit metric gates (e.g. 35% reduction in support ticket resolution time = $450k/yr labor savings). If KPIs are missed at Day 90, funding halts.",
              score: 100,
              feedback: "<strong>EXPERT ADVISORY RESPONSE!</strong> CFOs respect gated milestone funding, hard budget caps, and tying technical metrics directly to bottom-line dollar savings."
            },
            {
              text: "AI is the future of our industry, and if we don't spend $1M today, our competitors will leave us behind completely.",
              score: 25,
              feedback: "<strong>FAILED RESPONSE.</strong> Using FOMO without hard financial metrics or risk mitigation destroys consultant credibility with CFOs."
            }
          ]
        }
      ]
    },

    // 2. CISO Persona
    {
      id: "ciso-defense",
      role: "Chief Information Security Officer (CISO)",
      name: "Elena Rostova",
      avatar: "🛡️",
      concern: "Zero Data Leaks, PII Compliance & Shadow AI Elimination",
      mindset: "CISOs view AI as a massive data exfiltration vector. They worry about proprietary IP leaking to model retraining, prompt injection attacks, and regulatory fines.",
      scenarios: [
        {
          id: "ciso-s1",
          question: "\"My top priority is zero data leaks. If our proprietary source code, patient records, or financial models leak into a public AI model training set, we face regulatory fines and loss of IP. Why should I sign off on this?\"",
          responses: [
            {
              text: "We deploy dedicated private cloud VPC endpoints (Azure OpenAI / AWS Bedrock) backed by contractual Zero Data Retention (ZDR) SLAs. Prompts pass through local automated PII scrubbing (Presidio) first.",
              score: 100,
              feedback: "<strong>FLAWLESS RESPONSE!</strong> Directly provides technical guarantees: Zero Data Retention SLAs, VPC isolation, and PII anonymization."
            }
          ]
        }
      ]
    },

    // 3. CTO Persona
    {
      id: "cto-defense",
      role: "Chief Technology Officer (CTO)",
      name: "Marcus Vance",
      avatar: "💻",
      concern: "Technical Debt, Data Silos, Latency & MLOps Complexity",
      mindset: "CTOs fear adding complex technical debt, maintaining unproven tools, and managing fragmented data pipelines across legacy infrastructure.",
      scenarios: [
        {
          id: "cto-s1",
          question: "\"Our enterprise data is scattered across 15 legacy databases, mainframes, and unorganized SharePoint folders. Do we need to spend 2 years cleaning up our data infrastructure before we can even begin AI implementation?\"",
          responses: [
            {
              text: "No! Modern RAG architecture allows us to ingest unstructured PDFs and legacy data via decoupled ETL pipelines and vector embeddings in parallel without refactoring core legacy databases.",
              score: 100,
              feedback: "<strong>EXCELLENT ANSWER!</strong> Demonstrates how decoupled RAG pipelines extract value from messy legacy data without requiring multi-year data lake refactoring."
            },
            {
              text: "Yes, we must pause all AI projects for 18 months while we rebuild a centralized cloud data lakehouse.",
              score: 35,
              feedback: "<strong>INCORRECT STRATEGY.</strong> Delaying AI value creation for 18 months causes the enterprise to fall far behind market competitors."
            }
          ]
        }
      ]
    },

    // 4. CEO Persona
    {
      id: "ceo-defense",
      role: "Chief Executive Officer (CEO)",
      name: "Victoria Sterling",
      avatar: "👑",
      concern: "Competitive Moats, Business Transformation & Market Speed",
      mindset: "CEOs care about strategic differentiation, revenue expansion, market positioning, and making sure the company isn't disrupted by AI-native startups.",
      scenarios: [
        {
          id: "ceo-s1",
          question: "\"If our competitors are buying the exact same foundation models from OpenAI and Anthropic, how does this investment build a defensible competitive moat for our enterprise?\"",
          responses: [
            {
              text: "The moat isn't the base foundation model—it's combining our proprietary domain dataset, internal workflow integration, fine-tuned agentic tools, and a proprietary feedback data flywheel.",
              score: 100,
              feedback: "<strong>MASTERFUL LEADERSHIP ANSWER!</strong> Focuses on proprietary data assets, custom workflows, and data flywheels as the true defensible moats."
            },
            {
              text: "We will build our own foundation model from scratch to guarantee absolute uniqueness.",
              score: 35,
              feedback: "<strong>FINANCIALLY UNREALISTIC.</strong> Pre-training a foundation model costs tens of millions without guaranteeing superior business utility."
            }
          ]
        }
      ]
    },

    // 5. CHRO Persona
    {
      id: "chro-defense",
      role: "Chief Human Resources Officer (CHRO)",
      name: "David Sterling",
      avatar: "👥",
      concern: "Workforce Anxiety, Upskilling & Culture Shift",
      mindset: "CHROs worry about employee union strikes, fear of job replacement, morale collapse, and bridging the massive AI skills gap across non-technical staff.",
      scenarios: [
        {
          id: "chro-s1",
          question: "\"Our staff is terrified that this AI initiative is a precursor to mass layoffs. Resistance is growing across middle management. How do we manage this cultural transition without destroying morale?\"",
          responses: [
            {
              text: "We frame AI explicitly as an 'Augmentation Engine' designed to eliminate repetitive administrative toil, paired with role-based upskilling pathways and an AI Champions recognition program.",
              score: 100,
              feedback: "<strong>EXCELLENT PEOPLE LEADERSHIP!</strong> Shifts narrative from automation to augmentation while providing structured upskilling pathways."
            },
            {
              text: "We should tell employees that anyone who refuses to use AI will be replaced by someone who does.",
              score: 20,
              feedback: "<strong>DESTRUCTIVE CULTURE RESPONSE.</strong> Threatening employees creates toxic resistance, union pushback, and key talent attrition."
            }
          ]
        }
      ]
    },

    // 6. General Counsel / Legal Persona
    {
      id: "cl-defense",
      role: "General Counsel & Chief Legal Officer (CLO)",
      name: "Rebecca Thorne",
      avatar: "⚖️",
      concern: "Regulatory Liability, Copyright Infringement & IP Ownership",
      mindset: "Legal officers focus on compliance penalties (EU AI Act), copyright infringement lawsuits, output ownership, and legal liability when AI hallucinated advice causes customer damage.",
      scenarios: [
        {
          id: "cl-s1",
          question: "\"Who owns the copyright of AI-generated content, and what happens if a foundation model vendor is sued for copyright infringement over their training data?\"",
          responses: [
            {
              text: "We only contract with cloud providers (Azure/AWS/Google) that offer full commercial IP Indemnification clauses. Additionally, human staff review and edit all customer-facing generated outputs.",
              score: 100,
              feedback: "<strong>FLAWLESS LEGAL DEFENSE!</strong> Leveraging enterprise IP indemnification protects the company from third-party copyright lawsuits."
            },
            {
              text: "Copyright law hasn't caught up with AI yet, so we don't need to worry about lawsuits.",
              score: 15,
              feedback: "<strong>HIGH-RISK NEGLIGENCE.</strong> Ignoring legal liability exposes the corporation to severe IP litigation."
            }
          ]
        }
      ]
    }
  ]
};
