import fs from 'fs'
import { POSTS_DIRECTORY } from './constants'
import { getPostData } from './getPostData'

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY)
  let postData = []
  for (let i of fileNames) {
    const newPost = await getPostData(i.replace(/\.md$/, ''))
    postData.push(newPost)
  }

  return postData.map((post) => {
    return {
      params: {
        // TODO Fix typecasting  below
        id: post.id.toLowerCase() as string,
      },
    }
  })
}
