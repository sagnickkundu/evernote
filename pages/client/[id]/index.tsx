import Note from "../../../components/Note/Note";
import NoteList from "../../../components/NoteList/NoteList";
import Sidenavbar from "../../../components/Sidenavbar/Sidenavbar";
import styles from "../../../styles/Client.module.scss";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { Notes } from "../../../types";
import { GetStaticPaths, GetStaticProps } from "next";

type HomeProps = {
  notes: Notes[];
  note: Notes;
};

const NoteDetails = ({ notes, note }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Sidenavbar notes={notes}/>
      <NoteList notes={notes} />
      <Note note={note}/>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dbInstance = collection(database, "notes");
  let data = await getDocs(dbInstance);
  return {
    fallback: "blocking",
    paths: data.docs.map((item) => ({
      params: { id: item.id },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const noteId = params?.id as string;
  const docRef = doc(database, "notes", noteId);
  const docSnap = await getDoc(docRef);
  const dbInstance = collection(database, "notes");
  let data = await getDocs(dbInstance);

  return {
    props: {
      notes: data.docs.map((item) => ({
        id: item.id,
        noteTitle: item.data().noteTitle,
        noteDesc: item.data().noteDesc,
      })),
      note: {
        id: noteId,
        noteTitle: docSnap.data()?.noteTitle,
        noteDesc: docSnap.data()?.noteDesc,
      },
    },
  };
};

export default NoteDetails;
