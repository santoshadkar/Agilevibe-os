import urllib.request
import json

def run_case_study_test():
    print("================================================================================")
    print("  LIVE CASE STUDY DEMONSTRATION: FINTECH PAYMENT API (PYTHON / DEVSECOPS)")
    print("================================================================ handler\n")

    # Step 1: Fetch repo source code
    print("[1/6] Fetching Vulnerable Source Code...")
    res = urllib.request.urlopen('http://127.0.0.1:8000/api/repos')
    repos = json.loads(res.read().decode())['data']
    repo_name = 'FinTech Payment API (Python)'
    
    for filename, code in repos[repo_name].items():
        print(f"\n--- File: {filename} ---")
        print(code.strip())

    # Step 2: Trigger LangGraph security scan
    print("\n[2/6] Triggering LangGraph Multi-Agent Security Scan...")
    req = urllib.request.Request(
        'http://127.0.0.1:8000/api/scan',
        data=json.dumps({'repo_name': repo_name}).encode(),
        headers={'Content-Type': 'application/json'}
    )
    res = urllib.request.urlopen(req)
    scan_data = json.loads(res.read().decode())
    scan_id = scan_data['scan_id']
    state = scan_data['state']

    print(f"-> Scan Session ID: {scan_id}")
    print(f"-> LangGraph State Status: {state['status']} (Paused at Human-in-the-Loop Gate)")

    # Step 3: SAST Audit Results
    print("\n[3/6] SAST Scanner Agent Findings (IngestScanNode):")
    for v in state['vulnerabilities']:
        print(f"  * [{v['severity'].upper()}] {v['id']}: {v['title']} ({v['cve_id']})")
        print(f"    Location: {v['filename']}:{v['line_number']} | OWASP: {v['owasp_category']} | CVSS: {v['cvss_score']}")
        print(f"    Vulnerable Code: '{v['vulnerable_code']}'")

    # Step 4: Agile User Stories Groomed
    print("\n[4/6] Agile Scrum Master Agent Stories (AgileBacklogNode):")
    for s in state['agile_stories']:
        print(f"  * Story {s['story_id']} [{s['priority']} | {s['story_points']} Story Points]: {s['title']}")
        print(f"    Acceptance Criteria: {s['acceptance_criteria'][0]}")

    # Step 5: AI Secure Code Refactor & Guardrails
    print("\n[5/6] DevSecOps AI Patch Generator (PatchGeneratorNode):")
    for p in state['patch_proposals']:
        print(f"\n--- Unified Diff for {p['filename']} ---")
        print(p['diff'])
        print(f"Explanation: {p['explanation']}")
        print("Guardrails Evaluation:")
        for g in p['guardrail_checks']:
            status_symbol = "PASS" if g['passed'] else "FAIL"
            print(f"  [{status_symbol}] - {g['check']}: {g['details']}")

    # Step 6: Human-in-the-Loop Approval & Resuming Graph
    print("\n[6/6] Submitting Human-in-the-Loop Approval Decision...")
    approval_payload = {
        'scan_id': scan_id,
        'action': 'approve',
        'feedback': 'Security Lead verified OWASP parameterized queries & credential vault loading.'
    }
    req2 = urllib.request.Request(
        'http://127.0.0.1:8000/api/approval',
        data=json.dumps(approval_payload).encode(),
        headers={'Content-Type': 'application/json'}
    )
    res2 = urllib.request.urlopen(req2)
    final_state = json.loads(res2.read().decode())['state']

    print(f"\n-> Final LangGraph Execution Status: {final_state['status']}")
    print(f"-> Git Pull Request Created: {final_state['git_pr']['pr_title']}")
    print(f"-> Pull Request URL: {final_state['git_pr']['pr_url']}")
    print(f"-> Agile Sprint Card Statuses: {[s['status'] for s in final_state['agile_stories']]}")
    print("\n================================================================================")
    print("  LIVE CASE STUDY VERIFICATION COMPLETED SUCCESSFULLY!")
    print("================================================================================")

if __name__ == '__main__':
    run_case_study_test()
