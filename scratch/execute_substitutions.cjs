const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const scratchDir = path.join(rootDir, 'scratch');
const gdriveDownloadedDir = path.join(scratchDir, 'gdrive_downloads');

if (!fs.existsSync(gdriveDownloadedDir)) {
  fs.mkdirSync(gdriveDownloadedDir, { recursive: true });
}

const gdriveCmd = 'C:\\Users\\Andre\\.gemini\\config\\plugins\\gdrive\\skills\\gdrive\\scripts\\gdrive.cmd';

// 1. Download files from Google Drive
const gdriveFiles = [
  { id: '1GwwEhirGlOOCm5hJRJ5lWZCL3TyZv4yL', name: 'Imagem_do_Codex_24_de_set_de_2026_22_18_37.png' },
  { id: '1dpABpqhqoPDIt0jg0F9Yxl73ueCMU6zE', name: 'Imagem_do_Codex_24_de_set_de_2026_21_42_47.png' },
  { id: '1CLpGmzITKUBK5flGLpJHGxgag-9skSKu', name: 'rmn06.png' }
];

console.log('=== Step 1: Downloading files from Google Drive via /gdrive ===');
for (const file of gdriveFiles) {
  const targetPath = path.join(gdriveDownloadedDir, file.name);
  if (!fs.existsSync(targetPath)) {
    console.log(`Downloading ${file.name} (ID: ${file.id})...`);
    execSync(`& "${gdriveCmd}" readonly download ${file.id} --out "${targetPath}"`, { shell: 'powershell.exe', stdio: 'inherit' });
  } else {
    console.log(`Already downloaded: ${file.name}`);
  }
}

// 2. Define conversions
const conversions = [
  // 1. Home - Nossos Projetos (destaque principal)
  {
    desc: '[Residência RPJ - Fachada contemporânea e integração de volumes] por [Codex 22_18_37]',
    input: path.join(gdriveDownloadedDir, 'Imagem_do_Codex_24_de_set_de_2026_22_18_37.png'),
    output: path.join(rootDir, 'src/assets/destaque_projeto1.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 2. Home - Bastidores (bast01: imgTall 3:4)
  {
    desc: '[Montagem estrutural e rigor técnico em canteiro de obras] por [Codex 21_42_47]',
    input: path.join(gdriveDownloadedDir, 'Imagem_do_Codex_24_de_set_de_2026_21_42_47.png'),
    output: path.join(rootDir, 'src/assets/bastidores/bast01.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 3. Home - Bastidores (bast03: imgShort 1:1)
  {
    desc: '[Supervisão técnica contínua e conferência de projeto em canteiro limpo] por [rmn06.png]',
    input: path.join(gdriveDownloadedDir, 'rmn06.png'),
    output: path.join(rootDir, 'src/assets/bastidores/bast03.webp'),
    cropSquare: true,
    maxDim: 1200,
    quality: 84
  },
  // 4. Home - Bastidores (bast02: imgShort 1:1)
  {
    desc: '[Alinhamento e assentamento milimétrico de revestimentos] por [mau01.png]',
    input: path.join(rootDir, 'fotos-tratadas/apinajes-mauricio/mau01.png'),
    output: path.join(rootDir, 'src/assets/bastidores/bast02.webp'),
    cropSquare: true,
    maxDim: 1200,
    quality: 84
  },
  // 5. Home - Feedbacks (feedback_rpj.webp)
  {
    desc: '[Residência RPJ - Obra executada pela Nova Dimensão Engenharia] por [mau07.png]',
    input: path.join(rootDir, 'fotos-tratadas/apinajes-mauricio/mau07.png'),
    output: path.join(rootDir, 'src/assets/feedback_rpj.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 6. Home - Sustentabilidade (illustrationSustentavel.webp)
  {
    desc: '[Construção Sustentável - Certificação Green Building Council Brasil] por [mara02.png]',
    input: path.join(rootDir, 'fotos-tratadas/arq-mara-jd-paulistano/mara02.png'),
    output: path.join(rootDir, 'src/assets/illustrationSustentavel.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 7. Sobre - AboutHero (illustrationSobre.webp)
  {
    desc: '[Construindo Histórias com Qualidade] por [mara04.png]',
    input: path.join(rootDir, 'fotos-tratadas/arq-mara-jd-paulistano/mara04.png'),
    output: path.join(rootDir, 'src/assets/illustrationSobre.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 8. Sobre - Política de Qualidade (illustrationQualidade.webp)
  {
    desc: '[Política de Qualidade] por [rmg03.png]',
    input: path.join(rootDir, 'fotos-tratadas/gustavo-e-maria/rmg03.png'),
    output: path.join(rootDir, 'src/assets/illustrationQualidade.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 9. Nossos Serviços - Gerenciamento de Obras (illustrationGerenciamento.webp)
  {
    desc: '[Equipe trabalhando no gerenciamento de uma obra] por [mam03.png]',
    input: path.join(rootDir, 'fotos-tratadas/vinicius-mamede/mam03.png'),
    output: path.join(rootDir, 'src/assets/illustrationGerenciamento.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 10. Nossos Serviços - Projetos Complementares (illustrationProjetosEngenharia.webp)
  {
    desc: '[Projeto de engenharia em 3D] por [rcm01.png]',
    input: path.join(rootDir, 'fotos-tratadas/rcm-mauricio/rcm01.png'),
    output: path.join(rootDir, 'src/assets/illustrationProjetosEngenharia.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 11. Modal RPJ - 4ª foto (rpj-04.webp)
  {
    desc: '[Modal RPJ: 4ª foto] por [rmn06.png]',
    input: path.join(gdriveDownloadedDir, 'rmn06.png'),
    output: path.join(rootDir, 'src/assets/projetos/rpj-04.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 12. Modal MJP - 3ª foto (mjp-03.webp)
  {
    desc: '[Modal MJP: 3ª foto] por [mara03.png]',
    input: path.join(rootDir, 'fotos-tratadas/arq-mara-jd-paulistano/mara03.png'),
    output: path.join(rootDir, 'src/assets/projetos/mjp-03.webp'),
    maxDim: 1440,
    quality: 84
  },
  // 13. Modal AMP - 4ª foto (amp-04.webp)
  {
    desc: '[Modal AMP: 4ª foto] por [rcm09.png.png]',
    input: path.join(rootDir, 'fotos-tratadas/rcm-mauricio/rcm09.png.png'),
    output: path.join(rootDir, 'src/assets/projetos/amp-04.webp'),
    maxDim: 1440,
    quality: 84
  }
];

async function runConversions() {
  console.log('\n=== Step 2: Processing and Converting Images to WebP via Sharp ===');
  const results = [];
  
  for (const item of conversions) {
    if (!fs.existsSync(item.input)) {
      throw new Error(`Source file missing: ${item.input}`);
    }
    
    const meta = await sharp(item.input).metadata();
    let pipeline = sharp(item.input);
    
    if (item.cropSquare) {
      // 1:1 square crop from center
      const side = Math.min(meta.width, meta.height);
      const targetSide = Math.min(side, item.maxDim);
      pipeline = pipeline.resize(targetSide, targetSide, {
        fit: 'cover',
        position: 'center'
      });
    } else {
      pipeline = pipeline.resize({
        width: meta.width > meta.height ? item.maxDim : undefined,
        height: meta.height >= meta.width ? item.maxDim : undefined,
        withoutEnlargement: true
      });
    }
    
    pipeline = pipeline.webp({
      quality: item.quality,
      effort: 6
    });
    
    await pipeline.toFile(item.output);
    const outStat = fs.statSync(item.output);
    const outMeta = await sharp(item.output).metadata();
    
    const sizeKB = (outStat.size / 1024).toFixed(1);
    results.push({
      Target: path.basename(item.output),
      Size: `${sizeKB} KB`,
      Dimensions: `${outMeta.width}x${outMeta.height}`,
      Status: 'OK'
    });
    console.log(`✓ ${path.basename(item.output)}: ${sizeKB} KB (${outMeta.width}x${outMeta.height}) - ${item.desc}`);
  }
  
  console.log('\n=== Summary Table ===');
  console.table(results);
}

runConversions().catch(err => {
  console.error('Conversion error:', err);
  process.exit(1);
});
