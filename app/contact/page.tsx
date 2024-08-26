import Image from "next/image";
import photo1 from "@/images/photo1.png";
import photo2 from "@/images/photo2.png";
import photo3 from "@/images/photo3.png";
import styles from "./page.module.css";
import { SiCodeigniter } from "react-icons/si";
import { FiGitlab } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GiHeartInside } from "react-icons/gi";

const Contact = () => {
  return (
    <main>
      <div className={styles.backdrop}></div>
      <h2 className={styles.h2}>Skontaktuj się ze mną!</h2>
      <div className={styles["wrapper-content"]}>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo1} alt="photo1" />
          <h3>
            <GiHeartInside />
            @phone
          </h3>
          <h4>
            <SiCodeigniter />
            @phone
          </h4>
        </div>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo2} alt="photo2" />
          <h3>
            <FiInstagram />
            @instagram
          </h3>
          <h4>
            <SiCodeigniter />
            @instagram
          </h4>
        </div>
        <div className={styles["box-content"]}>
          <Image className={styles.photo} src={photo3} alt="photo3" />
          <h3>
            <FiGitlab />
            @git
          </h3>
          <h4>
            <SiCodeigniter />
            @git
          </h4>
        </div>
      </div>
    </main>
  );
};

export default Contact;
