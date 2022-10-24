import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSearch,
  faPlus,
  faStar,
  faStickyNote,
  faTrash,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Sidenavbar.module.scss";
import { Notes } from "../../types";
type SidenavbarProps = {
  notes: Notes[];
}
const Sidenavbar = ({notes}: SidenavbarProps) => {
  const [error, setError] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.profileIcon}>A</div>
          <div className={styles.profileTitle}>
            Akshay Kumar
            <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.searchBlock}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            <input placeholder="Search" />
          </div>
        </div>
        <div className={styles.createNote}>
          <div className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faPlus} />
            <div className={styles.title}>New Note</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <ul>
            <li>
              <Link href="/client">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} /> Home
                </div>
              </Link>
            </li>
            <li>
              <Link href={`/client/${notes[0].id}`}>
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStickyNote} /> All
                  Notes
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-2">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} /> Dummy
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-3">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} /> Dummy
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-4">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} /> Dummy
                </div>
              </Link>
            </li>
            <li>
              <Link href="/trash">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faTrash} /> Trash
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-5">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} /> Dummy
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <FontAwesomeIcon className={styles.icon} icon={faInfo} />
          Need a little help?
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
