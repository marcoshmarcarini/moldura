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
  const router = location.pathname
  console.log(router)


  useEffect(() => {


    handleRouter()

  }, [router])


  const handleRouter = () => {
    switch (router) {
      case "/peter" || "/peter/moldura":
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
        return (
          <html lang="pt-br">
            <head>
              <title>
                To com Ferra Couto
              </title>
              <link
                rel="icon"
                href="/favicon-ferraco.ico"
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
      default:
        return (
          <html lang="pt-br">
            <head>
              <title>
                Entre na campanha
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
