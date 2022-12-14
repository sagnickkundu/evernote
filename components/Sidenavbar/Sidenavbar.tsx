import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSearch,
  faPlus,
  faStar,
  faTrash,
  faHome,
  faNoteSticky,
  faTasks,
  faBook,
  faTags,
  faShareAlt,
  faGear,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Sidenavbar.module.scss";
import { User } from "../../types";
import Dropdown from "./Dropdown";
type UserProps = {
  user: User;
  addNewNote(): void;
  display: string;
};

const Sidenavbar = ({ user, addNewNote, display }: UserProps) => {
  const [drop, setDrop] = useState(false);
  const sideList = [
    {
      link: "/",
      icon: faHome,
      label: "Home",
    },
    {
      link: "/",
      icon: faStar,
      label: "Shortcuts",
    },
    {
      link: "/",
      icon: faNoteSticky,
      label: "Notes",
    },
    {
      link: "/",
      icon: faTasks,
      label: "Tasks",
    },
    {
      link: "/",
      icon: faBook,
      label: "Notebooks",
    },
    {
      link: "/",
      icon: faTags,
      label: "Tags",
    },
    {
      link: "/",
      icon: faShareAlt,
      label: "Shared with me",
    },
    {
      link: "/",
      icon: faTrash,
      label: "Trash",
    },
  ];
  return (
    <div className={styles.container} style={{ display: display }}>
      <div className={styles.header}>
        <div
          className={styles.profile}
          onClick={() => setDrop((prevState) => !prevState)}
        >
          <div className={styles.profileIcon}>{user.name.charAt(0)}</div>
          <div className={styles.profileTitle}>
            {user.name}
            <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
            <FontAwesomeIcon icon={faGear} />
          </div>
        </div>
        <div style={{ display: `${drop ? "block" : "none"}` }}>
          <Dropdown />
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
            {sideList.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link}>
                  <div className={styles.menuIcons}>
                    <FontAwesomeIcon className={styles.icon} icon={item.icon} />
                    <p>{item.label}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <FontAwesomeIcon className={styles.icon} icon={faCircleQuestion} />
          Need a little help?
        </div>
      </div>
    </div>
  );
};

export default Sidenavbar;
