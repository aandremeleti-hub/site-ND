import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  { key: 'AboutHero (Sobre)', file: 'fotos-tratadas/rpj-nicolas/rmn01.png' },
  { key: 'QualityPolicy', file: 'fotos-tratadas/casa-cor-2025/casa03.png' },
  { key: 'Gerenciamento', file: 'fotos-tratadas/rcm-mauricio/rcm03.png' },
  { key: 'ObrasResidenciais', file: 'fotos-tratadas/rpj-nicolas/rmn03.png' },
  { key: 'ProjetosEngenharia', file: 'fotos-tratadas/vinicius-mamede/mam04.png' },
  { key: 'CEO Slide 8', file: 'scratch/assets_extraidos/pptx_unzipped/ppt/media/image-8-1.jpeg' },
  { key: 'CEO Slide 44', file: 'scratch/assets_extraidos/pptx_unzipped/ppt/media/image-44-1.png' }
];

async function inspect() {
  for (const img of images) {
    const fullPath = path.resolve(img.file);
    if (!fs.existsSync(fullPath)) {
      console.log(`NOT FOUND: ${img.key} at ${fullPath}`);
      continue;
    }
    const stat = fs.statSync(fullPath);
    const meta = await sharp(fullPath).metadata();
    console.log(`[${img.key}]`);
    console.log(`  File: ${img.file}`);
    console.log(`  Size: ${(stat.size / 1024 / 1024).toFixed(2)} MB (${stat.size} bytes)`);
    console.log(`  Dimensions: ${meta.width}x${meta.height}, format: ${meta.format}, channels: ${meta.channels}`);
  }
}

inspect().catch(err => {
  console.error(err);
  process.exit(1);
});
