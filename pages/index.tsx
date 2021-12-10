import Link from 'next/link';
import { getSortedPostsData } from '../src/lib/posts';
import { GetStaticProps } from 'next'
import styles from '../src/styles/Home.module.css'


type AllPostsDataProps = {
    allPostsData: {
      date: string
      title: string
      id: string
      excerpt: string
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



const Home = ({ allPostsData }: AllPostsDataProps) => {
  return (
    <div>
      {
        allPostsData.map( (post) => {
          return (
            <Link href={`posts/${post.id.toLowerCase()}`} passHref key={post.id}>
              <div>
                  <h1>{post.title}</h1>
                  <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
  
};

export default Home;
