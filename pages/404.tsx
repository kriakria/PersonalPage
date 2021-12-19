import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import { PageNotFoundIcon } from '../src/assets/icons/PageNotFoundIcon'
import { getSortedPostsData } from '../src/lib/posts'
import styles from '../src/styles/404.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData()
  return {
    props: {
      allPosts,
    },
  }
}

const Custom404 = ({ allPosts }) => {
  return (
    <div className={styles.notFoundPage}>
      <div>
        <PageNotFoundIcon />
      </div>
      <div className={styles.header}>Don’t panic...yet.</div>
      <div className={styles.mainText}>
        <div>
          Story is, the page you tried to access don’t exist.
          <div>But hey! All the ones below do exist! Enjoy!</div>
        </div>
        <div className={styles.linksList}>
          {allPosts.map((post) => (
            <div className={styles.postLink} key={post.id}>
              <Link href={`posts/${post.url}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Custom404
