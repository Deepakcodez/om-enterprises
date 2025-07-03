import BlogCard from "@/components/common/BlogCard";
import React from "react";

 export interface Blogs {

  _id: string;
  title: string;
  content: string;
  image: string;
  date: Date
}

interface BlogProps {
  blogs: Blogs[];
}
const BlogList = ({ blogs }: BlogProps) => {
  console.log(blogs);
  return (
    <div className="lg:col-span-4  col-span-12 flex flex-col py-12 gap-4">
      <h1 className="font-semibold text-2xl text-black">Related Posts</h1>
      {blogs
        ?.slice(0, 4)
        .map(
          (blog: {
            _id: string;
            title: string;
            content: string;
            image: string;
            date: Date;
          }) => (
            <BlogCard blog={blog} key={blog._id} />
          )
        )}
      {/* <Button title="Read More" className="mt-4 w-full"   shimmer={false}/> */}
    </div>
  );
};

export default BlogList;
