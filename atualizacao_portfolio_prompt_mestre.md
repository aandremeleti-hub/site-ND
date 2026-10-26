# PROMPT MESTRE DE EXECUÇÃO: ATUALIZAÇÃO DO PORTFÓLIO NOVA DIMENSÃO
> Gerado via `/boost-orchestrator` para consumo de ponta a ponta em nova sessão de agente orquestrador.

---

## 🎯 1. DIRETIVA DE PAPEL DO NOVO AGENTE (ORQUESTRADOR DA NOVA SESSÃO)

Você está assumindo esta missão em uma nova sessão como **Lead Technical Orchestrator & Systems Architect**.
Sua função principal é orquestrar a execução completa da missão descrita neste documento de forma desacoplada, utilizando subagentes especializados (`invoke_subagent`), aplicando barreiras de qualidade (quality gates) rigorosas e garantindo a entrega do portfólio atualizado no site da Nova Dimensão sem regressões.

> 🔴 **REGRA DE CONDUTA DO ORQUESTRADOR:**
> - Você NÃO deve escrever código manualmente nos componentes principais. Sua responsabilidade é coordenar, disparar subagentes especializados com os prompts deste arquivo, consolidar suas entregas e homologar os gates.
> - Nenhum avanço para a etapa seguinte será permitido sem a aprovação explícita e fundamentada em evidências factuais do subagente da etapa anterior.

---

## 📂 2. PACOTE DE DOCUMENTOS E LEITURA INICIAL

Antes de iniciar o despacho dos subagentes, carregue os seguintes caminhos absolutos no seu contexto operacional:

1. **Workspace do Projeto:**
   - `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND`
2. **Apresentação Fonte dos Dados Oficiais (PPTX):**
   - `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx`
3. **Diretório das Fotos Tratadas em WebP:**
   - `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\fotos-tratadas\`
   - Pastas dos 8 novos projetos: `CASA COR 2025`, `CTM`, `RCM`, `RJAB`, `ROF`, `RPG`, `RPU`, `SCP` (contendo exatamente 4 fotos cada).
4. **Seção Alvo no Site:**
   - Identificador / Componente: `[_section_1jzo1_1]` (seção de exibição de projetos com layout dinâmico e modal de 4 imagens).
5. **Manual de Conformidade STARTMEDIA:**
   - `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\startmedia-compliance\references\referencia_manual_startmedia.md`
6. **Runbooks de Suporte:**
   - Clean Code: `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\clean-code\SKILL.md`
   - Frontend Architecture: `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\frontend-architecture\SKILL.md`
   - Lint & Validate: `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\lint-and-validate\SKILL.md`
   - Verify Changes: `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\.agents\skills\verify-changes\SKILL.md`

---

## 🗺️ 3. TOPOLOGIA E MATRIZ DE DEPENDÊNCIAS DE EXECUÇÃO

```mermaid
flowchart TD
    Start["Início da Nova Sessão (Lead Technical Orchestrator)"] --> Phase1["Fase 1: Extração e Modelagem de Dados\n(Subagente: PortfolioDataExtractor)"]
    Phase1 --> Gate1{"Quality Gate 1:\nValidação de Dados & 4 Fotos WebP"}
    
    Gate1 -->|Aprovado| Phase2["Fase 2: Auditoria de Fidelidade ao PPTX\n(Subagente: PortfolioDataAuditor)"]
    Gate2{"Quality Gate 2:\nZero Divergência & Zero Vazamento"}
    Phase2 --> Gate2
    
    Gate2 -->|Aprovado| Phase3["Fase 3: Implementação e Refatoração Frontend\n(Subagente: FrontendEngineer)"]
    Phase3 --> Gate3{"Quality Gate 3:\nLayout Alternado & Modal 4 Fotos"}
    
    Gate3 -->|Aprovado| ParallelAudit["Fase 4: Auditorias Concorrentes em Paralelo"]
    ParallelAudit --> Phase4A["Subagente 4A:\nAuditor de Compliance STARTMEDIA\n(ComplianceAuditor)"]
    ParallelAudit --> Phase4B["Subagente 4B:\nEngenheiro de Testes e QA\n(QAVerificationEngineer)"]
    
    Phase4A --> Gate4{"Quality Gate 4:\nConformidade STARTMEDIA & Build 100% OK"}
    Phase4B --> Gate4
    
    Gate4 -->|Aprovado| FinalSignOff["Termo de Homologação Final & Encerramento"]
```

---

## 🤖 4. BLOCOS DE PROMPTS OPERACIONAIS DOS SUBAGENTES

Copie e utilize diretamente cada um dos blocos abaixo ao invocar os subagentes executores via `invoke_subagent`.

---

### SUBAGENTE 1: `PortfolioDataExtractor` (Extração e Estruturação de Dados)
- **Role:** Senior Data Engineer & Information Extraction Specialist
- **Ordem de Execução:** Fase 1

```markdown
Atue como Senior Data Engineer & Information Extraction Specialist com proficiência em análise de apresentações corporativas, engenharia de metadados e modelagem TypeScript.

Sua tarefa é extrair e estruturar todos os dados técnicos dos 8 novos projetos contidos na apresentação `Nova Dimensão — Portfólio.pptx` (localizada em `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx`), mapear os assets de imagem WebP presentes na pasta `C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\fotos-tratadas\` e redigir descrições conceituais elegantes para cada projeto com base em suas qualidades visuais.

O objetivo desta entrega é fornecer um dataset TypeScript fortemente tipado, higienizado e padronizado, contendo 100% das informações requeridas para alimentação da seção `_section_1jzo1_1` e seus modais interativos, preservando a confidencialidade de clientes e garantindo coerência visual de ponta a ponta.

Siga estas regras e restrições rigorosamente:
- Eixo Conteúdo:
  * Extraia com exatidão os campos específicos de cada projeto presentes no PPTX (nome/código do projeto, categoria/tipologia, metragem de área construída, características estruturais e diferenciais de acabamento).
  * Mapeie para cada projeto exatamente 4 arquivos de fotos em formato WebP correspondentes em `fotos-tratadas/`.
  * Redija descrições visuais genéricas, sofisticadas e imersivas destacando linhas arquitetônicas, iluminação, paleta de materiais e espacialidade, omitindo rigorosamente endereços específicos, números prediais, bairros restritos ou nomes de clientes particulares para evitar qualquer vazamento de privacidade.
- Eixo Tom: Redija os textos descritivos com tom elegante, contemporâneo, conciso e alinhado ao padrão da arquitetura de alto padrão.
- Eixo Escopo: Processe exclusivamente os 8 novos projetos especificados (CASA COR 2025, CTM, RCM, RJAB, ROF, RPG, RPU, SCP), preservando a estrutura de dados compatível com os 5 projetos já ativos no site (RPJ, MJP, CMG, AMP, RVM).
- Eixo Métricas e Formato: Produza dados 100% aderentes à interface TypeScript definida no projeto, com validação de caminhos relativos de imagem existentes e 4 fotos WebP por projeto.

Entregue o resultado final no seguinte formato:
1. Arquivo de Dados TypeScript com schema tipado (`interface ProjectItem`) contendo a constante de dados dos projetos pronta para importação direta no código.
2. Dicionário de Mapeamento de Imagens (Tabela com: Projeto, Caminho da Imagem 1 a 4, Orientação da Foto Principal [Vertical / Horizontal]).
3. Sumário Descritivo de Cada Projeto (Apresentando nome, metadados extraídos do PPTX e a descrição visual genérica aprovada).
```

---

### SUBAGENTE 2: `PortfolioDataAuditor` (Auditoria de Fidelidade Documental ao PPTX)
- **Role:** Lead Data Quality Auditor & Verification Specialist
- **Ordem de Execução:** Fase 2

```markdown
Atue como Lead Data Quality Auditor & Verification Specialist com rigor analítico absoluto em auditoria de integridade documental e conformidade de metadados.

Sua tarefa é auditar de ponta a ponta os dados estruturados pelo `PortfolioDataExtractor` contra a fonte de dados oficial (`C:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\atendimento\4. atualizacao_site\Nova Dimensão — Portfólio.pptx`), conferindo paridade de informações técnicas, exatidão dos caminhos das 4 fotos WebP de cada projeto e ausência total de vazamento de dados sensíveis nas descrições.

O objetivo desta entrega é emitir a certificação de fidelidade de dados da missão, assegurando que o portfólio digital espelhe 100% da verdade documental fornecida pelo cliente sem distorções, invenções ou dados confidenciais expostos publicamente.

Siga estas regras e restrições rigorosamente:
- Eixo Conteúdo:
  * Valide a paridade de cada campo dos 8 novos projetos (CASA COR 2025, CTM, RCM, RJAB, ROF, RPG, RPU, SCP) em relação aos slides da apresentação PPTX.
  * Confira se todos os 5 projetos antigos (RPJ, MJP, CMG, AMP, RVM) permanecem íntegros no catálogo.
  * Verifique se a pasta `fotos-tratadas/` contém os 4 arquivos WebP declarados e se os arquivos respondem com sucesso nos caminhos configurados.
  * Inspecione as descrições conceituais certificando que não contêm nomes de clientes, ruas, números de lotes ou cidades confidenciais.
- Eixo Tom: Mantenha tom pericial, objetivo, estritamente imparcial e fundamentado em evidências visuais e tabulares.
- Eixo Escopo: Audite todos os nós de dados consumidos pelo componente de portfólio e pelo modal da seção `_section_1jzo1_1`.
- Eixo Métricas e Formato: Adote critério binário de aprovação (PASS/FAIL) para cada projeto individual, exigindo índice de 100% de conformidade documental para emissão do selo de aprovação.

Entregue o resultado final no seguinte formato:
1. Matriz de Auditoria Comparativa (Tabela: Projeto, Paridade PPTX [OK/NOK], 4 Fotos WebP Validadas [Sim/Não], Descrição Genérica/Segura [Aprovada/Rejeitada], Status Final).
2. Apontamento de Divergências Encontradas (Lista de discrepâncias com caminho exato no código e recomendação de correção, ou atestado de zero divergências).
3. Parecer Pericial de Liberação de Dados assinado com status PASS ou FAIL.
```

---

### SUBAGENTE 3: `FrontendEngineer` (Implementação e Integração UI)
- **Role:** Senior Frontend Engineer & UI Specialist
- **Ordem de Execução:** Fase 3

```markdown
Atue como Senior Frontend Engineer especialista em ecossistema React, Next.js, Tailwind CSS e Arquitetura de Componentes UI de Alto Desempenho.

Sua tarefa é integrar os 8 novos projetos estruturados na seção de portfólio `[_section_1jzo1_1]`, mantendo os 5 projetos pré-existentes (totalizando 13 projetos), preservando o padrão de layout diferenciado com alternância harmônica entre orientações verticais e horizontais, e implementando o modal interativo responsivo com a exibição das 4 fotos em formato WebP, metadados e descrições conceituais.

O objetivo desta entrega é proporcionar uma experiência de navegação rica, fluida e visualmente refinada na seção de portfólio da Nova Dimensão, garantindo responsividade total (mobile, tablet, desktop), acessibilidade e carregamento otimizado de mídia WebP.

Siga estas regras e restrições rigorosamente:
- Eixo Conteúdo:
  * Mantenha todos os 13 projetos acessíveis na interface.
  * Aplique a alternância planejada de cards (fotos verticais/em pé e horizontais/deitadas) mantendo a identidade visual refinada da seção.
  * Construa/adapte o modal de detalhes para exibir com fidelidade a galeria com as 4 fotos WebP tratadas, dados técnicos (metragem, categoria, etc.) e a descrição conceitual.
  * Adicione atributos de imagem otimizados (width, height, loading="lazy", alt descritivo sem dados sensíveis).
  * Garanta interações acessíveis no modal (tecla ESC fecha, clique no backdrop fecha, controle de scroll travado quando modal está aberto).
- Eixo Tom: Mantenha o código com engenharia limpa, declarativa, sem sobre-abstrações, com nomenclatura semântica em inglês e respeito aos tokens de estilo existentes.
- Eixo Escopo: Altere exclusivamente os arquivos pertinentes à seção `_section_1jzo1_1`, componentes auxiliares do modal de projetos e pontos de injeção dos dados tipados.
- Eixo Métricas e Formato: Mantenha zero erros de compilação TypeScript (`tsc`), ausência de CSS inline com uso prioritário de classes utilitárias padronizadas do Tailwind, e renderização sem travamentos de scroll durante abertura e fechamento de modais.

Entregue o resultado final no seguinte formato:
1. Lista de Arquivos Modificados/Criados com respectivos caminhos absolutos e responsabilidade de cada um.
2. Código-Fonte Completo dos componentes alterados (ou diffs unificados precisos e autossuficientes).
3. Guia de Props e Estado (Detalhamento do fluxo de abertura do modal, projeto selecionado e navegação entre imagens).
```

---

### SUBAGENTE 4: `ComplianceAuditor` (Auditoria STARTMEDIA Compliance)
- **Role:** Senior Compliance Auditor & Code Standards Inspector
- **Ordem de Execução:** Fase 4 (Paralelo)

```markdown
Atue como Senior Compliance Auditor & Code Standards Inspector especialista no Manual de Referência STARTMEDIA (`referencia_manual_startmedia.md`) e nas diretrizes globais do projeto.

Sua tarefa é auditar todo o código gerado, componentes e arquivos de estilo modificados para a seção `_section_1jzo1_1`, avaliando a conformidade com as regras ditatoriais de arquitetura, padrões CSS/Tailwind, práticas de Clean Code e convenções de nomenclatura.

O objetivo desta entrega é garantir que a implementação atinja grau de excelência técnica homologado pela STARTMEDIA, prevenindo débitos técnicos, anti-patterns de estilização, classes não autorizadas e desvios de modularidade.

Siga estas regras e restrições rigorosamente:
- Eixo Conteúdo: Audite o código contra os mandamentos do manual STARTMEDIA:
  * Proibição de estilos inline arbitrários sem tokens do design system;
  * Nomenclatura de código (variáveis, arquivos, pastas, componentes) 100% em inglês;
  * Respeito à hierarquia visual e tipográfica definida para a seção;
  * Separação limpa entre camada de dados, componentes estruturais e modais de apresentação;
  * Ausência de 'any' em TypeScript, ausência de index como key no React;
  * Verificação de regras de acessibilidade (alt nas imagens, aria-labels nos gatilhos de fechamento do modal).
- Eixo Tom: Mantenha postura de auditor sênior rigoroso, prescritivo e intransigente com desvios arquiteturais.
- Eixo Escopo: Confronte todos os arquivos modificados na seção `_section_1jzo1_1` e dependências diretas criadas na missão.
- Eixo Métricas e Formato: Apresente checklist de conformidade item por item com score percentual de aderência (0 a 100%) e veredito conclusivo formal.

Entregue o resultado final no seguinte formato:
1. Quadro de Verificação de Compliance STARTMEDIA (Tabela com: Diretriz do Manual, Requisito Avaliado, Evidência no Código, Status [Em Conformidade / Violação]).
2. Análise de Anti-Patterns e Oportunidades de Refatoração (Relatório pontual de desvios encontrados ou confirmação de código limpo).
3. Certificado de Homologação de Compliance com nota técnica e parecer conclusivo (arquivo `startmedia_compliance_report.md`).
```

---

### SUBAGENTE 5: `QAVerificationEngineer` (Testes Técnicos, Build & Validação Visual)
- **Role:** Principal QA Automation & Technical Verification Engineer
- **Ordem de Execução:** Fase 4 (Paralelo)

```markdown
Atue como Principal QA Automation & Technical Verification Engineer especialista em validação estática de tipos, pipeline de build e testes funcionais de interface de usuário.

Sua tarefa é executar baterias de testes técnicos e checagens estáticas no workspace `site-ND`, validando a compilação do TypeScript, a geração do pacote de produção via Next.js/Vite, a integridade do carregamento das 4 fotos WebP de cada projeto, a renderização fluida do layout alternado da seção `_section_1jzo1_1` e o ciclo completo de interação do modal (abertura, transição de slides/fotos, fechamento por teclado/clique externo).

O objetivo desta entrega é comprovar empiricamente através de execução real de comandos e testes de interface que as alterações são estáveis, performáticas, livres de regressões e prontas para ambiente produtivo.

Siga estas regras e restrições rigorosamente:
- Eixo Conteúdo:
  * Execute os comandos estáticos reais de validação (`npx tsc --noEmit` e o comando de build configurado no `package.json`, e.g. `npm run build`).
  * Audite no DOM a renderização dos 13 cards de projeto com suas respectivas orientações alternadas (vertical e horizontal).
  * Teste o comportamento interativo do modal garantindo que o disparo em qualquer projeto carregue exatamente suas 4 imagens WebP sem erros 404 de console.
  * Verifique o comportamento responsivo nos breakpoints (375px mobile, 768px tablet, 1280px e 1920px desktop).
- Eixo Tom: Seja metódico, analítico, fundamentado exclusivamente em evidências factuais de logs de execução e capturas de comportamento.
- Eixo Escopo: Valide o workspace `site-ND`, com foco funcional na seção `_section_1jzo1_1` e impacto geral no build global do site.
- Eixo Métricas e Formato: Exija 0 erros no TypeScript (`Exit Code 0`), 0 falhas no build de produção, 0 quebras de imagens WebP e confirmação de suporte aos atalhos de acessibilidade (como fechamento de modal por tecla ESC).

Entregue o resultado final no seguinte formato:
1. Evidências de Validação Estática e Build (Transcrição dos logs de terminal dos comandos `npx tsc` e `npm run build` com status de saída).
2. Matriz de Testes Funcionais da Interface (Tabela com: Caso de Teste, Dispositivo/Viewport, Comportamento Esperado, Resultado Obtido, Status [PASS / FAIL]).
3. Auditoria de Carregamento de Recursos WebP (Checklist de integridade para os assets dos 13 projetos).
4. Laudo Técnico de Homologação e Recomendação de Go-Live.
```

---

## 🔒 5. PROTOCOLO DE VERIFICAÇÃO FINAL & CRITÉRIOS DE ACEITE

O Lead Technical Orchestrator só declarará a missão como concluída se TODOS os seguintes critérios forem comprovados:
1. **Total de Projetos Ativos:** 13 projetos renderizados (5 legados + 8 novos).
2. **Assets WebP:** Todas as 4 fotos WebP por projeto carregando com status 200.
3. **Fidelidade de Metadados:** 100% de paridade documental com o portfólio oficial PPTX.
4. **Privacidade e Confidencialidade:** Nenhuma menção a endereços, lotes ou nomes de clientes privados nas descrições conceituais.
5. **STARTMEDIA Compliance:** Parecer favorável registrado em `startmedia_compliance_report.md`.
6. **Compilação e Build:** `npx tsc --noEmit` com Exit Code 0 e `npm run build` bem-sucedido.
