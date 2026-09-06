# Appendix B: Enterprise JQL, WIQL & AQL Cheat Sheet

📌 EXECUTIVE COACHING GUARDRAIL: Complete Syntax Reference for Jira JQL, Azure DevOps WIQL & Assets AQL

This operational syntax reference provides exhaustive query patterns, field definitions, function libraries, and production-tested query templates for Atlassian Jira Query Language (JQL), Azure DevOps Work Item Query Language (WIQL), and Atlassian Assets Query Language (AQL).

## B.1 Jira Query Language (JQL) Master Reference

JQL is a flexible SQL-like syntax used to query issues across Jira Data Center and Jira Cloud. Standard clause structure follow: `[Field] [Operator] [Value/Function] [ORDER BY Field ASC|DESC]`.

### JQL Operators Reference
| Operator | Description | Example Syntax |
| --- | --- | --- |
| `=` | Exact equality match | `project = "PAYMENTS"` |
| `!=` | Inequality match | `status != "Closed"` |
| `>` / `>=` | Greater than (dates/numbers) | `created >= "-7d"` |
| `<` / `<=` | Less than (dates/numbers) | `storyPoints <= 5` |
| `IN` | Matches any value in set | `status IN ("In Progress", "In Review")` |
| `NOT IN` | Excludes all values in set | `priority NOT IN ("Low", "Trivial")` |
| `~` | Fuzzy text search (contains) | `summary ~ "authentication failure"` |
| `!~` | Fuzzy text exclusion | `description !~ "deprecated"` |
| `IS EMPTY` | Field contains null/no value | `"Epic Link" IS EMPTY` |
| `IS NOT EMPTY` | Field contains valid value | `"Sprint" IS NOT EMPTY` |
| `WAS` | Historical status match | `status WAS "In Progress"` |
| `WAS IN` | Historical status set match | `status WAS IN ("Blocked", "Testing")` |
| `CHANGED` | Status/field change event | `status CHANGED DURING ("2026-01-01", "2026-03-31")` |

### JQL Built-in Functions Library
| Function Name | Return Type | Description & Usage |
| --- | --- | --- |
| `currentUser()` | User ID | Evaluates to logged-in user: `assignee = currentUser()` |
| `membersOf("group")` | Group Users | Matches members of group: `assignee IN membersOf("jira-coaches")` |
| `openSprints()` | Sprint IDs | Active open sprints: `sprint IN openSprints()` |
| `closedSprints()` | Sprint IDs | Completed sprints: `sprint IN closedSprints()` |
| `futureSprints()` | Sprint IDs | Planned future sprints: `sprint IN futureSprints()` |
| `startOfDay(inc)` | Date | Beginning of day: `created >= startOfDay("-30d")` |
| `endOfDay(inc)` | Date | End of day timestamp: `updated <= endOfDay()` |
| `startOfWeek()` | Date | First day of current week: `resolved >= startOfWeek()` |
| `startOfMonth()` | Date | First day of current month: `created >= startOfMonth()` |
| `issueHistory()` | Issue Keys | Issues recently viewed by user: `id IN issueHistory()` |
| `watchedIssues()` | Issue Keys | Issues watched by user: `id IN watchedIssues()` |

### 20 Production-Tested Enterprise JQL Query Templates
| Query ID | Operational Objective | Exact JQL Syntax Template |
| --- | --- | --- |
| JQL-01 | Unresolved Overdue Epics | `project = "CORE" AND issueType = Epic AND statusCategory != Done AND due < "0d" ORDER BY due ASC` |
| JQL-02 | Stale Work Items Stuck in Active Sprint | `sprint IN openSprints() AND updated < -3d AND statusCategory = "In Progress"` |
| JQL-03 | Orphaned Stories Missing Epic Links | `project = "PAY" AND issueType = Story AND "Epic Link" IS EMPTY AND statusCategory != Done` |
| JQL-04 | Currently Blocked High-Priority Items | `priority IN ("Highest", "High") AND status = "Blocked" AND statusCategory != Done` |
| JQL-05 | Sprint Spillover Work Items | `sprint IN openSprints() AND sprint IN closedSprints()` |
| JQL-06 | Bugs Escaped to Production | `issueType = Bug AND Environment = "Production" AND created >= startOfMonth()` |
| JQL-07 | High Cost-of-Delay Unassigned Items | `assignee IS EMPTY AND priority = "Highest" AND statusCategory != Done ORDER BY created ASC` |
| JQL-08 | Items Pending Code Review > 48 Hours | `status = "In Review" AND status CHANGED TO "In Review" BEFORE -48h` |
| JQL-09 | Scope Creep Added Mid-Sprint | `sprint IN openSprints() AND issueFunction IN addedAfterSprintStart()` |
| JQL-10 | Epics Missing Target Quarter End Date | `issueType = Epic AND "Target End" IS EMPTY AND statusCategory != Done` |
| JQL-11 | Stories Sliced Too Large (>8 Points) | `issueType = Story AND "Story Points" > 8 AND statusCategory != Done` |
| JQL-12 | Security Vulnerability Escalations | `issueType = Vulnerability AND "CVSS Score" >= 7.0 AND status != Closed` |
| JQL-13 | Cross-Project Dependency Blockers | `issueInLinkedIssuesByRelation("is blocked by") AND statusCategory != Done` |
| JQL-14 | Completed Items Pending Documentation | `status = "Done" AND "Doc Status" != "Published" AND resolved >= startOfWeek()` |
| JQL-15 | Unestimated Backlog Refinement Candidates | `project = "MOBILE" AND "Story Points" IS EMPTY AND status = "Refinement"` |
| JQL-16 | QA Testing Rejection Recycling | `status CHANGED FROM "In QA" TO "In Progress" GREATER THAN 2` |
| JQL-17 | Architecture Spike Decision Pending | `issueType = Spike AND statusCategory != Done AND updated < -5d` |
| JQL-18 | Customer Support Escalated Defect | `labels IN ("support-escalation", "vip-customer") AND statusCategory != Done` |
| JQL-19 | Capitalizable Epic Engineering Labor | `issueType = Epic AND "CapEx Status" = "Approved" AND statusCategory = "In Progress"` |
| JQL-20 | Quarterly Release Readiness Gate | `fixVersion = "2026.Q1" AND statusCategory != Done AND "QA Approval" IS EMPTY` |

## B.2 Azure DevOps Work Item Query Language (WIQL) Master Reference

WIQL syntax structures: `SELECT [System.Field] FROM WorkItems WHERE [Condition] ORDER BY [Field]`.

### WIQL Field Schemas & Operators
| WIQL Field Name | Data Type | Operational Description |
| --- | --- | --- |
| `System.Id` | Integer | Unique work item identifier |
| `System.WorkItemType` | String | Epic, Feature, User Story, Task, Bug |
| `System.State` | String | New, Active, Resolved, Closed, Removed |
| `System.AssignedTo` | User | Current assignee identity |
| `System.AreaPath` | Path | Organizational area hierarchy path |
| `System.IterationPath` | Path | Sprint/Iteration sprint timeline path |
| `Custom.Blocked` | Boolean | True/False flag indicating active impediment |
| `Microsoft.VSTS.Scheduling.StoryPoints` | Double | Numerical story point estimate |

### 15 Production WIQL Query Templates
| Query ID | Objective | WIQL Query Syntax |
| --- | --- | --- |
| WIQL-01 | Blocked Active Work Items | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.State] = 'Active' AND [Custom.Blocked] = 'True'` |
| WIQL-02 | Unassigned High Priority Bugs | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.WorkItemType] = 'Bug' AND [System.AssignedTo] = '' AND [Microsoft.VSTS.Common.Priority] = 1` |
| WIQL-03 | Active Stories Missing Iteration | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.WorkItemType] = 'User Story' AND [System.IterationPath] UNDER 'Project\Backlog'` |
| WIQL-04 | Stale In-Progress Tasks | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.State] = 'Active' AND [System.ChangedDate] < @today - 5` |
| WIQL-05 | Current Iteration Commitment | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.IterationPath] = @currentIteration AND [System.State] <> 'Closed'` |
| WIQL-06 | Cross-Project Feature Dependencies | `SELECT [System.Id], [System.Title] FROM WorkItemLinks WHERE [Source].[System.WorkItemType] = 'Feature' AND [System.Links.LinkType] = 'System.LinkTypes.Dependency-Forward'` |
| WIQL-07 | PR Build Failure Escalations | `SELECT [System.Id], [System.Title] FROM WorkItems WHERE [System.Tags] CONTAINS 'build-failure' AND [System.State] = 'Active'` |
| WIQL-08 | High Effort Unsliced Features | `SELECT [System.Id] FROM WorkItems WHERE [System.WorkItemType] = 'Feature' AND [Microsoft.VSTS.Scheduling.StoryPoints] > 20` |
| WIQL-09 | Production Security Patches | `SELECT [System.Id] FROM WorkItems WHERE [System.Tags] CONTAINS 'security' AND [System.State] <> 'Closed'` |
| WIQL-10 | Recently Closed User Stories | `SELECT [System.Id] FROM WorkItems WHERE [System.WorkItemType] = 'User Story' AND [System.State] = 'Closed' AND [System.ChangedDate] >= @today - 7` |
| WIQL-11 | Orphaned Tasks Without Parent | `SELECT [System.Id] FROM WorkItems WHERE [System.WorkItemType] = 'Task' AND NOT ([System.Id] IN FROM WorkItemLinks WHERE [Target].[System.WorkItemType] = 'User Story')` |
| WIQL-12 | CapEx Eligible Development | `SELECT [System.Id] FROM WorkItems WHERE [Custom.CapExApproved] = 'True' AND [System.State] = 'Active'` |
| WIQL-13 | SLA Breach Incident Tickets | `SELECT [System.Id] FROM WorkItems WHERE [System.WorkItemType] = 'Incident' AND [Custom.SLABreach] = 'True'` |
| WIQL-14 | User Stories Pending Acceptance | `SELECT [System.Id] FROM WorkItems WHERE [System.State] = 'Resolved' AND [System.WorkItemType] = 'User Story'` |
| WIQL-15 | Architectural Spikes | `SELECT [System.Id] FROM WorkItems WHERE [System.Tags] CONTAINS 'spike' AND [System.State] = 'Active'` |

## B.3 Atlassian Assets Query Language (AQL) Master Reference

AQL searches object schemas in Jira Service Management Assets (Insight CMDB). Syntax: `objectType = "Name" AND [attribute] [operator] [value]`.

### 15 Production AQL Query Templates
| Query ID | Operational Objective | Exact AQL Syntax Template |
| --- | --- | --- |
| AQL-01 | Degraded Production Applications | `objectType = "Application" AND Environment = "Production" AND Status = "Degraded"` |
| AQL-02 | Production Servers Past EOL | `objectType = "Host" AND Environment = "Production" AND "End of Life Date" < now()` |
| AQL-03 | High-Criticality Services | `objectType = "Business Service" AND Tier = "Tier 1" AND OperationalStatus = "Active"` |
| AQL-04 | Assets Linked to Open Major Incidents | `objectHaving(connectedTickets(status != "Closed" AND priority = "Highest"))` |
| AQL-05 | Unassigned Cloud Infrastructure Objects | `objectType = "AWS Instance" AND Owner IS EMPTY AND Environment = "Production"` |
| AQL-06 | Database Clusters Missing Backup | `objectType = "Database" AND "Backup Strategy" IS EMPTY AND Environment = "Production"` |
| AQL-07 | SSL Certificates Expiring < 30 Days | `objectType = "Certificate" AND "Expiration Date" <= 30d AND Status = "Active"` |
| AQL-08 | Microservices Managed by Squad X | `objectType = "Microservice" AND "Managing Team" = "Payments Squad"` |
| AQL-09 | Non-Compliant Software Licenses | `objectType = "Software License" AND "Compliance Status" = "Non-Compliant"` |
| AQL-10 | Production K8s Clusters Running Legacy K8s | `objectType = "Kubernetes Cluster" AND Version < "1.28" AND Environment = "Production"` |
| AQL-11 | Hardware Laptops Due Refresh | `objectType = "Laptop" AND "Purchase Date" <= -3y AND Status = "In Use"` |
| AQL-12 | API Endpoints Missing Owner Squad | `objectType = "API Endpoint" AND "Owner Squad" IS EMPTY` |
| AQL-13 | Critical Infra Impacted by Active RFC | `objectHaving(connectedTickets(issueType = "Change" AND status = "In Progress"))` |
| AQL-14 | Third-Party SaaS Vendors Facing Renewals | `objectType = "SaaS Product" AND "Renewal Date" <= 60d` |
| AQL-15 | Unmapped Security Assets | `objectType = "Security Gateway" AND "Architecture Domain" IS EMPTY` |

---

---

---

---



---

## B.5 Executive & Practitioner Knowledge Assessment

### Question 1: Which Azure DevOps WIQL clause is equivalent to the Jira JQL clause `status WAS IN ('In Progress') DURING ('2026-08-01', '2026-08-31')`?

- A) `[System.State] = 'In Progress'`
- B) `[System.State] EVER 'In Progress' AND [System.ChangedDate] >= '2026-08-01' AND [System.ChangedDate] <= '2026-08-31'`
- C) `SELECT * FROM WorkItems`
- D) `WIQL has no history`

> **Correct Answer: B** — WIQL uses the `EVER` operator combined with `[System.ChangedDate]` ranges to query historical work item state transitions.

### Question 2: What is the primary syntax difference between JQL and Asset Query Language (AQL)?

- A) JQL queries issue records; AQL queries object instances and attribute relationships inside the JSM CMDB
- B) AQL only works in Excel
- C) JQL requires XML
- D) There is no difference

> **Correct Answer: A** — JQL operates on Jira issues, whereas AQL targets object schemas, attributes, and connected IT asset relationships.

### Question 3: Why should wildcards at the beginning of search terms (e.g., `text ~ '* error'`) be avoided in enterprise JQL queries?

- A) Leading wildcards force a full index scan across Lucene, causing severe search latency and CPU spikes
- B) Leading wildcards delete tickets
- C) JQL does not support text
- D) Leading wildcards require root access

> **Correct Answer: A** — Leading wildcards prevent index tree traversal, forcing inefficient full text scans across millions of indexed fields.

### Question 4: How does WIQL handle parent-child hierarchy queries compared to JQL?

- A) WIQL uses `WorkItemLinks` tree queries (`mode(Recursive)`), whereas JQL uses functions like `parent =` or `portfolioChildOf()`
- B) WIQL cannot query hierarchies
- C) JQL requires C# code
- D) Both use identical SQL syntax

> **Correct Answer: A** — WIQL structures hierarchy queries using explicit link type joins (`WorkItemLinks`), while JQL uses parent functions or Jira Plans extensions.

---

Appendix B Executive Summary

- **Key Takeaway**: Appendix B provides a complete syntax reference and 50 cross-platform query templates translating between Jira JQL, Azure DevOps WIQL, and Assets AQL.
- **Key Takeaway**: Translating query patterns between Atlassian and Microsoft ecosystems requires mapping corresponding relational operators and temporal functions.
- **Key Takeaway**: Optimizing query performance prevents long-running database locks and speeds up dashboard widget rendering across enterprise portals.

---

Executive & Practitioner Knowledge Assessment

### Question 5: In Jira JQL, what is the function of the `changed()` operator?

- A) It searches for issues that underwent a specific field change, optionally filtered by user, date range, or state transition
- B) It changes the issue summary
- C) It deletes changed issues
- D) It renames custom fields

> **Correct Answer: A** — The `changed()` operator allows historical field modification searching for auditing state and assignment transitions.

### Question 6: In Azure DevOps WIQL, how does `[System.WorkItemType] IN GROUP 'Microsoft.RequirementCategory'` work?

- A) It dynamically queries all work item types mapped to the Requirement category (e.g., User Story, PBI) in the project process
- B) It queries users in Microsoft
- C) It deletes requirement categories
- D) WIQL does not support groups

> **Correct Answer: A** — Category group queries abstract individual WIT names, allowing queries to work across different process templates.

---

Appendix B Executive Summary

- **Key Takeaway**: Appendix B provides a complete syntax reference and 50 cross-platform query templates translating between Jira JQL, Azure DevOps WIQL, and Assets AQL.
- **Key Takeaway**: Translating query patterns between Atlassian and Microsoft ecosystems requires mapping corresponding relational operators and temporal functions.
- **Key Takeaway**: Optimizing query performance prevents long-running database locks and speeds up dashboard widget rendering across enterprise portals.

---

Executive & Practitioner Knowledge Assessment