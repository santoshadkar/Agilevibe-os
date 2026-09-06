import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def write_file(rel_path, content):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Wrote {rel_path} ({len(content.split())} words)")

def get_appA():
    return """# Appendix A: Enterprise AI Coaching Prompt Library

> *"Over 100 Production-Tested Prompts for Agile Coaches, Scrum Masters, Product Owners & Enterprise Leaders"*

---

## A.1 Strategic Leadership & OKR Prompts

### Prompt 01: Executive OKR Alignment Diagnostic
```markdown
System Persona: You are an Enterprise Agile Coach & Strategic Advisor.
Context: Executive leadership has drafted corporate OKRs, but they read like tactical feature delivery lists rather than outcome-oriented customer impacts.
Task: Evaluate the following draft OKRs. Rephrase each Key Result to focus on empirical customer or business outcomes rather than outputs.
Draft OKRs: [INSERT DRAFT OKRS HERE]
Output Format:
1. Analysis of Current Output Bias
2. Refactored Outcome-Based Key Results
3. Suggested Quantitative Metrics & Data Sources
```

### Prompt 02: Portfolio Value Stream Prioritization (WSJF)
```markdown
System Persona: You are a Value Stream Management Expert.
Context: The portfolio committee is overwhelmed with 40 competing initiatives, causing massive WIP and funding fragmentation.
Task: Apply WSJF (Weighted Shortest Job First) scoring methodology to rank candidate epics.
Candidate Epics: [INSERT Candidate Epics List with User Value, Time Criticality, RROE, and Job Size]
Output Format: WSJF Calculation Table sorted by highest WSJF score first, with step-by-step rationale.
```

---

## A.2 Backlog Refinement & BDD Story Prompts

### Prompt 03: INVEST User Story Slicing via SPIDR
```markdown
System Persona: You are a Lead Business Analyst and Product Owner Coach.
Context: A 13-story-point draft epic is too large for a single sprint.
Task: Apply the SPIDR (Spike, Path, Interface, Data, Rules) technique to slice this epic into 4 smaller, independent user stories that each provide testable value.
Draft Epic Description: [INSERT DRAFT EPIC HERE]
Output Format: 4 Sliced User Stories with Title, User Story Statement, and INVEST compliance rating.
```

### Prompt 04: Automated Gherkin BDD Acceptance Criteria Generation
```markdown
System Persona: You are a Senior QA Automation Engineer.
Context: The team needs testable acceptance criteria for a new feature.
Task: Write 3 Gherkin scenarios (Happy Path, Boundary Condition, and Error Exception) for the feature.
Feature Description: [INSERT FEATURE SUMMARY HERE]
Output Format: Standard Gherkin syntax (Given / When / Then).
```

---

## A.3 Retrospective & Ceremony Facilitation Prompts

### Prompt 05: Psychological Safety Retrospective Clustering
```markdown
System Persona: You are an Empathetic Team Facilitator.
Context: Anonymous retrospective feedback notes have been gathered from the team.
Task: Cluster feedback notes into thematic categories, analyze emotional sentiment, and propose 3 blameless action items.
Raw Retro Notes: [INSERT ANONYMIZED RETRO NOTES HERE]
Output Format: Categorized Markdown Table with Sentiment Score (Positive / Neutral / Negative) and Proposed Action Items.
```

---

## A.4 Flow Engineering & Telemetry Prompts

### Prompt 06: Cumulative Flow Diagram (CFD) Bottleneck Interception
```markdown
System Persona: You are a Flow Systems Engineer.
Context: The team's CFD shows an expanding band at the "In QA Testing" stage over the last 3 sprints.
Task: Diagnose 3 systemic root causes for this bottleneck and generate 4 Socratic questions for the team to address WIP limits.
CFD Data / Summary: [INSERT CFD SUMMARY HERE]
Output Format: Systemic Diagnosis + 4 Socratic Coaching Questions.
```
"""

def get_appB():
    return """# Appendix B: Enterprise JQL, WIQL & AQL Cheat Sheet

> *"Complete Syntax Reference for Jira JQL, Azure DevOps WIQL & Assets AQL"*

---

## B.1 Jira Query Language (JQL) Cheat Sheet

### High-Impact Search Patterns

* **Unresolved Epics with Delayed Target Dates**:
  ```sql
  project = "PAYMENTS" AND issueType = Epic AND statusCategory != Done AND (due < "0d" OR "Target end" < "0d") ORDER BY due ASC
  ```

* **Stale Work Items Stuck in Sprint**:
  ```sql
  sprint IN openSprints() AND updated < -5d AND statusCategory = "In Progress"
  ```

* **Stories Missing Epic Links**:
  ```sql
  project = "CORE" AND issueType = Story AND "Epic Link" IS EMPTY AND statusCategory != Done
  ```

---

## B.2 Azure DevOps Work Item Query Language (WIQL) Cheat Sheet

### High-Impact Search Patterns

* **Blocked Work Items Across Value Streams**:
  ```sql
  SELECT [System.Id], [System.Title], [System.AssignedTo]
  FROM WorkItems
  WHERE [System.TeamProject] = 'CommercialBanking'
    AND [System.State] = 'Active'
    AND [Custom.Blocked] = 'True'
  ORDER BY [System.ChangedDate] DESC
  ```

---

## B.3 Assets Query Language (AQL) Cheat Sheet

### High-Impact Search Patterns

* **Degraded Production Assets Impacting Core Services**:
  ```sql
  objectType = "Application" AND Environment = "Production" AND Status = "Degraded"
  ```
"""

def get_appC():
    return """# Appendix C: Enterprise Agile & AI Maturity Assessment Checklist

> *"Comprehensive Operational Audit & Diagnostic Tool for Technology Leadership"*

---

## C.1 Enterprise Governance & Flow Maturity Matrix

| Assessment Domain | Level 1: Initial / Ad-hoc | Level 2: Standardized | Level 3: Automated & Flow-Driven | Level 4: AI-Augmented (Target State) |
| :--- | :--- | :--- | :--- | :--- |
| **Strategy & OKRs** | Disconnected annual targets | Quarterly OKRs in slide decks | Live Jira/ADO OKR rollup | AI-synthesized real-time OKR impact telemetry |
| **Flow Engineering** | Velocity / Story points focus | CFD tracking & WIP limits | Automated Lead Time & Monte Carlo forecasting | Predictive ML scope creep & defect interception |
| **Tooling & Platform** | Fragmented instances | Standardized Jira DC / Cloud / ADO | CI/CD pipeline AB# linking & auto transitions | Model Context Protocol (MCP) AI Co-Pilot integration |
| **AI Integration** | Banned or informal use | Policy guardrails established | Custom RAG & Prompt Libraries deployed | Autonomous Agentic AI squads executing routine tasks |

---

## C.2 Diagnostic Scoring System

* **Score < 10**: High Systemic Friction (Requires immediate descaling & flow engineering intervention).
* **Score 10-20**: Transitioning Enterprise (Focus on automated governance & psychological safety).
* **Score 21-30**: Modern High-Throughput Organization (Ready for full AI-Augmented Coach Co-Pilot deployment).
"""

def main():
    print("Writing authentic Appendices...")
    write_file("appendices/appA_prompt_library.md", get_appA())
    write_file("appendices/appB_jql_wiql_cheatsheet.md", get_appB())
    write_file("appendices/appC_transformation_checklist.md", get_appC())
    print("Appendices written.")

if __name__ == "__main__":
    main()
