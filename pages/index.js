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

export default function Home({allPostData}) {
    /*import関連*/

    /*状態管理関連*/

    return (
        <>
            <Layout>
                <section className={utilStyle.headingMd}>
                    <p>私はフルスタックエンジニアをしています/主にReact,Node,Nextjsを取り扱っています！</p>
                    <h2>📝エンジニアのブログ</h2>
                    <div className={styles.grid}>
                        {allPostData.map(({id, title, data, thumbnail}) => (
                            <article key={id}>
                                <Link href={`/posts/${id}`}>
                                    <img
                                        src={`${thumbnail}`}
                                        className={styles.thumbnailImage}
                                    />
                                </Link>
                                <Link href={`/posts/${id}`}>
                                    <a className={utilStyle.boldText}>{title}</a>
                                </Link>
                                <br/>
                                <small className={utilStyle.lightText}>{data}</small>
                            </article>
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )
}
