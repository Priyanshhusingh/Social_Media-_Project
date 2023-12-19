import React, { useContext } from "react";
import { AuthContext } from "../../context/authcontext";

function Stories() {
  const { currentuser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];
  return (
    <div className="flex gap-3 h-[200px] mb-8">
      <div className="flex-1 rounded-xl overflow-hidden relative">
        <img
          src={currentuser.profilePic}
          className="w-full object-cover h-full"
        />
        <span className="absolute bottom-2 left-3 font-medium">{currentuser.name}</span>
        <button className="absolute bottom-10 left-3 bg-blue-500 border border-none rounded-[50%] w-8 h-8 cursor-pointer text-[30px] flex items-center justify-center">+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="flex-1 rounded-xl overflow-hidden relative">
            <img src={story.img} className="w-full object-cover h-full" />
            <span className="absolute bottom-2 left-3 font-medium">
              {story.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
