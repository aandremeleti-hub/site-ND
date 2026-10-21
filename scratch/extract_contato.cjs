const fs = require('fs');
const s = fs.readFileSync('src/assets/illustrationContato.svg', 'utf8');
const m = s.match(/data:image\/([a-zA-Z]+);base64,([^"]+)/);
if (m) {
  console.log('Format:', m[1], 'Length:', m[2].length);
  fs.writeFileSync(`scratch/contato_extracted.${m[1]}`, Buffer.from(m[2], 'base64'));
  console.log(`Extracted to scratch/contato_extracted.${m[1]}`);
} else {
  console.log('No base64 match found');
}
