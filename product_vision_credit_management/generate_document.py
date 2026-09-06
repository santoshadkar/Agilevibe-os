import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def add_callout_box(doc, title, text_paragraphs, border_color_hex="0E7490", bg_color_hex="F8FAFC"):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    set_cell_background(cell, bg_color_hex)
    set_cell_margins(cell, top=140, bottom=140, left=200, right=200)

    tcPr = cell._element.get_or_add_tcPr()
    borders = parse_xml(f'''
        <w:tcBorders {nsdecls("w")}>
            <w:top w:val="none"/>
            <w:left w:val="single" w:sz="24" w:space="0" w:color="{border_color_hex}"/>
            <w:bottom w:val="none"/>
            <w:right w:val="none"/>
        </w:tcBorders>
    ''')
    tcPr.append(borders)

    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    run_t = p.add_run(f"📌 {title}")
    run_t.font.name = 'Arial'
    run_t.font.size = Pt(11)
    run_t.font.bold = True
    run_t.font.color.rgb = RGBColor(15, 23, 42)

    for tp in text_paragraphs:
        p_body = cell.add_paragraph()
        p_body.paragraph_format.space_before = Pt(2)
        p_body.paragraph_format.space_after = Pt(4)
        run_b = p_body.add_run(tp)
        run_b.font.name = 'Arial'
        run_b.font.size = Pt(10)
        run_b.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(6)

def create_document():
    output_dir = r"C:\Users\anany\.gemini\antigravity\scratch\product_vision_credit_management"
    os.makedirs(output_dir, exist_ok=True)
    file_path = os.path.join(output_dir, "Product_Vision_Credit_Management_Guide.docx")

    doc = Document()

    # Page Margins
    for section in doc.sections:
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)

    # Styles Setup
    styles = doc.styles
    style_normal = styles['Normal']
    style_normal.font.name = 'Calibri'
    style_normal.font.size = Pt(11)
    style_normal.font.color.rgb = RGBColor(51, 65, 85)

    # Header / Title Block
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(2)

    run_tag = p_title.add_run("PRODUCT MANAGEMENT MASTERCLASS & OPERATIONAL MANUAL\n")
    run_tag.font.name = 'Arial'; run_tag.font.size = Pt(10); run_tag.font.bold = True; run_tag.font.color.rgb = RGBColor(14, 116, 144)

    run_main = p_title.add_run("Deconstructing & Mastering Product Vision\n")
    run_main.font.name = 'Arial'; run_main.font.size = Pt(26); run_main.font.bold = True; run_main.font.color.rgb = RGBColor(15, 23, 42)

    run_sub = p_title.add_run("An Exhaustive Strategic Manual on Generic Product Vision Foundations, Frameworks, Socialization & Credit Management Domain Application")
    run_sub.font.name = 'Arial'; run_sub.font.size = Pt(13); run_sub.font.italic = True; run_sub.font.color.rgb = RGBColor(100, 116, 139)

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

    # Context Table
    meta_table = doc.add_table(rows=2, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_data = [
        [("Target Audience:", " Product Owners, PMs & Tribe Leads"), ("Domain Focus:", " Universal PV Theory & Credit Management Domain")],
        [("Organization:", " Data & Analytics Tribe"), ("Document Scope:", " 12 Exhaustive Chapters + Framework Kit & Checklist")]
    ]
    for r_idx, row in enumerate(meta_data):
        for c_idx, (lbl, val) in enumerate(row):
            cell = meta_table.cell(r_idx, c_idx)
            set_cell_background(cell, "F1F5F9")
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
            p = cell.paragraphs[0]
            p.paragraph_format.space_after = Pt(0)
            r1 = p.add_run(lbl); r1.font.bold = True; r1.font.size = Pt(10); r1.font.color.rgb = RGBColor(15, 23, 42)
            r2 = p.add_run(val); r2.font.size = Pt(10); r2.font.color.rgb = RGBColor(51, 65, 85)

    doc.add_paragraph().paragraph_format.space_after = Pt(18)

    def add_h1(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(18); p.paragraph_format.space_after = Pt(6); p.paragraph_format.keep_with_next = True
        run = p.add_run(text)
        run.font.name = 'Arial'; run.font.size = Pt(18); run.font.bold = True; run.font.color.rgb = RGBColor(15, 23, 42)

    def add_h2(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(14); p.paragraph_format.space_after = Pt(4); p.paragraph_format.keep_with_next = True
        run = p.add_run(text)
        run.font.name = 'Arial'; run.font.size = Pt(14); run.font.bold = True; run.font.color.rgb = RGBColor(14, 116, 144)

    def add_body(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(0); p.paragraph_format.space_after = Pt(6); p.paragraph_format.line_spacing = 1.15
        run = p.add_run(text)
        run.font.name = 'Calibri'; run.font.size = Pt(11); run.font.color.rgb = RGBColor(51, 65, 85)

    def add_bullet(text, bold_prefix=""):
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_before = Pt(0); p.paragraph_format.space_after = Pt(3); p.paragraph_format.line_spacing = 1.15
        if bold_prefix:
            r_pre = p.add_run(bold_prefix)
            r_pre.font.name = 'Calibri'; r_pre.font.size = Pt(11); r_pre.font.bold = True; r_pre.font.color.rgb = RGBColor(15, 23, 42)
        r_txt = p.add_run(text)
        r_txt.font.name = 'Calibri'; r_txt.font.size = Pt(11); r_txt.font.color.rgb = RGBColor(51, 65, 85)

    # ==========================================
    # CHAPTER 1: What is Product Vision?
    # ==========================================
    add_h1("1. Deconstructing Product Vision: Core Definitions & Philosophy")
    add_body(
        "A Product Vision (PV) is the ultimate North Star of product leadership. It articulates the overarching, inspiring, "
        "and long-term aspirational future state your product seeks to achieve over a 3- to 5-year horizon. It defines WHY the product exists, "
        "WHO it serves, and WHAT transformative value it delivers to users and the broader enterprise."
    )
    add_callout_box(doc, "Core Definition: Product Vision", [
        "\"A Product Vision is an inspiring, clear, and enduring statement of the future state your product creates. "
        "It acts as a decision-making filter, alignment engine, and motivational driver across multi-disciplinary squads.\""
    ], border_color_hex="0E7490")

    add_h2("1.1 Clarifying Terminology: Vision vs Mission vs Strategy vs Roadmap vs Backlog")
    add_body("To prevent strategic ambiguity, Product Owners must clearly distinguish between these related terms:")

    t_table = doc.add_table(rows=6, cols=4)
    t_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["Term", "Primary Focus & Horizon", "Core Question Answered", "Generic Example"]
    for c_idx, h_text in enumerate(headers):
        cell = t_table.cell(0, c_idx); set_cell_background(cell, "0F172A")
        p = cell.paragraphs[0]; r = p.add_run(h_text); r.font.bold = True; r.font.color.rgb = RGBColor(255, 255, 255)

    data = [
        ["Product Vision", "3-5 Years | Future State", "WHY does the product exist?", "To make global credit decisioning instantaneous, transparent, and fair."],
        ["Product Mission", "Ongoing | Purpose", "WHAT do we do daily to achieve vision?", "We build AI-driven risk scoring & real-time underwriting data products."],
        ["Product Strategy", "1-2 Years | Strategic Pillars", "HOW will we achieve the vision?", "By integrating open-banking data & automated early warning distress models."],
        ["Product Roadmap", "3-12 Months | Milestones", "WHEN will key outcomes be delivered?", "Q1: EWS Model v1; Q2: Bureau API fetcher; Q3: SHAP portal."],
        ["Product Backlog", "1-4 Weeks | Epics & Stories", "WHAT specific items are being built?", "User Story: Expose SHAP feature importance REST API endpoint."]
    ]
    for r_idx, row_vals in enumerate(data):
        for c_idx, val in enumerate(row_vals):
            cell = t_table.cell(r_idx + 1, c_idx)
            set_cell_background(cell, "F8FAFC" if r_idx % 2 == 0 else "FFFFFF")
            set_cell_margins(cell, top=80, bottom=80, left=100, right=100)
            p = cell.paragraphs[0]; r = p.add_run(val)
            if c_idx == 0: r.font.bold = True

    doc.add_paragraph().paragraph_format.space_after = Pt(12)

    add_h2("1.2 The 5 Strategic Value Drivers of Product Vision")
    add_bullet(" Acts as a strict evaluation filter for ad-hoc requests, giving POs the power to say 'No' to scope creep.", "1. Strategic Decision Filter: ")
    add_bullet(" Aligns Product, Engineering, Risk, and Executive Leadership, empowering squads to make autonomous decisions.", "2. Cross-Functional Autonomy: ")
    add_bullet(" Transforms ticket processors into empowered problem solvers by connecting code to real human impact.", "3. Team Purpose & Motivation: ")
    add_bullet(" Shifts squad focus away from pure feature delivery (output) toward high-leverage business value (outcomes).", "4. Outcome Centricity over Output: ")
    add_bullet(" Anticipates market shifts, regulatory evolution, and tech disruption to maintain long-term market defensibility.", "5. Future-Proofing & Competitive Advantage: ")

    # ==========================================
    # CHAPTER 2: Core Components & Qualities
    # ==========================================
    add_h1("2. Core Components & Qualities of a World-Class Vision")
    add_h2("2.1 The 6 Core Building Blocks (Anatomy) of a Vision")
    add_bullet(" Who specifically is this product built for? (e.g., Credit Underwriters, Risk Managers).", "1. Target User / Customer: ")
    add_bullet(" What fundamental friction or pain point are we removing?", "2. Core Problem / Pain Point: ")
    add_bullet(" What primary capability or innovation does the product provide?", "3. Solution Capability: ")
    add_bullet(" Why is our approach superior to existing alternatives?", "4. Key Differentiator: ")
    add_bullet(" What measurable enterprise ROI does this product deliver?", "5. Strategic Business Outcome: ")
    add_bullet(" What emotional and noble cause rallies the squad daily?", "6. The Inspiring Hook: ")

    add_h2("2.2 The 7 Qualities of a World-Class Product Vision")
    add_body("A great product vision statement must exhibit all seven of the following attributes:")
    add_bullet(" Stretches imagination and motivates teams to solve hard, meaningful problems.", "1. Inspiring & Aspirational: ")
    add_bullet(" Easy to understand, remember, and repeat without buzzwords or corporate jargon.", "2. Clear & Concise: ")
    add_bullet(" Grounded in real user pain points and customer needs rather than internal technical goals.", "3. Customer-Centric: ")
    add_bullet(" Endures across a 3 to 5-year horizon while allowing tactical strategy and roadmap to pivot.", "4. Stable Yet Flexible: ")
    add_bullet(" Articulates why this product is uniquely positioned compared to existing legacy alternatives.", "5. Differentiating: ")
    add_bullet(" Directly connects user value creation to long-term enterprise financial ROI and risk reduction.", "6. Value-Linked: ")
    add_bullet(" Grounded in technical possibility and strategic enterprise realism without being unrealistic.", "7. Feasible & Realizable: ")

    # ==========================================
    # CHAPTER 3: When & How Often to Create, Review, and Pivot
    # ==========================================
    add_h1("3. Timing & Frequency: Creation, Review, and Pivot Lifecycles")
    add_h2("3.1 When to Create a New Product Vision")
    add_bullet("When establishing a new squad, domain, or data product initiative.", "1. New Squad / Product Launch: ")
    add_bullet("When market dynamics or business models undergo fundamental shifts.", "2. Major Strategic Pivot: ")
    add_bullet("When a new Product Owner assumes leadership over an existing domain needing realignment.", "3. PO Onboarding: ")

    add_h2("3.2 Frequency Guide for Reviewing and Updating Vision")
    add_bullet("Reference vision during sprint planning to validate user story alignment.", "Bi-Weekly (Continuous): ")
    add_bullet("Assess quarterly OKR progress and evaluate market shifts.", "Quarterly Pulse Check: ")
    add_bullet("Formal alignment review with Executive Sponsors (CRO, Tribe Lead).", "Annual Strategic Review: ")
    add_bullet("Full vision overhaul upon achieving original 3-5 year aspirational state.", "3-5 Year Paradigm Shift: ")

    # ==========================================
    # CHAPTER 4: Step-by-Step Creation Guide
    # ==========================================
    add_h1("4. Step-by-Step Guide to Crafting a Product Vision")
    add_body("Follow this 5-phase collaborative framework to craft a vision from scratch:")
    add_bullet("Conduct user interviews, audit current data assets, and benchmark industry standards.", "Phase 1: Discovery (1-2 Weeks) — ")
    add_bullet("Host a half-day alignment workshop with Squad, Risk Leads, and Design.", "Phase 2: Co-Creation (1 Day Workshop) — ")
    add_bullet("Synthesize workshop inputs into 2-3 structured vision options using frameworks.", "Phase 3: Drafting (3-5 Days) — ")
    add_bullet("Test draft vision options with front-line users and executive sponsors.", "Phase 4: Validation (1 Week) — ")
    add_bullet("Publish vision board, embed in backlog, and present in Tribe Town Hall.", "Phase 5: Socialization (Ongoing) — ")

    # ==========================================
    # CHAPTER 5: Frameworks & Templates Kit
    # ==========================================
    add_h1("5. Master Frameworks & Templates Kit")
    add_body("Explore the 5 battle-tested product vision frameworks:")

    add_h2("5.1 Framework 1: Geoffrey Moore's Positioning Formula")
    add_callout_box(doc, "Geoffrey Moore Formula", [
        "FOR [Target Customer] WHO NEED [Core Pain Point], THE [Product Name] IS A [Product Category] THAT DELIVERS [Core Benefit]. UNLIKE [Alternative Workaround], OUR PRODUCT [Key Differentiator & Business Outcome]."
    ], border_color_hex="0F172A")

    add_h2("5.2 Framework 2: Roman Pichler's Product Vision Board")
    add_body("Divides vision into Overarching Vision Statement, Target Group, Needs, Product Features, and Business Goals.")

    add_h2("5.3 Framework 3: Simon Sinek's Golden Circle (Why, How, What)")
    add_body("Starts with WHY (Purpose), moves to HOW (Differentiating Strategy), and ends with WHAT (Tangible Product).")

    add_h2("5.4 Framework 4: Marty Cagan's Product Vision Tenets (INSPIRED)")
    add_body("Emphasizes outcome over features, empowered teams, falling in love with the problem, and inspiring squads daily.")

    add_h2("5.5 Framework 5: Radhika Dutt's Radical Product Thinking (RPT)")
    add_body("Structures vision around: Whose problem, What friction, What desired world, How we change it, and Why it matters.")

    # ==========================================
    # CHAPTER 6: Socializing & Pitching PV
    # ==========================================
    add_h1("6. Socializing & Pitching Product Vision Across the Enterprise")
    add_h2("6.1 Taking PV to the Agile Squad (Engineers & Data Scientists)")
    add_bullet("Include 'In order to [Vision Goal]' context in every Jira user story.", "User Story Context: ")
    add_bullet("Map every 2-week Sprint Goal to a strategic vision pillar.", "Sprint Goal Mapping: ")
    add_bullet("Celebrate real business metric impact (e.g., latency cuts, default drops) during demos.", "Outcome Demos: ")

    add_h2("6.2 Pitching PV to Executive Leadership & C-Suite")
    add_bullet("Start with financial loss savings, revenue growth, and capital provisions.", "Lead with Enterprise ROI: ")
    add_bullet("Proactively demonstrate FCRA, GDPR, and Basel III/IV compliance guardrails.", "Address Regulatory Safety: ")

    add_h2("6.3 Narrative Techniques: The Hero's Journey Storytelling Model")
    add_body("Frame your product pitch around: 1. Hero (User), 2. Monster (Current Friction), 3. Weapon (Product Vision), 4. Transformation (Future State).")

    # ==========================================
    # CHAPTERS 7-12: Credit Management Domain Application
    # ==========================================
    add_h1("7. Applying Product Vision to Data & Analytics Tribe")
    add_body("Data products require special vision framing because they lack traditional UIs and must manage model drift and pipeline SLAs.")

    add_h1("8. Credit Management Domain Landscape & Lifecycle")
    add_body("Detailing the 5 Credit Lifecycle stages: Origination, Underwriting, Account Management, Early Warning Systems (EWS), and Collections.")

    add_h1("9. The 5 Strategic Pillars of Credit Analytics Vision")
    add_bullet("Sub-second automated underwriting decisions.", "Pillar 1: Real-Time Risk Decisioning — ")
    add_bullet("Predictive behavioral risk alerts 60-90 days early.", "Pillar 2: Early Warning Systems (EWS) — ")
    add_bullet("Propensity-to-pay ML segmentation & automated workout plans.", "Pillar 3: Collections & Recovery AI — ")
    add_bullet("100% SHAP feature importance & zero demographic bias.", "Pillar 4: Explainable AI & Governance — ")
    add_bullet("Democratized feature store APIs for ad-hoc risk views.", "Pillar 5: Self-Service Risk Data Mesh — ")

    add_h1("10. Credit Management Worked Examples & Templates")
    add_body("Includes fully worked Geoffrey Moore and Roman Pichler Vision Boards customized for Credit Analytics.")

    add_h1("11. Metric Architecture & North Star Metrics")
    add_callout_box(doc, "North Star Metric: RADEI Formula", [
        "Risk-Adjusted Decision Efficiency Index (RADEI) = (Automated Approval Rate % × Model Gini Score) ÷ (Default Rate % + Decision Latency Sec)"
    ], border_color_hex="0E7490", bg_color_hex="ECFEFF")

    add_h1("12. The 30-60-90 Day PO Execution Roadmap & Readiness Audit")
    add_body("Includes Month 1 Discover & Audit, Month 2 Formulate & Align, Month 3 Execute & Scale, plus the 6-point Vision Readiness Checklist.")

    # Conclusion Signature Block
    p_end = doc.add_paragraph()
    p_end.paragraph_format.space_before = Pt(16)
    r_end = p_end.add_run("Guide Prepared By: Lead Product Manager / Product Vision Coach\nApproved For Use In: Data & Analytics Tribe Masterclass")
    r_end.font.name = 'Arial'; r_end.font.size = Pt(10); r_end.font.italic = True; r_end.font.color.rgb = RGBColor(100, 116, 139)

    doc.save(file_path)
    print(f"SUCCESS: 12-Chapter Word Reference Guide saved to: {file_path}")

if __name__ == "__main__":
    create_document()
