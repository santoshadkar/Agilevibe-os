import { UserProfile, AssessmentSession, AssessmentResult, FrameworkId, FrameworkProgress, Badge } from './types';

const PROFILE_KEY = 'architect_hub_profile';
const SESSIONS_KEY = 'architect_hub_sessions';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function getProfile(): UserProfile | null {
  if (!isBrowser()) return null;
  try {
    const data = localStorage.getItem(PROFILE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error reading profile:', error);
    return null;
  }
}

export function saveProfile(profile: UserProfile): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving profile:', error);
  }
}

export function initProfile(name: string, targetRole: string): UserProfile {
  const profile: UserProfile = {
    name,
    targetRole,
    createdAt: new Date().toISOString(),
    lastActive: new Date().toISOString(),
    streakDays: 1,
    lastStreakDate: new Date().toISOString(),
    badges: [],
    assessmentResults: [],
    frameworkProgress: {} as Record<FrameworkId, FrameworkProgress>
  };
  saveProfile(profile);
  return profile;
}

export function saveAssessmentSession(session: AssessmentSession): void {
  if (!isBrowser()) return;
  try {
    const sessions = getSessionsMap();
    sessions[session.id] = session;
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  } catch (error) {
    console.error('Error saving assessment session:', error);
  }
}

export function getAssessmentSession(id: string): AssessmentSession | null {
  if (!isBrowser()) return null;
  try {
    const sessions = getSessionsMap();
    return sessions[id] || null;
  } catch (error) {
    console.error('Error getting assessment session:', error);
    return null;
  }
}

function getSessionsMap(): Record<string, AssessmentSession> {
  if (!isBrowser()) return {};
  const data = localStorage.getItem(SESSIONS_KEY);
  return data ? JSON.parse(data) : {};
}

export function saveAssessmentResult(result: AssessmentResult): void {
  const profile = getProfile();
  if (!profile) return;
  
  profile.assessmentResults.push(result);
  saveProfile(profile);
  updateFrameworkProgress(result.frameworkId, result);
}

export function getAssessmentResults(): AssessmentResult[] {
  const profile = getProfile();
  return profile ? profile.assessmentResults : [];
}

export function updateFrameworkProgress(frameworkId: FrameworkId, result: AssessmentResult): void {
  const profile = getProfile();
  if (!profile) return;

  if (!profile.frameworkProgress[frameworkId]) {
    profile.frameworkProgress[frameworkId] = {
      frameworkId,
      bestScore: 0,
      attemptCount: 0,
      domainMastery: {}
    };
  }

  const progress = profile.frameworkProgress[frameworkId];
  progress.bestScore = Math.max(progress.bestScore, result.percentage);
  progress.lastAttempt = result.completedAt;
  progress.attemptCount += 1;

  result.domainScores.forEach(ds => {
    progress.domainMastery[ds.domainId] = ds.percentage;
  });

  const updatedProfile = checkAndAwardBadges(profile);
  saveProfile(updatedProfile);
}

export function updateStreak(): void {
  const profile = getProfile();
  if (!profile) return;

  const today = new Date().toDateString();
  const lastStreak = new Date(profile.lastStreakDate).toDateString();
  
  if (today !== lastStreak) {
    const lastStreakDate = new Date(profile.lastStreakDate);
    const msInDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((new Date().getTime() - lastStreakDate.getTime()) / msInDay));

    if (diffDays === 1) {
      profile.streakDays += 1;
    } else {
      profile.streakDays = 1;
    }
    profile.lastStreakDate = new Date().toISOString();
  }
  
  profile.lastActive = new Date().toISOString();
  saveProfile(profile);
}

export function checkAndAwardBadges(profile: UserProfile): UserProfile {
  // Simple badge logic example
  const newProfile = { ...profile };
  
  if (newProfile.streakDays >= 7 && !newProfile.badges.find(b => b.id === 'streak-7')) {
    newProfile.badges.push({
      id: 'streak-7',
      name: '7-Day Streak',
      description: 'Active for 7 consecutive days',
      icon: '🔥',
      earnedAt: new Date().toISOString()
    });
  }
  
  Object.values(newProfile.frameworkProgress).forEach(progress => {
    if (progress.bestScore >= 90 && !newProfile.badges.find(b => b.id === `master-${progress.frameworkId}`)) {
      newProfile.badges.push({
        id: `master-${progress.frameworkId}`,
        name: `${progress.frameworkId.toUpperCase()} Master`,
        description: `Scored 90%+ in ${progress.frameworkId}`,
        icon: '👑',
        earnedAt: new Date().toISOString(),
        framework: progress.frameworkId
      });
    }
  });

  return newProfile;
}
