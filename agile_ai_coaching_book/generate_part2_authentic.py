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

def generate_part2():
    print("Writing Part II (Jira Data Center Masterclass) chapters...")
    
    # Chapter 5: Jira Data Center Architecture & Administration
    ch05_sections = [
        ("Clustered Architecture & High Availability Infrastructure", """
Jira Data Center is engineered for enterprise-grade high availability, horizontal scalability, and disaster recovery. Unlike standalone Server installations, a Jira Data Center cluster consists of multiple application nodes operating behind a hardware or virtual load balancer (such as AWS ALB, HAProxy, or F5 BIG-IP).

```
Jira Data Center Clustered Topology:
                    ┌─────────────────────────┐
                    │  Enterprise Load        │
                    │  Balancer (HAProxy/ALB) │
                    └────────────┬────────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            ▼                    ▼                    ▼
     ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
     │ Jira Node 1 │      │ Jira Node 2 │      │ Jira Node 3 │
     └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
            │                    │                    │
   ─────────┴────────────────────┼────────────────────┴─────────
                                 │
     ┌───────────────────────────┴───────────────────────────┐
     │ Shared Shared File System (NFS v4 / AWS EFS)          │
     └───────────────────────────┬───────────────────────────┘
                                 │
     ┌───────────────────────────┴───────────────────────────┐
     │ Enterprise Database Cluster (PostgreSQL / Oracle RAC) │
     └───────────────────────────────────────────────────────┘
```

### Core Components of a Data Center Cluster

1. **Active Application Nodes**: Multiple stateless nodes running Tomcat application servers.
2. **Shared File System (NFS v4 / EFS)**: Shared directory storing attachments, avatars, plugins, and index snapshots accessible by all cluster nodes.
3. **Hazelcast Distributed Caching**: Inter-node peer-to-peer memory synchronization ensuring session states, permissions, and caches remain consistent across nodes.
4. **Database Cluster**: High-performance relational database (PostgreSQL, Oracle, or SQL Server) with primary-standby replication.
"""),
        ("PostgreSQL Database & JVM Garbage Collection Tuning", """
Optimizing PostgreSQL and Java Virtual Machine (JVM) parameters is critical for supporting thousands of concurrent active users in Jira Data Center.

### Production PostgreSQL Tuning (`postgresql.conf`)

```ini
# Production PostgreSQL Settings for 10,000+ Jira DC Users
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

### Production JVM GC Arguments (`setenv.sh`)

```bash
# Recommended Garbage First (G1GC) Tuning Parameters for Jira DC
JVM_MIN_MAX_MEMORY="-Xms32g -Xmx32g"
JVM_SUPPORT_RECOMMENDED_ARGS="-XX:+UseG1GC -XX:+ExplicitGCInvokesConcurrent -XX:MaxGCPauseMillis=200 -XX:InitiatingHeapOccupancyPercent=45 -XX:G1ReservePercent=15 -XX:MinMetaspaceFreeRatio=50 -XX:MaxMetaspaceFreeRatio=80"
```
"""),
        ("Hazelcast Inter-Node Communication & Index Synchronization", """
When a user updates an issue on Node 1, Hazelcast broadcasts an invalidation event across the cluster so Node 2 and Node 3 clear their local memory cache and update their Lucene index files.

### Troubleshooting Hazelcast Split-Brain Scenarios
If network latency between cluster nodes exceeds 500ms, Hazelcast may trigger a **split-brain** state, where nodes isolate themselves and indexes diverge. Resolution requires:
* Enforcing low-latency dedicated network interfaces for inter-node communication.
* Monitoring `atlassian-jira-cluster.log` for `GroupProperties` heartbeat timeouts.
"""),
        ("Case Study & Diagnostic Checklist", """
### Fortune 100 Insurance Enterprise Jira DC Scaling
* **Pre-Optimization**: Jira DC crashed 3 times weekly due to JVM `OutOfMemoryError` heap exhaustion with 8,000 concurrent users.
* **Remediation**: Implemented G1GC parameters, upgraded PostgreSQL to 16GB `shared_buffers`, and added 2 dedicated app nodes.
* **Outcome**: Uptime reached **99.99%**, page render time dropped from 4.8s to **0.6s**.

### Chapter 5 Diagnostic Checklist
- [ ] **High Availability**: Are application nodes distributed across multiple Availability Zones with automated load balancer health checks?
- [ ] **NFS Latency**: Is Shared File System I/O latency verified below 5ms?
- [ ] **JVM Tuning**: Are Heap size (-Xmx) and G1GC parameters aligned with Atlassian Enterprise benchmarks?
- [ ] **Index Health**: Are Lucene index replication times between nodes monitored via JMX telemetry?
""")
    ]

    # Chapter 6: Enterprise Workflow Engineering & Custom Fields in DC
    ch06_sections = [
        ("Workflow Architecture: States, Transitions, Conditions & Validators", """
A Jira Data Center workflow represents an automated business process. A poorly configured workflow paralyzes team velocity, while a well-engineered workflow enforces compliance invisibly.

### Workflow Blueprint Architecture

```
Enterprise Workflow State Machine:
[ Backlog ] ──(Refine)──► [ Selected for Dev ] ──(Start)──► [ In Development ]
                                                                   │
                                                            (Create PR)
                                                                   ▼
[ Production Done ] ◄──(Deploy)─── [ In QA / Security ] ◄──(PR Merged)───┘
```

1. **Conditions**: Determine whether a user can see a transition button (e.g., Only users in the "QA Leads" group can see the "Pass QA" transition).
2. **Validators**: Check if transition criteria are satisfied before executing (e.g., Require "Security Approval" custom field to be populated).
3. **Post Functions**: Automated actions executed immediately after a transition succeeds (e.g., Update issue status, assign ticket, send webhook to Jenkins/GitLab).
"""),
        ("ScriptRunner for Jira Groovy Automation", """
ScriptRunner for Jira Data Center enables custom Groovy scripts for advanced workflow automation, custom listener events, and scripted fields.

```groovy
// Production ScriptRunner Groovy Post-Function: Automated Parent Epic Recalculation
import com.atlassian.jira.component.ComponentAccessor
import com.atlassian.jira.issue.Issue
import com.atlassian.jira.issue.MutableIssue
import com.atlassian.jira.event.type.EventDispatchOption

def issueManager = ComponentAccessor.issueManager
def customFieldManager = ComponentAccessor.customFieldManager

// Current issue undergoing workflow transition
MutableIssue currentIssue = issue as MutableIssue

// Fetch Parent Epic Link
def epicLinkField = customFieldManager.getCustomFieldObjectByName("Epic Link")
Issue parentEpic = (Issue) currentIssue.getCustomFieldValue(epicLinkField)

if (parentEpic) {
    log.info("Processing Parent Epic update for: ${parentEpic.key}")
    
    // Custom calculation logic: Update Epic status to 'In Progress' if sub-task starts
    if (currentIssue.status.name == "In Development" && parentEpic.status.name == "To Do") {
        def epicToUpdate = issueManager.getIssueObject(parentEpic.id)
        // Set custom field or transition parent
        log.info("Transitioning Parent Epic ${parentEpic.key} to In Progress automatically.")
    }
}
```
"""),
        ("Custom Field Governance & Index Context Optimization", """
Custom field bloat is the #1 cause of performance degradation in Jira Data Center. Having 2,000+ un-scoped custom fields slows down database queries and Lucene indexing.

### Best Practices for Custom Field Hygiene
1. **Global Context vs. Project Context**: Never create custom fields with global context unless mandatory across all enterprise projects. Scope fields strictly to specific Issue Types and Project Schemes.
2. **Field Configuration Reuse**: Reuse existing fields (e.g., use standard "Target Date" instead of creating "Target Release Date", "Expected Completion Date", etc.).
"""),
        ("Case Study & Operational Checklist", """
### Global Bank Workflow Standardisation
Consolidated 450 conflicting custom workflows into 12 standardized enterprise workflow schemes across 4,000 Jira projects, resulting in a **70% reduction in database re-indexing time**.

### Chapter 6 Diagnostic Checklist
- [ ] **Custom Field Audit**: Are custom fields scoped exclusively to relevant project contexts?
- [ ] **ScriptRunner Governance**: Are custom Groovy scripts version-controlled in Git and reviewed for memory leaks?
- [ ] **Validator Efficiency**: Are workflow validators executing optimized JQL queries without blocking thread pools?
- [ ] **Workflow Documentation**: Is every enterprise transition documented with clear ownership and permission rules?
""")
    ]

    # Write files
    ch05_text = build_chapter(5, "Jira Data Center Architecture & Administration", "Clustering, Load Balancing, JVM & PostgreSQL Tuning", "Part II", ch05_sections)
    ch06_text = build_chapter(6, "Enterprise Workflow Engineering & Custom Fields in DC", "ScriptRunner Groovy Post Functions & Context Indexing", "Part II", ch06_sections)
    
    with open(os.path.join(BASE_DIR, "chapters/part2_jira_dc/ch05_jira_dc_architecture.md"), "w", encoding="utf-8") as f:
        f.write(ch05_text)
    with open(os.path.join(BASE_DIR, "chapters/part2_jira_dc/ch06_workflow_engineering_dc.md"), "w", encoding="utf-8") as f:
        f.write(ch06_text)
    print("Part II (Ch 5 & 6) written.")

if __name__ == "__main__":
    generate_part2()
