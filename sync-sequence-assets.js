const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/cheku/OneDrive/Desktop/elan';
const publicDir = path.join(rootDir, 'public');
const pr1SeqDir = path.join(publicDir, 'pr1_seq');
const pr2SeqDir = path.join(publicDir, 'pr2_seq');

[pr1SeqDir, pr2SeqDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log('Copying pr 1 sequence frames to /public/pr1_seq...');
const srcPr1 = path.join(rootDir, 'pr 1');
if (fs.existsSync(srcPr1)) {
  const files = fs.readdirSync(srcPr1).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  files.sort();
  files.forEach((file, index) => {
    const srcPath = path.join(srcPr1, file);
    const pad = String(index).padStart(3, '0');
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, file));
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, `frame_${pad}.png`));
    fs.copyFileSync(srcPath, path.join(pr1SeqDir, `frame_${index}.png`));
  });
  console.log(`Copied ${files.length} frames to /public/pr1_seq.`);
}

console.log('Copying pr 2 sequence frames to /public/pr2_seq...');
const srcPr2 = path.join(rootDir, 'pr 2');
if (fs.existsSync(srcPr2)) {
  const files = fs.readdirSync(srcPr2).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  files.sort();
  files.forEach((file, index) => {
    const srcPath = path.join(srcPr2, file);
    const pad = String(index).padStart(3, '0');
    fs.copyFileSync(srcPath, path.join(pr2SeqDir, file));
    fs.copyFileSync(srcPath, path.join(pr2SeqDir, `frame_${pad}.png`));
    fs.copyFileSync(srcPath, path.join(pr2SeqDir, `frame_${index}.png`));
  });
  console.log(`Copied ${files.length} frames to /public/pr2_seq.`);
}

console.log('Sequence asset sync complete.');
