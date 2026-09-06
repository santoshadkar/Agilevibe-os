import os

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

EXPANSIONS = {
    "chapters/part1_coaching/ch02_agile_coaching_mastery.md": """# Chapter 2: The Mastery of Agile Coaching

> *"Coaching is unlocking a person's or team's potential to maximize their own performance. It is helping them to learn rather than teaching them."* — Timothy Gallwey

---

## 2.1 The Agile Coaching Competency Framework

The Agile Coaching Institute (ACI) framework, popularized by Lyssa Adkins, defines the multi-dimensional stance of the master coach: possessing a solid foundation in Agile/Lean practitioner knowledge, supported by four primary stances: **Coaching, Mentoring, Teaching, and Facilitating**, underpinned by three domain masteries: **Technical, Business, and Transformational Mastery**.

```
                         [ Agile/Lean Practitioner Knowledge ]
                                           |
         +---------------------------------+---------------------------------+
         |                                 |                                 |
[ Professional Coaching ]         [ Facilitation ]         [ Mentoring ]   [ Teaching ]
         |                                 |                                 |
         +---------------------------------+---------------------------------+
                                           |
      +------------------------------------+------------------------------------+
      |                                    |                                    |
[ Technical Mastery ]            [ Business Mastery ]            [ Transformational Mastery ]
(DevOps, Code Quality, CI/CD)    (Product, Strategy, OKRs)       (Change Mgmt, Org Design)
```

### Navigating the Four Primary Stances

Mastering the coaching craft requires intentionality in selecting the correct stance based on team maturity and context:

1. **Teaching Stance**: Imparting new concepts or structural frameworks. Used when the coachee or team lacks basic knowledge (e.g., teaching a newly formed team how to write Gherkin BDD user stories or how to interpret a Cumulative Flow Diagram).
2. **Mentoring Stance**: Sharing real-world experience and domain expertise. Used when the coachee seeks advice based on the coach's past battle-tested scenarios ("In my previous enterprise transformation, when we faced cross-squad dependency bottlenecks in Jira, we implemented...").
3. **Professional Coaching Stance**: Partnering with coachees in a thought-provoking, creative process that inspires them to maximize their personal and professional potential without supplying the answer. Grounded in ICF core competencies.
4. **Facilitating Stance**: Maintaining a strictly neutral stance while guiding group interactions toward collaborative decision-making, consensus building, and conflict resolution.

---

## 2.2 ICF Competencies & Clean Language in Agile Coaching

Enterprise Agile Coaching requires professional coaching capabilities derived from the International Coaching Federation (ICF) core competencies:

### The Professional Coaching Arc Structure

```mermaid
sequenceDiagram
    participant C as Enterprise Coach
    participant T as Coachee / Executive / Team
    C->>T: 1. Establish Session Agreement ("What outcome do you want to achieve in our session today?")
    C->>T: 2. Explore Current Reality & Underlying System Dynamics
    C->>T: 3. Evoke Awareness ("What are you avoiding seeing in this dependency friction?")
    C->>T: 4. Formulate Actionable Commitments & Accountability Measures
    C->>T: 5. Reflect, Synthesize & Close Session
```

### Clean Language & Metaphor Exploration
Clean Language, developed by David Grove, minimizes coach bias by using non-directive questioning formats:
* *"And when it is [team obstacle], that is like what?"*
* *"And what would [coachee] like to have happen now?"*

### The Socratic Questioning Library for Agile Coaches

* **To uncover hidden impediments**: *"If this initiative failed 6 months from now, what would be the exact root cause?"*
* **To address team conflict**: *"What is the crucial conversation this team is actively avoiding right now?"*
* **To foster personal ownership**: *"What step will you take today that requires the most courage?"*
* **To shift from victim to actor mindset**: *"What sphere of influence do you have over this systemic blocker that you haven't exercised yet?"*

---

## 2.3 Psychological Safety & High-Performing Team Dynamics

Based on Google’s landmark *Project Aristotle* study, **Psychological Safety**—the shared belief that one will not be punished, humiliated, or ostracized for speaking up with ideas, questions, concerns, or mistakes—is the single strongest predictor of team performance and innovation velocity.

### Dr. Timothy R. Clark’s 4 Stages of Psychological Safety

```
[ Stage 1: Inclusion Safety ] ──> [ Stage 2: Learner Safety ] ──> [ Stage 3: Contributor Safety ] ──> [ Stage 4: Challenger Safety ]
```

1. **Inclusion Safety**: Members feel safe to belong, bring their authentic selves to work, and feel accepted regardless of role or background.
2. **Learner Safety**: Members feel safe to ask questions, experiment, give and receive feedback, and admit mistakes without fear of ridicule.
3. **Contributor Safety**: Members feel safe to use their skills to make a meaningful difference and contribute value autonomously.
4. **Challenger Safety**: Members feel safe to challenge the status quo, question executive decisions, and push back on bad requirements without fear of retaliation or career detriment.

---

## 2.4 Comprehensive Agile Coaching Maturity Assessment Matrix

Enterprise coaches utilize standardized health diagnostics to measure team and coaching maturity across critical operational dimensions:

| Dimension | Level 1: Reactive | Level 2: Guided | Level 3: Self-Organizing | Level 4: High-Performing |
| :--- | :--- | :--- | :--- | :--- |
| **Coaching Stance** | Coach defaults to telling/directing | Coach alternates between teaching & mentoring | Coach operates primarily in Socratic coaching stance | Coach acts as systemic facilitator & culture catalyst |
| **Psychological Safety** | Members silent in retros; hide mistakes | Mistakes acknowledged reluctantly | Mistakes treated as learning opportunities | Openly challenge status quo; high vulnerability |
| **Conflict Resolution** | Level 4/5 (Crusade / World War) | Level 3 (Contest / Win-Lose) | Level 2 (Disagreement / Debate) | Level 1 (Problem to Solve constructively) |
| **Empowerment Velocity** | Decisions escalated to management | Decisions made with PO approval | Team decides technical architecture autonomously | Full end-to-end product & delivery ownership |
""",

    "chapters/part2_jira_dc/ch05_jira_dc_architecture.md": """# Chapter 5: Jira Data Center Architecture & Administration

> *"Jira Data Center provides high availability, disaster recovery, and uncompromised performance at enterprise scale. Enterprise coaches and admins must master its architectural foundation to support thousands of concurrent users."*

---

## 5.1 Jira Data Center Architecture Blueprint

Jira Data Center operates as an active-active clustered architecture, distributing user traffic across multiple application nodes via a high-performance load balancer.

```mermaid
graph TD
    User[Enterprise Users / API Clients] --> LB[Load Balancer / HAProxy / AWS ALB]
    LB --> Node1[Jira DC Node 1 (App)]
    LB --> Node2[Jira DC Node 2 (App)]
    LB --> NodeN[Jira DC Node N (App)]
    
    Node1 <--> SharedFS[(Shared File System / NFS / EFS)]
    Node2 <--> SharedFS
    NodeN <--> SharedFS
    
    Node1 <--> DB[(Shared RDBMS: PostgreSQL / Oracle / SQL Server)]
    Node2 <--> DB
    NodeN <--> DB
    
    Node1 <--> Hazelcast((Hazelcast In-Memory Cluster Cache Mesh))
    Node2 <--> Hazelcast
    NodeN <--> Hazelcast
```

### Core Infrastructure Components

1. **Load Balancer**: Manages session affinity (sticky sessions) or cookie-based routing across nodes (`ALB` or `HAProxy`).
2. **Application Nodes**: Dedicated Linux nodes running Java Virtual Machines (JVMs) configured with tuned heap allocations (typically 16GB–32GB RAM per node).
3. **Shared File System (NFS / AWS EFS)**: Stores attachments, avatars, plugin data, and index snapshots shared across all cluster nodes.
4. **Database (RDBMS)**: High-performance relational database (PostgreSQL 14+ recommended) with dedicated read replicas and connection pooling (`PgBouncer`).
5. **Hazelcast Cluster Cache**: In-memory caching layer ensuring rapid state sync (e.g., active sessions, search indexes, custom field caches) between nodes over private high-speed network interfaces.

---

## 5.2 Enterprise JVM Tuning & Database Optimization

Enterprise Jira DC environments often experience garbage collection pauses or database connection exhaustion under heavy concurrent load.

### Recommended JVM Arguments (`setenv.sh`)

```bash
# Recommended JVM Heap & GC Settings for Jira Data Center 9.x / 10.x
JVM_MINIMUM_MEMORY="16g"
JVM_MAXIMUM_MEMORY="16g"

JVM_SUPPORT_RECOMMENDED_ARGS="-server \
-XX:+UseG1GC \
-XX:+ExplicitGCInvokesConcurrent \
-XX:MaxGCPauseMillis=200 \
-XX:InitiatingHeapOccupancyPercent=45 \
-XX:G1ReservePercent=15 \
-XX:MinMetaspaceFreeRatio=50 \
-XX:MaxMetaspaceFreeRatio=80 \
-Djava.awt.headless=true \
-Datlassian.indexing.batch.size=100"
```

### PostgreSQL Optimization Parameters (`postgresql.conf`)

```ini
# PostgreSQL Parameters for High-Throughput Jira Data Center
max_connections = 500
shared_buffers = 16GB
effective_cache_size = 48GB
maintenance_work_mem = 2GB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 1.1
work_mem = 64MB
```

---

## 5.3 Security, Permission Schemes & Issue Security Governance

In large enterprise Data Center instances (over 500,000 issues & 10,000 users), permissive security schemes cause severe security leaks and performance degradation.

```mermaid
graph LR
    A[Jira Permission Scheme] --> B[Global Permissions: Admin, System Access]
    A --> C[Project Permissions: Create, Edit, Assign, Transition]
    A --> D[Issue Security Levels: Confidentiality Restrictions]
```

### Best Practices for Enterprise Security Architecture

* **Never assign permissions to individual usernames**: Always use **Project Roles** linked to Enterprise Active Directory / Okta SSO Groups via SCIM or Crowd.
* **Use Issue Security Schemes for sensitive projects**: Restrict viewing of HR, Executive, or Legal issues to specific issue security levels (e.g., `Reporter + Assignee + Executive Security Role`).
* **Audit Indexing & Custom Field Overhead**: Limit custom fields from having global contexts; scope custom fields exclusively to the project types that require them to prevent Lucene index bloat.
""",

    "chapters/part3_jira_cloud/ch09_jira_cloud_architecture.md": """# Chapter 9: Modern Jira Cloud Architecture & Platform Capabilities

> *"Jira Cloud is not just Jira hosted in the cloud; it is a multi-tenant platform with Atlassian Access, cloud-native automation, and global data residency."*

---

## 9.1 Jira Cloud Platform Security & Architecture

Atlassian Cloud operates on AWS multi-region infrastructure providing microservices isolation, centralized identity management, and compliance standards (SOC 2, ISO 27001, HIPAA, GDPR).

```mermaid
graph TD
    Client[Enterprise Web / Mobile / IDE] --> OrgAdmin[Atlassian Access: SSO / SCIM / MFA]
    OrgAdmin --> Tenant[Jira Cloud Enterprise Workspace Tenant]
    Tenant --> Core[Jira Cloud Software Core Engine]
    Tenant --> Automation[Native Automation Engine]
    Tenant --> Forge[Atlassian Forge Serverless Runtime]
    Tenant --> Analytics[Atlassian Analytics & Data Lake]
```

### Core Cloud Architectural Distinctions

1. **Atlassian Access**: Centralized security management covering SAML Single Sign-On (Okta, Azure AD, Ping), SCIM user provisioning, and automated domain enforcement across all Atlassian products.
2. **Data Residency & Sandbox**: Allows organizations to pin Jira Cloud data to specific geographic regions (US, EU, AU, DE, JP) and run isolated Sandbox instances for testing configurations.
3. **Company-Managed vs. Team-Managed Projects**:
   * **Company-Managed**: Admin-governed, standardized workflows, shared permission schemes across projects.
   * **Team-Managed**: Autonomous squad level configuration, simplified board setups, no global admin bottleneck.

---

## 9.2 Company-Managed vs. Team-Managed Comparison Matrix

| Capability | Company-Managed (Classic) | Team-Managed (Next-Gen) |
| :--- | :--- | :--- |
| **Governance Scope** | Jira Site Admin / Global System | Project Admins (Team Level) |
| **Custom Fields** | Shared globally across all projects | Isolated strictly to single project |
| **Workflows** | Complex transitions, conditions, post functions | Drag-and-drop simplified columns |
| **Permission Schemes** | Global permission scheme mappings | Simplified Project Roles (Viewer, Member, Admin) |
| **Best Used For** | Scaled Enterprise portfolios, SAFe, Regulated teams | Autonomous product pods, R&D labs, Marketing squads |
""",

    "chapters/part4_azure_devops/ch13_azure_boards_process.md": """# Chapter 13: Azure Boards & Enterprise Process Architecture

> *"Azure Boards provides native enterprise scale out-of-the-box. Mastering Inherited Processes, Work Item Types, and Rules is key to engineering enterprise delivery."*

---

## 13.1 Azure DevOps Organizational Architecture

Azure DevOps (ADO) structures work across a clean multi-tenant hierarchy:

```
[ Azure Active Directory Tenant ]
               |
[ Azure DevOps Organization (dev.azure.com/YourOrg) ]
               |
[ Team Projects (e.g., CoreBanking, DigitalExperience) ]
               |
[ Process Templates: Agile / Scrum / CMMI / Inherited Process ]
               |
[ Teams & Area Paths (Hierarchical Taxonomy) ]
               |
[ Iteration Paths (Sprints / Program Increments) ]
```

---

## 13.2 Default Process Templates vs. Inherited Custom Processes

Azure DevOps supplies four system processes:
1. **Basic**: Simplified for small teams (`Epic -> Issue -> Task`).
2. **Agile**: Standard user story workflow (`Epic -> Feature -> User Story -> Task`).
3. **Scrum**: Product Backlog Item focus (`Epic -> Feature -> Product Backlog Item -> Task`).
4. **CMMI**: Formal audit compliance (`Epic -> Feature -> Requirement -> Task`).

### Custom Inherited Process Customization

Organizations create **Inherited Processes** (e.g., `Enterprise-Agile-Process`) to safely add custom fields, custom Work Item Types (WITs), and automated business rules.

```mermaid
graph TD
    SystemAgile[System Agile Process] --> InheritedProcess[Custom Inherited Process: Enterprise Agile]
    InheritedProcess --> WIT1[Custom WIT: Architecture Spike]
    InheritedProcess --> WIT2[Custom WIT: Security Audit]
    InheritedProcess --> Rule1[Rule: If Priority == High, Make 'Target Date' Required]
    InheritedProcess --> Rule2[Rule: If State -> Done, Auto-clear Assignee]
```

---

## 13.3 Custom Work Item Rules & Layout Engineering

In Azure DevOps custom inherited processes, rules automate field behaviors:

```json
{
  "name": "Mandatory RCA on Defect Resolution",
  "conditions": [
    {
      "targetField": "System.State",
      "operator": "equals",
      "value": "Closed"
    },
    {
      "targetField": "System.WorkItemType",
      "operator": "equals",
      "value": "Bug"
    }
  ],
  "actions": [
    {
      "actionType": "makeRequired",
      "targetField": "Custom.RootCauseAnalysis"
    }
  ]
}
```
""",

    "chapters/part5_ai_ecosystem/ch17_generative_ai_llms.md": """# Chapter 17: Generative AI, LLMs & Agentic Architecture Essentials

> *"Artificial Intelligence is transitioning from passive predictive analytics to active generative co-pilots and autonomous agentic workflows in enterprise Agile environments."*

---

## 17.1 The GenAI & LLM Technology Stack for Agile Leaders

To effectively coach teams in adopting AI, Enterprise Agile Coaches must understand the technical components underlying modern Large Language Models (LLMs) and Generative AI applications.

```mermaid
graph TD
    UserQuery[User Prompt / User Story Draft] --> Tokenizer[Tokenizer: Text to Numbers]
    Tokenizer --> LLM[Large Language Model: Transformer Neural Net]
    LLM <--> VectorDB[(Vector Database: Chroma / Pinecone / Qdrant)]
    VectorDB <--> RAG[Retrieval-Augmented Generation: Confluence / Jira / ADO Docs]
    LLM --> Output[Structured Output: Gherkin Acceptance Criteria / Code / Report]
```

### Core AI Concepts Demystified for Agile Coaches

1. **Transformer Architecture & Self-Attention**: The core neural network design enabling models to process context dynamically across long text sequences.
2. **Tokenization & Context Windows**: Text is broken down into tokens (~0.75 words per token). Modern LLMs feature context windows ranging from 128k to 2M+ tokens, allowing entire product backlogs or codebases to be ingested.
3. **Embeddings & Vector Search**: Converting text into high-dimensional numerical vectors ($v \\in \\mathbb{R}^{1536}$) enabling semantic search (e.g., finding duplicate Jira stories based on concept rather than exact keyword match).
4. **Retrieval-Augmented Generation (RAG)**: Dynamically querying corporate repositories (Jira, Confluence, SharePoint, Azure Wiki) to inject enterprise context into LLM prompts, preventing hallucinations.

---

## 17.2 Architecture of RAG for Enterprise Backlogs

```python
# Conceptual RAG Pipeline for Jira User Story Deduplication
from sentence_transformers import SentenceTransformer
import numpy as np

# Load Embeddings Model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Sample Existing Jira Stories in Vector DB
existing_stories = [
    "As a user, I want to reset my password using OTP via SMS.",
    "As a customer, I need to pay via PayPal on the checkout screen.",
    "As an admin, I want to export monthly user activity logs to CSV."
]
story_embeddings = model.encode(existing_stories)

# New Incoming Story Draft
new_story = "As a shopper, I want to use PayPal during payment checkout."
new_embedding = model.encode(new_story)

# Cosine Similarity Calculation
similarities = np.dot(story_embeddings, new_embedding) / (
    np.linalg.norm(story_embeddings, axis=1) * np.linalg.norm(new_embedding)
)

print(f"Similarity Score with Story #2: {similarities[1]:.4f}")
if similarities[1] > 0.85:
    print("⚠️ ALERT: Duplicate Story Detected in Jira Backlog!")
```
""",

    "chapters/part6_ai_augmented_coach/ch21_ai_backlog_refinement.md": """# Chapter 21: AI-Powered Backlog Engineering & Story Refinement

> *"Refining a 500-item backlog manually takes hundreds of hours. AI transforms backlog engineering into a real-time, continuous quality synthesis engine."*

---

## 21.1 Automated Acceptance Criteria Generation (Gherkin Format)

AI assistants convert vague feature ideas into robust, testable BDD (Behavior-Driven Development) stories.

```gherkin
Feature: Multi-Factor Authentication during High-Value Transfer

  Scenario: User attempts transfer above daily threshold
    Given a user with a verified account and balance of $10,000
    When the user initiates a wire transfer of $2,500
    Then the system should prompt for a 6-digit SMS OTP code
    And the transfer should remain in "Pending Auth" status for 300 seconds

  Scenario: User fails OTP verification 3 consecutive times
    Given the SMS OTP prompt is displayed
    When the user enters an invalid OTP 3 times
    Then the system should lock outward wire transfers for 24 hours
    And fire a Security Event Alert to Jira Service Management
```

---

## 21.2 AI-Driven Story Splitting (SPIDR Framework)

The SPIDR framework splits large epics into small, estimable stories:

```mermaid
graph TD
    Epic[Large Epic: Global Payment Gateway Integration] --> S[Spikes: Research Stripe vs Adyen APIs]
    Epic --> P[Paths: Credit Card Path first, PayPal Path second]
    Epic --> I[Interfaces: Web UI first, Mobile SDK second]
    Epic --> D[Data: USD Currency first, Multi-currency second]
    Epic --> R[Rules: Simple Flat Fee first, Tiered Tax Rules second]
```

### Python Script: Automated Story Splitting via OpenAI API

```python
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def split_user_story(large_story_description):
    system_prompt = \"\"\"
    You are an expert Agile Product Owner. Apply the SPIDR framework (Spikes, Paths, Interfaces, Data, Rules) 
    to break down the provided large user story into 3-5 smaller, INVEST-compliant user stories.
    Include Gherkin acceptance criteria for each split story.
    \"\"\"
    
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": large_story_description}
        ],
        temperature=0.2
    )
    
    return response.choices[0].message.content

# Example usage
large_story = "As an enterprise admin, I want to manage all user permissions, single sign-on, and audit logs across all regions."
split_results = split_user_story(large_story)
print(split_results)
```
"""
}

def expand():
    for rel, text in EXPANSIONS.items():
        p = os.path.join(BASE_DIR, rel)
        with open(p, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Updated {rel}")

if __name__ == "__main__":
    expand()
