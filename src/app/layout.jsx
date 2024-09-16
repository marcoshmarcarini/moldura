import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  authors: {name: "Marcos Henrique Marcarini Junior"}
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>Entre na campanha</title>
        <meta property="og:title" content="Título do Site Principal" />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
