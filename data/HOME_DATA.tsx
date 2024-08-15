import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase.js";

const featuredPost = {
  img: "featuredImg.png",
  title: "Exploring the Tourist Spots",
  date: "July 29, 2024",
};

const postsList = [
  {
    img: "alien.png",
    title: "Alien Encounter",
    date: "August 1, 2024",
  },
  {
    img: "cat.png",
    title: "Cats and Their Mysteries",
    date: "August 5, 2024",
  },
  {
    img: "fish.png",
    title: "Underwater World",
    date: "August 10, 2024",
  },
  {
    img: "univers.png",
    title: "Exploring the Universe",
    date: "September 29, 2024",
  },
  {
    img: "cobra_1362523.png",
    title: "The World of Cobras",
    date: "October 15, 2024",
  },
];

async function uploadPosts() {
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
