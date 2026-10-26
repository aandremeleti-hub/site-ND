const fs = require('fs');
const path = require('path');

const rcmFiles = fs.readdirSync('fotos-tratadas/RCM');
const ctmFiles = fs.readdirSync('fotos-tratadas/CTM');

console.log('RCM files:', rcmFiles);
console.log('CTM files:', ctmFiles);

// Check if any files in PPTX match RCM files:
const mediaDir = 'scratch/assets_extraidos/pptx_unzipped/ppt/media';
const media = fs.readdirSync(mediaDir);

console.log('Let us check RCM files sizes:');
rcmFiles.forEach(f => {
  const sz = fs.statSync(path.join('fotos-tratadas/RCM', f)).size;
  console.log(`RCM ${f}: ${sz} bytes`);
});

console.log('\nLet us check CTM files sizes:');
ctmFiles.forEach(f => {
  const sz = fs.statSync(path.join('fotos-tratadas/CTM', f)).size;
  console.log(`CTM ${f}: ${sz} bytes`);
});
