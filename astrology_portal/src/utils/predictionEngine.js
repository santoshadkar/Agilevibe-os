import { RASHI_LIST } from './rashiData';

export function getHoroscopePredictions(rashiId, category = 'all') {
  const rashi = RASHI_LIST.find(r => r.id === rashiId) || RASHI_LIST[0];

  const predictions = {
    rashiName: rashi.vedicName,
    englishName: rashi.englishName,
    
    // Past Retrospective Timeline (Previous 1-2 Years: 2024 - 2025)
    pastTimeline: {
      title: "Previous Years Retrospective (2024 – 2025)",
      overview: `For ${rashi.englishName}, the previous two years represented an essential period of restructuring and self-definition. Saturn's influence demanded hard work and clearing old debts or stagnant commitments.`,
      highlights: [
        "Major lessons in setting personal boundaries and letting go of draining commitments.",
        "Crucial turning point in career strategy around mid-2024 leading to greater clarity.",
        "Shift in emotional maturity and deepening of genuine relationships."
      ],
      keyLesson: "Endurance creates unstoppable momentum when aligned with your true calling."
    },

    // Next Few Months Forecast (Month-by-month for late 2026 - early 2027)
    nextMonths: [
      {
        period: "Current Month (August 2026)",
        theme: "Solar Vitality & Golden Opportunity",
        love: "Charming planetary transits heighten romantic appeal. Ideal for open communication or meeting a soulful partner.",
        career: "New project proposals receive executive backing. Trust your intuition when leading meetings.",
        wealth: "Favorable cashflow; unexpected gains through past investments or freelance endeavors.",
        health: "High physical energy. Excellent period for starting a rejuvenated fitness or yoga routine.",
        luckyDates: "5th, 14th, 23rd, 29th"
      },
      {
        period: "September 2026",
        theme: "Mercury Precision & Financial Audit",
        love: "Deep meaningful conversations solve old misunderstandings. Patience brings harmony.",
        career: "Analytical tasks and contract renegotiations go smoothly. Attention to detail yields promotions.",
        wealth: "Wise time to consolidate savings and reduce unnecessary subscriptions.",
        health: "Focus on digestion, hydration, and restful sleep routines.",
        luckyDates: "3rd, 11th, 19th, 27th"
      },
      {
        period: "October 2026",
        theme: "Venusian Harmony & Creative Expansion",
        love: "Warmth and mutual appreciation thrive. Celebrating milestones with partners strengthens your bond.",
        career: "Creative breakthroughs and collaborative victories elevate your professional reputation.",
        wealth: "Investments in aesthetics, home comfort, or skill courses bring rich rewards.",
        health: "Radiant well-being; balance physical activity with soothing sound meditation.",
        luckyDates: "7th, 16th, 21st, 30th"
      },
      {
        period: "November 2026",
        theme: "Scorpio Transformation & Inner Wisdom",
        love: "Intense emotional depth. True commitments deepen while superficial connections fade.",
        career: "Strategic focus behind the scenes. Resolving complex challenges earns high praise.",
        wealth: "Good period for long-term real estate, mutual funds, or gold allocations.",
        health: "Prioritize stress relief through thermal baths, herbal teas, and quiet retreat time.",
        luckyDates: "2nd, 12th, 20th, 26th"
      }
    ],

    // Multi-Year Long-Term Forecast (2026 - 2028+)
    yearlyForecast: [
      {
        year: "2026 (Restoration & Triumph)",
        headline: "Year of Radiant Recognition and Strategic Breakthroughs",
        details: `In 2026, Jupiter's expansive aspect illuminates your career house, opening doors to leadership and creative expansion. For ${rashi.englishName}, key transits favor long-distance opportunities, brand building, and joyful family events.`,
        focusAreas: {
          love: "92% Harmony Rate — Ideal year for engagement, marriage, or starting a family.",
          career: "Significant promotion or business launch around Q3. Mentors play a crucial role.",
          wealth: "Substantial increase in net worth through multi-stream income.",
          spiritual: "Deepening connection with meditation, pilgrimage, or philosophical study."
        }
      },
      {
        year: "2027 (Mastery & Expansion)",
        headline: "Year of Global Reach and Financial Consolidation",
        details: `Saturn moves into a supportive trine, granting ${rashi.englishName} unmatched discipline and authority. Projects initiated in 2026 reach commercial maturity and stability.`,
        focusAreas: {
          love: "Stable, grounded relationships. Mutual financial planning strengthens ties.",
          career: "Establishment of legacy projects, corporate expansion, or international work.",
          wealth: "Acquisition of real estate, solid blue-chip assets, or business equity.",
          spiritual: "Inner peace achieved through disciplined daily routines and selflessness."
        }
      },
      {
        year: "2028 (Transformation & New Horizons)",
        headline: "Year of Cosmic Renewal and Re-imagining Dreams",
        details: `A major planetary shift introduces exciting new tech innovations, personal reinvention, and spiritual awakening. Your adaptability ensures you pioneer new pathways effortlessly.`,
        focusAreas: {
          love: "Spontaneous travel and thrilling romantic adventures with your companion.",
          career: "Pioneering new technologies, creative arts, or humanitarian ventures.",
          wealth: "Unconventional gains through digital assets, patents, or royalties.",
          spiritual: "Awakening of intuitive gifts and holistic lifestyle choices."
        }
      }
    ]
  };

  return predictions;
}
