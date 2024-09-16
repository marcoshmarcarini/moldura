import Head from "next/head"

export default function DorleiLayout({ children }) {
    return (
        <>
            <Head>
                <title>To com Dorlei</title>
                <link rel="icon" href="/favicon-dorlei.ico" sizes="any"/>
            </Head>
            <body style={{
                overflow: 'hidden',
                background: 'linear-gradient(to bottom,transparent,var(--f-azul-claro))var(--f-azul-escuro)',
            }}>
                {children}
            </body>
        </>
    )
}