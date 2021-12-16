import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { POSTS_DIRECTORY } from './constants'
import { renameArticleToUrlName } from './renameArticleToUrlLowercaseName'

// TODO type this function properly
export async function getPostData(filename: string) {
  renameArticleToUrlName(filename)
  const fullPath = path.join(
    POSTS_DIRECTORY,
    `${filename.toLocaleLowerCase()}.md`
  )
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  const id = matterResult.data.url

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
