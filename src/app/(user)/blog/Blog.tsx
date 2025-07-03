"use client";
import React from "react";
import BlogImage from "./components/BlogImage";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import BlogContent from "./components/BlogContent";
import useBlogger from "@/hooks/useBlogger";
import { MdDelete, MdEdit } from "react-icons/md";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DeleteBlogModal from "./components/DeleteBlogModal";
import BlogSubheading from "./components/BlogSubheading";
import {
  delelteBlog,
  fetchBlogByTitle,
  getBlogsQuery
} from "@/services/services";
import AllBlogs from "./components/AllBlogs";
import WideScreenHandler from "@/components/WideScreenHandler";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from "next/navigation";
import Head from "next/head";

export type BlogT = {
  _id: string;
  title: string;
  content: string;
  image: string | StaticImport;
  date: Date;
};
const Blog = ({ blog }: {  blog: BlogT }) => {
  const [sblog, setBlog] = React.useState<BlogT | null>(null);
  console.log(sblog)
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const { isBlogger } = useBlogger();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: blogs } = useQuery(getBlogsQuery());

  const fetchBlog = async () => {
    if (!blog.title) return;
    const blogResp = await fetchBlogByTitle(blog.title);
    setBlog(blogResp);
  };

  React.useEffect(() => {
    fetchBlog();
  });

  const delelteBlogHandler = async () => {
    if (blog?._id) {
      await delelteBlog(blog?._id);
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/blogs ");
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog.title, blog, isBlogger]);

  return (
    <WideScreenHandler>
      <XpaddingWrapper className="md:py-24 py-4 relative grid  grid-cols-12 gap-8">
        <div className="md:col-span-2 hidden md:flex"></div>

        <div className="md:col-span-8 col-span-12">
          <Head>
            <title>{blog?.title || "Digital marketing blogs"} </title>
            <meta
              name={blog?.title || "Digital marketing blogs"}
              content={blog?.content || "Digital marketing blog"}
            />
          </Head>
          {isBlogger && (
            <div>
              <div
                onClick={() => router.push(`/blog/edit/${blog?._id}`)}
                className="absolute bg-gradient-to-br from-purple-300 to-purple-400 rounded-full  text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/50 h-12 aspect-square flex justify-center items-center float-right  top-4 right-20"
              >
                <MdEdit />
              </div>
              <div
                onClick={() => setShowDeleteModal(true)}
                className="absolute bg-gradient-to-br from-purple-300 to-purple-400 rounded-full  text-white text-2xl cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/50 h-12 aspect-square flex justify-center items-center float-right  top-4 right-4"
              >
                <MdDelete />
              </div>
            </div>
          )}

          <div className="  relative  md:px-10 md:py-10 py-8  bg-gray-100 text-gray-900 flex flex-col gap-4 rounded-xl">
            <BlogImage image={blog?.image as string} />
            <BlogContent blog={blog} />
          </div>
          {blogs && (
            <div className="mt-12 ">
              <h1 className="text-5xl ">Related Blogs</h1>
              <AllBlogs blogs={blogs?.slice(0, 12)} />
            </div>
          )}

          {showDeleteModal && (
            <DeleteBlogModal
              delelteBlog={delelteBlogHandler}
              setShowDeleteModal={setShowDeleteModal}
            />
          )}
        </div>

        <div className="md:col-span-2 hidden md:flex">
          <BlogSubheading blog={blog} />
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default Blog;
