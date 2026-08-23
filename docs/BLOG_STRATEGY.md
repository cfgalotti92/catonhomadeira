# Blog Strategy & Topic Clusters — Catonho Madeiras

O blog da Catonho Madeiras é concebido como um centro de autoridade técnica e suporte à conversão para dúvidas de construção civil, marcenaria e coberturas. Ele não compete com as páginas comerciais, mas as abastece com tráfego qualificado de topo e meio de funil.

---

## 1. Clusters Editoriais e Relação de Artigos Iniciais

### Cluster 1: Madeira Estrutural e Telhado
- **Artigo Pilar:** `melhor-madeira-para-telhado` (Qual a melhor madeira para telhado? Guia completo para construção e reforma)
  - *Intenção:* Responder às dúvidas sobre durabilidade, resistência a cupins e carga.
  - *Link de Retorno:* `/madeiras/` (Vigas e Caibros de Maçaranduba) e `/telhas/`.
- **Artigo de Suporte 1.1:** `diferenca-viga-caibro-ripa` (Viga, caibro e ripa: entenda a função de cada peça na estrutura do telhado)
  - *Intenção:* Explicar a hierarquia estrutural da trama do telhado e suas dimensões.
  - *Link de Retorno:* `/madeiras/` e `/ferragens/`.
- **Artigo de Suporte 1.2:** `como-calcular-madeira-para-telhado` (Como calcular a quantidade de madeira para telhado: passo a passo prático)
  - *Intenção:* Guiar o cliente no cálculo de caibros por vão e ripas por galga de telha, incentivando o envio da lista final para a Catonho Madeiras.
  - *Link de Retorno:* `/orcamento/` e `/madeiras/`.

### Cluster 2: Tipos de Madeira e Acabamento
- **Artigo Pilar:** `macaranduba-ou-cumaru-qual-escolher` (Maçaranduba ou Cumaru: qual madeira escolher para estrutura, deck ou pergolado?)
  - *Intenção:* Comparar densidade, dureza Janka, trabalhabilidade, custo-benefício e estética.
  - *Link de Retorno:* `/madeiras/`.
- **Artigo de Suporte 2.1:** `madeira-bruta-vs-aparelhada` (Madeira bruta ou aparelhada: quando usar cada acabamento na obra)
  - *Intenção:* Esclarecer a diferença entre a madeira serrada para uso oculto e a madeira aplainada para estruturas aparentes.
  - *Link de Retorno:* `/madeiras/`.

### Cluster 3: Telhas e Coberturas
- **Artigo Pilar:** `tipos-de-telhas-para-casa` (Tipos de telhas cerâmicas e esmaltadas: vantagens, rendimento por m² e inclinação)
  - *Intenção:* Comparar telha colonial, romana, portuguesa e esmaltada em termos de peso, inclinação mínima e custo por m².
  - *Link de Retorno:* `/telhas/`.

### Cluster 4: Esquadrias e Lazer
- **Artigo Pilar:** `guia-portas-de-madeira-macica` (Portas de madeira maciça vs frisadas: como escolher para entrada e quartos)
  - *Intenção:* Orientar sobre isolamento acústico, resistência à umidade e estética de portas maciças e pranchetas.
  - *Link de Retorno:* `/portas/` e `/fechaduras/`.
- **Artigo Pilar:** `churrasqueira-pre-moldada-instalacao-cuidados` (Churrasqueira pré-moldada: como planejar o espaço, instalação e primeira queima)
  - *Intenção:* Ensinar como instalar o duto, refratário e cura correta na primeira queima.
  - *Link de Retorno:* `/churrasqueiras/`.

---

## 2. Contrato de Publicação do Astro Content Collection
Cada artigo no diretório `src/content/blog/[slug].md` possui frontmatter rigoroso validado por schema Zod:

```yaml
---
title: "Qual a melhor madeira para telhado? Guia completo para construção e reforma"
description: "Descubra as espécies mais indicadas para estrutura de telhado, como Maçaranduba, Cumaru e Angelim, comparando resistência a cupim, umidade e custo-benefício."
pubDate: 2026-08-20
updatedDate: 2026-08-22
author: "Equipe Técnica Catonho Madeiras"
category: "Madeiras e Telhados"
tags: ["madeira para telhado", "maçaranduba", "cumaru", "estrutura de telhado", "vigas e caibros"]
image: "/images/products/madeiras/viga-macaranduba.jpg"
imageAlt: "Vigas de maçaranduba empilhadas no pátio para estrutura de telhado"
readingTime: "6 min"
draft: false
---
```

## 3. Diretrizes de CTA Contextual no Final do Artigo
Todo artigo termina com um bloco de chamada à ação diretamente conectado ao assunto tratado:
- Artigo de telhado → "Vai comprar madeira para o seu telhado? Envie sua lista de vigas, caibros e ripas para a Catonho Madeiras no WhatsApp."
- Artigo de telhas → "Precisa calcular as telhas da sua cobertura? Solicite uma cotação com a equipe da Catonho Madeiras."
- Artigo de portas → "Conheça nossas portas maciças e kits de aduelas na Estrada do Catonho, 1205."
