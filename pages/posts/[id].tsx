import Layout from '../../src/components/Layout';
import { getAllPostIds, getPostData } from '../../src/lib/posts';



export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}

const Post = ({ postData }) => {
	console.log(postData)
	return (
	<div>
		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	</div>
		)
}

export default Post
