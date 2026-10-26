const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'assets_extraidos/pptx_unzipped/ppt/slides');
const mediaDir = path.join(__dirname, 'assets_extraidos/pptx_unzipped/ppt/media');
const relsDir = path.join(slidesDir, '_rels');

[23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38].forEach(num => {
  const f = `slide${num}.xml`;
  const relFile = path.join(relsDir, `${f}.rels`);
  let imgs = [];
  if (fs.existsSync(relFile)) {
    const rel = fs.readFileSync(relFile, 'utf8');
    imgs = [...rel.matchAll(/Target="..\/media\/([^"]+)"/g)].map(m => m[1]);
  }
  const slideContent = fs.readFileSync(path.join(slidesDir, f), 'utf8');
  const texts = [...slideContent.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m => m[1].trim()).filter(Boolean);
  console.log(`Slide ${num}: imgs=[${imgs.join(', ')}] text: ${texts.join(' | ')}`);
});
