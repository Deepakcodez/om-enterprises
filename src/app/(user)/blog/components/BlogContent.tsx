import moment from "moment";
import React from "react";
import { MdAccessTime } from "react-icons/md";
import "react-quill/dist/quill.snow.css";
import { BlogT } from "./BlogSubheading";

const BlogContent = ({blog}: {blog: BlogT}) => {

  
  return (
    <>
    <div className="w-full h-full  flex flex-col md:px-4 px-1 gap-4">
      <h1 className="lg:text-4xl text-xl font-bold text-blue-950">{blog?.title}</h1>
      <div
        // className=" bg-white  lg:p-12 p-2 py-12 rounded-2xl lg:text-xl md:text-md text-sm"
        className={`ql-editor  bg-white  lg:p-12 p-2 py-12 rounded-2xl lg:text-xl md:text-md text-sm `}
        dangerouslySetInnerHTML={{ __html: blog?.content || ""}}
        >
        
      </div>
        <p className="w-full text-right flex items-center justify-end gap-1 text-sm text-gray-500 px-2">
                <MdAccessTime size={25} /> {moment(blog?.date).format("MMM Do YY")}
        </p>
    
    </div>
        </>
  );
};

export default BlogContent;
