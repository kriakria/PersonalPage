import { PageNotFoundIcon } from '../src/assets/icons/PageNotFoundIcon'
import styles from '../src/styles/404.module.css'

const Custom404 = () => {
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
      </div>
    </div>
  )
}
export default Custom404
