"use client";
import { useState, useContext, createContext } from "react";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

const AppContext = createContext({
  isLogIn: false,
  onLogout: () => {},
  onLogin: (user: string, password: string) => {},
  setIsLogIn: (isLogIn: boolean) => {},
});

export const useAppContext = () => useContext(AppContext);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  const onLogin = async (user: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, user, password);
      setIsLogIn(true);
      return true;
    } catch {
      return false;
    }
  };

  const onLogout = async () => {
    try {
      await signOut(auth);
      setIsLogIn(false);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AppContext.Provider value={{ isLogIn, onLogin, onLogout, setIsLogIn }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
