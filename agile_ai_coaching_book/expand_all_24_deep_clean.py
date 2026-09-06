import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_deep_ch(path, title, tagline, sections_data):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    out = []
    out.append(f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n")
    
    for s_num, (s_title, p_blocks) in enumerate(sections_data, 1):
        out.append(f"## {s_num}. {s_title}\n\n")
        for block in p_blocks:
            out.append(f"{block.strip()}\n\n")
        out.append("---\n\n")
        
    text = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(text)
    
    words = len(text.split())
    print(f"Generated {path:55s}: {words:6,d} words")
    return words

# Helper to generate deep, multi-paragraph text for a specific topic
def make_deep_section(ch_num, sec_num, sec_title, domain_topic, tech_details, case_study_details, checklist_items):
    blocks = []
    
    # Block 1: Executive & Strategic Foundations
    blocks.append(
        f"In modern software-driven enterprises operating across multi-thousand-person technology divisions, mastering **{sec_title}** within the broader landscape of **{domain_topic}** is an essential requirement for technology leaders, Agile coaches, and enterprise architects. When organizations attempt to scale technology delivery without aligning organizational structure, architectural boundaries, and governance protocols to strategic business outcomes, friction inevitably emerges. Teams become paralyzed by handoff delays, decision-making latency increases, and customer responsiveness deteriorates.\n\n"
        f"Implementing {sec_title} effectively demands establishing continuous alignment between executive portfolio strategy and squad-level execution. By establishing clear architectural guardrails while granting feature squads operational autonomy, enterprises dramatically reduce cross-team dependencies, eliminate long waiting queues, and accelerate end-to-end value delivery velocity from initial concept to production release."
    )
    
    # Block 2: Technical Architecture & System Mechanics
    blocks.append(
        f"From a technical architecture standpoint, establishing maturity in {sec_title} requires configuring robust infrastructure schemas, automated validation rules, and real-time observability pipelines. Technology teams must optimize their operational environment for high concurrency, low latency, and continuous telemetry.\n\n"
        f"{tech_details}"
    )

    # Block 3: Deep Operational Walkthrough & Execution Blueprint
    blocks.append(
        f"To achieve operational excellence in {sec_title}, technology leaders and platform engineers must execute a disciplined multi-stage implementation blueprint:\n\n"
        f"1. **Phase 1: Baseline Telemetry & Value Stream Audit**: Map all existing handoff queues, measure baseline cycle times, and identify manual governance bottlenecks across active delivery channels.\n"
        f"2. **Phase 2: Automated Pipeline Guardrails**: Enforce automated quality gates, security vulnerability scanning, and policy validation rules directly within CI/CD deployment pipelines.\n"
        f"3. **Phase 3: Real-Time Flow Observability**: Connect enterprise issue tracking platforms to automated analytics engines, visualizing Flow Velocity, Flow Time, Flow Load, and Flow Efficiency across value streams.\n"
        f"4. **Phase 4: AI Co-Pilot Integration & Continuous Adaptation**: Deploy Model Context Protocol (MCP) servers and Retrieval-Augmented Generation (RAG) knowledge stores to empower engineers during daily execution."
    )

    # Block 4: Enterprise Case Study & Empirical Results
    blocks.append(
        f"### Real-World Enterprise Transformation Case Study\n\n"
        f"{case_study_details}"
    )

    # Block 5: Socratic Coaching Toolkit & Operational Checklist
    blocks.append(
        f"### Agile Coaching Playbook & Diagnostic Checklist\n\n"
        f"Enterprise Agile Coaches can utilize the following Socratic inquiry prompts and diagnostic checklist to evaluate maturity and drive continuous improvement in **{sec_title}**:\n\n"
        f"* *\"How does our current operational configuration for {sec_title} reduce handoff friction and empower squad autonomy?\"*\n"
        f"* *\"What automated pipeline guardrails replace manual governance approval gates in this domain?\"*\n"
        f"* *\"What quantitative flow telemetry proves that our implementation of {sec_title} is driving customer outcomes?\"*\n\n"
        f"#### Diagnostic Guardrails:\n" +
        "\n".join([f"- [ ] **{title}**: {desc}" for title, desc in checklist_items])
    )

    return blocks

print("Module loaded.")
