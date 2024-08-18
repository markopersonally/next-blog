import Image from "next/image";
import logo from "@/images/boy-8530678_1280.png";
import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles["content-about"]}>
        <h2>About me</h2>
        <Image className={styles["picuture-logo"]} src={logo} alt="logo" />
        <p className={styles.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          sapiente porro nihil iusto. Tenetur sed quia iusto rerum, repellat,
          omnis doloremque dolorem, vero quod eum eius. Ea impedit amet
          eligendi! Corporis sit maiores temporibus nostrum ratione, excepturi
          facere amet quasi adipisci repudiandae laboriosam obcaecati dolor in
          ad. Nulla id dolorum numquam iure sint necessitatibus eum voluptatum?
          Deleniti doloremque recusandae porro. Animi temporibus laudantium
          eius. Voluptatibus repellat vitae omnis quod ab assumenda, vel, eaque
          perferendis quaerat placeat ad officia id minus corporis sapiente
          alias modi! Eveniet quo cumque quod alias aut?
        </p>
      </div>
    </main>
  );
}
