import { baseCases } from './baseCases';
import { netflixCases } from './netflixCases';
import { generateCase } from './caseGenerator';

// Generate 22 additional cases based on the base cases (reduced from 27 to make room for Netflix cases)
const additionalCases = Array.from({ length: 22 }, (_, index) => {
  const baseCase = baseCases[index % baseCases.length];
  const newCase = generateCase(index + baseCases.length + netflixCases.length + 1, baseCase);
  console.log('Generated case:', newCase);
  return newCase;
});

console.log('Base cases:', baseCases);
console.log('Netflix cases:', netflixCases);
console.log('Additional cases:', additionalCases);

export const cases = [...baseCases, ...netflixCases, ...additionalCases];

console.log('Total cases:', cases.length);
console.log('UFO cases:', cases.filter(c => c.category === 'UFO' || (c.tags && c.tags.includes('ufo'))).length);

export const categories = [
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
