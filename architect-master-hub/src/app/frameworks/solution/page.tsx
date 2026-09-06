'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const solutionDomains = [
  { name: 'Microservices & Event-Driven Patterns', desc: 'Decomposition, CQRS, Saga pattern, outbox, and event sourcing', weight: '30%', qCount: 30 },
  { name: 'Cloud Well-Architected Frameworks', desc: 'AWS 6 pillars, Azure WAF, and GCP architecture framework', weight: '30%', qCount: 30 },
  { name: 'API & Integration Patterns', desc: 'REST, GraphQL, gRPC, ESB vs Service Mesh, and Kafka', weight: '20%', qCount: 20 },
  { name: 'Non-Functional Requirements & Observability', desc: 'Resilience, circuit breakers, CAP theorem, OpenTelemetry, and Data Mesh', weight: '20%', qCount: 20 }
];

export default function SolutionPage() {
  return (
    <FrameworkHubView
      id="solution"
      name="Solution Architecture"
      shortName="SA"
      description="Solution design patterns, microservices, CQRS/Saga event-driven patterns, Cloud Well-Architected Framework pillars, API design, NFR resilience, and Data Mesh."
      iconName="solution"
      color="#10b981"
      fromColor="#065f46"
      toColor="#10b981"
      totalQuestions={100}
      estimatedMinutes={45}
      certifications={['AWS Solutions Architect Professional', 'Azure Solutions Architect Expert']}
      domains={solutionDomains}
    />
  );
}
