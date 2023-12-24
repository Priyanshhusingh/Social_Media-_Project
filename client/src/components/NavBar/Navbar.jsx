import React, { useContext, useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/authcontext";

function Navbar() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentuser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between px-3 h-[50px] border border-b-gray-300 bg-white dark:bg-[#222] sticky top-0 dark:text-white z-[999]">
      <div className="flex items-center gap-[15px] lg:gap-[30px] ">
        <Link to={"/"}>
          <span className="font-bold text-[20px] dark:text-white text-blue-700">
            social
          </span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon
            onClick={toggleDarkMode}
            className="cursor-pointer"
          />
        ) : (
          <NightlightOutlinedIcon
            onClick={toggleDarkMode}
            className="cursor-pointer"
          />
        )}
        <GridViewOutlinedIcon />
        <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="search..."
            className="border hidden md:block dark:bg-transparent outline-none border-none lg:w-[500px] absolute top-16 w-[300px] p-2 rounded-2xl bg-black text-white md:static md:bg-transparent md:text-inherit md:rounded-none md:top-0 md:p-0 "
          />
        </div>
      </div>
      <div className="flex items-center gap-3 lg:gap-5">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="flex items-center gap-2 font-semibold">
          <img
            src={currentuser?.profilePic}
            alt=""
            className="w-[30px] h-[30px] object-cover rounded-3xl"
          />
          <span>{currentuser.data.user.username}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
