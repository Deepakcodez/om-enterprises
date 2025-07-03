import moment from "moment";
import React from "react";
import { MdAccessTime } from "react-icons/md";
import "react-quill/dist/quill.snow.css";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { BlogT } from "./BlogSubheading";

const SingleMainBlog = ({ blog } : {blog: BlogT}) => {
  console.log(blog?._id);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{blog?.title || "Digital marketing blogs"} </title>
        <meta
          name={blog?.title || "Digital marketing blogs"}
          content={JSON.stringify(blog?.content) || "Digital marketing blog"}
        />
      </Head>
      <div className="w-full  flex flex-col gap-4  md:text-lg text-sm ">
        <h1 className="md:text-4xl text-xl font-semibold mb-4 text-black">
          {blog?.title}
        </h1>
        <div className="h-[20rem] overflow-hidden relative">
          <div
            className={`ql-editor  bg-white text-gray-900  lg:p-12 p-2 py-12 rounded-2xl lg:text-xl md:text-md text-sm `}
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />

          <Button
            onClick={() =>
              router.push(
                `/blog/${
                  blog?.title
                    .replace(/\?/g, "~") // only replace question marks
                    .replace(/\s+/g, "_") // replace spaces with underscores
                }`
              )
            }
            title="Read More"
            className="absolute bottom-4 right-4 z-10 w-full"
            shimmer={false}
          />
          <div className="inset-0 absolute bg-gradient-to-b from-transparent to-white bg-opacity-50" />
        </div>

        <p className="w-full text-right flex items-center justify-end gap-1 text-sm text-gray-500 mt-12">
          <MdAccessTime size={25} /> {moment(blog?.date).format("MMM Do YY")}
        </p>
      </div>
    </>
  );
};

export default SingleMainBlog;
