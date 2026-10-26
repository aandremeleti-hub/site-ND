const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.resolve('src/assets/projetos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const conversions = [
  // 1. CASA COR 2025
  { src: 'fotos-tratadas/CASA COR 2025/casa01.png', out: 'casacor-01.webp' },
  { src: 'fotos-tratadas/CASA COR 2025/casa02.png', out: 'casacor-02.webp' },
  { src: 'fotos-tratadas/CASA COR 2025/casa04.png', out: 'casacor-03.webp' },
  { src: 'fotos-tratadas/CASA COR 2025/casa05.png', out: 'casacor-04.webp' },

  // 2. CTM
  { src: 'fotos-tratadas/CTM/Imagem1.png', out: 'ctm-01.webp' },
  { src: 'fotos-tratadas/CTM/Imagem2.png', out: 'ctm-02.webp' },
  { src: 'fotos-tratadas/CTM/Imagem3.png', out: 'ctm-03.webp' },
  { src: 'fotos-tratadas/CTM/Imagem4.png', out: 'ctm-04.webp' },

  // 3. RCM
  { src: 'fotos-tratadas/RCM/1.png', out: 'rcm-01.webp' },
  { src: 'fotos-tratadas/RCM/2.png', out: 'rcm-02.webp' },
  { src: 'fotos-tratadas/RCM/3.png', out: 'rcm-03.webp' },
  { src: 'fotos-tratadas/RCM/4.png', out: 'rcm-04.webp' },

  // 4. RJAB
  { src: 'fotos-tratadas/RJAB/Imagem16.png', out: 'rjab-01.webp' },
  { src: 'fotos-tratadas/RJAB/Imagem17.png', out: 'rjab-02.webp' },
  { src: 'fotos-tratadas/RJAB/Imagem18.png', out: 'rjab-03.webp' },
  { src: 'fotos-tratadas/RJAB/Imagem19.png', out: 'rjab-04.webp' },

  // 5. ROF
  { src: 'fotos-tratadas/ROF/Imagem12.png', out: 'rof-01.webp' },
  { src: 'fotos-tratadas/ROF/Imagem13.png', out: 'rof-02.webp' },
  { src: 'fotos-tratadas/ROF/Imagem14.png', out: 'rof-03.webp' },
  { src: 'fotos-tratadas/ROF/Imagem15.png', out: 'rof-04.webp' },

  // 6. RPG
  { src: 'fotos-tratadas/RPG/Imagem8.png', out: 'rpg-01.webp' },
  { src: 'fotos-tratadas/RPG/Imagem9.png', out: 'rpg-02.webp' },
  { src: 'fotos-tratadas/RPG/Imagem10.png', out: 'rpg-03.webp' },
  { src: 'fotos-tratadas/RPG/Imagem11.png', out: 'rpg-04.webp' },

  // 7. RPU
  { src: 'fotos-tratadas/RPU/Imagem do Codex 24 de set. de 2026, 22_18_37.png', out: 'rpu-01.webp' },
  { src: 'fotos-tratadas/RPU/Imagem5.png', out: 'rpu-02.webp' },
  { src: 'fotos-tratadas/RPU/Imagem7.png', out: 'rpu-03.webp' },
  { src: 'fotos-tratadas/RPU/Imagem do Codex 24 de set. de 2026, 21_42_47.png', out: 'rpu-04.webp' },

  // 8. SCP
  { src: 'fotos-tratadas/SCP/IMG_0571.JPG', out: 'scp-01.webp' },
  { src: 'fotos-tratadas/SCP/IMG_0637.JPG', out: 'scp-02.webp' },
  { src: 'fotos-tratadas/SCP/IMG_0673.JPG', out: 'scp-03.webp' },
  { src: 'fotos-tratadas/SCP/IMG_0681.JPG', out: 'scp-04.webp' },
];

console.log(`Starting conversion of ${conversions.length} images...`);

const results = [];

for (const item of conversions) {
  const inputPath = path.resolve(item.src);
  const outputPath = path.join(targetDir, item.out);

  if (!fs.existsSync(inputPath)) {
    console.error(`ERROR: Source file does not exist: ${inputPath}`);
    process.exit(1);
  }

  let quality = 82;
  let maxDim = 1440;
  let success = false;
  let finalSize = 0;

  while (!success && quality >= 65) {
    const vf = `"scale='if(gt(iw,ih),min(${maxDim},iw),-1)':'if(gt(iw,ih),-1,min(${maxDim},ih))'"`;
    const cmd = `ffmpeg -y -i "${inputPath}" -vf ${vf} -c:v libwebp -quality ${quality} "${outputPath}"`;
    execSync(cmd, { stdio: 'pipe' });

    finalSize = fs.statSync(outputPath).size;
    if (finalSize < 290 * 1024) {
      success = true;
    } else {
      if (quality > 75) {
        quality -= 3;
      } else {
        maxDim -= 100;
        quality = 78;
      }
    }
  }

  const sizeKB = (finalSize / 1024).toFixed(2);
  const isUnder300KB = finalSize < 300 * 1024;

  results.push({
    file: item.out,
    source: item.src,
    sizeKB: `${sizeKB} KB`,
    valid: isUnder300KB
  });

  console.log(`Converted: ${item.out} | ${sizeKB} KB ${isUnder300KB ? '✓' : '✗'}`);
}

console.log('\n--- CONVERSION FINISHED ---');
console.table(results);
const allValid = results.every(r => r.valid);
console.log(`All files strictly < 300 KB: ${allValid ? 'YES ✓' : 'NO ✗'}`);
