const fs = require('fs');
const path = require('path');

const pdfPath = 'C:\\Users\\Andre\\Documents\\André\\Antigravity\\startmedia-nova_dimensao\\atendimento\\4. atualizacao_site\\Apresentação Nova Dimensão Construtora 2026.pdf';
if (fs.existsSync(pdfPath)) {
  const buf = fs.readFileSync(pdfPath);
  const str = buf.toString('latin1');
  const regex = /(CTM|SCP|Colatino|Bustamante|Oscar|Paraguaçu|Campo Verde|Agr[áa]rio|Jaragu[áa]|Mamede)/gi;
  let m;
  const found = new Set();
  while ((m = regex.exec(str)) !== null) {
    found.add(m[0]);
  }
  console.log('Matches in PDF:', Array.from(found));
} else {
  console.log('PDF not found');
}
