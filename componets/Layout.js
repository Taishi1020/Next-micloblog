import Head from "next/head";


function Layout({children}) {
    const name = "Taishi";
    export const siteTitle = "Next.js blog"

    return (
        <div>
            <Head>
                <title>Nextブログ</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header>
                <img src="/images/profile.png" alt=""/>
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}


export default Layout