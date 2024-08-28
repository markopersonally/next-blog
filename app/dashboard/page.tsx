"use client";
import { onLogout } from "@/utils/actions";

const Dashboard = () => {
  const handleLogOut = async () => {
    try {
      await onLogout();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <h1>Success</h1>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
};

export default Dashboard;
