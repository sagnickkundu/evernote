import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSearch,
  faPlus,
  faStar,
  faTrash,
  faInfo,
  faHome,
  faNoteSticky,
  faTasks,
  faBook,
  faTags,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Sidenavbar.module.scss";
import { User, Notes } from "../../types";
type UserProps = {
  user: User;
  addNewNote(): void;
};

const Sidenavbar = ({user, addNewNote}: UserProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.profileIcon}>A</div>
          <div className={styles.profileTitle}>
            {user.name}
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
          <div className={styles.btn} onClick={() => addNewNote()}>
            <FontAwesomeIcon className={styles.icon} icon={faPlus} />
            <div className={styles.title}>New Note</div>
          </div>
        </div>
        <div className={styles.menuItem}>
          <ul>
            <li>
              <Link href="/">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faHome} /> Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-2">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faStar} />
                  Shortcuts
                </div>
              </Link>
            </li>
            <li>
              <Link href="/client">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faNoteSticky}
                  />
                  Notes
                </div>
              </Link>
            </li>

            <li>
              <Link href="/dummy-3">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faTasks} />
                  Tasks
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-4">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faBook} />
                  Notebooks
                </div>
              </Link>
            </li>
            <li>
              <Link href="/trash">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faTags} />
                  Tags
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-5">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faShareAlt} />
                  Shared with me
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dummy-5">
                <div className={styles.menuIcons}>
                  <FontAwesomeIcon className={styles.icon} icon={faTrash} />
                  Trash
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
