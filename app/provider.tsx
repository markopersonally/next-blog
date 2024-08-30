"use client";
import { useState, useContext, createContext } from "react";

const AppContext = createContext({ isLogIn: false });

export const useAppContext = () => useContext(AppContext);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <AppContext.Provider value={{ isLogIn }}>
        {children}
    </AppContext.Provider>
  );
};

export default Provider;
