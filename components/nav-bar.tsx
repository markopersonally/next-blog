import Link from "next/link";
import styles from "./nav-bar.module.css";
import logo from "@/images/elephant_1841047.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <Image className={styles["nav-logo"]} src={logo} alt="side logo" />
        </Link>
      </div>
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
      <Link href="/login">
        <button className={styles["btn-log-in"]}>Log In</button>
      </Link>
    </nav>
  );
};

export default NavBar;
