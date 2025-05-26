import { useEffect, useRef } from "react";
import styles from "../styles/Login.module.css";

export default function Login() {
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    refs.email.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameErrorMessage = refs.name.current!.nextElementSibling;
    const name = refs.name.current!.value!;
    if (name.length === 0) {
      nameErrorMessage!.textContent = "Name is required";
      nameErrorMessage!.classList.add(styles.errorMsgShowm);
      refs.name.current?.focus();
      return;
    }
    nameErrorMessage?.classList.remove(styles.errorMsgShowm);

    const emailErrorMessage = refs.email.current!.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(refs.email.current!.value!)) {
      emailErrorMessage!.textContent = "Invalid email addres";
      emailErrorMessage!.classList.add(styles.errorMsgShowm);
      refs.email.current!.focus();
      return;
    }
    emailErrorMessage!.classList.remove(styles.errorMsgShowm);

    const passwordErrorMessage = refs.password.current!.nextElementSibling;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const password = refs.password.current!.value!;
    if (!passwordRegex.test(password)) {
      passwordErrorMessage!.textContent =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
      passwordErrorMessage!.classList.add(styles.errorMsgShowm);
      refs.password.current!.focus();
      return;
    }
    passwordErrorMessage!.classList.remove(styles.errorMsgShowm);
  };

  return (
    <div className={styles.card}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="name"
            ref={refs.name}
          />
          <span className={styles.errorMsg}>error message</span>
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            placeholder="email"
            ref={refs.email}
          />
          <span className={styles.errorMsg}>error message</span>
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            ref={refs.password}
          />
          <span className={styles.errorMsg}>error message</span>
        </div>
        <button className={styles.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
