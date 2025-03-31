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
  "Cold Case",
  "Unexplained Phenomenon"
];

function generateTitle() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const location = locations[Math.floor(Math.random() * locations.length)];
  return `The ${adj} ${location.city} ${noun}`;
}

function generateYear(baseYear) {
  // Generate a year within 30 years of the base case, but not the same year
  const offset = Math.floor(Math.random() * 61) - 30; // -30 to +30 years
  const newYear = baseYear + offset;
  return Math.max(1800, Math.min(2024, newYear)); // Keep between 1800 and 2024
}

function generateDescription(baseCase, location, year) {
  const descriptions = [
    `A perplexing series of events that shocked ${location.city} in ${year}`,
    `One of ${location.region}'s most intriguing mysteries that remains controversial`,
    `A case that challenged investigators and haunted ${location.city} for decades`,
    `An unexplained incident that captured the world's attention in ${location.country}`,
    `A baffling mystery that changed ${location.city} forever`
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function generateTheories(baseCase) {
  const additionalTheories = [
    "Government cover-up theory",
    "Supernatural explanation theory",
    "Mass hysteria theory",
    "Parallel universe theory",
    "Time traveler theory",
    "Secret society involvement theory",
    "Environmental factors theory",
    "Psychological phenomenon theory"
  ];

  // Keep one original theory and add two new ones
  const originalTheory = baseCase.theories[Math.floor(Math.random() * baseCase.theories.length)];
  const newTheories = additionalTheories
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  
  return [originalTheory, ...newTheories];
}

function generateKeyFacts(baseCase, location, year) {
  const additionalFacts = [
    `Multiple witnesses reported strange phenomena in ${location.city}`,
    `Local authorities were baffled by the evidence`,
    `International experts were called to investigate`,
    `Similar incidents were reported in ${location.region}`,
    `The case remains controversial to this day`,
    `New evidence emerged decades later`,
    `Multiple theories have been proposed and debunked`,
    `The investigation spanned multiple countries`
  ];

  // Keep two original facts and add two new ones
  const originalFacts = baseCase.keyFacts
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  const newFacts = additionalFacts
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);
  
  return [...originalFacts, ...newFacts];
}

export function generateCase(id, baseCase) {
  const location = locations[Math.floor(Math.random() * locations.length)];
  const year = generateYear(baseCase.year);
  const category = categories[Math.floor(Math.random() * categories.length)];
  const status = ["Unsolved", "Partially Solved", "Solved"][Math.floor(Math.random() * 3)];
  const image = mysteryImages[Math.floor(Math.random() * mysteryImages.length)];

  return {
    id,
    title: generateTitle(),
    category,
    year,
    location: `${location.city}, ${location.country}`,
    status,
    shortDescription: generateDescription(baseCase, location, year),
    fullDescription: `In ${year}, ${location.city} became the center of a mysterious ${category.toLowerCase()} that captivated the world. ${generateDescription(baseCase, location, year)}. Despite extensive investigations and numerous theories, the case ${status === "Solved" ? "was eventually solved" : "remains a mystery"} to this day.`,
    image,
    videoUrl: baseCase.videoUrl,
    keyFacts: generateKeyFacts(baseCase, location, year),
    theories: generateTheories(baseCase)
  };
}
