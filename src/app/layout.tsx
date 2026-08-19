import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caina.pinel.com.br"),
  title: {
    default: "Cainã Pinel",
    template: "%s — Cainã Pinel",
  },
  description:
    "Desenvolvedor Python/Django e TypeScript. Projetos, carreira e o Vestígio — " +
    "ferramenta de análise forense de vestígios de IA generativa em textos.",
  openGraph: {
    title: "Cainã Pinel",
    description:
      "Projetos, carreira e o Vestígio — análise forense de vestígios de IA em textos.",
    url: "https://caina.pinel.com.br",
    siteName: "Cainã Pinel",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
