
"use client"
import React from "react";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import BlogImage from "./components/BlogImage";
import BlogList from "./components/BlogList";
import SingleMainBlog from "./components/BlogContent2";
import useBlogger from "@/hooks/useBlogger";
import { FaPenClip } from "react-icons/fa6";
import Link from "next/link";
import AllBlogs from "./components/AllBlogs";
import WideScreenHandler from "@/components/WideScreenHandler";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { BlogT } from "./Blog";

interface BlogsClientProps {
  blogs: BlogT[];
}

const BlogsClient: React.FC<BlogsClientProps> = ({ blogs }) => {
  const { isBlogger } = useBlogger();
  const router = useRouter();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Return early if no blogs
  if (!blogs || blogs.length === 0) {
    return (
      <WideScreenHandler className="min-h-[100vh]">
        <XpaddingWrapper className="py-32 text-center">
          <h1 className="text-2xl">No Blogs Found</h1>
        </XpaddingWrapper>
      </WideScreenHandler>
    );
  }

  const mainBlog = blogs[blogs.length - 1]; // Latest blog
  const blogList = blogs.slice(0, -1).reverse(); // Exclude latest and reverse
  const recentBlogs = blogs.slice(Math.max(blogs.length - 12, 0)).reverse(); // Last 12 blogs

  return (
    <WideScreenHandler className="min-h-[100vh] h-auto">
      <XpaddingWrapper className="relative">
        {isBlogger && (
          <Link
            href="/blogs/editor"
            className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-full text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/50 h-12 aspect-square flex justify-center items-center float-right absolute top-4 right-4"
          >
            <FaPenClip />
          </Link>
        )}

        <div className="grid grid-cols-12 gap-4 ">
          <div className="lg:col-span-8 col-span-12 my-12">
            <div className="border rounded-xl lg:p-12 p-4 flex flex-col gap-4">
              <BlogImage image={mainBlog.image} />
              <SingleMainBlog blog={mainBlog} />
            </div>
          </div>
          {/* <BlogList blogs={blogList} /> */}
        </div>

        <div className="h-[60rem] relative w-full">
          <h1 className="text-5xl text-black">All Blogs</h1>
          <AllBlogs blogs={recentBlogs} />
          <div className="absolute z-20 w-full bottom-32 flex justify-center">
            <Button
              onClick={() => router.push("/blog/all")}
              title="Read All Blogs"
            />
          </div>
          <div className="h-[20rem] w-full absolute bottom-0 bg-gradient-to-b from-transparent via-white to-white z-10" />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default BlogsClient;