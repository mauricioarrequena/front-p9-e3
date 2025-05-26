

import { useRef, useState } from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [name, setName] = useState<string>("");
  const emailRef = useRef<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("error, enter a valid email")
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          <span className={styles.errorMsg}>Please enter a valid name</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={styles.input}
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <span className={styles.errorMsg}>Please enter a valid email address</span>
        </div>
        <div className={styles.inputGroup}>
          <input className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <span className={styles.errorMsg}>Password must be at least 6 characters</span>
        </div>
        <button className={styles.button} type='submit'>Sign In</button>
      </form>
    </div>
  )
}