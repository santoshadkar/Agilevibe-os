import { FrameworkId, DomainScore, Recommendation, Resource } from './types';

// Resource Library Definitions
const RESOURCE_LIBRARY: Record<string, Record<string, Resource[]>> = {
  'togaf': {
    'architecture-development-method': [
      { title: "TOGAF Standard 10th Edition", type: "official-doc", url: "https://publications.opengroup.org/standards/togaf", estimatedHours: 40 },
      { title: "TOGAF Practitioner", type: "course", url: "https://www.opengroup.org/certifications/togaf", estimatedHours: 20 }
    ],
    'enterprise-continuum': [
      { title: "TOGAF Study Guide", type: "book", estimatedHours: 15 }
    ]
  },
  'ai-architecture': {
    'ml-systems': [
      { title: "Designing Machine Learning Systems", type: "book", estimatedHours: 12 },
      { title: "Google Cloud ML documentation", type: "official-doc", url: "https://cloud.google.com/vertex-ai/docs", estimatedHours: 8 }
    ],
    'well-architected': [
      { title: "AWS Well-Architected ML Lens", type: "official-doc", url: "https://docs.aws.amazon.com/wellarchitected/latest/machine-learning-lens/machine-learning-lens.html", estimatedHours: 5 }
    ]
  },
  'cybersecurity': {
    'zero-trust': [
      { title: "Zero Trust Architecture NIST SP 800-207", type: "official-doc", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final", estimatedHours: 6 }
    ],
    'frameworks': [
      { title: "NIST Cybersecurity Framework 2.0 docs", type: "official-doc", url: "https://www.nist.gov/cyberframework", estimatedHours: 10 },
      { title: "SABSA Practitioner", type: "course", estimatedHours: 25 }
    ]
  },
  'enterprise': {
    'business-architecture': [
      { title: "TOGAF Business Architecture", type: "official-doc", estimatedHours: 8 },
      { title: "Zachman Framework resources", type: "article", estimatedHours: 4 }
    ]
  },
  'solution': {
    'distributed-systems': [
      { title: "Designing Distributed Systems", type: "book", estimatedHours: 15 }
    ],
    'cloud-architecture': [
      { title: "AWS/Azure Well-Architected", type: "official-doc", estimatedHours: 10 }
    ]
  },
  'technical': {
    'sre': [
      { title: "Site Reliability Engineering", type: "book", estimatedHours: 20 }
    ],
    'containerization': [
      { title: "Kubernetes docs", type: "official-doc", url: "https://kubernetes.io/docs/home/", estimatedHours: 15 }
    ]
  }
};

export function generateRecommendations(
  frameworkId: FrameworkId,
  domainScores: DomainScore[],
  level: string
): Recommendation[] {
  const recommendations: Recommendation[] = [];
  const frameworkResources = RESOURCE_LIBRARY[frameworkId] || {};

  // Sort domains by percentage (lowest first) to prioritize weaknesses
  const sortedDomains = [...domainScores].sort((a, b) => a.percentage - b.percentage);

  for (const ds of sortedDomains) {
    let priority: 'high' | 'medium' | 'low';
    if (ds.percentage < 60) {
      priority = 'high';
    } else if (ds.percentage < 75) {
      priority = 'medium';
    } else {
      priority = 'low';
    }

    // Default resources if specific domain match isn't found
    const resources = frameworkResources[ds.domainId] || frameworkResources[Object.keys(frameworkResources)[0]] || [];

    if (resources.length > 0) {
      recommendations.push({
        priority,
        domain: ds.domainName,
        title: `Improve ${ds.domainName} Fundamentals`,
        description: `Your score of ${ds.percentage.toFixed(0)}% indicates room for improvement in ${ds.domainName}. Reviewing these resources will help build a stronger foundation.`,
        resources: resources.slice(0, 2) // Suggest up to 2 resources per domain
      });
    }

    if (recommendations.length >= 5) {
      break; // Return up to 5 recommendations total
    }
  }

  return recommendations;
}
