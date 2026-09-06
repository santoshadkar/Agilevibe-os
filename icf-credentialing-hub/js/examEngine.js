/**
 * ICF Credentialing Exam Practice Simulator Engine
 * Modeled on Pearson VUE / OnVUE Official ICF Credentialing Exam
 */

class ICFExamEngine {
  constructor(allQuestions) {
    this.allQuestions = allQuestions;
    this.currentLevel = 'all';
    this.questions = this.filterQuestions('all');
    this.userAnswers = {}; // { questionId: { best: 'A', worst: 'C' } }
    this.flaggedQuestions = new Set();
    this.currentIndex = 0;
    this.examSubmitted = false;
    this.timerSeconds = 90 * 60; // 90 minutes
    this.timerInterval = null;
    this.score = null;
  }

  filterQuestions(level) {
    this.currentLevel = level;
    if (level === 'all') {
      return [...this.allQuestions];
    }
    return this.allQuestions.filter(q => q.level === level);
  }

  setLevel(level) {
    this.questions = this.filterQuestions(level);
    this.resetExam();
  }

  getCurrentQuestion() {
    if (!this.questions || this.questions.length === 0) return null;
    return this.questions[this.currentIndex];
  }

  toggleFlag(qId) {
    if (this.flaggedQuestions.has(qId)) {
      this.flaggedQuestions.delete(qId);
    } else {
      this.flaggedQuestions.add(qId);
    }
  }

  selectOption(questionId, optionKey, type) {
    if (this.examSubmitted) return;
    
    if (!this.userAnswers[questionId]) {
      this.userAnswers[questionId] = { best: null, worst: null };
    }

    if (type === 'best') {
      if (this.userAnswers[questionId].worst === optionKey) {
        this.userAnswers[questionId].worst = null;
      }
      this.userAnswers[questionId].best = optionKey;
    } else if (type === 'worst') {
      if (this.userAnswers[questionId].best === optionKey) {
        this.userAnswers[questionId].best = null;
      }
      this.userAnswers[questionId].worst = optionKey;
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
    }
  }

  submitExam() {
    this.examSubmitted = true;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    let scoreTotal = 0;
    let maxScore = this.questions.length * 2; // 1 pt for Best, 1 pt for Worst
    let correctBest = 0;
    let correctWorst = 0;

    const breakdownByCompetency = {};

    this.questions.forEach(q => {
      const uAns = this.userAnswers[q.id] || { best: null, worst: null };
      let qPoints = 0;

      if (uAns.best === q.bestKey) {
        scoreTotal += 1;
        qPoints += 1;
        correctBest++;
      }
      if (uAns.worst === q.worstKey) {
        scoreTotal += 1;
        qPoints += 1;
        correctWorst++;
      }

      if (!breakdownByCompetency[q.competencyName]) {
        breakdownByCompetency[q.competencyName] = { earned: 0, max: 2, count: 1 };
      } else {
        breakdownByCompetency[q.competencyName].earned += qPoints;
        breakdownByCompetency[q.competencyName].max += 2;
        breakdownByCompetency[q.competencyName].count += 1;
      }
    });

    const percentage = maxScore > 0 ? Math.round((scoreTotal / maxScore) * 100) : 0;
    const scaledScore = Math.round(200 + (percentage * 3)); // Scaled 200 - 500

    this.score = {
      total: scoreTotal,
      max: maxScore,
      bestCount: correctBest,
      worstCount: correctWorst,
      percentage: percentage,
      scaledScore: scaledScore,
      passed: scaledScore >= 460,
      breakdown: breakdownByCompetency
    };

    return this.score;
  }

  resetExam() {
    this.userAnswers = {};
    this.flaggedQuestions.clear();
    this.currentIndex = 0;
    this.examSubmitted = false;
    this.score = null;
  }
}
