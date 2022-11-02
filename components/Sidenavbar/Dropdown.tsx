import Link from 'next/link';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
  return (
    <ul className={styles.submenu}>
      <li className={styles.item}>
        <Link href="/">Account info</Link>
      </li>
      <li className={styles.item}>
        <Link href="/">Settings</Link>
      </li>
      <li className={styles.item}>
        <Link href="/">Share feedback</Link>
      </li>
      <hr />
      <li className={styles.item}>
        <Link href="/">Sign Out</Link>
      </li>
    </ul>
  );
};

export default Dropdown;
