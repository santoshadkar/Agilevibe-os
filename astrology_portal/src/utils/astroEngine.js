import { RASHI_LIST } from './rashiData';

// 27 Nakshatras in Vedic Astrology
export const NAKSHATRAS = [
  { name: "Ashwini", ruler: "Ketu", rashiIndex: 0, rashi: "Aries", symbol: "Horse's Head" },
  { name: "Bharani", ruler: "Venus", rashiIndex: 0, rashi: "Aries", symbol: "Yoni / Vessel" },
  { name: "Krittika", ruler: "Sun", rashiIndex: 0, rashi: "Aries / Taurus", symbol: "Razor / Flame" },
  { name: "Rohini", ruler: "Moon", rashiIndex: 1, rashi: "Taurus", symbol: "Chariot / Temple" },
  { name: "Mrigashira", ruler: "Mars", rashiIndex: 1, rashi: "Taurus / Gemini", symbol: "Deer's Head" },
  { name: "Ardra", ruler: "Rahu", rashiIndex: 2, rashi: "Gemini", symbol: "Teardrop / Diamond" },
  { name: "Punarvasu", ruler: "Jupiter", rashiIndex: 2, rashi: "Gemini / Cancer", symbol: "Quiver of Arrows" },
  { name: "Pushya", ruler: "Saturn", rashiIndex: 3, rashi: "Cancer", symbol: "Cow's Udder / Flower" },
  { name: "Ashlesha", ruler: "Mercury", rashiIndex: 3, rashi: "Cancer", symbol: "Coiled Serpent" },
  { name: "Magha", ruler: "Ketu", rashiIndex: 4, rashi: "Leo", symbol: "Royal Throne" },
  { name: "Purva Phalguni", ruler: "Venus", rashiIndex: 4, rashi: "Leo", symbol: "Front legs of Bed" },
  { name: "Uttara Phalguni", ruler: "Sun", rashiIndex: 4, rashi: "Leo / Virgo", symbol: "Back legs of Bed" },
  { name: "Hasta", ruler: "Moon", rashiIndex: 5, rashi: "Virgo", symbol: "Open Hand" },
  { name: "Chitra", ruler: "Mars", rashiIndex: 5, rashi: "Virgo / Libra", symbol: "Bright Jewel" },
  { name: "Swati", ruler: "Rahu", rashiIndex: 6, rashi: "Libra", symbol: "Sword / Coral" },
  { name: "Vishakha", ruler: "Jupiter", rashiIndex: 6, rashi: "Libra / Scorpio", symbol: "Triumphal Arch" },
  { name: "Anuradha", ruler: "Saturn", rashiIndex: 7, rashi: "Scorpio", symbol: "Lotus Flower" },
  { name: "Jyeshtha", ruler: "Mercury", rashiIndex: 7, rashi: "Scorpio", symbol: "Circular Amulet" },
  { name: "Mula", ruler: "Ketu", rashiIndex: 8, rashi: "Sagittarius", symbol: "Tied Roots" },
  { name: "Purva Ashadha", ruler: "Venus", rashiIndex: 8, rashi: "Sagittarius", symbol: "Winnowing Fan" },
  { name: "Uttara Ashadha", ruler: "Sun", rashiIndex: 8, rashi: "Sagittarius / Capricorn", symbol: "Elephant Tusk" },
  { name: "Shravana", ruler: "Moon", rashiIndex: 9, rashi: "Capricorn", symbol: "Three Footprints / Ear" },
  { name: "Dhanishta", ruler: "Mars", rashiIndex: 9, rashi: "Capricorn / Aquarius", symbol: "Drum / Flute" },
  { name: "Shatabhisha", ruler: "Rahu", rashiIndex: 10, rashi: "Aquarius", symbol: "100 Physicians / Circle" },
  { name: "Purva Bhadrapada", ruler: "Jupiter", rashiIndex: 10, rashi: "Aquarius / Pisces", symbol: "Sword / Two-faced Man" },
  { name: "Uttara Bhadrapada", ruler: "Saturn", rashiIndex: 11, rashi: "Pisces", symbol: "Twins / Snake in Water" },
  { name: "Revati", ruler: "Mercury", rashiIndex: 11, rashi: "Pisces", symbol: "Fish / Drum" }
];

// Helper to determine Sun sign based on day & month
export function getSunSign(dateObj) {
  if (!dateObj || isNaN(dateObj.getTime())) return RASHI_LIST[0];
  const month = dateObj.getMonth() + 1; // 1 to 12
  const day = dateObj.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return RASHI_LIST[0]; // Aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return RASHI_LIST[1]; // Taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return RASHI_LIST[2]; // Gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return RASHI_LIST[3]; // Cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return RASHI_LIST[4]; // Leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return RASHI_LIST[5]; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return RASHI_LIST[6]; // Libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return RASHI_LIST[7]; // Scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return RASHI_LIST[8]; // Sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return RASHI_LIST[9]; // Capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return RASHI_LIST[10]; // Aquarius
  return RASHI_LIST[11]; // Pisces
}

// Astronomical Sidereal Calculation (Lahiri Ayanamsha)
export function calculateHoroscope({ name, gender, dob, tob, city, lat, lng, knownMoonRashiId = 'auto', knownLagnaRashiId = 'auto' }) {
  const safeDob = (dob && typeof dob === 'string' && dob.includes('-')) ? dob : '1996-08-15';
  const safeTob = (tob && typeof tob === 'string' && tob.includes(':')) ? tob : '12:00';

  const [yearStr, monthStr, dayStr] = safeDob.split('-');
  const [hourStr, minStr] = safeTob.split(':');

  const year = parseInt(yearStr, 10) || 1996;
  const month = parseInt(monthStr, 10) || 8;
  const day = parseInt(dayStr, 10) || 15;
  const hour = parseInt(hourStr, 10) || 12;
  const minute = parseInt(minStr, 10) || 0;

  const dateObj = new Date(Date.UTC(year, month - 1, day, hour, minute));
  
  // Days since J2000.0 (Jan 1, 2000, 12:00 UTC)
  const j2000 = Date.UTC(2000, 0, 1, 12, 0);
  const daysSinceJ2000 = isNaN(dateObj.getTime()) ? 0 : (dateObj.getTime() - j2000) / 86400000;

  // Lahiri Ayanamsha calculation (~23.85° in 2000, increasing ~0.01396°/year)
  const ayanamsha = 23.85 + (year - 2000) * 0.01396;

  // 1. Calculate Sidereal Moon Longitude
  const tropicalMoon = (218.316 + 13.176396 * daysSinceJ2000 + (hour * 60 + minute) * 0.00914 + 36000) % 360;
  const siderealMoon = (tropicalMoon - ayanamsha + 36000) % 360;

  let calculatedMoonIndex = Math.floor(siderealMoon / 30) % 12;
  if (isNaN(calculatedMoonIndex) || calculatedMoonIndex < 0) calculatedMoonIndex = 0;

  // OVERRIDE if user specified their known Moon Rashi (e.g., Mithuna / Gemini)
  let moonRashiIndex = calculatedMoonIndex;
  if (knownMoonRashiId && knownMoonRashiId !== 'auto') {
    const foundIndex = RASHI_LIST.findIndex(r => r.id === knownMoonRashiId);
    if (foundIndex !== -1) {
      moonRashiIndex = foundIndex;
    }
  }

  const moonRashi = RASHI_LIST[moonRashiIndex] || RASHI_LIST[0];

  // 2. Ascendant (Lagna) Calculation
  const gmst = (18.697374558 + 24.06570982441908 * daysSinceJ2000 + 24000) % 24;
  const lst = (gmst + (parseFloat(lng) || 77.2) / 15 + (hour + minute / 60) + 24000) % 24;
  const ramc = (lst * 15) % 360;
  const siderealLagna = (ramc - ayanamsha + 36000) % 360;
  
  let calculatedLagnaIndex = Math.floor(siderealLagna / 30) % 12;
  if (isNaN(calculatedLagnaIndex) || calculatedLagnaIndex < 0) calculatedLagnaIndex = 0;

  let lagnaIndex = calculatedLagnaIndex;
  if (knownLagnaRashiId && knownLagnaRashiId !== 'auto') {
    const foundLagna = RASHI_LIST.findIndex(r => r.id === knownLagnaRashiId);
    if (foundLagna !== -1) {
      lagnaIndex = foundLagna;
    }
  }

  const lagnaRashi = RASHI_LIST[lagnaIndex] || RASHI_LIST[0];

  // 3. Nakshatra calculation from Moon Position
  const moonDegForNak = (moonRashiIndex * 30 + (siderealMoon % 30) + 360) % 360;
  const nakshatraIndex = Math.floor((moonDegForNak / 360) * 27) % 27;
  const safeNakIndex = isNaN(nakshatraIndex) ? 0 : (nakshatraIndex + 27) % 27;
  const nakshatra = NAKSHATRAS[safeNakIndex] || NAKSHATRAS[0];
  const pada = (Math.floor((moonDegForNak % 13.333) / 3.333) % 4) + 1;

  // 4. Sun Sign
  const sunRashi = getSunSign(dateObj);

  // 5. Calculate 9 Planetary Positions in 12 Houses (Bhavas)
  const tropicalSun = (280.460 + 0.9856474 * daysSinceJ2000 + 36000) % 360;
  const siderealSun = (tropicalSun - ayanamsha + 36000) % 360;

  const tropicalMars = (355.433 + 0.524033 * daysSinceJ2000 + 36000) % 360;
  const siderealMars = (tropicalMars - ayanamsha + 36000) % 360;

  const tropicalMerc = (tropicalSun + 12 * Math.sin((daysSinceJ2000 * 0.1) * Math.PI / 180) + 36000) % 360;
  const siderealMerc = (tropicalMerc - ayanamsha + 36000) % 360;

  const tropicalJup = (34.351 + 0.083091 * daysSinceJ2000 + 36000) % 360;
  const siderealJup = (tropicalJup - ayanamsha + 36000) % 360;

  const tropicalVen = (tropicalSun + 22 * Math.cos((daysSinceJ2000 * 0.08) * Math.PI / 180) + 36000) % 360;
  const siderealVen = (tropicalVen - ayanamsha + 36000) % 360;

  const tropicalSat = (50.077 + 0.033459 * daysSinceJ2000 + 36000) % 360;
  const siderealSat = (tropicalSat - ayanamsha + 36000) % 360;

  const tropicalRahu = (125.045 - 0.0529539 * daysSinceJ2000 + 36000) % 360;
  const siderealRahu = (tropicalRahu - ayanamsha + 36000) % 360;
  const siderealKetu = (siderealRahu + 180) % 360;

  const planetsRaw = [
    { name: "Sun (Surya)", symbol: "☉", deg: siderealSun, color: "#FFD700" },
    { name: "Moon (Chandra)", symbol: "☽", deg: moonDegForNak, color: "#E0E6ED" },
    { name: "Mars (Mangal)", symbol: "♂", deg: siderealMars, color: "#FF4D4D" },
    { name: "Mercury (Budha)", symbol: "☿", deg: siderealMerc, color: "#00E676" },
    { name: "Jupiter (Guru)", symbol: "♃", deg: siderealJup, color: "#FFB300" },
    { name: "Venus (Shukra)", symbol: "♀", deg: siderealVen, color: "#FF80AB" },
    { name: "Saturn (Shani)", symbol: "♄", deg: siderealSat, color: "#82B1FF" },
    { name: "Rahu (North Node)", symbol: "☊", deg: siderealRahu, color: "#B388FF" },
    { name: "Ketu (South Node)", symbol: "☋", deg: siderealKetu, color: "#A7FFEB" }
  ];

  const planetaryPositions = planetsRaw.map((p) => {
    let pRashiIndex = Math.floor(p.deg / 30) % 12;
    if (isNaN(pRashiIndex) || pRashiIndex < 0) pRashiIndex = 0;
    const rashi = RASHI_LIST[pRashiIndex] || RASHI_LIST[0];
    const houseNumber = ((pRashiIndex - lagnaIndex + 12) % 12) + 1;
    const degInSign = (p.deg % 30).toFixed(2);
    return {
      ...p,
      rashiIndex: pRashiIndex,
      rashiName: rashi.vedicName,
      englishRashi: rashi.englishName,
      houseNumber,
      degInSign: `${degInSign}°`,
      isRetrograde: p.name.includes("Rahu") || p.name.includes("Ketu") || (daysSinceJ2000 % 5 > 3 && p.name.includes("Saturn"))
    };
  });

  // House Map for Kundli Rendering
  const houseMap = {};
  for (let h = 1; h <= 12; h++) {
    const signIndex = (lagnaIndex + h - 1) % 12;
    houseMap[h] = {
      houseNumber: h,
      rashi: RASHI_LIST[signIndex] || RASHI_LIST[0],
      planets: planetaryPositions.filter(p => p.houseNumber === h)
    };
  }

  // 6. Check Manglik Dosha
  const marsPlanet = planetaryPositions.find(p => p.name.includes("Mars"));
  const manglikHouses = [1, 4, 7, 8, 12];
  const isManglik = marsPlanet ? manglikHouses.includes(marsPlanet.houseNumber) : false;
  const manglikSeverity = isManglik ? (marsPlanet.houseNumber === 7 || marsPlanet.houseNumber === 8 ? "High (Full Manglik)" : "Mild (Partial Manglik)") : "No Manglik Dosha";

  // 7. Vimshottari Dasha Timeline
  const dashaLords = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
  const dashaYears = [7, 20, 6, 10, 7, 18, 16, 19, 17];
  const currentLordIndex = safeNakIndex % 9;
  const currentLord = dashaLords[currentLordIndex] || "Jupiter";
  const subLord = dashaLords[(currentLordIndex + 2) % 9] || "Venus";

  // 8. Element Balance
  const elementsCount = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  planetaryPositions.forEach(p => {
    const rObj = RASHI_LIST[p.rashiIndex] || RASHI_LIST[0];
    const el = rObj.element || "Fire";
    elementsCount[el] = (elementsCount[el] || 0) + 1;
  });

  return {
    personName: name || "Seeker",
    gender: gender || "Not Specified",
    dob: safeDob,
    tob: safeTob,
    city: city || "Unknown Location",
    lat,
    lng,
    lagnaRashi,
    moonRashi,
    sunRashi,
    nakshatra,
    nakshatraIndex: safeNakIndex,
    pada,
    planetaryPositions,
    houseMap,
    isManglik,
    manglikSeverity,
    dasha: {
      mahadasha: currentLord,
      antardasha: subLord,
      duration: `${currentLord} Mahadasha active until ${year + dashaYears[currentLordIndex]}`
    },
    elementBalance: elementsCount
  };
}
