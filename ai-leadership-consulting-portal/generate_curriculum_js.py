import os
import json

# Script to build data/curriculum.js with massive deep-read content for all 12 modules

modules = [
  # Module 1
  {
    "id": "module-1",
    "number": "01",
    "title": "Decoding AI: Absolute Foundations, Industry 4.0 & Analytics Maturity",
    "subtitle": "75-Year History of AI, Industry 4.0 Transformation, Analytics Maturity (Predictive to Prescriptive), Task-Based vs Foundation Models & ML Math",
    "duration": "90 min read",
    "level": "Ground Zero to Foundation",
    "summary": "Master the complete foundational single source of truth for Artificial Intelligence. Trace AI's 75-year evolution from Alan Turing to GenAI, understand Industry 4.0 digital transformation, evaluate the 5 stages of firm analytics maturity (Descriptive to Prescriptive to Generative), contrast Task-Based ML vs Foundation Models, and derive machine learning mathematics.",
    "topics": [
      {
        "id": "m1-t1",
        "title": "1. Basics of AI & Its 75-Year Historical Evolution (1950 - Present)",
        "content": """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.1 Basics of AI & 75-Year Historical Evolution</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Understand the paradigm shift from rule-based computing to statistical learning and foundation models, tracing key historical breakthroughs, commercial milestones, and AI winters.</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Executive Paradigm Shift: Symbolic Logic vs. Statistical Learning</h4>
          <p>To lead AI initiatives effectively, an executive must first understand the fundamental shift in software engineering over the past 70 years:</p>

          <div class="table-responsive" style="margin: 1rem 0;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Classic Software Engineering (Symbolic / Rule-Based AI)</th>
                  <th>Machine Learning & Deep Learning (Statistical AI)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Core Mechanism</strong></td>
                  <td>Human software engineers manually write explicit <code>IF-THEN</code> business rules.</td>
                  <td>Algorithms automatically discover mathematical mapping <code>f(x) \approx y</code> from historical data.</td>
                </tr>
                <tr>
                  <td><strong>Data Input</strong></td>
                  <td>Structured inputs + handcrafted rules ➔ Fixed output logic.</td>
                  <td>Raw input features (X) + Ground-truth target outcomes (Y) ➔ Discovered Model Weights.</td>
                </tr>
                <tr>
                  <td><strong>Best Fit Domain</strong></td>
                  <td>Deterministic problems: tax engines, payroll processing, accounting ledgers.</td>
                  <td>Non-linear complex domains: image recognition, churn prediction, speech, natural text.</td>
                </tr>
                <tr>
                  <td><strong>Failure Mode</strong></td>
                  <td>Brittle. Fails when edge cases exceed handwritten rule coverage.</td>
                  <td>Probabilistic. Can hallucinate or drift if input distribution shifts outside training set.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. The 5 Historical Epochs of Artificial Intelligence</h4>

          <h5 style="color: var(--accent-amber); margin: 1rem 0 0.5rem;">Epoch 1: Genesis & Symbolic Computing (1950 - 1970s)</h5>
          <ul class="curriculum-list">
            <li><strong>1950 (Alan Turing & The Turing Test):</strong> Alan Turing published <em>'Computing Machinery and Intelligence'</em>, posing the famous question: <em>"Can machines think?"</em> He introduced the Imitation Game (Turing Test) as the operational benchmark for machine intelligence.</li>
            <li><strong>1956 (The Dartmouth Workshop):</strong> John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon organized the Dartmouth Summer Research Conference, officially coining the term <strong>'Artificial Intelligence'</strong>.</li>
            <li><strong>1958 (Frank Rosenblatt's Perceptron):</strong> Invented at Cornell Aeronautical Laboratory, the Perceptron was the world's first hardware artificial neuron capable of learning linear binary classification weights.</li>
          </ul>

          <h5 style="color: var(--accent-rose); margin: 1.25rem 0 0.5rem;">Epoch 2: The First AI Winter & Expert Systems (1970s - 1990s)</h5>
          <ul class="curriculum-list">
            <li><strong>1969 (The Minsky & Papert Proof & 1st AI Winter):</strong> Marvin Minsky and Seymour Papert published <em>Perceptrons</em>, mathematically proving that single-layer Perceptrons could not solve non-linear functions (like the XOR gate). Government and corporate funding dried up, triggering the <strong>First AI Winter (1974 - 1980)</strong>.</li>
            <li><strong>1980s (Rule-Based Expert Systems):</strong> AI resurrected with Knowledge-Based Expert Systems (MYCIN for medical diagnosis, XCON for DEC hardware). Engineers manually coded thousands of rules in LISP and PROLOG.</li>
            <li><strong>Late 1980s (The 2nd AI Winter):</strong> Expert systems proved brittle, expensive to maintain, and incapable of learning. LISP hardware companies collapsed, causing the <strong>Second AI Winter (1987 - 1993)</strong>.</li>
          </ul>

          <h5 style="color: var(--accent-cyan); margin: 1.25rem 0 0.5rem;">Epoch 3: Statistical Machine Learning (1990s - 2010s)</h5>
          <ul class="curriculum-list">
            <li><strong>1997 (IBM Deep Blue vs Garry Kasparov):</strong> IBM's Deep Blue supercomputer defeated world chess champion Garry Kasparov using high-speed alpha-beta search trees evaluating 200 million board positions per second.</li>
            <li><strong>Probabilistic Shift:</strong> Researchers abandoned hand-crafted rules in favor of statistical estimation over tabular data using Support Vector Machines (SVMs), Random Forests, and Gradient Boosted Decision Trees (XGBoost).</li>
          </ul>

          <h5 style="color: var(--accent-emerald); margin: 1.25rem 0 0.5rem;">Epoch 4: Deep Learning & GPU Acceleration (2012 - 2020)</h5>
          <ul class="curriculum-list">
            <li><strong>2012 (AlexNet ImageNet Breakthrough):</strong> Geoffrey Hinton, Alex Krizhevsky, and Ilya Sutskever won the ImageNet competition using AlexNet—a Deep Convolutional Neural Network trained on NVIDIA GPUs with CUDA, ReLU activations, and Dropout. Modern Deep Learning was born.</li>
            <li><strong>2016 (DeepMind AlphaGo Defeats Lee Sedol):</strong> DeepMind's AlphaGo defeated 18-time world champion Lee Sedol in Go, combining Deep Q-Networks (DQN) with Monte Carlo Tree Search (MCTS).</li>
          </ul>

          <h5 style="color: var(--accent-cyan); margin: 1.25rem 0 0.5rem;">Epoch 5: Generative AI & Foundation Models (2017 - Present)</h5>
          <p>Vaswani et al. (2017) published <em>'Attention Is All You Need'</em>, inventing the Transformer architecture. This unlocked parallel self-attention computation, multi-modal foundation models (OpenAI GPT-4o, Claude 3.5, Gemini 1.5, Llama 3.1), and autonomous AI agent systems.</p>

          <div class="consultant-tip" style="margin-top: 1.5rem;">
            <strong>Leader Strategic takeaway:</strong> AI history proves that hype cycles crash when technology promises exceed real-world ROI and maintainability. Always ground client initiatives in quantifiable economic value (cost deflection or revenue expansion) rather than speculative tech hype.
          </div>
        """,
        "keyQuestions": [
          "What distinguishes deterministic rule-based systems from probabilistic statistical machine learning models?",
          "How did GPU acceleration and the Transformer architecture resolve past AI winter bottlenecks?"
        ]
      },
      {
        "id": "m1-t2",
        "title": "2. Industry 4.0 & Role of AI in Driving Digital Transformation",
        "content": """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.2 Industry 4.0 & Cyber-Physical AI Transformation</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Explore how AI serves as the central operational intelligence layer connecting industrial IoT sensors, robotics, cloud lakehouses, and edge devices across Industry 4.0 smart factories.</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 4 Waves of Industrial Revolution</h4>
          <ul class="curriculum-list">
            <li><strong>Industry 1.0 (1780s):</strong> Mechanization via steam engine power and water wheels.</li>
            <li><strong>Industry 2.0 (1870s):</strong> Mass production assembly lines powered by electricity and division of labor.</li>
            <li><strong>Industry 3.0 (1970s):</strong> Automated manufacturing using PLCs, computers, and early IT systems.</li>
            <li><strong>Industry 4.0 (2015+):</strong> Cyber-physical systems, Industrial IoT (IIoT), cloud computing, and real-time Artificial Intelligence.</li>
          </ul>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Core Pillars of Industry 4.0 AI Integration</h4>

          <div class="table-responsive" style="margin: 1rem 0;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Industry 4.0 Pillar</th>
                  <th>Technical Infrastructure Required</th>
                  <th>AI Model Architecture</th>
                  <th>Quantifiable Business Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Predictive Maintenance</strong></td>
                  <td>IIoT vibration, thermal & acoustic sensors on factory machinery.</td>
                  <td>LSTM / Autoencoders for time-series anomaly detection.</td>
                  <td>Reduces unplanned factory downtime by 35-50%, saving millions in lost production.</td>
                </tr>
                <tr>
                  <td><strong>Visual Quality Control</strong></td>
                  <td>High-speed industrial cameras on conveyor assembly belts.</td>
                  <td>Convolutional Neural Networks (CNNs / YOLO / ResNet) on Edge GPUs.</td>
                  <td>Detects micro-defects (<0.1mm) at 60 frames/sec with 99.8% accuracy.</td>
                </tr>
                <tr>
                  <td><strong>Dynamic Warehouse Logistics</strong></td>
                  <td>Autonomous Mobile Robots (AMRs) + RFID tracking graphs.</td>
                  <td>Reinforcement Learning (PPO) + Graph Neural Networks.</td>
                  <td>Optimizes robot routing paths, increasing warehouse order throughput by 40%.</td>
                </tr>
                <tr>
                  <td><strong>Generative Supply Chain Design</strong></td>
                  <td>Enterprise ERP data lakehouse + global supplier APIs.</td>
                  <td>GraphRAG + Multi-Agent state machines.</td>
                  <td>Simulates global trade disruption scenarios and recommends optimal supplier re-routing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        """,
        "keyQuestions": [
          "How does edge AI computing enable real-time defect detection without round-trip cloud latency?",
          "What role do industrial IoT sensors play in moving from calendar maintenance to predictive maintenance?"
        ]
      },
      {
        "id": "m1-t3",
        "title": "3. Predictive & Prescriptive Analytics (Analytics Maturity)",
        "content": """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.3 Firm Analytics Maturity: Descriptive to Generative</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Evaluate your organization's position across the 5 stages of analytics maturity to construct realistic data transformation roadmaps.</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. The 5-Stage Firm Analytics Maturity Model</h4>

          <div class="formula-box" style="background: rgba(0, 210, 255, 0.05); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <code style="font-size: 0.95rem; line-height: 1.6;">
              Stage 1: DESCRIPTIVE (What happened?) ➔ Static BI Dashboards<br/>
              └─ Stage 2: DIAGNOSTIC (Why did it happen?) ➔ OLAP Drill-Down Analysis<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;└─ Stage 3: PREDICTIVE (What WILL happen?) ➔ Supervised ML Forecasting<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Stage 4: PRESCRIPTIVE (What SHOULD we do?) ➔ Optimization & RL<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ Stage 5: GENERATIVE / AUTONOMOUS (Can AI execute it?) ➔ Agentic Workflows
            </code>
          </div>

          <div class="table-responsive" style="margin: 1rem 0;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Maturity Stage</th>
                  <th>Data Infrastructure Stack</th>
                  <th>Analytics Output</th>
                  <th>Executive Decision Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Descriptive</strong></td>
                  <td>SQL Data Warehouses, Excel spreadsheets, static PDF reports.</td>
                  <td>Historical backward-looking charts (e.g. Q3 sales dropped 12%).</td>
                  <td>Human reads report and guesses corrective action. Low leverage.</td>
                </tr>
                <tr>
                  <td><strong>2. Diagnostic</strong></td>
                  <td>Data Lakehouses (Snowflake, Databricks), OLAP cubes, slice-and-dice BI.</td>
                  <td>Root-cause correlation analysis (e.g. Q3 sales dropped due to East Region stockouts).</td>
                  <td>Human identifies problem source manually. Medium leverage.</td>
                </tr>
                <tr>
                  <td><strong>3. Predictive</strong></td>
                  <td>Cloud Feature Stores, MLOps pipelines, Supervised ML (XGBoost).</td>
                  <td>Forward-looking probability scores (e.g. 14% customer churn risk next month).</td>
                  <td>Human acts on algorithmic early-warning indicators. High leverage.</td>
                </tr>
                <tr>
                  <td><strong>4. Prescriptive</strong></td>
                  <td>Linear Programming solvers, Operations Research engines, RL algorithms.</td>
                  <td>Automated optimal action recommendations (e.g. Offer 15% discount to 420 targeted users).</td>
                  <td>Human approves recommended decision package. Very high leverage.</td>
                </tr>
                <tr>
                  <td><strong>5. Generative / Autonomous</strong></td>
                  <td>Foundation Models, ReAct Agent Loops, LangGraph State Machines.</td>
                  <td>Autonomous agentic execution (e.g. Agent contacts supplier, re-orders stock, updates ERP).</td>
                  <td>Human acts as supervisor reviewing exceptions. Maximum leverage.</td>
                </tr>
              </tbody>
            </table>
          </div>
        """,
        "keyQuestions": [
          "Where does your organization currently sit on the 5-stage analytics maturity spectrum?",
          "Why must an enterprise establish strong Stage 1-3 data hygiene before attempting Stage 5 Autonomous AI?"
        ]
      },
      {
        "id": "m1-t4",
        "title": "4. Task-Based Models vs. Foundation Models: Basics",
        "content": """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.4 Task-Based ML vs. General Foundation Models</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Master the strategic trade-offs between deploying narrow task-based machine learning models vs multi-modal general foundation models.</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">Deep Architectural & Strategic Comparison</h4>

          <div class="table-responsive" style="margin: 1rem 0;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Evaluation Axis</th>
                  <th>Task-Based ML Models (XGBoost, SVM, CNN)</th>
                  <th>Generative Foundation Models (GPT-4o, Claude 3.5, Llama 3.1)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Primary Focus</strong></td>
                  <td>Solves one specific narrow problem (e.g. predict credit default).</td>
                  <td>General-purpose reasoning platform for multi-modal tasks (text, code, vision).</td>
                </tr>
                <tr>
                  <td><strong>Training Data</strong></td>
                  <td>Requires domain-specific clean labeled training dataset ($X, Y$).</td>
                  <td>Pre-trained on trillions of unlabelled tokens via self-supervised learning.</td>
                </tr>
                <tr>
                  <td><strong>Adaptability</strong></td>
                  <td>Brittle. Fails if data distribution shifts outside training set.</td>
                  <td>Extremely flexible. Adapts to new tasks instantly via In-Context Learning.</td>
                </tr>
                <tr>
                  <td><strong>Compute Infrastructure</strong></td>
                  <td>Runs on lightweight CPU or small GPU instances ($0.01/hr).</td>
                  <td>Requires specialized high-VRAM GPUs (NVIDIA H100/H200) or commercial API billing.</td>
                </tr>
                <tr>
                  <td><strong>Accuracy & Explainability</strong></td>
                  <td>100% deterministic, zero hallucinations, high explainability (SHAP values).</td>
                  <td>Probabilistic token generation, risk of hallucinations and non-determinism.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="consultant-tip" style="margin-top: 1.5rem;">
            <strong>Consultant Rule of Thumb:</strong> Use <strong>Task-Based ML (XGBoost)</strong> for structured tabular SQL predictions (churn, credit scoring, fraud). Reserve <strong>Foundation Models (LLMs)</strong> for unstructured text, code translation, and document synthesis.
          </div>
        """,
        "keyQuestions": [
          "Why is XGBoost superior to LLMs for predicting customer churn from SQL databases?",
          "When does the zero-shot adaptability of Foundation Models outweigh their higher compute cost?"
        ]
      },
      {
        "id": "m1-t5",
        "title": "5. Fundamentals of Supervised, Unsupervised & RL Math",
        content: """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.5 Mathematical Foundations of Machine Learning</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the core mathematical equations governing Supervised, Unsupervised, and Reinforcement Learning algorithms.</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Supervised Learning Loss Formulations</h4>

          <h5 style="color: #fff; margin: 1rem 0 0.5rem;">A. Linear Regression (Continuous Target $y \in \mathbb{R}$)</h5>
          <p>Model equation: $\hat{y} = W^T x + b$. Minimizes Mean Squared Error (MSE) loss:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>\mathcal{L}_{MSE}(W, b) = \frac{1}{N} \sum_{i=1}^{N} (y_i - (W^T x_i + b))^2</code>
          </div>

          <h5 style="color: #fff; margin: 1.25rem 0 0.5rem;">B. Logistic Regression (Binary Classification $y \in \{0, 1\}$)</h5>
          <p>Passes linear logit through Sigmoid function $\sigma(z) = \frac{1}{1 + e^{-z}}$. Minimizes Binary Cross-Entropy (BCE) loss:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>\mathcal{L}_{BCE}(W, b) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]</code>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Unsupervised Learning Mathematics</h4>

          <h5 style="color: #fff; margin: 1rem 0 0.5rem;">A. K-Means Clustering Inertia</h5>
          <p>Partitions data into K clusters by minimizing intra-cluster squared distance (inertia $J$):</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>J = \sum_{j=1}^{K} \sum_{i \in S_j} \|x_i - \mu_j\|^2</code>
          </div>

          <h5 style="color: #fff; margin: 1.25rem 0 0.5rem;">B. Principal Component Analysis (PCA) Covariance Eigendecomposition</h5>
          <p>Finds orthogonal eigenvectors $v$ of empirical covariance matrix $\Sigma$ that maximize projected variance:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>\Sigma = \frac{1}{N} X^T X, \quad \Sigma v = \lambda v</code>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Reinforcement Learning Bellman Optimality Equation</h4>
          <p>Modeled as Markov Decision Process $(S, A, P, R, \gamma)$. Q-Learning Bellman update:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>Q(s, a) \leftarrow Q(s, a) + \alpha \left[ r + \gamma \max_{a'} Q(s', a') - Q(s, a) \right]</code>
          </div>
        """,
        "keyQuestions": [
          "How does Binary Cross-Entropy penalize confident incorrect predictions compared to Mean Squared Error?",
          "What is the mathematical role of the discount factor $\gamma$ in Q-Learning Bellman equations?"
        ]
      },
      {
        "id": "m1-t6",
        "title": "6. Neural Network Calculus & Backpropagation Derivation",
        content: """
          <div class="submodule-header" style="background: rgba(0, 210, 255, 0.05); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-cyan); margin-bottom: 1.5rem;">
            <h3 style="color: var(--accent-cyan); margin: 0 0 0.5rem 0;">1.6 Artificial Neural Network Linear Algebra & Backpropagation Calculus</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">Derive the partial derivative chain rule for backpropagation and compare gradient descent optimizers (SGD Momentum vs Adam).</p>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">1. Forward Pass Matrix Algebra</h4>
          <p>For any layer $l$, input activation $a^{[l-1]}$ is transformed via weight matrix $W^{[l]}$ and bias vector $b^{[l]}$:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}, \quad a^{[l]} = g^{[l]}(z^{[l]})</code>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">2. Backpropagation Partial Derivative Chain Rule</h4>
          <p>To compute the gradient of total loss $\mathcal{L}$ with respect to weight matrix $W^{[l]}$, apply the partial derivative chain rule backwards from the output layer:</p>
          <div class="formula-box" style="background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--accent-cyan);">
            <code>\frac{\partial \mathcal{L}}{\partial W^{[l]}} = \frac{\partial \mathcal{L}}{\partial a^{[l]}} \cdot \frac{\partial a^{[l]}}{\partial z^{[l]}} \cdot \frac{\partial z^{[l]}}{\partial W^{[l]}}</code><br/><br/>
            <code>\text{Weight Update Rule: } W^{[l]} \leftarrow W^{[l]} - \alpha \cdot \frac{\partial \mathcal{L}}{\partial W^{[l]}}</code>
          </div>

          <h4 style="color: var(--accent-cyan); margin: 1.5rem 0 0.75rem;">3. Gradient Descent Optimizers Comparison</h4>
          <ul class="curriculum-list">
            <li><strong>SGD with Momentum:</strong> Accumulates past gradients to maintain velocity: $v_t = \beta v_{t-1} + (1-\beta) \nabla W$.</li>
            <li><strong>Adam (Adaptive Moment Estimation):</strong> Maintains bias-corrected exponential moving averages of both first moments ($m_t$, mean) and second moments ($v_t$, uncentered variance) to dynamically adapt learning rates for every individual parameter.</li>
          </ul>
        """,
        "keyQuestions": [
          "How does the chain rule allow error gradients to flow backwards from the output layer to hidden weights?",
          "Why is the Adam optimizer superior to basic SGD when training deep Transformer architectures?"
        ]
      }
    ],
    "resources": [
      { "name": "Alan Turing (1950) Original Paper PDF: 'Computing Machinery and Intelligence'", "type": "Seminal Paper PDF", "url": "https://dialsnet.com/turing1950.pdf" },
      { "name": "The 1956 Dartmouth AI Conference Original Proposal PDF (McCarthy, Minsky, Shannon)", "type": "Historical Proposal PDF", "url": "https://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.pdf" },
      { "name": "AlexNet ImageNet Deep Learning Breakthrough Paper (Krizhevsky, Sutskever, Hinton 2012 PDF)", "type": "Research Paper PDF", "url": "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf" },
      { "name": "MIT Computer Science & Artificial Intelligence Lab (CSAIL) AI History Archive", "type": "Institutional Archive", "url": "https://www.csail.mit.edu/about/history" },
      { "name": "Deep Learning Book (Goodfellow, Bengio, Courville - MIT Press PDF)", "type": "Book PDF", "url": "https://www.deeplearningbook.org/" }
    ]
  }
]

print("Script base defined...")
