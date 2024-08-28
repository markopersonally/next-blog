"use client";
import { onLogout } from "@/utils/actions";
import { redirect } from "next/navigation";
import styles from "./page.module.css";

const Dashboard = () => {
  const handleLogOut = async () => {
    try {
      await onLogout();
      redirect("/");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <button onClick={handleLogOut}>Log out</button>
      <table>
        <thead>
          <tr>
            <th>id.post</th>
            <th>title.post</th>
            <th>edit.post</th>
            <th>delete.post</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>title</td>
            <td>edit</td>
            <td>delete</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Dashboard;
