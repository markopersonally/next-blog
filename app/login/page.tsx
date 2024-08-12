"use client";
import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const Login = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Login:", login);
    console.log("Password:", password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="login">
        Login
      </label>
      <input
        className={styles.input}
        type="text"
        id="login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        className={styles.input}
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Log in
      </button>
    </form>
  );
};

export default Login;
