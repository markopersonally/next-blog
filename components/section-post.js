import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import featuredPost from "@/data/HOME_DATA.tsx";

const SectionPost = () => {
  return (
    <div id={styles["container"]}>
      <Link href="/" className={styles["featured-post"]}>
        <Image
          className={styles["featured-post-image"]}
          src={featuredPost.img}
        />
        <div className={styles["featured-post-description"]}>
          <h3 className={styles["featured-post-title"]}>
            {featuredPost.title}
          </h3>
          <h4 className={styles["featured-post-date"]}>{featuredPost.date}</h4>
        </div>
      </Link>
      <div className={styles["post-content"]}></div>
    </div>
  );
};

export default SectionPost;
