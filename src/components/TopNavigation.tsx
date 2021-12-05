import Link from 'next/link';
import styles from '../styles/TopNavigation.module.css';

export const TopNavigation = () => {
  // todo: Add a function that generates the links based on a scheme provided with items and paths
  return (
    <nav className={styles.navContainer}>
      <Link href={'/'}>
        <a className={styles.navLinks}>Portfolio</a>
      </Link>
      <Link href={'/'}>
        <a className={styles.navLinks}>About</a>
      </Link>
    </nav>
  );
};
