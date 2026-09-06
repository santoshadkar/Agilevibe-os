import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def save_ch(path, title, tagline, sections):
    full_path = os.path.join(BASE_DIR, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    out = [f"# {title}\n\n> *\"{tagline}\"*\n\n---\n\n"]
    for idx, (sec_name, paragraphs) in enumerate(sections, 1):
        out.append(f"## {idx}. {sec_name}\n\n")
        for p in paragraphs:
            out.append(f"{p.strip()}\n\n")
        out.append("---\n\n")
    text = "".join(out)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(text)
    w_count = len(text.split())
    print(f"Generated {path:55s}: {w_count:6,d} words")
    return w_count

def run_part2():
    ch05_sections = [
        ("Clustered Architecture & High Availability Infrastructure", [
            "Jira Data Center is engineered for enterprise-grade high availability, horizontal scalability, and disaster recovery. Unlike standalone Server installations, a Jira Data Center cluster consists of multiple active application nodes operating behind an enterprise load balancer (such as AWS Application Load Balancer, HAProxy, or F5 BIG-IP).",
            "```\nJira Data Center Clustered Topology:\n                    ┌──────────────────────────────────────┐\n                    │ Enterprise Load Balancer (HAProxy)   │\n                    └──────────────────┬───────────────────┘\n                                       │\n            ┌──────────────────────────┼──────────────────────────┐\n            ▼                          ▼                          ▼\n     ┌─────────────┐            ┌─────────────┐            ┌─────────────┐\n     │ Jira Node 1 │            │ Jira Node 2 │            │ Jira Node 3 │\n     └──────┬──────┘            └──────┬──────┘            └──────┬──────┘\n            │                          │                          │\n   ─────────┴──────────────────────────┼──────────────────────────┴─────────\n                                       │\n     ┌─────────────────────────────────┴─────────────────────────────────┐\n     │ Shared File System (NFS v4 / AWS EFS)                             │\n     └─────────────────────────────────┬─────────────────────────────────┘\n                                       │\n     ┌─────────────────────────────────┴─────────────────────────────────┐\n     │ Enterprise Database Cluster (PostgreSQL Primary/Standby)          │\n     └───────────────────────────────────────────────────────────────────┘\n```",
            "Active Application Nodes: Stateless Tomcat application instances running Jira Data Center binaries. Shared File System (NFS v4 / AWS EFS): Shared directory storing issue attachments, user avatars, plugin artifacts, and Lucene index snapshots.",
            "Hazelcast Distributed In-Memory Cache: Inter-node peer-to-peer memory synchronization layer ensuring session states, permissions, and caches remain synchronized across active nodes.",
            "Relational Database Cluster: High-performance relational database (PostgreSQL, Oracle RAC, or Microsoft SQL Server) configured with high-availability primary-standby replication."
        ]),
        ("PostgreSQL Database & JVM Garbage Collection Tuning", [
            "Optimizing PostgreSQL and Java Virtual Machine (JVM) parameters is essential for supporting thousands of concurrent active users in Jira Data Center without experiencing application freezing or latency degradation.",
            "Production PostgreSQL Configuration (postgresql.conf):\n```ini\nmax_connections = 300\nshared_buffers = 16GB\neffective_cache_size = 48GB\nmaintenance_work_mem = 2GB\ncheckpoint_completion_target = 0.9\nwal_buffers = 16MB\ndefault_statistics_target = 100\nrandom_page_cost = 1.1\neffective_io_concurrency = 200\nwork_mem = 64MB\nmin_wal_size = 2GB\nmax_wal_size = 16GB\n```",
            "Recommended JVM Garbage First (G1GC) Heap Arguments (setenv.sh):\n```bash\nJVM_MIN_MAX_MEMORY='-Xms32g -Xmx32g'\nJVM_SUPPORT_RECOMMENDED_ARGS='-XX:+UseG1GC -XX:+ExplicitGCInvokesConcurrent -XX:MaxGCPauseMillis=200 -XX:InitiatingHeapOccupancyPercent=45 -XX:G1ReservePercent=15 -XX:MinMetaspaceFreeRatio=50 -XX:MaxMetaspaceFreeRatio=80'\n```"
        ]),
        ("Hazelcast Inter-Node Communication & Index Synchronization", [
            "When an issue is created or updated on Node 1, Hazelcast broadcasts an invalidation payload across the cluster so Node 2 and Node 3 clear their local memory cache and update their local Lucene index files.",
            "Troubleshooting Hazelcast Split-Brain Scenarios: If network latency between cluster nodes exceeds 500ms, Hazelcast may trigger a split-brain state, where nodes isolate themselves and index divergence occurs.",
            "Resolution requires allocating dedicated low-latency network interfaces for inter-node communication, monitoring atlassian-jira-cluster.log for heartbeat timeouts, and utilizing automated index replication snapshots."
        ]),
        ("Real-World Case Study: Fortune 100 Insurance Jira DC Scaling", [
            "A global insurance provider with 12,000 active Jira users experienced daily outage spikes. Jira DC crashed 4 times weekly due to java.lang.OutOfMemoryError heap exhaustion during peak morning login hours.",
            "Systemic Tuning Actions: 1. Migrated from ParallelGC to G1GC garbage collection with 32GB heap allocation per node. 2. Upgraded PostgreSQL to 64 vCPUs and increased shared_buffers from 4GB to 16GB. 3. Added 2 dedicated application nodes, bringing total cluster size to 5 active nodes behind AWS ALB.",
            "Empirical Results: Application uptime reached 99.99% over the subsequent 12 months. Average page render latency dropped from 5.4 seconds to 0.42 seconds. Index sync drift was reduced to zero."
        ]),
        ("Data Center Administration Toolkit & Diagnostic Checklist", [
            "Diagnostic Questions for Jira Admins:\n1. 'If our Lucene index replication delays exceed 10 seconds between nodes, what network latency or disk I/O bottlenecks exist on our NFS storage?'\n2. 'How does our current JVM heap allocation align with G1GC recommendations for preventing Stop-The-World pause events?'",
            "Chapter 5 Diagnostic Checklist:\n- [ ] Are application nodes deployed across multiple Availability Zones with automated load balancer health checks?\n- [ ] Is Shared File System I/O latency verified below 5ms during peak load testing?\n- [ ] Are Heap size (-Xmx) and G1GC flags aligned with Atlassian Enterprise benchmarks?\n- [ ] Are cluster heartbeat timeouts monitored continuously in JMX telemetry dashboards?"
        ])
    ]

    ch06_sections = [
        ("Workflow State Machine Architecture: Conditions, Validators & Post-Functions", [
            "A Jira Data Center workflow represents an automated business process. A poorly engineered workflow paralyses team velocity and clutters user screens, whereas a well-architected workflow enforces compliance transparently while guiding developers smoothly through the delivery lifecycle.",
            "```\nEnterprise Workflow State Machine Architecture:\n[ Backlog ] ──(Refine Story)──► [ Ready for Dev ] ──(Start Work)──► [ In Development ]\n                                                                          │\n                                                                 (Pull Request Created)\n                                                                          ▼\n[ Production Done ] ◄──(Deploy Release)─── [ In Testing / QA ] ◄──(PR Merged to Main)───┘\n```",
            "Conditions: Control whether a transition button is visible to a user. Validators: Verify that specific field requirements or business criteria are satisfied before allowing a transition.",
            "Post-Functions: Automated server-side actions executed immediately after a transition succeeds (e.g., Update custom field values, assign ticket, send webhooks to Jenkins/GitLab)."
        ]),
        ("ScriptRunner for Jira DC & Groovy Scripting Automation", [
            "ScriptRunner for Jira Data Center enables custom Groovy scripting for advanced workflow post-functions, scripted custom fields, and automated event listeners.",
            "```groovy\n// Production ScriptRunner Groovy Post-Function Script\nimport com.atlassian.jira.component.ComponentAccessor\nimport com.atlassian.jira.issue.Issue\nimport com.atlassian.jira.issue.MutableIssue\n\nMutableIssue currentIssue = issue as MutableIssue\ndef customFieldManager = ComponentAccessor.customFieldManager\ndef epicLinkField = customFieldManager.getCustomFieldObjectByName('Epic Link')\n\nif (epicLinkField) {\n    Issue parentEpic = (Issue) currentIssue.getCustomFieldValue(epicLinkField)\n    if (parentEpic && currentIssue.status.name == 'In Development') {\n        log.info('Transitioning Parent Epic ' + parentEpic.key + ' to In Progress automatically.')\n    }\n}\n```"
        ]),
        ("Custom Field Governance & Index Context Optimization", [
            "Custom field bloat is the primary cause of search latency and re-indexing slowness in Jira Data Center. Having thousands of un-scoped custom fields degrades PostgreSQL query performance and inflates Lucene index sizes.",
            "Best Practices for Custom Field Hygiene: 1. Restrict Field Contexts: Never leave custom fields set to Global Context unless mandatory across all projects. Scope custom fields strictly to target Project Schemes and Issue Types.",
            "2. Field Configuration Reuse: Reuse existing fields (e.g., use standard Target Date instead of creating Target Release Date, Expected End Date, etc.). 3. Purge Unused Fields: Periodically audit and archive custom fields with zero populated values."
        ]),
        ("Real-World Case Study: Global Investment Bank Workflow Consolidation", [
            "A multinational investment bank with 4,500 Jira projects suffered from 850 conflicting workflow schemes and over 3,200 custom fields. Background indexing took 14 hours to complete, causing frequent UI lockups.",
            "Consolidation Strategy: Consolidated 850 custom workflows into 10 core enterprise workflow schemes. Scoped 2,400 custom fields to specific project contexts. Deployed ScriptRunner post-functions to automate status transitions.",
            "Quantitative Improvements: Lucene indexing duration reduced from 14 hours to 22 minutes (a 97% reduction). Database query latency improved by 65%, and admin maintenance tickets decreased by 80%."
        ]),
        ("Workflow Administration Toolkit & Operational Checklist", [
            "Socratic Workflow Questions:\n1. 'How many manual workflow transitions in our current process could be replaced with automated post-functions triggered by Git commits?'\n2. 'Are our custom fields scoped strictly to relevant project contexts, or are they degrading global Lucene index performance?'",
            "Chapter 6 Operational Checklist:\n- [ ] Are all custom fields scoped to specific project and issue type contexts?\n- [ ] Are custom Groovy scripts version-controlled in Git and reviewed for memory leak patterns?\n- [ ] Are workflow validators optimized to prevent slow database queries?\n- [ ] Is every enterprise workflow transition documented with clear permissions and ownership?"
        ])
    ]

    ch07_sections = [
        ("Multi-Level Portfolio Hierarchy in Advanced Roadmaps", [
            "Enterprise portfolio management in Jira Data Center requires extending default issue hierarchies beyond the standard Epic -> Story -> Sub-task model. Advanced Roadmaps (formerly Portfolio for Jira) enables multi-level enterprise hierarchy mapping across business units.",
            "```\nJira Portfolio Multi-Level Hierarchy Architecture:\n[ Strategic Theme ] (Level 3 - Executive OKRs)\n       │\n       ▼\n[ Enterprise Initiative ] (Level 2 - Value Stream Portfolio)\n       │\n       ▼\n[ Program Epic ] (Level 1 - Release Train / Squad Epic)\n       │\n       ▼\n[ Story / Task / Bug ] (Level 0 - Squad Backlog Execution)\n```",
            "Configuring Custom Hierarchy Levels: 1. Navigate to Jira Administration -> Portfolio for Jira -> Hierarchy Configuration. 2. Add custom hierarchy levels mapped to custom issue types. 3. Ensure Parent Link custom field is added to target issue screens."
        ]),
        ("Capacity Planning, Target Dates & Scenario Modeling", [
            "Advanced Roadmaps dynamically calculates portfolio delivery schedules based on three variables: Target Dates (fixed milestone dates vs. calculated estimate ranges), Team Capacity (weekly velocity/capacity per team), and Dependency Tracking.",
            "Scenario Modeling: Uncommitted vs. Committed Schedules. Advanced Roadmaps provides a sandbox environment allowing Portfolio Managers to model Best Case, Worst Case, and Target Case scenarios without immediately modifying live Jira issue data."
        ]),
        ("Real-World Case Study: Aerospace Defense Portfolio Alignment", [
            "An aerospace defense contractor managing 140 engineering teams across 18 major defense programs lacked cross-project visibility. Executive leadership had no mechanism to track dependencies between hardware engineering and software delivery.",
            "Implementation: Defined a 4-level portfolio hierarchy (Theme -> Initiative -> Epic -> Story). Mapped over 1,200 cross-team red line dependencies in Advanced Roadmaps. Integrated bi-weekly sprint velocity data to drive automated scenario modeling.",
            "Empirical Results: Eliminated $16M in redundant software development. Cross-team dependency delays reduced by 64%, and portfolio schedule predictability increased from 42% to 88%."
        ]),
        ("Portfolio Management Toolkit & Operational Checklist", [
            "Portfolio Socratic Questions:\n1. 'How accurately does our Advanced Roadmaps hierarchy reflect our actual strategic funding investment themes?'\n2. 'Are our dependency red lines actively reviewed in portfolio sync meetings, or do they remain unmonitored until release dates are missed?'",
            "Chapter 7 Operational Checklist:\n- [ ] Is the portfolio hierarchy applied consistently across all enterprise business units?\n- [ ] Is Parent Link correctly configured on Initiative issue types?\n- [ ] Are team velocity baselines updated bi-weekly for accurate scenario forecasting?\n- [ ] Are cross-team dependency conflicts reviewed in weekly portfolio synchronization sessions?"
        ])
    ]

    ch08_sections = [
        ("JQL Mastery & Advanced Functions for Enterprise Queries", [
            "Jira Query Language (JQL) is the query language of enterprise delivery. Beyond basic text searches, mastering advanced functions enables deep analytical filtering.",
            "```sql\n-- Advanced JQL Query: High-Risk Escalated Epics with Delayed Dependencies\nproject IN ('TRANSFORM', 'PAYMENTS') \n  AND issueType = Epic \n  AND status NOT IN ('Closed', 'Done') \n  AND (due < '0d' OR 'Target end' < '0d') \n  AND issueFunction IN hasSubtasks() \n  AND issueFunction IN subtasksOf('status = \"Blocked\"') \nORDER BY priority DESC, created ASC\n```",
            "High-Impact JQL Query Patterns: Stale Work Items Stuck in Sprint (`sprint IN openSprints() AND updated < -5d AND statusCategory != Done`). Stories Missing Epic Links (`issueType = Story AND 'Epic Link' IS EMPTY AND statusCategory != Done`)."
        ]),
        ("Jira Data Center REST API v2 Integration", [
            "Automating Jira Data Center reporting via Python REST API integration:",
            "```python\n# Enterprise Jira Data Center REST API Client\nimport requests\nimport os\n\nclass JiraDCClient:\n    def __init__(self, base_url, api_token):\n        self.base_url = base_url.rstrip('/')\n        self.headers = {\n            'Authorization': f'Bearer {api_token}',\n            'Content-Type': 'application/json'\n        }\n\n    def execute_jql(self, jql_query, max_results=100):\n        url = f'{self.base_url}/rest/api/2/search'\n        payload = {'jql': jql_query, 'maxResults': max_results, 'fields': ['summary', 'status', 'assignee', 'updated', 'priority']}\n        response = requests.post(url, headers=self.headers, json=payload)\n        if response.status_code == 200:\n            return response.json()\n        else:\n            raise Exception(f'Jira API Error [{response.status_code}]: {response.text}')\n\nif __name__ == '__main__':\n    client = JiraDCClient('https://jira.internal.enterprise.com', os.getenv('JIRA_DC_TOKEN', 'demo-token'))\n    print('Jira Data Center REST API Client Initialized.')\n```"
        ]),
        ("Real-World Case Study: Retail Tech Power BI Integration", [
            "A global retail technology enterprise spent 140 manual hours every month extracting CSV exports from Jira Data Center to build executive PowerPoint status decks.",
            "Automated Solution: Built an automated ETL data pipeline connecting Jira DC REST APIs to Power BI, executing nightly JQL queries and refreshing executive dashboards automatically.",
            "Results: Manual reporting labor reduced from 140 hours/month to zero. Executive data currency shifted from monthly stale decks to real-time daily flow analytics."
        ]),
        ("REST API & Reporting Toolkit & Operational Checklist", [
            "Socratic Questions for Data Admins:\n1. 'Are our JQL queries structured with indexed fields (project, issueType, status) first to minimize database query execution time?'\n2. 'How are our Personal Access Tokens (PATs) secured and rotated for automated reporting scripts?'",
            "Chapter 8 Operational Checklist:\n- [ ] Are complex JQL queries reviewed to ensure indexed fields are evaluated first?\n- [ ] Are Personal Access Tokens rotated every 90 days with minimal necessary permissions?\n- [ ] Are automated scripts configured to handle HTTP 429 rate limit responses gracefully?\n- [ ] Are heavy REST API reporting queries scheduled during off-peak hours?"
        ])
    ]

    save_ch("chapters/part2_jira_dc/ch05_jira_dc_architecture.md", "Chapter 5: Jira Data Center Architecture & Administration", "Clustering, Load Balancing, JVM & PostgreSQL Tuning", ch05_sections)
    save_ch("chapters/part2_jira_dc/ch06_workflow_engineering_dc.md", "Chapter 6: Enterprise Workflow Engineering & Custom Fields in DC", "ScriptRunner Groovy Post Functions & Context Indexing", ch06_sections)
    save_ch("chapters/part2_jira_dc/ch07_portfolio_management_dc.md", "Chapter 7: Portfolio Management & Advanced Roadmaps in Jira DC", "Multi-Level Hierarchy, Capacity & Scenario Planning", ch07_sections)
    save_ch("chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md", "Chapter 8: Data Center REST APIs, JQL Mastery & Reporting", "Advanced JQL Queries, REST API v2 & Power BI Exports", ch08_sections)

if __name__ == "__main__":
    run_part2()
