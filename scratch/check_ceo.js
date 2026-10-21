import sharp from 'sharp';

async function checkCeo() {
  const meta8 = await sharp('scratch/assets_extraidos/pptx_unzipped/ppt/media/image-8-1.jpeg').metadata();
  console.log('image-8-1:', meta8);
  const meta44 = await sharp('scratch/assets_extraidos/pptx_unzipped/ppt/media/image-44-1.png').metadata();
  console.log('image-44-1:', meta44);
}
checkCeo();
