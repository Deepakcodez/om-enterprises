"use client";

import axios from "axios";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import ImageToUrlParent from "../../components/ImageToUrlParent";
import TitleUrlTaker from "../../components/TitleUrlTaker";
import BlogTagTaker from "../../components/BlogTagTaker";
import BlogCategorySelector from "../../components/BlogCategorySelector";
import BlogImagetaker from "../../components/BlogImagetaker";
import BlogMetaDescriptionTaker from "../../components/BlogMetaDescriptionTaker";
import Tiptap from "../../components/BlogEditor";
import { BLogType } from "@/types/Types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const fetchBlogByTitle = async (title: string) => {
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

const BlogEditorTipTap = ({ slug }: { slug: string }) => {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | string | null>(null);
  const queryClient = useQueryClient();
  const [tags, setTags] = useState<string[]>(["general", "blog"]);
  const [tagInput, setTagInput] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [blog, setBlog] = useState<BLogType | null>(null);
  const formData = new FormData();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const getToken = () => {
    return Cookies.get("token");
  };


const handleSubmit = async () => {

  if (!title || !content || !url || !metaDescription) {
    toast.error('Please fill all required fields');
    return;
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('url', url);
  formData.append('categoryId', categoryId);
  formData.append('metaDescription', metaDescription);
  formData.append('tags', JSON.stringify(tags)); // Send as JSON string
  
  if (file) formData.append('image', file);
for (const [key, value] of formData.entries()) {
}
  try {
    setIsPosting(true);
    const resp = await axios.put(
      `${baseUrl}/api/v1/blog/edit/${blog?._id}`,
      formData,
      {
        headers: {
          'Authorization': getToken(),
           'Content-Type': 'multipart/form-data'
        }
      }
    );

    if (resp.status === 200) {
      toast.success('Blog updated successfully');
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      
    }
  } catch (error) {
    toast.error('Something went wrong');
  } finally {
    setIsPosting(false);
  }
}
  const fetchblog = async () => {
    const {blog}:{blog:BLogType} = await fetchBlogByTitle(slug);
    setBlog(blog);
    setContent(blog.content || "");
    setTitle(blog.title || "");
    setUrl(blog.url || "");
    setMetaDescription(blog.metaDescription || "");
    setCategoryId(blog.category._id || "");
    setTags(blog.tags || []);
    setFile(blog.image || null)
  };

  React.useEffect(() => {
    fetchblog();
  }, [slug]);

  const removeImage = () => {
    setFile(null);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-[100vh] h-auto grid grid-cols-12 text-black">
      <div className="lg:col-span-3 col-span-12 py-24">
        <ImageToUrlParent />
      </div>
      <div className="lg:col-span-6 col-span-12 ">
        {content && <Tiptap setContent={setContent} content={content} />}
      </div>
      <div className="lg:col-span-3 col-span-12 mt-2">
        <div className="p-2">
          <TitleUrlTaker
            title={title}
            setTitle={setTitle}
            url={url}
            setUrl={setUrl}
          />

          {/* Tags Input */}
          <BlogTagTaker
            tags={tags}
            setTags={setTags}
            tagInput={tagInput}
            setTagInput={setTagInput}
            handleAddTag={handleAddTag}
            removeTag={removeTag}
          />

          <BlogCategorySelector
            category={categoryId}
            setCategory={setCategoryId}
          />

          <BlogImagetaker
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            file={file}
            removeImage={removeImage}
          />

 
          <BlogMetaDescriptionTaker
            metaDescription={metaDescription}
            setMetaDescription={setMetaDescription}
          />
          <Button
            title={isPosting ? "Posting..." : "Publish"}
            onClick={handleSubmit}
            className="mt-4 w-full"
            disabled={isPosting}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogEditorTipTap;
