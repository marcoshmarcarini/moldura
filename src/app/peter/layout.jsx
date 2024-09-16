import Head from "next/head";

export default function PeterLayout({ children }) {
    return (
        <>
            <Head>
                <title>To com Peter</title>
                <link rel="icon" href="/favicon-peter.ico" sizes="any"/>
            </Head>
            <body style={{overflow: 'hidden'}}>
                {children}
            </body>
        </>
    )
}