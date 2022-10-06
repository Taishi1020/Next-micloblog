import Layout from "../componets/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css"
import styles from "../styles/Home.module.css"
import {getPostData} from '../lidev/post'



//SSGの場合
export async function getStaticProps() {
    const allPostData = getPostData();
    console.log(allPostData)

    return {
        props: {
            allPostData,
        },
    };
}

export default function Home({allPostsData}) {
    /*import関連*/

    /*状態管理関連*/

    return (
        <>
            <Layout>
                <section className={utilStyle.headingMd}>
                    <p>私はフルスタックエンジニアをしています/主にReact,Node,Nextjsを取り扱っています！</p>
                    <h2>📝エンジニアのブログ</h2>
                    <div className={styles.grid}>
                        <article>
                            <Link href="/">
                                <img
                                    src="/images/thumbnail01.jpg"
                                    className={styles.thumbnailImage}
                                />
                            </Link>
                            <Link href="/">
                                <a className={utilStyle.boldText}>NextJsのレンダリング手法を攻略</a>
                            </Link>
                            <br/>
                            <small className={utilStyle.lightText}>February 23, 2022</small>
                        </article>
                        <article>
                            <Link href="/">
                                <img
                                    src="/images/thumbnail01.jpg"
                                    className={styles.thumbnailImage}
                                />
                            </Link>
                            <Link href="/">
                                <a className={utilStyle.boldText}>NextJsのレンダリング手法を攻略</a>
                            </Link>
                            <br/>
                            <small className={utilStyle.lightText}>February 23, 2022</small>
                        </article>
                        <article>
                            <Link href="/">
                                <img
                                    src="/images/thumbnail01.jpg"
                                    className={styles.thumbnailImage}
                                />
                            </Link>
                            <Link href="/">
                                <a className={utilStyle.boldText}>NextJsのレンダリング手法を攻略</a>
                            </Link>
                            <br/>
                            <small className={utilStyle.lightText}>February 23, 2022</small>
                        </article>
                        <article>
                            <Link href="/">
                                <img
                                    src="/images/thumbnail01.jpg"
                                    className={styles.thumbnailImage}
                                />
                            </Link>
                            <Link href="/">
                                <a className={utilStyle.boldText}>NextJsのレンダリング手法を攻略</a>
                            </Link>
                            <br/>
                            <small className={utilStyle.lightText}>February 23, 2022</small>
                        </article>
                    </div>
                </section>
            </Layout>
        </>
    )
}
