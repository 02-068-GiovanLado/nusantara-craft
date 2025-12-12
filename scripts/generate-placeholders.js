// Placeholder image generator untuk development
// Jalankan: node scripts/generate-placeholders.js

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../public/images/products');

// Pastikan folder exists
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

const placeholders = [
  'pouch-tenun.jpg',
  'handbag-tenun.jpg',
  'storage-box.jpg',
  'vest-blue.jpg',
  'vest-red.jpg',
  'tote-canvas.jpg',
  'crossbody-mini.jpg',
  'drawstring-bag.jpg',
  'scarf-tenun.jpg',
  'head-cover.jpg'
];

// Create placeholder text files (untuk reminder)
placeholders.forEach(filename => {
  const filepath = path.join(productsDir, filename + '.placeholder.txt');
  fs.writeFileSync(
    filepath,
    `PLACEHOLDER: ${filename}\n\nGanti file ini dengan foto produk asli.\nLihat PHOTO_UPLOAD_GUIDE.md untuk detail.`
  );
});

console.log('✅ Placeholder markers created!');
console.log('📁 Location:', productsDir);
console.log('\n📸 Upload foto asli ke folder ini untuk mengganti placeholder.');
