import Image from "next/image";
import img1 from "@/images/about1.png";
import img2 from "@/images/about2.png";
import styles from "./page.module.css";

const About = () => {
  return (
    <>
      <h2 className={styles.h2}>About me</h2>
      <div className={styles["about-content"]}>
        <button className={styles.button}>Click me!</button>
        <Image className={styles.img1} src={img1} alt="img1" />
        <p className={styles.paragraph}>
          I am a 24-year-old front-end programmer based near Warsaw, with a
          passion for creating dynamic and user-friendly web interfaces. With a
          solid foundation in modern web technologies and a keen eye for design,
          I specialize in building responsive and efficient applications that
          provide seamless user experiences. I am always eager to learn and stay
          updated with the latest industry trends, ensuring that my skills
          remain sharp and relevant. You can check out my work and see my coding
          journey on my GitHub profile, where I regularly contribute to
          projects.
        </p>
        <Image className={styles.img2} src={img2} alt="img2" />
      </div>
    </>
  );
};

export default About;
