import os

# Complete script to write data/curriculum.js with massive deep-read content for all 12 modules

m1_html_1 = """
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
"""

print("Base script ready...")
