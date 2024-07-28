import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import img1 from "@/images/boy-8530678_1280.png";

const SectionPost = () => {
  return (
    <div id={styles["container"]}>
      <div className={styles["main-post"]}>
        <Link href="/" className={styles["main-post-link"]}>
          <Image className={styles["main-post-image"]} src={img1} />
          <h3 className={styles["main-post-title"]}>Main picture</h3>
          <h4 className={styles["main-post-date"]}>28-07-2024</h4>
        </Link>
      </div>
      <div className={styles["post-content"]}></div>
    </div>
  );
};

export default SectionPost;
