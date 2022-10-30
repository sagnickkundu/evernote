import { useState } from "react";
import Link from "next/link";
import styles from "./NoteList.module.scss";
import { Notes } from "../../types";
import moment from "moment";

type NoteListProps = {
  notes: Notes[];
  viewNote(id: string): void;
  title: string;
  id: string;
};
const NoteList = ({ notes, viewNote, title, id }: NoteListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>Notes</h1>
        </div>
        <div className={styles.subHeader}>
          <div className={styles.count}>
            {notes.length > 1
              ? `${notes.length} notes`
              : `${notes.length} note`}
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} onClick={() => viewNote(note.id)}>
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
