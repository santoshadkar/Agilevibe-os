import { TopicContent } from '../lib/content-types';

export const togafPart2Topics: TopicContent[] = [
  {
    id: 'togaf-phase-f',
    frameworkId: 'togaf',
    title: 'Phase F: Migration Planning',
    subtitle: 'Finalizing the Implementation Plan',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Migration Planning',
    overview: 'Phase F finalizes the Architecture Roadmap and the supporting Implementation and Migration Plan in co-operation with project and portfolio managers.',
    sections: [
      {
        id: 'phase-f-intro',
        title: 'Finalizing the Plan',
        blocks: [
          {
            type: 'paragraph',
            content: 'While Phase E identified the Work Packages, Phase F prioritizes them, assesses costs and benefits, and finalizes the timeline. This is done in close collaboration with project management frameworks (like PRINCE2 or PMI).'
          }
        ]
      },
      {
        id: 'phase-f-activities',
        title: 'Key Activities',
        blocks: [
          {
            type: 'bullets',
            items: [
              'Assess business value and risk for each Work Package.',
              'Perform cost/benefit analysis.',
              'Prioritize projects based on dependencies and value.',
              'Finalize the Architecture Roadmap.',
              'Generate the Implementation and Migration Plan.'
            ]
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Phase F ensures that the architecture plan aligns with the enterprise\'s capacity to execute change and its investment portfolio.'
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Implementation and Migration Plan', definition: 'A schedule of the projects that will realize the Target Architecture.' }
    ],
    examTips: [
      'Phase F is closely aligned with Portfolio and Project Management.',
      'Cost/benefit analysis and risk assessment are key activities here.'
    ],
    commonMistakes: [
      'Assuming Enterprise Architects manage the IT projects directly. They collaborate with Project Managers in Phase F.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase F',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase F documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-e', 'togaf-phase-g'],
    embeddedQuestions: [
      {
        id: 'q-phasef-1',
        question: 'Which of the following is a primary deliverable finalized in Phase F?',
        options: [
          { id: 'a', text: 'Architecture Vision', isCorrect: false },
          { id: 'b', text: 'Implementation and Migration Plan', isCorrect: true },
          { id: 'c', text: 'Statement of Architecture Work', isCorrect: false },
          { id: 'd', text: 'Business Capability Map', isCorrect: false }
        ],
        explanation: 'Phase F finalizes the Implementation and Migration Plan based on the prioritized Work Packages.'
      },
      {
        id: 'q-phasef-2',
        question: 'Who should the Enterprise Architect collaborate with heavily during Phase F?',
        options: [
          { id: 'a', text: 'Software Developers', isCorrect: false },
          { id: 'b', text: 'Project and Portfolio Managers', isCorrect: true },
          { id: 'c', text: 'Database Administrators', isCorrect: false },
          { id: 'd', text: 'End Users', isCorrect: false }
        ],
        explanation: 'Phase F involves project planning, budgeting, and scheduling, which requires collaboration with Portfolio/Project Management.'
      }
    ]
  },
  {
    id: 'togaf-phase-g',
    frameworkId: 'togaf',
    title: 'Phase G: Implementation Governance',
    subtitle: 'Ensuring Architectural Compliance',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Architecture Governance',
    overview: 'Phase G provides architectural oversight for the implementation. It ensures that the implementation projects conform to the defined Target Architecture.',
    sections: [
      {
        id: 'phase-g-intro',
        title: 'Governing the Implementation',
        blocks: [
          {
            type: 'paragraph',
            content: 'During Phase G, the architecture team does not build the systems. Instead, they govern the development teams to ensure the systems built align with the architectures designed in Phases B, C, and D.'
          }
        ]
      },
      {
        id: 'phase-g-compliance',
        title: 'Architecture Compliance',
        blocks: [
          {
            type: 'paragraph',
            content: 'A key activity is conducting Architecture Compliance Reviews. If a project cannot meet the architecture requirements, they must apply for a Dispensation.'
          },
          {
            type: 'bullets',
            items: [
              '**Architecture Contract**: An agreement between the architecture function and the development partners.',
              '**Compliance Review**: A structured assessment of project designs against the architecture.',
              '**Dispensation**: A formally approved exception to an architecture rule.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Contract', definition: 'A joint agreement between sponsors and implementers on the deliverables.' },
      { term: 'Dispensation', definition: 'An approved exemption from a specific architecture principle or standard.' }
    ],
    examTips: [
      'Phase G is about *governance*, not implementation itself.',
      'Architecture Contracts are drafted and signed in this phase.'
    ],
    commonMistakes: [
      'Thinking Phase G is where the Enterprise Architects write the code.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase G',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase G documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-f', 'togaf-governance'],
    embeddedQuestions: [
      {
        id: 'q-phaseg-1',
        question: 'What is the purpose of an Architecture Compliance Review?',
        options: [
          { id: 'a', text: 'To test the software for bugs.', isCorrect: false },
          { id: 'b', text: 'To ensure implementation projects conform to the defined architecture.', isCorrect: true },
          { id: 'c', text: 'To audit the IT budget.', isCorrect: false },
          { id: 'd', text: 'To evaluate team performance.', isCorrect: false }
        ],
        explanation: 'Compliance reviews verify that the development teams are following the standards and designs defined in the architecture.'
      },
      {
        id: 'q-phaseg-2',
        question: 'If an implementation project has a valid business reason for not following an architecture standard, what should they request?',
        options: [
          { id: 'a', text: 'A Dispensation', isCorrect: true },
          { id: 'b', text: 'An Architecture Vision', isCorrect: false },
          { id: 'c', text: 'A Transition Architecture', isCorrect: false },
          { id: 'd', text: 'A Statement of Architecture Work', isCorrect: false }
        ],
        explanation: 'A dispensation is a formal process for granting a temporary or permanent exception to an architecture rule.'
      }
    ]
  },
  {
    id: 'togaf-phase-h',
    frameworkId: 'togaf',
    title: 'Phase H: Architecture Change Management',
    subtitle: 'Managing the Evolution of the Architecture',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Architecture Governance',
    overview: 'Phase H establishes procedures for managing change to the new architecture. It monitors for technology and business changes and triggers new ADM cycles when necessary.',
    sections: [
      {
        id: 'phase-h-intro',
        title: 'Managing Continuous Change',
        blocks: [
          {
            type: 'paragraph',
            content: 'Once an architecture is implemented, the environment continues to evolve. Phase H manages changes to the deployed baseline. It ensures the architecture lifecycle is maintained.'
          }
        ]
      },
      {
        id: 'phase-h-types',
        title: 'Types of Change',
        blocks: [
          {
            type: 'bullets',
            items: [
              '**Simplification Change**: Reducing complexity, often handled via change management processes.',
              '**Incremental Change**: Adding minor capabilities, might require revisiting specific phases.',
              '**Re-architecting Change**: Major changes driven by new business strategies, requiring a new ADM cycle (back to Phase A).'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Change Request', definition: 'A request to modify the deployed architecture.' }
    ],
    examTips: [
      'Phase H monitors for business drivers (new strategies) and technology drivers (new innovations).',
      'If a change is significant (re-architecting), it triggers a new cycle of the ADM starting at Phase A.'
    ],
    commonMistakes: [
      'Assuming the architecture is static once implemented.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Phase H',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Phase H documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-g'],
    embeddedQuestions: [
      {
        id: 'q-phaseh-1',
        question: 'Which phase is responsible for determining if a new ADM cycle needs to be initiated?',
        options: [
          { id: 'a', text: 'Phase A', isCorrect: false },
          { id: 'b', text: 'Phase E', isCorrect: false },
          { id: 'c', text: 'Phase H', isCorrect: true },
          { id: 'd', text: 'Requirements Management', isCorrect: false }
        ],
        explanation: 'Phase H monitors for major business or technology changes that warrant re-architecting, triggering a new ADM cycle.'
      },
      {
        id: 'q-phaseh-2',
        question: 'What are the typical categories of architecture change in TOGAF?',
        options: [
          { id: 'a', text: 'Strategic, Tactical, Operational', isCorrect: false },
          { id: 'b', text: 'Simplification, Incremental, Re-architecting', isCorrect: true },
          { id: 'c', text: 'Hardware, Software, Network', isCorrect: false },
          { id: 'd', text: 'Business, Data, Application, Technology', isCorrect: false }
        ],
        explanation: 'TOGAF categorizes change based on impact: simplification, incremental, and re-architecting.'
      }
    ]
  },
  {
    id: 'togaf-requirements-mgmt',
    frameworkId: 'togaf',
    title: 'Requirements Management',
    subtitle: 'The Core of the ADM',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Enterprise Architecture',
    overview: 'Requirements Management is the continuous phase at the center of the ADM. It ensures that every phase is driven by business requirements.',
    sections: [
      {
        id: 'req-intro',
        title: 'Continuous Process',
        blocks: [
          {
            type: 'paragraph',
            content: 'Unlike Phases A-H, Requirements Management is not sequential. It operates continuously. Requirements are identified, stored, and fed into and out of all other ADM phases.'
          },
          {
            type: 'diagram',
            content: `
      Phase A <-->
      Phase B <--> ( Requirements Management ) <--> Phase H
      Phase C <-->
      ...
            `
          }
        ]
      },
      {
        id: 'req-process',
        title: 'Requirements Management Process',
        blocks: [
          {
            type: 'numbered',
            items: [
              'Identify/document requirements.',
              'Baseline requirements.',
              'Monitor baseline requirements.',
              'Identify changed requirements and assess impact.',
              'Implement requirements across phases.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Requirements Impact Assessment', definition: 'An evaluation of how a new or changed requirement impacts the current architecture.' }
    ],
    examTips: [
      'It is central to the ADM wheel because it interacts with EVERY phase.',
      'TOGAF does not dictate a specific requirements method; it provides a process for managing them.'
    ],
    commonMistakes: [
      'Treating Requirements Management as a phase that only happens once.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Requirements Management',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Requirements Management documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-a'],
    embeddedQuestions: [
      {
        id: 'q-req-1',
        question: 'Which ADM phase is responsible for managing the flow of requirements across the architecture project?',
        options: [
          { id: 'a', text: 'Phase A', isCorrect: false },
          { id: 'b', text: 'Phase B', isCorrect: false },
          { id: 'c', text: 'Requirements Management', isCorrect: true },
          { id: 'd', text: 'Phase H', isCorrect: false }
        ],
        explanation: 'Requirements Management sits at the center of the ADM and interacts continuously with all phases.'
      },
      {
        id: 'q-req-2',
        question: 'When is the Requirements Management phase executed?',
        options: [
          { id: 'a', text: 'Only before Phase A.', isCorrect: false },
          { id: 'b', text: 'Only during Phase B.', isCorrect: false },
          { id: 'c', text: 'After Phase H.', isCorrect: false },
          { id: 'd', text: 'Continuously throughout the ADM cycle.', isCorrect: true }
        ],
        explanation: 'It is a continuous process that supports all phases of the ADM.'
      }
    ]
  },
  {
    id: 'togaf-content-framework',
    frameworkId: 'togaf',
    title: 'Architecture Content Framework',
    subtitle: 'Deliverables, Artifacts, and Building Blocks',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Enterprise Architecture',
    overview: 'The Content Framework defines the structure and types of architectural information. It categorizes outputs as Deliverables, Artifacts, or Building Blocks.',
    sections: [
      {
        id: 'content-intro',
        title: 'The Three-Way Distinction',
        blocks: [
          {
            type: 'paragraph',
            content: 'TOGAF categorizes architectural outputs into three distinct concepts:'
          },
          {
            type: 'bullets',
            items: [
              '**Deliverables**: Formal documents that are reviewed, agreed upon, and signed off by stakeholders (e.g., Architecture Definition Document, Statement of Architecture Work).',
              '**Artifacts**: A view of an aspect of the architecture. Categorized as Catalogs (lists), Matrices (relationships), or Diagrams (visuals).',
              '**Building Blocks**: Reusable components of business, IT, or architectural capability. Can be Architecture Building Blocks (ABBs - logical) or Solution Building Blocks (SBBs - physical).'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Definition Document', definition: 'The deliverable container for the core architectural artifacts created during a project.' },
      { term: 'ABB', definition: 'Architecture Building Block. Describes required capability; what is needed.' },
      { term: 'SBB', definition: 'Solution Building Block. Represents components used to implement the capability; how it is done.' }
    ],
    examTips: [
      'Deliverables contain Artifacts and Building Blocks.',
      'ABBs are defined early (Phases A-D), while SBBs are defined later (Phases E-G).'
    ],
    commonMistakes: [
      'Confusing an Artifact (a diagram/list) with a Deliverable (a formal signed-off document).'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Content Framework',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Content Framework documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-enterprise-continuum'],
    embeddedQuestions: [
      {
        id: 'q-content-1',
        question: 'Which of the following is defined as a formal document that is reviewed and signed off by stakeholders?',
        options: [
          { id: 'a', text: 'Artifact', isCorrect: false },
          { id: 'b', text: 'Deliverable', isCorrect: true },
          { id: 'c', text: 'Building Block', isCorrect: false },
          { id: 'd', text: 'Matrix', isCorrect: false }
        ],
        explanation: 'A Deliverable represents the formal output of a project phase that requires approval.'
      },
      {
        id: 'q-content-2',
        question: 'What are the three categories of Artifacts in TOGAF?',
        options: [
          { id: 'a', text: 'Business, Data, Application', isCorrect: false },
          { id: 'b', text: 'ABBs, SBBs, Deliverables', isCorrect: false },
          { id: 'c', text: 'Catalogs, Matrices, Diagrams', isCorrect: true },
          { id: 'd', text: 'Strategic, Segment, Capability', isCorrect: false }
        ],
        explanation: 'Artifacts are represented as lists (Catalogs), relationships (Matrices), or visuals (Diagrams).'
      },
      {
        id: 'q-content-3',
        question: 'What is the difference between an ABB and an SBB?',
        options: [
          { id: 'a', text: 'ABBs represent physical products, SBBs represent logical capabilities.', isCorrect: false },
          { id: 'b', text: 'ABBs define what is needed (logical), SBBs define how it is implemented (physical).', isCorrect: true },
          { id: 'c', text: 'ABBs are used in Phase H, SBBs are used in Phase A.', isCorrect: false },
          { id: 'd', text: 'There is no difference.', isCorrect: false }
        ],
        explanation: 'Architecture Building Blocks define requirements and capabilities, while Solution Building Blocks represent specific vendor products or custom code that implement them.'
      }
    ]
  },
  {
    id: 'togaf-enterprise-continuum',
    frameworkId: 'togaf',
    title: 'Enterprise Continuum & Repository',
    subtitle: 'Structuring Architecture Assets',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Enterprise Architecture',
    overview: 'The Enterprise Continuum provides a method for classifying architecture and solution artifacts, showing how generic solutions can be leveraged for specific organizational needs.',
    sections: [
      {
        id: 'continuum-intro',
        title: 'The Enterprise Continuum',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Enterprise Continuum is a "virtual repository" of all architecture assets. It classifies assets from highly generic to highly specific.'
          },
          {
            type: 'bullets',
            items: [
              '**Foundation Architectures**: Highly generic (e.g., TOGAF TRM).',
              '**Common Systems Architectures**: Industry-neutral common services (e.g., security, network).',
              '**Industry Architectures**: Specific to a vertical sector (e.g., healthcare, banking).',
              '**Organization-Specific Architectures**: Specific to your enterprise.'
            ]
          },
          {
            type: 'diagram',
            content: `
Generic <----------------------------------------> Specific
Foundation -> Common Systems -> Industry -> Org-Specific
            `
          }
        ]
      },
      {
        id: 'continuum-repo',
        title: 'The Architecture Repository',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Architecture Repository is the physical or logical system that stores the architecture assets. It contains several classes of information:'
          },
          {
            type: 'bullets',
            items: [
              '**Architecture Metamodel**: The tailored framework.',
              '**Architecture Capability**: Parameters and structures for the EA team.',
              '**Architecture Landscape**: State of the enterprise (Strategic, Segment, Capability levels).',
              '**Standards Information Base (SIB)**: Approved standards and guidelines.',
              '**Reference Library**: Guidelines, templates, and patterns.',
              '**Governance Log**: Record of governance activity.'
            ]
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Landscape', definition: 'The architectural representation of assets deployed within the operating enterprise.' },
      { term: 'Standards Information Base', definition: 'A repository area that holds a set of specifications to which architectures must conform.' }
    ],
    examTips: [
      'The Enterprise Continuum categorizes from left (generic) to right (specific).',
      'The Architecture Repository is where you physically store the models and documents.'
    ],
    commonMistakes: [
      'Confusing the Enterprise Continuum (a classification scheme) with the Architecture Repository (the actual storage system).'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Enterprise Continuum',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Enterprise Continuum documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-content-framework'],
    embeddedQuestions: [
      {
        id: 'q-continuum-1',
        question: 'Which of the following represents the most generic architecture in the Enterprise Continuum?',
        options: [
          { id: 'a', text: 'Industry Architectures', isCorrect: false },
          { id: 'b', text: 'Organization-Specific Architectures', isCorrect: false },
          { id: 'c', text: 'Foundation Architectures', isCorrect: true },
          { id: 'd', text: 'Common Systems Architectures', isCorrect: false }
        ],
        explanation: 'Foundation Architectures are the most generic, providing fundamental concepts and principles.'
      },
      {
        id: 'q-continuum-2',
        question: 'Where would an Enterprise Architect store the approved list of technology standards for the company?',
        options: [
          { id: 'a', text: 'Governance Log', isCorrect: false },
          { id: 'b', text: 'Architecture Metamodel', isCorrect: false },
          { id: 'c', text: 'Standards Information Base (SIB)', isCorrect: true },
          { id: 'd', text: 'Requirements Repository', isCorrect: false }
        ],
        explanation: 'The Standards Information Base (SIB) holds the set of specifications and standards to which architectures must conform.'
      },
      {
        id: 'q-continuum-3',
        question: 'What are the levels of the Architecture Landscape?',
        options: [
          { id: 'a', text: 'Business, Data, Application, Technology', isCorrect: false },
          { id: 'b', text: 'Strategic, Segment, Capability', isCorrect: true },
          { id: 'c', text: 'Generic, Common, Industry, Organization', isCorrect: false },
          { id: 'd', text: 'Baseline, Transition, Target', isCorrect: false }
        ],
        explanation: 'The Architecture Landscape is divided into Strategic (long-term enterprise-wide), Segment (portfolio/program level), and Capability (project/solution level).'
      }
    ]
  },
  {
    id: 'togaf-governance',
    frameworkId: 'togaf',
    title: 'Architecture Governance',
    subtitle: 'Directing and Controlling the Architecture',
    estimatedMinutes: 30,
    difficulty: 'foundation',
    domain: 'Architecture Governance',
    overview: 'Architecture Governance is the practice and orientation by which enterprise architectures and other architectures are managed and controlled at an enterprise-wide level.',
    sections: [
      {
        id: 'gov-intro',
        title: 'Architecture Governance Concepts',
        blocks: [
          {
            type: 'paragraph',
            content: 'Governance ensures that the architecture is not just created but is adhered to during implementation.'
          },
          {
            type: 'bullets',
            items: [
              '**Architecture Board**: A cross-organizational group of executives who oversee the implementation of the governance strategy.',
              '**Compliance**: Ensuring projects adhere to the architecture.',
              '**Dispensations**: Granted by the Architecture Board when compliance is not possible for valid business reasons.'
            ]
          }
        ]
      },
      {
        id: 'gov-compliance',
        title: 'Levels of Conformance',
        blocks: [
          {
            type: 'table',
            table: {
              headers: ['Level', 'Description'],
              rows: [
                ['Irrelevant', 'The implementation has no features in common with the architecture.'],
                ['Consistent', 'The implementation shares features, but some overlap. No contradictions.'],
                ['Compliant', 'Some architecture features are not implemented, but what is implemented is in accordance.'],
                ['Conformant', 'All features of the architecture are implemented exactly as specified.']
              ]
            }
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Architecture Board', definition: 'The body responsible for the review and maintenance of the architecture.' }
    ],
    examTips: [
      'The Architecture Board grants dispensations.',
      'Know the difference between Consistent, Compliant, and Conformant.'
    ],
    commonMistakes: [
      'Assuming the Enterprise Architecture team can enforce governance on their own; they need backing from an Architecture Board.'
    ],
    externalResources: [
      {
        title: 'TOGAF Standard - Architecture Governance',
        type: 'official-doc',
        url: 'https://pubs.opengroup.org/togaf-standard/',
        description: 'Governance documentation.',
        isFree: true,
        publisher: 'The Open Group'
      }
    ],
    relatedTopicIds: ['togaf-phase-g'],
    embeddedQuestions: [
      {
        id: 'q-gov-1',
        question: 'Who is typically responsible for granting architecture dispensations?',
        options: [
          { id: 'a', text: 'The Lead Developer', isCorrect: false },
          { id: 'b', text: 'The Project Manager', isCorrect: false },
          { id: 'c', text: 'The Architecture Board', isCorrect: true },
          { id: 'd', text: 'The Business Analyst', isCorrect: false }
        ],
        explanation: 'The Architecture Board has the authority to grant exceptions (dispensations) to the architecture standards.'
      },
      {
        id: 'q-gov-2',
        question: 'If a project implements some features of the architecture correctly, but fails to implement others, what is its level of conformance?',
        options: [
          { id: 'a', text: 'Conformant', isCorrect: false },
          { id: 'b', text: 'Compliant', isCorrect: true },
          { id: 'c', text: 'Consistent', isCorrect: false },
          { id: 'd', text: 'Irrelevant', isCorrect: false }
        ],
        explanation: 'Compliant means the implemented features align with the architecture, but not all architecture features were implemented.'
      },
      {
        id: 'q-gov-3',
        question: 'What is a primary responsibility of an Architecture Board?',
        options: [
          { id: 'a', text: 'Writing application code.', isCorrect: false },
          { id: 'b', text: 'Managing project budgets.', isCorrect: false },
          { id: 'c', text: 'Providing cross-organizational oversight and resolving architecture disputes.', isCorrect: true },
          { id: 'd', text: 'Creating the daily build schedules.', isCorrect: false }
        ],
        explanation: 'The Architecture Board is a governance body that oversees the architecture practice, enforces compliance, and resolves cross-domain disputes.'
      }
    ]
  }
];
