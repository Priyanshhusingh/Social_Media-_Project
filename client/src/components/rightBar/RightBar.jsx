import React from "react";

function RightBar() {
  return (
    <div className="flex-[3] sticky top-[70px] h-[calc(100vh-70px)] overflow-scroll scroll-hidden hidden md:block">
      <div>
        <div className="p-5">
          <div className="shadow-xl rounded-sm overflow-auto scroll-hidden p-5">
            <span className="text-gray-600">Suggestion for You</span>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <span className="font-medium">Jane Doe</span>
                <div className="flex items-center gap-3">
                  <button className="border border-none text-white cursor-pointer bg-blue-500 ">
                    Follow
                  </button>
                  <button className="border border-none text-white cursor-pointer bg-red-600 ">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <span className="font-medium">Jane Doe</span>
                <div className="flex items-center gap-3">
                  <button className="border border-none text-white cursor-pointer bg-blue-500 ">
                    Follow
                  </button>
                  <button className="border border-none text-white cursor-pointer bg-red-600 ">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-sm overflow-auto scroll-hidden p-5 mb-5">
            <span className="text-gray-600">Latest Activities</span>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <p className="text-gray-500">
                  <span className="font-medium">Jane Doe</span>
                  change their cover photo
                </p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <p className="text-gray-500">
                  <span className="font-medium">Jane Doe</span>
                  change their cover photo
                </p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <p className="text-gray-500">
                  <span className="font-medium">Jane Doe</span>
                  change their cover photo
                </p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <p className="text-gray-500">
                  <span className="font-medium">Jane Doe</span>
                  change their cover photo
                </p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <p className="text-gray-500">
                  <span className="font-medium">Jane Doe</span>
                  change their cover photo
                </p>
                <span>1 min ago</span>
              </div>
            </div>
          </div>
          <div>
            <span>Online Friends</span>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3 relative">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <div className="w-[12px] h-[12px] bg-lime-600 top-0 left-8 rounded-md absolute" />
                <span className="font-medium">Jane Doe</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3 relative">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <div className="w-[12px] h-[12px] bg-lime-600 top-0 left-8 rounded-md absolute" />
                <span className="font-medium">Jane Doe</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3 relative">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <div className="w-[12px] h-[12px] bg-lime-600 top-0 left-8 rounded-md absolute" />
                <span className="font-medium">Jane Doe</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3 relative">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <div className="w-[12px] h-[12px] bg-lime-600 top-0 left-8 rounded-md absolute" />
                <span className="font-medium">Jane Doe</span>
              </div>
            </div>
            <div className="flex items-center justify-between mx-3">
              <div className="flex items-center gap-3 relative">
                <img
                  src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
                  alt=""
                  className="w-[40px] h-[40px]  rounded-3xl object-cover"
                />
                <div className="w-[12px] h-[12px] bg-lime-600 top-0 left-8 rounded-md absolute" />
                <span className="font-medium">Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
