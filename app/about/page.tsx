import NavBar from "@/components/NavBar";
import Image from "next/image";
import logo from "@/images/frog_394697.png";
import styles from "./page.module.css";

export default function About() {
  return (
    <main>
      <NavBar />
      <div className={styles["content-about"]}>
        <h2>Hello, I'm Marcin!🥸</h2>
        <Image className={styles["picuture-logo"]} src={logo} alt="logo" />
        <p>
          I am passionate about programming and enjoy developing innovative
          solutions and user-friendly applications. Feel free to reach out to me
          for any programming inquiries or collaboration ideas.
        </p>
      </div>
    </main>
  );
}
