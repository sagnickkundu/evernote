import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faBackward,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Note.module.scss";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Notes } from "../../types";

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
    ["link", "image", "video"],
    ["clean"],
  ],
};
type NoteProps = {
  note: Notes;
}
const Note = ({note}: NoteProps) => {
  const [isArchive, setIsArchive] = useState(1);
  const [title, setTitle] = useState(note.noteTitle);
  const [desc, setDesc] = useState(note.noteDesc);
  const handleChange = (html: string) => {
    console.log(html);
    setDesc(html);
  }

  useEffect(() => {
    setTitle(note.noteTitle);
    setDesc(note.noteDesc)
  },[note])
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>shaggy notebook</div>
      <div className={styles.body}>
        <div className={styles.reactQuill}>
          <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Start writing, drag files or start from a template"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputTitle}>
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
