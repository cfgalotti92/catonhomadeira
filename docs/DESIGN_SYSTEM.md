# Design System Hallmark — Catonho Madeiras

/* Hallmark · genre: editorial · macrostructure: Workbench / Modern Catalogue · theme: Studio Wood & Stone
 * typography: Playfair Display / Fraunces (Headings Roman) + Inter / Public Sans (Body) + JetBrains Mono (Code/Specs)
 * contrast: WCAG AAA / AA pass (4.5:1+ for text, 3:1+ for UI)
 * mobile-floor: 320px · 360px · 390px · 430px · 768px · 1200px
 */

## 1. Filosofia Visual e Conceito
A identidade visual da Catonho Madeiras transmite:
- **Tradição e Solidez:** Empresa estabelecida há mais de 35 anos (desde 1989), com raízes sólidas na construção civil carioca.
- **Materialidade Tátil (Tactile Rebellion):** O protagonista é o produto real — a textura densa da maçaranduba, o tom dourado do cumaru, a terracota natural das telhas e a precisão das peças aplainadas.
- **Clareza Comercial sem IA Slop:** Rejeição explícita a cartões genéricos com cantos hiper-arredondados, glassmorphism, gradientes roxos/azuis de SaaS e ilustrações vazias. Toda seção resolve uma dúvida de compra ou apresenta produtos reais com especificações técnicas legíveis.

## 2. Paleta de Cores OKLCH (Tons de Madeira, Argila e Papel Mineral)

```css
:root {
  /* Bases Neutras (Paper & Canvas) */
  --color-paper-light: oklch(0.985 0.008 75);      /* Fundo principal limpo e natural */
  --color-paper-card: oklch(0.995 0.004 80);       /* Superfície de cards */
  --color-paper-subtle: oklch(0.955 0.012 75);     /* Faixas de transição e tabelas */
  --color-paper-dark: oklch(0.18 0.025 55);        /* Fundo escuro profundo (rodapé e ênfases) */
  
  /* Tintas e Textos (Ink) */
  --color-ink-primary: oklch(0.19 0.03 50);        /* Texto principal de alto contraste */
  --color-ink-secondary: oklch(0.38 0.03 55);      /* Subtítulos e metadados */
  --color-ink-muted: oklch(0.55 0.025 60);         /* Textos auxiliares e legendas */
  --color-ink-inverse: oklch(0.98 0.005 75);       /* Texto sobre fundos escuros */

  /* Acentos de Marca (Cerne de Madeira Nobre e Argila Telha) */
  --color-accent-amber: oklch(0.58 0.175 48);      /* Terracota / Madeira Avermelhada Nobre */
  --color-accent-hover: oklch(0.50 0.185 45);      /* Hover ativo */
  --color-accent-subtle: oklch(0.94 0.035 50);     /* Fundo de badges e destaques */
  
  /* Cores de Ação Direta */
  --color-whatsapp: oklch(0.55 0.19 142);          /* Verde WhatsApp autêntico e acessível */
  --color-whatsapp-hover: oklch(0.48 0.20 142);
  --color-whatsapp-surface: oklch(0.95 0.04 142);
  
  /* Bordas e Linhas de Grade */
  --color-border-subtle: oklch(0.88 0.015 75);
  --color-border-strong: oklch(0.72 0.02 60);
  --color-border-focus: oklch(0.58 0.175 48);
}
```

## 3. Tipografia e Escala
- **Headings (Display / H1 / H2 / H3):** Serifada robusta, elegante e romana (`font-style: normal`), remetendo à herança gráfica e solidez da marcenaria tradicional.
  - *Fonte Primária:* `serif`, serifas geométricas clássicas com excelente legibilidade.
  - *Regra Estrita:* Proibido itálico em títulos (`font-style: normal` obrigatório).
- **Corpo e Interface (Body / UI / Buttons):** Sans-serif neutra, técnica, limpa e desenhada para telas móveis.
  - *Fonte Primária:* `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.
- **Dados Técnicos / Medidas / Bitolas:** Monoespacada concisa para dimensões (ex.: `14x6 cm`, `6x3,5 cm`, `16 telhas/m²`).

## 4. Escala de Espaçamento e Grids
- Base 4pt / 8pt com propriedades CSS fluidas:
  - `--space-xs`: `0.25rem` (4px)
  - `--space-sm`: `0.5rem` (8px)
  - `--space-md`: `1rem` (16px)
  - `--space-lg`: `1.5rem` (24px)
  - `--space-xl`: `2.5rem` (40px)
  - `--space-2xl`: `4rem` (64px)
  - `--space-3xl`: `6rem` (96px)
- **Container Máximo:** `1200px` centralizado com `padding-inline` de segurança (16px em telas pequenas, 24px em telas médias, 32px em desktop).

## 5. Disciplina dos 8 Estados de Interação
Todo componente interativo (botões, links de ação, inputs de formulário, cards clicáveis) possui estilização explícita para:
1. `default`
2. `:hover` / `.is-hover`
3. `:focus-visible` / `.is-focus` (outline de 2px sólido com contraste mínimo de 3:1)
4. `:active` / `.is-active` (ligeira translação tátil de 1px)
5. `disabled` (opacidade reduzida e cursor not-allowed)
6. `loading`
7. `error`
8. `success`

## 6. Responsividade Móvel Não Negociável
- Verificação rigorosa em viewports de 320px, 360px, 390px, 430px e tablets.
- `overflow-x: clip` no `html` e `body` para evitar rolagem horizontal acidental.
- Touch targets com altura mínima de 44px para facilidade de toque no WhatsApp e navegação com uma só mão.
