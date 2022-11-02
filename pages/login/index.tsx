import Head from "next/head";
import Login from "../../components/Auth/Login";
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
const LoginPage = ({ users }: LoginProps) => {
  console.log(users);
  return (
    <div>
      <Head>
        <title>Welcome Back</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login users={users} />
    </div>
  );
};

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

export default LoginPage;
