import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const login = async (input) => {
    await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => setCurrentuser(data));
    return true;
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
