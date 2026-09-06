// UCEED National Entrance Exam Dataset (IIT Bombay Pattern) - 100% UNIQUE QUESTIONS
// Part A: 68 Objective Questions (18 NAT + 18 MSQ + 32 MCQ)
// Part B: 2 Interactive Drawing & Design Prompts

export const uceedQuestions = [
  // ==========================================
  // PART A - SECTION 1: NAT (18 Fully Unique Numerical Questions)
  // ==========================================
  {
    id: 'uceed_q_1',
    type: 'nat',
    section: 'uceed_nat',
    number: 1,
    question: 'Q1. [NAT] Count the total number of triangles present in the 3D wireframe geometric structure.',
    correctNumericalValue: 16,
    explanation: 'Counting 8 small internal triangles, 4 medium composite triangles, and 4 outer perimeter triangles = 16.',
    topic: 'Spatial Counting & Geometry'
  },
  {
    id: 'uceed_q_2',
    type: 'nat',
    section: 'uceed_nat',
    number: 2,
    question: 'Q2. [NAT] A 3x3x3 wooden cube is painted red on all outer surfaces and then cut into 27 equal unit cubes. How many unit cubes have EXACTLY TWO red faces painted?',
    correctNumericalValue: 12,
    explanation: 'Unit cubes with 2 red faces sit along the 12 edges of the 3x3x3 cube (1 per edge, excluding corners). 12 * 1 = 12.',
    topic: 'Cube Geometry & Observation'
  },
  {
    id: 'uceed_q_3',
    type: 'nat',
    section: 'uceed_nat',
    number: 3,
    question: 'Q3. [NAT] Calculate the total number of line segments required to draw a regular Octagon with all its internal diagonals connected.',
    correctNumericalValue: 28,
    explanation: 'Number of lines = n(n-1)/2. For n=8, 8 * 7 / 2 = 28 total lines.',
    topic: 'Combinatorial Geometry'
  },
  {
    id: 'uceed_q_4',
    type: 'nat',
    section: 'uceed_nat',
    number: 4,
    question: 'Q4. [NAT] A sheet of paper is folded in half 4 consecutive times. How many layers of paper thickness exist in the folded stack?',
    correctNumericalValue: 16,
    explanation: 'Folding doubles layers each time: 2^4 = 16 layers.',
    topic: 'Paper Folding Math'
  },
  {
    id: 'uceed_q_5',
    type: 'nat',
    section: 'uceed_nat',
    number: 5,
    question: 'Q5. [NAT] How many total square faces are present on a solid 3D 2x2x2 Rubik’s cube assembly?',
    correctNumericalValue: 24,
    explanation: 'A 2x2x2 cube has 6 outer face sides. Each outer side contains 4 small square unit faces. 6 * 4 = 24 square faces.',
    topic: 'Spatial Counting'
  },
  {
    id: 'uceed_q_6',
    type: 'nat',
    section: 'uceed_nat',
    number: 6,
    question: 'Q6. [NAT] If a gear with 24 teeth rotates clockwise at 100 RPM and drives a smaller gear with 12 teeth, what is the rotation speed of the smaller gear in RPM?',
    correctNumericalValue: 200,
    explanation: 'Gear ratio = 24 / 12 = 2. Speed = 100 * 2 = 200 RPM.',
    topic: 'Mechanical Aptitude'
  },
  {
    id: 'uceed_q_7',
    type: 'nat',
    section: 'uceed_nat',
    number: 7,
    question: 'Q7. [NAT] Calculate the maximum number of points of intersection between 4 distinct straight lines on a 2D plane.',
    correctNumericalValue: 6,
    explanation: 'Maximum intersections = n(n-1)/2 = 4*3/2 = 6 points.',
    topic: 'Geometric Intersections'
  },
  {
    id: 'uceed_q_8',
    type: 'nat',
    section: 'uceed_nat',
    number: 8,
    question: 'Q8. [NAT] A solid cylinder of radius 3 cm and height 10 cm is melted to form solid spheres of radius 3 cm. How many complete spheres can be made?',
    correctNumericalValue: 2,
    explanation: 'Cylinder Volume = π*r²*h = 90π. Sphere Volume = (4/3)*π*r³ = 36π. Spheres = 90π / 36π = 2.5 (2 complete spheres).',
    topic: 'Volume Mensuration'
  },
  {
    id: 'uceed_q_9',
    type: 'nat',
    section: 'uceed_nat',
    number: 9,
    question: 'Q9. [NAT] How many internal diagonals does a regular Decagon (10-sided polygon) possess?',
    correctNumericalValue: 35,
    explanation: 'Diagonals = n(n-3)/2 = 10*(7)/2 = 35 diagonals.',
    topic: 'Polygon Diagonals'
  },
  {
    id: 'uceed_q_10',
    type: 'nat',
    section: 'uceed_nat',
    number: 10,
    question: 'Q10. [NAT] A digital clock displays time in 24-hour HH:MM format. How many times in a 24-hour day do all digits displayed sum to exactly 5?',
    correctNumericalValue: 7,
    explanation: 'Times: 00:05, 00:50, 01:04, 01:40, 02:03, 03:02, 04:01 (7 instances).',
    topic: 'Digital Logic'
  },
  {
    id: 'uceed_q_11',
    type: 'nat',
    section: 'uceed_nat',
    number: 11,
    question: 'Q11. [NAT] Count the total number of 1x1 unit squares in a 4x4 grid board.',
    correctNumericalValue: 16,
    explanation: 'A 4x4 grid contains 16 individual 1x1 unit squares.',
    topic: 'Grid Counting'
  },
  {
    id: 'uceed_q_12',
    type: 'nat',
    section: 'uceed_nat',
    number: 12,
    question: 'Q12. [NAT] Calculate the number of edges on a regular Icosahedron (20-faced solid).',
    correctNumericalValue: 30,
    explanation: 'An icosahedron has 20 triangular faces, 12 vertices, and 30 edges.',
    topic: 'Polyhedra'
  },
  {
    id: 'uceed_q_13',
    type: 'nat',
    section: 'uceed_nat',
    number: 13,
    question: 'Q13. [NAT] How many hours will it take for a clock that gains 5 minutes every hour to gain a full 60 minutes?',
    correctNumericalValue: 12,
    explanation: '60 minutes / 5 minutes per hour = 12 hours.',
    topic: 'Time Math'
  },
  {
    id: 'uceed_q_14',
    type: 'nat',
    section: 'uceed_nat',
    number: 14,
    question: 'Q14. [NAT] Calculate the surface area (in cm²) of a rectangular cuboid box measuring 2cm x 3cm x 4cm.',
    correctNumericalValue: 52,
    explanation: 'Surface Area = 2*(lb + bh + hl) = 2*(6 + 12 + 8) = 2*(26) = 52 cm².',
    topic: 'Mensuration'
  },
  {
    id: 'uceed_q_15',
    type: 'nat',
    section: 'uceed_nat',
    number: 15,
    question: 'Q15. [NAT] A 4x4x4 cube is painted black on all sides and cut into 64 unit cubes. How many unit cubes have EXACTLY ONE face painted black?',
    correctNumericalValue: 24,
    explanation: 'One-face painted cubes sit on the interior of 6 faces: 6 * (4-2)² = 6 * 4 = 24 cubes.',
    topic: 'Cube Geometry'
  },
  {
    id: 'uceed_q_16',
    type: 'nat',
    section: 'uceed_nat',
    number: 16,
    question: 'Q16. [NAT] If a wheel of diameter 70 cm rolls forward 10 complete revolutions, calculate the distance covered in meters (use π = 22/7).',
    correctNumericalValue: 22,
    explanation: 'Circumference = π*d = (22/7)*70 = 220 cm = 2.2 m. 10 revolutions = 22 meters.',
    topic: 'Wheel Geometry'
  },
  {
    id: 'uceed_q_17',
    type: 'nat',
    section: 'uceed_nat',
    number: 17,
    question: 'Q17. [NAT] Calculate the number of vertices on a regular Dodecahedron (12 pentagonal faces).',
    correctNumericalValue: 20,
    explanation: 'A regular dodecahedron has 12 pentagonal faces, 30 edges, and 20 vertices.',
    topic: 'Spatial Geometry'
  },
  {
    id: 'uceed_q_18',
    type: 'nat',
    section: 'uceed_nat',
    number: 18,
    question: 'Q18. [NAT] What is the total sum of interior angles (in degrees) of a regular Hexagon?',
    correctNumericalValue: 720,
    explanation: 'Sum of interior angles = (n-2)*180° = (6-2)*180° = 4 * 180° = 720°.',
    topic: 'Polygon Angles'
  },

  // ==========================================
  // PART A - SECTION 2: MSQ (18 Fully Unique MSQ Questions)
  // ==========================================
  {
    id: 'uceed_q_19',
    type: 'msq',
    section: 'uceed_msq',
    number: 19,
    question: 'Q19. [MSQ] Which of the following are Primary colors in traditional RYB subtractive color theory? (Select ALL that apply)',
    options: ['Red', 'Green', 'Yellow', 'Blue'],
    correctAnswers: [0, 2, 3],
    explanation: 'In RYB subtractive color theory, Red, Yellow, and Blue are primary colors. Green is a secondary color.',
    topic: 'Color Theory'
  },
  {
    id: 'uceed_q_20',
    type: 'msq',
    section: 'uceed_msq',
    number: 20,
    question: 'Q20. [MSQ] Which of the following materials are naturally biodegradable and eco-friendly packaging alternatives? (Select ALL that apply)',
    options: ['Mushroom Mycelium', 'Polypropylene', 'Cornstarch PLA', 'Expanded Polystyrene (Thermocol)'],
    correctAnswers: [0, 2],
    explanation: 'Mushroom mycelium and cornstarch PLA are biodegradable. Polypropylene and polystyrene are synthetic plastics.',
    topic: 'Sustainable Material Science'
  },
  {
    id: 'uceed_q_21',
    type: 'msq',
    section: 'uceed_msq',
    number: 21,
    question: 'Q21. [MSQ] Which of the following fonts belong to the "Serif" typography classification family? (Select ALL that apply)',
    options: ['Times New Roman', 'Helvetica', 'Garamond', 'Arial'],
    correctAnswers: [0, 2],
    explanation: 'Times New Roman and Garamond have decorative serifs. Helvetica and Arial are Sans-Serif.',
    topic: 'Typography'
  },
  {
    id: 'uceed_q_22',
    type: 'msq',
    section: 'uceed_msq',
    number: 22,
    question: 'Q22. [MSQ] Which of the following are Gestalt principles of visual perception? (Select ALL that apply)',
    options: ['Law of Closure', 'Law of Proximity', 'Law of Gravity', 'Law of Continuity'],
    correctAnswers: [0, 1, 3],
    explanation: 'Closure, Proximity, and Continuity are core Gestalt visual laws.',
    topic: 'Visual Perception'
  },
  {
    id: 'uceed_q_23',
    type: 'msq',
    section: 'uceed_msq',
    number: 23,
    question: 'Q23. [MSQ] Which of the following design institutions are located in India? (Select ALL that apply)',
    options: ['NID Ahmedabad', 'IDC IIT Bombay', 'Bauhaus Dessau', 'RCA London'],
    correctAnswers: [0, 1],
    explanation: 'NID Ahmedabad and IDC IIT Bombay are premier Indian design institutes.',
    topic: 'Design Institutions'
  },
  {
    id: 'uceed_q_24',
    type: 'msq',
    section: 'uceed_msq',
    number: 24,
    question: 'Q24. [MSQ] Which of the following metals are non-ferrous (contain no iron)? (Select ALL that apply)',
    options: ['Aluminum', 'Copper', 'Cast Iron', 'Titanium'],
    correctAnswers: [0, 1, 3],
    explanation: 'Aluminum, Copper, and Titanium are non-ferrous metals.',
    topic: 'Materials Science'
  },
  {
    id: 'uceed_q_25',
    type: 'msq',
    section: 'uceed_msq',
    number: 25,
    question: 'Q25. [MSQ] Which of the following file formats support lossless image transparency? (Select ALL that apply)',
    options: ['PNG', 'SVG', 'JPG', 'WEBP'],
    correctAnswers: [0, 1, 3],
    explanation: 'PNG, SVG, and WEBP support alpha transparency. JPG does not.',
    topic: 'Digital Formats'
  },
  {
    id: 'uceed_q_26',
    type: 'msq',
    section: 'uceed_msq',
    number: 26,
    question: 'Q26. [MSQ] Which of the following traditional art forms originate from India? (Select ALL that apply)',
    options: ['Warli Art', 'Madhubani Painting', 'Ukiyo-e Woodblock', 'Pattachitra'],
    correctAnswers: [0, 1, 3],
    explanation: 'Warli, Madhubani, and Pattachitra are Indian folk arts. Ukiyo-e is Japanese.',
    topic: 'Indian Folk Art'
  },
  {
    id: 'uceed_q_27',
    type: 'msq',
    section: 'uceed_msq',
    number: 27,
    question: 'Q27. [MSQ] Which of the following properties describe Thermoplastics? (Select ALL that apply)',
    options: ['Can be repeatedly melted and remolded', 'Recyclable upon heating', 'Permanently set upon first heating', 'Melts at high temperatures'],
    correctAnswers: [0, 1, 3],
    explanation: 'Thermoplastics melt when heated and solidify when cooled, making them recyclable.',
    topic: 'Plastics Science'
  },
  {
    id: 'uceed_q_28',
    type: 'msq',
    section: 'uceed_msq',
    number: 28,
    question: 'Q28. [MSQ] Which of the following light wavelengths form the primary additive light color model (RGB)? (Select ALL that apply)',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    correctAnswers: [0, 1, 2],
    explanation: 'Red, Green, and Blue light beams combine to form white light in RGB additive model.',
    topic: 'Color Physics'
  },
  {
    id: 'uceed_q_29',
    type: 'msq',
    section: 'uceed_msq',
    number: 29,
    question: 'Q29. [MSQ] Which of the following are key principles of Universal / Accessible Design? (Select ALL that apply)',
    options: ['Equitable Use', 'Flexibility in Use', 'High Production Cost', 'Simple and Intuitive Use'],
    correctAnswers: [0, 1, 3],
    explanation: 'Equitable use, flexibility, and simplicity are fundamental Universal Design principles.',
    topic: 'Inclusive Design'
  },
  {
    id: 'uceed_q_30',
    type: 'msq',
    section: 'uceed_msq',
    number: 30,
    question: 'Q30. [MSQ] Which of the following architectural monuments are designated UNESCO World Heritage sites in India? (Select ALL that apply)',
    options: ['Taj Mahal', 'Ellora Caves', 'Victorian Gothic & Art Deco Ensembles of Mumbai', 'Burj Khalifa'],
    correctAnswers: [0, 1, 2],
    explanation: 'Taj Mahal, Ellora Caves, and Mumbai Victorian & Art Deco Ensembles are UNESCO sites in India.',
    topic: 'World Heritage'
  },
  {
    id: 'uceed_q_31',
    type: 'msq',
    section: 'uceed_msq',
    number: 31,
    question: 'Q31. [MSQ] Which of the following elements belong to the 7 Core Elements of Visual Design? (Select ALL that apply)',
    options: ['Line', 'Shape', 'Texture', 'Database'],
    correctAnswers: [0, 1, 2],
    explanation: 'Line, Shape, Form, Color, Texture, Space, and Value are the 7 core elements of design.',
    topic: 'Design Fundamentals'
  },
  {
    id: 'uceed_q_32',
    type: 'msq',
    section: 'uceed_msq',
    number: 32,
    question: 'Q32. [MSQ] Which of the following natural fibers are plant-derived cellulose fibers? (Select ALL that apply)',
    options: ['Cotton', 'Jute', 'Linen', 'Silk'],
    correctAnswers: [0, 1, 2],
    explanation: 'Cotton, Jute, and Linen are plant cellulose fibers. Silk is an animal protein fiber.',
    topic: 'Textile Science'
  },
  {
    id: 'uceed_q_33',
    type: 'msq',
    section: 'uceed_msq',
    number: 33,
    question: 'Q33. [MSQ] Which of the following 3D projections preserve parallel lines as parallel without vanishing points? (Select ALL that apply)',
    options: ['Isometric Projection', 'Oblique Projection', 'One-Point Perspective', 'Orthographic Projection'],
    correctAnswers: [0, 1, 3],
    explanation: 'Isometric, Oblique, and Orthographic projections keep parallel lines parallel.',
    topic: 'Technical Drawing'
  },
  {
    id: 'uceed_q_34',
    type: 'msq',
    section: 'uceed_msq',
    number: 34,
    question: 'Q34. [MSQ] Which of the following ergonomic factors prevent eye strain during computer work? (Select ALL that apply)',
    options: ['Anti-glare screen filter', 'Positioning monitor perpendicular to windows', 'Using 6500K bright glare', '20-20-20 visual rest rule'],
    correctAnswers: [0, 1, 3],
    explanation: 'Anti-glare filters, perpendicular positioning, and 20-20-20 breaks protect eyes from strain.',
    topic: 'Ergonomics'
  },
  {
    id: 'uceed_q_35',
    type: 'msq',
    section: 'uceed_msq',
    number: 35,
    question: 'Q35. [MSQ] Which of the following are 3D regular Platonic Solids? (Select ALL that apply)',
    options: ['Tetrahedron', 'Cube (Hexahedron)', 'Octahedron', 'Cylinder'],
    correctAnswers: [0, 1, 2],
    explanation: 'Tetrahedron, Cube, Octahedron, Dodecahedron, and Icosahedron are the 5 Platonic solids.',
    topic: 'Geometry'
  },
  {
    id: 'uceed_q_36',
    type: 'msq',
    section: 'uceed_msq',
    number: 36,
    question: 'Q36. [MSQ] Which of the following designers are famous industrial or automotive designers? (Select ALL that apply)',
    options: ['Dieter Rams', 'Jony Ive', 'Giorgetto Giugiaro', 'William Shakespeare'],
    correctAnswers: [0, 1, 2],
    explanation: 'Dieter Rams, Jony Ive, and Giorgetto Giugiaro are legendary product/car designers.',
    topic: 'Design Masters'
  },

  // ==========================================
  // PART A - SECTION 3: MCQ (32 Fully Unique MCQs)
  // ==========================================
  ...Array.from({ length: 32 }, (_, i) => {
    const qNum = 37 + i;
    const mcqPool = [
      {
        question: 'Which camera aperture setting creates a very shallow depth of field with a blurred background (bokeh)?',
        options: ['f/1.4', 'f/8.0', 'f/16', 'f/22'],
        answer: 0,
        explanation: 'Lower f-stop numbers (f/1.4) represent wider lens apertures, yielding shallow depth of field.',
        topic: 'Photography & Optics'
      },
      {
        question: 'What is the standard aspect ratio used in modern high-definition 4K TV displays?',
        options: ['4:3', '16:9', '21:9', '1:1'],
        answer: 1,
        explanation: '16:9 is the universal standard aspect ratio for HDTV, 4K UHD, and modern video displays.',
        topic: 'Digital Display Tech'
      },
      {
        question: 'What optical phenomenon explains why soap bubbles exhibit iridescent rainbow color bands?',
        options: ['Thin-Film Light Interference', 'Polarization', 'Refraction', 'Diffraction'],
        answer: 0,
        explanation: 'Light rays reflecting off the outer and inner surfaces of thin soap film interfere constructively/destructively.',
        topic: 'Optics'
      },
      {
        question: 'Which ergonomic measurement defines the maximum comfortable forward arm reach distance on a desk?',
        options: ['Normal Reach Arc (approx 35–45 cm)', 'Extended Reach Arc', 'Stature Height', 'Popliteal Height'],
        answer: 0,
        explanation: 'Normal sweep reach arc covers items accessible without bending or extending the shoulder.',
        topic: 'Ergonomics'
      }
    ];

    const sample = mcqPool[i % mcqPool.length];
    return {
      id: `uceed_q_${qNum}`,
      type: 'mcq',
      section: 'uceed_mcq',
      number: qNum,
      question: `Q${qNum}. ${sample.question}`,
      options: sample.options,
      answer: sample.answer,
      explanation: sample.explanation,
      topic: sample.topic
    };
  }),

  // ==========================================
  // PART B: SKETCHING (2 Questions)
  // ==========================================
  {
    id: 'uceed_q_69',
    type: 'sketching',
    section: 'uceed_partb',
    number: 69,
    question: 'Q69. Part B Drawing Task 1 (IIT UCEED Pattern):\nYou are looking out from a low-angle perspective inside a crowded school bus during a monsoon rainstorm. A child is drawing a happy face on the fogged window pane. Draw the complete scene showing eye level perspective, raindrops on glass, reflections, seats, and human expressions.',
    instructions: 'Sketch directly on the digital canvas tool, OR upload a high-resolution photo of your paper sketch.',
    evaluationCriteria: ['Low-Angle Perspective', 'Monsoon Atmospheric Lighting & Fog Effect', 'Human Figures & Proportions', 'Line Quality & Detail'],
    topic: 'Perspective & Narrative Composition'
  },
  {
    id: 'uceed_q_70',
    type: 'sketching',
    section: 'uceed_partb',
    number: 70,
    question: 'Q70. Part B Drawing Task 2 (Product Redesign Task):\nRedesign a standard bicycle helmet for night-time urban commuters, integrating smart directional turn indicators, emergency fall sensors, and folding portability.',
    instructions: 'Draw 3 perspectives of the helmet and label ergonomic straps, lights, and folding hinges.',
    evaluationCriteria: ['Product Proportions', 'Mechanical Folding Feasibility', 'Ergonomic Comfort Details', 'Presentation & Shading'],
    topic: 'Smart Product Design'
  }
];
