"use client"
import React from "react";
import XpaddingWrapper from "@/components/XpaddingWrapper";
import BlogShimmerLoader from "@/components/common/BlogShimmerLoader";
import WideScreenHandler from "@/components/WideScreenHandler";
import AllBlogs from "../components/AllBlogs";
import { BlogT } from "../Blog";


interface AllBlogsPageProps {
  blogs: BlogT[];
}

const AllBlogsPage: React.FC<AllBlogsPageProps> = ({ blogs }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogs]);

  return (
    <WideScreenHandler className="py-12 ">
      <XpaddingWrapper>
        <h1 className="text-5xl text-black ">All Blogs</h1>
        {!blogs && <BlogShimmerLoader />}
        {blogs && <AllBlogs blogs={blogs} />}
      </XpaddingWrapper>
    </WideScreenHandler>
  );
};

export default AllBlogsPage;