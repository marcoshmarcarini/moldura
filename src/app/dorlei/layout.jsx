export default function DorleiLayout({ children }) {
    return (
        <>
            <head>
                <title>To com Dorlei</title>
                <link rel="icon" href="/favicon-dorlei.ico" sizes="any"/>
            </head>
            <body style={{
                overflow: 'hidden',
                background: 'linear-gradient(to bottom,transparent,var(--f-azul-claro))var(--f-azul-escuro)',
            }}>
                {children}
            </body>
        </>
    )
}