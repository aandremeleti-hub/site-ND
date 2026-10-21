import sharp from 'sharp';

async function testWebp() {
  const buf8 = await sharp('scratch/assets_extraidos/pptx_unzipped/ppt/media/image-8-1.jpeg')
    .webp({ quality: 84 })
    .toBuffer();
  console.log('image-8-1 WebP size:', buf8.length, 'bytes (', (buf8.length / 1024).toFixed(1), 'KB)');

  const buf44 = await sharp('scratch/assets_extraidos/pptx_unzipped/ppt/media/image-44-1.png')
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toBuffer();
  console.log('image-44-1 WebP size:', buf44.length, 'bytes (', (buf44.length / 1024).toFixed(1), 'KB)');
}
testWebp();
