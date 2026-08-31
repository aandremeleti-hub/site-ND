# Nova Dimensão Engenharia - Padrão de Desenvolvimento

Este documento detalha o padrão de desenvolvimento estrutural, tecnológico e visual adotado no projeto, servindo como base de conhecimento (guideline) para escalabilidade e para aplicação em novos projetos.

## 🚀 Tecnologias

O ecossistema do projeto foi construído sobre uma base moderna, garantindo alta performance e tipagem estática segura:

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Roteamento:** [React Router DOM v7](https://reactrouter.com/)
- **Requisições HTTP:** [Axios](https://axios-http.com/)
- **SEO & Head Management:** [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Linting & Padronização:** [ESLint](https://eslint.org/) (com regras rigorosas para TypeScript e React)
- **Estilização:** CSS puro (Vanilla CSS) com abordagens modernas, utilizando CSS Modules (arquivos `.module.css`) para escopo fechado por componente.

## 📁 Estrutura de Diretórios (`/src`)

A arquitetura do projeto segue um padrão modular focado em componentização, reutilização e separação de responsabilidades.

```text
src/
├── assets/      # Imagens, ícones (SVGs), fontes locais (ex: BWGradual) e mídias estáticas
├── components/  # Componentes globais/reutilizáveis (Layout, Header, Footer, Botões)
├── contexts/    # Contextos globais (React Context API), para gerenciar estados globais (se houver)
├── hooks/       # Custom hooks (ex: useFetch, useWindowSize, etc.)
├── pages/       # Páginas da aplicação. Cada página tem sua própria pasta e componentes específicos
│   ├── Home/
│   │   ├── index.tsx
│   │   ├── components/  # Componentes específicos apenas desta página
│   │   └── ...
│   └── Contato/
├── routes/      # Configuração de rotas da aplicação (React Router)
├── services/    # Configurações de API (instância do Axios, endpoints externos)
├── styles/      # Estilos globais da aplicação (Design Tokens, Reset, Variáveis)
│   ├── globals.css
│   ├── reset.css
│   └── tokens.css
├── types/       # Declarações de tipos globais do TypeScript (.d.ts, interfaces compartilhadas)
├── utils/       # Funções utilitárias, formatadores, validadores, helpers
└── main.tsx     # Ponto de entrada da aplicação React
```

## 🎨 Design Tokens (Estilos Visuais)

Os padrões visuais são geridos via CSS Variables (`:root`), definidos em `src/styles/tokens.css`. 

### Cores

A paleta de cores foca em tons escuros elegantes contrastando com detalhes em tom mostarda/dourado:

- 🟡 **Primary:** `#C48008` (`var(--color-primary)`)
- 🌑 **Dark:** `#141A2B` (`var(--color-dark)`)
- 🌃 **Dark Alt:** `#183031` (`var(--color-dark-alt)`)
- ⚪ **Light:** `#F7F5F2` (`var(--color-light)`)
- ⬜ **White:** `#FFFFFF` (`var(--color-white)`)

### 🔤 Tipografia (Fontes)

O sistema de design utiliza duas famílias de fontes principais:

- **Títulos (Headings):** `BWGradual`, sans-serif (`var(--font-heading)`)
- **Textos (Body):** `Manrope`, sans-serif (`var(--font-body)`) (Google Fonts)

### 📏 Escala Tipográfica (Desktop-first approach)

- **Display:** `72px` (`4.5rem` / `var(--font-size-display)`)
- **H1:** `45px` (`2.8125rem` / `var(--font-size-h1)`)
- **H2:** `40px` (`2.5rem` / `var(--font-size-h2)`)
- **H3:** `35px` (`2.1875rem` / `var(--font-size-h3)`)
- **H4:** `25px` (`1.5625rem` / `var(--font-size-h4)`)
- **Body Large:** `20px` (`1.25rem` / `var(--font-size-body-lg)`)
- **Body Default:** `18px` (`1.125rem` / `var(--font-size-body)`)
- **Caption:** `16px` (`1rem` / `var(--font-size-caption)`)
- **Details:** `12px` (`0.75rem` / `var(--font-size-details)`)

#### Pesos (Font Weights)
- **Regular:** `400`
- **Medium:** `500`
- **Semi-Bold:** `600`
- **Bold:** `700`

## ⚙️ Regras e Padrões (Guidelines)

Para manter a consistência, atente-se às seguintes regras no desenvolvimento:

1. **Estilização de Componentes:** Utilize sempre CSS Modules (`NomeComponente.module.css`) para evitar conflitos de especificidade, a menos que seja um componente de estilo estritamente global.
2. **Uso de Design Tokens:** Nunca chumbe (hard-code) cores hexadecimais, famílias de fontes ou tamanhos em CSS. Sempre importe/use as variáveis de CSS globais (`var(--nome-da-variavel)`).
3. **Escopo de Componentes:** Se um componente é usado apenas na página `Contato`, ele deve viver dentro de `src/pages/Contato/components/`. Se ele for reutilizado em mais de uma página, ele deve ser movido para `src/components/`.

## 🚀 Como iniciar o projeto

Para rodar o projeto localmente:

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento (Vite):
   ```bash
   npm run dev
   ```
