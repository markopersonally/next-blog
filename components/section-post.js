import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import featuredPost from "@/data/HOME_DATA.tsx";

const SectionPost = () => {
  return (
    <div id={styles["container"]}>
      <div className={styles["main-post"]}>
        <Link href="/" className={styles["main-post-link"]}>
          <Image className={styles["main-post-image"]} src={featuredPost.img} />
          <h3 className={styles["main-post-title"]}>{featuredPost.title}</h3>
          <h4 className={styles["main-post-date"]}>{featuredPost.date}</h4>
        </Link>
      </div>
      <div className={styles["post-content"]}></div>
    </div>
  );
};

export default SectionPost;
