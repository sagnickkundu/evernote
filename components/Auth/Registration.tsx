import Image from "next/image";
import styles from "./Registration.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    console.log(email + " " + password);
    router.push("/client");
  };
  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <Image src="/evernote-icon.svg" alt="" width={55} height={55} />
        <div className={styles.title}>Evernote</div>
        <p>Remember everything important</p>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
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
