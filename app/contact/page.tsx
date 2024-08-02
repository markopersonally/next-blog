import NavBar from "@/components/NavBar";
import Image from "next/image";
import photo1 from "@/images/photo1.png";
import photo2 from "@/images/photo2.png";
import photo3 from "@/images/photo3.png";
import styles from "./page.module.css";
import { SiCodeigniter } from "react-icons/si";
import { FiGitlab } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GiHeartInside } from "react-icons/gi";

export default function Contact() {
  return (
    <main>
      <div className={styles["wrapper-content"]}>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo1} alt="photo1" />
          <h3>
            <GiHeartInside />
          </h3>
          <h4>
            <SiCodeigniter />
          </h4>
        </div>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo2} alt="photo2" />
          <h3>
            <FiInstagram />
          </h3>
          <h4>
            <SiCodeigniter />
          </h4>
        </div>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo3} alt="photo3" />
          <h3>
            <FiGitlab />
          </h3>
          <h4>
            <SiCodeigniter />
          </h4>
        </div>
      </div>
    </main>
  );
}
