'use client'
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"
import { usePathname } from "next/navigation"


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const router = usePathname()

  useEffect(() => {
    handleRouter()
  }, [router])

  const handleRouter = () => {
    switch (router) {
      case "/ferraco":
        return (
          <html lang="pt-br">
            <head>
              <title>
                To com Ferraço
              </title>
              <link
                rel="icon"
                href="/favicon-ferraco.ico"
                sizes="any"
              />
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
              <meta property="og:title" content={`To com Ferraço`} />
              <meta property="og:description" content={`Apoie a campanha`} />
              <meta property="og:image" content={`https://www.entrenacampanha.com.br/ferraco.png`} />
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
      case "/peter":
        return (
          <html lang="pt-br">
            <head>
              <title>
                To com Peter
              </title>
              <link
                rel="icon"
                href="/favicon-peter.ico"
                sizes="any"
              />
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
              <meta property="og:title" content={`To com Peter`} />
              <meta property="og:description" content={`Apoie a campanha`} />
            </head>
            <body
              className={`${inter.className}`}
              style={{ overflow: 'hidden' }}>
              {children}
            </body>
          </html>
        )
        break
      case "/dorlei":
        return (
          <html lang="pt-br">
            <head>
              <title>
                To com Dorlei
              </title>
              <link
                rel="icon"
                href="/favicon-dorlei.ico"
                sizes="any"
              />
              <meta name="authors" content="Marcos Henrique Marcarini Junior" />
              <meta property="og:title" content={`To com Dorlei`} />
              <meta property="og:description" content={`Apoie a campanha`} />
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
                Entre na Campanha
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
