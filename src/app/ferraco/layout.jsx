import Head from "next/head";

export default function FerracoLayout({ children }) {
    return (
        <>
            <Head>
                <title>To com Ferraço</title>
                <link rel="icon" href="/favicon-ferraco.ico" sizes="any"/>
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