import Head from "next/head";

export default function FerracoLayout({ children }) {
    return (
        <>
            <Head>
                <title>To com Ferraço</title>
                <link rel="icon" href="/favicon-ferraco.ico" sizes="any"/>
                <meta property="og:title" content="To com Ferraço" />
                <meta property="og:description" content="Apoio ao Ferraço nas eleições." />
                <meta property="og:image" content="/favicon-ferraco.ico" />
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