import { useState } from "react";
import styles from "./NoteList.module.scss";
import { Notes } from "../../types";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort, faBars, faClipboard, faFilter } from "@fortawesome/free-solid-svg-icons";

type NoteListProps = {
  notes: Notes[];
  viewNote(id: string): void;
  title: string;
  id: string;
  display: string;
};
const NoteList = ({ notes, viewNote, title, id, display }: NoteListProps) => {
  const [selected, setSelected] = useState("");

  const handleClick = (id: string) => {
    setSelected(id !== selected ? id : "");
    viewNote(id);
  };
  return (
    <div className={styles.container} style={{ display: display }}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          
          <h1><FontAwesomeIcon
            className={styles.icon}
            icon={faClipboard}
          />{" "}Notes</h1>
        </div>
        <div className={styles.subHeader}>
          <div className={styles.count}>
            {notes.length > 1
              ? `${notes.length} notes`
              : `${notes.length} note`}
          </div>
          <div className={styles.extraOptions}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faArrowDownWideShort}
          />
           <FontAwesomeIcon
            className={styles.icon}
            icon={faFilter}
          />
           <FontAwesomeIcon
            className={styles.icon}
            icon={faBars}
          />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              onClick={() => handleClick(note.id)}
              className={selected === note.id ? styles.selectedBorder : ""}
            >
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div className={styles.cardTitle}>
                    {id === note.id ? title : note.title}
                  </div>
                </div>
                <div className={styles.date}>
                  {id === note.id
                    ? "Just now"
                    : moment(note.last_modified).fromNow()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>No data found</div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
