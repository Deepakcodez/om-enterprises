import BlogCard from "@/components/common/BlogCard";
import React from "react";
import { BlogT } from "../Blog";

const AllBlogs = ({ blogs } : {blogs: BlogT[]}) => {
  console.log(blogs);

  return (
    <div className="grid grid-cols-4  gap-4 py-12">
      {blogs?.map((blog: BlogT) => (
        <div
          key={blog._id}
          className="lg:col-span-1 md:col-span-2 col-span-4 h-fit"
        >
          <BlogCard key={`${blog._id}_blog${blog.title}`} blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
