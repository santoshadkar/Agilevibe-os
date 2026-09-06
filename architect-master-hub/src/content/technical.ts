import { TopicContent } from '../lib/content-types';

export const technicalTopics: TopicContent[] = [
  {
    id: 'ta-iac',
    frameworkId: 'technical',
    title: 'Infrastructure as Code: Terraform, Pulumi & Beyond',
    subtitle: 'Automating and version-controlling cloud provisioning',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'infrastructure',
    overview: 'This topic explores Infrastructure as Code (IaC) principles, focusing on declarative vs imperative approaches, Terraform state management, and GitOps workflows.',
    sections: [
      {
        id: 'sec-1',
        title: 'Principles of Infrastructure as Code',
        blocks: [
          {
            type: 'paragraph',
            content: 'Infrastructure as Code (IaC) replaces manual, click-ops provisioning via web consoles with machine-readable definition files. This brings software engineering practices—version control, testing, and CI/CD—to infrastructure. A core principle is idempotency: running the IaC script multiple times yields the same target state, regardless of the starting state. Most modern IaC tools are declarative (you define the desired end state, and the tool figures out how to get there) rather than imperative (writing scripts detailing step-by-step instructions). IaC enables immutable infrastructure, where servers are never modified in place; instead, they are replaced with new instances containing updated configurations, eliminating configuration drift.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: Never modify infrastructure managed by IaC manually via the cloud console; this creates drift and will be overwritten on the next IaC run.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Terraform and State Management',
        blocks: [
          {
            type: 'paragraph',
            content: 'HashiCorp Terraform is the industry standard for declarative IaC. It uses HCL (HashiCorp Configuration Language) and interacts with cloud APIs via Providers. The core workflow is init (download providers), plan (preview changes), and apply (execute changes). Terraform\'s most critical component is its State File (terraform.tfstate), which maps real-world resources to your configuration. Storing state locally is a severe anti-pattern for teams. Remote state storage (e.g., in an AWS S3 bucket) is required for collaboration. Crucially, remote state must include state locking (e.g., via DynamoDB) to prevent two engineers from running terraform apply simultaneously and corrupting the infrastructure.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Pulumi, CDKs, and GitOps',
        blocks: [
          {
            type: 'paragraph',
            content: 'While Terraform uses a domain-specific language, tools like Pulumi and AWS CDK allow developers to define infrastructure using general-purpose languages (TypeScript, Python, Go). This enables the use of standard IDE features, loops, and object-oriented abstractions. Regardless of the tool, mature teams execute IaC via a GitOps workflow. No human runs "apply" locally. Instead, infrastructure code is submitted as a Pull Request. CI tools (like Atlantis) automatically run policy-as-code checks (e.g., using OPA/Conftest to ensure no public S3 buckets) and post the terraform plan as a PR comment. Upon approval and merge, the CI pipeline applies the changes.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Preventing Disasters with Policy-as-Code',
            content: 'A junior developer creates a PR in Terraform adding an AWS RDS database but forgets to enable encryption. Before the PR can be merged, a Conftest (Policy-as-Code) step in the CI pipeline scans the HCL, detects the missing encryption flag, and fails the build automatically.'
          },
          {
            type: 'diagram',
            content: `
[Developer Commits Code] -> [GitHub PR] -> [CI Pipeline (Atlantis)]
                                                |
                                        [Terraform Plan] + [OPA Security Scan]
                                                |
[Team Approves PR] -------------> [Merge to Main]
                                                |
                                        [Terraform Apply] -> [AWS/Azure]
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Idempotency', definition: 'The property that an operation can be applied multiple times without changing the result beyond the initial application.' },
      { term: 'Declarative IaC', definition: 'Defining the desired end-state of infrastructure, letting the tool determine the steps to achieve it.' },
      { term: 'State File', definition: 'A file used by Terraform to map real-world resources to your configuration and track metadata.' },
      { term: 'State Locking', definition: 'A mechanism to prevent concurrent runs of IaC tools from corrupting the state file or infrastructure.' },
      { term: 'Policy-as-Code', definition: 'Writing rules in code to automatically validate infrastructure configurations for security and compliance.' }
    ],
    examTips: [
      'Understand the necessity of remote state and state locking in Terraform.',
      'Differentiate between declarative (Terraform/CloudFormation) and imperative (Bash scripts) approaches.'
    ],
    commonMistakes: [
      'Committing the terraform.tfstate file to a Git repository, which exposes secrets and breaks collaboration.',
      'Applying Terraform locally from laptops rather than through a centralized CI/CD pipeline.'
    ],
    externalResources: [
      { title: 'HashiCorp Terraform Docs', type: 'official-doc', url: 'https://developer.hashicorp.com/terraform', description: 'Official documentation', isFree: true },
      { title: 'Pulumi', type: 'official-doc', url: 'https://www.pulumi.com/', description: 'Infrastructure as code in any language', isFree: true }
    ],
    relatedTopicIds: ['ta-gitops'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Why is it critical to use a state locking mechanism (like DynamoDB with an S3 backend) when using Terraform in a team environment?',
        options: [
          { id: 'a', text: 'To encrypt the state file at rest', isCorrect: false },
          { id: 'b', text: 'To prevent multiple users from running "terraform apply" simultaneously and corrupting the infrastructure state', isCorrect: true },
          { id: 'c', text: 'To speed up the download of Terraform providers', isCorrect: false },
          { id: 'd', text: 'To automatically generate cost estimates', isCorrect: false }
        ],
        explanation: 'State locking ensures only one process can mutate the state at a time, preventing race conditions and corruption when multiple team members or CI pipelines operate concurrently.'
      },
      {
        id: 'q2',
        question: 'Which concept describes infrastructure that is replaced rather than modified in-place when updates are required?',
        options: [
          { id: 'a', text: 'Mutable Infrastructure', isCorrect: false },
          { id: 'b', text: 'Imperative Provisioning', isCorrect: false },
          { id: 'c', text: 'Immutable Infrastructure', isCorrect: true },
          { id: 'd', text: 'Configuration Drift', isCorrect: false }
        ],
        explanation: 'Immutable infrastructure dictates that servers are never updated or patched in place; instead, new instances are deployed from a common image, and old ones are destroyed.'
      }
    ]
  },
  {
    id: 'ta-kubernetes',
    frameworkId: 'technical',
    title: 'Kubernetes Architecture Deep Dive',
    subtitle: 'Container orchestration, networking, and workload management',
    estimatedMinutes: 18,
    difficulty: 'practitioner',
    domain: 'infrastructure',
    overview: 'This topic details the internals of Kubernetes (K8s), covering the control plane, worker node components, workloads, networking, and package management via Helm.',
    sections: [
      {
        id: 'sec-1',
        title: 'Control Plane and Worker Nodes',
        blocks: [
          {
            type: 'paragraph',
            content: 'Kubernetes is a declarative container orchestration platform divided into a Control Plane (the brain) and Worker Nodes (the muscles). The Control Plane consists of the kube-apiserver (the only component that communicates externally), etcd (a distributed key-value store holding cluster state), the kube-scheduler (assigns pods to nodes based on resources), and the kube-controller-manager (runs loops to maintain desired state). On the Worker Nodes, the kubelet acts as the agent communicating with the API server, the container runtime (e.g., containerd) actually runs the containers, and kube-proxy manages network rules (iptables/IPVS) to route traffic to pods.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: If etcd goes down or loses quorum, the cluster cannot be updated, though existing workloads may continue running temporarily.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Workloads and Storage',
        blocks: [
          {
            type: 'paragraph',
            content: 'The basic unit in K8s is a Pod (one or more containers sharing a network namespace). Pods are ephemeral; they are managed by higher-level controllers. A Deployment manages stateless applications, ensuring a specific number of replicas and handling rolling updates. A StatefulSet manages stateful applications (like databases), providing stable network IDs and ordered deployment. A DaemonSet ensures one pod runs on every eligible node (ideal for logging or monitoring agents). Storage is decoupled from pods using PersistentVolumes (PV) provided by the cluster and PersistentVolumeClaims (PVC) requested by the user, dynamically provisioned via StorageClasses and CSI drivers.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Networking and Helm',
        blocks: [
          {
            type: 'paragraph',
            content: 'Kubernetes networking requires every pod to have a unique IP. This is implemented via CNI (Container Network Interface) plugins like Calico or Cilium. To expose pods, K8s uses Services. A ClusterIP service provides internal load balancing. A NodePort exposes the service on a static port on every node. A LoadBalancer service provisions an external cloud load balancer. For HTTP/HTTPS routing based on URLs, an Ingress resource and Ingress Controller (like NGINX Ingress) are used. To manage complex applications with dozens of YAML files, teams use Helm, the K8s package manager. Helm uses templates and a values.yaml file to create reusable charts.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Stateful Sets for Databases',
            content: 'A team deploys MongoDB to Kubernetes. Instead of a standard Deployment, they use a StatefulSet. This guarantees that Pods are created sequentially (mongo-0, then mongo-1), giving them predictable DNS names, and attaching persistent storage so that if mongo-0 restarts, it reconnects to the exact same disk volume.'
          },
          {
            type: 'diagram',
            content: `
+-----------------------+       +------------------------+
|    Control Plane      |       |      Worker Node       |
| [kube-apiserver] <----------->| [kubelet]              |
| [etcd] [scheduler]    |       | [Container Runtime]    |
| [controller-manager]  |       | [kube-proxy]           |
+-----------------------+       +------------------------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Pod', definition: 'The smallest deployable computing unit in Kubernetes, containing one or more containers.' },
      { term: 'kube-apiserver', definition: 'The front end of the Kubernetes control plane, validating and configuring data for objects.' },
      { term: 'Deployment', definition: 'A controller that provides declarative updates for Pods and ReplicaSets, ideal for stateless apps.' },
      { term: 'Ingress', definition: 'An API object that manages external access to the services in a cluster, typically HTTP.' },
      { term: 'Helm Chart', definition: 'A collection of files that describe a related set of Kubernetes resources, acting as a package format.' }
    ],
    examTips: [
      'Know the difference between a Deployment (stateless) and a StatefulSet (stable identity/storage).',
      'Remember that etcd is the only stateful part of the control plane; back it up regularly.'
    ],
    commonMistakes: [
      'Running databases in standard Deployments, leading to data loss when pods reschedule.',
      'Exposing dozens of LoadBalancer services instead of using a single Ingress controller to save costs.'
    ],
    externalResources: [
      { title: 'Kubernetes Official Docs', type: 'official-doc', url: 'https://kubernetes.io/docs/home/', description: 'The official K8s documentation', isFree: true },
      { title: 'Helm', type: 'official-doc', url: 'https://helm.sh/', description: 'The Kubernetes Package Manager', isFree: true }
    ],
    relatedTopicIds: ['ta-iac', 'ta-gitops'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which Kubernetes control plane component is responsible for storing the cluster\'s state and configuration data?',
        options: [
          { id: 'a', text: 'kube-apiserver', isCorrect: false },
          { id: 'b', text: 'kube-scheduler', isCorrect: false },
          { id: 'c', text: 'etcd', isCorrect: true },
          { id: 'd', text: 'kube-proxy', isCorrect: false }
        ],
        explanation: 'etcd is a consistent and highly-available key value store used as Kubernetes\' backing store for all cluster data.'
      },
      {
        id: 'q2',
        question: 'If you need to run a logging agent on exactly every worker node in your cluster, which K8s workload resource should you use?',
        options: [
          { id: 'a', text: 'StatefulSet', isCorrect: false },
          { id: 'b', text: 'DaemonSet', isCorrect: true },
          { id: 'c', text: 'ReplicaSet', isCorrect: false },
          { id: 'd', text: 'CronJob', isCorrect: false }
        ],
        explanation: 'A DaemonSet ensures that all (or some) Nodes run a copy of a Pod, making it perfect for cluster-wide logging or monitoring daemons.'
      }
    ]
  },
  {
    id: 'ta-platform-engineering',
    frameworkId: 'technical',
    title: 'Platform Engineering & Internal Developer Platforms',
    subtitle: 'Treating internal platforms as products to reduce cognitive load',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'platform-eng',
    overview: 'This topic covers Platform Engineering, focusing on reducing developer cognitive load via self-service Internal Developer Platforms (IDPs) and Golden Paths.',
    sections: [
      {
        id: 'sec-1',
        title: 'Mission and Cognitive Load',
        blocks: [
          {
            type: 'paragraph',
            content: 'Modern cloud-native development requires engineers to understand Kubernetes, Terraform, CI/CD, security scanning, and observability. This creates an immense cognitive load, slowing down feature delivery. Platform Engineering emerged to solve this. The mission of a platform team is to build compelling internal products that reduce this cognitive load. By providing paved roads (or "Golden Paths"), platform teams abstract away infrastructure complexities. A developer should be able to request a new microservice environment and get a secure, monitored, and compliant repository and infrastructure pipeline within minutes via self-service, without needing to become a Kubernetes expert.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: Platform Engineering is not about enforcing mandates; it is about providing tools so good that developers willingly choose to use them.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'The Internal Developer Platform (IDP) and Backstage',
        blocks: [
          {
            type: 'paragraph',
            content: 'The realization of platform engineering is the Internal Developer Platform (IDP). An IDP acts as a unified portal for developers. Spotify open-sourced their IDP framework, Backstage, which is now a CNCF project. Backstage provides a Software Catalog (tracking who owns which microservice), TechDocs (docs like code), and a Scaffolder (templates for creating new projects). A successful IDP integrates scattered tools (Jenkins, ArgoCD, Datadog, SonarQube) into a single pane of glass, dramatically improving Developer Experience (DevEx) and speeding up onboarding for new engineers.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Platform as a Product and Team Topologies',
        blocks: [
          {
            type: 'paragraph',
            content: 'Platform teams must operate like product teams. Their customers are internal developers. They must conduct user research, maintain a roadmap, market their capabilities internally, and measure success using metrics like Net Promoter Score (NPS) and DORA metrics (deployment frequency, lead time). The book "Team Topologies" defines this structure clearly: Stream-aligned teams build business features; the Platform team builds the underlying abstractions; Enabling teams help stream-aligned teams adopt new practices; and Complicated Subsystem teams handle niche math/algorithms. The platform team\'s ultimate goal is to enable the stream-aligned teams to flow work to production smoothly.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: The Scaffolder',
            content: 'A developer needs to build a new Go microservice. Instead of copying an old repository and manually configuring CI/CD and AWS IAM roles (taking days), they go to the Backstage IDP, fill out a web form, and the "Scaffolder" automatically generates a repo with boilerplate Go code, a configured GitHub Action, and Terraform files in 2 minutes.'
          },
          {
            type: 'diagram',
            content: `
+-------------------------------------------------+
|               Stream-Aligned Teams              | (Builds features)
|   [Team A]        [Team B]        [Team C]      |
+-------------------------------------------------+
                        | (Self-service APIs/Portal)
+-------------------------------------------------+
|         Internal Developer Platform (IDP)       | (Golden Paths)
|-------------------------------------------------|
|               Platform Engineering Team         | (Builds platform)
+-------------------------------------------------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Platform Engineering', definition: 'The discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations.' },
      { term: 'Cognitive Load', definition: 'The total amount of mental effort being used in the working memory; platform engineering aims to reduce this for developers.' },
      { term: 'Internal Developer Platform (IDP)', definition: 'A self-service portal integrating tools and processes to streamline the development lifecycle.' },
      { term: 'Golden Path', definition: 'An opinionated, supported, and highly automated route to build and deploy software provided by the platform team.' },
      { term: 'DORA Metrics', definition: 'Four key metrics measuring software delivery performance: Deployment Frequency, Lead Time, MTTR, Change Failure Rate.' }
    ],
    examTips: [
      'Platform teams must treat internal developers as customers and the platform as a product.',
      'Understand the four team types in Team Topologies.'
    ],
    commonMistakes: [
      'Rebranding the traditional IT Ops team as a "Platform Team" without changing their ticket-driven, gatekeeping processes.',
      'Building a platform in isolation without consulting developers, resulting in a tool nobody wants to use.'
    ],
    externalResources: [
      { title: 'PlatformEngineering.org', type: 'article', url: 'https://platformengineering.org/', description: 'Community site for Platform Engineering', isFree: true },
      { title: 'Backstage', type: 'official-doc', url: 'https://backstage.io/', description: 'CNCF developer portal framework', isFree: true }
    ],
    relatedTopicIds: ['ta-devsecops', 'ta-kubernetes'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'What is the primary goal of Platform Engineering?',
        options: [
          { id: 'a', text: 'To force all developers to write code in a single programming language', isCorrect: false },
          { id: 'b', text: 'To reduce developer cognitive load and enable self-service delivery via an internal platform', isCorrect: true },
          { id: 'c', text: 'To manually approve and deploy all production releases to ensure security', isCorrect: false },
          { id: 'd', text: 'To manage hardware purchasing and data center leases', isCorrect: false }
        ],
        explanation: 'Platform Engineering aims to remove friction and operational overhead from developers by providing automated, self-serve "golden paths."'
      },
      {
        id: 'q2',
        question: 'According to the "Team Topologies" model, what type of team is primarily responsible for building business features for end-users?',
        options: [
          { id: 'a', text: 'Platform Team', isCorrect: false },
          { id: 'b', text: 'Enabling Team', isCorrect: false },
          { id: 'c', text: 'Stream-aligned Team', isCorrect: true },
          { id: 'd', text: 'Complicated Subsystem Team', isCorrect: false }
        ],
        explanation: 'Stream-aligned teams are cross-functional teams aligned to a single, valuable stream of work (like a product feature), supported by the other team types.'
      }
    ]
  },
  {
    id: 'ta-devsecops',
    frameworkId: 'technical',
    title: 'DevSecOps Pipeline Design',
    subtitle: 'Integrating security into the continuous delivery lifecycle',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'devsecops',
    overview: 'This topic explores how to automate security testing within CI/CD pipelines, covering SAST, DAST, SCA, container scanning, and secrets management.',
    sections: [
      {
        id: 'sec-1',
        title: 'Shifting Left: SAST and SCA',
        blocks: [
          {
            type: 'paragraph',
            content: 'The core tenet of DevSecOps is "Shifting Left"—moving security testing as early in the Software Development Life Cycle (SDLC) as possible. Finding a vulnerability in a developer\'s IDE is exponentially cheaper to fix than finding it in production. In the CI pipeline, Static Application Security Testing (SAST) tools (like SonarQube or Semgrep) scan the application source code for vulnerabilities (like SQL injection) without running the app. Simultaneously, Software Composition Analysis (SCA) tools (like Snyk or Dependabot) scan the package.json or pom.xml to identify third-party open-source libraries with known vulnerabilities (CVEs). Modern pipelines block PR merges if high-severity issues are found.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: SAST tools can generate high false-positive rates. Tuning the ruleset is critical to prevent developer alert fatigue.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'DAST and Container Security',
        blocks: [
          {
            type: 'paragraph',
            content: 'While SAST looks at source code, Dynamic Application Security Testing (DAST) tools (like OWASP ZAP) test the running application from the outside, looking for runtime vulnerabilities like cross-site scripting (XSS) or misconfigured CORS headers. As applications are containerized, image scanning becomes vital. Tools like Trivy or Grype scan Docker images in the registry to find OS-level vulnerabilities. Best practices for container security include using "distroless" base images (removing shells and package managers to reduce attack surface) and running containers as non-root users.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Secrets Management and Supply Chain Security',
        blocks: [
          {
            type: 'paragraph',
            content: 'Hardcoding secrets (API keys, passwords) in Git is a major security breach. Secrets must be injected at runtime using tools like HashiCorp Vault or AWS Secrets Manager. Vault excels by providing dynamic secrets—generating unique, short-lived database credentials on demand, meaning if leaked, they expire quickly. Furthermore, Supply Chain Security is gaining prominence. Generating a Software Bill of Materials (SBOM) provides a manifest of everything in your build. Frameworks like SLSA (Supply-chain Levels for Software Artifacts) and tools like Sigstore/Cosign ensure that built artifacts are cryptographically signed, preventing malicious tampering between the CI server and production.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: CI Pipeline Block',
            content: 'A developer updates an NPM package. The CI pipeline runs. The SCA tool (Snyk) detects that the new package version has a critical zero-day vulnerability. The CI pipeline fails the build automatically, preventing the vulnerable package from ever reaching the production environment.'
          },
          {
            type: 'diagram',
            content: `
[IDE/Git] --> [CI Build] -----> [Registry] -----> [CD Deploy] -> [Runtime]
   |             |                  |                 |              |
(Pre-commit)   (SAST/SCA)     (Image Scan)       (IaC Scan)     (DAST/RASP)
         "Shift Left" <-------------------------------------------------
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Shift Left', definition: 'Integrating testing and security practices earlier in the development lifecycle.' },
      { term: 'SAST (Static Application Security Testing)', definition: 'Analyzing source code to find security vulnerabilities without executing the program.' },
      { term: 'SCA (Software Composition Analysis)', definition: 'Identifying open source components and known security vulnerabilities within them.' },
      { term: 'DAST (Dynamic Application Security Testing)', definition: 'Analyzing a running web application from the outside to find security vulnerabilities.' },
      { term: 'SBOM (Software Bill of Materials)', definition: 'A nested inventory or list of ingredients that make up software components.' }
    ],
    examTips: [
      'SAST scans your code; SCA scans your third-party dependencies; DAST scans the running app.',
      'Know that HashiCorp Vault\'s primary advantage is dynamic, short-lived secrets.'
    ],
    commonMistakes: [
      'Implementing DAST before SAST (DAST is slower and harder to integrate into fast CI loops).',
      'Ignoring infrastructure-as-code scanning (e.g., Checkov), leading to deploying secure code onto insecure infrastructure.'
    ],
    externalResources: [
      { title: 'OWASP DevSecOps Guideline', type: 'official-doc', url: 'https://owasp.org/www-project-devsecops-guideline/', description: 'Open Web Application Security Project guide', isFree: true },
      { title: 'SLSA Framework', type: 'official-doc', url: 'https://slsa.dev/', description: 'Supply-chain Levels for Software Artifacts', isFree: true }
    ],
    relatedTopicIds: ['ta-iac'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which type of security testing tool analyzes application source code for vulnerabilities without actually executing the code?',
        options: [
          { id: 'a', text: 'DAST', isCorrect: false },
          { id: 'b', text: 'SAST', isCorrect: true },
          { id: 'c', text: 'SCA', isCorrect: false },
          { id: 'd', text: 'WAF', isCorrect: false }
        ],
        explanation: 'Static Application Security Testing (SAST) parses source code, byte code, or binaries to identify security flaws.'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of a Software Bill of Materials (SBOM)?',
        options: [
          { id: 'a', text: 'To calculate the monthly cost of cloud resources', isCorrect: false },
          { id: 'b', text: 'To list all open-source libraries and dependencies used in a software artifact to manage supply chain risks', isCorrect: true },
          { id: 'c', text: 'To document the REST API endpoints for frontend developers', isCorrect: false },
          { id: 'd', text: 'To generate dynamic database credentials', isCorrect: false }
        ],
        explanation: 'An SBOM acts as an "ingredients list" for software, allowing organizations to quickly identify if they are impacted by newly discovered vulnerabilities in third-party libraries.'
      }
    ]
  },
  {
    id: 'ta-sre',
    frameworkId: 'technical',
    title: 'Site Reliability Engineering (SRE)',
    subtitle: 'Applying software engineering principles to operations',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'devsecops',
    overview: 'This topic explains Site Reliability Engineering (SRE), covering the foundational concepts of SLOs, Error Budgets, toil reduction, and incident management.',
    sections: [
      {
        id: 'sec-1',
        title: 'SLIs, SLOs, and SLAs',
        blocks: [
          {
            type: 'paragraph',
            content: 'Site Reliability Engineering (SRE) is what happens when you ask a software engineer to design an operations team. The foundation of SRE is measuring reliability. This is done via three acronyms. A Service Level Indicator (SLI) is a carefully defined quantitative measure of some aspect of the service (e.g., HTTP 5xx error rate). A Service Level Objective (SLO) is a target value for a service level, measured by an SLI (e.g., 5xx error rate < 0.1%). A Service Level Agreement (SLA) is an explicit or implicit contract with external users that includes consequences (financial penalties) if the SLO is missed. SREs care deeply about SLOs, while lawyers care about SLAs.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: 100% reliability is the wrong target. It is too expensive and slows down feature delivery unnecessarily.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Error Budgets and Feature Velocity',
        blocks: [
          {
            type: 'paragraph',
            content: 'If an SLO targets 99.9% availability, that leaves 0.1% allowed unavailability. This 0.1% is the Error Budget (approx. 43 minutes of downtime a month). The error budget is the tool SREs use to balance reliability with feature velocity. As developers deploy new features, errors naturally occur, consuming the budget. If the budget is depleted, deployments freeze, and engineering effort shifts entirely to reliability tasks (fixing tech debt, adding tests) until the budget recovers. This creates an objective, data-driven mechanism to resolve the inherent conflict between developers (who want to ship fast) and operations (who want stability).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Toil Reduction and Incident Management',
        blocks: [
          {
            type: 'paragraph',
            content: 'A core SRE mandate is reducing "toil." Toil is manual, repetitive, automatable, tactical work devoid of enduring value (e.g., manually resetting passwords or scaling servers). Google sets a cap: SREs should spend at most 50% of their time on toil, using the rest to engineer automation to eliminate it. When systems break, SREs lead Incident Management. They establish roles (Incident Commander, Operations Lead, Communications Lead). Crucially, after an incident, they write a Blameless Postmortem. The focus is never on "who" caused the outage (e.g., "Bob ran the wrong script"), but on "what" systemic failure allowed the outage to happen (e.g., "The script lacked validation checks"), resulting in actionable preventative steps.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Blameless Postmortem',
            content: 'A junior engineer drops a production database table. In a blameless postmortem, they don\'t fire the engineer. Instead, they identify that production credentials were inadvertently available in the dev environment, and implement short-lived dynamic credentials and read-only default permissions to prevent it from happening again.'
          },
          {
            type: 'diagram',
            content: `
Target: 99.9% Uptime SLO
---------------------------------
| 100%                          |
|                               |
|        [ ERROR BUDGET ]       | (0.1% = 43 minutes/month) -> Spent on risk/deployments
|-------------------------------| (99.9%)
|                               |
|        [ EXPECTED ]           |
|        [ UPTIME   ]           |
|                               |
---------------------------------
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Site Reliability Engineering (SRE)', definition: 'A discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems.' },
      { term: 'SLO (Service Level Objective)', definition: 'An internal target value or range of values for a service level, as measured by an SLI.' },
      { term: 'Error Budget', definition: 'The allowed amount of unreliability (100% - SLO) used to balance feature velocity and system stability.' },
      { term: 'Toil', definition: 'Manual, repetitive, automatable work tied to running a production service.' },
      { term: 'Blameless Postmortem', definition: 'A review of an incident focusing on systemic causes rather than individual human error.' }
    ],
    examTips: [
      'Understand how Error Budgets dictate the balance between shipping features and focusing on reliability.',
      'Know the difference between SLI (the metric), SLO (the internal target), and SLA (the external contract).'
    ],
    commonMistakes: [
      'Aiming for 100% reliability, which severely stifles innovation and agility.',
      'Using postmortems to assign blame and punish employees, which leads to hiding future errors.'
    ],
    externalResources: [
      { title: 'Google SRE Book', type: 'book', url: 'https://sre.google/sre-book/table-of-contents/', description: 'The foundational book by Google (Free online)', isFree: true },
      { title: 'The Calculus of Service Availability', type: 'article', url: 'https://queue.acm.org/detail.cfm?id=3096419', description: 'Ben Treynor on SRE concepts', isFree: true }
    ],
    relatedTopicIds: ['ta-observability'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'In SRE terminology, what is a Service Level Objective (SLO)?',
        options: [
          { id: 'a', text: 'The financial penalty paid to a customer if the system goes down', isCorrect: false },
          { id: 'b', text: 'An internal target percentage for system reliability based on specific metrics', isCorrect: true },
          { id: 'c', text: 'The manual, repetitive work required to keep a system running', isCorrect: false },
          { id: 'd', text: 'A tool used to scan containers for vulnerabilities', isCorrect: false }
        ],
        explanation: 'An SLO is an internal target (e.g., 99.9% uptime) that the engineering team agrees to meet, driving the size of the error budget.'
      },
      {
        id: 'q2',
        question: 'What is the primary action a team should take if their Error Budget is completely depleted for the month?',
        options: [
          { id: 'a', text: 'Fire the on-call engineer', isCorrect: false },
          { id: 'b', text: 'Increase the SLA to cover the errors', isCorrect: false },
          { id: 'c', text: 'Halt new feature deployments and focus exclusively on reliability improvements', isCorrect: true },
          { id: 'd', text: 'Migrate to a different cloud provider', isCorrect: false }
        ],
        explanation: 'When the error budget is exhausted, it indicates the system is too unstable. Deployments are halted to prioritize stability work (tech debt, testing) until the budget resets.'
      }
    ]
  },
  {
    id: 'ta-gitops',
    frameworkId: 'technical',
    title: 'GitOps: ArgoCD, Flux & Pull-Based Deployments',
    subtitle: 'Using Git as the single source of truth for deployments',
    estimatedMinutes: 10,
    difficulty: 'practitioner',
    domain: 'devsecops',
    overview: 'This topic explains GitOps, focusing on the pull-based deployment model, self-healing clusters, and tools like ArgoCD and Flux in Kubernetes.',
    sections: [
      {
        id: 'sec-1',
        title: 'GitOps Principles and the Push vs. Pull Model',
        blocks: [
          {
            type: 'paragraph',
            content: 'GitOps is an operational framework that takes DevOps best practices (version control, compliance, CI/CD) and applies them to infrastructure automation. The core principle is that a Git repository is the single source of truth for the desired state of the system. In a traditional CI/CD "Push" model, a CI server (like Jenkins) builds the code and pushes it into the cluster using administrative credentials. This poses a massive security risk if the CI server is compromised. GitOps introduces a "Pull" model. An agent runs inside the cluster, continuously watches the Git repository, and pulls the desired state, applying it locally. The cluster never exposes its credentials to the outside world.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: GitOps ensures that what is running in production perfectly matches what is committed in Git, eliminating configuration drift.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'ArgoCD and Flux',
        blocks: [
          {
            type: 'paragraph',
            content: 'The two most popular GitOps controllers for Kubernetes are ArgoCD and Flux (both CNCF projects). ArgoCD provides a rich UI and models deployments using an Application CRD. It supports multi-cluster management natively. Flux operates heavily via GitOps toolkit controllers (Source controller, Kustomize controller) and is deeply integrated with the Kubernetes API. Both tools monitor Git. If a developer merges a PR changing a replica count from 3 to 5, the agent detects the change and automatically reconciles the cluster state. Crucially, they also provide self-healing: if an admin manually deletes a pod via kubectl, the agent immediately recreates it to match Git.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Progressive Delivery and GitOps for Infrastructure',
        blocks: [
          {
            type: 'paragraph',
            content: 'GitOps pairs perfectly with Progressive Delivery tools like Flagger or Argo Rollouts. Instead of updating all pods instantly, these tools read metrics (e.g., from Prometheus). If the new version shows elevated error rates, the GitOps controller automatically rolls back the change. While initially designed for Kubernetes YAML, GitOps is expanding to broader infrastructure. Projects like the Flux Terraform Controller allow teams to manage AWS/Azure infrastructure by committing Terraform files to Git, which the in-cluster agent then plans and applies, bringing GitOps security and self-healing to cloud resources.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Preventing Manual Drift',
            content: 'During an incident at 2 AM, an engineer manually edits a Kubernetes Deployment via the console to increase memory limits, but forgets to update the code repository. Ten minutes later, ArgoCD detects the cluster state has drifted from Git and automatically reverts the memory limits back, ensuring Git remains the undisputed source of truth.'
          },
          {
            type: 'diagram',
            content: `
(Traditional Push)
[Dev] -> [Git] -> [CI Server] ---(Push with Admin Creds)---> [Cluster]

(GitOps Pull)
[Dev] -> [Git] <---(Pulls/Watches)--- [GitOps Agent (ArgoCD/Flux)]
                                            | (Reconciles)
                                      [Cluster State]
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'GitOps', definition: 'An operational framework using Git as the single source of truth for declarative infrastructure and applications.' },
      { term: 'Reconciliation Loop', definition: 'The continuous process where a GitOps agent compares the actual cluster state to the desired Git state and applies changes to match them.' },
      { term: 'Pull Model', definition: 'A deployment architecture where an agent inside the environment pulls configurations from a repository, enhancing security.' },
      { term: 'Configuration Drift', definition: 'When the actual state of infrastructure diverges from the documented or defined state.' },
      { term: 'Progressive Delivery', definition: 'Advanced deployment patterns like Canaries and Blue/Green deployments, often automated by metrics.' }
    ],
    examTips: [
      'Understand the security benefits of the Pull model (cluster credentials stay inside the cluster).',
      'Remember that GitOps automatically reverts manual changes made via CLI or consoles.'
    ],
    commonMistakes: [
      'Implementing GitOps but allowing developers to bypass it and use kubectl apply manually for "emergencies".',
      'Storing unencrypted secrets (like passwords) in the GitOps repository.'
    ],
    externalResources: [
      { title: 'ArgoCD Docs', type: 'official-doc', url: 'https://argo-cd.readthedocs.io/', description: 'Official ArgoCD documentation', isFree: true },
      { title: 'Flux', type: 'official-doc', url: 'https://fluxcd.io/', description: 'The GitOps family of projects', isFree: true }
    ],
    relatedTopicIds: ['ta-kubernetes', 'ta-iac'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'What is a primary security advantage of the GitOps "Pull" deployment model over traditional "Push" CI/CD pipelines?',
        options: [
          { id: 'a', text: 'It encrypts the source code in the Git repository', isCorrect: false },
          { id: 'b', text: 'It prevents developers from committing code on weekends', isCorrect: false },
          { id: 'c', text: 'The CI server does not need administrative credentials to the production cluster', isCorrect: true },
          { id: 'd', text: 'It automatically runs SAST scans on every pull request', isCorrect: false }
        ],
        explanation: 'In the Pull model, an agent inside the cluster fetches updates from Git, meaning the external CI server cannot compromise the cluster if it is breached.'
      },
      {
        id: 'q2',
        question: 'If an administrator manually changes the replica count of a deployment via the command line in a cluster managed by a strict GitOps controller, what happens?',
        options: [
          { id: 'a', text: 'The controller automatically updates the Git repository to reflect the new count', isCorrect: false },
          { id: 'b', text: 'The controller detects the drift and reverts the cluster state back to match what is defined in Git', isCorrect: true },
          { id: 'c', text: 'The cluster throws a kernel panic', isCorrect: false },
          { id: 'd', text: 'Nothing, manual changes override GitOps tools', isCorrect: false }
        ],
        explanation: 'GitOps enforces Git as the single source of truth. Any manual drift in the cluster is automatically overwritten by the controller\'s reconciliation loop.'
      }
    ]
  },
  {
    id: 'ta-network-arch',
    frameworkId: 'technical',
    title: 'Cloud Network Architecture Patterns',
    subtitle: 'Designing secure and scalable cloud topologies',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'network-arch',
    overview: 'This topic covers foundational cloud networking concepts, including Hub-and-Spoke topologies, Transit Gateways, SD-WAN, and zero-trust principles.',
    sections: [
      {
        id: 'sec-1',
        title: 'VPC Fundamentals and Hub-and-Spoke',
        blocks: [
          {
            type: 'paragraph',
            content: 'Virtual Private Clouds (VPCs) or VNets are the foundation of cloud networking. They are logically isolated networks partitioned into Subnets (public, with direct internet access, and private, requiring NAT gateways). When enterprises scale, peering hundreds of VPCs point-to-point creates an unmanageable mesh. The Hub-and-Spoke topology solves this. A central "Hub" VPC houses shared services (DNS, security inspection, VPN/Direct Connect terminations). Workload-specific "Spoke" VPCs connect only to the hub. This centralizes security policy enforcement and drastically simplifies routing management.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: Never overlap IP CIDR blocks when designing VPCs; overlapping IPs make peering and routing virtually impossible.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Transit Gateways and SD-WAN',
        blocks: [
          {
            type: 'paragraph',
            content: 'To implement Hub-and-Spoke at scale, cloud providers offer managed routers like AWS Transit Gateway or Azure Virtual WAN. A Transit Gateway acts as a highly scalable cloud router. Instead of complex peering, thousands of VPCs and on-premises networks connect via a single attachment to the Transit Gateway, which uses route tables to manage traffic flow. Connecting branch offices to this cloud hub is increasingly done via SD-WAN (Software-Defined WAN). SD-WAN abstracts underlying connectivity (MPLS, broadband, LTE), dynamically routing traffic based on application performance, reducing reliance on expensive private MPLS circuits.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'SASE and Network Security',
        blocks: [
          {
            type: 'paragraph',
            content: 'The perimeter is disappearing due to remote work and cloud adoption. SASE (Secure Access Service Edge) converges SD-WAN with comprehensive cloud-native security services like Zero Trust Network Access (ZTNA), Cloud Access Security Brokers (CASB), and Firewall-as-a-Service (FWaaS). Instead of routing remote user traffic back to a corporate data center for inspection, SASE inspects traffic at cloud edges globally. Within the cloud VPC, security is layered: Web Application Firewalls (WAF) block L7 attacks (SQLi, XSS); Network ACLs provide stateless subnet-level boundaries; and Security Groups provide stateful, instance-level micro-segmentation.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Hub-and-Spoke Inspection',
            content: 'An enterprise wants to monitor all outbound internet traffic from its 50 AWS spoke VPCs. Instead of deploying a NAT gateway and firewall in every spoke, they route all internet-bound traffic through a Transit Gateway to a central "Security Hub" VPC, where it passes through a centralized Next-Gen Firewall cluster before exiting to the internet.'
          },
          {
            type: 'diagram',
            content: `
        [On-Premises Data Center]
                  | (Direct Connect / VPN)
                  v
          [Transit Gateway (HUB)]
           /        |        \
          /         |         \
 [Spoke VPC 1] [Spoke VPC 2] [Spoke VPC 3]
 (Prod Web)    (Dev DBs)     (Shared SVCS)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Hub-and-Spoke', definition: 'A network topology where a central hub connects to multiple spokes, routing traffic and centralizing shared services.' },
      { term: 'Transit Gateway', definition: 'A cloud-managed service acting as a regional virtual router to interconnect VPCs and on-premises networks.' },
      { term: 'SD-WAN', definition: 'Software-Defined Wide Area Network, which simplifies the management and operation of a WAN by decoupling the networking hardware from its control mechanism.' },
      { term: 'SASE (Secure Access Service Edge)', definition: 'A security framework converging SD-WAN and cloud-native security services like ZTNA and CASB.' },
      { term: 'Micro-segmentation', definition: 'A security technique that divides the network into isolated segments down to the workload level using stateful firewalls/security groups.' }
    ],
    examTips: [
      'AWS Transit Gateway and Azure Virtual WAN solve the "mesh peering complexity" problem.',
      'Differentiate between stateless Network ACLs (subnet level) and stateful Security Groups (instance level).'
    ],
    commonMistakes: [
      'Using public IP addresses for databases or internal application servers.',
      'Routing traffic back to an on-prem data center for security inspection (hairpinning) instead of inspecting in the cloud.'
    ],
    externalResources: [
      { title: 'AWS Networking Patterns', type: 'official-doc', url: 'https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/welcome.html', description: 'AWS VPC design guide', isFree: true },
      { title: 'Cloudflare SASE Guide', type: 'article', url: 'https://www.cloudflare.com/learning/access-management/what-is-sase/', description: 'Understanding SASE', isFree: true }
    ],
    relatedTopicIds: ['sa-cloud-well-architected'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which service allows you to connect thousands of VPCs and on-premises networks through a central hub, avoiding complex point-to-point peering?',
        options: [
          { id: 'a', text: 'NAT Gateway', isCorrect: false },
          { id: 'b', text: 'Internet Gateway', isCorrect: false },
          { id: 'c', text: 'Transit Gateway', isCorrect: true },
          { id: 'd', text: 'Application Load Balancer', isCorrect: false }
        ],
        explanation: 'A Transit Gateway acts as a cloud router, simplifying network architecture by allowing Hub-and-Spoke connectivity across thousands of networks.'
      },
      {
        id: 'q2',
        question: 'What is a key characteristic of a stateful Security Group compared to a stateless Network ACL?',
        options: [
          { id: 'a', text: 'It operates at the subnet level rather than the instance level', isCorrect: false },
          { id: 'b', text: 'It automatically permits return traffic for allowed inbound requests', isCorrect: true },
          { id: 'c', text: 'It can only deny traffic, not allow it', isCorrect: false },
          { id: 'd', text: 'It is used primarily for routing internet traffic', isCorrect: false }
        ],
        explanation: 'Stateful firewalls (like Security Groups) track connection state; if an inbound request is allowed, the outbound response is automatically permitted regardless of outbound rules.'
      }
    ]
  },
  {
    id: 'ta-finops',
    frameworkId: 'technical',
    title: 'FinOps: Cloud Cost Optimization Architecture',
    subtitle: 'Bringing financial accountability to the variable spend model of cloud',
    estimatedMinutes: 10,
    difficulty: 'practitioner',
    domain: 'platform-eng',
    overview: 'This topic explores FinOps, covering the culture, lifecycle phases, and specific architectural levers used to optimize cloud expenditure.',
    sections: [
      {
        id: 'sec-1',
        title: 'The FinOps Culture and Lifecycle',
        blocks: [
          {
            type: 'paragraph',
            content: 'Moving to the cloud shifts IT spending from CapEx (fixed capital hardware) to OpEx (variable operational spend). Developers can suddenly provision thousands of dollars of infrastructure with an API call. FinOps is the cultural practice of bringing financial accountability to the variable spend model of cloud, enabling engineering, finance, and business teams to collaborate on data-driven spending decisions. The FinOps lifecycle has three phases: INFORM (gaining visibility into costs and allocating them via tagging), OPTIMIZE (taking action to reduce rates and usage), and OPERATE (establishing continuous processes, culture, and automation around cost management).'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: FinOps is not just about saving money; it is about making money by ensuring every cloud dollar spent drives maximum business value.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Cost Visibility and Allocation',
        blocks: [
          {
            type: 'paragraph',
            content: 'You cannot optimize what you cannot measure. The INFORM phase relies heavily on a strict resource tagging strategy. Mandatory tags usually include Team, Environment (Dev/Prod), and Cost-Center. By enforcing tagging via IaC policies, organizations can implement Showback (showing teams what they spent) or Chargeback (actually billing business units internally for their cloud usage). Anomaly detection tools (like AWS Cost Explorer or Azure Cost Management) must be configured to alert engineering teams immediately if a deployment causes an unexpected spike in spend, rather than waiting for the monthly finance bill.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Architectural Optimization Levers',
        blocks: [
          {
            type: 'paragraph',
            content: 'Architects have multiple levers in the OPTIMIZE phase. Rate optimization involves committing to usage via Reserved Instances (RIs) or Savings Plans in exchange for massive discounts (up to 70%). Usage optimization involves right-sizing (reducing over-provisioned VMs based on metrics), auto-scaling (particularly scaling environments to zero during nights/weekends), and migrating to managed serverless services to eliminate idle time. Highly fault-tolerant workloads (like batch processing) should leverage Spot Instances, which utilize excess cloud capacity at up to 90% discount, provided the architecture can handle sudden instance termination. Finally, data lifecycle policies (moving old data to cold storage) drastically reduce S3/Blob costs.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Spot Instances for Batch',
            content: 'A media company processes thousands of image thumbnails nightly. Instead of running expensive On-Demand EC2 instances, the architect configures an Auto-Scaling Group using Spot Instances. Even though AWS occasionally reclaims the Spot instances mid-processing, the application uses an SQS queue to track work, ensuring interrupted jobs simply restart on the next available instance, saving the company 80% on compute costs.'
          },
          {
            type: 'diagram',
            content: `
The FinOps Lifecycle:
     [ INFORM ] --------> [ OPTIMIZE ]
    (Visibility)         (Action/Rates)
         ^                     |
         |                     v
         +---- [ OPERATE ] <---+
            (Culture/Automation)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'FinOps', definition: 'An evolving cloud financial management discipline and cultural practice.' },
      { term: 'Showback / Chargeback', definition: 'Methods of reporting cloud costs back to the teams responsible for them, either for visibility (showback) or internal billing (chargeback).' },
      { term: 'Savings Plans / RIs', definition: 'Commitment-based discount models where you agree to a certain amount of usage for a 1 or 3 year term.' },
      { term: 'Spot Instance', definition: 'Spare compute capacity offered at steep discounts, which can be interrupted by the cloud provider with little warning.' },
      { term: 'Right-sizing', definition: 'The process of matching instance types and sizes to workload performance and capacity requirements.' }
    ],
    examTips: [
      'Understand the three FinOps phases: Inform, Optimize, Operate.',
      'Spot instances are only viable for stateless, fault-tolerant, or batch workloads.'
    ],
    commonMistakes: [
      'Purchasing Reserved Instances for workloads that should actually be turned off (scale-to-zero) or right-sized first.',
      'Allowing untagged resources in production, making cost attribution impossible.'
    ],
    externalResources: [
      { title: 'FinOps Foundation', type: 'official-doc', url: 'https://www.finops.org/', description: 'The non-profit driving FinOps standards', isFree: true },
      { title: 'Cloud FinOps Book', type: 'book', url: 'https://www.oreilly.com/library/view/cloud-finops-2nd/9781492098267/', description: 'OReilly guide by Storment & Fuller', isFree: false }
    ],
    relatedTopicIds: ['sa-cloud-well-architected'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which FinOps practice involves presenting cloud cost data to the engineering teams responsible for generating those costs without actually billing their department budgets?',
        options: [
          { id: 'a', text: 'Chargeback', isCorrect: false },
          { id: 'b', text: 'Showback', isCorrect: true },
          { id: 'c', text: 'Right-sizing', isCorrect: false },
          { id: 'd', text: 'Amortization', isCorrect: false }
        ],
        explanation: 'Showback focuses on providing visibility and awareness of costs to teams to influence behavior, whereas Chargeback involves actual financial transfers between departments.'
      },
      {
        id: 'q2',
        question: 'What type of cloud compute pricing model offers the highest discount but requires the workload to be capable of handling sudden, unexpected termination?',
        options: [
          { id: 'a', text: 'On-Demand Instances', isCorrect: false },
          { id: 'b', text: 'Reserved Instances (1-year term)', isCorrect: false },
          { id: 'c', text: 'Savings Plans', isCorrect: false },
          { id: 'd', text: 'Spot Instances (or Preemptible VMs)', isCorrect: true }
        ],
        explanation: 'Spot Instances use spare cloud capacity and offer massive discounts, but the cloud provider can reclaim them with only a few minutes notice if demand spikes.'
      }
    ]
  }
];
