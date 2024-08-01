import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <ul className={styles.links}>
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
      <p>&copy;2024 markopersonally | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
