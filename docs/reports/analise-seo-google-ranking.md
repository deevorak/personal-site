# Auditoria de SEO, Critérios do Google e Plano de Ação — Carlos Rocha Consultoria em TI

**Data da análise:** 25/11/2026  
**Status atual:** Fase 0 concluída e Fase 1 (itens 1 a 4 — código, SSG e SEO técnico) concluída e validada em 25/11/2026 *(pendente na Fase 1: apontamento DNS + item 5 externo — Google Search Console, Bing Webmaster Tools e Google Perfil da Empresa)*  
**Escopo analisado:** Código-fonte completo (`src/`, `public/`, `angular.json`, `package.json`) e build de produção (`dist/personal-site/browser/`)  
**Stack atual:** Angular 22.3.0 (`@angular/build:application` + `@angular/ssr` com SSG/Prerendering `outputMode: "static"` e `provideClientHydration(withEventReplay())`), Bootstrap 5.3.9, ng-bootstrap 21.0.0, Bootstrap Icons 1.13.2  
**URL alvo configurada:** `https://rocha-consultoria.tech/` (e-mail `contato@rocha-consultoria.tech` e WhatsApp `+55 51 99242-9952`)

---

## 1. Resumo Executivo & Diagnóstico Geral

O site apresenta **excelente base visual, semântica HTML inicial e clareza de posicionamento comercial** (transparência sobre atuação como pessoa física/autônomo, +20 anos de experiência corporativa, foco em PMEs e atendimento ao cidadão). Contudo, sob a ótica dos algoritmos de ranqueamento do Google (**Search Essentials**, **Helpful Content / Core Ranking Systems**, **E-E-A-T** e **Core Web Vitals**), o projeto enfrenta **bloqueadores estruturais severos** que hoje impedem a indexação completa do conteúdo e tornam inviável disputar a primeira página para palavras-chave comerciais competitivas.

### Pontos Fortes Já Presentes
- **Estrutura semântica limpa:** uso correto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, um único `<h1>`, `lang="pt-BR"`, `skip-link` e atributos ARIA bem cuidados (`aria-labelledby`, `aria-current`, `aria-expanded`, `role="status"`).
- **Ativos de marca e PWA bem configurados:** conjunto completo de favicons (`.ico`, `.svg`, PNGs `16x16`/`32x32`/`48x48`), `apple-touch-icon.png`, `site.webmanifest` válido, e `og-banner.png` nas dimensões recomendadas (`1200×630`).
- **Boas práticas pontuais de imagem:** uso de `<picture>` com WebP no logotipo da navbar e do footer, além de `width`/`height` explícitos e `fetchpriority="high"` no logo do cabeçalho.
- **Início de Dados Estruturados (JSON-LD):** presença de bloco `@graph` em `src/index.html` com `Person`, `ProfessionalService` e `FAQPage`.

### Top 5 Bloqueadores Críticos para Chegar ao Topo do Google

1. ~~**SPA 100% Client-Side Rendering (CSR) sem SSG/Prerendering + `@defer` + FAQ oculto no DOM**~~ *(✅ Resolvido nas Fases 0 e 1)*:
   - ✅ Na Fase 0, os 5 blocos `@defer (on viewport; on idle)` de `src/app/pages/home/home.html` foram removidos e `[destroyOnHide]="false"` foi adicionado ao `ngbAccordion` em `src/app/pages/home/components/faq-section/faq-section.html`.
   - ✅ Na Fase 1, foi habilitado o **SSG / Prerendering estático** do Angular 22 (`outputMode: "static"` + `provideClientHydration(withEventReplay())`). O `dist/personal-site/browser/index.html` agora sai com **164 KB** de HTML completo (`ng-server-context="ssg"`), contendo `<h1>` e todas as 6 perguntas e respostas do FAQ sem depender de JavaScript.
2. ~~**Hospedagem em subdiretório gratuito (`deevorak.github.io/personal-site/`) + `withHashLocation()`**~~ *(✅ Resolvido no código na Fase 1; ⏳ pendente apontamento DNS e deploy)*:
   - ✅ `withHashLocation()` removido de `src/app/app.config.ts`; `CNAME` (`rocha-consultoria.tech`), `environment.ts`/`environment.prod.ts`, `site.webmanifest` (`start_url: "/"`), `<base href="/" />` e script `deploy` atualizados.
   - ⏳ Falta apenas configurar o DNS de `rocha-consultoria.tech` e publicar no provedor escolhido (GitHub Pages ou Cloudflare Pages).
3. ~~**Ausência de fundamentos de SEO Técnico**~~ *(✅ Resolvido no código nas Fases 0 e 1; ⏳ pendente indexação externa no GSC/Bing)*:
   - ✅ Criados `public/robots.txt`, `public/sitemap.xml`, `<link rel="canonical" href="https://rocha-consultoria.tech/" />`, página estática `public/404.html` com `noindex, nofollow` (com `--no-notfound` no `deploy`), meta `robots`, OG absoluto e Twitter Cards apontando para `https://rocha-consultoria.tech/`.
   - ⏳ Falta validar e submeter o sitemap no Google Search Console e Bing Webmaster Tools (item 5 da Fase 1).
4. **Limitação de site One-Page** *(⏳ Pendente — Fase 3)* + ~~Title/Meta/H1 sem foco em intenção de busca~~ *(✅ Resolvido na Fase 0)*:
   - ✅ Na Fase 0, `<title>` foi ajustado para `59` caracteres, `<meta name="description">` foi unificada em `159` caracteres entre `index.html` e `home.ts`, `<meta name="keywords">` foi removida e o `<h1>` foi otimizado (`"Consultoria em TI: Agentes de IA, Automação e Sistemas sob Medida"`).
   - ⏳ Continua pendente a expansão para páginas dedicadas por serviço, estudos de caso e blog (Fase 3).
5. **Peso de CSS/JS/Fontes e baixa comprovação verificável de E-E-A-T** *(⏳ Pendente — Fases 2 e 3)*:
   - O build SSG pós-Fase 1 gera `styles-6R74UQ2A.css` com **335,01 KB** (Bootstrap completo + Bootstrap Icons completos), bundle JS inicial de **297,94 KB** (`chunk-TVD7HEXV.js` + `main-Y42F6PDG.js` + `polyfills`) e fonte `bootstrap-icons.woff2` de **131 KB** (`.woff` de **177 KB**) para apenas **39 ícones** usados.
   - Faltam sinais verificáveis de **E-E-A-T** (foto real do profissional, URL do LinkedIn no `sameAs`, estudos de caso com resultados, Google Perfil da Empresa, Política de Privacidade/LGPD).

### Matriz de Maturidade Atual por Pilar

| Pilar | Inicial | Pós-Fase 0 | Pós-Fase 1 (itens 1–4) | Situação | Impacto no Ranking |
| --- | :---: | :---: | :---: | --- | --- |
| **Renderização & Indexabilidade** | 2 / 10 | 4 / 10 | **9 / 10** | HTML estático de `164 KB` pré-renderizado via SSG com `<h1>` e 6 FAQs completos + URLs limpas sem `#/` | Crítico |
| **SEO Técnico & Infraestrutura** | 3 / 10 | 4,5 / 10 | **8,5 / 10** | `CNAME`, `robots.txt`, `sitemap.xml`, `canonical`, `404.html` sem Soft 404, OG/Twitter em `rocha-consultoria.tech`; pendente DNS/deploy e GSC | Crítico |
| **On-Page, Conteúdo & Arquitetura** | 4 / 10 | 6 / 10 | **6 / 10** | `title`, `description`, `<h1>` e headings do footer corrigidos; aguarda páginas dedicadas por serviço/blog (Fase 3) | Alto |
| **Dados Estruturados (Schema.org)** | 5 / 10 | 6,5 / 10 | **9 / 10** | `@graph` conectado por `@id` (`WebSite`, `WebPage`, `Person`, `ProfessionalService`, `OfferCatalog` e `FAQPage` com 6 itens); falta adicionar LinkedIn em `sameAs` | Alto |
| **Core Web Vitals & Performance** | 5 / 10 | 5 / 10 | **6 / 10** | SSG melhora FCP/LCP inicial; otimização de CSS (335 KB), icon font (131 KB) e logos prevista para a Fase 2 | Médio-Alto |
| **E-E-A-T, Autoridade & SEO Local** | 3 / 10 | 3 / 10 | **4 / 10** | Entidade `Person` vinculada ao GitHub e domínio próprio configurado; pendente Google Perfil da Empresa, LinkedIn, foto, cases e LGPD | Crítico |
| **GEO (AI Overviews / IAs)** | 3 / 10 | 4 / 10 | **7 / 10** | HTML pré-renderizado completo + `robots.txt` liberando `OAI-SearchBot`/`PerplexityBot` + `dateModified` no schema | Médio-Alto |

---

## 2. Análise 1 — Renderização, Rastreabilidade e Arquitetura Angular (Crítico)

### 2.1. ~~SPA 100% Client-Side Rendering (CSR) vs. SSG / Prerendering~~ *(✅ Concluído na Fase 1)*
Anteriormente, o build de produção entregava apenas `<app-root></app-root>`, o que atrasava a indexação na fila de renderização (WRS) do Googlebot, ocultava conteúdo para crawlers sem JavaScript (sociais e IAs) e aumentava o LCP.

**Ação aplicada:** Habilitado **Prerendering Estático (SSG)** nativo do Angular 22 com `@angular/ssr@^22.3.0` e `@angular/platform-server@^22.3.0`, criando `src/app/app.routes.server.ts` (`RenderMode.Prerender` para `''`), `src/app/app.config.server.ts`, `src/main.server.ts`, adicionando `provideClientHydration(withEventReplay())` em `src/app/app.config.ts` e configurando `"server": "src/main.server.ts"` e `"outputMode": "static"` no `angular.json`. O arquivo gerado `dist/personal-site/browser/index.html` (`164 KB`) sai totalmente pré-renderizado (`ng-server-context="ssg"`), mantendo deploy 100% estático.

### 2.2. ~~Risco dos blocos `@defer (on viewport; on idle)`~~ *(✅ Concluído na Fase 0)*
Anteriormente, cinco das sete seções da página inicial (`app-why-work-section`, `app-tech-stack-section`, `app-how-it-works-section`, `app-faq-section`, `app-contact-section`) estavam protegidas por `@defer (on viewport; on idle)` em `src/app/pages/home/home.html`, exibindo placeholders `"Carregando..."` com `min-height: 16rem` (`src/app/pages/home/home.scss`) para economizar ~79,9 KB distribuídos em 6 micro-chunks.

**Ação aplicada:** Os 5 blocos `@defer` e seus `@placeholder`s foram removidos de `src/app/pages/home/home.html` (mantendo os wrappers `.anchor-target`), e os estilos `.deferred-placeholder` / `.deferred-placeholder-dark` foram removidos de `src/app/pages/home/home.scss`. O conteúdo completo da Home agora é renderizado em bloco único (lazy chunk `home` de `77,62 kB`), eliminando placeholders e risco de CLS.

### 2.3. ~~Respostas do FAQ ocultas no DOM inicial~~ *(✅ Concluído na Fase 0)*
No componente `FaqSection` (`src/app/pages/home/components/faq-section/faq-section.html`), o `ngbAccordion` utilizava `<ng-template>` com `destroyOnHide` padrão (`true`), mantendo 5 das 6 respostas fora do DOM inicial.

**Ação aplicada:** Adicionado `[destroyOnHide]="false"` em `<div ngbAccordion [closeOthers]="true" [destroyOnHide]="false" class="faq-accordion">`, mantendo todas as 6 respostas presentes no DOM desde o carregamento inicial. *(Opcional futuro na Fase 2: avaliar troca para `<details>`/`<summary>` nativos caso `ng-bootstrap` seja removido.)*

### 2.4. ~~Uso de `withHashLocation()` e `404.html` sobrescrito~~ *(✅ Concluído na Fase 1)*
- **Hash routing (`#/`):** Removido `withHashLocation()` de `src/app/app.config.ts`, adotando URLs limpas (`PathLocationStrategy`) compatíveis com futuras rotas indexáveis (`/servicos/...`, `/sobre`, `/blog/...`).
- **Conflito no `404.html`:** Atualizado `public/404.html` para página estática dedicada com `<meta name="robots" content="noindex, nofollow" />` e botão para `/`, e ajustado o script `deploy` em `package.json` com `--no-notfound` para impedir que `angular-cli-ghpages` sobrescreva `404.html` com `index.html` (eliminando o risco de Soft 404).

---

## 3. Análise 2 — Domínio, Hospedagem e SEO Técnico Fundamental

### 3.1. Migrar de `deevorak.github.io/personal-site/` para `https://rocha-consultoria.tech/` *(✅ Configurado no código — Fase 1; ⏳ Pendente DNS/publicação)*
- **Ação aplicada:** Criado `public/CNAME` (`rocha-consultoria.tech`), atualizados `siteUrl` em `environment.ts` e `environment.prod.ts`, atualizado `start_url: "/"` em `public/site.webmanifest`, alterado `<base href="/" />` em `src/index.html` e atualizado o script `deploy` em `package.json` (`--base-href=/ --cname=rocha-consultoria.tech --no-notfound`).
- **Próximo passo externo:** Configurar os registros DNS (`A` para GitHub Pages ou integração no Cloudflare Pages) apontando `rocha-consultoria.tech` e ativar HTTPS; após publicar, garantir redirecionamento/canonização da URL antiga do `github.io`.

### 3.2. ~~Criar `public/robots.txt`~~ *(✅ Concluído na Fase 1)*
Criado `public/robots.txt` liberando `*`, `OAI-SearchBot` e `PerplexityBot`, com referência ao sitemap oficial:

```txt
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://rocha-consultoria.tech/sitemap.xml
```
*(Nota: se desejar impedir uso do conteúdo para treinamento de modelos mantendo citações em busca, você pode bloquear apenas `GPTBot` e `Google-Extended` separadamente, mantendo `OAI-SearchBot` e `Googlebot` liberados.)*

### 3.3. ~~Criar `public/sitemap.xml`~~ *(✅ Concluído na Fase 1)*
Criado `public/sitemap.xml` inicial (a ser expandido conforme novas rotas forem adicionadas na Fase 3):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rocha-consultoria.tech/</loc>
    <lastmod>2026-11-25</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 3.4. Auditoria das Meta Tags (`src/index.html` e `src/app/pages/home/home.ts`)

| Elemento | Situação Anterior | Ação / Melhoria | Status |
| --- | --- | --- | :---: |
| `<title>` | `Carlos Rocha Consultoria em TI \| Agentes de IA, Automação e Software sob Medida` (**79 chars**) | Unificado para `Consultoria em TI, Agentes de IA e Automação \| Carlos Rocha` (**59 chars**) em `index.html` e `home.ts`. | ✅ Fase 0 |
| `<meta name="description">` | ~**303 chars** em `index.html` e ~**261 chars** em `home.ts` (divergentes) | Unificada em **159 chars** com proposta de valor + CTA: `Agentes de IA, automação de processos, sites corporativos e sistemas sob medida para PMEs. +20 anos em TI corporativa com atendimento direto. Fale no WhatsApp.` | ✅ Fase 0 |
| `<meta name="keywords">` | Presente em `src/index.html` | Removida por ser ignorada pelo Google. | ✅ Fase 0 |
| `<link rel="canonical">` | **Ausente** | Adicionado `<link rel="canonical" href="https://rocha-consultoria.tech/" />` em `src/index.html`. *(Atualizar dinamicamente por rota quando houver novas páginas na Fase 3.)* | ✅ Fase 1 |
| `<meta name="robots">` | **Ausente** (na Home) | Adicionada `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`. | ✅ Fase 0 |
| `og:image` e Open Graph | `brand/og-banner.png` (relativo), sem `og:url`, `og:site_name` e `og:image:alt` | Atualizada para URL absoluta HTTPS em `https://rocha-consultoria.tech/brand/og-banner.png`, `og:url` (`https://rocha-consultoria.tech/`), `og:site_name` e `og:image:alt`. | ✅ Fase 0 / Fase 1 |
| Twitter Cards | **Ausente** | Adicionado bloco completo `summary_large_image` apontando para `https://rocha-consultoria.tech/brand/og-banner.png` e sincronizado em `home.ts`. | ✅ Fase 0 / Fase 1 |
| `theme-color` | Tag sem `media` (`#0b1324`) duplicando a versão `media="(prefers-color-scheme: dark)"` | Tag duplicada sem `media` removida; mantidas as duas tags por `prefers-color-scheme`. | ✅ Fase 0 |

---

## 4. Análise 3 — Dados Estruturados (Schema.org / JSON-LD) *(✅ Concluído nas Fases 0 e 1)*

Os três pontos de melhoria identificados na auditoria inicial foram implementados em `src/index.html`:

1. ~~**Violação das diretrizes de Rich Results no `FAQPage`:**~~ *(✅ Concluído na Fase 0)* — O bloco `FAQPage` em `src/index.html` foi sincronizado integralmente com todas as **6 perguntas e respostas exatas** exibidas por `FaqSection` (`src/app/pages/home/components/faq-section/faq-section.ts`), e todas permanecem no DOM com `[destroyOnHide]="false"`.
2. ~~**Entidades desconectadas (sem `@id`):**~~ *(✅ Concluído na Fase 1)* — `@graph` estruturado com `@id` interligando `WebSite`, `WebPage` (`inLanguage: "pt-BR"`, `dateModified: "2026-11-25"`), `Person`, `ProfessionalService` e `FAQPage`.
3. ~~**Falta de `url`, `image`/`logo`, `sameAs` e catálogo de serviços (`OfferCatalog` / `Service`):**~~ *(✅ Concluído na Fase 1)* — Adicionados `url`, `image`, `logo`, `areaServed` (Brasil e Rio Grande do Sul), `hasOfferCatalog` com os 4 serviços e `sameAs: ["https://github.com/deevorak"]` *(lembrete: incluir também sua URL oficial do LinkedIn em `sameAs`)*.

### Estrutura Implementada no JSON-LD (`src/index.html`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rocha-consultoria.tech/#website",
      "url": "https://rocha-consultoria.tech/",
      "name": "Carlos Rocha Consultoria em TI",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://rocha-consultoria.tech/#person" }
    },
    {
      "@type": "WebPage",
      "@id": "https://rocha-consultoria.tech/#webpage",
      "url": "https://rocha-consultoria.tech/",
      "name": "Consultoria em TI, Agentes de IA e Automação | Carlos Rocha",
      "isPartOf": { "@id": "https://rocha-consultoria.tech/#website" },
      "about": { "@id": "https://rocha-consultoria.tech/#business" },
      "inLanguage": "pt-BR",
      "dateModified": "2026-11-25"
    },
    {
      "@type": "Person",
      "@id": "https://rocha-consultoria.tech/#person",
      "name": "Carlos Rocha",
      "url": "https://rocha-consultoria.tech/",
      "jobTitle": "Analista de TI e Desenvolvedor de Software",
      "description": "Analista de TI e desenvolvedor de software autônomo com mais de 20 anos de experiência em soluções corporativas e sistemas de atendimento ao cidadão.",
      "email": "mailto:contato@rocha-consultoria.tech",
      "telephone": "+55-51-99242-9952",
      "sameAs": [
        "https://github.com/deevorak",
        "https://www.linkedin.com/in/SEU-PERFIL-AQUI"
      ],
      "knowsAbout": [
        "Agentes de IA para atendimento",
        "Automação de processos",
        "Sistemas sob medida",
        "Sites corporativos",
        "Java",
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "pgvector",
        "n8n",
        "Docker",
        "Kubernetes",
        "Keycloak",
        "Apache Kafka"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://rocha-consultoria.tech/#business",
      "name": "Carlos Rocha Consultoria em TI",
      "url": "https://rocha-consultoria.tech/",
      "image": "https://rocha-consultoria.tech/brand/og-banner.png",
      "logo": "https://rocha-consultoria.tech/brand/logo-horizontal.png",
      "description": "Consultoria em TI para pequenas e médias empresas: agentes de IA para atendimento, automação de processos, sites corporativos e sistemas sob medida.",
      "founder": { "@id": "https://rocha-consultoria.tech/#person" },
      "telephone": "+55-51-99242-9952",
      "email": "contato@rocha-consultoria.tech",
      "areaServed": [
        { "@type": "Country", "name": "Brasil" },
        { "@type": "State", "name": "Rio Grande do Sul" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Consultoria em TI e Desenvolvimento",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agentes de IA para Atendimento" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automação de Processos" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sites Corporativos" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistemas Completos sob Medida" } }
        ]
      }
    }
  ]
}
```
*(E manter o `FAQPage` gerado exatamente a partir do mesmo array `faqs` exibido em `FaqSection`, com todas as 6 perguntas e respostas idênticas.)*

---

## 5. Análise 4 — SEO On-Page, Palavras-Chave e Arquitetura de Conteúdo

Segundo a documentação do Google e os fundamentos de SEO, **conteúdo relevante alinhado à intenção de busca é o fator de ranqueamento #1**. Hoje o site sofre da limitação clássica de **landing page única (One-Page)**: tenta ranquear para 4 serviços distintos + perfil profissional + stack técnico em uma única URL.

### 5.1. Otimização de Headings (`<h1>`, `<h2>`, `<h3>`)
- **`<h1>` (`hero-section.html:10-12`):** *(✅ Concluído na Fase 0)*  
  Substituído de `"Atendimento ágil, presença digital, otimização de processos e software sob medida"` para:  
  `"Consultoria em TI: Agentes de IA, Automação e Sistemas sob Medida"`
- **Ajuste semântico no rodapé (`footer.html:28, 76`):** *(✅ Concluído na Fase 0)* `Navegação` e `Canais diretos` foram ajustados de `<h3>` órfãos para `<h2>`, mantendo as mesmas classes visuais (`h6 text-white fw-semibold`).
- **Reforço semântico nos `<h2>` das seções:** *(⏳ Oportunidade para Fase 3)* Reforçar termos buscados em subtítulos de seção (ex.: em `faq-section.html:9`, `"Perguntas frequentes sobre consultoria, agentes de IA e contratação"`).

### 5.2. Mapeamento de Palavras-Chave por Intenção de Busca

| Intenção | Cluster de Palavras-Chave (Exemplos) | Página Alvo Recomendada |
| --- | --- | --- |
| **Comercial / Serviço (Core)** | `consultoria em ti para pequenas empresas`, `agentes de ia para atendimento whatsapp`, `automação de processos empresariais`, `desenvolvimento de sistemas sob medida` | Home (`/`) + 4 páginas de serviço |
| **Tecnologia / Nicho Técnico** | `automação com n8n`, `desenvolvedor java spring boot freelancer`, `agente de ia com rag postgresql pgvector`, `integração keycloak sso` | Páginas de serviço + artigos técnicos |
| **Local (DDD 51 / RS)** | `consultoria em ti porto alegre`, `desenvolvedor de software porto alegre`, `automação de atendimento whatsapp rio grande do sul` | Home / Sobre + Google Perfil da Empresa |
| **Informacional (Topo de funil)** | `como funciona agente de ia no atendimento`, `n8n ou sistema sob medida quando usar`, `como evitar alucinação em chatbot de ia` | Blog / Guias (`/blog/...`) |

### 5.3. Evolução Recomendada: Arquitetura Hub & Spoke (Multi-Página)
Para competir no topo do Google contra agências e consultorias, o site deve evoluir de **1 página** para uma estrutura modular indexável (todas pré-renderizadas via SSG):

```text
/                                        (Hub principal — visão geral + CTAs)
├── /servicos/agentes-de-ia              (Landing dedicada: triagem, RAG com pgvector, limites da IA)
├── /servicos/automacao-de-processos     (Landing dedicada: n8n, webhooks, eliminação de planilhas)
├── /servicos/sistemas-sob-medida        (Landing dedicada: Java 25, Spring Boot, Angular, Keycloak)
├── /servicos/sites-corporativos         (Landing dedicada: velocidade, SEO, foco em conversão)
├── /sobre                               (Experiência +20 anos, atuação pública, foto, credenciais)
├── /cases                               (3 a 4 estudos de caso: cenário → arquitetura → resultado)
├── /blog                                (Artigos práticos com TL;DR, FAQ e dados reais)
└── /privacidade                         (Política de Privacidade / LGPD)
```

**5 pautas iniciais de blog de alto potencial:**
1. *"Agente de IA para WhatsApp em PMEs: como implantar com regras claras e sem respostas erradas"*
2. *"Automação de processos com n8n: 7 rotinas manuais que pequenas empresas podem eliminar hoje"*
3. *"Planilha vs. Sistema sob Medida: quando vale a pena investir em software próprio"*
4. *"RAG na prática com PostgreSQL e pgvector: como fazer a IA consultar documentos da empresa com segurança"*
5. *"Quanto custa e quanto tempo leva desenvolver um sistema sob medida para sua empresa?"*

---

## 6. Análise 5 — Core Web Vitals & Performance (Medição Real do Build)

Abaixo estão os tamanhos reais medidos no diretório `dist/personal-site/browser/` (atualizados após o build SSG da Fase 1) e em `public/`:

| Ativo Medido | Tamanho Real (Raw / Transferido) | Diagnóstico |
| --- | :---: | --- |
| `index.html` (SSG pré-renderizado) | **164 KB** | HTML estático completo gerado em tempo de build (`ng-server-context="ssg"`), pronto para crawlers sem JS. |
| `styles-6R74UQ2A.css` | **335,01 KB** (35,97 KB) | Inclui CSS completo do Bootstrap 5.3 + CSS completo do Bootstrap Icons (~1.900 ícones). |
| Bundle JS inicial (`chunk-TVD7HEXV.js` + `main-Y42F6PDG.js` + `polyfills`) | **297,94 KB** (84,88 KB) | Runtime Angular + hidratação (`withEventReplay`) + ng-bootstrap + Popper (`Initial total` com CSS: **632,95 KB** raw / **120,84 KB** transferidos). |
| Lazy chunk `home` (`chunk-ZBZ7L5RL.js`) | **77,62 KB** (17,50 KB) | Consolidado em um único chunk após remoção dos `@defer` na Fase 0. |
| `bootstrap-icons-*.woff2` / `.woff` | **131 KB** / **177 KB** | Fonte inteira carregada quando o site usa apenas **39 ícones** (`bi-*`). |
| `logo-horizontal.webp` / `-light.webp` | **72 KB** / **77 KB** | Imagens `800×209` / `800×214` px exibidas em `208×54` px (quase 4× maior que o necessário em pixels e ~10× mais pesada que um SVG/WebP redimensionado). |
| `public/icons/tech/*.svg` | **116 KB** total (`linux-tux.svg` 18K, `kubernetes.svg` 15K, `postgres.svg` 13K) | Faltam `loading="lazy"` nos `<img [src]="tech.iconUrl">` em `tech-stack-section.html` e minificação via SVGO. |
| Google Fonts (`Sora` + `JetBrains Mono`) | Requisição externa | Gera lookup DNS/TLS externo (`fonts.googleapis.com` / `fonts.gstatic.com`), impactando FCP/LCP. |

### Plano de Otimização para Garantir Core Web Vitals no Verde
*(Metas do Google: **LCP < 2,5s**, **INP < 200ms**, **CLS < 0,1**)*

1. **Importação modular do Bootstrap via SCSS (redução estimada de 60–75% do CSS):**
   - Em vez de importar `node_modules/bootstrap/dist/css/bootstrap.min.css` no `angular.json`, importar no `src/styles.scss` apenas `@import "bootstrap/scss/functions"`, `variables`, `maps`, `mixins`, `utilities`, `grid`, `containers`, `buttons`, `forms`, `accordion`, `modal`, `navbar`, `card` e `helpers`.
2. **Eliminar a fonte `bootstrap-icons` (economia de 131 KB de fonte + ~98 KB de CSS):**
   - Como o projeto utiliza exatamente **39 ícones** (`bi-whatsapp`, `bi-envelope`, `bi-robot`, etc.), substituí-los por um componente leve `<app-icon name="..." />` ou mapa de SVGs inline zera o download da fonte e evita FOIT/FOUT de ícones.
3. **Otimizar o logotipo da navbar e do footer:**
   - Redimensionar `logo-horizontal.webp` e `logo-horizontal-light.webp` para `416×108` px (2x Retina para `208×54` px) ou exportar como **SVG otimizado** (~5–10 KB), garantindo `width` e `height` proporcionais (ex.: `208×54` vs `800×209` = `54.34px`, diferença mínima, mas no `-light` `800×214` = `55.6px`).
4. **Self-hosting das fontes `Sora` e `JetBrains Mono`:**
   - Hospedar os arquivos `.woff2` (apenas subset `latin`) em `public/fonts/` com `font-display: swap` e `<link rel="preload" as="font" crossorigin>`, eliminando dependência de terceiros no caminho crítico.
5. **Adicionar `loading="lazy"` nos ícones da seção de tecnologias e otimizar SVGs com SVGO:**
   - Em `tech-stack-section.html:43-50, 61-68, 101-109`, adicionar `loading="lazy"` nas imagens abaixo da dobra e rodar `svgo` em `public/icons/tech/*.svg`.
6. **Simplificar dependências futuras (`ng-bootstrap`):**
   - O projeto hoje depende de `@ng-bootstrap/ng-bootstrap`, `@popperjs/core` e `@angular/localize/init` apenas para 3 componentes (`ngbAccordion`, `ngbCollapse`, `NgbModal`). Substituí-los por HTML nativo (`<details>`, `<dialog>`) + Angular Signals pode cortar ~40–60 KB do bundle JS inicial e melhorar ainda mais o **INP**.
7. **Atenção à legibilidade Mobile-First (`src/styles.scss:357-360`):**
   - O corpo do site usa `JetBrains Mono` em `0.875rem` (`14px`). Para estética técnica na landing page funciona bem, mas em futuras páginas de serviço e artigos de blog, considere usar `1rem` (`16px`) e uma fonte sans-serif neutra (ex.: `Inter` ou `Plus Jakarta Sans`) no texto corrido para reduzir fadiga de leitura e melhorar tempo de permanência (sinal comportamental positivo).

---

## 7. Análise 6 — E-E-A-T, Autoridade Off-Page e SEO Local

O Google avalia fortemente **Experience (Experiência prática), Expertise (Especialidade), Authoritativeness (Autoridade) e Trustworthiness (Confiabilidade)** — especialmente para serviços B2B e desenvolvimento de software/IA.

### 7.1. Checklist de E-E-A-T Acionável

| Pilar E-E-A-T | Lacuna Atual | Ação Recomendada |
| --- | --- | --- |
| **Experience (Experiência real)** | Há afirmação dos "+20 anos", mas não há provas visuais ou casos concretos. | Criar seção/página de **Estudos de Caso (Cases)** mostrando 3–4 entregas reais ou demonstrativas (Problema → Arquitetura → Resultado mensurável), mesmo com nomes de clientes anonimizados. |
| **Expertise (Especialidade)** | Falta biografia detalhada e vínculo com perfis técnicos públicos. | Criar página `/sobre` com **foto profissional real**, trajetória, áreas de domínio e links diretos para **GitHub** (`github.com/deevorak`) e **LinkedIn** (conectados via `sameAs`). |
| **Authoritativeness (Autoridade)** | Domínio novo/GitHub Pages sem histórico de backlinks externos. | Publicar artigos técnicos no LinkedIn, TabNews e Dev.to apontando para o site (ou com link contextual), contribuir em repositórios open-source e cadastrar perfil em diretórios sérios de consultoria/TI. |
| **Trustworthiness (Confiabilidade)** | Bom posicionamento transparente (PF sem CNPJ), porém faltam páginas legais e localização. | Adicionar **Política de Privacidade (LGPD)** e **Termos de Uso** no rodapé; informar cidade/estado base (ex.: Porto Alegre/RS — atendimento remoto em todo o Brasil). |

### 7.2. SEO Local: Oportunidade Rápida de Topo via Google Maps (Local Pack)
Mesmo atendendo todo o Brasil remotamente, o número `+55 51 99242-9952` indica atuação no Rio Grande do Sul. Buscas como `"consultoria em ti porto alegre"` ou `"automação whatsapp porto alegre"` têm **concorrência muito menor** do que buscas nacionais e exibem o **Local Pack (mapa com 3 resultados) acima dos links orgânicos**.

**Ação recomendada:**
1. Criar um **Google Perfil da Empresa (Google Business Profile)** na modalidade **Empresa de Área de Cobertura** (*Service-Area Business*), que permite ocultar o endereço residencial e definir cobertura regional (Porto Alegre, Região Metropolitana/RS) + atendimento online.
2. Categorias sugeridas: *Consultor de informática* (principal) e *Empresa de software* (secundária).
3. Cadastrar os 4 serviços principais no perfil, vincular ao domínio `https://rocha-consultoria.tech/` e solicitar avaliações genuínas de clientes e parceiros que já trabalharam com você.

---

## 8. Análise 7 — GEO (Generative Engine Optimization / AI Overviews)

Cada vez mais decisores de PMEs pesquisam diretamente no **Google AI Overviews**, **ChatGPT**, **Perplexity** e **Gemini** (*"quem contratar para criar agente de IA para atendimento no WhatsApp no Brasil?"*). Para que o site seja **citado como fonte**:

1. **HTML pré-renderizado + respostas completas no DOM:** Sem SSG e sem o FAQ inteiro no HTML, crawlers de IA extraem quase nenhum conteúdo útil.
2. **Estrutura extraível (Answer-First):** Em futuras páginas de serviço e blog, iniciar seções com um **resumo direto (TL;DR)**, usar **definições claras** (*"O que é um agente de IA com regras definidas?"*), **tabelas comparativas** (ex.: *Chatbot tradicional vs. Agente de IA com RAG*) e **FAQs de 4–6 perguntas** com respostas autocontidas.
3. **Datas de atualização visíveis (`dateModified`):** Exibir `"Atualizado em [mês/ano]"` nas páginas de serviço/artigos e refletir no JSON-LD (`WebPage` / `Article`).
4. **Arquivo opcional `/llms.txt`:** Disponibilizar um resumo estruturado em Markdown na raiz (`https://rocha-consultoria.tech/llms.txt`) listando serviços, diferenciais, stack e canais oficiais de contato.
5. **Consolidação de entidade (`sameAs`):** Garantir que nome (*Carlos Rocha Consultoria em TI*), e-mail, telefone e serviços sejam idênticos no site, GitHub, LinkedIn e Google Perfil da Empresa.

---

## 9. Roadmap Priorizado de Implementação

### Fase 0 — Correções Críticas Imediatas (Quick Wins — ✅ Concluída em 25/11/2026)
| Prioridade | Ação | Onde Alterado | Impacto | Esforço | Status |
| :---: | --- | --- | :---: | :---: | :---: |
| **P0** | Remover `@defer (on viewport; on idle)` das 5 seções da Home | `src/app/pages/home/home.html` e `home.scss` | Crítico | Baixo | ✅ Concluído |
| **P0** | Adicionar `[destroyOnHide]="false"` no `ngbAccordion` do FAQ | `src/app/pages/home/components/faq-section/faq-section.html` | Crítico | Baixo | ✅ Concluído |
| **P0** | Sincronizar todas as 6 perguntas/respostas do `FAQPage` JSON-LD com o `FaqSection` | `src/index.html` + `faq-section.ts` | Alto | Baixo | ✅ Concluído |
| **P0** | Ajustar `<title>` (59 chars), unificar `<meta name="description">` (159 chars) e remover `<meta name="keywords">` | `src/index.html` + `src/app/pages/home/home.ts` | Alto | Baixo | ✅ Concluído |
| **P0** | Corrigir `og:image` para URL absoluta HTTPS e adicionar `robots`, `og:url`, `og:site_name`, `og:image:alt` e Twitter Cards | `src/index.html` | Médio-Alto | Baixo | ✅ Concluído |
| **P0** | Corrigir `<h3>` órfãos no rodapé para `<h2>` e otimizar o `<h1>` da Home com palavras-chave comerciais | `footer.html` + `hero-section.html` | Alto | Baixo | ✅ Concluído |

**Registro de Execução e Validação — Fase 0 (25/11/2026):**
- **Build de produção (`CI=1 npm run build`):** concluído em `3,930s` sem erros (`Initial total: 597,54 kB` / `109,92 kB` transferidos; chunk `home`: `77,62 kB`).
- **Inspeção automatizada de `dist/personal-site/browser/index.html`:** `<title>` com `59` caracteres, `<meta name="description">` com `159` caracteres, ausência de `keywords`, presença de `robots`, `og:image` absoluto e `twitter:card`, e JSON-LD válido com todas as `6` perguntas do `FAQPage` idênticas ao `FaqSection`.

### Fase 1 — Infraestrutura, Domínio Próprio e SSG (Itens 1–4 concluídos no código em 25/11/2026)
| Prioridade | Ação | Onde Alterado / Configurado | Impacto | Esforço | Status |
| :---: | --- | --- | :---: | :---: | :---: |
| **P1** | Configurar domínio próprio `https://rocha-consultoria.tech/` e ajustar base/deploy | `public/CNAME`, `environment*.ts`, `site.webmanifest`, `package.json`, `index.html` *(pendente apontamento DNS)* | Crítico | Médio | ✅ Concluído (código) |
| **P1** | Habilitar Prerendering estático (SSG) do Angular 22 e remover `withHashLocation()` | `angular.json`, `app.config.ts`, `app.config.server.ts`, `app.routes.server.ts`, `main.server.ts`, `404.html` | Crítico | Médio | ✅ Concluído |
| **P1** | Criar `public/robots.txt`, `public/sitemap.xml` e `<link rel="canonical">` | `public/robots.txt`, `public/sitemap.xml`, `src/index.html` | Crítico | Baixo | ✅ Concluído |
| **P1** | Enriquecer JSON-LD com `@id`, `WebSite`, `WebPage`, `OfferCatalog`, `areaServed` e `sameAs` | `src/index.html` *(opcional: adicionar URL do LinkedIn em `sameAs`)* | Alto | Baixo | ✅ Concluído |
| **P1** | Cadastrar e validar site no **Google Search Console**, **Bing Webmaster Tools** e criar **Google Perfil da Empresa** | Ferramentas externas (após apontamento DNS e deploy) | Crítico | Baixo-Médio | ⏳ Pendente (ação externa) |

**Registro de Execução e Validação — Fase 1 (itens 1 a 4, 25/11/2026):**
- **Build SSG de produção (`CI=1 npm run build`):** concluído em `4,989s` com `Prerendered 1 static route.` (`Initial total: 632,95 kB` / `120,84 kB` transferidos; chunk `home`: `77,62 kB`).
- **Inspeção automatizada em `dist/personal-site/browser/`:** `index.html` (`164 KB`) pré-renderizado com `ng-server-context="ssg"`, `<base href="/">`, `<link rel="canonical" href="https://rocha-consultoria.tech/">`, `<h1>` e todas as **6 perguntas e respostas do FAQ** diretamente no HTML estático; JSON-LD válido com os 5 nós (`WebSite`, `WebPage`, `Person`, `ProfessionalService`, `FAQPage`) e `4` serviços em `hasOfferCatalog`; `CNAME` (`rocha-consultoria.tech`), `robots.txt`, `sitemap.xml` e `404.html` (`2,1 KB`, `noindex, nofollow`) presentes e íntegros.

### Fase 2 — Core Web Vitals & Experiência (Médio Prazo — 1 a 2 semanas)
| Prioridade | Ação | Onde Alterar | Impacto | Esforço |
| :---: | --- | --- | :---: | :---: |
| **P2** | Importação modular do Bootstrap via SCSS (reduzir `styles.css` de 328 KB para < 90 KB) | `angular.json`, `src/styles.scss` | Alto | Médio |
| **P2** | Substituir `bootstrap-icons` font (131 KB) por SVGs inline dos 39 ícones usados | Componentes HTML + remoção do CSS da fonte | Alto | Médio |
| **P2** | Redimensionar logos WebP para `416×108` px (ou SVG), rodar SVGO e adicionar `loading="lazy"` nos ícones de tech | `public/brand/`, `tech-stack-section.html` | Médio | Baixo |
| **P2** | Self-hosting de `Sora` e `JetBrains Mono` (`.woff2` latin + `preload` + `font-display: swap`) | `public/fonts/`, `src/index.html`, `src/styles.scss` | Médio-Alto | Baixo |
| **P2** | Instalar analytics privado/leve (Cloudflare Web Analytics ou GA4) rastreando cliques em WhatsApp e E-mail | `src/index.html` / `ContactService` | Alto (medição) | Baixo |

### Fase 3 — Expansão de Conteúdo, E-E-A-T e Autoridade (Contínuo — 1 a 3 meses)
| Prioridade | Ação | Entrega | Impacto | Esforço |
| :---: | --- | --- | :---: | :---: |
| **P3** | Criar páginas dedicadas para os 4 serviços (`/servicos/...`) + `/sobre` (com foto) + `/privacidade` | Novas rotas Angular pré-renderizadas | Crítico | Alto |
| **P3** | Publicar 3–4 Estudos de Caso (`/cases`) com arquitetura e resultados concretos | Seção/página `/cases` | Alto | Médio |
| **P3** | Iniciar `/blog` técnico focado em dores reais de PMEs e soluções com IA/n8n/Java (1–2 artigos/mês) | Rota `/blog` + `sitemap.xml` | Crítico (longo prazo) | Alto |
| **P3** | Construção contínua de backlinks e menções (LinkedIn, GitHub, TabNews, Dev.to, avaliações no Google) | Off-page | Crítico | Contínuo |

---

## 10. Ferramentas de Validação Pós-Implementação

Após aplicar as melhorias das Fases 0, 1 e 2, valide obrigatoriamente em:
1. **Google Search Console → Inspeção de URL:** confirmar que o HTML renderizado traz todo o conteúdo da página, `canonical` correto e `sitemap.xml` processado sem erros.
2. **Teste de Pesquisa Aprimorada (Rich Results Test):** validar `FAQPage`, `Person` e `ProfessionalService` sem avisos ou divergências.
3. **PageSpeed Insights / Lighthouse (Mobile e Desktop):** confirmar **LCP < 2,5s**, **INP < 200ms**, **CLS < 0,1** e pontuação de **SEO = 100**.
4. **Sharing Debugger (Facebook/LinkedIn/WhatsApp preview):** confirmar que `og:image` carrega via HTTPS com o banner `1200×630`.
5. **View Source (`curl -s https://rocha-consultoria.tech/ | grep -i "<h1"`):** garantir que o `<h1>`, os cards de solução e todas as 6 perguntas e respostas do FAQ já chegam no HTML estático antes de qualquer JavaScript rodar.
