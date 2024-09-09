export default function FerracoLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>To com Ferraço</title>
                <link rel="icon" href="/favicon-ferraco.ico" sizes="any"/>
            </head>
            <body style={{
                overflow: 'hidden',
                background: 'linear-gradient(to bottom,transparent,var(--f-azul-claro))var(--f-azul-escuro)',
            }}>
                {children}
            </body>
        </html>
    )
}