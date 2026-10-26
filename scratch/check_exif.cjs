const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

['CTM', 'SCP'].forEach(fld => {
  const dir = path.join('fotos-tratadas', fld);
  const files = fs.readdirSync(dir);
  console.log(`\n=== METADATA FOR ${fld} ===`);
  files.forEach(f => {
    const full = path.join(dir, f);
    try {
      const out = execSync(`ffprobe -v quiet -print_format json -show_format "${full}"`).toString();
      const json = JSON.parse(out);
      console.log(`${f}: tags=`, json.format.tags);
    } catch (e) {
      console.log(`${f}: error`);
    }
  });
});
