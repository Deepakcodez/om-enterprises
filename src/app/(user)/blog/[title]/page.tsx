import React from "react";
import Blog from "../components/common/Blog";
import Sidebar from "../components/sidebar/Sidebar";
import Checkpoints from "./components/Checkpoints";

const SingleBlogPage = () => {
  return (
    <div className="grid grid-cols-12 gap-3 ">
      <div className="lg:col-span-3 hidden lg:flex py-12">
        {/* <Sidebar /> */}
      </div>
      <div className=" lg:col-span-6 col-span-12 py-12">
        <Blog />
      </div>

      <div className=" lg:col-span-3 hidden lg:flex border-l  ">
        <Checkpoints />
      </div>
    </div>
  );
};

export default SingleBlogPage;
