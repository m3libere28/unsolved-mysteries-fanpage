import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Base case images
const baseCaseImages = {
  'black-dahlia.jpg': 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/10/elizabeth-short-black-dahlia.jpg',
  'somerton-man.jpg': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Taman_Shud_Case_-_The_Somerton_Man.jpg',
  'dyatlov-pass.jpg': 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/08/dyatlov-pass-hikers.jpg'
};

async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    const buffer = await response.buffer();
    await fs.writeFile(filepath, buffer);
    console.log(`Downloaded ${filepath}`);
  } catch (error) {
    console.error(`Error downloading ${url}:`, error);
  }
}

async function createDirectories() {
  const dirs = [
    'public/assets/cases',
    'public/assets/cases/categories/murder',
    'public/assets/cases/categories/mysterious-death',
    'public/assets/cases/categories/disappearance',
    'public/assets/cases/categories/artifact',
    'public/assets/cases/categories/conspiracy',
    'public/assets/cases/categories/supernatural',
    'public/assets/cases/categories/cold-case',
    'public/assets/cases/categories/unexplained'
  ];

  for (const dir of dirs) {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function downloadAllImages() {
  await createDirectories();

  // Download base case images
  for (const [filename, url] of Object.entries(baseCaseImages)) {
    const filepath = path.join('public/assets/cases', filename);
    await downloadImage(url, filepath);
  }
}

downloadAllImages().catch(console.error);
