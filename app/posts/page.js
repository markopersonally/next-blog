import Link from "next/link";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";

export default function PostsPage() {
  return (
    <main className={styles.main}>
      <NavBar />
      <h2 className={styles.h2}>Choose what interests you</h2>
      <div className={styles["post-container"]}>
        <p className={styles["post-topic"]}>
          <Link href="/blog/post-1">Post 1</Link>
        </p>
        <p className={styles["post-topic"]}>
          <Link href="/blog/post-2">Post 2</Link>
        </p>{" "}
        <p className={styles["post-topic"]}>
          <Link href="/blog/post-2">Post 2</Link>
        </p>{" "}
        <p className={styles["post-topic"]}>
          <Link href="/blog/post-2">Post 2</Link>
        </p>{" "}
        <p className={styles["post-topic"]}>
          <Link href="/blog/post-2">Post 2</Link>
        </p>
      </div>
    </main>
  );
}
