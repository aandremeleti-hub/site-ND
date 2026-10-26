const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('src/pages/Projetos/data/projectsData.ts', 'utf8');
const clean = code.replace(/import\s+[\s\S]*?;/g, '')
  .replace(/export\s+interface[\s\S]*?}/g, '')
  .replace(/export\s+type[\s\S]*?;/g, '')
  .replace(/export\s+const\s+PROJECTS_DATA[\s\S]*?=\s*(\[[\s\S]*?\]);[\s\S]*/, '$1')
  .replace(/\b(rpj|mjp|cmg|amp|rvm|casacor|ctm|rcm|rjab|rof|rpg|rpu|scp)_\d+\b/g, '"$1"');

const projects = eval(clean);

// PPTX slides data
const slidesDir = path.join('scratch', 'assets_extraidos/pptx_unzipped/ppt/slides');
const slides = {};
for (let i = 1; i <= 44; i++) {
  const f = `slide${i}.xml`;
  const p = path.join(slidesDir, f);
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const texts = [...c.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m => m[1].trim()).filter(Boolean);
    slides[i] = texts;
  }
}

console.log('Total projects in data:', projects.length);
projects.forEach(p => {
  console.log(`\n=== Project ${p.id}: ${p.title} (${p.badge}) ===`);
  console.log('Description:', p.description);
  console.log('Specs:', p.specs);
  console.log('Images length:', p.images.length);
});
