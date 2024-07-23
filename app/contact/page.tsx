import NavBar from "@/components/NavBar";
import Image from "next/image";
import photo1 from "@/images/photo1.png";
import photo2 from "@/images/photo2.png";
import photo3 from "@/images/photo3.png";

export default function Contact() {
  return (
    <main>
      <NavBar />
      <div>
        <div>
          <Image src={photo1} alt="photo1" />
          <h3>TITLE</h3>
          <h4>TITLE</h4>
        </div>
        <div>
          <Image src={photo2} alt="photo2" />
          <h3>TITLE</h3>
          <h4>TITLE</h4>
        </div>
        <div>
          <Image src={photo3} alt="photo3" />
          <h3>TITLE</h3>
          <h4>TITLE</h4>
        </div>
      </div>
    </main>
  );
}
