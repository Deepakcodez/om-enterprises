import { Clock, Timer } from "lucide-react";
import Image from "next/image";
import React from "react";
import BlogCard from "../common/BlogCard";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full ">
      <BlogCard  />
    </aside>
  );
};

export default Sidebar;
