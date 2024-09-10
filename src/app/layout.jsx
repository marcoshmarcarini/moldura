import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crie sua Moldura",
  description: "Aplicação para criação de moldura para fotos de perfil.",
  authors: {name: "Marcos Henrique Marcarini Junior"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>To com o Peter</title>
        <link rel="icon" href="/favicon-peter.ico" />
        </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
