const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');

const conversions = [
  // 1. Feedback RPJ
  {
    desc: '[Residência RPJ - Obra executada pela Nova Dimensão Engenharia] por [paraguacu-felipe/1.png]',
    input: path.join(rootDir, 'fotos-tratadas/paraguacu-felipe/1.png'),
    output: path.join(rootDir, 'src/assets/feedback_rpj.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 2. Obras Residenciais
  {
    desc: '[Obra residencial finalizada com piscina] por [Codex 21_41_05.png]',
    input: path.join(rootDir, 'fotos-tratadas/fotos-tratadas-geral/Imagem do Codex 24 de set. de 2026, 21_41_05.png'),
    output: path.join(rootDir, 'src/assets/illustrationObrasResidenciais.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 3. Projetos - RPJ capa (rpj-01.webp)
  {
    desc: '[RPJ] por [rpj-nicolas/rmn06.png]',
    input: path.join(rootDir, 'fotos-tratadas/rpj-nicolas/rmn06.png'),
    output: path.join(rootDir, 'src/assets/projetos/rpj-01.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 4. Projetos - RVM 4ª foto (rvm-04.webp)
  {
    desc: '[rvm-04.webp] por [rcm-mauricio/rcm09.png.png]',
    input: path.join(rootDir, 'fotos-tratadas/rcm-mauricio/rcm09.png.png'),
    output: path.join(rootDir, 'src/assets/projetos/rvm-04.webp'),
    maxDim: 1440,
    quality: 84
  }
];

async function run() {
  console.log('=== Converting images to WebP ===');
  for (const item of conversions) {
    if (!fs.existsSync(item.input)) {
      throw new Error(`Input file not found: ${item.input}`);
    }
    const meta = await sharp(item.input).metadata();
    await sharp(item.input)
      .resize({
        width: meta.width > meta.height ? item.maxDim : undefined,
        height: meta.height >= meta.width ? item.maxDim : undefined,
        withoutEnlargement: true
      })
      .webp({
        quality: item.quality,
        effort: 6
      })
      .toFile(item.output);

    const stat = fs.statSync(item.output);
    const outMeta = await sharp(item.output).metadata();
    console.log(`✓ ${path.basename(item.output)}: ${(stat.size / 1024).toFixed(1)} KB (${outMeta.width}x${outMeta.height}) - ${item.desc}`);
  }
  console.log('=== All conversions finished successfully ===');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
