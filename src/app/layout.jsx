'use client'
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [title, setTitle] = useState("Entre na Campanha")
  const [ogTitle, setOgTitle] = useState("Entre na Campanha")
  const [ogDescription, setOgDescription] = useState("Participe da nossa campanha!")
  const [ogImage, setOgImage] = useState("/default-image.jpg")
  const router = useRouter()

  useEffect(() => {
    switch (router.pathname) {
      case "/peter":
      case "/peter/moldura":
        setTitle("To com Peter")
        setOgTitle("To com Peter")
        setOgDescription("Apoie Peter em sua jornada!")
        setOgImage("/images/peter-campanha.jpg")
        break
      case "/dorlei":
      case "/dorlei/moldura":
        setTitle("To com Dorlei")
        setOgTitle("To com Dorlei")
        setOgDescription("Apoie Dorlei para as eleições de 2024!")
        setOgImage("/images/dorlei-campanha.jpg")
        break
      case "/ferraco":
      case "/ferraco/moldura":
        setTitle("To com Ferraço")
        setOgTitle("To com Ferraço")
        setOgDescription("Apoie Theodorico Ferraço para as eleições de 2024!")
        setOgImage("/images/ferraco-campanha.jpg")
        break
      default:
        setTitle("Entre na Campanha")
        setOgTitle("Entre na Campanha")
        setOgDescription("Participe da nossa campanha!")
        setOgImage("/default-image.jpg")
    }
  }, [router.pathname])

  return (
    <html lang="pt-br">
      <head>
        <title>{title}</title>
        <meta name="authors" content="Marcos Henrique Marcarini Junior" />

        {/* Meta tags Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://entrenacampanha.com.br/${router.pathname}`} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://entrenacampanha.com.br/${router.pathname}`} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={ogDescription} />
        <meta property="twitter:image" content={ogImage} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}