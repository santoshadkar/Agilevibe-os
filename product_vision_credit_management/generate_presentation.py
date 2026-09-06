import os
import sys
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_presentation():
    output_dir = r"C:\Users\anany\.gemini\antigravity\scratch\product_vision_credit_management"
    os.makedirs(output_dir, exist_ok=True)
    file_path = os.path.join(output_dir, "Product_Vision_Masterclass_Credit_Management.pptx")
    file_path_alt = os.path.join(output_dir, "Product_Vision_Credit_Management.pptx")

    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6] # Blank layout

    # Color Palette
    NAVY = RGBColor(15, 23, 42)          # #0F172A Dark Primary
    SLATE_HEADER = RGBColor(30, 41, 59)   # #1E293B Dark Secondary
    TEAL = RGBColor(14, 116, 144)        # #0E7490 Primary Accent
    CYAN = RGBColor(6, 182, 212)         # #06B6D4 Light Accent
    EMERALD = RGBColor(5, 150, 105)      # #059669 Positive Accent
    AMBER = RGBColor(217, 119, 6)        # #D97706 Warning Accent
    PURPLE = RGBColor(124, 58, 237)      # #7C3AED Specialty Accent
    TEXT_DARK = RGBColor(30, 41, 59)     # #1E293B Main Body Text
    TEXT_MUTED = RGBColor(100, 116, 139) # #64748B Secondary Text
    WHITE = RGBColor(255, 255, 255)
    BG_LIGHT = RGBColor(248, 250, 252)   # #F8FAFC
    CARD_BG = RGBColor(255, 255, 255)
    CARD_BORDER = RGBColor(226, 232, 240)

    def add_header(slide, title_text, category="PRODUCT VISION MASTERCLASS | GENERIC CONCEPTS & CREDIT DOMAIN"):
        header_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(1.1))
        tf = header_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        
        p_cat = tf.paragraphs[0]
        p_cat.text = category.upper()
        p_cat.font.size = Pt(10)
        p_cat.font.bold = True
        p_cat.font.color.rgb = TEAL
        p_cat.font.name = 'Arial'
        
        p_title = tf.add_paragraph()
        p_title.text = title_text
        p_title.font.size = Pt(21)
        p_title.font.bold = True
        p_title.font.color.rgb = NAVY
        p_title.font.name = 'Arial'

    def add_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=CARD_BORDER):
        shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        shape.fill.solid()
        shape.fill.fore_color.rgb = bg_color
        if border_color:
            shape.line.color.rgb = border_color
            shape.line.width = Pt(1.5)
        else:
            shape.line.fill.background()
        return shape

    def set_notes(slide, notes_text):
        notes_slide = slide.notes_slide
        tf = notes_slide.notes_text_frame
        tf.text = notes_text

    # ==========================================
    # SLIDE 1: Title Slide (Dark Theme)
    # ==========================================
    slide1 = prs.slides.add_slide(blank_layout)
    bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid(); bg1.fill.fore_color.rgb = NAVY; bg1.line.fill.background()

    line1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(1.0), Inches(1.8), Inches(1.2), Inches(0.08))
    line1.fill.solid(); line1.fill.fore_color.rgb = CYAN; line1.line.fill.background()

    tb1 = slide1.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(11.333), Inches(4.5))
    tf1 = tb1.text_frame; tf1.word_wrap = True

    p = tf1.paragraphs[0]
    p.text = "PRODUCT MANAGEMENT MASTERCLASS"
    p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = CYAN; p.font.name = 'Arial'

    p2 = tf1.add_paragraph()
    p2.text = "Mastering Product Vision: Core Concepts & Domain Application"
    p2.font.size = Pt(34); p2.font.bold = True; p2.font.color.rgb = WHITE; p2.font.name = 'Arial'

    p3 = tf1.add_paragraph()
    p3.text = "An Exhaustive Guide on What PV Is, How/When to Create & Update It, Core Frameworks, Socialization, and Credit Management Domain Integration"
    p3.font.size = Pt(16); p3.font.color.rgb = RGBColor(203, 213, 225); p3.font.name = 'Arial'; p3.space_before = Pt(14)

    p4 = tf1.add_paragraph()
    p4.text = "Target Audience: Product Owners, Product Managers & Tribe Leaders | Data & Analytics Tribe"
    p4.font.size = Pt(12); p4.font.color.rgb = RGBColor(148, 163, 184); p4.font.name = 'Arial'; p4.space_before = Pt(36)

    set_notes(slide1, 
        "Welcome! This expanded masterclass covers everything a Product Owner needs to know about Product Vision. "
        "We start with universal, generic product concepts (definitions, timing, creation steps, frameworks, and squad/leadership communication) "
        "and then apply them directly to the Credit Management domain in Data & Analytics."
    )

    # ==========================================
    # SLIDE 2: Onboarding & Executive Learning Objectives
    # ==========================================
    slide2 = prs.slides.add_slide(blank_layout)
    add_header(slide2, "Executive Learning Objectives: What You Will Master")

    card_w = Inches(3.64); card_h = Inches(5.1); top_pos = Inches(1.7)

    # Card 1: Core Concepts
    add_card(slide2, Inches(0.8), top_pos, card_w, card_h)
    tb = slide2.shapes.add_textbox(Inches(1.0), top_pos + Inches(0.2), card_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🧠 Core Vision Concepts"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = NAVY
    pts1 = [
        "What Product Vision is and how it differs from Mission, Strategy, and Roadmaps.",
        "The 6 essential components (anatomy) of a high-impact vision.",
        "When to create, review, and update a vision (cadence & trigger events)."
    ]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    # Card 2: Frameworks & Socialization
    add_card(slide2, Inches(4.84), top_pos, card_w, card_h)
    tb = slide2.shapes.add_textbox(Inches(5.04), top_pos + Inches(0.2), card_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🛠️ Frameworks & Communication"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL
    pts2 = [
        "Mastering 5 frameworks: Moore, Pichler, Sinek (Golden Circle), Cagan, and Radical Product Thinking.",
        "How to socialize vision with Agile Squads (Engineers & Data Scientists).",
        "Pitching to Executive Leadership & C-Suite with high-impact ROI framing."
    ]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    # Card 3: Domain Application
    add_card(slide2, Inches(8.88), top_pos, card_w, card_h)
    tb = slide2.shapes.add_textbox(Inches(9.08), top_pos + Inches(0.2), card_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "💳 Credit Domain Application"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = EMERALD
    pts3 = [
        "Applying vision frameworks to Credit Underwriting, EWS, and Collections.",
        "The 5 Strategic Pillars of Credit Analytics Data Products.",
        "Metric Architecture (North Star RADEI) and 30-60-90 Day PO Onboarding Plan."
    ]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    set_notes(slide2, 
        "This slide sets expectations for the entire presentation. By the end of this deck, a PO will be fully equipped "
        "to define, articulate, and lead a product vision both conceptually and practically in Credit Analytics."
    )

    # ==========================================
    # SLIDE 3: What is Product Vision? (Deep Definition)
    # ==========================================
    slide3 = prs.slides.add_slide(blank_layout)
    add_header(slide3, "What is a Product Vision? Deep Definition & Core Philosophy")

    add_card(slide3, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.3), bg_color=NAVY, border_color=None)
    tb = slide3.shapes.add_textbox(Inches(1.1), Inches(1.75), Inches(11.133), Inches(1.0))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "\"A Product Vision is an overarching, inspiring, and long-term aspirational statement of the future state your product seeks to achieve over a 3 to 5-year horizon. It defines WHY the product exists, WHO it serves, and WHAT transformative value it delivers to users and the enterprise.\""
    p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = WHITE; p.font.italic = True

    col_w = Inches(3.64); top_c = Inches(3.1)

    add_card(slide3, Inches(0.8), top_c, col_w, Inches(3.7))
    tb = slide3.shapes.add_textbox(Inches(1.0), top_c + Inches(0.15), col_w - Inches(0.4), Inches(3.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "1. Purpose & Inspiration"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    p2 = tf.add_paragraph(); p2.text = "It rallies multi-disciplinary teams around a shared, noble purpose beyond writing lines of code or completing Jira sprint tickets."; p2.font.size = Pt(11.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(8)

    add_card(slide3, Inches(4.84), top_c, col_w, Inches(3.7))
    tb = slide3.shapes.add_textbox(Inches(5.04), top_c + Inches(0.15), col_w - Inches(0.4), Inches(3.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "2. Strategic Guardrail"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    p2 = tf.add_paragraph(); p2.text = "It provides clear decision guardrails. It empowers the PO to confidently say 'NO' to out-of-scope feature requests and distraction traps."; p2.font.size = Pt(11.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(8)

    add_card(slide3, Inches(8.88), top_c, col_w, Inches(3.7))
    tb = slide3.shapes.add_textbox(Inches(9.08), top_c + Inches(0.15), col_w - Inches(0.4), Inches(3.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "3. Enterprise Value Link"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    p2 = tf.add_paragraph(); p2.text = "It directly connects tactical execution (code, data pipelines, APIs) to executive business outcomes (loss reduction, growth, compliance)."; p2.font.size = Pt(11.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(8)

    set_notes(slide3, 
        "Emphasize to the PO that a vision is NOT a list of features or a project timeline. It is an emotional and strategic anchor."
    )

    # ==========================================
    # SLIDE 4: Vision vs Mission vs Strategy vs Roadmap vs Backlog
    # ==========================================
    slide4 = prs.slides.add_slide(blank_layout)
    add_header(slide4, "Demystifying Terminology: Vision vs Mission vs Strategy vs Roadmap vs Backlog")

    rows = 6; cols = 4
    table_shape = slide4.shapes.add_table(rows, cols, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    table = table_shape.table
    table.columns[0].width = Inches(2.2); table.columns[1].width = Inches(3.2); table.columns[2].width = Inches(2.5); table.columns[3].width = Inches(3.833)

    headers = ["Term", "Primary Focus & Horizon", "Core Question Answered", "Generic Example"]
    data = [
        ["Product Vision", "3-5 Years | Long-term future state", "WHY does the product exist?", "To make credit access instantaneous, transparent, and fair worldwide."],
        ["Product Mission", "Ongoing | Operational purpose", "WHAT do we do daily to achieve the vision?", "We build AI-driven risk scoring and real-time underwriting data products."],
        ["Product Strategy", "1-2 Years | Strategic pillars & approach", "HOW will we achieve the vision?", "By integrating open-banking data & automated early warning distress models."],
        ["Product Roadmap", "3-12 Months | Chronological milestones", "WHEN will major outcomes be delivered?", "Q1: EWS Model v1; Q2: Bureau API modernizer; Q3: SHAP portal."],
        ["Product Backlog", "1-4 Weeks | Tactical epics & stories", "WHAT specific items are being built now?", "User Story: Expose SHAP feature importance REST API endpoint."]
    ]

    for c, h in enumerate(headers):
        cell = table.cell(0, c); cell.fill.solid(); cell.fill.fore_color.rgb = NAVY
        p = cell.text_frame.paragraphs[0]; p.text = h; p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = WHITE

    for r, row_data in enumerate(data):
        for c, val in enumerate(row_data):
            cell = table.cell(r + 1, c)
            cell.fill.solid(); cell.fill.fore_color.rgb = BG_LIGHT if r % 2 == 0 else WHITE
            p = cell.text_frame.paragraphs[0]; p.text = val; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK
            if c == 0: p.font.bold = True

    set_notes(slide4, 
        "Product managers often confuse Vision with Strategy or Roadmap. Use this matrix to show how each level plays a distinct role."
    )

    # ==========================================
    # SLIDE 5: Why Product Vision is Critical (5 Strategic Value Drivers - EXACTLY 5 CARDS)
    # ==========================================
    slide5 = prs.slides.add_slide(blank_layout)
    add_header(slide5, "Why Product Vision is Critical: 5 Strategic Value Drivers")

    card_w1 = Inches(3.64); top_r1 = Inches(1.6); card_h1 = Inches(2.4)

    # Top Row: 3 Cards
    # Card 1
    add_card(slide5, Inches(0.8), top_r1, card_w1, card_h1)
    tb = slide5.shapes.add_textbox(Inches(0.9), top_r1 + Inches(0.1), card_w1 - Inches(0.2), Inches(2.2))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "1. Strategic Decision Filter"; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = TEAL
    pts1 = ["Filter for evaluating ad-hoc feature requests.", "Empowers PO to say 'No' to scope creep.", "Keeps squad focused on high-leverage outcomes."]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(3)

    # Card 2
    add_card(slide5, Inches(4.84), top_r1, card_w1, card_h1)
    tb = slide5.shapes.add_textbox(Inches(4.94), top_r1 + Inches(0.1), card_w1 - Inches(0.2), Inches(2.2))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "2. Cross-Functional Autonomy"; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = NAVY
    pts2 = ["Aligns Product, Engineering, Risk & Execs.", "Enables autonomous squad decision-making.", "Reduces approval bottlenecks & escalations."]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(3)

    # Card 3
    add_card(slide5, Inches(8.88), top_r1, card_w1, card_h1)
    tb = slide5.shapes.add_textbox(Inches(8.98), top_r1 + Inches(0.1), card_w1 - Inches(0.2), Inches(2.2))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "3. Team Purpose & Motivation"; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = AMBER
    pts3 = ["Transforms ticket processors to problem solvers.", "Connects code delivery to real human impact.", "Increases team pride, retention, & velocity."]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(3)

    # Bottom Row: 2 Cards
    card_w2 = Inches(5.6); top_r2 = Inches(4.3)

    # Card 4
    add_card(slide5, Inches(0.8), top_r2, card_w2, card_h1)
    tb = slide5.shapes.add_textbox(Inches(1.0), top_r2 + Inches(0.1), card_w2 - Inches(0.4), Inches(2.2))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "4. Outcome Centricity over Feature Output"; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = EMERALD
    pts4 = ["Shifts focus from building output (stories) to delivering outcome (value).", "Ensures long-term customer pain points drive the backlog priorities."]
    for pt in pts4: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(3)

    # Card 5
    add_card(slide5, Inches(6.933), top_r2, card_w2, card_h1)
    tb = slide5.shapes.add_textbox(Inches(7.133), top_r2 + Inches(0.1), card_w2 - Inches(0.4), Inches(2.2))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "5. Future-Proofing & Competitive Advantage"; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = PURPLE
    pts5 = ["Anticipates market shifts and technological disruption proactively.", "Ensures long-term defensibility and enterprise market leadership."]
    for pt in pts5: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(3)

    set_notes(slide5, 
        "Without a vision, squads suffer from feature factory syndrome—building lots of stuff without achieving strategic business outcomes."
    )

    # ==========================================
    # SLIDE 6: 7 Qualities of a World-Class Vision (EXACTLY 7 CARDS)
    # ==========================================
    slide6 = prs.slides.add_slide(blank_layout)
    add_header(slide6, "The 7 Qualities of a World-Class Product Vision")

    # Top Row: 4 Cards (width 2.78")
    top_r1 = Inches(1.6); card_w1 = Inches(2.78); card_h = Inches(2.4); spacing1 = Inches(0.2)

    q_data_top = [
        ("1. Inspiring & Aspirational", TEAL, "Stretches imagination & motivates squads to solve hard problems."),
        ("2. Clear & Concise", NAVY, "Easy to understand & repeat in an elevator pitch without jargon."),
        ("3. Customer-Centric", EMERALD, "Grounded in real user pain points rather than internal tech goals."),
        ("4. Stable Yet Flexible", TEAL, "Endures across 3-5 years while allowing tactical strategy to pivot.")
    ]

    for i, (title, col, desc) in enumerate(q_data_top):
        left_p = Inches(0.8) + i * (card_w1 + spacing1)
        add_card(slide6, left_p, top_r1, card_w1, card_h)
        tb = slide6.shapes.add_textbox(left_p + Inches(0.1), top_r1 + Inches(0.15), card_w1 - Inches(0.2), Inches(2.1))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = col
        p2 = tf.add_paragraph(); p2.text = desc; p2.font.size = Pt(10.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(6)

    # Bottom Row: 3 Cards (width 3.64")
    top_r2 = Inches(4.3); card_w2 = Inches(3.64); spacing2 = Inches(0.4)

    q_data_bot = [
        ("5. Differentiating", AMBER, "Articulates why this product is uniquely positioned vs alternatives."),
        ("6. Value-Linked", PURPLE, "Directly connects user value creation to enterprise financial ROI."),
        ("7. Feasible & Realizable", EMERALD, "Grounded in technical possibility and strategic enterprise realism.")
    ]

    for i, (title, col, desc) in enumerate(q_data_bot):
        left_p = Inches(0.8) + i * (card_w2 + spacing2)
        add_card(slide6, left_p, top_r2, card_w2, card_h)
        tb = slide6.shapes.add_textbox(left_p + Inches(0.1), top_r2 + Inches(0.15), card_w2 - Inches(0.2), Inches(2.1))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = col
        p2 = tf.add_paragraph(); p2.text = desc; p2.font.size = Pt(10.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(6)

    set_notes(slide6, 
        "Use these 7 qualities as an evaluation rubric when reviewing draft vision statements with your team."
    )

    # ==========================================
    # SLIDE 7: When to Create & Update PV?
    # ==========================================
    slide7 = prs.slides.add_slide(blank_layout)
    add_header(slide7, "When to Create & Update a Product Vision? Key Lifecycle Triggers")

    col_w = Inches(5.6); col_h = Inches(5.1); top_p = Inches(1.6)

    # Left Column: When to Create
    add_card(slide7, Inches(0.8), top_p, col_w, col_h)
    tb = slide7.shapes.add_textbox(Inches(1.0), top_p + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🚀 When to CREATE a New Vision"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL
    triggers_c = [
        ("New Product / Squad Launch", "When a new squad, domain, or data product initiative is established."),
        ("Major Strategic Pivot", "When the existing business model or target market shifts fundamentally."),
        ("New Domain PO Onboarding", "When a new PO takes over a legacy domain needing realignment."),
        ("Unification of Siloed Products", "When merging multiple fragmented tools into a unified platform.")
    ]
    for title, desc in triggers_c:
        p = tf.add_paragraph(); p.text = "• " + title + ": "; p.font.bold = True; p.font.size = Pt(11.5); p.font.color.rgb = NAVY; p.space_before = Pt(8)
        r = p.add_run(); r.text = desc; r.font.color.rgb = TEXT_DARK

    # Right Column: When to Update / Refresh
    add_card(slide7, Inches(6.933), top_p, col_w, col_h)
    tb = slide7.shapes.add_textbox(Inches(7.133), top_p + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🔄 When to UPDATE / REFRESH an Existing Vision"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = AMBER
    triggers_u = [
        ("Macroeconomic / Market Shifts", "Major economic changes (e.g., rate hikes, recession, inflation)."),
        ("Regulatory & Compliance Shifts", "New legal mandates (e.g., Basel IV, AI Governance Acts)."),
        ("Disruptive Tech Advancements", "Emergence of new tech capabilities (e.g., GenAI, LLMs, Real-time APIs)."),
        ("Vision Achievement", "When the original 3-5 year vision state has been successfully realized.")
    ]
    for title, desc in triggers_u:
        p = tf.add_paragraph(); p.text = "• " + title + ": "; p.font.bold = True; p.font.size = Pt(11.5); p.font.color.rgb = NAVY; p.space_before = Pt(8)
        r = p.add_run(); r.text = desc; r.font.color.rgb = TEXT_DARK

    set_notes(slide7, 
        "A Product Vision is NOT created once and forgotten. It must respond to major market and technological triggers."
    )

    # ==========================================
    # SLIDE 8: Frequency Guide for PV Maintenance
    # ==========================================
    slide8 = prs.slides.add_slide(blank_layout)
    add_header(slide8, "Frequency Guide: How Often Should You Review & Refresh PV?")

    step_w = Inches(2.78); step_h = Inches(5.1); spacing = Inches(0.2)

    freq_data = [
        ("Continuous Alignment", TEAL, "Bi-Weekly / Monthly", ["Reference vision during sprint planning.", "Validate backlog user stories against vision pillars.", "Keep squad focused on purpose."]),
        ("Quarterly Pulse Check", NAVY, "Every 3 Months (OKRs)", ["Review vision relevance against quarterly OKRs.", "Assess market changes and competitor moves.", "Make minor tactical course corrections."]),
        ("Annual Strategic Review", AMBER, "Every 12 Months", ["Formal alignment session with CRO & Execs.", "Validate 3-5 year trajectory.", "Refresh vision board & strategic pillars."]),
        ("Major Paradigm Shift", EMERALD, "Every 3-5 Years (or Pivot)", ["Full vision overhaul upon realizing original state.", "Re-position product for next growth cycle.", "Re-architect long-term data capabilities."])
    ]

    for i, (title, col, cadence, bullets) in enumerate(freq_data):
        left_p = Inches(0.8) + i * (step_w + spacing)
        add_card(slide8, left_p, Inches(1.6), step_w, step_h)

        header_strip = slide8.shapes.add_shape(MSO_SHAPE.RECTANGLE, left_p, Inches(1.6), step_w, Inches(1.0))
        header_strip.fill.solid(); header_strip.fill.fore_color.rgb = col; header_strip.line.fill.background()
        tf = header_strip.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER
        p2 = tf.add_paragraph(); p2.text = cadence; p2.font.size = Pt(10); p2.font.color.rgb = RGBColor(226, 232, 240); p2.alignment = PP_ALIGN.CENTER

        tb = slide8.shapes.add_textbox(left_p + Inches(0.1), Inches(2.7), step_w - Inches(0.2), step_h - Inches(1.2))
        tf = tb.text_frame; tf.word_wrap = True
        for b in bullets:
            p = tf.add_paragraph(); p.text = "• " + b; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide8, 
        "Show this slide to set clear governance expectations. Vision alignment happens bi-weekly, but vision overhauls happen annually or every 3-5 years."
    )

    # ==========================================
    # SLIDE 9: The 6 Core Components (Anatomy) of PV
    # ==========================================
    slide9 = prs.slides.add_slide(blank_layout)
    add_header(slide9, "The Anatomy of a Product Vision: 6 Core Components")

    c_w = Inches(3.64); top_c = Inches(1.6)

    comp_data = [
        ("1. Target User / Customer", TEAL, "Who specifically is this product built for? (e.g., Credit Underwriters, Risk Analysts)."),
        ("2. Core Problem / Pain Point", NAVY, "What fundamental problem or friction are we solving for them?"),
        ("3. Solution Capability", EMERALD, "What primary capability or innovation does the product provide?"),
        ("4. Key Differentiator", AMBER, "Why is our approach superior to legacy methods or alternative tools?"),
        ("5. Strategic Business Outcome", PURPLE, "What measurable enterprise ROI does this product deliver?"),
        ("6. The Inspiring Hook", TEAL, "What emotional & aspirational theme rallies the squad around the vision?")
    ]

    for i, (title, col, desc) in enumerate(comp_data):
        r_idx = i // 3; c_idx = i % 3
        left_p = Inches(0.8) + c_idx * (c_w + Inches(0.4))
        top_p = top_c + r_idx * Inches(2.6)

        add_card(slide9, left_p, top_p, c_w, Inches(2.4))
        tb = slide9.shapes.add_textbox(left_p + Inches(0.1), top_p + Inches(0.15), c_w - Inches(0.2), Inches(2.1))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(14); p.font.bold = True; p.font.color.rgb = col
        p2 = tf.add_paragraph(); p2.text = desc; p2.font.size = Pt(11.5); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(6)

    set_notes(slide9, 
        "Every complete vision statement must contain these 6 building blocks. If any block is missing, the vision feels incomplete or ambiguous."
    )

    # ==========================================
    # SLIDE 10: Step-by-Step Guide: How to Craft PV
    # ==========================================
    slide10 = prs.slides.add_slide(blank_layout)
    add_header(slide10, "Step-by-Step Guide: How to Craft a Product Vision from Scratch")

    step_w = Inches(2.18); step_h = Inches(5.1); spacing = Inches(0.2)

    phases = [
        ("Phase 1: Discover", TEAL, "1-2 Weeks", ["Conduct user & stakeholder interviews.", "Audit existing data assets & pain points.", "Analyze competitive/industry benchmarks."]),
        ("Phase 2: Co-Create", NAVY, "1 Day Workshop", ["Gather Squad, Risk Leads & Design.", "Run Vision Board brainstorming.", "Define target state & core pillars."]),
        ("Phase 3: Draft", AMBER, "3-5 Days", ["Synthesize workshop inputs.", "Apply Geoffrey Moore & Pichler frameworks.", "Draft 2-3 vision options."]),
        ("Phase 4: Validate", EMERALD, "1 Week", ["Test vision with front-line users.", "Review with CRO & Executive Sponsors.", "Refine language for maximum clarity."]),
        ("Phase 5: Socialize", PURPLE, "Ongoing", ["Launch vision in Squad Town Hall.", "Embed in roadmap & Jira backlog.", "Incorporate into quarterly OKRs."])
    ]

    for i, (title, col, duration, bullets) in enumerate(phases):
        left_p = Inches(0.8) + i * (step_w + spacing)
        add_card(slide10, left_p, Inches(1.6), step_w, step_h)

        header_strip = slide10.shapes.add_shape(MSO_SHAPE.RECTANGLE, left_p, Inches(1.6), step_w, Inches(1.0))
        header_strip.fill.solid(); header_strip.fill.fore_color.rgb = col; header_strip.line.fill.background()
        tf = header_strip.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER
        p2 = tf.add_paragraph(); p2.text = duration; p2.font.size = Pt(10); p2.font.color.rgb = RGBColor(226, 232, 240); p2.alignment = PP_ALIGN.CENTER

        tb = slide10.shapes.add_textbox(left_p + Inches(0.1), Inches(2.7), step_w - Inches(0.2), step_h - Inches(1.2))
        tf = tb.text_frame; tf.word_wrap = True
        for b in bullets:
            p = tf.add_paragraph(); p.text = "• " + b; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(6)

    set_notes(slide10, 
        "Never write a product vision alone in a dark room. Follow this 5-phase collaborative process to get true buy-in."
    )

    # ==========================================
    # SLIDE 11: Overview of Product Vision Frameworks
    # ==========================================
    slide11 = prs.slides.add_slide(blank_layout)
    add_header(slide11, "Overview of Product Vision Frameworks & Selection")

    add_card(slide11, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide11.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Why Use Vision Frameworks?"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = NAVY
    pts = [
        "Eliminates Writer's Block: Standardized templates give immediate structure to complex strategic ideas.",
        "Ensures Completeness: Prevents skipping critical elements like target user, differentiator, or enterprise outcome.",
        "Drives Stakeholder Consensus: Establishes a shared language across technical and non-technical leaders.",
        "Facilitates Comparison: Allows teams to evaluate alternative vision positions side-by-side."
    ]
    for pt in pts: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(12); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    p2 = tf.add_paragraph(); p2.text = "The 5 Master Frameworks We Will Explore:"; p2.font.size = Pt(15); p2.font.bold = True; p2.font.color.rgb = TEAL; p2.space_before = Pt(18)
    fw_list = "1. Geoffrey Moore's Positioning Formula  |  2. Roman Pichler's Vision Board  |  3. Simon Sinek's Golden Circle\n4. Marty Cagan's Product Vision Tenets  |  5. Radhika Dutt's Radical Product Thinking Framework"
    p3 = tf.add_paragraph(); p3.text = fw_list; p3.font.size = Pt(12); p3.font.color.rgb = NAVY; p3.space_before = Pt(6); p3.font.bold = True

    set_notes(slide11, 
        "Introduce the 5 major vision frameworks. Each framework offers a unique lens suitable for different team contexts."
    )

    # ==========================================
    # SLIDE 12: Framework 1 - Geoffrey Moore
    # ==========================================
    slide12 = prs.slides.add_slide(blank_layout)
    add_header(slide12, "Framework 1: Geoffrey Moore's Positioning Formula")

    add_card(slide12, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide12.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Geoffrey Moore Vision Formula (Generic Structure)"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL

    template_parts = [
        ("FOR", "[Target Customer / User Segment]"),
        ("WHO NEED", "[Core Pain Point or Opportunity]"),
        ("THE (Product Name)", "[Product Name / Data Product Category]"),
        ("THAT IS A", "[Product Category / System Type]"),
        ("THAT DELIVERS", "[Key Capability & Primary Benefit]"),
        ("UNLIKE", "[Primary Existing Alternative or Manual Process]"),
        ("OUR PRODUCT", "[Key Differentiator & Ultimate Enterprise Impact]")
    ]

    for label, text in template_parts:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = label + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = NAVY
        r2 = p.add_run(); r2.text = text; r2.font.size = Pt(12); r2.font.color.rgb = TEXT_DARK

    set_notes(slide12, 
        "Geoffrey Moore's template is ideal for elevator pitches and executive summaries. It ensures crisp competitive positioning."
    )

    # ==========================================
    # SLIDE 13: Framework 2 - Roman Pichler Vision Board
    # ==========================================
    slide13 = prs.slides.add_slide(blank_layout)
    add_header(slide13, "Framework 2: Roman Pichler's Product Vision Board")

    add_card(slide13, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.1), bg_color=NAVY, border_color=None)
    tb = slide13.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(11.333), Inches(0.9))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "OVERARCHING VISION STATEMENT: The inspiring 1-sentence North Star describing the future state."
    p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER

    q_w = Inches(2.78); q_h = Inches(3.8); spacing = Inches(0.2)
    quads = [
        ("TARGET GROUP", TEAL, ["Who are the primary users?", "Who are the enterprise buyers?", "Which market segment?"]),
        ("NEEDS", NAVY, ["What problem does it solve?", "What benefit does it provide?", "Why would users pay for it?"]),
        ("PRODUCT FEATURES", TEAL, ["What is the product?", "3-5 top capabilities?", "What makes it unique?"]),
        ("BUSINESS GOALS", EMERALD, ["How does it benefit business?", "Revenue / Margin goals?", "Cost savings / Risk targets?"])
    ]

    for i, (title, col, items) in enumerate(quads):
        left_p = Inches(0.8) + i * (q_w + spacing)
        add_card(slide13, left_p, Inches(2.9), q_w, q_h)
        tb = slide13.shapes.add_textbox(left_p + Inches(0.1), Inches(3.0), q_w - Inches(0.2), q_h - Inches(0.2))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = col
        for it in items:
            p = tf.add_paragraph(); p.text = "• " + it; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide13, 
        "Roman Pichler's Vision Board bridges high-level aspirational vision with practical product strategy and business goals."
    )

    # ==========================================
    # SLIDE 14: Framework 3 - Simon Sinek's Golden Circle
    # ==========================================
    slide14 = prs.slides.add_slide(blank_layout)
    add_header(slide14, "Framework 3: Simon Sinek's Golden Circle (Start With WHY)")

    c_w = Inches(3.64); top_c = Inches(1.6); card_h = Inches(5.1)

    # WHY
    add_card(slide14, Inches(0.8), top_c, c_w, card_h, bg_color=RGBColor(240, 253, 250), border_color=TEAL)
    tb = slide14.shapes.add_textbox(Inches(1.0), top_c + Inches(0.2), c_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "1. WHY (Purpose)"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = NAVY
    pts1 = [
        "The Core Belief & Purpose.",
        "Why does this product exist?",
        "Why should anyone care?",
        "Inspires emotional commitment across squads and stakeholders."
    ]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    # HOW
    add_card(slide14, Inches(4.84), top_c, c_w, card_h)
    tb = slide14.shapes.add_textbox(Inches(5.04), top_c + Inches(0.2), c_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "2. HOW (Strategy)"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL
    pts2 = [
        "The Differentiating Principles.",
        "How do we fulfill our WHY?",
        "What unique values, architectures, or methods guide us?",
        "Establishes competitive advantage."
    ]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    # WHAT
    add_card(slide14, Inches(8.88), top_c, c_w, card_h)
    tb = slide14.shapes.add_textbox(Inches(9.08), top_c + Inches(0.2), c_w - Inches(0.4), card_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "3. WHAT (Product)"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = EMERALD
    pts3 = [
        "The Tangible Deliverable.",
        "What specific product or features do we build?",
        "The physical or digital manifestation of the WHY.",
        "Sits at the outer edge of the vision."
    ]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11.5); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(10)

    set_notes(slide14, 
        "Most companies communicate from the outside-in (What -> How -> Why). Great product leaders communicate from the inside-out (Why -> How -> What)."
    )

    # ==========================================
    # SLIDE 15: Framework 4 - Marty Cagan's Tenets (INSPIRED)
    # ==========================================
    slide15 = prs.slides.add_slide(blank_layout)
    add_header(slide15, "Framework 4: Marty Cagan's Product Vision Tenets (INSPIRED)")

    add_card(slide15, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide15.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Marty Cagan's Core Principles for Effective Product Vision"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = NAVY

    tenets = [
        ("1. Focus on the Outcome, Not Features", "Vision must define the change in customer behavior or business state, not a laundry list of UI features."),
        ("2. Empowered Teams Need Big Vision", "Empowered squads require a meaningful, ambitious vision to solve complex problems autonomously."),
        ("3. Fall in Love with the Problem, Not Solution", "Solutions change continuously as technology evolves, but core customer problems endure."),
        ("4. Don't Be Afraid to Disruption Yourself", "A great vision embraces meaningful technological disruption before competitors force it."),
        ("5. Inspire the Team Daily", "The vision must be repeated constantly until every engineer and designer lives and breathes it.")
    ]

    for title, desc in tenets:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = title + " — "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = TEAL
        r2 = p.add_run(); r2.text = desc; r2.font.size = Pt(11.5); r2.font.color.rgb = TEXT_DARK

    set_notes(slide15, 
        "Marty Cagan emphasizes that product vision is the primary tool for creating empowered, outcome-driven product teams."
    )

    # ==========================================
    # SLIDE 16: Framework 5 - Radical Product Thinking
    # ==========================================
    slide16 = prs.slides.add_slide(blank_layout)
    add_header(slide16, "Framework 5: Radhika Dutt's Radical Product Thinking (RPT)")

    add_card(slide16, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide16.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Radical Product Thinking (RPT) Vision Statement Formula"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = PURPLE

    rpt_parts = [
        ("WHOSE PROBLEM?", "Today, when [Target User Group] experience [Specific Pain Point/Distress]..."),
        ("WHAT IS THE CURRENT FRICTION?", "They are forced to rely on [Inadequate Workaround / Friction-heavy Process]..."),
        ("WHAT WORLD ARE WE CREATING?", "We envision a world where [Desired Future State & Capability]..."),
        ("HOW WILL WE CHANGE IT?", "By building [Product / Platform Architecture] that delivers [Core Innovation]..."),
        ("WHY IT MATTERS?", "So that [Ultimate Business & Human Outcome / Long-Term Impact].")
    ]

    for label, text in rpt_parts:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = label + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = NAVY
        r2 = p.add_run(); r2.text = text; r2.font.size = Pt(12); r2.font.color.rgb = TEXT_DARK

    set_notes(slide16, 
        "Radhika Dutt's RPT framework prevents 'hero-driven product development' by forcing teams to anchor vision in deep problem analysis."
    )

    # ==========================================
    # SLIDE 17: Framework Comparison Matrix
    # ==========================================
    slide17 = prs.slides.add_slide(blank_layout)
    add_header(slide17, "Framework Comparison: Selecting the Right Framework for Your Squad")

    rows = 6; cols = 4
    table_shape = slide17.shapes.add_table(rows, cols, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    table = table_shape.table
    table.columns[0].width = Inches(2.5); table.columns[1].width = Inches(2.8); table.columns[2].width = Inches(3.2); table.columns[3].width = Inches(3.233)

    headers = ["Framework", "Best Used For", "Key Strength", "Potential Drawback"]
    data = [
        ["Geoffrey Moore Formula", "Elevator pitches & executive alignment", "Rigid structure ensures crisp competitive positioning", "Can feel overly formulaic if copied blindly"],
        ["Roman Pichler Vision Board", "Strategic product planning workshops", "Connects high-level vision directly to business goals & features", "Requires multi-stakeholder workshop effort"],
        ["Simon Sinek Golden Circle", "Cultural team inspiration & purpose", "Builds deep emotional alignment ('Start with WHY')", "Less detailed on specific product capabilities"],
        ["Marty Cagan Tenets", "Building empowered agile squads", "Shifts mindset from feature output to customer outcomes", "Philosophy-heavy; needs template pairing"],
        ["Radical Product Thinking", "Complex, problem-heavy domain transformation", "Deep focus on user pain points and system change", "Requires extensive upfront discovery work"]
    ]

    for c, h in enumerate(headers):
        cell = table.cell(0, c); cell.fill.solid(); cell.fill.fore_color.rgb = NAVY
        p = cell.text_frame.paragraphs[0]; p.text = h; p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = WHITE

    for r, row_data in enumerate(data):
        for c, val in enumerate(row_data):
            cell = table.cell(r + 1, c)
            cell.fill.solid(); cell.fill.fore_color.rgb = BG_LIGHT if r % 2 == 0 else WHITE
            p = cell.text_frame.paragraphs[0]; p.text = val; p.font.size = Pt(10.5); p.font.color.rgb = TEXT_DARK
            if c == 0: p.font.bold = True

    set_notes(slide17, 
        "There is no single 'best' framework. A PO should select the tool that best fits their squad's maturity and stakeholder needs."
    )

    # ==========================================
    # SLIDE 18: Socializing PV: 3-Tier Enterprise Strategy
    # ==========================================
    slide18 = prs.slides.add_slide(blank_layout)
    add_header(slide18, "Socializing Product Vision: The 3-Tier Enterprise Strategy")

    col_w = Inches(3.64); col_h = Inches(5.1); top_c = Inches(1.6)

    # Tier 1: Squad
    add_card(slide18, Inches(0.8), top_c, col_w, col_h)
    tb = slide18.shapes.add_textbox(Inches(1.0), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "1. Agile Squad (Delivery)"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    pts1 = [
        "Audience: Engineers, Data Scientists, MLOps, Testers.",
        "Focus: Purpose, technical quality, architecture elegance.",
        "Message: 'Your pipeline work directly protects families from credit default.'",
        "Cadence: Sprint Planning & Retrospectives."
    ]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Tier 2: Leadership
    add_card(slide18, Inches(4.84), top_c, col_w, col_h)
    tb = slide18.shapes.add_textbox(Inches(5.04), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "2. Executive Leadership"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = NAVY
    pts2 = [
        "Audience: Tribe Lead, CRO, Chief Data Officer.",
        "Focus: Enterprise ROI, financial risk reduction, market positioning.",
        "Message: 'This vision saves $12M annually while accelerating growth.'",
        "Cadence: Monthly SteerCo & Quarterly OKRs."
    ]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Tier 3: Partners
    add_card(slide18, Inches(8.88), top_c, col_w, col_h)
    tb = slide18.shapes.add_textbox(Inches(9.08), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "3. Cross-Functional Partners"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = EMERALD
    pts3 = [
        "Audience: Underwriters, Compliance, Legal, Ops.",
        "Focus: Usability, workflow speed, regulatory safety.",
        "Message: 'We are removing manual grunt work so you focus on high-value cases.'",
        "Cadence: Sprint Demos & User Feedback Sessions."
    ]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide18, 
        "One pitch deck does not fit all. Tailor your message depending on whether you are speaking to software developers, executive leaders, or business users."
    )

    # ==========================================
    # SLIDE 19: Taking PV to the Squad
    # ==========================================
    slide19 = prs.slides.add_slide(blank_layout)
    add_header(slide19, "Taking PV to the Agile Squad: Inspiring Engineers & Data Scientists")

    add_card(slide19, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide19.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Practical Techniques for POs to Embed Vision into Squad Culture"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL

    tactics = [
        ("The 'Why' in Every User Story", "Start every Jira epic and user story with a clear 'In order to [Achieve Vision Goal]...' business context line."),
        ("Sprint Goal Alignment", "Ensure every 2-week Sprint Goal maps directly to one of the 5 Strategic Vision Pillars."),
        ("Demystify Technical Debt", "Frame technical enabler stories (ETL refactoring, MLOps pipeline fixes) as enablers of vision scale and decision latency."),
        ("Celebrate Outcome Wins in Demos", "In sprint demos, don't just show passing tests—highlight real business metrics (e.g., 'This deployment cut decision latency by 40%!')."),
        ("Customer Empathy Sessions", "Bring squad engineers to shadow actual underwriters and risk managers to see pain points firsthand.")
    ]

    for title, desc in tactics:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = title + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = NAVY
        r2 = p.add_run(); r2.text = desc; r2.font.size = Pt(11.5); r2.font.color.rgb = TEXT_DARK

    set_notes(slide19, 
        "Engineers and data scientists care deeply about quality and purpose. When they understand the vision, they make better architectural decisions."
    )

    # ==========================================
    # SLIDE 20: Pitching PV to Executive Leadership
    # ==========================================
    slide20 = prs.slides.add_slide(blank_layout)
    add_header(slide20, "Pitching PV to Executive Leadership & C-Suite")

    add_card(slide20, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide20.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "How to Win Executive Buy-In & Budget Approval"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = NAVY

    exec_tips = [
        ("Lead with Enterprise ROI & Risk Savings", "C-suite executives care about growth, profit margins, capital provisions, and risk mitigation. Start with financial impact."),
        ("Align with Corporate OKRs", "Demonstrate exactly how your product vision supports top-level company objectives (e.g., digital transformation, ROE targets)."),
        ("Acknowledge Risk & Regulatory Guardrails", "Proactively address regulatory risks (compliance, FCRA, Basel III/IV) before executives ask."),
        ("Keep it High-Level (No Tech Jargon)", "Avoid deep technical jargon (e.g., Spark clusters, hyperparameter tuning). Focus on capabilities and outcomes."),
        ("Present a Phased Investment Horizon", "Show a clear 3-year phased roadmap with clear milestone gates and value capture points.")
    ]

    for title, desc in exec_tips:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = title + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = TEAL
        r2 = p.add_run(); r2.text = desc; r2.font.size = Pt(11.5); r2.font.color.rgb = TEXT_DARK

    set_notes(slide20, 
        "Executives don't have time for long technical presentations. Frame your vision pitch around financial ROI, strategic alignment, and risk safety."
    )

    # ==========================================
    # SLIDE 21: Aligning Cross-Functional Partners
    # ==========================================
    slide21 = prs.slides.add_slide(blank_layout)
    add_header(slide21, "Aligning Cross-Functional Partners (Ops, Compliance, Risk)")

    rows = 5; cols = 3
    table_shape = slide21.shapes.add_table(rows, cols, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    table = table_shape.table
    table.columns[0].width = Inches(3.0); table.columns[1].width = Inches(4.3); table.columns[2].width = Inches(4.433)

    headers = ["Partner Group", "Primary Concern", "PO Vision Alignment Strategy"]
    data = [
        ["Credit Operations & Underwriters", "Workflow efficiency, system reliability, manual effort", "Highlight automated assistance, faster turnaround, and clear decision codes."],
        ["Regulatory Compliance & Audit", "Legal liability, fair lending, model explainability", "Embed SHAP explainability, demographic parity checks, and 7-year audit logging into vision."],
        ["Enterprise Risk Management (CRO)", "Portfolio loss rates, provision volatility, capital adequacy", "Align vision metrics with default reduction, Gini accuracy, and risk-adjusted return."],
        ["IT Infrastructure & Security", "Data security, API scalability, infrastructure cost", "Incorporate standardized feature store APIs, cloud security, and automated SLA monitoring."]
    ]

    for c, h in enumerate(headers):
        cell = table.cell(0, c); cell.fill.solid(); cell.fill.fore_color.rgb = NAVY
        p = cell.text_frame.paragraphs[0]; p.text = h; p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = WHITE

    for r, row_data in enumerate(data):
        for c, val in enumerate(row_data):
            cell = table.cell(r + 1, c)
            cell.fill.solid(); cell.fill.fore_color.rgb = BG_LIGHT if r % 2 == 0 else WHITE
            p = cell.text_frame.paragraphs[0]; p.text = val; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK
            if c == 0: p.font.bold = True

    set_notes(slide21, 
        "Cross-functional alignment prevents friction downstream when your product goes to production."
    )

    # ==========================================
    # SLIDE 22: Storytelling Techniques for POs
    # ==========================================
    slide22 = prs.slides.add_slide(blank_layout)
    add_header(slide22, "Storytelling & Narrative Techniques for Product Owners")

    add_card(slide22, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide22.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "The 'Hero's Journey' Storytelling Model for Product Vision"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = PURPLE

    story_steps = [
        ("1. The Hero (Customer / User)", "Introduce your target user (e.g., Sarah, a Credit Risk Analyst trying to process 500 loan reviews daily)."),
        ("2. The Monster (Current Friction)", "Describe the current painful state (e.g., slow manual credit checks, legacy bureau lag, high default risk)."),
        ("3. The Mentor / Weapon (Our Product Vision)", "Introduce your product as the powerful tool that empowers the hero to overcome the challenge."),
        ("4. The Transformation (Future State)", "Paint a vivid picture of the transformed future (e.g., instant sub-second AI decisions with 100% SHAP explainability)."),
        ("5. The Call to Action (Squad Alignment)", "Rally the team around building the first milestone on the roadmap to achieve this future.")
    ]

    for title, desc in story_steps:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = title + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = NAVY
        r2 = p.add_run(); r2.text = desc; r2.font.size = Pt(11.5); r2.font.color.rgb = TEXT_DARK

    set_notes(slide22, 
        "Humans remember stories 22 times more than raw facts and bullet points. Use storytelling to make your product vision unforgettable."
    )

    # ==========================================
    # SLIDE 23: Applying PV to Credit Domain
    # ==========================================
    slide23 = prs.slides.add_slide(blank_layout)
    add_header(slide23, "Domain Application: Data & Analytics Tribe & Credit Management")

    col_w = Inches(3.64); col_h = Inches(5.1); top_c = Inches(1.6)

    # Box 1
    add_card(slide23, Inches(0.8), top_c, col_w, col_h)
    tb = slide23.shapes.add_textbox(Inches(1.0), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🏛️ D&A Tribe Mission"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = NAVY
    pts1 = ["Turn enterprise risk data into real-time decision intelligence.", "Provide scalable data products, MLOps, and Feature Stores.", "Enable self-service risk analytics across business units."]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Box 2
    add_card(slide23, Inches(4.84), top_c, col_w, col_h, bg_color=RGBColor(240, 253, 250), border_color=TEAL)
    tb = slide23.shapes.add_textbox(Inches(5.04), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "💳 Credit Domain Scope"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    pts2 = ["Underwriting Risk ML Engine", "Early Warning & Delinquency Predictors (EWS)", "Collections & Recovery Optimization", "Explainable AI (SHAP) & Basel Governance"]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Box 3
    add_card(slide23, Inches(8.88), top_c, col_w, col_h)
    tb = slide23.shapes.add_textbox(Inches(9.08), top_c + Inches(0.2), col_w - Inches(0.4), col_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🎯 PO Responsibility"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = EMERALD
    pts3 = ["Translate generic PV frameworks into credit risk capabilities.", "Balance financial default reduction with approval throughput.", "Ensure 100% fair lending compliance."]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide23, 
        "Now we shift from generic PV theory to practical application in Credit Management."
    )

    # ==========================================
    # SLIDE 24: End-to-End Credit Lifecycle Scope
    # ==========================================
    slide24 = prs.slides.add_slide(blank_layout)
    add_header(slide24, "The End-to-End Credit Management Lifecycle Scope")

    step_w = Inches(2.2); step_h = Inches(5.1); spacing = Inches(0.18)
    steps_data = [
        ("1. Origination & Pre-Screening", TEAL, ["Pre-qualification models", "Alternative data ingestion", "Instant pre-approval scoring"]),
        ("2. Underwriting & Decisioning", NAVY, ["Automated Risk Rating", "Policy & Limit Engine", "Real-time ML Risk Scoring"]),
        ("3. Portfolio Management", TEAL, ["Limit adjustment models", "Behavioral risk monitoring", "Cross-sell risk gating"]),
        ("4. Early Warning System (EWS)", AMBER, ["Delinquency predictors", "Cash-flow distress signals", "Proactive intervention alerts"]),
        ("5. Collections & Recovery", EMERALD, ["Segmentation & Channel optimization", "Loss-Given-Default (LGD) models", "Automated workout plans"])
    ]

    for i, (title, col, bullets) in enumerate(steps_data):
        left_p = Inches(0.8) + i * (step_w + spacing)
        add_card(slide24, left_p, Inches(1.6), step_w, step_h)
        header_strip = slide24.shapes.add_shape(MSO_SHAPE.RECTANGLE, left_p, Inches(1.6), step_w, Inches(0.9))
        header_strip.fill.solid(); header_strip.fill.fore_color.rgb = col; header_strip.line.fill.background()
        tf = header_strip.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(12); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER

        tb = slide24.shapes.add_textbox(left_p + Inches(0.1), Inches(2.6), step_w - Inches(0.2), step_h - Inches(1.1))
        tf = tb.text_frame; tf.word_wrap = True
        for b in bullets:
            p = tf.add_paragraph(); p.text = "• " + b; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide24, 
        "Position your data product scope across these 5 stages of the credit lifecycle."
    )

    # ==========================================
    # SLIDE 25: 5 Strategic Pillars of Credit Analytics PV
    # ==========================================
    slide25 = prs.slides.add_slide(blank_layout)
    add_header(slide25, "The 5 Strategic Pillars of Credit Product Vision")

    col_w = Inches(2.18); spacing = Inches(0.2); top_pos = Inches(1.6); card_h = Inches(5.1)
    pillars = [
        ("Pillar 1: Real-Time Risk Decisioning", TEAL, "Instant, ML-driven credit scoring under 500ms latency."),
        ("Pillar 2: Predictive Early Warning (EWS)", AMBER, "Behavioral distress signals caught 60-90 days early."),
        ("Pillar 3: Collections & Recovery AI", EMERALD, "Propensity segmentation & optimal channel orchestration."),
        ("Pillar 4: Explainable AI Governance", NAVY, "100% SHAP explainability & zero demographic bias."),
        ("Pillar 5: Self-Service Risk Data Mesh", TEAL, "Democratized feature store for ad-hoc risk views.")
    ]

    for i, (title, col, desc) in enumerate(pillars):
        left_p = Inches(0.8) + i * (col_w + spacing)
        add_card(slide25, left_p, top_pos, col_w, card_h)

        badge = slide25.shapes.add_shape(MSO_SHAPE.OVAL, left_p + Inches(0.69), top_pos + Inches(0.3), Inches(0.8), Inches(0.8))
        badge.fill.solid(); badge.fill.fore_color.rgb = col; badge.line.fill.background()
        tf = badge.text_frame; p = tf.paragraphs[0]; p.text = str(i+1); p.font.size = Pt(18); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER

        tb = slide25.shapes.add_textbox(left_p + Inches(0.1), top_pos + Inches(1.3), col_w - Inches(0.2), card_h - Inches(1.4))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = NAVY; p.alignment = PP_ALIGN.CENTER
        p2 = tf.add_paragraph(); p2.text = desc; p2.font.size = Pt(11); p2.font.color.rgb = TEXT_DARK; p2.space_before = Pt(12)

    set_notes(slide25, 
        "Every sprint task in your Credit Management backlog should map to at least one of these 5 pillars."
    )

    # ==========================================
    # SLIDE 26: Credit Worked Example - Geoffrey Moore
    # ==========================================
    slide26 = prs.slides.add_slide(blank_layout)
    add_header(slide26, "Credit Management Worked Example: Geoffrey Moore Formula")

    add_card(slide26, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.1))
    tb = slide26.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11.133), Inches(4.7))
    tf = tb.text_frame; tf.word_wrap = True

    p = tf.paragraphs[0]; p.text = "Credit Management Product Vision (Geoffrey Moore Formula)"; p.font.size = Pt(16); p.font.bold = True; p.font.color.rgb = TEAL

    template_parts = [
        ("FOR", "Credit Underwriters, Risk Managers, and Origination Teams"),
        ("WHO NEED", "Instant, accurate, and fair credit risk assessments for loan applicants"),
        ("THE (Product Name)", "The Next-Gen Credit Decision Engine"),
        ("THAT IS A", "Real-time Machine Learning and Risk Scoring Data Product"),
        ("THAT DELIVERS", "Automated risk ratings, 60-day early warning alerts, and 100% explainable decisioning"),
        ("UNLIKE", "Legacy static credit bureau scorecards and manual underwriting workflows"),
        ("OUR PRODUCT", "Unifies alternative data, real-time ML inference, and transparent SHAP governance to cut loss rates while accelerating approval times.")
    ]

    for label, text in template_parts:
        p = tf.add_paragraph(); p.space_before = Pt(8)
        r1 = p.add_run(); r1.text = label + ": "; r1.font.bold = True; r1.font.size = Pt(12); r1.font.color.rgb = NAVY
        r2 = p.add_run(); r2.text = text; r2.font.size = Pt(12); r2.font.color.rgb = TEXT_DARK

    set_notes(slide26, 
        "Use this worked example as a template when writing your own squad's vision statement."
    )

    # ==========================================
    # SLIDE 27: Credit Worked Example - Pichler Board
    # ==========================================
    slide27 = prs.slides.add_slide(blank_layout)
    add_header(slide27, "Credit Management Worked Example: Roman Pichler Board")

    add_card(slide27, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.1), bg_color=NAVY, border_color=None)
    tb = slide27.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(11.333), Inches(0.9))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "VISION: To empower automated, zero-bias credit decisions and proactive delinquency mitigation, driving profitable credit growth while safeguarding portfolio health."
    p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = WHITE; p.alignment = PP_ALIGN.CENTER

    q_w = Inches(2.78); q_h = Inches(3.8); spacing = Inches(0.2)
    quads = [
        ("TARGET GROUP", TEAL, ["Retail & SME Risk Ops", "Credit Approval Committee", "Compliance Officers", "Collections Squads"]),
        ("NEEDS", NAVY, ["Sub-second risk scoring", "Explainable decisions (SHAP)", "Proactive distress alerts", "Loss provision savings"]),
        ("PRODUCT FEATURES", TEAL, ["ML Scorecard engine", "Real-time bureau API fetcher", "EWS distress dashboard", "Automated workout engine"]),
        ("BUSINESS GOALS", EMERALD, ["15% reduction in NPLs", "40% faster turnaround", "100% fair lending compliance", "$12M loss savings"])
    ]

    for i, (title, col, items) in enumerate(quads):
        left_p = Inches(0.8) + i * (q_w + spacing)
        add_card(slide27, left_p, Inches(2.9), q_w, q_h)
        tb = slide27.shapes.add_textbox(left_p + Inches(0.1), Inches(3.0), q_w - Inches(0.2), q_h - Inches(0.2))
        tf = tb.text_frame; tf.word_wrap = True
        p = tf.paragraphs[0]; p.text = title; p.font.size = Pt(13); p.font.bold = True; p.font.color.rgb = col
        for it in items:
            p = tf.add_paragraph(); p.text = "• " + it; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide27, 
        "This slide presents a complete Vision Board for Credit Analytics."
    )

    # ==========================================
    # SLIDE 28: Metric Architecture & North Star
    # ==========================================
    slide28 = prs.slides.add_slide(blank_layout)
    add_header(slide28, "Metric Architecture: Connecting Vision to Measurable Impact")

    add_card(slide28, Inches(0.8), Inches(1.6), Inches(11.733), Inches(1.3), bg_color=RGBColor(236, 254, 255), border_color=CYAN)
    tb = slide28.shapes.add_textbox(Inches(1.0), Inches(1.7), Inches(11.333), Inches(1.1))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🌟 NORTH STAR METRIC: Risk-Adjusted Decision Efficiency Index (RADEI)"
    p.font.size = Pt(14); p.font.bold = True; p.font.color.rgb = NAVY
    p2 = tf.add_paragraph(); p2.text = "Formula: (Automated Approval Rate % × Model Gini Score) ÷ (Default Rate % + API Latency Sec)"
    p2.font.size = Pt(12); p2.font.color.rgb = TEAL; p2.font.bold = True; p2.space_before = Pt(4)
    p3 = tf.add_paragraph(); p3.text = "Balances growth (approval throughput) with risk control (model predictive power & low delinquency)."
    p3.font.size = Pt(11); p3.font.color.rgb = TEXT_DARK; p3.space_before = Pt(4)

    m_w = Inches(3.64); m_h = Inches(3.6); top_m = Inches(3.1)

    # Col 1
    add_card(slide28, Inches(0.8), top_m, m_w, m_h)
    tb = slide28.shapes.add_textbox(Inches(1.0), top_m + Inches(0.15), m_w - Inches(0.4), m_h - Inches(0.3))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "📊 Model Quality Metrics"; p.font.size = Pt(14); p.font.bold = True; p.font.color.rgb = TEAL
    pts1 = ["AUC-ROC > 0.85 & Gini > 0.70", "KS Statistic > 45", "PSI (Stability Index) < 0.10", "Feature Importance SHAP stability"]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(6)

    # Col 2
    add_card(slide28, Inches(4.84), top_m, m_w, m_h)
    tb = slide28.shapes.add_textbox(Inches(5.04), top_m + Inches(0.15), m_w - Inches(0.4), m_h - Inches(0.3))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "💰 Financial Risk Metrics"; p.font.size = Pt(14); p.font.bold = True; p.font.color.rgb = EMERALD
    pts2 = ["NPL (Non-Performing Loan) Ratio %", "Cost of Risk (Provision Savings)", "30/60/90 Day Delinquency Rates", "Collections Cure Rate & Recovery ROI"]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(6)

    # Col 3
    add_card(slide28, Inches(8.88), top_m, m_w, m_h)
    tb = slide28.shapes.add_textbox(Inches(9.08), top_m + Inches(0.15), m_w - Inches(0.4), m_h - Inches(0.3))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "⚡ Operational SLA Metrics"; p.font.size = Pt(14); p.font.bold = True; p.font.color.rgb = NAVY
    pts3 = ["API Decision Latency < 300ms", "STP (Straight-Through Processing) %", "Manual Overrides < 5%", "Model Retraining Cycle Time"]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(6)

    set_notes(slide28, 
        "Connect your vision to a North Star metric (RADEI) and 3 operational metric pillars."
    )

    # ==========================================
    # SLIDE 29: 30-60-90 Day PO Execution Plan
    # ==========================================
    slide29 = prs.slides.add_slide(blank_layout)
    add_header(slide29, "The 30-60-90 Day PO Roadmap to Vision Ownership")

    plan_w = Inches(3.64); plan_h = Inches(5.1); top_p = Inches(1.6)

    # Month 1
    add_card(slide29, Inches(0.8), top_p, plan_w, plan_h)
    tb = slide29.shapes.add_textbox(Inches(1.0), top_p + Inches(0.2), plan_w - Inches(0.4), plan_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🔍 Days 1-30: Discover & Audit"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = TEAL
    pts1 = [
        "Conduct 1:1 stakeholder interviews (CRO, Underwriting Leads, Compliance).",
        "Audit existing credit models, Gini scores, data pipelines, and tech debt.",
        "Shadow underwriters to observe pain points firsthand.",
        "Map current backlog epics to business outcomes."
    ]
    for pt in pts1: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Month 2
    add_card(slide29, Inches(4.84), top_p, plan_w, plan_h)
    tb = slide29.shapes.add_textbox(Inches(5.04), top_p + Inches(0.2), plan_w - Inches(0.4), plan_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🎯 Days 31-60: Formulate & Align"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = NAVY
    pts2 = [
        "Draft the Product Vision Board and 5 Strategic Pillars for Credit Management.",
        "Define squad North Star Metric and supporting OKRs for upcoming quarters.",
        "Host Vision Alignment Workshop with Data Science, Engineering, and CRO teams.",
        "Refine backlog: sunset low-value tickets and align epics with vision pillars."
    ]
    for pt in pts2: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    # Month 3
    add_card(slide29, Inches(8.88), top_p, plan_w, plan_h)
    tb = slide29.shapes.add_textbox(Inches(9.08), top_p + Inches(0.2), plan_w - Inches(0.4), plan_h - Inches(0.4))
    tf = tb.text_frame; tf.word_wrap = True
    p = tf.paragraphs[0]; p.text = "🚀 Days 61-90: Execute & Scale"; p.font.size = Pt(15); p.font.bold = True; p.font.color.rgb = EMERALD
    pts3 = [
        "Publish finalized 12-month strategic roadmap to the enterprise.",
        "Establish bi-weekly model performance reviews with Risk & Compliance.",
        "Drive sprint execution against vision-aligned epics with high squad velocity.",
        "Present vision impact summary to Data & Analytics Tribe leadership."
    ]
    for pt in pts3: p = tf.add_paragraph(); p.text = "• " + pt; p.font.size = Pt(11); p.font.color.rgb = TEXT_DARK; p.space_before = Pt(8)

    set_notes(slide29, 
        "Use this 90-day plan as your personal onboarding roadmap to establish credibility and leadership quickly."
    )

    # ==========================================
    # SLIDE 30: Summary & Vision Checklist (Dark Theme)
    # ==========================================
    slide30 = prs.slides.add_slide(blank_layout)
    bg30 = slide30.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg30.fill.solid(); bg30.fill.fore_color.rgb = NAVY; bg30.line.fill.background()

    tb30 = slide30.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.733), Inches(6.5))
    tf30 = tb30.text_frame; tf30.word_wrap = True

    p = tf30.paragraphs[0]
    p.text = "PRODUCT VISION READINESS CHECKLIST & NEXT STEPS"
    p.font.size = Pt(22); p.font.bold = True; p.font.color.rgb = WHITE

    p_sub = tf30.add_paragraph()
    p_sub.text = "Your Quick Refresher for Vision Leadership in Credit Management"
    p_sub.font.size = Pt(14); p_sub.font.color.rgb = CYAN; p_sub.space_before = Pt(4)

    checklist = [
        "✅ Have you defined WHY the product exists beyond feature delivery and technical specs?",
        "✅ Is your vision focused on long-term outcome (default reduction & approval speed) rather than output?",
        "✅ Have you selected and applied a framework (Moore, Pichler, Sinek, Cagan, or RPT)?",
        "✅ Is there a clear North Star Metric (RADEI) connecting daily backlog items to high-level strategy?",
        "✅ Have you tailored your vision socialization script for Squads, Leadership, and Partners?",
        "✅ Does your vision cover all 5 Credit Management Pillars (Underwriting, EWS, Collections, SHAP, Data Mesh)?"
    ]

    for item in checklist:
        p = tf30.add_paragraph()
        p.text = item
        p.font.size = Pt(12.5)
        p.font.color.rgb = RGBColor(241, 245, 249)
        p.space_before = Pt(12)

    p_end = tf30.add_paragraph()
    p_end.text = "🚀 Congratulations! You are now fully equipped to lead Product Vision with mastery!"
    p_end.font.size = Pt(15); p_end.font.bold = True; p_end.font.color.rgb = EMERALD; p_end.space_before = Pt(20)

    set_notes(slide30, 
        "Congratulations! You have completed the comprehensive Product Vision Masterclass."
    )

    prs.save(file_path)
    print(f"SUCCESS: 30-Slide PowerPoint Presentation saved to: {file_path}")
    try:
        prs.save(file_path_alt)
        print(f"SUCCESS: Alt Presentation saved to: {file_path_alt}")
    except Exception as e:
        print("Note: Could not overwrite alt file due to open lock, saved masterclass file successfully.")

if __name__ == "__main__":
    create_presentation()
