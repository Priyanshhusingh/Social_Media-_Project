import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const login = () => {
    setCurrentuser({
      id: 1,
      name: "priyanshu",
      profilePic:
        "https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
    });
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
