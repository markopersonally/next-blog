import Link from "next/link";
import Image from "next/image";
import styles from "./section-post.module.css";
import featuredPost from "@/data/HOME_DATA.tsx";

const SectionPost = () => {
  return (
    <div id={styles.container}>
      <div className={styles["featured-post"]}>
        <Link href="/">
          <div className={styles["featured-post-link"]}>
            <Image
              className={styles["featured-post-image"]}
              src={featuredPost.img}
              layout="fill"
              objectFit="cover"
              alt={featuredPost.title}
            />
          </div>
          <div className={styles["featured-post-description"]}>
            <h3 className={styles["featured-post-title"]}>
              {featuredPost.title}
            </h3>
            <h4 className={styles["featured-post-date"]}>
              {featuredPost.date}
            </h4>
          </div>
        </Link>
      </div>
      <div className={styles.postContent}></div>
    </div>
  );
};

export default SectionPost;
