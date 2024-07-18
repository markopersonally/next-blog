import Header from "@/components/header.js";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import img1 from "@/images/cobra_1362523.png";
import img2 from "@/images/elephant_1841047.png";
import img3 from "@/images/frog_394697.png";

export default function Home() {
  return (
    <main>
      <Header />
      <div id={styles["container"]}>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img1}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img1}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img2}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img2}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img3}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
        <Link href="/blog">
          <div className={styles["wrapper-post"]}>
            <Image
              className={styles.picture}
              src={img3}
              alt="Picture of the author"
            />
            <div className={styles.description}>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
