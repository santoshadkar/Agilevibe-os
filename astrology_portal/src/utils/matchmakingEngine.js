import { RASHI_LIST } from './rashiData';

// Gana categories for 27 Nakshatras
const NAKSHATRA_GANA = [
  "Deva", "Manushya", "Rakshasa", "Deva", "Deva", "Rakshasa", "Deva", "Deva", "Rakshasa",
  "Rakshasa", "Manushya", "Manushya", "Deva", "Rakshasa", "Deva", "Rakshasa", "Deva", "Rakshasa",
  "Rakshasa", "Manushya", "Manushya", "Deva", "Rakshasa", "Rakshasa", "Manushya", "Deva", "Deva"
];

// Nadi categories for 27 Nakshatras (0: Adi, 1: Madhya, 2: Antya)
const NAKSHATRA_NADI = [
  "Adi", "Madhya", "Antya", "Antya", "Madhya", "Adi", "Adi", "Madhya", "Antya",
  "Pitru/Adi", "Madhya", "Antya", "Deva/Antya", "Madhya", "Adi", "Adi", "Madhya", "Antya",
  "Adi", "Madhya", "Antya", "Antya", "Madhya", "Adi", "Adi", "Madhya", "Antya"
];

export function calculateMatchmaking(p1Chart, p2Chart) {
  let p1RashiIndex = RASHI_LIST.findIndex(r => r.id === p1Chart?.moonRashi?.id);
  if (p1RashiIndex === -1) p1RashiIndex = 0;

  let p2RashiIndex = RASHI_LIST.findIndex(r => r.id === p2Chart?.moonRashi?.id);
  if (p2RashiIndex === -1) p2RashiIndex = 0;

  const rashiDiff = Math.abs(p1RashiIndex - p2RashiIndex);
  const nak1 = typeof p1Chart?.nakshatraIndex === 'number' ? p1Chart.nakshatraIndex : 3;
  const nak2 = typeof p2Chart?.nakshatraIndex === 'number' ? p2Chart.nakshatraIndex : 12;

  // 1. Varna Koota (1 Point) - Spiritual & Ego balance
  const varnaPts = ((p1RashiIndex + p2RashiIndex) % 2 === 0) ? 1 : 0.5;

  // 2. Vashya Koota (2 Points) - Mutual Magnetism & Attraction
  let vashyaPts = 2;
  if (rashiDiff === 6 || rashiDiff === 5) vashyaPts = 1;
  if (rashiDiff === 1 || rashiDiff === 11) vashyaPts = 1.5;

  // 3. Tara Koota (3 Points) - Destiny & Longevity
  const taraCount = Math.abs(nak1 - nak2) % 9;
  let taraPts = 3;
  if (taraCount === 3 || taraCount === 5 || taraCount === 7) taraPts = 1.5;

  // 4. Yoni Koota (4 Points) - Passion & Instinctive Intimacy
  let yoniPts = 4;
  if (rashiDiff === 6) yoniPts = 1;
  else if (rashiDiff === 2 || rashiDiff === 10) yoniPts = 2.5;

  // 5. Graha Maitri (5 Points) - Intellectual & Lord Friendship
  let maitriPts = 5;
  if (rashiDiff === 6 || rashiDiff === 8) maitriPts = 0.5;
  else if (rashiDiff === 2 || rashiDiff === 12) maitriPts = 3;

  // 6. Gana Koota (6 Points) - Temperament Harmony
  const gana1 = NAKSHATRA_GANA[(nak1 + 27) % 27] || "Deva";
  const gana2 = NAKSHATRA_GANA[(nak2 + 27) % 27] || "Deva";
  let ganaPts = 6;
  if (gana1 === gana2) ganaPts = 6;
  else if ((gana1 === "Deva" && gana2 === "Manushya") || (gana1 === "Manushya" && gana2 === "Deva")) ganaPts = 5;
  else if ((gana1 === "Deva" && gana2 === "Rakshasa") || (gana1 === "Rakshasa" && gana2 === "Deva")) ganaPts = 1;
  else ganaPts = 0;

  // 7. Bhakoot Koota (7 Points) - Emotional Chemistry & Wealth Growth
  let bhakootPts = 7;
  const posDiff = ((p2RashiIndex - p1RashiIndex + 12) % 12) + 1;
  if (posDiff === 2 || posDiff === 12 || posDiff === 6 || posDiff === 8 || posDiff === 5 || posDiff === 9) {
    const p1Ruler = p1Chart?.moonRashi?.ruler || "Mars";
    const p2Ruler = p2Chart?.moonRashi?.ruler || "Venus";
    bhakootPts = (p1Ruler === p2Ruler) ? 7 : 0;
  }

  // 8. Nadi Koota (8 Points) - Progeny Vitality & Health Alignment
  const nadi1 = NAKSHATRA_NADI[(nak1 + 27) % 27] || "Adi";
  const nadi2 = NAKSHATRA_NADI[(nak2 + 27) % 27] || "Adi";
  let nadiPts = 8;
  let hasNadiDosha = false;
  if (nadi1 === nadi2) {
    nadiPts = 0;
    hasNadiDosha = true;
  }

  const totalPoints = Number((varnaPts + vashyaPts + taraPts + yoniPts + maitriPts + ganaPts + bhakootPts + nadiPts).toFixed(1));
  const matchPercentage = Math.round((totalPoints / 36) * 100);

  // Status & Verdict
  let status = "Average Match";
  let statusClass = "text-amber-400";
  let summary = "Satisfactory compatibility. Focus on clear communication and joint spiritual practices.";
  
  if (totalPoints >= 31) {
    status = "Exemplary Match (Divine Combination)";
    statusClass = "text-emerald-400";
    summary = "Outstanding Ashtakoot compatibility! Highly recommended for enduring marital bliss, prosperity, and soulmate connection.";
  } else if (totalPoints >= 25) {
    status = "Very Good Match";
    statusClass = "text-cyan-400";
    summary = "Strong marital foundation with high emotional resonance, growth, and long-term family harmony.";
  } else if (totalPoints >= 18) {
    status = "Good / Acceptable Match";
    statusClass = "text-yellow-400";
    summary = "Passes the traditional threshold of 18 Gunas. Minor remedial measures for Bhakoot/Nadi ensure complete peace.";
  } else {
    status = "Challenging Compatibility";
    statusClass = "text-rose-400";
    summary = "Scores below 18 points. Requires in-depth planetary remedies, mutual understanding, and mature compromise.";
  }

  // Manglik Balance Check
  let manglikSummary = "Both charts have balanced planetary energies.";
  const p1IsManglik = p1Chart?.isManglik || false;
  const p2IsManglik = p2Chart?.isManglik || false;
  const p1Name = p1Chart?.personName || "Partner 1";
  const p2Name = p2Chart?.personName || "Partner 2";

  if (p1IsManglik && p2IsManglik) {
    manglikSummary = "Both partners are Manglik! According to Vedic rules, mutual Manglik cancellation (Mangal Dosha Samyam) takes place, yielding high protection.";
  } else if (p1IsManglik || p2IsManglik) {
    const who = p1IsManglik ? p1Name : p2Name;
    manglikSummary = `Partial Mangal Dosha present in ${who}'s chart. Performing Kumbh Vivah or Hanuman Chalisa recitations resolves this friction gracefully.`;
  }

  return {
    totalPoints,
    maxPoints: 36,
    matchPercentage,
    status,
    statusClass,
    summary,
    manglikSummary,
    hasNadiDosha,
    breakdown: [
      { name: "Varna (Ego & Work Ethic)", score: varnaPts, max: 1, desc: "Alignment in personal values and spiritual orientation." },
      { name: "Vashya (Magnetism & Dominance)", score: vashyaPts, max: 2, desc: "Mutual attraction, influence, and natural affection." },
      { name: "Tara (Destiny & Health)", score: taraPts, max: 3, desc: "Cosmic longevity, mutual fortune, and well-being." },
      { name: "Yoni (Intimacy & Passion)", score: yoniPts, max: 4, desc: "Physical chemistry, deep affection, and instinctual bond." },
      { name: "Graha Maitri (Mental Friendship)", score: maitriPts, max: 5, desc: "Psychological harmony, mutual respect, and friendship." },
      { name: "Gana (Temperament & Behavior)", score: ganaPts, max: 6, desc: "Matching of mental temperaments (Deva, Manushya, Rakshasa)." },
      { name: "Bhakoot (Emotional Love & Wealth)", score: bhakootPts, max: 7, desc: "Long-term financial prosperity, love growth, and family luck." },
      { name: "Nadi (Genetic Health & Progeny)", score: nadiPts, max: 8, desc: "Vitality, nervous system sync, and progeny blessings." }
    ]
  };
}
