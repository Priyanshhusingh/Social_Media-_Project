import React from "react";

function LeftBar() {
  return (
    <div className="flex-[2] sticky top-[70px] h-[calc(100vh-70px)] overflow-scroll scroll-hidden hidden md:block">
      <div className="p-5">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 font-semibold">
            <img
              src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-3xl"
            />
            <span className="text-[14px]">John Joe</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/1.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">friends</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/2.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Groups</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/3.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Marketplace</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/4.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Watch</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/5.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Memories</span>
          </div>
        </div>
        <hr className="my-3 border border-none h-[0.5px] bg-gray-300" />
        <div className="flex flex-col gap-5">
          <span className="text-[12px]">Your Sortcuts</span>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/6.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Events</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/7.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Gaming</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/8.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Gallery</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/9.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Videos</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/10.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Messages</span>
          </div>
        </div>
        <hr className="my-3 border border-none h-[0.5px] bg-gray-300" />
        <div className="flex flex-col gap-5">
          <span className="text-[14px]">Others</span>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/13.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Fundraiser</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/11.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Tutorials</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/12.png?raw=true"
              alt=""
              className="w-[30px]"
            />
            <span className="text-[14px]">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
