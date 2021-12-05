import type { NextPage } from 'next';
import Link from 'next/link';

import { getSortedPostsData } from '../src/lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home: NextPage = ({ allPostsData }) => {

  return allPostsData.map( (post) => {
    return (
      <div key={post.id}>
        <Link href={`posts/${post.id.toLowerCase()}`} passHref>
          <h1>{post.title}</h1>
        </Link>
      </div>
    )
  })
};

export default Home;
