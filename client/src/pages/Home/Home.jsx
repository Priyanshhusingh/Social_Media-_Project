import React from "react";
import Stories from "../../components/stories/Stories";
import Post from "../../components/posts/Post";

function Home() {
  return (
    <div className="dark:bg-[#333] dark:text-white">
      <Stories />
      <Post />
    </div>
  );
}

export default Home;
