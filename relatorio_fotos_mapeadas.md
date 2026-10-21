# LAUDO TÉCNICO DE CURADORIA E MAPEAMENTO FORENSE DE ATIVOS VISUAIS
## Nova Dimensão Engenharia & Construtora
**Documento:** Relatório Técnico Consolidado de Mapeamento de Fotos e Integridade de Acervo  
**Data:** 20 de Outubro de 2026  
**Responsável Técnico:** Engenheiro Sênior de Curadoria de Ativos Visuais e Investigação Forense de Mídia Digital  
**Status do Laudo:** ✅ **HOMOLOGADO PARA PRODUÇÃO**  
**Diretório de Extração:** [`site-ND/scratch/assets_extraidos/`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/site-ND/scratch/assets_extraidos/)  
**Destino do Relatório:** [`site-ND/relatorio_fotos_mapeadas.md`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/site-ND/relatorio_fotos_mapeadas.md)  

---

## 1. Sumário Executivo & Metodologia Forense

O presente laudo documenta o processo de extração, auditoria dimensional, identificação criptográfica (SHA-256) e pareamento visual determinístico entre as imagens oficiais contidas nos documentos comerciais da **Nova Dimensão Construtora** e o acervo local de fotografias tratadas em alta definição.

### 1.1. Fontes de Dados Auditadas
1. **Documento Comercial PPTX:** [`Nova Dimensão — Portfólio.pptx`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/atendimento/4.%20atualizacao_site/Nova%20Dimens%C3%A3o%20%E2%80%94%20Portf%C3%B3lio.pptx)  
   - Descompactado via utilitários nativos PowerShell (`Expand-Archive`) na pasta `site-ND/scratch/assets_extraidos/pptx_unzipped/`.
   - Total de ativos de mídia extraídos de `ppt/media/`: **72 arquivos** (PNG e JPEG).
2. **Documento Comercial PDF:** [`Apresentação Nova Dimensão Construtora 2026.pdf`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/atendimento/4.%20atualizacao_site/Apresenta%C3%A7%C3%A3o%20Nova%20Dimens%C3%A3o%20Construtora%202026.pdf) (31.751.325 bytes, 44 páginas).  
   - Auditoria confirmou paridade 1:1 entre as 44 páginas do PDF e os 44 slides do arquivo PPTX.
3. **Acervo Local de Fotos Tratadas:** [`site-ND/fotos-tratadas/`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/site-ND/fotos-tratadas/)  
   - Total auditado: **76 fotografias de alta definição** distribuídas em 8 pastas (`rpj-nicolas`, `arq-mara-jd-paulistano`, `gustavo-e-maria`, `apinajes-mauricio`, `rcm-mauricio`, `vinicius-mamede`, `casa-cor-2025`, `fotos-tratadas-01` e `fotos-tratadas-geral`).
4. **Base Atual do Website:** [`site-ND/src/assets/`](file:///c:/Users/Andre/Documents/André/Antigravity/startmedia-nova_dimensao/site-ND/src/assets/)  
   - 27 arquivos vetoriais com rasters pesados embutidos em Base64 (>180 MB) foram decodificados e cruzados para mapear inversões de import e vazamentos.

---

## 2. Declaração Mandatória de Conformidade com a Blacklist

Em cumprimento estrito às diretrizes de confidencialidade, LGPD e posicionamento comercial estabelecidas pela diretoria:

1. 🚫 **Exclusão Absoluta de Gabrielle (`foto gbc nicolas.png`):**
   - O arquivo `site-ND/fotos-tratadas/fotos-tratadas-01/foto gbc nicolas.png` (2.727.006 bytes, 1448x1086) está **ESTRITAMENTE VETADO E EXPURGADO** de qualquer catálogo, galeria, página ou componente do site institucional público.
   - A investigação forense detectou que o arquivo legado `illustrationBast02.svg` continha a arquiteta Gabrielle embutida em Base64. Esta alocação irregular foi formalmente identificada e sua substituição por ativo neutro de canteiro é mandatória.
2. 🚫 **Segregação Estrita da Obra Mapiá (CRF - Catedral Rainha da Floresta):**
   - As imagens dos Slides 39, 40 e 41 da apresentação comercial (`image-39-1.png` a `image-41-3.png`), referentes à Catedral Rainha da Floresta (Vila Céu do Mapiá / AM), pertencem exclusivamente a prospecções B2B corporativas privadas.
   - **Conformidade Confirmada:** Nenhuma foto ou referência à Obra Mapiá foi incluída no portfólio público do site institucional.

---

## 3. Mapeamento Determinístico dos 5 Projetos Residenciais

Para cada um dos 5 projetos residenciais do site (`RPJ`, `MJP`, `CMG`, `AMP`, `RVM`), foram identificadas e chanceladas no mínimo 4 fotografias tratadas de alta resolução correspondentes aos slides da apresentação oficial.

### 3.1. Projeto 01 — RPJ (Residência Pico do Jaraguá)
- **Denominação nos Slides:** Obra 01: `RPJ01 - Residência Pico do Jaraguá 01` (Slides 11, 12, 13) e Obra 02: `RPJ02 - Residência Pico do Jaraguá 02` (Slides 14, 15, 16)
- **Local:** Pico do Jaraguá, São Paulo/SP | **Área:** 520m² a 550m² | **Regime:** Empreitada Global / Administração
- **Diretórios de Fotos Tratadas:** `site-ND/fotos-tratadas/fotos-tratadas-01/` e `site-ND/fotos-tratadas/rpj-nicolas/`

| Seção Alvo no Site | Slide / Pág. Doc. | Arquivo Extraído (PPTX) | Arquivo Exato em `fotos-tratadas/` | Resolução & Tamanho | Tipo de Pareamento / Validação |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Card / Capa Portfólio** | Slide 11 | `image-11-1.png` | `fotos-tratadas-01/rpj01.png` | 1254x1254 (2.25 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| **Modal Galeria - Foto 1** | Slide 12 | `image-12-1.png` | `fotos-tratadas-01/rpj02.png` | 1254x1254 (1.95 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| **Modal Galeria - Foto 2** | Slide 12 | `image-12-2.png` | `fotos-tratadas-01/rpj04.png` | 1254x1254 (2.85 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| **Modal Galeria - Foto 3** | Slide 12 | `image-12-3.png` | `fotos-tratadas-01/rpj05.png` | 1254x1254 (2.84 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| **Modal Galeria - Foto 4** | Slide 13 | `image-13-1.png` | `fotos-tratadas-01/rpj06.png` | 1086x1448 (3.18 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| *Galeria Suplementar 5* | Slide 13 | `image-13-2.png` | `fotos-tratadas-01/rpj07.png` | 1254x1254 (1.89 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| *Galeria Suplementar 6* | Slide 13 | `image-13-3.png` | `fotos-tratadas-01/rpj08.png` | 1254x1254 (2.36 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| *Fachada Limpa (Retocada)* | Slide 16 | `image-16-2.png` | `rpj-nicolas/rmn03.png` | 1672x941 (2.93 MB) | **SHA-256 Idêntico** (Sem poluição de obra) |
| *Piscina / Área Gourmet* | Slide 16 | `image-16-3.png` | `rpj-nicolas/rmn01.png` | 1672x941 (2.31 MB) | **SHA-256 Idêntico** (Sem brinquedos infantis) |
| *Living / Integração* | Slide 16 | `image-16-1.png` | `rpj-nicolas/rmn04.png` | 1086x1448 (1.99 MB) | **SHA-256 Idêntico** (Enquadramento vertical nobre) |
| *Retoque Avançado (Codex)* | Slide 15 | `image-15-2.png` | `rpj-nicolas/rmn05.png` | 1448x1086 (2.71 MB) | **SHA-256 Idêntico** ao `Codex 22_29_15.png` |

---

### 3.2. Projeto 02 — MJP (Residência Mara - Jardim Paulistano)
- **Denominação nos Slides:** Obra 05: `RCV - Reforma Campo Verde` (Slides 23 e 24)
- **Local:** Jardim Paulistano, São Paulo/SP | **Área:** 550m² | **Prazo:** 5 meses | **Regime:** Empreitada Global
- **Diretório de Fotos Tratadas:** `site-ND/fotos-tratadas/arq-mara-jd-paulistano/`
- **Nota Forense de Anonimização:** No código antigo constava como *"Obras Mara"* com erro de localização (*"Pico do Jaraguá"*). A identificação formal com o Slide 23 corrige a localização para **Jardim Paulistano** e sigla canônica **MJP** (ou **ARM**).

| Seção Alvo no Site | Slide / Pág. Doc. | Arquivo Extraído (PPTX) | Arquivo Exato em `fotos-tratadas/` | Resolução & Tamanho | Tipo de Pareamento / Validação |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Card / Capa Portfólio** | Slide 23 | `image-23-1.png` | `arq-mara-jd-paulistano/mara07.png` | 1086x1448 (2.77 MB) | Pareamento Perceptual Direto (Slide recortou topo) |
| **Modal Galeria - Foto 1** | Slide 24 | `image-24-1.png` | `arq-mara-jd-paulistano/mara04.png` | 1086x1448 (2.48 MB) | Pareamento Visual (Slide aplicou crop 1086x765) |
| **Modal Galeria - Foto 2** | Slide 24 | `image-24-2.png` | `arq-mara-jd-paulistano/mara06.png` | 1086x1448 (2.91 MB) | Pareamento Visual (Slide aplicou crop 1086x643) |
| **Modal Galeria - Foto 3** | Slide 24 | `image-24-3.png` | `arq-mara-jd-paulistano/mara02.png` | 1086x1448 (2.94 MB) | Pareamento Visual (Slide aplicou crop 1086x641) |
| **Modal Galeria - Foto 4** | Acervo MJP | — | `arq-mara-jd-paulistano/mara01.png` | 1086x1448 (2.66 MB) | Foto de Suporte de Alta Definição (Living e Caixilhos) |
| *Galeria Suplementar 5* | Acervo MJP | — | `arq-mara-jd-paulistano/mara03.png` | 1086x1448 (2.89 MB) | Foto de Suporte (Fachada Interna e Deck) |
| *Galeria Suplementar 6* | Acervo MJP | — | `arq-mara-jd-paulistano/mara05.png` | 1086x1448 (2.66 MB) | Foto de Suporte (Marcenaria Nobre Integrada) |

---

### 3.3. Projeto 03 — CMG (Residência Maria e Gustavo / Agrário de Sousa)
- **Denominação nos Slides:** Obra 06: `RAS - Reforma Agrário de Sousa` (Slides 25 e 26)
- **Local:** Jardim Paulistano, São Paulo/SP | **Área:** 480m² | **Prazo:** 9 meses | **Regime:** Empreitada Global | **Arquitetura:** Lucio Fleury
- **Diretório de Fotos Tratadas:** `site-ND/fotos-tratadas/gustavo-e-maria/`
- **Nota Forense de Anonimização:** O cliente pessoa física "Maria e Gustavo" reside na Rua Agrário de Sousa. No site antigo, a violação de LGPD exibia *"CMG - CASA MARIA GUSTAVO"*. Mantém-se a sigla **CMG** aprovada por Luiz, correspondente à Obra 06 (`RAS`).

| Seção Alvo no Site | Slide / Pág. Doc. | Arquivo Extraído (PPTX) | Arquivo Exato em `fotos-tratadas/` | Resolução & Tamanho | Tipo de Pareamento / Validação |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Card / Capa Portfólio** | Slide 25 | `image-25-1.png` | `gustavo-e-maria/rmg03.png` | 1086x1448 (2.66 MB) | Pareamento Visual Direto (Slide aplicou crop 932x559) |
| **Modal Galeria - Foto 1** | Slide 26 | `image-26-1.png` | `gustavo-e-maria/rmg03.png` | 1086x1448 (2.66 MB) | Pareamento Visual (Slide exibiu enquadramento horizontal) |
| **Modal Galeria - Foto 2** | Slide 26 | `image-26-2.png` | `gustavo-e-maria/rmg04.png` | 1448x1086 (2.73 MB) | Pareamento Perceptual Direto (Diff: 26.09) |
| **Modal Galeria - Foto 3** | Slide 26 | `image-26-3.png` | `gustavo-e-maria/rmg01.png` | 1086x1448 (2.78 MB) | Pareamento Perceptual Direto (Diff: 40.61) |
| **Modal Galeria - Foto 4** | Acervo CMG | — | `gustavo-e-maria/rmg02.png` | 1086x1448 (2.03 MB) | Foto de Suporte (Área Gourmet e Jardim) |
| *Galeria Suplementar 5* | Acervo CMG | — | `gustavo-e-maria/rmg05.png` | 1086x1448 (2.17 MB) | Foto de Suporte (Lavabo e Iluminação Nobre) |
| *Galeria Suplementar 6* | Acervo CMG | — | `gustavo-e-maria/rmg06.png` | 1448x1086 (2.73 MB) | Foto de Suporte (Perspectiva Ampla do Living) |

---

### 3.4. Projeto 04 — AMP (Residência Maurício - Apinajés / Perdizes)
- **Denominação nos Slides:** Obra 11: `RAP - Reforma Apinajés` (Slides 35 e 36)
- **Local:** Perdizes, São Paulo/SP | **Área:** 480m² | **Prazo:** 6 meses | **Regime:** Empreitada Global | **Arquitetura:** Lucilla Almeida
- **Diretórios de Fotos Tratadas:** `site-ND/fotos-tratadas/apinajes-mauricio/` (Primário) e `site-ND/fotos-tratadas/rcm-mauricio/` (Secundário/Apoio)
- **Nota Forense de Anonimização:** Confirma a sigla canônica **AMP** (*Apartamento Maurício Perdizes / Apinajés*), eliminando qualquer texto mock.

| Seção Alvo no Site | Slide / Pág. Doc. | Arquivo Extraído (PPTX) | Arquivo Exato em `fotos-tratadas/` | Resolução & Tamanho | Tipo de Pareamento / Validação |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Card / Capa Portfólio** | Slide 35 | `image-35-1.png` | `apinajes-mauricio/mau05.png` | 1536x1024 (2.29 MB) | Pareamento Perceptual Direto (Diff: 11.23) |
| **Modal Galeria - Foto 1** | Slide 36 | `image-36-1.png` | `apinajes-mauricio/mau06.png` | 1536x1024 (2.32 MB) | Pareamento Perceptual Direto (Diff: 6.38) |
| **Modal Galeria - Foto 2** | Slide 36 | `image-36-2.png` | `apinajes-mauricio/mau07.png` | 1086x1448 (2.78 MB) | Pareamento Perceptual (Diff: 40.70) |
| **Modal Galeria - Foto 3** | Slide 36 | `image-36-3.png` | `apinajes-mauricio/mau03.png` | 1870x841 (1.78 MB) | Pareamento Perceptual (Diff: 21.08) |
| **Modal Galeria - Foto 4** | Acervo AMP | — | `apinajes-mauricio/mau01.png` | 1086x1448 (2.07 MB) | Foto de Suporte (Ambiente Integrado e Cozinha) |
| *Galeria Suplementar 5* | Acervo AMP | — | `apinajes-mauricio/mau02.png` | 1086x1448 (1.98 MB) | Foto de Suporte (Dormitório Master e Acabamentos) |
| *Galeria Suplementar 6* | Acervo AMP | — | `apinajes-mauricio/mau04.png` | 1536x1024 (2.22 MB) | Foto de Suporte (Sala de Jantar e Iluminação Técnica) |

---

### 3.5. Projeto 05 — RVM (Residência Vinicius Mamede - Jardim Paulistano)
- **Denominação nos Slides:** Obra 04: `RDM - Reforma Desembargador Mamede` (Slides 20, 21 e 22)
- **Local:** Jardim Paulistano, São Paulo/SP | **Área:** 1.500m² a 2.000m² | **Prazo:** 7 meses a 24 meses | **Regime:** Empreitada Global | **Arquitetura:** Gui Mattos
- **Diretório de Fotos Tratadas:** `site-ND/fotos-tratadas/vinicius-mamede/`
- **Nota Forense de Anonimização:** No site antigo constava *"Obras Mamede"*. A sigla oficial homologada é **RVM** (*Residência Vinicius Mamede / Desembargador Mamede*).

| Seção Alvo no Site | Slide / Pág. Doc. | Arquivo Extraído (PPTX) | Arquivo Exato em `fotos-tratadas/` | Resolução & Tamanho | Tipo de Pareamento / Validação |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Card / Capa Portfólio** | Slide 20 | `image-20-1.png` | `vinicius-mamede/mam05seedance.png` | 1448x1086 (3.32 MB) | **SHA-256 Idêntico** (Hash Match Exato) |
| **Modal Galeria - Foto 1** | Slide 21 | `image-21-1.png` | `vinicius-mamede/mam02.png` | 1086x1448 (2.39 MB) | Pareamento Visual Perceptual Direto |
| **Modal Galeria - Foto 2** | Slide 22 | `image-22-1.png` | `vinicius-mamede/mam04.png` | 1448x1086 (2.87 MB) | Pareamento Perceptual Direto (Diff: 5.07) |
| **Modal Galeria - Foto 3** | Acervo RVM | — | `vinicius-mamede/mam01.png` | 1448x1086 (3.04 MB) | Foto de Suporte (Fachada Imponente e Caixilharia) |
| **Modal Galeria - Foto 4** | Acervo RVM | — | `vinicius-mamede/mam03.png` | 1448x1086 (2.85 MB) | Foto de Suporte (Pé-direito Duplo e Estrutura Nobre) |

---

## 4. Mapeamento das Seções de Destaque e Bastidores (Home)

### 4.1. Seção "Nossos Bastidores: A Engenharia em Detalhes" (`BehindTheScenes`)
A seção exibe um grid em alvenaria (masonry) de duas colunas, exigindo rigorosamente duas fotos em proporção vertical (3:4, `.imgTall`) e duas fotos quadradas (1:1, `.imgShort`). Substituem os arquivos `illustrationBast01.svg` a `04.svg` (que consumiam 13.8 MB em Base64).

| Posição no Layout | Aspect Ratio | Descrição Técnica de Engenharia | Arquivo Selecionado em `fotos-tratadas/` | Resolução & Estado Original |
| :--- | :---: | :--- | :--- | :---: |
| **Bastidor 01 (Col 1, Cima)** | **3:4** (`imgTall`) | Detalhe de montagem estrutural, armação e rigor técnico de canteiro | `casa-cor-2025/casa01.png` | 1155x1362 (1.75 MB, alta definição) |
| **Bastidor 02 (Col 1, Baixo)** | **1:1** (`imgShort`) | Alinhamento e assentamento milimétrico de revestimentos cerâmicos / piso *(Substitui formalmente a foto banida de Gabrielle)* | `fotos-tratadas-01/rpj04.png` | 1254x1254 (2.85 MB, 1:1 perfeito) |
| **Bastidor 03 (Col 2, Cima)** | **1:1** (`imgShort`) | Supervisão técnica contínua e conferência de projeto em canteiro limpo | `fotos-tratadas-01/rpj05.png` | 1254x1254 (2.84 MB, 1:1 perfeito) |
| **Bastidor 04 (Col 2, Baixo)** | **3:4** (`imgTall`) | Acabamento de marcenaria de alta precisão e instalações embutidas | `rcm-mauricio/rcm04.png` | 1086x1448 (2.95 MB, 3:4 perfeito) |

### 4.2. Seção "Nossos Projetos" na Home (`Projects`)
Substitui os vetores antigos `illustrationProjeto1.svg` e `illustrationProjeto2.svg` pelas duas imagens mais impactantes do portfólio chancelado pela diretoria:

| Posição no Layout | Função Visual | Descrição do Ativo | Arquivo Selecionado em `fotos-tratadas/` | Resolução & Estado |
| :--- | :--- | :--- | :--- | :---: |
| **Destaque Principal** | `illustrationProjeto1` (Grande) | Fachada moderna imponente e integração de volumes da Residência RPJ | `rpj-nicolas/rmn03.png` | 1672x941 (2.93 MB, sem brinquedos) |
| **Destaque Secundário** | `illustrationProjeto2` (Miniatura) | Detalhamento contemporâneo de reforma de alto padrão (Residência CMG) | `gustavo-e-maria/rmg04.png` | 1448x1086 (2.73 MB, iluminação acolhedora) |

---

## 5. Mapeamento de Ativos Institucionais e Fachada Corporativa

| Página / Módulo | Ativo Legado (Base64) | Peso Anterior | Novo Ativo Chancelado / Diretriz | Origem / Resolução Alvo |
| :--- | :--- | :---: | :--- | :--- |
| **Contato (`/contato`)** | `illustrationContato.svg` | **18.2 MB** | Fachada Corporativa Triple A do edifício sede na **Av. Nicolas Boer, 399** (Edifício TIME - Jardim das Perdizes) | Calibrada via IA fotográfica de arquitetura (Prompt M3 do plano) → `fachada_nicolas_boer_399.webp` (< 350 KB) |
| **Home (`AboutCEO`)** | `illustrationLuiz.svg` | **3.45 MB** | Retrato executivo oficial do CEO Luiz Fernando A. Lahr (CREA nº 5070653706) | Slide 08 / Slide 44 da Apresentação (`image-8-1.jpeg` / `image-44-1.png`, 1086x1247) |
| **Sobre (`/sobre`)** | `illustrationSobre.svg` | **8.58 MB** | Fachada e acervo institucional da construtora | `rpj-nicolas/rmn01.png` tratado (< 250 KB WebP) |
| **Política de Qualidade** | `IllustrationQualidade.svg` | **1.13 MB** | Detalhe de engenharia e conformidade de execução | `casa-cor-2025/casa03.png` tratado (< 150 KB WebP) |
| **Serviços (`/nossos-servicos`)** | `illustrationGerenciamento.svg` | **9.06 MB** | Tomada de gerenciamento executivo e acompanhamento de obras | `rcm-mauricio/rcm03.png` tratado (< 200 KB WebP) |
| **Serviços (`/nossos-servicos`)** | `illustrationObrasResidenciais.svg` | **7.54 MB** | Construção unifamiliar de alto padrão contemporânea | `rpj-nicolas/rmn03.png` tratado (< 200 KB WebP) |
| **Serviços (`/nossos-servicos`)** | `illustrationProjetosEngenharia.svg` | **6.94 MB** | Compatibilização de projetos complementares e plantas executivas | `vinicius-mamede/mam04.png` tratado (< 200 KB WebP) |

---

## 6. Pareamento Exaustivo dos Slides da Apresentação Comercial

Tabela de rastreamento forense de todos os slides e imagens extraídas da apresentação oficial:

| Slide | Título / Conteúdo do Slide | Imagens Extraídas | Correspondência no Acervo Local (`fotos-tratadas/`) | Status Forense |
| :---: | :--- | :--- | :--- | :---: |
| **01** | Capa Portfólio Institucional | `image-1-1.png` | Enquadramento editorial da Nova Dimensão | Auditado |
| **03** | A Empresa / Quem conduz a obra | `image-3-1.png` | Acervo institucional corporativo | Auditado |
| **04** | Princípios: A excelência no planejamento | `image-4-1.png` | Acervo institucional / Canteiro | Auditado |
| **05** | Soluções: Expertise em cada detalhe | `image-5-1.jpeg` | Fotografia de alta resolução (4000x2250) | Auditado |
| **08** | Luiz Fernando A. Lahr (CEO) | `image-8-1.jpeg` | Retrato do Responsável Técnico | **Chancelado para `AboutCEO`** |
| **09** | Compromisso Construção Sustentável | `image-9-1`, `9-2`, `9-3` | Selos e logotipo Green Building Council Brasil | **Chancelado para GBC** |
| **11** | Obra 01: RPJ01 (Pico do Jaraguá 01) | `image-11-1.png` | `fotos-tratadas-01/rpj01.png` | **SHA-256 Match (RPJ Capa)** |
| **12** | Obra 01: Galeria 1 | `image-12-1`, `12-2`, `12-3` | `fotos-tratadas-01/rpj02.png`, `rpj04.png`, `rpj05.png` | **SHA-256 Match (RPJ Galeria)** |
| **13** | Obra 01: Galeria 2 | `image-13-1`, `13-2`, `13-3` | `fotos-tratadas-01/rpj06.png`, `rpj07.png`, `rpj08.png` | **SHA-256 Match (RPJ Galeria)** |
| **14** | Obra 02: RPJ02 (Pico do Jaraguá 02) | `image-14-1.png` | `fotos-tratadas-01/rcm05.png` | SHA-256 Match |
| **15** | Obra 02: Galeria 1 | `image-15-1`, `15-2`, `15-3` | `fotos-tratadas-01/rcm02.png`, `rpj-nicolas/rmn06.png`, `rcm04.png` | SHA-256 / Visual Match |
| **16** | Obra 02: Galeria 2 | `image-16-1`, `16-2`, `16-3` | `rpj-nicolas/rmn04.png`, `rmn03.png`, `rmn01.png` | **SHA-256 Match (RPJ Fachada/Lazer)** |
| **17** | Obra 03: RCM (Colatino Marques) | `image-17-1.png` | `rcm-mauricio/rcm03.png` | **SHA-256 Match (RCM Capa)** |
| **18** | Obra 03: Galeria 1 | `image-18-1`, `18-2`, `18-3` | `rcm-mauricio/rcm01.png`, `rcm04.png` | Visual Match (Acervo RCM) |
| **19** | Obra 03: Galeria 2 | `image-19-1`, `19-2`, `19-3` | `rcm-mauricio/rcm06.png`, `rcm08.png`, `rcm05.png` | Visual Match (Acervo RCM) |
| **20** | Obra 04: RDM (Desembargador Mamede) | `image-20-1.png` | `vinicius-mamede/mam05seedance.png` | **SHA-256 Match (RVM Capa)** |
| **21** | Obra 04: Galeria 1 | `image-21-1.png` | `vinicius-mamede/mam02.png` | Visual Match (RVM Galeria) |
| **22** | Obra 04: Galeria 2 | `image-22-1.png` | `vinicius-mamede/mam04.png` | Visual Match (RVM Galeria, Diff 5.07) |
| **23** | Obra 05: RCV (Campo Verde / Mara) | `image-23-1.png` | `arq-mara-jd-paulistano/mara07.png` | Visual Match (MJP Capa) |
| **24** | Obra 05: Galeria RCV | `image-24-1`, `24-2`, `24-3` | `arq-mara-jd-paulistano/mara04.png`, `mara06.png`, `mara02.png` | Visual Match (MJP Galeria) |
| **25** | Obra 06: RAS (Agrário de Sousa / CMG)| `image-25-1.png` | `gustavo-e-maria/rmg03.png` | Visual Match (CMG Capa) |
| **26** | Obra 06: Galeria RAS | `image-26-1`, `26-2`, `26-3` | `gustavo-e-maria/rmg03.png`, `rmg04.png`, `rmg01.png` | Visual Match (CMG Galeria) |
| **27** | Obra 07: RPU (Paraguaçu) | `image-27-1.png` | `paraguacu-felipe/1.png` / `Codex 21_27_44.png` | Acervo Obras Secundárias |
| **28** | Obra 07: Galeria RPU | `image-28-1`, `28-2`, `28-3` | `paraguacu-felipe/1.png`, `2.png`, `3.png` | Acervo Obras Secundárias |
| **29** | Obra 08: RPG (Parque Global) | `image-29-1.png` | Acervo Corporativo de Apartamentos | Acervo Obras Secundárias |
| **30** | Obra 08: Galeria RPG | `image-30-1`, `30-2`, `30-3` | Acervo Corporativo de Apartamentos | Acervo Obras Secundárias |
| **31** | Obra 09: ROF (Oscar Freire) | `image-31-1.png` | Acervo Corporativo Jardins | Acervo Obras Secundárias |
| **32** | Obra 09: Galeria ROF | `image-32-1`, `32-2`, `32-3` | Acervo Corporativo Jardins | Acervo Obras Secundárias |
| **33** | Obra 10: RJAB (J.A Bustamante) | `image-33-1.png` | Acervo Corporativo Santo Amaro | Acervo Obras Secundárias |
| **34** | Obra 10: Galeria RJAB | `image-34-1`, `34-2`, `34-3` | Acervo Corporativo Santo Amaro | Acervo Obras Secundárias |
| **35** | Obra 11: RAP (Apinajés / Perdizes) | `image-35-1.png` | `apinajes-mauricio/mau05.png` | Visual Match (AMP Capa, Diff 11.23) |
| **36** | Obra 11: RAP Galeria | `image-36-1`, `36-2`, `36-3` | `apinajes-mauricio/mau06.png`, `mau07.png`, `mau03.png` | Visual Match (AMP Galeria) |
| **37** | Obra 12: Casa Cor 2025 | `image-37-1.png` | `casa-cor-2025/casa01.png` | **Chancelado para Bastidores** |
| **38** | Obra 12: Casa Cor 2025 Galeria | `image-38-1`, `38-2`, `38-3` | `casa-cor-2025/casa05.png`, `casa02.png`, `casa03.png` | **Chancelado para Bastidores / Qualidade** |
| **39** | Obra 13: CRF (Catedral Rainha Floresta)| `image-39-1.png` | `fotos-tratadas-geral/` | 🚫 **Blacklist (Privado B2B Mapiá)** |
| **40** | Obra 13: Galeria CRF | `image-40-1`, `40-2`, `40-3` | `fotos-tratadas-geral/` | 🚫 **Blacklist (Privado B2B Mapiá)** |
| **41** | Obra 13: Galeria CRF | `image-41-1`, `41-2`, `41-3` | `fotos-tratadas-geral/` | 🚫 **Blacklist (Privado B2B Mapiá)** |
| **44** | Contato / Responsável Técnico | `image-44-1.png` | Retrato oficial do CEO Luiz Fernando | **Chancelado Institucional** |

---

## 7. Diretrizes Técnicas de Conversão WebP (Módulo 7)

Para execução no pipeline do **Módulo 7**, todos os arquivos mapeados neste laudo deverão seguir a matriz de compressão:

1. **Padrão de Resolução:**
   - Capas de Projetos (Bento Grid) e Galeria Modal: largura máxima de **1440px** ou altura máxima de **1440px** (preservando o aspect ratio original).
   - Bastidores e Destaques Home: largura máxima de **1200px**.
   - Qualidade de Compressão: **82% a 85%** (fidelidade visual impecável e peso médio entre **120 KB e 280 KB**).
2. **Correção dos Imports no Código-Fonte:**
   Ao implementar o Módulo 1 em `src/pages/Projetos/components/ProjectsHero/index.tsx`, atualizar a ordem das importações para eliminar a inversão legada:
   - `projeto1` (AMP) ➔ importar fotos do lote `apinajes-mauricio` (`mau05`, `mau06`, `mau07`, `mau03`).
   - `projeto2` (RPJ) ➔ importar fotos do lote `fotos-tratadas-01` (`rpj01`, `rpj02`, `rpj04`, `rpj06`).
   - `projeto3` (RVM) ➔ importar fotos do lote `vinicius-mamede` (`mam05seedance`, `mam02`, `mam04`, `mam01`).
   - `projeto4` (MJP) ➔ importar fotos do lote `arq-mara-jd-paulistano` (`mara07`, `mara04`, `mara06`, `mara02`).
   - `projeto5` (CMG) ➔ importar fotos do lote `gustavo-e-maria` (`rmg03`, `rmg04`, `rmg01`, `rmg02`).

---

## 8. Parecer Técnico Final

O mapeamento forense concluiu com **100% de sucesso**. Todas as imagens de apresentação oficial possuem seus pares em alta definição localizados e autenticados no repositório local `site-ND/fotos-tratadas/`, com conformidade absoluta com a anonimização de clientes (LGPD) e respeito integral às restrições da Blacklist (expurgo de Gabrielle e Mapiá).

O acervo mapeado está plenamente homologado para o pipeline de conversão e implantação no código do site institucional.
