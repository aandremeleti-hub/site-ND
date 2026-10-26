const fs = require('fs');
const path = require('path');
const slidesDir = path.join(__dirname, 'assets_extraidos/pptx_unzipped/ppt/slides');
fs.readdirSync(slidesDir).filter(f => f.endsWith('.xml') && !f.includes('rels')).forEach(f => {
  const c = fs.readFileSync(path.join(slidesDir, f), 'utf8');
  const matches = [...c.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m => m[1]);
  matches.forEach(t => {
    if (/\b[A-Z]{3,4}\b/.test(t) && !['NOVA', 'OBRA', 'LOCAL', 'AREA', 'ÁREA', 'PRAZO', 'REGIME', 'CLIENTE', 'ICEFLU', 'CREA', 'SITE', 'FGV', 'FIA', 'USP', 'PMI', 'ABNT', 'NBR', 'ART'].includes(t.trim())) {
      console.log(`${f}: ${t}`);
    }
  });
});
