import Blog from "./components/common/Blog";
import Sidebar from "./components/sidebar/Sidebar";

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/blog/all`, {
      next: { revalidate: 3600 },
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
    <div className="grid grid-cols-12  4xl:h-[45rem] w-full  gap-6 my-12">
      <div className="lg:col-span-8 col-span-12   ">
        <Blog />
      </div>
      <div className="lg:col-span-4 col-span-12">
        <Sidebar />
      </div>
    </div>
  );
}
