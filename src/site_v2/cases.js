// IS7 — dados do portfolio (JS puro, carregado antes dos scripts Babel)
//
// Campos:
//   name/meta/domain — identificacao do projeto (domain aparece na barra do "navegador")
//   tag              — rotulo visivel no card
//   cat              — chave do filtro: "site" | "loja"
//   img              — screenshot de pagina inteira (webp)
//   summary          — uma linha: o que o site precisa resolver pro cliente
//   delivered        — o que foi entregue. So o que da pra conferir no proprio print:
//                      nada de metrica de resultado que a IS7 nao possa comprovar.
//   url              — iframe ao vivo no lightbox. Vazio de proposito: o portfolio
//                      roda com screenshot, pra nao depender de site de cliente no ar.
//
// A ordem importa: a home mostra os 6 primeiros (Sections2.jsx).
window.IS7_CASES = [
  {
    name: "Chaveiro Assistência 24h",
    meta: "Chaveiro 24h · Recife",
    tag: "Site",
    cat: "site",
    pages: 1,
    img: "assets/portfolio/chaveiro.webp",
    domain: "chaveiroassistencia24hs.com.br",
    url: "",
    summary: "Emergência não espera: quem perdeu a chave precisa ligar em segundos.",
    delivered: [
      "Botões de ligar e WhatsApp fixos na tela",
      "Serviços separados por automotivo, residencial e comercial",
      "Bloco de emergência 24h em destaque",
      "Área de atendimento por bairro (SEO local)",
      "Avaliações do Google na página",
    ],
  },
  {
    name: "MK Distribuidora de Vinhos",
    meta: "Vinhos & adega · Curitiba",
    tag: "Loja virtual",
    cat: "loja",
    pages: 1,
    img: "assets/portfolio/mk-vinhos.webp",
    domain: "mkdistribuidoravinhos.com.br",
    url: "",
    summary: "Adega que precisava vender sem pagar mensalidade de plataforma.",
    delivered: [
      "Catálogo com preço e carrinho",
      "Quiz “encontre seu vinho” em 3 perguntas",
      "Navegação por tipo de uva",
      "Fechamento do pedido no WhatsApp",
      "Identidade visual própria da marca",
    ],
  },
  {
    name: "Tribbo Street",
    meta: "Estética automotiva · São José dos Pinhais",
    tag: "Site",
    cat: "site",
    pages: 2,
    img: "assets/portfolio/tribbo-street.webp",
    domain: "tribbostreet.com.br",
    url: "",
    summary: "Serviço premium que precisava parecer premium antes do orçamento.",
    delivered: [
      "Agendamento pelo WhatsApp em cada serviço",
      "Vitrine de PPF, insulfilm, vitrificação e polimento",
      "Galeria de trabalhos executados",
      "Bloco de localização com mapa",
      "Visual escuro alinhado à marca",
    ],
  },
  {
    name: "RC Soft Service",
    meta: "Manutenção predial · Curitiba",
    tag: "Site",
    cat: "site",
    pages: 1,
    img: "assets/portfolio/rc-soft-service.webp",
    domain: "rcsoftservice.com.br",
    url: "",
    summary: "Empresa B2B que perdia obra por não ter onde mostrar credibilidade.",
    delivered: [
      "Formulário de solicitação de orçamento",
      "Serviços divididos por especialidade",
      "Passo a passo de como o trabalho é executado",
      "Depoimentos de clientes e FAQ",
      "WhatsApp e telefone em destaque",
    ],
  },
  {
    name: "Curadoria by Nanda",
    meta: "Moda feminina · Curitiba",
    tag: "Loja virtual",
    cat: "loja",
    pages: 1,
    img: "assets/portfolio/curadoria-site.webp",
    domain: "curadoriabynandarocha.com.br",
    url: "",
    summary: "Curadoria de moda que vendia só pelo Instagram e precisava de vitrine.",
    delivered: [
      "Catálogo com sacola de compras",
      "Captação para o grupo VIP",
      "Aviso de frete grátis e parcelamento no topo",
      "Entrega própria (bag delivery) explicada",
      "Tipografia e paleta sob medida para a marca",
    ],
  },
  {
    name: "Luã de Assis",
    meta: "Advocacia tributária · Curitiba",
    tag: "Site",
    cat: "site",
    pages: 1,
    img: "assets/portfolio/lua-de-assis.webp",
    domain: "luadeassis.adv.br",
    url: "",
    summary: "Advogado tributarista que precisava passar autoridade já na primeira tela.",
    delivered: [
      "Áreas de atuação organizadas por tese",
      "Seção de formação e credenciais",
      "Consulta pelo WhatsApp e “como chegar”",
      "Padrão visual sóbrio, dentro do permitido pela OAB",
    ],
  },
  {
    name: "Barbearia Velozo",
    meta: "Barbearia · Curitiba",
    tag: "Site",
    cat: "site",
    pages: 1,
    img: "assets/portfolio/barbearia-velozo.webp",
    domain: "barbeariavelozo.com.br",
    url: "",
    summary: "Barbearia de bairro que dependia de agendamento no direct.",
    delivered: [
      "Agendamento pelo WhatsApp por tipo de serviço",
      "Pacotes de serviço com destaque para o mais pedido",
      "Galeria de cortes recentes",
      "Endereço, mapa e horário de funcionamento",
      "Avaliações do Google na página",
    ],
  },
  {
    name: "Nutri Rafaela",
    meta: "Nutrição · Curitiba",
    tag: "Site",
    cat: "site",
    pages: 2,
    img: "assets/lead_site/portfolio-nutri.webp",
    domain: "nutrirafaela.com.br",
    url: "",
    summary: "Nutricionista atendendo online e presencial, sem canal próprio de agenda.",
    delivered: [
      "Agendamento de consulta pelo WhatsApp",
      "Serviços separados por objetivo do paciente",
      "Depoimentos de pacientes",
      "Aviso de disponibilidade da semana",
    ],
  },
];
