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
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
