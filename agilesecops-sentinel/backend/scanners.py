import re
from typing import List, Dict, Any
from .models import VulnerabilityFinding

RULES = [
    {
        "id": "VULN-SQLI-001",
        "title": "SQL Injection in Query Concatenation",
        "severity": "Critical",
        "cve_id": "CVE-2026-SQLI-01",
        "owasp_category": "A03:2021-Injection",
        "pattern": r"SELECT\s+.*\s+FROM\s+.*\s+WHERE\s+.*=.*(?:f['\"]|\.format\(|\%\s*\(|\+\s*\w+)",
        "description": "User input is directly formatted or concatenated into a raw SQL query string without parameterization, allowing arbitrary database query execution.",
        "cvss_score": 9.8
    },
    {
        "id": "VULN-SECRET-002",
        "title": "Hardcoded AWS Credentials & Secrets",
        "severity": "High",
        "cve_id": "CVE-2026-SECRET-02",
        "owasp_category": "A07:2021-Identification and Authentication Failures",
        "pattern": r"(?:AWS_SECRET_KEY|JWT_SECRET_KEY|VaultMasterToken|SECRET_KEY|API_KEY|AKIA[0-9A-Z]{16})\s*=\s*['\"][^'\"]+['\"]",
        "description": "Private security key or authentication secret is hardcoded in source code, exposing repository credentials to unauthorized actors.",
        "cvss_score": 8.2
    },
    {
        "id": "VULN-RCE-003",
        "title": "OS Command Injection",
        "severity": "Critical",
        "cve_id": "CVE-2026-RCE-03",
        "owasp_category": "A03:2021-Injection",
        "pattern": r"os\.system\(|subprocess\.call\(.*shell\s*=\s*True|exec\(|eval\(",
        "description": "Execution of raw system commands with untrusted user parameters, permitting Remote Code Execution (RCE).",
        "cvss_score": 9.8
    },
    {
        "id": "VULN-XSS-004",
        "title": "Reflected Cross-Site Scripting (XSS)",
        "severity": "High",
        "cve_id": "CVE-2026-XSS-04",
        "owasp_category": "A03:2021-Injection",
        "pattern": r"res\.send\(.*<.*>\s*\$\{|\.innerHTML\s*=",
        "description": "User input is rendered directly into HTML response output without sanitization, enabling malicious script execution in victim browser.",
        "cvss_score": 7.5
    },
    {
        "id": "VULN-TRAVERSAL-005",
        "title": "Arbitrary File Path Traversal",
        "severity": "High",
        "cve_id": "CVE-2026-PATH-05",
        "owasp_category": "A01:2021-Broken Access Control",
        "pattern": r"fs\.readFile\(.*['\"]/var/www/.*['\"]\s*\+\s*|open\(.*(?:\+|format).*\)",
        "description": "File system path is constructed using unsanitized user input without canonicalization or directory sandboxing.",
        "cvss_score": 7.5
    },
    {
        "id": "VULN-DESER-006",
        "title": "Insecure Object Deserialization",
        "severity": "Critical",
        "cve_id": "CVE-2026-DESER-06",
        "owasp_category": "A08:2021-Software and Data Integrity Failures",
        "pattern": r"pickle\.loads\(|yaml\.load\(.*Loader\s*=\s*Loader",
        "description": "Deserialization of untrusted bytecode or serialized objects leads to immediate command execution.",
        "cvss_score": 9.8
    },
    {
        "id": "VULN-LLM-007",
        "title": "OWASP LLM01: Prompt Injection & Unbounded Tool Call",
        "severity": "Critical",
        "cve_id": "CVE-2026-LLM-01",
        "owasp_category": "OWASP LLM Top 10 - LLM01 Prompt Injection",
        "pattern": r"system_instruction\s*\+\s*.*user_input_prompt|user_input_prompt\.split\(.*exec:",
        "description": "Unsanitized user prompt concatenated into LLM instruction context allows adversarial prompt injection and unauthorized shell command execution.",
        "cvss_score": 9.6
    },
    {
        "id": "VULN-CORS-008",
        "title": "Insecure CORS Wildcard Header Configuration",
        "severity": "Medium",
        "cve_id": "CVE-2026-CORS-08",
        "owasp_category": "A05:2021-Security Misconfiguration",
        "pattern": r"Access-Control-Allow-Origin.*\*|verify_signature\s*=\s*False",
        "description": "Wildcard CORS origin header permits unauthorized cross-origin requests and credential theft across domains.",
        "cvss_score": 6.5
    }
]

def scan_codebase(files: Dict[str, str]) -> List[VulnerabilityFinding]:
    findings = []
    finding_counter = 1

    for filename, code in files.items():
        lines = code.split('\n')
        for idx, line in enumerate(lines, 1):
            for rule in RULES:
                if re.search(rule["pattern"], line, re.IGNORECASE):
                    finding = VulnerabilityFinding(
                        id=f"FINDING-{finding_counter:03d}",
                        title=rule["title"],
                        severity=rule["severity"],
                        cve_id=rule["cve_id"],
                        owasp_category=rule["owasp_category"],
                        filename=filename,
                        line_number=idx,
                        vulnerable_code=line.strip(),
                        description=rule["description"],
                        cvss_score=rule["cvss_score"]
                    )
                    findings.append(finding)
                    finding_counter += 1
    return findings
