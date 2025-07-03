"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { useEffect, useState } from "react";

export type BlogT = {
  _id: string;
  title: string;
  content: string;
  image: string | undefined | StaticImport;
  date: Date;
};

const BlogSubheading = ({ blog }: { blog: BlogT | null }) => {
  const [subheadings, setSubheadings] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && blog?.content) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(blog.content, 'text/html');
        
        const largeElements = doc.querySelectorAll('.ql-size-large');
        // Extract text content instead of HTML to avoid XSS and make links work better
        const headingsArray = Array.from(largeElements).map(el => el.textContent || '');
        
        setSubheadings(headingsArray);
      } catch (error) {
        console.error("Error parsing content:", error);
      }
    }
  }, [blog?.content]);

  // Generate safe IDs for anchor links
  const generateAnchorId = (text: string, index: number) => {
    return `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  return (
    <div className='fixed  rounded-xl h-full flex flex-col items-start gap-4 justify-start p-4 py-6 max-h-[80vh] overflow-y-auto border-l'>
      {subheadings.map((heading, index) => (
        <Link
          key={index}
          href={`#${generateAnchorId(heading, index)}`}
          className="w-full hover:bg-gray-100 px-2 py-1 rounded transition-colors "
        >
          <p className='text-sm font-semibold text-gray-500 truncate hover:text-OMblue'>
            {heading}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogSubheading;