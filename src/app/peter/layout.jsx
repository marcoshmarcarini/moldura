export default function PeterLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>To com Peter</title>
                <link rel="icon" href="/favicon-peter.ico" sizes="any"/>
            </head>
            <body style={{overflow: 'hidden'}}>
                {children}
            </body>
        </html>
    )
}