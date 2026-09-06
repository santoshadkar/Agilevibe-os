import sys
import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    # Color Palette - Professional Corporate Dark / Navy Accent
    NAVY = RGBColor(15, 23, 42)       # #0f172a
    DARK_BLUE = RGBColor(30, 58, 138)  # #1e3a8a
    TEAL = RGBColor(14, 116, 144)      # #0e7490
    LIGHT_BG = RGBColor(248, 250, 252) # #f8fafc
    WHITE = RGBColor(255, 255, 255)
    GRAY_TEXT = RGBColor(71, 85, 105)  # #475569
    GOLD_ACCENT = RGBColor(217, 119, 6) # #d97706
    CARD_BG = RGBColor(255, 255, 255)
    BORDER_COLOR = RGBColor(226, 232, 240)

    blank_layout = prs.slide_layouts[6]

    def add_header(slide, title_text, category_text="AGILE COACHING & TRANSFORMATION"):
        # Header background banner
        header_shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(1.1))
        header_shape.fill.solid()
        header_shape.fill.fore_color.rgb = NAVY
        header_shape.line.fill.background()

        # Accent strip
        accent = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(1.1), Inches(13.333), Inches(0.06))
        accent.fill.solid()
        accent.fill.fore_color.rgb = TEAL
        accent.line.fill.background()

        # Category Text
        tx_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.12), Inches(11.5), Inches(0.3))
        tf = tx_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = category_text.upper()
        p.font.size = Pt(10)
        p.font.bold = True
        p.font.color.rgb = GOLD_ACCENT

        # Title Text
        tx_box2 = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.5), Inches(0.55))
        tf2 = tx_box2.text_frame
        tf2.word_wrap = True
        p2 = tf2.paragraphs[0]
        p2.text = title_text
        p2.font.size = Pt(22)
        p2.font.bold = True
        p2.font.color.rgb = WHITE

    def add_card(slide, left, top, width, height, title, content_list, bg_color=CARD_BG, border_color=BORDER_COLOR):
        # Card Background
        card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
        card.fill.solid()
        card.fill.fore_color.rgb = bg_color
        card.line.color.rgb = border_color
        card.line.width = Pt(1.5)

        # Card Title
        tx_box = slide.shapes.add_textbox(left + Inches(0.2), top + Inches(0.15), width - Inches(0.4), Inches(0.45))
        tf = tx_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = DARK_BLUE

        # Card Content
        tx_box_body = slide.shapes.add_textbox(left + Inches(0.2), top + Inches(0.6), width - Inches(0.4), height - Inches(0.7))
        tf_body = tx_box_body.text_frame
        tf_body.word_wrap = True
        
        for i, item in enumerate(content_list):
            if i == 0:
                p_b = tf_body.paragraphs[0]
            else:
                p_b = tf_body.add_paragraph()
            
            p_b.text = item
            p_b.font.size = Pt(11)
            p_b.font.color.rgb = GRAY_TEXT
            p_b.space_after = Pt(6)

    # -------------------------------------------------------------
    # SLIDE 1: Title Slide
    # -------------------------------------------------------------
    slide1 = prs.slides.add_slide(blank_layout)
    bg1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = NAVY
    bg1.line.fill.background()

    # Decorative visual accents
    dec1 = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.5), Inches(0.15), Inches(4.5))
    dec1.fill.solid()
    dec1.fill.fore_color.rgb = TEAL
    dec1.line.fill.background()

    tx = slide1.shapes.add_textbox(Inches(1.2), Inches(1.8), Inches(11.0), Inches(1.0))
    tf = tx.text_frame
    p = tf.paragraphs[0]
    p.text = "RE-INVENTING THE SCRUM MASTER"
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = WHITE

    tx_sub = slide1.shapes.add_textbox(Inches(1.2), Inches(2.8), Inches(11.0), Inches(0.8))
    tf_sub = tx_sub.text_frame
    p_sub = tf_sub.paragraphs[0]
    p_sub.text = "From Administrative Coordinator to Strategic Agile Leader & AI Integrator"
    p_sub.font.size = Pt(20)
    p_sub.font.color.rgb = GOLD_ACCENT

    # Context Details Box
    ctx_box = slide1.shapes.add_textbox(Inches(1.2), Inches(4.2), Inches(11.0), Inches(2.2))
    tf_ctx = ctx_box.text_frame
    
    p1 = tf_ctx.paragraphs[0]
    p1.text = "Domain: Credit Management Domain  |  Tribe: Data & Analytics"
    p1.font.size = Pt(14)
    p1.font.bold = True
    p1.font.color.rgb = WHITE
    p1.space_after = Pt(10)

    p2 = tf_ctx.add_paragraph()
    p2.text = "Toolstack: Jira Data Center & Enterprise MS Copilot Chat"
    p2.font.size = Pt(13)
    p2.font.color.rgb = RGBColor(203, 213, 225)
    p2.space_after = Pt(10)

    p3 = tf_ctx.add_paragraph()
    p3.text = "Prepared for: Agile Coaching & Scrum Master Mastery Program"
    p3.font.size = Pt(13)
    p3.font.italic = True
    p3.font.color.rgb = TEAL

    # -------------------------------------------------------------
    # SLIDE 2: The Admin Trap & Executive Context
    # -------------------------------------------------------------
    slide2 = prs.slides.add_slide(blank_layout)
    add_header(slide2, "The Scrum Master Admin Trap: Problem Statement & Pivot")

    add_card(slide2, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Symptoms of the 'Admin Trap'",
             [
                 "• Ticket Mover & Jira Secretary: Spending hours manually updating Jira Data Center issue statuses, assigning tasks, and moving cards.",
                 "• Meeting Calendar Manager: Focus limited to scheduling Scrum ceremonies, sending outlook invites, and writing meeting minutes.",
                 "• Passive Status Reporter: Manually copy-pasting numbers into PowerPoint slides for management updates.",
                 "• Scribe & Note-Taker: Capturing raw notes instead of facilitating active problem-solving and engagement.",
                 "• Lack of Domain Impact: Disconnected from Credit Management domain outcomes, data quality, and business value."
             ],
             bg_color=RGBColor(254, 242, 242), border_color=RGBColor(252, 165, 165))

    add_card(slide2, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "The Strategic Agile Leader Pivot",
             [
                 "• Team Empowerer: Coach the squad to own their Jira board and self-organize without relying on SM for administration.",
                 "• Value Stream Optimizer: Analyze flow metrics (Cycle Time, Lead Time, Throughput) to remove systemic bottlenecks.",
                 "• AI-Augmented Coach: Leverage MS Copilot Chat to automate reporting, draft stories, and analyze sprint trends in seconds.",
                 "• Product Owner Partner: Assist PO in value-based backlog refinement, splitting complex Credit ETL/Risk Epics.",
                 "• Change Catalyst: Drive engineering excellence, data governance compliance, and psychological safety."
             ],
             bg_color=RGBColor(240, 253, 244), border_color=RGBColor(134, 239, 172))

    # -------------------------------------------------------------
    # SLIDE 3: Core Triad of Responsibilities
    # -------------------------------------------------------------
    slide3 = prs.slides.add_slide(blank_layout)
    add_header(slide3, "The Core Triad of Scrum Master Responsibilities")

    add_card(slide3, Inches(0.8), Inches(1.5), Inches(3.6), Inches(5.4),
             "1. Serving the Squad",
             [
                 "• Coach team members in self-management & cross-functionality.",
                 "• Facilitate effective Scrum events that drive decisions.",
                 "• Remove blockers & organizational impediments.",
                 "• Foster psychological safety & continuous improvement.",
                 "• Shield squad from external noise & scope creep.",
                 "• Ensure Definition of Done (DoD) is strictly upheld."
             ])

    add_card(slide3, Inches(4.8), Inches(1.5), Inches(3.6), Inches(5.4),
             "2. Serving the Product Owner",
             [
                 "• Facilitate effective Product Backlog management.",
                 "• Help PO structure Epics, Features, and User Stories.",
                 "• Guide value-driven sprint goal formulation.",
                 "• Assist in complex story splitting (ETL/ML models).",
                 "• Bridge technical complexity with business outcomes.",
                 "• Ensure empirical product planning."
             ])

    add_card(slide3, Inches(8.8), Inches(1.5), Inches(3.7), Inches(5.4),
             "3. Serving the Org & Tribe",
             [
                 "• Lead & coach Tribe in Scrum adoption.",
                 "• Coordinate cross-squad dependencies in Data & Analytics.",
                 "• Remove systemic impediments (Data Governance, Infra).",
                 "• Increase transparency and flow across the domain.",
                 "• Drive agile capability building & coaching standardisation."
             ])

    # -------------------------------------------------------------
    # SLIDE 4: Deep Dive - Serving the Squad (Credit Domain Context)
    # -------------------------------------------------------------
    slide4 = prs.slides.add_slide(blank_layout)
    add_header(slide4, "Deep Dive: Serving the Developers in Data & Analytics")

    add_card(slide4, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Core Responsibilities & Mindset",
             [
                 "• Facilitation over Control: Guide Daily Standups to focus on Sprint Goal progress, not individual status reporting.",
                 "• Flow & Bottleneck Management: Monitor WIP (Work-In-Progress) limits on Jira boards to prevent context switching.",
                 "• Impediment Eradication: Proactively unblock data access issues, environment delays, and upstream schema changes.",
                 "• Psychological Safety: Create retrospectives where data engineers & analysts openly discuss pipeline failures without blame.",
                 "• Continuous Learning: Encourage technical spikes and automation of manual testing."
             ])

    add_card(slide4, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Credit Management Practical Example & Impact",
             [
                 "• Scenario: Data Engineers stuck waiting 5 days for Credit Risk Database schema permission approvals.",
                 "• SM Action: SM does not just take notes. SM escalates to Data Security Lead, leverages governance SLAs, and creates an automated access workflow pattern.",
                 "• Significance: Prevents sprint failure, reduces cycle time by 40%, and establishes repeatable onboarding pathways for future credit risk data streams.",
                 "• Outcome: Squad moves from frustration to high velocity and self-ownership."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 5: Deep Dive - Serving the Product Owner
    # -------------------------------------------------------------
    slide5 = prs.slides.add_slide(blank_layout)
    add_header(slide5, "Deep Dive: Serving the Product Owner in Credit Domain")

    add_card(slide5, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Core Responsibilities & Techniques",
             [
                 "• Backlog Refinement Mastery: Ensure User Stories meet INVEST criteria before Sprint Planning.",
                 "• Technical Deconstruction: Help PO break down massive Credit Risk Models or ETL Migration Epics into sliceable stories.",
                 "• Sprint Goal Alignment: Guide PO to define outcome-oriented Sprint Goals (e.g. 'Validate Early Warning System Risk Score').",
                 "• Backlog Prioritization Techniques: Teach PO WSJF (Weighted Shortest Job First) and Value vs effort mapping.",
                 "• Managing Stakeholder Expectations: Protect PO from ad-hoc executive requests mid-sprint."
             ])

    add_card(slide5, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Credit Management Practical Example & Impact",
             [
                 "• Scenario: PO has a giant 100-pt Epic: 'Automate Collections Recovery Scoring Engine'.",
                 "• SM Action: SM facilitates story splitting workshop using Vertical Slicing. Breaks Epic into 4 incremental slices: (1) Data ingestion, (2) Base score calculation, (3) Expiry alerts, (4) UI dashboard feed.",
                 "• Significance: Allows early delivery of value in Sprint 1 instead of waiting 3 months for a monolithic release.",
                 "• Outcome: Faster feedback loop from Credit Risk Analysts and reduced risk."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 6: Deep Dive - Serving the Tribe & Governance
    # -------------------------------------------------------------
    slide6 = prs.slides.add_slide(blank_layout)
    add_header(slide6, "Deep Dive: Serving the Tribe & Data Governance")

    add_card(slide6, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Core Responsibilities & Scope",
             [
                 "• Cross-Squad Alignment: Facilitate Scrum-of-Scrums across Data Platform, Ingestion, and Credit Risk Analytics squads.",
                 "• Dependency Mapping: Highlight data lineage dependencies early to avoid mid-sprint blockages.",
                 "• Compliance Integration: Embed Data Quality & Regulatory Compliance checks into Definition of Done (DoD).",
                 "• Agile Community of Practice: Contribute to Tribe-wide agile standards and peer coaching for SMs.",
                 "• Metrics Transparency: Provide honest, objective flow metrics to Tribe Leads."
             ])

    add_card(slide6, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Credit Management Practical Example & Impact",
             [
                 "• Scenario: Regulatory IFRS 9 Credit Provisioning model requires strict compliance signoff that delays release by 2 sprints.",
                 "• SM Action: SM collaborates with Compliance & Enterprise Data Governance to integrate regulatory review steps into DoD as continuous automated checks.",
                 "• Significance: Eliminates end-of-sprint compliance bottlenecks, ensuring audit-ready data models on every release.",
                 "• Outcome: Zero compliance breaches and predictable release cadence."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 7: Enterprise Tooling Landscape: Jira DC + MS Copilot
    # -------------------------------------------------------------
    slide7 = prs.slides.add_slide(blank_layout)
    add_header(slide7, "Enterprise Powerhouse: Jira Data Center + MS Copilot Chat")

    add_card(slide7, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Jira Data Center Capabilities",
             [
                 "• Source of Truth: Centralized tracking for Epics, Stories, Bugs, Technical Debt, and Spikes.",
                 "• Advanced JQL Queries: Granular filtering by Component ('Credit-Ingestion', 'Risk-Model'), FixVersion, Sprint, and Custom Fields.",
                 "• Native Automation for Jira: Auto-assigning issues, triggering alerts on stale blockers, enforcement of workflow rules.",
                 "• Data Export: Rich CSV/Excel export for advanced prompt-based analysis.",
                 "• Filter Subscriptions: Scheduled data snapshots delivered to SM inbox."
             ])

    add_card(slide7, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "MS Copilot Chat Integration",
             [
                 "• Enterprise Security Compliance: Operates within organizational security boundaries with full data privacy protection.",
                 "• Intelligent Data Synthesis: Transforms raw JQL export data into structured executive summaries, risk matrixes, and trends.",
                 "• AI Content Drafting: Rapidly creates acceptance criteria, release notes, user story drafts, and email updates.",
                 "• Root Cause Analysis: Identifies patterns in sprint spillover, bug clusters, and velocity fluctuations.",
                 "• Admin Elimination: Cuts administrative work by 70%, freeing SM for coaching."
             ],
             bg_color=RGBColor(238, 242, 255), border_color=DARK_BLUE)

    # -------------------------------------------------------------
    # SLIDE 8: MS Copilot Use Case 1 - Backlog Hygiene & Drafting
    # -------------------------------------------------------------
    slide8 = prs.slides.add_slide(blank_layout)
    add_header(slide8, "Copilot Use Case 1: Automated Backlog Hygiene & Story Drafting", "PRACTICAL AI USE CASES")

    add_card(slide8, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "The Workflow",
             [
                 "1. Input Rough Requirements: PO gives high-level Credit Risk requirement (e.g. 'Integrate real-time credit score lookup API for loan origination').",
                 "2. Copilot Story Structuring: SM uses MS Copilot Chat prompt to generate formatted User Story with INVEST criteria.",
                 "3. Gherkin Acceptance Criteria: Copilot automatically generates Given-When-Then testable acceptance criteria.",
                 "4. DoD & Edge Case Suggestions: Copilot highlights missing data security controls, fallback logic, and audit logging needs.",
                 "5. Jira Paste: SM/PO pastes structured card into Jira Data Center in under 2 minutes."
             ])

    add_card(slide8, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Sample MS Copilot Prompt Template",
             [
                 "Prompt:",
                 "\"Act as a Senior Agile Coach for a Data & Analytics squad in Credit Management. I have a rough requirement: 'We need to build an ETL pipeline to aggregate monthly credit default risk scores from SQL Server to Snowflake for executive reporting'.",
                 "",
                 "Generate:",
                 "1. Standard User Story ('As a... I want... So that...')",
                 "2. 4 detailed Gherkin Acceptance Criteria (Given-When-Then)",
                 "3. Non-Functional Requirements (Data Latency, Security, Data Lineage)",
                 "4. Key Risks and dependencies to check in Jira Data Center.\"",
                 "",
                 "⏱ Time Saved: 45 minutes per refinement session."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 9: MS Copilot Use Case 2 - Agile Reporting & Analytics
    # -------------------------------------------------------------
    slide9 = prs.slides.add_slide(blank_layout)
    add_header(slide9, "Copilot Use Case 2: Instant Executive Reporting & Sprint Analytics", "PRACTICAL AI USE CASES")

    add_card(slide9, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "The Workflow (Jira DC Export + Copilot)",
             [
                 "1. Run JQL Filter: Run JQL in Jira Data Center: `project = 'CRED' AND sprint = 142`.",
                 "2. Export CSV: Export standard fields (Key, Summary, Status, Original Estimate, Story Points, Flagged, Component).",
                 "3. Paste/Upload to MS Copilot Chat: Provide data to Copilot Chat with analysis parameters.",
                 "4. Generate Insight Report: Copilot identifies scope creep percentage, blocked hours, component bottle-necks, and team velocity variance.",
                 "5. Produce Exec Summary: Formats 1-page executive summary for Tribe Lead & Credit Domain Lead."
             ])

    add_card(slide9, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Sample MS Copilot Prompt Template",
             [
                 "Prompt:",
                 "\"Analyze the attached Jira Data Center Sprint 142 CSV export for Credit Management Squad A.",
                 "",
                 "Please provide:",
                 "1. Executive Summary (3 bullet points for Data Tribe Lead).",
                 "2. Scope Creep Analysis: List stories added after sprint start and total story points.",
                 "3. Bottleneck Analysis: Which component had the longest cycle time?",
                 "4. Top 3 recommendations for upcoming Sprint 143 planning.\"",
                 "",
                 "📈 Impact: Eliminates manual slide building; 100% data-driven reporting."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 10: MS Copilot Use Case 3 - Retrospectives & Action Tracking
    # -------------------------------------------------------------
    slide10 = prs.slides.add_slide(blank_layout)
    add_header(slide10, "Copilot Use Case 3: Retrospective Analysis & Action Intelligence", "PRACTICAL AI USE CASES")

    add_card(slide10, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "The Workflow",
             [
                 "1. Capture Raw Feedback: Gather anonymous Retro feedback (What went well, What didn't, Bottlenecks).",
                 "2. Copilot Thematic Clustering: Feed raw notes to MS Copilot Chat to group by underlying themes (e.g. Data Access, Environment Unavailability, Requirement Ambiguity).",
                 "3. Sentiment & Priority Mapping: Copilot categorizes issues by severity and impact on sprint velocity.",
                 "4. Action Item Generation: Copilot formats actionable, SMART retro items ready for creation as Jira tasks.",
                 "5. Follow-up Tracking: Track action item completion rate across sprints."
             ])

    add_card(slide10, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Sample MS Copilot Prompt Template",
             [
                 "Prompt:",
                 "\"Here are raw retrospective notes from our Credit Scoring pipeline squad: [paste notes].",
                 "",
                 "Perform the following:",
                 "1. Cluster notes into 3 core themes.",
                 "2. Identify systemic root causes vs isolated incidents.",
                 "3. Draft 3 SMART action items with suggested owners and Jira task summaries.",
                 "4. Draft a positive, encouraging closing message for the squad teams channel.\"",
                 "",
                 "💡 Impact: Elevates Retro quality from complaining session to strategic improvement."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 11: MS Copilot Use Case 4 - Automated Jira DC Workflows
    # -------------------------------------------------------------
    slide11 = prs.slides.add_slide(blank_layout)
    add_header(slide11, "Copilot Use Case 4: Automations & Governance Safeguards", "PRACTICAL AI USE CASES")

    add_card(slide11, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Jira Data Center Automation Setup",
             [
                 "• Rule 1: Stale Issue Alert: Auto-flag stories in 'In Progress' for > 4 days with label `stale_review`.",
                 "• Rule 2: Sub-task Checklist Generator: Auto-create mandatory data compliance sub-tasks when issue component = `Credit-Model-Release`.",
                 "• Rule 3: Auto-Closure of Blockers: Notify SM when linked external dependency ticket is resolved.",
                 "• Rule 4: Data Quality DoD Gate: Block transition to 'Done' if 'Data Lineage URL' custom field is empty."
             ])

    add_card(slide11, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "MS Copilot Automation Assistant Prompt",
             [
                 "Prompt:",
                 "\"I am setting up Automation for Jira Data Center. I want to build a rule that triggers when a issue in project 'CRED' stays in 'In Testing' for more than 48 hours.",
                 "",
                 "Help me write:",
                 "1. The exact JQL condition filter.",
                 "2. The Slack/Teams notification message template.",
                 "3. Smart values to extract assignee name and issue summary dynamically.\"",
                 "",
                 "⚙ Result: Zero manual monitoring needed by SM."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 12: Comprehensive Prompt Playbook for SM
    # -------------------------------------------------------------
    slide12 = prs.slides.add_slide(blank_layout)
    add_header(slide12, "The Scrum Master MS Copilot Prompt Playbook", "AI TOOLKIT")

    add_card(slide12, Inches(0.8), Inches(1.5), Inches(3.6), Inches(5.4),
             "Refinement & Story Splitting",
             [
                 "• 'Break down this Epic into vertical user stories delivering end-to-end data value...'",
                 "• 'Generate edge cases for testing credit risk threshold calculation...'",
                 "• 'Draft clear Definition of Done criteria including Data Lineage and PII masking...'"
             ])

    add_card(slide12, Inches(4.8), Inches(1.5), Inches(3.6), Inches(5.4),
             "Daily Facilitation & Flow",
             [
                 "• 'Identify blockers from today's standup updates and suggest mitigation strategies...'",
                 "• 'Draft a quick email to Data Architecture to request urgent review of credit schema...'",
                 "• 'Summarize key decisions made during architecture spike session...'"
             ])

    add_card(slide12, Inches(8.8), Inches(1.5), Inches(3.7), Inches(5.4),
             "Domain & Executive Updates",
             [
                 "• 'Translate technical data pipeline velocity metrics into business language for Credit Domain Head...'",
                 "• 'Draft sprint review presentation script highlighting accomplishments & business metrics...'",
                 "• 'Create a risk matrix for upcoming credit scoring engine release...'"
             ])

    # -------------------------------------------------------------
    # SLIDE 13: 4-Phase SM Mastery Roadmap
    # -------------------------------------------------------------
    slide13 = prs.slides.add_slide(blank_layout)
    add_header(slide13, "Scrum Master Mastery Roadmap: From Admin to Agile Leader", "GROWTH ROADMAP")

    add_card(slide13, Inches(0.8), Inches(1.5), Inches(2.7), Inches(5.4),
             "Phase 1: Admin Freedom\n(Weeks 1-4)",
             [
                 "• Delegate board status updating to squad.",
                 "• Automate Jira DC workflows & alerts.",
                 "• Adopt MS Copilot Chat for routine drafting.",
                 "• Milestone: 50% reduction in SM admin overhead."
             ],
             bg_color=RGBColor(241, 245, 249))

    add_card(slide13, Inches(3.8), Inches(1.5), Inches(2.7), Inches(5.4),
             "Phase 2: Flow & AI Integration\n(Weeks 5-8)",
             [
                 "• Implement WIP limits & Cycle Time tracking.",
                 "• Standardize INVEST story creation via Copilot.",
                 "• Advanced JQL export analytics.",
                 "• Milestone: 25% decrease in story cycle time."
             ],
             bg_color=RGBColor(238, 242, 255))

    add_card(slide13, Inches(6.8), Inches(1.5), Inches(2.7), Inches(5.4),
             "Phase 3: Domain & PO Coaching\n(Weeks 9-12)",
             [
                 "• Master vertical story slicing for Credit ETL.",
                 "• Facilitate outcome-based Sprint Planning.",
                 "• Establish automated compliance gates in DoD.",
                 "• Milestone: 90% Sprint Goal attainment rate."
             ],
             bg_color=RGBColor(236, 253, 245))

    add_card(slide13, Inches(9.8), Inches(1.5), Inches(2.7), Inches(5.4),
             "Phase 4: Tribe Leader\n(Weeks 13-16)",
             [
                 "• Lead Scrum-of-Scrums for Credit Domain.",
                 "• Coach peer SMs in MS Copilot adoption.",
                 "• Drive continuous delivery & enterprise agility.",
                 "• Milestone: Recognized Agile Change Leader."
             ],
             bg_color=RGBColor(254, 243, 199))

    # -------------------------------------------------------------
    # SLIDE 14: Agile Coaching Engagement Program Structure
    # -------------------------------------------------------------
    slide14 = prs.slides.add_slide(blank_layout)
    add_header(slide14, "Agile Coaching Program: AC & SM Coaching Structure", "COACHING FRAMEWORK")

    add_card(slide14, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Coaching Session Architecture",
             [
                 "• Cadence: Weekly 60-minute 1-on-1 Coaching Sessions (12 Weeks Total).",
                 "• Structure: 10m Check-in & Homework Review, 25m Concept Deep Dive & Skill Building, 20m Practical Application & Copilot Simulation, 5m Action Items & Homework Assignment.",
                 "• Safe Space Environment: High psychological safety, constructive feedback, active listening.",
                 "• Accountability: Shared digital tracker for action items, observations, and milestone progression."
             ])

    add_card(slide14, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Key Evaluation & Success Metrics",
             [
                 "• Admin Overhead Ratio: Reduction in hours spent on manual ticket updating (Target: < 2 hrs/week).",
                 "• Squad Self-Organization Index: Squad independence during standups and Jira card updates.",
                 "• AI Adoption Rate: Frequency and effectiveness of MS Copilot Chat prompt usage.",
                 "• Sprint Delivery Predictability: Say-do ratio (Committed vs Delivered Story Points).",
                 "• Cycle Time Stability: Consistency in data pipeline ticket completion."
             ],
             bg_color=RGBColor(248, 250, 252), border_color=TEAL)

    # -------------------------------------------------------------
    # SLIDE 15: Session Curriculum Overview
    # -------------------------------------------------------------
    slide15 = prs.slides.add_slide(blank_layout)
    add_header(slide15, "12-Week Agile Coaching Session Curriculum", "COACHING CURRICULUM")

    add_card(slide15, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Sessions 1 - 6: Foundation & Efficiency",
             [
                 "• Session 1: Baseline Assessment & Breaking the Admin Mindset",
                 "• Session 2: Mastery of Scrum Ceremonies & True Facilitation",
                 "• Session 3: Enterprise MS Copilot Chat Setup & Prompting 101",
                 "• Session 4: Jira Data Center JQL Mastery & Automation Rules",
                 "• Session 5: Advanced Backlog Hygiene & INVEST Story Drafting",
                 "• Session 6: Flow Metrics (Cycle Time, WIP Limits, Throughput)"
             ])

    add_card(slide15, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Sessions 7 - 12: Domain Impact & Leadership",
             [
                 "• Session 7: Vertical Story Slicing in Data & Analytics / ETL",
                 "• Session 8: Serving the PO - Value Prioritization & Roadmapping",
                 "• Session 9: Embedding Regulatory & Data Compliance into DoD",
                 "• Session 10: Retrospective Intelligence with MS Copilot",
                 "• Session 11: Cross-Squad Alignment & Tribe Dependency Management",
                 "• Session 12: Program Review, Future Vision & SM Leadership Self-Sustainment"
             ],
             bg_color=RGBColor(248, 250, 252), border_color=DARK_BLUE)

    # -------------------------------------------------------------
    # SLIDE 16: Immediate Next Steps & Week 1 Action Plan
    # -------------------------------------------------------------
    slide16 = prs.slides.add_slide(blank_layout)
    add_header(slide16, "Immediate Action Plan & Week 1 Quick Wins", "CALL TO ACTION")

    add_card(slide16, Inches(0.8), Inches(1.5), Inches(5.6), Inches(5.4),
             "Scrum Master Immediate Action Items",
             [
                 "1. Conduct Admin Audit: Track time spent on manual Jira updates vs coaching for 3 days.",
                 "2. Set Up Squad Board Ownership: Announce during retro that squad will update their own Jira cards.",
                 "3. Bookmark MS Copilot Chat: Store the provided SM Prompt Playbook.",
                 "4. Configure 1 Jira Automation: Set up automatic flag/alert for stale issues > 3 days.",
                 "5. Prepare for Coaching Session 1: Complete self-assessment baseline survey."
             ],
             bg_color=RGBColor(240, 253, 244), border_color=RGBColor(134, 239, 172))

    add_card(slide16, Inches(6.8), Inches(1.5), Inches(5.7), Inches(5.4),
             "Agile Coach Immediate Action Items",
             [
                 "1. Schedule Coaching Cadence: Send recurring Outlook invites for weekly 1-on-1 coaching.",
                 "2. Initialize Coaching Tracker: Share the digital coaching session tracker artifact.",
                 "3. Inform Tribe/Domain Leadership: Align with Data & Analytics Tribe Lead on SM growth goals.",
                 "4. Observe 1 Standup & Retro: Perform baseline observation of SM facilitation style.",
                 "5. Review First Copilot Output: Review SM's first AI-assisted story draft and refine."
             ],
             bg_color=RGBColor(238, 242, 255), border_color=DARK_BLUE)

    # Save presentation
    output_dir = r"C:\Users\anany\.gemini\antigravity\scratch\scrum_master_coaching"
    os.makedirs(output_dir, exist_ok=True)
    file_path = os.path.join(output_dir, "Scrum_Master_Excellence_Deck.pptx")
    prs.save(file_path)

    # Also save directly into artifacts directory for direct user access
    artifact_dir = r"C:\Users\anany\.gemini\antigravity\brain\88aa52ec-96f7-457e-9d4c-72cd33fcf025"
    os.makedirs(artifact_dir, exist_ok=True)
    artifact_path = os.path.join(artifact_dir, "Scrum_Master_Excellence_Deck.pptx")
    prs.save(artifact_path)

    print(f"Presentation successfully created at: {file_path}")
    print(f"Artifact copy saved at: {artifact_path}")

if __name__ == "__main__":
    create_deck()
