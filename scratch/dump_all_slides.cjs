const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'assets_extraidos/pptx_unzipped/ppt/slides');
const relsDir = path.join(slidesDir, '_rels');

const files = fs.readdirSync(slidesDir)
  .filter(f => /^slide\d+\.xml$/.test(f))
  .sort((a,b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

files.forEach(f => {
  const content = fs.readFileSync(path.join(slidesDir, f), 'utf8');
  const matches = [...content.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m => m[1].trim()).filter(Boolean);
  
  let images = [];
  const relFile = path.join(relsDir, `${f}.rels`);
  if (fs.existsSync(relFile)) {
    const relContent = fs.readFileSync(relFile, 'utf8');
    const imgMatches = [...relContent.matchAll(/Target="..\/media\/([^"]+)"/g)].map(m => m[1]);
    images = imgMatches;
  }
  
  console.log(`Slide ${f} | Images: ${images.join(', ')} | Text: ${matches.join(' | ')}`);
});
