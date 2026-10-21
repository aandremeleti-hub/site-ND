import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const conversions = [
  {
    name: 'AboutHero (Sobre)',
    input: 'fotos-tratadas/rpj-nicolas/rmn01.png',
    output: 'src/assets/illustrationSobre.webp',
    maxDim: 1600,
    quality: 84,
    maxAllowedKB: 250
  },
  {
    name: 'QualityPolicy',
    input: 'fotos-tratadas/casa-cor-2025/casa03.png',
    output: 'src/assets/illustrationQualidade.webp',
    maxDim: 1400,
    quality: 83,
    maxAllowedKB: 150
  },
  {
    name: 'Gerenciamento de Obras',
    input: 'fotos-tratadas/rcm-mauricio/rcm03.png',
    output: 'src/assets/illustrationGerenciamento.webp',
    maxDim: 1200,
    quality: 83,
    maxAllowedKB: 200
  },
  {
    name: 'Obras Residenciais',
    input: 'fotos-tratadas/rpj-nicolas/rmn03.png',
    output: 'src/assets/illustrationObrasResidenciais.webp',
    maxDim: 1150,
    quality: 82,
    maxAllowedKB: 200
  },
  {
    name: 'Projetos de Engenharia',
    input: 'fotos-tratadas/vinicius-mamede/mam04.png',
    output: 'src/assets/illustrationProjetosEngenharia.webp',
    maxDim: 1150,
    quality: 82,
    maxAllowedKB: 200
  },
  {
    name: 'About CEO (Luiz Fernando Lahr)',
    input: 'scratch/assets_extraidos/pptx_unzipped/ppt/media/image-8-1.jpeg',
    output: 'src/assets/illustrationLuiz.webp',
    maxDim: 1200,
    quality: 84,
    maxAllowedKB: 200
  }
];

async function run() {
  console.log('--- Starting WebP conversions ---');
  let allPass = true;
  for (const item of conversions) {
    const inputPath = path.resolve(item.input);
    const outputPath = path.resolve(item.output);

    const inputStat = fs.statSync(inputPath);
    const meta = await sharp(inputPath).metadata();

    await sharp(inputPath)
      .resize({
        width: meta.width > meta.height ? item.maxDim : undefined,
        height: meta.height >= meta.width ? item.maxDim : undefined,
        withoutEnlargement: true
      })
      .webp({
        quality: item.quality,
        effort: 6
      })
      .toFile(outputPath);

    const outputStat = fs.statSync(outputPath);
    const outMeta = await sharp(outputPath).metadata();
    const sizeKB = (outputStat.size / 1024).toFixed(2);
    const pass = outputStat.size <= item.maxAllowedKB * 1024;
    if (!pass) allPass = false;

    console.log(`\n[${item.name}]`);
    console.log(`  Source: ${item.input} (${(inputStat.size / 1024 / 1024).toFixed(2)} MB, ${meta.width}x${meta.height})`);
    console.log(`  Output: ${item.output}`);
    console.log(`  Result: ${sizeKB} KB (${outputStat.size} bytes), ${outMeta.width}x${outMeta.height}`);
    console.log(`  Target: < ${item.maxAllowedKB} KB | Status: ${pass ? 'PASSED ✅' : 'FAILED ❌'}`);
  }
  console.log(`\nOVERALL STATUS: ${allPass ? 'ALL PASSED ✅' : 'SOME FAILED ❌'}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
