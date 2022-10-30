import Note from "../../../components/Note/Note";
import NoteList from "../../../components/NoteList/NoteList";
import Sidenavbar from "../../../components/Sidenavbar/Sidenavbar";
import styles from "../../../styles/Client.module.scss";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { User } from "../../../types";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

type UserProps = {
  user: User;
  userId: string;
};

const NoteDetails = ({ user, userId }: UserProps) => {
  const [visible, setVisible] = useState(user.notes.length > 0);
  const [notes, setNotes] = useState(user.notes);
  const [id, setId] = useState(user.notes.length > 0 ? user.notes[0].id : "");
  const [title, setTitle] = useState(
    user.notes.length > 0 ? user.notes[0].title : ""
  );
  const [description, setDescription] = useState(
    user.notes.length > 0 ? user.notes[0].description : ""
  );
  const userRef = doc(database, "users", userId);
  moment.updateLocale("en", {
    relativeTime: {
      past: (diff) => (diff == "Just now" ? diff : `${diff} ago`),
      s: "Just now",
      ss: "Just now",
      m: "%dm",
      mm: "%dm",
      h: "an h",
      hh: "%dh",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });

  const saveNote = () => {
    const newNotes = notes.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          title: title,
          description: description,
          last_modified: moment().format(),
        };
      }
      return obj;
    });
    return newNotes;
  };

  const viewNote = async (ID: string) => {
    let updatedNotes = saveNote();
    setNotes(updatedNotes);
    setId(ID);

    if (id !== ID) {
      const index = notes.findIndex((obj) => {
        return obj.id === ID;
      });
      setTitle(notes[index].title);
      setDescription(notes[index].description);
      await updateDoc(userRef, {
        notes: updatedNotes,
      });
    }
  };

  const addNewNote = async () => {
    let generatedId = uuidv4();
    let newNotes = [
      {
        id: generatedId,
        title: "Untitled",
        description: "",
        last_modified: moment().format(),
      },
      ...saveNote(),
    ];
    setId(generatedId);
    setTitle("");
    setDescription("");
    setNotes(newNotes);
    setVisible(true);
    await updateDoc(userRef, {
      notes: newNotes,
    });
  };

  const deleteNote = async () => {
    const newNotes = notes.filter((obj) => obj.id !== id);
    if (newNotes.length === 0) {
      setVisible(false);
    }
    setNotes(newNotes);
    setTitle(newNotes[0]?.title);
    setDescription(newNotes[0]?.description);
    await updateDoc(userRef, {
      notes: newNotes,
    });
  };

  return (
    <div className={styles.container}>
      <Sidenavbar user={user} addNewNote={addNewNote} />
      <NoteList notes={notes} viewNote={viewNote} title={title} id={id} />
      <Note
        title={title}
        setTitle={setTitle}
        name={user.name}
        deleteNote={deleteNote}
        visible={visible}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = params?.id as string;
  const docRef = doc(database, "users", userId);
  const docSnap = await getDoc(docRef);

  return {
    props: {
      user: {
        name: docSnap.data()?.name,
        email: docSnap.data()?.email,
        notes: docSnap.data()?.notes,
      },
      userId,
    },
  };
};

export default NoteDetails;
