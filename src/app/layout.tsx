import type { Metadata } from "next";
import { Syne, Lato } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Larissa Muller Medeiros | Advogada — Braço do Norte, SC",
  description:
    "Advogada com atuação em Direito da Família, Sucessório e Trabalhista. Atendimento humanizado em Braço do Norte, Santa Catarina.",
  keywords: [
    "advogada",
    "Braço do Norte",
    "direito da família",
    "direito sucessório",
    "direito trabalhista",
    "advocacia",
    "Santa Catarina",
  ],
  openGraph: {
    title: "Larissa Muller Medeiros | Advogada",
    description:
      "Advocacia com dedicação e sensibilidade. Direito da Família, Sucessório e Trabalhista em Braço do Norte, SC.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${syne.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
