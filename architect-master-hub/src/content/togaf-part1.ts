import { TopicContent } from '../lib/content-types';

export const togafPart1Topics: TopicContent[] = [
  {
    id: 'togaf-preliminary',
    frameworkId: 'togaf',
    title: 'TOGAF Preliminary Phase',
    subtitle: 'Establishing the Architecture Capability',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Enterprise Architecture',
    overview: 'The Preliminary Phase is the preparation and initialization activities required to create an Architecture Capability. It defines the "how, what, and who" of the architecture practice.',
    sections: [
      {
        id: 'preliminary-intro',
        title: 'Introduction to Preliminary Phase',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Preliminary Phase is the initial phase in the TOGAF ADM. Unlike Phases A-H, it occurs before the main cycle begins and establishes the organizational context and capabilities required to execute the ADM effectively. The goal is to set up the architecture practice, tailor the TOGAF framework to the organization\'s specific needs, and define the Architecture Principles.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Preliminary Phase vs Phase A: The Preliminary Phase sets up the organizational capability and rules for architecture, whereas Phase A is where you actually initiate an architecture project for a specific business change.'
          }
        ]
      },
      {
        id: 'preliminary-steps',
        title: 'Key Steps and Objectives',
        blocks: [
          {
            type: 'bullets',
            title: 'Objectives',
            items: [
              'Determine the Architecture Capability desired by the organization.',
              'Establish the architecture governance capability.',
              'Select and tailor an Architecture Framework (like TOGAF).',
              'Define the Architecture Principles.'
            ]
          },
          {
            type: 'numbered',
            title: 'Key Steps',
            items: [
              'Determine the organizational context and capability.',
              'Identify key stakeholders and their concerns.',
              'Define and establish Architecture Principles.',
              'Select and tailor the framework(s) and tools.',
              'Establish the Architecture Governance Framework.'
            ]
          }
        ]
      },
      {
        id: 'preliminary-principles',
        title: 'Architecture Principles',
        blocks: [
          {
            type: 'paragraph',
            content: 'Architecture Principles define the underlying general rules and guidelines for the use and deployment of all IT resources and assets across the enterprise. A good principle should have four properties: Name, Statement, Rationale, and Implications.'
          },
          {
            type: 'table',
            table: {
              headers: ['Property', 'Description'],
              rows: [
                ['Understandability', 'The underlying intent can be quickly grasped and understood.'],
                ['Robustness', 'Enable good quality decisions about architectures and plans.'],
                ['Completeness', 'Every potentially important principle governing the management of information and technology for the organization is defined.'],
                ['Consistency', 'Strict adherence to one principle may require a loose interpretation of another. The set must not have contradictory principles.']
              ]
            }
          },
          {
            type: 'bullets',
            title: 'Example Principles',
            items: [
              'Technology Independence: Applications are independent of specific technology choices.',
              'Data is an Asset: Data is an asset that has value to the enterprise and is managed accordingly.',
              'Ease of Use: Applications are easy to use.'
            ]
          }
        ]
      },
      {
        id: 'preliminary-diagram',
        title: 'Preliminary Phase in Context',
        blocks: [
          {
            type: 'diagram',
            content: `
      [Preliminary Phase]
              |
              v
       (Requirements Management)
       /          |          \\
   Phase A      Phase H     Phase B
   Phase G                  Phase C
   Phase F                  Phase D
        \\        |          /
             Phase E
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Capability', definition: 'The ability of an organization to understand, develop, and use enterprise architecture.' },
      { term: 'Architecture Principle', definition: 'A qualitative statement of intent that should be met by the architecture.' }
    ],
    examTips: [
      'Remember that tailoring TOGAF happens in the Preliminary Phase.',
      'Know the four properties of a good Architecture Principle: Understandability, Robustness, Completeness, Consistency.'
    ],
    commonMistakes: [
      'Confusing the Preliminary Phase (setting up the capability) with Phase A (starting a specific project).'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard v10 - Preliminary Phase',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Official Open Group documentation for the Preliminary Phase.',
        isFree: true,
        publisher: 'The Open Group'
      },
      {
        title: 'TOGAF Architecture Principles',
        type: 'article',
        url: 'https://pubs.opengroup.org/togaf-standard/architecture-principles/',
        description: 'Detailed guide on developing architecture principles.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-a', 'togaf-governance'],
    embeddedQuestions: [
      {
        id: 'q-prelim-1',
        question: 'Which of the following is an objective of the Preliminary Phase?',
        options: [
          { id: 'a', text: 'To develop a Target Technology Architecture', isCorrect: false },
          { id: 'b', text: 'To establish the organizational capability for architecture', isCorrect: true },
          { id: 'c', text: 'To finalize the Architecture Roadmap', isCorrect: false },
          { id: 'd', text: 'To govern implementation projects', isCorrect: false }
        ],
        explanation: 'The Preliminary Phase is all about preparation and establishing the architecture capability before beginning the ADM cycle.'
      },
      {
        id: 'q-prelim-2',
        question: 'What are the recommended characteristics of a good Architecture Principle?',
        options: [
          { id: 'a', text: 'Name, Statement, Rationale, Implications', isCorrect: false },
          { id: 'b', text: 'Understandability, Robustness, Completeness, Consistency', isCorrect: true },
          { id: 'c', text: 'Strategic, Operational, Tactical, Technical', isCorrect: false },
          { id: 'd', text: 'Clear, Concise, Correct, Complete', isCorrect: false }
        ],
        explanation: 'TOGAF defines the criteria for a good set of principles as Understandability, Robustness, Completeness, and Consistency.'
      }
    ]
  },
  {
    id: 'togaf-phase-a',
    frameworkId: 'togaf',
    title: 'Phase A: Architecture Vision',
    subtitle: 'Setting the Scope and Securing Buy-in',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Enterprise Architecture',
    overview: 'Phase A initiates an iteration of the architecture process. It defines the scope, identifies stakeholders, creates the Architecture Vision, and obtains approvals.',
    sections: [
      {
        id: 'phase-a-intro',
        title: 'Purpose and Objectives',
        blocks: [
          {
            type: 'paragraph',
            content: 'Phase A is where an architecture project is officially launched. The objective is to develop a high-level aspirational vision of the capabilities and business value to be delivered as a result of the proposed enterprise architecture.'
          },
          {
            type: 'bullets',
            title: 'Key Objectives',
            items: [
              'Develop a high-level vision of the business value to be delivered.',
              'Obtain approval for a Statement of Architecture Work (SoAW).',
              'Identify key stakeholders and their concerns.',
              'Define the scope of the effort.'
            ]
          }
        ]
      },
      {
        id: 'phase-a-steps',
        title: 'Steps in Phase A',
        blocks: [
          {
            type: 'numbered',
            title: 'The Process',
            items: [
              'Establish the architecture project.',
              'Identify stakeholders, concerns, and business requirements.',
              'Confirm and elaborate business goals, business drivers, and constraints.',
              'Evaluate capabilities.',
              'Assess readiness for business transformation.',
              'Define scope.',
              'Confirm and elaborate Architecture Principles, including business principles.',
              'Develop Architecture Vision.',
              'Define the Target Architecture value propositions and KPIs.',
              'Identify the business transformation risks and mitigation activities.',
              'Develop Statement of Architecture Work; secure approval.'
            ]
          }
        ]
      },
      {
        id: 'phase-a-stakeholders',
        title: 'Stakeholder Management',
        blocks: [
          {
            type: 'paragraph',
            content: 'A critical part of Phase A is stakeholder management. You must identify who has an interest in the architecture, what their concerns are, and how you will communicate with them.'
          },
          {
            type: 'table',
            table: {
              headers: ['Stakeholder Group', 'Example Concerns'],
              rows: [
                ['Executive Management', 'Strategic alignment, ROI, competitive advantage.'],
                ['Business Owners', 'Process efficiency, time to market, costs.'],
                ['IT Operations', 'Maintainability, stability, support costs.']
              ]
            }
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Use a Power/Interest grid to map stakeholders and determine the appropriate level of engagement for each.'
          }
        ]
      },
      {
        id: 'phase-a-vision-vs-add',
        title: 'Architecture Vision vs. Architecture Definition Document',
        blocks: [
          {
            type: 'paragraph',
            content: 'It is important to distinguish the Architecture Vision from the Architecture Definition Document (ADD).'
          },
          {
            type: 'bullets',
            items: [
              '**Architecture Vision**: A high-level summary produced in Phase A to get sponsor buy-in. It sets the direction.',
              '**Architecture Definition Document**: The detailed specification of the architecture, built iteratively across Phases B, C, and D.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Vision', definition: 'A succinct description of the Target Architecture that describes its business value and the changes to the enterprise.' },
      { term: 'Statement of Architecture Work', definition: 'A document that defines the scope and approach of the architecture project, acting as a contract.' }
    ],
    examTips: [
      'The Statement of Architecture Work is approved at the end of Phase A.',
      'Business Scenarios are often used in Phase A to discover and document business requirements.'
    ],
    commonMistakes: [
      'Thinking detailed technical design happens here. Phase A is high-level vision only.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase A',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Official Open Group documentation for Phase A.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-preliminary', 'togaf-phase-b'],
    embeddedQuestions: [
      {
        id: 'q-phasea-1',
        question: 'Which document is a key output of Phase A and acts as an agreement between the sponsoring organization and the architecture function?',
        options: [
          { id: 'a', text: 'Architecture Definition Document', isCorrect: false },
          { id: 'b', text: 'Statement of Architecture Work', isCorrect: true },
          { id: 'c', text: 'Architecture Roadmap', isCorrect: false },
          { id: 'd', text: 'Implementation and Migration Plan', isCorrect: false }
        ],
        explanation: 'The Statement of Architecture Work defines the scope and approach of the project and is approved at the end of Phase A.'
      },
      {
        id: 'q-phasea-2',
        question: 'What is the primary purpose of Phase A?',
        options: [
          { id: 'a', text: 'To design the Application Architecture', isCorrect: false },
          { id: 'b', text: 'To establish the architecture capability', isCorrect: false },
          { id: 'c', text: 'To develop a high-level vision and secure approvals', isCorrect: true },
          { id: 'd', text: 'To plan the migration to the target architecture', isCorrect: false }
        ],
        explanation: 'Phase A focuses on defining scope, creating a high-level Architecture Vision, and obtaining approval to proceed.'
      },
      {
        id: 'q-phasea-3',
        question: 'Which technique is often used in Phase A to discover business requirements?',
        options: [
          { id: 'a', text: 'Business Scenarios', isCorrect: true },
          { id: 'b', text: 'Data Lineage Analysis', isCorrect: false },
          { id: 'c', text: 'Network Computing Diagrams', isCorrect: false },
          { id: 'd', text: 'Code Reviews', isCorrect: false }
        ],
        explanation: 'Business Scenarios are a technique used to help identify and understand business requirements.'
      }
    ]
  },
  {
    id: 'togaf-phase-b',
    frameworkId: 'togaf',
    title: 'Phase B: Business Architecture',
    subtitle: 'Aligning IT with Business Strategy',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Business Architecture',
    overview: 'Phase B involves developing a Target Business Architecture that describes how the enterprise needs to operate to achieve the business goals, and responding to the strategic drivers set out in the Architecture Vision.',
    sections: [
      {
        id: 'phase-b-intro',
        title: 'Developing Business Architecture',
        blocks: [
          {
            type: 'paragraph',
            content: 'Phase B is the first detailed architecture phase. It describes the fundamental organization of a business, embodied in its business processes and people, their relationships to each other and the environment, and the principles governing its design and evolution.'
          },
          {
            type: 'bullets',
            title: 'Objectives',
            items: [
              'Develop the Target Business Architecture that describes how the enterprise needs to operate to achieve the business goals.',
              'Identify candidate Architecture Roadmap components based upon gaps between the Baseline and Target Business Architectures.'
            ]
          }
        ]
      },
      {
        id: 'phase-b-concepts',
        title: 'Key Concepts and Models',
        blocks: [
          {
            type: 'paragraph',
            content: 'Business Architecture is modeled using several key concepts:'
          },
          {
            type: 'bullets',
            items: [
              '**Business Capabilities**: What the business does (e.g., "Customer Management").',
              '**Value Streams**: The sequence of activities that create a positive result for a customer, stakeholder, or end-user.',
              '**Organization**: The structure of the enterprise.',
              '**Information Mapping**: The vocabulary and data concepts vital to the business.'
            ]
          },
          {
            type: 'callout',
            calloutType: 'info',
            content: 'TOGAF v10 heavily emphasizes Business Capabilities and Value Streams as the core of Business Architecture.'
          }
        ]
      },
      {
        id: 'phase-b-artifacts',
        title: 'Catalogs, Matrices, and Diagrams',
        blocks: [
          {
            type: 'paragraph',
            content: 'Phase B produces specific artifacts to describe the architecture from different viewpoints.'
          },
          {
            type: 'table',
            table: {
              headers: ['Type', 'Examples'],
              rows: [
                ['Catalogs (Lists)', 'Organization/Actor catalog, Role catalog, Business Service/Function catalog'],
                ['Matrices (Relationships)', 'Business Interaction matrix, Actor/Role matrix'],
                ['Diagrams (Visuals)', 'Business Footprint diagram, Business Service/Information diagram, Functional Decomposition diagram']
              ]
            }
          }
        ]
      },
      {
        id: 'phase-b-gap',
        title: 'Gap Analysis',
        blocks: [
          {
            type: 'paragraph',
            content: 'A critical step in Phase B (and C and D) is Gap Analysis. This involves comparing the Baseline Architecture with the Target Architecture to identify things that have been intentionally omitted, accidentally left out, or need to be created.'
          },
          {
            type: 'diagram',
            content: `
+------------------+     +------------------+
|                  |     |                  |
|  Baseline Arch   | --> |   Target Arch    |
|                  |     |                  |
+------------------+     +------------------+
         |                        |
         +------ GAP ANALYSIS ----+
                 (Missing/New)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Business Capability', definition: 'A particular ability or capacity that a business may possess or exchange to achieve a specific purpose or outcome.' },
      { term: 'Value Stream', definition: 'A representation of an end-to-end collection of value-adding activities.' }
    ],
    examTips: [
      'Knowledge of Business Architecture is a prerequisite for architecture work in any other domain (Data, Application, Technology).',
      'The output of Phase B is the Draft Architecture Definition Document, focused on the business domain.'
    ],
    commonMistakes: [
      'Skipping Business Architecture to jump straight into IT architecture. IT exists to serve the business.'
    ],
    externalResources: [
      {
        title: 'TOGAF Series Guide: Business Capabilities',
        type: 'article',
        url: 'https://publications.opengroup.org/g189',
        description: 'Deep dive into Business Capability modeling.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-a', 'togaf-phase-c-apps'],
    embeddedQuestions: [
      {
        id: 'q-phaseb-1',
        question: 'Which of the following describes a Business Capability?',
        options: [
          { id: 'a', text: 'The specific software application used by a department.', isCorrect: false },
          { id: 'b', text: 'A sequence of activities that creates a positive result for a customer.', isCorrect: false },
          { id: 'c', text: 'A particular ability or capacity that a business may possess to achieve a purpose.', isCorrect: true },
          { id: 'd', text: 'The organizational chart of a company.', isCorrect: false }
        ],
        explanation: 'A Business Capability describes *what* the business does, as an ability or capacity, independent of *how* it is done.'
      },
      {
        id: 'q-phaseb-2',
        question: 'What is the purpose of Gap Analysis in Phase B?',
        options: [
          { id: 'a', text: 'To compare the IT budget against actual spending.', isCorrect: false },
          { id: 'b', text: 'To identify components that are in the Target Architecture but not the Baseline, or vice versa.', isCorrect: true },
          { id: 'c', text: 'To measure the performance of business processes.', isCorrect: false },
          { id: 'd', text: 'To evaluate employee skills against job requirements.', isCorrect: false }
        ],
        explanation: 'Gap Analysis identifies the differences (gaps) between the current baseline state and the desired target state.'
      }
    ]
  },
  {
    id: 'togaf-phase-c-apps',
    frameworkId: 'togaf',
    title: 'Phase C: Application Architecture',
    subtitle: 'Structuring the Application Portfolio',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Application Architecture',
    overview: 'Phase C is the Information Systems Architectures phase, split into Data and Application. Application Architecture defines the application portfolio and their interactions required to process data and support the business.',
    sections: [
      {
        id: 'phase-c-apps-intro',
        title: 'Purpose of Application Architecture',
        blocks: [
          {
            type: 'paragraph',
            content: 'The objective of Application Architecture is to define the major kinds of application systems necessary to process the data and support the business.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Application Architecture is NOT concerned with application design (e.g., internal class structures). It focuses on the applications as components within the enterprise portfolio and how they interact.'
          }
        ]
      },
      {
        id: 'phase-c-apps-artifacts',
        title: 'Key Artifacts',
        blocks: [
          {
            type: 'bullets',
            title: 'Catalogs, Matrices, and Diagrams',
            items: [
              '**Application Portfolio Catalog**: A list of all applications in the enterprise.',
              '**Application/Function Matrix**: Maps applications to the business functions they support.',
              '**Application Communication Diagram**: Shows how applications communicate and share data.',
              '**Application Use-Case Diagram**: Shows how users (actors) interact with the applications.'
            ]
          }
        ]
      },
      {
        id: 'phase-c-apps-rationalization',
        title: 'Application Portfolio Rationalization',
        blocks: [
          {
            type: 'paragraph',
            content: 'A common activity in Phase C is deciding the fate of existing applications using the TIME model:'
          },
          {
            type: 'bullets',
            items: [
              '**Tolerate**: High technical condition, low business value.',
              '**Invest**: High technical condition, high business value.',
              '**Migrate**: Low technical condition, high business value.',
              '**Eliminate**: Low technical condition, low business value.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Logical Application Component', definition: 'An encapsulation of application functionality independent of a particular implementation.' },
      { term: 'Physical Application Component', definition: 'A specific, deployable application component (e.g., SAP ERP version 6).' }
    ],
    examTips: [
      'Phase C is officially called "Information Systems Architectures" and includes both Data and Application domains.',
      'Applications should be designed to support the Business Architecture (Phase B).'
    ],
    commonMistakes: [
      'Focusing on internal software design patterns (like MVC) instead of enterprise-level application interactions.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase C (Application)',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase C documentation in the standard.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-b', 'togaf-phase-c-data', 'togaf-phase-d'],
    embeddedQuestions: [
      {
        id: 'q-phasec-app-1',
        question: 'What is the primary focus of Application Architecture in TOGAF?',
        options: [
          { id: 'a', text: 'Internal software design and coding standards.', isCorrect: false },
          { id: 'b', text: 'Defining the application portfolio and their enterprise-level interactions.', isCorrect: true },
          { id: 'c', text: 'Selecting the physical servers and networks for deployment.', isCorrect: false },
          { id: 'd', text: 'Defining database schemas and table structures.', isCorrect: false }
        ],
        explanation: 'Application Architecture focuses on the applications as enterprise components, their portfolio, and integration, rather than internal design.'
      },
      {
        id: 'q-phasec-app-2',
        question: 'Which matrix helps ensure that all business functions are supported by appropriate applications?',
        options: [
          { id: 'a', text: 'System/Technology Matrix', isCorrect: false },
          { id: 'b', text: 'Data Entity/Business Function Matrix', isCorrect: false },
          { id: 'c', text: 'Application/Function Matrix', isCorrect: true },
          { id: 'd', text: 'Actor/Role Matrix', isCorrect: false }
        ],
        explanation: 'The Application/Function Matrix maps applications to the business functions defined in Phase B.'
      }
    ]
  },
  {
    id: 'togaf-phase-c-data',
    frameworkId: 'togaf',
    title: 'Phase C: Data Architecture',
    subtitle: 'Managing Enterprise Data Assets',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Data Architecture',
    overview: 'The Data Architecture part of Phase C defines the structure of an organization\'s logical and physical data assets and data management resources.',
    sections: [
      {
        id: 'phase-c-data-intro',
        title: 'Purpose of Data Architecture',
        blocks: [
          {
            type: 'paragraph',
            content: 'Data is a critical enterprise asset. Data Architecture defines how data is managed, stored, integrated, and shared across the organization. It is not just about databases; it encompasses data governance, master data management, and data lineage.'
          }
        ]
      },
      {
        id: 'phase-c-data-concepts',
        title: 'Key Concepts',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Data Entity**: A fundamental thing of relevance to the business about which data may be kept.',
              '**Logical Data Model**: Describes the data in detail, independent of any specific database management system.',
              '**Data Governance**: The exercise of authority and control over the management of data assets.',
              '**Master Data Management (MDM)**: Processes ensuring that shared data (like Customer, Product) is accurate and consistent.'
            ]
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Data Architecture (Phase C) often runs parallel with Application Architecture. Data supports applications, and applications process data.'
          }
        ]
      },
      {
        id: 'phase-c-data-artifacts',
        title: 'Key Artifacts',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Data Entity/Data Component Catalog**: List of all data entities.',
              '**Data Entity/Business Function Matrix**: Shows which business functions create, read, update, or delete (CRUD) data entities.',
              '**Conceptual/Logical Data Diagrams**: Entity-Relationship models.',
              '**Data Dissemination Diagram**: Shows where data is distributed and stored.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Data Lineage', definition: 'The lifecycle of data, tracking its origins and where it moves over time.' },
      { term: 'CRUD Matrix', definition: 'A matrix showing Create, Read, Update, and Delete operations on data entities by business functions.' }
    ],
    examTips: [
      'Data Architecture precedes or parallels Application Architecture because data is stable, while applications change.',
      'Security and Data Privacy (like GDPR) are major considerations in Data Architecture.'
    ],
    commonMistakes: [
      'Confusing Data Architecture with Database Design. Data Architecture is higher-level and enterprise-wide.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase C (Data)',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase C documentation in the standard.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-b', 'togaf-phase-c-apps'],
    embeddedQuestions: [
      {
        id: 'q-phasec-data-1',
        question: 'Which artifact tracks whether a business process Creates, Reads, Updates, or Deletes a data entity?',
        options: [
          { id: 'a', text: 'Data Dissemination Diagram', isCorrect: false },
          { id: 'b', text: 'Data Entity/Business Function Matrix', isCorrect: true },
          { id: 'c', text: 'Application/Data Matrix', isCorrect: false },
          { id: 'd', text: 'Logical Data Diagram', isCorrect: false }
        ],
        explanation: 'The Data Entity/Business Function Matrix is often used as a CRUD matrix to map data operations to business functions.'
      },
      {
        id: 'q-phasec-data-2',
        question: 'What is the primary focus of Data Architecture?',
        options: [
          { id: 'a', text: 'Designing the physical database schema and indexes.', isCorrect: false },
          { id: 'b', text: 'Defining the structure and management of enterprise logical and physical data assets.', isCorrect: true },
          { id: 'c', text: 'Selecting the database vendor software.', isCorrect: false },
          { id: 'd', text: 'Writing stored procedures.', isCorrect: false }
        ],
        explanation: 'Data Architecture deals with the structure, management, and governance of enterprise data assets, not just physical database design.'
      }
    ]
  },
  {
    id: 'togaf-phase-d',
    frameworkId: 'togaf',
    title: 'Phase D: Technology Architecture',
    subtitle: 'Providing the Infrastructure Foundation',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Technology Architecture',
    overview: 'Phase D defines the logical software and hardware capabilities that are required to support the deployment of business, data, and application services.',
    sections: [
      {
        id: 'phase-d-intro',
        title: 'Purpose of Technology Architecture',
        blocks: [
          {
            type: 'paragraph',
            content: 'Technology Architecture maps the application and data components to the technology platforms that will execute and store them. This includes infrastructure, networks, cloud services, and standard technology platforms.'
          }
        ]
      },
      {
        id: 'phase-d-cloud',
        title: 'Technology Architecture in the Cloud Era',
        blocks: [
          {
            type: 'paragraph',
            content: 'Modern Technology Architecture heavily involves cloud computing models:'
          },
          {
            type: 'bullets',
            items: [
              '**IaaS (Infrastructure as a Service)**: Virtual machines, networking, storage.',
              '**PaaS (Platform as a Service)**: Managed databases, runtime environments.',
              '**SaaS (Software as a Service)**: Fully managed applications.'
            ]
          },
          {
            type: 'callout',
            calloutType: 'info',
            content: 'When using SaaS, the boundary between Application Architecture and Technology Architecture blurs, as the vendor manages the technology stack.'
          }
        ]
      },
      {
        id: 'phase-d-artifacts',
        title: 'Key Artifacts',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Technology Standards Catalog**: The approved list of technologies to be used in the enterprise.',
              '**Technology Portfolio Catalog**: The list of technologies currently deployed.',
              '**System/Technology Matrix**: Maps applications to their underlying technology platforms.',
              '**Environments and Locations Diagram**: Shows where physical technology assets are located.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Technology Component', definition: 'A technology building block (e.g., a specific operating system, database software, or hardware server).' },
      { term: 'TRM (Technical Reference Model)', definition: 'A foundation architecture that provides a generic taxonomy of platform services.' }
    ],
    examTips: [
      'Phase D is the final phase of defining the Target Architecture before moving into implementation planning.',
      'Gap analysis in Phase D focuses on identifying needed technology upgrades, retirements, or new platform acquisitions.'
    ],
    commonMistakes: [
      'Getting bogged down in configuring specific servers instead of defining enterprise technology standards.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase D',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase D documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-c-apps', 'togaf-phase-e'],
    embeddedQuestions: [
      {
        id: 'q-phased-1',
        question: 'Which artifact documents the approved list of technologies for use in the enterprise?',
        options: [
          { id: 'a', text: 'Technology Portfolio Catalog', isCorrect: false },
          { id: 'b', text: 'Technology Standards Catalog', isCorrect: true },
          { id: 'c', text: 'Environments and Locations Diagram', isCorrect: false },
          { id: 'd', text: 'System/Technology Matrix', isCorrect: false }
        ],
        explanation: 'The Technology Standards Catalog lists the approved technologies (often derived from a Technical Reference Model).'
      },
      {
        id: 'q-phased-2',
        question: 'What is the objective of Phase D?',
        options: [
          { id: 'a', text: 'To map applications to the hardware and software platforms required to support them.', isCorrect: true },
          { id: 'b', text: 'To write the code for the target applications.', isCorrect: false },
          { id: 'c', text: 'To define the business processes.', isCorrect: false },
          { id: 'd', text: 'To govern the implementation projects.', isCorrect: false }
        ],
        explanation: 'Phase D defines the logical and physical software and hardware capabilities (technology architecture) needed.'
      }
    ]
  },
  {
    id: 'togaf-phase-e',
    frameworkId: 'togaf',
    title: 'Phase E: Opportunities & Solutions',
    subtitle: 'From Architecture to Implementation Planning',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Migration Planning',
    overview: 'Phase E involves identifying the parameters of change, the major phases along the way (Transition Architectures), and the top-level projects (Work Packages) to be undertaken.',
    sections: [
      {
        id: 'phase-e-intro',
        title: 'Consolidating Gaps and Finding Solutions',
        blocks: [
          {
            type: 'paragraph',
            content: 'Phases B, C, and D identified gaps between the baseline and target architectures. Phase E consolidates these gaps and determines how to close them using Work Packages.'
          }
        ]
      },
      {
        id: 'phase-e-concepts',
        title: 'Key Concepts',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Work Package**: A set of actions identified to achieve one or more objectives for the business (essentially, a project or initiative).',
              '**Transition Architecture**: An intermediate architecture showing the enterprise at a specific point in time during the migration process. Used when the migration is complex and takes a long time.'
            ]
          },
          {
            type: 'diagram',
            content: `
Baseline Arch --> [Transition Arch 1] --> [Transition Arch 2] --> Target Arch
                     (Work Pkg A)            (Work Pkg B)         (Work Pkg C)
            `
          }
        ]
      },
      {
        id: 'phase-e-steps',
        title: 'Key Steps and Deliverables',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Consolidate gap analysis results.',
              'Review and consolidate requirements across all domains.',
              'Identify Work Packages.',
              'Create the initial Architecture Roadmap.',
              'Determine if Transition Architectures are required.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Roadmap', definition: 'A list of individual work packages that will realize the Target Architecture, laid out on a timeline.' },
      { term: 'Transition Architecture', definition: 'A formally described intermediate state of the architecture.' }
    ],
    examTips: [
      'Phase E generates the initial Architecture Roadmap; Phase F finalizes it.',
      'Transition Architectures are defined in Phase E to handle complex migrations.'
    ],
    commonMistakes: [
      'Confusing Phase E (identifying work packages) with Phase F (detailed migration planning and cost/benefit analysis).'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase E',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase E documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-d', 'togaf-phase-f'],
    embeddedQuestions: [
      {
        id: 'q-phasee-1',
        question: 'What is a Transition Architecture?',
        options: [
          { id: 'a', text: 'The final desired state of the enterprise.', isCorrect: false },
          { id: 'b', text: 'An intermediate state of the architecture during a complex migration.', isCorrect: true },
          { id: 'c', text: 'The baseline architecture before any changes.', isCorrect: false },
          { id: 'd', text: 'The technology infrastructure layer.', isCorrect: false }
        ],
        explanation: 'Transition Architectures are used as stepping stones to safely move the enterprise from Baseline to Target over a long period.'
      },
      {
        id: 'q-phasee-2',
        question: 'Which of the following is a primary objective of Phase E?',
        options: [
          { id: 'a', text: 'To perform detailed code reviews.', isCorrect: false },
          { id: 'b', text: 'To consolidate gap analyses and identify Work Packages.', isCorrect: true },
          { id: 'c', text: 'To define the Business Architecture.', isCorrect: false },
          { id: 'd', text: 'To manage changes to the completed architecture.', isCorrect: false }
        ],
        explanation: 'Phase E consolidates the gaps from Phases B/C/D and defines the Work Packages (projects) needed to close them.'
      }
    ]
  }
];
