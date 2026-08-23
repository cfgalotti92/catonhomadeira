# SEO Implementation Guide — Catonho Madeiras

## 1. Configurações Técnicas Globais
- **Origem Canônica:** `https://catonhomadeira.com.br`
- **Geração Estática:** Astro SSG (`output: 'static'`) gerando HTML pré-renderizado sem dependência de JavaScript de cliente para exibição de conteúdo crítico.
- **Sitemap XML:** Integrado com `@astrojs/sitemap`, mapeando todas as rotas estáticas e artigos do blog com URLs absolutas canônicas.
- **Robots.txt:** Configurado em `public/robots.txt` permitindo indexação universal e referenciando o `sitemap-index.xml`.
- **Trailing Slash:** Consistência com barra final (`/`) em todas as rotas internas, links, canonicals e sitemap.

## 2. Metadados e Open Graph (Por Página)
Cada página renderiza através do componente `SEOHead.astro`:
- `<title>` único e descritivo com limite de 55 a 65 caracteres.
- `<meta name="description">` com limite de 135 a 160 caracteres, contendo o diferencial de valor e chamada à ação.
- `<link rel="canonical" href="...">` com URL canônica absoluta.
- `<meta property="og:title">`, `<meta property="og:description">`, `<meta property="og:url">`, `<meta property="og:image">`, `<meta property="og:type">` e `<meta property="og:locale" content="pt_BR">`.
- `<meta name="twitter:card" content="summary_large_image">`.

## 3. Marcação Structured Data (JSON-LD)

### A. Schema `LocalBusiness` / `Store` / `HomeGoodsStore`
Injetado globalmente na homepage e nas páginas institucionais com:
- `@type`: `["HomeGoodsStore", "Store", "LocalBusiness"]`
- `name`: "Catonho Madeiras"
- `image`: "https://catonhomadeira.com.br/images/empresa/catonho-madeiras-loja-fachada.jpg"
- `telephone`: "+55-21-97901-1647"
- `address`:
  - `streetAddress`: "Estrada do Catonho, 1205"
  - `addressLocality`: "Rio de Janeiro"
  - `addressRegion`: "RJ"
  - `postalCode`: "22723-013"
  - `addressCountry`: "BR"
- `geo`:
  - `latitude`: -22.8885
  - `longitude`: -43.3980
- `openingHoursSpecification`:
  - Seg-Sex: 08:00 - 18:00
  - Sáb: 08:00 - 12:00
- `priceRange`: "$$"
- `areaServed`: ["Jacarepaguá", "Taquara", "Tanque", "Pechincha", "Freguesia", "Barra da Tijuca", "Recreio dos Bandeirantes", "Jardim Sulacap", "Rio de Janeiro"]

### B. Schema `BreadcrumbList`
Injetado em todas as páginas secundárias e artigos do blog, detalhando a hierarquia (Home > Categoria > Artigo/Página).

### C. Schema `Article` / `BlogPosting`
Injetado dinamicamente em cada post do blog em `src/pages/blog/[slug].astro` com `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, `description` e `mainEntityOfPage`.

### D. Schema `FAQPage`
Presente nas páginas de categorias comerciais que possuem perguntas frequentes técnicas.

## 4. Otimização de Performance e Core Web Vitals
- **LCP (Largest Contentful Paint):** Imagens do hero otimizadas com `fetchpriority="high"`, dimensões explícitas `width` e `height` para evitar Layout Shift (CLS zero).
- **CSS In-line e Modular:** Folha de estilos combinada sem bloqueio de renderização externo excessivo.
- **Zero Framework JS:** Nenhuma biblioteca de terceiros desnecessária no carregamento inicial.
