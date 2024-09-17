'use client'
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  authors: {name: "Marcos Henrique Marcarini Junior"}
} */


export default function RootLayout({ children }) {
  const [title, setTitle] = useState("Entre na Campanha")
  const router = useRouter()
  console.log(router.pathname)


  useEffect(() => {
    handleRouter()

  }, [router.pathname])


  const handleRouter = () => {
    switch (router.pathname) {
      case "/peter" || "/peter/moldura":
        setTitle("To com Peter")
        return (
          <html lang="pt-br">
            <head>
              <title>
                {title}
              </title>
              <link
                rel="icon"
                href="/favicon-peter.ico"
                sizes="any"
              />
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
            </head>
            <body
              className={`${inter.className}`}
              style={{ overflow: 'hidden' }}>
              {children}
            </body>
          </html>
        )
        break
      case "/dorlei" || "/dorlei/moldura":
        setTitle("To com Dorlei")
        return (
          <html lang="pt-br">
            <head>
              <title>
                {title}
              </title>
              <link
                rel="icon"
                href="/favicon-dorlei.ico"
                sizes="any"
              />
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
            </head>
            <body
              className={`${inter.className}`}
              style={{
                overflow: 'hidden',
                background: 'linear-gradient(to bottom,transparent,var(--f-azul-claro))var(--f-azul-escuro)',
              }}>
              {children}
            </body>
          </html>
        )
        break
      case "/ferraco" || "ferraco/moldura":
        setTitle("To com Ferraco")
        return (
          <html lang="pt-br">
            <head>
              <title>
                {title}
              </title>
              <link
                rel="icon"
                href="/favicon-ferraco.ico"
                sizes="any"
              />

              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://ferraco11.com.br" />
              <meta property="og:title" content="To com Ferraço" />
              <meta property="og:description" content="Apoie Theodorico Ferraço para as eleições de 2024 em Cachoeiro de Itapemirim. Entre na campanha!" />
              <meta property="og:image" content="https://www.entrenacampanha.com.br/favicon-ferraco.ico" />

            </head>
            <body
              className={`${inter.className}`}
              style={{
                overflow: 'hidden',
                background: 'linear-gradient(to bottom,transparent,var(--f-azul-claro))var(--f-azul-escuro)',
              }}>
              {children}
            </body>
          </html>
        )
        break
      default:
        return (
          <html lang="pt-br">
            <head>
              <title>
                {title}
              </title>
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
            </head>
            <body className={`${inter.className}`}>
              {children}
            </body>
          </html>
        )
        break
    }
  }

  return (
    handleRouter()
  )

  /* return (
    <html lang="pt-br">
      <head>
        <title>Entre na campanha</title>

      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  ); */
}
