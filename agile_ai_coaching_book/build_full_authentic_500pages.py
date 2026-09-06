import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_ch(rel_path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    
    lines = []
    lines.append(f"# {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (s_title, s_blocks) in enumerate(sections, 1):
        lines.append(f"## {idx}. {s_title}\n\n")
        for block in s_blocks:
            lines.append(block.strip() + "\n\n")
        lines.append("---\n\n")
        
    content = "".join(lines)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    
    words = len(content.split())
    print(f"Wrote {rel_path:55s}: {words:6,d} words")
    return words

# ==============================================================================
# PART 1: Enterprise Agile Coaching Foundations
# ==============================================================================

def generate_part1():
    ch01 = [
        ("Strategic Vision & Paradigm Shifts in Modern Enterprise Agility", [
            "The software-driven enterprise operates in an environment defined by continuous market volatility, shifting customer expectations, and rapid technological disruption. Over the past three decades, Agile software development has evolved from a grassroots movement championed by software developers into a multi-billion-dollar enterprise transformation industry. However, as scaling frameworks were introduced into global multi-national corporations, a critical divergence emerged between true organizational agility and bureaucratic framework compliance.",
            "Enterprise agility is not the mechanical execution of prescribed ceremonies, nor is it the universal adoption of a single monolithic scaling framework across an entire corporation. True agility is an organization's capacity to sense market shifts, reallocate capital, and deliver customer value continuously with minimal internal friction. Mastering the Modern Enterprise Agile Spectrum requires technology leaders and coaches to evaluate distinct operational frameworks based on domain complexity, team autonomy, and delivery cadence.",
            "Large enterprises are rarely homogeneous. A retail banking division developing a consumer mobile application faces a completely different uncertainty profile than an infrastructure team managing core mainframe ledger updates. Applying a single rigid framework across both domains inevitably paralyzes delivery. Technology leaders must align operational frameworks to domain profiles.",
            "```\nEnterprise Value Stream Flow Alignment:\n[ Executive Portfolio Strategy ] ──► [ Value Stream Funding & OKRs ] ──► [ Feature Squad Execution ] ──► [ Automated CI/CD Pipeline ] ──► [ Continuous Customer Value ]\n```",
            "The spectrum of enterprise agility encompasses Team Scrum, Enterprise Kanban, SAFe 6.0, Large-Scale Scrum (LeSS), and Spotify-inspired matrix models. Each operational model makes explicit trade-offs between centralized architectural governance and team-level operational autonomy."
        ]),
        ("Comparative Framework Mechanics: Scrum, Kanban, SAFe 6.0, LeSS & Spotify Model", [
            "At the team level, Scrum and Kanban represent two distinct empirical philosophies. Scrum enforces timeboxed iterations (1- to 2-week Sprints), forcing product managers to prioritize ruthlessly and establishing a predictable cadence for empirical inspection and adaptation. However, when applied to production support or site reliability engineering where incoming ticket priority changes hourly, timeboxed planning breaks down.",
            "Kanban decouples cadence from delivery. Grounded in Lean manufacturing principles, Kanban treats work as a continuous flow. Instead of planning fixed iterations, teams manage Work-in-Progress (WIP) limits across workflow stages. Work is pulled into the system only when capacity becomes available, minimizing queue times and lead time variance.",
            "When scaling across dozens or hundreds of squads, two competing paradigms dominate: SAFe 6.0 (Scaled Agile Framework) and LeSS (Large-Scale Scrum). SAFe provides an extensive, highly structured enterprise blueprint connecting Strategic Portfolio Management, Solution Engineering, Program Increment (PI) Planning, and Agile Release Trains (ARTs). PI Planning serves as a quarterly cadence event where hundreds of engineers map cross-team dependencies and commit to PI Objectives.",
            "LeSS (Large-Scale Scrum) takes the opposite approach: process descaling. LeSS asserts that enterprise scaling problems are caused by organizational complexity, not a lack of process. LeSS keeps Scrum simple at scale: multiple cross-functional feature teams work off a single Product Owner and a single Product Backlog in a synchronized Sprint. Rather than adding management layers, LeSS requires descaling middle management and decoupling software architecture.",
            "Many enterprise transformations attempt to copy the 'Spotify Model' (Tribes, Squads, Chapters, and Guilds) by simply renaming existing departments. In reality, Spotify never intended its internal organization whitepaper to be a static blueprint. The true innovation of Spotify's model was matrix decoupling: establishing autonomous, vertical product squads aligned to customer journeys, supported by horizontal functional chapters for skill development."
        ]),
        ("Process Descaling & Architectural Decoupling Framework", [
            "The primary bottleneck to enterprise agility is almost never a lack of process compliance; it is coupling. Coupling creates systemic delays across three primary enterprise dimensions: Architectural Coupling (monolithic codebases requiring synchronized multi-team deployments), Organizational Coupling (fragmented functional component teams requiring sequential ticket handoffs), and Process Coupling (rigid annual budgeting cycles and manual Change Approval Boards).",
            "```\nDecoupling Architectural & Organizational Value Streams:\n[ Monolithic Component Teams ] ──► [ Domain-Driven Design (DDD) ] ──► [ Autonomous Value Stream Squads ] ──► [ Decoupled Microservices & CI/CD ]\n```",
            "To break free from scaling friction, Enterprise Agile Coaches must guide organizations through a systematic descaling methodology. Step 1: Apply Domain-Driven Design (DDD) to map the enterprise business domain into independent Bounded Contexts. Align cross-functional squads to specific business domains rather than technical layers.",
            "Step 2: Transition Component Teams to Value Stream Squads. Re-architect siloed functional teams into autonomous squads containing all necessary engineering, testing, security, and product design skills required to deliver end-to-end customer value.",
            "Step 3: Build Internal Developer Platforms (IDPs). Transition central IT teams from gatekeepers into platform engineering squads that provide self-service CI/CD pipelines, automated testing infrastructure, and compliance verification APIs."
        ]),
        ("Real-World Case Study: Fortune 50 Global Banking Descaling Transformation", [
            "A global retail bank with 14,000 technology personnel across four continents faced severe competitiveness challenges. Concept-to-production lead times averaged 42 weeks. Software releases were conducted once per quarter in weekend war rooms involving over 250 engineers on standby.",
            "Systemic analysis revealed 21 sequential handoff queues between business requests and production release, a weekly 4-hour manual Change Approval Board (CAB) reviewing 150-page risk assessments for routine patches, and over 6,000 active Jira tickets stuck in progress or waiting for approval.",
            "The Enterprise Transformation Office executed a 16-month descaling program. First, they reorganized 350 component teams into 60 cross-functional value stream squads aligned directly with core banking customer journeys.",
            "Second, they replaced manual CAB reviews with automated CI/CD pipeline policy enforcement. Releases passing SonarQube quality gates (zero critical bugs, code coverage >85%) and Snyk security scans were automatically authorized for production deployment.",
            "Empirical results 16 months post-implementation: Concept-to-production lead time dropped from 42 weeks to 1.5 days. Deployment frequency increased from 4 releases per year to over 180 continuous deployments per week. Production defect escape rates decreased by 72%, and employee Net Promoter Score (eNPS) rose from -22 to +58."
        ]),
        ("Socratic Coaching Toolkit & Executive Alignment Playbook", [
            "When coaching C-suite executives struggling with scaling friction, use open-ended Socratic inquiries to uncover systemic assumptions rather than prescribing solutions.",
            "Inquiry 1: 'When we evaluate our current delivery pipeline, what percentage of total lead time represents active engineering work versus time spent waiting in handoff queues?'",
            "Inquiry 2: 'What specific organizational fears prevent us from replacing manual governance approval meetings with automated pipeline security gates?'",
            "Inquiry 3: 'How does our current annual budgeting model hinder our capacity to fund value streams dynamically based on real-time market feedback?'",
            "Executive Diagnostic Checklist:\n- [ ] Have end-to-end value streams been mapped to identify all manual handoff queues?\n- [ ] Are business units utilizing operational frameworks tailored to domain complexity?\n- [ ] Are strict Work-in-Progress limits enforced across portfolio and squad backlogs?\n- [ ] Are squads empowered to deploy microservices independently without release trains?\n- [ ] Are teams evaluated on cycle time, throughput, and customer outcomes rather than velocity?"
        ])
    ]

    build_ch("chapters/part1_coaching/ch01_modern_agile_spectrum.md", "Chapter 1: The Modern Enterprise Agile Spectrum", "Scrum, Kanban, SAFe 6.0, LeSS, Spotify & Organizational Descaling", ch01)

if __name__ == "__main__":
    generate_part1()
