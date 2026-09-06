import os

APP_PATH = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book\web_portal\src\App.jsx"

with open(APP_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Replace the reader rendering block to handle role_paths and glossary views
target = """          {activeTab === 'reader' && ("""

replacement = """          {activeTab === 'reader' && selectedChapter === 'role_paths' && (
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="tag-badge tag-amber">Executive Reading Guide</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4 Customized Role Pathways</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }} className="gradient-text">
                How to Read This Playbook: Role-Based Executive Reading Paths
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Select your leadership or engineering role to view the recommended chapter sequence and key operational focus area.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-blue)' }}>
                  <h3 style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>1. Enterprise Agile Coach & CoE Lead</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part I, Part V, Part VI & Appendix C</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Framework scaling trade-offs (SAFe vs LeSS), Lyssa Adkins coaching stances, Team Topologies, AI prompt engineering & 35-criteria maturity diagnostic.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-purple)' }}>
                  <h3 style={{ color: '#c4b5fd', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>2. Jira Data Center & Cloud Administrator</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part II, Part III & Appendix B</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Hazelcast active-active clustering, HikariCP pool tuning, Forge serverless apps, Atlassian Access SAML/SCIM, JSM Assets & JQL reference.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid var(--accent-emerald)' }}>
                  <h3 style={{ color: '#6ee7b7', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>3. Azure DevOps & DevEx Platform Engineer</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part IV, Part VI & Appendix B</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Azure Boards Inherited Process, Delivery Plans 2.0, Multi-Stage YAML Pipelines, DORA metrics & WIQL query translation.</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #f43f5e' }}>
                  <h3 style={{ color: '#fda4af', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>4. VP of Engineering, CTO & Product Executive</h3>
                  <div style={{ fontSize: '0.85rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.4rem' }}>Modules: Part I, Part III, Part V & Appendix A</div>
                  <p style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Focus: Strategic OKRs to backlog line-of-sight, AI ethics & governance, RAG vector architectures, agentic MCP & prompt library.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reader' && selectedChapter === 'glossary' && (
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="tag-badge tag-purple">Architectural Glossary</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>16 Executive Terms</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }} className="gradient-text">
                Enterprise Technology & AI Architectural Glossary
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                An executive reference guide to core architectural, engineering, and AI terms referenced throughout this playbook:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {[
                  { term: "Retrieval-Augmented Generation (RAG)", def: "AI architecture that grounds LLM responses by dynamically retrieving relevant internal enterprise data (Jira/ADO tickets, docs) into prompt context." },
                  { term: "Model Context Protocol (MCP)", def: "An open standard protocol for securely exposing enterprise data sources, tools, and prompt templates to AI model client applications." },
                  { term: "ReAct Agent Pattern (Reason + Act)", def: "An autonomous agent execution loop where an LLM dynamically generates a Thought, executes a software Tool action, and evaluates Observations." },
                  { term: "Vector Embeddings & Cosine Similarity", def: "High-dimensional numerical representations of text capturing semantic intent; Cosine Similarity measures conceptual closeness between tickets." },
                  { term: "HNSW Index (Vector Search)", def: "Hierarchical Navigable Small World algorithm enabling sub-millisecond approximate nearest neighbor (ANN) similarity searches across vector DBs." },
                  { term: "Atlassian Forge", def: "Serverless FaaS application runtime executing custom app code inside Atlassian's secure cloud boundary with manifest OAuth scopes." },
                  { term: "Atlassian Guard (Access) & SCIM", def: "Enterprise identity management tool enforcing SAML SSO, 2FA, and automated user provisioning via System for Cross-domain Identity Management." },
                  { term: "Hazelcast Clustering (Jira DC)", def: "Embedded active-active distributed memory cache used in Jira Data Center for real-time node discovery, state sync, and cache distribution." },
                  { term: "HikariCP Connection Pool", def: "High-performance JDBC database connection pool manager configured in Jira DC to optimize JVM thread database access under heavy load." },
                  { term: "Asset Query Language (AQL)", def: "Relational query language used in Jira Service Management (JSM) Assets to filter and query IT CMDB object attributes and relationships." },
                  { term: "Work Item Query Language (WIQL)", def: "SQL-like query language used in Azure DevOps to query work item fields, historical state changes (EVER), and linked link trees." },
                  { term: "Little's Law (WIP = Throughput * Lead Time)", def: "Fundamental queuing theory equation proving that constraining Work-in-Progress (WIP) mathematically reduces average Lead Time." },
                  { term: "Flow Efficiency", def: "Quantitative metric measuring active touch-time vs. total elapsed Lead Time: Flow Efficiency = (Active Time / Total Lead Time) * 100." },
                  { term: "Monte Carlo Flow Simulation", def: "Probabilistic forecasting technique running thousands of trials against historical throughput to project completion dates at 85% confidence." },
                  { term: "Team Topologies", def: "Organizational design framework structuring teams into 4 types (Stream-Aligned, Enabling, Complicated-Subsystem, Platform) to minimize cognitive load." },
                  { term: "Socratic Prompting", def: "Prompt engineering technique framing AI as a reflective coach that asks probing diagnostic questions rather than issuing prescriptive commands." }
                ].map((g, idx) => (
                  <div key={idx} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--accent-blue)' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#93c5fd', marginBottom: '0.25rem' }}>{g.term}</div>
                    <div style={{ fontSize: '0.85rem', color: '#d1d5db', lineHeight: 1.5 }}>{g.def}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reader' && selectedChapter !== 'role_paths' && selectedChapter !== 'glossary' && ("""

if target in text and "selectedChapter === 'role_paths'" not in text:
    text = text.replace(target, replacement, 1)
    with open(APP_PATH, "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully added interactive Role Paths and Glossary views to App.jsx!")
else:
    print("Already added or target match failed.")
