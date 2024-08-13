import Link from "next/link";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles["switch-container"]}>
        <input
          type="checkbox"
          id="theme-switch"
          className={styles["switch-checkbox"]}
        />
        <label
          htmlFor="theme-switch"
          className={styles["switch-label"]}
        ></label>
      </div>
    </nav>
  );
}
