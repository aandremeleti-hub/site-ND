const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dirs = ['CASA COR 2025', 'CTM', 'RCM', 'RJAB', 'ROF', 'RPG', 'RPU', 'SCP'];

dirs.forEach(d => {
  const p = path.join('fotos-tratadas', d);
  const files = fs.readdirSync(p);
  console.log(`\n=== ${d} (${files.length} files) ===`);
  files.forEach(f => {
    const fp = path.join(p, f);
    try {
      const out = execSync(`ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "${fp}"`).toString().trim();
      const [w, h] = out.split('x').map(Number);
      const orient = w >= h ? 'Horizontal' : 'Vertical';
      console.log(`  ${f}: ${out} (${orient})`);
    } catch (e) {
      console.log(`  ${f}: error reading dimensions`);
    }
  });
});
