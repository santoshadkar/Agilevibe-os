import { Framework, Question } from '../lib/types';

export const technicalFramework: Framework = {
  id: 'technical',
  name: 'Technical Architecture',
  shortName: 'Tech Arch',
  description: 'NATA, GATE AR, SEI Software Architecture, AWS Cloud Technical Architecture, Infrastructure & DevSecOps',
  icon: '⚙️',
  color: '#8b5cf6',
  gradientFrom: '#4c1d95',
  gradientTo: '#8b5cf6',
  domains: [
    { id: 'sei-arch', name: 'SEI Software Architecture', description: 'Quality Attributes, ATAM, Architectural Tactics, Product Lines', weight: 25 },
    { id: 'nata-arch', name: 'NATA Architecture & Design', description: 'Structural Engineering, Spatial Aptitude, Building Technology & History', weight: 25 },
    { id: 'gate-ar', name: 'GATE Architecture & Planning (AR)', description: 'Urban Planning, Acoustics, RCC Structures, Building Management', weight: 25 },
    { id: 'infrastructure', name: 'Cloud & System Infrastructure', description: 'IaC, Kubernetes, Platform Engineering, DevSecOps, SRE', weight: 25 },
  ],
  totalQuestions: 125,
  estimatedMinutes: 180,
  certifications: [
    'NATA (National Aptitude Test in Architecture - 125 Qs / 200 Marks)',
    'SEI Software Architecture Certification (95 Qs)',
    'GATE Architecture and Planning (AR - 65 Qs)',
    'AWS Certified Solutions Architect - Technical Architecture (65 Qs)'
  ]
};

export const technicalQuestions: Question[] = [
  // 22 MCQs
  {
    id: 't1',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In Terraform, what file stores the mapping between your configuration and the real world?',
    options: [
      { id: 'a', text: 'main.tf', isCorrect: false },
      { id: 'b', text: 'terraform.tfstate', isCorrect: true },
      { id: 'c', text: 'variables.tf', isCorrect: false },
      { id: 'd', text: 'outputs.tf', isCorrect: false }
    ],
    explanation: 'The state file tracks managed resources.',
    reference: 'Terraform Documentation'
  },
  {
    id: 't2',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which Kubernetes component runs on worker nodes and communicates with the control plane?',
    options: [
      { id: 'a', text: 'etcd', isCorrect: false },
      { id: 'b', text: 'kube-apiserver', isCorrect: false },
      { id: 'c', text: 'kubelet', isCorrect: true },
      { id: 'd', text: 'kube-scheduler', isCorrect: false }
    ],
    explanation: 'The kubelet is the primary node agent that runs on each node.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't3',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In Kubernetes, what ensures that exactly one copy of a Pod runs on every node?',
    options: [
      { id: 'a', text: 'Deployment', isCorrect: false },
      { id: 'b', text: 'StatefulSet', isCorrect: false },
      { id: 'c', text: 'DaemonSet', isCorrect: true },
      { id: 'd', text: 'ReplicaSet', isCorrect: false }
    ],
    explanation: 'DaemonSets ensure that all (or some) Nodes run a copy of a Pod.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't4',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is the role of the CNI in Kubernetes?',
    options: [
      { id: 'a', text: 'Storage', isCorrect: false },
      { id: 'b', text: 'Networking', isCorrect: true },
      { id: 'c', text: 'Runtime', isCorrect: false },
      { id: 'd', text: 'DNS', isCorrect: false }
    ],
    explanation: 'Container Network Interface (CNI) manages network connectivity of pods.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't5',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which is an example of immutable infrastructure?',
    options: [
      { id: 'a', text: 'SSHing into a server to run apt-get update', isCorrect: false },
      { id: 'b', text: 'Replacing a VM with a newly built image', isCorrect: true },
      { id: 'c', text: 'Manually editing config files', isCorrect: false },
      { id: 'd', text: 'Using Ansible to drift-correct a server', isCorrect: false }
    ],
    explanation: 'Immutable infrastructure implies replacing servers rather than modifying them in place.',
    reference: 'Infrastructure Architecture Patterns'
  },
  {
    id: 't6',
    type: 'mcq' as const,
    domain: 'platform-eng',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is an Internal Developer Platform (IDP)?',
    options: [
      { id: 'a', text: 'A public cloud provider', isCorrect: false },
      { id: 'b', text: 'A self-service layer for developers', isCorrect: true },
      { id: 'c', text: 'A code editor', isCorrect: false },
      { id: 'd', text: 'A security scanner', isCorrect: false }
    ],
    explanation: 'IDPs reduce cognitive load by offering self-service paved paths to production.',
    reference: 'Platform Engineering Principles'
  },
  {
    id: 't7',
    type: 'mcq' as const,
    domain: 'platform-eng',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In Platform Engineering, what is a "Golden Path"?',
    options: [
      { id: 'a', text: 'A highly restrictive mandatory workflow', isCorrect: false },
      { id: 'b', text: 'An opinionated, supported path of least resistance', isCorrect: true },
      { id: 'c', text: 'A legacy migration plan', isCorrect: false },
      { id: 'd', text: 'A master branch', isCorrect: false }
    ],
    explanation: 'Golden paths are supported best practices that developers are encouraged (but not strictly forced) to use.',
    reference: 'Platform Engineering Practices'
  },
  {
    id: 't8',
    type: 'mcq' as const,
    domain: 'platform-eng',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Spotify Backstage is primarily used as a:',
    options: [
      { id: 'a', text: 'CI/CD runner', isCorrect: false },
      { id: 'b', text: 'Developer Portal', isCorrect: true },
      { id: 'c', text: 'Container Registry', isCorrect: false },
      { id: 'd', text: 'Firewall', isCorrect: false }
    ],
    explanation: 'Backstage acts as a unified software catalog and developer portal.',
    reference: 'Backstage Documentation'
  },
  {
    id: 't9',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'SAST tools analyze:',
    options: [
      { id: 'a', text: 'Running applications', isCorrect: false },
      { id: 'b', text: 'Network traffic', isCorrect: false },
      { id: 'c', text: 'Source code', isCorrect: true },
      { id: 'd', text: 'Container images', isCorrect: false }
    ],
    explanation: 'Static Application Security Testing (SAST) analyzes source code or bytecode for vulnerabilities.',
    reference: 'DevSecOps Practices'
  },
  {
    id: 't10',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'DAST tools analyze:',
    options: [
      { id: 'a', text: 'Source code', isCorrect: false },
      { id: 'b', text: 'Running applications', isCorrect: true },
      { id: 'c', text: 'Terraform files', isCorrect: false },
      { id: 'd', text: 'Dependencies', isCorrect: false }
    ],
    explanation: 'Dynamic Application Security Testing (DAST) attacks a running instance from the outside.',
    reference: 'DevSecOps Practices'
  },
  {
    id: 't11',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What does SCA stand for in DevSecOps?',
    options: [
      { id: 'a', text: 'Static Code Analysis', isCorrect: false },
      { id: 'b', text: 'Software Composition Analysis', isCorrect: true },
      { id: 'c', text: 'Security Configuration Assessment', isCorrect: false },
      { id: 'd', text: 'System Code Auditor', isCorrect: false }
    ],
    explanation: 'SCA looks for known vulnerabilities in open-source third-party libraries.',
    reference: 'DevSecOps Practices'
  },
  {
    id: 't12',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is GitOps?',
    options: [
      { id: 'a', text: 'Using Git as an IDE', isCorrect: false },
      { id: 'b', text: 'Pull-based deployments synchronized from a Git repository', isCorrect: true },
      { id: 'c', text: 'A branching strategy', isCorrect: false },
      { id: 'd', text: 'A git client', isCorrect: false }
    ],
    explanation: 'GitOps uses Git as the single source of truth for declarative infrastructure and applications.',
    reference: 'GitOps Principles'
  },
  {
    id: 't13',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'ArgoCD and Flux are tools primarily used for:',
    options: [
      { id: 'a', text: 'Continuous Integration', isCorrect: false },
      { id: 'b', text: 'SAST', isCorrect: false },
      { id: 'c', text: 'GitOps / CD', isCorrect: true },
      { id: 'd', text: 'Logging', isCorrect: false }
    ],
    explanation: 'ArgoCD and Flux are continuous delivery tools for Kubernetes using GitOps principles.',
    reference: 'Cloud Native Ecosystem'
  },
  {
    id: 't14',
    type: 'mcq' as const,
    domain: 'network-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'A Transit Gateway in AWS is used to:',
    options: [
      { id: 'a', text: 'Connect VPCs and on-premises networks through a central hub', isCorrect: true },
      { id: 'b', text: 'Expose an API to the internet', isCorrect: false },
      { id: 'c', text: 'Host DNS records', isCorrect: false },
      { id: 'd', text: 'Cache content', isCorrect: false }
    ],
    explanation: 'AWS Transit Gateway connects VPCs and on-premises networks through a central hub, simplifying network topologies.',
    reference: 'AWS Architecture Documentation'
  },
  {
    id: 't15',
    type: 'mcq' as const,
    domain: 'network-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'SD-WAN improves upon traditional WAN by:',
    options: [
      { id: 'a', text: 'Using only MPLS', isCorrect: false },
      { id: 'b', text: 'Decoupling the control plane from the data plane', isCorrect: true },
      { id: 'c', text: 'Being slower', isCorrect: false },
      { id: 'd', text: 'Removing encryption', isCorrect: false }
    ],
    explanation: 'Software-Defined WAN centralizes network control by decoupling the control plane from the data plane.',
    reference: 'Networking Concepts'
  },
  {
    id: 't16',
    type: 'mcq' as const,
    domain: 'network-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'ZTNA stands for:',
    options: [
      { id: 'a', text: 'Zero Trust Network Access', isCorrect: true },
      { id: 'b', text: 'Zonal Transit Network Architecture', isCorrect: false },
      { id: 'c', text: 'Zero Time Network Authentication', isCorrect: false },
      { id: 'd', text: 'Zone Trust Network Authority', isCorrect: false }
    ],
    explanation: 'ZTNA grants secure, identity-aware access to apps without exposing the underlying network.',
    reference: 'Zero Trust Architecture'
  },
  {
    id: 't17',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Which Kubernetes object is best for running a stateful database?',
    options: [
      { id: 'a', text: 'Deployment', isCorrect: false },
      { id: 'b', text: 'StatefulSet', isCorrect: true },
      { id: 'c', text: 'DaemonSet', isCorrect: false },
      { id: 'd', text: 'Job', isCorrect: false }
    ],
    explanation: 'StatefulSets maintain sticky identity and stable, persistent storage across pod rescheduling.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't18',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In SRE, an Error Budget is:',
    options: [
      { id: 'a', text: 'Money set aside for outages', isCorrect: false },
      { id: 'b', text: 'The acceptable level of unreliability', isCorrect: true },
      { id: 'c', text: 'A bug bounty program', isCorrect: false },
      { id: 'd', text: 'Cost of monitoring tools', isCorrect: false }
    ],
    explanation: 'The error budget is the acceptable level of unreliability (100% - SLO).',
    reference: 'Google SRE Book'
  },
  {
    id: 't19',
    type: 'mcq' as const,
    domain: 'devsecops',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is FinOps?',
    options: [
      { id: 'a', text: 'Financial institutions operating in cloud', isCorrect: false },
      { id: 'b', text: 'Cloud financial management practice', isCorrect: true },
      { id: 'c', text: 'A banking application paradigm', isCorrect: false },
      { id: 'd', text: 'A cloud pricing tier', isCorrect: false }
    ],
    explanation: 'FinOps is the practice of optimizing cloud costs across engineering, finance, and business teams.',
    reference: 'FinOps Foundation'
  },
  {
    id: 't20',
    type: 'mcq' as const,
    domain: 'infrastructure',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'In Pulumi, how is infrastructure defined?',
    options: [
      { id: 'a', text: 'Using HashiCorp Configuration Language (HCL)', isCorrect: false },
      { id: 'b', text: 'Using YAML entirely', isCorrect: false },
      { id: 'c', text: 'Using general-purpose programming languages (TypeScript, Python, etc.)', isCorrect: true },
      { id: 'd', text: 'Using XML', isCorrect: false }
    ],
    explanation: 'Pulumi differentiates itself by allowing infrastructure definition using standard programming languages.',
    reference: 'Pulumi Documentation'
  },
  {
    id: 't21',
    type: 'mcq' as const,
    domain: 'network-arch',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'What is a common use of an Ingress controller in Kubernetes?',
    options: [
      { id: 'a', text: 'Block egress traffic', isCorrect: false },
      { id: 'b', text: 'Route external HTTP/HTTPS traffic to internal services', isCorrect: true },
      { id: 'c', text: 'Store secrets securely', isCorrect: false },
      { id: 'd', text: 'Run database backups', isCorrect: false }
    ],
    explanation: 'Ingress controllers act as reverse proxies, managing external access (routing) to cluster services.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't22',
    type: 'mcq' as const,
    domain: 'platform-eng',
    difficulty: 'foundation' as const,
    points: 1,
    question: 'Platform as a Product means:',
    options: [
      { id: 'a', text: 'Selling your platform to external customers', isCorrect: false },
      { id: 'b', text: 'Treating internal devs as customers and using product management practices', isCorrect: true },
      { id: 'c', text: 'Buying an off-the-shelf platform instead of building', isCorrect: false },
      { id: 'd', text: 'Ignoring developer feedback', isCorrect: false }
    ],
    explanation: 'It involves adopting a product mindset, focusing on user (developer) experience and solving their real problems.',
    reference: 'Platform Engineering Practices'
  },

  // 8 Scenarios
  {
    id: 't23',
    type: 'scenario' as const,
    domain: 'infrastructure',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are deploying an application to Kubernetes that requires a database schema to be initialized before the application can successfully start and connect to it.',
    question: 'What Kubernetes feature should you use to ensure the schema is initialized before the main application pod starts?',
    options: [
      { id: 'a', text: 'Sidecar', isCorrect: false },
      { id: 'b', text: 'Init Container', isCorrect: true },
      { id: 'c', text: 'CronJob', isCorrect: false },
      { id: 'd', text: 'DaemonSet', isCorrect: false }
    ],
    explanation: 'Init containers run to completion sequentially before app containers in the Pod start.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't24',
    type: 'scenario' as const,
    domain: 'devsecops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'During recent audits, it was discovered that developers are occasionally pushing hardcoded credentials directly to the Git repository. You have been tasked with stopping this as early in the lifecycle as possible.',
    question: 'What is the best preventative control to implement?',
    options: [
      { id: 'a', text: 'Reviewing audit logs daily', isCorrect: false },
      { id: 'b', text: 'Implementing DAST in the pipeline', isCorrect: false },
      { id: 'c', text: 'Using pre-commit hooks with secret scanning', isCorrect: true },
      { id: 'd', text: 'Enforcing manual code reviews', isCorrect: false }
    ],
    explanation: 'Shift-left security dictates that checking at the pre-commit stage prevents the secret from even reaching the repository.',
    reference: 'DevSecOps Practices'
  },
  {
    id: 't25',
    type: 'scenario' as const,
    domain: 'network-arch',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your company has scaled rapidly on AWS and now has 50 individual VPCs. Currently, they are connected via VPC peering, which is creating a complex, unmanageable mesh topology.',
    question: 'What is the most appropriate architectural pattern to resolve this complexity?',
    options: [
      { id: 'a', text: 'Hub and Spoke using Transit Gateway', isCorrect: true },
      { id: 'b', text: 'Public Internet routing with IP whitelisting', isCorrect: false },
      { id: 'c', text: 'Deploying 50 site-to-site VPNs', isCorrect: false },
      { id: 'd', text: 'Consolidating all resources into a single VPC', isCorrect: false }
    ],
    explanation: 'A Transit Gateway acts as a highly scalable cloud router, turning a complex mesh network into a simpler hub-and-spoke topology.',
    reference: 'AWS Networking Best Practices'
  },
  {
    id: 't26',
    type: 'scenario' as const,
    domain: 'devsecops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'An engineering team has pushed several unstable releases recently and has completely exhausted their Error Budget for the current quarter.',
    question: 'According to Site Reliability Engineering (SRE) principles, what is the correct next step?',
    options: [
      { id: 'a', text: 'Ignore the budget and continue shipping features', isCorrect: false },
      { id: 'b', text: 'Halt new feature releases and dedicate all effort to reliability', isCorrect: true },
      { id: 'c', text: 'Increase the Error Budget to accommodate the instability', isCorrect: false },
      { id: 'd', text: 'Lower the SLO target to match current performance', isCorrect: false }
    ],
    explanation: 'Error budgets regulate the balance between features and stability. Exhausting it mandates a freeze on feature work to stabilize the system.',
    reference: 'Google SRE Book'
  },
  {
    id: 't27',
    type: 'scenario' as const,
    domain: 'platform-eng',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Developers at your organization are complaining that it takes 3 weeks and multiple Jira tickets across different teams (networking, security, infra) to get a new staging environment provisioned.',
    question: 'How should a platform engineering team address this bottleneck?',
    options: [
      { id: 'a', text: 'Hire more Ops engineers to close tickets faster', isCorrect: false },
      { id: 'b', text: 'Create a self-service paved road in the Internal Developer Platform (IDP)', isCorrect: true },
      { id: 'c', text: 'Mandate that developers learn and write their own Terraform', isCorrect: false },
      { id: 'd', text: 'Move all development to local machines', isCorrect: false }
    ],
    explanation: 'Self-service automation eliminates ticketing bottlenecks and reduces cognitive load by providing environments instantly via an IDP.',
    reference: 'Platform Engineering Principles'
  },
  {
    id: 't28',
    type: 'scenario' as const,
    domain: 'infrastructure',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'You are using Terraform for infrastructure provisioning. Two engineers recently ran `terraform apply` simultaneously from their local machines, causing state file corruption and resource inconsistencies.',
    question: 'How do you prevent this issue in the future?',
    options: [
      { id: 'a', text: 'Tell the engineers to coordinate via Slack', isCorrect: false },
      { id: 'b', text: 'Implement State Locking using a backend like AWS DynamoDB', isCorrect: true },
      { id: 'c', text: 'Store the state file in a Git repository', isCorrect: false },
      { id: 'd', text: 'Switch to using AWS CloudFormation', isCorrect: false }
    ],
    explanation: 'State locking prevents concurrent operations on the same state file, ensuring safe multi-user collaboration.',
    reference: 'Terraform Documentation'
  },
  {
    id: 't29',
    type: 'scenario' as const,
    domain: 'devsecops',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Your organization wants to ensure that the live state of Kubernetes clusters exactly matches the configuration defined in your Git repository. If an admin manually edits a Deployment via `kubectl`, the system should automatically revert it to the Git-defined state.',
    question: 'Which tool and paradigm best fits this requirement?',
    options: [
      { id: 'a', text: 'Jenkins pipelines triggered by Git hooks', isCorrect: false },
      { id: 'b', text: 'ArgoCD using a GitOps pull-based model', isCorrect: true },
      { id: 'c', text: 'Ansible playbooks running on a cron schedule', isCorrect: false },
      { id: 'd', text: 'AWS CodeDeploy', isCorrect: false }
    ],
    explanation: 'GitOps tools like ArgoCD run inside the cluster, constantly pulling state from Git and reconciling drift automatically.',
    reference: 'GitOps Best Practices'
  },
  {
    id: 't30',
    type: 'scenario' as const,
    domain: 'network-arch',
    difficulty: 'practitioner' as const,
    points: 2,
    scenario: 'Due to a shift to remote work, employees need secure access to an internal web application. Using a traditional VPN would expose the entire internal network to employee devices, which poses a significant security risk.',
    question: 'What is the most secure architectural pattern to solve this?',
    options: [
      { id: 'a', text: 'Implement Port Forwarding on the main firewall', isCorrect: false },
      { id: 'b', text: 'Adopt Zero Trust Network Access (ZTNA)', isCorrect: true },
      { id: 'c', text: 'Expose the app to the public internet securely', isCorrect: false },
      { id: 'd', text: 'Use an IPsec Site-to-Site VPN', isCorrect: false }
    ],
    explanation: 'ZTNA grants granular, context-aware, identity-based access directly to the specific application, rather than placing the user on the corporate network.',
    reference: 'Zero Trust Architecture Guidelines'
  },

  // 5 Drag-Drop
  {
    id: 't31',
    type: 'drag-drop' as const,
    domain: 'infrastructure',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match each Kubernetes object to its primary deployment role.',
    items: [
      { id: 'item-1', content: 'Deployment', correctZone: 'zone-a' },
      { id: 'item-2', content: 'DaemonSet', correctZone: 'zone-b' },
      { id: 'item-3', content: 'StatefulSet', correctZone: 'zone-c' },
      { id: 'item-4', content: 'Ingress', correctZone: 'zone-d' }
    ],
    zones: [
      { id: 'zone-a', label: 'Stateless scaling' },
      { id: 'zone-b', label: 'One pod per node' },
      { id: 'zone-c', label: 'Sticky identity & storage' },
      { id: 'zone-d', label: 'External HTTP routing' }
    ],
    explanation: 'Different workloads require different Kubernetes controller objects.',
    reference: 'Kubernetes Documentation'
  },
  {
    id: 't32',
    type: 'drag-drop' as const,
    domain: 'devsecops',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the Application Security Testing type to its target phase/target material.',
    items: [
      { id: 'item-1', content: 'SCA', correctZone: 'zone-a' },
      { id: 'item-2', content: 'SAST', correctZone: 'zone-b' },
      { id: 'item-3', content: 'DAST', correctZone: 'zone-c' },
      { id: 'item-4', content: 'RASP', correctZone: 'zone-d' }
    ],
    zones: [
      { id: 'zone-a', label: 'Third-party dependencies' },
      { id: 'zone-b', label: 'Static source code' },
      { id: 'zone-c', label: 'Running application (external scan)' },
      { id: 'zone-d', label: 'Running application (internal protection)' }
    ],
    explanation: 'Each AppSec testing methodology has a specific focus area in the SDLC.',
    reference: 'DevSecOps Practices'
  },
  {
    id: 't33',
    type: 'drag-drop' as const,
    domain: 'infrastructure',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the Infrastructure as Code (IaC) tool to its defining paradigm.',
    items: [
      { id: 'item-1', content: 'Terraform', correctZone: 'zone-a' },
      { id: 'item-2', content: 'Pulumi', correctZone: 'zone-b' },
      { id: 'item-3', content: 'Ansible', correctZone: 'zone-c' },
      { id: 'item-4', content: 'CloudFormation', correctZone: 'zone-d' }
    ],
    zones: [
      { id: 'zone-a', label: 'Declarative HCL' },
      { id: 'zone-b', label: 'General purpose languages (TS/Python)' },
      { id: 'zone-c', label: 'Procedural config management (YAML)' },
      { id: 'zone-d', label: 'Native AWS declarative (JSON/YAML)' }
    ],
    explanation: 'IaC tools vary widely in syntax and execution methodology.',
    reference: 'Infrastructure as Code Comparisons'
  },
  {
    id: 't34',
    type: 'drag-drop' as const,
    domain: 'devsecops',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the DevOps toolchain component to its primary function.',
    items: [
      { id: 'item-1', content: 'GitHub Actions', correctZone: 'zone-a' },
      { id: 'item-2', content: 'ArgoCD', correctZone: 'zone-b' },
      { id: 'item-3', content: 'SonarQube', correctZone: 'zone-c' },
      { id: 'item-4', content: 'Dependabot', correctZone: 'zone-d' }
    ],
    zones: [
      { id: 'zone-a', label: 'CI Pipeline Execution' },
      { id: 'zone-b', label: 'GitOps CD Synchronization' },
      { id: 'zone-c', label: 'Code Quality and SAST' },
      { id: 'zone-d', label: 'Automated Dependency Updates' }
    ],
    explanation: 'A modern DevOps toolchain relies on specialized tools for integration, delivery, and security.',
    reference: 'DevOps Toolchain'
  },
  {
    id: 't35',
    type: 'drag-drop' as const,
    domain: 'platform-eng',
    difficulty: 'practitioner' as const,
    points: 3,
    instruction: 'Match the Platform Engineering concept to its definition.',
    items: [
      { id: 'item-1', content: 'Internal Developer Platform', correctZone: 'zone-a' },
      { id: 'item-2', content: 'Golden Path', correctZone: 'zone-b' },
      { id: 'item-3', content: 'Cognitive Load', correctZone: 'zone-c' },
      { id: 'item-4', content: 'Backstage', correctZone: 'zone-d' }
    ],
    zones: [
      { id: 'zone-a', label: 'Self-service infrastructure portal' },
      { id: 'zone-b', label: 'Opinionated, supported best practice' },
      { id: 'zone-c', label: 'Mental effort required to build and run software' },
      { id: 'zone-d', label: 'Open platform for building developer portals' }
    ],
    explanation: 'Core terminology for platform engineering focuses on enabling developer velocity.',
    reference: 'Platform Engineering Concepts'
  }
,
{
  "id": "tech-036",
  "type": "mcq",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the primary function of a Kubernetes CNI (Container Network Interface) plugin like Calico or Cilium?",
  "options": [
    {
      "id": "a",
      "text": "Configuring network connectivity, pod IP allocation, and network policy enforcement across cluster nodes.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Managing persistent disk storage volumes.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Compiling Dockerfiles.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Managing Git commits.",
      "isCorrect": false
    }
  ],
  "explanation": "CNI plugins manage overlay network routing, pod IP assignment, and eBPF/iptables security policies in Kubernetes.",
  "reference": "Kubernetes CNI Architecture"
},
{
  "id": "tech-037",
  "type": "scenario",
  "domain": "platform-eng",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise engineering organization has 40 software teams setting up duplicated CI/CD pipelines and Kubernetes deployment manifests from scratch, resulting in security vulnerabilities and inconsistent tooling.",
  "question": "How should Platform Engineering eliminate this friction?",
  "options": [
    {
      "id": "a",
      "text": "Build an Internal Developer Platform (IDP) with Backstage and golden paths that automate pipeline & manifest generation.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Hire 100 extra DevOps engineers to manually write YAML files for developers.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Forbid developers from deploying software.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Require developers to build their own cloud data centers.",
      "isCorrect": false
    }
  ],
  "explanation": "IDPs provide self-service golden paths that standardize security, deployment, and operational standards across teams.",
  "reference": "Platform Engineering Principles"
},
{
  "id": "tech-038",
  "type": "mcq",
  "domain": "infrastructure",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In Terraform, what is the risk of using local state files instead of remote backend storage (e.g. AWS S3 + DynamoDB)?",
  "options": [
    {
      "id": "a",
      "text": "Lack of state locking leads to concurrent apply collisions, sensitive data exposure, and state file loss.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Local state files run faster than remote state.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Terraform automatically deletes local state files after each run.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Remote backends break HCL syntax.",
      "isCorrect": false
    }
  ],
  "explanation": "Remote backends enable state locking, encrypted remote storage, and team collaboration.",
  "reference": "Terraform Remote State Best Practices"
},
{
  "id": "tech-039",
  "type": "mcq",
  "domain": "devsecops",
  "difficulty": "expert",
  "points": 1,
  "question": "What is SLSA (Supply-chain Levels for Software Artifacts) in software supply chain security?",
  "options": [
    {
      "id": "a",
      "text": "A security framework establishing build integrity, provenance generation, and tamper-resistant artifact pipelines.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A Linux kernel patch.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database query language.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A web browser extension.",
      "isCorrect": false
    }
  ],
  "explanation": "SLSA prevents supply chain tampering by verifying source code provenance, build hermeticity, and signature verification.",
  "reference": "SLSA Framework Specifications"
},
{
  "id": "tech-040",
  "type": "scenario",
  "domain": "sre",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An e-commerce system experiences intermittent microservice failures during peak sales. The SRE team needs to trace requests spanning 25 microservices across 3 cloud regions.",
  "question": "Which observability stack pattern enables end-to-end distributed tracing?",
  "options": [
    {
      "id": "a",
      "text": "Deploy OpenTelemetry SDKs with W3C Trace Context propagation to Jaeger or Tempo backend.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "SSH into nodes and tail stdout logs manually using grep.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Print log statements to local text files without correlation IDs.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Disable tracing to save CPU usage.",
      "isCorrect": false
    }
  ],
  "explanation": "OpenTelemetry provides standardized trace context propagation across distributed microservices.",
  "reference": "OpenTelemetry Distributed Tracing"
},
{
  "id": "tech-041",
  "type": "mcq",
  "domain": "sre",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In SRE terminology, what is an Error Budget?",
  "options": [
    {
      "id": "a",
      "text": "The maximum allowable unreliability (100% minus SLO target) that engineering teams can consume for innovation and deployment speed.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "The financial cost of purchasing server hardware.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A penalty fee paid to customers.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "The total number of bugs in a Jira backlog.",
      "isCorrect": false
    }
  ],
  "explanation": "Error budgets balance feature velocity with system stability; exhausting the budget halts non-critical deployments.",
  "reference": "Google SRE Book"
},
{
  "id": "tech-042",
  "type": "mcq",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the purpose of Kubernetes CSI (Container Storage Interface)?",
  "options": [
    {
      "id": "a",
      "text": "A standardized interface for third-party storage providers to expose block and file storage to container workloads.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A network routing protocol.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A CPU scheduling algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A web server plugin.",
      "isCorrect": false
    }
  ],
  "explanation": "CSI decouples Kubernetes storage volume management from core Kubernetes code.",
  "reference": "Kubernetes Storage Architecture"
},
{
  "id": "tech-043",
  "type": "scenario",
  "domain": "finops",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A cloud-native company's monthly AWS bill has grown to $450,000. 40% of EC2 instances are running at <5% CPU utilization and unattached EBS volumes persist after pod deletion.",
  "question": "What FinOps architecture practices should be automated?",
  "options": [
    {
      "id": "a",
      "text": "Implement automated right-sizing via Karpenter/KEDA, purge unattached EBS volumes via AWS Custodian, and leverage Spot/Reserved instances.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Shut down all production servers permanently.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Ignore cloud costs and double the AWS budget.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Migrate back to physical on-premise servers without cost modeling.",
      "isCorrect": false
    }
  ],
  "explanation": "Automating right-sizing, auto-scaling, dynamic Spot instances, and orphan resource cleanup optimizes cloud spend.",
  "reference": "FinOps Foundation Framework"
},
{
  "id": "tech-044",
  "type": "mcq",
  "domain": "network-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "In cloud network architecture, what is AWS Transit Gateway (TGW)?",
  "options": [
    {
      "id": "a",
      "text": "A regional network transit hub connecting VPCs, on-premises networks, and VPNs in a scalable hub-and-spoke topology.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A database query optimizer.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A DNS registrar.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A Linux package manager.",
      "isCorrect": false
    }
  ],
  "explanation": "Transit Gateway simplifies network architecture by replacing complex VPC peering meshes with a central hub.",
  "reference": "AWS Cloud Networking Architecture"
},
{
  "id": "tech-045",
  "type": "mcq",
  "domain": "devsecops",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is Cosign in container image security architecture?",
  "options": [
    {
      "id": "a",
      "text": "An open-source tool for signing and verifying container images and OCI artifacts using Sigstore infrastructure.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A math library for trigonometry.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A web server reverse proxy.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database migration CLI.",
      "isCorrect": false
    }
  ],
  "explanation": "Cosign enables container signature verification inside CI/CD pipelines and Kubernetes admission controllers.",
  "reference": "Sigstore Security Architecture"
},
{
  "id": "tech-046",
  "type": "scenario",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise is migrating 200 stateful database applications to Kubernetes. They require strict volume snapshotting, data persistence across node failures, and volume expansion.",
  "question": "Which Kubernetes storage object guarantees persistent storage lifecycle independent of Pod lifecycles?",
  "options": [
    {
      "id": "a",
      "text": "PersistentVolume (PV) bound via PersistentVolumeClaim (PVC) using dynamic StorageClass provisioning.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "emptyDir volume.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "hostPath volume on a single node.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "ConfigMap key-value storage.",
      "isCorrect": false
    }
  ],
  "explanation": "PVs and PVCs provide persistent, lifecycle-decoupled storage managed dynamically via StorageClasses.",
  "reference": "Kubernetes Storage Architecture"
},
{
  "id": "tech-047",
  "type": "mcq",
  "domain": "network-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is eBPF (Extended Berkeley Packet Filter) in modern Linux kernel observability and networking?",
  "options": [
    {
      "id": "a",
      "text": "A technology allowing sandboxed programs to run inside the Linux kernel for high-performance networking, security filtering, and tracing without modifying kernel source.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An outdated text editor.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A web browser rendering engine.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A file compression format.",
      "isCorrect": false
    }
  ],
  "explanation": "eBPF powers modern cloud-native networking and security tools (like Cilium, Falco, Pixie) directly in the Linux kernel.",
  "reference": "eBPF Architecture"
},
{
  "id": "tech-048",
  "type": "mcq",
  "domain": "gitops",
  "difficulty": "expert",
  "points": 1,
  "question": "In GitOps architecture, what is Configuration Drift?",
  "options": [
    {
      "id": "a",
      "text": "A state where the actual runtime infrastructure in the cluster deviates from the desired state declared in Git.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A Git commit merge conflict.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network packet loss event.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database disk failure.",
      "isCorrect": false
    }
  ],
  "explanation": "GitOps controllers detect configuration drift and automatically reconcile cluster state back to Git desired state.",
  "reference": "GitOps Principles"
},
{
  "id": "tech-049",
  "type": "scenario",
  "domain": "sre",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A global SaaS API service has an SLO requirement of 99.9% availability per month. In the first 10 days of the month, a outage consumes 95% of the monthly error budget.",
  "question": "According to SRE principles, what action should the team take for the remainder of the month?",
  "options": [
    {
      "id": "a",
      "text": "Halt non-critical feature deployments, freeze releases, and dedicate engineering sprints strictly to reliability and bug fixes.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Lower the availability target to 95% retroactively.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Ignore the error budget and double feature deployment frequency.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Fire the on-call engineer.",
      "isCorrect": false
    }
  ],
  "explanation": "Exhausted error budgets enforce a release freeze so engineering focus shifts entirely to stabilizing the platform.",
  "reference": "SRE Error Budget Management"
},
{
  "id": "tech-050",
  "type": "mcq",
  "domain": "platform-eng",
  "difficulty": "expert",
  "points": 1,
  "question": "What is Backstage in Platform Engineering architecture?",
  "options": [
    {
      "id": "a",
      "text": "An open-source developer portal framework created by Spotify for building unified internal developer portals (IDPs).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A cloud load balancer.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A background job queue in Node.js.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A CSS UI framework.",
      "isCorrect": false
    }
  ],
  "explanation": "Backstage centralizes microservice catalogs, software templates, tech docs, and developer tooling into one portal.",
  "reference": "Backstage Open Source Framework"
},
{
  "id": "tech-051",
  "type": "mcq",
  "domain": "infrastructure",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is immutable infrastructure architecture?",
  "options": [
    {
      "id": "a",
      "text": "An infrastructure deployment pattern where servers/containers are replaced rather than modified in-place when updates occur.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Servers that are never turned off.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Hardcoded IP addresses in source code.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Read-only SQL databases.",
      "isCorrect": false
    }
  ],
  "explanation": "Immutable infrastructure eliminates configuration drift and ensures predictable, testable deployments.",
  "reference": "Immutable Infrastructure Architecture"
},
{
  "id": "tech-052",
  "type": "scenario",
  "domain": "devsecops",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A fintech application requires strict compliance audit trailing. Every container image deployed into production must be cryptographically signed by authorized CI pipelines and scanned for zero-day vulnerabilities.",
  "question": "Which Kubernetes control enforces this policy at deployment time?",
  "options": [
    {
      "id": "a",
      "text": "Kubernetes Validating Admission Webhook (e.g. Kyverno or OPA Gatekeeper) enforcing Cosign image signature verification.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Kubernetes CronJob running every night.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Docker desktop GUI setting.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Network Security Group inbound rule.",
      "isCorrect": false
    }
  ],
  "explanation": "Admission controllers inspect pod creation requests and reject unsigned or unvetted container images before scheduling.",
  "reference": "Kubernetes Policy Enforcement"
},
{
  "id": "tech-053",
  "type": "mcq",
  "domain": "network-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is SD-WAN (Software-Defined Wide Area Network) in enterprise networking?",
  "options": [
    {
      "id": "a",
      "text": "A software-driven WAN architecture that dynamically routes traffic across MPLS, broadband, and 5G connections based on application performance.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A local Wi-Fi router.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A fiber optic cable installer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A browser VPN plugin.",
      "isCorrect": false
    }
  ],
  "explanation": "SD-WAN abstracts WAN hardware to optimize branch office routing, security, and cloud access.",
  "reference": "Enterprise SD-WAN Architecture"
},
{
  "id": "tech-054",
  "type": "mcq",
  "domain": "finops",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In cloud FinOps, what is the practice of Tagging / Allocation Strategy?",
  "options": [
    {
      "id": "a",
      "text": "Assigning standardized metadata key-value tags (e.g., Environment, CostCenter, Owner) to resources for bill attribution.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Tagging Git commits with release numbers.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Adding hashtags to social media posts.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Labeling physical servers in a data center with stickers.",
      "isCorrect": false
    }
  ],
  "explanation": "Resource tagging enables granular cost transparency, chargeback/showback models, and accountability across business units.",
  "reference": "FinOps Cost Allocation"
},
{
  "id": "tech-055",
  "type": "scenario",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise is adopting multi-cluster Kubernetes across AWS (EKS) and Azure (AKS). They need a unified service mesh for encrypted mTLS communication, traffic routing, and telemetry across both cloud clusters.",
  "question": "Which architectural pattern satisfies multi-cluster service communication?",
  "options": [
    {
      "id": "a",
      "text": "Multi-cluster Service Mesh (e.g. Istio or Linkerd) with shared CA certificates and cross-cluster ingress gateways.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Exposing all cluster services over unauthenticated public IP addresses.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Running open SSH tunnels between individual container pods.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Deploying a single monolithic monolithic server in AWS.",
      "isCorrect": false
    }
  ],
  "explanation": "Multi-cluster service meshes provide transparent mTLS encryption, service discovery, and traffic management across cloud boundaries.",
  "reference": "Multi-Cluster Service Mesh"
},
{
  "id": "tech-056",
  "type": "mcq",
  "domain": "gitops",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is Kustomize in Kubernetes manifest management architecture?",
  "options": [
    {
      "id": "a",
      "text": "A template-free manifest customization tool that overlays environment-specific changes (dev, staging, prod) on base YAML files.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A GUI editor for Kubernetes.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A custom Linux distribution.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A Python web framework.",
      "isCorrect": false
    }
  ],
  "explanation": "Kustomize uses base and overlay directories to customize raw YAML manifests without complex templating engines.",
  "reference": "Kubernetes Kustomize Documentation"
},
{
  "id": "tech-057",
  "type": "mcq",
  "domain": "sre",
  "difficulty": "expert",
  "points": 1,
  "question": "What is Chaos Engineering (e.g. Chaos Mesh, Litmus, Gremlin) in technical architecture resilience?",
  "options": [
    {
      "id": "a",
      "text": "The discipline of intentionally injecting failures into production systems to discover weaknesses before outages occur.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Randomly deleting production databases without backups.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Writing unorganized code without design patterns.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Running automated stress tests in local dev environment only.",
      "isCorrect": false
    }
  ],
  "explanation": "Chaos engineering builds confidence in system resilience by testing how applications withstand turbulent production conditions.",
  "reference": "Chaos Engineering Principles"
},
{
  "id": "tech-058",
  "type": "scenario",
  "domain": "platform-eng",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A software company wants to minimize developer cognitive load. Developers should only write application code and specify resource needs in a lightweight manifest, while platform team handles underlying Terraform, Helm, and K8s complexity.",
  "question": "What architectural abstraction pattern should be implemented?",
  "options": [
    {
      "id": "a",
      "text": "Platform as a Product with custom Resource Definitions (CRDs) / Open Application Model (OAM) abstractions.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Require all developers to pass CKA exam before writing code.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Force developers to manually execute AWS CLI commands.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Eliminate infrastructure team entirely.",
      "isCorrect": false
    }
  ],
  "explanation": "Platform as a Product creates clean abstraction layers that shield developers from low-level infrastructure complexity.",
  "reference": "Platform Product Management"
},
{
  "id": "tech-059",
  "type": "mcq",
  "domain": "devsecops",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is Secret Scanning in CI/CD pipeline architecture?",
  "options": [
    {
      "id": "a",
      "text": "Automated scanning of Git repositories and commits to detect leaked API keys, tokens, and passwords (e.g. TruffleHog, GitGuardian).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Scanning database tables for encrypted columns.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Checking Wi-Fi passwords in office building.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Scanning PDF documents for hidden text.",
      "isCorrect": false
    }
  ],
  "explanation": "Secret scanning prevents accidental exposure of credentials in source code control systems.",
  "reference": "Git Guardian / TruffleHog Architecture"
},
{
  "id": "tech-060",
  "type": "mcq",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 1,
  "question": "What is KEDA (Kubernetes Event-driven Autoscaling) in cloud workload architecture?",
  "options": [
    {
      "id": "a",
      "text": "An autoscaler that scales Kubernetes workloads dynamically based on event sources (Kafka lag, SQS queue depth, Redis stream length).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A Kubernetes dashboard UI.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database query engine.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A network packet sniffer.",
      "isCorrect": false
    }
  ],
  "explanation": "KEDA extends native HPA to scale pods driven by external event stream metrics down to 0 replicas.",
  "reference": "KEDA Specifications"
},
{
  "id": "tech-061",
  "type": "scenario",
  "domain": "finops",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise cloud architecture has $1M annual compute spend. 60% of workloads are predictable baseline microservices running 24/7, while 40% are batch analytical jobs.",
  "question": "What cost optimization model achieves maximum savings?",
  "options": [
    {
      "id": "a",
      "text": "Purchase 1-year/3-year Savings Plans or Compute Savings Plans for baseline 60%, and use Spot Instances for batch 40%.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Pay 100% on-demand rates for all workloads.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Turn off baseline services during business hours.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Run all batch analytics on expensive GPU instances.",
      "isCorrect": false
    }
  ],
  "explanation": "Savings Plans provide ~40-60% savings on baseline workloads, while Spot Instances provide ~70-90% savings for fault-tolerant batch jobs.",
  "reference": "AWS Cost Optimization Strategy"
},
{
  "id": "tech-062",
  "type": "mcq",
  "domain": "network-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is SASE (Secure Access Service Edge) in enterprise network security architecture?",
  "options": [
    {
      "id": "a",
      "text": "A converged architecture combining SD-WAN capabilities with cloud-native security services (SWG, CASB, ZTNA, FWaaS).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A fiber optic cable connector.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A software bug tracking tool.",
      "isCorrect": false
    }
  ],
  "explanation": "SASE delivers WAN routing and cloud security controls as a unified cloud service.",
  "reference": "Gartner SASE Framework"
},
{
  "id": "tech-063",
  "type": "drag-drop",
  "domain": "infrastructure",
  "difficulty": "expert",
  "points": 3,
  "instruction": "Match each Kubernetes storage class provisioning type to its use-case:",
  "items": [
    {
      "id": "item-sc1",
      "content": "ReadWriteOnce (RWO)",
      "correctZone": "zone-sc1"
    },
    {
      "id": "item-sc2",
      "content": "ReadWriteMany (RWX)",
      "correctZone": "zone-sc2"
    },
    {
      "id": "item-sc3",
      "content": "ReadOnlyMany (ROX)",
      "correctZone": "zone-sc3"
    },
    {
      "id": "item-sc4",
      "content": "Ephemeral Local Storage",
      "correctZone": "zone-sc4"
    }
  ],
  "zones": [
    {
      "id": "zone-sc1",
      "label": "Single node block volume (e.g. AWS EBS / Azure Disk) for databases"
    },
    {
      "id": "zone-sc2",
      "label": "Shared file system (e.g. AWS EFS / Azure Files) mounted by multiple pods"
    },
    {
      "id": "zone-sc3",
      "label": "Shared read-only reference data mounted across multiple nodes"
    },
    {
      "id": "zone-sc4",
      "label": "Scratch workspace deleted when Pod terminates"
    }
  ],
  "explanation": "Kubernetes AccessModes determine how volumes are attached and shared across nodes.",
  "reference": "Kubernetes Storage AccessModes"
},
{
  "id": "tech-064",
  "type": "mcq",
  "domain": "devsecops",
  "difficulty": "expert",
  "points": 1,
  "question": "What is Policy-as-Code (e.g. OPA / Kyverno) in cloud infrastructure governance?",
  "options": [
    {
      "id": "a",
      "text": "Writing compliance rules in code files to automatically validate and enforce infrastructure & Kubernetes security guardrails.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Writing insurance contracts in Word documents.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Manually auditing server configurations once a year.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Encrypting database backups.",
      "isCorrect": false
    }
  ],
  "explanation": "Policy-as-Code automates governance by verifying IaC pull requests and K8s manifests against security rules.",
  "reference": "OPA / Policy as Code Principles"
},
{
  "id": "tech-065",
  "type": "scenario",
  "domain": "sre",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise microservices platform experiences frequent cascading failures where one failing downstream database causes all upstream API gateways to exhaust thread pools.",
  "question": "Which architectural resilience pattern prevents this cascade?",
  "options": [
    {
      "id": "a",
      "text": "Implement Circuit Breakers (e.g. Resilience4j / Istio) with timeouts, bulkheads, and fallback mechanisms.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Increase thread pool limits to infinity.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Disable all network firewalls.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Remove load balancers.",
      "isCorrect": false
    }
  ],
  "explanation": "Circuit breakers open when error thresholds are breached, returning fast fallbacks and isolating downstream failures.",
  "reference": "Resilience Engineering Patterns"
}
,
{
  "id": "tech-066",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] In SEI Software Architecture, what is the Architecture Tradeoff Analysis Method (ATAM)?",
  "options": [
    {
      "id": "a",
      "text": "A structured evaluation method to discover risks, sensitivity points, and tradeoff points across quality attribute requirements.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "ATAM evaluates architectural decisions against quality attribute scenarios to identify tradeoffs and risk themes.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-067",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] What is an Architectural Tactic according to SEI principles?",
  "options": [
    {
      "id": "a",
      "text": "A design decision that affects a single quality attribute response (e.g. heartbeat for availability, ping/echo for fault detection).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Tactics are small architectural mechanisms that directly impact specific quality attribute responses.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-068",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] In SEI Quality Attribute Scenarios, what are the six required parts of a scenario?",
  "options": [
    {
      "id": "a",
      "text": "Source of Stimulus, Stimulus, Environment, Artifact, Response, and Response Measure.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "SEI defines formal quality attribute scenarios using these six structural elements.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-069",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] What is a Sensitivity Point in ATAM evaluation?",
  "options": [
    {
      "id": "a",
      "text": "An architectural decision for which a small change significantly affects a specific quality attribute response.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Sensitivity points highlight critical design parameters that strongly influence performance, security, or availability.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-070",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] In SEI Modifiability Tactics, what is the purpose of the \"Use an Intermediary\" tactic?",
  "options": [
    {
      "id": "a",
      "text": "Breaking direct dependencies between software components (e.g., publish-subscribe broker or abstract factory).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Intermediaries reduce coupling, making components easier to modify independently.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-071",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] What is Software Product Line Architecture (SPLA) according to SEI?",
  "options": [
    {
      "id": "a",
      "text": "A software engineering paradigm where a core architecture and set of reusable assets are shared across a family of products.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Product lines leverage common core architecture to achieve massive economies of scale and rapid variant creation.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-072",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] In SEI Availability Tactics, what is the difference between Active Redundancy and Passive Redundancy?",
  "options": [
    {
      "id": "a",
      "text": "Active Redundancy has all nodes processing requests concurrently; Passive Redundancy has a primary node processing and backing up state to standby nodes.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Active redundancy provides zero-downtime failover; passive redundancy requires state synchronization and failover switching.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-073",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] What is an Architectural Risk in SEI evaluation terminology?",
  "options": [
    {
      "id": "a",
      "text": "An architectural decision that has not been shown to satisfy a quality attribute requirement and may lead to undesirable consequences.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Risks are potential problem areas identified during architectural reviews.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-074",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] In SEI Performance Tactics, which tactic manages demand on resources?",
  "options": [
    {
      "id": "a",
      "text": "Bound Queue Sizes, Limit Request Rates, and Reduce Overheads.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Resource demand tactics control incoming workload to prevent performance degradation.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-075",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "expert",
  "points": 2,
  "question": "[SEI Software Architecture] What is the utility tree in ATAM evaluation?",
  "options": [
    {
      "id": "a",
      "text": "A top-down structure for prioritizing quality attribute requirements, branches ending in specific scenarios rated by Importance and Technical Difficulty.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A random project management framework.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A database SQL query optimizer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware cable pinout specification.",
      "isCorrect": false
    }
  ],
  "explanation": "Utility trees capture and prioritize quality attribute scenarios to focus architectural evaluation.",
  "reference": "SEI Software Architecture: Principles and Practices (3rd Edition)"
},
{
  "id": "tech-086",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] In structural engineering and NATA architectural design, what is a Tensile Structure?",
  "options": [
    {
      "id": "a",
      "text": "A structure carrying loads under tension only, such as cable-stayed roofs, fabric membrane structures, and suspension bridges.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Tensile structures use thin cables or membranes under tension to cover large spans efficiently.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-087",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is the Golden Ratio (Phi = 1.618) in architectural proportion and design theory?",
  "options": [
    {
      "id": "a",
      "text": "A mathematical ratio (approx 1:1.618) historically used in Classical Greek & Renaissance architecture to create aesthetically pleasing proportions.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "The Golden Ratio is found in the Parthenon and Renaissance architectural compositions for ideal visual balance.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-088",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is a Flying Buttress in Gothic Architectural History?",
  "options": [
    {
      "id": "a",
      "text": "A specific masonry structure extending from the upper part of a wall to a heavy pier, distributing lateral roof thrust outward and down.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Flying buttresses allowed Gothic cathedrals to feature thinner walls and tall stained glass windows.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-089",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] In Building Science and Climatology, what is Thermal Mass?",
  "options": [
    {
      "id": "a",
      "text": "The capacity of a building material (like concrete, stone, or rammed earth) to absorb, store, and slowly release heat energy.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "High thermal mass materials stabilize indoor temperatures in passive solar architectural design.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-090",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is a Truss in structural engineering for building roofs?",
  "options": [
    {
      "id": "a",
      "text": "A rigid framework of straight members joined at triangular nodes to span long distances with minimal weight.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Triangulation prevents deformation under bending and compression loads.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-091",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] In NATA spatial visualization, what is a 2-Point Perspective drawing?",
  "options": [
    {
      "id": "a",
      "text": "A linear perspective drawing where parallel horizontal lines converge toward two distinct vanishing points on the horizon line.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Two-point perspective is commonly used to render exterior building corners.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-092",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is the role of an Expansion Joint in large concrete building construction?",
  "options": [
    {
      "id": "a",
      "text": "A structural gap allowing concrete to expand and contract with temperature fluctuations without cracking adjacent elements.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Expansion joints absorb thermal expansion and seismic movement safely.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-093",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] In sustainable building design, what does Solar Heat Gain Coefficient (SHGC) measure?",
  "options": [
    {
      "id": "a",
      "text": "The fraction of incident solar radiation admitted through a window or glazing assembly.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Lower SHGC values reduce solar heat transmission and cooling loads in hot climates.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-094",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is a Cantilever in structural building design?",
  "options": [
    {
      "id": "a",
      "text": "A rigid structural beam or slab supported at only one end, extending outward with no support at the opposite end.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "Frank Lloyd Wright's Fallingwater famously utilizes bold reinforced concrete cantilevers.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-095",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[NATA Architecture] What is the primary function of a Damp Proof Course (DPC) in masonry building walls?",
  "options": [
    {
      "id": "a",
      "text": "A barrier layer of impervious material inserted into brickwork to prevent capillary rise of groundwater into living spaces.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "An electrical circuit breaker spec.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A computer memory caching algorithm.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A mobile app UI button component.",
      "isCorrect": false
    }
  ],
  "explanation": "DPC prevents rising dampness and moisture damage in building foundations.",
  "reference": "NATA (National Aptitude Test in Architecture) Syllabus & Building Science"
},
{
  "id": "tech-106",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In GATE AR Urban Planning, what is Floor Area Ratio (FAR) or Floor Space Index (FSI)?",
  "options": [
    {
      "id": "a",
      "text": "The ratio of the total built-up gross floor area of a building to the total area of the plot on which it is built.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "FAR governs urban density and maximum allowable built volume on a parcel.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-107",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In Architectural Acoustics, what is Reverberation Time (RT60)?",
  "options": [
    {
      "id": "a",
      "text": "The time required for the sound pressure level to decrease by 60 decibels after the sound source has stopped.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Sabine's formula calculates RT60 based on room volume and total sound absorption.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-108",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In GATE AR Building Construction, what is a Reinforced Cement Concrete (RCC) Shear Wall?",
  "options": [
    {
      "id": "a",
      "text": "A vertical structural element designed to resist lateral forces (wind and seismic loads) parallel to the plane of the wall.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Shear walls provide high lateral stiffness in multi-story high-rise buildings.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-109",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] What is a Transfer Girder in structural engineering of high-rise buildings?",
  "options": [
    {
      "id": "a",
      "text": "A massive structural beam that collects heavy column loads from upper floors and redirects them to wider spaced columns below.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Transfer girders create open column-free spaces on ground floors (e.g. hotel lobbies).",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-110",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In Urban Planning theory, who proposed the \"Garden City\" concept?",
  "options": [
    {
      "id": "a",
      "text": "Ebenezer Howard (1898), featuring self-contained communities surrounded by greenbelts.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Ebenezer Howard's Garden City model influenced modern suburban and urban planning.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-111",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] What is the Purpose of a Daylight Factor (DF) in architectural lighting design?",
  "options": [
    {
      "id": "a",
      "text": "The ratio of indoor illuminance at a given point to outdoor illuminance under an unobstructed sky condition.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Daylight Factor evaluates natural daylighting quality inside building spaces.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-112",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In GATE AR Environmental Planning, what is the Urban Heat Island (UHI) effect?",
  "options": [
    {
      "id": "a",
      "text": "An urban area experiencing significantly warmer temperatures than surrounding rural areas due to dark surfaces, waste heat, and reduced vegetation.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "UHI increases energy consumption and air pollution in dense cities.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-113",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In Project Management for Building Construction, what is the Critical Path Method (CPM)?",
  "options": [
    {
      "id": "a",
      "text": "A step-by-step technique for process planning that identifies the longest sequence of dependent activities determining minimum project completion time.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Activities on the critical path have zero float (slack time).",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-114",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] What is a Pre-stressed Concrete beam in bridge and large span building engineering?",
  "options": [
    {
      "id": "a",
      "text": "Concrete in which internal stresses are introduced via high-strength steel tendons prior to applying operational service loads.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "Pre-stressing counteracts tensile stresses under load, allowing longer spans with thinner profiles.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
},
{
  "id": "tech-115",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "expert",
  "points": 2,
  "question": "[GATE Architecture & Planning] In GATE AR Heritage Conservation, what is the Venice Charter (1964)?",
  "options": [
    {
      "id": "a",
      "text": "An international treaty providing a professional framework for the conservation, restoration, and preservation of historic monuments and sites.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A digital audio codec format.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A Linux terminal command.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A relational database table join.",
      "isCorrect": false
    }
  ],
  "explanation": "The Venice Charter establishes principles of authenticity and minimal intervention in architectural heritage.",
  "reference": "GATE Architecture and Planning (AR) Official Syllabus"
}
,
{
  "id": "tech-116",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In NATA architectural drawing, what is orthographic projection (Plan, Elevation, Side View)?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing nata architectural drawing, orthographic projection (plan, elevation, side view)?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-117",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the function of a Weep Hole in masonry cavity wall construction?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the function of a weep hole masonry cavity wall construction?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-118",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the difference between Load Bearing Masonry and RCC Framed Structure?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the difference between load bearing masonry and rcc framed structure?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-119",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In GATE AR Urban Design, what is a Cul-de-sac in street network planning?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing gate ar urban design, a cul-de-sac in street network planning?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-120",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the role of a Lintel Beam above window and door openings?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the role of a lintel beam above window and door openings?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-121",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the difference between One-Way Slab and Two-Way Slab in structural engineering?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the difference between one-way slab and two-way slab structural engineering?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-122",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In NATA spatial aptitude, what is Isometric vs Axonometric projection?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing nata spatial aptitude, isometric vs axonometric projection?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-123",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the function of a Parapet Wall on building roof edges?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the function of a parapet wall on building roof edges?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-124",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Shear Key in retaining wall structural design?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a shear key retaining wall structural design?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-125",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In GATE AR Acoustics, what is Noise Reduction Coefficient (NRC)?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing gate ar acoustics, noise reduction coefficient (nrc)?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-126",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Scupper in roof drainage architecture?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a scupper roof drainage architecture?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-127",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the function of a Foundation Plinth Beam?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the function of a foundation plinth beam?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-128",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In SEI Software Architecture, what is the Concurrency Tactic of Managing Thread Pools?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing sei software architecture, the concurrency tactic of managing thread pools?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-129",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the role of a Service Catalog in Platform Engineering?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the role of a service catalog platform engineering?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-130",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Deadlock in concurrent distributed database transactions?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a deadlock concurrent distributed database transactions?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-131",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In NATA Building Science, what is U-Value (Thermal Transmittance) of wall assemblies?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing nata building science, u-value (thermal transmittance) of wall assemblies?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-132",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Solarium / Sunroom in passive solar architectural design?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a solarium / sunroom passive solar architectural design?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-133",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In GATE AR, what is the role of the Master Plan in municipal town planning?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing gate ar, the role of the master plan in municipal town planning?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-134",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the difference between Riveted, Bolted, and Welded joints in structural steelwork?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the difference between riveted, bolted, and welded joints structural steelwork?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-135",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Floating Foundation / Mat Foundation in low bearing capacity soil?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a floating foundation / mat foundation low bearing capacity soil?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-136",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In SEI Software Architecture, what is the fault prevention tactic of Exception Prevention?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing sei software architecture, the fault prevention tactic of exception prevention?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-137",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Waffle Slab / Two-Way Joist System in long-span concrete floor engineering?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a waffle slab / two-way joist system long-span concrete floor engineering?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-138",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the role of a Catch Basin in urban stormwater drainage networks?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the role of a catch basin urban stormwater drainage networks?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-139",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In NATA, what is the significance of the Vitruvian Triad (Firmitas, Utilitas, Venustas)?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing nata, the significance of the vitruvian triad (firmitas, utilitas, venustas)?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-140",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Space Frame System in geodesic dome architectural engineering?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a space frame system geodesic dome architectural engineering?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-141",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In GATE AR, what is the difference between Gross Density and Net Density in housing planning?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing gate ar, the difference between gross density and net density in housing planning?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-142",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Expansion Anchor / Chemical Anchor in heavy structural fixing?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a expansion anchor / chemical anchor heavy structural fixing?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-143",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In SEI Software Architecture, what is the Security Tactic of Authenticating Users?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing sei software architecture, the security tactic of authenticating users?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-144",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Light Well / Atrium in deep floor-plan building daylighting?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a light well / atrium deep floor-plan building daylighting?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-145",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the role of a Vapor Barrier in insulated building envelope walls?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the role of a vapor barrier insulated building envelope walls?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-146",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In NATA Architectural History, what characterises Classical Order columns (Doric, Ionic, Corinthian)?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing nata architectural history, what characterises classical order columns (doric, ionic, corinthian)?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-147",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Fire Damper in HVAC ductwork building security systems?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a fire damper hvac ductwork building security systems?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-148",
  "type": "mcq",
  "domain": "sei-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] In GATE AR Building Science, what is Psychrometric Chart used for in air conditioning design?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing gate ar building science, psychrometric chart used for in air conditioning design?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-149",
  "type": "mcq",
  "domain": "nata-arch",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is a Cable-Stayed Bridge structural load distribution system?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing a cable-stayed bridge structural load distribution system?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
},
{
  "id": "tech-150",
  "type": "mcq",
  "domain": "gate-ar",
  "difficulty": "practitioner",
  "points": 2,
  "question": "[Technical Architecture Exam Track] What is the role of an Air Gap in building envelope thermal insulation?",
  "options": [
    {
      "id": "a",
      "text": "Primary standard governing the role of an air gap building envelope thermal insulation?.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A mobile app navigation bar component.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A network router IP routing table entry.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A database table primary key index.",
      "isCorrect": false
    }
  ],
  "explanation": "Core technical architecture, building engineering, or software architecture principle.",
  "reference": "NATA / GATE AR / SEI Official Examination Standard"
}
];
