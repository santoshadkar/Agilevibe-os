// SEED Exam Dataset - 120 FULLY UNIQUE QUESTIONS
// Every single question is distinct, with NO modulo repetition.

export const seedQuestions = [
  // ==========================================
  // SECTION 1: MCQs (Questions 1 to 50 - 50 Unique Questions)
  // ==========================================
  {
    id: 'seed_q_1',
    type: 'mcq',
    section: 'seed_mcq',
    number: 1,
    question: 'Q1. Which design principle refers to the visual weight distribution of elements in a composition?',
    options: ['Contrast', 'Balance', 'Hierarchy', 'Rhythm'],
    answer: 1,
    explanation: 'Balance refers to the distribution of visual weight in a design, which can be symmetrical, asymmetrical, or radial.',
    topic: 'Design Principles'
  },
  {
    id: 'seed_q_2',
    type: 'mcq',
    section: 'seed_mcq',
    number: 2,
    question: 'Q2. Which color model is subtractive and used primarily in commercial offset and digital printing?',
    options: ['RGB', 'HSB', 'CMYK', 'LAB'],
    answer: 2,
    explanation: 'CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used in color printing.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_3',
    type: 'mcq',
    section: 'seed_mcq',
    number: 3,
    question: 'Q3. What does the term "Kerning" refer to in Typography?',
    options: ['Space between two specific characters', 'Space between lines of text', 'Vertical scale of a font', 'Space between all letters in a paragraph'],
    answer: 0,
    explanation: 'Kerning is the process of adjusting the spacing between two specific characters in a font.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_4',
    type: 'mcq',
    section: 'seed_mcq',
    number: 4,
    question: 'Q4. Which famous design school founded by Walter Gropius in 1919 popularized "Form follows function"?',
    options: ['Art Deco', 'Bauhaus', 'De Stijl', 'Memphis Group'],
    answer: 1,
    explanation: 'The Bauhaus school in Germany emphasized functionalism and the integration of fine art and functional design.',
    topic: 'Design History'
  },
  {
    id: 'seed_q_5',
    type: 'mcq',
    section: 'seed_mcq',
    number: 5,
    question: 'Q5. What is the primary material used in the traditional Indian handicraft "Patan Patola"?',
    options: ['Cotton', 'Double Ikkat Silk', 'Jute', 'Wool'],
    answer: 1,
    explanation: 'Patan Patola from Gujarat is famous for its intricate double Ikkat silk weaving.',
    topic: 'Indian Craft & Heritage'
  },
  {
    id: 'seed_q_6',
    type: 'mcq',
    section: 'seed_mcq',
    number: 6,
    question: 'Q6. In Ergonomics, what is the recommended eye line angle relative to a monitor top for minimal neck strain?',
    options: ['15 to 20 degrees below horizontal', '45 degrees upward', '0 degrees parallel', '30 degrees upward'],
    answer: 0,
    explanation: 'The top of the monitor should be at or slightly below eye level, looking down at a 15 to 20 degree angle.',
    topic: 'Ergonomics'
  },
  {
    id: 'seed_q_7',
    type: 'mcq',
    section: 'seed_mcq',
    number: 7,
    question: 'Q7. Which Gestalt principle explains why we perceive a series of dots forming a circle as a complete shape?',
    options: ['Closure', 'Proximity', 'Continuity', 'Similarity'],
    answer: 0,
    explanation: 'Closure occurs when an object is incomplete or a space is not enclosed, but the mind fills in the visual gap.',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_8',
    type: 'mcq',
    section: 'seed_mcq',
    number: 8,
    question: 'Q8. What type of perspective drawing uses three vanishing points to depict height, width, and depth?',
    options: ['One-point perspective', 'Two-point perspective', 'Three-point perspective', 'Isometric projection'],
    answer: 2,
    explanation: 'Three-point perspective includes a third vanishing point above or below the horizon line (bird-eye or worm-eye view).',
    topic: 'Perspective & Drawing'
  },
  {
    id: 'seed_q_9',
    type: 'mcq',
    section: 'seed_mcq',
    number: 9,
    question: 'Q9. Which design movement was characterized by organic curves, whiplash lines, and floral motifs (1890–1910)?',
    options: ['Art Nouveau', 'Minimalism', 'Constructivism', 'Art Deco'],
    answer: 0,
    explanation: 'Art Nouveau embraced natural forms, decorative patterns, and flowing whiplash lines.',
    topic: 'Design History'
  },
  {
    id: 'seed_q_10',
    type: 'mcq',
    section: 'seed_mcq',
    number: 10,
    question: 'Q10. What color harmony is created by choosing colors directly opposite each other on the color wheel?',
    options: ['Analogous', 'Monochromatic', 'Complementary', 'Triadic'],
    answer: 2,
    explanation: 'Complementary colors sit opposite each other on the color wheel, creating high contrast.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_11',
    type: 'mcq',
    section: 'seed_mcq',
    number: 11,
    question: 'Q11. What is the standard international ISO paper size aspect ratio based on?',
    options: ['1 : 1.414 (1 : √2)', '1 : 1.618 (Golden Ratio)', '4 : 3', '16 : 9'],
    answer: 0,
    explanation: 'ISO paper sizes (A4, A3, etc.) maintain a constant aspect ratio of 1 : √2 (approx 1 : 1.4142).',
    topic: 'Design Standards'
  },
  {
    id: 'seed_q_12',
    type: 'mcq',
    section: 'seed_mcq',
    number: 12,
    question: 'Q12. Which typeface category is characterized by decorative strokes at the ends of letter stems?',
    options: ['Serif', 'Sans-Serif', 'Monospace', 'Geometric'],
    answer: 0,
    explanation: 'Serif fonts have small decorative lines or strokes attached to the ends of letterforms.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_13',
    type: 'mcq',
    section: 'seed_mcq',
    number: 13,
    question: 'Q13. In product design, what does "Usability" evaluate?',
    options: ['Manufacturing cost', 'Ease of use, learnability, and user satisfaction', 'Color vibrancy', 'Weight in kilograms'],
    answer: 1,
    explanation: 'Usability measures how effectively, efficiently, and satisfactorily a user can interact with a product.',
    topic: 'User Experience'
  },
  {
    id: 'seed_q_14',
    type: 'mcq',
    section: 'seed_mcq',
    number: 14,
    question: 'Q14. Which designer created the iconic Lounge Chair and Ottoman (1956) made of molded plywood and leather?',
    options: ['Charles and Ray Eames', 'Philippe Starck', 'Dieter Rams', 'Le Corbusier'],
    answer: 0,
    explanation: 'Charles and Ray Eames designed the famous Eames Lounge Chair for the Herman Miller furniture company.',
    topic: 'Iconic Designers'
  },
  {
    id: 'seed_q_15',
    type: 'mcq',
    section: 'seed_mcq',
    number: 15,
    question: 'Q15. What term describes the ratio of object size in a drawing relative to its real-world dimensions?',
    options: ['Resolution', 'Scale', 'Opacity', 'Texture'],
    answer: 1,
    explanation: 'Scale indicates the proportion between the dimensions of a drawing/model and the actual object.',
    topic: 'Drawing Fundamentals'
  },
  {
    id: 'seed_q_16',
    type: 'mcq',
    section: 'seed_mcq',
    number: 16,
    question: 'Q16. What material is traditionally used in the craft of "Channapatna Toys" from Karnataka?',
    options: ['Soft Wrightia tinctoria Wood & Vegetable Dyes', 'Terracotta Clay', 'Brass Metal Castings', 'Papier-mâché'],
    answer: 0,
    explanation: 'Channapatna toys are crafted from Ivory Wood (Aale mara) and coated with non-toxic lac dyed with vegetable colors.',
    topic: 'Indian Craft'
  },
  {
    id: 'seed_q_17',
    type: 'mcq',
    section: 'seed_mcq',
    number: 17,
    question: 'Q17. Which visual illusion makes two horizontal lines of equal length appear different due to arrowhead fins?',
    options: ['Müller-Lyer Illusion', 'Rubin Vase', 'Necker Cube', 'Hermann Grid'],
    answer: 0,
    explanation: 'The Müller-Lyer illusion causes equal-length segments to appear unequal based on inward or outward pointing arrows.',
    topic: 'Visual Illusions'
  },
  {
    id: 'seed_q_18',
    type: 'mcq',
    section: 'seed_mcq',
    number: 18,
    question: 'Q18. What is "Affordance" in Industrial Design?',
    options: ['Retail price of the product', 'Visual cues indicating how an object should be used', 'Environmental footprint', 'Warranty duration'],
    answer: 1,
    explanation: 'Affordance is the property of an object that intuitively communicates its operational action (e.g. push plate vs pull handle).',
    topic: 'Ergonomics & Usability'
  },
  {
    id: 'seed_q_19',
    type: 'mcq',
    section: 'seed_mcq',
    number: 19,
    question: 'Q19. Which color temperature (in Kelvin) corresponds to cool daylight used in art studios?',
    options: ['2700 K', '3000 K', '4000 K', '6500 K'],
    answer: 3,
    explanation: '6500 K represents crisp daylight white, ideal for accurate color evaluation in design studios.',
    topic: 'Lighting & Color'
  },
  {
    id: 'seed_q_20',
    type: 'mcq',
    section: 'seed_mcq',
    number: 20,
    question: 'Q20. What is the primary function of a "Mood Board" in creative design workflows?',
    options: ['Final production blueprint', 'Visual collage establishing concept tone, color, and aesthetic direction', 'Financial budget spreadsheet', 'Manufacturing contract'],
    answer: 1,
    explanation: 'A mood board collects textures, colors, and imagery to visually communicate design intent.',
    topic: 'Design Process'
  },
  {
    id: 'seed_q_21',
    type: 'mcq',
    section: 'seed_mcq',
    number: 21,
    question: 'Q21. Which design principle involves creating visual interest by placing contrasting elements next to each other?',
    options: ['Juxtaposition', 'Repetition', 'Unity', 'Monochrome'],
    answer: 0,
    explanation: 'Juxtaposition places contrasting visual elements side-by-side to highlight differences.',
    topic: 'Design Principles'
  },
  {
    id: 'seed_q_22',
    type: 'mcq',
    section: 'seed_mcq',
    number: 22,
    question: 'Q22. What additive color mixing process combines Red, Green, and Blue light to produce White light?',
    options: ['RGB Model', 'CMYK Model', 'Subtractive Model', 'Pigment Model'],
    answer: 0,
    explanation: 'RGB is an additive light color model where combining full Red, Green, and Blue produces white light.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_23',
    type: 'mcq',
    section: 'seed_mcq',
    number: 23,
    question: 'Q23. What does "Tracking" mean in digital typesetting?',
    options: ['Adjusting uniform letter spacing across a block of text', 'Space between two letters', 'Vertical line height', 'Font size in points'],
    answer: 0,
    explanation: 'Tracking adjusts letter-spacing uniformly over a whole word, line, or paragraph.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_24',
    type: 'mcq',
    section: 'seed_mcq',
    number: 24,
    question: 'Q24. Who formulated the 10 Principles of Good Design, including "Good design is as little design as possible"?',
    options: ['Dieter Rams', 'Jony Ive', 'Paul Rand', 'Milton Glaser'],
    answer: 0,
    explanation: 'Dieter Rams, chief designer for Braun, authored the famous 10 Principles for Good Design.',
    topic: 'Design Theory'
  },
  {
    id: 'seed_q_25',
    type: 'mcq',
    section: 'seed_mcq',
    number: 25,
    question: 'Q25. "Madhubani" folk painting traditionally originates from which Indian state?',
    options: ['Bihar', 'Rajasthan', 'Odisha', 'Kerala'],
    answer: 0,
    explanation: 'Madhubani art (Mithila painting) originates from the Mithila region of Bihar.',
    topic: 'Indian Art'
  },
  {
    id: 'seed_q_26',
    type: 'mcq',
    section: 'seed_mcq',
    number: 26,
    question: 'Q26. What percentile measurement is standard in Ergonomics when sizing doorway clearance height?',
    options: ['5th percentile female', '50th percentile male', '95th or 99th percentile male', '10th percentile male'],
    answer: 2,
    explanation: 'Doorways and clearance dimensions are designed for 95th/99th percentile tall individuals to prevent head injury.',
    topic: 'Ergonomics'
  },
  {
    id: 'seed_q_27',
    type: 'mcq',
    section: 'seed_mcq',
    number: 27,
    question: 'Q27. The Gestalt Law of "Proximity" states that objects placed close to one another are perceived as:',
    options: ['Separate unrelated items', 'A single group or unit', 'Opposing forces', 'Symmetrical shapes'],
    answer: 1,
    explanation: 'Proximity causes human perception to group elements that are positioned near each other.',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_28',
    type: 'mcq',
    section: 'seed_mcq',
    number: 28,
    question: 'Q28. In orthogonal projection, how many principal views are standard in technical drawing layout?',
    options: ['1 view', '3 views (Front, Top, Side)', '6 views', '2 views'],
    answer: 1,
    explanation: 'Standard multiview orthographic projection displays Front, Top, and Right Side views.',
    topic: 'Technical Drawing'
  },
  {
    id: 'seed_q_29',
    type: 'mcq',
    section: 'seed_mcq',
    number: 29,
    question: 'Q29. Art Deco movement (1920s–1930s) was distinguished by:',
    options: ['Streamlined geometric shapes, metallic luster, and sleek symmetry', 'Rough unpolished wood', 'Floral Art Nouveau curves', 'Abstract expressionist splatters'],
    answer: 0,
    explanation: 'Art Deco celebrated modern industrialization with geometric motifs, zigzags, and metallic luxury.',
    topic: 'Design History'
  },
  {
    id: 'seed_q_30',
    type: 'mcq',
    section: 'seed_mcq',
    number: 30,
    question: 'Q30. What term describes three colors adjacent to each other on the 12-color wheel?',
    options: ['Analogous Colors', 'Complementary Colors', 'Split-Complementary', 'Monochromatic'],
    answer: 0,
    explanation: 'Analogous colors sit next to each other on the color wheel (e.g. Yellow, Yellow-Green, Green).',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_31',
    type: 'mcq',
    section: 'seed_mcq',
    number: 31,
    question: 'Q31. Which file format uses vector graphics that can scale infinitely without pixelation?',
    options: ['JPEG', 'PNG', 'SVG', 'GIF'],
    answer: 2,
    explanation: 'SVG (Scalable Vector Graphics) uses XML math paths, rendering crisp at any resolution.',
    topic: 'Digital Graphics'
  },
  {
    id: 'seed_q_32',
    type: 'mcq',
    section: 'seed_mcq',
    number: 32,
    question: 'Q32. In typography, what is the imaginary horizontal baseline upon which most letters sit?',
    options: ['Mean line', 'Baseline', 'Cap height', 'X-height'],
    answer: 1,
    explanation: 'The baseline is the line upon which characters rest and descenders extend below.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_33',
    type: 'mcq',
    section: 'seed_mcq',
    number: 33,
    question: 'Q33. What is "Universal Design"?',
    options: ['Designing exclusively for young adults', 'Designing products accessible to all people regardless of age or ability', 'Designing products sold globally', 'Designing expensive luxury items'],
    answer: 1,
    explanation: 'Universal Design creates inclusive products usable by everyone, including elderly and disabled individuals.',
    topic: 'Inclusive Design'
  },
  {
    id: 'seed_q_34',
    type: 'mcq',
    section: 'seed_mcq',
    number: 34,
    question: 'Q34. Who designed the iconic "Juicy Salif" lemon squeezer for Alessi in 1990?',
    options: ['Philippe Starck', 'Marc Newson', 'Zaha Hadid', 'Ettore Sottsass'],
    answer: 0,
    explanation: 'French designer Philippe Starck created the famous spider-like Juicy Salif citrus squeezer.',
    topic: 'Iconic Designers'
  },
  {
    id: 'seed_q_35',
    type: 'mcq',
    section: 'seed_mcq',
    number: 35,
    question: 'Q35. What is the Rule of Thirds in photography and visual framing?',
    options: ['Dividing frame into 9 equal rectangles with 2 horizontal and 2 vertical lines', 'Placing subject exactly in center', 'Dividing canvas into 3 equal columns', 'Using 3 light sources'],
    answer: 0,
    explanation: 'Rule of thirds places visual interest points along 4 intersecting grid lines for dynamic composition.',
    topic: 'Visual Framing'
  },
  {
    id: 'seed_q_36',
    type: 'mcq',
    section: 'seed_mcq',
    number: 36,
    question: 'Q36. "Dokra" art is an ancient Indian metal casting technique that uses which process?',
    options: ['Lost-Wax Casting (Cire Perdue)', '3D Metal Printing', 'Die Casting', 'Sand Casting'],
    answer: 0,
    explanation: 'Dokra is a 4,000-year-old non-ferrous metal casting art using the lost-wax technique.',
    topic: 'Indian Metal Craft'
  },
  {
    id: 'seed_q_37',
    type: 'mcq',
    section: 'seed_mcq',
    number: 37,
    question: 'Q37. What optical effect causes a static pattern of fine lines to appear to shimmer or vibrate?',
    options: ['Moiré Effect', 'Lens Flare', 'Vignetting', 'Chromatic Aberration'],
    answer: 0,
    explanation: 'Moiré pattern occurs when two fine repetitive line grids overlap at an angle.',
    topic: 'Optical Phenomena'
  },
  {
    id: 'seed_q_38',
    type: 'mcq',
    section: 'seed_mcq',
    number: 38,
    question: 'Q38. What does "Poka-Yoke" mean in industrial manufacturing design?',
    options: ['Mistake-proofing or error-prevention mechanism', 'High cost packaging', 'Speedy assembly', 'Color matching'],
    answer: 0,
    explanation: 'Poka-Yoke is a Japanese design technique that prevents user error (e.g. SIM card tray shape).',
    topic: 'Design Methodology'
  },
  {
    id: 'seed_q_39',
    type: 'mcq',
    section: 'seed_mcq',
    number: 39,
    question: 'Q39. What is "Negative Space" in graphic design?',
    options: ['Unused empty space around and between subjects', 'Dark black background', 'Defective printed area', 'Faded colors'],
    answer: 0,
    explanation: 'Negative space (white space) is the active background space surrounding main focal subjects.',
    topic: 'Visual Composition'
  },
  {
    id: 'seed_q_40',
    type: 'mcq',
    section: 'seed_mcq',
    number: 40,
    question: 'Q40. Which famous graphic designer created the "I ❤ NY" logo and Target logo branding?',
    options: ['Milton Glaser', 'Saul Bass', 'Massimo Vignelli', 'Paula Scher'],
    answer: 0,
    explanation: 'Milton Glaser designed the legendary I Love NY logo in 1977 on a crumpled napkin.',
    topic: 'Logo History'
  },
  {
    id: 'seed_q_41',
    type: 'mcq',
    section: 'seed_mcq',
    number: 41,
    question: 'Q41. What is the primary characteristic of "Minimalism" in interior design?',
    options: ['Clutter-free spaces, neutral palettes, clean lines, and essential furniture', 'Heavy velvet drapes', 'Ornate gilded gold frames', 'Bright neon lights'],
    answer: 0,
    explanation: 'Minimalism strips away non-essential clutter, focusing on form, light, and materiality.',
    topic: 'Interior Design'
  },
  {
    id: 'seed_q_42',
    type: 'mcq',
    section: 'seed_mcq',
    number: 42,
    question: 'Q42. In color mixing, a "Tone" is created by mixing a pure hue with:',
    options: ['Gray', 'White', 'Black', 'Yellow'],
    answer: 0,
    explanation: 'Mixing a pure hue with Gray creates a Tone, adjusting saturation without altering hue.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_43',
    type: 'mcq',
    section: 'seed_mcq',
    number: 43,
    question: 'Q43. What is the height of lowercase letters in a font called (excluding ascenders and descenders)?',
    options: ['X-height', 'Cap height', 'Em-height', 'Leading'],
    answer: 0,
    explanation: 'X-height is the height of lowercase x in a typeface, measuring letter body proportion.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_44',
    type: 'mcq',
    section: 'seed_mcq',
    number: 44,
    question: 'Q44. Which Scandinavian design movement emphasized functionalism, natural wood, and light colors?',
    options: ['Nordic/Scandinavian Design', 'Memphis Group', 'De Stijl', 'Art Deco'],
    answer: 0,
    explanation: 'Nordic design balances human-centered functionality with natural woods and minimalist elegance.',
    topic: 'Design History'
  },
  {
    id: 'seed_q_45',
    type: 'mcq',
    section: 'seed_mcq',
    number: 45,
    question: 'Q45. "Pithora" paintings are sacred ritualistic wall art created by indigenous tribes in:',
    options: ['Gujarat and Madhya Pradesh', 'Tamil Nadu', 'Assam', 'Punjab'],
    answer: 0,
    explanation: 'Pithora ritual paintings are painted on mud walls by Rathwa and Bhil tribes in Gujarat/MP.',
    topic: 'Indian Folk Art'
  },
  {
    id: 'seed_q_46',
    type: 'mcq',
    section: 'seed_mcq',
    number: 46,
    question: 'Q46. What type of lighting fixture directs 90% to 100% of light output downward onto a surface?',
    options: ['Direct Lighting', 'Indirect Lighting', 'Ambient Lighting', 'Diffused Lighting'],
    answer: 0,
    explanation: 'Direct lighting casts illumination straight onto target surfaces without ceiling bounce.',
    topic: 'Lighting Design'
  },
  {
    id: 'seed_q_47',
    type: 'mcq',
    section: 'seed_mcq',
    number: 47,
    question: 'Q47. The Gestalt principle of "Continuity" suggests that human eyes naturally follow:',
    options: ['Smooth uninterrupted paths and curves', 'Broken jagged dots', 'Random scatter points', 'Symmetrical squares'],
    answer: 0,
    explanation: 'Continuity directs visual perception along continuous smooth lines or curves.',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_48',
    type: 'mcq',
    section: 'seed_mcq',
    number: 48,
    question: 'Q48. In 2D graphic design, what does "Visual Hierarchy" guide?',
    options: ['Order in which a viewer notices information on a page', 'Manufacturing speed', 'Print ink weight', 'Font file size'],
    answer: 0,
    explanation: 'Visual hierarchy uses size, contrast, and layout to guide eye movement from most to least important elements.',
    topic: 'Visual Communication'
  },
  {
    id: 'seed_q_49',
    type: 'mcq',
    section: 'seed_mcq',
    number: 49,
    question: 'Q49. Which famous movie title sequences (e.g. Vertigo, Psycho) were created by designer Saul Bass?',
    options: ['Saul Bass', 'Paul Rand', 'Milton Glaser', 'Massimo Vignelli'],
    answer: 0,
    explanation: 'Saul Bass revolutionized title sequences and cinematic branding with bold kinetic cutouts.',
    topic: 'Film & Media Design'
  },
  {
    id: 'seed_q_50',
    type: 'mcq',
    section: 'seed_mcq',
    number: 50,
    question: 'Q50. What is "CMYK" process color black also called in printing terminology?',
    options: ['Key', 'Krypton', 'Kohl', 'Kernel'],
    answer: 0,
    explanation: 'In CMYK, "K" stands for "Key", referring to the key plate that prints black details.',
    topic: 'Print Production'
  },

  // ==========================================
  // SECTION 2: MATCH THE COLUMNS (Questions 51 to 70 - 20 Unique Sets)
  // ==========================================
  {
    id: 'seed_q_51',
    type: 'match_column',
    section: 'seed_match',
    number: 51,
    title: 'Q51. Match the Design Movement with its Country of Origin',
    columnA: ['1. Bauhaus', '2. De Stijl', '3. Art Deco', '4. Memphis Movement'],
    columnB: ['A. Netherlands', 'B. Germany', 'C. Italy', 'D. France'],
    correctPairs: { '1': 'B', '2': 'A', '3': 'D', '4': 'C' },
    explanation: 'Bauhaus originated in Germany, De Stijl in Netherlands, Art Deco in France, and Memphis in Italy.',
    topic: 'Design History'
  },
  {
    id: 'seed_q_52',
    type: 'match_column',
    section: 'seed_match',
    number: 52,
    title: 'Q52. Match the Traditional Indian Textile Art with its Home State',
    columnA: ['1. Kalamkari', '2. Bandhani', '3. Phulkari', '4. Kantha'],
    columnB: ['A. Punjab', 'B. Andhra Pradesh', 'C. West Bengal', 'D. Gujarat'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'Kalamkari is from Andhra Pradesh, Bandhani from Gujarat, Phulkari from Punjab, Kantha from West Bengal.',
    topic: 'Indian Textiles'
  },
  {
    id: 'seed_q_53',
    type: 'match_column',
    section: 'seed_match',
    number: 53,
    title: 'Q53. Match the Color Term with its Technical Definition',
    columnA: ['1. Hue', '2. Saturation', '3. Value', '4. Tint'],
    columnB: ['A. Lightness or darkness', 'B. Pure spectral color name', 'C. Color mixed with white', 'D. Intensity or purity of color'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'Hue = pure color, Saturation = purity/intensity, Value = lightness/darkness, Tint = color + white.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_54',
    type: 'match_column',
    section: 'seed_match',
    number: 54,
    title: 'Q54. Match the Iconic Corporate Logo with its Core Visual Symbol',
    columnA: ['1. Apple', '2. Nike', '3. Mercedes-Benz', '4. WWF'],
    columnB: ['A. Swoosh', 'B. Bitten Fruit', 'C. Giant Panda', 'D. Three-pointed Star'],
    correctPairs: { '1': 'B', '2': 'A', '3': 'D', '4': 'C' },
    explanation: 'Apple uses a bitten fruit, Nike uses the Swoosh, Mercedes uses 3-pointed star, WWF uses a Panda.',
    topic: 'Branding'
  },
  {
    id: 'seed_q_55',
    type: 'match_column',
    section: 'seed_match',
    number: 55,
    title: 'Q55. Match the Master Designer with their Signature Design Product',
    columnA: ['1. Charles Eames', '2. Philippe Starck', '3. Dieter Rams', '4. Marcel Breuer'],
    columnB: ['A. Wassily Chair', 'B. SK4 Radio / Phonosuper', 'C. Molded Plywood Lounge Chair', 'D. Juicy Salif Lemon Squeezer'],
    correctPairs: { '1': 'C', '2': 'D', '3': 'B', '4': 'A' },
    explanation: 'Eames created molded plywood chair, Starck designed Juicy Salif, Rams created SK4 Radio, Breuer designed Wassily Chair.',
    topic: 'Design Masters'
  },
  {
    id: 'seed_q_56',
    type: 'match_column',
    section: 'seed_match',
    number: 56,
    title: 'Q56. Match the Gestalt Law with its Visual Description',
    columnA: ['1. Similarity', '2. Closure', '3. Continuity', '4. Figure-Ground'],
    columnB: ['A. Mind fills in missing shape outlines', 'B. Elements sharing color/shape are grouped', 'C. Distinguishing object from backdrop', 'D. Eye follows continuous path'],
    correctPairs: { '1': 'B', '2': 'A', '3': 'D', '4': 'C' },
    explanation: 'Similarity groups like elements, Closure fills gaps, Continuity follows lines, Figure-Ground isolates focal shapes.',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_57',
    type: 'match_column',
    section: 'seed_match',
    number: 57,
    title: 'Q57. Match the Indian Folk Art Style with its Primary Medium/Surface',
    columnA: ['1. Warli', '2. Tanjore Painting', '3. Pattachitra', '4. Madhubani'],
    columnB: ['A. Cloth Canvas / Palm Leaf', 'B. Gold Leaf & Wooden Board', 'C. Red Mud Wall & Rice Paste', 'D. Handmade Paper & Twig Pens'],
    correctPairs: { '1': 'C', '2': 'B', '3': 'A', '4': 'D' },
    explanation: 'Warli uses rice paste on mud walls, Tanjore uses gold leaf, Pattachitra uses cloth/palm leaf, Madhubani uses paper & twigs.',
    topic: 'Indian Art'
  },
  {
    id: 'seed_q_58',
    type: 'match_column',
    section: 'seed_match',
    number: 58,
    title: 'Q58. Match the Typography Term with its Anatomical Description',
    columnA: ['1. Ascender', '2. Descender', '3. Serifs', '4. Counter'],
    columnB: ['A. Fully or partially enclosed space inside a letter', 'B. Stem extending above the x-height', 'C. Small finishing strokes at letter ends', 'D. Stem extending below the baseline'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'C', '4': 'A' },
    explanation: 'Ascender goes above x-height, Descender goes below baseline, Serifs are end strokes, Counter is enclosed space (e.g. inside "o").',
    topic: 'Typography'
  },
  {
    id: 'seed_q_59',
    type: 'match_column',
    section: 'seed_match',
    number: 59,
    title: 'Q59. Match the Material with its Common Industrial Manufacturing Process',
    columnA: ['1. Ceramic Mug', '2. Plastic Bottle', '3. Aluminum Can', '4. Wooden Table Chair'],
    columnB: ['A. Deep Drawing / Extrusion', 'B. Slip Casting & Kiln Firing', 'C. CNC Routing & Joining', 'D. Blow Molding'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'Ceramics use slip casting, PET bottles use blow molding, aluminum cans use deep drawing, wood uses CNC routing.',
    topic: 'Manufacturing Processes'
  },
  {
    id: 'seed_q_60',
    type: 'match_column',
    section: 'seed_match',
    number: 60,
    title: 'Q60. Match the File Extension with its Digital Graphic Standard',
    columnA: ['1. .SVG', '2. .PNG', '3. .JPG', '4. .GIF'],
    columnB: ['A. Lossy Compressed Raster Image', 'B. Scalable Vector Graphic', 'C. Animated Frame Sequence', 'D. Lossless Raster with Alpha Transparency'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'SVG is scalable vector, PNG supports transparency, JPG is lossy compression, GIF supports simple animations.',
    topic: 'Digital Media'
  },
  {
    id: 'seed_q_61',
    type: 'match_column',
    section: 'seed_match',
    number: 61,
    title: 'Q61. Match the Ergonomic Risk Factor with its Body Strain Area',
    columnA: ['1. Poor Wrist Angle', '2. Glare on Monitor', '3. Slouched Lower Back', '4. High Arm Elevation'],
    columnB: ['A. Lumbar Spine Fatigue', 'B. Carpal Tunnel Syndrome', 'C. Shoulder & Neck Muscle Strain', 'D. Eye Fatigue & Headache'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'Poor wrist angle leads to carpal tunnel, glare causes eye strain, slouching strains lumbar spine, elevated arms strain shoulders.',
    topic: 'Ergonomics'
  },
  {
    id: 'seed_q_62',
    type: 'match_column',
    section: 'seed_match',
    number: 62,
    title: 'Q62. Match the Architectural Style with its Key Structural Feature',
    columnA: ['1. Gothic', '2. Renaissance', '3. Modernism', '4. Classical Greek'],
    columnB: ['A. Symmetrical Domes & Arches', 'B. Doric/Ionic Columns & Pediments', 'C. Pointed Arches & Flying Buttresses', 'D. Steel Frame & Curtain Glass Windows'],
    correctPairs: { '1': 'C', '2': 'A', '3': 'D', '4': 'B' },
    explanation: 'Gothic features flying buttresses, Renaissance domes, Modernism steel/glass curtain walls, Greek marble columns.',
    topic: 'Architecture'
  },
  {
    id: 'seed_q_63',
    type: 'match_column',
    section: 'seed_match',
    number: 63,
    title: 'Q63. Match the Color Scheme with its Palette Composition',
    columnA: ['1. Monochromatic', '2. Triadic', '3. Complementary', '4. Analogous'],
    columnB: ['A. 3 colors adjacent on wheel', 'B. 3 colors evenly spaced 120° apart', 'C. Variations of a single hue', 'D. 2 colors opposite on wheel'],
    correctPairs: { '1': 'C', '2': 'B', '3': 'D', '4': 'A' },
    explanation: 'Monochromatic = single hue shades, Triadic = 120° spaced, Complementary = 180° opposite, Analogous = adjacent colors.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_64',
    type: 'match_column',
    section: 'seed_match',
    number: 64,
    title: 'Q64. Match the Famous Monument with its Primary Material',
    columnA: ['1. Taj Mahal', '2. Eiffel Tower', '3. Parthenon', '4. Great Pyramid of Giza'],
    columnB: ['A. Wrought Iron', 'B. White Makrana Marble', 'C. Limestone & Granite Blocks', 'D. Pentelic White Marble'],
    correctPairs: { '1': 'B', '2': 'A', '3': 'D', '4': 'C' },
    explanation: 'Taj Mahal is built from Makrana marble, Eiffel Tower from puddle iron, Parthenon from Pentelic marble, Pyramids from limestone.',
    topic: 'World Architecture'
  },
  {
    id: 'seed_q_65',
    type: 'match_column',
    section: 'seed_match',
    number: 65,
    title: 'Q65. Match the Packaging Property with its Target Functional Goal',
    columnA: ['1. Tamper-Evident Seal', '2. Hermetic Sealing', '3. Shock Corrugation', '4. UV Barrier Coating'],
    columnB: ['A. Prevent light degradation', 'B. Protect fragile goods from impact', 'C. Indicate unauthorized opening', 'D. Airtight protection from moisture'],
    correctPairs: { '1': 'C', '2': 'D', '3': 'B', '4': 'A' },
    explanation: 'Tamper seals show opening, Hermetic seals keep air out, Corrugation absorbs shocks, UV coatings shield light.',
    topic: 'Packaging Design'
  },
  {
    id: 'seed_q_66',
    type: 'match_column',
    section: 'seed_match',
    number: 66,
    title: 'Q66. Match the Paper Weight (GSM) with its Standard Usage Application',
    columnA: ['1. 80 GSM', '2. 170 GSM', '3. 300 GSM', '4. 400 GSM'],
    columnB: ['A. Heavy Packaging Board', 'B. Everyday Office Copy Paper', 'C. Business Cards & Heavy Covers', 'D. Glossy Magazine Brochure Pages'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'C', '4': 'A' },
    explanation: '80 GSM is printer paper, 170 GSM is brochure paper, 300 GSM is business cards, 400 GSM is rigid cardboard.',
    topic: 'Paper & Print'
  },
  {
    id: 'seed_q_67',
    type: 'match_column',
    section: 'seed_match',
    number: 67,
    title: 'Q67. Match the Famous Chair Design with its Creator',
    columnA: ['1. Panton Chair', '2. Barcelona Chair', '3. Diamond Chair', '4. Tulip Chair'],
    columnB: ['A. Eero Saarinen', 'B. Verner Panton', 'C. Ludwig Mies van der Rohe', 'D. Harry Bertoia'],
    correctPairs: { '1': 'B', '2': 'C', '3': 'D', '4': 'A' },
    explanation: 'Panton chair by Verner Panton, Barcelona chair by Mies van der Rohe, Diamond chair by Bertoia, Tulip chair by Saarinen.',
    topic: 'Furniture History'
  },
  {
    id: 'seed_q_68',
    type: 'match_column',
    section: 'seed_match',
    number: 68,
    title: 'Q68. Match the Metal Alloy with its Component Metals',
    columnA: ['1. Brass', '2. Bronze', '3. Stainless Steel', '4. Solder'],
    columnB: ['A. Copper + Tin', 'B. Tin + Lead', 'C. Copper + Zinc', 'D. Iron + Chromium + Nickel'],
    correctPairs: { '1': 'C', '2': 'A', '3': 'D', '4': 'B' },
    explanation: 'Brass = Copper+Zinc, Bronze = Copper+Tin, Stainless Steel = Iron+Chromium+Nickel, Solder = Tin+Lead.',
    topic: 'Materials Science'
  },
  {
    id: 'seed_q_69',
    type: 'match_column',
    section: 'seed_match',
    number: 69,
    title: 'Q69. Match the Printing Method with its Characteristic Process',
    columnA: ['1. Screen Printing', '2. Flexography', '3. Lithography', '4. Gravure'],
    columnB: ['A. Oil and water repulsion on flat plate', 'B. Squeegee pressing ink through mesh stencil', 'C. Etched cylinder engraved cell printing', 'D. Flexible rubber relief plate for packaging'],
    correctPairs: { '1': 'B', '2': 'D', '3': 'A', '4': 'C' },
    explanation: 'Screen printing presses ink through mesh, Flexography uses flexible relief plates, Lithography repels oil/water, Gravure uses etched cylinders.',
    topic: 'Print Technology'
  },
  {
    id: 'seed_q_70',
    type: 'match_column',
    section: 'seed_match',
    number: 70,
    title: 'Q70. Match the UI Element with its Primary Interaction Purpose',
    columnA: ['1. Radio Button', '2. Checkbox', '3. Toggle Switch', '4. Dropdown Select'],
    columnB: ['A. Select multiple independent options', 'B. Immediate binary ON/OFF state change', 'C. Choose single option from long scroll list', 'D. Select exactly ONE option from mutually exclusive set'],
    correctPairs: { '1': 'D', '2': 'A', '3': 'B', '4': 'C' },
    explanation: 'Radio button selects 1 mutually exclusive item, Checkbox allows multiple selections, Toggle changes ON/OFF instantly, Dropdown hides long lists.',
    topic: 'UI/UX Design'
  },

  // ==========================================
  // SECTION 3: FILL-IN-THE-BLANKS (Questions 71 to 90 - 20 Unique Questions)
  // ==========================================
  {
    id: 'seed_q_71',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 71,
    question: 'Q71. The space between two lines of text is called _____.',
    acceptableAnswers: ['leading', 'line height', 'line spacing'],
    explanation: 'Leading (pronounced "ledding") is the vertical space between lines of text in typography.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_72',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 72,
    question: 'Q72. The golden ratio proportion is approximately equal to 1 : _____.',
    acceptableAnswers: ['1.618', '1.61', '1.62'],
    explanation: 'The Golden Ratio (Phi) is approximately 1.61803398875.',
    topic: 'Design Geometry'
  },
  {
    id: 'seed_q_73',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 73,
    question: 'Q73. In color theory, adding black to a pure hue creates a _____.',
    acceptableAnswers: ['shade', 'shading'],
    explanation: 'A shade is produced by adding black to a color, reducing its lightness.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_74',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 74,
    question: 'Q74. DPI stands for Dots Per _____.',
    acceptableAnswers: ['inch', 'inches'],
    explanation: 'DPI stands for Dots Per Inch, used to measure print resolution.',
    topic: 'Digital Media'
  },
  {
    id: 'seed_q_75',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 75,
    question: 'Q75. The National Institute of Design (NID) main headquarters is situated in the city of _____.',
    acceptableAnswers: ['ahmedabad', 'amdavad'],
    explanation: 'NID main campus was established in Ahmedabad, Gujarat in 1961.',
    topic: 'Design Institutions'
  },
  {
    id: 'seed_q_76',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 76,
    question: 'Q76. In color mixing, adding white to a pure hue produces a _____.',
    acceptableAnswers: ['tint', 'tinting'],
    explanation: 'A tint is created whenever white is added to a pure color to increase lightness.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_77',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 77,
    question: 'Q77. The term "PPI" in digital screen displays stands for Pixels Per _____.',
    acceptableAnswers: ['inch', 'inches'],
    explanation: 'PPI (Pixels Per Inch) measures display pixel density on screens.',
    topic: 'Display Graphics'
  },
  {
    id: 'seed_q_78',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 78,
    question: 'Q78. In 2D drafting, lines that meet at a 90-degree angle are called _____ lines.',
    acceptableAnswers: ['perpendicular', 'orthogonal'],
    explanation: 'Perpendicular lines intersect at a right angle (90°).',
    topic: 'Geometry'
  },
  {
    id: 'seed_q_79',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 79,
    question: 'Q79. RGB light color mixing is an _____ color process.',
    acceptableAnswers: ['additive', 'addative'],
    explanation: 'RGB light is additive because adding red, green, and blue light together forms white light.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_80',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 80,
    question: 'Q80. CMYK print ink color mixing is a _____ color process.',
    acceptableAnswers: ['subtractive', 'subtractive color'],
    explanation: 'CMYK inks absorb (subtract) light wavelengths reflected off white paper.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_81',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 81,
    question: 'Q81. The height of capital letters in a font is referred to as _____ height.',
    acceptableAnswers: ['cap', 'capital', 'cap height'],
    explanation: 'Cap height measures the height of uppercase letters from the baseline.',
    topic: 'Typography'
  },
  {
    id: 'seed_q_82',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 82,
    question: 'Q82. In 3D isometric drawing, receding axis lines are drawn at an angle of _____ degrees to the horizontal.',
    acceptableAnswers: ['30', '30 degrees', '30 deg'],
    explanation: 'Isometric projections draw receding axes at 30° angles to the horizontal plane.',
    topic: 'Technical Drawing'
  },
  {
    id: 'seed_q_83',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 83,
    question: 'Q83. "Batik" is a traditional fabric dyeing technique using hot _____ as a resist pattern.',
    acceptableAnswers: ['wax', 'beeswax'],
    explanation: 'Batik applies molten wax to fabric to block dye absorption in selected design areas.',
    topic: 'Textile Crafts'
  },
  {
    id: 'seed_q_84',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 84,
    question: 'Q84. The metric used to measure paper weight and thickness is _____ (Grams per Square Meter).',
    acceptableAnswers: ['gsm', 'g/m2'],
    explanation: 'GSM stands for Grams per Square Meter, defining paper weight.',
    topic: 'Paper Industry'
  },
  {
    id: 'seed_q_85',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 85,
    question: 'Q85. In photography, the opening size of a camera lens that controls light exposure is the _____.',
    acceptableAnswers: ['aperture', 'f-stop', 'iris'],
    explanation: 'Aperture regulates the diameter of the diaphragm opening inside a camera lens.',
    topic: 'Photography'
  },
  {
    id: 'seed_q_86',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 86,
    question: 'Q86. A three-dimensional solid figure bounded by six identical square faces is a _____.',
    acceptableAnswers: ['cube', 'hexahedron'],
    explanation: 'A cube is a regular 3D hexahedron formed by six congruent square faces.',
    topic: 'Geometry'
  },
  {
    id: 'seed_q_87',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 87,
    question: 'Q87. In UI design, wireframes without color or final graphics are called _____ fidelity wireframes.',
    acceptableAnswers: ['low', 'lo-fi', 'low fidelity'],
    explanation: 'Low-fidelity wireframes focus purely on structural layout and content hierarchy.',
    topic: 'UX Design'
  },
  {
    id: 'seed_q_88',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 88,
    question: 'Q88. The standard primary colors in the traditional painter’s color wheel are Red, Yellow, and _____.',
    acceptableAnswers: ['blue', 'cyan'],
    explanation: 'Red, Yellow, and Blue are the traditional RYB primary colors.',
    topic: 'Color Theory'
  },
  {
    id: 'seed_q_89',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 89,
    question: 'Q89. In CAD modeling, combining two 3D solids using intersection or subtraction is a _____ operation.',
    acceptableAnswers: ['boolean', 'bool'],
    explanation: 'Boolean operations (Union, Subtract, Intersect) combine geometric solids in 3D modeling.',
    topic: 'CAD Modeling'
  },
  {
    id: 'seed_q_90',
    type: 'fill_blank',
    section: 'seed_blanks',
    number: 90,
    question: 'Q90. The famous Indian design institute "IDC" located inside IIT Bombay stands for Industrial Design _____.',
    acceptableAnswers: ['centre', 'center'],
    explanation: 'IDC Centre for Design Excellence was established at IIT Bombay in 1969.',
    topic: 'Design Institutions'
  },

  // ==========================================
  // SECTION 4: IMAGE-BASED QUESTIONS (Questions 91 to 105 - 15 Unique Questions)
  // ==========================================
  {
    id: 'seed_q_91',
    type: 'image_based',
    section: 'seed_image',
    number: 91,
    question: 'Q91. Analyze the isometric block diagram below. How many unit cubes are missing from a complete 3x3x3 solid block?',
    svgType: 'cube_grid',
    options: ['4 cubes', '6 cubes', '7 cubes', '9 cubes'],
    answer: 2,
    explanation: 'A 3x3x3 cube has 27 unit cubes. Counting the visible cubes (20 cubes present), exactly 7 unit cubes are missing.',
    topic: 'Spatial Reasoning'
  },
  {
    id: 'seed_q_92',
    type: 'image_based',
    section: 'seed_image',
    number: 92,
    question: 'Q92. Which Gestalt law of visual grouping is demonstrated in the optical graphic pattern shown below?',
    svgType: 'gestalt_dots',
    options: ['Law of Closure', 'Law of Continuity', 'Law of Symmetry', 'Law of Figure-Ground'],
    answer: 3,
    explanation: 'Figure-Ground organization allows the eye to distinguish objects (figures) from their background (ground).',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_93',
    type: 'image_based',
    section: 'seed_image',
    number: 93,
    question: 'Q93. Examine the shadow cast by the conical object under a 45° light source. Which shadow profile is top-down accurate?',
    svgType: 'shadow_projection',
    options: ['Circular shadow', 'Elliptical shadow with sharp vertex', 'Parabolic outline', 'Trapezoidal projection'],
    answer: 1,
    explanation: 'A cone illuminated at a 45° angle casts an elongated elliptical shadow with a tapered vertex on a flat plane.',
    topic: 'Light & Shadow'
  },
  {
    id: 'seed_q_94',
    type: 'image_based',
    section: 'seed_image',
    number: 94,
    question: 'Q94. Identify the correct 2D unfolded flat net pattern that can be folded into a solid 3D Pyramid with a square base.',
    svgType: 'cube_grid',
    options: ['4 triangles attached around 1 central square', '6 squares in a T-shape', '3 rectangles and 2 triangles', '5 circles'],
    answer: 0,
    explanation: 'A square pyramid net consists of a central square base surrounded by 4 isosceles triangular side flaps.',
    topic: '3D Net Folding'
  },
  {
    id: 'seed_q_95',
    type: 'image_based',
    section: 'seed_image',
    number: 95,
    question: 'Q95. In orthographic projection, which view is positioned directly below the Top Plan View in First Angle Projection?',
    svgType: 'shadow_projection',
    options: ['Front Elevation View', 'Left Side View', 'Isometric View', 'Bottom View'],
    answer: 0,
    explanation: 'In First Angle Projection, the Front View is placed below the Top View (or Top View placed below Front View depending on layout).',
    topic: 'Engineering Drawing'
  },
  {
    id: 'seed_q_96',
    type: 'image_based',
    section: 'seed_image',
    number: 96,
    question: 'Q96. Which optical illusion demonstrates equal circular discs appearing different in size due to surrounding larger and smaller circles?',
    svgType: 'gestalt_dots',
    options: ['Ebbinghaus Illusion', 'Poggendorff Illusion', 'Zöllner Illusion', 'Ames Room'],
    answer: 0,
    explanation: 'The Ebbinghaus illusion causes identical central circles to appear unequal based on surrounding context dots.',
    topic: 'Visual Illusions'
  },
  {
    id: 'seed_q_97',
    type: 'image_based',
    section: 'seed_image',
    number: 97,
    question: 'Q97. How many vanishing points are used in a standard street-view drawing showing buildings tapering towards a distant horizon line and upward into the sky?',
    svgType: 'shadow_projection',
    options: ['1 point', '2 points', '3 points', '4 points'],
    answer: 2,
    explanation: 'Three-point perspective uses 2 points on the horizon line and 1 vertical vanishing point above or below.',
    topic: 'Perspective'
  },
  {
    id: 'seed_q_98',
    type: 'image_based',
    section: 'seed_image',
    number: 98,
    question: 'Q98. Count the total number of square faces visible when viewing a 2x2x2 cube assembly from a top 45-degree angle.',
    svgType: 'cube_grid',
    options: ['8 square faces', '12 square faces', '16 square faces', '24 square faces'],
    answer: 1,
    explanation: 'Viewing a 2x2x2 cube from a 3-view top angle reveals 4 top + 4 front + 4 side = 12 visible unit square faces.',
    topic: 'Spatial Perception'
  },
  {
    id: 'seed_q_99',
    type: 'image_based',
    section: 'seed_image',
    number: 99,
    question: 'Q99. What light phenomenon causes a straw placed in a glass cup of water to appear broken at the water surface?',
    svgType: 'shadow_projection',
    options: ['Reflection', 'Refraction', 'Diffraction', 'Polarization'],
    answer: 1,
    explanation: 'Light bends (refracts) when passing between air and water due to different optical density mediums.',
    topic: 'Optics & Visual Physics'
  },
  {
    id: 'seed_q_100',
    type: 'image_based',
    section: 'seed_image',
    number: 100,
    question: 'Q100. Which shape provides the highest structural rigidity per unit weight when building lightweight bridge trusses?',
    svgType: 'cube_grid',
    options: ['Square', 'Triangle', 'Pentagon', 'Circle'],
    answer: 1,
    explanation: 'Triangles are geometrically rigid structures because their sides cannot deform without changing length.',
    topic: 'Structures & Mechanics'
  },
  {
    id: 'seed_q_101',
    type: 'image_based',
    section: 'seed_image',
    number: 101,
    question: 'Q101. What visual phenomenon occurs when looking at a spinning wheel and seeing it appear to rotate backwards?',
    svgType: 'gestalt_dots',
    options: ['Wagon-Wheel Effect (Stroboscopic Illusion)', 'Phi Phenomenon', 'Trochoidal Wave', 'Persistence of Vision'],
    answer: 0,
    explanation: 'The stroboscopic wagon-wheel effect causes rotating spokes to appear static or reverse due to temporal sampling.',
    topic: 'Visual Perception'
  },
  {
    id: 'seed_q_102',
    type: 'image_based',
    section: 'seed_image',
    number: 102,
    question: 'Q102. When a cylinder is intersected by a plane parallel to its central axis, what 2D cross-sectional shape is produced?',
    svgType: 'shadow_projection',
    options: ['Circle', 'Rectangle', 'Ellipse', 'Triangle'],
    answer: 1,
    explanation: 'Cutting a cylinder parallel to its height axis yields a rectangular cross-section.',
    topic: 'Geometric Sections'
  },
  {
    id: 'seed_q_103',
    type: 'image_based',
    section: 'seed_image',
    number: 103,
    question: 'Q103. In color printing, what pattern of tiny overlapping cyan, magenta, yellow, and black dots produces continuous tones?',
    svgType: 'gestalt_dots',
    options: ['Halftone Screening', 'Vector Mesh', 'Pixel Grid', 'Line Art'],
    answer: 0,
    explanation: 'Halftone screening uses variable size micro-dots of CMYK ink to simulate smooth color gradients.',
    topic: 'Print Technology'
  },
  {
    id: 'seed_q_104',
    type: 'image_based',
    section: 'seed_image',
    number: 104,
    question: 'Q104. What type of balance is achieved when visual elements radiate outward from a central focal point like a bicycle wheel?',
    svgType: 'cube_grid',
    options: ['Symmetrical Balance', 'Asymmetrical Balance', 'Radial Balance', 'Mosaic Balance'],
    answer: 2,
    explanation: 'Radial balance arranges visual elements symmetrically around a central circular pivot.',
    topic: 'Design Principles'
  },
  {
    id: 'seed_q_105',
    type: 'image_based',
    section: 'seed_image',
    number: 105,
    question: 'Q105. What term describes a color palette using shades, tints, and tones of only one single hue?',
    svgType: 'gestalt_dots',
    options: ['Monochromatic', 'Analogous', 'Complementary', 'Achromatic'],
    answer: 0,
    explanation: 'Monochromatic color schemes use variations in value and saturation derived from a single hue.',
    topic: 'Color Theory'
  },

  // ==========================================
  // SECTION 5: COMPREHENSION-BASED (Questions 106 to 120 - 3 Passages, 15 Unique Questions)
  // ==========================================
  // PASSAGE 1 (Questions 106 to 110)
  {
    id: 'seed_q_106',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 106,
    passageTitle: 'Passage 1: Biomimicry & Circular Economy in Product Design',
    passageText: `Biomimicry is an innovation methodology that emulates nature’s time-tested patterns and structural strategies to solve complex human challenges. In modern industrial packaging, designers analyze lotus leaves for superhydrophobic water-repellent surfaces, shark skin for anti-bacterial textures, and honeycomb cells for lightweight impact absorption. 

Unlike conventional manufacturing that relies on high temperatures and toxic synthetic solvents, nature operates under ambient conditions, producing fully biodegradable structures. Design teams integrating biomimicry within circular economy frameworks aim to eliminate single-use plastic waste while optimizing material volume and energy efficiency.`,
    question: 'Q106. What is the core philosophy behind Biomimicry in design?',
    options: ['Emulating natural patterns and mechanics for sustainable human solutions', 'Painting organic plant motifs on synthetic products', 'Using animal furs for textile production', 'Designing products shaped exclusively like flowers'],
    answer: 0,
    explanation: 'Biomimicry emulates nature’s functional mechanics to create sustainable design solutions.',
    topic: 'Design Comprehension'
  },
  {
    id: 'seed_q_107',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 107,
    passageTitle: 'Passage 1: Biomimicry & Circular Economy in Product Design',
    passageText: `Biomimicry is an innovation methodology that emulates nature’s time-tested patterns and structural strategies to solve complex human challenges. In modern industrial packaging, designers analyze lotus leaves for superhydrophobic water-repellent surfaces, shark skin for anti-bacterial textures, and honeycomb cells for lightweight impact absorption. 

Unlike conventional manufacturing that relies on high temperatures and toxic synthetic solvents, nature operates under ambient conditions, producing fully biodegradable structures. Design teams integrating biomimicry within circular economy frameworks aim to eliminate single-use plastic waste while optimizing material volume and energy efficiency.`,
    question: 'Q107. Which natural surface phenomenon inspires hydrophobic water-repellent materials?',
    options: ['Pinecone scale opening', 'Lotus leaf micro-structure', 'Spider web elasticity', 'Gecko foot adhesion'],
    answer: 1,
    explanation: 'The lotus leaf effect creates superhydrophobic surfaces where water droplets roll off effortlessly.',
    topic: 'Design Comprehension'
  },
  {
    id: 'seed_q_108',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 108,
    passageTitle: 'Passage 1: Biomimicry & Circular Economy in Product Design',
    passageText: `Biomimicry is an innovation methodology that emulates nature’s time-tested patterns and structural strategies to solve complex human challenges. In modern industrial packaging, designers analyze lotus leaves for superhydrophobic water-repellent surfaces, shark skin for anti-bacterial textures, and honeycomb cells for lightweight impact absorption. 

Unlike conventional manufacturing that relies on high temperatures and toxic synthetic solvents, nature operates under ambient conditions, producing fully biodegradable structures. Design teams integrating biomimicry within circular economy frameworks aim to eliminate single-use plastic waste while optimizing material volume and energy efficiency.`,
    question: 'Q108. Why are honeycomb geometric structures widely favored in packaging?',
    options: ['High production cost', 'High strength-to-weight ratio and shock absorption', 'Complete transparency', 'Infinite heat retention'],
    answer: 1,
    explanation: 'Honeycomb structures yield high strength while minimizing material weight and absorbing impacts.',
    topic: 'Design Comprehension'
  },
  {
    id: 'seed_q_109',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 109,
    passageTitle: 'Passage 1: Biomimicry & Circular Economy in Product Design',
    passageText: `Biomimicry is an innovation methodology that emulates nature’s time-tested patterns and structural strategies to solve complex human challenges. In modern industrial packaging, designers analyze lotus leaves for superhydrophobic water-repellent surfaces, shark skin for anti-bacterial textures, and honeycomb cells for lightweight impact absorption. 

Unlike conventional manufacturing that relies on high temperatures and toxic synthetic solvents, nature operates under ambient conditions, producing fully biodegradable structures. Design teams integrating biomimicry within circular economy frameworks aim to eliminate single-use plastic waste while optimizing material volume and energy efficiency.`,
    question: 'Q109. How does nature manufacture materials compared to conventional industrial factories?',
    options: ['High ambient heat and pressure', 'Using petroleum derivatives', 'At ambient temperature and pressure producing non-toxic structures', 'Using synthetic chemical catalysts'],
    answer: 2,
    explanation: 'Nature manufactures at room temperature without high energy input or toxic byproduct pollution.',
    topic: 'Design Comprehension'
  },
  {
    id: 'seed_q_110',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 110,
    passageTitle: 'Passage 1: Biomimicry & Circular Economy in Product Design',
    passageText: `Biomimicry is an innovation methodology that emulates nature’s time-tested patterns and structural strategies to solve complex human challenges. In modern industrial packaging, designers analyze lotus leaves for superhydrophobic water-repellent surfaces, shark skin for anti-bacterial textures, and honeycomb cells for lightweight impact absorption. 

Unlike conventional manufacturing that relies on high temperatures and toxic synthetic solvents, nature operates under ambient conditions, producing fully biodegradable structures. Design teams integrating biomimicry within circular economy frameworks aim to eliminate single-use plastic waste while optimizing material volume and energy efficiency.`,
    question: 'Q110. What design framework integrates biomimicry to eliminate single-use plastic waste?',
    options: ['Linear consumption economy', 'Circular economy framework', 'Fast fashion doctrine', 'Disposable packaging model'],
    answer: 1,
    explanation: 'A circular economy framework eliminates waste by continuously reusing and recycling non-toxic materials.',
    topic: 'Design Comprehension'
  },

  // PASSAGE 2 (Questions 111 to 115)
  {
    id: 'seed_q_111',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 111,
    passageTitle: 'Passage 2: The Evolution of Typography & Human Cognition',
    passageText: `Typography is not merely the arrangement of type; it is the visual voice of written language. From Gutenberg’s movable wooden and metal type in the 15th century to digital variable web fonts today, typography shapes how humans process information. 

Serif typefaces, characterized by small decorative feet at the stroke ends, were historically favored in printed books because serifs create an imaginary baseline guide for the human eye, increasing long-form reading speed. Conversely, Sans-Serif fonts, which emerged during the Industrial Revolution, eliminate decorative serifs to deliver clean legibility on digital screens and low-resolution signage.`,
    question: 'Q111. What historical milestone in the 15th century revolutionized typographic reproduction?',
    options: ['Gutenberg movable type press', 'Phototypesetting', 'Apple Macintosh computer', 'Digital vector fonts'],
    answer: 0,
    explanation: 'Johannes Gutenberg’s movable metal type press in the 1440s democratized printed typography.',
    topic: 'Design History Comprehension'
  },
  {
    id: 'seed_q_112',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 112,
    passageTitle: 'Passage 2: The Evolution of Typography & Human Cognition',
    passageText: `Typography is not merely the arrangement of type; it is the visual voice of written language. From Gutenberg’s movable wooden and metal type in the 15th century to digital variable web fonts today, typography shapes how humans process information. 

Serif typefaces, characterized by small decorative feet at the stroke ends, were historically favored in printed books because serifs create an imaginary baseline guide for the human eye, increasing long-form reading speed. Conversely, Sans-Serif fonts, which emerged during the Industrial Revolution, eliminate decorative serifs to deliver clean legibility on digital screens and low-resolution signage.`,
    question: 'Q112. Why were Serif fonts traditionally preferred for long-form printed books?',
    options: ['They use less ink', 'Serifs form an imaginary horizontal flow guide aiding reading speed', 'They cost less to print', 'They look modern'],
    answer: 1,
    explanation: 'Serifs create visual flow lines along text rows, helping the eye move quickly across printed lines.',
    topic: 'Typography Comprehension'
  },
  {
    id: 'seed_q_113',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 113,
    passageTitle: 'Passage 2: The Evolution of Typography & Human Cognition',
    passageText: `Typography is not merely the arrangement of type; it is the visual voice of written language. From Gutenberg’s movable wooden and metal type in the 15th century to digital variable web fonts today, typography shapes how humans process information. 

Serif typefaces, characterized by small decorative feet at the stroke ends, were historically favored in printed books because serifs create an imaginary baseline guide for the human eye, increasing long-form reading speed. Conversely, Sans-Serif fonts, which emerged during the Industrial Revolution, eliminate decorative serifs to deliver clean legibility on digital screens and low-resolution signage.`,
    question: 'Q113. During which historical period did Sans-Serif typefaces gain widespread prominence?',
    options: ['Renaissance Era', 'Industrial Revolution', 'Middle Ages', 'Ancient Egypt'],
    answer: 1,
    explanation: 'Sans-Serif fonts emerged during the Industrial Revolution for bold commercial signs and advertisements.',
    topic: 'Typography Comprehension'
  },
  {
    id: 'seed_q_114',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 114,
    passageTitle: 'Passage 2: The Evolution of Typography & Human Cognition',
    passageText: `Typography is not merely the arrangement of type; it is the visual voice of written language. From Gutenberg’s movable wooden and metal type in the 15th century to digital variable web fonts today, typography shapes how humans process information. 

Serif typefaces, characterized by small decorative feet at the stroke ends, were historically favored in printed books because serifs create an imaginary baseline guide for the human eye, increasing long-form reading speed. Conversely, Sans-Serif fonts, which emerged during the Industrial Revolution, eliminate decorative serifs to deliver clean legibility on digital screens and low-resolution signage.`,
    question: 'Q114. What primary advantage do Sans-Serif typefaces offer on digital computer displays?',
    options: ['Intricate floral decoration', 'High legibility on pixel screens without blurred serif artifacts', 'Handwritten aesthetic', '3D shadow effects'],
    answer: 1,
    explanation: 'Clean Sans-Serif letterforms render crisp pixel boundaries on digital monitors without blur.',
    topic: 'Typography Comprehension'
  },
  {
    id: 'seed_q_115',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 115,
    passageTitle: 'Passage 2: The Evolution of Typography & Human Cognition',
    passageText: `Typography is not merely the arrangement of type; it is the visual voice of written language. From Gutenberg’s movable wooden and metal type in the 15th century to digital variable web fonts today, typography shapes how humans process information. 

Serif typefaces, characterized by small decorative feet at the stroke ends, were historically favored in printed books because serifs create an imaginary baseline guide for the human eye, increasing long-form reading speed. Conversely, Sans-Serif fonts, which emerged during the Industrial Revolution, eliminate decorative serifs to deliver clean legibility on digital screens and low-resolution signage.`,
    question: 'Q115. What term refers to modern font files containing multiple weight and width variations in a single file?',
    options: ['Variable Fonts', 'Raster Fonts', 'Bitmap Fonts', 'Static Fonts'],
    answer: 0,
    explanation: 'Variable fonts incorporate an entire font family axis into one efficient digital font file.',
    topic: 'Digital Typography'
  },

  // PASSAGE 3 (Questions 116 to 120)
  {
    id: 'seed_q_116',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 116,
    passageTitle: 'Passage 3: Ergonomics & Inclusive Design in Public Mobility',
    passageText: `Inclusive design ensures that environments and transportation systems accommodate the widest possible spectrum of human abilities. In urban transit hubs, tactile ground indicators (Tenji blocks) assist visually impaired commuters through raised directional bars and warning truncated domes.

Furthermore, universal seating design incorporates anthropometric data spanning the 5th percentile female to the 95th percentile male body measurements. By integrating low-floor boarding ramps, high-contrast signage, and intuitive audio-haptic notifications, public mobility hubs transform into barrier-free public spaces.`,
    question: 'Q116. What is the main goal of Inclusive Design in public transportation?',
    options: ['Designing exclusively for athletes', 'Accommodating the widest possible spectrum of human abilities', 'Reducing seating space to fit more people', 'Building expensive VIP lounges'],
    answer: 1,
    explanation: 'Inclusive Design creates accessible spaces usable by everyone regardless of age or physical disability.',
    topic: 'Ergonomics Comprehension'
  },
  {
    id: 'seed_q_117',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 117,
    passageTitle: 'Passage 3: Ergonomics & Inclusive Design in Public Mobility',
    passageText: `Inclusive design ensures that environments and transportation systems accommodate the widest possible spectrum of human abilities. In urban transit hubs, tactile ground indicators (Tenji blocks) assist visually impaired commuters through raised directional bars and warning truncated domes.

Furthermore, universal seating design incorporates anthropometric data spanning the 5th percentile female to the 95th percentile male body measurements. By integrating low-floor boarding ramps, high-contrast signage, and intuitive audio-haptic notifications, public mobility hubs transform into barrier-free public spaces.`,
    question: 'Q117. What are "Tenji blocks" used for in urban subway stations?',
    options: ['Aesthetic ceramic floor decoration', 'Tactile ground paving indicators assisting visually impaired pedestrians', 'Bicycle parking stands', 'Solar power generation'],
    answer: 1,
    explanation: 'Tenji blocks feature raised tactile patterns to guide visually impaired commuters safely through stations.',
    topic: 'Accessible Design'
  },
  {
    id: 'seed_q_118',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 118,
    passageTitle: 'Passage 3: Ergonomics & Inclusive Design in Public Mobility',
    passageText: `Inclusive design ensures that environments and transportation systems accommodate the widest possible spectrum of human abilities. In urban transit hubs, tactile ground indicators (Tenji blocks) assist visually impaired commuters through raised directional bars and warning truncated domes.

Furthermore, universal seating design incorporates anthropometric data spanning the 5th percentile female to the 95th percentile male body measurements. By integrating low-floor boarding ramps, high-contrast signage, and intuitive audio-haptic notifications, public mobility hubs transform into barrier-free public spaces.`,
    question: 'Q118. What anthropometric range is standard for universal seat dimensioning?',
    options: ['1st to 10th percentile female', '5th percentile female to 95th percentile male', '50th percentile male only', '90th to 99th percentile male'],
    answer: 1,
    explanation: 'Designing for the 5th percentile female through 95th percentile male accommodates 90%+ of the human population.',
    topic: 'Anthropometrics'
  },
  {
    id: 'seed_q_119',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 119,
    passageTitle: 'Passage 3: Ergonomics & Inclusive Design in Public Mobility',
    passageText: `Inclusive design ensures that environments and transportation systems accommodate the widest possible spectrum of human abilities. In urban transit hubs, tactile ground indicators (Tenji blocks) assist visually impaired commuters through raised directional bars and warning truncated domes.

Furthermore, universal seating design incorporates anthropometric data spanning the 5th percentile female to the 95th percentile male body measurements. By integrating low-floor boarding ramps, high-contrast signage, and intuitive audio-haptic notifications, public mobility hubs transform into barrier-free public spaces.`,
    question: 'Q119. How do low-floor boarding buses benefit public transit accessibility?',
    options: ['They travel at higher speeds', 'They allow seamless level entry for wheelchairs, strollers, and senior citizens', 'They require less fuel', 'They have smaller wheels'],
    answer: 1,
    explanation: 'Low-floor buses eliminate entry steps, allowing level boarding for wheelchair users and strollers.',
    topic: 'Public Transit Ergonomics'
  },
  {
    id: 'seed_q_120',
    type: 'comprehension',
    section: 'seed_comprehension',
    number: 120,
    passageTitle: 'Passage 3: Ergonomics & Inclusive Design in Public Mobility',
    passageText: `Inclusive design ensures that environments and transportation systems accommodate the widest possible spectrum of human abilities. In urban transit hubs, tactile ground indicators (Tenji blocks) assist visually impaired commuters through raised directional bars and warning truncated domes.

Furthermore, universal seating design incorporates anthropometric data spanning the 5th percentile female to the 95th percentile male body measurements. By integrating low-floor boarding ramps, high-contrast signage, and intuitive audio-haptic notifications, public mobility hubs transform into barrier-free public spaces.`,
    question: 'Q120. What term describes combining auditory sounds and physical vibrations to convey information?',
    options: ['Audio-Haptic Notifications', 'Visual Illusion', 'Monochromatic Feedback', 'Thermal Sensing'],
    answer: 0,
    explanation: 'Audio-haptic feedback combines sound and tactile vibration cues for multi-sensory accessibility.',
    topic: 'Inclusive UX Design'
  }
];
