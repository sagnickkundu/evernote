import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import styles from "./Note.module.scss";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["clean"],
  ],
};
type NoteProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  name: string;
  deleteNote(): void;
  visible: boolean;
};
const Note = ({ title, setTitle, name, deleteNote, visible, description, setDescription }: NoteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  

  useEffect(() => {
    inputRef.current?.focus();
  }, [visible])
  

  return (
    <>
      {visible && (
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.notebook}>{name.split(" ")[0]} notebook</div>
            <div className={styles.deleteBtn} onClick={() => deleteNote()}>
              <FontAwesomeIcon className={styles.icon} icon={faTrash} />
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.reactQuill}>
              <ReactQuill
                modules={modules}
                theme="snow"
                placeholder="Start writing, drag files or start from a template"
                value={description}
                onChange={(html: string) => setDescription(html)}
              />
            </div>
            <div className={styles.inputTitle}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={inputRef}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
