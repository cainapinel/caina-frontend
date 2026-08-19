# caina.pinel.com.br

Site pessoal de [Cainã Pinel](https://caina.pinel.com.br) — landing page de
carreira/projetos e o **Vestígio**, ferramenta de análise forense de vestígios
de IA generativa em textos.

Next.js 15 (App Router, TypeScript, Tailwind v4), hospedado na Vercel. O
backend ([caina-backend](https://github.com/cainapinel/caina-backend)) é Django
+ DRF na Railway.

## Rotas

| Rota | O que é |
|---|---|
| `/` | Landing: hero, projetos, carreira, formação, stack |
| `/vestigio` | Ferramenta: colar texto ou enviar .docx/.pdf/.txt/.md |

## Rodando localmente

```powershell
npm install
Copy-Item .env.example .env.local   # aponta para http://127.0.0.1:8000
npm run dev
```

Suba o backend antes (ver README do caina-backend). `NEXT_PUBLIC_API_URL` é
inlined em build time — reinicie o dev server após alterar.

## Detalhe técnico que importa

As posições dos achados vêm do backend em **offsets de codepoint** (índices
Python). O `HighlightedText` indexa o texto via `Array.from(text)` — nunca
`.charAt`/`.slice` (UTF-16), que deslocariam os highlights após qualquer emoji.

## Conteúdo

Todo o conteúdo editável mora em `src/content/` (`bio.ts`, `projects.ts`,
`howitworks.ts`) — para atualizar a landing, edite ali.

## Licença

MIT — Cainã Pinel
