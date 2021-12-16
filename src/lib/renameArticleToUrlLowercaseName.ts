import { rename, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { POSTS_DIRECTORY } from '../lib/constants'

export const renameArticleToUrlName = (filename: string) => {
  const fullFilePath = path.join(POSTS_DIRECTORY, `${filename}.md`)

  const fileContents = readFileSync(fullFilePath, 'utf8')
  const matterResult = matter(fileContents)
  const newFileName = path.join(
    `${POSTS_DIRECTORY}/${matterResult.data.url}.md`
  )

  rename(fullFilePath, newFileName, (err) => {
    if (err) {
      throw err
    }
  })
}
