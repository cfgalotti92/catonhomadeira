---
name: auditoria-seo-organico
description: Audite SEO orgânico técnico, on-page, conteúdo, autoridade e mensuração com evidências.
version: 1.0.0
author: Cayo + OpenAI
license: Proprietary
metadata:
  hermes:
    tags: [SEO, Technical-SEO, Content, Search-Console, Structured-Data, Local-SEO]
    requires_toolsets: [browser]
---

# Auditoria de SEO Orgânico

## Objetivo

Auditar sites para identificar obstáculos de rastreamento, indexação, compreensão, relevância, experiência, autoridade e mensuração que possam limitar a visibilidade orgânica.

A auditoria deve produzir decisões práticas, não uma lista automática de “erros de SEO”. Cada achado precisa indicar evidência, impacto provável, escopo, confiança, esforço e correção recomendada.

## Quando usar

Carregue esta skill quando o usuário pedir para:

- auditar SEO de um site, loja, portal, blog ou landing page;
- verificar por que páginas não aparecem, perderam tráfego ou não crescem;
- revisar rastreamento, indexação, canonical, robots, sitemap, redirects ou JavaScript;
- avaliar arquitetura, links internos, conteúdo, intenção de busca e canibalização;
- revisar titles, snippets, dados estruturados, imagens, vídeos ou presença em recursos de IA da Pesquisa;
- preparar migração, redesign, mudança de domínio, HTTPS, CMS ou estrutura de URLs;
- analisar SEO local, ecommerce, internacional, notícias ou sites grandes;
- priorizar backlog técnico e editorial;
- comparar versões ou concorrentes com critérios verificáveis.

Não use esta skill como auditoria de mídia paga. Não trate conversão de anúncios, correspondência anúncio–página ou pixels de mídia como foco principal, salvo quando afetarem SEO ou mensuração orgânica.

## Princípios obrigatórios

1. **Separar descoberta, rastreamento, renderização, indexação e ranking.** São etapas diferentes.
2. **Evidência antes de diagnóstico.** Não afirmar que uma URL “não está indexada” apenas porque não aparece em uma busca manual.
3. **Google Search Console é fonte primária para desempenho no Google.** Ferramentas externas são estimativas.
4. **Não transformar recomendações em regras absolutas.** Sitemap, canonical, structured data, Core Web Vitals e links são sinais e recursos com contextos próprios.
5. **Não prometer posição, tráfego ou prazo.** SEO depende de competição, demanda, qualidade, recursos, histórico e mudanças dos buscadores.
6. **Não inventar fatores de ranking.** Diferenciar documentação oficial, correlação, heurística e hipótese.
7. **Não otimizar para densidade de palavra-chave.** Avaliar intenção, cobertura, clareza e utilidade.
8. **Não tratar E-E-A-T como uma nota técnica ou metatag.** Avaliar sinais de experiência, conhecimento, autoridade e confiança conforme o contexto.
9. **Não recomendar conteúdo em escala sem valor.** Automação ou IA não substituem originalidade, experiência e utilidade.
10. **Não recomendar aquisição artificial de links.** Identificar riscos de link spam e qualificar links pagos/UGC corretamente.
11. **Não alterar o site.** Toda mudança exige autorização explícita em outro fluxo.
12. **Não sobrecarregar o servidor.** Usar amostragem e baixa taxa de requisições, especialmente em sites de terceiros.
13. **Não usar busca manual como rank tracker.** Localização, idioma, dispositivo e personalização alteram resultados.
14. **Não confundir ausência de rich result com erro.** Elegibilidade não garante exibição.
15. **Políticas e documentação mudam.** Para spam, structured data, IA, Discover, News ou recursos especiais, consultar a documentação oficial atual.

## Etiquetas de evidência

Use exatamente:

- **CONFIRMADO:** observado diretamente, reproduzível ou comprovado por dado proprietário.
- **PROVÁVEL:** sinais fortes, mas falta acesso ou amostra suficiente.
- **NÃO VERIFICÁVEL EXTERNAMENTE:** exige Search Console, Analytics, logs, CMS, servidor ou ferramenta proprietária.
- **HIPÓTESE:** oportunidade que precisa de teste ou dado adicional.
- **NÃO APLICÁVEL:** critério não corresponde ao site.

## Modos de auditoria

### Auditoria rápida

- URL inicial;
- robots.txt e sitemap;
- status HTTP, canonical, robots meta;
- renderização desktop/mobile;
- titles, headings e links internos básicos;
- structured data aparente;
- principais 5 a 10 achados.

### Auditoria completa

Padrão para pedidos de “completa”, “profissional”, “100%” ou investigação profunda. Carregar todas as referências relevantes e amostrar templates distintos.

### Auditoria orientada por dados

Quando houver Search Console, Analytics, logs, crawler ou backlinks:

- estabelecer período e comparação;
- segmentar por página, consulta, país, dispositivo e aparência;
- cruzar perdas/ganhos com alterações técnicas e editoriais;
- priorizar URLs com impacto real.

### Auditoria de queda

- confirmar data, magnitude e segmentos afetados;
- separar perda de impressões, CTR, posição, indexação ou demanda;
- verificar releases, migrações, ações manuais, segurança, disponibilidade e atualizações conhecidas;
- evitar atribuir toda queda a uma atualização do Google sem evidência.

### Auditoria de migração

Carregar obrigatoriamente `references/15-migracoes-redirecionamentos.md` e produzir checklist pré, durante e pós-lançamento.

## Contexto mínimo desejável

Coletar sem bloquear:

- domínio e URLs prioritárias;
- país, idioma e público;
- tipo de negócio e conversão principal;
- CMS e stack quando conhecidos;
- acesso a Search Console, GA4, logs, crawler e backlink tool;
- mudanças recentes;
- concorrentes orgânicos;
- páginas, categorias, produtos ou localidades prioritárias;
- histórico de tráfego e problemas percebidos.

Se faltar contexto, registrar premissas e limitar conclusões.

## Procedimento obrigatório

### 1. Definir escopo, objetivos e amostra

Identificar templates e selecionar amostra representativa:

- home;
- páginas de serviço/categoria;
- produto;
- artigo;
- localização;
- paginação/faceta;
- páginas órfãs ou problemáticas fornecidas;
- versões mobile/idioma quando houver.

Carregar `references/01-contexto-objetivos-dados.md`.

### 2. Verificar acesso, rastreamento e indexação

Investigar:

- DNS, HTTPS e status HTTP;
- robots.txt;
- meta robots e X-Robots-Tag;
- sitemaps;
- canonical;
- redirects;
- páginas de erro e soft 404;
- renderização e conteúdo acessível;
- URL Inspection/Search Console quando disponível;
- discrepância entre URLs descobertas, rastreadas, indexadas e performando.

Carregar `references/02-rastreamento-indexacao.md`.

### 3. Auditar arquitetura, URLs e links internos

- profundidade e hierarquia;
- navegação e breadcrumbs;
- hubs, categorias e páginas prioritárias;
- links crawlable em `<a href>`;
- âncoras;
- páginas órfãs;
- cadeias de redirects internas;
- parâmetros, busca interna, calendário, facetas e espaços infinitos;
- distribuição interna de relevância e importância.

Carregar `references/03-arquitetura-links-internos.md`.

### 4. Avaliar intenção, SERP e on-page

Para páginas prioritárias:

- consulta/intenção alvo;
- tipo de resultado dominante;
- title link, snippet, headings e conteúdo principal;
- cobertura do problema;
- diferenciação;
- alinhamento entre página e expectativa;
- concorrência real na SERP;
- risco de canibalização.

Carregar `references/04-onpage-intencao-serp.md`.

### 5. Auditar conteúdo e confiança

- originalidade e valor adicional;
- experiência direta e conhecimento demonstrado;
- autoria, fontes e transparência quando esperadas;
- atualização e precisão;
- páginas finas, duplicadas, programáticas ou escaladas;
- adequação a YMYL;
- conteúdo principal versus boilerplate;
- satisfação da intenção sem enrolação.

Carregar `references/05-conteudo-qualidade-eeat.md` e `references/06-semantica-entidades-topicos.md`.

### 6. Avaliar renderização, mobile e performance

- HTML inicial e DOM renderizado;
- conteúdo e links dependentes de interação;
- lazy loading;
- erros JS;
- paridade mobile/desktop;
- LCP, INP e CLS, priorizando dados de campo;
- recursos bloqueados;
- estabilidade e usabilidade.

Carregar `references/08-javascript-renderizacao-mobile.md` e `references/09-performance-page-experience.md`.

### 7. Avaliar aparência na busca e dados estruturados

- title links e snippets;
- site name, favicon e breadcrumbs;
- structured data compatível com conteúdo visível;
- validação e elegibilidade;
- imagens, vídeos, datas, Discover e News quando aplicáveis;
- não marcar conteúdo inexistente ou enganoso.

Carregar `references/10-dados-estruturados-serp.md` e `references/11-imagens-video-discover-news.md`.

### 8. Auditar autoridade e links externos

Quando houver dados:

- domínios e páginas que recebem links;
- relevância e contexto;
- links perdidos/novos;
- distribuição para páginas estratégicas;
- padrões artificiais, pagos ou sitewide;
- outbound links patrocinados/UGC;
- menções e entidades.

Não recomendar disavow sem evidência forte e contexto.

Carregar `references/07-backlinks-autoridade.md`.

### 9. Aplicar módulos especiais

Conforme o site:

- local: `references/12-local-seo-gbp.md`;
- ecommerce: `references/13-ecommerce-facetas-paginacao.md`;
- internacional: `references/14-internacional-hreflang.md`;
- migração: `references/15-migracoes-redirecionamentos.md`;
- IA/recursos generativos: `references/18-ai-search-generative.md`.

### 10. Cruzar com dados proprietários

Carregar `references/16-search-console-analytics-logs.md`.

Priorizar:

- páginas com impressões e CTR baixo;
- quedas por diretório/template;
- URLs excluídas relevantes;
- consultas com intenção não atendida;
- páginas com tráfego mas baixa conversão;
- desperdício de crawl em sites grandes;
- discrepâncias entre sitemap, crawl, índice e tráfego.

### 11. Verificar riscos de spam e segurança

Carregar `references/17-spam-riscos-ai-content.md`.

Sinalizar:

- link spam;
- doorway pages;
- cloaking;
- conteúdo escalado sem valor;
- abuso de reputação do site;
- domínio expirado reaproveitado para manipulação;
- conteúdo invadido, malware ou páginas geradas por spam;
- schema enganoso;
- fraude e falsa identidade.

### 12. Priorizar e relatar

Cada achado deve conter:

- severidade;
- confiança;
- evidência;
- URLs/templates afetados;
- impacto provável;
- correção;
- esforço;
- dependências;
- forma de validação pós-correção.

Carregar `references/19-procedimento-auditoria.md`, `references/20-priorizacao-score.md` e `references/21-modelo-relatorio.md`.

## Segurança operacional

Sem autorização explícita:

- não fazer login;
- não solicitar indexação;
- não enviar sitemap;
- não alterar robots, canonical, DNS, CMS ou Search Console;
- não executar crawl agressivo;
- não criar backlinks;
- não enviar formulários;
- não disparar remoções;
- não usar dados pessoais reais.

Em sites de terceiros, limitar requisições e respeitar disponibilidade. Não tentar contornar autenticação, WAF, CAPTCHA ou bloqueios.

## Padrão de amostragem

- até 50 URLs: cobrir todas quando seguro;
- 51–1.000 URLs: amostrar por template e diretório;
- acima de 1.000 URLs: usar crawler/dados fornecidos e amostragem estratificada;
- ecommerce/grandes portais: incluir parâmetros, facetas, paginação e estados de produto;
- sites locais: incluir localidades e serviços combinados;
- internacional: incluir cada idioma/região e pares hreflang.

Não declarar “site inteiro auditado” quando apenas uma amostra foi verificada.

## Saída obrigatória

1. Resumo executivo.
2. Escopo, amostra e limitações.
3. O que está funcionando.
4. Bloqueadores críticos.
5. Achados priorizados.
6. Rastreamento e indexação.
7. Arquitetura e links internos.
8. On-page, intenção e conteúdo.
9. Renderização, mobile e performance.
10. SERP e dados estruturados.
11. Autoridade/backlinks, se houver dados.
12. Módulos especiais aplicáveis.
13. Plano de ação 0–7, 8–30 e 31–90 dias.
14. Validação pós-correção.
15. Limitações e itens não verificáveis.

Não produzir centenas de itens sem prioridade. Agrupar causas sistêmicas por template.

## Atualização da skill

Revisar esta skill quando houver mudanças relevantes em:

- Search Essentials e spam policies;
- documentação de crawling/indexing;
- structured data e recursos visuais;
- Core Web Vitals;
- Search Console;
- recursos de IA da Pesquisa;
- Google Business Profile;
- políticas de News, Discover, ecommerce ou local.
