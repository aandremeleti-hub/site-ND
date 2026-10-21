# Relatório Oficial de Auditoria de Conformidade STARTMEDIA
**Projeto:** Nova Dimensão Engenharia (`site-ND`)  
**Data da Auditoria:** 21 de Outubro de 2026  
**Auditor Responsável:** Auditor Sênior Rigoroso de Engenharia Frontend e Conformidade STARTMEDIA  
**Documento Base:** Manual Oficial de Desenvolvimento Front-End STARTMEDIA (Versão 1.0)  
**Status Geral:** ⚠️ **NÃO-CONFORME (REQUER ADEQUAÇÃO TÉCNICA)**

---

## 1. Resumo Executivo da Auditoria

Em estrita consonância com o Manual Oficial da STARTMEDIA, foi realizada uma auditoria cirúrgica e minuciosa com tolerância zero em todos os arquivos modificados e criados no projeto, englobando componentes das Fases 2 e 3 (`Projetos`, `Journey`, `BehindTheScenes`, `Projects`, `Feedbacks`, `ContactHero`, `Sobre`, `NossosServicos`, `AboutCEO`, `ProjectModal`, `vite.config.ts`, `tokens.css` e arquivos estruturais).

O projeto compila (`tsc -b && vite build`), contudo apresenta **desvios técnicos críticos** em relação aos padrões obrigatórios do manual, incluindo:
1. **Erros no linter oficial (`eslint .`):** 2 erros de render cascateada por `setState` síncrono em `useEffect` (`ProjectModal` e `Journey`).
2. **Violações de Idioma:** Nomenclatura de pastas (`Contato`, `NossosServicos`, `Projetos`, `Sobre`), componentes, variáveis em português e dezenas de comentários em português.
3. **Ausência de prefixo `I` em interfaces:** 11 interfaces declaradas sem o prefixo obrigatório `I` (`Project`, `ApiResponse`, `SEOProps`, `ContainerProps`, `ButtonProps`, `ScrollRevealProps`, `ProjectSpecs`, `ProjectModalData`, `ProjectModalProps`, `ProjectItem`, `StatItemProps`).
4. **Constantes fora do padrão `UPPER_CASE`:** Coleções e dados estáticos declarados em `camelCase` dentro ou fora de componentes (`benefits`, `steps`, `features`, `feedbacks`, `contactInfos`, `projects`, etc.).
5. **Uso de `index` como `key`:** 8 ocorrências graves de antipadrão React em listas `.map()`.
6. **Código comentado e JSX repetido:** Bloco de código comentado em `NossosServicos/index.tsx` e repetições literais de JSX sem `.map()`.
7. **CSS Inline e Valores Hardcoded:** Múltiplas propriedades de estilo inline (`style={{ ... }}`) e centenas de valores visuais hardcoded em CSS Modules sem tokens centralizados.
8. **Ausência de Categorias Obrigatórias em Design Tokens:** `tokens.css` não define tokens para *Spacing*, *Border Radius*, *Shadows*, *Breakpoints*, *Z-index* e *Animations*.
9. **Performance & Code Splitting:** Ausência de `React.lazy()` e `Suspense` nas rotas do projeto, além de ausência de configuração de chunks no `vite.config.ts`.
10. **Acessibilidade & SEO:** Falta de `Schema.org` estruturado no componente `SEO`, botões/modais sem tratamento adequado de teclado/ARIA e imagens sem atributo `loading="lazy"`.

---

## 2. Tabela de Auditoria por Categoria do Manual STARTMEDIA

| Seção | Categoria do Manual | Status | Principais Constatações |
| :--- | :--- | :---: | :--- |
| **01** | **Objetivo** | ⚠️ Parcial | Projeto funcional, mas necessita de padronização estrita para manutenibilidade. |
| **02** | **Stack Oficial** | ❌ Não-Conforme | `eslint .` falha com 2 erros de React Hooks; `prettier` ausente no `package.json`. |
| **03** | **Idioma do Projeto** | ❌ Não-Conforme | Pastas de páginas em PT (`Contato`, `Sobre`, etc.), variáveis e comentários em PT. |
| **04** | **Estrutura de Pastas** | ⚠️ Parcial | Falta pasta `constants/` centralizada e componentes soltos fora de subpastas (`Container.tsx`, `Layout.tsx`). |
| **05** | **Componentização** | ❌ Não-Conforme | JSX repetido sem `.map()`, código em bloco repetido, `ProjectModal` com > 200 linhas (278 linhas). |
| **06** | **CSS Modules & Inline** | ❌ Não-Conforme | Uso de `style={{ ... }}` inline e valores numéricos/cores hardcoded nos CSS Modules. |
| **07** | **Variáveis (Tokens)** | ❌ Não-Conforme | Faltam categorias obrigatórias: Spacing, Radius, Shadows, Breakpoints, Z-index, Animations. |
| **08** | **Acessibilidade** | ❌ Não-Conforme | Imagens sem `loading="lazy"`, botão fechar sem `aria-label`, modais/cards sem acessibilidade de teclado. |
| **09** | **SEO** | ⚠️ Parcial | Meta tags Open Graph presentes, porém `Schema.org` (JSON-LD) ausente. |
| **10** | **Performance** | ❌ Não-Conforme | Ausência de `React.lazy` nas rotas; chunking/code splitting não configurado no Vite. |
| **11** | **Convenções** | ❌ Não-Conforme | Interfaces sem prefixo `I`; constantes declaradas em `camelCase`. |
| **12** | **Boas Práticas** | ❌ Não-Conforme | Uso de `key={index}`, código comentado em JSX, lógica complexa no return. |
| **13** | **Regra de Ouro** | ⚠️ Parcial | Necessita de saneamento completo para atingir excelência de nível corporativo. |

---

## 3. Lista Detalhada de Violações Encontradas

### 3.1. Stack Oficial & Linter (Seção 2)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Stack / Linter** | `src/components/ui/ProjectModal/index.tsx` | 95 | Proibido erro de linter (`react-hooks/set-state-in-effect`). Chamada síncrona de `setState` em `useEffect`. | Refatorar controle de índice selecionado com chave de estado derivada ou inicialização direta sem cascading render. |
| **Stack / Linter** | `src/pages/Home/components/Journey/index.tsx` | 44 | Proibido erro de linter (`react-hooks/set-state-in-effect`). Chamada síncrona de `setState` em `useEffect`. | Ajustar lógica de sincronização temporal ou estado derivado para eliminar chamada de `setLitIndex(-1)` síncrona. |
| **Stack / Ferramentas** | `package.json` | 12-32 | Stack oficial exige `Prettier` configurado conjuntamente com ESLint. | Adicionar `prettier` e script de formatação ao projeto. |

---

### 3.2. Idioma do Projeto (Seção 3)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Idioma** | `src/pages/Contato/` | - | "Todo o projeto deve ser escrito em inglês. Isso inclui: Páginas, Pastas, Arquivos." | Renomear pasta para `Contact/` e atualizar rotas e imports. |
| **Idioma** | `src/pages/NossosServicos/` | - | "Todo o projeto deve ser escrito em inglês. Pastas, Arquivos, Componentes." | Renomear pasta para `Services/` e componente para `Services`. |
| **Idioma** | `src/pages/Projetos/` | - | "Todo o projeto deve ser escrito em inglês. Pastas, Arquivos, Componentes." | Renomear pasta para `ProjectsPage/` ou `Projects/` e componente. |
| **Idioma** | `src/pages/Sobre/` | - | "Todo o projeto deve ser escrito em inglês. Pastas, Arquivos, Componentes." | Renomear pasta para `About/` e componente para `About`. |
| **Idioma** | `src/pages/Home/components/Stats/index.tsx` | 7-9 | Variáveis em português (`projetos`, `satisfacao`, `cidades`). | Renomear para `projectsCount`, `satisfactionRate`, `areaCount`. |
| **Idioma** | `src/components/ui/ProjectModal/index.tsx` | 5-10 | Chaves de objeto de tipagem em português (`areaConstruida`, `tipoObra`, etc.). | Renomear chaves da interface para inglês (`builtArea`, `projectType`, `executionTime`, `completionYear`, `location`, `executionRegime`). |
| **Idioma** | `src/pages/Home/components/Journey/index.tsx` | 41-48, 63, 76 | Comentários de código em português no arquivo. | Traduzir todos os comentários técnicos para inglês. |
| **Idioma** | `src/pages/Home/components/Projects/index.tsx` | 21, 43 | Comentários de código em português. | Traduzir comentários para inglês (`// Left column: texts`, `// Right column: images`). |
| **Idioma** | `src/pages/Home/components/BehindTheScenes/index.tsx` | 37, 53 | Comentários de código em português. | Traduzir comentários para inglês. |
| **Idioma** | `src/pages/Sobre/components/AboutHero/index.tsx` | 34, 41 | Comentários de código em português. | Traduzir comentários para inglês. |
| **Idioma** | `src/pages/Sobre/components/QualityPolicy/index.tsx` | 55, 67, 74 | Comentários de código em português. | Traduzir comentários para inglês. |
| **Idioma** | `src/types/Project.ts` | 6 | Comentário em português (`// Outros campos previstos futuramente`). | Traduzir comentário para inglês. |
| **Idioma** | `src/services/api.ts` | 11, 15 | Comentários em português (`// Opcional:...`, `// Tratamento global...`). | Traduzir comentários para inglês. |

---

### 3.3. Convenções e Tipagens (Seção 11)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Convenções** | `src/types/Project.ts` | 1 | "Interfaces: IUser, IProduct" (prefixo `I` obrigatório). Declarado: `interface Project`. | Renomear para `export interface IProject`. |
| **Convenções** | `src/types/ApiResponse.ts` | 1 | Interfaces devem ter prefixo `I`. Declarado: `interface ApiResponse<T>`. | Renomear para `export interface IApiResponse<T>`. |
| **Convenções** | `src/components/SEO.tsx` | 3 | Interfaces devem ter prefixo `I`. Declarado: `interface SEOProps`. | Renomear para `interface ISEOProps`. |
| **Convenções** | `src/components/layout/Container.tsx` | 4 | Interfaces devem ter prefixo `I`. Declarado: `interface ContainerProps`. | Renomear para `interface IContainerProps`. |
| **Convenções** | `src/components/ui/Button/index.tsx` | 4 | Interfaces devem ter prefixo `I`. Declarado: `interface ButtonProps`. | Renomear para `interface IButtonProps`. |
| **Convenções** | `src/components/ui/ScrollReveal/index.tsx` | 4 | Interfaces devem ter prefixo `I`. Declarado: `interface ScrollRevealProps`. | Renomear para `interface IScrollRevealProps`. |
| **Convenções** | `src/components/ui/ProjectModal/index.tsx` | 4, 13, 22 | Interfaces sem prefixo `I` (`ProjectSpecs`, `ProjectModalData`, `ProjectModalProps`). | Renomear para `IProjectSpecs`, `IProjectModalData`, `IProjectModalProps`. |
| **Convenções** | `src/pages/Projetos/components/ProjectsHero/index.tsx` | 39 | Interfaces devem ter prefixo `I`. Declarado: `interface ProjectItem`. | Renomear para `interface IProjectItem`. |
| **Convenções** | `src/pages/NossosServicos/components/ServiceBlock/index.tsx` | 7 | Interfaces devem ter prefixo `I`. Declarado: `interface ServiceBlockProps`. | Renomear para `interface IServiceBlockProps`. |
| **Convenções** | `src/pages/Sobre/components/AboutHero/index.tsx` | 9 | Interfaces devem ter prefixo `I`. Declarado: `interface StatItemProps`. | Renomear para `interface IStatItemProps`. |
| **Convenções** | `src/pages/Home/components/AboutCEO/index.tsx` | 9 | Interfaces devem ter prefixo `I`. Declarado: `interface StatItemProps`. | Renomear para `interface IStatItemProps`. |
| **Convenções** | `src/pages/Home/components/Projects/index.tsx` | 10 | "Constantes: UPPER_CASE". Declarado: `const benefits = [...]`. | Renomear para `const BENEFITS = [...]`. |
| **Convenções** | `src/pages/Home/components/Journey/index.tsx` | 14 | "Constantes: UPPER_CASE". Declarado: `const steps = [...]`. | Renomear para `const STEPS = [...]` e tipar com `IStep[]`. |
| **Convenções** | `src/pages/Home/components/BehindTheScenes/index.tsx` | 14 | "Constantes: UPPER_CASE". Declarado: `const features = [...]`. | Renomear para `const FEATURES = [...]` e tipar com `IFeature[]`. |
| **Convenções** | `src/pages/Home/components/Feedbacks/index.tsx` | 23 | "Constantes: UPPER_CASE". Declarado: `const feedbacks = [...]`. | Renomear para `const FEEDBACKS = [...]` e tipar com `IFeedback[]`. |
| **Convenções** | `src/pages/Home/components/Solutions/index.tsx` | 11 | "Constantes: UPPER_CASE". Declarado: `const solutions = [...]`. | Renomear para `const SOLUTIONS = [...]` e tipar com `ISolution[]`. |
| **Convenções** | `src/pages/Contato/components/ContactHero/index.tsx` | 10 | "Constantes: UPPER_CASE". Declarado: `const contactInfos = [...]`. | Renomear para `const CONTACT_INFOS = [...]` e tipar com `IContactInfo[]`. |
| **Convenções** | `src/pages/Sobre/components/Identity/index.tsx` | 9 | "Constantes: UPPER_CASE". Declarado: `const identityItems = [...]`. | Renomear para `const IDENTITY_ITEMS = [...]` e tipar com `IIdentityItem[]`. |
| **Convenções** | `src/pages/Sobre/components/QualityPolicy/index.tsx` | 7, 25 | "Constantes: UPPER_CASE". Declarado: `leftItems`, `rightItems`. | Renomear para `LEFT_ITEMS`, `RIGHT_ITEMS` e tipar com `IQualityPolicyItem[]`. |
| **Convenções** | `src/pages/NossosServicos/components/ServicesHero/index.tsx` | 13 | "Constantes: UPPER_CASE". Declarado: `const cards = [...]`. | Renomear para `const SERVICES_CARDS = [...]` e tipar com `IServiceHeroCard[]`. |
| **Convenções** | `src/pages/Projetos/components/ProjectsHero/index.tsx` | 44 | "Constantes: UPPER_CASE". Declarado: `const projects = [...]`. | Renomear para `const PROJECTS = [...]`. |
| **Convenções** | `src/pages/Projetos/components/StartProject/index.tsx` | 9 | "Constantes: UPPER_CASE". Declarado: `const steps = [...]`. | Renomear para `const START_STEPS = [...]` e tipar com `IStartStep[]`. |

---

### 3.4. Componentização & Boas Práticas (Seções 5 e 12)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Boas Práticas** | `src/pages/Home/components/Projects/index.tsx` | 31 | "É proibido: usar index como key;". Ocorrência: `key={index}`. | Utilizar chave única (ex: `benefit`). |
| **Boas Práticas** | `src/pages/Home/components/BehindTheScenes/index.tsx` | 64 | "É proibido: usar index como key;". Ocorrência: `key={index}`. | Utilizar identificador estável (ex: `feature.title`). |
| **Boas Práticas** | `src/pages/Home/components/Feedbacks/index.tsx` | 92 | "É proibido: usar index como key;". Ocorrência: `key={index}`. | Utilizar identificador estável para parágrafos. |
| **Boas Práticas** | `src/pages/Home/components/Planning/index.tsx` | 45 | "É proibido: usar index como key;". Ocorrência: `key={index}`. | Utilizar `card.title` como key. |
| **Boas Práticas** | `src/pages/NossosServicos/components/ServiceBlock/index.tsx` | 59 | "É proibido: usar index como key;". Ocorrência: `key={idx}`. | Utilizar texto ou hash do parágrafo como key. |
| **Boas Práticas** | `src/pages/Projetos/components/StartProject/index.tsx` | 57 | "É proibido: usar index como key;". Ocorrência: `key={index}`. | Utilizar `step.number` como key. |
| **Boas Práticas** | `src/components/ui/ProjectModal/index.tsx` | 158 | "É proibido: usar index como key;". Ocorrência: `key={index}` em thumbnails. | Utilizar URL da imagem ou `img` como key. |
| **Boas Práticas** | `src/pages/Home/components/Solutions/index.tsx` | 77 | "É proibido: usar index como key;". Ocorrência: `key={i}`. | Utilizar linha de texto como key. |
| **Boas Práticas** | `src/pages/NossosServicos/index.tsx` | 21-33 | "É proibido: deixar código comentado;". Bloco de `<ServiceBlock ... />` comentado. | Remover imediatamente o trecho de código comentado. |
| **Componentização** | `src/pages/NossosServicos/index.tsx` | 35-82 | "Toda lista deve utilizar .map(); É proibido: repetir JSX;". | Criar array de serviços e renderizar os blocos via `.map()`. |
| **Componentização** | `src/components/ui/ProjectModal/index.tsx` | 194-272 | "Todo código repetido deve virar componente; É proibido: repetir JSX;". 6 `specItem` duplicados manualmente. | Criar array mapeável de specs e renderizar com `.map()`. |
| **Componentização** | `src/components/ui/ProjectModal/index.tsx` | Total (278 l.) | "Evitar componentes com mais de 200 linhas." Componente com 278 linhas. | Modularizar subcomponentes (`Gallery`, `SpecsList`, `CloseButton`) em arquivos separados. |
| **Componentização** | `src/components/layout/Footer/index.tsx` | 60-97 | Listas estáticas de links renderizadas com tags `<li>` repetidas sem `.map()`. | Mapear listas através de arrays tipados. |
| **Componentização** | `src/components/layout/Header/index.tsx` | 39-83 | NavLinks repetidos manualmente 5 vezes sem `.map()`. | Extrair para array `NAV_ITEMS` e iterar com `.map()`. |
| **Boas Práticas** | `src/pages/Home/components/Solutions/index.tsx` | 76 | "É proibido: inserir lógica complexa dentro do return;". `split('\n').map(...)`. | Processar linhas previamente ou encapsular em função auxiliar. |

---

### 3.5. CSS Modules, Inline CSS & Tokens (Seções 6 e 7)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **CSS Inline** | `src/pages/Home/components/Journey/index.tsx` | 81-84 | "É proibido: CSS inline;". Ocorrência: `style={{ left: ..., opacity: ... }}`. | Utilizar CSS custom properties (`style={{ '--dot-position': ... }}`) no módulo CSS. |
| **CSS Inline** | `src/pages/Home/index.tsx` | 30 | "É proibido: CSS inline;". Ocorrência: `<hr style={{ ... }} />`. | Mover estilo da linha divisória para classe em CSS Module ou componente UI `<Divider />`. |
| **CSS Inline** | `src/pages/NossosServicos/components/ServiceBlock/index.tsx` | 44, 50 | "É proibido: CSS inline;". Ocorrência: `style={{ order: reverse ? 2 : 1 }}`. | Utilizar classe condicional do CSS Module (ex: `styles.reversed`). |
| **CSS Inline** | `src/components/ui/ScrollReveal/index.tsx` | 64 | "É proibido: CSS inline;". Ocorrência: `style={{ transitionDelay: ... }}`. | Delegar para CSS custom property `--transition-delay`. |
| **Design Tokens** | `src/styles/tokens.css` | 1-39 | Categorias obrigatórias ausentes: Spacing, Border Radius, Shadows, Breakpoints, Z-index, Animations. | Expandir `tokens.css` com todas as 8 categorias exigidas no manual STARTMEDIA. |
| **CSS Hardcoded** | `src/components/ui/ProjectModal/ProjectModal.module.css` | Múltiplas | Cores hexadecimais arbitrárias (`#0E1819`, `#ECEEF1`, `#475569`, etc.), raios em `px` fixos. | Substituir integralmente por variáveis `var(--color-...)`, `var(--radius-...)`. |
| **CSS Hardcoded** | `src/pages/Contato/components/ContactHero/ContactHero.module.css` | 24, 75 | `font-size: 55px;`, borda `#E5E5E5`. Valores visuais declarados diretamente. | Substituir por tokens de tipografia e bordas. |
| **CSS Hardcoded** | `src/pages/Sobre/components/Identity/Identity.module.css` | 43 | Borda `#DFDFDF` declarada diretamente. | Substituir por token de borda/superfície. |
| **CSS Hardcoded** | `src/pages/NossosServicos/components/ServicesHero/ServicesHero.module.css` | 27, 50 | `font-size: 55px;`, borda `#DFDFDF`. | Substituir por tokens. |

---

### 3.6. Acessibilidade (Seção 8)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **Acessibilidade** | `src/pages/Contato/components/ContactHero/index.tsx` | 64 | Imagens de ícones sem atributo `loading="lazy"`. | Incluir `loading="lazy"` e `alt="" aria-hidden="true"` para ícones decorativos. |
| **Acessibilidade** | `src/components/layout/Footer/index.tsx` | 46 | Logo da empresa sem atributo `loading="lazy"`. | Incluir `loading="lazy"` no elemento `<img>`. |
| **Acessibilidade** | `src/components/layout/Header/index.tsx` | 35 | Imagem de logotipo sem definição de dimensões ou `loading`. | Declarar `loading="eager"` (above-the-fold) e atributos semânticos. |
| **Acessibilidade** | `src/components/ui/WhatsAppButton/index.tsx` | 19 | Imagem do WhatsApp sem atributo `loading="lazy"`. | Incluir `loading="lazy"` e `aria-hidden="true"`. |
| **Acessibilidade** | `src/pages/Home/components/Feedbacks/index.tsx` | 135 | Botão de fechar modal sem `aria-label`. | Adicionar `aria-label="Fechar modal de imagem"`. |
| **Acessibilidade** | `src/pages/Home/components/Feedbacks/index.tsx` | 112 | Frame de imagem com `onClick` sem acessibilidade por teclado. | Adicionar `role="button"`, `tabIndex={0}` e handler `onKeyDown` para Enter/Space. |
| **Acessibilidade** | `src/pages/Home/components/Feedbacks/index.tsx` | 134 | Overlay de modal sem atributos `role="dialog"`, `aria-modal="true"` ou fechamento por tecla Escape. | Implementar atributos semânticos de acessibilidade e listener de Escape. |
| **Acessibilidade** | `src/pages/Projetos/components/ProjectsHero/index.tsx` | 153 | Card interativo com `onClick` sem acessibilidade por teclado (`tabIndex`, `onKeyDown`). | Converter elemento interativo para semântica de botão ou injetar `tabIndex={0}` e suporte a Enter/Space. |

---

### 3.7. SEO & Performance (Seções 9 e 10)
| Categoria | Arquivo | Linha | Regra do Manual Violada | Ação Recomendada |
| :--- | :--- | :--- | :--- | :--- |
| **SEO** | `src/components/SEO.tsx` | 1-37 | "Toda página deve possuir: Schema.org". Ausência de Schema estruturado JSON-LD. | Adicionar suporte a Schema.org estruturado (`LocalBusiness` / `Organization` / `WebPage`) via `<script type="application/ld+json">`. |
| **Performance** | `src/routes/index.tsx` | 3-7, 9-35 | "Obrigatório utilizar: lazy loading; code splitting; React.lazy;". Rotas carregadas de forma síncrona. | Implementar `React.lazy()` e envolver as rotas filhas em `<Suspense fallback={<LoadingSpinner />}>`. |
| **Performance** | `vite.config.ts` | 5-7 | Configuração do Vite padrão sem otimização de code splitting / chunks. | Configurar `build.rollupOptions.output.manualChunks` para separar dependências de vendor (`react`, `react-dom`, `react-router-dom`). |
| **Performance** | `src/assets/illustrationTirarDoPapel.svg` | - | Asset com tamanho exorbitante de 4.87 MB uncompressed no bundle. | Otimizar vetor SVG com SVGO ou converter para WebP otimizado de alta resolução. |

---

## 4. Oferta Formal de Resolução para Autorização do Usuário

Conforme o protocolo rigoroso de auditoria STARTMEDIA e em conformidade com as regras globais de governança (execução puramente não-destrutiva de diagnóstico prévio), submete-se o plano cirúrgico abaixo para deliberação do usuário.

### Proposta de Plano de Adequação Técnica (100% STARTMEDIA Compliant)

- **Fase A: Correção Imediata do Linter e Código Proibido**
  - Resolver os 2 erros de `react-hooks/set-state-in-effect` em `ProjectModal` e `Journey`.
  - Excluir o código comentado em `NossosServicos/index.tsx`.
  - Substituir todas as 8 ocorrências de `key={index}` por identificadores únicos e estáveis.
  - Eliminar todos os CSS inline (`style={{ ... }}`) substituindo por classes em CSS Modules ou CSS variables.

- **Fase B: Padronização de Nomenclatura, Tipagens e Idioma**
  - Adicionar o prefixo `I` a todas as interfaces do projeto (`IProject`, `IApiResponse`, `IProjectModalData`, etc.).
  - Ajustar todas as constantes estáticas de listas para `UPPER_CASE` (`BENEFITS`, `STEPS`, `FEATURES`, `FEEDBACKS`, etc.).
  - Traduzir variáveis e comentários internos de arquivos `.tsx`/`.ts` para inglês.
  - Alinhar nomes de pastas de páginas conforme regras de inglês do manual (`Contact/`, `Services/`, `Projects/`, `About/`).

- **Fase C: Design Tokens, CSS Modules e Componentização**
  - Enriquecer `tokens.css` com as categorias faltantes (Spacing, Radius, Shadows, Breakpoints, Z-index, Animations).
  - Substituir valores hardcoded arbitrários de cores, espaçamentos e raios por `var(--token)`.
  - Refatorar repetições de JSX em `ServiceBlock`, `ProjectModal` (modularizando para < 200 linhas) e navegações para utilizar `.map()`.

- **Fase D: Acessibilidade, SEO e Performance**
  - Garantir `loading="lazy"` em todas as imagens e ícones restantes, além de `aria-label` e suporte total a navegação por teclado nos componentes interativos.
  - Injetar dados estruturados `Schema.org` (JSON-LD) no componente `SEO`.
  - Configurar `React.lazy()` com `Suspense` em `src/routes/index.tsx` e custom chunks no `vite.config.ts`.
  - Adicionar o `Prettier` no `package.json` conforme exigência da Stack Oficial.

---

**Conclusão da Auditoria:** O código atual opera com excelente fidelidade visual e funcional, porém **NÃO atende aos critérios obrigatórios de conformidade técnica do Manual Oficial STARTMEDIA**. A execução das correções acima garantirá a certificação formal **100% COMPLIANT**.
