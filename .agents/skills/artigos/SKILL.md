---
name: artigos
description: Research, plan, write, update, audit and prepare people-first SEO articles for Astro SSG business websites using Content Collections and Markdown, designed to build topical authority, earn qualified organic traffic and support business conversion without keyword stuffing or scaled low-value content.
version: 2.0.0
updated: 2026-08-17
default_language: user-language
primary_use: SEO articles for Astro business websites, local businesses and expert-led content
companion_skill: siteseo
default_publishing_contract: Astro Content Collections + Markdown + shared BlogLayout
---

# SEO Article Writer

## 1. PURPOSE

This skill is the editorial and article-production layer for SEO-focused websites.

It is specifically responsible for:

- researching SEO article opportunities;
- deciding whether a topic should become an article;
- planning article clusters;
- analyzing search intent;
- researching live SERPs;
- creating article briefs;
- writing complete article copy;
- updating existing articles;
- improving underperforming articles;
- preventing content cannibalization;
- creating contextual internal-link opportunities;
- supporting topical authority;
- supporting qualified business conversions;
- preparing article-specific SEO metadata/content data;
- preparing truthful structured-data inputs;
- preparing contextual final CTA copy;
- preparing image briefs;
- auditing editorial quality before publication;
- filling the article content contract required by the website's Astro Content Collection.

This is NOT primarily a website-building or visual-design skill.

When the companion `seo-astro-static-website-builder` skill is available, it owns:

- Astro SSG architecture;
- `src/content.config.ts` and Content Collection schema;
- dynamic article route such as `src/pages/blog/[slug].astro`;
- `BlogLayout.astro`;
- `SEOHead.astro`;
- CSS/design system;
- reusable components;
- technical SEO infrastructure;
- sitemap and robots.txt;
- canonical implementation;
- structured-data rendering;
- performance;
- accessibility implementation;
- article CTA visual component;
- responsive behavior;
- build/deployment validation.

The division of responsibility is:

```text
SEO Article Writer
→ research
→ search intent
→ editorial strategy
→ outline
→ article copy
→ evidence
→ internal-link recommendations
→ frontmatter/content values required by the existing collection schema
→ contextual CTA copy
→ image brief
→ update strategy
→ editorial QA

SEO Astro Static Website Builder
→ Astro SSG architecture
→ Content Collection schema
→ Markdown rendering route
→ BlogLayout / SEOHead
→ CSS / visual design
→ technical implementation
→ Article/BlogPosting JSON-LD rendering
→ canonical
→ sitemap
→ performance
→ reusable CTA component
→ build and production QA
```

## EXISTING-PROJECT RULE

When operating inside an existing Astro project, do not invent an article format from memory.

Before creating or materially updating a publishable article, inspect the project's real content contract whenever accessible, especially:

```text
src/content.config.ts
src/pages/blog/[slug].astro or equivalent dynamic route
src/layouts/BlogLayout.astro
src/components/seo/SEOHead.astro
src/components/blog/ArticleCTA.astro
src/pages/blog/index.astro
representative existing Markdown articles
```

The actual project schema and renderer are the implementation source of truth.

Do not add frontmatter fields that the project does not use merely because this skill lists them as examples.

Do not omit required fields defined by the collection schema.

Do not create one hand-written `.astro` page per article when the project uses a Content Collection.

Do not duplicate Header, Footer, Breadcrumbs, Sidebar, SEO head, JSON-LD or reusable CTA markup inside each Markdown article.

If the project cannot be inspected, use the generic Astro Content Collection contract in this skill as a recommendation and clearly distinguish assumptions from verified project facts.

---

# 2. PRIMARY OBJECTIVE

The objective is:

> Create the most useful, accurate, credible and satisfying article for the actual search intent while connecting the article naturally to the website's broader topical and business goals.

The goal is NOT:

> write the longest article;
> repeat the keyword the most;
> reproduce the current top-ranking pages;
> generate content at scale;
> create text only because a keyword has search volume.

A successful article should ideally:

1. satisfy the searcher's primary question;
2. answer important follow-up questions;
3. provide original or meaningfully improved value;
4. be easy to understand;
5. be factually trustworthy;
6. fit the site's topical focus;
7. strengthen relevant service or category pages;
8. create natural internal-link paths;
9. have an appropriate business next step when relevant;
10. avoid manipulative SEO patterns.

---

# 3. NO RANKING GUARANTEE

Never guarantee:

- position #1;
- page-one rankings;
- featured snippets;
- AI Overview citations;
- AI Mode inclusion;
- Google Discover inclusion;
- rich results;
- a specific amount of traffic.

Use language such as:

> "Designed to maximize relevance and organic competitiveness."

Ranking depends on many external signals beyond article quality.

---

# 4. SOURCE OF TRUTH

SEO changes over time.

When internet access is available and a decision depends on current Google behavior, verify the current official guidance.

Use this priority order:

1. Google Search Central;
2. Google Search Central Blog;
3. Google Search Console documentation;
4. official government or regulatory sources when the subject requires them;
5. peer-reviewed research;
6. recognized professional associations;
7. official manufacturer/vendor documentation when product-specific facts are needed;
8. other high-quality primary sources;
9. strong secondary sources only when primary sources are unavailable.

For Google-specific SEO behavior:

> current Google Search Central documentation overrides third-party SEO advice.

Do not blindly follow old SEO checklists.

---

# 5. PEOPLE-FIRST RULE

Create content primarily for people.

Never create an article whose primary purpose is manipulating search rankings.

Before writing, ask:

- Would this article still be useful if search engines did not exist?
- Does it actually solve the searcher's problem?
- Does it add something useful beyond generic summaries?
- Is it aligned with the site's audience?
- Does the site have a legitimate reason to publish this topic?

If the answer is no, reconsider the article.

---

# 6. GENERATIVE AI POLICY

AI may assist with:

- research organization;
- outlining;
- drafting;
- editing;
- summarization;
- content transformation;
- source comparison;
- quality control.

AI must NOT be used to mass-produce low-value pages primarily to manipulate rankings.

Never create hundreds of articles merely because keywords exist.

Before publication:

- verify factual claims;
- remove invented information;
- improve specificity;
- add first-party expertise when available;
- add real examples;
- add real sources where appropriate;
- ensure the article provides value beyond generic AI output.

---

# 7. ARTICLE OR NOT?

Before writing, determine whether an article is actually the correct page type.

Possible page types include:

- service page;
- product page;
- category page;
- local landing page;
- comparison page;
- glossary/reference page;
- FAQ section inside another page;
- calculator/tool;
- article;
- case study;
- guide;
- no new page at all.

Do NOT force an informational article when the dominant intent is commercial or transactional.

Example:

```text
Query:
clínica veterinária poços de caldas

Likely better page type:
service/business landing page

Not:
generic blog article
```

Example:

```text
Query:
quando vacinar filhote de cachorro

Likely page type:
informational article
```

---

# 8. CANNIBALIZATION CHECK BEFORE CREATION

Before creating a new article, check whether the site already has a page serving substantially the same intent.

Look for:

- articles targeting the same question;
- service pages that already answer the query;
- old URLs with similar content;
- multiple articles covering the same topic with only wording differences.

If overlap is strong, consider:

- updating the existing page;
- merging pages;
- repositioning one page;
- broadening or narrowing intent;
- redirecting an obsolete page;
- not creating the new article.

Do not create a new URL simply because another keyword variation exists.

---

# 9. SEARCH INTENT

Classify the dominant intent.

Possible intents:

- informational;
- commercial investigation;
- transactional;
- navigational;
- local informational;
- troubleshooting;
- comparison;
- definition;
- how-to;
- eligibility;
- cost/pricing;
- symptoms/problem;
- safety;
- news/freshness;
- mixed.

Also identify:

- primary question;
- secondary questions;
- user knowledge level;
- likely emotional state;
- urgency;
- decision stage;
- most useful next action.

Do not assume intent from the keyword alone when SERP evidence is available.

---

# 10. SEARCH JOURNEY

Understand where the article fits in the user's journey.

A practical model:

```text
Awareness
→ understanding a problem

Consideration
→ comparing options or solutions

Decision
→ choosing provider/product/service

Action
→ contacting, scheduling or purchasing
```

The article's CTA and internal links should match this stage.

Do not push a hard sales CTA onto a purely educational query when a softer next step is more appropriate.

---

# 11. SERP RESEARCH IS MANDATORY WHEN AVAILABLE

For strategic SEO articles, perform live SERP research when tools are available.

Analyze:

- dominant intent;
- ranking page types;
- current organic competitors;
- title patterns;
- main subtopics;
- questions repeatedly answered;
- content depth;
- media formats;
- tables;
- calculators;
- first-party evidence;
- expert authorship;
- dates/freshness;
- local results where relevant;
- forums/community results;
- videos;
- images;
- featured snippets when visible;
- AI-generated search features when visible;
- gaps in existing results.

Never copy competitors.

The objective is:

> Understand what users and search systems currently reward, then create something more useful, precise or credible.

---

## MULTI-AGENT RESEARCH AND QA MODE

When the execution environment supports multiple agents or subagents, use them only when responsibilities can be separated cleanly.

For competitive, complex or YMYL-sensitive articles, useful parallel roles may include:

```text
Agent A — SERP / intent
→ current result types
→ competitor coverage
→ search-intent patterns
→ content gaps

Agent B — authoritative evidence
→ primary/official sources
→ dates
→ factual claims
→ uncertainty

Agent C — site context
→ cannibalization
→ existing articles
→ service pages
→ real internal-link destinations
→ actual Astro content schema when accessible
```

Then consolidate findings before drafting.

Use one primary writer/editor for the article body.

After drafting, an independent verification agent may review:

```text
claims
sources
contradictions
hallucinations
YMYL safety
frontmatter/content contract
internal links
```

Do not have multiple agents independently rewrite the same article at the same time unless there is a deliberate comparison workflow.

Do not treat another agent's statement that "research passed" or "100% approved" as proof when sources, code, frontmatter or rendered output can be inspected directly.

Agent parallelism should reduce blind spots, not multiply conflicting edits.

---

# 12. COMPETITOR CONTENT POLICY

You may analyze competitors for:

- structure;
- topic coverage;
- search intent;
- user questions;
- content gaps;
- SERP expectations;
- format;
- UX patterns.

Do NOT:

- copy paragraphs;
- lightly rewrite competitor content;
- reproduce proprietary research without attribution;
- copy examples unique to a competitor;
- copy tables verbatim;
- copy branded frameworks;
- copy images.

Competitors are research signals, not source material to clone.

---

# 13. QUERY SET

Build a query set rather than relying on one keyword.

Include when useful:

- primary query;
- close variants;
- synonymous searches;
- follow-up questions;
- comparison queries;
- problem queries;
- cost queries;
- local modifiers;
- entity-related queries;
- beginner queries;
- advanced queries.

Do not create a separate article for every query.

Group searches by intent.

---

# 14. PRIMARY TOPIC

Every article should have one dominant topic.

Define:

```text
Primary topic:
Primary search intent:
Target reader:
Primary question:
Desired outcome:
Related service/business objective:
```

Do not attempt to rank one article for unrelated topics.

---

# 15. SECONDARY TERMS

Secondary terms exist to complete the topic, not to satisfy an SEO checklist.

Use naturally:

- synonyms;
- entities;
- related concepts;
- terminology users actually use;
- subtopics required to answer the question.

Do not force all secondary keywords into:

- headings;
- first paragraph;
- every image alt;
- every anchor text.

---

# 16. NO KEYWORD DENSITY TARGET

Never use a required keyword-density percentage.

Do not produce instructions such as:

```text
Use the main keyword 14 times.
Maintain 2.5% density.
```

Instead:

- use the topic naturally;
- place descriptive terms where they improve clarity;
- use language humans would use;
- vary phrasing naturally.

Keyword repetition that harms readability is a defect.

---

# 17. NO ARTIFICIAL WORD COUNT

There is no universal ideal word count.

Do not inflate content to reach:

- 1,000 words;
- 1,500 words;
- 2,000 words;
- 3,000 words;
- competitor average word count.

Write as much as needed to satisfy the intent.

Stop when additional text adds no meaningful value.

A 900-word article can be better than a 3,500-word article.

---

# 18. CONTENT GAP ANALYSIS

Before outlining, determine what current results fail to explain well.

Potential gaps:

- vague definitions;
- missing examples;
- missing step-by-step instructions;
- no pricing context;
- outdated information;
- no local context;
- no expert perspective;
- no decision framework;
- no warnings/limitations;
- no comparison criteria;
- no first-party experience;
- no visuals;
- poor organization;
- missing follow-up questions.

Only target gaps that genuinely improve the reader's experience.

---

# 19. ORIGINAL VALUE REQUIREMENT

Whenever possible, add original value.

Examples:

- real expert quote;
- first-party data;
- original examples;
- real customer questions;
- real process explanation;
- original photos;
- real case study;
- checklist based on actual workflow;
- calculator;
- comparison framework;
- real timeline;
- real pricing ranges when authorized;
- local details;
- professional interpretation;
- mistakes observed in practice.

Never fabricate first-party experience.

---

# 20. E-E-A-T PHILOSOPHY

Treat experience, expertise, authority and trust as editorial quality principles.

Do not attempt to manufacture E-E-A-T through superficial signals.

Useful legitimate signals may include:

- real author;
- real reviewer;
- real professional credentials;
- first-hand experience;
- first-party examples;
- transparent business identity;
- source citations;
- publication/update dates;
- editorial policy;
- corrections policy;
- original photos;
- author bio;
- contact information.

Trust is more important than decorative authority signals.

Never create fake experts.

---

# 21. YMYL CONTENT

Use heightened standards for subjects that can materially affect:

- health;
- medical decisions;
- veterinary health;
- finance;
- legal decisions;
- physical safety;
- mental health;
- significant personal welfare.

For YMYL-sensitive articles:

- prioritize primary/authoritative sources;
- verify important factual claims;
- avoid overconfident conclusions;
- distinguish education from professional diagnosis/advice;
- identify uncertainty;
- use qualified author/reviewer information when real;
- add appropriate safety guidance;
- avoid fear-based persuasion;
- avoid fake urgency;
- avoid unsupported treatment claims.

---

# 22. VETERINARY CONTENT MODE

For veterinary articles specifically:

- do not diagnose an animal from generic symptoms;
- explain that similar symptoms may have multiple causes;
- identify red-flag situations carefully when supported;
- distinguish routine guidance from urgent veterinary evaluation;
- avoid medication dosage instructions unless explicitly grounded in appropriate professional/official sources and suitable for publication;
- do not suggest human medication for animals without qualified support;
- avoid statements implying guaranteed outcomes;
- prefer veterinary associations, regulatory bodies, universities and peer-reviewed sources for medical claims.

The CTA must not exploit fear.

Good:

> "Se os sintomas persistirem ou houver sinais de alerta, uma avaliação veterinária é indicada."

Avoid:

> "Seu pet pode morrer. Agende agora."

---

# 23. SOURCE RESEARCH

Build an evidence base before writing claims that require factual support.

For each important claim, know:

```text
Claim
→ source
→ publication/update date
→ authority level
→ whether the source actually supports the claim
```

Do not cite a source simply because it contains the same keywords.

---

# 24. SOURCE HIERARCHY FOR HIGH-STAKES CONTENT

Prefer:

1. laws/regulations and official government pages;
2. professional regulatory bodies;
3. peer-reviewed research;
4. academic institutions;
5. recognized medical/veterinary/scientific associations;
6. official technical documentation;
7. reputable secondary sources for context.

Avoid relying on:

- anonymous blogs;
- thin affiliate sites;
- AI-generated pages;
- forums as medical authority;
- social media posts as factual authority;
- competitors as the only source.

---

# 25. SOURCE DIVERSITY

Do not base a complex article on a single source when multiple independent sources are appropriate.

For disputed topics:

- identify disagreement;
- represent credible positions fairly;
- do not manufacture consensus.

For simple factual articles, unnecessary citation overload is not required.

---

# 26. CITATION STYLE

When sources materially support factual claims, use clear human-readable citations or references appropriate to the site's editorial style.

Possible approaches:

- contextual links;
- numbered references;
- source list;
- footnotes.

Do not create fake citations.

Do not link to a source that does not support the statement.

For YMYL articles, factual sourcing should be stronger than for low-stakes lifestyle content.

---

# 27. RESEARCH DATE

For time-sensitive topics, record the research date.

Example:

```text
Research checked:
2026-08-12
```

Do not present outdated research as current.

---

# 28. FRESHNESS CLASSIFICATION

Classify the topic as:

- evergreen;
- periodically changing;
- highly time-sensitive.

Examples:

```text
Evergreen:
como escovar os dentes do cachorro

Periodically changing:
calendário de vacinação / regulation-dependent guidance

Highly time-sensitive:
new law, recall, outbreak, product release
```

This classification influences update frequency.

---

# 29. ARTICLE BRIEF BEFORE DRAFT

Create an internal brief before writing.

Minimum brief:

```text
Working title:
Primary topic:
Primary query:
Search intent:
Target reader:
Reader stage:
Article type:
Main problem:
Desired reader outcome:
SERP patterns:
Content gaps:
Key entities/concepts:
Important facts to verify:
Primary sources:
Internal links:
Related service:
CTA intent:
Potential images:
```

Do not expose the entire internal brief unless the user asks.

---

# 30. ARTICLE TYPE

Choose a format that matches intent.

Possible formats:

- definitive guide;
- how-to;
- checklist;
- comparison;
- cost guide;
- symptoms/problem explainer;
- definition;
- FAQ-driven article;
- list where a list is genuinely useful;
- tutorial;
- troubleshooting guide;
- case-based explanation;
- local guide;
- opinion/expert analysis;
- data study;
- news/update;
- myth vs fact.

Do not default every article to "complete guide".

---

# 31. TITLE STRATEGY

Create a title that:

- accurately describes the article;
- matches search intent;
- naturally reflects the main topic;
- is specific;
- avoids clickbait;
- avoids keyword stuffing;
- differentiates the article from existing site pages.

Do not obsess over a fixed character count.

Google does not publish a strict `<title>` character limit. Prefer concise title text that communicates the article clearly and avoids unnecessary boilerplate.

A practical editorial target around 50–60 characters can be useful when a natural title fits there, but exceeding that range is not automatically an SEO error.

## TITLE FIELD VS H1 FIELD

The article skill must respect the actual Content Collection schema.

If the project has only one `title` field and `BlogLayout.astro` uses that same field for both the page H1 and SEO title, create one title that works well for both purposes.

Do NOT output a different `SEO_TITLE` and `H1` when the project has nowhere to store or render separate values.

If the project explicitly supports separate fields such as:

```text
title
seoTitle
h1
```

then the SEO `<title>` and visible H1 may differ when there is a useful editorial reason, while remaining semantically aligned.

Never create metadata divergence merely to satisfy a character counter.

---

# 32. TITLE LINK AWARENESS

Search engines may generate title links from multiple page signals.

Therefore:

- keep the title consistent with the visible page;
- keep H1 aligned with the topic;
- avoid boilerplate repetition;
- avoid vague titles;
- avoid overlong stuffed titles.

Never promise that Google will display the exact supplied title.

---

# 33. H1 AND MARKDOWN HEADING CONTRACT

Use one clear primary H1 in normal article architecture.

The H1 should communicate the topic immediately.

Example:

```text
Vacina V10 para cachorro: para que serve e quando aplicar?
```

Avoid vague primary headings such as:

```text
Tudo o que você precisa saber
```

when the topic is not clear.

## Astro Content Collection default

When `BlogLayout.astro` already renders the article title as the page H1, the Markdown body MUST NOT begin with another `# H1`.

In that architecture:

```markdown
---
title: "Vacina V10 para cachorro: para que serve e quando aplicar?"
...
---

Introdução...

## Para que serve a vacina V10?

...

## Quando aplicar?

...
```

Body sections normally begin at `##` (H2), with `###` (H3) for genuine subsections.

Only include `# H1` inside the Markdown body if the project's real renderer explicitly expects the Markdown file itself to provide the H1.

Never create two visible H1s accidentally.

---

# 34. INTRODUCTION

The introduction should quickly confirm that the reader is in the right place.

Prefer:

- direct answer;
- definition;
- problem framing;
- essential context.

Avoid generic intros such as:

> "Nos dias de hoje..."

> "Neste artigo, vamos explorar..."

> "Quando se trata de..."

> "É importante destacar que..."

unless genuinely natural in context.

Do not spend 300 words before answering the query.

---

# 35. ANSWER EARLY WHEN APPROPRIATE

For direct questions, provide a useful answer early.

Then add nuance.

Example structure:

```text
Direct answer
↓
Important caveat
↓
Explanation
↓
Details
↓
Examples
```

Do not hide the answer to increase time-on-page.

---

# 36. HEADING STRUCTURE

Use headings to organize meaning.

Typical structure:

```text
H1
  H2
  H2
    H3
    H3
  H2
  H2
```

Do not use headings as keyword containers.

Every heading should help the reader predict the next section.

---

# 37. HEADINGS SHOULD ANSWER REAL QUESTIONS

Useful headings often reflect:

- decisions;
- objections;
- steps;
- comparisons;
- symptoms;
- criteria;
- consequences;
- costs;
- timing;
- exceptions.

Do not force every heading into a question format.

---

# 38. PARAGRAPH STYLE

Write for easy reading without turning the article into fragments.

Prefer:

- clear paragraphs;
- varied sentence lengths;
- one main idea per paragraph;
- natural transitions.

Avoid:

- walls of text;
- one-sentence paragraphs throughout the entire article;
- excessive bullets;
- robotic rhythm;
- repeated transitional phrases.

---

# 39. LISTS

Use lists when they improve comprehension.

Good uses:

- steps;
- symptoms;
- requirements;
- comparisons;
- checklists;
- examples.

Do not transform every section into bullet points merely for "SEO".

---

# 40. TABLES

Use a table when users benefit from structured comparison.

Examples:

- option A vs option B;
- symptoms and possible actions;
- plan comparisons;
- timelines;
- costs;
- specifications.

Tables must remain usable on mobile.

Do not invent data to fill a table.

---

# 41. DEFINITIONS

When technical terms are necessary:

- define them at first meaningful use;
- use the language the audience understands;
- retain necessary professional terminology.

Do not over-simplify to the point of inaccuracy.

---

# 42. ENTITY AND CONCEPT COVERAGE

Cover the entities and concepts required to explain the topic completely.

This is NOT permission to stuff named entities.

Ask:

- What concepts must the reader understand?
- Which actors/products/conditions/services are essential?
- What relationships between them matter?

Use only what improves understanding.

---

# 43. SEMANTIC COMPLETENESS

An article is complete when it answers the topic, not when it contains an SEO tool's keyword list.

If an SEO tool suggests a term that is irrelevant:

do not force it.

Meaning outranks checklist completion.

---

# 44. QUESTIONS AND FOLLOW-UPS

Identify likely follow-up questions.

Include them when:

- they materially improve the article;
- they match intent;
- they prevent confusion;
- they address real objections.

Do not create an enormous FAQ section merely to capture long-tail keywords.

---

# 45. FAQ POLICY

FAQ sections are optional.

Create them only when they help.

Do not duplicate the entire article as FAQ answers.

Do not assume FAQ structured data will create a Google rich result.

The website skill decides technical schema implementation based on current official support.

---

# 46. FEATURED SNIPPET / DIRECT ANSWER

Do not write "for featured snippets" at the expense of quality.

However, when a query has a concise factual answer, structure it clearly.

Possible format:

```text
Question heading

Direct 1–3 sentence answer

Nuance/details
```

Never claim this guarantees a featured snippet.

---

# 47. AI OVERVIEWS / AI MODE

Do not use special "AI SEO hacks".

Foundational priorities remain:

- useful content;
- crawlable page;
- clear writing;
- accurate facts;
- original value;
- strong structure;
- relevant internal links;
- trustworthy sourcing.

Make important relationships explicit.

Do not create unnatural text purely to be quoted by AI systems.

---

# 48. QUOTABILITY WITHOUT ROBOTIC WRITING

Useful passages often contain:

- clear definitions;
- direct answers;
- factual summaries;
- concise comparisons;
- well-qualified claims.

Write these naturally.

Do not turn every paragraph into a pseudo-definition.

---

# 49. LOCAL ARTICLE MODE

For local businesses, articles may support local relevance without forcing city names repeatedly.

Use local context when it genuinely matters:

- climate;
- local regulations;
- local service conditions;
- seasonal patterns;
- local availability;
- local case examples;
- local events;
- geography.

Do NOT append a city name to every heading.

Do NOT create near-identical articles for many cities.

---

# 50. LOCAL BUSINESS ARTICLES

A local-business blog should mainly answer questions real customers ask.

Good examples:

```text
Quando levar um filhote ao veterinário pela primeira vez?
Quais vacinas um filhote precisa?
Como preparar um cachorro para uma consulta veterinária?
```

Weak strategy:

```text
Melhor clínica veterinária Poços de Caldas artigo
Clínica veterinária Poços de Caldas dicas
Veterinário Poços de Caldas blog
```

when those topics exist only to repeat the local keyword.

---

# 51. TOPICAL AUTHORITY

Build topical depth through coherent coverage.

A topic cluster may contain:

```text
Core service:
Vacinação veterinária

Supporting informational content:
- calendário de vacinação
- primeira vacina do filhote
- V8 vs V10
- reação após vacina
- vacinação de gatos
```

Each article must have distinct intent.

The cluster should support a real service or expertise area.

---

# 52. PILLAR PAGES

A pillar page should:

- cover a broad topic;
- link to deeper subtopics;
- remain useful on its own;
- avoid competing with every child article for the exact same intent.

Do not build pillar pages only as link hubs with shallow copy.

---

# 53. CONTENT CLUSTER PLANNING

For a cluster, define:

```text
Pillar topic
Commercial/service page
Supporting articles
Question articles
Comparison articles
Decision-stage articles
Internal-link direction
```

Example:

```text
Pillar:
Saúde preventiva de cães

Service:
Consulta veterinária / vacinação

Supporting:
- quando vacinar filhote
- sinais de que o cachorro precisa ir ao veterinário
- check-up veterinário
- vermifugação
```

---

# 54. INTERNAL LINKING OBJECTIVE

Articles should strengthen relevant pages naturally.

Possible destinations:

- service pages;
- category pages;
- pillar pages;
- related articles;
- contact page;
- case studies;
- tools.

Every link must have a user reason.

---

# 55. INTERNAL LINK SELECTION

Recommend internal links based on:

- topical relevance;
- search journey;
- business importance;
- contextual usefulness.

Do not automatically link every occurrence of a keyword.

Do not insert irrelevant service links.

---

# 56. ANCHOR TEXT

Use descriptive, natural anchor text.

Good:

> "entenda como funciona a consulta veterinária"

Avoid repetitive exact-match anchors throughout the site.

Avoid vague anchor text when descriptive text is more useful.

---

# 57. LINK DIRECTION

A healthy business content model often looks like:

```text
Informational article
→ relevant service page

Supporting article
→ pillar article

Pillar article
→ supporting article

Related article
↔ related article

Article
→ contact/CTA when appropriate
```

Do not create excessive circular linking only for SEO.

---

# 58. EXTERNAL LINKS

Link externally when doing so improves trust or usefulness.

Useful external links may include:

- official source;
- study;
- regulation;
- professional organization;
- primary documentation.

Do not link to competitors unnecessarily when a better primary source exists.

Do not avoid useful external links out of fear of "losing SEO".

---

# 59. COMMERCIAL BALANCE

Articles on business websites should not read like landing pages.

Editorial body:

- educates;
- explains;
- answers;
- builds trust.

Commercial action:

- appears where contextually useful;
- is clear;
- does not interrupt every section;
- does not use manipulative urgency.

---

# 60. CTA PRINCIPLE

For business websites, a final CTA is normally required unless:

- the page is purely editorial and no logical action exists;
- the site owner explicitly requests no commercial CTA;
- a CTA would be inappropriate or unsafe.

The CTA must connect naturally to what the reader just learned.

---

# 61. CTA DIVISION OF RESPONSIBILITY

This skill owns the CTA content.

The companion website skill owns the visual component.

This skill provides:

```text
headline
supporting_text
button_label
button_url_or_destination
```

The website skill provides:

```text
layout
colors
typography
border
radius
spacing
button appearance
responsive behavior
accessibility
hover/focus states
```

Never define universal CTA colors inside this article skill.

---

# 62. CTA CONTEXTUALIZATION

Do not repeat the same CTA copy on every article.

Adapt according to:

- topic;
- reader stage;
- urgency;
- related service;
- business objective.

Example:

```text
Article:
Quando vacinar um filhote?

CTA headline:
Quer revisar a vacinação do seu filhote?

Supporting text:
Nossa equipe pode avaliar a idade, o histórico de vacinação e orientar os próximos cuidados.

Button:
Agendar uma consulta
```

---

# 63. CTA INTENSITY

Match CTA intensity to intent.

```text
Low commercial intent
→ soft invitation / learn about related service

Medium intent
→ speak with team / request guidance / see service

High intent
→ schedule / request quote / contact now
```

Do not push "buy now" after a purely educational article unless it is genuinely appropriate.

---

# 64. CTA SAFETY FOR YMYL

Never use:

- fear;
- panic;
- guaranteed diagnosis;
- exaggerated risk;
- shame;
- manipulative urgency.

Avoid:

> "Não espere até ser tarde demais."

Prefer:

> "Se houver sinais persistentes ou preocupação com o quadro, procure avaliação profissional."

---

# 65. ARTICLE CTA OUTPUT CONTRACT

At the end of article generation for a commercial site, provide:

```text
ARTICLE_CTA:
headline: ...
supporting_text: ...
button_label: ...
destination: ...
```

If the actual URL is unknown:

```text
destination: [RELATED-SERVICE-OR-CONTACT-URL]
```

Never invent a WhatsApp number or URL.

---

# 66. RELATED SERVICE

Every commercial article should identify the most relevant service page, if one exists.

Example:

```text
Article:
Cachorro com coceira

Related service:
Consulta veterinária / dermatologia veterinária
```

Only associate a specialized service if the business actually provides it.

---

# 67. ARTICLE BODY CTA

Inline CTAs are optional.

Use them only when:

- they naturally fit;
- they help a user take a necessary next step;
- they do not disrupt the article.

Do not insert promotional boxes after every few paragraphs.

---

# 68. AUTHORSHIP

Where relevant, provide:

- author name;
- author role;
- reviewer;
- real credentials;
- short bio.

Never fabricate authors or credentials.

For YMYL content, real professional review can materially improve trust.

---

# 69. AUTHOR VS REVIEWER

Do not conflate:

```text
Written by
```

with:

```text
Medically/professionally reviewed by
```

If an editor writes and a professional reviews, represent both truthfully.

Do not credit a professional as author if they did not author or approve the article.

---

# 70. PUBLICATION DATE

Use a truthful publication date.

Do not backdate articles to appear older or more established.

---

# 71. UPDATED DATE

Only update the "updated" date when meaningful content has actually changed or been re-reviewed.

Do not change the date every month merely to simulate freshness.

Keep visible dates and structured-data dates consistent.

---

# 72. UPDATE MODE

When updating an existing article:

1. preserve the URL when intent remains the same;
2. inspect current rankings/queries when data is available;
3. identify outdated claims;
4. compare current SERP;
5. retain useful sections;
6. remove obsolete material;
7. add missing value;
8. improve internal links;
9. verify sources;
10. update CTA if needed;
11. change publication/update dates truthfully.

Do not rewrite everything simply because an update was requested.

---

# 73. PRESERVE RANKING EQUITY

For a ranking article, avoid unnecessary changes to:

- URL;
- core intent;
- topic focus;
- successful sections;
- internal links;
- title;

without evidence.

Make targeted improvements.

---

# 74. CONTENT DECAY

Possible signs:

- declining impressions;
- declining clicks;
- new competitors;
- outdated facts;
- intent shift;
- weak CTR;
- lost internal links;
- outdated screenshots;
- broken external sources.

Diagnose the cause before rewriting.

---

# 75. SEARCH CONSOLE MODE

When Search Console data is available, use:

- queries;
- impressions;
- clicks;
- CTR;
- average position;
- page-level performance;
- date comparisons;
- device;
- country.

Identify:

- queries already close to page one;
- queries with high impressions and weak CTR;
- queries revealing missing subtopics;
- pages cannibalizing each other.

Do not treat average position as a perfect rank-tracking metric.

---

# 76. CTR OPTIMIZATION

If impressions are strong but CTR is weak:

review:

- title clarity;
- title relevance;
- intent match;
- snippet usefulness;
- brand recognition;
- SERP composition.

Do not create clickbait.

---

# 77. META DESCRIPTION / DESCRIPTION FIELD

Provide a unique meta-description recommendation for important articles.

In the default Astro Content Collection architecture, this normally maps to the frontmatter field:

```yaml
description: "..."
```

It should:

- accurately summarize the article;
- support the click decision;
- match intent;
- sound natural;
- avoid repeating the title mechanically;
- avoid unsupported claims.

A practical editorial target around 140–160 characters is often useful when the message fits naturally, but this is not a fixed ranking rule.

Do not rewrite a strong description solely because a third-party extension shows a red character counter.

Search engines may generate a different snippet.

If the actual project uses a different field name, follow `src/content.config.ts` rather than inventing a parallel field.

---

# 78. SLUG AND FILE IDENTITY

Recommend a concise, descriptive and stable slug.

Good:

```text
vacina-v10-cachorro
```

which may generate:

```text
/blog/vacina-v10-cachorro/
```

Avoid:

```text
tudo-que-voce-precisa-saber-sobre-vacina-v10-para-cachorros-em-2026
```

Do not change established article URLs casually.

When the Content Collection uses an explicit `slug` field, treat that field as the URL contract and keep it stable independently of editorial title changes.

When the project intentionally derives routes from collection entry IDs/file paths instead of frontmatter `slug`, follow the real project architecture consistently.

Do not rename the Markdown file in a way that changes a live URL unless the route contract is understood and a migration is approved.

For new entries, a predictable default filename is:

```text
src/content/blog/<slug>.md
```

but the actual collection loader/path is the source of truth.

---

# 79. SEO CONTENT DATA OUTPUT

For each finished article, prepare the values the real project can actually consume.

In a typical Astro Content Collection this may include:

```text
title
description
slug
publishedAt
updatedAt
author
category
image
imageAlt
draft
```

Do not output parallel labels such as `SEO_TITLE`, `H1`, `META_DESCRIPTION` and `SUGGESTED_SLUG` if the project's schema uses only `title`, `description` and `slug`.

Map editorial decisions to the actual collection fields.

For a new article:

- use the approved slug contract;
- use a truthful publication date;
- use an author value that exists and is allowed by the project;
- omit optional fields when no truthful value exists;
- do not fabricate data merely to satisfy frontmatter.

For an existing article, do not recommend a slug change unless justified.

A `keywords` field may be filled only if the actual project uses it for editorial workflow or another real purpose. It must not be treated as `<meta name="keywords">` for Google.

---

# 80. ARTICLE STRUCTURED DATA HANDOFF

In the default Astro architecture, frontmatter/content data should act as the primary truthful input for visible article metadata and structured-data rendering.

The article skill may provide values such as:

```text
headline/title
author
datePublished/publishedAt
dateModified/updatedAt
image
publisher relationship when the project actually models it
```

but the companion website skill implements JSON-LD centrally in `BlogLayout.astro`, `SEOHead.astro` or another shared component.

Do not paste article-specific JSON-LD directly into every Markdown file unless the project deliberately uses that architecture.

Do not duplicate the same fact in multiple separate fields without a reason.

If frontmatter `title`, `author`, `publishedAt`, `updatedAt` and `image` already drive `BlogPosting`, those fields are the structured-data handoff.

Never invent values to complete schema.

For authors, use the real author identity represented by the site. Where the project supports an author profile URL or collection reference, use that real relationship instead of fabricating credentials.

---

# 81. ARTICLE / BLOGPOSTING

For normal blog content, the website skill may consider:

- Article;
- BlogPosting;

based on current official guidance and actual page type.

Structured data may help systems understand the page.

It does not guarantee rankings or rich results.

---

# 82. IMAGE BRIEF

For important articles, create an image brief when useful.

Possible fields:

```text
Purpose:
Subject:
Original photo preferred:
Suggested aspect ratio:
Visual message:
Alt concept:
Caption concept:
Where used:
```

Do not create irrelevant decorative images purely to increase article length.

---

# 83. REAL IMAGES

Prefer real images when they add experience or credibility.

Examples:

- professional at work;
- real equipment;
- real process;
- original chart;
- real location;
- original example.

Do not fabricate reality with AI-generated "proof" images.

---

# 84. FEATURED IMAGE

The featured image should:

- be relevant;
- be visually clear;
- not mislead;
- not contain excessive text;
- be high quality.

For sites targeting Discover eligibility, consider a high-resolution image at least 1200 px wide and coordinate with the website skill for appropriate preview settings.

This is not a guarantee of Discover traffic.

---

# 85. IMAGE ALT

Provide an alt recommendation based on the image itself.

Do not treat alt text as a place to dump keywords.

If the image is decorative, the website skill may use empty alt text.

---

# 86. CAPTIONS

Use captions when they add:

- context;
- evidence;
- explanation;
- attribution.

Do not write captions solely to insert keywords.

---

# 87. VIDEO

If video would genuinely improve the answer, recommend it.

Examples:

- demonstration;
- walkthrough;
- procedure overview;
- interview;
- expert explanation.

Do not require video for every article.

---

# 88. UNIQUE MEDIA

Original media can increase usefulness.

Possible assets:

- diagram;
- chart;
- checklist;
- downloadable template;
- calculator;
- annotated image;
- comparison table.

Only propose assets that serve the intent.

---

# 89. CONTENT STYLE

Default style:

- direct;
- natural;
- expert;
- useful;
- clear;
- non-robotic;
- non-hyperbolic.

Adapt to brand voice.

Do not sound like an SEO writer trying to satisfy a plugin.

---

# 90. PROHIBITED AI WRITING TICS

Avoid excessive use of phrases such as:

- "Neste artigo, vamos explorar..."
- "Nos dias de hoje..."
- "Em um mundo cada vez mais..."
- "É importante ressaltar..."
- "Vale destacar..."
- "Quando se trata de..."
- "A resposta é simples..."
- "Mas não para por aí..."
- "Agora que você já sabe..."
- "Em conclusão..."

These phrases are not universally forbidden, but repeated generic use is a quality defect.

---

# 91. NO EMPTY CONCLUSIONS

Do not end with a generic summary that merely repeats the introduction.

The ending should:

- resolve the topic;
- emphasize the most useful takeaway;
- transition naturally to the next step.

For business articles, the final CTA may serve as the conclusion.

---

# 92. BRAND VOICE

When brand examples are available:

analyze:

- formality;
- vocabulary;
- sentence length;
- technical depth;
- warmth;
- use of first person;
- calls to action.

Do not copy Instagram captions verbatim.

Translate brand voice into original editorial writing.

---

# 93. PORTUGUESE-BRAZIL QUALITY

For PT-BR content:

- use natural Brazilian Portuguese;
- avoid literal translations from English;
- use terms the target audience uses;
- maintain correct accents;
- avoid unnecessary anglicisms;
- preserve professional terminology when appropriate.

Local language should sound human.

---

# 94. READER LEVEL

Determine whether the reader is:

- beginner;
- informed consumer;
- professional;
- specialist.

Adjust:

- terminology;
- definitions;
- detail;
- examples.

Do not explain advanced topics as if every reader is an expert.

---

# 95. TONE FOR MEDICAL/VETERINARY CONTENT

Prefer:

- calm;
- clear;
- precise;
- non-alarmist;
- empathetic without melodrama.

Do not sensationalize symptoms.

---

# 96. CLAIM STRENGTH

Match language to evidence.

Strong evidence:

> "X is associated with Y."

Weak/observational evidence:

> "X may be associated with Y."

Do not convert possibility into certainty.

---

# 97. NUMBERS AND STATISTICS

Every important statistic should have:

- source;
- context;
- timeframe;
- unit;
- population where relevant.

Never invent a percentage.

Avoid outdated statistics when newer authoritative data exists.

---

# 98. PRICING CONTENT

When discussing costs:

- use real business pricing when authorized;
- cite market data when external;
- explain variation;
- state date/location when relevant.

Do not fabricate price ranges.

---

# 99. COMPARISON ARTICLES

Comparison articles should define criteria before declaring a winner.

Structure:

```text
Who each option is for
Key differences
Advantages
Limitations
Cost/context
Decision framework
Recommendation by scenario
```

Avoid fake neutrality when evidence clearly favors one option.

Avoid affiliate-style manipulation unless the business model legitimately requires it and disclosure obligations are respected.

---

# 100. "BEST" ARTICLES

Do not publish "best" lists without a real methodology.

Define:

- selection criteria;
- evidence;
- conflicts of interest;
- tested vs researched;
- date.

Never fabricate first-hand testing.

---

# 101. REVIEW ARTICLES

If claiming hands-on review:

the author/site must actually have tested or used the product/service.

Otherwise call it:

- analysis;
- comparison;
- research-based overview.

Do not falsely imply personal experience.

---

# 102. CASE STUDIES

Case studies require real evidence.

Include when authorized:

- starting situation;
- approach;
- constraints;
- result;
- timeframe;
- caveats.

Do not invent client outcomes.

---

# 103. CUSTOMER STORIES

Respect:

- permission;
- privacy;
- sensitive information.

Do not publish identifying details without authorization.

---

# 104. TESTIMONIALS

Only use real testimonials.

Do not rewrite a testimonial so aggressively that its meaning changes.

Do not invent star ratings.

---

# 105. ARTICLE PURPOSE MAPPING

Every article should have a site-level reason to exist.

Possible reasons:

```text
Traffic opportunity
Topical authority
Support service page
Answer sales objections
Reduce support burden
Build trust
Earn links
Support local relevance
Support product education
```

Avoid purposeless publishing.

---

# 106. BUSINESS VALUE

Do not judge articles only by traffic.

Potential success metrics:

- qualified organic visits;
- service-page clicks;
- leads;
- assisted conversions;
- internal search reduction;
- brand visibility;
- backlinks;
- email signups;
- return visits.

A low-volume article can be valuable if intent is highly qualified.

---

# 107. CONTENT CALENDAR

Do not create a content calendar merely to publish on a fixed frequency.

Prioritize articles by:

```text
Business relevance
× search opportunity
× topical fit
× authority potential
× conversion support
× effort
```

Publish when there is something useful to publish.

---

# 108. TOPIC PRIORITIZATION

A practical prioritization score may consider:

```text
Intent relevance
Business value
Ranking feasibility
Existing authority
Content gap
SERP quality gap
Internal-link value
```

Do not rely on search volume alone.

---

# 109. LOW-VOLUME KEYWORDS

Low volume does not mean low value.

A highly specific query can produce:

- qualified leads;
- strong conversions;
- valuable topical depth.

Use business context.

---

# 110. ZERO-VOLUME QUESTIONS

Real customer questions may be worth publishing even if SEO tools report zero volume.

If customers repeatedly ask it and the article is useful:

it may still deserve content.

---

# 111. SEARCH VOLUME LIMITATION

Keyword tools estimate demand.

Do not treat their numbers as exact truth.

Use:

- SERP evidence;
- Search Console;
- business knowledge;
- customer questions;
- seasonal context.

---

# 112. SEASONAL CONTENT

For seasonal topics:

- publish early enough for crawling/indexing;
- update genuine time-sensitive details;
- preserve stable URLs where possible.

Do not create a new URL every year if the same evergreen URL can be meaningfully updated.

---

# 113. NEWS CONTENT

For true news:

- verify facts quickly;
- cite primary sources;
- label dates clearly;
- distinguish confirmed facts from developing information.

Do not use old evergreen guidance as current news.

---

# 114. CONTENT UPDATES AND URLS

Prefer a stable evergreen URL when the article topic persists.

Example:

```text
/imposto-de-renda-prazo/
```

may be updated carefully if appropriate.

Avoid unnecessary year-specific URLs unless the year is essential to the intent.

---

# 115. DUPLICATE CONTENT

Do not publish substantially duplicated articles.

If content must exist in multiple places for a legitimate reason, coordinate canonical/indexing strategy with the website skill.

---

# 116. SYNDICATED CONTENT

When republishing content elsewhere:

coordinate attribution and canonical strategy when applicable.

Do not assume syndication is harmless.

---

# 117. ARTICLE INDEXABILITY

An SEO article intended to rank should normally be:

- public;
- indexable;
- crawlable;
- canonical;
- internally linked.

The website skill handles implementation.

---

# 118. ORPHAN ARTICLE PREVENTION

Every important article should have at least one meaningful internal path.

Possible sources:

- category page;
- service page;
- related article;
- blog hub;
- homepage where appropriate.

Do not rely only on sitemap discovery.

---

# 119. ARTICLE CATEGORIES

Use categories when they help users and architecture.

Avoid:

- dozens of empty categories;
- overlapping categories;
- tag archives with no value.

The website skill handles indexation decisions.

---

# 120. TAGS

Do not generate large numbers of tag pages automatically.

Tags should serve navigation, not create thin indexable archives.

---

# 121. BREADCRUMBS

Recommend logical hierarchy.

Example:

```text
Home
→ Blog
→ Saúde preventiva
→ Artigo
```

The website skill implements breadcrumb markup/schema.

---

# 122. TABLE OF CONTENTS

A table of contents may help long articles.

Use when:

- article is long;
- sections are distinct;
- navigation improves usability.

Do not add one to every short article.

---

# 123. JUMP LINKS

Use descriptive anchors for long content when helpful.

The website skill implements accessible HTML.

---

# 124. CONTENT BOXES

Useful content boxes may include:

- quick answer;
- warning;
- expert note;
- key takeaway;
- checklist.

Do not overuse callout boxes.

The visual design belongs to the website skill.

---

# 125. MEDICAL/VETERINARY SAFETY BOX

For health-related articles, a safety box may be useful when real red flags exist.

Content must be:

- evidence-based;
- calm;
- actionable;
- non-diagnostic.

Example concept:

```text
Procure atendimento veterinário com urgência se...
```

Only list symptoms supported by appropriate sources.

---

# 126. DISCLOSURES

When relevant, disclose:

- sponsorship;
- affiliate relationship;
- conflict of interest;
- paid placement;
- material relationship.

Do not hide commercial incentives.

---

# 127. AI DISCLOSURE

Do not invent a universal requirement that every AI-assisted article must carry an AI label for SEO.

Follow:

- site policy;
- legal requirements;
- reader expectations;
- editorial transparency.

The important requirement is that the content remains accurate, useful and accountable.

---

# 128. PLAGIARISM

Never copy substantial text from sources.

Research facts, then write original explanations.

Short quotations should be:

- necessary;
- attributed;
- limited.

Prefer paraphrasing with attribution when appropriate.

---

# 129. COPYRIGHT

Do not reproduce:

- full articles;
- proprietary tables;
- copyrighted images;
- long passages;
- paid reports;

without rights.

Summarize and cite appropriately.

---

# 130. FACT CHECK PASS

Before finalization, verify:

```text
Names
Dates
Numbers
Prices
Legal rules
Medical claims
Technical specifications
Locations
Credentials
Product names
URLs
Quotes
```

Do not rely on draft memory.

---

# 131. CONTRADICTION PASS

Check whether different article sections contradict each other.

Common examples:

- different dates;
- different pricing;
- different dosage or timing;
- inconsistent terminology;
- contradictory recommendations.

Resolve using stronger evidence.

---

# 132. HALLUCINATION PASS

Explicitly search for statements that may have been invented during drafting.

Remove or verify:

- unnamed studies;
- unsupported statistics;
- fake quotes;
- assumed business services;
- invented credentials;
- imagined customer behavior.

---

# 133. REDUNDANCY PASS

Remove:

- repeated definitions;
- repeated benefits;
- repeated warnings;
- repeated keyword-heavy sentences;
- unnecessary conclusion repetition.

Each section should add something.

---

# 134. HUMANNESS PASS

Read for signs of generic machine-generated prose.

Check:

- repetitive cadence;
- overly symmetrical sections;
- generic transitions;
- vague claims;
- excessive adjectives;
- excessive bullet lists;
- repeated phrases.

Rewrite naturally.

---

# 135. SEO OVEROPTIMIZATION PASS

Remove:

- unnatural exact-match repetition;
- keyword-heavy headings;
- keyword stuffing in links;
- city-name repetition;
- forced entity mentions;
- unnecessary FAQ questions.

If it sounds optimized rather than useful, improve it.

---

# 136. CONVERSION PASS

For commercial sites, verify:

- related service is correct;
- internal path exists;
- CTA matches article intent;
- CTA is not manipulative;
- CTA destination is real or clearly pending.

---

# 137. ARTICLE QUALITY GATE

Do not mark an article complete until checking:

```text
[ ] Search intent identified
[ ] Correct page type confirmed
[ ] Cannibalization checked
[ ] SERP researched when possible
[ ] Original value identified
[ ] Claims verified
[ ] Sources appropriate
[ ] H1 clear
[ ] Structure logical
[ ] No artificial word count
[ ] No keyword stuffing
[ ] Internal links contextual
[ ] External sources useful
[ ] YMYL standards applied when relevant
[ ] Author/reviewer data truthful
[ ] Dates truthful
[ ] CTA contextual when appropriate
[ ] SEO metadata prepared
[ ] Image brief prepared when useful
[ ] No fabricated facts
[ ] Human readability checked
```

---

# 138. FINAL ARTICLE OUTPUT

When asked to create a complete article for an existing Astro project, default deliverables should match the project's publishing contract rather than a generic SEO checklist.

When the project uses Astro Content Collections, the preferred implementation deliverable is normally:

```text
1. validated frontmatter/content data required by src/content.config.ts
2. Markdown article body
3. contextual internal links using real project URLs
4. source/reference handling appropriate to the article
5. contextual CTA content in the format expected by the project
6. image brief and imageAlt when useful
7. editorial notes/pending facts that must NOT silently enter publishable content
```

When operating directly in the repository and write access is available, prefer creating/updating the correct Content Collection entry instead of merely printing a disconnected article in chat.

Do NOT create a standalone `.astro` article route for a site whose blog already uses a shared dynamic route.

Do NOT duplicate values already derived centrally by the website architecture.

If the user requests only the article body, do not force all extras into the visible response.

---

# 139. ARTICLE BODY CONTRACT

The article body should be publication-ready and compatible with the project's Markdown renderer.

Do not include internal notes such as:

```text
[add keyword here]
[insert SEO paragraph]
```

unless information is genuinely missing and the content is being kept as a non-publishable draft.

When `BlogLayout.astro` renders the H1, do not include a Markdown `#` heading in the body.

Use normal Markdown features supported by the project:

- paragraphs;
- `##` / `###` headings;
- lists;
- tables when supported and useful;
- links;
- blockquotes when useful;
- images only using the project's supported asset convention.

Do not introduce MDX components, custom directives, raw scripts or unusual Markdown extensions unless the project already supports them or the companion website skill explicitly adds support.

Use placeholders only for unresolved real business facts, and never allow those placeholders to be published accidentally.

---

# 140. PENDING INFORMATION

Never invent missing business data.

Examples of facts that may require resolution:

- professional name;
- registration;
- clinic phone;
- price;
- address;
- service availability;
- real statistics;
- testimonial;
- author/reviewer identity;
- CTA destination.

Do not put fake values or publishable-looking placeholders into required frontmatter.

If a required factual frontmatter field cannot be truthfully completed:

1. do not mark the article ready for publication;
2. ask for the missing information when it blocks completion;
3. keep the article in draft/editorial workflow when the project supports that safely;
4. use `draft: true` only when the actual collection schema supports it and production routes/listings exclude drafts.

A build passing is not proof that placeholder data is acceptable.

---

# 141. ARTICLE CTA COMPONENT INTEGRATION

If the website uses `seo-astro-static-website-builder`, use its reusable final article CTA component.

Do NOT recreate CSS inside each article.

Provide only content fields.

Expected semantic concept:

```text
article-cta
├── headline
├── supporting_text
└── primary action
```

The website design system controls appearance.

---

# 142. ARTICLE CTA VISUAL CONSISTENCY

This article skill must never tell the site to make one CTA pink, another blue and another green based on article topic.

Visual consistency belongs to the brand system.

The article skill may vary:

- headline;
- supporting text;
- button label;
- destination.

Not:

- brand colors;
- typography system;
- component radius;
- shadows;
- spacing;
- button styling.

---

# 143. CTA EXAMPLES BY INTENT

Informational:

```text
Headline:
Ainda tem dúvidas sobre esse cuidado?

Text:
Nossa equipe pode avaliar o caso do seu pet e orientar os próximos passos de acordo com a necessidade dele.

Button:
Falar com a clínica
```

Symptom article:

```text
Headline:
Seu pet está apresentando esses sinais?

Text:
Uma avaliação veterinária ajuda a entender a causa dos sintomas e definir a conduta adequada.

Button:
Agendar uma avaliação
```

Preventive-care article:

```text
Headline:
Mantenha os cuidados do seu pet em dia.

Text:
Converse com nossa equipe para revisar o acompanhamento preventivo e organizar os próximos cuidados.

Button:
Agendar consulta
```

These are patterns, not universal copy.

---

# 144. NO FAKE URGENCY

Do not use countdowns or urgency language merely to improve conversion.

Avoid:

- "última chance";
- "agora ou nunca";
- "antes que seja tarde";
- "vagas acabando";

unless factually true and appropriate.

---

# 145. CONTENT → SERVICE BRIDGE

A strong article should answer:

> After solving the reader's informational problem, what legitimate business service is the natural next step?

If none exists:

do not manufacture one.

---

# 146. ARTICLE → CONTACT BRIDGE

For local service businesses, the final path may be:

```text
Article
→ service page
→ WhatsApp/contact
```

or:

```text
Article
→ direct appointment CTA
```

Choose based on intent.

---

# 147. DIRECT CTA VS SERVICE-PAGE CTA

Use direct contact when:

- intent is close to action;
- service relationship is obvious;
- user may need immediate evaluation.

Use service-page link when:

- reader is earlier in decision journey;
- more service explanation is useful;
- the article is broad.

---

# 148. BUSINESS-SITE DEFAULT

This skill defaults to SEO content for legitimate businesses and professional websites.

It may also be used for editorial/publisher sites.

For non-commercial publishers:

- final commercial CTA may be omitted;
- conversion may instead be newsletter, related reading or subscription;
- business-service linking rules should be adapted.

---

# 149. PUBLISHER MODE

For publisher/editorial projects, replace business conversion priorities with:

- reader retention;
- related content;
- subscription;
- newsletter;
- topic hubs;
- editorial authority.

Do not force service CTAs.

---

# 150. AFFILIATE CONTENT

If the site uses affiliate links:

- disclose relationships appropriately;
- prioritize genuine usefulness;
- provide selection methodology;
- avoid fake testing;
- avoid thin roundup pages.

Commercial incentives must not determine factual conclusions.

---

# 151. PROGRAMMATIC CONTENT

Do not create programmatic SEO pages at scale without substantial unique value.

Templates alone are not sufficient.

Each page must have a legitimate user purpose.

---

# 152. SCALED CONTENT ABUSE PREVENTION

Never automate hundreds or thousands of articles whose main purpose is search manipulation.

Warning signs:

- near-identical articles;
- city-name swaps;
- keyword swaps;
- paraphrased competitor pages;
- no human/editorial value;
- no first-party knowledge;
- no reason for the site to cover the subject.

Stop and redesign the strategy.

---

# 153. REPUTATION ABUSE

Do not publish unrelated third-party content on an established domain merely to exploit the host site's ranking signals.

Content should fit the site's actual purpose and editorial oversight.

---

# 154. EXPIRED DOMAIN ABUSE

Do not recommend acquiring expired domains solely to host unrelated content for inherited rankings.

---

# 155. HIDDEN TEXT / CLOAKING

Never write content intended to be hidden from users but shown to search engines.

Do not create different article meaning for crawlers and humans.

---

# 156. META KEYWORDS

Do not create:

```html
<meta name="keywords">
```

as an SEO requirement.

The article skill should not output meta-keyword lists for Google ranking.

---

# 157. LLMS.TXT

Do not treat `llms.txt` as a requirement for article visibility in Google Search, AI Overviews or AI Mode.

That is a website-level decision and should only be used for a documented purpose.

---

# 158. DISCOVER AWARENESS

For content that could appeal to Discover:

prioritize:

- compelling but non-clickbait title;
- strong original/relevant image;
- useful content;
- clear authorship;
- audience interest.

Coordinate with the website skill for high-resolution image handling and `max-image-preview` settings where appropriate.

Do not promise Discover inclusion.

---

# 159. IMAGE PREVIEW

When targeting Discover/image-rich surfaces:

recommend an image at least 1200px wide when appropriate.

The website skill handles:

- optimization;
- responsive variants;
- `max-image-preview:large`;
- dimensions;
- loading behavior.

---

# 160. CONTENT DATE CONSISTENCY

Keep these aligned when implemented:

- visible publication date;
- visible update date;
- `datePublished`;
- `dateModified`.

Do not create contradictory dates.

---

# 161. SCHEMA CONTENT CONSISTENCY

Structured-data values must match visible content.

If the page says:

```text
Author: Dra. Maria
```

schema must not claim another author.

Never add invisible fake expertise through schema.

---

# 162. ARTICLE IMAGE CONSISTENCY

If the article schema uses an image:

the image should genuinely represent the article.

Do not use unrelated stock imagery only to satisfy schema.

---

# 163. CONTENT PRUNING

An existing article may be better:

- merged;
- redirected;
- removed;
- noindexed;
- rewritten;

rather than left as thin content.

Recommend pruning when appropriate.

Website implementation decisions belong to the website skill.

---

# 164. MERGE STRATEGY

When two articles serve the same intent:

1. choose the stronger canonical destination;
2. combine unique useful content;
3. remove duplication;
4. preserve relevant internal links;
5. redirect obsolete URL when appropriate;
6. update sitemap/internal links.

---

# 165. DELETE STRATEGY

Do not delete an article only because it has little traffic.

First ask:

- does it answer a valuable customer question?
- does it have backlinks?
- does it support another page?
- is the query niche but qualified?
- is it outdated?

Traffic is not the only value signal.

---

# 166. CONTENT AUDIT MODE

When auditing an existing blog, classify each URL:

```text
Keep
Improve
Merge
Redirect
Remove
Reposition
```

Provide rationale.

---

# 167. COMPETITOR GAP MODE

When asked to identify opportunities:

do not simply list every keyword competitors rank for.

Filter by:

- business relevance;
- audience fit;
- site's actual expertise;
- intent;
- realistic ability to add value.

---

# 168. TOPICAL MAP OUTPUT

When requested, provide:

```text
Topic cluster
Primary service/page
Supporting articles
Intent
Priority
Internal-link destination
Business value
```

Do not create 100-topic maps unless the site can realistically maintain them.

---

# 169. ARTICLE PRIORITY LEVELS

Possible priority model:

```text
P1
Directly supports high-value service and strong user need

P2
Builds topical depth and meaningful traffic opportunity

P3
Useful supporting content with lower business impact

Avoid
Low relevance, duplication or weak value
```

---

# 170. SEARCH CONSOLE POST-PUBLISH REVIEW

After publishing, when data becomes available, evaluate:

- indexing;
- impressions;
- clicks;
- query mix;
- CTR;
- internal-link clicks/conversions;
- position trends.

Do not judge an article immediately after publication.

---

# 171. UPDATE TRIGGER

Consider updating when:

- factual information changed;
- search intent changed;
- SERP changed materially;
- article has decayed;
- user questions evolved;
- new first-party information exists.

Do not update only because a fixed calendar date arrived.

---

# 172. ARTICLE VERSIONING

Do not create:

```text
article-final-v2-new.html
```

as public URL logic.

Public URLs should remain stable.

Versioning belongs to development/editorial workflow.

---

# 173. SOCIAL SHARING COPY

If requested, generate social copy separately from article copy.

Do not force social-media language into the article title.

---

# 174. EMAIL REPURPOSING

If requested, repurpose an article into email without altering the article itself.

Keep content channels distinct.

---

# 175. SHORT-FORM REPURPOSING

A strong article can support:

- Instagram carousel;
- short video script;
- FAQ;
- newsletter;
- Google Business Profile post.

Repurposing should not replace the primary article's depth.

---

# 176. CONTENT REUSE

Reuse research, not identical paragraphs across many URLs.

Avoid publishing duplicated article sections across the site at scale.

---

# 177. USER-PROVIDED SOURCE MATERIAL

When the user supplies:

- documents;
- interviews;
- transcripts;
- client notes;
- Instagram;
- product manuals;
- scientific references;

use them as input.

Distinguish:

- verified fact;
- user-provided claim;
- inference;
- external research.

Do not silently convert marketing claims into fact.

---

# 178. INSTAGRAM AS REFERENCE

Instagram may help understand:

- brand voice;
- common customer questions;
- services promoted;
- team;
- visual identity;
- recurring themes.

Instagram is not automatically an authoritative source for medical/legal/scientific facts.

Verify factual claims elsewhere when required.

---

# 179. INTERVIEW MODE

When expert interviews are available:

extract:

- unique insights;
- real examples;
- explanations;
- practical advice;
- quotes.

Do not fabricate or polish quotes beyond recognition.

---

# 180. EXPERT QUOTES

Quotes should:

- add knowledge;
- come from a real identified source;
- preserve meaning.

Do not insert generic fake expert quotes to simulate authority.

---

# 181. FIRST-PERSON EXPERIENCE

Use first-person experience only when the real author/business supplied it.

Do not say:

> "Na nossa experiência..."

unless that experience is actually supported.

---

# 182. EXPERIENCE SIGNALS

Legitimate experience can appear through:

- original photos;
- firsthand process details;
- case examples;
- measured results;
- expert commentary;
- practical limitations.

Do not manufacture experience through writing style.

---

# 183. CONTENT DEPTH

Depth means answering the topic well.

It does NOT mean:

- more headings;
- more words;
- more keywords;
- more FAQs.

A concise complete article is preferable to a bloated article.

---

# 184. CONTENT BREADTH

Do not broaden beyond the user's intent simply to appear comprehensive.

Example:

An article about puppy vaccination does not need a full history of veterinary medicine.

Stay relevant.

---

# 185. SCOPE CONTROL

Before writing a section, ask:

> Does this help answer the article's search intent?

If not, remove it or move it to another article.

---

# 186. SEARCH INTENT SHIFT

If live SERP research shows that the intended article topic now returns:

- products;
- local providers;
- calculators;
- videos;

reconsider the page format.

Do not force an article against strong intent evidence.

---

# 187. MULTI-INTENT QUERIES

When a query has mixed intent:

address the dominant intent first.

Then serve relevant secondary intent without making the article incoherent.

---

# 188. BEGINNER VS ADVANCED SECTIONS

For mixed knowledge levels:

- answer simply first;
- offer advanced detail later.

Do not make basic readers decode technical jargon before receiving the answer.

---

# 189. GLOSSARY LINKS

If technical terms require deeper explanation, link to a glossary/reference page rather than repeatedly defining them in every article.

Only if such a page genuinely exists or should exist.

---

# 190. CONCEPTUAL ACCURACY

Never choose a more popular keyword if it makes the statement technically wrong.

Accuracy outranks keyword popularity.

---

# 191. LEGAL/MEDICAL DISCLAIMERS

Use disclaimers only when genuinely useful.

Do not clutter every paragraph with legalistic language.

A disclaimer does not excuse inaccurate content.

---

# 192. EDITORIAL ACCOUNTABILITY

Every published article should have an identifiable editorial owner.

For business sites, this may be:

- company;
- author;
- reviewer;
- editorial team.

Do not publish anonymous high-stakes advice without a reason.

---

# 193. CORRECTIONS

If an error is identified:

correct the article.

For significant errors, consider a correction note if editorial policy requires it.

Do not hide meaningful mistakes by silently changing dates only.

---

# 194. ARTICLE TEMPLATE HANDOFF

The article skill provides content; the Astro website architecture provides presentation.

A normal generated article page may contain:

```text
Breadcrumbs
H1/headline
author/date
featured image
article body
inline callouts when supported
related links
sources/references
author/reviewer box
final ArticleCTA
```

But those elements should not all be duplicated inside every Markdown entry.

In the default companion architecture:

```text
BlogLayout.astro
→ page shell
→ H1
→ metadata
→ featured image treatment
→ breadcrumbs
→ shared components
→ JSON-LD
→ ArticleCTA component

Markdown entry
→ article-specific frontmatter
→ editorial body
→ contextual links
→ article-specific source/reference text when needed
```

The website skill decides visual styling and technical markup.

The article skill must understand enough of this contract to avoid emitting duplicate H1s, headers, footers, schema, CTA markup or page-shell HTML.

---

# 195. CONTENT WIDTH

The article skill does not define CSS width.

Readability/layout decisions belong to the website skill.

Do not insert inline layout styles into article content.

---

# 196. CTA COMPONENT CONTRACT

When the companion project already provides a reusable `ArticleCTA.astro` or equivalent component, reuse its content contract.

Do not create a new visual CTA implementation per article.

The article skill should provide only the article-specific values that the project expects, such as:

```text
headline
supporting_text
button_label
destination
```

The actual storage mechanism may be:

- frontmatter;
- a nested `cta` object;
- a mapping/data file;
- layout logic;
- another project-specific contract.

Inspect the real project instead of assuming a CSS class name.

---

# 197. NO ARTICLE-LOCAL PRESENTATION CODE

The article skill must not output inline CSS, page-shell markup, `<style>` blocks or per-article visual components for normal Astro Content Collection publishing.

Default responsibility remains editorial.

If the user explicitly requests standalone HTML outside the normal project workflow, semantic HTML may be produced, but that is a different output mode.

Inside the Astro project, preserve separation:

```text
content
→ Markdown/frontmatter

presentation
→ Astro components/layouts/CSS
```

---

# 198. PUBLISHING ARCHITECTURE AWARENESS

Do not assume a CMS/framework when the publishing environment is unknown.

However, when this skill is paired with `seo-astro-static-website-builder` or the current project is visibly an Astro SSG Content Collection site, Astro is NOT an assumption: it is the active publishing contract.

In that environment:

- inspect `src/content.config.ts`;
- inspect the dynamic article route;
- inspect `BlogLayout.astro`;
- inspect representative existing entries;
- follow the real field names and data types;
- create/update Markdown entries, not standalone article pages;
- keep presentation and technical SEO centralized.

Do not fall back to platform-neutral output when the real repository contract is available.

---

# 199. ASTRO CONTENT COLLECTION MARKDOWN OUTPUT

For the default Astro publishing workflow, Markdown is the preferred article body format.

The article should normally be stored as one Content Collection entry, commonly:

```text
src/content/blog/<slug>.md
```

The exact path is determined by `src/content.config.ts`.

A generic example is:

```markdown
---
title: "Vacina V10 para cachorro: para que serve e quando aplicar?"
description: "Entenda para que serve a vacina V10, quando ela costuma fazer parte do protocolo e por que a avaliação veterinária é importante."
slug: "vacina-v10-cachorro"
publishedAt: 2026-08-17
author: "AUTOR REAL"
image: "/assets/img/blog/vacina-v10-cachorro.webp"
imageAlt: "Descrição factual da imagem"
draft: false
---

Introdução direta e útil.

## Para que serve a vacina V10?

Conteúdo...

## Quando ela é aplicada?

Conteúdo...
```

This is an example contract, not a license to invent values.

## Frontmatter rules

Before writing frontmatter:

1. inspect the real collection schema;
2. use exact field names and valid types;
3. supply every required field;
4. omit optional fields when not needed;
5. do not create unused fields;
6. do not use `keywords` as Google meta keywords;
7. keep dates truthful;
8. keep slug stable;
9. keep author/reviewer truthful;
10. use asset paths that actually exist or are clearly pending in a non-publishable workflow.

## Body rules

- Do not wrap the full article in a code fence.
- Do not include the H1 when the layout already renders it.
- Begin content sections at H2 in that architecture.
- Use standard Markdown compatible with the project's renderer.
- Do not insert Header, Footer, Breadcrumbs, JSON-LD, GTM, canonical tags or shared CTA component markup into Markdown.
- Do not create a new `.astro` article page.

A valid new entry should be sufficient for the companion architecture to generate the article route at build time.

---

# 200. HTML OUTPUT FALLBACK

HTML is not the default article-storage format for the Astro Content Collection workflow.

When standalone HTML is explicitly requested or the target project genuinely uses HTML article files:

- use semantic article markup;
- preserve technical separation from CSS;
- coordinate with the companion website skill;
- do not embed a full CSS framework.

Do not convert a Markdown Content Collection article into a hand-written HTML or `.astro` page merely because HTML is technically possible.

---

# 201. AUTOMATION / STRUCTURED CONTENT OUTPUT

For automation workflows, the article skill may produce a structured object when explicitly requested or when an upstream publishing system requires it.

The object should mirror the REAL Content Collection schema rather than use a universal invented schema.

Possible editorial concepts include:

```text
title
description
slug
publishedAt
updatedAt
author
reviewer
category
image
imageAlt
draft
body
cta
sources
editorial_notes
```

Only include fields supported or required by the actual workflow.

If the automation ultimately writes Markdown:

```text
structured editorial result
→ validate against project schema
→ serialize approved frontmatter
→ write Markdown body
→ companion/build validation
```

Do not output JSON by default when the project can directly create the Markdown entry.

Do not store duplicate `h1`, `seo_title`, `headline` and `title` fields unless the renderer actually distinguishes them.

---

# 202. EXCERPT

Create an excerpt when the site uses article cards or archive pages.

The excerpt should:

- summarize value;
- avoid duplicating the meta description mechanically;
- remain natural.

---

# 203. ARTICLE CARD TITLE

Archive/card titles may use the article H1 or a shortened equivalent.

Do not create misleading alternate titles.

---

# 204. CATEGORY DESCRIPTION

If a category page needs copy:

write useful category context.

Do not create thin keyword-filled descriptions.

---

# 205. RELATED ARTICLES

At the end of an article, recommend 2–4 genuinely related pieces when available.

Do not fabricate URLs.

If URLs are unknown, provide topic recommendations.

---

# 206. INTERNAL LINK OPPORTUNITY OUTPUT

When useful, provide:

```text
Internal link:
Anchor suggestion:
Destination:
Reason:
Placement:
```

Do not overload the article with links.

---

# 207. EXTERNAL SOURCE OUTPUT

When useful, provide:

```text
Source:
URL/reference:
Claim supported:
Authority:
```

This is particularly useful during editorial review.

---

# 208. FACTS PENDING REVIEW

If a fact cannot be verified:

mark it.

Example:

```text
[FACT CHECK REQUIRED: confirmar se a clínica oferece atendimento 24 horas]
```

Do not quietly publish it.

---

# 209. USER EDITS

If the user provides corrections:

treat their verified business facts as authoritative unless contradicted by safety/legal constraints.

Update the article without reintroducing removed claims.

---

# 210. STYLE PRESERVATION

When editing an existing strong article:

preserve its established voice where possible.

Do not homogenize every site article into identical AI prose.

---

# 211. ARTICLE DIFFERENTIATION

Articles within the same site should share brand voice but not identical structure.

Avoid a rigid template like:

```text
Intro
5 benefits
5 steps
FAQ
Conclusion
```

for every topic.

Structure should follow intent.

---

# 212. VISUAL RHYTHM

The article skill may recommend:

- table;
- image;
- callout;
- list;
- quote;

where it improves understanding.

The website skill determines presentation.

---

# 213. MOBILE READING

Editorial choices should support mobile:

- short useful headings;
- manageable paragraphs;
- tables only when responsive;
- avoid massive unbroken lists.

Do not oversimplify content merely because of mobile.

---

# 214. ACCESSIBILITY OF CONTENT

Write meaningful:

- link text;
- headings;
- captions;
- image descriptions.

Do not rely on color to communicate meaning.

Implementation belongs to website skill.

---

# 215. NO EMOJI REQUIREMENT

Do not insert emojis into SEO articles by default.

Use only when they match brand voice and improve communication.

---

# 216. NO FORCED FAQ SCHEMA

Article skill may create FAQ content.

It must not insist that FAQ JSON-LD be implemented.

The website skill checks current Google support and page eligibility.

---

# 217. NO RATING SCHEMA FOR ARTICLES

Do not create fake rating/review schema for editorial content.

---

# 218. ARTICLE SCHEMA VALIDATION

When the website skill implements Article/BlogPosting schema, it should validate current requirements.

The article skill provides truthful content inputs only.

---

# 219. ARTICLE IMAGE LICENSING

Do not recommend copying random Google Images.

Use:

- owned images;
- properly licensed stock;
- commissioned imagery;
- generated illustrations where honest and appropriate;
- public-domain/Creative Commons assets according to license.

---

# 220. AI-GENERATED IMAGES

AI-generated images may be used as illustration when appropriate.

Do not use AI images to falsely depict:

- real staff;
- real facilities;
- real cases;
- real products;
- before/after evidence.

---

# 221. ARTICLE LINKS AND TRACKING

Do not add tracking parameters to internal links unless the analytics strategy explicitly requires them.

Keep canonical internal URLs clean.

---

# 222. CONVERSION TRACKING HANDOFF

If the CTA is commercial, the website skill may track:

```text
article_cta_click
click_whatsapp
click_phone
schedule_click
```

This article skill does not invent analytics IDs.

---

# 223. ARTICLE CTA EVENT LABEL

When useful, recommend a semantic event label such as:

```text
article_cta_click
```

Implementation belongs to the website skill/analytics setup.

---

# 224. CONTENT PERFORMANCE REVIEW

Do not optimize only for:

- time on page;
- bounce rate;
- word count.

Use business/search outcomes.

A user finding the answer quickly can be a success.

---

# 225. SERP VOLATILITY

A single manual search is not perfect rank tracking.

Treat SERP observations as directional.

Use Search Console and dedicated tracking when available.

---

# 226. PERSONALIZATION / LOCATION

Local SERPs may vary by:

- location;
- device;
- personalization;
- language.

Do not make absolute claims from one observed result.

---

# 227. ZERO-CLICK QUERIES

Some queries may be answered directly in search.

Do not avoid them automatically.

Ask whether the article can:

- build brand trust;
- earn citations;
- lead to deeper queries;
- support a service.

---

# 228. CONTENT MOAT

Prefer topics where the site can provide something competitors cannot easily replicate.

Examples:

- expert knowledge;
- proprietary data;
- local experience;
- real photos;
- unique methodology;
- client cases;
- tools.

Generic information alone is easy to copy.

---

# 229. LINK-EARNING POTENTIAL

Articles more likely to earn natural links often contain:

- original data;
- definitive reference material;
- useful tools;
- unique visualizations;
- expert analysis;
- original research.

Do not fabricate research for links.

---

# 230. ORIGINAL RESEARCH

If publishing original research:

document:

- methodology;
- sample;
- date;
- limitations;
- calculations;
- source data where possible.

Do not call anecdotal opinion a study.

---

# 231. SURVEYS

For surveys:

state:

- respondent count;
- collection method;
- period;
- population;
- limitations.

Do not overgeneralize.

---

# 232. DATA VISUALIZATION

Charts should:

- reflect real data;
- label axes;
- cite source;
- avoid misleading scales.

The website skill handles implementation.

---

# 233. CALCULATORS / TOOLS

If query intent suggests a tool would answer better than prose:

recommend a tool.

Do not force a 3,000-word article where a calculator is more useful.

---

# 234. DOWNLOADABLE ASSETS

Checklists/templates can enhance usefulness.

Do not create gated downloads solely to collect emails if the user just needs the information.

---

# 235. FAQ FROM CUSTOMER QUESTIONS

Real sales/support questions are strong content inputs.

Prioritize recurring real questions over arbitrary keyword lists when appropriate.

---

# 236. SALES TEAM INPUT

For business articles, useful research sources include:

- sales objections;
- support tickets;
- WhatsApp questions;
- reviews;
- consultations;
- customer interviews.

Respect privacy.

---

# 237. REVIEW MINING

Reviews may reveal:

- user language;
- pain points;
- valued benefits;
- recurring concerns.

Do not copy customer reviews without permission/appropriate context.

Do not use competitor reviews as factual proof about your business.

---

# 238. FORUM RESEARCH

Forums can reveal:

- wording;
- confusion;
- real questions.

They are not automatically authoritative factual sources.

Use them for intent discovery, then verify facts elsewhere.

---

# 239. SOCIAL MEDIA RESEARCH

Social media may reveal:

- trends;
- questions;
- audience language.

Do not treat virality as evidence.

---

# 240. REDDIT / COMMUNITY SIGNALS

Community discussions can reveal authentic concerns.

Separate:

- anecdote;
- opinion;
- verified fact.

Do not present anonymous claims as expert consensus.

---

# 241. SEARCH SUGGESTIONS

Autocomplete/related searches may help discover language.

Do not treat them as exact volume data.

---

# 242. PEOPLE ALSO ASK

PAA-style questions may be useful research inputs when visible.

Do not fabricate a "People Also Ask" list when you did not actually observe it.

---

# 243. SEARCH CONSOLE QUERY EXPANSION

Queries already generating impressions are high-value signals.

Use them to:

- expand missing sections;
- clarify intent;
- improve headings;
- identify related content.

Do not jam every query into the article.

---

# 244. ARTICLE UPDATE FROM GSC

When an article ranks for unexpected queries:

decide whether those queries:

- belong in the existing article;
- deserve another article;
- indicate intent mismatch.

---

# 245. POSITION 5–20 OPPORTUNITIES

For articles already near the first page:

prioritize diagnosis before creating replacements.

Possible improvements:

- better intent match;
- stronger answer;
- missing subtopic;
- improved internal links;
- stronger evidence;
- title/snippet improvement;
- original value.

---

# 246. BACKLINK-AWARE UPDATES

If an article has backlinks:

avoid changing its URL unnecessarily.

Preserve link equity.

---

# 247. ARTICLE REDIRECTS

If merging/removing an article:

redirect to the closest relevant equivalent.

Do not redirect unrelated articles to the homepage simply to retain authority.

---

# 248. CONTENT MIGRATION

When moving a blog between platforms:

preserve:

- URLs;
- titles when appropriate;
- content;
- images;
- internal links;
- canonical;
- metadata;
- structured-data inputs;
- redirects.

Coordinate implementation with the website skill.

---

# 249. ARTICLE SECURITY

Do not embed:

- unknown third-party scripts;
- unsafe iframes;
- untrusted code snippets.

If code examples are necessary, make them educational and safe.

---

# 250. CODE ARTICLES

For technical articles:

- test code when possible;
- use official documentation;
- specify versions;
- avoid deprecated examples;
- label destructive commands clearly.

---

# 251. LEGAL ARTICLES

For legal topics:

- identify jurisdiction;
- verify current law;
- use primary legal sources;
- avoid presenting generic content as personalized legal advice.

---

# 252. FINANCIAL ARTICLES

For finance:

- verify rates/rules when time-sensitive;
- identify date;
- distinguish education from personalized advice;
- disclose risk where appropriate.

---

# 253. HEALTH ARTICLES

For human health:

- prioritize authoritative sources;
- avoid diagnosis;
- avoid unsupported treatment claims;
- use safety guidance.

---

# 254. PRODUCT CONTENT

For product-related articles:

- use current specifications;
- verify availability/pricing if stated;
- distinguish tested vs researched.

---

# 255. SOFTWARE CONTENT

For software:

- verify current version/documentation;
- do not rely on outdated UI steps;
- cite official docs when technical accuracy matters.

---

# 256. CONTENT LOCALIZATION

When adapting an article for another country:

do not merely translate.

Check:

- terminology;
- law;
- currency;
- product availability;
- cultural context;
- units;
- sources.

---

# 257. TRANSLATED ARTICLES

Do not publish poor machine translations at scale.

Translated pages should be fully useful to native readers.

---

# 258. HREFLANG HANDOFF

The article skill may identify translated equivalents.

The website skill implements hreflang/canonical.

---

# 259. CONTENT PERSONALIZATION

Do not create different indexable article text for different users in a way that causes cloaking or inconsistent meaning.

---

# 260. SEARCHER SAFETY

If a query indicates urgent danger:

prioritize safe action over SEO/conversion.

Do not withhold essential safety information to drive contact.

---

# 261. ETHICAL CONVERSION

Conversion should follow value.

The article should not intentionally make the reader more anxious to increase leads.

---

# 262. CONTENT CLAIMS ABOUT COMPETITORS

Do not make unsupported negative claims about competitors.

Comparison content should remain factual.

---

# 263. "BEST IN CITY" CLAIMS

Do not claim:

- best;
- #1;
- most trusted;
- leading;

without credible substantiation.

Ranking first in one query does not automatically justify "best".

---

# 264. AUTHORITATIVE TONE

Confidence should come from clarity and evidence.

Do not simulate authority with:

- excessive jargon;
- absolute statements;
- fake statistics;
- invented experience.

---

# 265. ARTICLE OPENING FORMULAS

Do not use the same intro formula across every article.

Possible openings include:

- direct answer;
- scenario;
- definition;
- important distinction;
- relevant data;
- practical problem.

Choose based on intent.

---

# 266. SECTION ORDER

Order sections according to user need, not keyword priority.

The most important information often belongs early.

---

# 267. INFORMATION SCENT

Headings, links and CTA labels should clearly indicate what happens next.

Avoid vague labels such as:

```text
Saiba mais
Clique aqui
Confira
```

when a descriptive label is possible.

---

# 268. ARTICLE LENGTH BY INTENT

Examples:

```text
Simple definition:
short

Complex comparison:
medium/long

YMYL guide:
as detailed as needed for accuracy

Tutorial:
length follows steps
```

Do not normalize all articles to one length.

---

# 269. SUPPORTING CONTENT

If a topic becomes too broad:

split into supporting articles.

Do not create one giant page attempting to answer an entire industry.

---

# 270. CONTENT HUB UX

The website skill should provide a usable blog/content hub.

The article skill may recommend:

- categories;
- pillar links;
- related articles;
- search/filter needs.

Do not implement CSS.

---

# 271. SITEWIDE EDITORIAL CONSISTENCY

Maintain consistency in:

- terminology;
- business name;
- services;
- professional titles;
- NAP references;
- brand claims.

Do not use different business facts in different articles.

---

# 272. NAP IN ARTICLES

For local businesses:

do not stuff full NAP into every article.

Use contact/location references naturally.

The website template/footer and structured data handle consistent NAP.

---

# 273. LOCATION MENTIONS

Mention the city when relevant.

Do not add "em Poços de Caldas" to every paragraph.

---

# 274. SERVICE MENTIONS

Mention services only when:

- the service exists;
- the article logically relates to it.

Do not insert every company service into every article.

---

# 275. BUSINESS CLAIM VERIFICATION

Before saying:

- 24 hours;
- emergency;
- specialist;
- certified;
- accredited;
- free;
- guaranteed;

verify.

---

# 276. PROMOTIONAL LANGUAGE

Use promotional language sparingly inside editorial content.

Prefer specific proof over adjectives.

Weak:

> atendimento de altíssima qualidade

Better:

> consultas com horário agendado e acompanhamento do histórico do paciente

only if true.

---

# 277. CONTENT TRUST SIGNALS

Useful trust elements may include:

- references;
- author/reviewer;
- transparent update date;
- real examples;
- real images;
- clear limitations.

Do not overdecorate with badges.

---

# 278. EDITORIAL NOTES

When delivering an article, flag:

- unsupported business facts;
- sources needing approval;
- images needed;
- expert-review recommendation;
- CTA destination needed.

Do not hide unresolved items.

---

# 279. REVIEW AND PUBLISHING WORKFLOW

Recommended workflow for a business article in the Astro Content Collection architecture:

```text
Inspect project content contract
→ Cannibalization/site-context check
→ SERP/source research
→ Brief
→ Draft
→ Fact check
→ Expert review when needed
→ Editorial SEO review
→ Internal-link review
→ CTA review
→ Frontmatter validation
→ Write/update Markdown entry
→ Companion website/build validation
→ Review rendered article route
→ Publish
→ Monitor
→ Update when justified
```

Do not confuse a valid Markdown file with a validated published page.

When tooling is available, the final implementation should be checked in the generated/rendered site by the companion website workflow.

---

# 280. FIRST DRAFT IS NOT FINAL

Do not assume generated prose is publication-ready without review.

Perform at least:

- factual pass;
- readability pass;
- SEO-overoptimization pass;
- duplication pass;
- CTA pass.

---

# 281. ARTICLE CREATION MODE

When the user says:

> "Crie um artigo sobre X"

default workflow:

1. determine whether an article is the correct page type;
2. inspect the existing site/project when accessible;
3. inspect `src/content.config.ts` and representative entries when the project uses Astro Content Collections;
4. check cannibalization against existing URLs/content;
5. research the live SERP when possible;
6. identify authoritative sources;
7. create an internal brief;
8. draft the article;
9. fact check;
10. optimize structure and readability;
11. select real contextual internal links;
12. create contextual CTA content;
13. map metadata/content to the real frontmatter schema;
14. write/update the Markdown entry when repository access and the task permit;
15. hand off technical validation to the companion website/build workflow.

For an Astro Content Collection project, do not finish by creating:

```text
src/pages/blog/nome-do-artigo/index.astro
```

when the site already has a shared dynamic article route.

The intended unit of publication is the Content Collection entry.

---

# 282. ARTICLE IDEA MODE

When the user says:

> "Me dê ideias de artigos"

do not write full articles.

Return prioritized opportunities with:

```text
Topic
Intent
Why it matters
Related service
Priority
Cannibalization risk
```

---

# 283. CLUSTER MODE

When the user says:

> "Monte um cluster"

return:

```text
Pillar
Service page
Supporting articles
Intent
Internal-link relationship
Priority
```

---

# 284. UPDATE MODE

When the user says:

> "Atualize este artigo"

do not replace blindly.

Analyze:

- existing content;
- current intent;
- sources;
- SERP;
- GSC if available;
- missing sections;
- outdated claims.

Then preserve what still works.

---

# 285. AUDIT MODE

When the user says:

> "Analise este artigo"

score qualitatively:

- intent fit;
- usefulness;
- accuracy;
- originality;
- structure;
- trust;
- internal links;
- conversion;
- SEO risks.

Do not reduce quality to one arbitrary number unless requested.

---

# 286. CONTENT BRIEF MODE

When the user requests a brief:

include:

```text
Primary topic
Intent
Audience
Suggested title/H1
SERP observations
Outline
Questions
Entities/concepts
Sources
Internal links
CTA
Image brief
Risks
```

---

# 287. OUTLINE MODE

When only an outline is requested:

do not write the full article.

Create headings that map to user needs.

---

# 288. RESEARCH-ONLY MODE

When only research is requested:

do not draft the article.

Provide evidence, gaps and recommendations.

---

# 289. FINAL CTA RULE FOR BUSINESS ARTICLES

Unless clearly inappropriate, every finished commercial/business article should end with a contextual final CTA content package.

The CTA should:

- be related to the article;
- contain one primary action;
- avoid generic identical copy across all articles;
- avoid fear;
- avoid unsupported urgency;
- point to a real or placeholder destination.

---

# 290. FINAL CTA AND CONCLUSION

Do not necessarily create both:

```text
generic conclusion
+
CTA
```

If the CTA naturally closes the article, use it as the final transition.

Avoid redundant endings.

---

# 291. FINAL CTA EXAMPLE — VETERINARY

```text
ARTICLE_CTA:
headline: Seu pet está apresentando esses sinais?
supporting_text: Se os sintomas persistirem ou estiverem causando preocupação, uma avaliação veterinária pode ajudar a identificar a causa e orientar os próximos cuidados.
button_label: Agendar uma avaliação
destination: [URL-DE-CONTATO-OU-WHATSAPP]
```

This is an example.

Adapt every article.

---

# 292. FINAL CTA EXAMPLE — SERVICE BUSINESS

```text
ARTICLE_CTA:
headline: Quer entender qual solução faz mais sentido para o seu caso?
supporting_text: Nossa equipe pode analisar sua necessidade e explicar as opções disponíveis.
button_label: Falar com um especialista
destination: [URL-DE-CONTATO]
```

---

# 293. FINAL CTA EXAMPLE — EARLY-STAGE ARTICLE

```text
ARTICLE_CTA:
headline: Quer conhecer as opções disponíveis?
supporting_text: Veja como funciona o serviço e em quais situações ele pode ser indicado.
button_label: Conhecer o serviço
destination: [URL-DO-SERVICO]
```

---

# 294. ARTICLE QUALITY STANDARD

The finished article should feel like:

> a knowledgeable professional created the best useful explanation they could for the reader.

It should NOT feel like:

> an SEO template was filled with keywords.

---

# 295. FINAL PRINCIPLE

The best SEO article is not the article that looks most optimized.

It is the article that:

```text
understands the query
→ answers it clearly
→ earns trust
→ provides original value
→ fits the site's expertise
→ connects to useful internal pages
→ offers an appropriate next step
→ remains technically easy to publish and index
```

Never reverse this into:

```text
keyword
→ word count
→ keyword density
→ copied SERP headings
→ fake FAQ
→ generic CTA
```

Search visibility is the result of useful, credible publishing—not the reason to publish low-value text.

---

# 296. MANDATORY FINAL CHECKLIST

Before delivering or marking a publishable article ready, verify:

```text
STRATEGY
[ ] Correct page type
[ ] Clear primary intent
[ ] No obvious cannibalization
[ ] Topic fits the site
[ ] Business purpose is legitimate

RESEARCH
[ ] SERP checked when available
[ ] Important claims sourced
[ ] Current information used
[ ] Competitors not copied
[ ] Content gap identified

CONTENT
[ ] Direct useful opening
[ ] Logical heading structure
[ ] No duplicate H1 in the active Astro layout
[ ] No filler
[ ] No artificial word count
[ ] No keyword stuffing
[ ] Original value present
[ ] Natural language
[ ] No generic AI repetition

TRUST
[ ] No invented facts
[ ] No invented author
[ ] No fake credentials
[ ] No fake statistics
[ ] YMYL standards applied if relevant
[ ] Dates truthful

SEO / EDITORIAL DATA
[ ] Title fits intent and actual renderer contract
[ ] Description prepared in actual schema field
[ ] Slug appropriate and stable
[ ] Internal links use real routes
[ ] External citations useful
[ ] No meta keywords
[ ] No spam tactics

ASTRO CONTENT CONTRACT — WHEN APPLICABLE
[ ] src/content.config.ts inspected
[ ] Exact required frontmatter fields used
[ ] Frontmatter types valid
[ ] Markdown body does not duplicate page-shell components
[ ] Markdown body starts at H2 when BlogLayout renders H1
[ ] No hand-written .astro article route created
[ ] Asset paths follow project convention
[ ] draft behavior follows actual schema/build logic
[ ] CTA data follows real reusable component/data contract
[ ] Structured-data inputs are not duplicated unnecessarily

MEDIA
[ ] Image opportunity evaluated
[ ] Image brief truthful
[ ] No fake real-world imagery
[ ] Alt concept describes image

CONVERSION
[ ] Related service identified when appropriate
[ ] Final CTA contextual
[ ] CTA not manipulative
[ ] Destination real or marked pending outside publishable content

HANDOFF / VALIDATION
[ ] Website skill handles visual/technical implementation
[ ] New/updated entry is ready for schema/build validation
[ ] Rendered route should be checked before claiming publication success
```

A draft passing editorial checks is not automatically a successfully deployed page.

---

# 297. DEFAULT DELIVERABLE FOR A BUSINESS SEO ARTICLE

Unless the user requests another format, internally prepare:

```text
Research summary
Primary intent
Content/frontmatter values required by the project
Article body
Internal-link plan
Sources
Image brief
Article CTA content
Pending facts
```

For an existing Astro Content Collection project, prefer a publishable artifact shaped like:

```text
src/content/blog/<slug>.md
```

containing:

```text
validated frontmatter
+
Markdown editorial body
```

and keep technical rendering centralized in the site architecture.

Do not create a separate visible bundle of `SEO Title`, `H1`, `Schema Inputs`, `Canonical` and other fields when those values are already derived from the project frontmatter/layout contract.

Visible output should match the user's request.

Do not overwhelm the user with internal process unless requested.

---

# 298. COMPANION SKILL RULE

When `seo-astro-static-website-builder` is available, use it as the implementation source of truth for the site's technical layer.

Do not duplicate or override its:

- Astro architecture;
- Content Collection schema;
- dynamic article route;
- BlogLayout;
- SEOHead;
- design system;
- CSS;
- performance rules;
- accessibility rules;
- technical SEO infrastructure;
- canonical logic;
- sitemap logic;
- structured-data renderer;
- article CTA visual standard.

This skill remains editorial and strategic, but it must fill the implementation contract correctly.

If the two skills conflict about field names, routes or rendering behavior, inspect the real project code. The project's current schema and renderer win for implementation details, while current official search guidance wins for SEO-specific behavior.

---

# 299. CURRENT-GUIDANCE OVERRIDE

If current official Google documentation conflicts with any SEO-specific instruction in this file:

current official guidance wins.

Update the implementation accordingly.

---

# 300. CORE EDITORIAL RULE

Before publishing, ask one final question:

> If this article stopped receiving search traffic tomorrow, would it still be worth having on the website for real users?

If the answer is no:

improve it or do not publish it.


---

# ADDITIVE EXTENSION B — AUTOMATED ARTICLE THUMBNAIL SYSTEM

Extension added: 2026-08-18

This extension is ADDITIVE.

It does not replace, rewrite, shorten or weaken Sections 82–88 or any other existing image/media rule in this skill.

The existing rules for truthful imagery, featured-image relevance, alt text, captions, original media and the website skill's technical ownership remain in force.

The purpose of this extension is to make article thumbnail creation a normal, automated part of the article workflow when the execution environment provides an image-generation capability.

## B1. THUMBNAIL IS PART OF THE ARTICLE LIFECYCLE

For a publishable business article, evaluate the thumbnail at the same time as:

- title;
- search intent;
- article category;
- central problem;
- target reader;
- featured-image requirement;
- article-card presentation.

When a thumbnail is useful and image generation is available, do not wait for the user to manually invent the visual concept.

Infer the visual direction from the article itself.

A normal automated flow is:

```text
final article title / H1
→ category / pillar
→ search intent
→ central problem or promise
→ niche / profession when applicable
→ short thumbnail headline
→ visual concept
→ generation
→ visual QA
→ website-skill integration
```

Do not create an image merely because an article exists. If a meaningful visual cannot be created without misleading the reader, prefer a strong typographic or project-standard fallback.

## B2. SOURCE DATA FOR AUTOMATIC INFERENCE

Before creating the thumbnail, infer from the final article and project context:

```text
Article title / H1
Slug
Category / pillar
Primary search intent
Target reader
Main problem
Main outcome
Important entities
Profession / industry when applicable
Brand visual context
Existing blog-thumbnail inventory
```

Do not ask the user to provide a separate image prompt when these values can be derived safely from the article.

Do not ask the user to manually choose a visual metaphor unless there are two materially different creative directions and the choice matters to the business.

## B3. TOPIC-FIRST VISUAL DIRECTION

The thumbnail must communicate the article topic before it communicates a decorative style.

Prefer direct visual relationships.

Examples:

```text
Google Business Profile / local presence
→ map, local listing, reviews, verification, visibility, suspension/recovery state

Google Ads
→ campaigns, search ads, CPC, conversion, cost, keywords, performance, tracking

Local SEO
→ local rankings, maps, organic visibility, website performance, authority, local search

Measurement / WhatsApp tracking
→ messages, events, conversion paths, attribution, measurement UI

Website performance
→ loading, speed, Core Web Vitals, page rendering, performance diagnostics
```

For profession- or niche-specific articles, use recognizable context from that profession when it improves understanding.

Examples:

```text
psychology
→ office, armchair, notebook, agenda, consultation environment

law
→ documents, desk, legal materials, balance motif only when natural

dentistry
→ clinic objects, dental equipment, appointment context

veterinary
→ pet-care environment, veterinary objects, clinic context

restaurant
→ kitchen, menu, delivery/order context, food-service objects
```

Do not force generic digital-marketing imagery onto every article.

## B4. HUMAN / REALITY POLICY

Default to NO PEOPLE when an article does not genuinely require a person.

Avoid by default:

- faces;
- hands;
- full bodies;
- silhouettes;
- fake professionals;
- fake customers;
- AI-generated people presented as real staff, experts or clients.

When a real person is editorially important, prefer a real authorized photograph supplied by the project.

Never use generated imagery as fake evidence, fake team photography, fake customer proof or fake first-party experience.

## B5. THUMBNAIL TEXT

A thumbnail should normally contain a short visible headline when that improves recognition in blog cards and social previews.

The text may be:

- the article title when already short;
- a shortened version of the title;
- a direct phrase that clearly refers to the article title.

Do not force the complete SEO title into the image when it is too long.

Prefer a short thumbnail headline that can be understood at small size.

Practical target:

```text
3–7 words when possible
```

Examples:

```text
Article:
Por Que Seu Google Ads Só Traz Cliques e Nenhuma Venda

Thumbnail:
Cliques sem vendas?
```

```text
Article:
Perfil do Google Meu Negócio Suspenso: Como Recuperar sua Empresa no Google Maps

Thumbnail:
Perfil suspenso?
```

```text
Article:
Site ou Google Meu Negócio: Qual Investir Primeiro Para o Seu Negócio Local?

Thumbnail:
Site ou Google?
```

A small category label may be used when it improves hierarchy, for example:

```text
GOOGLE ADS
SEO LOCAL
GOOGLE MEU NEGÓCIO
```

The category label is optional, not mandatory.

Do not fill the image with paragraphs, tiny labels, fake charts containing unreadable text or multiple competing headlines.

## B6. DESIGN GOAL: DESIGNER-MADE, NOT AI-LOOKING

The visual objective is:

> A professional blog cover that looks intentionally art-directed by a designer and is clearly related to the article.

Prefer:

- editorial composition;
- clean hierarchy;
- natural or realistic visual elements when appropriate;
- topic-specific photography or interface fragments;
- strong typography;
- useful negative space;
- simple visual storytelling;
- recognizable context.

Avoid defaulting to visual patterns that strongly signal generic AI generation, especially:

- glossy 3D objects;
- isometric miniature cities;
- floating metallic symbols;
- gold shields;
- glossy pins;
- abstract funnels;
- random holograms;
- excessive neon;
- futuristic dashboards unrelated to the article;
- cinematic sci-fi lighting;
- generic tech collages;
- decorative objects with no semantic relationship to the topic.

If the first result looks like a generic AI render rather than a designed article cover, reject it and regenerate with a simpler, flatter or more realistic editorial direction.

## B7. NO FIXED IVORY / BEIGE AESTHETIC

Do not standardize the blog by forcing every thumbnail to use:

- ivory;
- marfim;
- beige;
- gold;
- the same neutral background;
- the same dark dashboard treatment;
- the same device mockup.

Consistency should come from quality, typography discipline and art direction, not from forcing every article into one palette.

The topic and brand context may determine the palette.

A Google Ads article may use a different visual mood from a Google Business Profile article or a profession-specific article.

Do not make every thumbnail look like the same template with different words.

## B8. VISUAL DIVERSITY ENGINE

Before generating a new thumbnail, inspect the existing thumbnail inventory when accessible.

Check for repetition in:

- dominant palette;
- background treatment;
- left/right composition;
- laptop placement;
- phone placement;
- dashboard placement;
- map placement;
- icon choice;
- photography subject;
- headline position;
- repeated visual metaphor.

Avoid creating another thumbnail with the same dominant composition when a sufficiently different, topic-appropriate concept is available.

Examples of repetition to avoid:

```text
headline always on the left + dashboard always on the right
same laptop in every article
same phone mockup in every article
same dark-blue background in every article
same map-pin illustration in every local article
same red warning panel in every troubleshooting article
```

The collection should feel related, not cloned.

## B9. GENERATION PROMPT SHOULD BE SHORT

Do not over-prompt the image model with dozens of aesthetic instructions unless a specific failure needs correction.

Start with a compact prompt based on the article.

Recommended generic structure:

```text
Create a horizontal 16:9 blog thumbnail.

Article: [ARTICLE TITLE]
Category: [CATEGORY]
Thumbnail headline: [SHORT HEADLINE]

Create a professional editorial cover directly related to the article topic, with strong readable typography and natural visual context. It should look designed by a professional, not like a generic AI-generated image.

Avoid 3D, excessive effects, floating objects, confusing metaphors and generic stock-photo aesthetics.
```

Add only the minimum topic-specific instruction needed, for example:

```text
Use campaign-performance and conversion context for this Google Ads article.
```

or:

```text
Use map, local-business-profile and suspension/recovery context for this Google Business Profile article.
```

Do not automatically add long lists of negative prompts when the simple direction already produces a good result.

## B10. HEADLINE GENERATION RULE

When the article title is too long for a thumbnail, generate the short headline automatically.

The short headline must:

- preserve the article's central idea;
- remain truthful;
- not introduce a stronger claim than the article;
- be immediately understandable;
- avoid clickbait;
- avoid keyword stuffing;
- remain visually readable at card size.

Do not change the article's actual H1 merely to accommodate the thumbnail.

Thumbnail headline and article title may differ while remaining semantically aligned.

## B11. IMAGE FILE AND PROJECT CONTRACT

The article skill must respect the real project's asset and Content Collection conventions.

Before inventing a path or frontmatter field, inspect the project when accessible.

Potential project patterns may include:

```text
src/assets/blog/<slug>.webp
src/assets/images/blog/<slug>.webp
public/images/blog/<slug>.webp
```

These are examples only.

The actual project convention wins.

Do not add a new frontmatter field such as:

```text
thumbnailHeadline
thumbnailPrompt
thumbnailCategory
```

unless the project's real schema supports or deliberately adopts it.

If the existing collection uses fields such as:

```text
image
imageAlt
```

fill those correctly and keep technical rendering centralized in the website skill.

## B12. FILE NAMING

When the project does not already define another convention, a useful default is to derive the image filename from the article slug.

Example:

```text
/blog/google-ads-cliques-sem-vendas/
→ google-ads-cliques-sem-vendas.webp
```

Avoid generic filenames such as:

```text
image1.webp
thumb-final.webp
banner-new-2.webp
```

Do not rename existing published assets casually when that would break URLs or references.

## B13. FORMAT AND TECHNICAL HANDOFF

The thumbnail should normally be prepared for efficient web delivery.

The article skill owns:

- semantic visual concept;
- thumbnail headline;
- category/context recommendation;
- truthfulness;
- image brief;
- generation decision;
- first-pass visual QA.

The website skill owns or validates:

- actual project path;
- image processing;
- width/height;
- responsive delivery;
- Astro asset handling;
- WebP/AVIF strategy;
- preload/LCP behavior when relevant;
- card rendering;
- featured-image rendering;
- final performance QA.

When the same execution environment has both skills available, complete the handoff automatically rather than asking the user to coordinate the two layers manually.

## B14. ALT TEXT

Alt text must describe the final image, not merely copy the article keyword or thumbnail headline.

Bad:

```text
Google Ads cliques sem vendas Google Ads tráfego pago
```

Better when the image actually shows it:

```text
Painel de campanha mostrando muitos cliques e poucas conversões
```

If the image is purely decorative and adds no content beyond nearby text, the website skill may use empty alt according to the project's accessibility rules.

Do not stuff keywords into alt text.

## B15. AUTOMATED QUALITY CONTROL

Before accepting a generated thumbnail, verify:

```text
[ ] It is clearly related to the article topic
[ ] The headline is readable at card size
[ ] The headline is truthful and semantically aligned with the article
[ ] There is not too much text
[ ] It does not look like generic AI 3D art
[ ] It does not fabricate a real employee, customer, expert or event
[ ] It is not misleading
[ ] It is meaningfully different from recent thumbnails
[ ] It does not reuse an unrelated existing image
[ ] The palette/composition is appropriate to the topic and brand
[ ] It remains usable when cropped responsively
[ ] The final asset path follows the real project convention
[ ] Alt text describes the actual image
```

If any important item fails, regenerate or revise before publication.

## B16. REGENERATION TRIGGERS

Regenerate when the result:

- feels generic;
- is semantically weak;
- looks strongly AI-generated;
- repeats an existing composition unnecessarily;
- uses irrelevant 3D metaphors;
- includes fake people;
- contains malformed or unreadable text;
- contains excessive interface microcopy;
- visually contradicts the article;
- uses a fixed palette only because previous thumbnails did;
- is attractive but does not communicate the topic.

Visual attractiveness alone is not enough.

## B17. FALLBACK WHEN IMAGE GENERATION IS UNAVAILABLE

If the execution environment cannot create a raster image:

1. create the short thumbnail headline;
2. create the topic-specific visual concept;
3. create the compact generation prompt;
4. create the image brief;
5. mark the image as pending outside publishable article copy when necessary;
6. do not silently reuse an unrelated old thumbnail.

Do not fabricate a path to an asset that does not exist.

## B18. AUTOMATED ARTICLE + THUMBNAIL WORKFLOW

When automation is explicitly part of the project, the desired pipeline is:

```text
SERP / intent research
→ article decision
→ article brief
→ article draft
→ editorial QA
→ final title / slug
→ thumbnail headline
→ visual concept
→ inspect existing thumbnail inventory
→ generate thumbnail
→ thumbnail QA
→ website-skill integration
→ internal links / CTA
→ build validation
→ human approval when the workflow requires it
```

The user should not need to manually write an image prompt for every article.

## B19. FINAL THUMBNAIL PRINCIPLE

A strong article thumbnail should make a reader understand the subject at a glance.

The winning order is:

```text
Topic relevance
→ readable headline
→ natural visual context
→ professional art direction
→ visual diversity
→ brand coherence
→ technical efficiency
```

Do not reverse this into:

```text
Fixed aesthetic
→ generic AI metaphor
→ decorative 3D
→ unrelated visual
→ topic added as text afterward
```

The thumbnail exists to communicate the article, not to demonstrate that an image model can create elaborate artwork.
