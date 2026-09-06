export const EXAMS_METADATA = {
  seed: {
    id: 'seed',
    title: 'Symbiosis Entrance Exam for Design (SEED)',
    shortTitle: 'SEED Suite',
    subtitle: 'Symbiosis Institute of Design (SID) Official Pattern Mock Assessment',
    badgeText: '120+ Questions • 150 Mins',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    badgeClass: 'badge-purple',
    durationMinutes: 150,
    totalQuestions: 120,
    maxMarks: 120,
    markingScheme: { correct: 1, incorrect: 0, penalty: 'No Negative Marking' },
    description: 'Covers Visual Observation, General Design Awareness, Creative Thinking, Logical Reasoning, Spatial Ability, & Craft Knowledge.',
    sections: [
      { id: 'seed_mcq', name: 'Design Observation & MCQs', questionsCount: 50 },
      { id: 'seed_match', name: 'Match the Columns (Craft/Color/Designers)', questionsCount: 20 },
      { id: 'seed_blanks', name: 'Fill-in-the-Blanks (Design Terminology)', questionsCount: 20 },
      { id: 'seed_image', name: 'Visual & Image-Based Analysis', questionsCount: 15 },
      { id: 'seed_comprehension', name: 'Design Case Studies & Passages', questionsCount: 15 }
    ],
    topics: ['Color Theory', 'Typography', 'Ergonomics', 'Indian Handicrafts', 'Perspective & Shadow', 'Materiality', 'Logos & Branding']
  },
  mitid: {
    id: 'mitid',
    title: 'MITID Design Aptitude Test (DAT)',
    shortTitle: 'MITID DAT',
    subtitle: 'MIT Institute of Design Aptitude & Practical Design Assessment',
    badgeText: 'Obj + Subj + Sketching Canvas',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    badgeClass: 'badge-amber',
    durationMinutes: 180,
    totalQuestions: 40,
    maxMarks: 100,
    markingScheme: { correct: 'Varies', incorrect: 0, penalty: 'Sectional Rubric Evaluation' },
    description: 'Tests visual spatial perception, problem solving, creative storyboarding, design justification, and hand/digital sketching ability.',
    sections: [
      { id: 'mitid_obj', name: 'Section A: Objective Aptitude & Visual Logic', questionsCount: 30 },
      { id: 'mitid_subj', name: 'Section B: Subjective Design Scenarios & Writing', questionsCount: 6 },
      { id: 'mitid_sketch', name: 'Section C: Interactive Canvas Drawing & Sketching', questionsCount: 4 }
    ],
    topics: ['Perspective Drawing', 'Object Metamorphosis', 'Ergonomic Redesign', 'Storyboarding', 'Visual Hierarchy', 'Spatial Aptitude']
  },
  uceed: {
    id: 'uceed',
    title: 'IIT UCEED (Undergraduate Common Entrance Exam for Design)',
    shortTitle: 'IIT UCEED National',
    subtitle: 'IIT Bombay National Level Entrance Exam (Part A NAT/MSQ/MCQ + Part B Sketching)',
    badgeText: 'NAT + MSQ + MCQ + Part B Sketch',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    badgeClass: 'badge-rose',
    durationMinutes: 180,
    totalQuestions: 70,
    maxMarks: 300,
    markingScheme: { correct: 'NAT: 4, MSQ: 4, MCQ: 3', incorrect: -1, penalty: 'Negative Marking on MSQ & MCQ' },
    description: 'The benchmark national design test for IIT Bombay, IIT Delhi, IIT Guwahati, IIT Hyderabad, and IIITDM Jabalpur.',
    sections: [
      { id: 'uceed_nat', name: 'Part A - Sec 1: NAT (Numerical Answer Type)', questionsCount: 18 },
      { id: 'uceed_msq', name: 'Part A - Sec 2: MSQ (Multiple Select Questions)', questionsCount: 18 },
      { id: 'uceed_mcq', name: 'Part A - Sec 3: MCQ (Single Select MCQs)', questionsCount: 32 },
      { id: 'uceed_partb', name: 'Part B: Interactive Design & Drawing Canvas', questionsCount: 2 }
    ],
    topics: ['Visualization & Spatial Ability', 'Observation & Design Sensitivity', 'Environmental & Social Awareness', 'Analytical & Reasoning', 'Language & Creativity']
  },
  mah_bdes: {
    id: 'mah_bdes',
    title: 'MAH-B.Design CET (State Common Entrance Test)',
    shortTitle: 'MAH-B.Design CET',
    subtitle: 'Government of Maharashtra State Entrance Exam for Bachelor of Design',
    badgeText: '100 Questions • 120 Mins',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    badgeClass: 'badge-cyan',
    durationMinutes: 120,
    totalQuestions: 100,
    maxMarks: 100,
    markingScheme: { correct: 1, incorrect: 0, penalty: 'No Negative Marking' },
    description: 'Official entrance test for admission to B.Design programs in Maharashtra government and private colleges.',
    sections: [
      { id: 'mah_reasoning', name: 'Section 1: Mental Ability & Logical Reasoning', questionsCount: 30 },
      { id: 'mah_gk', name: 'Section 2: Design Sensitivity & General Knowledge', questionsCount: 30 },
      { id: 'mah_spatial', name: 'Section 3: Color, Material & Visual Spatial Ability', questionsCount: 40 }
    ],
    topics: ['Mental Ability', 'Maharashtra Art Heritage', 'Color Psychology', 'Material Texture Identification', '2D/3D Perception', 'Pattern Folding']
  },
  acet: {
    id: 'acet',
    title: 'Architectural & Design ACET Entrance Exam',
    shortTitle: 'ACET 200-Q Exam',
    subtitle: '5-Section National Aptitude & Science Foundation Test',
    badgeText: '200 Questions • 180 Mins • 5 Subjects',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    badgeClass: 'badge-emerald',
    durationMinutes: 180,
    totalQuestions: 200,
    maxMarks: 200,
    markingScheme: { correct: 1, incorrect: -0.25, penalty: '0.25 Negative Marks per Wrong Answer' },
    description: 'Standard 200-question test split equally across 5 sections: General English, Reasoning, Physics, Chemistry, and Mathematics.',
    sections: [
      { id: 'english', name: 'Section 1: General English', questionsCount: 40 },
      { id: 'reasoning', name: 'Section 2: Aptitude, Analytical & Logical Reasoning', questionsCount: 40 },
      { id: 'physics', name: 'Section 3: Physics', questionsCount: 40 },
      { id: 'chemistry', name: 'Section 4: Chemistry', questionsCount: 40 },
      { id: 'maths', name: 'Section 5: Mathematics', questionsCount: 40 }
    ],
    topics: ['Vocabulary & Reading', 'Spatial Reasoning & Coding', 'Optics & Mechanics', 'Polymers & Color Chemistry', 'Geometry & Trigonometry']
  }
};
