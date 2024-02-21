import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
/**
 * Global components
 */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: "index",
  title: "MASP",
  description: "Museu de Arte de São Paulo",
  authors: { name: 'Ryan Eloy', url: 'https://www.linkedin.com/in/ryan-eloy-5906b91a5/' },
  keywords: [
    "MASP",
    "Museu de Arte de São Paulo",
    "Arte",
    "Museu",
    "Exposições",
    "Acervo",
    "Cultura",
    "História da Arte",
    "Modernismo Brasileiro",
    "Pintura"
  ],
  twitter: {
    site: 'https://www.masp.org.br',
    title: 'MASP',
    description: 'Museu de Arte de São Paulo',
    card: 'summary',
    creator: '@maspbr',
    // images: ['https://assets.masp.org.br/images/img_01_masp_preto_branco.jpg'],
  },
  openGraph: {
    title: 'MASP',
    description: 'Museu de Arte de São Paulo',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.masp.org.br',
    siteName: 'MASP',
    // images: ["https://assets.masp.org.br/images/img_01_masp_preto_branco.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
