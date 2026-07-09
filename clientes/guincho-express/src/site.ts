// Dados do cliente. Tudo que muda de um cliente pra outro fica aqui.

export const site = {
  nome: "Guincho Express",
  cidade: "Uberlândia",
  uf: "MG",
  telefone: "5534991867783",
  telefoneDisplay: "(34) 99186-7783",
  endereco: "Av. Peru, Pres. Roosevelt, Uberlândia - MG, 38401-156",
  cnpj: "00.000.000/0000-00", // placeholder, trocar pelo CNPJ real
  nota: "5.0",
  totalAvaliacoes: 16,
  // Sem URL do perfil do Google ainda, este link busca a empresa no Maps
  linkGoogle:
    "https://www.google.com/maps/search/?api=1&query=Guincho+Express+Uberl%C3%A2ndia",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Peru%2C%20Presidente%20Roosevelt%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038401-156&z=14&output=embed",
};

export const waLink = (msg: string) =>
  `https://wa.me/${site.telefone}?text=${encodeURIComponent(msg)}`;

export const waPadrao = waLink(
  "Olá! Preciso de guincho em Uberlândia. Pode me atender?"
);

export const telLink = `tel:+${site.telefone}`;

export const servicos = [
  {
    icone: "car",
    titulo: "Guincho Leve",
    desc: "Reboque de carros e SUVs com todo o cuidado, do ponto de retirada até onde você precisar.",
  },
  {
    icone: "truck",
    titulo: "Reboque sob Plataforma",
    desc: "Seu veículo vai embarcado na plataforma, sem arrasto e sem risco de dano na suspensão ou no câmbio.",
  },
  {
    icone: "bike",
    titulo: "Guincho de Motos",
    desc: "Transporte de motos com amarração adequada para não riscar nem danificar sua moto no trajeto.",
  },
  {
    icone: "fuel",
    titulo: "Pane Seca",
    desc: "Acabou o combustível no meio do caminho? Levamos gasolina até você para seguir viagem.",
  },
  {
    icone: "battery",
    titulo: "Auxílio de Bateria",
    desc: "Bateria descarregou? Fazemos a chupeta no local e seu carro volta a funcionar na hora.",
  },
];

export const diferenciais = [
  {
    icone: "clock",
    titulo: "Atendimento 24 horas",
    desc: "Madrugada, feriado ou fim de semana. A qualquer hora, é só chamar.",
  },
  {
    icone: "zap",
    titulo: "Chegada Rápida",
    desc: "Saímos assim que você confirma o atendimento. Sem enrolação.",
  },
  {
    icone: "star",
    titulo: "Nota 5.0 no Google",
    desc: "Avaliação máxima dos clientes que já usaram nosso serviço.",
  },
  {
    icone: "shield",
    titulo: "Transporte Seguro",
    desc: "Plataforma e amarração adequadas para cada tipo de veículo.",
  },
  {
    icone: "wallet",
    titulo: "Preço Justo",
    desc: "Você sabe o valor antes de fechar. Sem surpresa no final.",
  },
  {
    icone: "pin",
    titulo: "Uberlândia e Região",
    desc: "Cobertura completa na cidade e nas rodovias da região.",
  },
];

export const passos = [
  {
    titulo: "Chame no WhatsApp ou Ligue",
    desc: `Mande mensagem ou ligue para ${site.telefoneDisplay}.`,
  },
  {
    titulo: "Informe Local e Destino",
    desc: "Diga onde o veículo está e para onde precisa levar.",
  },
  {
    titulo: "Guincho a Caminho",
    desc: "Saímos imediatamente para te atender.",
  },
];

export const cidades = [
  "Centro",
  "Pres. Roosevelt",
  "Santa Mônica",
  "Umuarama",
  "Tibery",
  "Planalto",
  "Luizote de Freitas",
  "Jardim Karaíba",
  "Granja Marileusa",
  "Araguari",
  "Monte Alegre de Minas",
  "Tupaciguara",
  "Indianópolis",
  "Prata",
];

// PLACEHOLDER: trocar pelos depoimentos reais do Google do cliente.
// A nota (5.0) e o total (16) acima já são os reais.
export const depoimentos = [
  {
    nome: "Cliente Google",
    tempo: "há 2 meses",
    texto:
      "Atendimento rápido e muito profissional. Chegou no horário combinado e transportou meu carro com todo cuidado. Recomendo.",
  },
  {
    nome: "Cliente Google",
    tempo: "há 4 meses",
    texto:
      "Precisei de madrugada e fui atendido na hora. Preço justo e serviço de qualidade. Salvou minha viagem.",
  },
  {
    nome: "Cliente Google",
    tempo: "há 6 meses",
    texto:
      "Excelente serviço. Educado, prestativo e cuidadoso com o veículo. Com certeza chamo de novo se precisar.",
  },
];
