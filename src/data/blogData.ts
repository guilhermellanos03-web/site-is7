export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Google Meu Negócio" | "Marketing Local" | "Cases e Resultados";
  date: string;
  readTime: string;
  coverImage?: string;
}

export const categoryColors: Record<string, string> = {
  "Google Meu Negócio": "bg-brand-purple",
  "Marketing Local": "bg-brand-blue",
  "Cases e Resultados": "bg-emerald-600",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-erros-que-impedem-sua-empresa-de-aparecer-no-google",
    title: "5 erros que impedem sua empresa de aparecer no Google",
    excerpt: "Descubra os erros mais comuns que fazem sua empresa ficar invisível nas buscas do Google e como corrigi-los rapidamente.",
    category: "Google Meu Negócio",
    date: "14/04/2026",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    content: `
## 1. Perfil do Google Meu Negócio incompleto

Um dos erros mais graves é deixar o perfil do Google Meu Negócio com informações incompletas. Muitos empresários criam o perfil mas não preenchem todos os campos disponíveis.

**O que fazer:** Preencha absolutamente todos os campos — horário de funcionamento, endereço completo, telefone, site, fotos do estabelecimento e descrição detalhada do seu negócio.

## 2. Não responder avaliações dos clientes

As avaliações são um dos fatores mais importantes para o algoritmo do Google. Ignorar as avaliações, sejam positivas ou negativas, prejudica seu posicionamento.

**O que fazer:** Responda todas as avaliações em até 24 horas. Agradeça as positivas e resolva profissionalmente as negativas.

## 3. Informações inconsistentes na internet

Se o nome, endereço e telefone da sua empresa estão diferentes em cada lugar da internet, o Google perde confiança na sua empresa.

**O que fazer:** Padronize suas informações em todos os diretórios, redes sociais e no seu próprio site.

## 4. Não publicar conteúdo regularmente

O Google valoriza empresas que mantêm seus perfis ativos. Se você criou o perfil e nunca mais publicou nada, está perdendo posições.

**O que fazer:** Publique fotos, ofertas e novidades pelo menos uma vez por semana no Google Meu Negócio.

## 5. Site sem otimização para dispositivos móveis

Mais de 60% das buscas locais são feitas pelo celular. Se seu site não funciona bem no mobile, o Google vai priorizar concorrentes que tenham sites responsivos.

**O que fazer:** Invista em um site profissional, rápido e 100% responsivo para mobile.
    `,
  },
  {
    slug: "por-que-seu-concorrente-aparece-no-google-e-voce-nao",
    title: "Por que seu concorrente aparece no Google e você não?",
    excerpt: "Entenda os fatores que fazem seu concorrente dominar as buscas locais enquanto sua empresa permanece invisível.",
    category: "Marketing Local",
    date: "10/04/2026",
    readTime: "4 min",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    content: `
## A verdade sobre o posicionamento local

Se você já pesquisou pelo seu serviço no Google e viu seu concorrente aparecendo antes de você, saiba que isso não é coincidência. Existe um método por trás do posicionamento.

## Os 3 pilares do posicionamento local

### Relevância
O Google precisa entender **exatamente** o que sua empresa faz. Quanto mais detalhado e específico for seu perfil, mais relevante você será para buscas relacionadas.

### Distância
A proximidade do buscador com o seu negócio é um fator automático. Porém, empresas bem otimizadas conseguem aparecer mesmo para buscas mais distantes.

### Destaque
Este é o fator onde você pode se diferenciar. O destaque leva em conta:
- Quantidade e qualidade das avaliações
- Presença online consistente
- Site profissional e otimizado
- Conteúdo atualizado regularmente

## O que seu concorrente provavelmente está fazendo

1. **Investindo em Google Ads** para aparecer nas primeiras posições pagas
2. **Mantendo o Google Meu Negócio atualizado** com fotos e posts semanais
3. **Respondendo todas as avaliações** rapidamente
4. **Tendo um site profissional** com SEO otimizado

## Como virar o jogo

A boa notícia é que posicionamento não é algo permanente. Com a estratégia certa e consistência, você pode ultrapassar seus concorrentes em questão de semanas.

O método IS7 foi criado exatamente para isso: colocar empresas locais nas primeiras posições do Google de forma sustentável.
    `,
  },
  {
    slug: "como-empresa-local-saiu-do-zero-e-recebe-30-ligacoes-por-dia",
    title: "Como uma empresa local saiu do zero e hoje recebe 30 ligações por dia",
    excerpt: "Conheça o caso real de uma empresa que transformou seu negócio com posicionamento digital estratégico.",
    category: "Cases e Resultados",
    date: "07/04/2026",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    content: `
## O cenário inicial

Uma empresa de serviços 24h no Paraná nos procurou com um problema comum: **zero presença digital**. Não tinha site, não tinha Google Meu Negócio, e dependia exclusivamente de indicações para conseguir clientes.

## O diagnóstico

Ao analisar o mercado local, identificamos uma oportunidade enorme:
- Mais de 1.200 buscas mensais pelo serviço na região
- Concorrentes com perfis desatualizados e sites amadores
- Alta demanda por atendimento imediato

## A estratégia aplicada

### Fase 1: Fundação (Semana 1-2)
- Criação de site profissional focado em conversão
- Configuração completa do Google Meu Negócio
- Padronização de informações em diretórios online

### Fase 2: Otimização (Semana 3-4)
- SEO local avançado no site
- Estratégia de avaliações com clientes existentes
- Publicações semanais no Google Meu Negócio

### Fase 3: Aceleração (Mês 2+)
- Campanha de Google Ads segmentada por região
- Otimização contínua baseada em dados
- Expansão para cidades vizinhas

## Os resultados

Após 90 dias de trabalho:
- **De 0 para 30+ ligações por dia** vindas do Google
- **Posição #1** no Google Meu Negócio para o serviço na região
- **ROI de 800%** no investimento em Google Ads
- **25 avaliações 5 estrelas** em 3 meses

## A lição

Não importa se sua empresa é nova ou não tem presença digital. Com o método certo e consistência, é possível dominar as buscas locais do seu segmento em poucos meses.
    `,
  },
  {
    slug: "como-conseguir-mais-avaliacoes-no-google",
    title: "Como conseguir mais avaliações no Google: o guia definitivo",
    excerpt: "Avaliações são o combustível do seu posicionamento local. Aprenda estratégias práticas para aumentar sua nota e quantidade de reviews.",
    category: "Google Meu Negócio",
    date: "03/04/2026",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    content: `
## Por que avaliações são tão importantes?

O Google usa as avaliações como um dos principais sinais de confiança para posicionar empresas locais. Empresas com mais avaliações e notas mais altas aparecem nas primeiras posições — e atraem mais clientes.

## O momento certo para pedir avaliação

O timing é tudo. Peça a avaliação **logo após a entrega do serviço**, quando o cliente ainda está satisfeito e o entusiasmo está fresco.

- Ao entregar um produto pessoalmente
- Logo após finalizar um atendimento
- 24 horas após a conclusão de um serviço

## Como pedir de forma natural

Muitos empresários travam na hora de pedir. Use frases simples:

**"Ficou satisfeito com o serviço? Se puder deixar uma avaliação no Google, ajuda muito a gente a atender mais pessoas como você."**

Envie o link direto para a página de avaliações — facilite ao máximo para o cliente.

## Estratégias que funcionam

### WhatsApp após o atendimento
Envie uma mensagem personalizada 1 hora depois do atendimento com o link de avaliação.

### QR Code no estabelecimento
Crie um QR Code que direciona direto para avaliações e coloque em locais visíveis.

### Cartão de visita digital
Inclua o link de avaliação no seu cartão de visita digital ou na assinatura de e-mail.

## O que NÃO fazer

- **Nunca compre avaliações falsas** — o Google detecta e pode suspender sua conta
- **Não peça só para clientes selecionados** — isso gera viés e pode ser detectado
- **Não ignore avaliações negativas** — responda sempre com profissionalismo

## Respondendo avaliações negativas

Uma resposta bem feita a uma avaliação negativa pode ser mais poderosa do que 5 positivas. Mostre que você se importa e que resolve os problemas.
    `,
  },
  {
    slug: "seo-local-para-pequenos-negocios",
    title: "SEO local para pequenos negócios: como aparecer no Google Maps",
    excerpt: "Guia prático de SEO local para donos de pequenas empresas que querem aparecer nas primeiras posições do Google Maps sem gastar fortunas.",
    category: "Google Meu Negócio",
    date: "28/03/2026",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    content: `
## O que é SEO local e por que importa para você

SEO local é o conjunto de técnicas para fazer sua empresa aparecer nas buscas do Google quando alguém na sua cidade procura por um serviço que você oferece. É diferente do SEO tradicional — aqui, o foco é na **intenção de compra local**.

## Os três pilares do SEO local

### 1. Google Meu Negócio otimizado
É a base de tudo. Sem um perfil completo e ativo no Google Meu Negócio, você não aparece no Google Maps nem no painel de resultados locais.

Itens obrigatórios:
- Nome, endereço e telefone (NAP) corretos
- Categoria principal e categorias secundárias
- Horário de funcionamento atualizado
- Pelo menos 10 fotos de qualidade
- Descrição com palavras-chave naturais

### 2. Site otimizado para buscas locais
Seu site precisa reforçar as informações do Google Meu Negócio.

- Use sua cidade no título das páginas
- Inclua o endereço no rodapé de todas as páginas
- Crie uma página específica para cada cidade que atende
- Velocidade de carregamento é fundamental

### 3. Citações e consistência online
O Google verifica se suas informações de contato são consistentes em toda a internet.

- Cadastre-se nos principais diretórios: Yelp, Foursquare, Bing Places
- Mantenha o mesmo nome, endereço e telefone em todos os lugares
- Redes sociais devem ter as mesmas informações

## Quanto tempo leva para funcionar?

Com uma estratégia bem aplicada, você começa a ver resultados em **4 a 8 semanas**. Posicionamento nas primeiras posições geralmente acontece entre 3 e 6 meses.

O segredo é consistência — empresas que mantêm seus perfis ativos crescem de forma sustentável.
    `,
  },
  {
    slug: "landing-page-que-converte-elementos-essenciais",
    title: "Landing page que converte: 7 elementos que não podem faltar",
    excerpt: "Uma landing page bonita não é suficiente. Conheça os 7 elementos que transformam visitantes em clientes pagantes.",
    category: "Marketing Local",
    date: "21/03/2026",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    content: `
## Por que a maioria das landing pages não converte

Muitas empresas investem em tráfego mas perdem clientes na própria página. O problema quase sempre está nos fundamentos — não no design.

## Os 7 elementos essenciais

### 1. Headline clara e direta
O visitante tem 3 segundos para entender o que você oferece. Sua headline deve responder: **"O que você faz e para quem?"**

Exemplo ruim: "Bem-vindo à nossa empresa"
Exemplo bom: "Site profissional para sua empresa aparecer no Google em 7 dias"

### 2. Proposta de valor única
O que te diferencia dos concorrentes? Seja específico. Evite clichês como "qualidade e comprometimento".

### 3. Prova social
Avaliações, depoimentos e números concretos eliminam a desconfiança do visitante.
- "Mais de 200 empresas atendidas"
- Fotos reais de clientes satisfeitos
- Print de avaliações do Google

### 4. CTA (chamada para ação) estratégica
Um botão claro, visível e convincente. Use verbos de ação e urgência:
- "Quero meu diagnóstico grátis"
- "Falar com especialista agora"

### 5. Velocidade de carregamento
Cada segundo a mais de carregamento reduz a conversão em 7%. Site lento = dinheiro perdido.

### 6. Responsividade mobile
Mais de 70% dos acessos vêm pelo celular. Se sua página quebra no mobile, você está perdendo a maioria dos clientes.

### 7. Formulário ou WhatsApp visível
Facilite ao máximo o contato. O botão do WhatsApp flutuante pode aumentar as conversões em até 40%.

## Testando sua landing page

Use o Google Analytics para monitorar a taxa de conversão. Uma boa landing page converte entre 3% e 8% dos visitantes.
    `,
  },
  {
    slug: "google-ads-para-empresas-locais-como-nao-desperdicar-dinheiro",
    title: "Google Ads para empresas locais: como não desperdiçar dinheiro",
    excerpt: "Muitas empresas jogam dinheiro fora no Google Ads por erros simples. Aprenda a criar campanhas que realmente trazem clientes.",
    category: "Marketing Local",
    date: "14/03/2026",
    readTime: "6 min",
    coverImage: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
    content: `
## O problema com o Google Ads para empresas locais

Google Ads funciona — mas somente quando configurado corretamente. A maioria das pequenas empresas perde dinheiro nos primeiros meses por falta de configuração adequada.

## Os erros mais comuns

### Segmentação geográfica errada
Anunciar para o Brasil inteiro quando você atende apenas Curitiba é dinheiro desperdiçado. Configure sempre a segmentação para sua área de atuação real.

### Palavras-chave amplas demais
Usar "marketing" como palavra-chave vai trazer cliques de pessoas procurando emprego em marketing, cursos e muito mais — nada relacionado ao seu serviço.

**Use palavras-chave específicas:**
- "agência de marketing digital em Curitiba"
- "criar site profissional Curitiba"
- "SEO para pequenas empresas"

### Não usar palavras-chave negativas
Adicione palavras negativas para filtrar buscas irrelevantes:
- "grátis", "gratuito", "curso", "emprego", "vagas"

## Como estruturar uma campanha eficiente

### 1. Defina seu objetivo principal
Ligações? Formulários? Visitas à loja? Cada objetivo tem uma estrutura diferente de campanha.

### 2. Use extensões de anúncio
- Extensão de chamada: adiciona seu telefone direto no anúncio
- Extensão de local: mostra seu endereço
- Extensão de links: direciona para páginas específicas

### 3. Monitore e otimize semanalmente
Google Ads exige atenção constante. Pare os anúncios com baixo desempenho e aumente o orçamento dos que funcionam.

## Quanto investir?

Para empresas locais, recomendamos começar com **R$ 30 a R$ 50 por dia**. Com essa verba, já é possível gerar resultados mensuráveis em 30 dias.

O ROI médio dos nossos clientes no Google Ads é de **400% a 800%** — ou seja, para cada R$ 1 investido, o retorno é de R$ 4 a R$ 8 em novos negócios.
    `,
  },
  {
    slug: "case-barbearia-triplicou-clientes-com-marketing-digital",
    title: "Case: barbearia que triplicou os clientes com presença digital",
    excerpt: "Uma barbearia tradicional usou estratégias simples de marketing digital e viu seus agendamentos triplicarem em 60 dias.",
    category: "Cases e Resultados",
    date: "07/03/2026",
    readTime: "5 min",
    coverImage: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
    content: `
## O desafio

A Barbearia Velozo atende em Curitiba há mais de 8 anos. Clientela fiel, serviço de qualidade, mas crescimento estagnado. O dono dependia exclusivamente de indicações e não tinha nenhuma presença digital estruturada.

**A meta:** dobrar os agendamentos mensais em 90 dias.

## O diagnóstico inicial

Ao analisar a situação, encontramos:
- Google Meu Negócio criado mas nunca atualizado
- Sem site profissional
- Apenas 3 avaliações no Google
- Concorrentes da região com 50+ avaliações

## A estratégia executada

### Semana 1-2: Fundação digital
- Otimização completa do Google Meu Negócio
- Fotos profissionais do espaço e dos serviços
- Criação do site com agendamento online integrado

### Semana 3-4: Avaliações e prova social
- Campanha de WhatsApp para clientes antigos solicitando avaliações
- **Resultado: 28 novas avaliações 5 estrelas em 3 semanas**

### Mês 2: Tráfego e conversão
- Campanha de Google Ads segmentada para bairros próximos
- Posts semanais no Google Meu Negócio com ofertas e fotos
- Integração do WhatsApp Business para agendamentos

## Os resultados após 60 dias

- **+187% de visualizações** no Google Meu Negócio
- **De 3 para 31 avaliações** com média 4.9 estrelas
- **Agendamentos triplicados** — de 80 para 240 por mês
- **Posição #2** no Google Maps para "barbearia" no bairro

## O que fez a diferença

Não foi uma única ação — foi a **consistência** de todas as frentes trabalhadas juntas. Google Meu Negócio otimizado + site profissional + avaliações + anúncios = crescimento real e sustentável.

Esse é o método IS7.
    `,
  },
];
