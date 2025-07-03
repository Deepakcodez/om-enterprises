import { BlogT } from "../Blog";
import AllBlogsPage from "./AllBlogsPage";

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

export default async function CareerPage() {
  const { blogs } = await getBlogs();

  return (
    <>
      {/* SSR-rendered content for SEO */}
      <div className="hidden" aria-hidden="true">
        {blogs.map((blog: BlogT) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        
          </div>
        ))}
      </div>

      {/* Client-side component */}
      <AllBlogsPage blogs={blogs} />
    </>
  );
}