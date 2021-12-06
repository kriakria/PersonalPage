import Layout from '../../src/components/Layout';
import { getAllPostIds, getPostData } from '../../src/lib/posts';
import { GetStaticProps, GetStaticPaths } from 'next'

type PostData = {
	postData: {
	  title: string
	  date: string
	  contentHtml: string
	} }

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	const postData = await getPostData(params?.id as string)
	return {
		props: {
			postData
		}
	}
}

const Post = ({ postData }: PostData) => {
	console.log(postData)
	return (
	<div>
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	</div>
		)
}

export default Post
