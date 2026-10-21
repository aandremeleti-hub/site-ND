const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.resolve('src/assets/projetos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const conversions = [
  // RPJ
  { src: 'fotos-tratadas/fotos-tratadas-01/rpj01.png', out: 'rpj-01.webp' },
  { src: 'fotos-tratadas/fotos-tratadas-01/rpj02.png', out: 'rpj-02.webp' },
  { src: 'fotos-tratadas/fotos-tratadas-01/rpj04.png', out: 'rpj-03.webp' },
  { src: 'fotos-tratadas/fotos-tratadas-01/rpj06.png', out: 'rpj-04.webp' },

  // MJP
  { src: 'fotos-tratadas/arq-mara-jd-paulistano/mara07.png', out: 'mjp-01.webp' },
  { src: 'fotos-tratadas/arq-mara-jd-paulistano/mara04.png', out: 'mjp-02.webp' },
  { src: 'fotos-tratadas/arq-mara-jd-paulistano/mara06.png', out: 'mjp-03.webp' },
  { src: 'fotos-tratadas/arq-mara-jd-paulistano/mara02.png', out: 'mjp-04.webp' },

  // CMG
  { src: 'fotos-tratadas/gustavo-e-maria/rmg03.png', out: 'cmg-01.webp' },
  { src: 'fotos-tratadas/gustavo-e-maria/rmg04.png', out: 'cmg-02.webp' },
  { src: 'fotos-tratadas/gustavo-e-maria/rmg01.png', out: 'cmg-03.webp' },
  { src: 'fotos-tratadas/gustavo-e-maria/rmg02.png', out: 'cmg-04.webp' },

  // AMP
  { src: 'fotos-tratadas/apinajes-mauricio/mau05.png', out: 'amp-01.webp' },
  { src: 'fotos-tratadas/apinajes-mauricio/mau06.png', out: 'amp-02.webp' },
  { src: 'fotos-tratadas/apinajes-mauricio/mau07.png', out: 'amp-03.webp' },
  { src: 'fotos-tratadas/apinajes-mauricio/mau03.png', out: 'amp-04.webp' },

  // RVM
  { src: 'fotos-tratadas/vinicius-mamede/mam05seedance.png', out: 'rvm-01.webp' },
  { src: 'fotos-tratadas/vinicius-mamede/mam02.png', out: 'rvm-02.webp' },
  { src: 'fotos-tratadas/vinicius-mamede/mam04.png', out: 'rvm-03.webp' },
  { src: 'fotos-tratadas/vinicius-mamede/mam01.png', out: 'rvm-04.webp' },
];

console.log(`Starting optimized conversion of ${conversions.length} project images...`);

const results = [];

for (const item of conversions) {
  const inputPath = path.resolve(item.src);
  const outputPath = path.join(targetDir, item.out);

  if (!fs.existsSync(inputPath)) {
    console.error(`ERROR: Source file does not exist: ${inputPath}`);
    process.exit(1);
  }

  let quality = 84;
  let maxDim = 1440;
  let success = false;
  let finalSize = 0;

  while (!success && quality >= 70) {
    const vf = `"scale='if(gt(iw,ih),min(${maxDim},iw),-1)':'if(gt(iw,ih),-1,min(${maxDim},ih))'"`;
    const cmd = `ffmpeg -y -i "${inputPath}" -vf ${vf} -c:v libwebp -quality ${quality} "${outputPath}"`;
    execSync(cmd, { stdio: 'pipe' });

    finalSize = fs.statSync(outputPath).size;
    if (finalSize < 295 * 1024) {
      success = true;
    } else {
      if (quality > 78) {
        quality -= 3;
      } else {
        maxDim -= 100;
        quality = 82;
      }
    }
  }

  const sizeKB = (finalSize / 1024).toFixed(2);
  const isUnder300KB = finalSize < 300 * 1024;

  results.push({
    file: item.out,
    source: item.src,
    quality,
    maxDim,
    sizeKB: `${sizeKB} KB`,
    valid: isUnder300KB,
  });

  console.log(`Converted: ${item.out} | ${sizeKB} KB (q=${quality}, dim=${maxDim}) ${isUnder300KB ? '✓' : '✗'}`);
}

console.log('\n--- CONVERSION SUMMARY ---');
console.table(results);
const allValid = results.every(r => r.valid);
console.log(`All files strictly < 300 KB: ${allValid ? 'YES ✓' : 'NO ✗'}`);
