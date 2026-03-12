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
  title: "Larissa Müller Medeiros | Advogada e Mediadora — Atendimento Online",
  description:
    "Advogada com atuação em Direito da Família, Sucessório e Mediação. Atendimento online para todo o Brasil com dedicação e sensibilidade.",
  keywords: [
    "advogada online",
    "advogada",
    "direito da família",
    "direito sucessório",
    "mediação",
    "conciliação",
    "advocacia online",
    "mediadora",
    "atendimento online",
    "consultoria jurídica",
    "todo o Brasil",
  ],
  openGraph: {
    title: "Larissa Müller Medeiros | Advogada e Mediadora",
    description:
      "Advocacia com dedicação e sensibilidade. Direito da Família, Sucessório e Mediação. Atendimento online para todo o Brasil.",
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
