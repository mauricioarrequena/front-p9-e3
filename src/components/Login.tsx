import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Login.module.css';


export default function Login() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    emailRef.current?.focus();
  }, [])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate name 
    const name = nameRef.current!.value!;
    if (name.length === 0) {
      alert("enter a name");
      return;
    }

    //validat email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRef.current!.value!)) {
      alert("error, enter a valid email")
      return;
    }

    //validate password
    const password = passwordRef.current!.value!;
    if (password.length === 0) {
      alert("enter a password");
      return;
    }
  }

  return (
    <div className={styles.card}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input className={styles.input}
            type="text"
            placeholder="name"
            ref={nameRef}
          />
          <span className={styles.errorMsg}>Please enter a valid name</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={styles.input}
            type="text"
            placeholder="email"
            ref={emailRef}
             />
          <span className={styles.errorMsg}>Please enter a valid email address</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={styles.input}
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <span className={styles.errorMsg}>Password must be at least 6 characters</span>
        </div>
        <button className={styles.button} type='submit'>Sign In</button>
      </form>
    </div>
  )
}