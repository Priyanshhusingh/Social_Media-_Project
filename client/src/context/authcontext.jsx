import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const login = () => {
;
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentuser));
  }, [currentuser]);
  return (
    <AuthContext.Provider value={{ currentuser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
