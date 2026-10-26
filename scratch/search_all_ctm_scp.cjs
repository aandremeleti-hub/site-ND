const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === 'build') continue;
    const fullPath = path.join(dir, file);
    try {
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath, fileList);
      } else {
        if (/\.(md|txt|json|ts|tsx|js|cjs|ps1|html|xml)$/i.test(file)) {
          fileList.push(fullPath);
        }
      }
    } catch (e) {}
  }
  return fileList;
}

const rootDir = 'C:\\Users\\Andre\\Documents\\André\\Antigravity\\startmedia-nova_dimensao';
const files = walk(rootDir);
console.log('Total files to check:', files.length);

const keywords = ['CTM', 'SCP'];

files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    keywords.forEach(kw => {
      const idx = content.indexOf(kw);
      if (idx !== -1) {
        // print snippet
        const start = Math.max(0, idx - 80);
        const end = Math.min(content.length, idx + 120);
        console.log(`\nFound "${kw}" in ${f}:`);
        console.log(content.substring(start, end).replace(/\r?\n/g, ' '));
      }
    });
  } catch (e) {}
});
