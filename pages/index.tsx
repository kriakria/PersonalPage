import type { NextPage } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '../src/lib/posts';
import { GetStaticProps } from 'next'


type AllPostsDataProps = {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}



const Home: NextPage = ({ allPostsData }: AllPostsDataProps) => {
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
