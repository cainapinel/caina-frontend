import { NextResponse, type NextRequest } from "next/server";

// Acesso à /demo por link com token fixo: /demo?k=<token> grava um cookie e
// redireciona para a URL limpa. A página confere o cookie no servidor.
export function middleware(req: NextRequest) {
  const esperado = process.env.DEMO_ACCESS_TOKEN;
  const k = req.nextUrl.searchParams.get("k");
  if (!k || !esperado || !iguais(k, esperado)) return NextResponse.next();

  const limpa = req.nextUrl.clone();
  limpa.searchParams.delete("k");
  const res = NextResponse.redirect(limpa);
  res.cookies.set("demo_k", k, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/demo",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

function iguais(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export const config = { matcher: ["/demo", "/demo/:path*"] };
