import fs from 'fs';
import sharp from 'sharp';

async function check() {
  const content = fs.readFileSync('src/assets/illustrationLuiz.svg', 'utf8');
  const match = content.match(/xlink:href="data:image\/([^;]+);base64,([^"]+)"/);
  if (match) {
    const ext = match[1];
    const buf = Buffer.from(match[2], 'base64');
    const meta = await sharp(buf).metadata();
    console.log('Embedded in illustrationLuiz.svg:', meta.width, 'x', meta.height, meta.format, 'size:', (buf.length / 1024 / 1024).toFixed(2), 'MB');
  } else {
    console.log('No match found');
  }
}
check();
