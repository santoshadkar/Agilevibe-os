import { Framework, Question } from '../lib/types';
import { normalizeQuestions } from '../lib/normalize';

export const enterpriseFramework: Framework = {
  id: 'enterprise',
  name: 'Enterprise Architecture',
  shortName: 'EA',
  description: 'EA frameworks, business architecture, capability modeling, and strategy alignment',
  icon: '🏢',
  color: '#f59e0b',
  gradientFrom: '#92400e',
  gradientTo: '#f59e0b',
  domains: [
    { id: 'ea-frameworks', name: 'EA Frameworks Comparison', description: 'TOGAF, Zachman, FEAF, DODAF, Gartner', weight: 20 },
    { id: 'business-arch', name: 'Business Architecture', description: 'Value streams, capabilities, operating models', weight: 30 },
    { id: 'strategy-alignment', name: 'Strategy to Execution', description: 'Portfolio management, roadmaps, OKRs', weight: 25 },
    { id: 'ea-governance', name: 'EA Governance', description: 'Operating models, architecture review boards, metrics', weight: 25 },
  ],
  totalQuestions: 100,
  estimatedMinutes: 45,
  certifications: ['Certified Business Architect (CBA)', 'TOGAF Practitioner']
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawEnterpriseQuestions: any[] = [
  // 22 MCQs
  { id: 'e1', domainId: 'ea-frameworks', type: 'mcq', text: 'The Zachman Framework is best described as a:', options: ['Process Model', 'Ontology', 'Methodology', 'Standard'], answer: 'Ontology', explanation: 'Zachman is a 6x6 ontology matrix, not a methodology.' },
  { id: 'e2', domainId: 'ea-frameworks', type: 'mcq', text: 'Which EA framework focuses heavily on the ADM (Architecture Development Method)?', options: ['Zachman', 'DODAF', 'TOGAF', 'FEAF'], answer: 'TOGAF', explanation: 'The ADM is the core of TOGAF.' },
  { id: 'e3', domainId: 'ea-frameworks', type: 'mcq', text: 'Gartner EA methodology is primarily focused on:', options: ['Detailed Documentation', 'Business Outcomes', 'IT Infrastructure', 'Defense Systems'], answer: 'Business Outcomes', explanation: 'Gartner focuses on practical business outcomes over heavy documentation.' },
  { id: 'e4', domainId: 'business-arch', type: 'mcq', text: 'What is a Business Capability?', options: ['A software application', 'What a business does to generate value', 'A specific business process', 'An organizational chart'], answer: 'What a business does to generate value', explanation: 'A capability describes WHAT the business does, not how.' },
  { id: 'e5', domainId: 'business-arch', type: 'mcq', text: 'In capability modeling, L1 represents:', options: ['Detailed activities', 'Core organizational functions', 'IT systems', 'Specific metrics'], answer: 'Core organizational functions', explanation: 'Level 1 represents the highest-level core capabilities.' },
  { id: 'e6', domainId: 'business-arch', type: 'mcq', text: 'Which OMG standard models business vision, goals, and strategies?', options: ['BPMN', 'UML', 'BMM', 'CMMN'], answer: 'BMM', explanation: 'Business Motivation Model (BMM) links strategy to execution.' },
  { id: 'e7', domainId: 'business-arch', type: 'mcq', text: 'Value streams are primarily used to:', options: ['Map end-to-end value delivery to a customer', 'Model data flows', 'Design microservices', 'Draw org charts'], answer: 'Map end-to-end value delivery to a customer', explanation: 'Value streams show how an organization delivers value.' },
  { id: 'e8', domainId: 'business-arch', type: 'mcq', text: 'What does TOM stand for in business architecture?', options: ['Technical Object Model', 'Target Operating Model', 'Total Organization Management', 'Tactical Operations Map'], answer: 'Target Operating Model', explanation: 'TOM describes the future state of operations.' },
  { id: 'e9', domainId: 'strategy-alignment', type: 'mcq', text: 'An Architecture Roadmap typically bridges:', options: ['Business and IT', 'Baseline and Target Architectures', 'Development and Operations', 'Vendors and Procurement'], answer: 'Baseline and Target Architectures', explanation: 'Roadmaps show the transition states from baseline to target.' },
  { id: 'e10', domainId: 'strategy-alignment', type: 'mcq', text: 'What defines the intermediate steps in a large architecture roadmap?', options: ['Transition Architectures', 'Building Blocks', 'Solution Architectures', 'Capability Maps'], answer: 'Transition Architectures', explanation: 'Transition architectures provide logical waypoints.' },
  { id: 'e11', domainId: 'ea-governance', type: 'mcq', text: 'Which group typically reviews and approves architecture designs?', options: ['CAB', 'ARB', 'PMO', 'SOC'], answer: 'ARB', explanation: 'The Architecture Review Board governs architecture compliance.' },
  { id: 'e12', domainId: 'ea-governance', type: 'mcq', text: 'In a federated EA operating model:', options: ['All decisions are centralized', 'Domain architects have autonomy with central standards', 'There is no central governance', 'Only IT decides'], answer: 'Domain architects have autonomy with central standards', explanation: 'Federated balances central standards with local execution.' },
  { id: 'e13', domainId: 'ea-governance', type: 'mcq', text: 'In RASCI, what does the C stand for?', options: ['Consulted', 'Controlled', 'Central', 'Computed'], answer: 'Consulted', explanation: 'Consulted parties provide input before decisions are made.' },
  { id: 'e14', domainId: 'ea-frameworks', type: 'mcq', text: 'Which row in Zachman corresponds to the System Model?', options: ['Row 1', 'Row 2', 'Row 3', 'Row 4'], answer: 'Row 3', explanation: 'Row 3 is the System Model (Designer view).' },
  { id: 'e15', domainId: 'strategy-alignment', type: 'mcq', text: 'Which framework is used to integrate EA with Agile scaling?', options: ['SAFe', 'ITIL', 'COBIT', 'PRINCE2'], answer: 'SAFe', explanation: 'SAFe provides enterprise agility concepts that map to EA.' },
  { id: 'e16', domainId: 'ea-governance', type: 'mcq', text: 'What measures the effectiveness of architecture governance?', options: ['Lines of code', 'Architecture Metrics', 'Number of servers', 'Sprint velocity'], answer: 'Architecture Metrics', explanation: 'Architecture metrics track alignment, reuse, and tech debt.' },
  { id: 'e17', domainId: 'business-arch', type: 'mcq', text: 'Business Capabilities should be independent of:', options: ['Business Value', 'Information', 'Organization Structure', 'Strategy'], answer: 'Organization Structure', explanation: 'Capabilities are stable and persist through org changes.' },
  { id: 'e18', domainId: 'ea-frameworks', type: 'mcq', text: 'DODAF is primarily used by:', options: ['Banks', 'Defense and Government', 'Retail', 'Startups'], answer: 'Defense and Government', explanation: 'Department of Defense Architecture Framework.' },
  { id: 'e19', domainId: 'strategy-alignment', type: 'mcq', text: 'OKRs stand for:', options: ['Operational Key Requirements', 'Objectives and Key Results', 'Organizational Knowledge Repositories', 'Overhead and Key Resources'], answer: 'Objectives and Key Results', explanation: 'OKRs align strategy to measurable goals.' },
  { id: 'e20', domainId: 'ea-governance', type: 'mcq', text: 'An Architecture Maturity Model is used to:', options: ['Assess the EA practice maturity', 'Measure developer skills', 'Audit finances', 'Check compliance'], answer: 'Assess the EA practice maturity', explanation: 'It evaluates how well EA is functioning in the org.' },
  { id: 'e21', domainId: 'ea-governance', type: 'mcq', text: 'What is a common pitfall of Centralized EA?', options: ['Inconsistency', 'Too much agility', 'Bottlenecks and slow decisions', 'High redundancy'], answer: 'Bottlenecks and slow decisions', explanation: 'Centralized EA can slow down delivery if not scaled well.' },
  { id: 'e22', domainId: 'business-arch', type: 'mcq', text: 'In Value Stream Mapping, what is analyzed?', options: ['Data latency', 'Lead time and Cycle time', 'Network bandwidth', 'CPU usage'], answer: 'Lead time and Cycle time', explanation: 'Value streams focus on time and efficiency of value flow.' },
  // 8 Scenarios
  { id: 'e23', domainId: 'business-arch', type: 'scenario', text: 'The org structure is changing completely. How should this affect the Business Capability Model?', options: ['Complete rewrite', 'No change if business model remains same', 'Change only L3', 'Scrap the model'], answer: 'No change if business model remains same', explanation: 'Capabilities define what the business does, not who does it.' },
  { id: 'e24', domainId: 'strategy-alignment', type: 'scenario', text: 'You need to deprecate a legacy CRM. How do you plan this in EA?', options: ['Turn it off immediately', 'Define transition architectures in the roadmap', 'Ask the ARB', 'Create a Zachman matrix'], answer: 'Define transition architectures in the roadmap', explanation: 'Transition states manage the migration lifecycle.' },
  { id: 'e25', domainId: 'ea-governance', type: 'scenario', text: 'Agile teams complain EA is too slow. What is the best adjustment?', options: ['Stop doing EA', 'Move to a federated model with self-service guardrails', 'Fire the agile teams', 'Enforce more ARB meetings'], answer: 'Move to a federated model with self-service guardrails', explanation: 'Federated EA empowers teams within boundaries.' },
  { id: 'e26', domainId: 'ea-frameworks', type: 'scenario', text: 'A stakeholder asks "Where" data is hosted, "Who" owns it, and "Why". Which framework addresses this directly?', options: ['Zachman', 'ITIL', 'BPMN', 'Scrum'], answer: 'Zachman', explanation: 'Zachman columns map to What, How, Where, Who, When, Why.' },
  { id: 'e27', domainId: 'business-arch', type: 'scenario', text: 'Company A merges with Company B. How can EA help identify redundancies?', options: ['Look at network traffic', 'Compare their Business Capability Maps', 'Read source code', 'Merge Active Directories'], answer: 'Compare their Business Capability Maps', explanation: 'Capability maps highlight duplicate functions across companies.' },
  { id: 'e28', domainId: 'strategy-alignment', type: 'scenario', text: 'The CIO wants to measure EA success. What metric is best?', options: ['Number of artifacts produced', 'Reduction in tech debt and higher strategic alignment', 'Number of meetings held', 'Server uptime'], answer: 'Reduction in tech debt and higher strategic alignment', explanation: 'EA value is in alignment and efficiency.' },
  { id: 'e29', domainId: 'business-arch', type: 'scenario', text: 'You are designing a TOM for a new digital branch. What must be included?', options: ['People, Process, Technology', 'Just software', 'Only organizational charts', 'Database schemas'], answer: 'People, Process, Technology', explanation: 'TOM covers the holistic operating environment.' },
  { id: 'e30', domainId: 'ea-governance', type: 'scenario', text: 'A team wants to use an unapproved database. How is this handled?', options: ['They just use it', 'They seek an exception via the ARB', 'The CEO decides', 'The network team blocks it'], answer: 'They seek an exception via the ARB', explanation: 'The ARB handles exceptions to architecture standards.' },
  // 5 Drag-Drop
  { id: 'e31', domainId: 'ea-frameworks', type: 'drag-drop', text: 'Match the Zachman interrogative to its meaning.', dragItems: ['What', 'How', 'Where', 'Who'], dropZones: ['Data', 'Function', 'Network', 'People'], answer: ['What->Data', 'How->Function', 'Where->Network', 'Who->People'], explanation: 'Zachman column definitions.' },
  { id: 'e32', domainId: 'business-arch', type: 'drag-drop', text: 'Match the Business Architecture concept to its definition.', dragItems: ['Capability', 'Value Stream', 'Information Map', 'Org Map'], dropZones: ['What we do', 'How we deliver value', 'Business data concepts', 'Who does the work'], answer: ['Capability->What we do', 'Value Stream->How we deliver value', 'Information Map->Business data concepts', 'Org Map->Who does the work'], explanation: 'BIZBOK core concepts.' },
  { id: 'e33', domainId: 'strategy-alignment', type: 'drag-drop', text: 'Match the TOGAF ADM phase.', dragItems: ['Phase A', 'Phase B', 'Phase C', 'Phase D'], dropZones: ['Vision', 'Business', 'Information Systems', 'Technology'], answer: ['Phase A->Vision', 'Phase B->Business', 'Phase C->Information Systems', 'Phase D->Technology'], explanation: 'TOGAF ADM cycle.' },
  { id: 'e34', domainId: 'ea-governance', type: 'drag-drop', text: 'Match the RACI role to its action.', dragItems: ['Responsible', 'Accountable', 'Consulted', 'Informed'], dropZones: ['Does the work', 'Signs off', 'Provides input', 'Kept in loop'], answer: ['Responsible->Does the work', 'Accountable->Signs off', 'Consulted->Provides input', 'Informed->Kept in loop'], explanation: 'Standard RACI definitions.' },
  { id: 'e35', domainId: 'ea-governance', type: 'drag-drop', text: 'Match the EA Operating Model.', dragItems: ['Centralized', 'Federated', 'Decentralized', 'Ad-hoc'], dropZones: ['Strict control', 'Shared governance', 'Siloed control', 'No formal EA'], answer: ['Centralized->Strict control', 'Federated->Shared governance', 'Decentralized->Siloed control', 'Ad-hoc->No formal EA'], explanation: 'EA Governance structures.' },
,
{
  "id": "ent-036",
  "type": "mcq",
  "domain": "business-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is the primary role of a Business Capability Heatmap in Enterprise Architecture?",
  "options": [
    {
      "id": "a",
      "text": "To visually highlight strategic importance, investment gaps, and performance deficiencies across business capabilities.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "To list network IP addresses.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "To track CPU utilization of web servers.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "To record daily employee attendance.",
      "isCorrect": false
    }
  ],
  "explanation": "Capability Heatmaps visually communicate maturity, performance, and strategic priority to guide portfolio investments.",
  "reference": "BIZBOK Guide"
},
{
  "id": "ent-037",
  "type": "mcq",
  "domain": "ea-frameworks",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In the Zachman Framework, which column answers the question \"Where\" (Locations)?",
  "options": [
    {
      "id": "a",
      "text": "Network / Location Column",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Data Column",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "People Column",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Time Column",
      "isCorrect": false
    }
  ],
  "explanation": "The 4th column in Zachman answers \"Where\" by mapping geographic nodes and network locations.",
  "reference": "Zachman Framework Ontology"
},
{
  "id": "ent-038",
  "type": "mcq",
  "domain": "strategy-alignment",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the difference between a Value Stream and a Business Process in EA?",
  "options": [
    {
      "id": "a",
      "text": "Value Streams show end-to-end customer value delivery, while Business Processes detail specific operational tasks and activities.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "There is no difference between them.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Value Streams apply only to IT, while Processes apply to sales.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Processes replace capability modeling entirely.",
      "isCorrect": false
    }
  ],
  "explanation": "Value Streams represent high-level value stages for external stakeholders, whereas processes define internal execution steps.",
  "reference": "Business Architecture Guild"
},
{
  "id": "ent-039",
  "type": "mcq",
  "domain": "ea-governance",
  "difficulty": "expert",
  "points": 1,
  "question": "What is an Architecture Decision Record (ADR)?",
  "options": [
    {
      "id": "a",
      "text": "A short document capturing an architectural decision, its context, trade-offs, and consequences.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A financial invoice from a cloud provider.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A employee performance review form.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A software bug report ticket.",
      "isCorrect": false
    }
  ],
  "explanation": "ADRs document key architectural choices, rationale, and context to maintain architectural governance over time.",
  "reference": "Agile Architecture Principles"
},
{
  "id": "ent-040",
  "type": "scenario",
  "domain": "strategy-alignment",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise bank wants to transition from a product-centric organization to a customer-centric digital banking model.",
  "question": "How should the EA team align target capabilities with business strategy?",
  "options": [
    {
      "id": "a",
      "text": "Map customer journey value streams to required Level-1 and Level-2 business capabilities, identifying technology gaps.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Refactor database schemas without business consultation.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Purchase legacy mainframe hardware.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Outsource all business architecture responsibilities.",
      "isCorrect": false
    }
  ],
  "explanation": "Mapping customer value streams to capabilities ensures IT investments directly enable strategic transformation.",
  "reference": "EA Strategy & Capability Alignment"
},
{
  "id": "ent-041",
  "type": "mcq",
  "domain": "ea-frameworks",
  "difficulty": "foundation",
  "points": 1,
  "question": "Which framework is primarily used by US Federal Agencies for enterprise architecture?",
  "options": [
    {
      "id": "a",
      "text": "FEAF (Federal Enterprise Architecture Framework)",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "TOGAF",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "ITIL",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "COBIT",
      "isCorrect": false
    }
  ],
  "explanation": "FEAF provides a common EA structure for US federal government agencies.",
  "reference": "FEAF Guide"
},
{
  "id": "ent-042",
  "type": "mcq",
  "domain": "business-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In Business Motivation Model (BMM), what element defines what an enterprise wants to achieve?",
  "options": [
    {
      "id": "a",
      "text": "Ends (Vision, Goals, Objectives)",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Means (Mission, Strategies, Tactics)",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Influencers",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Assessments",
      "isCorrect": false
    }
  ],
  "explanation": "BMM categorizes business intent into Ends (achievements) and Means (action plans).",
  "reference": "OMG BMM Standard"
},
{
  "id": "ent-043",
  "type": "mcq",
  "domain": "ea-governance",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the role of an Architecture Review Board (ARB)?",
  "options": [
    {
      "id": "a",
      "text": "To oversee compliance with EA standards, approve dispensation requests, and guide technology roadmaps.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "To write application source code daily.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "To approve payroll budgets.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "To manage social media marketing campaigns.",
      "isCorrect": false
    }
  ],
  "explanation": "The ARB governs enterprise architecture, ensuring solution designs align with strategic standards.",
  "reference": "TOGAF Architecture Governance"
},
{
  "id": "ent-044",
  "type": "scenario",
  "domain": "ea-governance",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A global insurance firm is acquiring two regional insurers, resulting in 3 redundant CRM systems.",
  "question": "What EA governance approach should be taken to consolidate systems?",
  "options": [
    {
      "id": "a",
      "text": "Conduct application portfolio rationalization using TIME model (Tolerate, Invest, Migrate, Eliminate).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Keep all 3 CRM systems running forever.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Delete customer records from acquired systems immediately.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Let each business unit operate independently without integration.",
      "isCorrect": false
    }
  ],
  "explanation": "The TIME model evaluates application portfolios to rationalize redundant platforms post-merger.",
  "reference": "Application Portfolio Management"
},
{
  "id": "ent-045",
  "type": "mcq",
  "domain": "strategy-alignment",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is a Target Operating Model (TOM)?",
  "options": [
    {
      "id": "a",
      "text": "A blueprint of how an organization will structure its capabilities, processes, governance, and technology to deliver business strategy.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A database index diagram.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network bandwidth report.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A software user manual.",
      "isCorrect": false
    }
  ],
  "explanation": "TOM defines the operational realization of business strategy across people, process, and technology.",
  "reference": "Operating Model Design"
},
{
  "id": "ent-046",
  "type": "mcq",
  "domain": "ea-frameworks",
  "difficulty": "foundation",
  "points": 1,
  "question": "What distinguishes DoD Architecture Framework (DoDAF)?",
  "options": [
    {
      "id": "a",
      "text": "It uses viewpoints (Operational, Services, Systems, Standards) tailored for defense and complex systems of systems.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "It applies only to small startups.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "It focuses strictly on web design.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "It replaces relational databases.",
      "isCorrect": false
    }
  ],
  "explanation": "DoDAF provides architectural viewmodels designed for military and defense enterprise systems.",
  "reference": "DoDAF Specification"
},
{
  "id": "ent-047",
  "type": "scenario",
  "domain": "strategy-alignment",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise is integrating TOGAF with Scaled Agile Framework (SAFe) for enterprise-wide delivery.",
  "question": "How should EA interact with SAFe Agile Release Trains (ARTs)?",
  "options": [
    {
      "id": "a",
      "text": "EA defines Strategic Themes and Architecture Runway, while ARTs incrementally implement Solution Enablers.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "EA blocks all agile sprints until 100% of upfront architecture is finished.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Agile teams ignore architecture completely.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "EA replaces Product Owners on agile teams.",
      "isCorrect": false
    }
  ],
  "explanation": "Agile EA establishes Architecture Runway and Strategic Themes to enable continuous agile delivery without technical debt.",
  "reference": "TOGAF + SAFe Integration"
},
{
  "id": "ent-048",
  "type": "mcq",
  "domain": "ea-governance",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the top level in standard EA Maturity Models (e.g. ACMM)?",
  "options": [
    {
      "id": "a",
      "text": "Optimized (Level 5) - Architecture continuously improved based on feedback and metrics.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Initial (Level 1)",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Defined (Level 3)",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Ad Hoc (Level 0)",
      "isCorrect": false
    }
  ],
  "explanation": "Level 5 (Optimized) represents continuous EA refinement, automated governance, and strategic integration.",
  "reference": "Architecture Capability Maturity Model"
}
];

export const enterpriseQuestions = normalizeQuestions(rawEnterpriseQuestions);
