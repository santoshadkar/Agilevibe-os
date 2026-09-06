import os
import json

# Self-contained script to build all 12 modules into data/curriculum.js

def generate_curriculum_js():
    import generate_final_curriculum as m1_mod
    import append_modules_to_script as m2_mod
    import build_full_curriculum_master as m34_mod

    m1 = m1_mod.m1
    m2 = m2_mod.generate_curriculum()[1]
    # Modules 3 to 12
    m3 = {
        "id": "module-3",
        "number": "03",
        "title": "Leveraging AI for Strategic Decision Making & Business Data Analytics",
        "subtitle": "Lakehouse Medallion Architecture, DIN-SQL Text-to-SQL, Bayesian Decision Theory, Causal AI & Executive Copilots",
        "duration": "90 min read",
        "level": "Executive & Technical Strategy",
        "summary": "Transform corporate analytics into strategic executive leverage. Master Lakehouse Medallion storage architectures, Decomposed In-Context Text-to-SQL (DIN-SQL), Bayesian decision theory under uncertainty, Causal AI do-calculus $P(Y \\mid \\text{do}(X))$, and autonomous Executive AI Copilots.",
        "topics": [
          {
            "id": "m3-t1",
            "title": "1. Enterprise Modern Data Stack & Lakehouse AI Architecture",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.1 Medallion Storage Architecture & Feature Store Integration</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Architect Bronze, Silver, and Gold data layers over open table formats (Delta Lake, Apache Iceberg).</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Medallion Storage Layer Mechanics</h4>
              <ul class="curriculum-list">
                <li><strong>Bronze Layer (Raw Ingestion):</strong> Unaltered append-only stream of transactional SQL logs, clickstream JSON, and ERP events.</li>
                <li><strong>Silver Layer (Cleansed & Enforced):</strong> Schema-validated, deduplicated tables with automated quality assertions (Great Expectations).</li>
                <li><strong>Gold Layer (Business Aggregations):</strong> Star-schema dimensional data marts and real-time feature stores (Feast/Hopsworks) feeding ML inference models.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Open Metadata & Automated Lineage Auditing</h4>
              <p>Deploying OpenMetadata and Apache Atlas tracks column-level data lineage, providing C-Suite auditability for regulatory compliance (GDPR, BCBS 239) before feeding data to AI models.</p>
            """,
            "keyQuestions": [
              "Why is the Medallion Architecture (Bronze/Silver/Gold) essential for training reliable enterprise ML models?",
              "How do open table formats (Apache Iceberg, Delta Lake) prevent vendor lock-in for enterprise data lakehouses?"
            ]
          },
          {
            "id": "m3-t2",
            "title": "2. Text-to-SQL Architecture & Natural Language Data Querying (DIN-SQL)",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.2 Decomposed In-Context Text-to-SQL (DIN-SQL) & Schema Linking</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Decompose complex natural language queries into verified SQL statements using DIN-SQL architecture.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Why Naive Text-to-SQL Fails (<30% Accuracy)</h4>
              <p>Naive LLM prompts fail on enterprise databases due to massive schemas (100+ tables), ambiguous column names, and multi-join logic. **DIN-SQL (Decomposed In-Context Learning)** breaks Text-to-SQL into 4 sub-tasks to achieve $>85\%$ benchmark accuracy:</p>

              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.95rem; line-height: 1.6;">
                  1. Schema Linking (Entity Match) ➔ 2. Query Classification (Select vs GroupBy vs Join) ➔ 3. Sub-SQL Generation ➔ 4. SQLGlot Self-Correction
                </code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Execution Guardrails & Read-Only Sandboxing</h4>
              <p>Text-to-SQL execution engines restrict LLMs to read-only database replicas, wrap calls in strict execution time limits (e.g. 5-second timeout), and validate generated SQL against AST parsers before execution.</p>
            """,
            "keyQuestions": [
              "How does DIN-SQL schema linking prevent LLMs from generating invalid table join conditions?",
              "What security sandboxing is mandatory before deploying natural language SQL querying to non-technical executives?"
            ]
          },
          {
            "id": "m3-t3",
            "title": "3. Bayesian Decision Theory & Strategic Uncertainty Quantification",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.3 Bayesian Posterior Inference & Expected Value of Perfect Information (EVPI)</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Quantify executive decision risks under market uncertainty using Bayesian probability and Monte Carlo simulations.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Bayesian Updating Formula for Strategic Decisions</h4>
              <p>Executives update prior market beliefs $P(\theta)$ with observed empirical market data $D$ to obtain updated posterior risk distributions $P(\theta \mid D)$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>P(\theta \mid D) = \frac{P(D \mid \theta) \cdot P(\theta)}{P(D)} = \frac{P(D \mid \theta) \cdot P(\theta)}{\int_{\Theta} P(D \mid \theta') \cdot P(\theta') \, d\theta'}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Expected Value of Perfect Information (EVPI) Calculus</h4>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\text{EVPI} = \mathbb{E}_{\text{Data}} \left[ \max_{a \in \mathcal{A}} \mathbb{E}[U(a, \theta) \mid D] \right] - \max_{a \in \mathcal{A}} \mathbb{E}[U(a, \theta)]</code>
              </div>
            """,
            "keyQuestions": [
              "How does Bayesian inference prevent C-Suite executives from overreacting to short-term market noise?",
              "What does the Expected Value of Perfect Information (EVPI) tell a Chief Strategy Officer about market research spend?"
            ]
          },
          {
            "id": "m3-t4",
            "title": "4. Causal AI & Automated Root-Cause Anomaly Attribution",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.4 Structural Causal Models (SCMs) & Do-Calculus Interventions</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Move beyond correlation to true cause-and-effect attribution using Pearl's do-calculus.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Do-Calculus Interventional Distribution Equation</h4>
              <p>Correlation $P(Y \mid X = x)$ is NOT causation. **Structural Causal Models (SCM)** calculate the exact intervention effect $P(Y \mid \text{do}(X = x))$ of a strategic decision:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>P(Y \mid \text{do}(X = x)) = \sum_{z} P(Y \mid X = x, Z = z) \cdot P(Z = z) \quad \Big( \text{where } Z \text{ represents confounding variables} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Automated Root-Cause Metric Decomposition Trees</h4>
              <p>When enterprise quarterly revenue drops unexpectedly, Causal AI engines decompose the metric tree across dimensions (region, channel, product category) to pinpoint the precise root-cause driver in seconds.</p>
            """,
            "keyQuestions": [
              "Why does observational correlation $P(Y \\mid X)$ lead to catastrophic strategic missteps compared to $P(Y \\mid \\text{do}(X))$?",
              "How do Structural Causal Models (SCMs) eliminate Simpson's Paradox in business analytics?"
            ]
          },
          {
            "id": "m3-t5",
            "title": "5. Executive AI Copilots & Real-Time Strategic Dashboarding",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">3.5 Autonomous BI Copilots & Executive Narrative Generation</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Deploy autonomous BI Copilots that synthesize live KPI streams into board-ready executive summaries.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Autonomous BI Copilot Architecture</h4>
              <p>BI Copilots combine Text-to-SQL data engines, Causal AI root-cause models, and LLM text generation to auto-generate weekly C-Suite briefing memos detailing revenue variances, competitive shifts, and recommended action steps.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Real-Time Anomaly Alerting & Scenario Playbooks</h4>
              <p>When core operational metrics drift beyond statistical control limits ($\pm 3\sigma$), Executive Copilots automatically alert leadership teams and present pre-computed scenario mitigation playbooks.</p>
            """,
            "keyQuestions": [
              "How do Executive AI Copilots synthesize multi-dimensional metric anomalies into concise C-Suite briefing memos?",
              "What controls prevent BI Copilots from hallucinating incorrect financial narrative explanations?"
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
    m4 = {
        "id": "module-4",
        "number": "04",
        "title": "Simplifying Digital Marketing, Sales & MarTech with AI",
        "subtitle": "Predictive CLV Calculus, Generative Engine Optimization (GEO), Autonomous SDR Agents, Price Elasticity & Markov Attribution",
        "duration": "90 min read",
        "level": "Functional & Technical Application",
        "summary": "Transform marketing, sales, and MarTech with advanced AI. Master predictive BG/NBD Customer Lifetime Value (CLV) formulas, Generative Engine Optimization (GEO) citation architecture, Autonomous SDR agentic pipelines, dynamic price elasticity ($\\epsilon$), real-time conversation intelligence, and Markov Chain multi-touch attribution.",
        "topics": [
          {
            "id": "m4-t1",
            "title": "1. Predictive Customer Lifetime Value (CLV/LTV) & Churn Propensity",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.1 BG/NBD Customer Lifetime Value (CLV) & Churn Calculus</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive Expected Customer Lifetime Value using BG/NBD frequency and Gamma-Gamma monetary models.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Expected Customer Lifetime Value Integral Formula</h4>
              <p>Continuous CLV forecasting combines transaction repeat rates $S(t)$ with expected monetary margin $\mathbb{E}[m(t)]$ discounted by interest rate $d$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\mathbb{E}[\text{CLV}] = \int_0^T \mathbb{E}[m(t)] \cdot S(t) \cdot (1 + d)^{-t} \, dt</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Predictive Churn Scoring & Next-Best-Action (NBA)</h4>
              <p>Combining BG/NBD models with XGBoost churn classifiers evaluates user product usage drop-offs. When churn probability exceeds $P(\text{Churn}) > 0.75$, the Customer Data Platform (CDP) triggers automated Next-Best-Action retention campaigns.</p>
            """,
            "keyQuestions": [
              "Why does the BG/NBD model outperform simple historical average spend for predicting future customer transactions?",
              "How do real-time Customer Lifetime Value (CLV) scores dynamically adjust ad bid multipliers in programmatic DSPs?"
            ]
          },
          {
            "id": "m4-t2",
            "title": "2. Generative Engine Optimization (GEO) & AI Search Visibility",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.2 Generative Engine Optimization (GEO) Score Formula</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Optimize brand content so it is indexed and cited by conversational AI engines (ChatGPT, Perplexity, Gemini).</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The Shift from Keyword SEO to Generative GEO</h4>
              <p>Traditional SEO optimizes for keyword rank lists on Google. **Generative Engine Optimization (GEO)** optimizes content for inclusion inside LLM answer blocks (ChatGPT Search, Perplexity AI, Google AI Overviews):</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{GEO\_Score} = \alpha \cdot \text{InformationGain} + \beta \cdot \text{AuthorityRank} + \gamma \cdot \text{StructuredSchemaDensity}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. GEO Citation Architecture</h4>
              <ul class="curriculum-list">
                <li><strong>Authoritative Data Quotes:</strong> LLMs prioritize text containing exact empirical statistics, original benchmarks, and expert citations.</li>
                <li><strong>JSON-LD Schema Markup:</strong> Implementing rich schema tags allows RAG crawlers to extract clear semantic entities $(Subject, Predicate, Object)$.</li>
              </ul>
            """,
            "keyQuestions": [
              "How does Generative Engine Optimization (GEO) differ fundamentally from traditional Google keyword SEO?",
              "Why is Information Gain score critical for ensuring your brand is cited as a source in Perplexity AI responses?"
            ]
          },
          {
            "id": "m4-t3",
            "title": "3. Autonomous SDR Agents & Hyper-Personalized Outbound Engineering",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.3 Agentic SDR Outreach & Intent Lead Scoring</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Deploy autonomous AI SDR agents for prospect enrichment, intent scoring, and personalized outreach.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Autonomous SDR Agent Loop</h4>
              <p>Autonomous AI SDR swarms monitor web intent signals (G2, Bombora), enrich prospect profiles via APIs (ZoomInfo, LinkedIn), evaluate lead qualification scores, and generate 1-to-1 tailored outreach emails based on recent prospect SEC filings or podcast interviews.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Intent-Based Lead Scoring Matrix</h4>
              <p>Combining Firmographic Fit + Behavioral Signals + Intent Velocity scores leads in real time, routing high-intent prospects directly to Account Executives for booking calls.</p>
            """,
            "keyQuestions": [
              "What is the optimal handoff workflow between an autonomous AI SDR agent and a human Account Executive?",
              "How do RAG pipelines generate hyper-personalized cold outreach hooks without hallucinating prospect facts?"
            ]
          },
          {
            "id": "m4-t4",
            "title": "4. Real-Time Conversation Intelligence & Dynamic Price Optimization",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.4 Conversation Speech NLP & Dynamic Price Elasticity Calculus</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Detect sales objection cues via speech NLP and optimize prices using price elasticity equations.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Dynamic Price Elasticity Equation</h4>
              <p>AI pricing engines calculate real-time **Price Elasticity of Demand ($\epsilon$)** to optimize revenue margins:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\epsilon = \frac{\% \Delta Q}{\% \Delta P} = \frac{d Q}{d P} \times \frac{P}{Q} \quad \Big( |\epsilon| > 1 \implies \text{Elastic Demand}, \, |\epsilon| < 1 \implies \text{Inelastic Demand} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Gong-Style Speech Conversation Intelligence</h4>
              <p>Real-time speech-to-text NLP transcribes sales calls, flags competitor mentions and price resistance cues live during calls, and surfaces recommended battlecard responses to sales reps on-screen.</p>
            """,
            "keyQuestions": [
              "How does real-time price elasticity ($\\epsilon$) tuning maximize e-commerce margin during demand surges?",
              "How does conversation speech intelligence reduce sales rep onboarding time by 50%?"
            ]
          },
          {
            "id": "m4-t5",
            "title": "5. Programmatic Ad Bidding Algorithms & Attribution AI",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">4.5 Multi-Armed Bandit Ad Bidding & Markov Chain Attribution</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Deploy Multi-Armed Bandit (MAB) algorithms for RTB ad spend and Markov Chain multi-touch attribution.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Multi-Touch Markov Chain Attribution Credit Formula</h4>
              <p>Replacing simplistic last-click attribution, **Markov Chain** attribution measures the revenue removal effect of each touchpoint $k$ across customer conversion journeys:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Credit}_k = \frac{\text{Removal Effect}_k}{\sum_j \text{Removal Effect}_j} \quad \Big( \text{Removal Effect}_k = 1 - \frac{P(\text{Conversion} \setminus \{k\})}{P(\text{Conversion})} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Real-Time Bidding (RTB) Multi-Armed Bandits</h4>
              <p>Multi-Armed Bandit (Thompson Sampling) algorithms dynamically allocate ad budget between high-performing proven channels (exploitation) and novel ad creative placements (exploration) in under 10ms.</p>
            """,
            "keyQuestions": [
              "Why is Markov Chain removal effect attribution superior to legacy last-click attribution?",
              "How does Thompson Sampling balance exploration and exploitation in real-time programmatic ad auctions?"
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
    m5 = {
        "id": "module-5",
        "number": "05",
        "title": "Optimizing Operations & Supply Chain with AI",
        "subtitle": "Temporal Fusion Forecasting, IoT Vibration FFT Maintenance, CVRP Routing, Dynamic Safety Stock & Digital Twin Simulation",
        "duration": "90 min read",
        "level": "Functional & Technical Application",
        "summary": "Achieve operational excellence with AI. Derive Temporal Fusion Transformer (TFT) demand forecasting equations, IoT sensor Fast Fourier Transform (FFT) vibration calculus for predictive maintenance, Capacitated Vehicle Routing Problem (CVRP) optimization, dynamic safety stock formulas ($Z_\\alpha$), and Monte Carlo digital twin resilience simulation.",
        "topics": [
          {
            "id": "m5-t1",
            "title": "1. Demand Forecasting Calculus & Temporal Fusion Transformer AI",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">5.1 Neural Demand Forecasting & WAPE Metrics</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive Weighted Absolute Percentage Error (WAPE) and deploy Temporal Fusion Transformers for multi-horizon demand spikes.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Forecasting Accuracy Metrics: MAPE vs WAPE Equation</h4>
              <p>Standard Mean Absolute Percentage Error (MAPE) divides by actuals, producing division-by-zero errors on zero-sale days. **Weighted Absolute Percentage Error (WAPE)** scales errors across total volume:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{MAPE} = \frac{100\%}{n} \sum_{t=1}^n \left| \frac{y_t - \hat{y}_t}{y_t} \right| \quad \implies \quad \text{WAPE} = \frac{\sum_{t=1}^n |y_t - \hat{y}_t|}{\sum_{t=1}^n y_t}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Temporal Fusion Transformers (TFT) & Bullwhip Effect Suppression</h4>
              <p>Traditional ARIMA fails during promotional surges. TFT neural networks combine static store metadata, known future events (holidays), and past sales velocity to predict multi-horizon demand quantile intervals, suppressing the Bullwhip Effect up the supply chain.</p>
            """,
            "keyQuestions": [
              "Why is WAPE mathematically superior to MAPE for retail SKUs with intermittent zero-sale days?",
              "How does Temporal Fusion Transformer (TFT) quantile forecasting prevent supply chain Bullwhip Effect bull-whips?"
            ]
          },
          {
            "id": "m5-t2",
            "title": "2. IoT Predictive Maintenance (PdM) & Vibration Sensor Calculus",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">5.2 IoT Vibration FFT Spectrum Analysis & Remaining Useful Life (RUL)</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Convert raw 10kHz vibration signals into frequency spectra via Fast Fourier Transform (FFT) to predict machine RUL.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Fast Fourier Transform (FFT) Frequency Spectrum Equation</h4>
              <p>High-frequency accelerometer sensors measure factory turbine vibration $x(t)$. The **Fast Fourier Transform (FFT)** converts time-domain signals into frequency spectra $X(f)$ to isolate bearing harmonic spikes:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>X(f) = \int_{-\infty}^{\infty} x(t) \cdot e^{-j 2 \pi f t} \, dt</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Remaining Useful Life (RUL) Weibull Hazard Modeling</h4>
              <p>Predictive maintenance engines calculate turbine **Remaining Useful Life (RUL)** 14 days prior to failure, scheduling maintenance shifts before catastrophic breakdown occurs.</p>
            """,
            "keyQuestions": [
              "How does converting time-domain vibration data into frequency spectra (FFT) pinpoint specific bearing failures?",
              "What is the financial savings ROI of transitioning from calendar maintenance to RUL predictive maintenance?"
            ]
          },
          {
            "id": "m5-t3",
            "title": "3. Autonomous Vehicle Routing (VRP) & Last-Mile Logistics",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">5.3 Capacitated Vehicle Routing Problem (CVRP) Solvers</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Solve NP-hard fleet routing constraints under vehicle capacity and delivery time window bounds.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. CVRP Mathematical Formulation</h4>
              <p>Minimizing total fleet transit cost $c_{ij}$ across delivery nodes subject to vehicle capacity $Q$ and demand $q_i$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\min \sum_{i=1}^n \sum_{j=1}^n c_{ij} x_{ij} \quad \text{subject to } \sum_{j=1}^n x_{ij} = 1, \quad \sum_{i=1}^n q_i y_i \le Q</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Genetic Algorithms & Scope-1 Carbon Emissions Reduction</h4>
              <p>Combining Genetic Algorithm solvers with real-time GPS traffic feeds calculates optimal multi-stop routes for 1,000+ delivery vans in seconds, reducing fleet fuel usage and Scope-1 carbon emissions by 20%.</p>
            """,
            "keyQuestions": [
              "Why is the Capacitated Vehicle Routing Problem (CVRP) NP-hard and how do Genetic Heuristics solve it in real-time?",
              "How does route optimization directly reduce Scope-1 carbon emissions for corporate ESG reporting?"
            ]
          },
          {
            "id": "m5-t4",
            "title": "4. Dynamic Inventory Control & Safety Stock Optimization",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">5.4 Dynamic Safety Stock Calculus & Multi-Echelon Inventory</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Calculate optimal safety stock buffers under demand variance $\sigma_D$ and lead time variance $\sigma_{LT}$.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Dynamic Safety Stock Formula</h4>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Safety Stock (SS)} = Z_{\alpha} \times \sqrt{\bar{L} \cdot \sigma_D^2 + \bar{D}^2 \cdot \sigma_{LT}^2}</code><br/><br/>
                <code>\text{Target Service Level } 99\% \implies Z_{0.99} = 2.33 \quad \Big( \bar{L} = \text{Avg Lead Time}, \, \sigma_{LT} = \text{Lead Time Variance} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Multi-Echelon Inventory Optimization (MEIO)</h4>
              <p>MEIO balances inventory buffers across raw material suppliers, regional distribution centers (DCs), and retail stores, freeing working capital while preserving 99%+ customer fulfillment SLAs.</p>
            """,
            "keyQuestions": [
              "How does lead time variability ($\\sigma_{LT}$) exponentially increase required safety stock inventory?",
              "What working capital cost savings are unlocked by Multi-Echelon Inventory Optimization (MEIO)?"
            ]
          },
          {
            "id": "m5-t5",
            "title": "5. Enterprise Digital Twins & Supply Chain Resiliency Simulation",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">5.5 Enterprise Digital Twins & Monte Carlo Resiliency Testing</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Simulate global supply chain disruptions across 10,000 Monte Carlo iterations over graph digital twins.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Graph Digital Twin Topology</h4>
              <p>Modeling global factories, warehouses, ports, and transit lanes as a real-time Neo4j graph digital twin $G = (V, E)$ allows executives to trace Tier-1, Tier-2, and Tier-3 supplier dependencies.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Monte Carlo Disruption Stress Testing</h4>
              <p>Simulating port blockades, canal closures, and extreme weather shocks across 10,000 Monte Carlo runs calculates automated **Supply Chain Resilience Scores** ($\frac{\text{Recovery Speed}}{\text{Revenue Loss}}$) and triggers pre-approved autonomous purchase re-routing.</p>
            """,
            "keyQuestions": [
              "How does a graph digital twin simulate Tier-3 supplier failure bottlenecks before disruptions happen?",
              "What metric defines a supply chain's Monte Carlo Resilience Score?"
            ]
          }
        ],
        "resources": [
          { "name": "McKinsey Industry 4.0 & Operations AI Transformation Whitepaper PDF", "type": "Advisory PDF", "url": "https://www.mckinsey.com/capabilities/operations/our-insights" },
          { "name": "Siemens Industrial IoT & Edge Predictive Maintenance Architecture PDF", "type": "Architecture PDF", "url": "https://www.siemens.com/global/en/products/automation/industry-software/mindsphere.html" },
          { "name": "Microsoft GraphRAG: Unlocking LLM Knowledge Graphs (Microsoft Research Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2404.16130.pdf" },
          { "name": "SAP Enterprise Supply Chain Risk & Inventory Optimization Whitepaper PDF", "type": "Whitepaper PDF", "url": "https://www.sap.com/products/scm.html" },
          { "name": "ISO 55001 Asset Management & Predictive Analytics Standard Guide", "type": "Standards Guide", "url": "https://www.iso.org/standard/55001" }
        ]
    }

    m6 = {
        "id": "module-6",
        "number": "06",
        "title": "AI in Human Resources & Talent Management",
        "subtitle": "EEOC 4/5ths Rule Calculus, Cox Survival Attrition, Skill Graph Embeddings, 360 NLP Performance & EU AI Act HR Governance",
        "duration": "90 min read",
        "level": "Functional & Governance Application",
        "summary": "Reinvent workforce management with ethical AI. Master EEOC 4/5ths Rule adverse impact calculus for recruitment, Cox Proportional Hazards survival analysis for employee turnover prediction, Skill Graph vector embeddings for internal mobility, LLM 360-degree performance review synthesis, and EU AI Act High-Risk HR compliance.",
        "topics": [
          {
            "id": "m6-t1",
            "title": "1. AI Talent Acquisition, Resume Parsing & EEOC Non-Bias Screening",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">6.1 Talent Acquisition Calculus & EEOC Non-Bias Compliance</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the EEOC 4/5ths Adverse Impact ratio formula and enforce automated blind resume screening.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. EEOC 4/5ths (80%) Rule Adverse Impact Calculus</h4>
              <p>Under US EEOC guidelines and NYC AEDT Law (Local Law 144), any AI resume screening model must be audited for adverse impact against protected demographic groups:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Adverse Impact Ratio} = \frac{\text{Selection Rate}_{\text{Protected Group}}}{\text{Selection Rate}_{\text{Majority Group}}} = \frac{S_{\text{protected}}}{S_{\text{majority}}}</code><br/><br/>
                <code>\text{Violation Rule: If } \text{Adverse Impact Ratio} < 0.80 \; (80\%), \implies \mathbf{\text{Illegal Adverse Impact Detected!}}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Protected Attribute Masking & Blind Screening</h4>
              <p>Before resume text is fed into LLMs or vector embedding models, automated regex and NER scrubbers mask PII attributes: applicant names, gender pronouns, graduation years (age proxy), zip codes (socioeconomic proxy), and university names (prestige proxy).</p>
            """,
            "keyQuestions": [
              "How does an HR leader mathematically prove that an automated hiring algorithm complies with the EEOC 80% rule?",
              "What proxy variables (zip codes, graduation dates) inadvertently reintroduce bias if not scrubbed during blind screening?"
            ]
          },
          {
            "id": "m6-t2",
            "title": "2. Predictive Talent Retention & Survival Analysis Mathematics",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">6.2 Survival Analysis & Cox Proportional Hazards Attrition Modeling</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Model employee time-to-departure probabilities 6 months in advance using Cox Proportional Hazards.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Cox Proportional Hazards Attrition Equation</h4>
              <p>Standard binary classification fails on attrition timing. **Survival Analysis** models the continuous hazard $h(t \mid \mathbf{x})$ of employee departure at month $t$ given workplace risk factors $\mathbf{x}$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>h(t \mid \mathbf{x}) = h_0(t) \cdot \exp\left( \boldsymbol{\beta}^T \mathbf{x} \right) = h_0(t) \cdot \exp\left( \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_p x_p \right)</code><br/><br/>
                <code>\text{Risk Features } \mathbf{x}: \; x_1 = \text{Time Since Last Promotion}, \; x_2 = \text{Compa-Ratio}, \; x_3 = \text{Manager Turnover Rate}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. HRBP Early Warning Intervention Workflows</h4>
              <p>When an employee's cumulative survival probability drops below $S(t) < 0.60$, the system generates a confidential HR Business Partner alert to schedule a stay interview and offer targeted compensation or role adjustments.</p>
            """,
            "keyQuestions": [
              "Why is Survival Analysis (Cox Proportional Hazards) superior to simple logistic regression for predicting employee attrition?",
              "What ethical safeguards must prevent attrition risk scores from being used to deny promotions or training?"
            ]
          },
          {
            "id": "m6-t3",
            "title": "3. Workforce Skill Graph Embeddings & Internal Mobility Architecture",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">6.3 Skill Graph Embeddings & Internal Career Pathing Recommenders</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Map workforce competencies into high-dimensional vector spaces for automated skill gap matching.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Skill Gap Cosine Distance Equation</h4>
              <p>Graph Neural Networks embed employee skills $\mathbf{v}_{\text{emp}}$ and target enterprise role requirements $\mathbf{v}_{\text{role}}$ into shared continuous space $\mathbb{R}^d$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{SkillGap}(\text{Employee}, \text{Role}) = 1 - \frac{\mathbf{v}_{\text{emp}} \cdot \mathbf{v}_{\text{role}}}{\|\mathbf{v}_{\text{emp}}\| \|\mathbf{v}_{\text{role}}\|}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Internal Talent Marketplace Matchmaking</h4>
              <p>Instead of hiring external talent at high recruiter fees, Skill Graph recommenders match internal employees to open project gigs, lateral promotions, and customized upskilling bootcamps based on skill distance vectors.</p>
            """,
            "keyQuestions": [
              "How do Graph Neural Network (GNN) embeddings discover hidden transferable skills across different departments?",
              "How does internal talent marketplace matching reduce corporate external recruiter costs?"
            ]
          },
          {
            "id": "m6-t4",
            "title": "4. AI-Enhanced Performance Management & Manager Recency Bias Elimination",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">6.4 360-Degree Feedback NLP Synthesis & Recency Bias Mitigation</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Synthesize annual performance feedback using LLMs while eliminating manager recency and halo biases.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Eliminating Manager Recency & Halo Biases</h4>
              <p>Human managers frequently suffer from **Recency Bias** (evaluating annual performance based solely on the last 30 days) and **Halo Bias** (over-weighting a single success). LLM synthesis engines aggregate 12 months of project commits, peer reviews, and quarterly OKR milestones to generate balanced, objective performance summaries.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Continuous Sentiment & Culture Pulse Audits</h4>
              <p>NLP sentiment classifiers process anonymized employee pulse surveys to detect team burnout, manager friction, and cultural morale shifts before they lead to project delays.</p>
            """,
            "keyQuestions": [
              "How does aggregating 12-month OKR datasets prevent manager recency bias during annual reviews?",
              "What anonymization controls are required to protect employee privacy during workplace sentiment audits?"
            ]
          },
          {
            "id": "m6-t5",
            "title": "5. Ethical HR AI Governance, Employee Privacy & Workplace Surveillance Limits",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">6.5 EU AI Act High-Risk Classification & Workplace Privacy Boundaries</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Comply with EU AI Act High-Risk HR rules and enforce strict boundaries against intrusive employee surveillance.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. EU AI Act High-Risk HR Classification Requirements</h4>
              <p>Under Annex III of the EU AI Act, AI systems used for recruitment, promotion, task allocation, or performance evaluation are explicitly classified as **High-Risk AI Systems**, requiring mandatory Fundamental Rights Impact Assessments (FRIA), human oversight, and logging.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Drawing Ethical Limits Against Dystopian Surveillance</h4>
              <ul class="curriculum-list">
                <li><strong>Prohibited Practices:</strong> Webcam eye-tracking, keyboard logging, and continuous emotional recognition are strictly forbidden.</li>
                <li><strong>Right to Explanation & Human Appeal:</strong> Candidates and employees have an absolute right to receive a human-understandable explanation for any AI-assisted hiring or promotion outcome and request human appeal.</li>
              </ul>
            """,
            "keyQuestions": [
              "Why are HR hiring and performance algorithms classified as High-Risk under the EU AI Act?",
              "What mandatory human appeal mechanisms must be implemented for candidate rejection decisions?"
            ]
          }
        ],
        "resources": [
          { "name": "Harvard Business Review: Using AI in HR & Talent Acquisition PDF", "type": "HBR Guide PDF", "url": "https://hbr.org/2023/05/using-ai-in-hr" },
          { "name": "EEOC Questions & Answers: Assessing Diversity & DEI in AI Screening PDF", "type": "Regulatory Guidance PDF", "url": "https://www.eeoc.gov/select-issues-assessing-adverse-impact-software-algorithms-and-artificial-intelligence" },
          { "name": "Workday People Analytics & Attrition Survival Analysis Guide PDF", "type": "Whitepaper PDF", "url": "https://www.workday.com/en-us/solutions/analytics-reporting.html" },
          { "name": "SAP SuccessFactors AI Ethics & Non-Bias Screening Charter PDF", "type": "Ethics Charter PDF", "url": "https://www.sap.com/products/hcm.html" },
          { "name": "Deloitte Global Human Capital Trends & Workforce AI Report PDF", "type": "Industry Report PDF", "url": "https://www2.deloitte.com/us/en/insights/focus/human-capital-trends.html" }
        ]
    }

    m7 = {
        "id": "module-7",
        "number": "07",
        "title": "Enhancing Financial Decision Making with AI & FinTech",
        "subtitle": "Credit Scoring Calculus, Real-Time Fraud GNNs, Algorithmic Portfolio RL, Multimodal 10-K Parsing & RegTech AML",
        "duration": "90 min read",
        "level": "Functional & Technical Application",
        "summary": "Master AI applications across corporate finance, FinTech, and capital markets. Derive credit scoring Weight of Evidence (WoE) equations, score real-time fraud using Graph Neural Networks (GNNs) with Focal Loss, optimize portfolios via Reinforcement Learning (PPO), automate SEC 10-K filing extraction with LayoutLMv3, and automate RegTech compliance.",
        "topics": [
          {
            "id": "m7-t1",
            "title": "1. AI-Driven Credit Risk Modeling & Automated Underwriting Calculus",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">7.1 Credit Scoring Calculus & Fair Lending Governance</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive Weight of Evidence (WoE) and Information Value (IV) equations for non-linear credit underwriting.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Weight of Evidence (WoE) & Information Value (IV) Formula</h4>
              <p>Traditional credit scorecards transform continuous financial metrics into binned features using **Weight of Evidence (WoE)** and rank feature predictive power via **Information Value (IV)**:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{WoE}_i = \ln \left( \frac{\% \text{ Good}_i}{\% \text{ Bad}_i} \right) \quad = \quad \ln \left( \frac{\text{Non-Defaults}_i / \text{Total Non-Defaults}}{\text{Defaults}_i / \text{Total Defaults}} \right)</code><br/><br/>
                <code>\text{IV} = \sum_{i=1}^k \Big( \% \text{ Good}_i - \% \text{ Bad}_i \Big) \times \text{WoE}_i \quad \Big( \text{IV} > 0.3 \implies \text{High Predictive Power} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. XGBoost Underwriting & SHAP Adverse Action Notices</h4>
              <p>While XGBoost models outperform linear FICO scores by incorporating alternative cash-flow data, the Fair Credit Reporting Act (FCRA) mandates generating adverse action letters. **TreeSHAP** computes exact Shapley marginal contributions for every feature, generating compliant Top-4 denial reasons.</p>
            """,
            "keyQuestions": [
              "Why is Information Value (IV) calculated before training gradient-boosted trees for credit risk?",
              "How do TreeSHAP value explanations enable legally compliant Adverse Action notices under FCRA?"
            ]
          },
          {
            "id": "m7-t2",
            "title": "2. Real-Time Fraud Detection & Graph Neural Networks (GNNs)",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">7.2 Sub-50ms Transaction Fraud Scoring & Graph Neural Networks</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Deploy sub-50ms feature stores, Graph Convolutional Networks (GCNs), and Focal Loss for payment fraud.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Graph Convolutional Networks (GCN) Message Passing</h4>
              <p>Anti-Money Laundering (AML) teams model bank transfers as a directed transaction graph $G = (V, E)$. Graph Convolutional Networks aggregate neighbor account features to detect synthetic identity fraud rings:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>h_v^{(l+1)} = \sigma \left( W^{(l)} \cdot \sum_{u \in \mathcal{N}(v) \cup \{v\}} \frac{h_u^{(l)}}{\sqrt{\deg(v)\deg(u)}} \right)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Handling Extreme Class Imbalance: Focal Loss</h4>
              <p>Credit card fraud represents $<0.01\%$ of swipe volume. Standard cross-entropy loss is overwhelmed by easy legitimate examples. **Focal Loss** dynamically down-weights easy negatives:</p>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\mathcal{L}_{\text{Focal}} = -\alpha_t \left(1 - p_t\right)^\gamma \log(p_t) \quad \Big( \text{where } \gamma = 2.0 \text{ focuses training on hard fraud edge-cases} \Big)</code>
              </div>
            """,
            "keyQuestions": [
              "How do Graph Convolutional Networks (GCNs) detect money laundering rings that simple SQL rules miss?",
              "Why does Focal Loss outperform standard cross-entropy loss on severely imbalanced fraud datasets?"
            ]
          },
          {
            "id": "m7-t3",
            "title": "3. Algorithmic Portfolio Optimization & Reinforcement Learning Trading",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">7.3 Markowitz Optimization & Deep Reinforcement Learning Trading</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Combine Markowitz mean-variance portfolio theory with Deep Reinforcement Learning (PPO/DDPG) allocation agents.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Markowitz Mean-Variance Optimization with Neural Expected Returns</h4>
              <p>An optimal portfolio allocation vector $\mathbf{w}$ maximizes expected returns $\boldsymbol{\mu}$ while penalizing covariance risk $\boldsymbol{\Sigma}$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\max_{\mathbf{w}} \left( \mathbf{w}^T \boldsymbol{\mu} - \frac{\lambda}{2} \mathbf{w}^T \boldsymbol{\Sigma} \mathbf{w} \right) \quad \text{subject to } \sum_{i=1}^K w_i = 1, \quad w_i \ge 0</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Deep Reinforcement Learning (PPO) Trading Agent</h4>
              <ul class="curriculum-list">
                <li><strong>State Space ($\mathcal{S}_t$):</strong> Limit Order Book (LOB) depth, technical momentum indicators (RSI, MACD), and Bloomberg sentiment embeddings.</li>
                <li><strong>Action Space ($\mathcal{A}_t$):</strong> Continuous allocation vector adjustments $w_t \in [0, 1]^K$.</li>
                <li><strong>Reward Function ($\mathcal{R}_t$):</strong> Differential Sharpe Ratio maximizing risk-adjusted excess returns while penalizing portfolio transaction slippage costs.</li>
              </ul>
            """,
            "keyQuestions": [
              "How does Deep Learning improve asset return estimation $\\boldsymbol{\\mu}$ over historical sample averages?",
              "What reward function formulation prevents Reinforcement Learning trading agents from over-trading and incurring high broker fees?"
            ]
          },
          {
            "id": "m7-t4",
            "title": "4. Automated Financial Statement Analysis & Document AI (10-K Parsing)",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">7.4 LayoutLMv3 10-K Table Extraction & Distress Scoring</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Extract multi-column balance sheets from SEC EDGAR PDFs and compute Altman Z-Score bankruptcy risk.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. LayoutLMv3 Multimodal PDF Extraction</h4>
              <p>Traditional OCR fails on complex financial 10-K PDFs with multi-line table headers and footnote callouts. **LayoutLMv3** combines 2D spatial position embeddings, visual patch features, and textual token embeddings to extract balance sheets into verified JSON schemas.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Automated Altman Z-Score Financial Distress Formula</h4>
              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>Z = 1.2 X_1 + 1.4 X_2 + 3.3 X_3 + 0.6 X_4 + 0.999 X_5 \quad \Big( Z < 1.81 \implies \text{High Bankruptcy Risk Zone} \Big)</code>
              </div>
            """,
            "keyQuestions": [
              "Why do 2D spatial layout embeddings allow LayoutLMv3 to parse nested financial tables accurately?",
              "How does FinBERT sentiment analysis over earnings transcripts detect executive deception or revenue guidance shifts?"
            ]
          },
          {
            "id": "m7-t5",
            "title": "5. RegTech, Anti-Money Laundering (AML) & ESG Compliance Automation",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">7.5 RegTech, Automated Sanction KYC & Anti-Greenwashing ESG AI</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Automate global sanction screening with fuzzy string distance and audit corporate ESG disclosures.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Fuzzy String Matching for Sanction & PEP Screening</h4>
              <p>Cross-referencing customer names against global sanctions lists (OFAC, UN, EU) uses Jaro-Winkler distance and Levenshtein edit distance to flag phonetic transliteration variations across languages.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Automated Anti-Greenwashing ESG NLP Scoring</h4>
              <p>Regulators (SEC, ESMA) deploy NLP classifiers over corporate sustainability filings to compare claims against actual carbon footprint emissions data, assigning objective **Greenwash Risk Scores** to prevent misleading ESG fund labeling.</p>
            """,
            "keyQuestions": [
              "Why is Jaro-Winkler distance preferred over exact string matching for international PEP and sanctions list screening?",
              "How does NLP sentiment and claim-checking detect greenwashing in corporate ESG sustainability reports?"
            ]
          }
        ],
        "resources": [
          { "name": "FinBERT: Financial Sentiment Analysis with Pre-trained Language Models (ArXiv PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/1908.10063.pdf" },
          { "name": "LayoutLMv3: Pre-training for Document AI with Vision and Text (Microsoft Research Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2204.08387.pdf" },
          { "name": "SEC EDGAR API & Automated 10-K Parsing Technical Specification PDF", "type": "Technical Spec PDF", "url": "https://www.sec.gov/edgar/searchedgar/companysearch" },
          { "name": "J.P. Morgan AI in Financial Services & Algorithmic Trading Report PDF", "type": "Industry Report PDF", "url": "https://www.jpmorgan.com/technology" },
          { "name": "Visa / Mastercard Fraud Engine & Real-Time Graph Neural Networks Whitepaper", "type": "Whitepaper PDF", "url": "https://usa.visa.com/visa-everywhere/security/" }
        ]
    }

    m8 = {
        "id": "module-8",
        "number": "08",
        "title": "Enterprise RAG Architecture & Vector Search Engines",
        "subtitle": "Embedding Calculus, HNSW Indexing, Parent-Child Chunking, Hybrid BM25+Dense Search, Cross-Encoders, GraphRAG & RAG Triad Evaluation",
        "duration": "90 min read",
        "level": "Advanced Technical",
        "summary": "Architect enterprise-grade Retrieval-Augmented Generation (RAG) systems. Master vector distance metrics (Cosine, Dot Product, Euclidean), HNSW indexing, parent-child semantic chunking, BM25+dense hybrid search with Reciprocal Rank Fusion (RRF), Cohere Cross-Encoder reranking, GraphRAG knowledge graph extraction, and the RAG Triad evaluation framework.",
        "topics": [
          {
            "id": "m8-t1",
            "title": "1. Vector Mathematics, Embedding Spaces & Indexing Calculus",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">8.1 Vector Mathematics, Distance Metrics & HNSW Indexing</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive high-dimensional vector similarity equations and evaluate HNSW graph index complexity.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. High-Dimensional Vector Similarity Formulas</h4>
              <p>For vectors $\mathbf{A}, \mathbf{B} \in \mathbb{R}^d$ in dense embedding space (e.g. $d = 1536$ for OpenAI `text-embedding-3-large`):</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Cosine Similarity: } \cos(\theta) = \frac{\mathbf{A} \cdot \mathbf{B}}{\|\mathbf{A}\| \|\mathbf{B}\|} = \frac{\sum_{i=1}^d A_i B_i}{\sqrt{\sum_{i=1}^d A_i^2} \sqrt{\sum_{i=1}^d B_i^2}}</code><br/><br/>
                <code>\text{Dot Product: } \mathbf{A} \cdot \mathbf{B} = \sum_{i=1}^d A_i B_i \quad \Big( \text{Identical to Cosine when } \|\mathbf{A}\| = \|\mathbf{B}\| = 1 \Big)</code><br/><br/>
                <code>\text{Euclidean Distance (L2): } d(\mathbf{A}, \mathbf{B}) = \sqrt{\sum_{i=1}^d (A_i - B_i)^2}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Vector Indexing Algorithms: HNSW vs IVF-PQ</h4>
              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Indexing Algorithm</th>
                      <th>Structural Mechanism</th>
                      <th>Search Complexity</th>
                      <th>RAM Footprint & Trade-offs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>HNSW (Hierarchical Navigable Small World)</strong></td>
                      <td>Multi-layer skip-list graph structure over high-dimensional nodes.</td>
                      <td>$\mathcal{O}(\log N)$ fast sub-10ms search.</td>
                      <td>High RAM overhead (+25% graph structure memory). Maximum recall accuracy.</td>
                    </tr>
                    <tr>
                      <td><strong>IVF-PQ (Inverted File with Product Quantization)</strong></td>
                      <td>Voronoi cluster centroid partitioning combined with vector byte compression.</td>
                      <td>$\mathcal{O}(\frac{N}{K})$ cluster search.</td>
                      <td>Ultra-low RAM (85% memory compression). Slight loss in recall precision.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why is Dot Product search computationally faster than Cosine Similarity when vectors are pre-normalized?",
              "What are the memory and latency trade-offs between HNSW and IVF-PQ vector indexing?"
            ]
          },
          {
            "id": "m8-t2",
            "title": "2. Document Ingestion, Chunking Strategies & Hybrid Search",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">8.2 Chunking Architecture & BM25 Hybrid Search Calculus</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Master Parent-Child chunking, semantic boundary detection, and Reciprocal Rank Fusion (RRF) hybrid search.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Advanced Chunking Strategies</h4>
              <ul class="curriculum-list">
                <li><strong>Fixed-Size Overlapping Chunking:</strong> 512 tokens with 50-token overlap. Simple but breaks sentence structure across boundaries.</li>
                <li><strong>Semantic / Sentence Distance Chunking:</strong> Measures cosine distance between consecutive sentences, creating a split whenever similarity drops below threshold $\tau$.</li>
                <li><strong>Hierarchical Parent-Child Chunking:</strong> Embeds small 128-token child chunks for high-precision vector matching, but retrieves full 1024-token parent documents to feed into LLM context window.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Hybrid Search: BM25 Lexical + Dense Vector (RRF Equation)</h4>
              <p>Vector search fails on exact part numbers, product SKUs, and legal acronyms. <strong>Hybrid Search</strong> combines Sparse BM25 Keyword Search with Dense Vector Cosine Similarity using Reciprocal Rank Fusion (RRF):</p>
              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\text{RRF\_Score}(d) = \sum_{m \in M} \frac{1}{k + r_m(d)} \quad \Big(\text{where } k \approx 60, \, r_m(d) \text{ is rank position in search system } m\Big)</code>
              </div>
            """,
            "keyQuestions": [
              "Why does Parent-Child chunking resolve the fundamental trade-off between retrieval precision and synthesis context?",
              "How does Reciprocal Rank Fusion (RRF) mathematically combine sparse BM25 scores with dense vector ranks?"
            ]
          },
          {
            "id": "m8-t3",
            "title": "3. Two-Stage Cross-Encoder Reranking & GraphRAG Systems",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">8.3 Cross-Encoder Reranking & GraphRAG Systems</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Combine Bi-Encoders with Cohere Cross-Encoders and extract Knowledge Graphs for multi-hop reasoning.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Bi-Encoders vs Cross-Encoder Reranking Architecture</h4>
              <p>Stage 1 uses fast Bi-Encoder vector search (HNSW) to retrieve top-100 candidate chunks in &lt;10ms. Stage 2 passes candidate pairs $(Query, Chunk)$ into a Cross-Encoder (Cohere Rerank v3 or BGE-Reranker) for full self-attention re-scoring:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Score}_{\text{CrossEncoder}}(q, d) = \sigma\Big( \text{Transformer}\big( q \text{ [SEP] } d \big) \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. GraphRAG & Knowledge Graphs for Multi-Hop Reasoning</h4>
              <p>Naive vector RAG fails on global portfolio questions like <em>'What are the top 5 risk themes across our entire 500-contract portfolio?'</em> <strong>GraphRAG</strong> extracts Entity-Relation-Entity triples $(E_1, R, E_2)$ into a Neo4j Knowledge Graph, runs Leiden community clustering, and generates hierarchical community summaries.</p>
            """,
            "keyQuestions": [
              "Why is a Cross-Encoder reranker significantly more accurate at noise filtering than a Bi-Encoder vector search?",
              "How does GraphRAG use Leiden community detection clustering to answer global macro queries across thousands of documents?"
            ]
          },
          {
            "id": "m8-t4",
            "title": "4. Advanced Query Transformation: Rewriting, Multi-Query & HyDE",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">8.4 Query Transformation: Rewriting, Multi-Query Expansion & HyDE</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Transform user queries with Hypothetical Document Embeddings (HyDE) and multi-perspective expansions.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Hypothetical Document Embeddings (HyDE)</h4>
              <p>When a user query is short or abstract, vector embedding distance to detailed documents is poor. <strong>HyDE</strong> uses an LLM to generate a hypothetical ideal answer document, embeds the hypothetical document, and searches the vector database using the hypothetical answer vector!</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Query Transformation Techniques</h4>
              <ul class="curriculum-list">
                <li><strong>Query Rewriting:</strong> Removing conversational filler and resolving coreferences (e.g. <em>"What were its earnings?"</em> $\rightarrow$ <em>"What were Microsoft's Q3 2024 earnings?"</em>).</li>
                <li><strong>Multi-Query Expansion:</strong> Generating 3-5 sub-queries to retrieve diverse document perspectives, merged via reciprocal rank fusion.</li>
              </ul>
            """,
            "keyQuestions": [
              "How does HyDE overcome the embedding vector mismatch between short user questions and long answer documents?",
              "What is coreference resolution in query rewriting pipelines?"
            ]
          },
          {
            "id": "m8-t5",
            "title": "5. Enterprise RAG Evaluation Framework: The RAG Triad & Ragas",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">8.5 The RAG Triad Evaluation Framework & Automated Ragas Audits</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Evaluate RAG pipelines using Context Relevance, Groundedness, and Answer Relevance metrics.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The RAG Triad Metrics</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Evaluation Question</th>
                      <th>Mathematical Evaluation Formula</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1. Context Relevance</strong></td>
                      <td>Is the retrieved context relevant to the user query?</td>
                      <td>$\frac{|\text{Relevant Retrieved Sentences}|}{|\text{Total Sentences in Retrieved Context}|}$</td>
                    </tr>
                    <tr>
                      <td><strong>2. Groundedness (Faithfulness)</strong></td>
                      <td>Is the generated response factually supported by retrieved context?</td>
                      <td>$\frac{|\text{Response Claims Supported by Context}|}{|\text{Total Claims in LLM Response}|}$</td>
                    </tr>
                    <tr>
                      <td><strong>3. Answer Relevance</strong></td>
                      <td>Does the response directly answer the original user query?</td>
                      <td>$\text{CosineSim}\Big(\text{Embed}(\text{Generated Answer}), \; \text{Embed}(\text{Original Question})\Big)$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why is measuring Groundedness (Faithfulness) critical to eliminating hallucinations in enterprise RAG?",
              "How can Ragas automated LLM-as-a-Judge pipelines evaluate RAG performance in CI/CD without human annotations?"
            ]
          }
        ],
        "resources": [
          { "name": "Retrieval-Augmented Generation for Knowledge Tasks (Lewis et al. Original RAG Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2005.11401.pdf" },
          { "name": "HNSW (Hierarchical Navigable Small World) Original Search Paper PDF (Malkov & Yashunin)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/1603.09320.pdf" },
          { "name": "Cohere Rerank v3 Technical Whitepaper & Reranking Architecture Guide", "type": "Technical Guide", "url": "https://cohere.com/blog/rerank-3" },
          { "name": "Qdrant Vector Database Enterprise Architecture & Benchmark PDF", "type": "Benchmark PDF", "url": "https://qdrant.tech/documentation/" },
          { "name": "Ragas: Automated Evaluation of RAG Pipelines (ArXiv PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2309.15217.pdf" }
        ]
    }

    m9 = {
        "id": "module-9",
        "number": "09",
        "title": "Model Customization: Fine-Tuning, LoRA & QLoRA",
        "subtitle": "PEFT, LoRA Rank Algebra, QLoRA NF4 Quantization, SFT Pipelines, DPO/RLHF Alignment & Enterprise RAG vs Fine-Tuning Matrix",
        "duration": "90 min read",
        "level": "Advanced Technical",
        "summary": "Master parameter-efficient fine-tuning (PEFT). Derive LoRA rank decomposition matrix equations W = W_0 + (alpha/r)(B x A), QLoRA 4-bit NormalFloat (NF4) quantization memory calculus, Supervised Fine-Tuning (SFT) data pipelines, DPO preference loss, and the RAG vs Fine-Tuning strategic decision matrix.",
        "topics": [
          {
            "id": "m9-t1",
            "title": "1. Parameter-Efficient Fine-Tuning (LoRA) Matrix Algebra & Rank Calculus",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">9.1 LoRA Low-Rank Adaptation Matrix Algebra & Rank Calculus</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the LoRA low-rank update equation, compute parameter reduction ratios, and merge weights for zero-latency inference.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The LoRA Rank Decomposition Formula</h4>
              <p>For a frozen pre-trained weight matrix $W_0 \in \mathbb{R}^{d \times k}$, LoRA decomposes the weight update matrix $\Delta W$ into two low-rank matrices $B \in \mathbb{R}^{d \times r}$ and $A \in \mathbb{R}^{r \times k}$, where rank $r \ll \min(d, k)$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>W = W_0 + \Delta W = W_0 + \frac{\alpha}{r} (B \cdot A)</code><br/><br/>
                <code>\text{Initialization: } B = 0, \quad A \sim \mathcal{N}\left(0, \sigma^2\right) \implies \Delta W_{t=0} = 0</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Parameter Reduction Ratio Calculation</h4>
              <p>For a standard Transformer attention projection layer with $d = k = 4096$ and rank $r = 8$:</p>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{Original Parameters } (W_0) = 4096 \times 4096 = 16,777,216 \text{ parameters}</code><br/>
                <code>\text{LoRA Adapter Parameters } (B + A) = (4096 \times 8) + (8 \times 4096) = 65,536 \text{ parameters}</code><br/>
                <code>\text{Parameter Reduction} = 1 - \frac{65,536}{16,777,216} = \mathbf{99.61\% \text{ reduction in trainable parameters!}}</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Weight Merging for Zero-Latency Production Deployment</h4>
              <p>During inference, adapter weights can be folded back into base weights: $W_{\text{merged}} = W_0 + \frac{\alpha}{r}(B \cdot A)$, completely eliminating runtime adapter forward-pass latency overhead!</p>
            """,
            "keyQuestions": [
              "Why initializing matrix $B$ to zero guarantees that \\Delta W = 0$ at step 0, preserving pre-trained model behavior?",
              "How does merging LoRA weights $W_{\\text{merged}} = W_0 + \\frac{\\alpha}{r}(B \\cdot A)$ eliminate runtime latency penalties?"
            ]
          },
          {
            "id": "m9-t2",
            "title": "2. QLoRA 4-Bit NormalFloat (NF4) Quantization & Memory Calculus",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">9.2 QLoRA 4-Bit NormalFloat (NF4) & VRAM Memory Sizing</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Master NF4 quantile quantization, Double Quantization (DQ), Paged Optimizers, and GPU VRAM sizing calculus.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Information-Optimal 4-Bit NormalFloat (NF4)</h4>
              <p>Standard 4-bit integer quantization (INT4) uses uniform bin spacing. <strong>NF4</strong> constructs non-uniform bin boundaries matching the exact Gaussian distribution $\mathcal{N}(0, \sigma^2)$ of pre-trained neural network weights, preserving model perplexity with zero accuracy loss.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Double Quantization (DQ) & Paged Optimizers</h4>
              <ul class="curriculum-list">
                <li><strong>Double Quantization (DQ):</strong> Quantizes the FP32 quantization scale constants themselves into 8-bit FP8 values, saving an additional 0.37 bits per parameter (3.0 GB savings on a 70B model).</li>
                <li><strong>Paged Optimizers:</strong> Automatically pages CUDA optimizer state memory between GPU VRAM and CPU RAM during gradient updates, preventing Out-Of-Memory (OOM) crashes during peak gradient spikes.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Precision GPU VRAM Sizing Formula</h4>
              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\text{VRAM}_{\text{QLoRA}} = \Big( P \times 0.55\text{ GB} \Big) + \text{LoRA FP16 Adapters (1-2GB)} + \text{KV Cache} + \text{Paged Optimizer (4-8GB)}</code><br/><br/>
                <code>\text{Example: Llama 3.1 70B in 4-bit NF4 } \implies (70 \times 0.55) + 2 + 4 + 4 = \mathbf{48.5\text{ GB VRAM (Runs on single A100/H100 GPU!)}}</code>
              </div>
            """,
            "keyQuestions": [
              "Why is NormalFloat (NF4) mathematically superior to uniform INT4 quantization for neural network weights?",
              "How do Paged Optimizers prevent CUDA Out-Of-Memory (OOM) crashes during backpropagation gradient updates?"
            ]
          },
          {
            "id": "m9-t3",
            "title": "3. Supervised Fine-Tuning (SFT) & Instruction Data Engineering",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">9.3 Supervised Fine-Tuning (SFT) & Instruction Data Engineering</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Structure high-quality instruction datasets, implement ChatML/Llama-3 templates, and compute SFT cross-entropy loss.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Causal Language Modeling SFT Cross-Entropy Loss</h4>
              <p>During SFT, loss is calculated strictly over target completion tokens $y$, ignoring prompt tokens $x$ using token masking:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\mathcal{L}_{\text{SFT}}(\theta) = -\frac{1}{|Y|} \sum_{i=1}^{|Y|} \log P_\theta\Big( y_i \;\Big|\; x, \, y_{<i} \Big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Instruction Dataset Template Formatting</h4>
              <p>Fine-tuning data must be formatted using exact model special tokens (e.g. Llama-3 ChatML template):</p>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.85rem; line-height: 1.5;">
                  &lt;|begin_of_text|&gt;&lt;|start_header_id|&gt;system&lt;|end_header_id|&gt;<br/>
                  You are an enterprise financial audit AI assistant.&lt;|eot_id|&gt;<br/>
                  &lt;|start_header_id|&gt;user&lt;|end_header_id|&gt;<br/>
                  Extract gross margin from Q3 earnings text.&lt;|eot_id|&gt;<br/>
                  &lt;|start_header_id|&gt;assistant&lt;|end_header_id|&gt;<br/>
                  {"gross_margin": "42.8%", "currency": "USD"}&lt;|eot_id|&gt;
                </code>
              </div>
            """,
            "keyQuestions": [
              "Why is token loss masking applied to system/user prompts during SFT training?",
              "What is the impact of special token formatting mismatch between SFT training and production inference?"
            ]
          },
          {
            "id": "m9-t4",
            "title": "4. Preference Alignment Training: RLHF vs Direct Preference Optimization (DPO)",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">9.4 Preference Alignment Training: RLHF vs DPO vs KTO</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the Direct Preference Optimization (DPO) loss equation and contrast it with PPO-based RLHF.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. DPO Loss Function Derivation</h4>
              <p>Direct Preference Optimization (DPO) eliminates the need to train a separate PPO reward model. It directly optimizes policy $\pi_\theta$ using pair preferences $(x, y_w, y_l)$ where $y_w$ is preferred and $y_l$ is dispreferred:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\mathcal{L}_{\text{DPO}}(\theta) = -\mathbb{E}_{(x, y_w, y_l)} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)} \right) \right]</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Alignment Method Comparison</h4>
              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Alignment Method</th>
                      <th>Required Data Format</th>
                      <th>Reward Model Required?</th>
                      <th>Training Stability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>RLHF (PPO)</strong></td>
                      <td>Pairwise rankings + online PPO rollouts.</td>
                      <td>Yes (Requires separate FP32 Reward Model).</td>
                      <td>Unstable; prone to reward hacking & hyperparameter sensitivity.</td>
                    </tr>
                    <tr>
                      <td><strong>DPO (Direct Preference)</strong></td>
                      <td>Pairwise dataset $(x, y_w, y_l)$.</td>
                      <td>No (Implicitly integrated into policy loss).</td>
                      <td>Extremely stable; standard supervised classification convergence.</td>
                    </tr>
                    <tr>
                      <td><strong>KTO (Kahneman-Tversky)</strong></td>
                      <td>Unpaired binary feedback $(x, y, \text{label} \in \{+1, -1\})$.</td>
                      <td>No.</td>
                      <td>High; ideal when pairwise comparative rankings are unavailable.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why does DPO eliminate PPO reward hacking and training instability?",
              "What is the mathematical role of the KL divergence penalty $\beta$ parameter in DPO loss?"
            ]
          },
          {
            "id": "m9-t5",
            "title": "5. Strategic Enterprise Matrix: Prompting vs RAG vs Fine-Tuning vs Pre-Training",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">9.5 Enterprise Customization Decision Matrix & Hybrid RAG+LoRA</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Evaluate the 4 customization approaches across operational axes and design hybrid RAG+LoRA architectures.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 4-Way Enterprise Customization Decision Matrix</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Operational Axis</th>
                      <th>Level 1: Prompt Engineering</th>
                      <th>Level 2: RAG Architecture</th>
                      <th>Level 3: PEFT (LoRA) Fine-Tuning</th>
                      <th>Level 4: Domain Pre-Training</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary Objective</strong></td>
                      <td>Quick task instruction & formatting.</td>
                      <td>Injecting dynamic factual knowledge.</td>
                      <td>Adapting tone, style, jargon & JSON schemas.</td>
                      <td>Learning new vocabulary / non-English languages.</td>
                    </tr>
                    <tr>
                      <td><strong>Data Freshness</strong></td>
                      <td>Static in prompt.</td>
                      <td>Real-time (Update vector DB in seconds).</td>
                      <td>Static snapshot at training run time.</td>
                      <td>Static snapshot at pre-training time.</td>
                    </tr>
                    <tr>
                      <td><strong>CapEx Cost</strong></td>
                      <td>$0 initial CapEx.</td>
                      <td>Low ($5k - $25k vector setup).</td>
                      <td>Medium ($1k - $10k GPU training run).</td>
                      <td>Very High ($500k - $5M+ GPU cluster).</td>
                    </tr>
                    <tr>
                      <td><strong>Hallucination Risk</strong></td>
                      <td>High.</td>
                      <td>Low (Grounded in verbatim retrieved chunks).</td>
                      <td>Medium-High (Fine-tuning is poor for memorizing facts).</td>
                      <td>High.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. The Hybrid RAG + LoRA Enterprise Pattern</h4>
              <p>The highest performing enterprise architecture combines <strong>Level 2 RAG</strong> (for real-time document search and zero hallucinations) with a <strong>Level 3 LoRA Adapter</strong> (fine-tuned on custom corporate JSON response schemas and brand tone):</p>

              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>User Query ➔ Vector RAG Search (Fetches Fresh Chunks) ➔ LoRA Fine-Tuned LLM (Formats Response in 100% Valid Enterprise JSON)</code>
              </div>
            """,
            "keyQuestions": [
              "Why is fine-tuning an LLM to memorize factual corporate data a dangerous anti-pattern compared to RAG?",
              "How does a Hybrid RAG + LoRA architecture deliver both zero-hallucination factual accuracy and 100% JSON schema compliance?"
            ]
          }
        ],
        "resources": [
          { "name": "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al. Original LoRA Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2106.09685.pdf" },
          { "name": "QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al. Original QLoRA Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2305.14314.pdf" },
          { "name": "Direct Preference Optimization (DPO): Your Language Model is Secretly a Reward Model (ArXiv PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2305.18290.pdf" },
          { "name": "Training Language Models to Follow Instructions with Human Feedback (InstructGPT RLHF Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2203.02155.pdf" },
          { "name": "Hugging Face PEFT & TRL Open Source Fine-Tuning Library Documentation", "type": "Docs Guide", "url": "https://huggingface.co/docs/peft/index" }
        ]
    }

    m10 = {
        "id": "module-10",
        "number": "10",
        "title": "Autonomous AI Agents & Multi-Agent Systems",
        "subtitle": "ReAct Framework, Native JSON Tool Calling, LangGraph State Machines, Multi-Agent Swarms, Agentic Memory & HITL Safety",
        "duration": "90 min read",
        "level": "Advanced Technical",
        "summary": "Architect autonomous agentic systems and multi-agent swarms. Master the ReAct framework (Thought-Action-Observation), native JSON function tool execution, LangGraph state machine directed cyclic graphs, 4 multi-agent team patterns, short-term/long-term/episodic agentic memory, and Human-in-the-Loop governance.",
        "topics": [
          {
            "id": "m10-t1",
            "title": "1. The ReAct Framework & Native JSON Tool Function Calling",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">10.1 The ReAct Execution Cycle & Function Calling Calculus</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the ReAct (Reasoning + Acting) loop state transition equation and construct native JSON function call schemas.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The ReAct Mathematical State Transition Cycle</h4>
              <p>An autonomous agent operates in an interactive environment. At discrete timestep $t$, the agent state $\text{State}_t$ is defined as the tuple of reasoning thought, action execution, and environmental observation:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code>\text{State}_t = \Big( \text{Thought}_t, \text{Action}_t, \text{Observation}_t \Big)</code><br/><br/>
                <code>\text{Thought}_t = \text{LLM}\big( \text{SystemPrompt}, \text{Goal}, \text{State}_{1:t-1} \big)</code><br/>
                <code>\text{Action}_t = \text{ExtractToolCall}\big( \text{Thought}_t \big) \in \{ \text{Tool}_1, \text{Tool}_2, \dots, \text{FinalAnswer} \}</code><br/>
                <code>\text{Observation}_t = \text{ExecuteAPI}\big( \text{Action}_t \big)</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. OpenAI / Anthropic Native Function Call Schema Specification</h4>
              <p>Tools are declared to the LLM using strict JSON-Schema parameter contracts:</p>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.85rem; line-height: 1.5;">
                  {<br/>
                  &nbsp;&nbsp;"name": "query_customer_sql_db",<br/>
                  &nbsp;&nbsp;"description": "Executes read-only SQL query against Snowflake customer database.",<br/>
                  &nbsp;&nbsp;"parameters": {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"type": "object",<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"properties": {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sql_query": { "type": "string", "description": "Valid SELECT query" },<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": { "type": "string" }<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;},<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;"required": ["sql_query", "user_id"]<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Token Compaction & Error Recovery Runtimes</h4>
              <ul class="curriculum-list">
                <li><strong>Sliding Window Context Compaction:</strong> When agent trajectories exceed 30 steps, previous observation outputs are summarized to preserve context window capacity.</li>
                <li><strong>API Error Recovery:</strong> If a tool returns a 500 API exception, the observation error message is fed directly back into the LLM, prompting it to self-correct its parameters.</li>
              </ul>
            """,
            "keyQuestions": [
              "How does self-correction work when an LLM receives an API 500 error observation in its ReAct loop?",
              "Why is native JSON function calling superior to legacy regex string parsing for tool invocation?"
            ]
          },
          {
            "id": "m10-t2",
            "title": "2. LangGraph State Machine Architecture & Checkpointing",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">10.2 Directed Cyclic Graphs & LangGraph State Machine Architecture</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Architect non-linear agent workflows using Directed Cyclic Graphs (DCGs) with persistent thread state checkpointers.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Why Directed Cyclic Graphs Over Linear Chains</h4>
              <p>Linear chains (LangChain) execute steps in fixed sequence $A \rightarrow B \rightarrow C$. Autonomous agents require <strong>Directed Cyclic Graphs (DCGs)</strong> to loop back, retry failed steps, and branch dynamically based on tool results.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Core Building Blocks of LangGraph</h4>
              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>LangGraph Component</th>
                      <th>Technical Implementation</th>
                      <th>Operational Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>AgentState (TypedDict)</strong></td>
                      <td>Central shared state schema passed across all nodes.</td>
                      <td>Maintains message arrays, tool call flags, and current execution status.</td>
                    </tr>
                    <tr>
                      <td><strong>Nodes (Functions)</strong></td>
                      <td>Python functions or LLM execution wrappers.</td>
                      <td>Executes logic (e.g. <code>agent_node</code>, <code>tool_executor_node</code>) and mutates AgentState.</td>
                    </tr>
                    <tr>
                      <td><strong>Conditional Edges</strong></td>
                      <td>Router function evaluating <code>should_continue(state)</code>.</td>
                      <td>Determines whether to route to <code>tools</code> node or finish to <code>END</code>.</td>
                    </tr>
                    <tr>
                      <td><strong>Checkpointer (DbSaver)</strong></td>
                      <td>SQLite / PostgreSQL persistent thread storage.</td>
                      <td>Saves state snapshot after every step for time-travel debugging & resume capability.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why are Directed Cyclic Graphs (DCGs) necessary for non-deterministic multi-step agent reasoning?",
              "How does persistent thread checkpointing enable time-travel state debugging in production?"
            ]
          },
          {
            "id": "m10-t3",
            "title": "3. Multi-Agent Team Orchestration Patterns",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">10.3 The 4 Enterprise Multi-Agent Architecture Patterns</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Orchestrate teams of specialized agents using Supervisor, Hierarchical, Peer-to-Peer, and Plan-Execute patterns.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">The 4 Multi-Agent Architecture Patterns</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Orchestration Pattern</th>
                      <th>Structural Workflow Topology</th>
                      <th>Ideal Enterprise Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>1. Supervisor Pattern</strong></td>
                      <td>Central Supervisor LLM acts as router, evaluating worker progress and delegating sub-tasks to specialized sub-agents (Coder, Tester, SQL Agent).</td>
                      <td>Enterprise software engineering pipelines & multi-domain customer inquiry handling.</td>
                    </tr>
                    <tr>
                      <td><strong>2. Hierarchical Teams</strong></td>
                      <td>Multi-level tree hierarchy: Executive Supervisor manages Team Supervisors, who manage Worker Agent swarms.</td>
                      <td>Complex enterprise Capstone projects, M&A due diligence, and financial audit synthesis.</td>
                    </tr>
                    <tr>
                      <td><strong>3. Peer-to-Peer Swarm (AutoGen)</strong></td>
                      <td>Decentralized message-passing channels where agents converse directly using structured turn-taking protocols.</td>
                      <td>Adversarial red-teaming, multi-perspective debate, and collaborative brainstorms.</td>
                    </tr>
                    <tr>
                      <td><strong>4. Plan-and-Execute (Plan-Solve)</strong></td>
                      <td>Planner Agent generates initial task DAG queue; Execution Agent runs steps in parallel; Re-Planner dynamically updates queue based on results.</td>
                      <td>Complex research web scraping, automated document generation, and market analysis.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "When should an enterprise deploy a Supervisor Pattern vs a Plan-and-Execute agent architecture?",
              "How does hierarchical multi-agent delegation prevent single-agent context window saturation?"
            ]
          },
          {
            "id": "m10-t4",
            "title": "4. Agentic Memory Systems: Short-Term, Long-Term & Episodic",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">10.4 Agentic Memory Systems: Short-Term, Semantic & Episodic</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Build multi-session agentic memory combining short-term scratchpads, long-term vector stores, and episodic trajectory reflection.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 3 Tiers of Agentic Memory</h4>
              <ul class="curriculum-list">
                <li><strong>Short-Term Working Memory:</strong> Active in-context chat history buffer and current ReAct scratchpad state.</li>
                <li><strong>Long-Term Semantic Memory:</strong> Persistent vector storage (Qdrant/Pinecone) containing user profiles, corporate policies, and cross-session knowledge embeddings.</li>
                <li><strong>Episodic & Procedural Memory:</strong> Vector store of past successful tool execution traces ($Goal \rightarrow ActionSequence \rightarrow Result$). When faced with a new task, the agent queries past successful execution episodes to reuse proven tool strategies.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. The Periodic Reflection & Memory Consolidation Loop</h4>
              <p>At the end of every user session, an offline background Reflection Agent condenses raw conversation logs into concise, structured key-value memories (e.g. <em>User preferred language: Python; Cloud preference: AWS</em>) and saves them to the user's permanent semantic memory profile.</p>
            """,
            "keyQuestions": [
              "How does Episodic Memory allow an agent to reuse past successful tool execution traces?",
              "What is the role of the offline background Reflection Loop in consolidating raw chat history into long-term key-value memories?"
            ]
          },
          {
            "id": "m10-t5",
            "title": "5. Human-in-the-Loop (HITL) Safety Gates, Circuit Breakers & Governance",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">10.5 Human-in-the-Loop (HITL) Safety Gates & Circuit Breakers</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Enforce mandatory human authorization checkpoints for sensitive tools and set maximum step limits to prevent runaway loops.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Interrupt-and-Resume State Machine Gates</h4>
              <p>When an agent selects an irreversible high-risk tool (e.g. <code>execute_wire_transfer()</code> or <code>drop_table()</code>), LangGraph triggers an <code>interrupt_before</code> hook. The state graph halts, saves its state checkpoint, and sends a notification to a human supervisor for explicit approval before execution resumes.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Circuit Breakers & Trajectory Audit Logs</h4>
              <ul class="curriculum-list">
                <li><strong>Max-Iteration Limit ($t \le 25$):</strong> Hard circuit breaker forcing the agent to terminate and request human assistance if it loops more than 25 times without achieving the goal.</li>
                <li><strong>Token Spending Limit ($<\$2.00/\text{task}$):</strong> Automatic API termination if an agent's cumulative token cost exceeds the defined safety threshold.</li>
                <li><strong>Structured JSONL Trajectory Logs:</strong> Persistent audit trail recording <code>step_index</code>, <code>thought</code>, <code>tool_call</code>, <code>observation</code>, and <code>timestamp</code> for compliance forensic audits.</li>
              </ul>
            """,
            "keyQuestions": [
              "Which enterprise API actions MUST require mandatory Human-in-the-Loop (HITL) approval before execution?",
              "How do max-iteration and max-cost circuit breakers prevent infinite agent loops and runaway cloud billing?"
            ]
          }
        ],
        "resources": [
          { "name": "ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al. Original ReAct Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2210.03629.pdf" },
          { "name": "LangChain / LangGraph State Machine Architecture Guide & Documentation", "type": "Official Docs", "url": "https://langchain-ai.github.io/langgraph/" },
          { "name": "Microsoft AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation PDF", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2308.08155.pdf" },
          { "name": "Toolformer: Language Models Can Teach Themselves to Use Tools (Meta AI Paper PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2302.04761.pdf" },
          { "name": "Princeton SWE-bench: Evaluating Language Models on Real-World Software Problems PDF", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/2310.06770.pdf" }
        ]
    }

    m11 = {
        "id": "module-11",
        "number": "11",
        "title": "AI Security, Shadow AI, Global Regulations & Ethics",
        "subtitle": "Complete OWASP LLM Top 10, Shadow AI Identification, Responsible AI Employee Guidelines & EU AI Act",
        "duration": "75 min read",
        "level": "Security & Governance",
        "summary": "Protect enterprise AI systems and enforce corporate governance. Master ALL 10 OWASP LLM vulnerabilities, audit and eradicate Shadow AI, establish Responsible AI practice guidelines for employees, and comply with the EU AI Act and NIST AI RMF.",
        "topics": [
          {
            "id": "m11-t1",
            "title": "1. Complete OWASP Top 10 for LLM Applications & Dual-LLM Defense",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">11.1 Complete OWASP Top 10 for LLM Applications & Architectural Defenses</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Audit all 10 OWASP LLM security vulnerabilities, real-world exploit vectors, and architectural mitigations including the Dual-LLM Defense Pattern.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Comprehensive OWASP Top 10 LLM Vulnerability Standard</h4>
              <p>Security officers and AI architects must audit enterprise applications against the complete 10-point OWASP LLM vulnerability matrix:</p>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>OWASP Code</th>
                      <th>Vulnerability Name</th>
                      <th>Exploit Vector & Risk</th>
                      <th>Enterprise Architectural Mitigation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>LLM01</strong></td>
                      <td><strong>Prompt Injection (Direct & Indirect)</strong></td>
                      <td>Direct user prompt manipulation or hidden malicious instructions embedded inside retrieved RAG PDF documents that override system instructions.</td>
                      <td>Dual-LLM Security Boundary, Input Sanitization, Privilege Isolation, Instruction-Tuned Boundary Tags.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM02</strong></td>
                      <td><strong>Sensitive Information Disclosure</strong></td>
                      <td>Model inadvertently outputs confidential enterprise trade secrets, PII, financial ledgers, or internal API keys in response payloads.</td>
                      <td>Local Microsoft Presidio NER scrubbers, Zero Data Retention (ZDR) SLAs, Output Pattern Scanners.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM03</strong></td>
                      <td><strong>Supply Chain Vulnerabilities</strong></td>
                      <td>Compromised base model weights, backdoored Hugging Face libraries, or poisoned third-party PyPI dependencies (Pickle exploits).</td>
                      <td>Pin signed Safetensors formats, cryptographic hash checks, trusted private model registries.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM04</strong></td>
                      <td><strong>Data and Model Poisoning</strong></td>
                      <td>Adversaries introduce malicious or biased text into fine-tuning datasets to manipulate downstream model decision logic.</td>
                      <td>Cryptographic dataset hashing, strict data lineage auditing, anomaly detection on training corpora.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM05</strong></td>
                      <td><strong>Improper Output Handling</strong></td>
                      <td>Unvalidated model output passed directly to shell scripts, SQL queries, or web browsers, causing XSS or Remote Code Execution.</td>
                      <td>Treat LLM output as untrusted user input; enforce strict JSON schemas and parameterized SQL execution.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM06</strong></td>
                      <td><strong>Excessive Agency</strong></td>
                      <td>Autonomous AI agents granted unconstrained system permissions, root access, or unvetted write/delete capabilities across enterprise APIs.</td>
                      <td>Principle of Least Privilege (PoLP), strict API scope boundaries, mandatory Human-in-the-Loop (HITL) gates.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM07</strong></td>
                      <td><strong>System Prompt Leakage</strong></td>
                      <td>Adversarial jailbreaks force the model to dump its proprietary system prompt, exposing trade secret IP or security instructions.</td>
                      <td>System prompt obfuscation, separate Guardrail LLM classifiers, output signature filtering.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM08</strong></td>
                      <td><strong>Vector and Embedding Weaknesses</strong></td>
                      <td>Flaws in vector indexing or distance metrics allowing unauthorized context retrieval or document ACL boundary bypasses.</td>
                      <td>Enforce payload metadata filtering with explicit User ID / Role ACL claims before vector search execution.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM09</strong></td>
                      <td><strong>Misinformation & Hallucinations</strong></td>
                      <td>Model fabricates incorrect facts, invalid legal precedents, or fake citations presented with high statistical confidence.</td>
                      <td>Grounded RAG architecture with verbatim source citations, temperature set to 0.0, factuality cross-validation.</td>
                    </tr>
                    <tr>
                      <td><strong>LLM10</strong></td>
                      <td><strong>Unbounded Consumption (Model DoS)</strong></td>
                      <td>Adversaries send recursive queries, massive context inputs, or multi-agent loops to crash GPU servers or inflate API billing.</td>
                      <td>Rate limiting, per-user token quotas, max-context length caps, request timeouts, and semantic caching.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Deep-Dive: The Dual-LLM Defense Architecture Pattern</h4>
              <p>To eliminate <strong>LLM01 (Prompt Injection)</strong> and <strong>LLM06 (Excessive Agency)</strong>, leading security teams deploy the <strong>Dual-LLM Pattern</strong>:</p>

              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.95rem; line-height: 1.6;">
                  Untrusted Input (User Prompt / Web RAG) ➔ Guardrail Filter LLM (Sanitizes & Formats JSON Payload) ➔ Privileged Executive LLM (Executes Tools with Hardened System Prompt) ➔ Output Validator ➔ Safe User Response
                </code>
              </div>

              <p>By decoupling raw text processing from execution permissions, the Guardrail LLM neutralizes injection commands (e.g. <em>"Ignore previous instructions"</em>) before they can reach the privileged Executive LLM.</p>

              <div class="consultant-tip" style="margin-top: 1.5rem;">
                <strong>Security Officer Rule:</strong> Never grant an LLM direct root access or unrestricted SQL database credentials. Always isolate untrusted user inputs using a Dual-LLM boundary and require mandatory human approval for financial transfers or data deletion tools.
              </div>
            """,
            "keyQuestions": [
              "How does the Dual-LLM architecture decouple untrusted text input from privileged tool execution?",
              "What architectural controls prevent LLM06 (Excessive Agency) when deploying autonomous API agents?",
              "How do rate limits and semantic caching protect against LLM10 (Unbounded Consumption / Model DoS)?"
            ]
          },
          {
            "id": "m11-t2",
            "title": "2. Identifying, Auditing & Mitigating Shadow AI Across the Enterprise",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">11.2 Shadow AI CASB/DLP Audits & Presidio PII Scrubbing</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Detect unsanctioned consumer AI traffic and deploy local Presidio PII scrubbing containers on-premises.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. 5-Step Shadow AI Audit Strategy</h4>
              <ul class="curriculum-list">
                <li><strong>Step 1: CASB & Gateway Traffic Audit:</strong> Monitor outbound web gateway logs for unauthorized LLM API endpoints.</li>
                <li><strong>Step 2: Endpoint Data Loss Prevention (DLP):</strong> Detect copy-paste actions containing credit cards, source code, or Social Security Numbers.</li>
                <li><strong>Step 3: Deploy On-Prem Microsoft Presidio Scrubbing:</strong> Sanitize PII tokens before sending payloads to external cloud LLM APIs.</li>
                <li><strong>Step 4: Launch Approved Enterprise AI Alternative:</strong> Provide staff with a secure, managed enterprise portal featuring Zero Data Retention SLAs.</li>
                <li><strong>Step 5: Enforce Corporate AI Governance Policy:</strong> Require mandatory employee training and annual signoffs.</li>
              </ul>
            """,
            "keyQuestions": [
              "Why does blocking consumer AI tools backfire unless an approved enterprise alternative is provided?",
              "How do Microsoft Presidio NER containers anonymize sensitive PII tokens before cloud API transmission?"
            ]
          },
          {
            "id": "m11-t3",
            "title": "3. Responsible AI Employee Guidelines & EU AI Act Legal Risk Tiers",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">11.3 Responsible AI Guidelines & EU AI Act Tiers</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Classify AI applications against the 4 risk tiers of the EU AI Act (Unacceptable, High Risk, Specific Transparency, Minimal).</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. EU AI Act Risk Tier Framework</h4>
              <ul class="curriculum-list">
                <li><strong>Unacceptable Risk (Prohibited):</strong> Social scoring, biometric categorization, emotion recognition in workplaces. Fines up to €35M or 7% global turnover.</li>
                <li><strong>High Risk (Annex III):</strong> Credit scoring, employment screening, critical infrastructure. Requires formal conformity assessment, risk management systems, and audit logging.</li>
                <li><strong>Minimal Risk:</strong> Internal search, email translation, standard text summarization.</li>
              </ul>
            """,
            "keyQuestions": [
              "What corporate AI applications fall into the High-Risk Annex III category under the EU AI Act?",
              "What financial penalties exist for non-compliance with the EU AI Act (€35M or 7% global revenue)?"
            ]
          }
        ],
        "resources": [
          { "name": "OWASP Top 10 for Large Language Model Applications (Official Security PDF)", "type": "Security Report PDF", "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/NIST_OWASP_LLM_Top_10_v1.1.pdf" },
          { "name": "EU Artificial Intelligence Act (Official EU Regulation Text PDF - EU 2024/1689)", "type": "Regulatory Text PDF", "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202401689" },
          { "name": "NIST AI Risk Management Framework (AI RMF 1.0 PDF)", "type": "NIST Standard PDF", "url": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" },
          { "name": "Microsoft Presidio PII/PHI Scrubbing Open Source Documentation", "type": "Official Docs", "url": "https://microsoft.github.io/presidio/" },
          { "name": "ISO/IEC 42001:2023 Information Technology — Artificial Intelligence Management System", "type": "ISO Standard", "url": "https://www.iso.org/standard/81230.html" }
        ]
    }

    m12 = {
        "id": "module-12",
        "number": "12",
        "title": "Leadership in the AI Era: C-Suite Alignment & Capstone Deployment",
        "subtitle": "Reimagining Business Models, Redefining Roles, C-Suite Defense, Platform Evaluation & Enterprise Capstone",
        "duration": "90 min read",
        "level": "C-Suite Advisory & Capstone",
        "summary": "Lead enterprise AI transformation at the executive level. Reimagine business models for the AI age, redefine workforce roles, defend strategy against CFO/CISO/CTO/CHRO pushback, compare enterprise AI platforms, and execute the 10-Phase Enterprise Capstone Project.",
        "topics": [
          {
            "id": "m12-t1",
            "title": "1. Business Model Innovation & Workforce Role Redefinition",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">12.1 Business Model Innovation & Workforce Role Redefinition</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Shift from legacy per-seat SaaS monetization to outcome-based AI value sharing and transition staff from manual operators to AI supervisors.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The Death of Seat-Based SaaS Pricing</h4>
              <p>Traditional B2B SaaS business models charged a monthly subscription fee per human user seat (e.g. $50/user/month). As Generative AI and autonomous agents automate 80% of routine workflows, the number of human seats shrinks, destroying legacy SaaS revenue.</p>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. The 3 AI Monetization Models</h4>
              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Pricing Model</th>
                      <th>Billing Unit</th>
                      <th>Value Alignment</th>
                      <th>Enterprise Adoption Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Consumption / Usage-Based</strong></td>
                      <td>Per 1M Tokens / Per API Call / Per Compute Hour.</td>
                      <td>Low. Customer pays even if LLM output requires heavy human edits.</td>
                      <td>Unpredictable monthly cloud budgets; CFO billing pushback.</td>
                    </tr>
                    <tr>
                      <td><strong>Outcome-Based Pricing</strong></td>
                      <td>Per Resolved Ticket / Per Audited Invoice / Per Qualified Lead.</td>
                      <td>High. Customer pays strictly when AI successfully completes a business outcome.</td>
                      <td>Requires precise automated outcome verification logic.</td>
                    </tr>
                    <tr>
                      <td><strong>Value-Share / Gain-Share</strong></td>
                      <td>15-20% of net cost savings or incremental revenue generated.</td>
                      <td>Maximum. Aligns vendor success directly with enterprise ROI.</td>
                      <td>Complex baseline measurement audits during procurement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Workforce Role Redefinition & Human Leverage Multiplier</h4>
              <p>Employees transition from manual execution operators to <strong>AI Supervisors & Exception Auditors</strong>. Human labor leverage is calculated as:</p>
              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\text{Human Labor Leverage (L)} = \frac{\text{Total Business Output Volume}}{\text{Human Hours Spent on Exception Review}}</code>
              </div>
            """,
            "keyQuestions": [
              "Why does seat-based SaaS pricing collapse when autonomous agents automate 80% of manual tasks?",
              "How can an executive structure outcome-based pricing to align customer incentives with platform ROI?"
            ]
          },
          {
            "id": "m12-t2",
            "title": "2. C-Suite Persona Veto Neutralization & Executive Defense",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">12.2 C-Suite Persona Veto Neutralization Playbook</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Neutralize CFO cost objections, CISO security pushback, CTO legacy technical debt friction, and CHRO talent fears.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. C-Suite Persona Defense Matrix</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>C-Suite Executive</th>
                      <th>Primary Veto Objection</th>
                      <th>Root Fear / Resistance</th>
                      <th>Consultant Defense Strategy & Artifact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>CFO (Chief Financial Officer)</strong></td>
                      <td><em>"Unpredictable cloud token costs and unproven long-term ROI."</em></td>
                      <td>Budget overrun; paying millions for AI hype without cost deflection.</td>
                      <td>Present 3-Year TCO Financial Model comparing API token costs vs labor savings + Semantic Caching 40% cost reduction.</td>
                    </tr>
                    <tr>
                      <td><strong>CISO (Chief Information Security Officer)</strong></td>
                      <td><em>"Data leakage, PII exposure, and prompt injection vulnerabilities."</em></td>
                      <td>Regulatory fines (EU AI Act, GDPR, HIPAA) and public brand damage.</td>
                      <td>Present Contractual Zero Data Retention (ZDR) SLAs, Local Microsoft Presidio PII containers, and Dual-LLM Guardrails.</td>
                    </tr>
                    <tr>
                      <td><strong>CTO / CIO (Chief Technology Officer)</strong></td>
                      <td><em>"Integration complexity, technical debt, and database schema disruption."</em></td>
                      <td>System downtime, broken legacy ERP/CRM pipelines, team overload.</td>
                      <td>Present API Gateway Sidecars, LiteLLM abstraction layers, and Zero-Schema-Change lakehouse ingestion blueprints.</td>
                    </tr>
                    <tr>
                      <td><strong>CHRO (Chief Human Resources Officer)</strong></td>
                      <td><em>"Employee fear of job displacement, morale drop, and bias."</em></td>
                      <td>Workforce backlash, union grievances, EEOC discrimination lawsuits.</td>
                      <td>Present Responsible AI Employee Upskilling Charter, EEOC blind screening rules, and Human-in-the-Loop governance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "What financial metrics (payback period, labor deflection ROI) convince a skeptical CFO within a 90-day pilot?",
              "How do Zero Data Retention (ZDR) SLAs and Presidio containers secure CISO approval for cloud LLM APIs?"
            ]
          },
          {
            "id": "m12-t3",
            "title": "3. Enterprise AI Platform Comparison & Vendor Lock-In Matrix",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">12.3 Enterprise AI Platform Comparison & Model Abstraction</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Evaluate managed cloud platforms (Azure OpenAI, AWS Bedrock, GCP Vertex AI, vLLM) and architect vendor-agnostic LLM gateways.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Managed Enterprise Platform Comparison Matrix</h4>
              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Supported Models</th>
                      <th>Data Privacy & SLAs</th>
                      <th>Vendor Lock-In Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Azure OpenAI</strong></td>
                      <td>GPT-4o, o1 Reasoning, Embeddings</td>
                      <td>Contractual Zero Data Retention (ZDR), VNet isolation.</td>
                      <td>High (Tied to Microsoft Azure ecosystem).</td>
                    </tr>
                    <tr>
                      <td><strong>AWS Bedrock</strong></td>
                      <td>Claude 3.5 Sonnet, Llama 3.1, Mistral, Titan</td>
                      <td>Serverless API, zero training on customer data, KMS encryption.</td>
                      <td>Medium (Multi-vendor model choice within AWS).</td>
                    </tr>
                    <tr>
                      <td><strong>GCP Vertex AI</strong></td>
                      <td>Gemini 1.5 Pro, Gemini 1.5 Flash, PaLM 2</td>
                      <td>2M context capacity, native multi-modal parsing, VPC controls.</td>
                      <td>Medium (Tied to Google Cloud & BigQuery).</td>
                    </tr>
                    <tr>
                      <td><strong>Self-Hosted vLLM (VPC)</strong></td>
                      <td>Llama 3.1 (8B/70B/405B), DeepSeek V2.5</td>
                      <td>100% Air-Gapped, zero external network calls, weight ownership.</td>
                      <td>Zero (Complete open-source ownership).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Mitigating Vendor Lock-in: The Model Abstraction Gateway</h4>
              <p>Architect an internal API Gateway (LiteLLM / OpenAI-compatible proxy) that routes prompts across underlying LLM providers dynamically based on latency, cost, and availability:</p>
              <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <code style="font-size: 0.95rem; line-height: 1.6;">
                  Enterprise Application ➔ LiteLLM Abstraction Proxy ➔ [Route: Fast Prompt ➔ GPT-4o-mini | Complex Code ➔ Claude 3.5 | Air-Gapped ➔ Local vLLM]
                </code>
              </div>
            """,
            "keyQuestions": [
              "How does an internal LLM model abstraction gateway prevent single-vendor price lock-in?",
              "When does data sovereignty mandate deploying air-gapped self-hosted vLLM on-premises?"
            ]
          },
          {
            "id": "m12-t4",
            "title": "4. The 10-Phase Enterprise AI Capstone Execution Playbook",
            "content": r"""
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">12.4 The 10-Phase Enterprise AI Capstone Execution Playbook</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Synthesize all 12 modules into a production-ready enterprise Capstone proposal and deployment roadmap.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 10-Phase Capstone Execution Framework</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Capstone Step</th>
                      <th>Primary Deliverable & Output Artifact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Phase 1</strong></td>
                      <td>Executive Opportunity Scoping</td>
                      <td>Client Problem Statement & Strategic Scope Charter (Modules 1 & 2).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 2</strong></td>
                      <td>ROI & Financial Feasibility Study</td>
                      <td>3-Year TCO Financial Model & Payback Schedule (Modules 3 & 12).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 3</strong></td>
                      <td>Data Audit & Lakehouse Readiness</td>
                      <td>Data Pipeline Architecture & Feature Store Blueprint (Modules 3 & 5).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 4</strong></td>
                      <td>Vector RAG & GraphRAG Design</td>
                      <td>5-Stage RAG Pipeline & Vector DB Sizing Model (Module 8).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 5</strong></td>
                      <td>Model Customization Strategy</td>
                      <td>LoRA / QLoRA Fine-Tuning & Quantization Plan (Module 9).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 6</strong></td>
                      <td>Agentic Workflow Design</td>
                      <td>LangGraph State Machine & ReAct Loop Specification (Module 10).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 7</strong></td>
                      <td>Security & Governance Audit</td>
                      <td>OWASP LLM Top 10 Audit & Presidio PII Scrubbing Charter (Module 11).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 8</strong></td>
                      <td>MLOps / LLMOps Pipeline Setup</td>
                      <td>CI/CD Deployment & Model Drift Monitoring Architecture (Module 8 & 10).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 9</strong></td>
                      <td>C-Suite Pitch & Veto Neutralization</td>
                      <td>Executive Board Deck & Persona Defense Strategy (Module 12).</td>
                    </tr>
                    <tr>
                      <td><strong>Phase 10</strong></td>
                      <td>Rollout & Change Management</td>
                      <td>Workforce Upskilling & Outcome-Based Rollout Roadmap (Module 6 & 12).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="consultant-tip" style="margin-top: 1.5rem;">
                <strong>Capstone Graduation Benchmark:</strong> A complete enterprise Capstone proposal MUST synthesize technical calculus, financial TCO models, vector RAG blueprints, OWASP security audits, and C-Suite presentation decks into a unified single source of truth.
              </div>
            """,
            "keyQuestions": [
              "What key deliverables constitute a complete production-ready enterprise Capstone Proposal?",
              "How does executing all 10 phases ensure both technical soundness and C-Suite board approval?"
            ]
          }
        ],
        "resources": [
          { "name": "MIT Sloan Management Review: Aligning the C-Suite on AI Investment PDF", "type": "Executive Article PDF", "url": "https://sloanreview.mit.edu/article/aligning-the-c-suite-on-ai/" },
          { "name": "Harvard Business Review: Reshaping Business Models in the AI Era PDF", "type": "HBR Article PDF", "url": "https://hbr.org/2023/07/reshaping-business-models-in-the-ai-era" },
          { "name": "Palantir Foundry & Artificial Intelligence Platform (AIP) Architecture Guide", "type": "Platform Guide", "url": "https://www.palantir.com/platforms/aip/" },
          { "name": "Accenture C-Suite AI Adoption & Financial ROI Study PDF", "type": "Industry Report PDF", "url": "https://www.accenture.com/us-en/insights/artificial-intelligence-summary-index" },
          { "name": "PwC Global AI Study: Sizing the Prize Report PDF", "type": "PwC Report PDF", "url": "https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" }
        ]
    }

    full = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12]

    out_path = os.path.join("data", "curriculum.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("window.AI_CURRICULUM_DATA = ")
        json.dump(full, f, indent=2)
        f.write(";\n")

    print(f"Generated {len(full)} modules in data/curriculum.js successfully!")

if __name__ == "__main__":
    generate_curriculum_js()
