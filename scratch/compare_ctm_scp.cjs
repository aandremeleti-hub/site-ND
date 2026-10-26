const fs = require('fs');
const path = require('path');

// Let's compare file sizes, metadata or visual match
const ctmFiles = fs.readdirSync('fotos-tratadas/CTM').map(f => ({ name: f, size: fs.statSync(path.join('fotos-tratadas/CTM', f)).size }));
const scpFiles = fs.readdirSync('fotos-tratadas/SCP').map(f => ({ name: f, size: fs.statSync(path.join('fotos-tratadas/SCP', f)).size }));

console.log('CTM files:', ctmFiles);
console.log('SCP files:', scpFiles);

const mediaFiles = fs.readdirSync('scratch/assets_extraidos/pptx_unzipped/ppt/media').map(f => ({
  name: f,
  size: fs.statSync(path.join('scratch/assets_extraidos/pptx_unzipped/ppt/media', f)).size
}));

console.log('\nChecking media matches:');
ctmFiles.forEach(c => {
  const match = mediaFiles.filter(m => Math.abs(m.size - c.size) < 100);
  if (match.length) {
    console.log(`CTM ${c.name} (${c.size}) matches media:`, match);
  }
});

scpFiles.forEach(s => {
  const match = mediaFiles.filter(m => Math.abs(m.size - s.size) < 100);
  if (match.length) {
    console.log(`SCP ${s.name} (${s.size}) matches media:`, match);
  }
});
