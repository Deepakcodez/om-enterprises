

import { BlogT } from "./Blog";
import BlogsClient from "./Blogs";


async function getBlogs() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/blog/all`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  } catch (error) {
    console.error(error);
    return { blogs: [] };
  }
}

export default async function BlogPage() {
  const { blogs } = await getBlogs();

  return (
    <>
      <BlogsClient blogs={blogs} />
    </>
  );
}