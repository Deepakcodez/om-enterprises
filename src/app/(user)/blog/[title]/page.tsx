import { fetchBlogByTitle } from "@/services/services";
import Blog from "../Blog";
import { Metadata, ResolvingMetadata } from "next";

type PageProps = {
  params: {
    title: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };

};

export async function generateMetadata({ params }: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const decodedTitle = decodeURIComponent(params.title)
    .replace(/\?/g, "~")
    .replace(/\s+/g, "_");

  const blog = await fetchBlogByTitle(decodedTitle);

  return {
    title: `${blog.title}   `,
    description: blog.content.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 160),
      images: [blog.image],
      type: "article"
    },
    alternates: {
      canonical: `https://yoursite.com/blog/${params.title}`
    }
  };
}

export default async function Page({ params }: PageProps) {
  const decodedTitle = decodeURIComponent(params.title)
    .replace(/\?/g, "~")
    .replace(/\s+/g, "_");

  const blog = await fetchBlogByTitle(decodedTitle);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.content.substring(0, 160),
            image: blog.image,
            author: {
              "@type": "Person",
              name: "Author Name"
            }
          })
        }}
      />
      <Blog blog={blog} />
    </>
  );
}