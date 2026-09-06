'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const togafDomains = [
  { name: 'Architecture Development Method (ADM)', desc: 'The core process of TOGAF covering phases A-H and Requirements Management', weight: '25%', qCount: 50 },
  { name: 'Enterprise Continuum', desc: 'Classification and partitioning of architecture assets', weight: '15%', qCount: 30 },
  { name: 'Architecture Governance', desc: 'Managing and controlling enterprise architecture implementation', weight: '20%', qCount: 40 },
  { name: 'Architecture Content Framework', desc: 'Metamodel, deliverables, artifacts, and building blocks', weight: '15%', qCount: 30 },
  { name: 'TOGAF Reference Models', desc: 'Foundation Architecture, TRM, and III-RM reference models', weight: '10%', qCount: 20 },
  { name: 'Architecture Capability Framework', desc: 'Establishing and operating an enterprise architecture practice', weight: '15%', qCount: 30 },
];

export default function TogafPage() {
  return (
    <FrameworkHubView
      id="togaf"
      name="TOGAF Standard v10"
      shortName="TOGAF"
      description="The Open Group Architecture Framework (TOGAF) is the world's most widely adopted Enterprise Architecture standard. It provides a reliable, tested methodology for developing, managing, and governing enterprise architectures."
      iconName="togaf"
      color="#7c3aed"
      fromColor="#4f1d96"
      toColor="#7c3aed"
      totalQuestions={200}
      estimatedMinutes={90}
      certifications={['TOGAF Level 1 Foundation', 'TOGAF Level 2 Practitioner']}
      domains={togafDomains}
    />
  );
}
