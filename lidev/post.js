import path from "path"
import fs from "fs"
import matter from "gray-matter"
import {remark} from 'remark'
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "posts")


//mdファイルのデータを取り出す
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((filename) => {
        const id = filename.replace(/\.md$/, ""); //ファイル名
        //マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents);
        //idとデータを返す.
        return {
            id,
            ...matterResult.data,    //matterResultはマークダウンファイルに記述されているtitle: date: thumbnailが格納されている
        }
    });
    return allPostsData
}

//getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    //一つ一つプロパティ取り出して返す
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "") //filename.replaceに各mdファイルが入っている
            },
        };
    })
}

//idに基づいてブログ投稿データを返す
export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const blogContentHTML = processedContent.toString();
    return {
        id,
        blogContentHTML,
        ...matterResult.data,
    }
}