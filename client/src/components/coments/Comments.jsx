import React, { useContext } from "react";
import { AuthContext } from "../../context/authcontext";

function Comments() {
  const { currentuser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between gap-5 my-5 mx-0">
        <img src={currentuser?.profilePic} className="w-10 h-10 rounded-[50%] object-cover" />
        <input type="text" placeholder="write commment" className="w-full border border-solid bg-transparent" />
        <button className="border border-none bg-[#5271ff] text-white p-[10px] cursor-pointer rounded">Send</button>
      </div>
      {comments.map((comment) => (
        <div className="my-8 mx-0 flex justify-between gap-5">
          <img
            src={comment.profilePicture}
            className="w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col gap-1 items-start flx-[5]">
            <span className="font-medium">{comment.name}</span>
            <p className="text-gray-600">{comment.desc}</p>
          </div>
          <span className="flex-1 self-center text-gray-800 text-sm">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
}

export default Comments;
