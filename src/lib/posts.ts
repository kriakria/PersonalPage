import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '/articles')

export interface PostsDataType {
  author: string
  date: string
  status: string
  title: string
  excerpt: string
  url: string
  contentHtml: string
}

export interface PostMetaDataFullType extends PostsDataType {
  id: string
}

export function getSortedPostsData(): PostMetaDataFullType[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const id = matterResult.data.url

    return {
      id,
      ...(matterResult.data as PostsDataType),
    }
  })
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
