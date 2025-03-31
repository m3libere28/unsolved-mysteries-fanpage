const mysteryImages = [
  "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800", // Dark street
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800", // Foggy beach
  "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?w=800", // Snowy mountains
  "https://images.unsplash.com/photo-1577495508326-b2c9d5659012?w=800", // Dark room
  "https://images.unsplash.com/photo-1482255708022-9f52592bb397?w=800", // Ocean
  "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?w=800", // Forest
  "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800", // Night city
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800", // Space
  "https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?w=800", // Old book
  "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800"  // Dance hall
];

const locations = [
  { city: "New York", country: "USA", region: "North America" },
  { city: "London", country: "UK", region: "Europe" },
  { city: "Tokyo", country: "Japan", region: "Asia" },
  { city: "Moscow", country: "Russia", region: "Europe" },
  { city: "Sydney", country: "Australia", region: "Oceania" },
  { city: "Cairo", country: "Egypt", region: "Africa" },
  { city: "Rio de Janeiro", country: "Brazil", region: "South America" },
  { city: "Mumbai", country: "India", region: "Asia" },
  { city: "Berlin", country: "Germany", region: "Europe" },
  { city: "Vancouver", country: "Canada", region: "North America" }
];

const adjectives = [
  "Mysterious", "Haunting", "Unexplained", "Baffling", "Eerie",
  "Strange", "Cryptic", "Unsettling", "Perplexing", "Chilling"
];

const nouns = [
  "Disappearance", "Mystery", "Incident", "Case", "Phenomenon",
  "Enigma", "Occurrence", "Event", "Investigation", "Discovery"
];

const categories = [
  "Murder",
  "Mysterious Death",
  "Disappearance",
  "Mystery Artifact",
  "Conspiracy",
  "Supernatural",
  "UFO",
  "Cold Case",
  "Unexplained Phenomenon"
];

function generateTitle() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  return `The ${adj} ${noun} of ${location.city}`;
}

function generateYear(baseYear) {
  // Generate a year within 5 years of the base case
  const offset = Math.floor(Math.random() * 11) - 5;
  return baseYear + offset;
}

function generateDescription(baseCase, location, year) {
  const descriptions = [
    `A ${baseCase.category.toLowerCase()} case that shocked ${location.city} in ${year}.`,
    `One of ${location.region}'s most intriguing mysteries from ${year}.`,
    `An unsolved ${baseCase.category.toLowerCase()} that continues to baffle investigators since ${year}.`
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function generateTheories(baseCase) {
  const commonTheories = [
    "Mistaken identity theory",
    "Government cover-up theory",
    "Criminal organization involvement",
    "Natural phenomenon theory",
    "Mass hysteria explanation",
    "Supernatural occurrence theory",
    "Coincidental events theory",
    "Psychological factors theory"
  ];

  const theories = [...baseCase.theories];
  while (theories.length < 3) {
    const newTheory = commonTheories[Math.floor(Math.random() * commonTheories.length)];
    if (!theories.includes(newTheory)) {
      theories.push(newTheory);
    }
  }
  return theories;
}

function generateKeyFacts(baseCase, location, year) {
  const commonFacts = [
    `Occurred in ${location.city}, ${location.country}`,
    `Investigation began in ${year}`,
    "Multiple witnesses reported similar details",
    "Physical evidence was inconclusive",
    "Official investigation remains open",
    "Several leads were never fully explored",
    "Key witnesses later changed their stories",
    "New evidence emerged years later",
    "Similar incidents reported in the area",
    "Local authorities were baffled"
  ];

  const facts = [...baseCase.keyFacts];
  while (facts.length < 4) {
    const newFact = commonFacts[Math.floor(Math.random() * commonFacts.length)];
    if (!facts.includes(newFact)) {
      facts.push(newFact);
    }
  }
  return facts;
}

export function generateCase(id, baseCase) {
  const location = locations[Math.floor(Math.random() * locations.length)];
  const year = generateYear(baseCase.year);
  const image = mysteryImages[Math.floor(Math.random() * mysteryImages.length)];

  const newCase = {
    id,
    title: generateTitle(),
    category: baseCase.category,
    year,
    location: `${location.city}, ${location.country}`,
    status: "Unsolved",
    shortDescription: generateDescription(baseCase, location, year),
    fullDescription: baseCase.fullDescription,
    image,
    videoUrl: baseCase.videoUrl,
    keyFacts: generateKeyFacts(baseCase, location, year),
    theories: generateTheories(baseCase),
    tags: baseCase.category === "UFO" ? ["ufo", ...baseCase.tags || []] : baseCase.tags
  };

  return newCase;
}
