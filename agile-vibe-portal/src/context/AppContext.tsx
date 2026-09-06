import React, { createContext, useContext, useState, useEffect } from 'react';
import type { 
  UserRole, 
  SMCompetency, 
  POCompetency, 
  PMCompetency,
  AssessmentResult, 
  ScenarioAttempt, 
  JiraConfig, 
  JiraIssue 
} from '../types';
import { 
  INITIAL_SM_COMPETENCY, 
  INITIAL_PO_COMPETENCY, 
  INITIAL_PM_COMPETENCY,
  MOCK_JIRA_CONFIG, 
  MOCK_JIRA_ISSUES 
} from '../data/mockData';

export type NavigationTab = 'dashboard' | 'assessments' | 'scenarios' | 'ai-studio' | 'dictionary' | 'live-assistant' | 'jira';

interface AppContextType {
  activeRole: UserRole;
  activeTab: NavigationTab;
  smCompetency: SMCompetency;
  poCompetency: POCompetency;
  pmCompetency: PMCompetency;
  assessmentResults: AssessmentResult[];
  scenarioAttempts: ScenarioAttempt[];
  jiraConfig: JiraConfig;
  jiraIssues: JiraIssue[];
  
  // Actions
  setActiveTab: (tab: NavigationTab) => void;
  switchRole: (role: UserRole) => void;
  submitAssessmentResult: (result: AssessmentResult) => void;
  submitScenarioAttempt: (attempt: ScenarioAttempt) => void;
  updateJiraConfig: (config: Partial<JiraConfig>) => void;
  addJiraIssue: (issue: JiraIssue) => void;
  updateCompetencies: (role: UserRole, updates: Partial<SMCompetency> | Partial<POCompetency> | Partial<PMCompetency>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeRole, setActiveRole] = useState<UserRole>(() => {
    const saved = localStorage.getItem('agile_pulse_active_role');
    return (saved as UserRole) || 'scrum-master';
  });

  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');

  const [smCompetency, setSmCompetency] = useState<SMCompetency>(() => {
    const saved = localStorage.getItem('agile_pulse_sm_comp');
    return saved ? JSON.parse(saved) : INITIAL_SM_COMPETENCY;
  });

  const [poCompetency, setPoCompetency] = useState<POCompetency>(() => {
    const saved = localStorage.getItem('agile_pulse_po_comp');
    return saved ? JSON.parse(saved) : INITIAL_PO_COMPETENCY;
  });

  const [pmCompetency, setPmCompetency] = useState<PMCompetency>(() => {
    const saved = localStorage.getItem('agile_pulse_pm_comp');
    return saved ? JSON.parse(saved) : INITIAL_PM_COMPETENCY;
  });

  const [assessmentResults, setAssessmentResults] = useState<AssessmentResult[]>(() => {
    const saved = localStorage.getItem('agile_pulse_assessments');
    return saved ? JSON.parse(saved) : [];
  });

  const [scenarioAttempts, setScenarioAttempts] = useState<ScenarioAttempt[]>(() => {
    const saved = localStorage.getItem('agile_pulse_scenarios');
    return saved ? JSON.parse(saved) : [];
  });

  const [jiraConfig, setJiraConfig] = useState<JiraConfig>(() => {
    const saved = localStorage.getItem('agile_pulse_jira_config');
    return saved ? JSON.parse(saved) : MOCK_JIRA_CONFIG;
  });

  const [jiraIssues, setJiraIssues] = useState<JiraIssue[]>(() => {
    const saved = localStorage.getItem('agile_pulse_jira_issues');
    return saved ? JSON.parse(saved) : MOCK_JIRA_ISSUES;
  });

  useEffect(() => {
    localStorage.setItem('agile_pulse_active_role', activeRole);
  }, [activeRole]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_sm_comp', JSON.stringify(smCompetency));
  }, [smCompetency]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_po_comp', JSON.stringify(poCompetency));
  }, [poCompetency]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_pm_comp', JSON.stringify(pmCompetency));
  }, [pmCompetency]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_assessments', JSON.stringify(assessmentResults));
  }, [assessmentResults]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_scenarios', JSON.stringify(scenarioAttempts));
  }, [scenarioAttempts]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_jira_config', JSON.stringify(jiraConfig));
  }, [jiraConfig]);

  useEffect(() => {
    localStorage.setItem('agile_pulse_jira_issues', JSON.stringify(jiraIssues));
  }, [jiraIssues]);

  const switchRole = (role: UserRole) => {
    setActiveRole(role);
  };

  const submitAssessmentResult = (result: AssessmentResult) => {
    setAssessmentResults(prev => [result, ...prev]);
  };

  const submitScenarioAttempt = (attempt: ScenarioAttempt) => {
    setScenarioAttempts(prev => [attempt, ...prev]);
  };

  const updateJiraConfig = (updates: Partial<JiraConfig>) => {
    setJiraConfig(prev => ({ ...prev, ...updates }));
  };

  const addJiraIssue = (issue: JiraIssue) => {
    setJiraIssues(prev => [issue, ...prev]);
  };

  const updateCompetencies = (role: UserRole, updates: Partial<SMCompetency> | Partial<POCompetency> | Partial<PMCompetency>) => {
    if (role === 'scrum-master') {
      setSmCompetency(prev => ({ ...prev, ...(updates as Partial<SMCompetency>) }));
    } else if (role === 'product-owner') {
      setPoCompetency(prev => ({ ...prev, ...(updates as Partial<POCompetency>) }));
    } else {
      setPmCompetency(prev => ({ ...prev, ...(updates as Partial<PMCompetency>) }));
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeRole,
        activeTab,
        smCompetency,
        poCompetency,
        pmCompetency,
        assessmentResults,
        scenarioAttempts,
        jiraConfig,
        jiraIssues,
        setActiveTab,
        switchRole,
        submitAssessmentResult,
        submitScenarioAttempt,
        updateJiraConfig,
        addJiraIssue,
        updateCompetencies
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
