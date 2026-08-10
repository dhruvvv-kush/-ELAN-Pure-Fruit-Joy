const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const tempRepo = path.join(__dirname, '.main-push-temp');

if (fs.existsSync(tempRepo)) {
  fs.rmSync(tempRepo, { recursive: true, force: true });
}

fs.mkdirSync(tempRepo, { recursive: true });

function copyFiltered(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    const base = path.basename(src);
    if (base === 'node_modules' || base === '.git' || base === '.next' || base === 'out' || base === '.gh-pages-temp' || base === '.main-push-temp' || base === 'pr 1' || base === 'pr 2' || base === 'pr1_seq' || base === 'pr2_seq' || base === 'pr') return;
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      copyFiltered(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying clean source files to temp deployment dir...');
copyFiltered(rootDir, tempRepo);

console.log('Initializing git repository for main branch push...');
execSync('git init', { cwd: tempRepo, stdio: 'inherit' });
execSync('git checkout -b main', { cwd: tempRepo, stdio: 'inherit' });
execSync('git add -A', { cwd: tempRepo, stdio: 'inherit' });
execSync('git commit -m "feat: complete luxury ÉLAN web application codebase"', { cwd: tempRepo, stdio: 'inherit' });
execSync('git remote add origin https://github.com/dhruvvv-kush/-ELAN-Pure-Fruit-Joy.git', { cwd: tempRepo, stdio: 'inherit' });

console.log('Pushing main branch to GitHub...');
execSync('git push origin main --force', { cwd: tempRepo, stdio: 'inherit' });

console.log('Cleaning up temporary folder...');
fs.rmSync(tempRepo, { recursive: true, force: true });

console.log('SUCCESS: Pushed main branch to GitHub!');
