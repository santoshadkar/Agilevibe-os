import { Framework, Question } from '../lib/types';
import { normalizeQuestions } from '../lib/normalize';

export const cyberFramework: Framework = {
  id: 'cybersecurity',
  name: 'Cybersecurity Architecture',
  shortName: 'Cyber Arch',
  description: 'SABSA, Zero Trust, NIST CSF 2.0, cloud security, and identity architecture',
  icon: '🛡️',
  color: '#ef4444',
  gradientFrom: '#991b1b',
  gradientTo: '#ef4444',
  domains: [
    { id: 'sabsa', name: 'SABSA Framework', description: 'Sherwood Applied Business Security Architecture', weight: 20 },
    { id: 'zero-trust', name: 'Zero Trust Architecture', description: 'NIST SP 800-207 Zero Trust principles and design', weight: 25 },
    { id: 'nist-csf', name: 'NIST CSF 2.0', description: 'Cybersecurity Framework 2.0 functions and tiers', weight: 20 },
    { id: 'cloud-security', name: 'Cloud Security Architecture', description: 'CSA CCM, cloud-native security patterns', weight: 20 },
    { id: 'identity-arch', name: 'Identity Architecture', description: 'IAM, PAM, federation, CIAM patterns', weight: 15 },
  ],
  totalQuestions: 150,
  estimatedMinutes: 60,
  certifications: ['SABSA Chartered Architect (SCF-F)', 'CISSP', 'CCSP']
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawCyberQuestions: any[] = [
  // 25 MCQs
  { id: 'c1', domainId: 'sabsa', type: 'mcq', text: 'Which SABSA layer corresponds to the Business View?', options: ['Contextual', 'Conceptual', 'Logical', 'Physical'], answer: 'Contextual', explanation: 'The Contextual layer represents the business view.' },
  { id: 'c2', domainId: 'sabsa', type: 'mcq', text: 'Which SABSA layer corresponds to the Architect View?', options: ['Contextual', 'Conceptual', 'Logical', 'Physical'], answer: 'Conceptual', explanation: 'The Conceptual layer represents the architect view.' },
  { id: 'c3', domainId: 'sabsa', type: 'mcq', text: 'What is the primary driver of SABSA?', options: ['Technology', 'Business Requirements', 'Threats', 'Compliance'], answer: 'Business Requirements', explanation: 'SABSA is a business-driven security architecture.' },
  { id: 'c4', domainId: 'sabsa', type: 'mcq', text: 'Which SABSA layer deals with specific products and technologies?', options: ['Logical', 'Physical', 'Component', 'Operational'], answer: 'Component', explanation: 'The Component layer maps to the builder view and specific tools.' },
  { id: 'c5', domainId: 'zero-trust', type: 'mcq', text: 'According to NIST SP 800-207, what is a core tenet of Zero Trust?', options: ['Assume breach', 'Trust but verify', 'Perimeter defense', 'Static credentials'], answer: 'Assume breach', explanation: 'Zero trust assumes the network is always hostile.' },
  { id: 'c6', domainId: 'zero-trust', type: 'mcq', text: 'In Zero Trust, what component evaluates access requests?', options: ['Policy Enforcement Point', 'Policy Engine', 'Policy Administrator', 'Gateway'], answer: 'Policy Engine', explanation: 'The Policy Engine determines if access is granted based on policy.' },
  { id: 'c7', domainId: 'zero-trust', type: 'mcq', text: 'What does PEP stand for in ZTA?', options: ['Policy Evaluation Point', 'Policy Enforcement Point', 'Private Endpoint Protocol', 'Public Encryption Protocol'], answer: 'Policy Enforcement Point', explanation: 'PEP intercepts and enforces access requests.' },
  { id: 'c8', domainId: 'nist-csf', type: 'mcq', text: 'Which is a new function added in NIST CSF 2.0?', options: ['Protect', 'Respond', 'Govern', 'Recover'], answer: 'Govern', explanation: 'Govern was added as the sixth core function in 2.0.' },
  { id: 'c9', domainId: 'nist-csf', type: 'mcq', text: 'How many tiers are in the NIST CSF?', options: ['3', '4', '5', '6'], answer: '4', explanation: 'Tiers range from 1 (Partial) to 4 (Adaptive).' },
  { id: 'c10', domainId: 'nist-csf', type: 'mcq', text: 'Which NIST CSF function focuses on timely discovery of events?', options: ['Identify', 'Protect', 'Detect', 'Respond'], answer: 'Detect', explanation: 'Detect is about discovering anomalies and events.' },
  { id: 'c11', domainId: 'cloud-security', type: 'mcq', text: 'In IaaS, who secures the guest OS?', options: ['Cloud Provider', 'Customer', 'Shared', 'No one'], answer: 'Customer', explanation: 'Under the shared responsibility model, IaaS OS is customer managed.' },
  { id: 'c12', domainId: 'cloud-security', type: 'mcq', text: 'What does CSPM stand for?', options: ['Cloud Security Posture Management', 'Cloud Service Provider Management', 'Cyber Security Protection Module', 'Cloud Systems Policy Manager'], answer: 'Cloud Security Posture Management', explanation: 'CSPM tools monitor for misconfigurations in the cloud.' },
  { id: 'c13', domainId: 'cloud-security', type: 'mcq', text: 'What is CNAPP?', options: ['Cloud-Native Application Protection Platform', 'Cloud Network Access Protocol Platform', 'Cyber Network Application Provider', 'Cloud Node Access Protection'], answer: 'Cloud-Native Application Protection Platform', explanation: 'CNAPP combines CSPM, CWPP, and CIEM.' },
  { id: 'c14', domainId: 'cloud-security', type: 'mcq', text: 'Which organization publishes the Cloud Controls Matrix (CCM)?', options: ['NIST', 'CSA', 'ISO', 'ISACA'], answer: 'CSA', explanation: 'Cloud Security Alliance (CSA) created the CCM.' },
  { id: 'c15', domainId: 'identity-arch', type: 'mcq', text: 'OAuth 2.0 is primarily designed for?', options: ['Authentication', 'Authorization', 'Accounting', 'Auditing'], answer: 'Authorization', explanation: 'OAuth 2.0 is an authorization framework.' },
  { id: 'c16', domainId: 'identity-arch', type: 'mcq', text: 'OIDC sits on top of which protocol?', options: ['SAML', 'OAuth 2.0', 'LDAP', 'Radius'], answer: 'OAuth 2.0', explanation: 'OpenID Connect adds an identity layer to OAuth 2.0.' },
  { id: 'c17', domainId: 'identity-arch', type: 'mcq', text: 'What does CIAM stand for?', options: ['Corporate Identity and Access Management', 'Customer Identity and Access Management', 'Cloud Identity and Access Management', 'Central Identity and Access Management'], answer: 'Customer Identity and Access Management', explanation: 'CIAM manages external consumer identities.' },
  { id: 'c18', domainId: 'identity-arch', type: 'mcq', text: 'Which threat modeling framework focuses on software threats?', options: ['PASTA', 'LINDDUN', 'STRIDE', 'OCTAVE'], answer: 'STRIDE', explanation: 'STRIDE (Spoofing, Tampering, etc.) is highly used for software.' },
  { id: 'c19', domainId: 'identity-arch', type: 'mcq', text: 'What is JIT access?', options: ['Just In Time', 'Joint Integration Testing', 'Justified Internal Tracking', 'Joined Identity Tenant'], answer: 'Just In Time', explanation: 'JIT grants privileges only when needed and for a limited duration.' },
  { id: 'c20', domainId: 'sabsa', type: 'mcq', text: 'What does the Physical layer of SABSA map to?', options: ['Business', 'System Architect', 'Designer', 'Facilities'], answer: 'Designer', explanation: 'The Physical layer represents the designer view.' },
  { id: 'c21', domainId: 'zero-trust', type: 'mcq', text: 'How does ZTA view internal vs external networks?', options: ['Internal is trusted', 'External is trusted', 'Neither is implicitly trusted', 'Both are trusted'], answer: 'Neither is implicitly trusted', explanation: 'ZTA removes implicit trust regardless of network location.' },
  { id: 'c22', domainId: 'nist-csf', type: 'mcq', text: 'Which function restores capabilities impaired by an incident?', options: ['Respond', 'Recover', 'Protect', 'Identify'], answer: 'Recover', explanation: 'Recover focuses on restoration of services.' },
  { id: 'c23', domainId: 'cloud-security', type: 'mcq', text: 'What focuses on securing cloud workloads like VMs and containers?', options: ['CSPM', 'CWPP', 'CASB', 'SASE'], answer: 'CWPP', explanation: 'Cloud Workload Protection Platforms secure the workloads.' },
  { id: 'c24', domainId: 'identity-arch', type: 'mcq', text: 'Which framework is privacy-focused?', options: ['STRIDE', 'PASTA', 'LINDDUN', 'DREAD'], answer: 'LINDDUN', explanation: 'LINDDUN is a privacy threat modeling framework.' },
  { id: 'c25', domainId: 'zero-trust', type: 'mcq', text: 'What enforces micro-segmentation in a container environment?', options: ['Hardware firewall', 'CNI network policies', 'VPN', 'WAF'], answer: 'CNI network policies', explanation: 'Container Network Interface policies enforce segment rules.' },
  // 10 Scenarios
  { id: 'c26', domainId: 'sabsa', type: 'scenario', text: 'A CISO wants to map business goals to technical controls. Which framework fits best?', options: ['MITRE', 'SABSA', 'ISO 27001', 'STRIDE'], answer: 'SABSA', explanation: 'SABSA is designed for top-down business alignment.' },
  { id: 'c27', domainId: 'zero-trust', type: 'scenario', text: 'Users access an internal app from coffee shops. Under ZTA, how is this handled?', options: ['VPN required', 'Trust based on IP', 'Dynamic risk-based authentication', 'Block access'], answer: 'Dynamic risk-based authentication', explanation: 'ZTA uses context (device, location, identity) to verify access continuously.' },
  { id: 'c28', domainId: 'identity-arch', type: 'scenario', text: 'You need an SSO protocol for a web app communicating with an API. Best choice?', options: ['SAML', 'Kerberos', 'OIDC', 'RADIUS'], answer: 'OIDC', explanation: 'OIDC/OAuth2 is best for modern web/API access.' },
  { id: 'c29', domainId: 'cloud-security', type: 'scenario', text: 'An AWS S3 bucket was left public. Which tool would have detected this?', options: ['CWPP', 'CSPM', 'CASB', 'EDR'], answer: 'CSPM', explanation: 'CSPM detects cloud infrastructure misconfigurations.' },
  { id: 'c30', domainId: 'nist-csf', type: 'scenario', text: 'Ransomware hits the company. Activating the IR plan falls under which function?', options: ['Protect', 'Detect', 'Respond', 'Recover'], answer: 'Respond', explanation: 'Taking action on a detected incident is the Respond function.' },
  { id: 'c31', domainId: 'identity-arch', type: 'scenario', text: 'Admin needs database access. Instead of permanent credentials, you use a vault to create temporary 1-hour credentials. This is?', options: ['MFA', 'SSO', 'JIT', 'RBAC'], answer: 'JIT', explanation: 'Just-in-Time access provides temporary, scoped credentials.' },
  { id: 'c32', domainId: 'zero-trust', type: 'scenario', text: 'A legacy app cannot integrate with SSO. How do you implement Zero Trust access to it?', options: ['Identity Aware Proxy', 'Put it on public internet', 'Disable it', 'Use a shared password'], answer: 'Identity Aware Proxy', explanation: 'IAP can wrap legacy apps to enforce modern authentication.' },
  { id: 'c33', domainId: 'cloud-security', type: 'scenario', text: 'You are moving to PaaS. Who is responsible for patching the underlying OS?', options: ['You', 'Cloud Provider', 'Shared', 'Third-party'], answer: 'Cloud Provider', explanation: 'In PaaS, the provider manages the OS and runtime.' },
  { id: 'c34', domainId: 'sabsa', type: 'scenario', text: 'You are deciding on firewall rules (port 443). Which SABSA layer is this?', options: ['Contextual', 'Conceptual', 'Component', 'Operational'], answer: 'Component', explanation: 'Specific rules and configurations live in the Component layer.' },
  { id: 'c35', domainId: 'nist-csf', type: 'scenario', text: 'Establishing a risk management strategy and board oversight belongs to which CSF 2.0 function?', options: ['Govern', 'Identify', 'Protect', 'Respond'], answer: 'Govern', explanation: 'Governance, risk strategy, and oversight are part of the Govern function.' },
  // 5 Drag-Drop
  { id: 'c36', domainId: 'sabsa', type: 'drag-drop', text: 'Match the SABSA layers to their views.', dragItems: ['Contextual', 'Conceptual', 'Logical', 'Physical'], dropZones: ['Business', 'Architect', 'Designer', 'Builder'], answer: ['Contextual->Business', 'Conceptual->Architect', 'Logical->Designer', 'Physical->Builder'], explanation: 'Standard SABSA matrix mapping.' },
  { id: 'c37', domainId: 'nist-csf', type: 'drag-drop', text: 'Match the NIST CSF 2.0 function to the activity.', dragItems: ['Govern', 'Protect', 'Detect', 'Recover'], dropZones: ['Oversight', 'Access Control', 'Log Monitoring', 'Restoration'], answer: ['Govern->Oversight', 'Protect->Access Control', 'Detect->Log Monitoring', 'Recover->Restoration'], explanation: 'Core function mapping.' },
  { id: 'c38', domainId: 'cloud-security', type: 'drag-drop', text: 'Match the Cloud Tool to its purpose.', dragItems: ['CSPM', 'CWPP', 'CASB', 'CIEM'], dropZones: ['Misconfigs', 'Workload Security', 'SaaS Security', 'Identity Entitlements'], answer: ['CSPM->Misconfigs', 'CWPP->Workload Security', 'CASB->SaaS Security', 'CIEM->Identity Entitlements'], explanation: 'Cloud security acronyms mapped to functions.' },
  { id: 'c39', domainId: 'identity-arch', type: 'drag-drop', text: 'Match the protocol to its main use case.', dragItems: ['OAuth 2.0', 'OIDC', 'SAML', 'SCIM'], dropZones: ['API Authorization', 'Modern Authentication', 'Legacy Enterprise SSO', 'Identity Provisioning'], answer: ['OAuth 2.0->API Authorization', 'OIDC->Modern Authentication', 'SAML->Legacy Enterprise SSO', 'SCIM->Identity Provisioning'], explanation: 'Identity standards mapping.' },
  { id: 'c40', domainId: 'zero-trust', type: 'drag-drop', text: 'Match the Zero Trust logical component to its role.', dragItems: ['Policy Engine', 'Policy Administrator', 'Policy Enforcement Point', 'CDP'], dropZones: ['Decision Maker', 'Control Plane Executor', 'Data Plane Interceptor', 'Diagnostics Context'], answer: ['Policy Engine->Decision Maker', 'Policy Administrator->Control Plane Executor', 'Policy Enforcement Point->Data Plane Interceptor', 'CDP->Diagnostics Context'], explanation: 'NIST 800-207 architecture components.' },
,
{
  "id": "cyber-041",
  "type": "mcq",
  "domain": "zero-trust",
  "difficulty": "expert",
  "points": 1,
  "question": "According to NIST SP 800-207, what is the role of the Policy Engine (PE)?",
  "options": [
    {
      "id": "a",
      "text": "Making the ultimate decision to grant, deny, or revoke access to a resource based on trust score and access policy.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Forwarding network packets across routers.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Managing disk backup tapes.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Compiling application source code.",
      "isCorrect": false
    }
  ],
  "explanation": "The Policy Engine evaluates context and policies to issue access decisions in Zero Trust Architecture.",
  "reference": "NIST SP 800-207"
},
{
  "id": "cyber-042",
  "type": "scenario",
  "domain": "zero-trust",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise cloud workload in AWS VPC needs to communicate securely with an Azure SQL database without traversing the public internet.",
  "question": "Which cloud security architecture pattern fulfills Zero Trust network isolation?",
  "options": [
    {
      "id": "a",
      "text": "Establish private connection via AWS Direct Connect / Azure ExpressRoute with Private Endpoints and mutual TLS authentication.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Expose Azure SQL to 0.0.0.0/0 on public port 1433.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Disable SSL encryption to increase network throughput.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Use unauthenticated HTTP webhooks over open internet.",
      "isCorrect": false
    }
  ],
  "explanation": "Private endpoints combined with mTLS ensure encrypted, private inter-cloud transport without internet exposure.",
  "reference": "Cloud Zero Trust Networking"
},
{
  "id": "cyber-043",
  "type": "mcq",
  "domain": "nist-csf",
  "difficulty": "practitioner",
  "points": 1,
  "question": "Which function was newly added in NIST Cybersecurity Framework (CSF) 2.0?",
  "options": [
    {
      "id": "a",
      "text": "GOVERN (GV)",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "PROTECT (PR)",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "DETECT (DE)",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "RESPOND (RS)",
      "isCorrect": false
    }
  ],
  "explanation": "NIST CSF 2.0 introduced the GOVERN function to emphasize organizational governance, risk strategy, and supply chain oversight.",
  "reference": "NIST CSF 2.0"
},
{
  "id": "cyber-044",
  "type": "mcq",
  "domain": "identity-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is PKCE (Proof Key for Code Exchange) in OAuth 2.0 security architecture?",
  "options": [
    {
      "id": "a",
      "text": "An extension preventing authorization code injection attacks on public clients (mobile/SPA apps).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A database encryption key rotation tool.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A physical hardware smart card.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A DNS routing protocol.",
      "isCorrect": false
    }
  ],
  "explanation": "PKCE mitigates authorization code interception attacks by binding dynamic secret verifiers to authorization requests.",
  "reference": "OAuth 2.0 Security Best Practices"
},
{
  "id": "cyber-045",
  "type": "scenario",
  "domain": "cloud-security",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A DevOps team deploys containerized applications into Kubernetes. A vulnerability scanner detects hardcoded database passwords inside container images.",
  "question": "How should secrets management be re-architected into the DevSecOps pipeline?",
  "options": [
    {
      "id": "a",
      "text": "Use HashiCorp Vault or AWS Secrets Manager with external secrets operator to inject secrets dynamically at runtime.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Commit passwords into public GitHub repository.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Base64 encode passwords inside Kubernetes ConfigMaps.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Disable security scanning on container registries.",
      "isCorrect": false
    }
  ],
  "explanation": "Secrets should never be baked into container images; dynamic injection via Vault/Secrets Manager enforces security.",
  "reference": "DevSecOps Secrets Architecture"
},
{
  "id": "cyber-046",
  "type": "mcq",
  "domain": "sabsa",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In SABSA, which layer represents the Designer's View?",
  "options": [
    {
      "id": "a",
      "text": "Logical Security Architecture",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Contextual Architecture",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Physical Security Architecture",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Operational Security Architecture",
      "isCorrect": false
    }
  ],
  "explanation": "The Logical layer in SABSA represents the Designer's View of policies, services, and trust domains.",
  "reference": "SABSA Framework Matrix"
},
{
  "id": "cyber-047",
  "type": "mcq",
  "domain": "cloud-security",
  "difficulty": "expert",
  "points": 1,
  "question": "What is CNAPP (Cloud-Native Application Protection Platform)?",
  "options": [
    {
      "id": "a",
      "text": "An integrated security platform combining CSPM, CWPP, CIEM, and container security across build and runtime.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A cloud load balancer.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A DNS firewall.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile antivirus app.",
      "isCorrect": false
    }
  ],
  "explanation": "CNAPP unifies cloud posture management (CSPM), workload protection (CWPP), and entitlement management (CIEM).",
  "reference": "Gartner CNAPP Framework"
},
{
  "id": "cyber-048",
  "type": "scenario",
  "domain": "identity-arch",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise experiences a credential stuffing attack against its customer portal, compromising 2,000 accounts.",
  "question": "What identity architecture controls should be immediately deployed?",
  "options": [
    {
      "id": "a",
      "text": "Enforce Risk-Based Adaptive MFA, FIDO2/WebAuthn passwordless authentication, and rate limiting via Web Application Firewall (WAF).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Increase password length requirement to 50 characters without MFA.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Disable user login functionality permanently.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Store passwords in cleartext.",
      "isCorrect": false
    }
  ],
  "explanation": "Adaptive MFA and FIDO2 passwordless auth combined with bot protection block automated credential stuffing.",
  "reference": "CIEM & WAF Defense"
},
{
  "id": "cyber-049",
  "type": "mcq",
  "domain": "nist-csf",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the purpose of MITRE ATT&CK framework integration in security operations architecture?",
  "options": [
    {
      "id": "a",
      "text": "Mapping adversary tactics, techniques, and procedures (TTPs) to security controls for threat detection coverage analysis.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Calculating monthly AWS cloud bills.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Designing relational database schemas.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Configuring network switch ports.",
      "isCorrect": false
    }
  ],
  "explanation": "MITRE ATT&CK maps real-world attacker techniques to SIEM/EDR detection rules and security posture gaps.",
  "reference": "MITRE ATT&CK Integration"
},
{
  "id": "cyber-050",
  "type": "mcq",
  "domain": "zero-trust",
  "difficulty": "expert",
  "points": 1,
  "question": "In Zero Trust Network Access (ZTNA) 2.0, what distinguishes it from traditional VPNs?",
  "options": [
    {
      "id": "a",
      "text": "ZTNA grants least-privilege per-application access after continuous identity & posture check, whereas VPN grants full network access upon login.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "ZTNA uses unencrypted traffic.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "VPN provides better zero trust isolation than ZTNA.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "ZTNA requires physical cables.",
      "isCorrect": false
    }
  ],
  "explanation": "ZTNA enforces granular, application-level access with continuous verification, avoiding broad VPN network access.",
  "reference": "ZTNA vs VPN Architecture"
}
];

export const cyberQuestions = normalizeQuestions(rawCyberQuestions);
