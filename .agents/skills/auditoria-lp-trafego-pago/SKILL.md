---
name: auditoria-lp-trafego-pago
description: Audite landing pages de mídia paga com evidências.
version: 1.0.0
author: Cayo + OpenAI
license: Proprietary
metadata:
  hermes:
    tags: [Marketing, Paid-Media, CRO, Landing-Pages, Google-Ads, Meta-Ads]
    requires_toolsets: [browser]
---

# Auditoria de Landing Pages para Tráfego Pago

## Objetivo

Auditar páginas que recebem tráfego de Google Ads, Meta Ads e outras mídias pagas, identificando falhas que podem reduzir conversão, prejudicar mensuração, gerar reprovação de anúncios ou desperdiçar orçamento.

A auditoria deve ser prática, verificável e orientada a decisão. Não produzir uma lista genérica de “boas práticas”. Cada achado precisa ter evidência, impacto provável, confiança e ação recomendada.

## Quando usar

Carregue esta skill quando o usuário pedir para:

- analisar uma landing page, página de vendas, página de captura ou página de contato usada em anúncios;
- avaliar se um site está pronto para receber tráfego pago;
- encontrar problemas de conversão, rastreamento, confiança, mobile ou políticas de anúncios;
- revisar correspondência entre anúncio, palavra-chave, criativo, oferta e página;
- testar CTAs, WhatsApp, telefone, formulário, checkout ou agendamento;
- priorizar melhorias de CRO para campanhas pagas;
- comparar versões de uma landing page;
- auditar uma página antes de lançar campanhas.

Não use esta skill como auditoria completa de SEO orgânico. Questões de SEO só entram quando interferem diretamente na experiência do tráfego pago, na rastreabilidade, na segurança, na renderização ou nas políticas da plataforma.

## Princípios obrigatórios

1. **Evidência antes de opinião.** Não afirmar que algo está ausente, quebrado ou mal configurado sem verificar.
2. **Contexto antes de regra.** A melhor página depende da origem do tráfego, intenção, oferta, estágio do funil, dispositivo e ação desejada.
3. **Não existe layout universal.** Não tratar tamanho da página, número de campos, presença de menu, posição do CTA ou cor do botão como regras absolutas.
4. **Separar bug de hipótese.** Link quebrado e tag duplicada são falhas verificáveis; “headline pode converter mais” é hipótese.
5. **Não confundir qualidade estética com conversão.** Design bonito não compensa oferta fraca, mensagem incoerente ou mensuração quebrada.
6. **Não inventar benchmarks.** Não prever taxa de conversão sem dados comparáveis do negócio.
7. **Não prometer impacto numérico.** Usar linguagem como “pode reduzir atrito” ou “há risco de perda”, salvo quando houver dados reais fornecidos.
8. **Não executar ações irreversíveis.** Não enviar formulário, mensagem, compra, agendamento, ligação ou cadastro sem autorização explícita.
9. **Não usar dados pessoais reais.** Quando um teste exigir preenchimento e houver autorização, usar dados sintéticos claramente identificados.
10. **Políticas mudam.** Quando o diagnóstico envolver risco de reprovação, segmento restrito ou regra de plataforma, consultar a documentação oficial atual.

## Modos de auditoria

### Auditoria rápida

Use quando o usuário quer triagem ou não forneceu contexto detalhado.

- homepage ou URL informada;
- primeira dobra em desktop e mobile;
- CTA principal;
- funcionamento técnico;
- formulário/WhatsApp;
- confiança básica;
- rastreamento aparente;
- principais 5 a 10 problemas.

### Auditoria completa

Use como padrão quando o usuário pedir análise profunda, “completa”, “100%” ou auditoria profissional.

Carregue os arquivos de referência relevantes e execute o procedimento integral.

### Auditoria comparativa

Use para comparar versão A/B, página antiga/nova ou concorrentes.

- manter o mesmo dispositivo, viewport e critérios;
- comparar fatos e fricções, não apenas gosto visual;
- não declarar vencedor sem dados de experimento;
- indicar qual versão parece mais coerente e quais hipóteses merecem teste.

## Contexto mínimo desejável

Tente obter, sem bloquear a auditoria:

- URL;
- fonte de tráfego: Google Search, Performance Max, Display, Demand Gen, YouTube, Meta ou outra;
- anúncio, criativo ou promessa usada;
- palavra-chave/termo de busca quando houver;
- objetivo principal: WhatsApp, lead, ligação, compra, agendamento, orçamento ou outro;
- público e localização;
- dispositivo predominante;
- oferta e ticket;
- conversão considerada principal;
- acesso ou não a dados de campanha e analytics.

Se faltar contexto, continue com uma auditoria da página e registre as premissas. Não atribua falhas de “message match” sem conhecer a mensagem do anúncio.

## Procedimento obrigatório

### 1. Definir o caminho de conversão

Antes de avaliar o layout, identificar:

- de onde o usuário vem;
- o que ele espera encontrar;
- qual é a ação primária;
- qual é o próximo passo depois da ação;
- quais objeções precisam ser resolvidas antes do compromisso.

Carregar `references/01-contexto-correspondencia.md`.

### 2. Testar funcionamento técnico

Verificar:

- status HTTP e redirecionamentos;
- carregamento em navegador comum;
- erros visíveis de JavaScript;
- recursos quebrados;
- links internos e externos relevantes;
- CTAs, telefone, WhatsApp, formulário, checkout ou agenda;
- comportamento de sucesso e erro sem concluir ação real;
- segurança básica, HTTPS e conteúdo misto;
- acessibilidade do destino em desktop e mobile.

Carregar `references/06-performance-tecnica-seguranca.md` e `references/09-procedimento-auditoria.md`.

### 3. Auditar desktop e mobile

Testar no mínimo:

- desktop em 1280×800 ou equivalente;
- mobile em 390×844;
- mobile maior em 430×932 quando houver diferença relevante.

Registrar screenshots da primeira dobra e de pontos críticos quando a ferramenta permitir.

Carregar `references/03-ux-mobile-acessibilidade.md`.

### 4. Avaliar correspondência e proposta

Comparar, quando disponíveis:

- termo/palavra-chave;
- anúncio ou criativo;
- headline da página;
- oferta;
- CTA;
- destino final.

Avaliar clareza, continuidade, especificidade e adequação à intenção.

Carregar `references/01-contexto-correspondencia.md` e `references/02-oferta-copy-estrutura.md`.

### 5. Avaliar conversão e persuasão

Examinar:

- primeira dobra;
- proposta de valor;
- oferta;
- benefício e mecanismo;
- clareza do próximo passo;
- provas;
- autoridade;
- objeções;
- risco percebido;
- preço/condições quando aplicável;
- CTA primário e secundário;
- consistência ao longo da página.

Não recomendar gatilhos artificiais ou escassez falsa.

### 6. Testar formulários, WhatsApp e checkout

Verificar apenas até o ponto seguro anterior ao envio real:

- campos necessários e desnecessários;
- rótulos, máscaras e teclado mobile;
- validação e mensagens de erro;
- preservação de dados em caso de erro;
- privacidade e consentimento;
- mensagem de WhatsApp preenchida;
- número correto;
- evento de clique;
- página/estado de sucesso;
- checkout convidado e transparência de custos quando aplicável.

Carregar `references/04-formularios-whatsapp-checkout.md`.

### 7. Verificar mensuração

Investigar:

- Google Tag Manager;
- Google tag / gtag;
- GA4;
- tag de conversão do Google Ads;
- Conversion Linker quando pertinente;
- Meta Pixel / fbq;
- dataLayer;
- eventos ao clicar e converter;
- duplicação de eventos;
- UTMs, gclid e parâmetros;
- consentimento e bloqueio de tags;
- enhanced conversions, quando verificável;
- possíveis sinais de mensuração server-side.

Não afirmar que CAPI, server-side tagging ou enhanced conversions estão ausentes apenas porque não aparecem no front-end. Classificar como “não verificável externamente” quando necessário.

Carregar `references/05-rastreamento-atribuicao.md`.

### 8. Avaliar confiança, políticas e compliance

Verificar:

- identidade real da empresa/profissional;
- contato e responsável;
- consistência de nomes;
- política de privacidade e termos;
- preço, condições e promessas;
- depoimentos e provas verificáveis;
- alegações médicas, financeiras, jurídicas ou de resultados;
- destino funcional, rastreável, navegável e coerente;
- riscos de práticas enganosas;
- exigências do segmento.

Não emitir parecer jurídico. Sinalizar risco e recomendar revisão profissional quando apropriado.

Carregar `references/07-confianca-politicas-compliance.md`.

### 9. Aplicar critérios específicos da plataforma

Carregar `references/08-plataformas-tipos-trafego.md` e adaptar:

- Google Search: intenção, termo, anúncio e landing page;
- Google Display/Demand Gen/YouTube/Meta: continuidade visual e de promessa;
- Performance Max: coerência com múltiplos assets e destinos;
- click-to-WhatsApp: expectativa de conversa e qualidade do pré-preenchimento;
- ecommerce: produto, preço, frete, estoque e checkout;
- geração de leads: clareza do contato, qualificação e resposta esperada.

### 10. Priorizar e relatar

Classificar cada achado por:

- severidade: crítico, alto, médio, baixo ou observação;
- confiança: confirmada, alta, média ou baixa;
- tipo: técnico, rastreamento, política, mensagem, UX, formulário, confiança ou hipótese CRO;
- esforço: baixo, médio ou alto;
- evidência: screenshot, URL, status, requisição, elemento, texto ou comportamento.

Carregar `references/10-priorizacao-score.md` e `references/11-modelo-relatorio.md`.

## Etiquetas de evidência

Use exatamente estas categorias:

- **CONFIRMADO:** observado diretamente e reproduzível.
- **PROVÁVEL:** há sinais fortes, mas falta acesso interno para confirmar.
- **NÃO VERIFICÁVEL EXTERNAMENTE:** exige Analytics, Ads, GTM, CRM, servidor ou backend.
- **NÃO APLICÁVEL:** critério não corresponde ao modelo de negócio ou fluxo.
- **HIPÓTESE DE TESTE:** recomendação de CRO que precisa ser validada com dados.

Nunca transformar “não detectado” em “ausente” sem explicar o método e a limitação.

## Severidade

- **Crítico:** bloqueia conversão, gera risco sério de política/segurança, envia dados ao destino errado ou torna mensuração principal inválida.
- **Alto:** pode causar perda relevante de leads/vendas, quebra de confiança ou otimização de campanha com dados ruins.
- **Médio:** aumenta atrito, reduz clareza ou limita desempenho, mas o fluxo ainda funciona.
- **Baixo:** melhoria de acabamento, consistência ou eficiência com impacto provável menor.
- **Observação:** informação contextual, limitação do teste ou oportunidade sem evidência suficiente de problema.

## Score opcional

Só gerar score quando o usuário pedir ou quando a auditoria completa se beneficiar dele.

O score é uma **rubrica diagnóstica**, não uma previsão de conversão. Sempre mostrar confiança e itens não verificados.

Dimensões sugeridas:

- Correspondência anúncio–página: 20
- Oferta, copy e clareza: 15
- CTA, formulário e fluxo: 15
- Rastreamento e atribuição: 15
- Mobile e usabilidade: 10
- Performance e técnica: 10
- Confiança e prova: 10
- Políticas e segurança: 5

Não conceder nota máxima a dimensão não verificada. Marcar “N/V” e calcular score provisório com transparência.

## Regras de saída

O relatório deve começar com:

1. status geral da página;
2. objetivo de conversão identificado;
3. contexto fornecido e premissas;
4. problemas críticos e altos;
5. achados por área;
6. plano priorizado;
7. testes realizados;
8. limitações.

Para cada problema, informar:

- gravidade;
- evidência;
- por que importa para tráfego pago;
- correção recomendada;
- esforço estimado;
- confiança.

Evitar relatórios inchados com itens que estão corretos. Resumir o que funcionou e detalhar o que exige ação.

## Proibições

- Não enviar formulário, mensagem, ligação, compra ou agendamento sem autorização.
- Não clicar em botão que possa gerar cobrança ou compromisso.
- Não usar CPF, e-mail, telefone ou dados reais.
- Não aceitar alegações do site como prova independente.
- Não recomendar depoimentos inventados, selos falsos, números não comprovados ou escassez artificial.
- Não declarar conformidade legal definitiva.
- Não recomendar remoção de menu, encurtamento de página ou redução de campos como regra automática.
- Não reprovar uma página por ausência de formulário quando WhatsApp, telefone ou checkout forem o fluxo intencional e estiverem adequados.
- Não usar PageSpeed/Lighthouse isoladamente para concluir que a página é lenta para usuários reais.
- Não confundir ausência de conversão na campanha com defeito da landing page sem analisar tráfego, oferta e mensuração.

## Arquivos de referência

- `references/01-contexto-correspondencia.md`
- `references/02-oferta-copy-estrutura.md`
- `references/03-ux-mobile-acessibilidade.md`
- `references/04-formularios-whatsapp-checkout.md`
- `references/05-rastreamento-atribuicao.md`
- `references/06-performance-tecnica-seguranca.md`
- `references/07-confianca-politicas-compliance.md`
- `references/08-plataformas-tipos-trafego.md`
- `references/09-procedimento-auditoria.md`
- `references/10-priorizacao-score.md`
- `references/11-modelo-relatorio.md`
- `references/12-mitos-descartados.md`
- `references/13-fontes-e-evidencias.md`
- `references/14-variacoes-modelo-negocio.md`
- `templates/relatorio-final.md`

## Verificação final

Antes de responder, confirmar:

- desktop e mobile foram testados ou a limitação foi declarada;
- CTAs principais foram verificados sem concluir ação real;
- fatos, probabilidades e hipóteses estão separados;
- rastreamento foi investigado tecnicamente, não apenas pelo HTML inicial;
- achados possuem evidência;
- recomendações não dependem de “hacks” universais;
- não houve envio de dados reais;
- o relatório prioriza ações em vez de apenas listar problemas.
