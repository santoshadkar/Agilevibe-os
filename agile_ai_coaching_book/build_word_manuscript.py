import os
import re
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"
COVER_IMAGE_PATH = os.path.join(BASE_DIR, "master_cover.jpg")
IMAGE_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\diagrams"
SECTION_IMAGE_DIR = r"C:\Users\anany\.gemini\antigravity\brain\3a227cad-b003-4e0a-a40d-c7744690daed\section_diagrams"

IMAGES = {
    "ch01": (os.path.join(IMAGE_DIR, "fig_ch01.png"), "Figure 1: Enterprise Scaling Frameworks Trade-off Comparison"),
    "ch02": (os.path.join(IMAGE_DIR, "fig_ch02.png"), "Figure 2: Lyssa Adkins Agile Coaching Stance Matrix"),
    "ch03": (os.path.join(IMAGE_DIR, "fig_ch03.png"), "Figure 3: Executive Strategic OKR to Squad Backlog Line-of-Sight"),
    "ch04": (os.path.join(IMAGE_DIR, "fig_ch04.png"), "Figure 4: Cumulative Flow Diagram (CFD) & Lead Time Distribution"),
    "ch05": (os.path.join(IMAGE_DIR, "fig_ch05.png"), "Figure 5: Jira Data Center Clustered Infrastructure Topology"),
    "ch06": (os.path.join(IMAGE_DIR, "fig_ch06.png"), "Figure 6: Jira DC Workflow State Machine & ScriptRunner Validation"),
    "ch07": (os.path.join(IMAGE_DIR, "fig_ch07.png"), "Figure 7: Advanced Roadmaps Multi-Tier Portfolio Hierarchy"),
    "ch08": (os.path.join(IMAGE_DIR, "fig_ch08.png"), "Figure 8: Jira REST API v2 & Webhook Event Streaming Bus"),
    "ch09": (os.path.join(IMAGE_DIR, "fig_ch09.png"), "Figure 9: Jira Cloud Multi-Tenant Architecture & Atlassian Access"),
    "ch10": (os.path.join(IMAGE_DIR, "fig_ch10.png"), "Figure 10: Atlassian Forge Serverless Runtime App Architecture"),
    "ch11": (os.path.join(IMAGE_DIR, "fig_ch11.png"), "Figure 11: Jira Service Management (JSM) & Assets CMDB Graph"),
    "ch12": (os.path.join(IMAGE_DIR, "fig_ch12.png"), "Figure 12: Jira DC to Cloud Migration Execution & JCMA Pipeline"),
    "ch13": (os.path.join(IMAGE_DIR, "fig_ch13.png"), "Figure 13: Azure Boards Custom Inherited Process State Machine"),
    "ch14": (os.path.join(IMAGE_DIR, "fig_ch14.png"), "Figure 14: Azure DevOps Delivery Plans 2.0 & Cross-Team Dependencies"),
    "ch15": (os.path.join(IMAGE_DIR, "fig_ch15.png"), "Figure 15: ADO YAML CI/CD Pipeline & Automated Gate Architecture"),
    "ch16": (os.path.join(IMAGE_DIR, "fig_ch16.png"), "Figure 16: Jira vs Azure DevOps Dual-Stack Coexistence & Data Sync"),
    "ch17": (os.path.join(IMAGE_DIR, "fig_ch17.png"), "Figure 17: Enterprise RAG Architecture & Vector Database Retrieval"),
    "ch18": (os.path.join(IMAGE_DIR, "fig_ch18.png"), "Figure 18: Prompt Engineering Taxonomy & Socratic Coaching Pipeline"),
    "ch19": (os.path.join(IMAGE_DIR, "fig_ch19.png"), "Figure 19: Multi-Agent ReAct Pattern & Autonomous Agile Facilitator"),
    "ch20": (os.path.join(IMAGE_DIR, "fig_ch20.png"), "Figure 20: AI Ethics, Risk Matrix & Data Privacy Guardrails"),
    "ch21": (os.path.join(IMAGE_DIR, "fig_ch21.png"), "Figure 21: AI-Augmented Backlog Engineering & BDD Feature Slicing"),
    "ch22": (os.path.join(IMAGE_DIR, "fig_ch22.png"), "Figure 22: AI Sprint Facilitation & Real-Time Sentiment Radar"),
    "ch23": (os.path.join(IMAGE_DIR, "fig_ch23.png"), "Figure 23: Predictive Velocity Forecasting & Monte Carlo Simulation"),
    "ch24": (os.path.join(IMAGE_DIR, "fig_ch24.png"), "Figure 24: Model Context Protocol (MCP) Server Architecture Blueprint"),
    "ch25": (os.path.join(IMAGE_DIR, "fig_ch25.png"), "Figure 25: Local SLM (Ollama/vLLM) & Air-Gapped Enterprise Architecture"),
    "ch26": (os.path.join(IMAGE_DIR, "fig_ch26.png"), "Figure 26: LangGraph Stateful Multi-Agent Graph & HITL Approval Node"),
    "ch27": (os.path.join(IMAGE_DIR, "fig_ch27.png"), "Figure 27: Atlassian Rovo Agent, Teamwork Graph & Forge Action Module"),
    "ch28": (os.path.join(IMAGE_DIR, "fig_ch28.png"), "Figure 28: Self-Hosted n8n Event Pipeline, Webhooks & AI Node Workflow"),
    "appA": (os.path.join(IMAGE_DIR, "fig_appA.png"), "Figure 29: Appendix A: Prompt Engineering Library Catalog Architecture"),
    "appB": (os.path.join(IMAGE_DIR, "fig_appB.png"), "Figure 30: Appendix B: JQL vs WIQL Query Translation & Telemetry Matrix"),
    "appC": (os.path.join(IMAGE_DIR, "fig_appC.png"), "Figure 31: Appendix C: Enterprise Transformation Maturity Assessment Model")
}

CHAPTER_FILES = [
    ("Part I: Enterprise Agile Coaching Foundations", [
        ("Chapter 1: The Modern Enterprise Agile Spectrum", "chapters/part1_coaching/ch01_modern_agile_spectrum.md"),
        ("Chapter 2: The Mastery of Agile Coaching", "chapters/part1_coaching/ch02_agile_coaching_mastery.md"),
        ("Chapter 3: Enterprise Agile Coaching & Org Design", "chapters/part1_coaching/ch03_enterprise_agile_coaching.md"),
        ("Chapter 4: Flow Engineering, Metrics & Business Agility", "chapters/part1_coaching/ch04_flow_engineering_metrics.md")
    ]),
    ("Part II: Jira Data Center Masterclass", [
        ("Chapter 5: Jira Data Center Architecture & Admin", "chapters/part2_jira_dc/ch05_jira_dc_architecture.md"),
        ("Chapter 6: Workflow Engineering & Custom Fields in DC", "chapters/part2_jira_dc/ch06_workflow_engineering_dc.md"),
        ("Chapter 7: Portfolio Management & Advanced Roadmaps DC", "chapters/part2_jira_dc/ch07_portfolio_management_dc.md"),
        ("Chapter 8: Data Center REST APIs, JQL Mastery & Reporting", "chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md")
    ]),
    ("Part III: Jira Cloud Enterprise Masterclass", [
        ("Chapter 9: Modern Jira Cloud Architecture & Capabilities", "chapters/part3_jira_cloud/ch09_jira_cloud_architecture.md"),
        ("Chapter 10: Advanced Jira Cloud Automation & Forge Extensions", "chapters/part3_jira_cloud/ch10_automation_forge_cloud.md"),
        ("Chapter 11: Jira Cloud Plans, Assets (Insight) & JSM", "chapters/part3_jira_cloud/ch11_jira_plans_assets_jsm.md"),
        ("Chapter 12: Migration Strategy: Data Center to Jira Cloud", "chapters/part3_jira_cloud/ch12_dc_to_cloud_migration.md")
    ]),
    ("Part IV: Azure DevOps (ADO) Enterprise Execution", [
        ("Chapter 13: Azure Boards & Enterprise Process Architecture", "chapters/part4_azure_devops/ch13_azure_boards_process.md"),
        ("Chapter 14: Portfolio Planning, Delivery Plans & Dependencies", "chapters/part4_azure_devops/ch14_portfolio_delivery_plans.md"),
        ("Chapter 15: ADO Pipeline Integration & Developer Flow", "chapters/part4_azure_devops/ch15_ado_pipelines_devex.md"),
        ("Chapter 16: Jira vs. Azure DevOps Coexistence & Migration Matrix", "chapters/part4_azure_devops/ch16_jira_ado_coexistence.md")
    ]),
    ("Part V: AI Fundamentals & Ecosystem for Agile", [
        ("Chapter 17: Generative AI, LLMs & Agentic Architecture", "chapters/part5_ai_ecosystem/ch17_generative_ai_llms.md"),
        ("Chapter 18: Prompt Engineering Masterclass for Agile Coaches", "chapters/part5_ai_ecosystem/ch18_prompt_engineering_coaches.md"),
        ("Chapter 19: Agentic AI & Autonomous Assistants in Agile", "chapters/part5_ai_ecosystem/ch19_agentic_ai_agile.md"),
        ("Chapter 20: AI Ethics, Governance & Change Management", "chapters/part5_ai_ecosystem/ch20_ai_ethics_governance.md")
    ]),
    ("Part VI: The AI-Augmented Agile Coach Playbook", [
        ("Chapter 21: AI-Powered Backlog Engineering & Story Refinement", "chapters/part6_ai_augmented_coach/ch21_ai_backlog_refinement.md"),
        ("Chapter 22: AI Facilitation: Sprint Planning, Retros & Standups", "chapters/part6_ai_augmented_coach/ch22_ai_sprint_facilitation.md"),
        ("Chapter 23: Predictive Analytics & AI Flow Optimization", "chapters/part6_ai_augmented_coach/ch23_predictive_flow_analytics.md"),
        ("Chapter 24: Building Custom AI Coaching Agents & MCP Servers", "chapters/part6_ai_augmented_coach/ch24_building_ai_coaching_agents.md")
    ]),
    ("Part VIII: Hands-On AI Engineering & Enterprise Automation", [
        ("Chapter 25: Local SLMs & On-Premise AI Architecture", "chapters/part8_hands_on_ai/ch25_local_slms_ollama.md"),
        ("Chapter 26: Multi-Agent Coaching Systems with LangGraph", "chapters/part8_hands_on_ai/ch26_langchain_langgraph_agents.md"),
        ("Chapter 27: Atlassian Rovo Masterclass: Jira Cloud AI Agents", "chapters/part8_hands_on_ai/ch27_atlassian_rovo_jira_cloud.md"),
        ("Chapter 28: Enterprise No-Code/Low-Code Automation (n8n/Make)", "chapters/part8_hands_on_ai/ch28_n8n_make_zapier_automation.md")
    ]),
    ("Part VII: Executive Coaching Guardrails & Operational Appendices", [
        ("Appendix A: Enterprise AI Coaching Prompt Library", "appendices/appA_prompt_library.md"),
        ("Appendix B: Enterprise JQL, WIQL & AQL Cheat Sheet", "appendices/appB_jql_wiql_cheatsheet.md"),
        ("Appendix C: Enterprise Agile & AI Maturity Assessment Checklist", "appendices/appC_transformation_checklist.md")
    ])
]

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_table_borders(table, color="D1D5DB", sz="4", val="single"):
    tblPr = table._element.xpath('w:tblPr')
    if tblPr:
        borders = parse_xml(f'''
            <w:tblBorders {nsdecls("w")}>
                <w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:insideV w:val="none"/>
                <w:left w:val="none"/>
                <w:right w:val="none"/>
            </w:tblBorders>
        ''')
        tblPr[0].append(borders)

def add_formatted_text_run(p, text, base_font_size=11, base_color=RGBColor(0x1F, 0x29, 0x37), base_bold=False, base_italic=False):
    tokens = re.split(r'(\*\*.*?\*\*|\*.*?\*|`.*?`)', text)
    for token in tokens:
        if not token:
            continue
        run = p.add_run()
        run.font.name = 'Calibri'
        run.font.size = Pt(base_font_size)
        run.font.color.rgb = base_color
        run.font.bold = base_bold
        run.font.italic = base_italic

        if token.startswith('**') and token.endswith('**') and len(token) >= 4:
            run.text = token[2:-2]
            run.font.bold = True
        elif token.startswith('*') and token.endswith('*') and len(token) >= 2:
            run.text = token[1:-1]
            run.font.italic = True
        elif token.startswith('`') and token.endswith('`') and len(token) >= 2:
            run.text = token[1:-1]
            run.font.name = 'Consolas'
            run.font.size = Pt(base_font_size - 1)
            run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)
        else:
            run.text = token

def add_callout_box(doc, text, title="EXECUTIVE COACHING GUARDRAIL"):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.cell(0, 0)
    set_cell_background(cell, "EFF6FF")
    
    tcPr = cell._element.get_or_add_tcPr()
    borders = parse_xml(f'''
        <w:tcBorders {nsdecls("w")}>
            <w:left w:val="single" w:sz="36" w:space="0" w:color="1E3A8A"/>
            <w:top w:val="none"/>
            <w:right w:val="none"/>
            <w:bottom w:val="none"/>
        </w:tcBorders>
    ''')
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(6)
    p.paragraph_format.space_after = Pt(6)
    
    t_run = p.add_run(f"📌 {title}\n")
    t_run.font.name = 'Calibri'
    t_run.font.size = Pt(11)
    t_run.font.bold = True
    t_run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)
    
    add_formatted_text_run(p, text, base_font_size=10.5, base_color=RGBColor(0x1F, 0x29, 0x37), base_italic=True)
    doc.add_paragraph()

def flush_table(doc, table_lines):
    if len(table_lines) >= 2:
        header_row = [c.strip() for c in table_lines[0].split('|')[1:-1]]
        data_rows = []
        for tr in table_lines[1:]:
            if ":---" in tr or "---" in tr or "|---" in tr or "| ---" in tr:
                continue
            cols = [c.strip() for c in tr.split('|')[1:-1]]
            if cols:
                data_rows.append(cols)
        
        if header_row and data_rows:
            tbl = doc.add_table(rows=len(data_rows) + 1, cols=len(header_row))
            tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
            set_table_borders(tbl, color="D1D5DB", sz="4", val="single")
            
            hdr_cells = tbl.rows[0].cells
            for idx, h_text in enumerate(header_row):
                if idx < len(hdr_cells):
                    set_cell_background(hdr_cells[idx], "1E3A8A")
                    hp = hdr_cells[idx].paragraphs[0]
                    hp.paragraph_format.space_before = Pt(5)
                    hp.paragraph_format.space_after = Pt(5)
                    add_formatted_text_run(hp, h_text, base_font_size=10, base_color=RGBColor(0xFF, 0xFF, 0xFF), base_bold=True)
            
            for r_idx, row_cols in enumerate(data_rows):
                row_cells = tbl.rows[r_idx + 1].cells
                bg_color = "F9FAFB" if r_idx % 2 == 1 else "FFFFFF"
                for c_idx, val in enumerate(row_cols):
                    if c_idx < len(row_cells):
                        set_cell_background(row_cells[c_idx], bg_color)
                        dp = row_cells[c_idx].paragraphs[0]
                        dp.paragraph_format.space_before = Pt(4)
                        dp.paragraph_format.space_after = Pt(4)
                        add_formatted_text_run(dp, val, base_font_size=9.5, base_color=RGBColor(0x1F, 0x29, 0x37))
            
            doc.add_paragraph()

def add_page_number_fields(p):
    run = p.add_run("Page ")
    run.font.name = 'Calibri'
    run.font.size = Pt(9)
    run.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)

    fldChar1 = parse_xml(r'<w:fldChar %s w:fldCharType="begin"/>' % nsdecls('w'))
    instrText = parse_xml(r'<w:instrText %s xml:space="preserve"> PAGE </w:instrText>' % nsdecls('w'))
    fldChar2 = parse_xml(r'<w:fldChar %s w:fldCharType="separate"/>' % nsdecls('w'))
    fldChar3 = parse_xml(r'<w:fldChar %s w:fldCharType="end"/>' % nsdecls('w'))
    
    r_elem = p.add_run()._r
    r_elem.append(fldChar1)
    r_elem.append(instrText)
    r_elem.append(fldChar2)
    r_elem.append(fldChar3)

    run2 = p.add_run(" of ")
    run2.font.name = 'Calibri'
    run2.font.size = Pt(9)
    run2.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)

    fldChar4 = parse_xml(r'<w:fldChar %s w:fldCharType="begin"/>' % nsdecls('w'))
    instrText2 = parse_xml(r'<w:instrText %s xml:space="preserve"> NUMPAGES </w:instrText>' % nsdecls('w'))
    fldChar5 = parse_xml(r'<w:fldChar %s w:fldCharType="separate"/>' % nsdecls('w'))
    fldChar6 = parse_xml(r'<w:fldChar %s w:fldCharType="end"/>' % nsdecls('w'))

    r_elem2 = p.add_run()._r
    r_elem2.append(fldChar4)
    r_elem2.append(instrText2)
    r_elem2.append(fldChar5)
    r_elem2.append(fldChar6)

def setup_headers_and_footers(doc):
    for section in doc.sections:
        # Standard 1.0 inch margins to maintain ~830 page specification depth
        section.top_margin = Inches(1.0)
        section.bottom_margin = Inches(1.0)
        section.left_margin = Inches(1.0)
        section.right_margin = Inches(1.0)
        section.different_first_page_header_footer = True

        # Header
        header = section.header
        hp = header.paragraphs[0]
        hp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        hrun = hp.add_run("The AI-Augmented Enterprise Agile Coach  |  By Santoshanand Adkar")
        hrun.font.name = 'Calibri'
        hrun.font.size = Pt(8.5)
        hrun.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)

        # Footer
        footer = section.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        add_page_number_fields(fp)

def create_word_manuscript():
    doc = Document()
    setup_headers_and_footers(doc)

    # 1. SPECTACULAR 1-PAGE EXECUTIVE COVER PAGE
    if os.path.exists(COVER_IMAGE_PATH):
        cover_img_p = doc.add_paragraph()
        cover_img_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        cover_img_p.paragraph_format.space_before = Pt(0)
        cover_img_p.paragraph_format.space_after = Pt(12)
        cover_img_p.add_run().add_picture(COVER_IMAGE_PATH, width=Inches(4.8))

    sub_p = doc.add_paragraph()
    sub_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    sub_p.paragraph_format.space_after = Pt(12)
    sub_run = sub_p.add_run("A Technical & Operational Playbook for Scaling Agile Coaching, Jira Data Center/Cloud, Azure DevOps, and Agentic AI Architecture")
    sub_run.font.name = 'Calibri'
    sub_run.font.size = Pt(12)
    sub_run.font.italic = True
    sub_run.font.color.rgb = RGBColor(0x4B, 0x55, 0x63)

    # Metadata Card Box
    meta_table = doc.add_table(rows=1, cols=1)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta_cell = meta_table.cell(0, 0)
    set_cell_background(meta_cell, "F8FAFC")
    set_table_borders(meta_table, color="CBD5E1", sz="6", val="single")

    mp = meta_cell.paragraphs[0]
    mp.paragraph_format.space_before = Pt(8)
    mp.paragraph_format.space_after = Pt(8)
    mp.alignment = WD_ALIGN_PARAGRAPH.LEFT
    
    m_text = (
        "EXECUTIVE PUBLICATION SPECIFICATION\n"
        "• Author & Principal Architect: Santoshanand Adkar\n"
        "• Publication Date: September 2026  |  Edition: Executive Master Edition\n"
        "• Technical Scope: Scrum, SAFe 6.0, LeSS, Jira DC/Cloud, Azure DevOps, RAG & Agentic MCP Architecture\n"
        "• Operational Assets: 171 Multi-Theme Diagrams, 158 Styled Tables, 105 System Prompts & 35-Criteria Maturity Model"
    )
    add_formatted_text_run(mp, m_text, base_font_size=9.5, base_color=RGBColor(0x33, 0x41, 0x55))

    # Single Page Break right after Cover Page
    doc.add_page_break()

    # 2. Executive Table of Contents (TOC Page)
    toc_p = doc.add_paragraph()
    toc_p.paragraph_format.space_before = Pt(20)
    toc_p.paragraph_format.space_after = Pt(14)
    t_run = toc_p.add_run("EXECUTIVE TABLE OF CONTENTS")
    t_run.font.name = 'Calibri'
    t_run.font.size = Pt(20)
    t_run.font.bold = True
    t_run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)

    toc_table = doc.add_table(rows=1, cols=2)
    toc_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(toc_table, color="D1D5DB", sz="4", val="single")
    
    hdr_cells = toc_table.rows[0].cells
    set_cell_background(hdr_cells[0], "1E3A8A")
    set_cell_background(hdr_cells[1], "1E3A8A")
    
    hp0 = hdr_cells[0].paragraphs[0]
    hp0.paragraph_format.space_before = Pt(5)
    hp0.paragraph_format.space_after = Pt(5)
    add_formatted_text_run(hp0, "Book Part & Chapter Scope", base_font_size=10, base_color=RGBColor(0xFF, 0xFF, 0xFF), base_bold=True)
    
    hp1 = hdr_cells[1].paragraphs[0]
    hp1.paragraph_format.space_before = Pt(5)
    hp1.paragraph_format.space_after = Pt(5)
    add_formatted_text_run(hp1, "Core Technical Topics & Subsections Covered", base_font_size=10, base_color=RGBColor(0xFF, 0xFF, 0xFF), base_bold=True)

    for part_title, chapters in CHAPTER_FILES:
        row_cells = toc_table.add_row().cells
        set_cell_background(row_cells[0], "F8FAFC")
        set_cell_background(row_cells[1], "FFFFFF")

        c0 = row_cells[0].paragraphs[0]
        c0.paragraph_format.space_before = Pt(4)
        c0.paragraph_format.space_after = Pt(4)
        add_formatted_text_run(c0, part_title, base_font_size=9.5, base_color=RGBColor(0x1E, 0x3A, 0x8A), base_bold=True)

        c1 = row_cells[1].paragraphs[0]
        c1.paragraph_format.space_before = Pt(4)
        c1.paragraph_format.space_after = Pt(4)
        ch_list_str = "\n".join(f"• {title}" for title, _ in chapters)
        add_formatted_text_run(c1, ch_list_str, base_font_size=9.0, base_color=RGBColor(0x37, 0x41, 0x51))

    sec_img_count = 0

    # 3. How to Read This Playbook: Role-Based Executive Reading Paths Page
    doc.add_page_break()
    rp_p = doc.add_paragraph()
    rp_p.paragraph_format.space_before = Pt(18)
    rp_p.paragraph_format.space_after = Pt(12)
    rp_run = rp_p.add_run("HOW TO READ THIS PLAYBOOK: ROLE-BASED EXECUTIVE READING PATHS")
    rp_run.font.name = 'Calibri'
    rp_run.font.size = Pt(18)
    rp_run.font.bold = True
    rp_run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)

    rp_desc = doc.add_paragraph()
    rp_desc.paragraph_format.space_after = Pt(12)
    add_formatted_text_run(rp_desc, "To maximize immediate operational impact, enterprise leaders and practice leads can follow role-customized reading pathways tailored to their specific functional domain:", base_font_size=10.5, base_color=RGBColor(0x37, 0x41, 0x51))

    rp_table = doc.add_table(rows=5, cols=3)
    rp_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(rp_table, color="D1D5DB", sz="4", val="single")

    r_hdr = rp_table.rows[0].cells
    set_cell_background(r_hdr[0], "1E3A8A")
    set_cell_background(r_hdr[1], "1E3A8A")
    set_cell_background(r_hdr[2], "1E3A8A")

    for i, h_text in enumerate(["Target Leadership Role", "Core Recommended Modules", "Key Focus"]):
        hp = r_hdr[i].paragraphs[0]
        hp.paragraph_format.space_before = Pt(5)
        hp.paragraph_format.space_after = Pt(5)
        add_formatted_text_run(hp, h_text, base_font_size=10, base_color=RGBColor(0xFF, 0xFF, 0xFF), base_bold=True)

    paths_data = [
        ("Enterprise Agile Coach & CoE Lead", "Part I, Part V, Part VI & Appendix C", "Framework scaling trade-offs, Lyssa Adkins coaching stances, Team Topologies, AI prompt engineering & 35-criteria maturity diagnostic."),
        ("Jira Data Center & Cloud Administrator", "Part II, Part III & Appendix B", "Hazelcast clustering, HikariCP tuning, Forge serverless apps, Atlassian Access SAML/SCIM, JSM Assets & JQL reference."),
        ("Azure DevOps & DevEx Platform Engineer", "Part IV, Part VI & Appendix B", "Azure Boards Inherited Process, Delivery Plans 2.0, Multi-Stage YAML Pipelines, DORA metrics & WIQL query translation."),
        ("VP of Engineering, CTO & Product Executive", "Part I, Part III, Part V & Appendix A", "Strategic OKRs to backlog line-of-sight, AI ethics & governance, RAG vector architectures, agentic MCP & prompt library.")
    ]

    for r_idx, (role, modules, focus) in enumerate(paths_data, 1):
        row_cells = rp_table.rows[r_idx].cells
        bg_col = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate([role, modules, focus]):
            set_cell_background(row_cells[c_idx], bg_col)
            cp = row_cells[c_idx].paragraphs[0]
            cp.paragraph_format.space_before = Pt(4)
            cp.paragraph_format.space_after = Pt(4)
            is_bold = (c_idx == 0)
            b_col = RGBColor(0x1E, 0x3A, 0x8A) if is_bold else RGBColor(0x37, 0x41, 0x51)
            add_formatted_text_run(cp, val, base_font_size=9.5, base_color=b_col, base_bold=is_bold)

    # 4. Enterprise Technology & AI Architectural Glossary Page
    doc.add_page_break()
    gl_p = doc.add_paragraph()
    gl_p.paragraph_format.space_before = Pt(18)
    gl_p.paragraph_format.space_after = Pt(12)
    gl_run = gl_p.add_run("ENTERPRISE TECHNOLOGY & AI ARCHITECTURAL GLOSSARY")
    gl_run.font.name = 'Calibri'
    gl_run.font.size = Pt(18)
    gl_run.font.bold = True
    gl_run.font.color.rgb = RGBColor(0x1E, 0x3A, 0x8A)

    gl_desc = doc.add_paragraph()
    gl_desc.paragraph_format.space_after = Pt(12)
    add_formatted_text_run(gl_desc, "An executive reference guide to core architectural, engineering, and AI terms referenced throughout this playbook:", base_font_size=10.5, base_color=RGBColor(0x37, 0x41, 0x51))

    gl_table = doc.add_table(rows=17, cols=2)
    gl_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(gl_table, color="D1D5DB", sz="4", val="single")

    g_hdr = gl_table.rows[0].cells
    set_cell_background(g_hdr[0], "1E3A8A")
    set_cell_background(g_hdr[1], "1E3A8A")

    for i, h_text in enumerate(["Architectural Term", "Executive & Engineering Definition"]):
        hp = g_hdr[i].paragraphs[0]
        hp.paragraph_format.space_before = Pt(5)
        hp.paragraph_format.space_after = Pt(5)
        add_formatted_text_run(hp, h_text, base_font_size=10, base_color=RGBColor(0xFF, 0xFF, 0xFF), base_bold=True)

    glossary_data = [
        ("Retrieval-Augmented Generation (RAG)", "AI architecture that grounds LLM responses by dynamically retrieving relevant internal enterprise data (Jira/ADO tickets, docs) into the prompt context."),
        ("Model Context Protocol (MCP)", "An open standard protocol for securely exposing enterprise data sources, tools, and prompt templates to AI model client applications."),
        ("ReAct Agent Pattern (Reason + Act)", "An autonomous agent execution loop where an LLM dynamically generates a Thought, executes a software Tool action, and evaluates system Observations."),
        ("Vector Embeddings & Cosine Similarity", "High-dimensional numerical representations of text capturing semantic intent; Cosine Similarity measures conceptual closeness between tickets."),
        ("HNSW Index (Vector Search)", "Hierarchical Navigable Small World algorithm enabling sub-millisecond approximate nearest neighbor (ANN) similarity searches across vector DBs."),
        ("Atlassian Forge", "Serverless FaaS application runtime executing custom app code inside Atlassian's secure cloud boundary with manifest OAuth scopes."),
        ("Atlassian Guard (Access) & SCIM", "Enterprise identity management tool enforcing SAML SSO, 2FA, and automated user provisioning via System for Cross-domain Identity Management."),
        ("Hazelcast Clustering (Jira DC)", "Embedded active-active distributed memory cache used in Jira Data Center for real-time node discovery, state sync, and cache distribution."),
        ("HikariCP Connection Pool", "High-performance JDBC database connection pool manager configured in Jira DC to optimize JVM thread database access under heavy load."),
        ("Asset Query Language (AQL)", "Relational query language used in Jira Service Management (JSM) Assets to filter and query IT CMDB object attributes and relationships."),
        ("Work Item Query Language (WIQL)", "SQL-like query language used in Azure DevOps to query work item fields, historical state changes (EVER), and linked link trees."),
        ("Little's Law (WIP = Throughput * Lead Time)", "Fundamental queuing theory equation proving that constraining Work-in-Progress (WIP) mathematically reduces average Lead Time."),
        ("Flow Efficiency", "Quantitative metric measuring active touch-time vs. total elapsed Lead Time: Flow Efficiency = (Active Time / Total Lead Time) * 100."),
        ("Monte Carlo Flow Simulation", "Probabilistic forecasting technique running thousands of trials against historical throughput to project completion dates at specified confidence bands (e.g., 85%)."),
        ("Team Topologies", "Organizational design framework structuring teams into 4 types (Stream-Aligned, Enabling, Complicated-Subsystem, Platform) to minimize cognitive load."),
        ("Socratic Prompting", "Prompt engineering technique framing AI as a reflective coach that asks probing diagnostic questions rather than issuing prescriptive commands.")
    ]

    for r_idx, (term, defn) in enumerate(glossary_data, 1):
        row_cells = gl_table.rows[r_idx].cells
        bg_col = "F8FAFC" if r_idx % 2 == 1 else "FFFFFF"
        for c_idx, val in enumerate([term, defn]):
            set_cell_background(row_cells[c_idx], bg_col)
            cp = row_cells[c_idx].paragraphs[0]
            cp.paragraph_format.space_before = Pt(4)
            cp.paragraph_format.space_after = Pt(4)
            is_bold = (c_idx == 0)
            b_col = RGBColor(0x1E, 0x3A, 0x8A) if is_bold else RGBColor(0x37, 0x41, 0x51)
            add_formatted_text_run(cp, val, base_font_size=9.0, base_color=b_col, base_bold=is_bold)

    # Build Parts & Chapters
    for part_title, chapters in CHAPTER_FILES:
        first_ch_in_part = True
        for ch_display_title, rel_path in chapters:
            full_path = os.path.join(BASE_DIR, rel_path)
            if not os.path.exists(full_path):
                print(f"Warning: File not found: {full_path}")
                continue

            file_basename = os.path.basename(rel_path)
            chapter_id = file_basename.split('_')[0]
            doc.add_page_break()

            if first_ch_in_part:
                part_p = doc.add_paragraph()
                part_p.paragraph_format.space_before = Pt(12)
                part_p.paragraph_format.space_after = Pt(14)
                p_run = part_p.add_run(part_title.upper())
                p_run.font.name = 'Calibri'
                p_run.font.size = Pt(13)
                p_run.font.bold = True
                p_run.font.color.rgb = RGBColor(0x4F, 0x46, 0xE5)
                first_ch_in_part = False

            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()

            lines = content.split('\n')
            table_lines = []
            in_table = False

            for line in lines:
                line_str = line.rstrip()

                if line_str.startswith("|"):
                    in_table = True
                    table_lines.append(line_str)
                    continue
                elif in_table:
                    in_table = False
                    flush_table(doc, table_lines)
                    table_lines = []

                if line_str.startswith("# "):
                    h = doc.add_paragraph()
                    h.paragraph_format.space_before = Pt(20)
                    h.paragraph_format.space_after = Pt(10)
                    add_formatted_text_run(h, line_str[2:].strip(), base_font_size=18, base_color=RGBColor(0x4F, 0x46, 0xE5))

                    if chapter_id in IMAGES:
                        img_path, caption = IMAGES[chapter_id]
                        if os.path.exists(img_path):
                            img_p = doc.add_paragraph()
                            img_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                            img_p.paragraph_format.space_before = Pt(14)
                            img_p.paragraph_format.space_after = Pt(4)
                            img_p.add_run().add_picture(img_path, width=Inches(5.8))
                            
                            cap_p = doc.add_paragraph()
                            cap_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                            c_run = cap_p.add_run(caption)
                            c_run.font.name = 'Calibri'
                            c_run.font.italic = True
                            c_run.font.size = Pt(9.0)
                            c_run.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)
                            cap_p.paragraph_format.space_after = Pt(14)

                elif line_str.startswith("## "):
                    h = doc.add_paragraph()
                    h.paragraph_format.space_before = Pt(16)
                    h.paragraph_format.space_after = Pt(8)
                    sec_title_text = line_str[3:].strip()
                    add_formatted_text_run(h, sec_title_text, base_font_size=14, base_color=RGBColor(0x1F, 0x29, 0x37))

                    sec_match = re.search(r'(\d+)\.(\d+)', sec_title_text)
                    if sec_match:
                        ch_num_val = int(sec_match.group(1))
                        sec_num_val = int(sec_match.group(2))
                        sec_img_file = os.path.join(SECTION_IMAGE_DIR, f"ch{ch_num_val:02d}_sec{sec_num_val}.png")
                        if os.path.exists(sec_img_file):
                            sec_img_p = doc.add_paragraph()
                            sec_img_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                            sec_img_p.paragraph_format.space_before = Pt(10)
                            sec_img_p.paragraph_format.space_after = Pt(4)
                            sec_img_p.add_run().add_picture(sec_img_file, width=Inches(5.8))
                            
                            s_cap_p = doc.add_paragraph()
                            s_cap_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                            s_c_run = s_cap_p.add_run(f"Figure {ch_num_val}.{sec_num_val}: Conceptual Architecture & Decision Workflow for {sec_title_text}")
                            s_c_run.font.name = 'Calibri'
                            s_c_run.font.italic = True
                            s_c_run.font.size = Pt(9.0)
                            s_c_run.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)
                            s_cap_p.paragraph_format.space_after = Pt(10)
                            sec_img_count += 1
                    elif "appA" in file_basename or "appB" in file_basename or "appC" in file_basename:
                        app_prefix = file_basename.split('_')[0]
                        app_sec_match = re.search(r'([A-C])\.(\d+)', sec_title_text)
                        if app_sec_match:
                            sec_num_val = int(app_sec_match.group(2))
                            app_img_file = os.path.join(SECTION_IMAGE_DIR, f"{app_prefix}_sec{sec_num_val}.png")
                            if os.path.exists(app_img_file):
                                app_img_p = doc.add_paragraph()
                                app_img_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                                app_img_p.paragraph_format.space_before = Pt(10)
                                app_img_p.paragraph_format.space_after = Pt(4)
                                app_img_p.add_run().add_picture(app_img_file, width=Inches(5.8))
                                
                                s_cap_p = doc.add_paragraph()
                                s_cap_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
                                s_c_run = s_cap_p.add_run(f"Figure {sec_title_text}: Conceptual Reference Diagram for {sec_title_text}")
                                s_c_run.font.name = 'Calibri'
                                s_c_run.font.italic = True
                                s_c_run.font.size = Pt(9.0)
                                s_c_run.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)
                                s_cap_p.paragraph_format.space_after = Pt(10)
                                sec_img_count += 1

                elif line_str.startswith("### "):
                    h = doc.add_paragraph()
                    h.paragraph_format.space_before = Pt(12)
                    h.paragraph_format.space_after = Pt(6)
                    add_formatted_text_run(h, line_str[4:].strip(), base_font_size=12, base_color=RGBColor(0x37, 0x41, 0x51))

                elif line_str.startswith("> "):
                    callout_text = line_str[2:].strip()
                    if callout_text.startswith('*') and callout_text.endswith('*'):
                        p = doc.add_paragraph()
                        p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                        p.paragraph_format.space_before = Pt(4)
                        p.paragraph_format.space_after = Pt(12)
                        add_formatted_text_run(p, callout_text[1:-1].strip(), base_font_size=12, base_color=RGBColor(0x4F, 0x46, 0xE5), base_italic=True)
                    else:
                        title = "EXECUTIVE COACHING GUARDRAIL"
                        if "Answer Key" in callout_text or "Correct Answer" in callout_text:
                            title = "ANSWER KEY & SOCRATIC RATIONALE"
                            callout_text = callout_text.replace("**Answer Key & Socratic Rationale**:", "").replace("Answer Key & Socratic Rationale:", "").strip()
                        elif "KEY TAKEAWAY" in callout_text:
                            title = "KEY STRATEGIC TAKEAWAY"
                        elif "SOCRATIC" in callout_text or "INQUIRY" in callout_text:
                            title = "SOCRATIC COACHING INQUIRY"
                        add_callout_box(doc, callout_text, title=title)

                elif line_str.startswith("* ") or line_str.startswith("- "):
                    bp = doc.add_paragraph(style='List Bullet')
                    bp.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                    bp.paragraph_format.space_after = Pt(4)
                    add_formatted_text_run(bp, line_str[2:].strip(), base_font_size=11, base_color=RGBColor(0x1F, 0x29, 0x37))

                elif line_str.strip() != "":
                    p = doc.add_paragraph()
                    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
                    p.paragraph_format.space_after = Pt(8)
                    p.paragraph_format.line_spacing = 1.2
                    add_formatted_text_run(p, line_str.strip(), base_font_size=11, base_color=RGBColor(0x1F, 0x29, 0x37))

            # Flush remaining table
            if in_table and table_lines:
                flush_table(doc, table_lines)
                table_lines = []
                in_table = False

    out_path = os.path.join(BASE_DIR, "The_AI_Augmented_Enterprise_Agile_Coach.docx")
    try:
        doc.save(out_path)
        print(f"Successfully generated Master Executive Cover Word manuscript at: {out_path}")
    except PermissionError:
        out_path_alt = os.path.join(BASE_DIR, "The_AI_Augmented_Enterprise_Agile_Coach_v2.docx")
        doc.save(out_path_alt)
        print(f"Primary file was locked by Word. Successfully saved to: {out_path_alt}")

if __name__ == "__main__":
    create_word_manuscript()
