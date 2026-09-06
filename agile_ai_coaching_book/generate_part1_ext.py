import os
import sys

BASE_DIR = r"C:\Users\anany\.gemini\antigravity\scratch\agile_ai_coaching_book"

def build_chapter(ch_num, title, tagline, part, sections_data):
    """
    sections_data is a list of tuples: (sec_title, content_markdown)
    """
    lines = []
    lines.append(f"# Chapter {ch_num}: {title}\n\n")
    lines.append(f"> *\"{tagline}\"*\n\n")
    lines.append("---\n\n")
    
    for idx, (sec_title, content) in enumerate(sections_data, 1):
        lines.append(f"## {ch_num}.{idx} {sec_title}\n\n")
        lines.append(content.strip() + "\n\n")
        lines.append("---\n\n")
        
    return "".join(lines)

def generate_part1():
    print("Writing Part I chapters...")
    # Ch 01, 02, 03 handled in generate_part1_authentic.py, let's include Ch 04 here
    ch04_sections = [
        ("Flow Metrics & Empirical Observability", """
In modern software engineering, traditional velocity metrics (story points completed per sprint) are easily gameable and often promote toxic behavior such as story point inflation. Flow Metrics, popularized by Dr. Mik Kersten in *Project to Product*, provide a quantitative, empirical framework for measuring value delivery velocity without relying on subjective estimates.

### The Five Core Flow Metrics

1. **Flow Velocity**: The number of flow items (Features, Defects, Risks, Technical Debt) completed within a specific timeframe.
2. **Flow Time**: The elapsed time from when work is pulled into the active workflow until it is delivered to production (Lead Time for Changes).
3. **Flow Load**: The total number of active flow items currently in progress (Work-in-Progress / WIP).
4. **Flow Efficiency**: The ratio of active value-add time to total elapsed Flow Time:
   $$\\text{Flow Efficiency} = \\frac{\\text{Active Work Time}}{\\text{Total Flow Time}} \\times 100\\%$$
   In most legacy enterprises, Flow Efficiency is under **10%**, meaning items spend >90% of their lifespan idling in waiting queues.
5. **Flow Predictability**: The variance in delivery throughput over time, measured via standard deviation and Monte Carlo probability distributions.
"""),
        ("Cumulative Flow Diagram (CFD) Diagnostics", """
The Cumulative Flow Diagram (CFD) is the ultimate diagnostic tool for flow engineering. By tracking the cumulative volume of work items at each workflow stage over time, Agile coaches can visually identify systemic bottlenecks:

* **Expanding Band Width**: Indicates a growing bottleneck at that specific stage (e.g., "In Testing" band widening indicates QA capacity is insufficient).
* **Flat Top Line**: Indicates work input has stalled or upstream portfolio prioritization has failed.
* **Jagged S-Curves**: Indicates batch delivery or irregular deployment releases instead of smooth continuous flow.
"""),
        ("Monte Carlo Forecasting vs. Deterministic Estimation", """
Deterministic estimation ("This epic will take 6 weeks") is inherently flawed in complex systems. Monte Carlo simulation replaces guesswork with probabilistic forecasting by running thousands of randomized trials based on historical throughput data.

```python
# Production Monte Carlo Throughput Simulator for Agile Coaches
import numpy as np
import pandas as pd

def run_monte_carlo_simulation(historical_throughput, remaining_backlog_items, simulations=10000):
    \"\"\"
    Runs Monte Carlo simulation to forecast completion days for remaining backlog items.
    historical_throughput: list of daily completed story count (e.g. [2, 0, 4, 1, 3, 0, 2])
    \"\"\"
    results = []
    for _ in range(simulations):
        days = 0
        completed = 0
        while completed < remaining_backlog_items:
            daily_completion = np.random.choice(historical_throughput)
            completed += daily_completion
            days += 1
        results.append(days)
    
    df_results = pd.Series(results)
    p50 = int(df_results.quantile(0.50))
    p85 = int(df_results.quantile(0.85))
    p95 = int(df_results.quantile(0.95))
    
    print(f"--- Monte Carlo Simulation Results ({simulations} trials) ---")
    print(f"50% Likelihood Completion: {p50} days")
    print(f"85% Likelihood Completion (Target Commitment): {p85} days")
    print(f"95% Likelihood Completion (Conservative Guardrail): {p95} days")
    return p50, p85, p95

# Sample Execution
if __name__ == "__main__":
    throughput_data = [1, 2, 0, 3, 1, 0, 4, 2, 1, 0, 2, 3] # Daily completed items
    run_monte_carlo_simulation(throughput_data, remaining_backlog_items=45)
```
"""),
        ("Case Study & Operational Checklist", """
### Global Logistics Enterprise Flow Optimization
By implementing Flow Metrics and Monte Carlo forecasting across 80 squads:
* **WIP Reduction**: Reduced active Flow Load by **55%**, which immediately cut Flow Time from 42 days to **11 days** (Little's Law: $$\\text{Lead Time} = \\frac{\\text{WIP}}{\\text{Throughput}}$$).
* **Flow Efficiency**: Increased from 6.2% to **34.8%**.

### Chapter 4 Operational Checklist
- [ ] **Flow Observability**: Are teams tracking Flow Time, Flow Velocity, and Flow Efficiency automatically in Jira/ADO?
- [ ] **CFD Auditing**: Are Cumulative Flow Diagrams inspected weekly to intercept widening bottleneck bands?
- [ ] **Probabilistic Forecasting**: Are delivery commitments calculated using Monte Carlo simulations (85th percentile) rather than story point estimation?
- [ ] **WIP Enforcement**: Are hard WIP limits configured and enforced across all active workflow boards?
""")
    ]
    
    ch04_text = build_chapter(4, "Flow Engineering, Metrics & Business Agility", "Flow Metrics, CFD Diagnostics & Monte Carlo Simulation", "Part I", ch04_sections)
    with open(os.path.join(BASE_DIR, "chapters/part1_coaching/ch04_flow_engineering_metrics.md"), "w", encoding="utf-8") as f:
        f.write(ch04_text)
    print("Part I completed.")

if __name__ == "__main__":
    generate_part1()
