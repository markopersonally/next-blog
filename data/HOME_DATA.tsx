import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase.js";
import { StaticImageData } from "next/image";
import featuredImg from "@/images/tourist-8183867_1280.png";
import alien from "@/images/alien.png";
import cat from "@/images/cat.png";
import fish from "@/images/fish.png";
import univers from "@/images/univers.png";
import cobra from "@/images/cobra_1362523.png";

interface Post {
  img: StaticImageData;
  title: string;
  date: string;
}

const featuredPost: Post = {
  img: featuredImg,
  title: "Exploring the Tourist Spots",
  date: "July 29, 2024",
};

const postsList: Post[] = [
  {
    img: alien,
    title: "Alien Encounter",
    date: "August 1, 2024",
  },
  {
    img: cat,
    title: "Cats and Their Mysteries",
    date: "August 5, 2024",
  },
  {
    img: fish,
    title: "Underwater World",
    date: "August 10, 2024",
  },
  {
    img: univers,
    title: "Exploring the Universe",
    date: "September 29, 2024",
  },
  {
    img: cobra,
    title: "The World of Cobras",
    date: "October 15, 2024",
  },
];

async function uploadPosts(): Promise<void> {
  try {
    await addDoc(collection(db, "posts"), featuredPost);

    for (const post of postsList) {
      await addDoc(collection(db, "posts"), post);
    }

    console.log("Posts uploaded successfully!");
  } catch (error) {
    console.error("Error uploading posts: ", error);
  }
}

uploadPosts();
