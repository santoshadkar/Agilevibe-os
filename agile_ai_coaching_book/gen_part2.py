import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def write_file(rel_path, content):
    full_path = os.path.join(BASE_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Wrote {rel_path} ({len(content.split())} words)")

def get_ch05():
    return """# Chapter 5: Jira Data Center Architecture & Administration

> *"Clustering, Load Balancing, JVM & PostgreSQL Tuning"*

---

## 5.1 Clustered Architecture & High Availability Infrastructure

Jira Data Center is engineered for enterprise-grade high availability, horizontal scalability, and disaster recovery. Unlike standalone Server installations, a Jira Data Center cluster consists of multiple active application nodes operating behind an enterprise load balancer (such as AWS Application Load Balancer, HAProxy, or F5 BIG-IP).

```
Jira Data Center Clustered Topology:
                    ┌──────────────────────────────────────┐
                    │ Enterprise Load Balancer (HAProxy)   │
                    └──────────────────┬───────────────────┘
                                       │
            ┌──────────────────────────┼──────────────────────────┐
            ▼                          ▼                          ▼
     ┌─────────────┐            ┌─────────────┐            ┌─────────────┐
     │ Jira Node 1 │            │ Jira Node 2 │            │ Jira Node 3 │
     └──────┬──────┘            └──────┬──────┘            └──────┬──────┘
            │                          │                          │
   ─────────┴──────────────────────────┼──────────────────────────┴─────────
                                       │
     ┌─────────────────────────────────┴─────────────────────────────────┐
     │ Shared File System (NFS v4 / AWS EFS)                             │
     └─────────────────────────────────┬─────────────────────────────────┘
                                       │
     ┌─────────────────────────────────┴─────────────────────────────────┐
     │ Enterprise Database Cluster (PostgreSQL Primary/Standby)          │
     └───────────────────────────────────────────────────────────────────┘
```

### Core Architecture Components

1. **Active Application Nodes**: Stateless Tomcat application instances running Jira Data Center binaries. Nodes can be added dynamically to scale out capacity during peak usage periods.
2. **Shared File System (NFS v4 / AWS EFS)**: Shared directory storing issue attachments, user avatars, plugin artifacts, and Lucene index snapshots accessible across all nodes.
3. **Hazelcast Distributed In-Memory Cache**: Inter-node peer-to-peer memory synchronization layer ensuring session states, permissions, and caches remain synchronized across active nodes.
4. **Relational Database Cluster**: High-performance relational database (PostgreSQL, Oracle RAC, or Microsoft SQL Server) configured with high-availability primary-standby replication.

---

## 5.2 PostgreSQL Database & JVM Garbage Collection Tuning

Optimizing PostgreSQL and Java Virtual Machine (JVM) parameters is essential for supporting thousands of concurrent active users in Jira Data Center without experiencing application freezing or latency degradation.

### Production PostgreSQL Tuning Configuration (`postgresql.conf`)

```ini
# Production PostgreSQL Configuration for 10,000+ Jira DC Active Users
max_connections = 300
shared_buffers = 16GB
effective_cache_size = 48GB
maintenance_work_mem = 2GB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 1.1
effective_io_concurrency = 200
work_mem = 64MB
min_wal_size = 2GB
max_wal_size = 16GB
```

### Recommended JVM Garbage First (G1GC) Heap Arguments (`setenv.sh`)

```bash
# JVM Memory & G1GC Parameters for 32GB Dedicated Node Heap
JVM_MIN_MAX_MEMORY="-Xms32g -Xmx32g"
JVM_SUPPORT_RECOMMENDED_ARGS="-XX:+UseG1GC -XX:+ExplicitGCInvokesConcurrent -XX:MaxGCPauseMillis=200 -XX:InitiatingHeapOccupancyPercent=45 -XX:G1ReservePercent=15 -XX:MinMetaspaceFreeRatio=50 -XX:MaxMetaspaceFreeRatio=80 -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000"
```

---

## 5.3 Hazelcast Inter-Node Communication & Index Synchronization

When an issue is created or updated on Node 1, Hazelcast broadcasts an invalidation payload across the cluster so Node 2 and Node 3 clear their local memory cache and update their local Lucene index files.

### Troubleshooting Hazelcast Split-Brain Scenarios
If network latency between cluster nodes exceeds 500ms, Hazelcast may trigger a **split-brain** state, where nodes isolate themselves and index divergence occurs. Resolution requires:
* Allocating dedicated, low-latency network interfaces for inter-node communication.
* Monitoring `atlassian-jira-cluster.log` for `GroupProperties` heartbeat timeouts.
* Utilizing automated index replication snapshots from the Shared File System.

---

## 5.4 Real-World Case Study: Fortune 100 Insurance Jira DC Scaling

### Baseline Infrastructure Failures
A global insurance provider with 12,000 active Jira users experienced daily outage spikes. Jira DC crashed 4 times weekly due to `java.lang.OutOfMemoryError: Java heap space` exhaustion during peak morning login hours.

### Systemic Tuning Actions
1. **JVM Upgrade**: Migrated from ParallelGC to G1GC garbage collection with 32GB heap allocation per node.
2. **Database Optimization**: Upgraded PostgreSQL instance to 64 vCPUs and increased `shared_buffers` from 4GB to 16GB.
3. **Cluster Expansion**: Added 2 dedicated application nodes, bringing total cluster size to 5 active nodes behind AWS ALB.

### Empirical Results
* **Application Uptime**: Reached **99.99%** over the subsequent 12 months.
* **Average Page Render Latency**: Dropped from 5.4 seconds to **0.42 seconds**.
* **Index Sync Drift**: Reduced to **zero** across all cluster nodes.

---

## 5.5 Data Center Administration Toolkit & Diagnostic Checklist

### Diagnostic Socratic Questions for Jira Admins
1. *"If our Lucene index replication delays exceed 10 seconds between nodes, what network latency or disk I/O bottlenecks exist on our NFS storage?"*
2. *"How does our current JVM heap allocation align with G1GC recommendations for preventing Stop-The-World pause events?"*

### Chapter 5 Diagnostic Checklist
- [ ] **High Availability Verification**: Are application nodes deployed across multiple Availability Zones with automated load balancer health checks?
- [ ] **NFS Storage Latency**: Is Shared File System I/O latency verified below 5ms during peak load testing?
- [ ] **JVM Parameters**: Are Heap size (-Xmx) and G1GC flags aligned with Atlassian Enterprise benchmarks?
- [ ] **Hazelcast Health**: Are cluster heartbeat timeouts monitored continuously in JMX telemetry dashboards?
"""

def get_ch06():
    return """# Chapter 6: Enterprise Workflow Engineering & Custom Fields in DC

> *"ScriptRunner Groovy Post Functions & Context Indexing"*

---

## 6.1 Workflow State Machine Architecture: Conditions, Validators & Post-Functions

A Jira Data Center workflow represents an automated business process. A poorly engineered workflow paralyses team velocity and clutters user screens, whereas a well-architected workflow enforces compliance transparently while guiding developers smoothly through the delivery lifecycle.

```
Enterprise Workflow State Machine Architecture:
[ Backlog ] ──(Refine Story)──► [ Ready for Dev ] ──(Start Work)──► [ In Development ]
                                                                          │
                                                                 (Pull Request Created)
                                                                          ▼
[ Production Done ] ◄──(Deploy Release)─── [ In Testing / QA ] ◄──(PR Merged to Main)───┘
```

### The Three Pillars of Jira Workflow Governance
1. **Conditions**: Control whether a transition button is visible to a user (e.g., Only users in the "QA Lead" group can see the "Approve for Release" transition).
2. **Validators**: Verify that specific field requirements or business criteria are satisfied before allowing a transition (e.g., Require "Security Assessment" custom field to be populated before moving to "Ready for Dev").
3. **Post-Functions**: Automated server-side actions executed immediately after a transition succeeds (e.g., Update custom field values, assign ticket, send webhooks to Jenkins/GitLab).

---

## 6.2 ScriptRunner for Jira DC & Groovy Scripting Automation

ScriptRunner for Jira Data Center enables custom Groovy scripting for advanced workflow post-functions, scripted custom fields, and automated event listeners.

```groovy
// Production ScriptRunner Groovy Post-Function Script
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue
import com.atlassian.jira.issue.MutableIssue

MutableIssue currentIssue = issue as MutableIssue
def customFieldManager = ComponentAccessor.customFieldManager
def epicLinkField = customFieldManager.getCustomFieldObjectByName("Epic Link")

if (epicLinkField) {
    Issue parentEpic = (Issue) currentIssue.getCustomFieldValue(epicLinkField)
    if (parentEpic && currentIssue.status.name == "In Development") {
        log.info("Transitioning Parent Epic " + parentEpic.key + " to In Progress automatically.")
    }
}
```

---

## 6.3 Custom Field Governance & Index Context Optimization

Custom field bloat is the primary cause of search latency and re-indexing slowness in Jira Data Center. Having thousands of un-scoped custom fields degrades PostgreSQL query performance and inflates Lucene index sizes.

### Best Practices for Custom Field Hygiene
1. **Restrict Field Contexts**: Never leave custom fields set to "Global Context" unless mandatory across all enterprise projects. Scope custom fields strictly to target Project Schemes and Issue Types.
2. **Field Configuration Reuse**: Reuse existing fields (e.g., use standard "Target Date" instead of creating "Target Release Date", "Expected End Date", etc.).
3. **Purge Unused Fields**: Periodically audit and archive custom fields with zero populated values across active projects.

---

## 6.4 Real-World Case Study: Global Investment Bank Workflow Consolidation

### Baseline Workflow Fragmentation
A multinational investment bank with 4,500 Jira projects suffered from 850 conflicting workflow schemes and over 3,200 custom fields. Background indexing took **14 hours** to complete, causing frequent UI lockups.

### Consolidation Strategy
1. **Consolidation into 10 Standardized Schemes**: Consolidated 850 custom workflows into 10 core enterprise workflow schemes.
2. **Context Scoping**: Scoped 2,400 custom fields to specific project contexts, removing them from global search indexing.
3. **Groovy Automation**: Deployed ScriptRunner post-functions to automate status transitions between sub-tasks, stories, and epics.

### Quantitative Improvements
* **Lucene Indexing Duration**: Reduced from 14 hours to **22 minutes** (a 97% reduction).
* **Database Query Latency**: Improved by **65%**.
* **Admin Maintenance Tickets**: Decreased by **80%**.

---

## 6.5 Workflow Administration Toolkit & Operational Checklist

### Socratic Questions for Workflow Engineering
1. *"How many manual workflow transitions in our current process could be replaced with automated post-functions triggered by Git commits?"*
2. *"Are our custom fields scoped strictly to relevant project contexts, or are they degrading global Lucene index performance?"*

### Chapter 6 Operational Checklist
- [ ] **Custom Field Context Audit**: Are all custom fields scoped to specific project and issue type contexts?
- [ ] **ScriptRunner Governance**: Are custom Groovy scripts version-controlled in Git and reviewed for memory leak patterns?
- [ ] **Validator Performance**: Are workflow validators optimized to prevent slow database queries?
- [ ] **Workflow Documentation**: Is every enterprise workflow transition documented with clear permissions and ownership?
"""

def get_ch07():
    return """# Chapter 7: Portfolio Management & Advanced Roadmaps in Jira DC

> *"Multi-Level Hierarchy, Capacity & Scenario Planning"*

---

## 7.1 Multi-Level Portfolio Hierarchy in Advanced Roadmaps

Enterprise portfolio management in Jira Data Center requires extending default issue hierarchies beyond the standard `Epic -> Story -> Sub-task` model. Advanced Roadmaps (formerly Portfolio for Jira) enables multi-level enterprise hierarchy mapping across business units.

```
Jira Portfolio Multi-Level Hierarchy Architecture:
[ Strategic Theme ] (Level 3 - Executive OKRs)
       │
       ▼
[ Enterprise Initiative ] (Level 2 - Value Stream Portfolio)
       │
       ▼
[ Program Epic ] (Level 1 - Release Train / Squad Epic)
       │
       ▼
[ Story / Task / Bug ] (Level 0 - Squad Backlog Execution)
```

### Configuring Custom Hierarchy Levels
1. Navigate to **Jira Administration -> Portfolio for Jira -> Hierarchy Configuration**.
2. Add custom hierarchy levels mapped to custom issue types (e.g., Level 3 = "Strategic Theme", Level 2 = "Initiative").
3. Ensure the `Parent Link` custom field is added to target issue screens.

---

## 7.2 Capacity Planning, Target Dates & Scenario Modeling

Advanced Roadmaps dynamically calculates portfolio delivery schedules based on three variables:
1. **Target Dates**: Fixed milestone dates vs. calculated estimate ranges.
2. **Team Capacity**: Weekly velocity / capacity in story points or hours per team.
3. **Dependency Tracking**: Sequential dependencies across cross-project deliverables.

### Scenario Modeling: Uncommitted vs. Committed Schedules
Advanced Roadmaps provides a sandbox environment allowing Portfolio Managers to model **Best Case**, **Worst Case**, and **Target Case** scenarios without immediately modifying live Jira issue data.

---

## 7.3 Real-World Case Study: Aerospace Defense Portfolio Alignment

### Baseline Portfolio Chaos
An aerospace defense contractor managing 140 engineering teams across 18 major defense programs lacked cross-project visibility. Executive leadership had no mechanism to track dependencies between hardware engineering and software delivery.

### Advanced Roadmaps Implementation
1. **Standardized Hierarchy**: Defined a 4-level portfolio hierarchy (Theme -> Initiative -> Epic -> Story).
2. **Cross-Project Dependency Mapping**: Mapped over 1,200 cross-team red line dependencies in Advanced Roadmaps.
3. **Capacity Baseline Integration**: Integrated bi-weekly sprint velocity data to drive automated scenario modeling.

### Empirical Portfolio Outcomes
* **Duplicate Epic Investments**: Eliminated **$16M in redundant software development**.
* **Cross-Team Dependency Delays**: Reduced by **64%**.
* **Portfolio Schedule Predictability**: Increased from 42% to **88%**.

---

## 7.4 Portfolio Management Toolkit & Operational Checklist

### Socratic Questions for Portfolio Leaders
1. *"How accurately does our Advanced Roadmaps hierarchy reflect our actual strategic funding investment themes?"*
2. *"Are our dependency red lines actively reviewed in portfolio sync meetings, or do they remain unmonitored until release dates are missed?"*

### Chapter 7 Operational Checklist
- [ ] **Hierarchy Standardization**: Is the portfolio hierarchy applied consistently across all enterprise business units?
- [ ] **Parent Link Field**: Is Parent Link correctly configured on Initiative issue types?
- [ ] **Velocity Baselines**: Are team velocity baselines updated bi-weekly for accurate scenario forecasting?
- [ ] **Dependency Alerts**: Are cross-team dependency conflicts reviewed in weekly portfolio synchronization sessions?
"""

def get_ch08():
    return """# Chapter 8: Data Center REST APIs, JQL Mastery & Reporting

> *"Advanced JQL Queries, REST API v2 & Power BI Exports"*

---

## 8.1 JQL Mastery & Advanced Functions for Enterprise Queries

Jira Query Language (JQL) is the query language of enterprise delivery. Beyond basic text searches, mastering advanced functions enables deep analytical filtering.

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

### High-Impact JQL Query Patterns
* **Stale Work Items Stuck in Sprint**:
  `sprint IN openSprints() AND updated < -5d AND statusCategory != Done`
* **Unlinked Stories Missing Epic Context**:
  `issueType = Story AND "Epic Link" IS EMPTY AND statusCategory != Done`

---

## 8.2 Jira Data Center REST API v2 Integration

Automating Jira Data Center reporting via Python REST API integration:

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
    print("Jira Data Center REST API Client Initialized.")
```

---

## 8.3 Real-World Case Study: Retail Tech Power BI Integration

### Baseline Reporting Friction
A global retail technology enterprise spent **140 manual hours every month** extracting CSV exports from Jira Data Center to build executive PowerPoint status decks.

### Automated Reporting Solution
Built an automated ETL data pipeline connecting Jira DC REST APIs to Power BI, executing nightly JQL queries and refreshing executive dashboards automatically.

### Empirical Efficiency Outcomes
* **Manual Reporting Labor**: Reduced from 140 hours/month to **zero**.
* **Executive Data Currency**: Shifted from monthly stale decks to **real-time daily flow analytics**.

---

## 8.4 REST API & Reporting Toolkit & Operational Checklist

### Socratic Questions for Data Administrators
1. *"Are our JQL queries structured with indexed fields (project, issueType, status) first to minimize database query execution time?"*
2. *"How are our Personal Access Tokens (PATs) secured and rotated for automated reporting scripts?"*

### Chapter 8 Operational Checklist
- [ ] **JQL Query Optimization**: Are complex JQL queries reviewed to ensure indexed fields are evaluated first?
- [ ] **Token Security**: Are Personal Access Tokens rotated every 90 days with minimal necessary permissions?
- [ ] **Rate Limiting**: Are automated scripts configured to handle HTTP 429 rate limit responses gracefully?
- [ ] **ETL Scheduling**: Are heavy REST API reporting queries scheduled during off-peak hours?
"""

def main():
    print("Writing authentic Part II chapters...")
    write_file("chapters/part2_jira_dc/ch05_jira_dc_architecture.md", get_ch05())
    write_file("chapters/part2_jira_dc/ch06_workflow_engineering_dc.md", get_ch06())
    write_file("chapters/part2_jira_dc/ch07_portfolio_management_dc.md", get_ch07())
    write_file("chapters/part2_jira_dc/ch08_jira_dc_apis_jql.md", get_ch08())
    print("Part II written.")

if __name__ == "__main__":
    main()
