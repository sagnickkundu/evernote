import { useState } from "react";
import Link from "next/link";
import styles from "./NoteList.module.scss";
import { Notes } from "../../types";
type NoteListProps = {
  notes: Notes[];
}
const NoteList = ({notes}: NoteListProps) => {
  const [error, setError] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Notes</h1>
        </div>
        <div className={styles.subHeader}>
          <div className={styles.count}>{notes.length > 1 ? `${notes.length} notes` : `${notes.length} note`}</div>
        </div>
      </div>
      <div className={styles.body}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <Link key={note.id} href={`/client/${note.id}`}>
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div className={styles.cardTitle}>{note.noteTitle}</div>
                </div>
                <div className={styles.date}>2 minutes ago</div>
              </div>
            </Link>
          ))
        ) : (
          <div className={styles.emptyState}>No data found</div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
