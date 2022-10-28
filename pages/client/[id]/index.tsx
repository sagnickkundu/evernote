import Note from "../../../components/Note/Note";
import NoteList from "../../../components/NoteList/NoteList";
import Sidenavbar from "../../../components/Sidenavbar/Sidenavbar";
import styles from "../../../styles/Client.module.scss";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { User } from "../../../types";
import { GetServerSideProps } from "next";
import { useState } from "react";

type UserProps = {
  user: User;
  userId: string;
};

const NoteDetails = ({ user, userId }: UserProps) => {
  const [notes, setNotes] = useState(user.notes);
  const [id, setId] = useState("1");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const userRef = doc(database, "users", userId);

  const viewNote = async (ID: string) => {
    const newNotes = notes.map((obj) => {
      if (obj.id === id) {
        return { ...obj, title: title, description: description };
      }
      return obj;
    });
    setNotes(newNotes);
    const index = newNotes.findIndex((obj) => {
      return obj.id === ID;
    });
    setId(ID);
    setTitle(notes[index].title);
    setDescription(notes[index].description);
    await updateDoc(userRef, {
      notes: notes,
    });
  };

  const addNewNote = async () => {
    setNotes((notes) => [
      { id: `${notes.length + 1}`, title: "Untitled", description: "" },
      ...notes,
    ]);
    await updateDoc(userRef, {
      notes: notes,
    });
  };

  const deleteNote = async () => {
    const newNotes = notes.filter((obj) => obj.id !== id);
    setNotes(newNotes);
    setTitle(newNotes[0]?.title);
    setDescription(newNotes[0]?.description);
    await updateDoc(userRef, {
      notes: newNotes,
    });
  }

  return (
    <div className={styles.container}>
      <Sidenavbar user={user} addNewNote={addNewNote} />
      <NoteList notes={notes} viewNote={viewNote} title={title} id={id} />
      <Note
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        name={user.name}
        deleteNote={deleteNote}
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
