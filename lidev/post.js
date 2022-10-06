import path from "path"
import fs from "fs"
import matter from "gray-matter"

const postDirectory = path.join(process.cwd(), "posts")

//mdファイルのデータを取り出す
export function getPostData() {
    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map((filename) => {
        const id = filename.replace(/¥.md$/, ""); //ファイル名
        //マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postDirectory, filename);
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