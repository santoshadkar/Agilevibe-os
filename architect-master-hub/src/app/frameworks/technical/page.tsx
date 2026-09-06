'use client';

import FrameworkHubView from '@/components/framework/FrameworkHubView';

const technicalDomains = [
  { name: 'Infrastructure as Code & Kubernetes', desc: 'Terraform, Pulumi, K8s control plane, pod workloads, CNI, and Helm', weight: '30%', qCount: 30 },
  { name: 'Platform Engineering & DevSecOps', desc: 'Internal developer platforms, Backstage, SAST/DAST/SCA, and supply chain security', weight: '25%', qCount: 25 },
  { name: 'SRE & GitOps Deployments', desc: 'SLO/SLI, error budgets, toil reduction, ArgoCD, and Flux pull model', weight: '25%', qCount: 25 },
  { name: 'Cloud Networking & FinOps Architecture', desc: 'Transit Gateway, SD-WAN, SASE, cost allocation, right-sizing, and spot optimization', weight: '20%', qCount: 20 }
];

export default function TechnicalPage() {
  return (
    <FrameworkHubView
      id="technical"
      name="Technical Architecture"
      shortName="Tech Arch"
      description="Terraform IaC, Kubernetes architecture deep-dive, Platform Engineering, DevSecOps pipelines, Site Reliability Engineering (SRE), GitOps, cloud networking, and FinOps."
      iconName="technical"
      color="#8b5cf6"
      fromColor="#4c1d95"
      toColor="#8b5cf6"
      totalQuestions={100}
      estimatedMinutes={45}
      certifications={['CKA (Certified Kubernetes Administrator)', 'AWS DevOps Professional']}
      domains={technicalDomains}
    />
  );
}
