import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Navbar from "./components/NavBar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Userprofile/UserProfile";

function App() {
  const currentuser = true;
  const ProtectRoute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="flex">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Layout />
            </ProtectRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
