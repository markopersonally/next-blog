import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { Collections } from "@/types/enums/collections";
import { Post } from "@/types/interfaces/post";

export async function getPosts() {
  const postsCollection = collection(db, Collections.POSTS);
  const posts: Post[] = [];
  try {
    const postsSnapshot = await getDocs(postsCollection);
    postsSnapshot.forEach((document) => {
      const { id } = document;
      const { title, date, img } = document.data();
      const postObject = { id, title, date, img };
      posts.push(postObject);
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}

export async function addPost() {}

export async function deletePost() {}

export async function editPost() {}
