export default function PeterLayout({ children }) {
    return (
        <>
            <head>
                <title>To com Peter</title>
                <link rel="icon" href="/favicon-peter.ico" sizes="any"/>
            </head>
            <body style={{overflow: 'hidden'}}>
                {children}
            </body>
        </>
    )
}