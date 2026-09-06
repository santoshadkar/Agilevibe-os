import os
import json

# Full Masterclass Curriculum Data Generator for data/curriculum.js

def build_js():
    import generate_final_curriculum as m1_module
    import append_modules_to_script as m2_module

    m1 = m1_module.m1
    m2 = m2_module.generate_curriculum()[1]

    # Module 3
    m3 = {
        "id": "module-3",
        "number": "03",
        "title": "Leveraging AI for Strategic Decision Making & Business Data Analytics",
        "subtitle": "Data-Driven Decision Making, Data to Strategic Insights, Applications of ML Models & Transformative Impact of GenAI on Business Data Analytics",
        "duration": "75 min read",
        "level": "Executive Strategy",
        "summary": "Transform raw corporate data into strategic C-Suite insights. Master data-driven decision-making frameworks, apply predictive ML models across business functions, and harness Generative AI for automated SQL data analytics, natural language BI querying, and executive reporting.",
        "topics": [
          {
            "id": "m3-t1",
            "title": "1. Data-Driven Decision Making: Transforming Data into Strategic Insights",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.1 Data-Driven Decision Making & Data Value Chain</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Build an end-to-end data value chain to convert raw transactional databases into actionable C-Suite strategy.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 5-Stage Data-to-Insight Value Chain</h4>
              <p>Converting fragmented operational tables into strategic leverage requires a structured data pipeline:</p>

              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.95rem; line-height: 1.6;">
                  Raw Operational Data (SQL/ERP/CRM) ➔ Data Cleaning & Lakehouse Feature Store ➔ Predictive ML Inference ➔ Strategic C-Suite Insight ➔ Executive Action & ROI Realization
                </code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Overcoming Enterprise Data Silos</h4>
              <p>Most enterprises suffer from 'Data Dark Matter'—unstructured PDFs, legacy mainframes, and disconnected CRM databases. An AI Leader must deploy unified cloud data lakehouses (Snowflake, Databricks) and automated ETL feature stores before deploying downstream ML models.</p>
            """,
            "keyQuestions": [
              "How can an organization eliminate data silos between ERP, CRM, and SQL ledgers to feed real-time ML feature stores?",
              "What is 'Data Dark Matter' and how does an AI lakehouse unlock value from uncatalogued enterprise PDFs?"
            ]
          },
          {
            "id": "m3-t2",
            "title": "2. Enterprise Applications of Machine Learning Models",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.2 Machine Learning Application Matrix Across Business Domains</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Map predictive algorithms directly to enterprise ROI across Finance, Marketing, Operations, and Risk Management.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">The Functional ML Application Matrix</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Business Domain</th>
                      <th>Optimal ML Model</th>
                      <th>Input Features (X)</th>
                      <th>Strategic Target Outcome (Y)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Customer Churn Prediction</strong></td>
                      <td>XGBoost / LightGBM</td>
                      <td>Login frequency, support ticket count, NPS score, contract end date.</td>
                      <td>Predicts 30-day churn probability to trigger retention discounts.</td>
                    </tr>
                    <tr>
                      <td><strong>Supply Chain Demand Forecasting</strong></td>
                      <td>Temporal Fusion Transformer (TFT) / Prophet</td>
                      <td>Daily SKU sales history, regional macro economics, promotional calendar.</td>
                      <td>Optimizes warehouse re-order points, reducing stockouts by 40%.</td>
                    </tr>
                    <tr>
                      <td><strong>Financial Fraud Scoring</strong></td>
                      <td>Isolation Forests + Graph Neural Networks (GNN)</td>
                      <td>Transaction amount, device IP, geo-velocity, account graph connections.</td>
                      <td>Scores payment stream in &lt;50ms, declining fraudulent charges automatically.</td>
                    </tr>
                    <tr>
                      <td><strong>Employee Attrition Risk</strong></td>
                      <td>Cox Proportional Hazards (Survival Analysis)</td>
                      <td>Tenure, promotion history, peer turnover, manager 1-on-1 sentiment.</td>
                      <td>Identifies high-performer flight risk 6 months prior to resignation.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "What features provide the highest predictive signal for customer churn modeling?",
              "Why is XGBoost preferred over Deep Learning for tabular financial data?"
            ]
          },
          {
            "id": "m3-t3",
            "title": "3. Transformative Impact of GenAI on Business Data Analytics",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.3 Text-to-SQL & Conversational BI Analytics</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Democratize enterprise BI by allowing non-technical leaders to query cloud data lakehouses using natural language prompts.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Conversational BI & Text-to-SQL Architecture</h4>
              <p>Text-to-SQL agents allow non-technical executives to ask plain English questions (e.g. <em>'Which product categories in the West region had declining gross margins in Q3?'</em>) and receive instant SQL queries, data tables, and auto-generated charts.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Security & Guardrails in Text-to-SQL Agents</h4>
              <ul class="curriculum-list">
                <li><strong>Read-Only Database Credentials:</strong> Prevent accidental SQL <code>DROP</code> or <code>DELETE</code> statements by restricting LLM DB permissions.</li>
                <li><strong>Schema Masking:</strong> Provide LLMs with schema DDLs containing anonymized column names to protect PII.</li>
                <li><strong>SQL Syntax Validation:</strong> Run generated queries through a parser (e.g. <code>sqlglot</code>) before execution to prevent SQL injection.</li>
              </ul>
            """,
            "keyQuestions": [
              "How do Text-to-SQL agents ensure schema validation and prevent dangerous write/delete queries?",
              "What is the role of semantic layer tools (Cube, dbt) in standardizing business definitions for LLMs?"
            ]
          }
        ],
        "resources": [
          { "name": "McKinsey Data-Driven Decision Making & Analytics Guide PDF", "type": "Advisory PDF", "url": "https://www.mckinsey.com/capabilities/quantumblack/our-insights" },
          { "name": "Snowflake Enterprise Data Lakehouse & Feature Store Architecture Whitepaper PDF", "type": "Whitepaper PDF", "url": "https://www.snowflake.com/resource/data-lakehouse-architecture/" },
          { "name": "Databricks Lakehouse Platform Blueprint PDF", "type": "Architecture PDF", "url": "https://www.databricks.com/resources/ebook/lakehouse-architecture-guide" },
          { "name": "DIN-SQL: Decomposed In-Context Learning for Complex Text-to-SQL (ArXiv PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2304.11015.pdf" },
          { "name": "Gartner Enterprise Analytics & BI Platform Magic Quadrant PDF", "type": "Gartner PDF", "url": "https://www.gartner.com/en/documents/4001234" }
        ]
    }

    # Module 4
    m4 = {
        "id": "module-4",
        "number": "04",
        "title": "Simplifying Digital Marketing, Sales & MarTech with AI",
        "subtitle": "Content Strategy & Creation, Creative Ad Simplification, SEO/SEM Augmentation, Lead Gen to Conversions, MarTech & Customer Loyalty",
        "duration": "75 min read",
        "level": "Functional Application",
        "summary": "Transform marketing and sales organizations with AI. Master GenAI content strategy, ad creative simplification, AI-driven SEO/SEM search optimization, predictive lead generation to conversion pipelines, MarTech stack integration, marketing analytics, and customer loyalty models.",
        "topics": [
          {
            "id": "m4-t1",
            "title": "1. Content Strategy & Creation using Generative AI",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.1 Multi-Channel GenAI Content Repurposing & Ad Creatives</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Scale marketing content generation 10x while maintaining brand voice and multi-modal creative quality.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Automated Content Atomization Pipeline</h4>
              <p>Enterprise marketing teams use LLMs to atomize a single 20-page whitepaper into 15 LinkedIn posts, 3 email newsletter drips, 5 ad copy variations, and 2 executive summary briefs instantly.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Multi-Modal Ad Creative Generation</h4>
              <p>Combine image generation APIs (Midjourney, Flux, Stable Diffusion) with text LLMs to create 50 ad background and copy variations for rapid multivariate A/B testing on Meta and Google Ads.</p>
            """,
            "keyQuestions": [
              "How can marketing leaders maintain brand voice consistency across automated GenAI copy pipelines?",
              "What copyright risks exist when using open diffusion models for commercial ad campaign graphics?"
            ]
          },
          {
            "id": "m4-t2",
            "title": "2. Generative Engine Optimization (GEO) & Search Marketing",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.2 Generative Engine Optimization (GEO)</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Optimize brand content so it is indexed and cited by conversational AI engines (ChatGPT, Perplexity, Claude).</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The Paradigm Shift from SEO to GEO</h4>
              <p>Traditional SEO optimizes for keyword rank lists on Google. <strong>Generative Engine Optimization (GEO)</strong> optimizes for inclusion inside conversational AI synthesis blocks (ChatGPT Search, Perplexity AI, Google Gemini Overviews).</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Core GEO Tactics</h4>
              <ul class="curriculum-list">
                <li><strong>Authoritative Quotation & Statistics:</strong> AI models prioritize text containing exact numeric data, expert quotes, and authoritative academic citations.</li>
                <li><strong>Structured Schema Markup:</strong> Implement JSON-LD schema markup to make data easily digestible for RAG web crawlers.</li>
                <li><strong>Direct Answer Formatting:</strong> Structure content into clear <code>Q&A</code> formats that map directly to common user prompts.</li>
              </ul>
            """,
            "keyQuestions": [
              "How does Generative Engine Optimization (GEO) differ from traditional Google SEO tactics?",
              "Why are authoritative statistics and schema markup critical for being cited in Perplexity Search?"
            ]
          },
          {
            "id": "m4-t3",
            "title": "3. AI-Powered Sales: Lead Generation to Conversion",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.3 Predictive Lead Scoring & Autonomous SDR Agents</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Automate lead enrichment, qualification, outreach personalization, and CRM meeting updates.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Autonomous SDR Workflows</h4>
              <p>Autonomous AI SDR agents continuously monitor web intent signals, enrich incoming lead profiles via APIs (Clearbit, ZoomInfo), score conversion probability, draft hyper-personalized outbound emails, and log call transcript summaries directly into Salesforce.</p>
            """,
            "keyQuestions": [
              "What is the optimal handoff point between an autonomous AI SDR agent and a human Account Executive?",
              "How can revenue teams use conversation intelligence (Gong/Chorus) to train predictive win-rate models?"
            ]
          },
          {
            "id": "m4-t4",
            "title": "4. MarTech Integration, Marketing Analytics & Driving Customer Loyalty",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.4 MarTech Integration, Attribution Modeling & CLV</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Integrate Customer Data Platforms (CDP) with Machine Learning multi-touch attribution and Customer Lifetime Value (CLV) scoring.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Multi-Touch Attribution (MTA) & CLV Modeling</h4>
              <p>Replace simplistic last-click attribution with Markov Chain and Shapley Value multi-touch attribution models to accurately allocate marketing spend across paid ads, content, and events.</p>
            """,
            "keyQuestions": [
              "Why are Shapley Value attribution models superior to last-touch attribution for enterprise B2B sales cycles?",
              "How do predictive Customer Lifetime Value (CLV) scores inform real-time ad bid multipliers?"
            ]
          }
        ],
        "resources": [
          { "name": "HubSpot State of AI in Marketing & Sales Report PDF", "type": "Industry Report PDF", "url": "https://www.hubspot.com/state-of-ai" },
          { "name": "Generative Engine Optimization (GEO) Research Paper PDF (Princeton & Georgia Tech)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2311.09735.pdf" },
          { "name": "Salesforce Sales Cloud AI & Autonomous SDR Whitepaper PDF", "type": "Whitepaper PDF", "url": "https://www.salesforce.com/products/sales-cloud/ai-for-sales/" },
          { "name": "Gong.io Conversation Intelligence & Revenue AI Whitepaper", "type": "Industry Whitepaper", "url": "https://www.gong.io/revenue-intelligence/" },
          { "name": "Google Search Central AI Content Guidelines PDF", "type": "Official Guidance PDF", "url": "https://developers.google.com/search/docs/fundamentals/ai-generated-content" }
        ]
    }

    print("M1 to M4 built...")
    return [m1, m2, m3, m4]

if __name__ == "__main__":
    build_js()
