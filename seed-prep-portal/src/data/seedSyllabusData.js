// SEED (Symbiosis Entrance Exam for Design) Exhaustive Master Syllabus Dataset
// Built specifically for self-study students requiring in-depth explanations, formulas, 
// solved step-by-step examples, design exam traps, and comprehensive practice quizzes.

export const SEED_SYLLABUS_DOMAINS = [
  {
    id: 'creative-visualization',
    title: 'Creative Visualization',
    icon: 'Boxes',
    color: 'from-amber-500 to-orange-600',
    accentColor: '#f59e0b',
    summary: 'Master 2D & 3D shapes, geometric forms, spatial relationships, isometric projection, unfolding paper nets, mirror reflections, cast shadow analysis, and visual transformations.',
    weightage: '25% of Exam',
    topics: [
      {
        id: '2d-3d-geometry-unfolding',
        title: '2D & 3D Shapes & Pattern Unfolding (Nets)',
        subHeading: 'Exhaustive guide to surface development, 3D paper nets, cube folds, platonic solids, and mental rotation rules.',
        cheatSheetRules: [
          'Skip-1 Rule: In linear chains of squares, faces separated by 1 square are ALWAYS opposite in 3D.',
          '11 Net Rule: A standard cube has exactly 11 valid 2D net layouts. Any 2x2 solid block of squares CANNOT form a cube.',
          'Euler Formula for Polyhedrons: Vertices - Edges + Faces = 2 (V - E + F = 2).'
        ],
        examTraps: [
          'Watch out for symbol orientation on adjacent faces! An arrow pointing up on a 2D net might point sideways or backwards depending on fold direction.',
          'Never count overlapping squares in a net layout; always verify that exactly 6 faces form a closed enclosure.'
        ],
        explanationParagraphs: [
          'Creative Visualization in design entrance tests like SEED evaluates your ability to mentally manipulate 3D shapes and map them onto flat 2D surfaces (and vice-versa). Understanding how flat shapes transform into 3D polyhedrons is a foundational skill for product design, packaging, and architecture.',
          'Nets and Surface Development: A 3D object net is a flat 2D pattern that can be folded along specified creasing edges to form a closed 3D shape. A standard cube possesses exactly 11 distinct valid 2D nets. If a net has fewer than 6 squares, or if 4 squares form a solid 2x2 grid block, it can never fold into a closed 6-sided cube.',
          'Adjacent versus Opposite Faces: When folding a net into a 3D cube, faces that share a common edge in the 2D layout will touch along that edge in 3D. Faces separated by exactly one square in a straight linear row or column will always end up directly opposite each other when folded (known as the Skip-1 Rule).',
          'Orientation of Markings: Symbols, arrows, diagonal stripes, or icons drawn on a 2D net will rotate relative to adjacent faces once assembled. Always trace edge-sharing directions clockwise or counter-clockwise to verify symbol alignments.',
          'Platonic Solids and Frustums: Beyond cubes, design exams test Platonic solids—Tetrahedron (4 equilateral triangular faces), Octahedron (8 triangular faces), Dodecahedron (12 pentagonal faces), and Icosahedron (20 triangular faces). Truncated solids (frustums) are formed by slicing a 3D pyramid or cone parallel to its base.'
        ],
        visualType: 'cube-unfolding',
        keyConcepts: [
          '11 Valid net configurations of a standard cube',
          'Skip-1 Rule for identifying opposite faces in linear net chains',
          'Platonic Solids geometry (Tetrahedron, Octahedron, Dodecahedron)',
          'Truncated cones, pyramids, and frustum cross-sections',
          'Edge matching and rotational symbol alignment'
        ],
        realLifeExamples: [
          {
            title: 'Packaging & Die-Cut Box Design',
            description: 'Industrial packaging designers create flat die-cut corrugated cardboard sheets (nets) that assemble into sturdy retail boxes (shoe boxes, medicine cartons, pizza boxes) without requiring extra glue.'
          },
          {
            title: 'Deployable Aerospace Solar Panels & Origami',
            description: 'Spacecraft solar panels are folded into compact 2D nets to fit inside rocket payloads and then unfold automatically into expansive 3D structures in orbit using origami mathematical algorithms.'
          }
        ],
        solvedExamples: [
          {
            question: 'A cube net consists of 6 labeled squares in a T-shape. Square A is the center intersection, Square B is to its left, Square C is to its right, Square D is above it, Square E is below it, and Square F is below E. Which square lies opposite Square A when folded into a cube?',
            solution: 'Square F is opposite Square A.',
            explanationStep: 'Using the Skip-1 Rule along the vertical column (D -> A -> E -> F): Square A and Square F are separated by Square E. Therefore, Square A folds opposite Square F. Likewise, Square B folds opposite Square C, and Square D folds opposite Square E.'
          },
          {
            question: 'How many total edges does a solid regular Octahedron possess?',
            solution: '12 Edges.',
            explanationStep: 'An Octahedron consists of 8 equilateral triangular faces and 6 vertices. By Euler formula (Vertices - Edges + Faces = 2): 6 - E + 8 = 2, solving gives E = 12 edges.'
          },
          {
            question: 'If a solid square pyramid is sliced horizontally parallel to its base, what two shapes are created?',
            solution: 'A smaller square pyramid on top and a square frustum at the bottom.',
            explanationStep: 'A horizontal slice parallel to the base of any pyramid preserves the base shape (square) while creating a flat top surface, resulting in a frustum.'
          }
        ],
        probableQuestions: [
          {
            id: 'cv-q1',
            question: 'Which of the following 2D net configurations CANNOT be folded into a closed 6-sided cube?',
            options: [
              'A T-shaped layout with 4 vertical squares and 2 side wings on row 2',
              'A Z-shaped layout with 3 connected rows of 2 squares each',
              'A straight row of 5 connected squares with 1 wing attached to the end',
              'A stair-step layout of 6 squares arranged 2-2-2 offset by 1 square'
            ],
            correctAnswer: 2,
            explanation: 'A straight row of 5 squares with 1 wing leaves 5 faces along a single axis. Folding this causes 2 faces to overlap directly while leaving one entire side completely exposed.',
            hint: 'A cube has 6 faces. No more than 4 faces can be in a single straight line without overlapping.'
          },
          {
            id: 'cv-q2',
            question: 'If a solid cylinder is sliced diagonally by a flat plane angled at 45 degrees to its central axis, what is the exact shape of the resulting cross-section?',
            options: ['Circle', 'Ellipse', 'Parabola', 'Rectangle'],
            correctAnswer: 1,
            explanation: 'Slicing a cylinder perpendicular (90 degrees) to its axis produces a circle. Slicing at any non-perpendicular angle produces an ellipse.',
            hint: 'An angled cross-cut stretches a circular diameter into an oval ellipse.'
          },
          {
            id: 'cv-q3',
            question: 'How many total vertices does a regular Dodecahedron possess?',
            options: ['12 Vertices', '20 Vertices', '30 Vertices', '8 Vertices'],
            correctAnswer: 1,
            explanation: 'A Dodecahedron has 12 regular pentagonal faces, 30 edges, and 20 vertices.',
            hint: 'Dodeca means 12 faces, but its corner vertices count equals 20.'
          },
          {
            id: 'cv-q3b',
            question: 'A 2D net of a Tetrahedron consists of how many equilateral triangles?',
            options: ['3 Triangles', '4 Triangles', '6 Triangles', '8 Triangles'],
            correctAnswer: 1,
            explanation: 'A Tetrahedron is a 3D pyramid with a triangular base, comprising exactly 4 triangular faces.',
            hint: 'Tetra is the Greek prefix for four.'
          }
        ],
        books: [
          { 
            title: 'SEED & NID Design Entrance Guide', 
            author: 'Arihant Experts', 
            focus: 'Chapter 4: Spatial Ability, Pattern Unfolding & Mental Rotation',
            url: 'https://www.google.com/search?tbm=bks&q=Arihant+Design+Entrance+Exam+Guide'
          },
          { 
            title: 'Visual Thinking for Design', 
            author: 'Colin Ware', 
            focus: 'Spatial cognition, 3D mental rotation, and visual perception in graphics',
            url: 'https://www.google.com/search?tbm=bks&q=Visual+Thinking+for+Design+Colin+Ware'
          },
          { 
            title: 'How to Pass Diagrammatic Reasoning Tests', 
            author: 'Mike Bryon', 
            focus: '3D cube transformations, unfolding nets, and spatial reasoning drills',
            url: 'https://www.google.com/search?tbm=bks&q=How+to+Pass+Diagrammatic+Reasoning+Tests+Mike+Bryon'
          }
        ],
        articles: [
          { 
            title: 'Mastering Cube Folds & Spatial Rotation for Design Exams', 
            summary: 'Comprehensive breakdown of mental rotation techniques, net validation shortcuts, and edge-matching rules.',
            url: 'https://en.wikipedia.org/wiki/Net_(polyhedron)'
          },
          { 
            title: 'Geometric Cross-Sections in Product Design & CAD', 
            summary: 'How slicing 3D primitives (cones, cylinders, spheres) informs modern automotive and industrial CAD modeling.',
            url: 'https://en.wikipedia.org/wiki/Cross_section_(geometry)'
          }
        ],
        videos: [
          { 
            title: 'Visualizing 3D Cube Folds & Nets (Step-by-Step)', 
            embedId: 'd3-cube-fold-tutorial', 
            duration: '14 mins', 
            platform: 'YouTube', 
            description: 'Clear animated breakdown of the 11 valid cube nets and mental rotation techniques.',
            url: 'https://www.youtube.com/results?search_query=3D+cube+net+folding+tutorial+design'
          },
          { 
            title: 'Orthographic Projections & Spatial Views Explained', 
            embedId: 'orthographic-views-design', 
            duration: '18 mins', 
            platform: 'YouTube', 
            description: 'Learn how to read Front, Top, and Side views of complex 3D block models.',
            url: 'https://www.youtube.com/results?search_query=orthographic+projection+front+top+side+view+explained'
          }
        ]
      },
      {
        id: 'spatial-relationships-projections',
        title: 'Spatial Relationships & Isometric Projections',
        subHeading: 'Deep dive into top, front, and side views, object rotations, hidden lines, and isometric block counting.',
        cheatSheetRules: [
          'Isometric Axes: Drawn at 30 deg to horizontal and 90 deg vertically. Width, height, and depth maintain true scale.',
          'Orthographic Elevations: Front View (facing object), Top View / Plan (looking straight down), Side View (end elevation).',
          'Hidden Lines: Obscured rear edges and internal voids are always represented as dashed lines (----).'
        ],
        examTraps: [
          'In block counting questions, do not forget to count hidden support blocks beneath higher tiers!',
          'Distinguish clearly between First Angle Projection (Top view placed below Front view) and Third Angle Projection (Top view placed above Front view).'
        ],
        explanationParagraphs: [
          'Spatial relationships evaluate how accurately you can picture 3D objects from multiple camera viewpoints, compute hidden geometry, and translate 3D isometric perspectives into flat technical blueprints.',
          'Isometric Projection Principles: An isometric view represents a 3D object on a 2D sheet where vertical lines remain strictly vertical, and horizontal axes are drawn at 30 degrees to the baseline. All three dimensions (width, height, depth) are represented at full proportional scale without perspective foreshortening.',
          'Orthographic Elevation Mapping: Translating a 3D isometric object into flat 2D projections requires drawing three primary elevations:',
          '1. Front View (Front Elevation): Looking straight at the front face of the object along the primary depth axis.',
          '2. Top View (Plan View): Looking directly down from above the object.',
          '3. Side View (End Elevation): Looking directly from the left or right side.',
          'Hidden Line Conventions: Internal voids, rear edges, or hidden steps obscured behind solid outer faces are drawn using dashed lines (----) in technical drawing.',
          'Block Counting Strategy: When counting unit cubes in multi-tiered stepped blocks, count by vertical columns (ground level upward) to ensure you do not miss hidden structural blocks supporting elevated tiers.'
        ],
        visualType: 'isometric-blocks',
        keyConcepts: [
          'Isometric grid projection axes (30 degrees - 90 degrees - 30 degrees)',
          'Plan View (Top), Front Elevation, and Side Elevation mapping',
          'Hidden line convention (dashed lines for obscured geometry)',
          'Mental 90-degree and 180-degree spatial object rotation',
          'Column-wise block counting technique'
        ],
        realLifeExamples: [
          {
            title: 'Architectural Blueprint & Floor Plan Reading',
            description: 'Architects map 3D buildings into floor plans (top view) and structural elevations (side views) so builders can construct precise real-world buildings.'
          },
          {
            title: 'Isometric Video Game Level Design',
            description: 'Games like Monument Valley, SimCity, and Minecraft use isometric spatial grids to display rich 3D environments on 2D mobile screens.'
          }
        ],
        solvedExamples: [
          {
            question: 'A large 3x3x3 cube is constructed from 27 small unit cubes. If the entire outer surface of the large cube is painted red, how many unit cubes have EXACTLY 2 faces painted red?',
            solution: '12 Unit Cubes.',
            explanationStep: 'Cubes with 2 faces painted lie along the middle of the 12 edges of the large cube. Since each edge of length 3 has 1 middle unit cube, Total = 12 edges * 1 = 12 unit cubes. (Corner cubes have 3 faces painted = 8; center face cubes have 1 face painted = 6; inner core cube has 0 faces painted = 1).'
          },
          {
            question: 'How many unit cubes are required to build a 4-tier solid staircase where tier 1 has 4 cubes, tier 2 has 3 cubes, tier 3 has 2 cubes, and tier 4 has 1 cube (assuming full solid support beneath)?',
            solution: '20 Unit Cubes.',
            explanationStep: 'Tier 4 (top) = 1 cube. Tier 3 = 2 cubes + 2 supporting = 4 total in tier 3 column depth. Summing columns: Tier 1 (4*1=4), Tier 2 (3*2=6), Tier 3 (2*3=6), Tier 4 (1*4=4). Total = 4 + 6 + 6 + 4 = 20 cubes.'
          }
        ],
        probableQuestions: [
          {
            id: 'cv-q4',
            question: 'An L-shaped solid block is rotated 90 degrees clockwise around the vertical Z-axis, then flipped upside down. What is the final orientation of its long arm?',
            options: [
              'Pointing to the left',
              'Pointing towards the viewer',
              'Pointing upwards to the right',
              'Pointing away from the viewer'
            ],
            correctAnswer: 1,
            explanation: 'Rotating 90 degrees clockwise shifts the arm from right-facing to viewer-facing. Performing an upside-down vertical flip maintains the forward direction while reversing vertical alignment.',
            hint: 'Use an eraser or phone in your hand to physically simulate the double rotational move.'
          },
          {
            id: 'cv-q4b',
            question: 'In Third Angle Projection, where is the Top View (Plan) placed relative to the Front Elevation?',
            options: [
              'Directly below the Front Elevation',
              'Directly above the Front Elevation',
              'To the left of the Side Elevation',
              'Diagonal to the Front Elevation'
            ],
            correctAnswer: 1,
            explanation: 'In Third Angle Projection (standard in USA/India design CAD), the Top View is drawn directly above the Front Elevation.',
            hint: 'Third angle places views in the direction you look from (Top view on top).'
          }
        ],
        books: [
          { 
            title: 'Engineering Drawing & Spatial Ability', 
            author: 'N. D. Bhatt', 
            focus: 'Orthographic projections, isometric views, sectioning of solids',
            url: 'https://www.google.com/search?tbm=bks&q=Engineering+Drawing+ND+Bhatt'
          },
          { 
            title: 'Spatial Reasoning Tests: Questions and Answers', 
            author: 'How2Become', 
            focus: 'Block counting, view recognition, spatial 3D grids',
            url: 'https://www.google.com/search?tbm=bks&q=Spatial+Reasoning+Tests+How2Become'
          }
        ],
        articles: [
          { 
            title: 'How to Solve Block Counting & View Recognition Questions', 
            summary: 'Proven counting formulas for multi-tiered isometric blocks without missing hidden supports.',
            url: 'https://en.wikipedia.org/wiki/Isometric_projection'
          }
        ],
        videos: [
          { 
            title: 'Orthographic Projections: Front, Top & Side Views', 
            embedId: 'orthographic-masterclass', 
            duration: '22 mins', 
            platform: 'YouTube', 
            description: 'Complete tutorial on constructing elevations from 3D isometric shapes.',
            url: 'https://www.youtube.com/results?search_query=orthographic+projection+front+top+side+view'
          }
        ]
      },
      {
        id: 'visual-transformations-reflections',
        title: 'Visual Transformations, Tessellations & Shadow Analysis',
        subHeading: 'Analyzing light source angles, cast shadows, reflections, symmetrical flips, and pattern tiling.',
        cheatSheetRules: [
          'Sunlight Shadow Formula: Height = Shadow Length * tan(Elevation Angle). At 45 deg sun angle, Height = Shadow Length.',
          'Vertical Mirror Line: Flips X-axis (left becomes right, right becomes left).',
          'Water Reflection: Flips Y-axis (top becomes bottom, bottom becomes top).',
          'Tessellation Angle Rule: Internal angles around any vertex node must sum to exactly 360 deg.'
        ],
        examTraps: [
          'Do not confuse a point light source (fan-out diverging shadows) with sunlight (parallel shadows).',
          'Regular pentagons have an interior angle of 108 deg. 360 / 108 = 3.33 (not an integer), so pentagons CANNOT tessellate alone.'
        ],
        explanationParagraphs: [
          'Visual transformations test how light, reflection, symmetry, and geometric repetition interact with visual forms.',
          'Light and Shadow Physics: A point light source (like a lamp bulb) produces diverging light rays, creating expanding cast shadows. Sunlight (parallel light rays) casts shadows at a uniform angular inclination proportional to the height of the object (Height = Length x tan(Angle)).',
          'Mirror Reflections and Symmetry: A vertical mirror line inverts left and right axes (X becomes -X). A horizontal mirror line (like a water reflection) inverts top and bottom axes (Y becomes -Y).',
          'Tessellations and Pattern Tilings: A regular tessellation covers a 2D plane with identical regular polygons leaving zero gaps and zero overlaps. The interior angles surrounding every vertex point must sum to exactly 360 degrees. Triangles (60 deg x 6 = 360), Squares (90 deg x 4 = 360), and Hexagons (120 deg x 3 = 360) are the only three regular polygons that tessellate by themselves.'
        ],
        visualType: 'shadow-analysis',
        keyConcepts: [
          'Point Light Source versus Sunlight Parallel Cast Shadows',
          'Lateral inversion (Vertical mirror) vs Water reflection (Horizontal flip)',
          'Regular Tessellations (Triangles, Squares, Hexagons)',
          'Rotational Symmetry Order and Reflectional Axes'
        ],
        realLifeExamples: [
          {
            title: '3D Rendering & CGI Ray-Tracing',
            description: 'Modern video game graphics engines calculate ray-traced cast shadows based on light source elevation, object geometry, and ground planes.'
          },
          {
            title: 'Islamic Geometric Tiles & Architectural Flooring',
            description: 'Complex floor tiles and architectural facades use tessellations of octagons and stars to cover continuous wall and floor surfaces.'
          }
        ],
        solvedExamples: [
          {
            question: 'If the sun is positioned at an angle of 45 degrees above the horizon directly behind a 2-meter tall vertical pole, what is the exact length of the cast shadow on flat ground?',
            solution: '2 Meters.',
            explanationStep: 'Using trigonometry: tan(45 deg) = Height / Shadow Length. Since tan(45 deg) = 1, Shadow Length = Height = 2 meters.'
          },
          {
            question: 'What is the order of rotational symmetry for a regular hexagon?',
            solution: 'Order 6.',
            explanationStep: 'A regular hexagon maps onto itself 6 times during a full 360-degree rotation (every 60 degrees).'
          }
        ],
        probableQuestions: [
          {
            id: 'cv-q5',
            question: 'Which regular polygon CANNOT form a regular tessellation on a flat floor by itself without leaving gaps?',
            options: ['Equilateral Triangle', 'Square', 'Regular Pentagon', 'Regular Hexagon'],
            correctAnswer: 2,
            explanation: 'The interior angle of a regular pentagon is 108 degrees. Since 360 is not evenly divisible by 108 (360 / 108 = 3.33), pentagons leave gaps when placed side-by-side.',
            hint: 'A shape tessellates only if its interior angles sum to 360 degrees around every corner node.'
          }
        ],
        books: [
          { 
            title: 'Shadows & Highlights in Rendered Art', 
            author: 'Mark Tokel', 
            focus: 'Cast shadow geometry, lighting angles, and perspective projection',
            url: 'https://www.google.com/search?tbm=bks&q=Shadows+and+Highlights+Mark+Tokel'
          }
        ],
        articles: [
          { 
            title: 'The Geometry of Tessellations in Architecture', 
            summary: 'How M.C. Escher and modern architects use tessellation principles.',
            url: 'https://en.wikipedia.org/wiki/Tessellation'
          }
        ],
        videos: [
          { 
            title: 'Cast Shadow Projection & Lighting Angles', 
            embedId: 'shadow-perspective-tutorial', 
            duration: '16 mins', 
            platform: 'YouTube', 
            description: 'Step-by-step drawing of shadows under point light vs sunlight.',
            url: 'https://www.youtube.com/results?search_query=cast+shadow+perspective+drawing+tutorial'
          }
        ]
      }
    ]
  },
  {
    id: 'observation-perception',
    title: 'Observation & Perception',
    icon: 'Eye',
    color: 'from-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
    summary: 'Master pattern recognition, perceptual detail spotting, visual illusions, Gestalt laws, brand visual identity evolution, logo design anatomy, and everyday object mechanics.',
    weightage: '20% of Exam',
    topics: [
      {
        id: 'gestalt-perception-illusions',
        title: 'Gestalt Principles of Visual Perception & Optical Illusions',
        subHeading: 'Understanding psychological visual organization, negative space, figure-ground reversal, and visual perception tricks.',
        cheatSheetRules: [
          'Law of Closure: The mind connects gaps to see a complete form (WWF Panda logo).',
          'Law of Proximity: Objects close together are perceived as a single group.',
          'Law of Similarity: Objects sharing color or shape are grouped together.',
          'Figure-Ground Reversal: Negative space creates a secondary meaningful shape (Rubin Vase).'
        ],
        examTraps: [
          'Negative space in logo questions is often subtle—look at the white areas between letters or inside graphical contours (like the hidden arrow in FedEx or peacock in NBC).'
        ],
        explanationParagraphs: [
          'Observation and Perception tests how acutely you notice details, analyze visual organization, and understand psychological visual processing in design.',
          'Gestalt Theory Principles: Developed by German psychologists, Gestalt theory explains how the human brain automatically groups visual elements into cohesive wholes rather than individual disconnected lines:',
          '1. Law of Similarity: Elements sharing visual attributes (color, shape, size) are perceived as belonging to a unified group.',
          '2. Law of Proximity: Visual elements positioned near each other are perceived as a cluster.',
          '3. Law of Closure: The brain automatically fills in missing lines or gaps to perceive complete, enclosed figures (e.g., the WWF panda logo).',
          '4. Law of Continuity: The eye naturally follows smooth continuous paths and curves rather than sudden directional breaks.',
          '5. Figure-Ground Relationship: Distinguishing a primary object (figure) from its background (ground). Rubin’s Vase illusion is a famous example (two profiles vs. a central vase).',
          'Optical Illusions: Müller-Lyer illusion (equal lines appearing different due to arrowhead directions), Café Wall illusion (staggered black-white tiles making horizontal lines look slanted).'
        ],
        visualType: 'gestalt-laws',
        keyConcepts: [
          'Gestalt Laws (Closure, Proximity, Similarity, Continuity, Symmetry)',
          'Negative space in brand logo design',
          'Figure-Ground reversal visual tricks',
          'Classic Optical Illusions (Kanizsa Triangle, Hermann Grid)'
        ],
        realLifeExamples: [
          {
            title: 'FedEx Logo Negative Space Arrow',
            description: 'The hidden arrow between the letters E and x in the FedEx logo utilizes Gestalt closure and negative space to symbolize speed and direction.'
          },
          {
            title: 'UI/UX Mobile App Layouts',
            description: 'Mobile apps group related navigation buttons close together (Proximity) and highlight primary action buttons in distinct accent colors (Similarity).'
          }
        ],
        solvedExamples: [
          {
            question: 'The World Wildlife Fund (WWF) panda logo uses black patches on a white surface without outer border lines around the white fur. Which Gestalt principle allows viewers to see a full panda body?',
            solution: 'Law of Closure.',
            explanationStep: 'The mind automatically fills in the missing outlines across the white negative space to complete the full panda silhouette.'
          },
          {
            question: 'In the NBC logo, a white peacock silhouette is formed by the empty space between colored feathers. What principle is at work?',
            solution: 'Figure-Ground Reversal and Negative Space.',
            explanationStep: 'The white background acts as the ground, while the feather shapes act as figure, creating a peacock head pointing right.'
          }
        ],
        probableQuestions: [
          {
            id: 'op-q1',
            question: 'In logo design, when an image tricks the eye into seeing two distinct subjects depending on whether you focus on the dark shapes or light space, which perceptual phenomenon is at work?',
            options: ['Chromatic Aberration', 'Figure-Ground Reversal', 'Depth Perception', 'Muller-Lyer Effect'],
            correctAnswer: 1,
            explanation: 'Figure-Ground Reversal occurs when negative space forms an intentional secondary image against the primary subject.',
            hint: 'Think of Rubin’s vase illusion or the NBC peacock logo.'
          }
        ],
        books: [
          { 
            title: 'Universal Principles of Design', 
            author: 'William Lidwell', 
            focus: 'Gestalt principles, visual perception, visual ergonomics',
            url: 'https://www.google.com/search?tbm=bks&q=Universal+Principles+of+Design+William+Lidwell'
          },
          { 
            title: 'Interaction of Color', 
            author: 'Josef Albers', 
            focus: 'Perceptual color tricks and visual contrast',
            url: 'https://www.google.com/search?tbm=bks&q=Interaction+of+Color+Josef+Albers'
          }
        ],
        articles: [
          { 
            title: 'Gestalt Principles in Brand & Graphic Design', 
            summary: 'Visual examples of closure, proximity, and negative space in iconic brand logos.',
            url: 'https://en.wikipedia.org/wiki/Gestalt_psychology'
          }
        ],
        videos: [
          { 
            title: 'Gestalt Laws of Visual Perception Explained', 
            embedId: 'gestalt-principles-video', 
            duration: '12 mins', 
            platform: 'YouTube', 
            description: 'Visual breakdown of all 6 Gestalt laws with design examples.',
            url: 'https://www.youtube.com/results?search_query=gestalt+laws+visual+perception+design'
          }
        ]
      },
      {
        id: 'brand-identity-logo-anatomy',
        title: 'Brand Identity, Logos & Visual Detail Recognition',
        subHeading: 'Identifying iconic brand logos, typography anatomy, visual evolution, and subtle design details.',
        cheatSheetRules: [
          'Logo Types: Wordmark (text only), Monogram (initials), Pictorial (real icon), Abstract (geometric icon), Emblem (seal/badge).',
          'Typography Anatomy: Serif (decorative feet), Sans-Serif (clean ends), Ascender (stem above x-height), Descender (tail below baseline), Kerning (letter pair spacing).',
          'Pencil Rating: H = Hard & Light (9H to H); B = Soft & Dark (B to 9B).'
        ],
        examTraps: [
          'Do not confuse kerning (spacing between two specific letters) with tracking (uniform spacing across an entire line of text).'
        ],
        explanationParagraphs: [
          'SEED tests your acute observation of everyday design objects, logo symbolism, brand identities, typography anatomy, and material details.',
          'Logo Classifications:',
          '1. Wordmark: Text-only brand marks (e.g., Google, Coca-Cola, Canon).',
          '2. Monogram / Lettermark: Abbreviated initials (e.g., IBM, CNN, HP, HBO).',
          '3. Pictorial Mark: Recognizable real-world icon (e.g., Apple, Twitter/X, Target, Shell).',
          '4. Abstract Mark: Geometric icon representing brand values (e.g., Nike Swoosh, Pepsi globe, Adidas 3 stripes).',
          '5. Emblem: Text enclosed inside a seal or badge (e.g., Starbucks, Porsche, BMW).',
          'Typography Anatomy Terms:',
          'Serif vs Sans-Serif: Serifs possess small decorative strokes at letter terminals (Times New Roman); Sans-serifs have clean straight ends (Helvetica, Arial).',
          'Kerning: Adjusting spacing between specific character pairs.',
          'X-Height: Height of lowercase letters excluding ascenders (like vertical stem in b) and descenders (like tail in p).',
          'Pencil Lead Ratings: Hardness scale from 9H (hardest, lightest precision lines) to HB (standard medium) to 9B (softest, darkest shading lead).'
        ],
        visualType: 'logo-anatomy',
        keyConcepts: [
          'Logo Types (Wordmark, Pictorial, Abstract, Emblem, Monogram)',
          'Typography Anatomy (Serif, Sans-Serif, Ascender, Descender, Kerning)',
          'Graphite Pencil Hardness Scale (9H to 9B)',
          'Everyday object mechanics and material details'
        ],
        realLifeExamples: [
          {
            title: 'Amazon Logo Smile Arrow',
            description: 'The yellow arrow connects A to Z signifying Amazon sells everything from A to Z, while simultaneously forming a friendly smile.'
          }
        ],
        solvedExamples: [
          {
            question: 'What does the letter B represent in graphite drawing pencil ratings such as 2B, 4B, and 6B?',
            solution: 'B stands for Blackness (softer lead that deposits darker marks).',
            explanationStep: 'Higher numbers before B indicate softer graphite that leaves darker lines suitable for artistic shading.'
          },
          {
            question: 'Which typographic term describes the baseline-to-baseline vertical distance between consecutive lines of body text?',
            solution: 'Leading (pronounced ledding).',
            explanationStep: 'Leading controls vertical line spacing in typography, originally named after lead strips used in printing presses.'
          }
        ],
        probableQuestions: [
          {
            id: 'op-q2',
            question: 'Which famous logo redesigned its typeface from a Serif font to a custom geometric Sans-Serif font to improve legibility on mobile screens?',
            options: ['Vogue', 'Google (Post-2015 logo)', 'The New York Times', 'Rolex'],
            correctAnswer: 1,
            explanation: 'Google switched to Product Sans in 2015 to ensure crisp rendering on low-resolution digital screens.',
            hint: 'Look for clean, uniform letter thickness without decorative feet on character ends.'
          }
        ],
        books: [
          { 
            title: 'Logo Design Love', 
            author: 'David Airey', 
            focus: 'Anatomy of iconic logos and brand identity design',
            url: 'https://www.google.com/search?tbm=bks&q=Logo+Design+Love+David+Airey'
          },
          { 
            title: 'Thinking with Type', 
            author: 'Ellen Lupton', 
            focus: 'Typography guide for visual designers',
            url: 'https://www.google.com/search?tbm=bks&q=Thinking+with+Type+Ellen+Lupton'
          }
        ],
        articles: [
          { 
            title: 'Famous Logo Redesigns and the Design Thinking Behind Them', 
            summary: 'Analysis of brand visual evolutions like Apple, Pepsi, and Mastercard.',
            url: 'https://en.wikipedia.org/wiki/Logo'
          }
        ],
        videos: [
          { 
            title: 'Typography Essentials for Design Students', 
            embedId: 'typography-basics-video', 
            duration: '15 mins', 
            platform: 'YouTube', 
            description: 'Serifs, ascenders, tracking, leading, and kerning demystified.',
            url: 'https://www.youtube.com/results?search_query=typography+basics+for+designers'
          }
        ]
      }
    ]
  },
  {
    id: 'critical-thinking-problem-solving',
    title: 'Critical Thinking & Problem-Solving',
    icon: 'BrainCircuit',
    color: 'from-purple-500 to-indigo-600',
    accentColor: '#8b5cf6',
    summary: 'Creative imagination, design thinking methodology, non-traditional solutions for everyday design challenges, SCAMPER framework, and visual logic puzzles.',
    weightage: '20% of Exam',
    topics: [
      {
        id: 'design-thinking-scamper',
        title: 'Design Thinking Process & SCAMPER Method',
        subHeading: 'Human-centered design phases, creative ideation tools, ergonomic problem solving, and innovation frameworks.',
        cheatSheetRules: [
          '5 Stages of Design Thinking: Empathize -> Define -> Ideate -> Prototype -> Test.',
          'SCAMPER Method: Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse.',
          'Human-Centered Design (HCD): Always prioritizes actual user feedback over designer preference.'
        ],
        examTraps: [
          'In Design Thinking questions, remember that prototyping comes AFTER ideation and BEFORE testing. You cannot test without a prototype!'
        ],
        explanationParagraphs: [
          'Design problem-solving checks your ability to empathize with real users, reframe mundane problems, and generate clever non-traditional design solutions.',
          'Stanford d.school 5-Stage Design Thinking Process:',
          '1. Empathize: Understand real user needs through direct observation, interviews, and immersion.',
          '2. Define: Reframe the core problem statement into a human-centered framing (e.g., How Might We...).',
          '3. Ideate: Brainstorm broad ranges of out-of-the-box creative ideas without immediate judgment.',
          '4. Prototype: Build low-cost tangible representations of ideas (paper models, mockups).',
          '5. Test: Return to real users with prototypes to gather actionable feedback and iterate.',
          'SCAMPER Ideation Framework:',
          'S - Substitute: Replace a material, part, or process step.',
          'C - Combine: Merge two separate products or functions (e.g., smartphone + camera).',
          'A - Adapt: Adjust an existing mechanism to fit a new context.',
          'M - Modify / Magnify / Minify: Change size, color, texture, or weight.',
          'P - Put to another use: Re-purpose waste or existing tools for new applications.',
          'E - Eliminate: Remove non-essential components (e.g., removing headphone jacks for waterproofing).',
          'R - Reverse / Rearrange: Flip the process flow or physical layout inside out.'
        ],
        visualType: 'design-thinking-process',
        keyConcepts: [
          '5-Stage Design Thinking Framework (Empathize to Test)',
          'SCAMPER technique for product innovation',
          'Ergonomics & Human-Centered Design (HCD)',
          'Universal Accessibility principles'
        ],
        realLifeExamples: [
          {
            title: 'Dyson Bagless Vacuum Cleaner (SCAMPER - Eliminate & Adapt)',
            description: 'James Dyson eliminated dusty vacuum bags by adapting industrial cyclone air filters into household appliances.'
          },
          {
            title: 'OXO Good Grips Kitchen Tools (Universal Design)',
            description: 'Designed thick, non-slip rubber handles so elderly users with arthritis could comfortably hold kitchen peelers.'
          }
        ],
        solvedExamples: [
          {
            question: 'How would you apply the Eliminate principle from SCAMPER to solve morning garbage truck traffic jams in narrow urban streets?',
            solution: 'Eliminate physical garbage trucks by installing underground pneumatic trash tube networks where waste is drawn directly from residential chutes to processing plants.',
            explanationStep: 'Eliminating the physical transport vehicle forces a systemic infrastructure solution.'
          },
          {
            question: 'An app development team builds a rough paper mockup of a mobile interface to test navigation buttons with 5 test users. Which stage is this?',
            solution: 'Prototype & Test stage.',
            explanationStep: 'Paper mockups are low-fidelity prototypes built specifically for rapid testing.'
          }
        ],
        probableQuestions: [
          {
            id: 'ct-q1',
            question: 'An industrial designer notices that elderly citizens struggle to open screw-cap prescription bottles. Which stage of the Design Thinking process is the designer actively engaged in?',
            options: ['Ideate', 'Empathize', 'Prototype', 'Test'],
            correctAnswer: 1,
            explanation: 'Observing user struggles firsthand and understanding physical friction falls under the Empathize stage.',
            hint: 'It involves observing and identifying user pain points firsthand.'
          }
        ],
        books: [
          { 
            title: 'The Design of Everyday Things', 
            author: 'Don Norman', 
            focus: 'Affordances, signifiers, feedback, and user-centered design',
            url: 'https://www.google.com/search?tbm=bks&q=The+Design+of+Everyday+Things+Don+Norman'
          },
          { 
            title: 'Change by Design', 
            author: 'Tim Brown (IDEO)', 
            focus: 'How design thinking transforms organizations and products',
            url: 'https://www.google.com/search?tbm=bks&q=Change+by+Design+Tim+Brown'
          }
        ],
        articles: [
          { 
            title: 'Mastering the SCAMPER Technique for Entrance Exam Design Challenges', 
            summary: 'Practical guide to generating 10 creative ideas in under 5 minutes.',
            url: 'https://en.wikipedia.org/wiki/SCAMPER'
          }
        ],
        videos: [
          { 
            title: 'The 5 Stages of Design Thinking Explained', 
            embedId: 'design-thinking-video', 
            duration: '11 mins', 
            platform: 'YouTube', 
            description: 'Animated overview of Empathize, Define, Ideate, Prototype, Test.',
            url: 'https://www.youtube.com/results?search_query=5+stages+of+design+thinking'
          }
        ]
      }
    ]
  },
  {
    id: 'art-craft-culture-design',
    title: 'Art, Craft, Culture & Design',
    icon: 'Palette',
    color: 'from-rose-500 to-pink-600',
    accentColor: '#ec4899',
    summary: 'Indian and international art history, iconic designers & architects, folk craft traditions, color theory, design symbols, and environmental sustainability.',
    weightage: '20% of Exam',
    topics: [
      {
        id: 'indian-craft-traditions-art-history',
        title: 'Indian Traditional Crafts, Art History & Folk Styles',
        subHeading: 'Mastering Indian textiles, folk painting traditions, metal crafts, GI tags, and heritage design.',
        cheatSheetRules: [
          'Dokra Craft: Ancient lost-wax casting (cire perdue) using beeswax, clay, and molten bronze.',
          'Madhubani (Bihar): Double lines, natural dyes, leaves zero blank space.',
          'Warli (Maharashtra): Geometric stick figures painted in white rice paste on red mud walls.',
          'Kantha (West Bengal): Running stitch embroidery on layered saris.',
          'Phulkari (Punjab): Flower motif silk thread embroidery on coarse cotton (khaddar).'
        ],
        examTraps: [
          'Be prepared for state-to-craft mapping questions! Dokra = Chhattisgarh/Bengal/Odisha; Kalamkari = Andhra Pradesh; Bandhani = Gujarat/Rajasthan; Pashmina = J&K.'
        ],
        explanationParagraphs: [
          'SEED places significant emphasis on Indian design heritage, folk craft forms, regional weaves, and traditional art history.',
          'Key Indian Folk Art Styles:',
          '1. Madhubani (Mithila Art): Originating from Bihar. Characterized by double-line borders, geometric patterns, natural dyes, and depictions of nature and mythology without leaving blank space.',
          '2. Warli Painting: Tribal folk art of Maharashtra. Uses simple geometric shapes (circle, triangle, square) drawn in white rice paste on reddish-brown mud walls.',
          '3. Gond Painting: Tribal art from Madhya Pradesh featuring fine dot and line fill-patterns depicting trees, animals, and folklore.',
          '4. Kalamkari: Hand-painted or block-printed cotton textile art from Andhra Pradesh using bamboo pens (kalam) and vegetable dyes.',
          '5. Dokra Metal Craft: Ancient lost-wax casting technique (cire perdue) practiced in West Bengal, Odisha, and Chhattisgarh, tracing back to the Mohenjo-Daro Dancing Girl figurine.',
          'Traditional Indian Textiles:',
          'Pashmina / Kani Shawls: Jammu & Kashmir (fine wool).',
          'Kantha Embroidery: West Bengal (running stitch layered old saris).',
          'Phulkari: Punjab (flower motif silk embroidery on coarse cotton).',
          'Chanderi & Maheshwari: Madhya Pradesh (lightweight silk-cotton weaves).',
          'Bandhani / Tie & Dye: Gujarat & Rajasthan.'
        ],
        visualType: 'indian-folk-art',
        keyConcepts: [
          'Madhubani, Warli, Gond, Patachitra, Tanjore art traditions',
          'Lost-wax metal casting (Dokra cire perdue)',
          'Indian textile weaves (Kantha, Phulkari, Bandhani, Chikankari, Ikat)',
          'NID and NIFT design pioneers'
        ],
        realLifeExamples: [
          {
            title: 'Modern Fashion Adaptation of Indian Crafts',
            description: 'Contemporary fashion houses integrate GI-tagged Indian weaves (like Kantha and Block Prints) into global luxury runways.'
          }
        ],
        solvedExamples: [
          {
            question: 'Which ancient metal casting technique, used to create the 4500-year-old Bronze Dancing Girl of Mohenjo-daro, is still practiced by Dokra artisans in India today?',
            solution: 'The Lost-Wax Casting Technique (Cire Perdue).',
            explanationStep: 'Artisans sculpt a wax model over a clay core, encase it in clay, heat it to drain the wax, and pour molten metal into the void.'
          },
          {
            question: 'Phulkari embroidery belongs to which Indian state?',
            solution: 'Punjab.',
            explanationStep: 'Phulkari literally translates to flower work and is the traditional silk thread embroidery of Punjab.'
          }
        ],
        probableQuestions: [
          {
            id: 'ac-q1',
            question: 'Which Indian folk art form uses exclusively white pigment made from rice paste to paint stick-figure human dancers composed of two inverted triangles on mud walls?',
            options: ['Madhubani', 'Warli', 'Pithora', 'Miniature Painting'],
            correctAnswer: 1,
            explanation: 'Warli art of Maharashtra relies on basic geometric shapes (triangles symbolizing human bodies and mountains, circles for sun/moon).',
            hint: 'Associated with tribal communities of Maharashtra.'
          }
        ],
        books: [
          { 
            title: 'Handmade in India: Crafts of India', 
            author: 'Aditi Ranjan & M. P. Ranjan (NID)', 
            focus: 'The definitive encyclopedia of Indian handicrafts',
            url: 'https://www.google.com/search?tbm=bks&q=Handmade+in+India+Aditi+Ranjan'
          },
          { 
            title: 'Indian Art & Culture', 
            author: 'Nitin Singhania', 
            focus: 'Art history, performing arts, architecture',
            url: 'https://www.google.com/search?tbm=bks&q=Indian+Art+and+Culture+Nitin+Singhania'
          }
        ],
        articles: [
          { 
            title: 'Geographical Indication (GI) Tags in Indian Handicrafts', 
            summary: 'State-wise cheat-sheet of traditional crafts, weaves, and art styles.',
            url: 'https://en.wikipedia.org/wiki/Handicrafts_in_India'
          }
        ],
        videos: [
          { 
            title: 'Dokra Lost-Wax Metal Craft Process', 
            embedId: 'dokra-craft-documentary', 
            duration: '15 mins', 
            platform: 'YouTube', 
            description: 'Documentary detailing beeswax modeling and bronze pouring in Chhattisgarh.',
            url: 'https://www.youtube.com/results?search_query=dokra+lost+wax+metal+craft+documentary'
          }
        ]
      },
      {
        id: 'global-art-designers-sustainability',
        title: 'Global Art Movements, Famous Designers & Eco-Design',
        subHeading: 'Bauhaus, Art Nouveau, iconic designers, architects, color wheel principles, and sustainable design.',
        cheatSheetRules: [
          'Bauhaus (1919 Germany): Form Follows Function, Walter Gropius, tubular steel chairs.',
          'Dieter Rams 10 Principles: Good design is innovative, useful, aesthetic, unobtrusive, honest, long-lasting, environmentally friendly, as little design as possible.',
          'Color Wheel: Complementary (Opposites), Analogous (Neighbors), Triadic (Equal 120 deg triangle).'
        ],
        examTraps: [
          'Mies van der Rohe coined "Less is More". Louis Sullivan coined "Form Follows Function". Do not confuse these two modernist axioms!'
        ],
        explanationParagraphs: [
          'Understanding global art history movements, iconic international designers, color theory, and eco-design principles.',
          'Global Art and Design Movements:',
          '1. Bauhaus (Germany, 1919-1933): Founded by Walter Gropius. Motto: Form Follows Function. Combined fine art with functional craft. Minimalism, geometric simplicity, tubular steel chairs (Wassily chair by Marcel Breuer).',
          '2. Art Nouveau (1890-1910): Inspired by organic, sinuous, plant-like lines (whiplash curves).',
          '3. Pop Art (1950s-1960s): Andy Warhol, Roy Lichtenstein. Integrated consumer culture, comic strips, and mass media.',
          'Iconic Designers & Architects:',
          'Dieter Rams: Chief Designer at Braun. Developed the 10 Principles of Good Design (Good design is as little design as possible). Influenced Apple (Jony Ive).',
          'Charles & Ray Eames: Pioneers in molded plywood and fiberglass lounge chairs.',
          'Le Corbusier & Charles Correa: Modernist architects (Le Corbusier planned Chandigarh; Charles Correa designed Jawahar Kala Kendra in Jaipur).',
          'Color Theory Essentials:',
          'Primary Colors: Red, Yellow, Blue in subtractive pigment; Red, Green, Blue (RGB) in additive light.',
          'Complementary Colors: Opposite each other on the color wheel (Blue & Orange, Red & Green). High contrast.',
          'Analogous Colors: Adjacent to each other on the color wheel (Blue, Teal, Green). Smooth visual harmony.'
        ],
        visualType: 'color-wheel-bauhaus',
        keyConcepts: [
          'Bauhaus, Art Nouveau, Art Deco, Pop Art, Modernism',
          'Dieter Rams 10 Principles of Good Design',
          'Color Wheel (Primary, Secondary, Complementary, Triadic)',
          'Eco-design (Circular Economy, Biomimicry, Cradle-to-Cradle)'
        ],
        realLifeExamples: [
          {
            title: 'Biomimicry in Bullet Trains',
            description: 'Japanese Shinkansen bullet train nose was redesigned after the beak of the Kingfisher bird to eliminate sonic booms when exiting tunnels while saving 15% electricity.'
          }
        ],
        solvedExamples: [
          {
            question: 'Who coined the famous phrase "Less is More" which became the defining philosophy of Minimalist modern architecture?',
            solution: 'Ludwig Mies van der Rohe (Bauhaus architect).',
            explanationStep: 'Mies van der Rohe advocated for structural clarity and removing ornamental clutter.'
          },
          {
            question: 'What color is complementary to Yellow on the traditional 12-color wheel?',
            solution: 'Purple / Violet.',
            explanationStep: 'Yellow lies directly opposite Purple on the primary color wheel.'
          }
        ],
        probableQuestions: [
          {
            id: 'ac-q2',
            question: 'Dieter Rams famously stated that "Good design should be unobtrusive and...". Which of his 10 Principles aligns directly with modern eco-design?',
            options: ['Good design is expensive', 'Good design is environmentally friendly', 'Good design uses bright primary colors', 'Good design changes every year'],
            correctAnswer: 1,
            explanation: 'Rams principle #9 states: Good design is environmentally friendly. Design makes an important contribution to the preservation of the environment.',
            hint: 'Think about sustainability and long-lasting utility versus planned obsolescence.'
          }
        ],
        books: [
          { 
            title: 'The Story of Art', 
            author: 'E.H. Gombrich', 
            focus: 'The foundational masterwork on world art history',
            url: 'https://www.google.com/search?tbm=bks&q=The+Story+of+Art+Gombrich'
          },
          { 
            title: 'Dieter Rams: As Little Design as Possible', 
            author: 'Sophie Lovell', 
            focus: 'Industrial design philosophy',
            url: 'https://www.google.com/search?tbm=bks&q=Dieter+Rams+As+Little+Design+as+Possible'
          }
        ],
        articles: [
          { 
            title: 'Bauhaus Movement & Its Impact on Modern Graphic & Industrial Design', 
            summary: 'Why 100-year-old Bauhaus principles still dictate smartphone UI and modern furniture.',
            url: 'https://en.wikipedia.org/wiki/Bauhaus'
          }
        ],
        videos: [
          { 
            title: 'Color Theory & Color Harmony for Artists', 
            embedId: 'color-theory-masterclass', 
            duration: '19 mins', 
            platform: 'YouTube', 
            description: 'Comprehensive guide to complementary, split-complementary, and CMYK color spaces.',
            url: 'https://www.youtube.com/results?search_query=color+theory+masterclass+design'
          }
        ]
      }
    ]
  },
  {
    id: 'scholastic-science-math',
    title: 'Scholastic Science & Math',
    icon: 'Calculator',
    color: 'from-emerald-500 to-teal-600',
    accentColor: '#10b981',
    summary: 'Class 10 physics and math principles applied to practical design: simple machines, levers, pulleys, gear ratios, center of gravity, optics, golden ratio, scale geometry, and proportions.',
    weightage: '15% of Exam',
    topics: [
      {
        id: 'simple-machines-levers-optics',
        title: 'Simple Machines, Mechanical Advantage & Applied Optics',
        subHeading: 'Levers, gear velocity ratios, center of gravity stability, light refraction, and lens ergonomics.',
        cheatSheetRules: [
          'Class 1 Lever: Fulcrum in middle (Scissors, Crowbar). MA can be > 1, = 1, or < 1.',
          'Class 2 Lever: Load in middle (Wheelbarrow, Nutcracker). MA > 1 (always multiplies force).',
          'Class 3 Lever: Effort in middle (Tweezers, Forearm). MA < 1 (multiplies speed/distance).',
          'Gear Ratio = Driven Gear Teeth / Driver Gear Teeth. Speed Driven = Speed Driver / Gear Ratio.'
        ],
        examTraps: [
          'In lever questions, locate the FULCRUM first! If the pivot point is at one end and effort is applied at the other end with the load in between, it is ALWAYS a Class 2 lever.'
        ],
        explanationParagraphs: [
          'SEED tests Class 10 physics concepts through tangible design applications—how scissors work, why bicycles shift gears, and how camera lenses focus light.',
          'Classes of Levers:',
          '1. Class 1 Lever: Fulcrum in middle (e.g., Scissors, Crowbar, Seesaw). Reverses force direction.',
          '2. Class 2 Lever: Load in middle (e.g., Wheelbarrow, Nutcracker, Bottle opener). Mechanical Advantage > 1 (always multiplies force).',
          '3. Class 3 Lever: Effort in middle (e.g., Tweezers, Ice tongs, Fishing rod, Human forearm). Mechanical Advantage < 1 (multiplies speed/distance).',
          'Mechanical Advantage (MA) = Load / Effort = Effort Arm / Load Arm.',
          'Gear Systems & Velocity Ratio:',
          'Gear Ratio = Driven Gear Teeth / Driver Gear Teeth.',
          'When a small gear drives a larger gear, rotational speed decreases but torque increases.',
          'Center of Gravity & Stability:',
          'An object remains stable as long as the vertical line drawn straight down from its Center of Gravity falls within its base support area. Lower Center of Gravity and wider base = maximum stability.',
          'Optics & Color Dispersion:',
          'White light passing through a glass triangular prism refracts and disperses into VIBGYOR due to varying wavelengths (Red bends least; Violet bends most).'
        ],
        visualType: 'levers-gears-physics',
        keyConcepts: [
          '3 Classes of Levers (Fulcrum-Load-Effort positions)',
          'Mechanical Advantage (MA = L / E)',
          'Gear Speed vs Torque ratios',
          'Center of Gravity & Base of Support in Ergonomic Design',
          'Light Refraction, Prism Dispersion, Convex/Concave Lenses'
        ],
        realLifeExamples: [
          {
            title: 'Nail Clipper Compound Lever System',
            description: 'A nail clipper combines a Class 3 lever (pressing handle) with a Class 1 lever (cutting jaws) to create massive force in a tiny footprint.'
          },
          {
            title: 'Ergonomic Desk Chair Base Stability',
            description: 'Office chairs use a 5-point star wheel base rather than 4 legs to broaden the Base of Support and prevent tipping when leaning back.'
          }
        ],
        solvedExamples: [
          {
            question: 'A bottle opener is used to pry open a metal cap. Is the bottle opener a Class 1, Class 2, or Class 3 lever?',
            solution: 'Class 2 Lever.',
            explanationStep: 'The fulcrum is at the top rim of the cap, the load (cap lip being pulled up) is in the middle, and the effort is applied upwards at the handle end.'
          },
          {
            question: 'A 10-tooth driver gear rotates at 300 RPM. It drives a 30-tooth gear. What is the speed of the 30-tooth gear?',
            solution: '100 RPM.',
            explanationStep: 'Gear Ratio = 30 / 10 = 3. Speed = 300 / 3 = 100 RPM.'
          }
        ],
        probableQuestions: [
          {
            id: 'sm-q1',
            question: 'A driver gear with 12 teeth rotates at 120 RPM and drives a larger gear with 36 teeth. What is the rotational speed of the larger gear?',
            options: ['360 RPM', '40 RPM', '120 RPM', '240 RPM'],
            correctAnswer: 1,
            explanation: 'Gear Ratio = Driven / Driver = 36 / 12 = 3. Speed of Driven Gear = Driver Speed / Gear Ratio = 120 / 3 = 40 RPM.',
            hint: 'A larger gear rotates slower than a smaller driving gear.'
          }
        ],
        books: [
          { 
            title: 'Class 10 NCERT Physics & Science Handbook', 
            author: 'NCERT', 
            focus: 'Light reflection/refraction, work & energy, simple machines',
            url: 'https://www.google.com/search?tbm=bks&q=Class+10+NCERT+Physics'
          },
          { 
            title: 'The Way Things Work Now', 
            author: 'David Macaulay', 
            focus: 'Visual guide to how everyday mechanisms, levers, and gears function',
            url: 'https://www.google.com/search?tbm=bks&q=The+Way+Things+Work+Now+David+Macaulay'
          }
        ],
        articles: [
          { 
            title: 'Physics for Industrial Designers: Levers, Pulleys & Gear Systems', 
            summary: 'Practical engineering mechanics formulas simplified for design aspirants.',
            url: 'https://en.wikipedia.org/wiki/Simple_machine'
          }
        ],
        videos: [
          { 
            title: 'Understanding Levers: Class 1, 2, and 3 Explained', 
            embedId: 'levers-physics-video', 
            duration: '10 mins', 
            platform: 'YouTube', 
            description: 'Real-world examples of tools illustrating all 3 lever types.',
            url: 'https://www.youtube.com/results?search_query=levers+physics+class+1+2+3+explained'
          }
        ]
      },
      {
        id: 'golden-ratio-scale-proportions',
        title: 'The Golden Ratio, Fibonacci Sequence & Scale Geometry',
        subHeading: 'Understanding mathematical harmony in design: Phi (1.618), scale ratios, modular grids, and proportional systems.',
        cheatSheetRules: [
          'Golden Ratio: Phi = (1 + sqrt(5)) / 2 = 1.6180339...',
          'Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... (Fn = Fn-1 + Fn-2).',
          'ISO Paper Aspect Ratio: 1 : sqrt(2) = 1 : 1.414. Halving A3 gives A4 with the EXACT same proportions!'
        ],
        examTraps: [
          'In scale area calculations (e.g. 1:100 scale), remember that area scales by the SQUARE of the linear factor (100 * 100 = 10,000 times!).'
        ],
        explanationParagraphs: [
          'Design aesthetics are deeply rooted in mathematical geometry, proportions, and scale ratios.',
          'The Golden Ratio (Phi = 1.618):',
          'Two quantities a and b (a > b) are in the Golden Ratio if (a + b) / a = a / b = Phi = 1.6180339...',
          'Found abundantly in nature (sunflower seeds, nautilus shells, pinecones, human faces) and iconic art/architecture (Parthenon in Athens, Taj Mahal, Leonardo da Vinci Mona Lisa, Apple logo).',
          'The Fibonacci Sequence:',
          'Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...',
          'Each number is the sum of the preceding two (Fn = Fn-1 + Fn-2).',
          'As numbers grow, the ratio of consecutive Fibonacci numbers converges exactly to the Golden Ratio Phi.',
          'Scale and Proportions in Drawing:',
          'Architectural Scale (1:50, 1:100): 1 cm on paper represents 50 cm (0.5 m) or 100 cm (1 m) in real life.',
          'Aspect Ratio: Width-to-height ratio of screens (16:9 widescreen, 4:3 traditional screen, 1:1 square Instagram frame).'
        ],
        visualType: 'golden-ratio-spiral',
        keyConcepts: [
          'Golden Ratio Phi (Phi = 1.618)',
          'Fibonacci sequence relation to natural spirals',
          'Scale conversions (1:20, 1:100, 1:500)',
          'Aspect ratios (16:9, 4:3, 3:2, 1:1)',
          'Paper sizes (A0 to A4 ratio sqrt(2) : 1)'
        ],
        realLifeExamples: [
          {
            title: 'ISO 216 Paper Standard (A4, A3, A2)',
            description: 'All ISO paper sizes maintain an aspect ratio of 1 : sqrt(2) = 1 : 1.414. Folding an A3 sheet in half produces two A4 sheets with identical proportions.'
          },
          {
            title: 'Apple Product Design & Golden Spirals',
            description: 'The geometry of Apple logo curves and iPhone camera lens placements closely mirror golden rectangle grid divisions.'
          }
        ],
        solvedExamples: [
          {
            question: 'An architectural plan uses a scale of 1:200. If a courtyard measures 4 cm by 3 cm on the drawing sheet, what is the actual physical area of the courtyard in square meters?',
            solution: '48 Square Meters.',
            explanationStep: 'Actual width = 4 cm * 200 = 800 cm = 8 meters. Actual length = 3 cm * 200 = 600 cm = 6 meters. Actual Area = 8 m * 6 m = 48 square meters.'
          },
          {
            question: 'What is the 7th number in the Fibonacci sequence starting with F1 = 1, F2 = 1?',
            solution: '13.',
            explanationStep: 'F1=1, F2=1, F3=2, F4=3, F5=5, F6=8, F7=13.'
          }
        ],
        probableQuestions: [
          {
            id: 'sm-q3',
            question: 'What happens to the aspect ratio of an ISO standard A3 paper sheet when you cut it in half along its longer side to create two A4 sheets?',
            options: [
              'The aspect ratio becomes 1:1 (Square)',
              'The aspect ratio remains unchanged at 1:sqrt(2)',
              'The aspect ratio doubles to 1:2',
              'The aspect ratio changes to 16:9'
            ],
            correctAnswer: 1,
            explanation: 'ISO 216 paper standard is mathematically designed so that halving a sheet preserves the exact 1 : sqrt(2) proportional aspect ratio.',
            hint: 'This is the unique mathematical property of the square root of 2 ratio.'
          }
        ],
        books: [
          { 
            title: 'The Golden Ratio: The Story of Phi', 
            author: 'Mario Livio', 
            focus: 'The math, art, and natural science of 1.618',
            url: 'https://www.google.com/search?tbm=bks&q=The+Golden+Ratio+Mario+Livio'
          },
          { 
            title: 'Grid Systems in Graphic Design', 
            author: 'Josef Muller-Brockmann', 
            focus: 'Proportional grids, ratios, and layout structure',
            url: 'https://www.google.com/search?tbm=bks&q=Grid+Systems+in+Graphic+Design+Josef+Muller-Brockmann'
          }
        ],
        articles: [
          { 
            title: 'How to Use the Golden Ratio in Graphic & Product Design', 
            summary: 'Tutorial on constructing golden spirals and grid rectangles.',
            url: 'https://en.wikipedia.org/wiki/Golden_ratio'
          }
        ],
        videos: [
          { 
            title: 'The Fibonacci Sequence & Golden Ratio in Nature & Art', 
            embedId: 'golden-ratio-nature-video', 
            duration: '13 mins', 
            platform: 'YouTube', 
            description: 'Visual demonstration of nautilus shells, sunflowers, and classical architecture.',
            url: 'https://www.youtube.com/results?search_query=fibonacci+sequence+golden+ratio+art+nature'
          }
        ]
      }
    ]
  }
];

export const DAILY_SKETCH_PROMPTS = [
  {
    id: 1,
    title: 'Futuristic Eco-Friendly Water Bottle',
    category: 'Product Design',
    timeLimitMinutes: 20,
    promptText: 'Design a portable water bottle for hikers that uses solar energy to purify water. Draw 2 perspectives (Isometric view + exploded detail of filter component).',
    tips: ['Use clean light source shading', 'Show ergonomic grip indicators', 'Annotate materials used (e.g. recycled silicone, solar rim)']
  },
  {
    id: 2,
    title: 'Transformable Compact Desk Lamp',
    category: 'Industrial Design',
    timeLimitMinutes: 15,
    promptText: 'Sketch a desk lamp that folds flat like a book for easy travel. Show both its open operating state and folded state.',
    tips: ['Include pivot hinge details', 'Draw light beam direction lines', 'Maintain consistent proportion']
  },
  {
    id: 3,
    title: 'Visual Storyboard: Smart Watch Helper for Elderly',
    category: 'User Experience & Interaction',
    timeLimitMinutes: 25,
    promptText: 'Draw a 3-frame sequential comic storyboard illustrating an elderly person using a smart wearable device during a home medical emergency.',
    tips: ['Focus on facial expressions', 'Highlight button/screen callouts', 'Keep story progression clear']
  },
  {
    id: 4,
    title: 'Poster Design: Save Indian Heritage Crafts',
    category: 'Visual Communication',
    timeLimitMinutes: 20,
    promptText: 'Create a striking visual poster incorporating Warli or Madhubani folk elements to raise awareness about supporting local Indian artisans.',
    tips: ['Balance negative space and text placement', 'Use bold geometric borders', 'Choose a harmonious 3-color palette']
  }
];

export const SEED_EXAM_OVERVIEW_INFO = {
  examName: 'SEED (Symbiosis Entrance Exam for Design)',
  conductingBody: 'Symbiosis International (Deemed University) - SID Pune',
  sections: [
    'Creative Visualization (25%)',
    'Observation & Perception (20%)',
    'Critical Thinking & Problem-Solving (20%)',
    'Art, Craft, Culture & Design (20%)',
    'Scholastic Science & Math (15%)'
  ],
  totalQuestions: 60,
  durationMinutes: 60,
  markingScheme: '+1 mark per correct answer, No negative marking',
  nextStage: 'PRT (Portfolio Review & Personal Interaction / Studio Test)'
};
