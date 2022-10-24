import NoteList from "../../components/NoteList/NoteList";
import Sidenavbar from "../../components/Sidenavbar/Sidenavbar";
import styles from '../../styles/Client.module.scss';
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import { Notes } from "../../types";

type HomeProps = {
  notes: Notes[];
}

const Client = ({notes}: HomeProps) => {
  return (
    <div className={styles.container}>
        <Sidenavbar notes={notes}/>
    </div>
  )
}

export async function getStaticProps() {
  const dbInstance = collection(database, "notes");
  let data = await getDocs(dbInstance);

  return {
    props: {
      notes: data.docs.map((item) => ({
        id: item.id,
        noteTitle: item.data().noteTitle,
        noteDesc: item.data().noteDesc,
      })),
    },
  };
}

export default Client