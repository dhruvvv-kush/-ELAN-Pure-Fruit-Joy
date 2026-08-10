const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const tempRepo = path.join(__dirname, '.gh-pages-temp');

console.log('Building Next.js static site...');
execSync('npm run build', { stdio: 'inherit' });

if (fs.existsSync(tempRepo)) {
  fs.rmSync(tempRepo, { recursive: true, force: true });
}

fs.mkdirSync(tempRepo, { recursive: true });

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying static build to deployment directory...');
copyRecursiveSync(outDir, tempRepo);

// Add .nojekyll to prevent GitHub Pages from hiding _next folder assets
fs.writeFileSync(path.join(tempRepo, '.nojekyll'), '');

console.log('Initializing temporary git repo for gh-pages deployment...');
execSync('git init', { cwd: tempRepo, stdio: 'inherit' });
execSync('git checkout -b gh-pages', { cwd: tempRepo, stdio: 'inherit' });
execSync('git add -A', { cwd: tempRepo, stdio: 'inherit' });
execSync('git commit -m "Deploy ÉLAN luxury site to GitHub Pages"', { cwd: tempRepo, stdio: 'inherit' });
execSync('git remote add origin https://github.com/dhruvvv-kush/-ELAN-Pure-Fruit-Joy.git', { cwd: tempRepo, stdio: 'inherit' });

console.log('Pushing to gh-pages branch on GitHub...');
execSync('git push origin gh-pages --force', { cwd: tempRepo, stdio: 'inherit' });

console.log('Cleaning up temporary folder...');
fs.rmSync(tempRepo, { recursive: true, force: true });

console.log('SUCCESS: Deployed to gh-pages branch!');
