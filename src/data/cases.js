import { baseCases } from './baseCases';
import { generateCase } from './caseGenerator';

// Generate 27 additional cases based on the base cases
const additionalCases = Array.from({ length: 27 }, (_, index) => {
  const baseCase = baseCases[index % baseCases.length];
  return generateCase(index + 4, baseCase);
});

export const cases = [...baseCases, ...additionalCases];

export const categories = [
  "Murder",
  "Mysterious Death",
  "Disappearance",
  "Mystery Artifact",
  "Conspiracy",
  "Supernatural",
  "Cold Case",
  "Unexplained Phenomenon"
];

export const decades = [
  "Pre-1900",
  "1900s",
  "1910s",
  "1920s",
  "1930s",
  "1940s",
  "1950s",
  "1960s",
  "1970s",
  "1980s",
  "1990s",
  "2000s",
  "2010s",
  "2020s"
];
