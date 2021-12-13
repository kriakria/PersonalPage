import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../src/lib/posts'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PostsData } from '../../src/lib/posts'
import { HeaderTags } from '../../src/components/HeaderTags'

type PostData = {
  postData: PostsData
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData,
    },
  }
}

const Post = ({ postData }: PostData) => {
  return (
    <div>
      <HeaderTags title={postData.title} />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  )
}

export default Post
