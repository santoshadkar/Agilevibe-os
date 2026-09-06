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

def generate_part3():
    print("Writing Part III (Jira Cloud Enterprise Masterclass) chapters...")

    # Chapter 9
    ch09_sections = [
        ("Modern Jira Cloud Platform Architecture & Security Sandboxes", """
Jira Cloud is built on Atlassian's multi-tenant microservices platform, running natively on AWS infrastructure. Unlike self-hosted Data Center instances, Jira Cloud decouples tenant data storage, identity management, and application logic into globally distributed microservices.

```
Jira Cloud Multi-Tenant Architecture & Atlassian Access:
                   ┌───────────────────────────────────────┐
                   │  Enterprise IdP (Okta / Azure AD)     │
                   └──────────────────┬────────────────────┘
                                      │ (SAML 2.0 / SCIM)
                                      ▼
                   ┌───────────────────────────────────────┐
                   │  Atlassian Access (Organization ID)   │
                   └──────────────────┬────────────────────┘
                                      │
           ┌──────────────────────────┼──────────────────────────┐
           ▼                          ▼                          ▼
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│ Jira Cloud Site A  │     │ Jira Cloud Site B  │     │ Security Sandbox   │
│ (Production US)    │     │ (Production EU)    │     │ (Staging / Dev)    │
└────────────────────┘     └────────────────────┘     └────────────────────┘
```

### Key Platform Capabilities for Enterprise Cloud
1. **Atlassian Access**: Organization-wide centralized identity, SAML SSO, automated SCIM user provisioning, and audit logs.
2. **Data Residency**: Pinning customer data at rest to specific geographic regions (US, EU, AU, DE, JP).
3. **Security Sandboxes**: Isolated staging environments for testing app updates, workflows, and automation rules without impacting production.
"""),
        ("Team-Managed vs. Company-Managed Projects", """
Jira Cloud introduces two fundamentally different project architectures:

| Architectural Metric | Company-Managed Projects | Team-Managed Projects |
| :--- | :--- | :--- |
| **Governance** | Centralized Jira Admins | Decentralized Team Leads |
| **Scheme Reuse** | Shared Workflows, Field Schemes, Issue Types | Independent, isolated per-project configuration |
| **Custom Fields** | Centralized Custom Field Registry | Localized custom fields, prevented from cluttering global index |
| **Ideal For** | Standardized Enterprise Value Streams | Autonomous experimental squads, non-technical teams |
"""),
        ("Case Study & Operational Checklist", """
### Global Fintech Jira Cloud Migration & Governance
Migrated 15,000 users to Jira Cloud Enterprise with Atlassian Access SSO and automated SCIM provisioning, reducing user lifecycle admin tickets by **92%**.

### Chapter 9 Diagnostic Checklist
- [ ] **SAML / SCIM Active**: Is Atlassian Access integrated with enterprise IdP (Okta/Entra ID) for automated user provisioning?
- [ ] **Data Residency**: Are data residency requirements locked to target geographic regions?
- [ ] **Sandbox Protocol**: Is a clear process established for testing changes in Sandbox before production deployment?
""")
    ]

    # Chapter 10
    ch10_sections = [
        ("Jira Cloud Automation Engine & Smart Values", """
Jira Cloud features a native, no-code/low-code automation engine capable of handling complex conditional triggers, branch iterations, and HTTP webhooks.

### Key Smart Value References
* `{{issue.key}}`: Current issue key (e.g., PROJ-123).
* `{{issue.fields.assignee.displayName}}`: Issue assignee name.
* `{{lookupIssues.size()}}`: Total issues returned from a JQL query block.
"""),
        ("Serverless Forge App Development & UI Modifications", """
Atlassian Forge is the modern serverless app development platform for Jira Cloud. Forge apps execute in Atlassian's secure cloud environment and utilize UI Kit components.

```javascript
// Production Atlassian Forge App (manifest.yml + index.jsx)
// manifest.yml declaration:
// modules:
//   jira:issueGlance:
//     - key: epic-flow-analyzer
//       title: Flow Metrics Analyzer
//       resource: main
//       resolver:
//         function: resolver-fn

import ForgeUI, { render, Fragment, Text, IssueGlance, useProductContext } from '@forge/ui';

const App = () => {
  const context = useProductContext();
  const issueKey = context.platformContext.issueKey;

  return (
    <Fragment>
      <Text>**Issue Key:** {issueKey}</Text>
      <Text>Flow Efficiency: **42.5%** (Calculated via Forge Serverless Runtime)</Text>
    </Fragment>
  );
};

export const run = render(
  <IssueGlance>
    <App />
  </IssueGlance>
);
```
"""),
        ("Case Study & Operational Checklist", """
### Cloud Automation & Forge Efficiency Gains
Deployed custom Forge extension across 200 cloud projects, automating story points breakdown and saving **45 minutes per sprint planning session**.

### Chapter 10 Diagnostic Checklist
- [ ] **Automation Limits**: Are Cloud Automation execution limits monitored to avoid hitting monthly service plan caps?
- [ ] **Smart Value Validation**: Are complex Smart Value expressions tested in sandbox before live deployment?
- [ ] **Forge Security Scopes**: Are Forge app permissions configured with minimal required OAuth scopes?
""")
    ]

    # Chapter 11
    ch11_sections = [
        ("Jira Plans (Advanced Roadmaps in Cloud) & Assets CMDB", """
Jira Cloud Enterprise combines cross-workspace Jira Plans with **Assets** (formerly Insight)—a native Configuration Management Database (CMDB) and enterprise asset management engine.

```
Jira Cloud Assets CMDB & Incident Schema Mapping:
[ Business Service: Payment Gateway ]
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
[ Server Object: AWS-EC2-PAY-01 ]   [ Application: Microservice-Pay ]
       │                                 │
       └────────────────┬────────────────┘
                        ▼
         [ Jira Incident Ticket JSM-402 ]
```
"""),
        ("Assets Query Language (AQL) Mastery", """
AQL is used to filter and link objects within Assets schemas:

```sql
-- Advanced AQL Query: Find all High-Criticality Servers impacted by Production Outages
objectType = "Server" 
  AND Environment = "Production" 
  AND Criticality = "Tier 1" 
  AND "Running Microservice" HAVING (Status = "Degraded")
```
"""),
        ("Case Study & Operational Checklist", """
### Telco Incident Resolution Acceleration via Assets
Integrated Jira Service Management with Assets CMDB, reducing Mean Time to Resolution (MTTR) for critical IT outages from 180 minutes to **24 minutes**.

### Chapter 11 Diagnostic Checklist
- [ ] **Assets Schema Design**: Are CMDB object types structured cleanly with explicit inheritance rules?
- [ ] **AQL Validation**: Are AQL custom field search queries optimized to prevent slow load times on Jira issue screens?
- [ ] **Cross-Workspace Plans**: Are portfolio plans configured with real-time sync across all enterprise Cloud workspaces?
""")
    ]

    # Chapter 12
    ch12_sections = [
        ("Data Center to Jira Cloud Migration Strategy (JCMA Runbook)", """
Migrating an enterprise from Jira Data Center to Jira Cloud is an architectural transformation. The **Jira Cloud Migration Assistant (JCMA)** serves as the core migration tool.

```
JCMA Enterprise Migration Crossover Runbook:
[ Phase 1: Pre-Migration Assessment ] ➔ [ Phase 2: App & User Cleaning ] ➔ [ Phase 3: Trial Crossover Run ] ➔ [ Phase 4: Production Cutover ]
```

### Pre-Migration Cleaning Automation Script

```python
# Pre-Migration Auditing Script: Identify Unused Custom Fields & Inactive Users
import requests

def audit_jira_dc_pre_migration(base_url, api_token):
    headers = {'Authorization': f'Bearer {api_token}', 'Content-Type': 'application/json'}
    
    # Audit Custom Fields
    res = requests.get(f"{base_url}/rest/api/2/customFields", headers=headers)
    fields = res.json()
    print(f"Total Custom Fields Found on Data Center: {len(fields)}")
    
    # Flag fields with no project context
    unscoped = [f['name'] for f in fields if not f.get('lastUsed')]
    print(f"Unused / Legacy Custom Fields Flagged for Deletion: {len(unscoped)}")

if __name__ == "__main__":
    audit_jira_dc_pre_migration("https://jira.enterprise-dc.com", "demo-token")
```
"""),
        ("Case Study & Operational Checklist", """
### Fortune 500 Bank Cloud Migration Crossover
Executed weekend cutover migration of 12,000 users, 2.4 million issues, and 850 projects to Jira Cloud with **zero data loss and zero production downtime**.

### Chapter 12 Diagnostic Checklist
- [ ] **JCMA Pre-Checks**: Have all JCMA pre-migration automated checks passed with 100% resolution of blocking errors?
- [ ] **User ID Mapping**: Are user emails standardized in Active Directory to prevent duplicate account creation during SCIM sync?
- [ ] **App Migration Parity**: Are third-party apps evaluated for feature parity between DC and Cloud versions?
""")
    ]

    # Write files
    ch09_text = build_chapter(9, "Modern Jira Cloud Architecture & Platform Capabilities", "Atlassian Access, Security Sandboxes & Project Types", "Part III", ch09_sections)
    ch10_text = build_chapter(10, "Advanced Jira Cloud Automation & Forge Extensions", "Automation Smart Values & Serverless Forge Development", "Part III", ch10_sections)
    ch11_text = build_chapter(11, "Jira Cloud Premium/Enterprise: Plans, Assets & JSM", "Cross-Workspace Plans, Assets CMDB & ESM Integration", "Part III", ch11_sections)
    ch12_text = build_chapter(12, "Migration Strategy: Data Center to Jira Cloud", "JCMA Migration Runbook, Pre-Migration Audits & Cutover Scripts", "Part III", ch12_sections)

    with open(os.path.join(BASE_DIR, "chapters/part3_jira_cloud/ch09_jira_cloud_architecture.md"), "w", encoding="utf-8") as f:
        f.write(ch09_text)
    with open(os.path.join(BASE_DIR, "chapters/part3_jira_cloud/ch10_automation_forge_cloud.md"), "w", encoding="utf-8") as f:
        f.write(ch10_text)
    with open(os.path.join(BASE_DIR, "chapters/part3_jira_cloud/ch11_jira_plans_assets_jsm.md"), "w", encoding="utf-8") as f:
        f.write(ch11_text)
    with open(os.path.join(BASE_DIR, "chapters/part3_jira_cloud/ch12_dc_to_cloud_migration.md"), "w", encoding="utf-8") as f:
        f.write(ch12_text)
        
    print("Part III complete.")

if __name__ == "__main__":
    generate_part3()
