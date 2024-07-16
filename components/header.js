import NavBar from "./NavBar";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
}
