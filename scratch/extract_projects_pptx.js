const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'assets_extraidos/pptx_unzipped/ppt/slides');
const files = fs.readdirSync(slidesDir)
  .filter(f => /^slide\d+\.xml$/.test(f))
  .sort((a,b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

const projects = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(slidesDir, f), 'utf8');
  const matches = [...content.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m => m[1].trim()).filter(Boolean);
  const text = matches.join(' ');
  if (text.includes('OBRA') || text.includes('CASA COR')) {
    console.log(`\n================= ${f} =================`);
    console.log(matches.join(' | '));
  }
});
