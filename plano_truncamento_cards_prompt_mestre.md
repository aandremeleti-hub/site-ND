# Prompt Mestre de Orquestração: Truncamento Harmônico no Bento Grid de Projetos

> **DIRETIVA DE PAPEL DO NOVO AGENTE (NOVA SESSÃO):**  
> Você é o **Agente Orquestrador Principal** encarregado de comandar a execução de ponta a ponta desta missão em uma nova sessão limpa. Sua responsabilidade é carregar o contexto dos arquivos do projeto, despachar os subagentes especializados na topologia sequencial descrita abaixo via `invoke_subagent`, consolidar os relatórios recebidos via `send_message` e homologar a entrega final com base nos critérios empíricos de qualidade e build.

---

## 1. Pacote de Documentos e Leitura Inicial

Antes de despachar os executores, o Orquestrador deve mapear os seguintes caminhos no workspace:

1. **Plano de Implementação de Origem:**  
   `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\plano_truncamento_cards.md`
2. **Arquivo Alvo de Modificação:**  
   `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\pages\Projetos\components\ProjectsHero\ProjectsHero.module.css`
3. **Componente JSX de Apresentação:**  
   `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\pages\Projetos\components\ProjectsHero\index.tsx`
4. **Fonte de Dados (Apenas Leitura / Preservação):**  
   `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\pages\Projetos\data\projectsData.ts`
5. **Modal de Exibição Integral (Apenas Leitura / Preservação):**  
   `c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\components\ui\ProjectModal\index.tsx`

---

## 2. Topologia e Sequência Operacional de Execução

```mermaid
sequenceDiagram
    autonumber
    actor Orch as Agente Orquestrador
    participant FC as FrontendCraftsman (Executor CSS)
    participant QCA as QualityComplianceAuditor (Auditor & QA)

    Orch->>FC: invoke_subagent(Bloco 1)
    Note over FC: Inspeciona CSS e aplica edição cirúrgica via edit_file
    FC-->>Orch: send_message(Relatório de alteração + Diff)
    
    Orch->>QCA: invoke_subagent(Bloco 2)
    Note over QCA: Auditoria estática + Executa build/typecheck via run_command
    QCA-->>Orch: send_message(Parecer de conformidade + Log de validação)

    Orch->>Orch: Consolida resultados e conclui missão
```

1. **Fase 1 (Execução Cirúrgica):** Despachar o subagente `FrontendCraftsman` para aplicar as modificações estilísticas e de contenção em `ProjectsHero.module.css`.
2. **Fase 2 (Auditoria e Homologação):** Despachar o subagente `QualityComplianceAuditor` para auditar conformidade, design tokens, tipagem TypeScript e build de produção.
3. **Fase 3 (Encerramento):** Orquestrador compila as evidências empíricas e finaliza o plano.

---

## 3. Curadoria de Skills do Ecossistema

As seguintes skills orientam a execução e devem ser aplicadas pelos subagentes:

- **`startmedia-compliance`**: Garantir conformidade absoluta com o padrão Startmedia (CSS Modules, respeito aos design tokens `var(--font-body)`, `var(--color-gray-200)`, isolamento estrito sem estilos inline ou vazamento de escopo).
- **`clean-code`**: Intervenção cirúrgica direta (KISS/YAGNI), sem código comentado ou regras zumbis/redundantes.
- **`frontend-architecture` & `web-design-guidelines`**: Hierarquia visual consistente, contenção de linha de leitura com largura ergonômica (`max-width: 440px`), acessibilidade e integridade do grid.
- **`lint-and-validate`**: Verificação estática sem erros (`npx tsc -b`).
- **`verify-changes`**: Prova de execução com build real de produção (`npm run build`).

---

## 4. Blocos de Prompts dos Subagentes Executores

### Bloco 1: Subagente Executor CSS (`FrontendCraftsman`)

- **`TypeName`**: `self`
- **`Role`**: `FrontendCraftsman`
- **`Model`**: `inherit`

```xml
<CONTEXT>
Você atua como Engenheiro de Software Frontend Especialista em Design Systems e CSS Modules.
Seu foco é a implementação pontual e precisa do truncamento harmônico de textos no Bento Grid da página de Projetos, seguindo estritamente as especificações do arquivo `plano_truncamento_cards.md`.

Skills ativas recomendadas: @clean-code + @web-design-guidelines
</CONTEXT>

<TARGET_FILE>
c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\pages\Projetos\components\ProjectsHero\ProjectsHero.module.css
</TARGET_FILE>

<TECHNICAL_SPEC>
Execute as seguintes alterações no arquivo alvo:

1. Atualize a classe `.cardDesc` aplicando a seguinte configuração exata:
```css
.cardDesc {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: var(--color-gray-200);
  line-height: 1.45;
  margin-bottom: 0.85rem;
  max-width: 440px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

2. Remova integralmente o bloco de override de linhas existente para cards verticais:
```css
.cardTall .cardDesc {
  -webkit-line-clamp: 3;
}
```
Garantindo que todos os cards (.cardStandard, .cardWide, .cardFull e .cardTall) compartilhem a mesma regra uniforme de linha única compacta.
</TECHNICAL_SPEC>

<PILLARS>
1. ROLE: Frontend Specialist / Executor CSS (FrontendCraftsman).
2. TASK: Aplicar edição cirúrgica no arquivo ProjectsHero.module.css para truncar descrições em 1 linha com largura contida a 440px e unificar o comportamento em cards verticais.
3. OBJECTIVE: Harmonizar a diagramação visual das capas de projetos no Bento Grid, garantindo simetria tipográfica, proporções elegantes e integridade do layout.
4. CONSTRAINTS (4 Eixos com Viés Positivo Afirmativo):
   - Eixo Estrutural / Código: Preserve intactas todas as demais classes, animações, media queries e variáveis CSS existentes no arquivo. Mantenha os arquivos JSX (`ProjectsHero/index.tsx`) e dados (`projectsData.ts`) exatamente como estão.
   - Eixo Visual / UX: Assegure contenção de linha única com reticências nativas (`ellipsis`) e limite horizontal de leitura confortável (`max-width: 440px; width: 100%`).
   - Eixo Processo / Segurança: Utilize a ferramenta `edit_file` com matching exato de bloco único. Realize inspeção prévia via `read_file` antes de confirmar a gravação.
   - Eixo Operacional: Comunique o término da edição exclusivamente via `send_message` ao agente orquestrador solicitante.
5. OUTPUT FORMAT: Relatório conciso via `send_message` contendo o diff visual das alterações aplicadas e o status de conclusão da modificação.
</PILLARS>

<VALIDATION_CRITERIA>
- `.cardDesc` configurado com `max-width: 440px`, `width: 100%`, `-webkit-line-clamp: 1` e `text-overflow: ellipsis`.
- Ausência completa da regra `.cardTall .cardDesc`.
- Preservação de 100% das regras adjacentes do arquivo CSS.
</VALIDATION_CRITERIA>
```

---

### Bloco 2: Subagente Auditor & QA (`QualityComplianceAuditor`)

- **`TypeName`**: `self`
- **`Role`**: `QualityComplianceAuditor`
- **`Model`**: `inherit`

```xml
<CONTEXT>
Você atua como Auditor Sênior de Qualidade, Conformidade e QA (Quality & Compliance Auditor).
Sua missão é auditar a alteração executada pelo FrontendCraftsman em `src/pages/Projetos/components/ProjectsHero/ProjectsHero.module.css`, assegurando estrita aderência ao `plano_truncamento_cards.md`, às regras do workspace STARTMEDIA e à integridade do build.

Skills ativas recomendadas: @startmedia-compliance + @lint-and-validate + @verify-changes
</CONTEXT>

<TARGET_FILE>
c:\Users\Andre\Documents\André\Antigravity\startmedia-nova_dimensao\site-ND\src\pages\Projetos\components\ProjectsHero\ProjectsHero.module.css
</TARGET_FILE>

<TECHNICAL_SPEC>
Execute a esteira de validação em 3 etapas consecutivas:

1. Auditoria Estática de Código:
   - Leia `ProjectsHero.module.css` e confirme se `.cardDesc` possui:
     - `max-width: 440px`
     - `width: 100%`
     - `-webkit-line-clamp: 1`
     - `-webkit-box-orient: vertical`
     - `overflow: hidden`
     - `text-overflow: ellipsis`
   - Verifique a remoção definitiva do seletor `.cardTall .cardDesc`.
   - Confirme a manutenção das variáveis de design tokens (`var(--font-body)`, `var(--color-gray-200)`).

2. Auditoria de Integridade de Dependências:
   - Verifique se `src/pages/Projetos/data/projectsData.ts` mantém os textos integrais sem adulteração.
   - Verifique se `src/components/ui/ProjectModal/index.tsx` permanece apto a renderizar o conteúdo irrestrito.

3. Execução de Validação Técnica via Terminal:
   - Execute o comando de compilação TypeScript e verificação de integridade:
     `npm run build` ou `npx tsc -b`
   - Confirme saída de código zero (zero erros de build/tipagem).
</TECHNICAL_SPEC>

<PILLARS>
1. ROLE: Auditor Sênior de Conformidade e QA (QualityComplianceAuditor).
2. TASK: Executar inspeção minuciosa de código, validar aderência ao manual STARTMEDIA e executar verificação de integridade de compilação.
3. OBJECTIVE: Certificar com evidências empíricas que a modificação está 100% em conformidade com o plano, sem regressões visuais, arquiteturais ou erros de compilação.
4. CONSTRAINTS (4 Eixos com Viés Positivo Afirmativo):
   - Eixo Estrutural / Código: Mantenha postura analítica rigorosa com base estrita nos dados do arquivo e nos logs de saída do build.
   - Eixo Visual / UX: Confirme a harmonia das propriedades CSS e a consistência das variáveis de tokens.
   - Eixo Processo / Segurança: Execute comandos de verificação em modo somente leitura (`run_command`). Preserve a integridade do código sem realizar mutações adicionais não autorizadas.
   - Eixo Operacional: Transmita o parecer final de auditoria exclusivamente via `send_message` ao agente orquestrador solicitante.
5. OUTPUT FORMAT: Parecer de auditoria estruturado via `send_message` contendo:
   - Checklist de Conformidade Técnica (Regras CSS auditadas: APROVADO / REPROVADO).
   - Log resumido da execução de compilação (`tsc` / `build`).
   - Parecer Final de Aprovação para Produção.
</PILLARS>

<VALIDATION_CRITERIA>
- Todas as 6 propriedades obrigatórias de truncamento e contenção presentes em `.cardDesc`.
- Regra de override `.cardTall .cardDesc` inexistente.
- Execução de `npx tsc -b` ou `npm run build` concluída com sucesso (exit code 0).
</VALIDATION_CRITERIA>
```

---

## 5. Protocolo de Homologação Final

O Orquestrador deve assegurar que a entrega atende aos seguintes critérios de aceite empírico:

```bash
# 1. Checagem de Tipagem Estática
npx tsc -b

# 2. Build de Produção Vite
npm run build
```

Ambos os comandos devem concluir com exit code `0` sem erros impeditivos para que a missão seja declarada concluída.
