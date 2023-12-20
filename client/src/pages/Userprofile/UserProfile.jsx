import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../../components/posts/Post";

function UserProfile() {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          className="w-48 h-48 rounded-[50%] object-cover absolute left-0 right-0 m-auto top-48"
        />
      </div>
      <div className="py-5 px-10">
        <div className="h-[180px] shadow-md p-12 rounded-2xl shadow-gray-400 flex items-center justify-between mb-5">
          <div className="flex-1 lg:flex gap-2">
            <a href="">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-2">
            <span className="text-[30px] font-medium">John</span>
            <div className="flex items-center justify-around w-full">
              <div className="flex items-center gap-1 text-gray-800">
                <PlaceIcon />
                <span className="text-xs">USA</span>
              </div>
              <div>
                <LanguageIcon />
                <span>hello.dev</span>
              </div>
            </div>
            <button className="rounded-md cursor-pointer bg-[#5271ff] py-2 px-4 text-white bordeer border-none">
              Follow
            </button>
          </div>
          <div className="flex-1 flex items-center justify-end gap-2">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Post />
      </div>
    </div>
  );
}

export default UserProfile;
