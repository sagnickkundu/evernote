import Image from "next/image";
import styles from "./Login.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

type UserAuth = {
  id: string;
  email: string;
  password: string;
};

type LoginProps = {
  users: UserAuth[];
};

const Login = ({ users }: LoginProps) => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    const found = users.some((el) => el.password === password);
    if (found) {
      const id = users.find((x) => x.email === email)?.id;
      router.push(`/client/${id}`);
    } else {
      setError(true);
    }
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
          placeholder="Email address or username"
          value={email}
          onClick={() => setError(false)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onClick={() => setError(false)}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{display: `${error ? "block" : "none"}`}} className={styles.error}>Incorrect email or password</p>
        <button onClick={handleSubmit} className={styles.submit}>
          Sign in
        </button>
        <div className={styles.remember}>
          <input type="checkbox" />
          <label htmlFor="rememberMe">Remember me for 30 days</label>
        </div>

        <div className={styles.switch}>
          <div className={styles.switchDescr}>Dont have an account?</div>
          <div className={styles.switchBtn}>
            <Link href="/registration">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
