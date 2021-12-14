import styles from '../styles/About.module.css'
import Image from 'next/image'
import profilePic from '../../public/ProfilePic.webp'

const AboutPicture = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutPicture}>
        <Image
          className={styles.aboutPicture}
          src={profilePic}
          layout="responsive"
        />
      </div>
    </div>
  )
}

export default AboutPicture
