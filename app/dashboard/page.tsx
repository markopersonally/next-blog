"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { useAppContext } from "../provider";

const Dashboard = () => {
  const [isLogOut, setIsLogOut] = useState(false);

  const { isLogIn, onLogout } = useAppContext();

  useEffect(() => {
    if (isLogIn) {
      return redirect("/login");
    }
    console.log(isLogIn);
  }, [isLogIn]);

  // const handleLogOut = async () => {
  //   try {
  //     await onLogout();
  //     setIsLogOut(true);
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Log out</button>
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
