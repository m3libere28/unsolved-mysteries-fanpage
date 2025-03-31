const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

// Base case images
const baseCaseImages = {
  'black-dahlia.jpg': 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/10/elizabeth-short-black-dahlia.jpg',
  'somerton-man.jpg': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Taman_Shud_Case_-_The_Somerton_Man.jpg',
  'dyatlov-pass.jpg': 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/08/dyatlov-pass-hikers.jpg'
};

// Category placeholder images
const categoryPlaceholders = {
  'murder': [
    'https://example.com/murder1.jpg',
    'https://example.com/murder2.jpg'
    // Add more URLs for each category
  ],
  // Add more categories
};

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
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
    await mkdir(dir, { recursive: true });
  }
}

async function downloadAllImages() {
  await createDirectories();

  // Download base case images
  for (const [filename, url] of Object.entries(baseCaseImages)) {
    const filepath = path.join('public/assets/cases', filename);
    try {
      await downloadImage(url, filepath);
      console.log(`Downloaded ${filename}`);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error);
    }
  }

  // Download category images
  for (const [category, urls] of Object.entries(categoryPlaceholders)) {
    for (let i = 0; i < urls.length; i++) {
      const filename = `${i + 1}.jpg`;
      const filepath = path.join('public/assets/cases/categories', category, filename);
      try {
        await downloadImage(urls[i], filepath);
        console.log(`Downloaded ${category}/${filename}`);
      } catch (error) {
        console.error(`Failed to download ${category}/${filename}:`, error);
      }
    }
  }
}

downloadAllImages().catch(console.error);
