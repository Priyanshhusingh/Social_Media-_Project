import React from "react";

function LeftBar() {
  return (
    <div>
      <div>
        <div className="menu">
          <div className="flex items-center gap-2 font-semibold">
            <img
              src="https://th.bing.com/th?id=ORMS.f7e30e96e5d14c77c40a986b26c9afd4&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-3xl"
            />
            <span>John Joe</span>
          </div>
          <div className="item">
            {/* <img
              src="https://th.bing.com/th/id/OIP.JhavSLK3IqFER26PW7-AygHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
            /> */}
            <span>friends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
