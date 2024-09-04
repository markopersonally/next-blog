"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppContext } from "@/app/provider";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
import styles from "./page.module.css";

const Dashboard = () => {
  // @ts-ignore
  const { isLogIn, getPosts, allPosts } = useAppContext();

  useEffect(() => {
    getPosts();
    console.log(allPosts);
  }, []);

  useEffect(() => {
    if (!isLogIn) {
      return redirect("/login");
    }
  }, [isLogIn]);

  return (
    <>
      <h1 className={styles.h1}>Dashboard</h1>
      <button className={styles.add}>+ Create post</button>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>date</th>
            <th>img</th>
            <th>edit post</th>
            <th>delete post</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {(allPosts as any).map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>
                <Image
                  width={25}
                  height={25}
                  src={post.img}
                  alt={post.title}
                />
              </td>
              <td>
                <button className={styles.edit}>
                  <FaEdit />
                </button>
              </td>
              <td>
                <button className={styles.delete}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
