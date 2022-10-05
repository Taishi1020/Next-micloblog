import Layout from "../componets/Layout";
import utilStyle from  "../styles/utils.module.css"
import Link from "next/link";
/*import関連*/

/*状態管理関連*/

export default function Home() {
  return (
      <>
          <Layout>
              <section className={utilStyle.headingMd}>
                  <p>私はフルスタックエンジニアをしています/主にReact,Node,Nextjsを取り扱っています！</p>
              </section>

              <div>
                  <article>
                      <Link href="/">
                          <img src="/images/thumbnail01.jpg" alt=""/>
                      </Link>
                  </article>
              </div>
          </Layout>
      </>
  )
}
