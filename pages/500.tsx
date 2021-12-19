import Link from 'next/link'
import { GetStaticProps } from 'next/types'
import { ServerErrorIcon } from '../src/assets/icons/ServerErrorIcon'
import { getSortedPostsData } from '../src/lib/posts'
import styles from '../src/styles/404.module.css'
import { PostMetaDataFullType } from '../src/lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: PostMetaDataFullType[] = getSortedPostsData()
  return {
    props: {
      allPosts,
    },
  }
}

type PropTypes = {
  allPosts: PostMetaDataFullType[]
}

const Custom500 = ({ allPosts }: PropTypes) => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.errorIcon}>
        <ServerErrorIcon />
      </div>
      <div className={styles.header}>Don’t panic...yet.</div>
      <div className={styles.mainText}>
        <div>
          Wow! Something here went awfuly wrong. Sorry about that. .
          <div>
            But hey! Why don’t you try clicking some of the links below. I bet
            they work just fine. 😇
          </div>
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
export default Custom500
