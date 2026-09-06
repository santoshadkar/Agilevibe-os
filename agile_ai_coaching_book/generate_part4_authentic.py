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

def generate_part4():
    print("Writing Part IV (Azure DevOps Enterprise Execution) chapters...")

    # Chapter 13
    ch13_sections = [
        ("Azure Boards Enterprise Process Architecture", """
Azure DevOps (ADO) structures enterprise delivery using Process Templates (Agile, Scrum, CMMI, and Basic). In enterprise organizations, mastering **Inherited Processes** allows platform teams to customize Work Item Types (WITs), state machines, and validation rules centrally.

```
Azure DevOps Enterprise Organization Structure:
[ Azure DevOps Organization ]
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
[ Project: Commercial Banking ]   [ Project: Wealth Management ]
       │                                 │
       ▼                                 ▼
[ Inherited Enterprise Process ]  [ Inherited Enterprise Process ]
       │                                 │
       ├─────────────────────────────────┤
       ▼                                 ▼
[ Custom Work Item: Feature Epic ] [ Custom Rules: Require Security Review ]
```
"""),
        ("Custom Rules & Work Item State Transitions", """
Azure Boards permits creating automated rules attached to state transitions:
* **Rule 1**: When a Work Item state transitions to "Resolved", enforce that the "Bypass Reason" or "Resolution" field is populated.
* **Rule 2**: When a User Story state transitions to "Active", automatically set the target Parent Feature state to "In Progress".
"""),
        ("Case Study & Operational Checklist", """
### Retail Bank Azure Boards Standardization
Standardized 80 Azure DevOps projects under a single Inherited Process, reducing governance audit prep time from 3 weeks to **zero**.

### Chapter 13 Diagnostic Checklist
- [ ] **Inherited Process**: Are all enterprise projects mapped to an Inherited Process for centralized rule management?
- [ ] **Area Path Hierarchy**: Are Area Paths structured to reflect value streams rather than static team org charts?
- [ ] **State Validation Rules**: Are state transitions enforced with custom field validations?
""")
    ]

    # Chapter 14
    ch14_sections = [
        ("Delivery Plans 2.0 & Multi-Team Dependency Management", """
Delivery Plans 2.0 in Azure DevOps provides a real-time portfolio timeline across multiple teams, projects, and backlog levels.

```
Delivery Plans 2.0 Dependency Visualizer:
Team Alpha  [ Epic: Mobile Login API v2 ] ──────────┐
                                                    │ (Dependency Link)
                                                    ▼
Team Beta                           [ Feature: OAuth Gateway Refactor ]
```

### WIQL (Work Item Query Language) Syntax Mastery

```sql
-- Advanced WIQL Query: Find All Unresolved Dependencies Across Projects
SELECT
    [System.Id],
    [System.Title],
    [System.State],
    [System.AssignedTo]
FROM WorkItemLinks
WHERE
    (Source.[System.TeamProject] = 'CommercialBanking' AND Source.[System.WorkItemType] = 'Product Backlog Item')
    AND ([System.Links.LinkType] = 'System.LinkTypes.Dependency-Forward')
    AND (Target.[System.State] != 'Done')
ORDER BY [System.Id] MODE (Recursive)
```
"""),
        ("Case Study & Operational Checklist", """
### Insurance Enterprise ADO Portfolio Rollup
Configured Delivery Plans 2.0 across 45 teams, reducing cross-team release blocking incidents by **78%**.

### Chapter 14 Diagnostic Checklist
- [ ] **WIQL Governance**: Are standard WIQL queries saved in Shared Queries for cross-team dashboard transparency?
- [ ] **Rollup Columns**: Are portfolio backlog views configured with automated story point / task completion rollup progress bars?
- [ ] **Dependency Links**: Are teams trained to use explicit "Predecessor / Successor" link types instead of generic "Related"?
""")
    ]

    # Chapter 15
    ch15_sections = [
        ("Azure Pipelines YAML Integration & AB# Auto-Linking", """
Connecting Azure Repos, Pipelines, and Boards enables continuous traceability. By referencing work item IDs in commit messages (`AB#12345`), Azure DevOps automatically links commits, PRs, and build artifacts to the target work item.

```yaml
# Production Azure Pipelines (azure-pipelines.yml) with Automated Board Linking & DORA Telemetry
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UsePythonVersion@0
  inputs:
    versionSpec: '3.11'

- script: |
    python -m pip install --upgrade pip
    pip install pytest pytest-cov
    pytest --cov=src --cov-report=xml
  displayName: 'Run Unit Tests & Measure Test Coverage'

- task: PublishCodeCoverageResults@1
  inputs:
    codeCoverageTool: 'Cobertura'
    summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/coverage.xml'
```
"""),
        ("DORA Metrics Automation in Azure DevOps", """
1. **Deployment Frequency**: Count of successful pipeline deployments to Production environment per day/week.
2. **Lead Time for Changes**: Elapsed time from commit timestamp to production deployment completed.
3. **Change Failure Rate**: Percentage of deployments requiring immediate hotfix / rollback.
4. **Mean Time to Restore (MTTR)**: Time elapsed from production Incident created to Incident resolved state.
"""),
        ("Case Study & Operational Checklist", """
### Energy Enterprise DORA Acceleration
Implemented automated YAML pipelines with AB# linking, driving Deployment Frequency from once per month to **18 times per day**.

### Chapter 15 Diagnostic Checklist
- [ ] **AB# Enforcement**: Is branch policy configured to require work item linking on all Pull Requests?
- [ ] **YAML Templates**: Are CI/CD pipelines standardized using shared YAML pipeline templates?
- [ ] **DORA Dashboard**: Are DORA metrics visualized live on Azure DevOps dashboards?
""")
    ]

    # Chapter 16
    ch16_sections = [
        ("Jira vs. Azure DevOps Coexistence & Migration Architecture", """
Large enterprise acquisitions or multi-division IT departments frequently operate dual-stack environments: Jira Software and Azure DevOps coexisting simultaneously.

```
Jira vs Azure DevOps Dual-Stack Synchronizer Architecture:
┌────────────────────┐     (Webhook Events)     ┌────────────────────────┐
│ Jira Cloud / DC    │ ───────────────────────► │ Synchronization Engine │
│ (Product Backlog)  │ ◄─────────────────────── │ (Exalate / Custom Sync)│
└────────────────────┘                          └───────────┬────────────┘
                                                            │
                                                            ▼ (REST API)
                                                ┌────────────────────────┐
                                                │ Azure DevOps Boards    │
                                                │ (Engineering Pipelines)│
                                                └────────────────────────┘
```

### Feature Comparison Matrix

| Capability | Jira Software (Cloud / DC) | Azure DevOps (Boards / Pipelines) |
| :--- | :--- | :--- |
| **Backlog Flexibility** | Extremely high custom field & workflow freedom | Standardized inherited process templates |
| **CI/CD Integration** | Requires third-party plugins or webhooks | Native out-of-the-box pipeline integration |
| **Query Engine** | JQL (Flexible, string-based) | WIQL (SQL-like syntax) |
| **Ecosystem Marketplace** | Atlassian Marketplace (2,500+ apps) | Visual Studio Marketplace |
"""),
        ("Case Study & Operational Checklist", """
### Global Healthcare Dual-Stack Webhook Synchronization
Engineered automated bi-directional synchronization between Jira (Product Teams) and Azure DevOps (Engineering Teams), saving **400 hours/month** of duplicate status entry.

### Chapter 16 Diagnostic Checklist
- [ ] **Sync Governance**: Is field mapping clearly defined for bi-directional ticket updates between Jira and ADO?
- [ ] **Conflict Resolution**: Are automatic timestamp checks configured to resolve simultaneous edit conflicts?
- [ ] **Migration Assessment**: Has a cost-benefit analysis been conducted before forcing one platform upon all business units?
""")
    ]

    # Write files
    ch13_text = build_chapter(13, "Azure Boards & Enterprise Process Architecture", "Azure DevOps Hierarchy, Process Templates & Custom Rules", "Part IV", ch13_sections)
    ch14_text = build_chapter(14, "Portfolio Planning, Delivery Plans & Dependencies in ADO", "Delivery Plans 2.0, WIQL Queries & OData Feeds", "Part IV", ch14_sections)
    ch15_text = build_chapter(15, "ADO Pipeline Integration, Azure Repos & Developer Flow", "AB# Linking, Automated State Transitions & DORA Metrics", "Part IV", ch15_sections)
    ch16_text = build_chapter(16, "Jira vs. Azure DevOps Coexistence & Migration Matrix", "Platform Comparison, Dual-Stack Integration & Webhook Sync", "Part IV", ch16_sections)

    with open(os.path.join(BASE_DIR, "chapters/part4_azure_devops/ch13_azure_boards_process.md"), "w", encoding="utf-8") as f:
        f.write(ch13_text)
    with open(os.path.join(BASE_DIR, "chapters/part4_azure_devops/ch14_portfolio_delivery_plans.md"), "w", encoding="utf-8") as f:
        f.write(ch14_text)
    with open(os.path.join(BASE_DIR, "chapters/part4_azure_devops/ch15_ado_pipelines_devex.md"), "w", encoding="utf-8") as f:
        f.write(ch15_text)
    with open(os.path.join(BASE_DIR, "chapters/part4_azure_devops/ch16_jira_ado_coexistence.md"), "w", encoding="utf-8") as f:
        f.write(ch16_text)
        
    print("Part IV complete.")

if __name__ == "__main__":
    generate_part4()
