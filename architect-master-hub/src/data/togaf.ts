import { Framework, Question } from '../lib/types';
import { normalizeQuestions } from '../lib/normalize';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawTogafQuestions: any[] = [
  {
    id: 'togaf-001',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'What is the primary purpose of the TOGAF ADM Preliminary Phase?',
    options: [
      { id: 'a', text: 'Define architecture principles', isCorrect: true },
      { id: 'b', text: 'Create the architecture vision', isCorrect: false },
      { id: 'c', text: 'Develop the business architecture', isCorrect: false },
      { id: 'd', text: 'Plan migration activities', isCorrect: false }
    ],
    explanation: 'The Preliminary Phase prepares the organization for successful architecture projects by defining principles and framework.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-002',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'In TOGAF v10, which phase produces the Architecture Vision document?',
    options: [
      { id: 'a', text: 'Preliminary', isCorrect: false },
      { id: 'b', text: 'Phase A', isCorrect: true },
      { id: 'c', text: 'Phase B', isCorrect: false },
      { id: 'd', text: 'Phase E', isCorrect: false }
    ],
    explanation: 'Phase A focuses on establishing the architecture vision and gaining approval.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-003',
    type: 'mcq',
    domain: 'content',
    difficulty: 'foundation',
    points: 1,
    question: 'What are Architecture Building Blocks (ABBs) primarily used for?',
    options: [
      { id: 'a', text: 'Vendor-specific implementations', isCorrect: false },
      { id: 'b', text: 'Capturing requirements', isCorrect: false },
      { id: 'c', text: 'Defining what components are needed', isCorrect: true },
      { id: 'd', text: 'Migration planning', isCorrect: false }
    ],
    explanation: 'ABBs define the architecture, whereas SBBs define how it is implemented.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-004',
    type: 'mcq',
    domain: 'continuum',
    difficulty: 'foundation',
    points: 1,
    question: 'The TOGAF Enterprise Continuum classifies architectures from...',
    options: [
      { id: 'a', text: 'Foundation to Organization-Specific', isCorrect: true },
      { id: 'b', text: 'Strategy to Operations', isCorrect: false },
      { id: 'c', text: 'Business to Technology', isCorrect: false },
      { id: 'd', text: 'Current to Target', isCorrect: false }
    ],
    explanation: 'The continuum organizes assets from generic (Foundation) to highly specific (Organization-Specific).',
    reference: 'TOGAF Standard v10, Enterprise Continuum'
  },
  {
    id: 'togaf-005',
    type: 'mcq',
    domain: 'governance',
    difficulty: 'foundation',
    points: 1,
    question: 'In TOGAF governance, what is an Architecture Contract?',
    options: [
      { id: 'a', text: 'A legal agreement with vendors', isCorrect: false },
      { id: 'b', text: 'A joint agreement between stakeholders on deliverables and quality', isCorrect: true },
      { id: 'c', text: 'A contract for architecture tools', isCorrect: false },
      { id: 'd', text: 'A procurement document', isCorrect: false }
    ],
    explanation: 'It is an internal agreement ensuring the architecture meets business needs and standards.',
    reference: 'TOGAF Standard v10, Governance'
  },
  {
    id: 'togaf-006',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'Which TOGAF ADM phase produces the Transition Architecture?',
    options: [
      { id: 'a', text: 'Phase D', isCorrect: false },
      { id: 'b', text: 'Phase E', isCorrect: true },
      { id: 'c', text: 'Phase F', isCorrect: false },
      { id: 'd', text: 'Phase G', isCorrect: false }
    ],
    explanation: 'Phase E (Opportunities and Solutions) defines intermediate Transition Architectures if needed.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-007',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'What is the purpose of Gap Analysis in TOGAF?',
    options: [
      { id: 'a', text: 'Analyze market gaps', isCorrect: false },
      { id: 'b', text: 'Compare baseline and target architectures to identify missing components', isCorrect: true },
      { id: 'c', text: 'Analyze skill gaps in the team', isCorrect: false },
      { id: 'd', text: 'Identify budget gaps', isCorrect: false }
    ],
    explanation: 'Gap analysis highlights what needs to change to move from Baseline to Target.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-008',
    type: 'mcq',
    domain: 'togaf10-changes',
    difficulty: 'foundation',
    points: 1,
    question: 'In TOGAF v10, what is a key new feature compared to v9.2?',
    options: [
      { id: 'a', text: 'Introduction of the ADM cycle', isCorrect: false },
      { id: 'b', text: 'Modular structure allowing selective adoption', isCorrect: true },
      { id: 'c', text: 'Removal of governance', isCorrect: false },
      { id: 'd', text: 'New color codes for phases', isCorrect: false }
    ],
    explanation: 'TOGAF v10 introduced a modular approach making it easier to adopt specific parts.',
    reference: 'TOGAF Standard v10, Overview'
  },
  {
    id: 'togaf-009',
    type: 'mcq',
    domain: 'continuum',
    difficulty: 'foundation',
    points: 1,
    question: 'What does the Standards Information Base (SIB) contain in the Architecture Repository?',
    options: [
      { id: 'a', text: 'Historical architecture decisions', isCorrect: false },
      { id: 'b', text: 'Standards used to define architectural components', isCorrect: true },
      { id: 'c', text: 'Project management standards', isCorrect: false },
      { id: 'd', text: 'HR standards', isCorrect: false }
    ],
    explanation: 'The SIB holds the accepted standards that architectures must comply with.',
    reference: 'TOGAF Standard v10, Architecture Repository'
  },
  {
    id: 'togaf-010',
    type: 'mcq',
    domain: 'governance',
    difficulty: 'foundation',
    points: 1,
    question: 'The Architecture Board in TOGAF is responsible for...',
    options: [
      { id: 'a', text: 'Software development', isCorrect: false },
      { id: 'b', text: 'Overseeing architecture governance across the enterprise', isCorrect: true },
      { id: 'c', text: 'Financial planning', isCorrect: false },
      { id: 'd', text: 'Project delivery', isCorrect: false }
    ],
    explanation: 'The Architecture Board provides high-level oversight and governance.',
    reference: 'TOGAF Standard v10, Governance'
  },
  {
    id: 'togaf-011',
    type: 'mcq',
    domain: 'content',
    difficulty: 'foundation',
    points: 1,
    question: 'Which artifact type in TOGAF is a structured table listing multiple dimensions?',
    options: [
      { id: 'a', text: 'Diagram', isCorrect: false },
      { id: 'b', text: 'Catalog', isCorrect: false },
      { id: 'c', text: 'Matrix', isCorrect: true },
      { id: 'd', text: 'Repository', isCorrect: false }
    ],
    explanation: 'Matrices represent relationships between two or more dimensions (e.g., Role-to-System matrix).',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-012',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'What is the Statement of Architecture Work?',
    options: [
      { id: 'a', text: 'A technical specification', isCorrect: false },
      { id: 'b', text: 'A document that defines scope and approach for architecture activity', isCorrect: true },
      { id: 'c', text: 'A vendor statement', isCorrect: false },
      { id: 'd', text: 'A change request', isCorrect: false }
    ],
    explanation: 'It defines the scope, timeline, and plan for an architecture project.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-013',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'In TOGAF ADM Phase B, what is the primary focus?',
    options: [
      { id: 'a', text: 'Technology architecture', isCorrect: false },
      { id: 'b', text: 'Business architecture', isCorrect: true },
      { id: 'c', text: 'Application architecture', isCorrect: false },
      { id: 'd', text: 'Data architecture', isCorrect: false }
    ],
    explanation: 'Phase B focuses strictly on the Business Architecture domain.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-014',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'Which phase is concerned with managing architecture contracts and governance?',
    options: [
      { id: 'a', text: 'Phase E', isCorrect: false },
      { id: 'b', text: 'Phase F', isCorrect: false },
      { id: 'c', text: 'Phase G', isCorrect: true },
      { id: 'd', text: 'Phase H', isCorrect: false }
    ],
    explanation: 'Phase G (Implementation Governance) oversees the execution and compliance of projects.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-015',
    type: 'mcq',
    domain: 'togaf10-changes',
    difficulty: 'foundation',
    points: 1,
    question: 'What is the relationship between TOGAF and ITIL?',
    options: [
      { id: 'a', text: 'They are the same framework', isCorrect: false },
      { id: 'b', text: 'TOGAF focuses on architecture, ITIL on service management; they complement each other', isCorrect: true },
      { id: 'c', text: 'TOGAF replaces ITIL', isCorrect: false },
      { id: 'd', text: 'They are incompatible', isCorrect: false }
    ],
    explanation: 'TOGAF provides architecture design, while ITIL ensures operational service delivery.',
    reference: 'TOGAF Standard v10, Overview'
  },
  {
    id: 'togaf-016',
    type: 'mcq',
    domain: 'content',
    difficulty: 'foundation',
    points: 1,
    question: 'How are stakeholders and viewpoints related in TOGAF?',
    options: [
      { id: 'a', text: 'Stakeholders create viewpoints', isCorrect: false },
      { id: 'b', text: 'Viewpoints address the concerns of stakeholders', isCorrect: true },
      { id: 'c', text: 'Viewpoints are the stakeholders themselves', isCorrect: false },
      { id: 'd', text: 'They are unrelated concepts', isCorrect: false }
    ],
    explanation: 'A viewpoint is a perspective used to construct a view to address stakeholder concerns.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-017',
    type: 'mcq',
    domain: 'governance',
    difficulty: 'foundation',
    points: 1,
    question: 'Architecture Principles are defined in which phase?',
    options: [
      { id: 'a', text: 'Preliminary Phase', isCorrect: true },
      { id: 'b', text: 'Phase B', isCorrect: false },
      { id: 'c', text: 'Phase E', isCorrect: false },
      { id: 'd', text: 'Phase G', isCorrect: false }
    ],
    explanation: 'Principles are established in the Preliminary Phase to guide the entire architecture practice.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-018',
    type: 'mcq',
    domain: 'capability',
    difficulty: 'foundation',
    points: 1,
    question: 'The Architecture Capability Framework focuses on...',
    options: [
      { id: 'a', text: 'System performance metrics', isCorrect: false },
      { id: 'b', text: 'Establishing an organizational structure and processes for architecture', isCorrect: true },
      { id: 'c', text: 'Vendor capability evaluation', isCorrect: false },
      { id: 'd', text: 'Defining capability maps', isCorrect: false }
    ],
    explanation: 'It provides guidelines for establishing an architecture practice within an organization.',
    reference: 'TOGAF Standard v10, Capability Framework'
  },
  {
    id: 'togaf-019',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'What is the focus of ADM Phase C?',
    options: [
      { id: 'a', text: 'Business Architecture', isCorrect: false },
      { id: 'b', text: 'Information Systems Architecture (Data & Application)', isCorrect: true },
      { id: 'c', text: 'Technology Architecture', isCorrect: false },
      { id: 'd', text: 'Implementation Planning', isCorrect: false }
    ],
    explanation: 'Phase C covers Data and Application architectures.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-020',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'Phase H (Architecture Change Management) handles...',
    options: [
      { id: 'a', text: 'Source code versioning', isCorrect: false },
      { id: 'b', text: 'Managing changes to the enterprise architecture baseline', isCorrect: true },
      { id: 'c', text: 'Software deployment changes', isCorrect: false },
      { id: 'd', text: 'Staff changes in the architecture team', isCorrect: false }
    ],
    explanation: 'It ensures the architecture lifecycle continues by responding to new drivers or issues.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-021',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'The Requirements Management phase is unique because...',
    options: [
      { id: 'a', text: 'It is executed once at the start', isCorrect: false },
      { id: 'b', text: 'It interacts with all other phases centrally', isCorrect: true },
      { id: 'c', text: 'It is an optional phase', isCorrect: false },
      { id: 'd', text: 'It only focuses on non-functional requirements', isCorrect: false }
    ],
    explanation: 'Requirements Management is a central continuous process influencing all ADM phases.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-022',
    type: 'mcq',
    domain: 'content',
    difficulty: 'foundation',
    points: 1,
    question: 'Solution Building Blocks (SBBs) represent...',
    options: [
      { id: 'a', text: 'Logical architecture concepts', isCorrect: false },
      { id: 'b', text: 'Physical, real-world implementations', isCorrect: true },
      { id: 'c', text: 'High-level business capabilities', isCorrect: false },
      { id: 'd', text: 'Legal requirements', isCorrect: false }
    ],
    explanation: 'While ABBs define what is needed, SBBs are the actual products or systems used.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-023',
    type: 'mcq',
    domain: 'continuum',
    difficulty: 'foundation',
    points: 1,
    question: 'What defines the Architecture Landscape in TOGAF?',
    options: [
      { id: 'a', text: 'The physical servers of the company', isCorrect: false },
      { id: 'b', text: 'A representation of assets in use, classified by strategic, segment, and capability architectures', isCorrect: true },
      { id: 'c', text: 'The organizational chart', isCorrect: false },
      { id: 'd', text: 'A list of approved vendors', isCorrect: false }
    ],
    explanation: 'It is the structured representation of all enterprise architectures in the organization.',
    reference: 'TOGAF Standard v10, Architecture Repository'
  },
  {
    id: 'togaf-024',
    type: 'mcq',
    domain: 'continuum',
    difficulty: 'foundation',
    points: 1,
    question: 'Foundation Architectures within the Enterprise Continuum are...',
    options: [
      { id: 'a', text: 'Highly customized to the business', isCorrect: false },
      { id: 'b', text: 'Generic building blocks and standards like TRM', isCorrect: true },
      { id: 'c', text: 'Industry-specific frameworks', isCorrect: false },
      { id: 'd', text: 'Operational models', isCorrect: false }
    ],
    explanation: 'Foundation Architectures contain generic, universally applicable elements.',
    reference: 'TOGAF Standard v10, Enterprise Continuum'
  },
  {
    id: 'togaf-025',
    type: 'mcq',
    domain: 'adm',
    difficulty: 'foundation',
    points: 1,
    question: 'Interoperability requirements are typically identified in...',
    options: [
      { id: 'a', text: 'Phase A only', isCorrect: false },
      { id: 'b', text: 'Various ADM phases including Business, Data, App, and Tech', isCorrect: true },
      { id: 'c', text: 'Only in the Technology Architecture phase', isCorrect: false },
      { id: 'd', text: 'Phase G', isCorrect: false }
    ],
    explanation: 'Interoperability is a multi-domain concern spanning business to technology.',
    reference: 'TOGAF Standard v10, ADM'
  },
  
  // SCENARIOS (Q26-35)
  {
    id: 'togaf-026',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'Your company has completed Phase A (Architecture Vision) for a new cloud migration initiative. Stakeholders have signed off on the Statement of Architecture Work. The architecture team is now forming a plan for the next immediate step.',
    question: 'What is the immediate next step in the TOGAF ADM cycle?',
    options: [
      { id: 'a', text: 'Develop the Target Business Architecture (Phase B)', isCorrect: true },
      { id: 'b', text: 'Develop the Target Technology Architecture (Phase D)', isCorrect: false },
      { id: 'c', text: 'Perform migration planning (Phase F)', isCorrect: false },
      { id: 'd', text: 'Deploy the cloud infrastructure (Phase G)', isCorrect: false }
    ],
    explanation: 'Following Phase A, Phase B (Business Architecture) is executed to align the business needs before technical design.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-027',
    type: 'scenario',
    domain: 'governance',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'During the implementation of a new CRM system, the development team informs you that they cannot comply with the standard database technology specified in the target architecture due to a specific licensing constraint. They propose using an alternative open-source database.',
    question: 'What is the appropriate architectural response according to TOGAF governance?',
    options: [
      { id: 'a', text: 'Immediately change the target architecture', isCorrect: false },
      { id: 'b', text: 'Halt the project entirely', isCorrect: false },
      { id: 'c', text: 'Request a formal dispensation from the Architecture Board', isCorrect: true },
      { id: 'd', text: 'Allow the team to proceed without formal approval', isCorrect: false }
    ],
    explanation: 'Dispensations provide a governed way to handle exceptions when compliance is not feasible.',
    reference: 'TOGAF Standard v10, Governance'
  },
  {
    id: 'togaf-028',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'You are currently working in Phase E (Opportunities and Solutions). Your organization has a massive legacy footprint and transitioning directly to the target architecture is impossible within a single fiscal year.',
    question: 'What architectural artifact should you define to manage this transition?',
    options: [
      { id: 'a', text: 'Architecture Vision', isCorrect: false },
      { id: 'b', text: 'Transition Architecture', isCorrect: true },
      { id: 'c', text: 'Architecture Principle', isCorrect: false },
      { id: 'd', text: 'Requirements Log', isCorrect: false }
    ],
    explanation: 'Transition Architectures describe intermediate states to safely bridge baseline and target architectures.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-029',
    type: 'scenario',
    domain: 'content',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'As an architect, you are analyzing the relationships between business services, applications, and the data entities they consume. You need a structured way to identify if any critical data entity is not being updated by any application.',
    question: 'Which TOGAF artifact should you use to find this gap?',
    options: [
      { id: 'a', text: 'Application Communication Diagram', isCorrect: false },
      { id: 'b', text: 'Data Entity/Data Component Catalog', isCorrect: false },
      { id: 'c', text: 'Application/Data Matrix', isCorrect: true },
      { id: 'd', text: 'Architecture Landscape', isCorrect: false }
    ],
    explanation: 'Matrices like Application/Data help quickly cross-reference components to identify gaps like unmanaged data.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-030',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'The enterprise architecture team has just started the Preliminary Phase. They need to determine how TOGAF will be adapted to fit the organizations mature Agile development practices.',
    question: 'What is the primary objective here?',
    options: [
      { id: 'a', text: 'Define the target technology stack', isCorrect: false },
      { id: 'b', text: 'Tailor the TOGAF framework to the organization', isCorrect: true },
      { id: 'c', text: 'Create the Business Architecture', isCorrect: false },
      { id: 'd', text: 'Draft the Statement of Architecture Work', isCorrect: false }
    ],
    explanation: 'The Preliminary phase includes customizing and tailoring the TOGAF framework (including ADM) to the specific needs of the organization.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-031',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'A major acquisition has just been finalized. The executive board mandates that the architecture team must assess the impact of this acquisition on the existing target architecture. The architecture is currently in a stable state post-implementation.',
    question: 'Which ADM phase is triggered by this event?',
    options: [
      { id: 'a', text: 'Phase E', isCorrect: false },
      { id: 'b', text: 'Phase F', isCorrect: false },
      { id: 'c', text: 'Phase H (Architecture Change Management)', isCorrect: true },
      { id: 'd', text: 'Preliminary Phase', isCorrect: false }
    ],
    explanation: 'Phase H handles changes to the architecture baseline triggered by events like acquisitions or technology obsolescence.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-032',
    type: 'scenario',
    domain: 'continuum',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'You are designing an architecture for a healthcare provider. You want to leverage existing models such as HL7 data standards and HIPAA compliance patterns rather than starting from scratch.',
    question: 'Where would you look within the Enterprise Continuum?',
    options: [
      { id: 'a', text: 'Foundation Architectures', isCorrect: false },
      { id: 'b', text: 'Common Systems Architectures', isCorrect: false },
      { id: 'c', text: 'Industry Architectures', isCorrect: true },
      { id: 'd', text: 'Organization-Specific Architectures', isCorrect: false }
    ],
    explanation: 'Industry Architectures contain specific models, standards, and patterns relevant to a specific vertical like healthcare.',
    reference: 'TOGAF Standard v10, Enterprise Continuum'
  },
  {
    id: 'togaf-033',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'During Phase F (Migration Planning), the project management office (PMO) requires a detailed breakdown of the work packages required to realize the Target Architecture, including costs and timelines.',
    question: 'What key document should the architecture team help produce?',
    options: [
      { id: 'a', text: 'Architecture Implementation and Migration Plan', isCorrect: true },
      { id: 'b', text: 'Architecture Vision', isCorrect: false },
      { id: 'c', text: 'Architecture Contract', isCorrect: false },
      { id: 'd', text: 'Statement of Architecture Work', isCorrect: false }
    ],
    explanation: 'Phase F finalizes the Implementation and Migration Plan in coordination with project management.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-034',
    type: 'scenario',
    domain: 'adm',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'While executing Phase C (Information Systems Architectures), you realize that a critical business process mapped in Phase B cannot be supported by any existing or planned application.',
    question: 'How does TOGAF recommend handling this?',
    options: [
      { id: 'a', text: 'Ignore it and focus on technology', isCorrect: false },
      { id: 'b', text: 'Capture it through the Requirements Management phase and update Phase B if needed', isCorrect: true },
      { id: 'c', text: 'Immediately escalate to the Architecture Board', isCorrect: false },
      { id: 'd', text: 'Stop the project', isCorrect: false }
    ],
    explanation: 'The ADM is iterative; the continuous Requirements Management phase handles new or unmet requirements across phases.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-035',
    type: 'scenario',
    domain: 'content',
    difficulty: 'practitioner',
    points: 2,
    scenario: 'A project team is ready to deploy a new system. As an enterprise architect, you must ensure their physical implementation aligns with the logical blueprints you designed previously.',
    question: 'What are you validating in this scenario?',
    options: [
      { id: 'a', text: 'That Solution Building Blocks (SBBs) conform to Architecture Building Blocks (ABBs)', isCorrect: true },
      { id: 'b', text: 'That the Architecture Vision is correct', isCorrect: false },
      { id: 'c', text: 'That the budget is maintained', isCorrect: false },
      { id: 'd', text: 'That the Enterprise Continuum is populated', isCorrect: false }
    ],
    explanation: 'ABBs define the logical requirements, and SBBs are the physical implementations that must satisfy those ABBs.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },

  // DRAG-DROP (Q36-40)
  {
    id: 'togaf-036',
    type: 'drag-drop',
    domain: 'adm',
    difficulty: 'foundation',
    points: 3,
    question: 'Match the ADM Phase to its primary focus or output.',
    pairs: [
      { left: 'Preliminary', right: 'Architecture Principles and Framework Tailoring' },
      { left: 'Phase A', right: 'Architecture Vision and Statement of Work' },
      { left: 'Phase E', right: 'Opportunities, Solutions, and Transition Architectures' },
      { left: 'Phase G', right: 'Implementation Governance and Compliance' }
    ],
    explanation: 'Each phase in the TOGAF ADM produces specific deliverables critical to the lifecycle.',
    reference: 'TOGAF Standard v10, ADM'
  },
  {
    id: 'togaf-037',
    type: 'drag-drop',
    domain: 'content',
    difficulty: 'foundation',
    points: 3,
    question: 'Match the Architecture Content types to their examples.',
    pairs: [
      { left: 'Deliverable', right: 'Architecture Definition Document' },
      { left: 'Artifact (Matrix)', right: 'Application/Data Relationship' },
      { left: 'Artifact (Catalog)', right: 'Application Portfolio List' },
      { left: 'Building Block', right: 'Customer Database Logical Component' }
    ],
    explanation: 'Deliverables are formal documents, Artifacts represent views (catalogs, matrices, diagrams), and Building Blocks are components.',
    reference: 'TOGAF Standard v10, Architecture Content'
  },
  {
    id: 'togaf-038',
    type: 'drag-drop',
    domain: 'governance',
    difficulty: 'practitioner',
    points: 3,
    question: 'Match the governance roles/artifacts to their responsibilities.',
    pairs: [
      { left: 'Architecture Board', right: 'Cross-organization governance and dispensations' },
      { left: 'Architecture Contract', right: 'Agreement on deliverables and quality' },
      { left: 'Compliance Assessment', right: 'Checking project alignment with architecture' },
      { left: 'Architecture Principles', right: 'Enduring guidelines that inform decisions' }
    ],
    explanation: 'Governance relies on clear roles (Board) and artifacts (Contracts, Assessments, Principles).',
    reference: 'TOGAF Standard v10, Governance'
  },
  {
    id: 'togaf-039',
    type: 'drag-drop',
    domain: 'continuum',
    difficulty: 'practitioner',
    points: 3,
    question: 'Match the Enterprise Continuum levels to their description.',
    pairs: [
      { left: 'Foundation Architecture', right: 'Generic models, TRM, universal applicability' },
      { left: 'Common Systems Architecture', right: 'Domain-specific but non-industry (e.g., Security, ERP)' },
      { left: 'Industry Architecture', right: 'Specific to verticals (e.g., eTOM, BIAN)' },
      { left: 'Organization-Specific Architecture', right: 'Customized strictly for the enterprise' }
    ],
    explanation: 'The Continuum goes from highly generic (Foundation) to highly specific (Organization-Specific).',
    reference: 'TOGAF Standard v10, Enterprise Continuum'
  },
  {
    id: 'togaf-040',
    type: 'drag-drop',
    domain: 'adm',
    difficulty: 'foundation',
    points: 3,
    question: 'Match the ADM Architecture Domain to its primary concern.',
    pairs: [
      { left: 'Business Architecture', right: 'Business strategy, governance, organization, processes' },
      { left: 'Data Architecture', right: 'Logical and physical data assets and management' },
      { left: 'Application Architecture', right: 'Individual application systems and interactions' },
      { left: 'Technology Architecture', right: 'Software and hardware infrastructure supporting apps' }
    ],
    explanation: 'TOGAF formally breaks down architecture into Business, Data, Application, and Technology (BDAT) domains.',
    reference: 'TOGAF Standard v10, ADM'
  }
,
{
  "id": "togaf-041",
  "type": "scenario",
  "domain": "adm",
  "difficulty": "expert",
  "points": 5,
  "scenario": "Global Logistics Corp is undergoing a digital transformation to modernize legacy mainframe tracking systems into event-driven cloud microservices. The CIO wants to ensure alignment with business strategy while minimizing operational downtime across 40 country hubs. You are lead architect in Phase A.",
  "question": "How should you define the scope and obtain executive approval in the Architecture Vision?",
  "options": [
    {
      "id": "a",
      "text": "Define enterprise boundary, identify key stakeholders, map business goals to architecture vision, and secure signed Statement of Architecture Work.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Immediately purchase cloud infrastructure and begin microservices migration in pilot country.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Defer stakeholder engagement until Phase D Technology Architecture is completed.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Bypass Architecture Board review to accelerate deployment timelines.",
      "isCorrect": false
    }
  ],
  "explanation": "Phase A produces the Statement of Architecture Work and Architecture Vision to secure stakeholder commitment before detailed technical design.",
  "reference": "TOGAF Standard v10, ADM Phase A"
},
{
  "id": "togaf-042",
  "type": "scenario",
  "domain": "adm",
  "difficulty": "expert",
  "points": 5,
  "scenario": "During Phase B Business Architecture for a retail banking group, stakeholders disagree on target capability priorities for core lending vs digital onboarding. Business leaders want rapid deployment while compliance teams insist on strict audit controls.",
  "question": "Which TOGAF artifact best resolves this conflict and clarifies business capabilities?",
  "options": [
    {
      "id": "a",
      "text": "Business Capability Map combined with Value Stream mapping to highlight risk-weighted capabilities.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Network topology diagram showing router bandwidth.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Software class diagram for lending service.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Hardware inventory catalog.",
      "isCorrect": false
    }
  ],
  "explanation": "Business Capability Maps link business goals to required capabilities, allowing risk-weighted prioritization.",
  "reference": "TOGAF Standard v10, Phase B"
},
{
  "id": "togaf-043",
  "type": "scenario",
  "domain": "content",
  "difficulty": "expert",
  "points": 5,
  "scenario": "In Phase C Information Systems Architecture, a healthcare provider must integrate electronic health record (EHR) data across 15 hospital networks with strict HIPAA privacy compliance.",
  "question": "How should the lead architect structure the Data Architecture deliverable?",
  "options": [
    {
      "id": "a",
      "text": "Develop logical data models, data entity/business function matrices, and data governance policies.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Store all patient data in an unencrypted public S3 bucket.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Ignore data architecture and focus exclusively on application code.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Replace data architecture with a network firewall diagram.",
      "isCorrect": false
    }
  ],
  "explanation": "Data Architecture in Phase C defines logical data entities, data management policies, and integration models.",
  "reference": "TOGAF Standard v10, Phase C"
},
{
  "id": "togaf-044",
  "type": "scenario",
  "domain": "adm",
  "difficulty": "expert",
  "points": 5,
  "scenario": "During Phase D Technology Architecture, an enterprise is evaluating multi-cloud deployment (AWS and Azure) versus single-vendor cloud hosting.",
  "question": "What step in Phase D evaluates technology alternatives against requirements?",
  "options": [
    {
      "id": "a",
      "text": "Perform Gap Analysis between Baseline and Target Technology Architecture.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Skip Phase D and proceed directly to Phase G implementation.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Select vendors based solely on marketing material without architectural review.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Mandate single-cloud hosting without analyzing multi-cloud risks.",
      "isCorrect": false
    }
  ],
  "explanation": "Gap Analysis identifies missing, modified, or new technology components between baseline and target states.",
  "reference": "TOGAF Standard v10, Phase D"
},
{
  "id": "togaf-045",
  "type": "scenario",
  "domain": "content",
  "difficulty": "expert",
  "points": 5,
  "scenario": "In Phase E Opportunities & Solutions, the architecture team has identified 12 work packages required to transition from legacy mainframe to cloud microservices.",
  "question": "How should these work packages be structured into transition architectures?",
  "options": [
    {
      "id": "a",
      "text": "Group work packages into logical Transition Architectures based on business value, dependencies, and risk mitigation.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Execute all 12 work packages simultaneously in a single weekend deployment.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Discard work packages and continue running legacy mainframe indefinitely.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Delegate transition planning entirely to external contractors without EA oversight.",
      "isCorrect": false
    }
  ],
  "explanation": "Phase E formulates initial transition architectures to deliver incremental business value while managing risks.",
  "reference": "TOGAF Standard v10, Phase E"
},
{
  "id": "togaf-046",
  "type": "scenario",
  "domain": "governance",
  "difficulty": "expert",
  "points": 5,
  "scenario": "In Phase F Migration Planning, executive management requests a detailed cost-benefit analysis and risk-adjusted implementation roadmap before funding authorization.",
  "question": "Which key artifact is finalized in Phase F to secure implementation budget?",
  "options": [
    {
      "id": "a",
      "text": "Implementation and Migration Plan detailing transition roadmaps, risk matrix, and cost-benefit assessments.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Preliminary Architecture Vision.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Software source code repository list.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Vendor SLA contract proposal.",
      "isCorrect": false
    }
  ],
  "explanation": "Phase F finalizes the Implementation and Migration Plan with business leadership approval.",
  "reference": "TOGAF Standard v10, Phase F"
},
{
  "id": "togaf-047",
  "type": "scenario",
  "domain": "governance",
  "difficulty": "expert",
  "points": 5,
  "scenario": "During Phase G Implementation Governance, a dev team requests a deviation from enterprise security standards to meet a critical launch deadline.",
  "question": "How should the Architecture Board govern this dispensation request?",
  "options": [
    {
      "id": "a",
      "text": "Review request against architecture compliance criteria and grant a temporary dispensation with mandatory remediation deadline.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Permanently abolish security standards for all project teams.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Ignore the request and allow non-compliant code into production.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Cancel the project immediately without technical evaluation.",
      "isCorrect": false
    }
  ],
  "explanation": "Architecture Governance manages compliance through formal reviews, dispensation processes, and remediation tracking.",
  "reference": "TOGAF Standard v10, Phase G"
},
{
  "id": "togaf-048",
  "type": "scenario",
  "domain": "capability",
  "difficulty": "expert",
  "points": 5,
  "scenario": "In Phase H Architecture Change Management, a major surge in AI capability requirements disrupts the existing enterprise architecture landscape.",
  "question": "What criterion determines whether to trigger a new ADM cycle versus a minor maintenance update?",
  "options": [
    {
      "id": "a",
      "text": "If changes alter the fundamental Architecture Vision or strategic business goals, trigger a new ADM cycle.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Never trigger a new ADM cycle regardless of business changes.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Trigger a full ADM cycle for minor bug fixes in software applications.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Outsource architecture change decisions to external vendors.",
      "isCorrect": false
    }
  ],
  "explanation": "Phase H evaluates change drivers: minor changes are managed within maintenance, strategic changes require a new ADM cycle.",
  "reference": "TOGAF Standard v10, Phase H"
}
];

export const togafQuestions = normalizeQuestions(rawTogafQuestions);
