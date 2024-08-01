import NavBar from "./NavBar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
