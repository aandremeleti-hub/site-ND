const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('src/pages/Projetos/data/projectsData.ts', 'utf8');
const clean = code.replace(/import\s+[\s\S]*?;/g, '')
  .replace(/export\s+interface[\s\S]*?}/g, '')
  .replace(/export\s+type[\s\S]*?;/g, '')
  .replace(/export\s+const\s+PROJECTS_DATA[\s\S]*?=\s*(\[[\s\S]*?\]);[\s\S]*/, '$1')
  .replace(/\b(rpj|mjp|cmg|amp|rvm|casacor|ctm|rcm|rjab|rof|rpg|rpu|scp)_\d+\b/g, '"img"');

const projects = eval(clean);

let errors = 0;
projects.forEach((p, idx) => {
  if (!p.id) { console.error('Missing id in project', idx); errors++; }
  if (!p.badge) { console.error('Missing badge in', p.title); errors++; }
  if (!p.title) { console.error('Missing title in project', idx); errors++; }
  if (!p.description) { console.error('Missing description in', p.title); errors++; }
  if (!p.image) { console.error('Missing image in', p.title); errors++; }
  if (!p.images || p.images.length !== 4) { console.error('Images not 4 in', p.title, p.images?.length); errors++; }
  const specs = ['areaConstruida', 'tipoObra', 'prazoExecucao', 'anoConclusao', 'localizacao', 'regimeExecucao'];
  specs.forEach(s => {
    if (!p.specs || !p.specs[s] || p.specs[s].trim() === '') {
      console.error('Missing spec', s, 'in', p.title);
      errors++;
    }
  });
});

console.log('Total schema errors found:', errors);
