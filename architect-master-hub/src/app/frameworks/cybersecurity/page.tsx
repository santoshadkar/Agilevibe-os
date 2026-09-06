'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const cyberDomains = [
  { name: 'SABSA Framework & Business Security', desc: 'Contextual, conceptual, logical, and operational security architecture layers', weight: '20%', qCount: 30 },
  { name: 'Zero Trust Architecture (NIST SP 800-207)', desc: 'Explicit verification, least privilege, assume breach, and policy engine design', weight: '25%', qCount: 38 },
  { name: 'NIST CSF 2.0 & Risk Management', desc: 'Govern, Identify, Protect, Detect, Respond, Recover functions', weight: '20%', qCount: 30 },
  { name: 'Cloud & Infrastructure Security', desc: 'CSA CCM, CSPM, CWPP, micro-segmentation, and cloud defense', weight: '20%', qCount: 30 },
  { name: 'Identity & Access Architecture', desc: 'OAuth 2.0, OIDC, SAML, PAM, CIAM, and zero trust identity', weight: '15%', qCount: 22 }
];

export default function CybersecurityPage() {
  return (
    <FrameworkHubView
      id="cybersecurity"
      name="Cybersecurity Architecture"
      shortName="Cyber Arch"
      description="Master SABSA, Zero Trust architecture (NIST SP 800-207), NIST Cybersecurity Framework 2.0, cloud security, identity architecture, and threat modeling."
      iconName="cybersecurity"
      color="#ef4444"
      fromColor="#991b1b"
      toColor="#ef4444"
      totalQuestions={150}
      estimatedMinutes={60}
      certifications={['SABSA Chartered Architect (SCF-F)', 'CISSP', 'CCSP']}
      domains={cyberDomains}
    />
  );
}
