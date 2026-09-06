import { TopicContent } from '../lib/content-types';

export const solutionTopics: TopicContent[] = [
  {
    id: 'sa-microservices',
    frameworkId: 'solution',
    title: 'Microservices Architecture Patterns',
    subtitle: 'Decomposition, communication, and data management',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'design-patterns',
    overview: 'This topic details the fundamental patterns for designing and implementing microservices, covering decomposition strategies, API gateways, and anti-patterns.',
    sections: [
      {
        id: 'sec-1',
        title: 'Decomposition and Database per Service',
        blocks: [
          {
            type: 'paragraph',
            content: 'The core challenge in microservices is how to decompose a system into smaller, manageable services. Two primary patterns exist: decompose by business capability (aligning with org structure) or decompose by subdomain (using Domain-Driven Design bounded contexts). A critical rule for microservices is the "Database per Service" pattern. To ensure true loose coupling, each service must own its data and database. Services communicate only via APIs, never by reaching into another service\'s database. This allows polyglot persistence (using the best DB for the job, e.g., Neo4j for social graphs, Postgres for transactions) but introduces challenges with distributed transactions and eventual consistency.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: Sharing a database between microservices is a major anti-pattern known as a "Distributed Monolith."'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'API Gateways and Service Discovery',
        blocks: [
          {
            type: 'paragraph',
            content: 'Clients should rarely connect directly to internal microservices. The API Gateway pattern introduces a single entry point for all clients. The gateway handles request routing, composition, and edge functions like authentication, rate limiting, and SSL termination. As services scale dynamically, their IP addresses change. Service Discovery solves this via a registry (like Consul or Eureka). In client-side discovery, the client queries the registry and load-balances requests. In server-side discovery, the client calls a load balancer which then queries the registry. This dynamic routing is essential for resilient microservice architectures in cloud environments.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Migration: The Strangler Fig Pattern',
        blocks: [
          {
            type: 'paragraph',
            content: 'Migrating from a legacy monolith to microservices requires a safe strategy. The Strangler Fig pattern (coined by Martin Fowler) involves creating a new system around the edges of the old one. An API Gateway is placed in front of the monolith. Over time, functionality is extracted from the monolith into new microservices. The gateway is updated to route traffic for that specific function to the new service instead of the monolith. This incremental approach reduces risk compared to a "big bang" rewrite. Eventually, the new services "strangle" the monolith, which can then be safely decommissioned.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: E-commerce Migration',
            content: 'An e-commerce site places an Nginx gateway in front of their monolithic app. They build a new "Inventory Service" in Go. They configure Nginx to route all /api/inventory requests to the new service, while all other requests continue to the monolith. They repeat this for checkout, user profiles, etc.'
          },
          {
            type: 'diagram',
            content: `
[Client] ---> [API Gateway] ---> [Monolith (Legacy)]
                   |
                   +-----------> [New Microservice 1]
                   |
                   +-----------> [New Microservice 2]
(Gateway gradually routes more traffic to new services)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Bounded Context', definition: 'A boundary within a domain where a particular domain model applies, used to define microservice boundaries.' },
      { term: 'Database per Service', definition: 'An architectural pattern where each microservice manages its own separate database.' },
      { term: 'API Gateway', definition: 'A server that acts as an API front-end, receiving API requests, enforcing throttling and security policies, passing requests to back-end services.' },
      { term: 'Strangler Fig Pattern', definition: 'A technique to incrementally migrate a legacy system by gradually replacing specific pieces of functionality with new applications and services.' },
      { term: 'Polyglot Persistence', definition: 'Using different database technologies to handle varying data storage needs across microservices.' }
    ],
    examTips: [
      'Understand why shared databases defeat the purpose of microservices (coupling).',
      'Know that API Gateways handle cross-cutting concerns like auth and rate limiting.'
    ],
    commonMistakes: [
      'Creating granular services without addressing distributed data management.',
      'Failing to implement an API gateway, exposing internal service topology to external clients.'
    ],
    externalResources: [
      { title: 'Microservices.io', type: 'article', url: 'https://microservices.io/', description: 'Chris Richardsons comprehensive pattern catalog', isFree: true },
      { title: 'Building Microservices', type: 'book', url: 'https://samnewman.io/books/building_microservices_2nd_edition/', description: 'Sam Newmans foundational book', isFree: false }
    ],
    relatedTopicIds: ['sa-event-driven'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which pattern describes the incremental migration of a monolithic application to microservices by routing specific traffic to new services?',
        options: [
          { id: 'a', text: 'Circuit Breaker', isCorrect: false },
          { id: 'b', text: 'Strangler Fig', isCorrect: true },
          { id: 'c', text: 'Event Sourcing', isCorrect: false },
          { id: 'd', text: 'Bulkhead', isCorrect: false }
        ],
        explanation: 'The Strangler Fig pattern allows for gradual replacement of a monolith by intercepting traffic at a gateway and routing it to newly extracted microservices.'
      },
      {
        id: 'q2',
        question: 'What is a major consequence of adopting the "Database per Service" pattern?',
        options: [
          { id: 'a', text: 'It becomes impossible to backup data', isCorrect: false },
          { id: 'b', text: 'It enforces strict ACID transactions across all services', isCorrect: false },
          { id: 'c', text: 'It necessitates dealing with eventual consistency and distributed transactions', isCorrect: true },
          { id: 'd', text: 'It reduces the total number of databases to one', isCorrect: false }
        ],
        explanation: 'When each service owns its data, traditional SQL JOINs across services are impossible, requiring architectures to rely on eventual consistency mechanisms like Sagas.'
      }
    ]
  },
  {
    id: 'sa-event-driven',
    frameworkId: 'solution',
    title: 'Event-Driven Architecture: CQRS, Saga & Event Sourcing',
    subtitle: 'Managing state and consistency in distributed systems',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'design-patterns',
    overview: 'This topic explores complex distributed patterns required when moving away from monolithic databases, focusing on events, Sagas, CQRS, and Event Sourcing.',
    sections: [
      {
        id: 'sec-1',
        title: 'Event Sourcing and CQRS',
        blocks: [
          {
            type: 'paragraph',
            content: 'In highly distributed systems, traditional CRUD operations can lose context. Event Sourcing solves this by storing the state of a system as a sequence of immutable events (e.g., "ItemAddedToCart", "OrderPlaced"). The current state is derived by replaying these events. This provides a perfect audit log and temporal decoupling. However, querying an event store is inefficient. This leads to Command Query Responsibility Segregation (CQRS). CQRS separates the write model (commands emitting events) from the read model (queries). An event handler listens to the event stream and updates a materialized view (read database) optimized for fast querying. While highly scalable, CQRS introduces eventual consistency.'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: Event Sourcing and CQRS add significant complexity. Only use them where the domain complexity or scale justifies the overhead.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Managing Distributed Transactions: The Saga Pattern',
        blocks: [
          {
            type: 'paragraph',
            content: 'Since microservices use a database-per-service, traditional two-phase commit (2PC) transactions across services are anti-patterns due to locking and performance issues. The Saga pattern manages distributed transactions through a sequence of local transactions. If one local transaction fails, the Saga executes compensating transactions to undo the previous steps. Sagas can be implemented via Choreography (services emit events and other services react, decentralized) or Orchestration (a central coordinator service dictates the steps). Orchestration is generally preferred for complex workflows to avoid tangled, hard-to-debug event chains.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'The Outbox Pattern',
        blocks: [
          {
            type: 'paragraph',
            content: 'A critical problem in Event-Driven Architecture is the "dual-write" problem: how do you reliably update your local database and publish an event to a broker (like Kafka) simultaneously? If one succeeds and the other fails, the system is inconsistent. The Transactional Outbox pattern solves this. Instead of directly publishing the event, the service writes the business data AND an event record into a local "Outbox" table within the same database transaction. A separate process (like Debezium for Change Data Capture) then continuously reads the Outbox table and reliably publishes the events to the message broker. This guarantees at-least-once delivery.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Flight Booking Saga',
            content: 'A travel app uses an Orchestrated Saga to book a trip. The coordinator calls the Flight Service (success), then the Hotel Service (fails - fully booked). The coordinator then fires a compensating transaction to the Flight Service to cancel the flight, ensuring the user isn\'t left with just a flight and no hotel.'
          },
          {
            type: 'diagram',
            content: `
[Command] -> [Write API] -> [Event Store (Append Only)]
                                  |
                                  v (Event Publisher)
                             [Message Broker]
                                  |
                                  v (Event Handler)
[Query] <--- [Read API] <--- [Read Database (Materialized View)]
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Event Sourcing', definition: 'A pattern where the state of an entity is maintained as a sequence of state-changing events.' },
      { term: 'CQRS', definition: 'Command Query Responsibility Segregation; separating the data modification models from the data reading models.' },
      { term: 'Saga Pattern', definition: 'A mechanism to maintain data consistency across microservices using a sequence of local transactions and compensating transactions.' },
      { term: 'Choreography', definition: 'A decentralized Saga implementation where services react to events without a central controller.' },
      { term: 'Outbox Pattern', definition: 'A pattern to reliably publish events by storing them in a local database table within the same transaction as the business data.' }
    ],
    examTips: [
      'Associate CQRS with read/write segregation and Event Sourcing with immutable event logs.',
      'Know the Outbox pattern solves the dual-write problem.'
    ],
    commonMistakes: [
      'Using 2PC (Two-Phase Commit) for distributed transactions in microservices instead of Sagas.',
      'Applying CQRS to simple CRUD applications where a single model suffices.'
    ],
    externalResources: [
      { title: 'Martin Fowler on Event Sourcing', type: 'article', url: 'https://martinfowler.com/eaaDev/EventSourcing.html', description: 'Detailed breakdown of the pattern', isFree: true },
      { title: 'Confluent EDA Guide', type: 'official-doc', url: 'https://developer.confluent.io/learn-kafka/architecture/index/', description: 'Event-driven architecture with Kafka', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which pattern ensures that writing to a local database and publishing an event to a message broker are both executed reliably without risking a dual-write failure?',
        options: [
          { id: 'a', text: 'Saga Orchestration', isCorrect: false },
          { id: 'b', text: 'Transactional Outbox', isCorrect: true },
          { id: 'c', text: 'CQRS', isCorrect: false },
          { id: 'd', text: 'Event Sourcing', isCorrect: false }
        ],
        explanation: 'The Transactional Outbox pattern writes the event to a local database table in the same transaction as the business data, ensuring atomicity before a separate process publishes the event.'
      },
      {
        id: 'q2',
        question: 'If a distributed transaction fails halfway through in a microservices architecture, what mechanism is used to revert the already successful steps?',
        options: [
          { id: 'a', text: 'Two-Phase Commit (2PC) rollback', isCorrect: false },
          { id: 'b', text: 'Database cascading deletes', isCorrect: false },
          { id: 'c', text: 'Compensating transactions in a Saga', isCorrect: true },
          { id: 'd', text: 'Cache invalidation', isCorrect: false }
        ],
        explanation: 'Sagas manage failures by executing compensating transactions, which are distinct operations designed to undo the semantic effects of previous successful local transactions.'
      }
    ]
  },
  {
    id: 'sa-cloud-well-architected',
    frameworkId: 'solution',
    title: 'Cloud Well-Architected Framework',
    subtitle: 'Best practices for designing cloud infrastructure',
    estimatedMinutes: 15,
    difficulty: 'practitioner',
    domain: 'cloud-architecture',
    overview: 'This topic covers the standard Well-Architected Frameworks provided by major cloud vendors to ensure secure, high-performing, resilient, and efficient infrastructure.',
    sections: [
      {
        id: 'sec-1',
        title: 'The Six Pillars of Well-Architected',
        blocks: [
          {
            type: 'paragraph',
            content: 'The major cloud providers (AWS, Azure, GCP) rely on variations of the Well-Architected Framework. AWS defines six pillars: Operational Excellence (running and monitoring systems), Security (protecting information and systems), Reliability (recovering from disruptions), Performance Efficiency (using resources optimally), Cost Optimization (avoiding unnecessary costs), and Sustainability (minimizing environmental impact). Azure and GCP have nearly identical pillars. These frameworks are not just theoretical; they provide specific design principles and questions to evaluate an architecture against best practices. They emphasize that cloud architecture is about making deliberate trade-offs.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: You cannot optimize for all pillars simultaneously. Trade-offs (e.g., Cost vs Reliability) are inherent in every design.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Deep Dive: Reliability and Security',
        blocks: [
          {
            type: 'paragraph',
            content: 'The Reliability pillar focuses on ensuring a workload performs its intended function correctly and consistently. Design principles include automatically recovering from failure (auto-scaling, self-healing), testing recovery procedures (chaos engineering), and scaling horizontally to increase aggregate workload availability. The Security pillar focuses on protecting data, systems, and assets. Principles include applying security at all layers (defense in depth), automating security best practices (IaC scanning), protecting data in transit and at rest, and adhering to the principle of least privilege using Identity and Access Management (IAM).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Conducting a Well-Architected Review',
        blocks: [
          {
            type: 'paragraph',
            content: 'A Well-Architected Review (WAR) is a structured assessment of a workload against the framework. It is typically conducted as a blameless workshop with stakeholders from architecture, operations, security, and business. Cloud providers offer tools (like the AWS Well-Architected Tool) to facilitate this. The outcome of a review is not an audit score, but a prioritized list of High-Risk Issues (HRIs) and Medium-Risk Issues (MRIs) along with a remediation roadmap. Regular reviews ensure architectures evolve as new cloud services are released and business requirements change.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Cost vs Performance Trade-off',
            content: 'During a WAR, an architect finds a database over-provisioned to handle peak load that only occurs 1 hour a day. They trade slight performance latency during scale-up for cost optimization by migrating to a Serverless database that scales automatically, eliminating idle compute costs.'
          },
          {
            type: 'diagram',
            content: `
+-------------------------------------------------+
|               Cloud Workload                    |
+----+--------+-------+---------+------+----------+
|Ops |Security| Reliab| Perform | Cost | Sustain. |
|Exce|        | ility | Effic.  | Opt. |          |
+----+--------+-------+---------+------+----------+
(The 6 Pillars supporting the workload)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Well-Architected Framework', definition: 'A set of best practices for designing and operating reliable, secure, efficient, and cost-effective systems in the cloud.' },
      { term: 'Operational Excellence', definition: 'The pillar focusing on running and monitoring systems to deliver business value and continually improving processes.' },
      { term: 'Principle of Least Privilege', definition: 'A security principle ensuring users and systems have only the minimum access rights necessary.' },
      { term: 'Horizontal Scaling', definition: 'Increasing capacity by adding more instances (scale-out) rather than upgrading a single instance (scale-up).' },
      { term: 'High-Risk Issue (HRI)', definition: 'An architectural flaw identified during a review that significantly impacts the workload or business.' }
    ],
    examTips: [
      'Memorize the six pillars of the AWS Well-Architected Framework.',
      'Understand that Well-Architected is about continuous improvement, not a one-time audit.'
    ],
    commonMistakes: [
      'Assuming lifting-and-shifting a data center app automatically makes it Well-Architected.',
      'Ignoring the Sustainability pillar, which is increasingly mandated by corporate ESG goals.'
    ],
    externalResources: [
      { title: 'AWS Well-Architected', type: 'official-doc', url: 'https://aws.amazon.com/architecture/well-architected/', description: 'The official AWS framework site', isFree: true },
      { title: 'Azure Well-Architected', type: 'official-doc', url: 'https://learn.microsoft.com/en-us/azure/well-architected/', description: 'Microsofts framework documentation', isFree: true }
    ],
    relatedTopicIds: ['sa-nfr-design'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which pillar of the Well-Architected Framework includes the practice of "Chaos Engineering" to test how systems handle failure?',
        options: [
          { id: 'a', text: 'Operational Excellence', isCorrect: false },
          { id: 'b', text: 'Reliability', isCorrect: true },
          { id: 'c', text: 'Security', isCorrect: false },
          { id: 'd', text: 'Performance Efficiency', isCorrect: false }
        ],
        explanation: 'Testing recovery procedures and intentionally injecting failures (Chaos Engineering) is a core design principle of the Reliability pillar.'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of conducting a Well-Architected Review?',
        options: [
          { id: 'a', text: 'To generate a compliance certification for external auditors', isCorrect: false },
          { id: 'b', text: 'To identify architectural risks and create a prioritized remediation plan', isCorrect: true },
          { id: 'c', text: 'To calculate the exact monthly billing cost of the workload', isCorrect: false },
          { id: 'd', text: 'To automatically provision cloud infrastructure', isCorrect: false }
        ],
        explanation: 'A review is a conversational, blameless process designed to uncover risks against best practices and plan for their remediation.'
      }
    ]
  },
  {
    id: 'sa-api-design',
    frameworkId: 'solution',
    title: 'API Design: REST, GraphQL & gRPC',
    subtitle: 'Choosing the right API paradigm',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'design-patterns',
    overview: 'This topic compares the three dominant API design paradigms—REST, GraphQL, and gRPC—highlighting their optimal use cases and best practices.',
    sections: [
      {
        id: 'sec-1',
        title: 'REST API Best Practices',
        blocks: [
          {
            type: 'paragraph',
            content: 'REST (Representational State Transfer) is the standard for web APIs. It relies on stateless communication, resource-based URLs (e.g., /users/123/orders), and standard HTTP methods (GET, POST, PUT, DELETE, PATCH). Best practices dictate using plural nouns for resources, versioning APIs (typically via URL like /v1/ or via Accept headers), and implementing cursor-based pagination for large datasets (offset pagination degrades at scale). Mature REST APIs implement HATEOAS (Hypermedia as the Engine of Application State), returning links to related actions in the response, allowing clients to navigate the API dynamically (Richardson Maturity Model Level 3).'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: Always use standard HTTP status codes (2xx success, 4xx client error, 5xx server error) to communicate outcomes clearly.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'GraphQL and the N+1 Problem',
        blocks: [
          {
            type: 'paragraph',
            content: 'GraphQL, developed by Facebook, allows clients to specify exactly what data they need, solving the over-fetching and under-fetching problems common in REST. It uses a strong schema and exposes a single endpoint. Operations are divided into Queries (reads), Mutations (writes), and Subscriptions (real-time updates). A common pitfall in GraphQL is the N+1 problem: fetching a list of authors (1 query), then naively triggering a database query for each author\'s books (N queries). This is typically solved using the DataLoader pattern, which batches and caches requests to the database.'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'gRPC and the BFF Pattern',
        blocks: [
          {
            type: 'paragraph',
            content: 'gRPC is a high-performance framework developed by Google. It uses Protocol Buffers (protobuf) to define a strict schema and serializes data into a compact binary format, making it much faster than JSON-based REST. It operates over HTTP/2, enabling unary, client-streaming, server-streaming, and bidirectional streaming. gRPC is ideal for internal microservice-to-microservice communication. When serving diverse external clients (mobile vs web), architects often employ the Backend for Frontend (BFF) pattern. Instead of a one-size-fits-all API, specific BFF services are created (e.g., a Mobile BFF returning optimized GraphQL, and a Web BFF returning robust REST).'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: API Strategy',
            content: 'A ride-sharing app uses gRPC for high-speed, low-latency communication between its internal Pricing and Dispatch microservices. However, for the mobile app, it uses a GraphQL API Gateway (acting as a BFF) so the mobile client can fetch driver details, car location, and pricing in a single network request over slow cellular networks.'
          },
          {
            type: 'diagram',
            content: `
[Mobile App] --(GraphQL)--> [Mobile BFF] --(gRPC)--> [Internal Microservice]
                                                        |
[Web Browser] --(REST)----> [Web BFF]    --(gRPC)-------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'REST', definition: 'An architectural style for network-based software using standard HTTP verbs and resource URIs.' },
      { term: 'GraphQL', definition: 'A query language for APIs that allows clients to request exactly the data they need.' },
      { term: 'gRPC', definition: 'A high-performance RPC framework using HTTP/2 and Protocol Buffers.' },
      { term: 'HATEOAS', definition: 'A constraint of REST where responses include hypermedia links to guide the client on available actions.' },
      { term: 'BFF (Backend for Frontend)', definition: 'A pattern where a specific backend API is created to serve a specific type of user interface or client.' }
    ],
    examTips: [
      'gRPC is best for internal service-to-service; GraphQL is best for flexible UI clients.',
      'Know that DataLoader is the standard solution for the GraphQL N+1 problem.'
    ],
    commonMistakes: [
      'Using verbs in REST URLs (e.g., /getUser/123 instead of GET /users/123).',
      'Exposing internal gRPC services directly to web browsers without a proxy like gRPC-Web or a BFF.'
    ],
    externalResources: [
      { title: 'GraphQL.org', type: 'official-doc', url: 'https://graphql.org/', description: 'Official GraphQL documentation', isFree: true },
      { title: 'gRPC.io', type: 'official-doc', url: 'https://grpc.io/', description: 'Official gRPC documentation', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which API technology is specifically designed to allow clients to ask for exactly what data they need, mitigating over-fetching?',
        options: [
          { id: 'a', text: 'REST', isCorrect: false },
          { id: 'b', text: 'SOAP', isCorrect: false },
          { id: 'c', text: 'GraphQL', isCorrect: true },
          { id: 'd', text: 'gRPC', isCorrect: false }
        ],
        explanation: 'GraphQL allows the client to define the structure of the response, fetching only the required fields.'
      },
      {
        id: 'q2',
        question: 'What data serialization format does gRPC use by default to achieve high performance?',
        options: [
          { id: 'a', text: 'JSON', isCorrect: false },
          { id: 'b', text: 'XML', isCorrect: false },
          { id: 'c', text: 'Protocol Buffers (protobuf)', isCorrect: true },
          { id: 'd', text: 'YAML', isCorrect: false }
        ],
        explanation: 'gRPC uses Protocol Buffers, a strongly typed binary serialization format, which is much smaller and faster to parse than text-based formats like JSON.'
      }
    ]
  },
  {
    id: 'sa-integration-patterns',
    frameworkId: 'solution',
    title: 'Integration Patterns: ESB, Service Mesh & Kafka',
    subtitle: 'Connecting disparate systems reliably',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'integration',
    overview: 'This topic covers enterprise integration patterns, contrasting traditional Enterprise Service Buses (ESB) with modern event streaming (Kafka) and Service Meshes.',
    sections: [
      {
        id: 'sec-1',
        title: 'Enterprise Service Bus (ESB)',
        blocks: [
          {
            type: 'paragraph',
            content: 'In legacy architectures, integrating dozens of systems point-to-point created a fragile "spaghetti" network. The Enterprise Service Bus (ESB) pattern solved this using a hub-and-spoke model. Systems connect to the ESB, which handles mediation, message routing, and data transformation (e.g., XML to JSON). Products like MuleSoft or IBM MQ excel here. However, ESBs often became monolithic bottlenecks, where too much business logic (smart pipes) was placed in the centralized bus, violating the microservices principle of "smart endpoints and dumb pipes."'
          },
          {
            type: 'callout',
            calloutType: 'warning',
            content: 'Warning: Avoid putting business logic in the integration layer; keep it in the services.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Event Streaming with Kafka',
        blocks: [
          {
            type: 'paragraph',
            content: 'For modern, high-throughput integration, event streaming platforms like Apache Kafka are dominant. Kafka uses a pub/sub model but stores events durably in an immutable append-only log. Producers publish to Topics, which are split into Partitions for scalability. Consumer Groups read from partitions, maintaining an Offset to track their position. This decoupled nature allows multiple independent systems to react to the same event at their own pace. Common integration patterns here include the Scatter-Gather, Dead-Letter Queues (for handling poison messages), and the Idempotent Consumer (safely handling duplicate messages).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'The Service Mesh',
        blocks: [
          {
            type: 'paragraph',
            content: 'While Kafka handles asynchronous business events, synchronous microservice communication requires a Service Mesh (e.g., Istio, Linkerd). A service mesh deploys a "sidecar" proxy container alongside every microservice. The microservice talks to the local proxy, and the proxy handles the complex network logistics: mutual TLS (mTLS) encryption, retries, circuit breaking, and distributed tracing. The control plane manages all the proxies. A service mesh abstracts network integration away from the application code, allowing developers to focus on business logic while ops teams secure and observe the network.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Applying the right pattern',
            content: 'An enterprise uses MuleSoft (ESB) to connect their legacy SAP system to Salesforce. They use Kafka to stream clickstream data from their website to their analytics warehouse. They use Istio (Service Mesh) to manage the secure mTLS traffic between their 50 internal Kubernetes microservices.'
          },
          {
            type: 'diagram',
            content: `
[Service A] <--- (Local Call) ---> [Sidecar Proxy] 
                                         |
                                (mTLS / Circuit Break)
                                         |
[Service B] <--- (Local Call) ---> [Sidecar Proxy]
(Service Mesh Architecture)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'ESB (Enterprise Service Bus)', definition: 'A centralized software architecture model used for designing and implementing communication between mutually interacting software applications.' },
      { term: 'Service Mesh', definition: 'A dedicated infrastructure layer for facilitating service-to-service communications between microservices, using sidecar proxies.' },
      { term: 'Kafka Topic', definition: 'A category or feed name to which records are published in Kafka.' },
      { term: 'Dead-Letter Queue (DLQ)', definition: 'A service implementation to store messages that cannot be processed successfully after retries.' },
      { term: 'Idempotency', definition: 'The property of certain operations that they can be applied multiple times without changing the result beyond the initial application.' }
    ],
    examTips: [
      'ESB = Centralized routing/transformation; Kafka = Asynchronous event streaming; Service Mesh = Synchronous microservice networking.',
      'Remember "smart endpoints, dumb pipes" as a core microservice design rule.'
    ],
    commonMistakes: [
      'Using an ESB for microservice-to-microservice communication (creates a bottleneck).',
      'Failing to make consumers idempotent when using Kafka, leading to data corruption on duplicate delivery.'
    ],
    externalResources: [
      { title: 'Apache Kafka', type: 'official-doc', url: 'https://kafka.apache.org/', description: 'Official Kafka documentation', isFree: true },
      { title: 'Enterprise Integration Patterns', type: 'book', url: 'https://www.enterpriseintegrationpatterns.com/', description: 'Gregor Hohpes foundational pattern catalog', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which technology utilizes the "sidecar" pattern to abstract network routing, security, and observability away from application code?',
        options: [
          { id: 'a', text: 'Enterprise Service Bus', isCorrect: false },
          { id: 'b', text: 'Apache Kafka', isCorrect: false },
          { id: 'c', text: 'Service Mesh', isCorrect: true },
          { id: 'd', text: 'API Gateway', isCorrect: false }
        ],
        explanation: 'A Service Mesh (like Istio) deploys sidecar proxies next to application containers to manage network traffic without requiring code changes in the app.'
      },
      {
        id: 'q2',
        question: 'What pattern is used to handle messages that consistently fail to process after multiple retries?',
        options: [
          { id: 'a', text: 'Scatter-Gather', isCorrect: false },
          { id: 'b', text: 'Dead-Letter Queue (DLQ)', isCorrect: true },
          { id: 'c', text: 'Circuit Breaker', isCorrect: false },
          { id: 'd', text: 'Event Sourcing', isCorrect: false }
        ],
        explanation: 'A Dead-Letter Queue is a designated queue where unprocessable (poison) messages are routed so they don\'t block the processing of subsequent valid messages.'
      }
    ]
  },
  {
    id: 'sa-nfr-design',
    frameworkId: 'solution',
    title: 'Designing for NFRs: Resilience, Scalability & Performance',
    subtitle: 'Building systems that survive scale and failure',
    estimatedMinutes: 12,
    difficulty: 'practitioner',
    domain: 'nfr',
    overview: 'This topic addresses Non-Functional Requirements (NFRs), specifically focusing on architectural patterns that guarantee resilience and scalability under load.',
    sections: [
      {
        id: 'sec-1',
        title: 'Availability, SLAs, and the CAP Theorem',
        blocks: [
          {
            type: 'paragraph',
            content: 'Non-Functional Requirements dictate how a system operates rather than what it does. Availability is often measured in "nines" (e.g., 99.9% uptime). This is codified in an SLA (Service Level Agreement - the contract), monitored via SLIs (Indicators - the metrics), and targeted by SLOs (Objectives - internal goals). When designing distributed data systems, architects must navigate the CAP Theorem: a system can only guarantee two of Consistency, Availability, and Partition Tolerance. Because network partitions (P) are inevitable in the cloud, architects must choose between Consistency (CP - wait for nodes to sync, risking availability) or Availability (AP - return local data immediately, risking eventual consistency).'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: You cannot cheat the CAP theorem in a distributed system. Acknowledge partitions and design for either C or A.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Resilience Patterns',
        blocks: [
          {
            type: 'paragraph',
            content: 'Systems will fail; architecture must ensure graceful degradation. The Circuit Breaker pattern prevents a system from repeatedly trying to execute an operation likely to fail (e.g., calling a downed service). It trips open, returning instant errors, giving the failing service time to recover. The Retry pattern should always be paired with Exponential Backoff and Jitter to avoid accidental self-inflicted DDoS attacks during recovery. The Bulkhead pattern isolates elements of an application into pools so that if one fails, the others continue functioning (like watertight compartments in a ship).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Scalability Strategies',
        blocks: [
          {
            type: 'paragraph',
            content: 'Scalability can be vertical (scaling up - bigger instances) or horizontal (scaling out - more instances). Cloud architecture favors horizontal scaling. To achieve this, compute workloads must be stateless; user session data should be stored externally in a cache (like Redis). Database scalability is harder. Read-heavy workloads benefit from Read Replicas (offloading queries from the primary node). Write-heavy workloads may require Sharding (partitioning data across multiple databases based on a shard key). Disaster recovery relies on two metrics: RTO (Recovery Time Objective - how fast you must recover) and RPO (Recovery Point Objective - how much data you can afford to lose).'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Applying Resilience',
            content: 'A video streaming service uses a Circuit Breaker on its recommendation engine. If the engine goes down, the circuit trips. Instead of timing out and crashing the homepage, the application falls back to returning a static, cached list of "Top 10 Popular Movies" until the engine recovers.'
          },
          {
            type: 'diagram',
            content: `
[Service A] ---> [Circuit Breaker (CLOSED)] ---> [Service B (Healthy)]

[Service A] ---> [Circuit Breaker (OPEN)] --X--> [Service B (Down)]
                      |
                      +---> (Returns Fallback Data instantly)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'CAP Theorem', definition: 'States that a distributed data store cannot simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition Tolerance.' },
      { term: 'Circuit Breaker', definition: 'A design pattern used to detect failures and encapsulate the logic of preventing a failure from constantly recurring.' },
      { term: 'Bulkhead', definition: 'A pattern that isolates application elements into separate pools to prevent a failure in one from cascading to others.' },
      { term: 'Stateless Architecture', definition: 'An architectural design where no client session data is stored on the server, enabling horizontal scaling.' },
      { term: 'RTO / RPO', definition: 'Recovery Time Objective (allowed downtime) and Recovery Point Objective (allowed data loss).' }
    ],
    examTips: [
      'Understand the difference between SLA (external contract) and SLO (internal target).',
      'Never implement retries without exponential backoff and jitter.'
    ],
    commonMistakes: [
      'Storing session state in memory on a web server, breaking horizontal auto-scaling.',
      'Assuming network calls are reliable and fast (the fallacies of distributed computing).'
    ],
    externalResources: [
      { title: 'Release It!', type: 'book', url: 'https://pragprog.com/titles/mnee2/release-it-second-edition/', description: 'Michael Nygards book on resilience', isFree: false },
      { title: 'AWS Fault Isolation', type: 'article', url: 'https://aws.amazon.com/builders-library/fault-isolation-boundaries/', description: 'AWS Builders Library on Bulkheads', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which resilience pattern prevents a service from repeatedly calling a downstream dependency that is known to be failing?',
        options: [
          { id: 'a', text: 'Bulkhead', isCorrect: false },
          { id: 'b', text: 'Circuit Breaker', isCorrect: true },
          { id: 'c', text: 'Saga', isCorrect: false },
          { id: 'd', text: 'Load Balancer', isCorrect: false }
        ],
        explanation: 'A Circuit Breaker detects downstream failures and trips "open", immediately returning an error or fallback response to prevent resource exhaustion.'
      },
      {
        id: 'q2',
        question: 'In the context of disaster recovery, what does RPO (Recovery Point Objective) measure?',
        options: [
          { id: 'a', text: 'The maximum allowable time a system can be down', isCorrect: false },
          { id: 'b', text: 'The percentage of requests that must succeed', isCorrect: false },
          { id: 'c', text: 'The maximum acceptable amount of data loss measured in time', isCorrect: true },
          { id: 'd', text: 'The number of database read replicas required', isCorrect: false }
        ],
        explanation: 'RPO dictates how far back in time data might be lost after a disaster. An RPO of 1 hour means backups must happen at least hourly.'
      }
    ]
  },
  {
    id: 'sa-observability',
    frameworkId: 'solution',
    title: 'Observability Architecture',
    subtitle: 'Understanding system state via logs, metrics, and traces',
    estimatedMinutes: 10,
    difficulty: 'practitioner',
    domain: 'nfr',
    overview: 'This topic explores the transition from traditional monitoring to modern observability, focusing on the three pillars: logs, metrics, and distributed tracing.',
    sections: [
      {
        id: 'sec-1',
        title: 'Monitoring vs. Observability and the Three Pillars',
        blocks: [
          {
            type: 'paragraph',
            content: 'Monitoring tells you if a system is working (knowing the known unknowns). Observability lets you ask arbitrary questions about why a system isn\'t working (exploring the unknown unknowns). Observability is built on three pillars. Logs provide discrete event records (what happened). Metrics provide numerical aggregations over time (how much/how fast). Traces track a single request as it traverses multiple distributed services (where it went). A mature observability architecture correlates these three pillars, allowing an engineer to see a spike in a metric, drill down into the trace for that time period, and view the specific logs attached to the slow span in the trace.'
          },
          {
            type: 'callout',
            calloutType: 'tip',
            content: 'Tip: Always use structured logging (JSON format). It allows centralized log aggregators to parse and query log fields efficiently.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'Metrics and the Golden Signals',
        blocks: [
          {
            type: 'paragraph',
            content: 'Metrics are highly efficient to store and query. The standard architecture uses Prometheus to scrape (pull) metrics from endpoints, and Grafana to visualize them. When designing dashboards and alerts, Google SREs recommend the Four Golden Signals: Latency (time to service a request), Traffic (demand on the system, e.g., requests per second), Errors (rate of failing requests), and Saturation (how "full" the system is, like CPU/Memory usage). Another popular framework is the RED method for microservices (Rate, Errors, Duration) and the USE method for infrastructure (Utilization, Saturation, Errors).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Distributed Tracing with OpenTelemetry',
        blocks: [
          {
            type: 'paragraph',
            content: 'In microservices, a single user click might touch 10 different services. Distributed tracing makes this visible. When a request enters the gateway, it is assigned a Trace ID. As the request flows through services, each service creates a "Span" (representing a unit of work) that inherits the Trace ID. Context propagation passes these IDs via HTTP headers. OpenTelemetry is the CNCF standard for instrumenting code to generate traces, metrics, and logs in a vendor-neutral way. By using OpenTelemetry, architects can switch backend analysis tools (from Jaeger to Datadog to Honeycomb) without rewriting application code.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Debugging Latency',
            content: 'Users report the checkout process is slow. The SRE looks at the Grafana dashboard (Metrics) and sees high Latency. They open Jaeger (Tracing) and look at a slow request trace. The trace visualizes that the Checkout Service is fast, but the downstream call to the Payment Gateway API takes 4 seconds. They found the bottleneck immediately.'
          },
          {
            type: 'diagram',
            content: `
[User Request] --> [Gateway (Starts Trace ID: 123)]
                      |
                      +-> [Service A (Span 1)] ---> [Service B (Span 2)]
                      |
                      +-> [Service C (Span 3)]

(All logs and metrics for this request are tagged with Trace ID: 123)
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Observability', definition: 'A measure of how well internal states of a system can be inferred from knowledge of its external outputs.' },
      { term: 'Structured Logging', definition: 'Writing log messages in a structured, machine-readable format like JSON, rather than plain text.' },
      { term: 'Distributed Tracing', definition: 'A method used to profile and monitor applications built using microservices architecture by tracking a single request across all services.' },
      { term: 'OpenTelemetry', definition: 'An open-source observability framework providing vendor-neutral APIs and tools to instrument, generate, and export telemetry data.' },
      { term: 'Golden Signals', definition: 'Latency, Traffic, Errors, and Saturation—the most critical metrics for monitoring a user-facing system.' }
    ],
    examTips: [
      'Remember the three pillars: Logs (events), Metrics (aggregates), Traces (request flow).',
      'Know that OpenTelemetry prevents vendor lock-in for observability instrumentation.'
    ],
    commonMistakes: [
      'Logging sensitive data (PII/Passwords) into centralized log aggregators.',
      'Relying on plain text logs and grep rather than structured JSON logs and correlation IDs in microservices.'
    ],
    externalResources: [
      { title: 'OpenTelemetry', type: 'official-doc', url: 'https://opentelemetry.io/', description: 'Standard for instrumenting code', isFree: true },
      { title: 'Observability Engineering', type: 'book', url: 'https://info.honeycomb.io/observability-engineering-book', description: 'Book by Charity Majors (Honeycomb)', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which of the Four Golden Signals measures the total demand being placed on your system (e.g., HTTP requests per second)?',
        options: [
          { id: 'a', text: 'Latency', isCorrect: false },
          { id: 'b', text: 'Errors', isCorrect: false },
          { id: 'c', text: 'Traffic', isCorrect: true },
          { id: 'd', text: 'Saturation', isCorrect: false }
        ],
        explanation: 'Traffic represents the volume of requests or work the system is currently handling.'
      },
      {
        id: 'q2',
        question: 'What is the primary purpose of a Correlation ID (or Trace ID) in distributed tracing?',
        options: [
          { id: 'a', text: 'To encrypt data in transit between microservices', isCorrect: false },
          { id: 'b', text: 'To link together all logs, metrics, and spans generated by a single user request across multiple services', isCorrect: true },
          { id: 'c', text: 'To authenticate the user making the request', isCorrect: false },
          { id: 'd', text: 'To route traffic to the correct database shard', isCorrect: false }
        ],
        explanation: 'A Trace/Correlation ID is generated at the entry point and passed through all downstream services, allowing observability tools to stitch the entire request journey back together.'
      }
    ]
  },
  {
    id: 'sa-data-mesh',
    frameworkId: 'solution',
    title: 'Data Mesh & Modern Data Architecture',
    subtitle: 'Decentralizing data ownership and treating data as a product',
    estimatedMinutes: 10,
    difficulty: 'expert',
    domain: 'data-architecture',
    overview: 'This topic explores the paradigm shift from centralized data monoliths (warehouses/lakes) to the decentralized Data Mesh architecture.',
    sections: [
      {
        id: 'sec-1',
        title: 'The Problem with Data Monoliths',
        blocks: [
          {
            type: 'paragraph',
            content: 'Traditionally, organizations relied on centralized data warehouses or data lakes managed by a specialized, centralized data engineering team. This creates a bottleneck. Domain teams (who understand the data) push raw data into the lake. The central data team (who lack domain context) must clean, transform, and serve it to consumers. As the enterprise scales, this centralized approach fails. The Data Mesh, introduced by Zhamak Dehghani, is a socio-technical approach that shifts the architecture from centralized monoliths to decentralized, domain-oriented data ownership.'
          },
          {
            type: 'callout',
            calloutType: 'important',
            content: 'Important: Data Mesh is primarily an organizational and architectural shift, not just a specific technology or tool.'
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'The Four Principles of Data Mesh',
        blocks: [
          {
            type: 'paragraph',
            content: 'Data Mesh rests on four pillars. 1) Domain Ownership: The teams that generate the data (e.g., the E-commerce team) are responsible for managing its analytical data. 2) Data as a Product: Data is treated as a first-class product; it must be discoverable, addressable, trustworthy, and have an SLA. 3) Self-Serve Data Infrastructure: A centralized platform team provides the tooling (storage, compute, catalog) so domain teams can easily build data products without managing infrastructure. 4) Federated Computational Governance: A governing body ensures interoperability (e.g., standardizing on how a "Customer ID" is represented across all domains).'
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'Data Contracts and Lineage',
        blocks: [
          {
            type: 'paragraph',
            content: 'In a decentralized mesh, how do you prevent domains from breaking consumers when they change schemas? The solution is Data Contracts. A data contract is an agreement between the data producer and consumer specifying the schema, semantics, and SLAs (uptime, freshness) of the data product. These are enforced via code. To find data products, an enterprise Data Catalog is essential. The catalog tracks metadata and Data Lineage, allowing a data scientist to trace a field in a report all the way back to the source domain system that generated it.'
          },
          {
            type: 'example',
            title: 'Real-world Scenario: Data as a Product',
            content: 'The HR domain team owns the employee onboarding system. Instead of dumping raw database tables into a central lake, they build and publish a "Certified Employee Profile" data product. It has a clean schema, a data contract guaranteeing daily updates, and is registered in the central catalog for the Finance team to consume.'
          },
          {
            type: 'diagram',
            content: `
[Finance Domain] <----(Consumes)----+
(Owns Billing Data)                 | Data Contracts & Governance
                                    v
[E-Commerce Domain] ---(Publishes)--> [Enterprise Data Catalog]
(Owns Order Data)                   ^
                                    |
+-----------------------------------+-----------------------------+
|              Self-Serve Data Infrastructure Platform            |
+-----------------------------------------------------------------+
            `
          }
        ]
      }
    ],
    keyTerms: [
      { term: 'Data Mesh', definition: 'A decentralized sociotechnical approach to share, access, and manage analytical data in complex environments.' },
      { term: 'Data as a Product', definition: 'Applying product thinking to data, ensuring it is usable, trustworthy, and discoverable for consumers.' },
      { term: 'Data Contract', definition: 'A formal agreement outlining the structure, quality, and SLA of a data product between producer and consumer.' },
      { term: 'Domain-Oriented Ownership', definition: 'Assigning responsibility for analytical data to the business domains that generate or consume it.' },
      { term: 'Data Catalog', definition: 'A centralized inventory of data assets, facilitating data discovery and governance.' }
    ],
    examTips: [
      'Remember the four pillars of Data Mesh (Domain Ownership, Data as Product, Self-Serve Platform, Federated Governance).',
      'Contrast Data Mesh (decentralized) with Data Warehouses/Lakes (centralized).'
    ],
    commonMistakes: [
      'Thinking a Data Mesh can be bought as a single software product (it\'s an architectural pattern).',
      'Implementing domain ownership without providing a self-serve platform, leaving domain teams overwhelmed with ops work.'
    ],
    externalResources: [
      { title: 'Data Mesh Architecture', type: 'article', url: 'https://datamesh-architecture.com/', description: 'In-depth guide to Data Mesh concepts', isFree: true },
      { title: 'Martin Fowler on Data Mesh', type: 'article', url: 'https://martinfowler.com/articles/data-monolith-to-mesh.html', description: 'Original introductory article', isFree: true }
    ],
    relatedTopicIds: ['sa-microservices'],
    embeddedQuestions: [
      {
        id: 'q1',
        question: 'Which of the following is a core principle of Data Mesh architecture?',
        options: [
          { id: 'a', text: 'Centralizing all data into a single massive data warehouse', isCorrect: false },
          { id: 'b', text: 'Treating data as a product with defined SLAs and usability standards', isCorrect: true },
          { id: 'c', text: 'Ensuring all data engineering is done by one centralized team', isCorrect: false },
          { id: 'd', text: 'Banning the use of data catalogs', isCorrect: false }
        ],
        explanation: 'Treating "Data as a Product" is one of the four core pillars of Data Mesh, ensuring data is easily consumable by other teams.'
      },
      {
        id: 'q2',
        question: 'How do decentralized domain teams in a Data Mesh ensure they do not break downstream consumers when modifying data structures?',
        options: [
          { id: 'a', text: 'By implementing strict Data Contracts', isCorrect: true },
          { id: 'b', text: 'By never changing their database schemas', isCorrect: false },
          { id: 'c', text: 'By forcing all consumers to use unstructured JSON', isCorrect: false },
          { id: 'd', text: 'By routing all queries through a central ESB', isCorrect: false }
        ],
        explanation: 'Data Contracts define formal agreements on schema and SLAs, often enforced programmatically, to protect downstream consumers from unexpected breaking changes.'
      }
    ]
  }
];
