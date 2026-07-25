# Handoff: IS7 Marketing Digital — Site Principal

## Overview
Site institucional completo da **IS7 Marketing Digital** (is7mkt.com.br), construído como protótipo de alta fidelidade em HTML + React + Babel. Inclui landing page principal (`IS7 Site.html`) e página de portfólio completo (`IS7 Portfolio.html`).

O objetivo é publicar esse site em produção via Claude Code, mantendo a fidelidade visual e comportamental do protótipo.

---

## Sobre os arquivos de design
Os arquivos neste pacote são **referências de design em HTML** — protótipos funcionais de alta fidelidade com visual, tipografia, interações e dados finais. A tarefa é **publicar esses arquivos diretamente** (já são HTML+JS estáticos, prontos para deploy) ou adaptá-los ao ambiente da hospedagem escolhida.

## Fidelidade
**Alta fidelidade (hifi)** — cores, tipografia, espaçamento e interações estão finalizadas. O protótipo já funciona como site real: navegação, lightbox de portfólio, carrossel de avaliações, tema claro/escuro, chatbot, formulário de contato.

---

## Estrutura de arquivos

> **Nota:** Os arquivos `.jsx` de `site_v2/` estão na pasta raiz do projeto (não incluídos neste zip para evitar conflitos). Ao fazer o deploy, copie a pasta `site_v2/` completa do projeto original junto com os arquivos abaixo.

```
IS7 Site.html              → Entry point do site principal (renomear para index.html)
IS7 Portfolio.html         → Página de portfólio completo (renomear para portfolio.html)
site_v2/
  site.css                 → Toda a CSS global (dark/light theme, tokens)
  cases.js                 → Dados dos projetos do portfólio
  SiteCore.jsx             → Primitivos: Icon, Logo, Eyebrow, Reveal, useCountUp
  SiteNav.jsx              → Header fixo + mobile menu + theme toggle
  SiteHero.jsx             → Hero (variações A/B), partículas, Stars, TrustRow, CTAs
  Sections1.jsx            → Stats + Serviços + Antes/Depois + Entregáveis
  Sections2.jsx            → Portfólio cards (browser chrome + hover-scroll) + Reviews carousel
  Sections3.jsx            → Sobre + FAQ
  Sections4.jsx            → Clientes strip + Instagram feed + Contato + Footer + WhatsApp FAB
  PortfolioLightbox.jsx    → Lightbox de projeto (screenshot scrollável + entregas)
  Blog.jsx                 → Feed Instagram (Behold API)
  ChatBot.jsx              → ChatBot flutuante
  SiteContact.jsx          → Seção de contato com formulário
assets/
  is7-logo-grad.png        → Logo principal (gradiente)
  is7-logo-roxa.png        → Logo roxo (usada no header)
  favicon.png              → Favicon
  portfolio/               → Screenshots dos projetos do portfólio
    guilherme-foto.jpg     → Foto do Guilherme (seção Sobre)
    curadoria-site.webp
    tribbo-street.webp
    chaveiro.webp
    rc-soft-service.webp     # site da RC Soft Service
    lua-de-assis.webp        # site do Luã de Assis
    barbearia-velozo.webp
    mk-vinhos.webp
    angelo-car.webp          # fora do portfólio atual
    degustare.webp           # fora do portfólio atual
  lead_site/               → Screenshots adicionais de portfólio
tweaks-panel.jsx           → Painel de tweaks (desenvolvimento)
lojas_virtuais/
  image-slot.js            → Web component drag-and-drop de imagem
curadoria-by-nanda/
  index.html               → Site da Curadoria by Nanda (iframe no lightbox)
```

---

## Páginas / Views

### 1. Landing Page (`IS7 Site.html`)
**URL**: `/` ou `index.html`

Seções em scroll (de cima para baixo):

| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Header | `SiteNav` | Nav fixo, logo, links, theme toggle, botão CTA |
| Hero | `SiteHero` | Headline hero + CTAs + trust row + partículas animadas |
| Clientes | `ClientsStrip` | Marquee horizontal com nomes de clientes |
| Stats | `Stats` | 4 números animados com count-up |
| Serviços | `Services` | 4 cards de serviço |
| Antes/Depois | `BeforeAfter` | Comparativo visual |
| Entregáveis | `Deliverables` | Lista de entregáveis |
| Portfólio | `Portfolio` | Grid 6 projetos + lightbox + hover-scroll |
| Avaliações | `Reviews` | Carousel 4 cards Google Reviews |
| Sobre | `About` | Foto Guilherme + bio + highlights |
| Instagram | `Instagram` | Feed Behold API |
| FAQ | `Faq` | Accordion 6 perguntas |
| Contato | `Contact` | Formulário + info de contato |
| Footer | `Footer` | Links + redes |
| WhatsApp FAB | `WhatsAppFab` | Botão flutuante WhatsApp |
| ChatBot | `ChatBot` | ChatBot flutuante |

### 2. Portfólio (`IS7 Portfolio.html`)
**URL**: `/portfolio`

- Header próprio com link de volta ao site
- Hero da página de portfólio
- Stats strip: +80 projetos, 15+ estados, 5.0 Google
- Grid completo (12 projetos) com browser chrome + hover-scroll
- Lightbox ao clicar (iframe ou screenshot scrollável)
- CTA de fechamento

---

## Design Tokens (extraídos de `site_v2/site.css`)

### Cores — Dark (padrão)
```css
--bg:            #070A14
--bg-2:          #0A0F1E
--surface:       #0E1426
--surface-2:     #131A30
--fg:            #F4F6FB
--fg-muted:      #98A1BC
--fg-dim:        #646C8A
--accent:        #9145E6   /* roxo */
--accent-2:      #3B6CFF   /* azul */
--accent-bright: #B57BFF
--grad:          linear-gradient(118deg, #9145E6 0%, #5B5BF5 52%, #3B6CFF 100%)
--wa:            #25D366   /* WhatsApp */
--star:          #FBBF24
```

### Cores — Light
```css
--bg:        #F7F8FF
--bg-2:      #EEF0FB
--surface:   #FFFFFF
--surface-2: #F2F3FC
--fg:        #0E1426
--fg-muted:  #3D4466
--accent:    #7B2FD4
--accent-bright: #9145E6
```

### Tipografia
```css
--serif:  'Montserrat', system-ui, sans-serif   /* títulos */
--sans:   'Inter', system-ui, sans-serif         /* corpo */
--mono:   'JetBrains Mono', monospace            /* eyebrows, labels */
```

Google Fonts carregadas: `Montserrat` (600–900), `Inter` (400–700), `JetBrains Mono` (400–700), `Poppins` (600–900), `Space Grotesk` (500–700).

### Espaçamento
- `.section`: `padding: 104px 0`
- `.section-tight`: `padding: 72px 0`
- `.wrap`: `max-width: 1200px`, `padding: 0 24px`

### Border radius
- Cards: `border-radius: 18px` (`.card`)
- Buttons: `border-radius: 12px` (`.btn`)
- Tags: `border-radius: 9999px`

---

## Interações e comportamento

### Tema claro/escuro
- Toggle via botão na navbar (ícone sol/lua)
- Salvo em `localStorage` como `is7-theme`
- `data-theme="dark|light"` no `<html>`
- Anti-flash: script inline no `<head>` aplica tema antes do React montar

### Portfólio — cards com hover-scroll
- Container fixo (h: 200px desktop, 230px portfólio page)
- Imagem com `position: absolute; height: auto`
- Hover: `transform: translateY(calc(-100% + 200px))` com `transition: 4s linear`
- Só ativa em `@media (hover: hover)` — não quebra mobile
- Overlay "Ver projeto" aparece no hover

### Lightbox de portfólio
- Abre ao clicar em qualquer card
- Fecha com ESC ou clique fora
- Se `url` preenchida: iframe scrollável com site ao vivo
- Se apenas `img`: screenshot scrollável
- Browser chrome: traffic lights + barra de URL + botão "Quero assim" (WhatsApp)
- Barra inferior: nome + tag + "Falar com a IS7"

### Reviews carousel
- 8 avaliações, 4 por página (2 páginas)
- Auto-avança a cada 7s via `setInterval`
- Dots de navegação + botão seta
- Google G badge nos avatares
- Responsivo: 4 → 2 → 1 colunas

### Scroll reveal
- Componente `Reveal` usa `IntersectionObserver`
- Animação: `opacity + translateY` quando entra na viewport
- Desativado quando `body` não tem classe `js-anim`
- Capture-safe: estado em React, não CSS puro

### WhatsApp
- Todas as URLs de CTA usam `wa.me/5541987430349`
- Mensagem customizada por contexto (hero, portfólio, contato)

---

## Deploy

O site é **100% estático** (HTML + CSS + JS). Não requer servidor, banco de dados ou build step.

### Opções de hospedagem recomendadas:
1. **Vercel** — arrastar a pasta do projeto para vercel.com (zero config)
2. **Netlify** — drop da pasta no app.netlify.com
3. **Hostinger/cPanel** — upload dos arquivos via File Manager para `public_html/`
4. **GitHub Pages** — push para branch `gh-pages`

### Arquivos obrigatórios para produção:
- `IS7 Site.html` → renomear para `index.html`
- `IS7 Portfolio.html` → renomear para `portfolio.html` ou `portfolio/index.html`
- `site_v2/` (pasta completa)
- `assets/` (pasta completa)
- `lojas_virtuais/image-slot.js`
- `tweaks-panel.jsx`
- `curadoria-by-nanda/` (para iframe do lightbox)

### Dependências externas (CDN — já no HTML):
- React 18.3.1 + ReactDOM
- Babel Standalone 7.29.0
- Lucide 0.462.0 (ícones)
- Google Fonts (Montserrat, Inter, JetBrains Mono, Poppins, Space Grotesk)

---

## Portfólio — `src/site_v2/cases.js`

Fonte única dos projetos: alimenta a home (6 primeiros) e a página `/portfolio`
(todos + filtro). Para adicionar um projeto, basta um objeto novo no array —
o contador do filtro e o do hero se ajustam sozinhos.

| Campo | Para que serve |
|---|---|
| `name` / `meta` / `domain` | Identificação; o domínio aparece na barra de "navegador" do card |
| `tag` | Rótulo visível no card ("Site", "Loja virtual") |
| `cat` | Chave do filtro: `"site"` ou `"loja"` |
| `img` | Screenshot da **página inteira** em webp (o card rola no hover) |
| `summary` | Uma linha: o problema que o site resolve |
| `delivered` | Lista do que foi entregue — aparece no rodapé do lightbox |
| `url` | Iframe ao vivo no lightbox. **Vazio de propósito**: o portfólio roda com screenshot, para não depender do site de cliente estar no ar |

> Regra de conteúdo: `delivered` só lista o que dá para conferir no próprio
> screenshot. Nada de métrica de resultado que a IS7 não possa comprovar.

---

## Contatos IS7 (hardcoded no código)

```
WhatsApp: +55 (41) 98743-0349
Email: suporte@is7mkt.com.br
Site: is7mkt.com.br
Google Reviews: https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA
CNPJ: 50.201.864/0001-40
```

---

## Checklist pré-deploy

- [ ] Renomear `IS7 Site.html` → `index.html`
- [ ] Renomear `IS7 Portfolio.html` → `portfolio.html`
- [ ] Preencher URLs dos sites em `cases.js` (campo `url`)
- [ ] Configurar domínio `is7mkt.com.br`
- [ ] Testar tema claro/escuro
- [ ] Testar lightbox do portfólio
- [ ] Testar formulário de contato
- [ ] Testar em mobile (iOS Safari + Android Chrome)

<!-- deploy: conteudo 5 anos / +100 projetos / portfolio atualizado -->
