import { getAllPostIds } from '../../src/lib/getAllPostIds'
import { getPostData } from '../../src/lib/getPostData'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PostMetaDataFullType } from '../../src/lib/posts'
import { HeaderTags } from '../../src/components/HeaderTags'

type PostData = {
  postData: PostMetaDataFullType
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
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
