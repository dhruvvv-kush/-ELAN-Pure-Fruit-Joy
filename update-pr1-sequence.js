const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/cheku/OneDrive/Desktop/elan';
const publicDir = path.join(rootDir, 'public');
const pr1SeqDir = path.join(publicDir, 'pr1_seq');
const prDir = path.join(publicDir, 'pr');

[pr1SeqDir, prDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log('Syncing updated pr 1 images to /public/pr1_seq and /public/pr...');
const srcPr1 = path.join(rootDir, 'pr 1');
if (fs.existsSync(srcPr1)) {
  const files = fs.readdirSync(srcPr1).filter(f => f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  files.sort();
  files.forEach((file, index) => {
    const srcPath = path.join(srcPr1, file);
    const pad = String(index).padStart(3, '0');
    
    // Copy to /public/pr1_seq/
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, file));
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, `frame_${pad}.png`));
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, `frame_${index}.png`));

    // Copy to /public/pr/
    fs.copyFileSync(srcPath, path.join(prDir, file));
    fs.copyFileSync(srcPath, path.join(prDir, `frame_${pad}.png`));
    fs.copyFileSync(srcPath, path.join(prDir, `frame_${index}.png`));
  });
  console.log(`Successfully synced ${files.length} frames from pr 1.`);
} else {
  console.error('Source directory pr 1 not found!');
}
