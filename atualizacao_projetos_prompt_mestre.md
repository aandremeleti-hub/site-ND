# Prompt Mestre de Orquestração: Atualização da Seção de Projetos (`_section_1jzo1_1`)

> **Protocolo de Execução:** `/boost`  
> **Papel do Leitor:** Você é o **Agente Orquestrador** em uma nova sessão. Sua missão é comandar a execução de ponta a ponta desta demanda, coordenando os subagentes especializados sem realizar implementações monolíticas diretamente na thread principal.

---

## 1. Contexto e Escopo da Missão

A seção de projetos (`_section_1jzo1_1`) do site da **Nova Dimensão** atualmente exibe apenas 5 projetos legados (`RPJ`, `MJP`, `CMG`, `AMP` e `RVM`).  
O objetivo desta missão é atualizar a seção incluindo **8 novos projetos**, totalizando 13 obras no portfólio interativo do site.

### Novos Projetos a Incluir
1. `CASA COR 2025`
2. `CTM`
3. `RCM`
4. `RJAB`
5. `ROF`
6. `RPG`
7. `RPU`
8. `SCP`

---

## 2. Pacote de Documentos e Caminhos Absolutos

O novo Orquestrador e seus subagentes devem utilizar estritamente os seguintes caminhos no disco:

- **Raiz do Projeto do Site:**  
  `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND`
- **Pasta com os Novos Assets / Fotos Tratadas:**  
  `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\fotos-tratadas`
- **Arquivo PPTX de Referência Cadastral e Dados Técnicos:**  
  `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx`
- **Regras e Manual de Conformidade StartMedia:**  
  `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\startmedia-compliance\SKILL.md`  
  `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\referencia_manual_startmedia.md` (ou referências internas em `.agents/rules/`)

---

## 3. Diretrizes e Requisitos Centrais de Design e Negócio

1. **Formato das Imagens (WebP Obrigatório):**  
   Todas as fotos novas devem estar no formato `.webp`. Caso as fotos na pasta de origem estejam em outro formato (ex.: JPG, PNG), o subagente executor deve convertê-las para WebP antes de referenciá-las nos assets públicos do site.
2. **Padrão de Layout Diferenciado da Seção:**  
   A seção `_section_1jzo1_1` possui uma cadência rítmica de cards onde algumas fotos ficam na horizontal (deitadas) e outras na vertical (em pé). O subagente frontend deve manter rigorosamente essa alternância estética harmoniosa ao dispor os 8 novos projetos junto aos existentes.
3. **Modal de Detalhes com 4 Fotos por Obra:**  
   Cada pasta de obra contém 4 fotos tratadas. O clique em cada card abre um modal contendo a galeria com exatamente as 4 fotos da respectiva obra.
4. **Fidelidade Cadastral com o Portfólio PPTX:**  
   Os campos de metadados técnicos de cada obra (Arquiteto/Autoria, Área/Metragem, Ano, Tipologia, Escopo de Serviço, etc.) devem ser extraídos estritamente do arquivo `Nova Dimensão — Portfólio.pptx`.
5. **Geração de Descrições Concisas e Seguras:**  
   As descrições textuais das obras devem ser redigidas observando a estética das fotos, mantendo um tom arquitetônico sofisticado e genérico, **sem citar endereços, números de lote, clientes pessoais ou dados sigilosos/específicos**.

---

## 4. Topologia de Execução Multiagente

A execução deve seguir uma esteira orquestrada com 4 subagentes especializados, garantindo divisão estrita de responsabilidades:

```mermaid
flowchart TD
    O["Agente Orquestrador (/boost)"] --> S1["Subagente 1: Integrador Frontend & Assets\n(Conversão WebP, Inclusão de Dados e UI)"]
    S1 --> S2["Subagente 2: Auditor de Dados PPTX\n(Conferência 100% Fiel dos Metadados vs PPTX)"]
    S1 --> S3["Subagente 3: Auditor StartMedia Compliance\n(Conformidade com Manual e Regras)"]
    S2 --> S4["Subagente 4: Engenheiro de Testes & QA\n(Build, Testes, Modais, Imagens e Responsividade)"]
    S3 --> S4
    S4 --> F["Homologação Final e Entrega"]
```

---

## 5. Blocos de Prompts dos Subagentes (Prontos para `invoke_subagent`)

---

### Bloco 1: Subagente Integrador Frontend & Assets

```markdown
Role: Senior Frontend & Asset Integration Engineer
Task: Integrar os 8 novos projetos na seção de projetos (_section_1jzo1_1) e preparar os assets correspondentes.

Contexto e Arquivos:
- Workspace: C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND
- Pasta de Fotos de Entrada: C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\fotos-tratadas
  Pastas dos projetos: CASA COR 2025, CTM, RCM, RJAB, ROF, RPG, RPU, SCP.
- Arquivo de Dados Técnicos: C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx
- Seção Alvo: Localizar no código onde a classe/identificador `_section_1jzo1_1` ou o componente de projetos está implementado.

Objetivo:
Atualizar a lista de projetos do site para incluir as 8 novas obras, garantindo que todas as imagens estejam em formato .webp, que os cards sigam o padrão alternado de orientação (vertical e horizontal) e que o modal de cada obra exiba as 4 fotos correspondentes com descrições genéricas elegantes.

Diretrizes e Regras de Execução (Viés Positivo):
1. Copie e converta (caso necessário) as 4 fotos de cada projeto para a pasta pública de imagens do projeto no formato `.webp`.
2. Mantenha nomes de arquivos padronizados e organizados por slug do projeto.
3. Extraia do arquivo PPTX (`Nova Dimensão — Portfólio.pptx`) os dados técnicos correspondentes a cada projeto (Arquiteto, Área construída, Ano, Categoria/Escopo).
4. Redija uma descrição arquitetônica refinada de 2 a 3 frases baseada nos elementos visuais das fotos, com foco em materialidade, volumetria e iluminação natural, omitindo endereços ou dados privados.
5. Preserve a estrutura existente dos projetos legados (RPJ, MJP, CMG, AMP, RVM) e adicione as 8 novas obras mantendo a harmonia rítmica do grid (fotos verticais vs horizontais).
6. Assegure que o modal de detalhes renderize as 4 fotos em alta definição com suporte a navegação/visualização fluida.

Formato de Saída Esperado:
Relatório sintético listando os arquivos modificados, caminhos das imagens WebP criadas, estrutura dos novos objetos de dados adicionados e confirmação de prontidão para auditoria.
```

---

### Bloco 2: Subagente Auditor de Dados & Portfólio PPTX

```markdown
Role: Data Integrity & Architectural Auditor
Task: Auditar a conformidade de 100% dos dados técnicos inseridos no site contra o portfólio oficial em PPTX.

Contexto e Arquivos:
- Código Atualizado: Arquivos de dados e componentes de projetos em `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND`
- Documento Fonte da Verdade: `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx`
- Obras sob Auditoria: CASA COR 2025, CTM, RCM, RJAB, ROF, RPG, RPU, SCP.

Objetivo:
Validar se cada campo exibido no site (nome da obra, autoria/arquiteto, área em m², ano de execução, tipologia e escopo) corresponde exatamente aos dados registrados no portfólio PPTX da Nova Dimensão, garantindo risco zero de divergência cadastral.

Diretrizes e Regras de Execução (Viés Positivo):
1. Inspecione cada slide ou registro do PowerPoint referente às 8 obras.
2. Compare campo a campo com os dados atribuídos aos projetos no código-fonte.
3. Verifique se as descrições textuais cumprem a diretriz de serem genéricas e seguras (sem expor endereços residenciais específicos ou dados sensíveis).
4. Emita uma matriz comparativa (Tabela Markdown) com as colunas: Obra | Campo | Valor no PPTX | Valor no Código | Status (Conforme / Divergente).
5. Aponte imediatamente qualquer discrepância encontrada para correção antes do avanço para homologação.

Formato de Saída Esperado:
Dossiê de Conformidade de Dados contendo a tabela comparativa completa e o veredito formal: APROVADO ou NECESSITA REVISÃO.
```

---

### Bloco 3: Subagente Auditor StartMedia Compliance

```markdown
Role: Senior Code Compliance & Quality Auditor
Task: Auditar todo o código gerado e modificado segundo as normas estritas do StartMedia Compliance.

Contexto e Referências:
- Diretrizes StartMedia: `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\startmedia-compliance\SKILL.md`
- Manual de Referência: `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\referencia_manual_startmedia.md`
- Arquivos modificados na sessão de atualização de projetos.

Objetivo:
Certificar que os novos componentes, estruturas de dados, estilos e convenções de código atendem integralmente aos padrões arquiteturais, semânticos, de acessibilidade e de boas práticas preconizados pelo StartMedia.

Diretrizes e Regras de Execução (Viés Positivo):
1. Verifique tipagens TypeScript estritas, ausência de valores `any` implícitos e conformidade com os tipos de dados existentes.
2. Garanta que a estilização respeite as classes utilitárias e variáveis do design system do projeto (Tailwind / CSS Modules), sem uso de CSS inline desnecessário ou regras arbitrárias conflitantes.
3. Valide tags semânticas e acessibilidade (atributos `alt` descritivos e amigáveis em todas as imagens WebP, atributos ARIA e foco acessível no modal).
4. Garanta que a separação de responsabilidades (dados vs apresentação UI) esteja preservada.
5. Confirme a conformidade com as regras ditatoriais do manual StartMedia.

Formato de Saída Esperado:
Relatório de Auditoria de Compliance contendo lista de arquivos auditados, verificação de conformidade item a item e o veredito formal de aprovação.
```

---

### Bloco 4: Subagente Engenheiro de Testes & QA

```markdown
Role: Senior QA & Automated Testing Engineer
Task: Validar o funcionamento completo da seção de projetos atualizada, cobrindo testes de build, carregamento de assets WebP, comportamento dos modais e responsividade.

Contexto e Aplicação:
- Raiz do Projeto: `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND`
- Seção: `_section_1jzo1_1` com os 13 projetos (5 legados + 8 novos).

Objetivo:
Comprovar através de execução e testes práticos que a aplicação compila sem erros, que não há links quebrados de imagens, que todos os modais abrem e fecham corretamente com as 4 fotos de cada obra e que o layout mantém a alternância estética em todas as resoluções de tela.

Diretrizes e Regras de Execução (Viés Positivo):
1. Execute o build de produção do projeto (ex.: `npm run build` ou o script configurado no `package.json`) e confirme a inexistência de warnings ou erros de compilação.
2. Execute a suíte de testes existente (ex.: `npm test` ou linters configurados) e garanta taxa de 100% de sucesso.
3. Inspecione a integridade das imagens: confirme que as 32 novas fotos (4 fotos x 8 obras) existem fisicamente nos caminhos corretos, estão no formato `.webp` e possuem tamanho otimizado.
4. Valide a funcionalidade interativa dos modais para cada uma das obras, assegurando renderização correta das 4 fotos e fechamento sem travamentos de estado.
5. Verifique a responsividade do grid em viewports mobile (375px), tablet (768px) e desktop (1280px+), atestando a coerência visual das orientações em pé e deitadas.

Formato de Saída Esperado:
Relatório de QA contendo log de execução do build/testes, checklist visual e funcional validado, e o parecer de homologação final para entrega.
```

---

## 6. Critérios de Homologação Final (Checklist de Aceite)

- [ ] Os 8 novos projetos (`CASA COR 2025`, `CTM`, `RCM`, `RJAB`, `ROF`, `RPG`, `RPU`, `SCP`) estão presentes na seção junto aos 5 originais.
- [ ] Todas as 32 fotos novas estão convertidas/integradas em formato `.webp`.
- [ ] O grid mantém a alternância estética de fotos verticais e horizontais.
- [ ] O modal de cada projeto abre exibindo as 4 fotos correspondentes com alta qualidade.
- [ ] Os dados cadastrais de cada obra conferem 100% com o arquivo `Nova Dimensão — Portfólio.pptx`.
- [ ] As descrições são arquitetonicamente elegantes, genéricas e sem dados de endereço sensíveis.
- [ ] Build e validação do projeto executados sem erros.
- [ ] Auditoria de `startmedia-compliance` aprovada.
