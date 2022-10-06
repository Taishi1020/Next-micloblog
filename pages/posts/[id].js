import Layout from '../../componets/Layout'
import {getAllPostIds, getPostData} from '../../lidev/post'


export async function getStaticPaths(){
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return{
        props:  {
            postData,
        },
    }
}

export default function Post(postData){
    return (
        <Layout>
            {postData.title}
            <br/>
            {postData.data}
            <br/>
            {postData.blogContentHTML}
        </Layout>
    )
}