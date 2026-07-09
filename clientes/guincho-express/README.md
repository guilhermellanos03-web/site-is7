# Guincho Express — Uberlândia MG

Site de guincho no padrão IS7. Vite + React + TypeScript + Tailwind.

## Dados do cliente

Tudo centralizado em `src/site.ts`: nome, telefone, endereço, nota do Google,
serviços, bairros atendidos e depoimentos.

**Pendências para trocar depois:**

- `cnpj`: placeholder `00.000.000/0000-00`
- `depoimentos`: 3 placeholders marcados com comentário `PLACEHOLDER` em
  `src/site.ts` (a nota 5.0 e o total de 16 avaliações já são os reais)
- `linkGoogle`: hoje aponta pra busca no Maps; trocar pela URL do perfil do
  Google Business quando tiver

## Rodar local

```bash
npm install
npm run dev
```

## Build para Netlify Drop

```bash
npm run build
```

Arrastar a pasta `dist/` em https://app.netlify.com/drop
