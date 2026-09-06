'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const enterpriseDomains = [
  { name: 'EA Frameworks Comparison & Zachman', desc: 'TOGAF, Zachman 6x6 ontology matrix, FEAF, DODAF, and Gartner comparison', weight: '20%', qCount: 20 },
  { name: 'Business Architecture & Capability Modeling', desc: 'Value streams, capability heatmaps, and APQC reference models', weight: '30%', qCount: 30 },
  { name: 'Strategy to Execution & Target Operating Models', desc: 'MIT CISR operating models, OKRs, scorecards, and roadmaps', weight: '25%', qCount: 25 },
  { name: 'EA Governance & Agile Architecture', desc: 'Architecture review boards, ADRs, SAFe integration, and maturity models', weight: '25%', qCount: 25 }
];

export default function EnterprisePage() {
  return (
    <FrameworkHubView
      id="enterprise"
      name="Enterprise Architecture"
      shortName="EA"
      description="EA frameworks comparison (TOGAF, Zachman, FEAF), business capability modeling, Target Operating Models (TOM), strategy alignment, and EA governance."
      iconName="enterprise"
      color="#f59e0b"
      fromColor="#92400e"
      toColor="#f59e0b"
      totalQuestions={100}
      estimatedMinutes={45}
      certifications={['Certified Business Architect (CBA)', 'TOGAF Practitioner']}
      domains={enterpriseDomains}
    />
  );
}
