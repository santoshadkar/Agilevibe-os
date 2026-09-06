export const cybersecurityKnowledge = [
  {
    id: "cyber-001",
    title: "MITRE ATT&CK Framework: Initial Access & Persistence",
    category: "Cybersecurity Threat Intel",
    tags: ["MITRE", "Initial Access", "Persistence", "T1190", "T1078"],
    content: `The MITRE ATT&CK framework categorizes adversary tactics and techniques based on real-world observations. 
Initial Access (Tactics TA0001) consists of techniques that adversaries use to gain an initial foothold within a network. 
Key techniques include T1190 (Exploit Public-Facing Application), T1566 (Phishing via Spearphishing Link/Attachment), and T1078 (Valid Accounts). 
Once initial access is achieved, attackers establish Persistence (TA0003) via registry keys (T1547.001), scheduled tasks (T1053.005), and compromised Web Shells (T1505.003). 
Defenders leverage Sysmon logs, Windows Event ID 4624/4625, and SIEM correlation rules to detect unauthorized credential usage and unusual binary executions.`,
    score: 0.95
  },
  {
    id: "cyber-002",
    title: "OWASP Top 10 for Large Language Models (LLM01 - LLM10)",
    category: "AI Security & Compliance",
    tags: ["OWASP", "LLM Security", "Prompt Injection", "Data Leakage", "Vulnerabilities"],
    content: `OWASP LLM Top 10 outlines critical security risks in LLM applications:
1. LLM01: Prompt Injection - Adversaries manipulate LLM behavior using crafted prompts (Direct & Indirect).
2. LLM02: Sensitive Information Disclosure - LLMs inadvertently reveal confidential training data or system prompts.
3. LLM03: Supply Chain Vulnerabilities - Third-party datasets, compromised fine-tuned models, and malicious libraries.
4. LLM04: Data and Model Poisoning - Tampering with pre-training datasets or fine-tuning pipelines to embed backdoors.
5. LLM05: Improper Output Handling - Unvalidated LLM outputs sent directly to downstream shell commands or web components.
6. LLM06: Excessive Agency - Granting LLM agents autonomous access to administrative APIs without human-in-the-loop authorization.
7. LLM07: System Prompt Leakage - Extracting system instructions to map internal system guardrails.
8. LLM08: Vector and Embedding Weaknesses - Adversarial embedding manipulation leading to RAG retrieval poisoning.
9. LLM09: Misinformation - Unverified hallucinations propagated into enterprise decision-making workflows.
10. LLM10: Unbounded Consumption - Denial of Service (DoS) attacks exploiting token limits and infinite recursive tool calls.`,
    score: 0.98
  },
  {
    id: "cyber-003",
    title: "Zero Trust Architecture & NIST SP 800-207 Implementation",
    category: "Enterprise Security Architecture",
    tags: ["Zero Trust", "NIST 800-207", "IAM", "Microsegmentation", "PDP/PEP"],
    content: `NIST SP 800-207 defines Zero Trust Architecture (ZTA) as a cybersecurity strategy based on the principle of "Never Trust, Always Verify." 
Core architectural components include:
- Policy Decision Point (PDP): Composed of Policy Engine (PE) and Policy Administrator (PA) to make access authorization decisions.
- Policy Enforcement Point (PEP): Intercepts, inspects, and terminates network connections based on PDP commands.
- Continuous Authentication & Authorization: Evaluating device health, user context, behavioral biometrics, and threat intelligence dynamically.
- Microsegmentation: Restricting lateral movement by isolating network segments using software-defined perimeters (SDP) and next-gen firewalls (NGFW).`,
    score: 0.91
  },
  {
    id: "cyber-004",
    title: "CVE-2024 Vulnerability Intelligence & Exploit Analysis",
    category: "Vulnerability Management",
    tags: ["CVE", "Vulnerabilities", "Buffer Overflow", "RCE", "Exploits"],
    content: `Critical vulnerability highlights in enterprise software infrastructure:
- CVE-2024-30078: Windows MSMQ Remote Code Execution (RCE) vulnerability allowing unauthenticated remote attackers to execute arbitrary code via malicious packets (CVSS 9.8).
- CVE-2024-21626: runc Container Escape vulnerability enabling attackers to escape Docker/Kubernetes container isolation and access host filesystem binaries.
- CVE-2024-6387 (regreSSHion): OpenSSH server signal handler race condition in glibc-based Linux systems allowing unauthenticated remote root code execution.
Mitigation strategies require emergency kernel patching, disabling unneeded services, enforcing SELinux/AppArmor profiles, and strict egress filtering.`,
    score: 0.94
  },
  {
    id: "cyber-005",
    title: "Ransomware Incident Response Playbook & Threat Hunting",
    category: "Incident Response",
    tags: ["Ransomware", "DFIR", "Threat Hunting", "YARA", "Containment"],
    content: `When responding to active human-operated ransomware outbreaks (e.g., LockBit, BlackCat/ALPHV):
1. Containment: Instantly isolate infected subnets, terminate compromised VPN sessions, disable compromised Active Directory accounts, and revoke OAuth refresh tokens.
2. Forensics & Triage: Collect memory dumps (Volatility), analyze Master File Table (MFT) records, and inspect Event Logs for PowerShell execution (Event ID 4104).
3. Root Cause Analysis: Trace initial access vectors back to exposed RDP endpoints, unpatched Citrix/Fortinet VPN gateways, or phishing attachments.
4. Threat Hunting: Deploy custom YARA rules across host endpoints to scan for credential dumping tools (LSASS dump, Mimikatz, Cobalt Strike beacons).`,
    score: 0.93
  }
];
