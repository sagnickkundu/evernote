import Image from "next/image";
import styles from "./Registration.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../firebaseConfig";
type UserAuth = {
  id: string;
  email: string;
  password: string;
};

type LoginProps = {
  users: UserAuth[];
};
const Registration = ({ users }: LoginProps) => {
  const [emailError, setEMailError] = useState({
    status: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    status: false,
    message: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dbInstance = collection(database, "users");

  const emailValidate = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      setEMailError({
        status: true,
        message: "Email address is a required field.",
      });
      return false;
    }
    if (!email.match(mailformat)) {
      setEMailError({
        status: true,
        message: "Email address appears to be invalid.",
      });
      return false;
    }
    const found = users.some((el) => el.email === email);
    if (found) {
      setEMailError({
        status: true,
        message: "This email address is already in use.",
      });
      return false;
    }
    return true;
  };

  const passwordValidate = () => {
    if (password === "") {
      setPasswordError({
        status: true,
        message: "Password is a required field.",
      });
      return false;
    }
    if (password.length < 4) {
      setPasswordError({
        status: true,
        message: "Select a password between 6 and 64 characters long consisting of letters, numbers and punctuation.",
      });
      return false;
    }
    return true;
  };

  const handleClick = () => {
    setEMailError({
      status: false,
      message: "",
    });
    setPasswordError({
      status: false,
      message: "",
    });
  };
  const handleSubmit = async () => {
    let validate1 = emailValidate();
    let validate2 = passwordValidate();
    if (validate1 && validate2) {
      let newUser = {
        name: name,
        email: email,
        password: password,
        notes: [],
      };
      await addDoc(dbInstance, newUser).then((docRef) => {
        router.push(`/client/${docRef.id}`);
      });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <Image src="/evernote-icon.svg" alt="" width={55} height={55} />
        <div className={styles.title}>Evernote</div>
        <p>Remember everything important</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onClick={handleClick}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p
          style={{ display: `${emailError.status ? "block" : "none"}` }}
          className={styles.error}
        >
          {emailError.message}
        </p>
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onClick={handleClick}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          style={{ display: `${passwordError.status ? "block" : "none"}` }}
          className={styles.error}
        >
          {passwordError.message}
        </p>
        <button onClick={handleSubmit} className={styles.submit}>
          Continue
        </button>
        <div className={styles.terms}>
          By creating an account, you are agreeing to our Terms of Service and
          Privacy Policy.
        </div>

        <div className={styles.switch}>
          <div className={styles.switchDescr}>Already have an account?</div>
          <div className={styles.switchBtn}>
            <Link href="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
