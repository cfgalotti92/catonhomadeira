# Site Architecture & Information Flow — Catonho Madeiras

## 1. Estrutura de Rotas e Hierarquia de URLs

```text
/ (Homepage Institucional & Hub Geral)
├── madeiras/ (Hub Comercial de Madeiras: vigas, caibros, ripas, tábuas, sarrafos, decks, aduelas)
├── telhas/ (Hub Comercial de Telhas: capa e bica, colonial, romana, portuguesa, esmaltada)
├── portas/ (Hub Comercial de Portas: maciças, pivotantes, frisadas, pranchetas)
├── janelas/ (Hub Comercial de Janelas: correr, maxim-ar, venezianas)
├── ferragens/ (Hub Comercial de Ferragens: suportes de telhado, trilhos, dobradiças)
├── fechaduras/ (Hub Comercial de Fechaduras: externas, internas, banheiro, puxadores)
├── churrasqueiras/ (Hub Comercial de Churrasqueiras pré-moldadas e acessórios)
├── sobre/ (História desde 1989, valores, sustentabilidade/DOF, localização)
├── orcamento/ (Página de solicitação rápida e envio de lista de materiais)
├── contato/ (NAP completo, telefones, horário, direções para Estrada do Catonho 1205)
├── 404 (Página de erro 404 amigável com busca e atalhos rápidos)
└── blog/ (Índice Editorial de Artigos)
    ├── melhor-madeira-para-telhado/
    ├── diferenca-viga-caibro-ripa/
    ├── macaranduba-ou-cumaru-qual-escolher/
    ├── tipos-de-telhas-para-casa/
    ├── como-calcular-madeira-para-telhado/
    ├── guia-portas-de-madeira-macica/
    ├── madeira-bruta-vs-aparelhada/
    └── churrasqueira-pre-moldada-instalacao-cuidados/
```

## 2. Padrões de Navegação e Arquitetura de Links Internos
- **Menu Principal (Header):**
  - Início (`/`)
  - Madeiras (`/madeiras/`)
  - Telhas (`/telhas/`)
  - Portas & Janelas (`/portas/` com acesso a `/janelas/`)
  - Ferragens & Fechaduras (`/ferragens/` e `/fechaduras/`)
  - Churrasqueiras (`/churrasqueiras/`)
  - Sobre (`/sobre/`)
  - Blog (`/blog/`)
  - Botão de Destaque: **Orçamento** (`/orcamento/`)
- **Rodapé (Footer):**
  - Bloco 1: Identidade da Catonho Madeiras, fundação (1989), resumo de atuação e registro.
  - Bloco 2: Links Diretos de Catálogo (Madeiras, Telhas, Portas, Janelas, Ferragens, Fechaduras, Churrasqueiras).
  - Bloco 3: Institucional e Suporte (Sobre, Orçamento, Contato, Dicas & Blog, Política de Privacidade).
  - Bloco 4: Endereço (NAP), Telefones, WhatsApp e Horário de Funcionamento.
- **Breadcrumbs:** Presentes em todas as páginas internas e artigos do blog, marcados com schema `BreadcrumbList`.
- **Pontes Topic Clusters (Blog → Comercial):** Cada artigo do blog vincula naturalmente para a categoria comercial correspondente e para a página de orçamento, consolidando a autoridade temática da página comercial receptora.

## 3. URLs Amigáveis e Políticas de Canonical
- Todas as URLs utilizam letras minúsculas, palavras separadas por hífen e barra no final (`trailingSlash: 'always'`).
- Todo documento HTML renderiza sua própria tag `<link rel="canonical" href="https://catonhomadeira.com.br/rota/">`.
