const { execSync } = require('child_process');

console.log('Pushing main branch to https://github.com/dhruvvv-kush/-ELAN-Pure-Fruit-Joy.git...');
try {
  execSync('git push origin main --force', { stdio: 'inherit' });
  console.log('SUCCESS: Pushed main branch!');
} catch (err) {
  console.error('Push failed:', err.message);
  process.exit(1);
}
