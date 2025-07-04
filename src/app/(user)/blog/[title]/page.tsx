import React from "react";
import Blog from "../components/common/Blog";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
    const baseUrl = process.env.BASE_URL;
const fetchBlogByTitle = async (title: string) => {
  try {
    const res = await fetch(`${baseUrl}/api/v1/blog/url/${title}`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) throw new Error("Failed to fetch blog");
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await  params;
  
  try {
    const data = await fetchBlogByTitle(title);
    if (!data?.blog) {
      return {
        title: "Blog Not Found | OM Enterprises",
        description: "The requested blog post could not be found",
      };
    }

    const previousImages = (await parent).openGraph?.images || [];
    const blogImage = data.blog.image || "../../../../assets/images//blogbanner.png";

    return {
      title: `${data.blog.title} | OM Enterprises`,
      description: data.blog.metaDescription || data.blog.excerpt || "OM Enterprises blog post",
      openGraph: {
        title: data.blog.title,
        description: data.blog.metaDescription || data.blog.excerpt || "OM Enterprises blog post",
        url: `/blog/${title}`,
        images: [blogImage, ...previousImages],
        type: "article",
        publishedTime: data.blog.createdAt,
        authors: [data.blog.author || "OM Enterprises"],
      },
      twitter: {
        card: "summary_large_image",
        title: data.blog.title,
        description: data.blog.metaDescription || data.blog.excerpt || "OM Enterprises blog post",
        images: [blogImage],
      },
    };
  } catch (error) {
    return {
      title: "Blog | OM Enterprises",
      description: "OM Enterprises blog posts",
    };
  }
}

const SingleBlogPage = async ({ params }: { params: Promise<{ title: string }> }) => {
  const { title } = await params;
  
  try {
    const data = await fetchBlogByTitle(title);
    
    if (!data?.blog) {
      return <h1 className="text-center text-2xl font-bold py-12">Blog not found</h1>;
    }

    return (
      <div className="grid grid-cols-12 lg:gap-3">
        <div className="lg:col-span-3 hidden lg:flex py-12">
          {/* <Sidebar /> */}
        </div>
        <div className="lg:col-span-6 col-span-12">
          <Blog blog={data.blog} />
        </div>
        <div className="lg:col-span-3 hidden lg:flex">
          {/* <Checkpoints /> */}
        </div>
      </div>
    );
  } catch (error) {
    return <h1 className="text-center text-2xl font-bold py-12">Error loading blog</h1>;
  }
};

export default SingleBlogPage;