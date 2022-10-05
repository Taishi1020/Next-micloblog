import Head from "next/head";
import styles from "./layout.module.css"
import utils from  "../styles/utils.module.css"


function Layout({children}) {
    const name = "Taishi";

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.png" alt="" className={utils.borderCircle} />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}


export default Layout