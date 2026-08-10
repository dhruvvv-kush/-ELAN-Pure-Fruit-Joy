const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/cheku/OneDrive/Desktop/elan';
const publicDir = path.join(rootDir, 'public');
const prDir = path.join(publicDir, 'pr');
const pr1Dir = path.join(publicDir, 'pr1');
const pr2Dir = path.join(publicDir, 'pr2');
const pr1SpaceDir = path.join(publicDir, 'pr 1');
const pr2SpaceDir = path.join(publicDir, 'pr 2');

[publicDir, prDir, pr1Dir, pr2Dir, pr1SpaceDir, pr2SpaceDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log('Copying sequence frames to /public/pr...');
const srcPr1 = path.join(rootDir, 'pr 1');
if (fs.existsSync(srcPr1)) {
  const files = fs.readdirSync(srcPr1).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  files.sort();
  files.forEach((file, index) => {
    const srcPath = path.join(srcPr1, file);
    // Copy exact name to /public/pr and /public/pr 1/
    fs.copyFileSync(srcPath, path.join(prDir, file));
    fs.copyFileSync(srcPath, path.join(pr1SpaceDir, file));
    
    // Also copy to normalized indexed name like frame_000.png and frame_0.png
    const padIndex = String(index).padStart(3, '0');
    fs.copyFileSync(srcPath, path.join(prDir, `frame_${padIndex}.png`));
    fs.copyFileSync(srcPath, path.join(prDir, `frame_${index}.png`));
  });
  console.log(`Copied ${files.length} sequence frames.`);
}

console.log('Copying product hero renders to /public/pr1...');
const heroMappings = {
  'ChatGPT Image Jul 30, 2026, 11_31_54 PM.png': ['mango.png', 'mango-bottle.png', 'Mango Bottle.png'],
  'ChatGPT Image Jul 30, 2026, 11_32_00 PM.png': ['guava.png', 'guava-bottle.png', 'Guava Bottle.png'],
  'ChatGPT Image Jul 30, 2026, 11_33_55 PM.png': ['strawberry.png', 'strawberry-bottle.png', 'Strawberry Bottle.png'],
  'ChatGPT Image Jul 30, 2026, 11_31_47 PM.png': ['mixed-berry.png', 'mixed-berry-bottle.png', 'Mixed Berry Bottle.png'],
  'ChatGPT Image Jul 30, 2026, 11_31_37 PM.png': ['lineup.png', 'all-flavours.png']
};

Object.entries(heroMappings).forEach(([srcFile, destFiles]) => {
  const srcPath = path.join(rootDir, srcFile);
  if (fs.existsSync(srcPath)) {
    destFiles.forEach(destFile => {
      fs.copyFileSync(srcPath, path.join(pr1Dir, destFile));
    });
  }
});

console.log('Copying advertising & packaging images to /public/pr2...');
const pr2Mappings = {
  'ChatGPT Image Jul 30, 2026, 11_31_37 PM.png': ['lineup.png', 'all-flavours-lineup.png', 'lifestyle-ad.png'],
  'pr 3.png': ['craft-poster.png', 'packaging-poster.png', 'luxury-poster.png'],
  'ChatGPT Image Jul 30, 2026, 11_31_54 PM.png': ['mango-closeup.png', 'mango-editorial.png'],
  'ChatGPT Image Jul 30, 2026, 11_32_00 PM.png': ['guava-editorial.png'],
  'ChatGPT Image Jul 30, 2026, 11_33_55 PM.png': ['strawberry-editorial.png'],
  'ChatGPT Image Jul 30, 2026, 11_31_47 PM.png': ['berry-editorial.png']
};

Object.entries(pr2Mappings).forEach(([srcFile, destFiles]) => {
  const srcPath = path.join(rootDir, srcFile);
  if (fs.existsSync(srcPath)) {
    destFiles.forEach(destFile => {
      fs.copyFileSync(srcPath, path.join(pr2Dir, destFile));
    });
  }
});

// Also copy sequence frames from pr 2 folder to /public/pr 2/ if referenced directly
const srcPr2 = path.join(rootDir, 'pr 2');
if (fs.existsSync(srcPr2)) {
  const files = fs.readdirSync(srcPr2).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
  files.forEach(file => {
    fs.copyFileSync(path.join(srcPr2, file), path.join(pr2SpaceDir, file));
  });
}

console.log('Asset setup completed successfully.');
