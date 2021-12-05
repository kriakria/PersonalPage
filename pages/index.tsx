import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
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
  console.log(allPostsData)
  return allPostsData.map( (post) => {
    return (
      <div key={post.id}>
        <h1>{post.title}</h1>
      </div>
    )
  })
};

export default Home;
