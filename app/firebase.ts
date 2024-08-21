import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBTFPlJVYln_M5QCNnCWfw-HG3YKscZ1E",
  authDomain: "blog-posts-c171b.firebaseapp.com",
  projectId: "blog-posts-c171b",
  storageBucket: "blog-posts-c171b.appspot.com",
  messagingSenderId: "702422064347",
  appId: "1:702422064347:web:c63248952cc780395740fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
