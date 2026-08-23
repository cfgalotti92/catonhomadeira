---
name: lptrafegopago
version: 1.0.0
description: >
  Skill para planejar, escrever, projetar, desenvolver e auditar landing pages
  estáticas de alta conversão para tráfego pago. Usa HTML5, CSS3 e JavaScript
  Vanilla mínimo, com foco em mobile-first, velocidade, clareza, message match,
  confiança e redução de fricção. Preparada para deploy estático no Cloudflare Pages.
---

# Paid Traffic Landing Page Builder

## 1. Missão

Criar landing pages para tráfego pago que transformem cliques qualificados em uma ação de negócio clara, usando a menor quantidade de conteúdo necessária para gerar compreensão, confiança e conversão.

A skill não parte de um template fixo. Ela deve primeiro entender o contexto da campanha, classificar o cenário e então decidir:

- profundidade da página;
- quantidade de seções;
- ordem das seções;
- nível de argumentação;
- tom da copy;
- tipo e frequência de CTA;
- quantidade de prova necessária;
- nível de explicação da oferta;
- estrutura do formulário, quando houver;
- linguagem visual;
- comportamento mobile;
- necessidade de conteúdo adicional para reduzir objeções.

A prioridade é:

**clareza → correspondência com o anúncio → confiança → redução de fricção → conversão → performance → acabamento visual.**

Não aumentar a página apenas para parecer “completa”.

# 2. Stack obrigatória

A stack padrão é estática.

## Usar por padrão

- HTML5 semântico;
- CSS3;
- JavaScript Vanilla mínimo;
- arquivos estáticos;
- estrutura compatível com Cloudflare Pages;
- GitHub como origem do projeto, quando aplicável;
- nenhuma etapa de build obrigatória.

## Não usar por padrão

- React;
- Next.js;
- Vue;
- Angular;
- Svelte;
- Astro;
- Tailwind;
- Bootstrap;
- jQuery;
- bibliotecas de UI;
- npm/pnpm/yarn;
- bundlers;
- frameworks CSS;
- CMS;
- dependências externas sem necessidade real.

Uma biblioteca só pode ser incluída quando houver necessidade técnica concreta e benefício claro. Nunca adicionar tecnologia apenas por conveniência do agente.

JavaScript não deve ser usado para renderizar conteúdo essencial da landing page.

# 3. Ambiente de deploy

A página deve funcionar como site estático em Cloudflare Pages.

## Regras

- `index.html` deve funcionar como entrada principal;
- caminhos de assets devem funcionar em produção e em preview;
- não depender de servidor Node;
- não depender de banco de dados para exibir a LP;
- não criar processo de build sem necessidade;
- não usar caminhos locais da máquina;
- criar `404.html` quando fizer sentido no projeto;
- usar `_redirects` somente quando necessário;
- usar `_headers` somente quando houver justificativa;
- não quebrar o projeto caso o domínio final ainda não esteja definido;
- manter o código simples de clonar e editar em Windows ou macOS.

# 4. Escopo

Esta skill cuida de:

- briefing da landing page;
- diagnóstico estratégico;
- análise da origem do tráfego;
- análise da intenção do visitante;
- análise do estágio de consciência;
- arquitetura da página;
- message match;
- copy;
- hero;
- benefícios;
- diferenciais;
- provas;
- objeções;
- FAQ;
- CTA;
- formulário;
- WhatsApp;
- telefone;
- área de atendimento;
- design system;
- responsividade;
- mobile-first;
- acessibilidade;
- performance;
- HTML;
- CSS;
- JavaScript mínimo;
- SEO técnico básico;
- preparação para Cloudflare Pages;
- autoauditoria de conversão;
- autoauditoria mobile;
- autoauditoria técnica.

## Fora do escopo por padrão

Não implementar sem solicitação explícita:

- Google Tag Manager;
- Google Analytics 4;
- Meta Pixel;
- Google Ads Conversion Tracking;
- Microsoft Ads tags;
- eventos de conversão;
- dataLayer;
- scripts de remarketing;
- configuração de campanhas;
- criação de públicos;
- configuração de plataformas de anúncios;
- integrações de CRM;
- automações;
- APIs externas.

A página pode ser estruturada de modo que esses itens sejam adicionados depois, mas não deve instalar tracking automaticamente.

# 5. Princípio fundamental: não existe tamanho ideal universal

Nunca assumir que landing page longa converte melhor.

Nunca assumir que landing page curta converte melhor.

A regra é:

> Use a menor quantidade de conteúdo capaz de fazer um visitante qualificado entender a oferta, acreditar que ela é adequada ao seu caso, reduzir as objeções relevantes e realizar a ação desejada com confiança.

Cada seção precisa cumprir ao menos uma função:

1. explicar;
2. aumentar relevância;
3. apresentar benefício;
4. demonstrar prova;
5. aumentar confiança;
6. reduzir objeção;
7. facilitar a ação;
8. eliminar risco percebido.

Se uma seção não cumprir nenhuma dessas funções, removê-la.

# 6. Protocolo obrigatório antes de construir

Ao receber um pedido de landing page, NÃO começar imediatamente pelo HTML.

Primeiro:

1. ler toda a conversa disponível;
2. ler briefing e arquivos do projeto, se existirem;
3. inspecionar o projeto atual, se houver;
4. identificar quais informações já foram fornecidas;
5. listar mentalmente as informações críticas ausentes;
6. perguntar somente o que ainda falta;
7. aguardar as respostas quando as lacunas forem críticas;
8. somente então definir a estratégia e construir.

## Regra de não repetição

Nunca perguntar algo que já esteja claro no briefing, conversa, arquivos ou projeto.

## Regra de perguntas

Preferir uma única rodada objetiva de perguntas.

Não transformar o briefing em um interrogatório.

Agrupar perguntas relacionadas.

Perguntar primeiro o que muda diretamente a estratégia.

# 7. Briefing mínimo obrigatório

Antes da construção, tentar obter:

## 7.1 Negócio

- nome da empresa ou profissional;
- produto ou serviço principal;
- cidade/região de atendimento, quando aplicável;
- site, perfil social ou material institucional, se existir;
- identidade visual existente;
- diferenciais reais;
- restrições comerciais ou regulatórias.

## 7.2 Campanha

- origem do tráfego;
- Google Search, Meta Ads, YouTube, Display, TikTok, outro;
- anúncio ou mensagem principal;
- palavras-chave principais, quando Google Search;
- público ou segmentação, quando Meta/Display;
- promessa ou benefício apresentado no anúncio;
- oferta anunciada.

## 7.3 Conversão

Identificar UMA ação principal.

Exemplos:

- WhatsApp;
- ligação;
- formulário;
- solicitação de orçamento;
- agendamento;
- visita à loja;
- compra;
- cadastro.

A LP pode ter ações secundárias quando houver justificativa, mas uma ação deve ser claramente prioritária.

## 7.4 Público

Entender:

- quem é;
- o que está tentando resolver;
- quão consciente está do problema;
- quão consciente está da solução;
- quão urgente é a necessidade;
- principais dúvidas;
- principais objeções;
- fatores que geram confiança.

## 7.5 Provas disponíveis

Perguntar se existem:

- avaliações reais;
- depoimentos reais;
- fotos próprias;
- fotos da equipe;
- fotos de instalações;
- fotos de serviços executados;
- casos reais;
- números verificáveis;
- certificações;
- autorizações;
- prêmios;
- parceiros;
- marcas atendidas;
- garantias reais;
- tempo de mercado verificável.

Nunca inventar prova para preencher uma seção.

# 8. Perguntas iniciais sugeridas

Quando o usuário não fornecer briefing suficiente, adaptar esta base:

1. Qual produto ou serviço esta LP vai vender?
2. De onde virá o tráfego: Google Search, Meta Ads ou outro canal?
3. Qual é a principal ação desejada: WhatsApp, ligação, formulário, compra ou agendamento?
4. Qual cidade/região ou público será atendido?
5. Qual é a principal promessa ou oferta do anúncio?
6. Quais diferenciais reais podem ser usados?
7. Existem avaliações, depoimentos, fotos, cases ou outras provas reais?
8. Existe uma identidade visual, site ou perfil social que devo seguir?
9. Há alguma informação obrigatória, restrição legal ou condição comercial importante?
10. Se houver Google Search: quais são as principais palavras-chave ou grupos de anúncio?
11. Se houver Meta Ads: qual público e qual criativo/mensagem levam à página?

Não perguntar todos os itens quando parte deles já estiver respondida.

# 9. Informações críticas x não críticas

## Críticas

Se faltar, perguntar antes de concluir a LP:

- o que está sendo oferecido;
- objetivo de conversão;
- canal de tráfego;
- região quando o serviço for local;
- dados de contato necessários ao CTA;
- condição comercial que faça parte da oferta;
- informação regulatória indispensável.

## Importantes, mas contornáveis

Se o usuário não tiver:

- depoimentos;
- fotos;
- cases;
- certificações;
- estatísticas;
- vídeo;
- FAQ pronto.

A ausência dessas informações não autoriza invenção.

Omitir a seção ou criar estrutura não publicada até o conteúdo real existir.

## Proibição de placeholders públicos

Nunca deixar visível na página final:

- `[DEPOIMENTO PENDENTE]`;
- `[FOTO PENDENTE]`;
- `[CRMV PENDENTE]`;
- `[TELEFONE]`;
- texto lorem ipsum;
- números fictícios;
- textos de desenvolvimento.

Se uma informação crítica estiver ausente, interromper e solicitar.

Se for não crítica, remover a seção.

# 10. Motor de decisão estratégico

A skill deve classificar o cenário antes de escolher a arquitetura.

Avaliar os fatores abaixo.

## 10.1 Intenção

### Alta
O visitante já procura ativamente a solução.

Exemplos:

- “chaveiro perto de mim”;
- “advogado usucapião”;
- “instalação de ar condicionado”;
- “dentista implante poços de caldas”.

Tende a exigir menos educação e maior velocidade até o CTA.

### Média
O visitante conhece o problema e considera soluções.

Tende a exigir explicação moderada, comparação e confiança.

### Baixa
O visitante foi impactado por interrupção ou descoberta e não estava buscando ativamente.

Tende a exigir mais contexto, desenvolvimento do problema e construção de desejo/confiança.

# 11. Estágio de consciência

Classificar, quando possível:

1. não consciente;
2. consciente do problema;
3. consciente da solução;
4. consciente do produto/serviço;
5. muito consciente/pronto para agir.

Quanto mais consciente, menor tende a ser a necessidade de conteúdo educativo.

Quanto menos consciente, maior pode ser a necessidade de contexto.

# 12. Urgência

### Alta urgência
Exemplos:

- chaveiro;
- guincho;
- vazamento;
- emergência elétrica;
- assistência imediata.

Priorizar:

- contato imediato;
- telefone;
- WhatsApp;
- disponibilidade real;
- área atendida;
- serviço;
- confiança rápida.

Evitar atrasar a conversão com narrativa longa.

### Baixa ou média urgência
Pode haver mais espaço para:

- comparação;
- processo;
- benefícios;
- provas;
- FAQ;
- explicação.

# 13. Complexidade da decisão

Avaliar:

- preço;
- tempo de contratação;
- risco financeiro;
- risco físico;
- risco jurídico;
- nível de personalização;
- quantidade de pessoas envolvidas na decisão;
- necessidade de diagnóstico;
- dificuldade de troca do fornecedor.

Quanto maior a complexidade, maior a quantidade de informação que pode ser necessária.

# 14. Risco percebido e necessidade de confiança

Considerar risco alto em áreas como:

- saúde;
- jurídico;
- finanças;
- procedimentos invasivos;
- serviços de alto valor;
- serviços realizados dentro da residência;
- contratos de longo prazo;
- decisões que geram grande impacto patrimonial.

Quanto maior o risco percebido:

- reforçar identidade;
- mostrar pessoas reais, se disponíveis;
- explicar processo;
- apresentar provas;
- esclarecer limites;
- evitar promessas exageradas;
- tratar objeções;
- facilitar verificação da empresa.

# 15. Profundidade da landing page

Usar três classificações internas apenas como guia.

Elas NÃO são templates fixos.

## 15.1 Compacta

Tende a ser adequada quando houver:

- Google Search;
- intenção alta;
- negócio local;
- serviço simples de entender;
- urgência alta;
- baixa necessidade de educação;
- CTA imediato.

Estrutura típica possível:

1. Hero;
2. Serviços ou solução;
3. Diferenciais;
4. Prova/confiança;
5. Área atendida ou processo curto;
6. FAQ curto;
7. CTA final.

Pode ter menos ou mais seções.

## 15.2 Intermediária

Tende a ser adequada quando houver:

- consideração moderada;
- decisão comparativa;
- ticket médio;
- necessidade de explicar processo;
- necessidade relevante de confiança.

Estrutura típica possível:

1. Hero;
2. Problema/benefício;
3. Solução;
4. Como funciona;
5. Diferenciais;
6. Provas;
7. Objeções;
8. FAQ;
9. CTA.

## 15.3 Persuasiva

Tende a ser adequada quando houver:

- Meta Ads ou público frio;
- high-ticket;
- decisão complexa;
- risco alto;
- necessidade de educação;
- necessidade forte de autoridade;
- ciclo de decisão maior.

Pode incluir:

1. Hero;
2. problema/oportunidade;
3. mecanismo ou solução;
4. benefícios;
5. processo;
6. provas;
7. autoridade;
8. casos;
9. objeções;
10. comparação;
11. FAQ;
12. CTA.

Não usar todas automaticamente.

# 16. Regra para negócios locais

Para negócios locais, especialmente em Google Search de alta intenção:

> tender para páginas compactas, objetivas e mobile-first.

O visitante geralmente precisa confirmar rapidamente:

- vocês fazem o que preciso?
- atendem minha região?
- posso confiar?
- como funciona?
- como entro em contato?

Não incluir automaticamente:

- história extensa da empresa;
- missão, visão e valores;
- textos institucionais genéricos;
- dezenas de serviços secundários;
- biografia longa;
- seções apenas decorativas.

Negócio local não significa obrigatoriamente página curta.

Se o serviço for complexo, caro, sensível ou exigir confiança elevada, aumentar a profundidade.

# 17. Google Search

Quando o tráfego vier de Google Search:

## Prioridades

1. correspondência exata entre intenção e Hero;
2. serviço ou produto claramente nomeado;
3. localização quando relevante;
4. benefício ou diferencial real;
5. CTA imediato;
6. prova;
7. redução de objeções.

## Message match

Se o anúncio fala:

> Instalação de Energia Solar em São Paulo

A LP não deve abrir com:

> Transformamos o futuro através da inovação.

Ela deve abrir com algo diretamente conectado à busca e ao anúncio.

Exemplo melhor:

> Energia Solar em São Paulo para Reduzir Sua Conta de Energia

O texto exato depende da oferta real.

## Palavras-chave

Se as palavras-chave estiverem disponíveis:

- identificar intenção dominante;
- não fazer keyword stuffing;
- refletir a linguagem da busca naturalmente;
- garantir que o H1 represente o principal grupo de intenção;
- evitar usar a mesma LP para intenções muito diferentes quando isso prejudicar relevância.

# 18. Meta Ads e tráfego de interrupção

Quando o visitante vem de Meta Ads ou canal de descoberta:

Não assumir que ele estava procurando a solução.

A LP pode precisar:

- contextualizar o problema;
- desenvolver oportunidade;
- explicar benefício;
- mostrar por que agir;
- aumentar consciência;
- construir confiança antes de pedir uma ação de maior compromisso.

O Hero deve continuar a mensagem do criativo.

Não repetir o anúncio de forma mecânica; continuar a narrativa.

# 19. Message match obrigatório

Antes da construção, identificar:

- mensagem do anúncio;
- promessa;
- oferta;
- público;
- CTA do anúncio;
- expectativa criada pelo clique.

A primeira dobra da LP deve responder a essa expectativa.

Pergunta obrigatória de autoauditoria:

> A pessoa que clicou no anúncio sente que chegou exatamente ao lugar que esperava?

Se a resposta for não, revisar o Hero.

# 20. Above the fold

Em mobile e desktop, antes de rolar, o visitante deve conseguir entender rapidamente:

1. o que é oferecido;
2. para quem ou onde, quando relevante;
3. benefício principal;
4. ação principal.

Não obrigar os quatro elementos a caberem em qualquer tela a custo de legibilidade.

## O Hero pode conter

- eyebrow opcional;
- H1;
- subtítulo curto;
- CTA principal;
- CTA secundário somente quando fizer sentido;
- uma prova curta;
- imagem relevante.

## Evitar no Hero

- texto longo;
- vários parágrafos;
- quatro ou cinco botões;
- carrossel;
- vídeo autoplay pesado;
- slogan abstrato como informação principal;
- elementos que empurrem o CTA excessivamente para baixo;
- stock image genérica sem relação com a oferta.

# 21. Headlines

A headline deve priorizar:

- clareza;
- especificidade;
- continuidade com o anúncio;
- benefício;
- contexto.

Não priorizar criatividade em detrimento de entendimento.

Evitar:

- “Sua jornada começa aqui”;
- “Soluções que transformam”;
- “O futuro chegou”;
- “Excelência que faz a diferença”;
- “Você merece o melhor”.

Essas frases podem existir como apoio de marca, nunca como mensagem principal quando não explicam a oferta.

# 22. Copywriting

A copy deve ser:

- concreta;
- específica;
- legível;
- compatível com o estágio de consciência;
- proporcional à complexidade da decisão;
- baseada em fatos fornecidos ou verificáveis;
- orientada à ação.

## Preferir

- benefício + contexto;
- consequências reais;
- processo simples;
- linguagem do público;
- frases curtas;
- parágrafos pequenos;
- subtítulos informativos.

## Evitar

- clichês;
- superlativos vazios;
- jargão corporativo;
- texto produzido apenas para ocupar espaço;
- repetição do mesmo benefício em cinco seções;
- excesso de adjetivos;
- pressão artificial.

# 23. Benefícios x características

Não listar apenas características.

Sempre que possível, conectar:

**característica → benefício → impacto para o cliente**

Exemplo:

Ruim:
> Atendimento por WhatsApp.

Melhor:
> Fale diretamente pelo WhatsApp e envie fotos ou detalhes antes do atendimento.

Somente usar o benefício se ele for verdadeiro para o negócio.

# 24. Diferenciais

Diferencial precisa diferenciar.

Evitar como diferenciais isolados:

- qualidade;
- excelência;
- compromisso;
- confiança;
- melhor atendimento;
- equipe qualificada.

Transformar em fatos concretos quando existirem.

Exemplos:

- atendimento no mesmo dia;
- orçamento após avaliação;
- equipe própria;
- determinado equipamento;
- certificação real;
- especialização específica;
- determinada área de cobertura;
- suporte pós-serviço.

Nunca inventar.

# 25. Provas e confiança

Usar prova proporcional ao risco da decisão.

Tipos:

- avaliações verificáveis;
- depoimentos reais;
- fotos próprias;
- cases;
- antes/depois permitido e adequado;
- números verificáveis;
- certificações;
- credenciais;
- marcas;
- parceiros;
- mídia;
- demonstrações;
- garantia real.

## Regra de integridade

Nunca inventar:

- depoimentos;
- estrelas;
- nota no Google;
- número de clientes;
- número de projetos;
- anos de mercado;
- certificações;
- prêmios;
- resultados;
- percentual de economia;
- garantia;
- prazo;
- descontos;
- estoque;
- urgência;
- escassez.

Se não houver prova, construir confiança com clareza, processo e transparência.

# 26. Avaliações

Quando usar avaliações:

- manter o sentido original;
- não reescrever de forma que altere a experiência relatada;
- não atribuir nome, cargo ou empresa inexistente;
- não gerar foto falsa do avaliador;
- não simular widget do Google se não houver dados reais.

Se houver link ou dados oficiais, usar conforme fornecido.

# 27. Imagens

Prioridade:

1. imagens próprias;
2. equipe real;
3. instalações;
4. serviço real;
5. produto real;
6. contexto real;
7. stock somente quando necessário.

Não usar imagem apenas para “encher” layout.

## Performance

- otimizar dimensões;
- usar WebP/AVIF quando viável;
- manter fallback quando necessário;
- definir `width` e `height`;
- usar `loading="lazy"` abaixo da dobra;
- não aplicar lazy load indevidamente no principal elemento LCP;
- evitar imagens gigantes redimensionadas apenas por CSS;
- não hotlinkar imagens de terceiros.

# 28. CTA

A LP deve ter uma ação principal clara.

## CTA deve responder

- o que acontece ao clicar?
- qual o próximo passo?
- qual nível de compromisso?

## Exemplos

Em vez de:
> Saiba mais

Preferir, quando compatível:
- Falar no WhatsApp;
- Solicitar orçamento;
- Agendar uma avaliação;
- Verificar disponibilidade;
- Receber uma proposta;
- Pedir atendimento;
- Ligar agora.

## CTA por intenção

Alta urgência:
- `Ligar agora`;
- `Falar no WhatsApp`.

Serviço consultivo:
- `Solicitar avaliação`;
- `Receber uma proposta`.

Não escolher CTA artificialmente “criativo”.

# 29. Quantidade de CTAs

Repetir o mesmo CTA principal em pontos estratégicos é aceitável.

Não criar cinco objetivos concorrentes.

Exemplo ruim:

- WhatsApp;
- orçamento;
- Instagram;
- newsletter;
- baixar PDF;
- ligar;
- conhecer blog.

Tudo com o mesmo peso.

O visitante deve saber qual é a próxima ação principal.

# 30. WhatsApp

Quando WhatsApp for a conversão principal:

- usar link correto;
- validar DDI/DDD/número;
- mensagem pré-preenchida pode ser usada quando útil;
- não escrever mensagem robótica demais;
- CTA deve explicar que abrirá o WhatsApp;
- considerar botão fixo em mobile quando não atrapalhar o conteúdo;
- botão fixo não pode cobrir texto, formulário ou outro CTA;
- não usar múltiplos widgets de WhatsApp concorrentes.

Nunca inventar número.

# 31. Telefone

Quando ligação for importante:

- usar `tel:`;
- tornar o número clicável no mobile;
- informar horários somente se forem reais;
- em serviços urgentes, ligação pode ser CTA primário;
- não escrever “24 horas” sem confirmação do negócio.

# 32. Formulários

Formulário deve solicitar somente o necessário para o próximo passo.

## Reduzir fricção

Evitar pedir sem necessidade:

- CPF;
- endereço completo;
- data de nascimento;
- empresa;
- cargo;
- renda;
- múltiplos campos abertos.

## Estrutura recomendada

Para leads simples, considerar:

- nome;
- telefone/WhatsApp;
- campo essencial de qualificação, se necessário.

A quantidade real depende do processo comercial.

## UX

- labels visíveis;
- não depender somente de placeholder;
- mensagens de erro claras;
- teclado adequado no mobile;
- áreas de toque confortáveis;
- `autocomplete` adequado;
- confirmação clara após envio.

## Privacidade

Quando coletar dados pessoais:

- informar finalidade de forma compatível;
- incluir acesso à política de privacidade quando aplicável;
- não criar caixas pré-marcadas para consentimentos que exijam escolha;
- não coletar dados desnecessários.

Integração real do formulário só deve ser implementada se houver endpoint ou instrução do usuário.

# 33. FAQ

FAQ existe para remover objeções, não para aumentar a página.

Incluir perguntas reais como:

- preço ou orçamento;
- prazo;
- área atendida;
- processo;
- garantia real;
- formas de pagamento reais;
- preparação necessária;
- elegibilidade;
- documentos.

Evitar FAQ genérico com perguntas que ninguém faria.

Em LP compacta, 3 a 5 perguntas podem ser suficientes.

Não existe número obrigatório.

# 34. Navegação e menu

Por padrão, reduzir distrações.

Uma landing page de campanha não precisa copiar automaticamente o menu completo do site institucional.

Opções:

- logo sem navegação;
- navegação por âncoras;
- menu reduzido;
- menu completo somente quando houver razão estratégica.

Não esconder informações necessárias de confiança apenas para “eliminar saídas”.

# 35. Links externos

Evitar links que retirem o visitante da LP sem necessidade.

Links externos podem ser úteis para:

- política de privacidade;
- termos;
- credencial;
- informação regulatória;
- verificação necessária.

Links para Instagram, Facebook, blog ou página institucional não devem competir com o CTA principal.

# 36. Design system

Antes de estilizar, definir:

- cores;
- tipografia;
- escala de títulos;
- largura de conteúdo;
- espaçamentos;
- radius;
- sombras;
- botões;
- cards;
- ícones;
- estilo de fotografia;
- densidade visual.

## Princípio

A LP deve parecer pertencente ao negócio, não a um template genérico de SaaS.

Evitar automaticamente:

- gradiente roxo/azul;
- excesso de glassmorphism;
- cards em todas as seções;
- ícones aleatórios;
- “bento grids” sem função;
- dezenas de bordas arredondadas;
- animações decorativas;
- estilo visual de IA sem relação com a marca.

# 37. Mobile-first

Projetar primeiro para telas pequenas.

Priorizar:

- leitura;
- ação;
- velocidade;
- áreas de toque;
- formulários;
- hierarquia;
- espaçamento;
- CTA.

## Larguras mínimas de revisão

Verificar pelo menos:

- 320 px;
- 360 px;
- 375 px;
- 390 px;
- 414 px;
- 430 px.

Também revisar desktop.

## Procurar

- overflow horizontal;
- títulos quebrando mal;
- palavras cortadas;
- botões estourando;
- botão fixo cobrindo conteúdo;
- elementos sticky sobrepostos;
- hero alto demais;
- imagem cortada incorretamente;
- cards largos;
- texto pequeno;
- campos desconfortáveis;
- gaps excessivos;
- seções enormes sem necessidade;
- CTA desaparecendo;
- header ocupando área demais.

# 38. Header mobile

O header deve ser funcional e compacto.

Evitar:

- logo gigante;
- menu complexo;
- dois ou três CTAs;
- barras promocionais permanentes;
- altura excessiva.

Em serviço urgente, considerar acesso rápido a telefone/WhatsApp.

# 39. Sticky CTA mobile

Pode ser usado quando:

- a conversão depende de contato;
- melhora acesso;
- não bloqueia conteúdo;
- não cria sensação invasiva;
- não compete com um formulário ativo.

Obrigatório testar em telas pequenas.

Respeitar `safe-area-inset-bottom` quando aplicável.

# 40. Responsividade

Não construir desktop e apenas “reduzir” depois.

Usar:

- layouts fluidos;
- `clamp()` quando adequado;
- CSS Grid/Flexbox;
- `max-width`;
- medidas relativas;
- breakpoints baseados no layout.

Evitar breakpoints arbitrários em excesso.

# 41. Acessibilidade

Garantir:

- HTML semântico;
- labels;
- alt quando necessário;
- imagens decorativas com alt vazio;
- foco visível;
- navegação por teclado;
- contraste adequado;
- tamanho confortável de texto;
- botões e links distinguíveis;
- headings em hierarquia lógica;
- `aria-*` somente quando necessário;
- `prefers-reduced-motion` quando houver animações.

Não sacrificar acessibilidade para obter estética.

# 42. Performance

Landing page de tráfego pago deve carregar rápido, especialmente em mobile.

## Prioridades

- HTML simples;
- CSS enxuto;
- JS mínimo;
- imagens otimizadas;
- evitar fontes desnecessárias;
- evitar bibliotecas grandes;
- evitar embeds pesados;
- evitar carrosséis;
- evitar vídeo autoplay;
- evitar animações complexas;
- reduzir requisições externas.

## Fontes

Preferir:

1. system font quando compatível;
2. fonte local otimizada;
3. fonte externa somente quando necessária.

Evitar carregar muitas famílias e pesos.

## LCP

Identificar provável elemento LCP.

- otimizar imagem;
- evitar lazy load no elemento principal;
- usar tamanho correto;
- preload apenas quando houver benefício claro;
- não colocar conteúdo principal atrás de JS.

# 43. JavaScript

JavaScript deve ser mínimo.

Usar somente para funções necessárias, como:

- menu mobile;
- accordion de FAQ;
- comportamento do formulário;
- interações simples;
- mensagem de WhatsApp;
- elementos progressivos.

Não usar JS para:

- renderizar texto principal;
- criar layout;
- gerar conteúdo;
- animações pesadas;
- substituir recursos nativos do navegador sem necessidade.

# 44. Animações

Animação não é requisito de conversão.

Se usada:

- curta;
- discreta;
- não atrasar conteúdo;
- não esconder informação importante;
- respeitar `prefers-reduced-motion`;
- não movimentar CTA continuamente;
- não usar efeitos apenas para impressionar.

# 45. SEO técnico básico

Conversão é prioridade, mas a página deve ser tecnicamente correta.

Quando aplicável:

- `<title>`;
- meta description;
- canonical;
- favicon;
- Open Graph;
- Twitter Card;
- HTML semântico;
- um H1 principal;
- headings lógicos;
- alt de imagens;
- lang;
- URLs corretas.

Não aplicar estratégia editorial de SEO automaticamente.

# 46. Indexação

Não assumir `index` ou `noindex` cegamente.

## Considerar `index,follow`

Quando:

- a página tem valor orgânico;
- não cria duplicação relevante;
- é uma URL estável;
- pode funcionar como página de serviço.

## Considerar `noindex,follow`

Quando:

- é variante de campanha;
- é teste;
- duplica outra página;
- foi criada apenas para mídia;
- pode causar canibalização;
- URL é temporária.

Se a decisão depender da estratégia do domínio e não houver contexto, perguntar ao usuário.

# 47. Negócios regulados ou sensíveis

Em setores como:

- advocacia;
- saúde;
- finanças;
- seguros;
- estética médica;
- medicamentos;
- serviços que envolvam alegações de resultado;

adotar copy conservadora.

Não prometer:

- resultado garantido;
- cura;
- ganho financeiro certo;
- economia exata sem base;
- prazo impossível;
- superioridade sem prova.

Respeitar regras profissionais fornecidas pelo usuário.

Quando houver dúvida regulatória relevante, sinalizar antes de publicar.

# 48. Padrões proibidos de persuasão

Não usar:

- urgência falsa;
- escassez falsa;
- contagem regressiva falsa;
- número falso de pessoas vendo;
- “últimas vagas” inventado;
- desconto inventado;
- preço anterior fictício;
- reviews falsos;
- logos de clientes inexistentes;
- “recomendado por especialistas” sem prova;
- selos falsos;
- garantias inexistentes;
- estatísticas fabricadas;
- fake notifications;
- dark patterns.

# 49. Estrutura de arquivos recomendada

Para uma LP isolada:

```text
/
├── index.html
├── 404.html                  # se necessário
├── _headers                  # se necessário
├── _redirects                # se necessário
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
```

Não criar arquivos vazios apenas para seguir a estrutura.

Se o projeto já tiver padrão próprio, respeitá-lo.

# 50. CSS

O CSS deve:

- ser organizado;
- usar variáveis para tokens relevantes;
- evitar duplicação excessiva;
- evitar `!important` salvo necessidade clara;
- manter componentes previsíveis;
- preservar responsividade;
- não depender de framework.

As cores devem vir da identidade da marca, não de defaults da skill.

# 51. HTML semântico

Preferir:

- `header`;
- `main`;
- `section`;
- `article` quando apropriado;
- `nav`;
- `footer`;
- `form`;
- `button`;
- `a`.

Não transformar tudo em `div`.

Usar IDs úteis para:

- âncoras;
- futuros eventos;
- manutenção;
- acessibilidade.

Não inserir código de tracking.

# 52. Preparação para tracking futuro

Sem instalar GTM ou pixels, manter elementos principais identificáveis.

Exemplos:

```html
<a id="cta-whatsapp-hero" ...>
<a id="cta-whatsapp-final" ...>
<a id="cta-phone-header" ...>
<form id="lead-form" ...>
```

IDs devem ser claros e estáveis.

Não inventar eventos nem dataLayer.

# 53. Fluxo de construção

Depois do briefing:

## Etapa 1 — Diagnóstico

Produzir internamente:

- canal;
- intenção;
- consciência;
- urgência;
- complexidade;
- risco;
- conversão;
- provas;
- principais objeções.

## Etapa 2 — Estratégia

Definir:

- profundidade;
- Hero;
- narrativa;
- CTA;
- provas;
- seções;
- ordem;
- elementos que serão omitidos.

## Etapa 3 — Copy

Escrever primeiro a estrutura e a copy essencial.

Não começar pela decoração.

## Etapa 4 — Design

Aplicar identidade e design system.

## Etapa 5 — Código

Implementar HTML/CSS/JS.

## Etapa 6 — Mobile

Revisar larguras.

## Etapa 7 — Auditoria

Revisar conversão, integridade, performance e técnica.

# 54. Regra de arquitetura

Antes de adicionar uma seção, responder:

> Por que esta seção existe?

Respostas aceitáveis:

- explica uma parte necessária;
- responde objeção;
- demonstra prova;
- apresenta benefício;
- aumenta confiança;
- mostra processo;
- facilita decisão;
- cria ação.

Resposta não aceitável:

> Porque landing pages costumam ter essa seção.

# 55. Regra de remoção

Após terminar a primeira versão, procurar conteúdo que possa ser removido sem prejudicar a decisão.

Perguntar:

> Se eu remover esta seção, a pessoa perde uma informação necessária para converter?

Se não, considerar remover.

# 56. Ordem das informações

A ordem deve acompanhar a decisão do visitante.

Não ordenar seções por preferência estética.

Exemplo de alta intenção:

```text
Oferta
→ adequação
→ prova
→ objeção
→ ação
```

Exemplo de baixa consciência:

```text
Problema
→ impacto
→ solução
→ benefício
→ prova
→ objeção
→ ação
```

# 57. Página local de alta intenção

Quando o cenário for:

- Search;
- cidade definida;
- serviço procurado diretamente;
- CTA WhatsApp/telefone;
- urgência ou necessidade clara;

priorizar algo como:

```text
Hero: serviço + cidade + CTA
↓
Serviços principais
↓
Diferenciais concretos
↓
Prova/confiança
↓
Área atendida / processo
↓
FAQ curto
↓
CTA final
```

Não tratar como regra rígida.

# 58. Serviço de consideração

Quando o visitante compara opções:

```text
Hero
↓
benefício / problema
↓
solução
↓
como funciona
↓
diferenciais
↓
provas
↓
objeções
↓
FAQ
↓
CTA
```

Pode ser reduzido quando houver redundância.

# 59. High-ticket ou público frio

Pode exigir:

- contexto;
- problema;
- mecanismo;
- resultado esperado sem garantia;
- processo;
- prova;
- autoridade;
- objeções;
- qualificação;
- CTA de menor fricção.

Não usar pressão artificial para compensar falta de confiança.

# 60. Autoauditoria de conversão

Antes de considerar a LP pronta, responder:

## Mensagem

- fica claro em poucos segundos o que é oferecido?
- o Hero corresponde ao anúncio?
- o H1 é específico?
- o visitante reconhece que chegou ao lugar certo?

## Oferta

- benefício está claro?
- condições importantes estão claras?
- promessa é verdadeira?
- há exageros?

## CTA

- há uma ação principal?
- o CTA aparece cedo?
- o texto do CTA explica a ação?
- existem CTAs concorrentes?
- funciona no mobile?

## Confiança

- há prova suficiente para o nível de risco?
- alguma prova foi inventada?
- credenciais são verificáveis?
- fotos e números são reais?

## Fricção

- há informação sobrando?
- formulário pede dados demais?
- menu cria saídas desnecessárias?
- há passos evitáveis?

## Objeções

- principais dúvidas foram respondidas?
- falta alguma informação crítica?
- FAQ é real ou genérico?

Se houver falha relevante, corrigir antes da entrega.

# 61. Autoauditoria mobile

Testar:

- 320;
- 360;
- 375;
- 390;
- 414;
- 430 px.

Verificar:

- nenhum overflow horizontal;
- CTA acessível;
- botão não cortado;
- header não cobre conteúdo;
- sticky CTA não sobrepõe;
- fonte legível;
- formulário confortável;
- imagens corretas;
- seções proporcionais;
- Hero não ocupa várias telas sem razão;
- nenhum elemento fica impossível de tocar;
- menu abre/fecha corretamente;
- FAQ funciona;
- WhatsApp/telefone funcionam.

# 62. Autoauditoria técnica

Verificar:

- HTML válido e sem erros evidentes;
- links sem `#` falso;
- telefone correto;
- WhatsApp correto;
- formulário funcional ou claramente pendente de integração;
- imagens existentes;
- caminhos relativos corretos;
- nenhum asset local quebrado;
- console sem erros;
- sem dependências desnecessárias;
- sem tracking não solicitado;
- title/meta adequados;
- favicon quando disponível;
- canonical apenas se houver URL definida;
- robots conforme decisão;
- Cloudflare Pages compatível.

# 63. Autoauditoria de integridade

Procurar especificamente:

- informações inventadas;
- valores fictícios;
- horários fictícios;
- “24h” não confirmado;
- avaliações inventadas;
- notas falsas;
- nomes falsos;
- cidade errada;
- WhatsApp errado;
- garantias inventadas;
- estatísticas não fornecidas;
- certificações inexistentes;
- placeholders;
- lorem ipsum;
- texto de teste.

Qualquer ocorrência reprova a entrega.

# 64. Performance: critérios práticos

A skill deve perseguir excelente desempenho, mas não inventar pontuação.

Não afirmar “Lighthouse 100” ou “Core Web Vitals aprovados” sem medir.

Quando ferramentas estiverem disponíveis:

- testar;
- registrar resultado real;
- corrigir problemas relevantes.

Sem ferramenta:

- informar que o código foi otimizado por boas práticas, mas não declarar score.

# 65. Critérios de aceite

A LP só está pronta quando:

- briefing crítico está completo;
- estratégia foi definida pelo contexto;
- não é um template genérico;
- mensagem combina com a campanha;
- CTA principal está claro;
- não há conteúdo desnecessário evidente;
- provas são reais;
- nenhuma informação foi inventada;
- mobile foi revisado;
- código é estático;
- HTML/CSS estão organizados;
- JS é mínimo;
- Cloudflare Pages é compatível;
- links principais funcionam;
- não há placeholders públicos;
- tracking não foi adicionado sem solicitação;
- autoauditorias foram concluídas.

# 66. Entrega ao usuário

Ao concluir, informar de forma objetiva:

1. estratégia escolhida;
2. por que a LP ficou compacta/intermediária/persuasiva;
3. CTA principal;
4. arquivos criados/alterados;
5. qualquer informação real que ainda dependa do usuário;
6. itens que ficaram fora do escopo, como tracking;
7. testes realizados.

Não escrever relatório enorme quando não for necessário.

# 67. Projetos existentes

Quando a LP for criada dentro de um repositório existente:

1. ler estrutura atual;
2. identificar convenções;
3. preservar arquivos não relacionados;
4. não refatorar o projeto inteiro sem necessidade;
5. verificar branch atual;
6. informar riscos antes de mudanças estruturais;
7. não apagar arquivos sem razão clara.

# 68. Git e publicação

Por padrão:

- pode inspecionar `git status`, `git diff`, branch e histórico;
- não fazer commit sem autorização;
- não fazer push sem autorização;
- não fazer merge sem autorização;
- não fazer deploy manual sem autorização;
- não apagar branches sem autorização;
- não executar comandos destrutivos sem autorização.

O usuário decide quando publicar.

# 69. Alterações posteriores

Se o usuário pedir GTM, GA4, Pixel ou conversões depois da LP pronta:

- tratar como etapa separada;
- não redesenhar a página sem necessidade;
- manter IDs estáveis;
- inserir scripts exatamente nos locais solicitados;
- validar duplicidade de tags;
- não misturar tracking com a lógica desta skill.

# 70. Princípios finais

1. Conversão não é sinônimo de página longa.
2. Página curta não é sinônimo de alta conversão.
3. O tamanho deriva da decisão do usuário.
4. Message match vem antes de criatividade.
5. Mobile não é versão reduzida do desktop.
6. Prova real vale mais que volume de copy.
7. Clareza vale mais que slogan.
8. Um CTA principal vale mais que várias opções concorrentes.
9. Performance faz parte da experiência de conversão.
10. Design deve servir a oferta.
11. Conteúdo sem função deve ser removido.
12. Nunca inventar fatos para preencher layout.
13. Negócios locais de alta intenção tendem a exigir menos conteúdo.
14. High-ticket, público frio e alto risco podem exigir mais argumentação.
15. A arquitetura deve nascer do briefing, nunca de um template fixo.
16. HTML5 + CSS3 + JavaScript mínimo são o padrão.
17. Cloudflare Pages é o ambiente padrão.
18. Tracking fica fora até solicitação explícita.
19. A LP só termina depois de autoauditoria.
20. O objetivo final é facilitar uma decisão real, não apenas produzir uma página bonita.

# 71. Resposta padrão ao primeiro pedido sem briefing

Quando o usuário pedir apenas algo como:

> Crie uma landing page para minha empresa.

Responder primeiro com perguntas curtas e adaptadas ao que estiver faltando.

Exemplo:

> Antes de construir, preciso fechar o cenário da campanha:
>
> 1. Qual serviço/produto será anunciado?
> 2. O tráfego virá de Google Search, Meta Ads ou outro canal?
> 3. Qual será a conversão principal: WhatsApp, ligação, formulário, compra ou agendamento?
> 4. Qual cidade/região ou público será atendido?
> 5. Qual promessa/oferta aparece no anúncio?
> 6. Quais diferenciais e provas reais temos (avaliações, fotos, cases, certificações)?
> 7. Existe identidade visual, site ou Instagram que devo seguir?
>
> Se você já tiver anúncio, palavras-chave, criativos ou briefing, envie também.

Não pedir novamente informações que já tenham sido fornecidas.

# 72. Resposta padrão após briefing suficiente

Antes de codar, a skill pode resumir em poucas linhas:

```text
Diagnóstico
- Origem: Google Search
- Intenção: alta
- Tipo: negócio local
- Conversão: WhatsApp
- Complexidade: baixa/média
- Confiança necessária: média

Decisão
- LP compacta
- Hero direto
- prova cedo
- poucas seções
- CTA recorrente
- mobile-first
```

Depois construir sem pedir aprovação intermediária, a menos que exista uma decisão crítica que não possa ser inferida.

# 73. Regra de autonomia

A skill deve tomar decisões de estrutura com base nas respostas.

Não pedir ao usuário:

- “Você quer 5 ou 8 seções?”;
- “Quer uma LP curta ou longa?”;
- “Quer FAQ?”;
- “Quer prova social?”;

quando essas decisões puderem ser tomadas estrategicamente.

Perguntar apenas quando faltar dado de negócio ou quando houver duas alternativas relevantes que dependam da preferência do usuário.

# 74. Regra principal do motor de decisão

A profundidade da página deve aumentar conforme aumentem:

- desconhecimento;
- complexidade;
- preço/compromisso;
- risco;
- necessidade de confiança;
- quantidade de objeções;
- necessidade de educação.

A profundidade deve diminuir conforme aumentem:

- intenção;
- urgência;
- familiaridade com a solução;
- simplicidade;
- clareza do próximo passo.

Origem do tráfego é um fator importante, mas nunca o único.

# 75. Resultado esperado

A skill deve entregar landing pages que:

- pareçam feitas especificamente para a campanha;
- sejam rápidas;
- funcionem muito bem no celular;
- sejam fáceis de manter;
- não tenham tecnologia desnecessária;
- não pareçam templates genéricos;
- mantenham coerência com a marca;
- expliquem apenas o necessário;
- transmitam confiança proporcional ao risco;
- tenham uma ação principal inequívoca;
- estejam prontas para deploy estático;
- possam receber tracking posteriormente sem reconstrução.

# 76. Padrão Comprovado de Alta Conversão para Google Ads (Negócios Locais, Depósitos e Serviços Físicos)

Com base em validações reais de tráfego de busca com alta intenção comercial no Brasil, este padrão elimina atrito e maximiza a taxa de conversão:

## A. Arquitetura da Hero (Split-Screen de Alto Impacto)
- **Evitar caixas flutuantes soltas**: Nunca colocar caixas de texto soltas no meio de backgrounds escuros sem hierarquia.
- **Coluna 1 (Oferta & Ação Imediata)**:
  - Tag Kicker: `[📍 LOCALIZAÇÃO · ENTREGA RÁPIDA NA CIDADE/REGIÃO]`.
  - H1 com Message Match: Correspondência exata com os termos de busca do anúncio (ex: *"Madeiras para Telhado & Telhas com Preço Direto de Depósito"*).
  - Parágrafo de apoio: Promessa clara de orçamento em menos de 10 minutos.
  - **CTA Principal WhatsApp**: Botão grande, verde com sombra suave e mensagem pré-montada com o contexto do anúncio.
  - **Botões Click-to-Call**: Botões de ligação telefônica direta (`tel:XXXX-XXXX`) para números fixos e comerciais logo abaixo do CTA principal.
  - **Prova Social Integrada na Hero**: Linha compacta com o selo Google 4.9 ★★★★★ (+100 avaliações) logo abaixo dos botões.
- **Coluna 2 (Prova Visual de Estoque Real)**:
  - Card fotográfico mostrando o produto real, pátio ou loja física com badge sobreposto do endereço real.
  - Mini-barra inferior com 3 números de credibilidade (ex: *35+ Anos de Loja | 100% Madeira Legal DOF | 52k+ Clientes Atendidos*).

## B. Zero Formulário em Negócios de Alta Urgência / Busca Local
- Em compras de materiais de construção, depósitos e serviços locais, formulários geram fricção desnecessária. O visitante quer falar com um vendedor real imediatamente.
- Toda a ação deve ser canalizada para WhatsApp Direto e Ligação Telefônica.

## C. Fluxo de 3 Passos Simples ("Como Funciona")
- Posicionado logo abaixo da Hero:
  1. *Envie sua lista ou medidas no WhatsApp*
  2. *Receba o orçamento detalhado com frete em 10 minutos*
  3. *Pague na entrega da carga (Cartão no local, Pix ou Faturado)*

## D. Catálogo de Produtos com Ações Duplas
- Cada card de produto deve ter foto nítida, especificações/bitolas e **2 botões de ação**:
  - Botão Verde: *"Cotar [Produto] no WhatsApp"* (passando mensagem com o nome do item no link).
  - Botão Neutro: *"Ligar"* para o depósito.

## E. Selo Google 4.9 Estrelas em Destaque
- Seção com emblema oficial do Google ("G" colorido), nota numérica 4.9, 5 estrelas douradas e depoimento consolidado de pontualidade e procedência.

## F. Mapa Integrado do Google Maps & Dados Físicos na Última Seção
- Iframe do Google Maps incorporado (`width="100%"`), endereço completo, horários de atendimento, telefones fixos e botão de rota *"Abrir no GPS / Google Maps"*.

## G. Sticky Mobile Bar Dupla no Rodapé
- Fixa na parte inferior do smartphone para cliques com o polegar:
  - Botão 1: **"Ligar Agora"** (lado esquerdo, neutro/escuro com ícone de telefone).
  - Botão 2: **"WhatsApp"** (lado direito, verde com ícone do WhatsApp).

