import { getAllBlogs } from "@/services/services";
import { BLogType } from "@/types/Types";

import { MetadataRoute } from "next";

// const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
const frontendUrl = "https://omtel.ae";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allBlogs:BLogType[] = await getAllBlogs();

  const blogsSitemap = allBlogs.map((blog) => ({
    url: `${frontendUrl}/blog/${blog?.url}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.9,
  }
)).flat() as MetadataRoute.Sitemap;

  return [
    {
      url: `${frontendUrl}/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${frontendUrl}/aboutUs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${frontendUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${frontendUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${frontendUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${frontendUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...blogsSitemap
  ];
}
