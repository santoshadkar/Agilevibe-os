// MITID DAT Exam Dataset - 100% UNIQUE QUESTIONS
// Section A: 30 Objective MCQs
// Section B: 6 Subjective Design Scenarios
// Section C: 4 Interactive Sketching Prompts

export const mitidQuestions = [
  // ==========================================
  // SECTION A: OBJECTIVE MCQS (30 Fully Unique Questions)
  // ==========================================
  {
    id: 'mitid_q_1',
    type: 'mcq',
    section: 'mitid_obj',
    number: 1,
    question: 'Q1. Which material possesses the highest natural tactile warmth and thermal insulation property?',
    options: ['Aluminum', 'Teak Wood', 'Cast Iron', 'Tempered Glass'],
    answer: 1,
    explanation: 'Wood has low thermal conductivity, giving it a natural warm feel to human touch compared to metals or glass.',
    topic: 'Material Culture'
  },
  {
    id: 'mitid_q_2',
    type: 'mcq',
    section: 'mitid_obj',
    number: 2,
    question: 'Q2. When designing a product for children aged 3 to 5, which safety feature is MOST critical under ISO standards?',
    options: ['Sharp geometric corners', 'Small detachable parts under 31.7mm', 'Non-toxic lead-free rounded finishes', 'Heavy iron core weights'],
    answer: 2,
    explanation: 'Child safety standards require non-toxic finishes and elimination of choking hazards or sharp edges.',
    topic: 'Product Safety & Ergonomics'
  },
  {
    id: 'mitid_q_3',
    type: 'mcq',
    section: 'mitid_obj',
    number: 3,
    question: 'Q3. What is the industrial term for designing products with an intentionally limited useful life so they become obsolete?',
    options: ['Sustainable Design', 'Planned Obsolescence', 'Universal Design', 'Modular Design'],
    answer: 1,
    explanation: 'Planned obsolescence is an industrial strategy where products are built to become outdated after a set period.',
    topic: 'Design Ethics & Economy'
  },
  {
    id: 'mitid_q_4',
    type: 'mcq',
    section: 'mitid_obj',
    number: 4,
    question: 'Q4. Which visual element creates a sense of instability or dynamic action when used dominant in a composition?',
    options: ['Horizontal lines', 'Diagonal lines', 'Vertical columns', 'Concentric circles'],
    answer: 1,
    explanation: 'Diagonal lines create visual tension, movement, and a sense of dynamic action.',
    topic: 'Visual Composition'
  },
  {
    id: 'mitid_q_5',
    type: 'mcq',
    section: 'mitid_obj',
    number: 5,
    question: 'Q5. In graphic design, what is the term for a single word or short line of text left isolated at the bottom of a column?',
    options: ['Orphan', 'Widow', 'Kerning', 'River'],
    answer: 1,
    explanation: 'A Widow is a single word or short phrase isolated at the end of a paragraph or column.',
    topic: 'Typography'
  },
  {
    id: 'mitid_q_6',
    type: 'mcq',
    section: 'mitid_obj',
    number: 6,
    question: 'Q6. What design methodology focuses on understanding user emotions, context, and latent unexpressed needs through field empathy?',
    options: ['Design Thinking / Human-Centered Design', 'Assembly Line Production', 'Fast Prototyping', 'Cost Reduction Engineering'],
    answer: 0,
    explanation: 'Design Thinking prioritizes deep human empathy to discover real user needs.',
    topic: 'Design Methodology'
  },
  {
    id: 'mitid_q_7',
    type: 'mcq',
    section: 'mitid_obj',
    number: 7,
    question: 'Q7. Which metal processing technique shapes heated metal by applying compressive forces using a hammer or die?',
    options: ['Forging', 'Die Casting', 'Electroplating', 'Etching'],
    answer: 0,
    explanation: 'Forging deforms metal under localized compressive forces, producing strong structural grain flow.',
    topic: 'Material Processes'
  },
  {
    id: 'mitid_q,8',
    type: 'mcq',
    section: 'mitid_obj',
    number: 8,
    question: 'Q8. What term describes designing a product so components can be easily disassembled for recycling or repair?',
    options: ['Design for Disassembly (DfD)', 'Monolithic Molding', 'Permanent Gluing', 'Single-body Casting'],
    answer: 0,
    explanation: 'Design for Disassembly ensures products can be cleanly taken apart at end-of-life for recycling.',
    topic: 'Sustainable Design'
  },
  {
    id: 'mitid_q_9',
    type: 'mcq',
    section: 'mitid_obj',
    number: 9,
    question: 'Q9. What visual effect occurs when complementary colors of equal intensity are placed side-by-side causing edges to vibrate?',
    options: ['Simultaneous Contrast / Vibrating Boundaries', 'Monochromatic Harmony', 'Color Blindness', 'Desaturation'],
    answer: 0,
    explanation: 'Vibrating boundaries occur when high-contrast complementary colors clash along adjacent edges.',
    topic: 'Color Perception'
  },
  {
    id: 'mitid_q_10',
    type: 'mcq',
    section: 'mitid_obj',
    number: 10,
    question: 'Q10. In packaging, what is the primary benefit of Corrugated Fiberboard (cardboard)?',
    options: ['Fluted inner layer providing high strength-to-weight ratio and cushioning', 'Waterproof glass shine', 'Metal conduction', 'Heavy solid density'],
    answer: 0,
    explanation: 'Corrugated cardboard fluting traps air pockets, offering superior impact protection at low weight.',
    topic: 'Packaging Materials'
  },
  {
    id: 'mitid_q_11',
    type: 'mcq',
    section: 'mitid_obj',
    number: 11,
    question: 'Q11. What is the standard anthropometric elbow height reference when designing a standing work counter?',
    options: ['At or 5–10 cm below standing elbow height', 'At eye level', 'At knee height', '40 cm above head'],
    answer: 0,
    explanation: 'Standing work surfaces should be positioned 5–10 cm below standing elbow height for comfortable forearm support.',
    topic: 'Ergonomics'
  },
  {
    id: 'mitid_q_12',
    type: 'mcq',
    section: 'mitid_obj',
    number: 12,
    question: 'Q12. Which famous design movement led by Ettore Sottsass in 1980s Milan featured vibrant colors, asymmetrical shapes, and plastic laminates?',
    options: ['Memphis Group', 'Bauhaus', 'De Stijl', 'Shaker Design'],
    answer: 0,
    explanation: 'Memphis Group challenged modernist minimalism with playful colors, kitsch patterns, and pop geometry.',
    topic: 'Design History'
  },
  {
    id: 'mitid_q_13',
    type: 'mcq',
    section: 'mitid_obj',
    number: 13,
    question: 'Q13. What property enables clay to be molded into shapes without cracking and retain form when dried?',
    options: ['Plasticity', 'Brittle Tensile Strength', 'Conductivity', 'Elasticity'],
    answer: 0,
    explanation: 'Plasticity allows wet clay to yield under pressure and hold new sculpted forms.',
    topic: 'Ceramic & Craft Materials'
  },
  {
    id: 'mitid_q_14',
    type: 'mcq',
    section: 'mitid_obj',
    number: 14,
    question: 'Q14. What term describes a physical prototype created solely to test mechanical functionality rather than visual appearance?',
    options: ['Functional / Proof-of-Concept Prototype', 'Styling Model', 'Production Model', 'Packaging Display'],
    answer: 0,
    explanation: 'Proof-of-concept prototypes test mechanical engineering mechanisms regardless of cosmetic finish.',
    topic: 'Prototyping'
  },
  {
    id: 'mitid_q_15',
    type: 'mcq',
    section: 'mitid_obj',
    number: 15,
    question: 'Q15. In graphic design, what does "Grid System" provide?',
    options: ['Structural alignment framework for text and visual content', 'Color palette generator', 'Font size calculator', '3D printing code'],
    answer: 0,
    explanation: 'Grid systems establish consistent columns, margins, and visual rhythm across layouts.',
    topic: 'Layout Design'
  },
  {
    id: 'mitid_q_16',
    type: 'mcq',
    section: 'mitid_obj',
    number: 16,
    question: 'Q16. What is the traditional craft technique of embedding ivory, brass, or wood pieces into wood surfaces called?',
    options: ['Inlay Work (Tarkashi / Marquetry)', 'Etching', 'Screen Printing', 'Knitting'],
    answer: 0,
    explanation: 'Inlay work carves recesses into wood surfaces to insert decorative contrasting metal wire or ivory.',
    topic: 'Indian Craft'
  },
  {
    id: 'seed_q_17',
    type: 'mcq',
    section: 'mitid_obj',
    number: 17,
    question: 'Q17. Which thermoplastic resin is most widely used for transparent water bottles and food containers?',
    options: ['Polyethylene Terephthalate (PET)', 'Bakelite', 'Polyurethane', 'Teflon'],
    answer: 0,
    explanation: 'PET plastic is lightweight, clear, strong, and recyclable, widely used for beverage bottles.',
    topic: 'Materials Science'
  },
  {
    id: 'mitid_q_18',
    type: 'mcq',
    section: 'mitid_obj',
    number: 18,
    question: 'Q18. In lighting design, what unit measures the total light output emitted by a light source?',
    options: ['Lumen', 'Lux', 'Volt', 'Ampere'],
    answer: 0,
    explanation: 'Lumen (lm) measures total luminous flux or total light emitted by a lamp.',
    topic: 'Lighting Physics'
  },
  {
    id: 'mitid_q_19',
    type: 'mcq',
    section: 'mitid_obj',
    number: 19,
    question: 'Q19. What visual design rule suggests avoiding placing main horizon lines exactly in the middle of a composition?',
    options: ['Off-Center Horizon Rule', 'Centered Horizon Rule', 'Symmetrical Split Rule', 'Square Grid Rule'],
    answer: 0,
    explanation: 'Placing horizon lines off-center (upper or lower third) creates dramatic depth and visual tension.',
    topic: 'Composition'
  },
  {
    id: 'mitid_q_20',
    type: 'mcq',
    section: 'mitid_obj',
    number: 20,
    question: 'Q20. What is the primary characteristic of "Brazing" joining process compared to Welding?',
    options: ['Brazing joins metals by melting a filler metal without melting the base metals', 'Brazing melts base metals completely', 'Brazing uses glue', 'Brazing uses wood'],
    answer: 0,
    explanation: 'Brazing melts a filler metal above 450°C which flows into base metal joint gaps via capillary action.',
    topic: 'Manufacturing'
  },
  {
    id: 'mitid_q_21',
    type: 'mcq',
    section: 'mitid_obj',
    number: 21,
    question: 'Q21. What human factor study measures human body dimensions, weight, and reach capabilities?',
    options: ['Anthropometry', 'Chronobiology', 'Geology', 'Astronomy'],
    answer: 0,
    explanation: 'Anthropometry deals with physical measurements of the human body for ergonomic sizing.',
    topic: 'Ergonomics'
  },
  {
    id: 'mitid_q_22',
    type: 'mcq',
    section: 'mitid_obj',
    number: 22,
    question: 'Q22. Which famous Indian architect designed the IIM Ahmedabad campus using exposed red brick arches and geometric cutouts?',
    options: ['Louis Kahn', 'B.V. Doshi', 'Charles Correa', 'Laurie Baker'],
    answer: 0,
    explanation: 'American architect Louis Kahn designed the iconic IIM Ahmedabad brick campus.',
    topic: 'Architecture History'
  },
  {
    id: 'mitid_q_23',
    type: 'mcq',
    section: 'mitid_obj',
    number: 23,
    question: 'Q23. What term describes a prototype that looks identical to the final product but lacks internal working electronics?',
    options: ['Looks-Like / Appearance Model', 'Functional Rig', 'Schematic', 'Breadboard'],
    answer: 0,
    explanation: 'Appearance models showcase exact cosmetic colors, materials, and form factors for user feedback.',
    topic: 'Prototyping'
  },
  {
    id: 'mitid_q_24',
    type: 'mcq',
    section: 'mitid_obj',
    number: 24,
    question: 'Q24. In color theory, what is "Chroma"?',
    options: ['Purity or intensity of a color relative to gray', 'Lightness value', 'Font weight', 'Opacity percentage'],
    answer: 0,
    explanation: 'Chroma defines color saturation and brilliance relative to neutral gray.',
    topic: 'Color Theory'
  },
  {
    id: 'mitid_q_25',
    type: 'mcq',
    section: 'mitid_obj',
    number: 25,
    question: 'Q25. What is the process of rapidly creating rough 3D paper/cardboard mockups to test scale during ideation?',
    options: ['Low-Fi Foam / Paper Mockup Modeling', '3D Metal Sintering', 'Injection Molding', 'Blow Molding'],
    answer: 0,
    explanation: 'Rough paper mockups help designers evaluate 3D volume, scale, and hand feel in minutes.',
    topic: 'Design Process'
  },
  {
    id: 'mitid_q_26',
    type: 'mcq',
    section: 'mitid_obj',
    number: 26,
    question: 'Q26. Which type of plastic can be repeatedly remelted and reshaped upon heating?',
    options: ['Thermoplastic', 'Thermosetting Plastic', 'Bakelite', 'Epoxy Resin'],
    answer: 0,
    explanation: 'Thermoplastics (like ABS, PET, Polypropylene) melt upon heating and solidify when cooled, making them recyclable.',
    topic: 'Plastics Science'
  },
  {
    id: 'mitid_q_27',
    type: 'mcq',
    section: 'mitid_obj',
    number: 27,
    question: 'Q27. In environmental design, what is "Wayfinding"?',
    options: ['Information systems that guide people through physical environments and complex buildings', 'Map drawing software', 'Bicycle GPS', 'Weather forecasting'],
    answer: 0,
    explanation: 'Wayfinding encompasses signage, architecture, and visual cues that orient users in spatial environments.',
    topic: 'Environmental Graphic Design'
  },
  {
    id: 'mitid_q_28',
    type: 'mcq',
    section: 'mitid_obj',
    number: 28,
    question: 'Q28. What surface treatment applies an oxide layer to aluminum to increase corrosion resistance and add color dyes?',
    options: ['Anodizing', 'Galvanizing', 'Powder Coating', 'Etching'],
    answer: 0,
    explanation: 'Anodizing electrolytically thickens aluminum’s natural oxide layer, enhancing durability and color vibrancy.',
    topic: 'Surface Finishes'
  },
  {
    id: 'mitid_q_29',
    type: 'mcq',
    section: 'mitid_obj',
    number: 29,
    question: 'Q29. What is the primary characteristic of "Isometric" axonometric drawing projection?',
    options: ['All 3 spatial axes are equally foreshortened at 120° angles to each other without vanishing points', 'Distorted perspective', 'Single vanishing point', 'Curved horizon'],
    answer: 0,
    explanation: 'Isometric drawing keeps parallel lines parallel along 3 axes inclined at 30° to horizontal.',
    topic: 'Projection Drawing'
  },
  {
    id: 'mitid_q_30',
    type: 'mcq',
    section: 'mitid_obj',
    number: 30,
    question: 'Q30. Which famous Indian industrial designer headed NID and contributed significantly to Indian craft revivals?',
    options: ['Dashrath Patel', 'Homi Bhabha', 'Vikram Sarabhai', 'M.F. Husain'],
    answer: 0,
    explanation: 'Dashrath Patel was NID’s founding design secretary and a pioneer of Indian industrial and exhibition design.',
    topic: 'Indian Design Masters'
  },

  // ==========================================
  // SECTION B: SUBJECTIVE DESIGN SCENARIOS (6 Questions)
  // ==========================================
  {
    id: 'mitid_q_31',
    type: 'subjective',
    section: 'mitid_subj',
    number: 31,
    question: 'Q31. Ergonomic Product Redesign Scenario: Standard umbrella handles often cause wrist fatigue and slip during heavy downpours for elderly users. Propose 3 innovative ergonomic modifications for an all-weather umbrella handle designed specifically for senior citizens with arthritis. Explain the material choices and functional benefits. (Word count: 150 - 250 words)',
    wordLimit: { min: 100, max: 300 },
    rubricPoints: [
      'Identification of arthritis pain points (grip strength, joint friction)',
      'Innovative material selection (TPE rubber, soft silicone, textured memory foam)',
      'Ergonomic grip contours (D-shaped loop, pistol grip, weight balance)',
      'Usability features (one-touch assist button, glow-in-dark ring)'
    ],
    sampleModelAnswer: `1. Form & Grip Geometry: Replace traditional cylindrical shaft with a wide D-shaped loop grip. This allows senior users to slip their entire palm or wrist through the handle, distributing lifting weight across the forearm rather than relying on weak finger pinch strength.
2. Material Tactility: Use dual-molded TPE (Thermoplastic Elastomer) with textured micro-grooves over a shock-absorbing memory foam core. This provides high-friction non-slip grip even when wet without requiring tight muscle contraction.
3. Accessible Controls: Integrate an enlarged high-contrast push-button with spring assist mechanism at the top of the handle, requiring less than 5N force to trigger auto-open and auto-collapse.`,
    topic: 'Ergonomic Product Redesign'
  },
  {
    id: 'mitid_q_32',
    type: 'subjective',
    section: 'mitid_subj',
    number: 32,
    question: 'Q32. Urban Mobility & System Design: Imagine a street vending cart for selling fresh juice in Indian metro cities. Discuss 4 key design challenges regarding hygiene, mobility, waste management, and solar energy integration. (Word count: 150 - 250 words)',
    wordLimit: { min: 100, max: 300 },
    rubricPoints: [
      'Hygiene & clean water filtration tank',
      'Mobility & compact collapsible wheel chassis',
      'Organic waste disposal (peels convert to compost bin)',
      'Solar panel canopy for powering citrus press & LED lighting'
    ],
    sampleModelAnswer: `1. Hygiene: Closed food-grade stainless steel preparation deck with built-in UV-C water purification system and gravity-fed wash basin.
2. Mobility: Lightweight modular aluminum frame with puncture-proof pneumatic tires and foot-operated hydraulic brakes for stability on unpaved roads.
3. Waste Management: Dual-compartment segregated bin directly under the press—one for biodegradable fruit peels and one for recyclable paper cups.
4. Energy: Flexible overhead solar canopy charging an onboard 12V LiFePO4 battery to run the electric juicer silently without noisy diesel generators.`,
    topic: 'System Design & Sustainability'
  },
  {
    id: 'mitid_q_33',
    type: 'subjective',
    section: 'mitid_subj',
    number: 33,
    question: 'Q33. Visual Communication & Public Campaign: Design a metaphoric poster concept to create public awareness against plastic pollution in oceans. Describe the visual imagery, color palette, tagline, and emotional impact. (Word count: 120 - 200 words)',
    wordLimit: { min: 80, max: 250 },
    rubricPoints: ['Metaphoric visual clarity', 'Color contrast & mood', 'Tagline impact', 'Call to action'],
    sampleModelAnswer: `Visual Concept: A majestic humpback whale swimming through deep blue ocean waters, but its body is rendered as a transparent plastic water bottle filled with floating single-use straws and trash.
Color Palette: Deep indigo and ocean teal contrasted against harsh fluorescent neon yellow plastic garbage inside the whale body.
Tagline: "Their Ocean is Not Your Trash Can. Stop the Flow."`,
    topic: 'Visual Communication'
  },
  {
    id: 'mitid_q_34',
    type: 'subjective',
    section: 'mitid_subj',
    number: 34,
    question: 'Q34. Spatial Design & Micro-Living: How would you optimize a 100 sq. ft. room to serve as both a work studio for a graphic designer by day and a sleeping area by night? Describe furniture transformations. (Word count: 150 - 250 words)',
    wordLimit: { min: 100, max: 300 },
    rubricPoints: ['Multi-functional furniture', 'Space saving vertical utilization', 'Lighting adaptability', 'Ergonomics'],
    sampleModelAnswer: `Utilize a Murphy wall-bed integrated with a fold-down drafting desk. By day, the bed folds flush into acoustic wall paneling exposing a spacious desk with integrated cable management. By night, the desk lowers parallel to the floor without disturbing monitor setups, unfolding a queen bed. Vertical wall tracks house modular shelving and dual-temperature LED lights (5000K crisp daylight for design, 2700K warm glow for rest).`,
    topic: 'Interior & Space Optimization'
  },
  {
    id: 'mitid_q_35',
    type: 'subjective',
    section: 'mitid_subj',
    number: 35,
    question: 'Q35. Storyboarding Concept: Write a 4-step narrative sequence explaining how a smart wearable ring helps a visually impaired person navigate a crowded metro station safely.',
    wordLimit: { min: 100, max: 250 },
    rubricPoints: ['User empathy', 'Haptic feedback mechanisms', 'Sequential clarity', 'Problem solving'],
    sampleModelAnswer: `Panel 1: The user enters the noisy station; the ring emits soft directional haptic pulses on the index finger pointing toward the ticketing counter.
Panel 2: At the turnstile, near-field contact (NFC) inside the ring automatically deducts fare without requiring physical searching.
Panel 3: On the platform edge, LiDAR sensors in the ring vibrate intensely warning of the train gap.
Panel 4: Inside the coach, voice guidance through bone-conduction earpieces synced with the ring announces seat availability.`,
    topic: 'User Experience & Narrative'
  },
  {
    id: 'mitid_q_36',
    type: 'subjective',
    section: 'mitid_subj',
    number: 36,
    question: 'Q36. Material Metamorphosis: Describe how recycled PET plastic bottles can be redesigned into an aesthetic acoustic lampshade for modern offices.',
    wordLimit: { min: 100, max: 200 },
    rubricPoints: ['Upcycling process knowledge', 'Aesthetic value', 'Acoustic functionality', 'Form factor'],
    sampleModelAnswer: `PET bottles are shredded into micro-flakes, melted, and spun into sound-absorbing felt fibers. This felt is thermoformed into geometric origami lampshades that absorb ambient speech frequencies (500Hz-2000Hz) while diffusing warm LED illumination downward.`,
    topic: 'Sustainable Material Design'
  },

  // ==========================================
  // SECTION C: INTERACTIVE CANVAS DRAWING & SKETCHING (4 Questions)
  // ==========================================
  {
    id: 'mitid_q_37',
    type: 'sketching',
    section: 'mitid_sketch',
    number: 37,
    question: 'Q37. Drawing Prompt 1: Perspective & Product Sketching\nDraw a two-point perspective view of a futuristic handheld portable espresso maker for campers. Show light shading, grip textures, water level indicator, and human hand scale.',
    instructions: 'Use the digital canvas tools (Pencil, Pen, Brush, Eraser, Shapes, Colors) to draw directly below, OR upload a high-resolution photo of your hand-drawn sketch on paper.',
    evaluationCriteria: ['2-Point Perspective Accuracy', 'Line Quality & Shading', 'Product Proportions & Details', 'Human Hand Scale Reference'],
    topic: 'Product Perspective Sketching'
  },
  {
    id: 'mitid_q_38',
    type: 'sketching',
    section: 'mitid_sketch',
    number: 38,
    question: 'Q38. Drawing Prompt 2: Object Metamorphosis Sequence\nDraw a 3-step visual transformation sequence showing a traditional terracotta clay teapot morphing into a futuristic electric kettle.',
    instructions: 'Sketch 3 distinct frames showing progressive transition of form, handle, spout, and texture.',
    evaluationCriteria: ['Visual Metamorphosis Continuity', 'Form Transition Logic', 'Shading & Texture Contrast', 'Creativity'],
    topic: 'Form Metamorphosis'
  },
  {
    id: 'mitid_q_39',
    type: 'sketching',
    section: 'mitid_sketch',
    number: 39,
    question: 'Q39. Drawing Prompt 3: Human Anatomy & Ergonomic Posture\nDraw a person sitting in a modern ergonomic desk chair in a 3/4 side view angle. Clearly indicate key pivot joints and body posture angles.',
    instructions: 'Focus on correct anatomical proportions, spinal alignment curve, and chair support structures.',
    evaluationCriteria: ['Human Proportions', 'Anatomical Accuracy', 'Spatial Relation with Chair', 'Line Weight Hierarchy'],
    topic: 'Anatomy & Ergonomics'
  },
  {
    id: 'mitid_q_40',
    type: 'sketching',
    section: 'mitid_sketch',
    number: 40,
    question: 'Q40. Drawing Prompt 4: Creative Visual Expression\nVisualize and draw the emotion of "Serenity in Chaos" using geometric forms, organic shapes, and contrasting light & dark values.',
    instructions: 'Create a compelling composition that contrasts frantic chaotic background lines with a balanced serene central structure.',
    evaluationCriteria: ['Abstract Visual Storytelling', 'Contrast & Composition', 'Creative Expression', 'Execution Quality'],
    topic: 'Visual Expression'
  }
];
