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

function Navbar() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex items-center justify-between px-3 h-[50px] border border-b-gray-300 bg-white dark:bg-[#222] sticky top-0 dark:text-white">
      <div className="flex items-center gap-[15px] lg:gap-[30px]">
        <Link to={"/"}>
          <span className="font-bold text-[20px] dark:text-white text-blue-700">
            social
          </span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggleDarkMode} />
        ) : (
          <NightlightOutlinedIcon onClick={toggleDarkMode} />
        )}
        <GridViewOutlinedIcon />
        <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="search..."
            className="border dark:bg-transparent outline-none border-none lg:w-[500px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 lg:gap-5">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="flex items-center gap-2 font-semibold">
          <img
            src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
            alt=""
            className="w-[30px] h-[30px] object-cover rounded-3xl"
          />
          <span>John Joe</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
