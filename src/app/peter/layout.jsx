import Head from "next/head";

export default function PeterLayout({ children }) {
    return (
        <>
            <Head>
                <title>To com Peter</title>
                <link rel="icon" href="/favicon-peter.ico" sizes="any"/>
                <meta property="og:title" content="To com Peter" />
                <meta property="og:description" content="Apoio ao Peter nas eleições." />
                <meta property="og:image" content="/favicon-peter.ico" />
            </Head>
            <body style={{overflow: 'hidden'}}>
                {children}
            </body>
        </>
    )
}