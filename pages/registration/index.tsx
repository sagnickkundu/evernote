import Head from 'next/head'
import Registration from '../../components/Auth/Registration'
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
type UserAuth = {
  id: string;
  email: string;
  password: string;
};

type LoginProps = {
  users: UserAuth[];
};

const RegistrationPage = ({ users }: LoginProps) => {
  return (
    <div>
      <Head>
        <title>Create an Evernote Account</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Registration users={users}/>
    </div>
  )
}

export async function getStaticProps() {
  const dbInstance = collection(database, "users");
  let data = await getDocs(dbInstance);
  return {
    props: {
      users: data.docs.map((item) => ({
        id: item.id,
        password: item.data().password,
        email: item.data().email,
      })),
    },
  };
}

export default RegistrationPage