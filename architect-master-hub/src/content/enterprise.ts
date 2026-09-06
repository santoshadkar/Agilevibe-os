import { TopicContent } from '../lib/content-types';

export const enterpriseTopics: TopicContent[] = [
  {
    id: 'ea-frameworks-comparison',
    frameworkId: 'enterprise',
    title: 'EA Frameworks: TOGAF, Zachman, FEAF & Gartner',
    subtitle: 'Comparing the major enterprise architecture frameworks',
    estimatedMinutes: 15,
    difficulty: 'foundation',
    domain: 'ea-frameworks',
    overview: 'This topic provides a comprehensive comparison of the major Enterprise Architecture frameworks. It explores TOGAF, Zachman, FEAF, DODAF, and Gartner to help you understand their strengths and appropriate use cases.',
    sections: [
      {
        id: 'sec-1',
        title: 'Overview of Major EA Frameworks',
        blocks: [
          {
            type: 'paragraph',
            content: 'Enterprise Architecture frameworks provide a structured approach to aligning business goals with IT infrastructure. TOGAF is process-driven, centering on the Architecture Development Method (ADM) which is highly adaptable. It is commercially focused and widely adopted across industries. The Zachman Framework, in contrast, is an ontology—a 6x6 matrix ensuring completeness by checking different perspectives against various interrogatives, but it offers no process. FEAF is tailored for the US Federal Government, utilizing five reference models to standardise architecture across agencies. DODAF is designed for the US Department of Defense, heavily relying on viewpoints (Operational, Systems, Technical, and All Viewpoints) for complex systems. Finally, the Gartner methodology is less about rigid structure and more about a scenario-based, pragmatic approach focused on business outcomes and continuous adaptation.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Remember: Frameworks are not mutually exclusive; they can often be combined to cover both process and completeness.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'When to Use Which Framework',
        blocks: [
          {
            type: 'bullets',
            items: [
              'TOGAF: Best for commercial organizations needing a robust, repeatable process (ADM).',
              'Zachman: Ideal for academic analysis or ensuring absolute completeness of the architecture artifacts.',
              'FEAF: Mandatory for US Federal Government agencies and contractors working with them.',
              'DODAF: Required for defense contractors and complex military systems.',
              'Gartner: Suited for fast-paced businesses prioritizing pragmatic, outcome-driven architecture over heavy documentation.'
            ]
          },
          {
            type: 'paragraph',
            content: 'Choosing the right framework depends heavily on the organizational context. Regulated industries often prefer the structured approach of TOGAF combined with the strict reference models of FEAF or DODAF. Organizations that require a thorough audit of their current state might employ Zachman to identify missing artifacts. Many modern enterprises lean towards Gartner’s pragmatic approach, focusing on delivering immediate business value through scenarios rather than getting bogged down in extensive upfront modeling.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Combining Frameworks for Maximum Impact',
        blocks: [
          {
            type: 'paragraph',
            content: 'A common and highly effective strategy is combining TOGAF with the Zachman Framework. While TOGAF provides the step-by-step Architecture Development Method (ADM) for creating and managing the architecture, it can sometimes lack a rigid structure for ensuring all perspectives are documented. Zachman fills this gap by acting as a periodic completeness check. For instance, as an architect moves through the TOGAF ADM phases (Business, Information Systems, Technology), they can map their deliverables to the Zachman matrix cells. This ensures that the perspectives of the Executive, Business Owner, System Designer, and Technology Builder are all addressed across the What, How, Where, Who, When, and Why. This hybrid approach leverages the process strength of TOGAF and the analytical rigor of Zachman.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Merging Frameworks',
            content: 'A global bank undergoing digital transformation uses TOGAF ADM to guide their migration to a cloud-native architecture. However, to ensure they don\'t miss critical regulatory requirements, they map their TOGAF artifacts to the Zachman matrix, discovering they had overlooked the "Who" (People) perspective at the System Designer level regarding access controls.'
          },
          {
            type: 'diagram',
            content: `
+----------------+---------------------+-----------------------+
| Framework      | Primary Focus       | Key Characteristic    |
+----------------+---------------------+-----------------------+
| TOGAF          | Process (ADM)       | Adaptable, Commercial |
| Zachman        | Ontology (6x6)      | Completeness Check    |
| FEAF           | Government Standard | 5 Reference Models    |
| DODAF          | Defense Systems     | OV/SV/TV/AV Viewpoints|
| Gartner        | Pragmatic           | Scenario-based        |
+----------------+---------------------+-----------------------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'TOGAF ADM', definition: 'The Architecture Development Method, a step-by-step process for developing enterprise architecture.' },
      { term: 'Zachman Ontology', definition: 'A 6x6 matrix used to classify and organize architecture artifacts, ensuring comprehensive coverage.' },
      { term: 'FEAF', definition: 'Federal Enterprise Architecture Framework, used primarily by US government agencies.' },
      { term: 'DODAF', definition: 'Department of Defense Architecture Framework, focusing on operational and system viewpoints.' },
      { term: 'Gartner Methodology', definition: 'A pragmatic, business-outcome-focused approach to enterprise architecture.' }
    ],
    examTips: [
      'Understand the fundamental difference between TOGAF (process) and Zachman (ontology/completeness).',
      'Memorize the primary use cases for FEAF (government) and DODAF (defense).'
    ],
    commonMistakes: [
      'Assuming Zachman provides a methodology for implementing architecture (it does not).',
      'Thinking frameworks are mutually exclusive and cannot be combined.'
    ],
    externalResources: [
      { title: 'The Open Group (TOGAF)', type: 'official-doc', url: 'https://www.opengroup.org/togaf', description: 'Official TOGAF documentation', isFree: true },
      { title: 'Zachman International', type: 'official-doc', url: 'https://www.zachman.com/', description: 'Official Zachman Framework site', isFree: true }
    ],
    relatedTopicIds: ['ea-zachman-deep-dive'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which of the following frameworks is primarily considered an ontology rather than a process methodology?',
        options: [
          { id: 'a', text: 'TOGAF', isCorrect: false },
          { id: 'b', text: 'FEAF', isCorrect: false },
          { id: 'c', text: 'Zachman', isCorrect: true },
          { id: 'd', text: 'Gartner', isCorrect: false }
        ],
        explanation: 'The Zachman Framework is an ontology (a classification scheme) structured as a 6x6 matrix, and does not provide a step-by-step process like TOGAF.'
      },
      {
        id: 'q2',
        question: 'Which framework uses Operational, Systems, and Technical Viewpoints?',
        options: [
          { id: 'a', text: 'TOGAF', isCorrect: false },
          { id: 'b', text: 'DODAF', isCorrect: true },
          { id: 'c', text: 'Zachman', isCorrect: false },
          { id: 'd', text: 'FEAF', isCorrect: false }
        ],
        explanation: 'DODAF (Department of Defense Architecture Framework) relies heavily on specific viewpoints (OV, SV, TV, AV) to describe complex systems.'
      }
    ]
  },
  {
    id: 'ea-zachman-deep-dive',
    frameworkId: 'enterprise',
    title: 'Zachman Framework Deep Dive',
    subtitle: 'The 6x6 ontology matrix for enterprise architecture completeness',
    estimatedMinutes: 12,
    difficulty: 'foundation',
    domain: 'ea-frameworks',
    overview: 'A detailed exploration of the Zachman Framework. This topic breaks down the 6 rows and 6 columns that form the foundational ontology for enterprise architecture.',
    sections: [
      {
        id: 'sec-1',
        title: 'The 6 Rows: Perspectives',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Zachman Framework is built on six rows that represent different perspectives of the enterprise, from high-level planning to the actual working system. The Executive Planner focuses on scope and context. The Business Owner deals with business concepts and models. The System Designer translates these into system logic models. The Technology Builder creates technology physics models. The Subcontractor focuses on out-of-context component configurations. Finally, the Working System represents the enterprise reality. Each row represents a distinct view of the same enterprise, ensuring that the architecture addresses the concerns of all stakeholders, from the CEO down to the developers.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: Think of the rows as different lenses through which you view the organization, increasing in technical detail as you move down.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'The 6 Columns: Interrogatives',
        blocks: [
          {
            type: 'paragraph',
            content: 'Intersecting the six perspectives are six columns based on fundamental interrogatives: What, How, Where, Who, When, and Why. "What" refers to Data (e.g., entity-relationship models). "How" refers to Function (e.g., business process models). "Where" refers to Network or Location (e.g., logistics networks or IT node maps). "Who" refers to People (e.g., organization charts). "When" refers to Time (e.g., business cycle timing or system event timing). "Why" refers to Motivation (e.g., business plans and strategy). By asking these six questions across all six perspectives, the framework ensures no aspect of the enterprise design is overlooked.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'The 36 Cells: Artifacts and Completeness',
        blocks: [
          {
            type: 'paragraph',
            content: 'The intersection of the 6 rows and 6 columns creates 36 unique cells. Each cell represents a specific artifact or model. For example, the intersection of System Designer (Row 3) and What/Data (Column 1) might result in a logical data model or ER diagram. The intersection of Business Owner (Row 2) and How/Function (Column 2) yields a business process model. Crucially, Zachman is descriptive, not prescriptive. It tells you what artifacts should exist for a complete picture, but it doesn\'t tell you how to build them or in what order. This makes it an excellent tool for auditing existing architectures to identify gaps.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Using Zachman for Gap Analysis',
            content: 'An enterprise architects reviews their documentation using Zachman and realizes that while they have detailed functional specs (System Designer/How) and data models (System Designer/What), they lack documentation on security roles and access (System Designer/Who). This prompts them to create a role-based access control (RBAC) matrix.'
          },
          {
            type: 'diagram',
            content: `
      | What (Data)| How (Func) | Where (Net)| Who (Ppl) | When (Time)| Why (Motiv)|
------+------------+------------+------------+-----------+------------+------------+
Exec  | List of    | List of    | List of    | List of   | List of    | List of    |
Plan  | Things     | Processes  | Locations  | Orgs      | Events     | Goals      |
------+------------+------------+------------+-----------+------------+------------+
Biz   | Conceptual | Biz Process| Logistics  | Org Chart | Master     | Biz Plan   |
Owner | Data Model | Model      | Network    |           | Schedule   |            |
------+------------+------------+------------+-----------+------------+------------+
Sys   | Logical    | System     | Distrib.   | Human     | Processing | Biz Rule   |
Design| Data Model | Arch       | Arch       | Interface | Structure  | Model      |
------+------------+------------+------------+-----------+------------+------------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Ontology', definition: 'A set of concepts and categories in a subject area or domain that shows their properties and the relations between them.' },
      { term: 'Perspective', definition: 'The viewpoint of a specific stakeholder group (the rows in Zachman).' },
      { term: 'Interrogative', definition: 'The fundamental questions (What, How, Where, Who, When, Why) used to classify artifacts (the columns).' },
      { term: 'Descriptive Framework', definition: 'A framework that describes what needs to be done or documented, rather than prescribing how to do it.' },
      { term: 'Artifact', definition: 'A specific document, model, or deliverable that fits into one of the 36 cells.' }
    ],
    examTips: [
      'Remember that Zachman has no process; it is purely an ontology for classification.',
      'Be able to map common artifacts (like an ER diagram or Org Chart) to their approximate cell in the matrix.'
    ],
    commonMistakes: [
      'Confusing Zachman with a methodology like TOGAF ADM.',
      'Assuming all 36 cells must be filled with heavy documentation (agile approaches fill them lightly).'
    ],
    externalResources: [
      { title: 'Zachman International', type: 'official-doc', url: 'https://www.zachman.com/', description: 'Official Zachman Framework site', isFree: true },
      { title: 'Enterprise Architecture Frameworks', type: 'article', url: 'https://en.wikipedia.org/wiki/Enterprise_architecture_framework', description: 'Overview of EA frameworks including Zachman', isFree: true }
    ],
    relatedTopicIds: ['ea-frameworks-comparison'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'In the Zachman Framework, what does the "Who" column represent?',
        options: [
          { id: 'a', text: 'Data', isCorrect: false },
          { id: 'b', text: 'People/Organization', isCorrect: true },
          { id: 'c', text: 'Time/Schedule', isCorrect: false },
          { id: 'd', text: 'Motivation', isCorrect: false }
        ],
        explanation: 'The "Who" column deals with the people, roles, and organizational structures within the enterprise.'
      },
      {
        id: 'q2',
        question: 'Which row in the Zachman Framework focuses on the logical system models?',
        options: [
          { id: 'a', text: 'Executive Planner', isCorrect: false },
          { id: 'b', text: 'Business Owner', isCorrect: false },
          { id: 'c', text: 'System Designer', isCorrect: true },
          { id: 'd', text: 'Technology Builder', isCorrect: false }
        ],
        explanation: 'The System Designer (Row 3) is responsible for translating business models into logical system designs.'
      }
    ]
  },
  {
    id: 'ea-business-architecture',
    frameworkId: 'enterprise',
    title: 'Business Architecture: Capabilities, Value Streams & Operating Models',
    subtitle: 'Structuring the business to deliver value',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'business-arch',
    overview: 'This topic covers the core components of Business Architecture, focusing on the Business Motivation Model, capability mapping, and value stream analysis.',
    sections: [
      {
        id: 'sec-1',
        title: 'The Business Motivation Model (BMM)',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Business Motivation Model (BMM) provides a scheme for developing, communicating, and managing business plans in an organized manner. It defines the elements of business governance and how they relate to each other. The cascade starts with the Mission (what the business does) and Vision (what it wants to be). These inform Goals (broad, long-term targets) and Objectives (specific, measurable steps). To achieve these, the business defines Strategies (the overall approach) and Tactics (short-term actions). Understanding the BMM allows Enterprise Architects to ensure that every IT investment and architectural decision is directly traceable back to a specific business objective and the overarching vision.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Alignment is key: Architecture without business motivation is just technology for technology\'s sake.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Business Capabilities and Heat Maps',
        blocks: [
          {
            type: 'paragraph',
            content: 'Business capabilities define what an organization does, independent of how it does it (processes) or who does it (org chart). They are the fundamental building blocks of the business. Capabilities are typically organized hierarchically into Levels 1, 2, and 3. For example, L1: Human Resources, L2: Talent Acquisition, L3: Candidate Screening. By mapping capabilities, architects create a stable baseline. This model is then used to create capability heat maps, where capabilities are color-coded based on strategic importance, current maturity, or required investment. A capability that is highly strategic but has low maturity (e.g., colored red on the heat map) becomes a prime candidate for immediate architectural focus and IT investment.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Value Streams and Reference Models',
        blocks: [
          {
            type: 'paragraph',
            content: 'Value stream mapping visualizes the sequence of activities required to deliver a product or service to a customer. Unlike process models that focus on internal efficiency, value streams focus on the customer journey from a trigger event to the delivery of value. By cross-mapping business capabilities to the stages of a value stream, architects can identify which capabilities are critical for delivering customer value. To accelerate this work, architects use industry reference models like the APQC Process Classification Framework (cross-industry), eTOM (telecommunications), or BIAN (banking). The Business Architecture Guild\'s BIZBOK guide is the definitive resource for these practices.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Capability Heat Mapping',
            content: 'A retail company creates a capability map and highlights "Omnichannel Order Fulfillment" in red (high strategic value, low current performance). The architecture team uses this to prioritize the implementation of a new distributed order management system over upgrading internal HR software.'
          },
          {
            type: 'diagram',
            content: `
[Trigger: Customer Order] -> [Receive Order] -> [Process Payment] -> [Fulfill] -> [Deliver Value]
                                ^                   ^                   ^
Capabilities:             Order Mgmt        Payment Processing    Logistics
                          Inventory Mgmt    Fraud Detection       Shipping
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Business Motivation Model (BMM)', definition: 'A framework for defining business plans, from mission and vision down to strategies and tactics.' },
      { term: 'Business Capability', definition: 'What an organization does or has the ability to do to achieve a specific purpose.' },
      { term: 'Capability Heat Map', definition: 'A visual representation of capability models highlighting areas needing investment or improvement.' },
      { term: 'Value Stream', definition: 'The end-to-end collection of activities that creates a result for a customer.' },
      { term: 'BIZBOK', definition: 'A Guide to the Business Architecture Body of Knowledge, maintained by the Business Architecture Guild.' }
    ],
    examTips: [
      'Remember: Capabilities are WHAT a business does; Processes are HOW it does them.',
      'Know that BMM connects strategy to execution.'
    ],
    commonMistakes: [
      'Confusing business capabilities with business processes or organizational departments.',
      'Ignoring the customer perspective when defining value streams.'
    ],
    externalResources: [
      { title: 'Business Architecture Guild', type: 'official-doc', url: 'https://www.businessarchitectureguild.org/', description: 'Home of the BIZBOK Guide', isFree: false },
      { title: 'APQC Process Classification Framework', type: 'official-doc', url: 'https://www.apqc.org/pcf', description: 'Cross-industry process frameworks', isFree: true }
    ],
    relatedTopicIds: ['ea-operating-model'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which of the following describes WHAT a business does, independent of how it is implemented?',
        options: [
          { id: 'a', text: 'Business Process', isCorrect: false },
          { id: 'b', text: 'Value Stream', isCorrect: false },
          { id: 'c', text: 'Business Capability', isCorrect: true },
          { id: 'd', text: 'Operating Model', isCorrect: false }
        ],
        explanation: 'Business capabilities describe what the business does and are generally stable over time, whereas processes describe how it is done and change frequently.'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of a capability heat map?',
        options: [
          { id: 'a', text: 'To map network topology', isCorrect: false },
          { id: 'b', text: 'To prioritize IT investments based on strategic value and maturity', isCorrect: true },
          { id: 'c', text: 'To define the corporate mission and vision', isCorrect: false },
          { id: 'd', text: 'To model database performance', isCorrect: false }
        ],
        explanation: 'Heat maps color-code capabilities to highlight gaps between current performance and strategic importance, guiding investment decisions.'
      }
    ]
  },
  {
    id: 'ea-operating-model',
    frameworkId: 'enterprise',
    title: 'Target Operating Model Design',
    subtitle: 'Structuring the organization to execute strategy',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'business-arch',
    overview: 'This topic explains Target Operating Models (TOM), exploring the components, archetypes, and design processes required to structure an organization for strategic success.',
    sections: [
      {
        id: 'sec-1',
        title: 'Components of a Target Operating Model',
        blocks: [
          {
            type: 'paragraph',
            content: 'A Target Operating Model (TOM) is the high-level representation of how an organization can be best organized to deliver and execute its strategy. It acts as the bridge between strategy and day-to-day operations. A robust TOM encompasses several key components: organizational structure (reporting lines), processes (how work gets done), people & roles (skills and behaviors), technology (systems supporting the work), governance (decision-making authority), locations (where work is performed), and partnerships (external ecosystem). Designing a TOM requires aligning all these components to ensure the business capabilities can be effectively deployed to achieve the strategic vision.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: Changing the technology without updating the roles, processes, and governance of the TOM usually leads to failed transformations.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'MIT CISR Operating Model Archetypes',
        blocks: [
          {
            type: 'paragraph',
            content: 'The MIT Center for Information Systems Research (CISR) defines four primary operating model archetypes based on two dimensions: business process integration (sharing data across units) and business process standardization (doing things the exact same way). The Diversification model has low standardization and low integration (independent business units). Coordination has low standardization but high integration (shared data, unique processes). Replication has high standardization but low integration (franchise model, same processes but separate data). Finally, Unification involves high standardization and high integration (global enterprise, single global ERP system). Selecting the right archetype dictates the entire enterprise IT architecture.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Digital Operating Models and the Design Process',
        blocks: [
          {
            type: 'paragraph',
            content: 'Modern enterprises are shifting towards Digital Operating Models, which are platform-based, product-led, and rely heavily on agile delivery methodologies. Instead of traditional functional silos, these models organize teams around customer journeys or digital products. The process of designing a TOM typically starts with analyzing the As-Is state. Next, architects identify Strategic Drivers and formulate Design Principles (e.g., "cloud-first", "self-service data"). Based on these, the To-Be TOM is drafted. The final and most crucial step is developing the Transition Roadmap, detailing the phased approach to move from the current state to the target state, managing organizational change along the way.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Shifting Archetypes',
            content: 'A multinational holding company operating under the Diversification archetype (independent subsidiaries) decides to centralize its supply chain. They shift to a Coordination model, requiring the EA team to implement a centralized master data management (MDM) system to integrate supplier data across previously isolated units.'
          },
          {
            type: 'diagram',
            content: `
Integration (Data Sharing)
  ^
High |  Coordination  |  Unification
     | (Shared Data)  | (Global ERP)
     +----------------+----------------
Low  | Diversification|  Replication
     | (Independent)  | (Franchise)
     +--------------------------------> Standardization
            Low               High
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Target Operating Model (TOM)', definition: 'A description of the desired future state of the operating model.' },
      { term: 'Process Standardization', definition: 'The degree to which business processes are executed the same way across the enterprise.' },
      { term: 'Process Integration', definition: 'The degree to which business units share data and systems to execute end-to-end processes.' },
      { term: 'Unification Archetype', definition: 'High standardization and high integration; typically relies on central enterprise systems.' },
      { term: 'Digital Operating Model', definition: 'An operating model optimized for digital delivery, focusing on platforms, products, and agility.' }
    ],
    examTips: [
      'Be able to plot the four MIT CISR archetypes on a 2x2 matrix of integration vs standardization.',
      'Remember that a TOM is broader than just IT; it includes people, processes, and governance.'
    ],
    commonMistakes: [
      'Equating a TOM purely with an organizational chart.',
      'Failing to define design principles before designing the To-Be state.'
    ],
    externalResources: [
      { title: 'MIT CISR', type: 'article', url: 'https://cisr.mit.edu/', description: 'Research on digital operating models', isFree: true },
      { title: 'Deloitte TOM Insights', type: 'article', url: 'https://www2.deloitte.com/', description: 'Consulting insights on TOM design', isFree: true }
    ],
    relatedTopicIds: ['ea-business-architecture'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'According to the MIT CISR framework, which operating model features high standardization and low integration?',
        options: [
          { id: 'a', text: 'Diversification', isCorrect: false },
          { id: 'b', text: 'Coordination', isCorrect: false },
          { id: 'c', text: 'Replication', isCorrect: true },
          { id: 'd', text: 'Unification', isCorrect: false }
        ],
        explanation: 'Replication involves high standardization (doing things the same way) but low integration (independent systems/data), like a franchise model.'
      },
      {
        id: 'q2',
        question: 'Which of the following is NOT typically considered a core component of a Target Operating Model?',
        options: [
          { id: 'a', text: 'Governance', isCorrect: false },
          { id: 'b', text: 'People & Roles', isCorrect: false },
          { id: 'c', text: 'Source Code Repositories', isCorrect: true },
          { id: 'd', text: 'Processes', isCorrect: false }
        ],
        explanation: 'Source code repositories are a low-level technology detail, whereas a TOM focuses on higher-level components like people, processes, governance, and organizational structure.'
      }
    ]
  },
  {
    id: 'ea-strategy-alignment',
    frameworkId: 'enterprise',
    title: 'Strategy-to-Execution: Aligning EA with Business Strategy',
    subtitle: 'Connecting high-level goals to project delivery',
    estimatedMinutes: 10,
    difficulty: 'practitioner',
    domain: 'strategy',
    overview: 'This topic explores how Enterprise Architecture acts as the connective tissue between business strategy and execution, utilizing OKRs, balanced scorecards, and portfolio management.',
    sections: [
      {
        id: 'sec-1',
        title: 'The Strategy Cascade and OKRs',
        blocks: [
          {
            type: 'paragraph',
            content: 'The strategy cascade is the process of breaking down high-level corporate vision into actionable work. It flows from Vision to Strategy, then into the Portfolio, which funds Programs and Projects, eventually transitioning into Operations. To ensure alignment throughout this cascade, many organizations use OKRs (Objectives and Key Results). Objectives define what needs to be achieved (e.g., "Become the market leader in mobile banking"), while Key Results define the measurable outcomes (e.g., "Achieve 1 million active mobile users"). Enterprise Architecture aligns IT initiatives directly to these OKRs, ensuring that every architectural decision and technology investment can be justified by its contribution to a specific Key Result.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: If an architectural initiative cannot be mapped to an organizational OKR or strategic goal, it should likely be deprioritized.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'The Balanced Scorecard Approach',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Balanced Scorecard is a strategic management performance metric used to identify and improve various internal business functions and their resulting external outcomes. It measures performance across four perspectives: Financial (revenue, costs), Customer (satisfaction, retention), Internal Process (efficiency, quality), and Learning & Growth (human capital, culture). Enterprise Architects use the Balanced Scorecard to ensure their technology strategies are well-rounded. For instance, focusing purely on reducing infrastructure costs (Financial) might negatively impact system availability and the user experience (Customer). Architecture must balance these competing concerns.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Portfolio and Benefits Realization Management',
        blocks: [
          {
            type: 'paragraph',
            content: 'Strategy execution heavily relies on Project Portfolio Management (PPM). The EA capability roadmap must be tightly integrated with PPM to ensure that projects are funded and sequenced in a way that builds the required target architecture. Once projects are delivered, Benefits Realization Management (BRM) comes into play. BRM tracks whether the IT investments actually delivered the strategic benefits promised in the business case. EAs play a crucial role here by defining the architectural KPIs (e.g., retirement of legacy systems, reduction in technical debt) and monitoring them post-deployment to ensure the strategy was truly executed and value was realized.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Alignment Failure',
            content: 'An IT team executes a massive cloud migration project on time and on budget. However, the business strategy was to improve customer time-to-market. Because the migration was a pure "lift-and-shift" that didn\'t adopt agile cloud-native practices, time-to-market didn\'t improve. This is a failure of strategy-to-execution alignment.'
          },
          {
            type: 'diagram',
            content: `
[Vision] -> [Strategy] -> [Portfolio] -> [Programs/Projects] -> [Operations]
   |             |             |                 |                   |
 [OKRs]    [Roadmaps]    [Funding]        [Delivery]         [Value Realization]
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Strategy Cascade', definition: 'The flow of directives from high-level vision down to operational execution.' },
      { term: 'OKR (Objectives and Key Results)', definition: 'A goal-setting framework for defining and tracking objectives and their outcomes.' },
      { term: 'Balanced Scorecard', definition: 'A performance metric framework measuring financial, customer, internal, and learning perspectives.' },
      { term: 'Project Portfolio Management (PPM)', definition: 'The centralized management of one or more project portfolios to achieve strategic objectives.' },
      { term: 'Benefits Realization Management', definition: 'The process of ensuring that business outcomes are achieved as planned from investments.' }
    ],
    examTips: [
      'Understand the four perspectives of the Balanced Scorecard.',
      'Recognize that EA sits between Strategy Formulation and Project Execution.'
    ],
    commonMistakes: [
      'Assuming that successful project delivery (on time/budget) equals strategic success.',
      'Failing to measure value realization after a project is handed over to operations.'
    ],
    externalResources: [
      { title: 'Balanced Scorecard Institute', type: 'article', url: 'https://balancedscorecard.org/', description: 'Basics of the Balanced Scorecard', isFree: true },
      { title: 'Measure What Matters (OKRs)', type: 'book', url: 'https://www.whatmatters.com/', description: 'John Doerrs book on OKRs', isFree: false }
    ],
    relatedTopicIds: ['ea-business-architecture'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which of the following is NOT one of the four perspectives of the Balanced Scorecard?',
        options: [
          { id: 'a', text: 'Financial', isCorrect: false },
          { id: 'b', text: 'Customer', isCorrect: false },
          { id: 'c', text: 'Technology Architecture', isCorrect: true },
          { id: 'd', text: 'Internal Process', isCorrect: false }
        ],
        explanation: 'The four perspectives are Financial, Customer, Internal Process, and Learning & Growth. Technology Architecture supports these but is not a top-level perspective.'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of Benefits Realization Management (BRM)?',
        options: [
          { id: 'a', text: 'To ensure projects are completed under budget', isCorrect: false },
          { id: 'b', text: 'To track if IT investments delivered the promised strategic outcomes', isCorrect: true },
          { id: 'c', text: 'To manage the salaries and bonuses of project managers', isCorrect: false },
          { id: 'd', text: 'To prioritize the IT backlog in Agile teams', isCorrect: false }
        ],
        explanation: 'BRM is focused on measuring post-deployment success to ensure the business case benefits were actually achieved.'
      }
    ]
  },
  {
    id: 'ea-governance',
    frameworkId: 'enterprise',
    title: 'EA Governance Models',
    subtitle: 'Decision rights and architecture review processes',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'ea-governance',
    overview: 'This topic explains how to govern Enterprise Architecture effectively, covering the Architecture Review Board, Architecture Decision Records, and various governance models.',
    sections: [
      {
        id: 'sec-1',
        title: 'Governance Models: Centralized to Decentralized',
        blocks: [
          {
            type: 'paragraph',
            content: 'EA Governance defines the decision rights and accountability framework to encourage desirable behavior in the use of IT. There are three primary models. Centralized governance places all architectural decision-making power in a single, central EA team. This ensures high consistency but can become a bottleneck. Decentralized governance pushes decision-making down to individual business units or domain teams, maximizing speed but risking fragmentation and duplication. The Federated model is the most common middle ground: a central team defines broad enterprise principles and standards, while domain architects embedded in business units make specific design decisions within those guardrails. Choosing the right model depends on the organization\'s culture and regulatory environment.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Governance should be a catalyst for good design, not just an approval tollgate.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'The Architecture Review Board (ARB)',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Architecture Review Board (ARB) is the primary governing body for EA. It is typically composed of the Chief Enterprise Architect, domain architects (data, security, infrastructure), and key business representatives. The ARB\'s role is to review major project designs for compliance with architecture standards, approve exceptions (waivers), and manage technology lifecycle standards (e.g., approving a new cloud vendor). A mature ARB operates transparently, providing constructive feedback rather than just policing projects. To prevent bottlenecks, modern ARBs often delegate lower-risk decisions to peer-review groups, focusing their attention only on high-risk, cross-domain architecture decisions.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Architecture Decision Records (ADRs) and KPIs',
        blocks: [
          {
            type: 'paragraph',
            content: 'Documentation of governance decisions is vital. Architecture Decision Records (ADRs) are short text documents capturing significant architectural decisions along with their context and consequences. Storing ADRs alongside code or in a central repository creates a historical log of why decisions were made, preventing relitigation of old arguments. Measuring governance effectiveness requires KPIs. Common EA KPIs include standards adoption rate (percentage of projects using approved tech), time-to-decision (how long the ARB takes to review), architecture debt ratio, and stakeholder satisfaction. Moving up the governance maturity ladder involves transitioning from informal, ad-hoc decisions to documented, repeatable, and eventually optimized processes.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Using ADRs',
            content: 'A team decides to use MongoDB instead of PostgreSQL for a specific microservice due to the unstructured nature of the data. They write an ADR documenting the context (unstructured data), the decision (MongoDB), and the consequences (need to train the ops team on Mongo). Two years later, a new architect questions the choice, but the ADR immediately explains the rationale.'
          },
          {
            type: 'diagram',
            content: `
[Centralized] <--------------> [Federated] <--------------> [Decentralized]
High Consistency               Guardrails + Autonomy        High Speed
High Bottleneck Risk           Best of both worlds          High Duplication
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Federated Governance', definition: 'Centralized principles and standards combined with decentralized execution and decision-making.' },
      { term: 'Architecture Review Board (ARB)', definition: 'A cross-functional group responsible for reviewing and approving architectural decisions and standards.' },
      { term: 'Architecture Decision Record (ADR)', definition: 'A document capturing an important architecture decision along with its context and consequences.' },
      { term: 'Architecture Debt', definition: 'The implied cost of additional rework caused by choosing an easy, non-standard solution now instead of a better approach.' },
      { term: 'Waiver/Exception', definition: 'Formal approval granted by the ARB to deviate from an architectural standard for a specific period.' }
    ],
    examTips: [
      'Understand the trade-offs between centralized (control) and decentralized (speed) governance.',
      'Know the standard components of an ADR: Context, Decision, Consequences.'
    ],
    commonMistakes: [
      'Treating the ARB as an ivory tower that dictates technology without consulting delivery teams.',
      'Failing to document the "Why" (context) when making architecture decisions.'
    ],
    externalResources: [
      { title: 'TOGAF Architecture Governance', type: 'official-doc', url: 'https://pubs.opengroup.org/architecture/togaf9-doc/arch/chap44.html', description: 'The Open Group guide to governance', isFree: true },
      { title: 'Documenting Architecture Decisions (ADRs)', type: 'article', url: 'https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions', description: 'Michael Nygard original ADR blog post', isFree: true }
    ],
    relatedTopicIds: ['ea-maturity-models'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which governance model relies on a central team for setting standards, but allows domain teams to make specific design decisions within those standards?',
        options: [
          { id: 'a', text: 'Centralized', isCorrect: false },
          { id: 'b', text: 'Federated', isCorrect: true },
          { id: 'c', text: 'Decentralized', isCorrect: false },
          { id: 'd', text: 'Anarchic', isCorrect: false }
        ],
        explanation: 'A Federated model balances centralized control (standards/guardrails) with decentralized execution (domain-level decision making).'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of an Architecture Decision Record (ADR)?',
        options: [
          { id: 'a', text: 'To track project budgets and timelines', isCorrect: false },
          { id: 'b', text: 'To document API specifications', isCorrect: false },
          { id: 'c', text: 'To capture significant architectural choices, their context, and consequences', isCorrect: true },
          { id: 'd', text: 'To monitor server uptime and metrics', isCorrect: false }
        ],
        explanation: 'ADRs are used to maintain a historical log of why architectural decisions were made, detailing the context and the consequences of the choice.'
      }
    ]
  },
  {
    id: 'ea-agile-integration',
    frameworkId: 'enterprise',
    title: 'Agile EA: SAFe Integration & Lean Architecture',
    subtitle: 'Balancing intentional architecture with emergent design',
    estimatedMinutes: 10,
    difficulty: 'practitioner',
    domain: 'ea-frameworks',
    overview: 'This topic addresses the tension between traditional EA and Agile methodologies, exploring how frameworks like SAFe integrate architecture into agile delivery.',
    sections: [
      {
        id: 'sec-1',
        title: 'Resolving the EA and Agile Tension',
        blocks: [
          {
            type: 'paragraph',
            content: 'A historical tension exists between Enterprise Architecture and Agile methodologies. Traditional EA often thinks long-term, utilizing upfront planning and comprehensive documentation. Agile teams, conversely, focus on short-term delivery, emergent design, and working software over documentation. Resolving this conflict requires a shift in the EA mindset from "command and control" to "enablement and guidance." Agile EA embraces principles like "just-enough architecture" and making decisions at the "last responsible moment." Instead of designing the perfect system upfront, Agile architects establish guardrails and define the foundational structures, allowing delivery teams the autonomy to evolve the detailed design iteratively as requirements become clearer.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: The Last Responsible Moment means delaying a decision until the cost of not making it is greater than the cost of making it with incomplete information.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Architecture in SAFe (Scaled Agile Framework)',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Scaled Agile Framework (SAFe) explicitly integrates architecture into agile delivery at scale. SAFe balances Intentional Architecture (planned, cross-team foundational structures) with Emergent Design (technical details discovered during iteration). It defines specific architectural roles at different levels: The Enterprise Architect works at the Portfolio level guiding strategic themes. The Solution Architect operates at the Large Solution level managing multi-ART systems. The System Architect works within the Agile Release Train (ART), providing technical guidance to the teams. This tiered approach ensures that architecture scales alongside the agile teams, maintaining alignment without stifling local team autonomy.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'The Architectural Runway',
        blocks: [
          {
            type: 'paragraph',
            content: 'A core concept in Agile Architecture is the Architectural Runway. This consists of the existing code, components, and technical infrastructure necessary to support the implementation of near-term features without excessive redesign and delay. Architects are responsible for continuously laying down this runway ahead of the feature teams. If the runway runs out, feature delivery slows down drastically as teams are forced to build infrastructure alongside business logic. By utilizing capacity allocation (e.g., dedicating 20% of a Program Increment to architectural enablers), organizations ensure the continuous, lean expansion of the architectural runway.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Building the Runway',
            content: 'A business roadmap dictates that next quarter, they will launch a new mobile app that requires real-time notifications. The architects schedule an "enabler" epic in the current quarter to build a Kafka-based event streaming platform. By the time the feature teams start working on the mobile app next quarter, the architectural runway (the event platform) is ready for them to use.'
          },
          {
            type: 'diagram',
            content: `
Feature Delivery Capacity
  |======|======|======| (Features consume runway)
  |--------------------|
  | Architectural      | (Enablers extend runway)
  | Runway             |
  +--------------------+
Time ->
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Intentional Architecture', definition: 'Purposeful, planned architectural initiatives that provide structure and direction.' },
      { term: 'Emergent Design', definition: 'The technical design that evolves organically as agile teams iterate and build features.' },
      { term: 'Architectural Runway', definition: 'The existing technical infrastructure and code needed to support near-term feature delivery.' },
      { term: 'Last Responsible Moment', definition: 'Delaying decisions to gather more information, but not so late that it causes project delays.' },
      { term: 'Enabler', definition: 'In SAFe, work items that support exploration, architecture, or infrastructure (building the runway).' }
    ],
    examTips: [
      'Understand how SAFe balances Intentional Architecture with Emergent Design.',
      'Know the distinct roles: Enterprise Architect (Portfolio), Solution Architect (Solution), System Architect (ART).'
    ],
    commonMistakes: [
      'Assuming Agile means "no architecture" or completely ignoring upfront design.',
      'Failing to allocate capacity for enabler work, leading to the exhaustion of the architectural runway.'
    ],
    externalResources: [
      { title: 'Scaled Agile Framework (SAFe)', type: 'official-doc', url: 'https://scaledagileframework.com/agile-architecture/', description: 'SAFe Agile Architecture concepts', isFree: true },
      { title: 'Lean Architecture', type: 'article', url: 'https://www.thoughtworks.com/insights/blog/architecture/lean-architecture', description: 'Thoughtworks insights on lean EA', isFree: true }
    ],
    relatedTopicIds: ['ea-frameworks-comparison'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'In the Scaled Agile Framework (SAFe), what is the purpose of the Architectural Runway?',
        options: [
          { id: 'a', text: 'To document all system requirements before coding begins', isCorrect: false },
          { id: 'b', text: 'To provide the technical infrastructure and code necessary to support near-term features', isCorrect: true },
          { id: 'c', text: 'To manage the annual IT budgeting process', isCorrect: false },
          { id: 'd', text: 'To define the organizational reporting structure of the IT department', isCorrect: false }
        ],
        explanation: 'The Architectural Runway consists of the existing components and infrastructure needed to allow feature teams to implement new business functionality without excessive refactoring.'
      },
      {
        id: 'q2',
        question: 'Which principle suggests delaying architectural decisions until necessary to avoid making choices with incomplete information?',
        options: [
          { id: 'a', text: 'The Last Responsible Moment', isCorrect: true },
          { id: 'b', text: 'Big Design Up Front (BDUF)', isCorrect: false },
          { id: 'c', text: 'Intentional Architecture', isCorrect: false },
          { id: 'd', text: 'The Strangler Fig Pattern', isCorrect: false }
        ],
        explanation: 'The Last Responsible Moment principle advises waiting to make a decision until the cost of not deciding exceeds the cost of deciding with limited data, ensuring flexibility in Agile.'
      }
    ]
  },
  {
    id: 'ea-maturity-models',
    frameworkId: 'enterprise',
    title: 'Architecture Maturity Models',
    subtitle: 'Assessing and improving your EA practice',
    estimatedMinutes: 10,
    difficulty: 'expert',
    domain: 'ea-governance',
    overview: 'This topic covers how to measure the effectiveness of an EA practice using maturity models from Gartner, TOGAF, and the US Government (ACMM).',
    sections: [
      {
        id: 'sec-1',
        title: 'The Value of Maturity Models',
        blocks: [
          {
            type: 'paragraph',
            content: 'Enterprise Architecture is a practice that takes years to fully embed within corporate culture. Maturity models provide a structured way to assess the current state of an EA capability, identify gaps, and plan a roadmap for improvement. Using a recognized model helps EA leaders justify budget requests by showing objective benchmarks rather than subjective opinions. It shifts the conversation from "we need more architects" to "we need to move from Level 2 to Level 3 maturity to enable faster cloud adoption." Regular assessments (e.g., annually) track progress and ensure the EA practice evolves alongside business needs.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: Reaching the highest maturity level is not always cost-effective; organizations should target the level that aligns with their specific business agility requirements.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Major Maturity Models: Gartner and ACMM',
        blocks: [
          {
            type: 'paragraph',
            content: 'Several prominent maturity models exist. The Gartner IT Architecture Maturity Model defines 5 stages: Unaware (no EA), Aware (initial IT-focused efforts), Proactive (standardized technology), Service-Oriented (business alignment), and Business Partner (EA drives business strategy). The US Department of Commerce developed the Architecture Capability Maturity Model (ACMM), which features 6 levels ranging from Level 0 (None) to Level 5 (Optimized). ACMM is highly detailed, assessing multiple dimensions such as architecture process, development, business linkage, senior management involvement, and operating unit participation. Both models emphasize that true maturity requires moving beyond IT to become a strategic business partner.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Key Maturity Indicators and Progression',
        blocks: [
          {
            type: 'paragraph',
            content: 'Moving up the maturity ladder typically takes a 2-3 year concerted effort. Progression is measured through Key Maturity Indicators. At lower levels, indicators include the establishment of an ARB, the documentation of IT standards, and the adoption of basic modeling tools. At intermediate levels, maturity is shown by formal governance processes, integration with project portfolio management (PPM), and active stakeholder engagement. At the highest levels, indicators include automated compliance checking, architecture-driven business transformation, and clear measurement of EA ROI. TOGAF also provides an Architecture Capability Assessment approach, guiding organizations on how to tailor the framework to their current maturity level.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Justifying EA Investment',
            content: 'A newly hired Chief Architect conducts an ACMM assessment and finds the organization is at Level 1 (Initial). She uses this baseline to secure funding for an EA repository tool and dedicated headcount, presenting a roadmap to reach Level 3 (Defined) within 18 months to support an upcoming merger.'
          },
          {
            type: 'diagram',
            content: `
Gartner Maturity Stages:
[1. Unaware] -> [2. Aware] -> [3. Proactive] -> [4. Service-Oriented] -> [5. Business Partner]
  (IT Chaos)      (IT Focus)    (Standardized)    (Business Aligned)       (Strategy Driven)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Maturity Model', definition: 'A framework used to measure the ability of an organization for continuous improvement in a particular discipline.' },
      { term: 'ACMM', definition: 'Architecture Capability Maturity Model, a comprehensive 6-level assessment framework originally developed by the US government.' },
      { term: 'Gartner EA Maturity Model', definition: 'A 5-stage model tracking the evolution of EA from IT-centric to business-strategic.' },
      { term: 'Baseline Assessment', definition: 'The initial measurement of maturity used as a starting point for improvement planning.' },
      { term: 'Key Maturity Indicator', definition: 'Specific, measurable evidence that an organization has achieved a certain level of maturity.' }
    ],
    examTips: [
      'Understand that the highest levels of EA maturity always involve tight integration with business strategy, not just technology.',
      'Know the standard 5 or 6 progression steps common to most maturity models (from non-existent to optimized/strategic).'
    ],
    commonMistakes: [
      'Assuming higher maturity equals more bureaucracy (mature EA is often lean and agile).',
      'Using maturity assessments to punish teams rather than as a tool for continuous improvement.'
    ],
    externalResources: [
      { title: 'TOGAF Architecture Maturity Models', type: 'official-doc', url: 'https://pubs.opengroup.org/architecture/togaf9-doc/arch/chap51.html', description: 'The Open Group guide to maturity', isFree: true },
      { title: 'GAO Enterprise Architecture Management Maturity Framework', type: 'official-doc', url: 'https://www.gao.gov/assets/gao-10-846g.pdf', description: 'US Government EA maturity guide', isFree: true }
    ],
    relatedTopicIds: ['ea-governance'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'According to most Enterprise Architecture maturity models (like Gartner\'s), what characterizes the highest level of maturity?',
        options: [
          { id: 'a', text: 'Strict enforcement of technology standards across all departments', isCorrect: false },
          { id: 'b', text: 'The use of complex, automated modeling tools', isCorrect: false },
          { id: 'c', text: 'EA acting as a strategic partner that actively drives business strategy', isCorrect: true },
          { id: 'd', text: 'Complete centralization of all IT purchasing decisions', isCorrect: false }
        ],
        explanation: 'At the highest maturity levels, EA transitions from an IT control function to a strategic business partner involved in shaping corporate strategy.'
      },
      {
        id: 'q2',
        question: 'What is a primary benefit of using a formal EA maturity model?',
        options: [
          { id: 'a', text: 'It automatically generates architecture diagrams from source code', isCorrect: false },
          { id: 'b', text: 'It provides objective benchmarks to identify gaps and justify improvement investments', isCorrect: true },
          { id: 'c', text: 'It guarantees that agile teams will deliver software faster', isCorrect: false },
          { id: 'd', text: 'It legally protects the company from data breaches', isCorrect: false }
        ],
        explanation: 'Maturity models provide a structured, objective way to assess the current state, plan improvements, and justify the budget needed for those improvements.'
      }
    ]
  }
];
