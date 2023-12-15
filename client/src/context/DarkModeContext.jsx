import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.querySelector("body");
    const currentMode = !darkMode;
    setDarkMode(currentMode);
    if (currentMode) {
      body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  // Function to initialize dark mode based on local storage
  const initializeDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") {
      setDarkMode(true);
      document.querySelector("body").classList.add("dark");
    }
  };

  useEffect(() => {
    initializeDarkMode();
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
