import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link, useSearchParams } from "react-router-dom";
import Comments from "../coments/Comments";

function Posts({ post }) {
  const liked = false;
  const [commentOpen, setcommentOPen] = useState(false);
  return (
    <div className="shadow-lg shadow-gray-400 dark:shadow-gray-900 rounded-lg">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <img
              src={post.profilePic}
              className="w-10 h-10 rounded-[50%] object-cover"
            />
            <div className="flex flex-col ">
              <Link
                to={`/profile/${post.id}`}
                className="no-underline bg-inherit"
              >
                <span className="font-medium ">{post.name}</span>
              </Link>
              <span className="text-xs">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="ml-5 mr-0">
          <p>{post.desc}</p>
          <img
            src={post.img}
            className="w-full max-h-[500px] object-cover mt-5 "
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 cursor-pointer text-sm">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer text-sm"
            onClick={() => setcommentOPen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="flex items-center gap-3 cursor-pointer text-sm">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Posts;
