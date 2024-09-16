import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: {name: "Marcos Henrique Marcarini Junior"}
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Entre na campanha</title>
        <meta property="og:title" content="Título do Site Principal" />
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
