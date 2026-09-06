import sys
import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

import xlsxwriter

# ==============================================================================
# PART 1: WORD DOCUMENT GENERATOR (.DOCX)
# ==============================================================================

def create_word_document(output_path):
    doc = Document()
    
    # Page Margins
    for section in doc.sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)

    # Styles Setup
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Segoe UI'
    normal_style.font.size = Pt(10.5)
    normal_style.font.color.rgb = RGBColor(51, 65, 85) # #334155

    def set_cell_bg(cell, fill_hex):
        tcPr = cell._tc.get_or_add_tcPr()
        shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
        tcPr.append(shd)

    def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
        tcPr = cell._tc.get_or_add_tcPr()
        tcMar = OxmlElement('w:tcMar')
        for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
            node = OxmlElement(f'w:{m}')
            node.set(qn('w:w'), str(val))
            node.set(qn('w:type'), 'dxa')
            tcMar.append(node)
        tcPr.append(tcMar)

    # Document Title
    p_title = doc.add_paragraph()
    r_title = p_title.add_run("Strategic Scrum Master Guide, AI Playbook & Mastery Roadmap")
    r_title.font.name = 'Segoe UI'
    r_title.font.size = Pt(22)
    r_title.font.bold = True
    r_title.font.color.rgb = RGBColor(15, 23, 42) # Navy

    p_sub = doc.add_paragraph()
    r_sub = p_sub.add_run("Domain: Credit Management  |  Tribe: Data & Analytics  |  Toolstack: Jira Data Center & MS Copilot Chat")
    r_sub.font.name = 'Segoe UI'
    r_sub.font.size = Pt(11)
    r_sub.font.bold = True
    r_sub.font.color.rgb = RGBColor(14, 116, 144) # Teal

    doc.add_paragraph().paragraph_format.space_after = Pt(8)

    def add_heading(text, level=1):
        h = doc.add_paragraph()
        h.paragraph_format.space_before = Pt(14)
        h.paragraph_format.space_after = Pt(6)
        r = h.add_run(text)
        r.font.name = 'Segoe UI'
        r.font.bold = True
        if level == 1:
            r.font.size = Pt(15)
            r.font.color.rgb = RGBColor(15, 23, 42)
        elif level == 2:
            r.font.size = Pt(12.5)
            r.font.color.rgb = RGBColor(30, 58, 138)
        else:
            r.font.size = Pt(11)
            r.font.color.rgb = RGBColor(14, 116, 144)
        return h

    def add_callout(text, title="IMPORTANT", bg_hex="F0F9FF", border_hex="0E7490"):
        tbl = doc.add_table(rows=1, cols=1)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = tbl.cell(0, 0)
        set_cell_bg(cell, bg_hex)
        set_cell_margins(cell, top=140, bottom=140, left=200, right=200)
        
        tcPr = cell._tc.get_or_add_tcPr()
        borders = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:left w:val="single" w:sz="24" w:space="0" w:color="{border_hex}"/><w:top w:val="none"/><w:right w:val="none"/><w:bottom w:val="none"/></w:tcBorders>')
        tcPr.append(borders)
        
        p = cell.paragraphs[0]
        rt = p.add_run(f"[{title}] ")
        rt.font.bold = True
        rt.font.color.rgb = RGBColor(14, 116, 144)
        rb = p.add_run(text)
        rb.font.italic = True
        p.paragraph_format.space_after = Pt(0)

    # 1. Executive Summary
    add_heading("1. Executive Summary & Context", level=1)
    doc.add_paragraph("In data-intensive enterprise domains like Credit Management (within a Data & Analytics Tribe), Scrum Masters frequently fall into the 'Administrative Trap.' Instead of acting as strategic agile leaders, flow facilitators, and organizational change agents, SMs often get bogged down managing Jira card movements, taking meeting minutes, scheduling outlook invites, and manually assembling status reports for management.")
    
    add_callout("This guide provides a structured, high-impact framework to transition the Scrum Master from an administrative coordinator into an AI-augmented Agile Leader & Flow Facilitator.", title="GOAL OF THIS GUIDE", bg_hex="FEF3C7", border_hex="D97706")

    # 2. Roles & Responsibilities Matrix
    add_heading("2. Scrum Master Roles & Responsibilities (Exhaustive Breakdown)", level=1)
    doc.add_paragraph("The Scrum Master serves three core dimensions: The Squad (Developers), The Product Owner, and The Tribe/Organization.")

    add_heading("Responsibility Matrix & Credit Domain Examples", level=2)
    tbl = doc.add_table(rows=1, cols=3)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdr = tbl.rows[0].cells
    titles = ["Dimension", "Key Responsibility", "Credit Management Domain Example"]
    for i, t in enumerate(titles):
        set_cell_bg(hdr[i], "0F172A")
        p = hdr[i].paragraphs[0]
        r = p.add_run(t)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)

    matrix_data = [
        ("Serving Squad", "Coaching Self-Management", "Squad self-assigns credit risk pipeline tickets from Jira swimlanes based on WIP limits rather than waiting for SM assignment."),
        ("Serving Squad", "Impediment Eradication", "SM negotiates 24-hr access SLA with Enterprise Information Security for legacy Credit Database permissions."),
        ("Serving Squad", "Psychological Safety", "Facilitates 5-Why blameless post-mortem when an ETL pipeline schema drift breaks test environment."),
        ("Serving PO", "INVEST Backlog Refinement", "Ensures top 15 backlog items are testable and small before sprint planning."),
        ("Serving PO", "Vertical Story Slicing", "Splits monolithic 80-pt 'Collections Risk Engine' Epic into 4 thin vertical slices."),
        ("Serving PO", "Outcome-Based Sprint Goals", "Formulates sprint goal: 'Deliver real-time default score alert feed to Risk Ops dashboard.'"),
        ("Serving Tribe", "Cross-Squad Dependency Mapping", "Coordinates dependency with Core Banking Ingestion Squad 2 sprints in advance via Scrum-of-Scrums."),
        ("Serving Tribe", "Regulatory DoD Compliance", "Embeds IFRS 9 data lineage and PII masking checks directly into Jira Definition of Done gates."),
    ]

    for r_idx, data in enumerate(matrix_data):
        row = tbl.add_row()
        bg = "F8FAFC" if r_idx % 2 == 0 else "FFFFFF"
        for i, text in enumerate(data):
            cell = row.cells[i]
            set_cell_bg(cell, bg)
            set_cell_margins(cell, top=70, bottom=70, left=100, right=100)
            p = cell.paragraphs[0]
            p.add_run(text)

    # Detailed Dimension Breakdown
    add_heading("Serving the Squad (Developers & Data Engineers)", level=2)
    p = doc.add_paragraph()
    r = p.add_run("• Coaching Self-Management: ")
    r.bold = True
    p.add_run("Educate developers to own their board movements and technical decisions. Teams relying on SM ticket updates remain passive and dependent.")
    
    p = doc.add_paragraph()
    r = p.add_run("• Facilitating Purposeful Scrum Events: ")
    r.bold = True
    p.add_run("Keep ceremonies timeboxed and outcome-focused. Shift Daily Standup focus from 'What did you do yesterday?' to 'Are we on track to achieve our Credit Score API Sprint Goal?'")

    p = doc.add_paragraph()
    r = p.add_run("• Eradicating Systemic Blockers: ")
    r.bold = True
    p.add_run("Aggressively remove technical, access, and departmental friction. A strong SM saves hundreds of developer hours per year.")

    add_heading("Serving the Product Owner", level=2)
    p = doc.add_paragraph()
    r = p.add_run("• Vertical Story Slicing: ")
    r.bold = True
    p.add_run("Break down massive data pipelines into small end-to-end user stories delivering business value early.")

    p = doc.add_paragraph()
    r = p.add_run("• Empirical Backlog Ordering: ")
    r.bold = True
    p.add_run("Guide PO in applying WSJF (Weighted Shortest Job First) and Value vs Effort matrix prioritizing high-impact risk models.")

    add_heading("Serving the Tribe & Organization", level=2)
    p = doc.add_paragraph()
    r = p.add_run("• Cross-Squad Flow & Dependencies: ")
    r.bold = True
    p.add_run("Visualize inter-squad data dependencies (Ingestion -> Data Platform -> Risk Analytics) to avoid domino-effect sprint blockages.")

    p = doc.add_paragraph()
    r = p.add_run("• Regulatory & Data Lineage DoD: ")
    r.bold = True
    p.add_run("Integrate audit compliance (IFRS 9, Basel III) into the Definition of Done checklist in Jira Data Center.")

    # 3. Breaking the Admin Trap
    add_heading("3. Tactical Plan to Break the 'Admin Trap'", level=1)
    doc.add_paragraph("Follow this 5-step reclamation plan to re-establish strategic coaching authority:")
    
    steps = [
        ("Transfer Board Ownership", "Require developers to move their own Jira cards during or before standups."),
        ("Automate Jira Rules", "Configure Jira Data Center Automations for stale issue alerts and sub-task generation."),
        ("Leverage MS Copilot Chat", "Draft user stories, acceptance criteria, and executive summaries using AI prompts."),
        ("Outcome-Focused Meetings", "Stop writing raw meeting minutes; capture only actionable decisions and Jira issue links."),
        ("Re-align Boundaries", "Re-establish with Tech Lead & PO that SM role focuses on flow, coaching, and blocker removal.")
    ]
    for title, desc in steps:
        p = doc.add_paragraph()
        r = p.add_run(f"• {title}: ")
        r.bold = True
        p.add_run(desc)

    # 4. MS Copilot Prompt Playbook
    add_heading("4. MS Copilot Chat & Jira Data Center Prompt Playbook", level=1)
    doc.add_paragraph("Integrate MS Copilot Chat within enterprise security boundaries with Jira Data Center exports to automate reporting and documentation.")

    prompts = [
        ("Prompt 1: INVEST User Story & Acceptance Criteria",
         "Act as a Senior Agile Coach and Data Domain Expert. Transform the following rough requirement into a fully refined User Story for our Credit Management squad in Jira Data Center.\n\nRough Requirement: 'Fetch daily credit score updates from external bureau API and store in Snowflake for collection risk category filtering.'\n\nOutput Format:\n1. User Story Title & Narrative (As a... I want... So that...)\n2. Gherkin Acceptance Criteria (Given-When-Then) for success, timeout, and duplicate entries.\n3. Non-functional data requirements (Data Lineage, Logging, PII Masking)."),
        
        ("Prompt 2: Jira DC Sprint CSV Diagnostics",
         "Act as an Agile Flow Metrics Analyst. Analyze the following CSV dataset exported from Jira Data Center for Credit Squad Sprint 142:\n[PASTE CSV DATA]\n\nProvide:\n1. Sprint Completion Rate (Committed vs Delivered Story Points).\n2. Scope Creep Analysis (Stories added post-sprint start).\n3. Bottleneck Analysis (Status with longest cycle time).\n4. Top 3 recommendations for upcoming Sprint Planning."),
        
        ("Prompt 3: Retrospective Root Cause Clustering",
         "Act as an Agile Retrospective Facilitator. Cluster the following raw retro notes into 3 core themes, identify systemic vs isolated issues, and draft 3 SMART action items ready for creation as Jira tasks:\n[PASTE RAW NOTES]")
    ]

    for p_title, p_text in prompts:
        add_heading(p_title, level=2)
        tbl_p = doc.add_table(rows=1, cols=1)
        tbl_p.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = tbl_p.cell(0, 0)
        set_cell_bg(cell, "F1F5F9")
        set_cell_margins(cell, top=100, bottom=100, left=150, right=150)
        p = cell.paragraphs[0]
        r = p.add_run(p_text)
        r.font.name = 'Consolas'
        r.font.size = Pt(9.5)
        r.font.color.rgb = RGBColor(15, 23, 42)

    # 5. 4-Phase Roadmap
    add_heading("5. 4-Phase SM Mastery Roadmap (Weeks 1 – 16)", level=1)
    
    phases = [
        ("Phase 1: Admin Freedom & Foundation (Weeks 1–4)", "Transfer board ownership, deploy 3 Jira automation rules, adopt MS Copilot story drafting.", "50% reduction in SM admin overhead."),
        ("Phase 2: Flow & AI Integration (Weeks 5–8)", "Implement WIP limits, CFD charts, Cycle Time tracking, and Copilot CSV analytics.", "20% reduction in average cycle time."),
        ("Phase 3: Domain & PO Coaching (Weeks 9–12)", "Master vertical story slicing, outcome-based sprint goals, and automated regulatory DoD gates.", ">85% Sprint Goal attainment rate."),
        ("Phase 4: Tribe Agile Leadership (Weeks 13–16)", "Lead Tribe Scrum-of-Scrums dependency mapping, mentor peer SMs in AI workflows.", "Recognized Agile Leader in Data Tribe.")
    ]

    for p_title, focus, metric in phases:
        add_heading(p_title, level=2)
        p = doc.add_paragraph()
        r1 = p.add_run("Core Focus: ")
        r1.bold = True
        p.add_run(focus)
        p_m = doc.add_paragraph()
        r2 = p_m.add_run("Key Metric / Target: ")
        r2.bold = True
        r2.font.color.rgb = RGBColor(14, 116, 144)
        p_m.add_run(metric)

    doc.save(output_path)
    print(f"Word document successfully created at: {output_path}")

# ==============================================================================
# PART 2: EXCEL WORKBOOK GENERATOR (.XLSX) VIA XLSXWRITER
# ==============================================================================

def create_excel_workbook(output_path):
    wb = xlsxwriter.Workbook(output_path)

    # Formats
    fmt_title = wb.add_format({'font_name': 'Segoe UI', 'font_size': 16, 'bold': True, 'font_color': '#0F172A'})
    fmt_subtitle = wb.add_format({'font_name': 'Segoe UI', 'font_size': 11, 'bold': True, 'font_color': '#0E7490'})
    fmt_section = wb.add_format({'font_name': 'Segoe UI', 'font_size': 12, 'bold': True, 'font_color': '#0F172A'})

    fmt_hdr_navy = wb.add_format({
        'font_name': 'Segoe UI', 'font_size': 10, 'bold': True, 'font_color': '#FFFFFF',
        'bg_color': '#0F172A', 'align': 'center', 'valign': 'vcenter', 'border': 1, 'text_wrap': True
    })
    fmt_hdr_blue = wb.add_format({
        'font_name': 'Segoe UI', 'font_size': 10, 'bold': True, 'font_color': '#FFFFFF',
        'bg_color': '#1E3A8A', 'align': 'center', 'valign': 'vcenter', 'border': 1, 'text_wrap': True
    })
    fmt_hdr_teal = wb.add_format({
        'font_name': 'Segoe UI', 'font_size': 10, 'bold': True, 'font_color': '#FFFFFF',
        'bg_color': '#0E7490', 'align': 'center', 'valign': 'vcenter', 'border': 1, 'text_wrap': True
    })

    fmt_cell_norm = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9.5, 'valign': 'top', 'border': 1})
    fmt_cell_center = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9.5, 'align': 'center', 'valign': 'top', 'border': 1})
    fmt_cell_bold = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9.5, 'bold': True, 'valign': 'top', 'border': 1})
    fmt_cell_zebra = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9.5, 'valign': 'top', 'bg_color': '#F8FAFC', 'border': 1})
    fmt_cell_zebra_center = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9.5, 'align': 'center', 'valign': 'top', 'bg_color': '#F8FAFC', 'border': 1})
    fmt_prompt_box = wb.add_format({'font_name': 'Consolas', 'font_size': 9, 'valign': 'top', 'bg_color': '#F1F5F9', 'border': 1, 'text_wrap': True})

    # KPI Formats
    fmt_kpi_label = wb.add_format({'font_name': 'Segoe UI', 'font_size': 9, 'bold': True, 'font_color': '#475569', 'align': 'center', 'valign': 'vcenter', 'bg_color': '#F1F5F9', 'border': 1})
    fmt_kpi_val = wb.add_format({'font_name': 'Segoe UI', 'font_size': 13, 'bold': True, 'font_color': '#0E7490', 'align': 'center', 'valign': 'vcenter', 'bg_color': '#FFFFFF', 'border': 1})

    # -------------------------------------------------------------
    # TAB 1: Dashboard & Overview
    # -------------------------------------------------------------
    ws1 = wb.add_worksheet('Dashboard & Overview')
    ws1.hide_gridlines(False)

    ws1.write('A1', 'Agile Coaching Program Dashboard', fmt_title)
    ws1.write('A2', 'Scrum Master Coaching & Mastery Program  |  Domain: Credit Management', fmt_subtitle)

    # KPI Summary Cards
    ws1.merge_range('A4:B4', 'Total Coaching Sessions', fmt_kpi_label)
    ws1.merge_range('A5:B5', '12 Sessions', fmt_kpi_val)

    ws1.merge_range('D4:E4', 'Program Duration', fmt_kpi_label)
    ws1.merge_range('D5:E5', '16 Weeks (4 Phases)', fmt_kpi_val)

    ws1.merge_range('G4:H4', 'Target Admin Savings', fmt_kpi_label)
    ws1.merge_range('G5:H5', '70% Savings', fmt_kpi_val)

    ws1.merge_range('J4:K4', 'Current SM Phase', fmt_kpi_label)
    ws1.merge_range('J5:K5', 'Phase 1: Admin Freedom', fmt_kpi_val)

    ws1.write('A7', 'Scrum Master Competency Baseline vs Target (Scale 1-5)', fmt_section)

    comp_headers = ["Competency Area", "Baseline Score", "Target Score (Phase 4)", "Current Score", "Progress Status"]
    for c_idx, h in enumerate(comp_headers):
        ws1.write(7, c_idx, h, fmt_hdr_navy)

    competencies = [
        ("Facilitation & Ceremonies Mastery", 2, 5, 2, "Phase 1 - In Progress"),
        ("Squad Self-Management Coaching", 2, 5, 2, "Phase 1 - In Progress"),
        ("Impediment Eradication & Escalation", 3, 5, 3, "Baseline Established"),
        ("Jira Data Center Automations & JQL", 1, 5, 1, "Phase 1 Goal"),
        ("MS Copilot AI Workflow Adoption", 1, 5, 1, "Phase 1 Goal"),
        ("Product Backlog INVEST Refinement", 2, 4, 2, "Phase 2 Goal"),
        ("Vertical Story Slicing (ETL / Data)", 2, 5, 2, "Phase 2 Goal"),
        ("Flow Metrics & WIP Limit Management", 1, 4, 1, "Phase 2 Goal"),
        ("Regulatory & DoD Compliance Gates", 3, 5, 3, "Phase 3 Goal"),
        ("Tribe Cross-Squad Dependency Alignment", 2, 5, 2, "Phase 4 Goal")
    ]

    for r_offset, row_data in enumerate(competencies):
        r = 8 + r_offset
        fmt_c = fmt_cell_zebra_center if r_offset % 2 == 1 else fmt_cell_center
        fmt_n = fmt_cell_zebra if r_offset % 2 == 1 else fmt_cell_norm

        ws1.write(r, 0, row_data[0], fmt_n)
        ws1.write(r, 1, row_data[1], fmt_c)
        ws1.write(r, 2, row_data[2], fmt_c)
        ws1.write(r, 3, row_data[3], fmt_c)
        ws1.write(r, 4, row_data[4], fmt_n)

    ws1.set_column('A:A', 35)
    ws1.set_column('B:E', 22)

    # -------------------------------------------------------------
    # TAB 2: Coaching Curriculum Matrix
    # -------------------------------------------------------------
    ws2 = wb.add_worksheet('Coaching Curriculum')
    ws2.hide_gridlines(False)

    ws2.write('A1', '12-Week Agile Coaching Curriculum Matrix', fmt_title)

    curr_headers = ["S.No", "Session Title", "Roadmap Phase", "Core Learning Objective", "Pre-Reading / Prep", "60-Min Agenda Overview", "Powerful Coaching Questions", "Homework / Deliverable"]
    for c_idx, h in enumerate(curr_headers):
        ws2.write(2, c_idx, h, fmt_hdr_navy)

    curriculum_data = [
        (1, "Baseline Assessment & Breaking Admin Mindset", "Phase 1", "Establish coaching agreement & audit current SM time allocation", "Complete 3-day Time Log", "Check-in (10m), Time Log Review (20m), 3 Dimensions (20m), Action Plan (10m)", "What holds you back from letting squad update Jira cards?", "Announce squad board ownership; stop taking word-for-word notes"),
        (2, "Scrum Ceremonies & Facilitation Mastery", "Phase 1", "Shift standup & retro from status meetings to outcome facilitation", "Read Liberating Structures guide", "Check-in (10m), Facilitation deep dive (25m), Standup simulation (15m), Action Items (10m)", "How does your standup help team achieve Sprint Goal?", "Change board view to Sprint Goal swimlanes; run 4Ls Retro"),
        (3, "MS Copilot Chat Setup & Prompting 101", "Phase 1", "Master Copilot Chat for User Story & Acceptance Criteria creation", "Review SM Prompt Playbook", "Homework review (10m), Live prompt lab (25m), Story drafting exercise (15m), Actions (10m)", "How can Copilot eliminate manual story writing?", "Draft 3 User Stories with PO using Prompt 1"),
        (4, "Jira Data Center JQL & Automations", "Phase 1", "Deploy native Jira DC automation rules for stale issues & subtasks", "Review Jira Automation docs", "Copilot story review (10m), Jira Rule builder lab (25m), JQL filters (15m), Actions (10m)", "Which manual check can software do for you?", "Configure 2 Jira Data Center Automation rules"),
        (5, "Advanced Backlog Hygiene & INVEST Criteria", "Phase 2", "Ensure top 15 backlog items meet INVEST criteria prior to planning", "Audit top 15 Jira items", "Jira rule review (10m), INVEST breakdown (25m), Backlog audit lab (15m), Actions (10m)", "Which story carries highest spillover risk?", "Conduct Backlog Hygiene session with PO"),
        (6, "Flow Metrics (Cycle Time, WIP Limits)", "Phase 2", "Implement WIP limits and analyze CFD and Control Charts", "Export CFD chart from Jira", "Check-in (10m), Flow metrics deep dive (25m), WIP limit design (15m), Actions (10m)", "Where are tickets spending the longest idle time?", "Implement WIP limits on Jira board"),
        (7, "Vertical Story Slicing in Data & Analytics", "Phase 2", "Slice monolithic Credit Risk Epics into small sprint stories", "Bring 1 monolithic Epic", "WIP feedback (10m), Story slicing patterns (25m), Epic slicing lab (15m), Actions (10m)", "How can we deliver a thin slice of data value in Sprint 1?", "Slice next major Credit Risk Epic into 4 stories"),
        (8, "Serving PO: Value Prioritization & WSJF", "Phase 3", "Coach PO on business value ordering frameworks (WSJF)", "Read WSJF framework guide", "Slicing review (10m), WSJF concepts (25m), WSJF simulation with PO (15m), Actions (10m)", "How are we measuring business value of data pipelines?", "Facilitate WSJF prioritization session with PO"),
        (9, "Regulatory Compliance & Data DoD Gates", "Phase 3", "Integrate IFRS 9, PII masking, data lineage into Jira DoD", "Obtain Data Governance policy", "WSJF review (10m), Governance mapping (25m), Jira DoD checklist config (15m), Actions (10m)", "How can compliance become a continuous check?", "Update squad Jira Definition of Done checklist"),
        (10, "Retrospective Intelligence with Copilot", "Phase 3", "Use MS Copilot for retro sentiment analysis & SMART action items", "Gather raw retro notes", "DoD review (10m), AI sentiment analysis (25m), Action item builder (15m), Actions (10m)", "Which recurring retro themes reflect systemic blockers?", "Facilitate Copilot-assisted Retro; create Jira tasks"),
        (11, "Cross-Squad Alignment & Dependency Mapping", "Phase 4", "Lead cross-squad dependency visualization across Data Tribe", "Map squad dependencies", "Retro review (10m), Cross-squad patterns (25m), Scrum-of-Scrums lab (15m), Actions (10m)", "Which external dependency poses largest threat?", "Establish weekly Scrum-of-Scrums dependency sync"),
        (12, "Program Review, Graduation & Sustainability", "Phase 4", "Assess SM growth, celebrate milestones, establish self-coaching plan", "Complete Self-Assessment", "Achievement review (15m), SM Leadership Vision (20m), AC Feedback (15m), Next Steps (10m)", "How will you ensure you never fall back into Admin Trap?", "Final program graduation & peer-coaching cadence")
    ]

    for r_offset, row_data in enumerate(curriculum_data):
        r = 3 + r_offset
        fmt_c = fmt_cell_zebra_center if r_offset % 2 == 1 else fmt_cell_center
        fmt_n = fmt_cell_zebra if r_offset % 2 == 1 else fmt_cell_norm

        ws2.write(r, 0, row_data[0], fmt_c)
        ws2.write(r, 1, row_data[1], fmt_n)
        ws2.write(r, 2, row_data[2], fmt_c)
        ws2.write(r, 3, row_data[3], fmt_n)
        ws2.write(r, 4, row_data[4], fmt_n)
        ws2.write(r, 5, row_data[5], fmt_n)
        ws2.write(r, 6, row_data[6], fmt_n)
        ws2.write(r, 7, row_data[7], fmt_n)

    ws2.set_column('A:A', 6)
    ws2.set_column('B:B', 32)
    ws2.set_column('C:C', 14)
    ws2.set_column('D:H', 30)

    # -------------------------------------------------------------
    # TAB 3: Session Tracking Log
    # -------------------------------------------------------------
    ws3 = wb.add_worksheet('Session Tracking Log')
    ws3.hide_gridlines(False)

    ws3.write('A1', '1-on-1 Coaching Session Execution Tracker', fmt_title)

    log_headers = ["Session #", "Planned Date", "Actual Date", "Status", "Topic Covered", "Competency Rating (1-5)", "Action Items Assigned", "Due Date", "Coach Notes & Observations"]
    for c_idx, h in enumerate(log_headers):
        ws3.write(2, c_idx, h, fmt_hdr_blue)

    for i in range(1, 13):
        r = 2 + i
        fmt_c = fmt_cell_zebra_center if i % 2 == 0 else fmt_cell_center
        fmt_n = fmt_cell_zebra if i % 2 == 0 else fmt_cell_norm

        ws3.write(r, 0, f"Session {i}", fmt_c)
        ws3.write(r, 1, "YYYY-MM-DD", fmt_c)
        ws3.write(r, 2, "-", fmt_c)
        ws3.write(r, 3, "Scheduled" if i == 1 else "Planned", fmt_c)
        ws3.write(r, 4, curriculum_data[i-1][1], fmt_n)
        ws3.write(r, 5, "[ / 5 ]", fmt_c)
        ws3.write(r, 6, curriculum_data[i-1][7], fmt_n)
        ws3.write(r, 7, "YYYY-MM-DD", fmt_c)
        ws3.write(r, 8, "-", fmt_n)

    ws3.set_column('A:A', 12)
    ws3.set_column('B:D', 15)
    ws3.set_column('E:E', 32)
    ws3.set_column('F:F', 20)
    ws3.set_column('G:I', 35)

    # -------------------------------------------------------------
    # TAB 4: MS Copilot Prompt Library
    # -------------------------------------------------------------
    ws4 = wb.add_worksheet('MS Copilot Prompt Library')
    ws4.hide_gridlines(False)

    ws4.write('A1', 'MS Copilot Chat Prompt Library for Scrum Masters', fmt_title)

    prompt_headers = ["Prompt ID", "Category", "Objective / Goal", "MS Copilot Prompt Template Text", "Expected Output Format", "Est. Time Saved"]
    for c_idx, h in enumerate(prompt_headers):
        ws4.write(2, c_idx, h, fmt_hdr_teal)

    prompts_data = [
        ("PR-01", "Story Drafting", "Convert rough requirements into INVEST User Story", "Act as a Senior Agile Coach and Data Domain Expert. Transform the following rough requirement into a fully refined User Story for our Credit Management squad in Jira Data Center.\n\nRough Requirement: [PASTE REQUIREMENT]\n\nOutput Format:\n1. User Story Narrative (As a... I want... So that...)\n2. 4 Gherkin Acceptance Criteria (Given-When-Then)\n3. DoD checklist (Data Lineage, PII Masking, Logging)", "Structured User Story ready to copy into Jira", "45 mins per session"),
        ("PR-02", "Sprint Analytics", "Analyze Jira Data Center CSV export for flow bottlenecks", "Act as an Agile Flow Metrics Analyst. Analyze the attached Jira Data Center Sprint 142 CSV export for Credit Management Squad A:\n[PASTE CSV DATA]\n\nProvide:\n1. Executive Summary for Data Tribe Lead\n2. Scope Creep Analysis (post-sprint start additions)\n3. Bottleneck Analysis (status with longest cycle time)\n4. Top 3 recommendations for upcoming Sprint Planning", "Executive Analysis & Recommendations", "2 hours per sprint"),
        ("PR-03", "Retrospective", "Theme clustering & SMART action item drafting", "Act as an Agile Retrospective Facilitator. Here are raw retro notes from our Credit pipeline squad:\n[PASTE NOTES]\n\nPerform:\n1. Cluster notes into 3 core themes\n2. Identify systemic root causes vs isolated incidents\n3. Draft 3 SMART action items ready for creation as Jira tasks", "Thematic Summary & SMART Jira Tasks", "30 mins per retro"),
        ("PR-04", "Jira Automations", "Generate Automation for Jira Data Center rules & JQL", "I am setting up Automation for Jira Data Center. I want to build a rule that triggers when an issue in project 'CRED' stays in 'In Testing' for > 48 hours.\n\nHelp me write:\n1. Exact JQL condition filter\n2. Slack/Teams notification message template\n3. Smart values to extract assignee name dynamically", "Exact JQL syntax & Notification template", "30 mins per rule setup"),
        ("PR-05", "Story Slicing", "Deconstruct monolithic Data / ML Epic", "Act as an Agile Coach specializing in Data Engineering. Our Product Owner has a large Epic: [PASTE EPIC TITLE]. Help me apply Vertical Story Slicing technique to break this Epic into 4 small, incremental User Stories that each deliver working end-to-end data capability.", "4 Vertically Sliced User Stories", "1 hour per epic")
    ]

    for r_offset, row_data in enumerate(prompts_data):
        r = 3 + r_offset
        fmt_c = fmt_cell_zebra_center if r_offset % 2 == 1 else fmt_cell_center
        fmt_n = fmt_cell_zebra if r_offset % 2 == 1 else fmt_cell_norm

        ws4.write(r, 0, row_data[0], fmt_c)
        ws4.write(r, 1, row_data[1], fmt_c)
        ws4.write(r, 2, row_data[2], fmt_n)
        ws4.write(r, 3, row_data[3], fmt_prompt_box)
        ws4.write(r, 4, row_data[4], fmt_n)
        ws4.write(r, 5, row_data[5], fmt_c)

    ws4.set_column('A:B', 15)
    ws4.set_column('C:C', 30)
    ws4.set_column('D:D', 50)
    ws4.set_column('E:F', 25)

    wb.close()
    print(f"Excel workbook successfully created at: {output_path}")

# ==============================================================================
# MAIN EXECUTION
# ==============================================================================

if __name__ == "__main__":
    out_dir_scratch = r"C:\Users\anany\.gemini\antigravity\scratch\scrum_master_coaching"
    out_dir_brain = r"C:\Users\anany\.gemini\antigravity\brain\88aa52ec-96f7-457e-9d4c-72cd33fcf025"

    os.makedirs(out_dir_scratch, exist_ok=True)
    os.makedirs(out_dir_brain, exist_ok=True)

    word_file_scratch = os.path.join(out_dir_scratch, "Scrum_Master_Mastery_Guide_and_Roadmap.docx")
    word_file_brain = os.path.join(out_dir_brain, "Scrum_Master_Mastery_Guide_and_Roadmap.docx")
    
    excel_file_scratch = os.path.join(out_dir_scratch, "Agile_Coaching_Session_Tracker.xlsx")
    excel_file_brain = os.path.join(out_dir_brain, "Agile_Coaching_Session_Tracker.xlsx")

    create_word_document(word_file_scratch)
    create_word_document(word_file_brain)

    create_excel_workbook(excel_file_scratch)
    create_excel_workbook(excel_file_brain)
