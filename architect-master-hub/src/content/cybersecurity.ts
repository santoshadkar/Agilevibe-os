import { TopicContent } from '../lib/content-types';

export const cyberTopics: TopicContent[] = [
  {
    "id": "cyber-sabsa-framework",
    "frameworkId": "cybersecurity",
    "title": "SABSA Framework",
    "subtitle": "Enterprise Security Architecture methodology.",
    "estimatedMinutes": 60,
    "difficulty": "expert",
    "domain": "Cybersecurity Architecture",
    "overview": "SABSA (Sherwood Applied Business Security Architecture) is a proven framework and methodology for enterprise security architecture and service managem...",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is SABSA?",
        "blocks": [
          {
            "type": "paragraph",
            "content": "SABSA (Sherwood Applied Business Security Architecture) is a proven framework and methodology for enterprise security architecture and service management. It ensures that security services are driven by and fully aligned with business requirements."
          },
          {
            "type": "paragraph",
            "content": "SABSA is highly scalable, adapting to organizations of all sizes, and is often mapped alongside enterprise architectures like TOGAF."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "The SABSA Matrix",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The core of SABSA is its 6x6 matrix, answering six questions (What, Why, How, Who, Where, When) across six layers of abstraction:\n1. **Contextual (Business View)**: Business risk and goals.\n2. **Conceptual (Architect's View)**: Security strategies and concepts.\n3. **Logical (Designer's View)**: Security policies and logical services.\n4. **Physical (Builder's View)**: Security mechanisms and physical systems.\n5. **Component (Tradesman's View)**: Specific tools, standards, and configurations.\n6. **Operational (Facilities Manager's View)**: Operational security and service delivery."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Enterprise Security Architecture",
        "type": "book",
        "url": "https://www.crcpress.com/Enterprise-Security-Architecture-A-Business-Driven-Approach/Sherwood-Clark-Lynas/p/book/9781578203185",
        "description": "The definitive book on the SABSA framework and enterprise security architecture.",
        "isFree": false,
        "publisher": "SABSA",
        "duration": "By Sherwood, Clark, & Lynas"
      },
      {
        "title": "SABSA Institute Executive Security Architecture Briefing",
        "type": "video",
        "url": "https://sabsa.org/",
        "description": "Official resources and executive briefings from the SABSA Institute.",
        "isFree": true,
        "publisher": "SABSA Institute",
        "duration": ""
      },
      {
        "title": "SABSA Whitepaper",
        "type": "article",
        "url": "https://sabsa.org/sabsa-white-paper/",
        "description": "Detailed overview of the SABSA framework and methodology.",
        "isFree": true,
        "publisher": "SABSA Institute",
        "duration": ""
      },
      {
        "title": "Integrating Risk and Security within a TOGAF Enterprise Architecture",
        "type": "official-doc",
        "url": "https://publications.opengroup.org/g152",
        "description": "Guide on integrating SABSA with TOGAF.",
        "isFree": true,
        "publisher": "The Open Group",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-zero-trust-architecture",
    "frameworkId": "cybersecurity",
    "title": "Zero Trust Architecture",
    "subtitle": "Never trust, always verify: modern network security.",
    "estimatedMinutes": 50,
    "difficulty": "practitioner",
    "domain": "Cybersecurity Architecture",
    "overview": "Zero Trust Architecture (ZTA) abandons the traditional \"castle-and-moat\" security model. It assumes that threats exist both inside and outside the net...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Core Principles of Zero Trust",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Zero Trust Architecture (ZTA) abandons the traditional \"castle-and-moat\" security model. It assumes that threats exist both inside and outside the network, and therefore, no entity should be implicitly trusted based on its network location."
          },
          {
            "type": "paragraph",
            "content": "Core Tenets:\n- **Assume Breach**: Operate under the assumption that the network is already compromised.\n- **Verify Explicitly**: Authenticate and authorize based on all available data points (identity, location, device health, service, and data classification).\n- **Least Privilege Access**: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Implementing Zero Trust",
        "blocks": [
          {
            "type": "paragraph",
            "content": "A successful ZTA implementation requires integrating several technologies:\n- **Identity Provider (IdP)**: The core engine for authentication (e.g., Okta, Entra ID).\n- **Device Management (MDM)**: Assessing device posture before granting access.\n- **Micro-segmentation**: Dividing the network into small zones to limit lateral movement.\n- **Policy Decision Point (PDP) & Policy Enforcement Point (PEP)**: The engine evaluating access requests and the gateway enforcing the decision."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Zero Trust Networks",
        "type": "book",
        "url": "https://www.oreilly.com/library/view/zero-trust-networks/9781491962183/",
        "description": "Building secure systems in untrusted networks.",
        "isFree": false,
        "publisher": "O'Reilly",
        "duration": "By Evan Gilman & Doug Barth"
      },
      {
        "title": "NIST SP 800-207 Zero Trust Architecture",
        "type": "official-doc",
        "url": "https://csrc.nist.gov/publications/detail/sp/800-207/final",
        "description": "The foundational standard defining Zero Trust principles and architectures.",
        "isFree": true,
        "publisher": "NIST",
        "duration": ""
      },
      {
        "title": "USENIX Enigma: Zero Trust Architecture in Practice",
        "type": "video",
        "url": "https://www.usenix.org/conference/enigma2021",
        "description": "Practical talks on implementing zero trust in large organizations.",
        "isFree": true,
        "publisher": "USENIX",
        "duration": ""
      },
      {
        "title": "BeyondCorp: A New Approach to Enterprise Security",
        "type": "article",
        "url": "https://research.google/pubs/pub43231/",
        "description": "Google's implementation of Zero Trust architecture.",
        "isFree": true,
        "publisher": "Google",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-nist-csf-2",
    "frameworkId": "cybersecurity",
    "title": "NIST CSF 2.0",
    "subtitle": "The Cybersecurity Framework for managing risk.",
    "estimatedMinutes": 45,
    "difficulty": "foundation",
    "domain": "Cybersecurity Architecture",
    "overview": "The NIST Cybersecurity Framework (CSF) 2.0 is an update to the widely adopted framework that helps organizations understand, manage, and reduce cybers...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Overview of NIST CSF 2.0",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The NIST Cybersecurity Framework (CSF) 2.0 is an update to the widely adopted framework that helps organizations understand, manage, and reduce cybersecurity risk. Version 2.0 expands the scope beyond critical infrastructure to organizations of all sizes and sectors."
          },
          {
            "type": "paragraph",
            "content": "The framework organizes cybersecurity activities into high-level functions, providing a common language to communicate risk."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "The Six Core Functions",
        "blocks": [
          {
            "type": "paragraph",
            "content": "CSF 2.0 introduces \"Govern\" as a new central function:\n1. **GOVERN**: Establish and monitor the organization’s cybersecurity risk management strategy, expectations, and policy.\n2. **IDENTIFY**: Determine the current cybersecurity risk to the organization (assets, data, systems).\n3. **PROTECT**: Use safeguards to prevent or reduce cybersecurity risk.\n4. **DETECT**: Find and analyze possible cybersecurity attacks and compromises.\n5. **RESPOND**: Take action regarding a detected cybersecurity incident.\n6. **RECOVER**: Restore assets and operations impacted by an incident."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "NIST Cybersecurity Framework 2.0 Spec",
        "type": "official-doc",
        "url": "https://www.nist.gov/cyberframework",
        "description": "The official NIST CSF 2.0 portal, documentation, and tools.",
        "isFree": true,
        "publisher": "NIST",
        "duration": ""
      },
      {
        "title": "CSF 2.0 Quick Start Guides",
        "type": "article",
        "url": "https://www.nist.gov/cyberframework/getting-started",
        "description": "Guides tailored for different audiences to begin using CSF 2.0.",
        "isFree": true,
        "publisher": "NIST",
        "duration": ""
      },
      {
        "title": "Implementing the NIST Cybersecurity Framework",
        "type": "course",
        "url": "https://www.sans.org/",
        "description": "Training on mapping technical controls to the NIST CSF.",
        "isFree": false,
        "publisher": "SANS Institute",
        "duration": ""
      },
      {
        "title": "CISA Cybersecurity Guidance",
        "type": "official-doc",
        "url": "https://www.cisa.gov/cybersecurity",
        "description": "Federal guidance aligned with the NIST framework.",
        "isFree": true,
        "publisher": "CISA",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-mitre-attck-integration",
    "frameworkId": "cybersecurity",
    "title": "MITRE ATT&CK",
    "subtitle": "Understanding adversarial tactics and techniques.",
    "estimatedMinutes": 55,
    "difficulty": "practitioner",
    "domain": "Cybersecurity Architecture",
    "overview": "MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a globally-accessible knowledge base of adversary tactics and techniques based...",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is MITRE ATT&CK?",
        "blocks": [
          {
            "type": "paragraph",
            "content": "MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations."
          },
          {
            "type": "paragraph",
            "content": "It is used as a foundation for the development of specific threat models and methodologies in the private sector, in government, and in the cybersecurity product and service community."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Tactics vs. Techniques",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The framework is structured as a matrix:\n- **Tactics**: The adversary's technical goals (the \"Why\"). Examples: Initial Access, Execution, Persistence, Privilege Escalation, Exfiltration.\n- **Techniques**: How those goals are achieved (the \"How\"). Example: Under \"Initial Access\", a technique might be \"Phishing\".\n- **Sub-techniques**: More specific descriptions of the adversarial behavior. Example: Under \"Phishing\", a sub-technique is \"Spearphishing Attachment\"."
          },
          {
            "type": "paragraph",
            "content": "Security Operations Centers (SOCs) use ATT&CK to map their defensive coverage and prioritize detections."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "MITRE ATT&CK Enterprise Matrix",
        "type": "official-doc",
        "url": "https://attack.mitre.org/",
        "description": "The interactive matrix of adversarial tactics and techniques.",
        "isFree": true,
        "publisher": "MITRE",
        "duration": ""
      },
      {
        "title": "Getting Started with ATT&CK",
        "type": "article",
        "url": "https://attack.mitre.org/resources/getting-started/",
        "description": "A practical guide on how to integrate ATT&CK into SOC operations.",
        "isFree": true,
        "publisher": "MITRE",
        "duration": ""
      },
      {
        "title": "MITRE Engenuity ATT&CK Evaluations",
        "type": "official-doc",
        "url": "https://attackevals.mitre-engenuity.org/",
        "description": "Objective evaluations of cybersecurity products using ATT&CK.",
        "isFree": true,
        "publisher": "MITRE Engenuity",
        "duration": ""
      },
      {
        "title": "Practical Threat Hunting",
        "type": "course",
        "url": "https://www.cybrary.it/",
        "description": "Courses on leveraging MITRE ATT&CK for active threat hunting.",
        "isFree": false,
        "publisher": "Cybrary",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-cloud-security-ccm",
    "frameworkId": "cybersecurity",
    "title": "Cloud Security & CCM",
    "subtitle": "Securing multi-cloud environments and the CSA matrix.",
    "estimatedMinutes": 60,
    "difficulty": "practitioner",
    "domain": "Cybersecurity Architecture",
    "overview": "Cloud security fundamentally relies on the Shared Responsibility Model. Depending on the service model (IaaS, PaaS, SaaS), the responsibility for secu...",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Shared Responsibility Model",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Cloud security fundamentally relies on the Shared Responsibility Model. Depending on the service model (IaaS, PaaS, SaaS), the responsibility for security controls is divided between the Cloud Service Provider (CSP) and the customer."
          },
          {
            "type": "paragraph",
            "content": "- **IaaS**: Customer secures OS, network traffic, applications, and data.\n- **PaaS**: CSP secures OS; Customer secures applications and data.\n- **SaaS**: CSP secures almost everything; Customer secures data and access."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Cloud Security Alliance (CSA) CCM",
        "blocks": [
          {
            "type": "paragraph",
            "content": "The Cloud Controls Matrix (CCM) is a cybersecurity control framework for cloud computing, aligned to the CSA guidance in 17 domains."
          },
          {
            "type": "paragraph",
            "content": "Key domains include:\n- Identity & Access Management (IAM)\n- Data Security & Information Lifecycle Management\n- Infrastructure & Virtualization Security\n- Security Incident Management"
          },
          {
            "type": "paragraph",
            "content": "Architects use the CCM to assess cloud providers and design security controls for cloud deployments."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Cloud Security Alliance Cloud Controls Matrix (CCM v4)",
        "type": "official-doc",
        "url": "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
        "description": "The premier cybersecurity control framework for cloud computing.",
        "isFree": true,
        "publisher": "Cloud Security Alliance",
        "duration": ""
      },
      {
        "title": "AWS Well-Architected - Security Pillar",
        "type": "official-doc",
        "url": "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html",
        "description": "Guidelines and best practices for securing workloads on AWS.",
        "isFree": true,
        "publisher": "AWS",
        "duration": ""
      },
      {
        "title": "Microsoft Cloud Security Benchmark",
        "type": "official-doc",
        "url": "https://learn.microsoft.com/en-us/security/benchmark/azure/overview",
        "description": "Security baseline and controls for Azure environments.",
        "isFree": true,
        "publisher": "Microsoft",
        "duration": ""
      },
      {
        "title": "Practical Cloud Security",
        "type": "book",
        "url": "https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/",
        "description": "A guide for developers and architects on securing cloud infrastructure.",
        "isFree": false,
        "publisher": "O'Reilly",
        "duration": "By Chris Dotson"
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-identity-iam-oauth",
    "frameworkId": "cybersecurity",
    "title": "IAM & OAuth 2.0",
    "subtitle": "Identity architectures, OIDC, and modern authentication.",
    "estimatedMinutes": 50,
    "difficulty": "practitioner",
    "domain": "Cybersecurity Architecture",
    "overview": "IAM is the framework of policies and technologies ensuring that the right users have appropriate access to technology resources. In modern architectur...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Identity and Access Management (IAM)",
        "blocks": [
          {
            "type": "paragraph",
            "content": "IAM is the framework of policies and technologies ensuring that the right users have appropriate access to technology resources. In modern architectures, Identity is the new perimeter."
          },
          {
            "type": "paragraph",
            "content": "Key Concepts:\n- **Authentication (AuthN)**: Proving who you are (e.g., Passwords, MFA, Biometrics).\n- **Authorization (AuthZ)**: Determining what you are allowed to do (e.g., RBAC, ABAC).\n- **Federation**: Trusting identities across domains (e.g., SAML, OIDC)."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "OAuth 2.0 and OpenID Connect (OIDC)",
        "blocks": [
          {
            "type": "paragraph",
            "content": "OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service. OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0."
          },
          {
            "type": "paragraph",
            "content": "**Common OAuth Flows**:\n- **Authorization Code Flow**: Used by web and mobile apps for secure, user-facing authorization (often with PKCE).\n- **Client Credentials Flow**: Used for machine-to-machine (M2M) communication where no user is present."
          },
          {
            "type": "paragraph",
            "content": "*Architectural Note*: Always validate JWT tokens securely and rely on standard libraries rather than custom implementations."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "OAuth 2 in Action",
        "type": "book",
        "url": "https://www.manning.com/books/oauth-2-in-action",
        "description": "Comprehensive guide to building and securing OAuth 2.0 systems.",
        "isFree": false,
        "publisher": "Manning",
        "duration": "By Justin Richer & Antonio Sanso"
      },
      {
        "title": "OpenID Connect Specification",
        "type": "official-doc",
        "url": "https://openid.net/connect/",
        "description": "The official specifications for the OpenID Connect protocol.",
        "isFree": true,
        "publisher": "OpenID Foundation",
        "duration": ""
      },
      {
        "title": "Illustrated Guide to OAuth and OIDC",
        "type": "article",
        "url": "https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc",
        "description": "Visual explanation of authentication and authorization flows.",
        "isFree": true,
        "publisher": "Okta",
        "duration": ""
      },
      {
        "title": "JWT.io",
        "type": "official-doc",
        "url": "https://jwt.io/",
        "description": "Tool and documentation for decoding and understanding JSON Web Tokens.",
        "isFree": true,
        "publisher": "Auth0",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-threat-modeling-stride",
    "frameworkId": "cybersecurity",
    "title": "Threat Modeling & STRIDE",
    "subtitle": "Designing secure systems by anticipating attacks.",
    "estimatedMinutes": 50,
    "difficulty": "practitioner",
    "domain": "Cybersecurity Architecture",
    "overview": "Threat modeling is an engineering practice used to identify structural vulnerabilities, determine threats, and establish logical countermeasures befor...",
    "sections": [
      {
        "id": "sec-1",
        "title": "What is Threat Modeling?",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Threat modeling is an engineering practice used to identify structural vulnerabilities, determine threats, and establish logical countermeasures before code is written. It shifts security \"left\" in the SDLC."
          },
          {
            "type": "paragraph",
            "content": "The process typically answers four questions:\n1. What are we building? (Data Flow Diagrams)\n2. What can go wrong? (Identifying Threats)\n3. What are we going to do about it? (Mitigation)\n4. Did we do a good job? (Validation)"
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "The STRIDE Framework",
        "blocks": [
          {
            "type": "paragraph",
            "content": "STRIDE is a mnemonic created by Microsoft for categorizing security threats:\n- **S**poofing (Identity): Impersonating a user or system.\n- **T**ampering (Integrity): Maliciously modifying data.\n- **R**epudiation (Non-repudiation): Denying an action took place.\n- **I**nformation Disclosure (Confidentiality): Exposing data to unauthorized individuals.\n- **D**enial of Service (Availability): Degrading or disrupting service.\n- **E**levation of Privilege (Authorization): Gaining higher access rights than permitted."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Threat Modeling: Designing for Security",
        "type": "book",
        "url": "https://www.wiley.com/en-us/Threat+Modeling%3A+Designing+for+Security-p-9781118809990",
        "description": "The definitive guide to threat modeling methodologies.",
        "isFree": false,
        "publisher": "Wiley",
        "duration": "By Adam Shostack"
      },
      {
        "title": "OWASP Threat Modeling Cheat Sheet",
        "type": "official-doc",
        "url": "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
        "description": "A practical cheat sheet for conducting threat models.",
        "isFree": true,
        "publisher": "OWASP",
        "duration": ""
      },
      {
        "title": "Microsoft Threat Modeling Tool",
        "type": "official-doc",
        "url": "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool",
        "description": "Documentation for Microsoft's free tool to create Data Flow Diagrams and apply STRIDE.",
        "isFree": true,
        "publisher": "Microsoft",
        "duration": ""
      },
      {
        "title": "Martin Fowler on Microservices & Security Architecture",
        "type": "article",
        "url": "https://martinfowler.com/articles/microservices.html",
        "description": "Architectural insights into securing distributed microservice systems.",
        "isFree": true,
        "publisher": "Martin Fowler",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-defense-in-depth",
    "frameworkId": "cybersecurity",
    "title": "Defense in Depth",
    "subtitle": "Layered security architectures and network segregation.",
    "estimatedMinutes": 40,
    "difficulty": "foundation",
    "domain": "Cybersecurity Architecture",
    "overview": "Defense in Depth is an information assurance concept in which multiple layers of security controls are placed throughout an IT system. Its intent is t...",
    "sections": [
      {
        "id": "sec-1",
        "title": "The Defense in Depth Strategy",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Defense in Depth is an information assurance concept in which multiple layers of security controls are placed throughout an IT system. Its intent is to provide redundancy in the event a security control fails or a vulnerability is exploited."
          },
          {
            "type": "paragraph",
            "content": "If a hacker bypasses the firewall, they still have to get past the Intrusion Detection System, then the endpoint protection, then the database encryption, and so on."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "Architectural Layers",
        "blocks": [
          {
            "type": "paragraph",
            "content": "Typical layers include:\n1. **Data Layer**: Encryption at rest and in transit, Data Loss Prevention (DLP).\n2. **Application Layer**: Web Application Firewalls (WAF), secure coding practices, SAST/DAST.\n3. **Host/Endpoint Layer**: Endpoint Detection and Response (EDR), Antivirus, Patch Management.\n4. **Network Layer**: Firewalls, IDS/IPS, Network Segmentation (VLANs), VPNs.\n5. **Perimeter Layer**: DDoS protection, Edge firewalls.\n6. **Physical Layer**: Biometric access, security guards, CCTV.\n7. **Policies & Procedures**: Security awareness training, acceptable use policies."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "Defense in Depth",
        "type": "article",
        "url": "https://www.cisa.gov/uscert/bsi/articles/knowledge/principles/defense-in-depth",
        "description": "Federal guidance on implementing defense in depth strategies.",
        "isFree": true,
        "publisher": "CISA",
        "duration": ""
      },
      {
        "title": "Defense in Depth Security Strategy",
        "type": "article",
        "url": "https://www.sans.org/white-papers/525/",
        "description": "A detailed whitepaper explaining the layers of defense.",
        "isFree": true,
        "publisher": "SANS Institute",
        "duration": ""
      },
      {
        "title": "CIS Critical Security Controls",
        "type": "official-doc",
        "url": "https://www.cisecurity.org/controls",
        "description": "A prioritized set of safeguards to mitigate the most prevalent cyber attacks.",
        "isFree": true,
        "publisher": "Center for Internet Security",
        "duration": ""
      },
      {
        "title": "Network Security Architecture",
        "type": "book",
        "url": "https://www.ciscopress.com/store/network-security-architectures-9781587051159",
        "description": "Comprehensive guide to designing secure network infrastructures.",
        "isFree": false,
        "publisher": "Cisco Press",
        "duration": "By Sean Convery"
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  },
  {
    "id": "cyber-devsecops-pipeline",
    "frameworkId": "cybersecurity",
    "title": "DevSecOps & CI/CD Security",
    "subtitle": "Integrating security tooling into the delivery pipeline.",
    "estimatedMinutes": 60,
    "difficulty": "expert",
    "domain": "Cybersecurity Architecture",
    "overview": "DevSecOps integrates security practices within the DevOps process. \"Shifting left\" means introducing security early in the Software Development Life C...",
    "sections": [
      {
        "id": "sec-1",
        "title": "Shifting Security Left",
        "blocks": [
          {
            "type": "paragraph",
            "content": "DevSecOps integrates security practices within the DevOps process. \"Shifting left\" means introducing security early in the Software Development Life Cycle (SDLC) rather than treating it as an afterthought."
          },
          {
            "type": "paragraph",
            "content": "Benefits include faster remediation of vulnerabilities, reduced risk, and continuous compliance."
          }
        ]
      },
      {
        "id": "sec-2",
        "title": "The DevSecOps Pipeline",
        "blocks": [
          {
            "type": "paragraph",
            "content": "A mature DevSecOps CI/CD pipeline includes automated security gates:\n1. **Code Commit**: IDE plugins for linting, secret scanning (e.g., GitGuardian, TruffleHog).\n2. **Build**: Static Application Security Testing (SAST) to scan source code for flaws (e.g., SonarQube, Checkmarx). Software Composition Analysis (SCA) to check open-source dependencies for known CVEs (e.g., Snyk, Dependabot).\n3. **Test/QA**: Dynamic Application Security Testing (DAST) to test the running application from the outside (e.g., OWASP ZAP).\n4. **Deploy**: Infrastructure as Code (IaC) scanning (e.g., Checkov, tfsec), container image scanning.\n5. **Operate**: Runtime Application Self-Protection (RASP), Cloud Security Posture Management (CSPM)."
          }
        ]
      }
    ],
    "keyTerms": [],
    "examTips": [],
    "commonMistakes": [],
    "externalResources": [
      {
        "title": "DevSecOps Manifesto",
        "type": "article",
        "url": "https://www.devsecops.org/",
        "description": "The core principles and philosophy of the DevSecOps movement.",
        "isFree": true,
        "publisher": "DevSecOps.org",
        "duration": ""
      },
      {
        "title": "Agile Application Security",
        "type": "book",
        "url": "https://www.oreilly.com/library/view/agile-application-security/9781491938836/",
        "description": "Enabling security in a Continuous Delivery environment.",
        "isFree": false,
        "publisher": "O'Reilly",
        "duration": "By Laura Bell et al."
      },
      {
        "title": "DoD Enterprise DevSecOps Reference Design",
        "type": "official-doc",
        "url": "https://dodcio.defense.gov/Portals/0/Documents/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20v1.0_Public%20Release.pdf",
        "description": "Highly detailed architectural reference for secure software factories.",
        "isFree": true,
        "publisher": "US Department of Defense",
        "duration": ""
      },
      {
        "title": "What is DevSecOps?",
        "type": "article",
        "url": "https://about.gitlab.com/topics/devsecops/",
        "description": "GitLab's guide to implementing security in CI/CD.",
        "isFree": true,
        "publisher": "GitLab",
        "duration": ""
      }
    ],
    "relatedTopicIds": [],
    "embeddedQuestions": []
  }
];
