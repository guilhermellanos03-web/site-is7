# 🚀 Guia IS7 — Rodar o site no seu computador (Local + Git + Vercel)

> Este é o manual completo do projeto do site da **IS7 Marketing Digital**.
> Serve pra você (ou qualquer pessoa) baixar o projeto, rodar no próprio computador,
> editar, salvar no Git e publicar na Vercel. Escrito passo a passo, sem pular etapa.

---

## PARTE 1 — O que é este projeto (contexto da IS7)

### A marca
- **Nome:** IS7 Marketing Digital
- **Site:** https://is7mkt.com.br
- **Cidade:** Curitiba/PR (atende todo o Brasil)
- **WhatsApp:** (41) 98743-0349 → `5541987430349`
- **E-mail:** guilherme@is7mkt.com.br
- **CNPJ:** 50.201.864/0001-40 (IS7 Mídias Digitais)
- **Fundador/Gestor:** Guilherme Llanos
- **Números atuais:** 5.0 no Google (28 avaliações) · +100 projetos · 5 anos de mercado · sites com PageSpeed 90–100
- **Google (avaliações):** https://maps.app.goo.gl/EuyiNkJ55Y8NJL7EA

### O que a IS7 vende (e o "Método IS7")
Assessoria de marketing para **empresas de serviço**. A oferta é apresentada como o **Método IS7** (7 etapas):
1. Diagnóstico gratuito
2. Posicionamento no Google (Perfil da Empresa / SEO local)
3. Site que converte (site profissional ou landing page)
4. Reputação 5 estrelas (avaliações no Google)
5. Tráfego pago (Google Ads)
6. Autoridade e conteúdo (SEO/blog)
7. Acompanhamento contínuo

### O que este site tem (páginas)
| Página | Endereço | Arquivo-fonte |
|---|---|---|
| Home | `/` | `src/index.html` + `src/site_v2/*` |
| Portfólio | `/portfolio` | `src/portfolio.html` |
| Landing Pages (produto) | `/landing-pages` | `landing-pages.html` |
| Modelo da nova home (estudo, `noindex`) | `/modelo-home` | `modelo-home.html` |
| Blog (3 artigos) | `/blog/...` | `blog/*.html` |
| **Propostas** (outro domínio) | `proposta.is7mkt.com.br` | `proposta-index.html`, `IS7 Proposta Guincho.html`, `IS7 Proposta Chaveiro.html` |

### Como o projeto é organizado (pastas principais)
```
site-is7/
├── src/                     ← FONTE do site principal (é aqui que você edita a home)
│   ├── index.html           ← página inicial
│   ├── portfolio.html       ← página de portfólio
│   └── site_v2/             ← componentes (JSX), CSS e dados
│       ├── site.css         ← TODAS as cores/estilos (tema claro/escuro)
│       ├── cases.js          ← lista de projetos do portfólio
│       ├── SiteHero.jsx      ← hero (topo)
│       ├── Sections1..4.jsx  ← seções da home
│       └── ...
├── landing-pages.html       ← página de produto (HTML puro, rápido)
├── modelo-home.html         ← modelo da nova home (Método IS7)
├── blog/                    ← artigos do blog (HTML puro)
├── proposta-index.html      ← proposta principal (R$ 500 / 4 meses)
├── IS7 Proposta *.html      ← propostas de guincho e chaveiro
├── assets/                  ← imagens (logo, favicon, portfólio)
├── tools/                   ← scripts de build (não precisa editar)
│   ├── build.js             ← compila src/ → dist/
│   ├── prerender.js         ← "pré-desenha" as páginas (site mais rápido)
│   ├── build-proposta.js    ← monta as propostas → dist-proposta/
│   └── proposta-pdf.cjs     ← gera PDF da proposta
├── prerendered/             ← snapshots usados no deploy (gerados por script)
├── package.json             ← comandos do projeto (scripts npm)
├── vercel.json              ← config da Vercel (URLs limpas + cache)
└── GUIA.md                  ← este arquivo
```

### Tecnologia (resumo)
- Site em **HTML + React + Babel** (sem framework pesado). Você edita `.jsx` legível em `src/` e um **build** gera a versão rápida em `dist/`.
- **Sem banco de dados, sem servidor** — é 100% estático.
- **Deploy:** o site vive na **Vercel** (e o principal também na Hostinger). Todo push no Git dispara o deploy automático.

---

## PARTE 2 — Instalar os programas (só uma vez)

Baixe e instale, nesta ordem:

1. **Node.js** (versão LTS) → https://nodejs.org
   Isso instala o `node` e o `npm` (o gerenciador de pacotes).
2. **Git** → https://git-scm.com/downloads
3. **Visual Studio Code** (editor de código) → https://code.visualstudio.com
4. Uma conta no **GitHub** → https://github.com (você já tem: `guilhermellanos03-web`)
5. Uma conta na **Vercel** → https://vercel.com (entre com o GitHub — já está conectada ao projeto)

**Como saber se instalou certo:** abra o Terminal (no VS Code: menu *Terminal → New Terminal*) e digite:
```bash
node -v      # deve mostrar algo como v20.x ou v22.x
npm -v       # deve mostrar um número
git --version
```

---

## PARTE 3 — Baixar o projeto e rodar no seu computador

### Passo 1 — Escolher uma pasta e clonar o repositório
No Terminal, vá até onde quer guardar o projeto (ex.: a Área de Trabalho) e clone:
```bash
cd ~/Desktop
git clone https://github.com/guilhermellanos03-web/site-is7.git
cd site-is7
```
Agora você tem a pasta `site-is7` com tudo dentro. Abra ela no VS Code:
```bash
code .
```

### Passo 2 — Instalar as dependências (só na 1ª vez, ou quando mudar)
```bash
npm install
```
> Isso baixa as ferramentas de build (Babel, etc.). Pode demorar 1–2 minutos.

### Passo 3 — Gerar o site (build)
```bash
npm run compile
```
Isso cria a pasta **`dist/`** com o site pronto (home, portfólio, landing pages, blog).
> `compile` é a versão rápida. Se quiser a versão "pré-desenhada" (mais otimizada, igual à produção), use `npm run build` — só que ela precisa baixar um navegador (Chromium) na primeira vez.

### Passo 4 — Abrir no navegador
Rode um servidor local apontando pra pasta `dist/`:
```bash
npx serve dist
```
Vai aparecer um endereço, geralmente **http://localhost:3000**. Abra no navegador.

Páginas pra testar:
- Home → `http://localhost:3000/`
- Portfólio → `http://localhost:3000/portfolio`
- Landing Pages → `http://localhost:3000/landing-pages`
- Modelo da nova home → `http://localhost:3000/modelo-home`
- Blog → `http://localhost:3000/blog/quanto-custa-um-site-profissional`

> Se algum link "limpo" não abrir, tente com `.html` no fim (ex.: `/landing-pages.html`). Na Vercel, a URL limpa funciona sozinha.

### Passo 5 — Ver as PROPOSTAS localmente (opcional)
As propostas (proposta.is7mkt.com.br) têm um build próprio:
```bash
npm run build-proposta
npx serve dist-proposta
```
Abra `http://localhost:3000/` (proposta principal) — ou `/guincho`, `/chaveiro`.

---

## PARTE 4 — Editar o site

**Regra de ouro:** você edita a **fonte** e depois **roda o build de novo** pra ver o resultado.

| O que você quer mudar | Arquivo pra editar | Comando depois |
|---|---|---|
| Textos/seções da home | `src/site_v2/*.jsx` | `npm run compile` |
| Cores / tema | `src/site_v2/site.css` | `npm run compile` |
| Projetos do portfólio | `src/site_v2/cases.js` | `npm run compile` |
| Landing page de produto | `landing-pages.html` | (é HTML puro, só recarregar) |
| Modelo da nova home | `modelo-home.html` | (HTML puro) |
| Artigos do blog | `blog/*.html` | (HTML puro) |
| Proposta principal (R$ 500) | `proposta-index.html` | `npm run build-proposta` |
| Imagens | pasta `assets/` | — |

**Fluxo de edição:**
1. Edite o arquivo no VS Code e salve (Ctrl/Cmd + S).
2. Rode o build (`npm run compile` para a home).
3. Atualize a página no navegador (F5).

> **Importante (páginas pré-renderizadas):** se você editar a HOME em `src/`, para a versão de produção ficar 100% otimizada rode também:
> ```bash
> npm run build && npm run prerender:save
> ```
> Isso atualiza a pasta `prerendered/`. Depois é só commitar junto (a Vercel usa esse snapshot).

---

## PARTE 5 — Salvar e versionar no Git

Sempre trabalhe assim: cria um "ramo" (branch), salva (commit), envia (push).

```bash
# 1. Crie um branch para a sua alteração
git checkout -b minha-alteracao

# 2. Veja o que mudou
git status

# 3. Adicione as mudanças e salve com uma mensagem
git add .
git commit -m "Descreve o que você mudou aqui"

# 4. Envie para o GitHub
git push -u origin minha-alteracao
```

Depois é só abrir um **Pull Request** no GitHub (ele mostra um botão "Compare & pull request") e, quando estiver ok, clicar em **Merge** para publicar na `master`.

> **Atalho (sem branch):** se for algo simples e você quer publicar direto:
> ```bash
> git checkout master
> git pull
> git add . && git commit -m "ajuste rápido" && git push
> ```
> Push na `master` = publica em produção. Use com cuidado.

---

## PARTE 6 — Publicar na Vercel

### O jeito automático (já configurado — recomendado)
O repositório **já está conectado à Vercel**. Você não precisa configurar nada:
- **Push em um branch / Pull Request** → a Vercel gera um link de **preview** (pra testar antes).
- **Merge na `master`** → a Vercel publica em **produção** (is7mkt.com.br e proposta.is7mkt.com.br).

Ou seja: **git push já é o deploy.** É só esperar 1–2 minutos e atualizar o site (Ctrl+Shift+R para limpar o cache).

### O jeito manual pela Vercel CLI (opcional)
Se quiser publicar direto do seu computador, sem Git:
```bash
npm i -g vercel      # instala a ferramenta (só 1ª vez)
vercel login         # entra na sua conta
npm run build        # gera o dist/
vercel               # cria um preview
vercel --prod        # publica em produção
```

### Se um dia precisar reconectar/reconfigurar na Vercel
No painel da Vercel (vercel.com), no projeto **site-is7**:
- **Framework Preset:** Other
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Para as propostas, o projeto **is7-proposta** usa **Build Command:** `npm run build-proposta` e **Output Directory:** `dist-proposta`.

---

## PARTE 7 — Colinha de comandos (cheat sheet)

```bash
# Baixar o projeto
git clone https://github.com/guilhermellanos03-web/site-is7.git
cd site-is7
npm install

# Rodar o site principal local
npm run compile
npx serve dist

# Rodar as propostas local
npm run build-proposta
npx serve dist-proposta

# Versão de produção (com pré-render) da home
npm run build && npm run prerender:save

# Gerar PDF de uma proposta (ex.: a principal)
npm run build-proposta
node tools/proposta-pdf.cjs dist-proposta/index.html ~/Desktop/Proposta-IS7.pdf 860

# Salvar e publicar
git checkout -b minha-alteracao
git add . && git commit -m "o que mudei"
git push -u origin minha-alteracao
# depois: abrir Pull Request no GitHub e dar Merge
```

---

## PARTE 8 — Problemas comuns

| Problema | Solução |
|---|---|
| `command not found: npm` | O Node não instalou. Reinstale de nodejs.org e reabra o terminal. |
| `npx serve` pede pra instalar | Digite `y` e Enter. É normal na primeira vez. |
| A página abre sem estilo/imagens | Você abriu o arquivo direto (file://). Use sempre `npx serve dist` e o `http://localhost:...`. |
| Editei mas não mudou nada | Faltou rodar o build de novo (`npm run compile`) e dar F5. Para a home, use Ctrl+Shift+R. |
| URL limpa (`/landing-pages`) não abre local | Adicione `.html` no fim. Em produção (Vercel) funciona sozinha. |
| `npm run build` falha por causa do Chromium | Use `npm run compile` (não precisa de Chromium). O pré-render é opcional no local. |
| Deploy na Vercel não atualizou | Espere 1–2 min e limpe o cache (Ctrl+Shift+R). Se persistir, veja se o push foi pra branch certa. |

---

## Resumo em 1 minuto
1. `git clone` → `cd site-is7` → `npm install`
2. `npm run compile` → `npx serve dist` → abrir `http://localhost:3000`
3. Editar em `src/` → rebuild → F5
4. `git add . && git commit -m "..." && git push`
5. Merge na `master` → Vercel publica sozinha ✅

Qualquer dúvida, este projeto é 100% estático e reversível: nada quebra a produção enquanto você não faz merge na `master`.
