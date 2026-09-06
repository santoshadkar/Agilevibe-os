export type MetricCategory = 'OKR' | 'KPI' | 'KRA' | 'KRI';

export type EnterpriseRole = 
  | 'ai-leader'
  | 'transformation-leader'
  | 'rte'
  | 'tsm'
  | 'sm'
  | 'pm'
  | 'po'
  | 'squad';

export interface EnterpriseRoleInfo {
  id: EnterpriseRole;
  name: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  focusArea: string;
}

export interface KeyResultItem {
  id: string;
  description: string;
  current: number;
  target: number;
  unit: string;
  status: 'on-track' | 'at-risk' | 'behind' | 'achieved';
}

export interface KPIDetail {
  metricName: string;
  currentVal: string;
  targetVal: string;
  trend: 'up' | 'down' | 'stable';
  health: 'healthy' | 'warning' | 'critical';
  benchmark: string;
}

export interface KRADetail {
  coreDomain: string;
  accountabilityScope: string;
  keyDeliverables: string[];
  ownershipLevel: string;
}

export interface KRIDetail {
  riskFactor: string;
  triggerThreshold: string;
  currentLevel: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  mitigationPlan: string;
  impactArea: string;
}

export interface MetricItem {
  id: string;
  category: MetricCategory;
  role: EnterpriseRole;
  title: string;
  summary: string;
  whyItMatters: string;
  governanceCadence: 'Daily Standup' | 'Sprint / Iteration' | 'PI / Monthly' | 'Quarterly (QBR)' | 'Annual Strategic';
  ownerRole: string;
  antiPatternToAvoid: string;
  
  // Specific payload depending on category
  keyResults?: KeyResultItem[];
  kpiDetails?: KPIDetail;
  kraDetails?: KRADetail;
  kriDetails?: KRIDetail;
}

export interface MetricHistoryNode {
  era: string;
  year: string;
  title: string;
  pioneer: string;
  summary: string;
  keyInnovation: string;
  badge: string;
}

export interface FrameworkComparison {
  category: MetricCategory;
  fullName: string;
  corePurpose: string;
  timeHorizon: string;
  primaryOwner: string;
  reviewFrequency: string;
  keyQuestionAnswered: string;
  commonFailureMode: string;
}

export interface GovernanceRitual {
  cadence: string;
  eventTitle: string;
  primaryRoles: string[];
  metricsReviewed: MetricCategory[];
  keyAgendaItems: string[];
  outputsAndArtifacts: string;
}
