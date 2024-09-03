"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAppContext } from "@/app/provider";
import styles from "./page.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const { isLogIn, onLogout } = useAppContext();

  useEffect(() => {
    if (!isLogIn) {
      return redirect("/login");
    }
  }, [isLogIn]);
  return (
    <>
      <button onClick={onLogout}>Log out</button>
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
          <tr>
            <td>1</td>
            <td>title</td>
            <td>date</td>
            <td>img</td>
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
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
