import { Framework, Question } from '../lib/types';
import { normalizeQuestions } from '../lib/normalize';

export const solutionFramework: Framework = {
  id: 'solution',
  name: 'Solution Architecture',
  shortName: 'SA',
  description: 'Solution design patterns, cloud architecture, API design, and system quality attributes',
  icon: '⚡',
  color: '#10b981',
  gradientFrom: '#065f46',
  gradientTo: '#10b981',
  domains: [
    { id: 'design-patterns', name: 'Solution Design Patterns', description: 'Microservices, event-driven, CQRS, saga patterns', weight: 30 },
    { id: 'cloud-arch', name: 'Cloud Architecture', description: 'AWS/Azure/GCP Well-Architected Framework pillars', weight: 30 },
    { id: 'api-integration', name: 'API & Integration Patterns', description: 'REST, GraphQL, event streaming, ESB vs mesh', weight: 20 },
    { id: 'nfr', name: 'Non-Functional Requirements', description: 'Resilience, scalability, observability, security', weight: 20 },
  ],
  totalQuestions: 100,
  estimatedMinutes: 45,
  certifications: ['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert']
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rawSolutionQuestions: any[] = [
  // 22 MCQs
  { id: 's1', domainId: 'design-patterns', type: 'mcq', text: 'Which pattern segregates read and write databases?', options: ['Saga', 'CQRS', 'Strangler Fig', 'Sidecar'], answer: 'CQRS', explanation: 'Command Query Responsibility Segregation separates reads from writes.' },
  { id: 's2', domainId: 'design-patterns', type: 'mcq', text: 'Which pattern manages distributed transactions across microservices?', options: ['CQRS', 'Saga', 'Bulkhead', 'Ambassador'], answer: 'Saga', explanation: 'The Saga pattern handles long-running transactions via compensating actions.' },
  { id: 's3', domainId: 'design-patterns', type: 'mcq', text: 'Saga choreography is best described as:', options: ['A central orchestrator managing events', 'Services listening and reacting to events independently', 'Synchronous API calls', 'A monolithic database commit'], answer: 'Services listening and reacting to events independently', explanation: 'Choreography relies on decentralized event reactions.' },
  { id: 's4', domainId: 'design-patterns', type: 'mcq', text: 'What pattern isolates failures so they do not cascade?', options: ['Sidecar', 'Bulkhead', 'Strangler', 'Adapter'], answer: 'Bulkhead', explanation: 'Like a ship, bulkheads prevent the whole system from sinking.' },
  { id: 's5', domainId: 'cloud-arch', type: 'mcq', text: 'Which AWS Well-Architected pillar focuses on reducing carbon footprint?', options: ['Performance', 'Cost', 'Sustainability', 'Reliability'], answer: 'Sustainability', explanation: 'Sustainability is the 6th pillar focusing on environmental impact.' },
  { id: 's6', domainId: 'cloud-arch', type: 'mcq', text: 'Which AWS Well-Architected pillar focuses on recovering from failures?', options: ['Security', 'Reliability', 'Operational Excellence', 'Cost'], answer: 'Reliability', explanation: 'Reliability ensures workloads perform correctly consistently.' },
  { id: 's7', domainId: 'api-integration', type: 'mcq', text: 'Which architectural style fetches exactly the data specified by the client?', options: ['REST', 'SOAP', 'GraphQL', 'gRPC'], answer: 'GraphQL', explanation: 'GraphQL allows clients to specify the exact shape of the response.' },
  { id: 's8', domainId: 'api-integration', type: 'mcq', text: 'gRPC primarily uses which protocol?', options: ['HTTP/1.1', 'HTTP/2', 'TCP', 'UDP'], answer: 'HTTP/2', explanation: 'gRPC leverages HTTP/2 for multiplexing and streaming.' },
  { id: 's9', domainId: 'api-integration', type: 'mcq', text: 'Which integration pattern involves a central message broker doing routing and transformation?', options: ['Service Mesh', 'ESB', 'Point-to-Point', 'CQRS'], answer: 'ESB', explanation: 'Enterprise Service Bus centralizes integration logic.' },
  { id: 's10', domainId: 'nfr', type: 'mcq', text: 'CAP theorem states a distributed data store can only provide two of three guarantees. They are Consistency, Partition Tolerance, and:', options: ['Availability', 'Accessibility', 'Auditing', 'Atomicity'], answer: 'Availability', explanation: 'CAP = Consistency, Availability, Partition Tolerance.' },
  { id: 's11', domainId: 'nfr', type: 'mcq', text: 'What does RPO stand for in disaster recovery?', options: ['Recovery Point Objective', 'Recovery Performance Objective', 'Realtime Processing Objective', 'Reliable Path Operation'], answer: 'Recovery Point Objective', explanation: 'RPO defines acceptable data loss in time.' },
  { id: 's12', domainId: 'nfr', type: 'mcq', text: 'What does RTO stand for?', options: ['Recovery Time Objective', 'Real Time Operations', 'Return To Operations', 'Reliability Time Objective'], answer: 'Recovery Time Objective', explanation: 'RTO defines the target time to restore a system.' },
  { id: 's13', domainId: 'nfr', type: 'mcq', text: 'Which discipline injects failures into a system to test resilience?', options: ['Performance Testing', 'Unit Testing', 'Chaos Engineering', 'Fuzzing'], answer: 'Chaos Engineering', explanation: 'Chaos engineering (e.g., Chaos Monkey) validates system resilience.' },
  { id: 's14', domainId: 'api-integration', type: 'mcq', text: 'In API versioning, which is NOT a common method?', options: ['URI Path', 'Header', 'Query Parameter', 'MAC Address'], answer: 'MAC Address', explanation: 'MAC addresses are network layer and not used for API versioning.' },
  { id: 's15', domainId: 'cloud-arch', type: 'mcq', text: 'A Service Mesh typically handles:', options: ['Business Logic', 'UI Rendering', 'Service-to-service communication (mTLS, retries)', 'Database Indexing'], answer: 'Service-to-service communication (mTLS, retries)', explanation: 'Service meshes abstract network communication concerns.' },
  { id: 's16', domainId: 'design-patterns', type: 'mcq', text: 'The Strangler Fig pattern is primarily used for:', options: ['Migrating legacy monoliths', 'Securing APIs', 'Encrypting data', 'Containerizing apps'], answer: 'Migrating legacy monoliths', explanation: 'It gradually replaces specific pieces of functionality.' },
  { id: 's17', domainId: 'api-integration', type: 'mcq', text: 'Which tool is commonly used as a distributed event streaming platform?', options: ['Redis', 'Apache Kafka', 'PostgreSQL', 'Nginx'], answer: 'Apache Kafka', explanation: 'Kafka is heavily used for event streaming.' },
  { id: 's18', domainId: 'design-patterns', type: 'mcq', text: 'What is Event Sourcing?', options: ['Storing only the current state', 'Storing the history of state changes as events', 'Publishing events to UI', 'A logging framework'], answer: 'Storing the history of state changes as events', explanation: 'Event Sourcing persists the state as a sequence of events.' },
  { id: 's19', domainId: 'nfr', type: 'mcq', text: 'OpenTelemetry is the standard for:', options: ['Identity Management', 'Observability (Traces, Metrics, Logs)', 'Cloud Deployments', 'Container Orchestration'], answer: 'Observability (Traces, Metrics, Logs)', explanation: 'OpenTelemetry unifies telemetry data.' },
  { id: 's20', domainId: 'design-patterns', type: 'mcq', text: 'What pattern uses an extra container in a pod to handle cross-cutting concerns?', options: ['Strangler', 'Sidecar', 'Saga', 'Singleton'], answer: 'Sidecar', explanation: 'Sidecars handle logging, proxying, etc., without altering the main app.' },
  { id: 's21', domainId: 'nfr', type: 'mcq', text: 'An SLO is a:', options: ['Service Level Agreement', 'Service Level Objective', 'Service Level Indicator', 'Service Log Operation'], answer: 'Service Level Objective', explanation: 'SLO is the target value for a service level measured by an SLI.' },
  { id: 's22', domainId: 'nfr', type: 'mcq', text: 'Data Mesh shifts data architecture from centralized lakes to:', options: ['Centralized warehouses', 'Decentralized domain-oriented data products', 'Flat files', 'Blockchain'], answer: 'Decentralized domain-oriented data products', explanation: 'Data mesh treats data as a product owned by domain teams.' },
  // 8 Scenarios
  { id: 's23', domainId: 'design-patterns', type: 'scenario', text: 'A monolith needs to be broken down. You decide to route new features to microservices and legacy to the monolith. What pattern is this?', options: ['Saga', 'CQRS', 'Strangler Fig', 'Sidecar'], answer: 'Strangler Fig', explanation: 'You are gradually strangling the legacy application.' },
  { id: 's24', domainId: 'nfr', type: 'scenario', text: 'A downstream API fails frequently. To prevent your app from hanging, what pattern should you use?', options: ['Circuit Breaker', 'Event Sourcing', 'Singleton', 'Observer'], answer: 'Circuit Breaker', explanation: 'Circuit breaker trips and fast-fails when the downstream service is down.' },
  { id: 's25', domainId: 'api-integration', type: 'scenario', text: 'You need real-time, low-latency, bidirectional communication between a browser and server. Best protocol?', options: ['HTTP/1.1 REST', 'WebSockets', 'SOAP', 'FTP'], answer: 'WebSockets', explanation: 'WebSockets provide full-duplex persistent connections.' },
  { id: 's26', domainId: 'design-patterns', type: 'scenario', text: 'Microservice A needs data from Microservice B but B is slow. To improve read performance, what pattern helps?', options: ['CQRS/Materialized View', 'Saga', 'Bulkhead', 'Circuit Breaker'], answer: 'CQRS/Materialized View', explanation: 'Separating the read model and keeping a materialized view speeds up reads.' },
  { id: 's27', domainId: 'api-integration', type: 'scenario', text: 'Multiple frontend teams need different payloads from the same backend data. What API technology is best suited?', options: ['REST', 'gRPC', 'GraphQL', 'Webhooks'], answer: 'GraphQL', explanation: 'GraphQL allows each frontend to query exactly what it needs.' },
  { id: 's28', domainId: 'nfr', type: 'scenario', text: 'A financial app requires strict consistency and cannot lose data. In CAP theorem, what do you sacrifice during a partition?', options: ['Consistency', 'Availability', 'Partition Tolerance', 'Nothing'], answer: 'Availability', explanation: 'If you must have Consistency (C) and Partition Tolerance (P), you sacrifice Availability (A) (CP system).' },
  { id: 's29', domainId: 'design-patterns', type: 'scenario', text: 'You need to undo a booking if the payment fails across distributed services. Best pattern?', options: ['Two-Phase Commit (2PC)', 'Saga (Compensating Transaction)', 'Event Sourcing', 'CQRS'], answer: 'Saga (Compensating Transaction)', explanation: 'Saga manages distributed transactions using compensating actions to rollback.' },
  { id: 's30', domainId: 'cloud-arch', type: 'scenario', text: 'You want to auto-scale VMs based on CPU usage. This primarily addresses which Well-Architected Pillar?', options: ['Security', 'Performance Efficiency', 'Cost Optimization', 'Both Performance and Cost'], answer: 'Both Performance and Cost', explanation: 'Scaling out handles performance; scaling in handles cost.' },
  // 5 Drag-Drop
  { id: 's31', domainId: 'design-patterns', type: 'drag-drop', text: 'Match the Design Pattern to its purpose.', dragItems: ['CQRS', 'Saga', 'Strangler', 'Sidecar'], dropZones: ['Read/Write Split', 'Distributed Transactions', 'Legacy Migration', 'Container Helper'], answer: ['CQRS->Read/Write Split', 'Saga->Distributed Transactions', 'Strangler->Legacy Migration', 'Sidecar->Container Helper'], explanation: 'Common microservice patterns.' },
  { id: 's32', domainId: 'api-integration', type: 'drag-drop', text: 'Match the API technology to its characteristic.', dragItems: ['REST', 'GraphQL', 'gRPC', 'WebSockets'], dropZones: ['Resource-based', 'Client-specified queries', 'Protocol Buffers', 'Bidirectional'], answer: ['REST->Resource-based', 'GraphQL->Client-specified queries', 'gRPC->Protocol Buffers', 'WebSockets->Bidirectional'], explanation: 'API styles.' },
  { id: 's33', domainId: 'cloud-arch', type: 'drag-drop', text: 'Match the AWS Pillar to the goal.', dragItems: ['Security', 'Reliability', 'Cost', 'Sustainability'], dropZones: ['Protect data', 'Recover quickly', 'Avoid over-provisioning', 'Reduce carbon'], answer: ['Security->Protect data', 'Reliability->Recover quickly', 'Cost->Avoid over-provisioning', 'Sustainability->Reduce carbon'], explanation: 'Well-Architected Framework mapping.' },
  { id: 's34', domainId: 'nfr', type: 'drag-drop', text: 'Match the Observability signal to its definition.', dragItems: ['Logs', 'Metrics', 'Traces', 'Events'], dropZones: ['Timestamped text', 'Aggregated numbers', 'Request journey', 'Discrete occurrences'], answer: ['Logs->Timestamped text', 'Metrics->Aggregated numbers', 'Traces->Request journey', 'Events->Discrete occurrences'], explanation: 'Three pillars of observability.' },
  { id: 's35', domainId: 'nfr', type: 'drag-drop', text: 'Match the SRE term to its definition.', dragItems: ['SLA', 'SLO', 'SLI', 'Error Budget'], dropZones: ['Contractual promise', 'Internal target', 'Actual measurement', 'Allowed downtime'], answer: ['SLA->Contractual promise', 'SLO->Internal target', 'SLI->Actual measurement', 'Error Budget->Allowed downtime'], explanation: 'SRE metrics.' },
,
{
  "id": "sol-036",
  "type": "mcq",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the primary trade-off of the CQRS (Command Query Responsibility Segregation) pattern in microservices architecture?",
  "options": [
    {
      "id": "a",
      "text": "Increases system complexity by maintaining separate read/write models, compensated by optimized query performance and independent scaling.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Eliminates the need for databases entirely.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Prevents microservices from using APIs.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Forces synchronous HTTP communication across all services.",
      "isCorrect": false
    }
  ],
  "explanation": "CQRS separates write operations (Commands) from read operations (Queries) to optimize throughput at the cost of eventual consistency and dual model maintenance.",
  "reference": "CQRS Architectural Pattern"
},
{
  "id": "sol-037",
  "type": "scenario",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An e-commerce company experiences order failures during Black Friday peak sales. The order processing microservice makes synchronous HTTP calls to Inventory, Payment, and Shipping services, leading to thread pool exhaustion.",
  "question": "How should this synchronous chain be refactored into an asynchronous architecture?",
  "options": [
    {
      "id": "a",
      "text": "Use Event-Driven Architecture with Amazon SNS/SQS or Apache Kafka, implementing the Saga Orchestration pattern for payment & inventory reservation.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Increase HTTP request timeouts to 10 minutes.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Combine all microservices back into a monolithic database.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Disable payment processing during peak sales.",
      "isCorrect": false
    }
  ],
  "explanation": "Event-driven sagas decouple microservice execution and manage long-running distributed transactions asynchronously.",
  "reference": "Enterprise Integration Patterns"
},
{
  "id": "sol-038",
  "type": "mcq",
  "domain": "api-integration",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is the role of an API Gateway in cloud solution architecture?",
  "options": [
    {
      "id": "a",
      "text": "Providing a single entry point for clients, handling cross-cutting concerns like rate limiting, authentication, SSL termination, and request routing.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Storing user password hashes in cleartext.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Compiling Java application JAR files.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Managing hardware rack cabling.",
      "isCorrect": false
    }
  ],
  "explanation": "API Gateways encapsulate internal microservices and enforce security, rate limiting, and traffic routing.",
  "reference": "API Gateway Architecture Pattern"
},
{
  "id": "sol-039",
  "type": "mcq",
  "domain": "nfr",
  "difficulty": "expert",
  "points": 1,
  "question": "In system reliability design, what is the difference between RTO (Recovery Time Objective) and RPO (Recovery Point Objective)?",
  "options": [
    {
      "id": "a",
      "text": "RTO is the target time to restore business operations after a failure; RPO is the maximum acceptable data loss measured in time.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "RTO measures network latency, RPO measures CPU temperature.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "RPO applies only to cloud servers, RTO applies to databases.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "They are identical metrics.",
      "isCorrect": false
    }
  ],
  "explanation": "RTO defines downtime allowance; RPO defines data loss tolerance (e.g. 5 minutes of transaction data).",
  "reference": "Disaster Recovery Metrics"
},
{
  "id": "sol-040",
  "type": "scenario",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A media streaming platform serves 50 million video assets globally. Users in Europe complain of slow thumbnail loading from US-East-1 storage buckets.",
  "question": "Which AWS/Cloud solution pattern minimizes global content delivery latency?",
  "options": [
    {
      "id": "a",
      "text": "Deploy Amazon CloudFront CDN distribution with Origin Shield and S3 Transfer Acceleration.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Ask European users to download assets via FTP.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Compress thumbnails into ZIP files.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Re-encode all videos to 240p resolution.",
      "isCorrect": false
    }
  ],
  "explanation": "Edge location CDNs cache static media close to global end users, drastically reducing latency.",
  "reference": "AWS Well-Architected Performance Pillar"
},
{
  "id": "sol-041",
  "type": "mcq",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the Outbox Pattern in microservices data consistency?",
  "options": [
    {
      "id": "a",
      "text": "Writing business entity updates and event messages to a database outbox table in a single local transaction, polled by an event publisher.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Sending emails directly from SQL stored procedures.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Storing log files on developer laptops.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Deleting outbound API requests.",
      "isCorrect": false
    }
  ],
  "explanation": "The Transactional Outbox pattern guarantees dual-write consistency between database updates and event broker publishing.",
  "reference": "Microservices Data Patterns"
},
{
  "id": "sol-042",
  "type": "mcq",
  "domain": "api-integration",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In RESTful API design, what makes an HTTP method idempotent?",
  "options": [
    {
      "id": "a",
      "text": "Making multiple identical requests has the same effect on server state as making a single request (e.g. GET, PUT, DELETE).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "The endpoint returns 500 Server Error.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "The endpoint requires no authentication.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "The request payload is encrypted using AES-256.",
      "isCorrect": false
    }
  ],
  "explanation": "Idempotency ensures retry safety across network disruptions without duplicate resource creation.",
  "reference": "RESTful API Design Standards"
},
{
  "id": "sol-043",
  "type": "scenario",
  "domain": "nfr",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A banking solution must process 10,000 credit card payments per second. According to the CAP theorem, during a network partition between database nodes, the business prioritizes transaction consistency over availability.",
  "question": "Which CAP theorem system classification should be selected?",
  "options": [
    {
      "id": "a",
      "text": "CP System (Consistency and Partition Tolerance over Availability).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "AP System (Availability over Consistency).",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Ignore CAP theorem and run on single node.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Disable network partitions.",
      "isCorrect": false
    }
  ],
  "explanation": "Financial ledgers require CP characteristics to avoid double-spending or stale account balances.",
  "reference": "CAP Theorem Architecture Trade-offs"
},
{
  "id": "sol-044",
  "type": "mcq",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the AWS Well-Architected Sustainability Pillar focus area?",
  "options": [
    {
      "id": "a",
      "text": "Minimizing environmental impacts of running cloud workloads through resource optimization, efficient algorithms, and server utilization.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Maximizing cloud billing expenditure.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Designing mobile UI screens.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Enforcing 8-character passwords.",
      "isCorrect": false
    }
  ],
  "explanation": "The Sustainability Pillar focuses on environmental efficiency, reducing carbon footprints and idle capacity.",
  "reference": "AWS Well-Architected Sustainability Pillar"
},
{
  "id": "sol-045",
  "type": "mcq",
  "domain": "design-patterns",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is the Bulkhead Pattern in resilient software architecture?",
  "options": [
    {
      "id": "a",
      "text": "Isolating elements of an application into pools so that if one fails, the others will continue to function.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Compressing database backups.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Formatting JSON responses.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Encrypting network cables.",
      "isCorrect": false
    }
  ],
  "explanation": "Bulkheads prevent cascade failures by partitioning thread pools, connection pools, and memory limits per downstream dependency.",
  "reference": "Resilient Design Patterns"
},
{
  "id": "sol-046",
  "type": "scenario",
  "domain": "api-integration",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A healthcare mobile application needs to query data from 12 distinct backend microservices in a single screen render, but mobile bandwidth is limited.",
  "question": "Which API pattern eliminates over-fetching and multi-trip network latency for mobile clients?",
  "options": [
    {
      "id": "a",
      "text": "BFF (Backend-For-Frontend) pattern using GraphQL or dedicated mobile API gateway.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Force mobile client to make 12 sequential REST calls.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Download entire SQL database to mobile phone.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Use XML SOAP web services over HTTP.",
      "isCorrect": false
    }
  ],
  "explanation": "BFF aggregates downstream responses into a single tailored payload for specific client device needs.",
  "reference": "Backend-for-Frontend Architecture"
},
{
  "id": "sol-047",
  "type": "mcq",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the difference between Service Mesh (e.g. Istio) and API Gateway (e.g. Kong/Apogee)?",
  "options": [
    {
      "id": "a",
      "text": "API Gateway manages East-West/North-South edge traffic from external clients; Service Mesh manages internal East-West microservice-to-microservice traffic.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Service Mesh is for databases only.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "API Gateway replaces Kubernetes pods.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "They perform identical functions.",
      "isCorrect": false
    }
  ],
  "explanation": "API Gateways handle external client requests; Service Meshes govern internal service communication, security, and observability.",
  "reference": "Service Mesh vs API Gateway"
},
{
  "id": "sol-048",
  "type": "mcq",
  "domain": "nfr",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is Rate Limiting / Throttling in API solution design?",
  "options": [
    {
      "id": "a",
      "text": "Controlling the rate of incoming requests from clients to prevent service overload, noisy neighbors, and DDoS attacks.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Slowing down database disk speeds.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Limiting code lines per pull request.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Restricting developer login hours.",
      "isCorrect": false
    }
  ],
  "explanation": "Rate limiting protects backend services by rejecting excessive requests using Token Bucket or Leaky Bucket algorithms.",
  "reference": "API Security & Resilience"
},
{
  "id": "sol-049",
  "type": "scenario",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise insurance platform processes claims via a long-running workflow involving document verification, fraud detection, manual audit approval, and payout execution.",
  "question": "Which pattern manages this multi-step stateful business process?",
  "options": [
    {
      "id": "a",
      "text": "Saga Orchestration using state machine workflow engines (e.g. AWS Step Functions or Temporal.io).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Cron job script running every 5 minutes.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Client-side JavaScript timer.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Direct database trigger on relational table.",
      "isCorrect": false
    }
  ],
  "explanation": "State machine orchestrators manage complex long-running business sagas with built-in retry and compensation logic.",
  "reference": "Orchestrated Sagas"
},
{
  "id": "sol-050",
  "type": "mcq",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is AWS CloudFront Origin Shield?",
  "options": [
    {
      "id": "a",
      "text": "An additional caching layer positioned between CloudFront edge locations and regional origins to reduce origin load.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A physical firewall in AWS data centers.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "An antivirus program for EC2.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A VPC security group rule.",
      "isCorrect": false
    }
  ],
  "explanation": "Origin Shield consolidates requests across edge locations to protect origin servers from traffic spikes.",
  "reference": "AWS CloudFront Architecture"
},
{
  "id": "sol-051",
  "type": "mcq",
  "domain": "api-integration",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is Event Sourcing pattern?",
  "options": [
    {
      "id": "a",
      "text": "Persisting state changes as a sequence of immutable events rather than mutating current-state records in a database.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Logging errors to a text file.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Publishing RSS feeds.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Creating calendar events in Outlook.",
      "isCorrect": false
    }
  ],
  "explanation": "Event sourcing preserves full historical audit trails and allows replaying events to reconstruct past state.",
  "reference": "Event Sourcing Patterns"
},
{
  "id": "sol-052",
  "type": "scenario",
  "domain": "nfr",
  "difficulty": "expert",
  "points": 5,
  "scenario": "A retail solution experiences deadlocks and high database lock contention during Flash Sale inventory reservation.",
  "question": "Which concurrency control pattern resolves database lock contention under heavy write load?",
  "options": [
    {
      "id": "a",
      "text": "Optimistic Concurrency Control (OCC) with version numbers or Redis atomic decrements (INCRBY).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Pessimistic table locking on all SQL queries.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Removing transaction isolation levels completely.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Writing records directly to static HTML pages.",
      "isCorrect": false
    }
  ],
  "explanation": "Optimistic concurrency control and atomic memory operations eliminate blocking database locks under high concurrency.",
  "reference": "High Performance Database Design"
},
{
  "id": "sol-053",
  "type": "mcq",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 1,
  "question": "What is the Sidecar Pattern in cloud-native solution architecture?",
  "options": [
    {
      "id": "a",
      "text": "Deploying a supporting container alongside the main application container in the same pod to handle logging, proxying, or security.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Attaching an external hard drive to a laptop.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Running dual database servers in parallel.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Creating backup user accounts.",
      "isCorrect": false
    }
  ],
  "explanation": "Sidecars extend main application functionality (e.g., Envoy proxy in Istio) without modifying application code.",
  "reference": "Cloud Native Design Patterns"
},
{
  "id": "sol-054",
  "type": "mcq",
  "domain": "cloud-arch",
  "difficulty": "practitioner",
  "points": 1,
  "question": "In AWS Well-Architected Framework, what is the purpose of the Operational Excellence Pillar?",
  "options": [
    {
      "id": "a",
      "text": "Running and monitoring systems to deliver business value and continually improving supporting processes and procedures.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Writing CSS code for web apps.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Managing domain name registrations.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Managing hardware warranty contracts.",
      "isCorrect": false
    }
  ],
  "explanation": "Operational Excellence focuses on automation, incident management, and continuous process evolution.",
  "reference": "AWS Operational Excellence Pillar"
},
{
  "id": "sol-055",
  "type": "scenario",
  "domain": "api-integration",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise SaaS API platform needs to support real-time stock price push updates to 100,000 connected browser clients with sub-100ms update latency.",
  "question": "Which protocol should be selected for high-frequency server-to-client streaming?",
  "options": [
    {
      "id": "a",
      "text": "WebSockets or Server-Sent Events (SSE) backed by Redis Pub/Sub.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "HTTP GET polling every 500 milliseconds from client.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "FTP download polling.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Email notification alerts.",
      "isCorrect": false
    }
  ],
  "explanation": "WebSockets and SSE establish persistent full-duplex / event streaming connections for real-time updates.",
  "reference": "Real-time Web Streaming Protocols"
},
{
  "id": "sol-056",
  "type": "mcq",
  "domain": "nfr",
  "difficulty": "expert",
  "points": 1,
  "question": "What is Chaos Mesh / Chaos Engineering in solution resilience testing?",
  "options": [
    {
      "id": "a",
      "text": "Intentionally introducing network latency, pod kills, and disk failures into staging/prod environments to validate recovery automation.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Deleting source code repositories.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Writing bad unit tests.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Formatting database tables incorrectly.",
      "isCorrect": false
    }
  ],
  "explanation": "Chaos engineering verifies that auto-healing and failover mechanisms execute correctly under real failure conditions.",
  "reference": "Chaos Engineering Principles"
},
{
  "id": "sol-057",
  "type": "mcq",
  "domain": "design-patterns",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is the Ambassador Pattern in microservices?",
  "options": [
    {
      "id": "a",
      "text": "Creating helper containers that send network requests on behalf of a consumer application (e.g. logging, circuit breaking, retry logic).",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Hiring external consultants to write code.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Translating application text into multiple languages.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Sending marketing newsletters.",
      "isCorrect": false
    }
  ],
  "explanation": "Ambassadors act as out-of-process proxies for network tasks like circuit breaking and security checks.",
  "reference": "Cloud Design Patterns"
},
{
  "id": "sol-058",
  "type": "scenario",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise data lake requires ingesting 1 TB of streaming log data per hour, storing it cost-effectively for 7 years, and running SQL queries for quarterly compliance audits.",
  "question": "Which storage tiering strategy optimizes cost and performance?",
  "options": [
    {
      "id": "a",
      "text": "Stream via Kinesis Firehose to S3 Standard (Hot), lifecycle rule to S3 Glacier Flexible Retrieval (Cold) after 30 days, and S3 Glacier Deep Archive (Archive) after 1 year.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Keep all 7 years of data in high-cost Redis in-memory cache.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Store logs on local developer workstations.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Delete logs immediately after ingestion.",
      "isCorrect": false
    }
  ],
  "explanation": "Automated S3 lifecycle policies transition data to low-cost Glacier storage tiers as access frequency decreases.",
  "reference": "AWS S3 Storage Lifecycle Architecture"
},
{
  "id": "sol-059",
  "type": "mcq",
  "domain": "api-integration",
  "difficulty": "expert",
  "points": 1,
  "question": "What is gRPC and when is it preferred over REST for inter-service communication?",
  "options": [
    {
      "id": "a",
      "text": "A high-performance RPC framework using Protocol Buffers and HTTP/2, preferred for low-latency internal microservice communication.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A database query language.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A web browser extension.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A CSS styling preprocessor.",
      "isCorrect": false
    }
  ],
  "explanation": "gRPC binary serialization via Protobuf over HTTP/2 provides up to 5-10x throughput performance compared to JSON/REST.",
  "reference": "gRPC Architecture & Performance"
},
{
  "id": "sol-060",
  "type": "mcq",
  "domain": "nfr",
  "difficulty": "practitioner",
  "points": 1,
  "question": "What is SLO (Service Level Objective) vs SLA (Service Level Agreement)?",
  "options": [
    {
      "id": "a",
      "text": "SLO is an internal target metric for service reliability (e.g. 99.9% uptime); SLA is a formal external business contract with financial penalties for non-compliance.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "SLO is for developers, SLA is for network routers.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "SLA is internal, SLO is public marketing.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "They are identical legal documents.",
      "isCorrect": false
    }
  ],
  "explanation": "SLOs drive internal engineering goals; SLAs define contractual consequences if performance degrades.",
  "reference": "Google SRE Book - Service Levels"
},
{
  "id": "sol-061",
  "type": "scenario",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An enterprise retail solution needs to process inventory updates from 5,000 physical stores. If 1 store's network goes down, it should re-sync missed transactions without blocking other stores.",
  "question": "Which architectural pattern ensures independent transaction recovery?",
  "options": [
    {
      "id": "a",
      "text": "Event-Driven Architecture using per-store message queues / event topics (Pub/Sub) with idempotent processing.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Single monolithic database connection for all 5,000 stores.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Stop all 5,000 stores until the 1 offline store reconnects.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Write paper receipts instead of electronic records.",
      "isCorrect": false
    }
  ],
  "explanation": "Decoupled event streams with message persistence allow offline nodes to replay events upon reconnection without impacting global operations.",
  "reference": "Resilient Pub/Sub Systems"
},
{
  "id": "sol-062",
  "type": "mcq",
  "domain": "cloud-arch",
  "difficulty": "expert",
  "points": 1,
  "question": "What is AWS AWS Well-Architected Cost Optimization Pillar principal rule?",
  "options": [
    {
      "id": "a",
      "text": "Adopting a consumption model, measuring overall efficiency, eliminating unallocated resources, and using managed services to reduce TCO.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Buying the most expensive cloud resources available.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Avoiding cloud usage altogether.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Running all workloads on un-backed-up local servers.",
      "isCorrect": false
    }
  ],
  "explanation": "Cost optimization focuses on pay-as-you-go efficiency, right-sizing, and leveraging serverless / managed services.",
  "reference": "AWS Cost Optimization Pillar"
},
{
  "id": "sol-063",
  "type": "drag-drop",
  "domain": "design-patterns",
  "difficulty": "expert",
  "points": 3,
  "instruction": "Match each integration pattern to its architectural description:",
  "items": [
    {
      "id": "item-sp1",
      "content": "Publish-Subscribe",
      "correctZone": "zone-sp1"
    },
    {
      "id": "item-sp2",
      "content": "Message Router",
      "correctZone": "zone-sp2"
    },
    {
      "id": "item-sp3",
      "content": "Dead Letter Queue",
      "correctZone": "zone-sp3"
    },
    {
      "id": "item-sp4",
      "content": "Compensating Transaction",
      "correctZone": "zone-sp4"
    }
  ],
  "zones": [
    {
      "id": "zone-sp1",
      "label": "One-to-many broadcast event distribution to interested subscribers"
    },
    {
      "id": "zone-sp2",
      "label": "Consumes messages and redirects them based on message content header criteria"
    },
    {
      "id": "zone-sp3",
      "label": "Holds unprocessable or erroneous messages for isolation and debugging"
    },
    {
      "id": "zone-sp4",
      "label": "Reverts the effect of a previously committed step in a distributed saga"
    }
  ],
  "explanation": "Core enterprise integration patterns for message-driven microservice solutions.",
  "reference": "Enterprise Integration Patterns"
},
{
  "id": "sol-064",
  "type": "mcq",
  "domain": "api-integration",
  "difficulty": "expert",
  "points": 1,
  "question": "What is OpenAPI Specification (OAS) / Swagger in solution design?",
  "options": [
    {
      "id": "a",
      "text": "A machine-readable API description format for REST APIs, enabling automated client SDK generation, documentation, and mock servers.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "A database index generator.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "A CSS styling framework.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "A hardware testing utility.",
      "isCorrect": false
    }
  ],
  "explanation": "OpenAPI provides contract-first API definitions that synchronize front-end, back-end, and documentation generation.",
  "reference": "OpenAPI Specification Standard"
},
{
  "id": "sol-065",
  "type": "scenario",
  "domain": "nfr",
  "difficulty": "expert",
  "points": 5,
  "scenario": "An online ticketing platform receives 500,000 concurrent user requests for concert tickets in 1 second. High-concurrency traffic crashes the underlying relational database.",
  "question": "Which architectural cache pattern protects the relational database from read/write stampedes?",
  "options": [
    {
      "id": "a",
      "text": "Implement Redis / ElastiCache write-behind (write-back) caching layer combined with a virtual waiting room queue.",
      "isCorrect": true
    },
    {
      "id": "b",
      "text": "Direct all 500,000 users directly to single SQL database instance.",
      "isCorrect": false
    },
    {
      "id": "c",
      "text": "Disable ticket sales.",
      "isCorrect": false
    },
    {
      "id": "d",
      "text": "Restart SQL server every 10 seconds.",
      "isCorrect": false
    }
  ],
  "explanation": "Virtual waiting rooms combined with in-memory caching absorb traffic surges and protect backend databases from crash loops.",
  "reference": "High Scale Ticketing Architecture"
}
];

export const solutionQuestions = normalizeQuestions(rawSolutionQuestions);
