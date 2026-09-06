import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_chapter(ch_num, title, tagline, part, sections_data):
    lines = []
    lines.append(f"# Chapter {ch_num}: {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (sec_title, content) in enumerate(sections_data, 1):
        lines.append(f"## {ch_num}.{idx} {sec_title}\n\n")
        lines.append(content.strip() + "\n\n")
        lines.append("---\n\n")
        
    return "".join(lines)

def generate_part2_ext():
    print("Writing Part II (Ch 7 & 8)...")
    
    # Chapter 7
    ch07_sections = [
        ("Multi-Level Portfolio Hierarchy & Advanced Roadmaps", """
Enterprise portfolio management in Jira Data Center requires extending default issue hierarchies beyond `Epic -> Story -> Sub-task`. Advanced Roadmaps (formerly Portfolio for Jira) enables multi-level enterprise hierarchy mapping:

```
Jira Portfolio Multi-Level Hierarchy Architecture:
[ Strategic Theme ] (Level 3 - Executive OKRs)
       │
       ▼
[ Initiative / Portfolio Epic ] (Level 2 - Value Stream Portfolio)
       │
       ▼
[ Program Epic ] (Level 1 - Release Train / Squad Epic)
       │
       ▼
[ Story / Task / Bug ] (Level 0 - Squad Backlog Execution)
```

### Configuring Hierarchy Levels in Advanced Roadmaps
1. Navigate to **Jira Administration -> Settings -> Advanced Roadmaps Hierarchy Configuration**.
2. Add custom hierarchy levels mapped to custom issue types (e.g., Level 3 = "Strategic Theme", Level 2 = "Initiative").
3. Ensure Parent Link field is enabled on target screens.
"""),
        ("Capacity Planning, Target Dates & Scenario Modeling", """
Advanced Roadmaps dynamically calculates portfolio schedules based on three variables:
1. **Target Dates**: Fixed milestones vs. calculated estimate ranges.
2. **Team Capacity**: Weekly velocity / capacity in story points or hours per team.
3. **Dependency Mapping**: Sequential dependencies across cross-project deliverables.

### Scenario Planning: Uncommitted vs. Committed Schedules
Advanced Roadmaps provides a sandbox environment allowing Portfolio Managers to model **Best Case**, **Worst Case**, and **Target Case** scenarios before committing changes to live Jira issues.
"""),
        ("Case Study & Operational Checklist", """
### Aerospace Defense Enterprise Portfolio Alignment
Aligned 120 engineering teams across 15 initiatives in Advanced Roadmaps, eliminating **$14M in redundant duplicate epic investments**.

### Chapter 7 Diagnostic Checklist
- [ ] **Hierarchy Standardization**: Is the portfolio hierarchy (Initiative -> Epic -> Story) applied consistently across all enterprise business units?
- [ ] **Parent Link Field**: Is Parent Link correctly configured on Initiative issue types?
- [ ] **Capacity Baselines**: Are team velocity baselines updated bi-weekly for accurate scenario forecasting?
- [ ] **Dependency Alerts**: Are cross-team red line dependency conflicts reviewed in weekly portfolio synchronization meetings?
""")
    ]

    # Chapter 8
    ch08_sections = [
        ("JQL Mastery & Advanced Functions for Enterprise Queries", """
Jira Query Language (JQL) is the query language of enterprise delivery. Beyond basic searches, mastering advanced functions enables deep analytical filtering.

```sql
-- Advanced JQL Query: High-Risk Escalated Epics with Delayed Dependencies
project IN ("TRANSFORM", "PAYMENTS") 
  AND issueType = Epic 
  AND status NOT IN ("Closed", "Done") 
  AND (due < "0d" OR "Target end" < "0d") 
  AND issueFunction IN hasSubtasks() 
  AND issueFunction IN subtasksOf('status = "Blocked"') 
ORDER BY priority DESC, created ASC
```

### High-Impact JQL Query Patterns for Agile Coaches

1. **Stale Tickets in Active Sprint**:
   `sprint IN openSprints() AND updated < -5d AND statusCategory != Done`
2. **Unlinked Dependencies**:
   `issueType = Story AND status = "In Progress" AND issueFunction IN missingLinkedIssues("is blocked by")`
"""),
        ("Jira Data Center REST API v2 Integration", """
Automating Jira DC reporting via Python REST API integration:

```python
# Enterprise Jira Data Center REST API Client
import requests
import json
import os

class JiraDCClient:
    def __init__(self, base_url, api_token):
        self.base_url = base_url.rstrip('/')
        self.headers = {
            'Authorization': f'Bearer {api_token}',
            'Content-Type': 'application/json'
        }

    def execute_jql(self, jql_query, max_results=100):
        url = f"{self.base_url}/rest/api/2/search"
        payload = {
            "jql": jql_query,
            "maxResults": max_results,
            "fields": ["summary", "status", "assignee", "updated", "priority"]
        }
        response = requests.post(url, headers=self.headers, json=payload)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Jira API Error [{response.status_code}]: {response.text}")

if __name__ == "__main__":
    client = JiraDCClient("https://jira.internal.enterprise.com", os.getenv("JIRA_DC_TOKEN", "demo-token"))
    print("Jira DC REST API Client Initialized.")
```
"""),
        ("Case Study & Operational Checklist", """
### Retail Tech Power BI Jira Reporting Pipeline
Built automated ETL pipeline connecting Jira REST APIs to Power BI, saving **120 hours/month** of manual slide deck preparation for executive reviews.

### Chapter 8 Diagnostic Checklist
- [ ] **JQL Optimization**: Are JQL queries structured with indexed fields (project, issueType, status) first to optimize DB performance?
- [ ] **API Token Security**: Are Personal Access Tokens (PATs) rotated every 90 days with minimal necessary scopes?
- [ ] **Rate Limiting**: Are automated scripts configured to handle HTTP 429 rate limit responses gracefully?
- [ ] **Data Export Pipelines**: Are automated REST API exports scheduled during off-peak hours?
""")
    ]

    ch07_text = build_chapter(7, "Portfolio Management & Advanced Roadmaps in Jira DC", "Multi-Level Hierarchy, Capacity & Scenario Planning", "Part II", ch07_sections)
    ch08_text = build_chapter(8, "Data Center REST APIs, JQL Mastery & Reporting", "Advanced JQL Queries, REST API v2 & Power BI Exports", "Part II", ch08_sections)

    with open(os.path.join(BASE_DIR, "chapters/part2_jira_dc/ch07_portfolio_management_dc.md"), "w", encoding="utf-8") as f:
        f.write(ch07_text)
    with open(os.path.join(BASE_DIR, "chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md"), "w", encoding="utf-8") as f:
        f.write(ch08_text)
    print("Part II (Ch 7 & 8) complete.")

if __name__ == "__main__":
    generate_part2_ext()
