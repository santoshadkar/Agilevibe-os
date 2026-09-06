// SoftSkills Nexus - Daily Micro-Habit Tracker

class SoftSkillsHabitTracker {
  constructor() {
    this.habits = SOFT_SKILLS_DATA.dailyHabits;
    this.completedIds = this.loadCompletedState();
    this.streakCount = this.loadStreakState();
    this.init();
  }

  loadCompletedState() {
    try {
      const saved = localStorage.getItem('soft_skills_completed_habits');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  loadStreakState() {
    try {
      const saved = localStorage.getItem('soft_skills_streak_count');
      return saved ? parseInt(saved, 10) : 3; // Default 3 day streak sample
    } catch (e) {
      return 3;
    }
  }

  saveState() {
    try {
      localStorage.setItem('soft_skills_completed_habits', JSON.stringify(this.completedIds));
      localStorage.setItem('soft_skills_streak_count', this.streakCount.toString());
    } catch (e) {
      console.warn("LocalStorage save error", e);
    }
  }

  init() {
    this.render();
  }

  render() {
    const streakEl = document.getElementById('streak-display-number');
    if (streakEl) {
      streakEl.innerText = `${this.streakCount} Days 🔥`;
    }

    const listContainer = document.getElementById('habit-list-container');
    if (!listContainer) return;

    let html = '';
    this.habits.forEach(habit => {
      const isDone = this.completedIds.includes(habit.id);
      html += `
        <div class="habit-item ${isDone ? 'completed' : ''}">
          <input type="checkbox" class="habit-checkbox" ${isDone ? 'checked' : ''} 
            onchange="window.habitApp.toggleHabit('${habit.id}')" />
          <div style="flex-grow: 1;">
            <div style="font-weight: 600; color: var(--text-main); font-size: 0.95rem;">${habit.text}</div>
            <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-muted); margin-top: 0.3rem;">
              ${habit.category}
            </span>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = html;
  }

  toggleHabit(id) {
    if (this.completedIds.includes(id)) {
      this.completedIds = this.completedIds.filter(item => item !== id);
    } else {
      this.completedIds.push(id);
      if (this.completedIds.length === this.habits.length) {
        this.streakCount++;
        alert("🎉 Sensational! You completed all daily micro-habits today! Streak increased!");
      }
    }
    this.saveState();
    this.render();
  }

  addCustomHabit(text, category) {
    if (!text || text.trim() === '') return;
    const newId = 'h_' + Date.now();
    this.habits.push({ id: newId, text: text.trim(), category: category || "Custom" });
    this.render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.habitApp = new SoftSkillsHabitTracker();
});
