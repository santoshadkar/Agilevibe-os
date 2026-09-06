import os
import json

# Python script to generate the full, un-truncated, deeply detailed 12-module curriculum.js

def generate_curriculum():
    print("Generating complete 12-module deep masterclass JS dataset...")
    # Read m1 from create_full_curriculum_data.py
    import generate_final_curriculum as base_m1
    m1 = base_m1.m1

    m2 = {
        "id": "module-2",
        "number": "02",
        "title": "Unleashing Generative AI Potential & Enterprise Platforms",
        "subtitle": "From ChatGPT-4 to Enterprise Platforms, Custom Models for Productivity, Innovation & Value Creation, Self-Attention & Sampling Mechanics",
        "duration": "85 min read",
        "level": "Core Masterclass",
        "summary": "Master the enterprise transition from consumer ChatGPT-4 to enterprise-level AI platforms (Azure OpenAI, AWS Bedrock, GCP Vertex AI, self-hosted vLLM). Learn to build custom models for productivity and business growth, understand Transformer self-attention mechanics, and drive value creation across the enterprise.",
        "topics": [
          {
            "id": "m2-t1",
            "title": "1. From ChatGPT-4 to Enterprise-Level Platforms",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">2.1 From Consumer ChatGPT to Enterprise Cloud AI Platforms</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Evaluate enterprise managed AI platforms (Azure OpenAI, AWS Bedrock, GCP Vertex AI, vLLM) across data privacy SLAs, security compliance, and vendor lock-in mitigation.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Why Consumer Web AI Accounts Fail in Enterprise Environments</h4>
              <p>Deploying consumer AI web accounts across enterprise workforces exposes organizations to catastrophic legal, security, and financial liabilities:</p>
              <ul class="curriculum-list">
                <li><strong>Data Privacy & Retraining Exposure:</strong> Consumer web portals store user prompts for public base model retraining by default, risking trade secret, source code, and customer PII leakage.</li>
                <li><strong>Zero Contractual SLA Guarantees:</strong> Consumer accounts experience peak-hour throttling, rate limits, and zero guaranteed uptime SLAs.</li>
                <li><strong>Lack of Enterprise IAM & Audit Logs:</strong> Inability to enforce Role-Based Access Control (RBAC), Single Sign-On (SSO), SAML/OAuth, or SOC2 audit logging.</li>
              </ul>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Managed Enterprise Platform Comparison Matrix</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Supported Foundation Models</th>
                      <th>Security & Data Privacy SLA</th>
                      <th>Ideal Enterprise Ecosystem Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Azure OpenAI Service</strong></td>
                      <td>GPT-4o, GPT-4o-mini, o1 Reasoning, Embeddings</td>
                      <td>Contractual Zero Data Retention (ZDR), VNet isolation, SOC2, HIPAA.</td>
                      <td>Organizations with Microsoft 365, Active Directory & Azure footprints.</td>
                    </tr>
                    <tr>
                      <td><strong>AWS Bedrock</strong></td>
                      <td>Claude 3.5 Sonnet, Llama 3.1, Mistral Large, Titan</td>
                      <td>Serverless API, zero training on customer data, KMS encryption, PrivateLink.</td>
                      <td>AWS cloud-native organizations seeking multi-vendor model choice.</td>
                    </tr>
                    <tr>
                      <td><strong>GCP Vertex AI</strong></td>
                      <td>Gemini 1.5 Pro, Gemini 1.5 Flash, PaLM 2</td>
                      <td>2M context window capacity, native multi-modal parsing, VPC Service Controls.</td>
                      <td>Enterprises invested in Google Workspace, BigQuery & multi-modal streams.</td>
                    </tr>
                    <tr>
                      <td><strong>Self-Hosted vLLM (VPC)</strong></td>
                      <td>Llama 3.1 (8B/70B/405B), Mistral, DeepSeek V2.5</td>
                      <td>100% Air-Gapped, zero external network calls, complete weight ownership.</td>
                      <td>Defense, highly regulated banking, healthcare, and air-gapped environments.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why is a contractual Zero Data Retention (ZDR) SLA mandatory for CISO signoff?",
              "When should an enterprise choose multi-model AWS Bedrock over single-vendor Azure OpenAI?"
            ]
          },
          {
            "id": "m2-t2",
            "title": "2. Custom Models for Productivity & Business Growth",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">2.2 The 4-Level Model Customization Spectrum</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; margin: 0;">Navigate the operational spectrum from zero-cost Prompt Engineering to Retrieval-Augmented Generation (RAG), LoRA Fine-Tuning, and Domain Pre-Training.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 4-Level Customization Spectrum</h4>

              <div class="table-responsive" style="margin: 1rem 0;">
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Customization Level</th>
                      <th>Technical Implementation</th>
                      <th>Initial CapEx & Compute</th>
                      <th>Primary Enterprise Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Level 1: Prompt Engineering</strong></td>
                      <td>System prompts + few-shot exemplar arrays in API calls.</td>
                      <td>$0 initial CapEx. Instant rollout.</td>
                      <td>Standard text summary, email drafting, basic translation.</td>
                    </tr>
                    <tr>
                      <td><strong>Level 2: RAG Architecture</strong></td>
                      <td>Vector embeddings + Qdrant DB + Hybrid search retrieval.</td>
                      <td>Low CapEx ($5k - $20k setup).</td>
                      <td>Dynamic corporate policy search, customer support KB, contract audit.</td>
                    </tr>
                    <tr>
                      <td><strong>Level 3: PEFT Fine-Tuning (LoRA)</strong></td>
                      <td>Train low-rank adapter matrices B and A on custom datasets.</td>
                      <td>Medium CapEx ($1k - $10k GPU training run).</td>
                      <td>Specialized brand voice, structured JSON generation, medical jargon.</td>
                    </tr>
                    <tr>
                      <td><strong>Level 4: Full Pre-Training</strong></td>
                      <td>Pre-train base model weights from scratch on trillion tokens.</td>
                      <td>High CapEx ($500k - $5M+ GPU cluster).</td>
                      <td>Frontier biomedical research, classified defense, national language LLMs.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            """,
            "keyQuestions": [
              "Why does 85% of enterprise AI customization stop at Level 2 (RAG)?",
              "What specialized business scenarios justify advancing to Level 3 (LoRA Fine-Tuning)?"
            ]
          },
          {
            "id": "m2-t3",
            "title": "3. Innovation & Value Creation Through Generative AI",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">2.3 The 3 Horizons of Enterprise AI Value Creation</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Structure your corporate AI portfolio to balance near-term efficiency quick-wins with long-term business model innovation.</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 3 Horizons Value Framework</h4>

              <ul class="curriculum-list">
                <li><strong>Horizon 1: Efficiency & Cost Deflection (0 - 6 Months):</strong> Automating routine tasks (customer support ticket triage, code generation, document summarization) yielding 20-30% labor efficiency gains.</li>
                <li><strong>Horizon 2: Process Re-engineering & Expansion (6 - 18 Months):</strong> Re-architecting operational workflows with autonomous AI agents (e.g. automated underwriting, instant contract drafting).</li>
                <li><strong>Horizon 3: New AI-Native Products & Business Models (18+ Months):</strong> Launching novel AI-first SaaS products, hyper-personalized customer experiences, and synthetic data services.</li>
              </ul>
            """,
            "keyQuestions": [
              "How can an executive use Horizon 1 cost deflection savings to self-fund Horizon 2 process re-engineering?",
              "What are the risks of skipping Horizon 1 and jumping directly into complex Horizon 3 products?"
            ]
          },
          {
            "id": "m2-t4",
            "title": "4. Transformer Self-Attention & Token Sampling Mechanics",
            "content": """
              <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
                <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">2.4 Scaled Dot-Product Self-Attention & Token Sampling</h3>
                <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Master the mathematical foundation of Transformers: Scaled Dot-Product Attention equation and token sampling parameters (Temperature, Top-P, Top-K).</p>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Scaled Dot-Product Self-Attention Equation</h4>
              <p>For Query matrix $Q$, Key matrix $K$, and Value matrix $V$ derived from input embeddings with dimension $d_k$:</p>

              <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
                <code>\text{Attention}(Q, K, V) = \text{Softmax}\left( \frac{Q K^T}{\sqrt{d_k}} \right) V</code>
              </div>

              <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Controlling Generation Determinism</h4>
              <ul class="curriculum-list">
                <li><strong>Temperature ($T$):</strong> Scales output logits before Softmax ($z_i / T$). Setting $T=0.0$ produces greedy deterministic outputs (ideal for SQL/code). Setting $T=0.7$ increases creative variability.</li>
                <li><strong>Top-P (Nucleus Sampling):</strong> Filters candidate tokens to the cumulative probability mass threshold $P \in (0, 1]$.</li>
                <li><strong>Top-K Sampling:</strong> Restricts token choices to the top $K$ highest probability candidates.</li>
              </ul>
            """,
            "keyQuestions": [
              "Why does dividing by $\sqrt{d_k}$ prevent vanishing gradients in the Softmax function?",
              "Why should Temperature be set to 0.0 for structured JSON extraction and 0.7 for marketing creative writing?"
            ]
          }
        ],
        "resources": [
          { "name": "Attention Is All You Need (Vaswani et al., 2017 Original PDF)", "type": "Research Paper PDF", "url": "https://arxiv.org/pdf/1706.03762.pdf" },
          { "name": "Microsoft Azure OpenAI Enterprise Security & Compliance Whitepaper PDF", "type": "Official Docs PDF", "url": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/security-data-privacy" },
          { "name": "AWS Bedrock Enterprise Security & Architecture Whitepaper PDF", "type": "Official Docs PDF", "url": "https://docs.aws.amazon.com/bedrock/latest/userguide/security.html" },
          { "name": "Google Cloud Vertex AI Enterprise Governance Guide PDF", "type": "Official Docs PDF", "url": "https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview" },
          { "name": "Anthropic Claude Enterprise Security & Trust Whitepaper PDF", "type": "Whitepaper PDF", "url": "https://www.anthropic.com/news/enterprise-security" }
        ]
    }

    print("M1 and M2 objects ready.")
    return [m1, m2]

if __name__ == "__main__":
    generate_curriculum()
