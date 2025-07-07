"use client";

import Input from "@/components/ui/Input";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { useQueryClient } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Tiptap from "./BlogEditor";
import BlogTagTaker from "./BlogTagTaker";
import TitleUrlTaker from "./TitleUrlTaker";
import BlogImagetaker from "./BlogImagetaker";
import BlogMetaDescriptionTaker from "./BlogMetaDescriptionTaker";
import ImageToUrlParent from "./ImageToUrlParent";

const baseUrl = process.env.BASE_URL;

const BlogEditorTipTap: React.FC = () => {
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useRouter();
  const queryClient = useQueryClient();
  const [tags, setTags] = useState<string[]>(["general", "blog"]);
  const [tagInput, setTagInput] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
 const [content, setContent] = useState<string>('');


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
    console.log("contnet  ",content);
    if (!title || !content || !url || !metaDescription ) return console.log("Please fill all required fields", title, content, url, metaDescription);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("url", url)
    formData.append("metaDescription", metaDescription)
    formData.append("tags", tags.join(","))

    if (file) formData.append("image", file);

    try {
      setIsPosting(true);
      const resp = await axios.post(`http://localhost:3001/api/v1/blog/create`, formData, {
        headers: { 
          authorization: getToken(),
          "Content-Type": "multipart/form-data",
        },
      });

      if (resp.status === 200) {
        toast.success("Blog created successfully");
        queryClient.invalidateQueries({ queryKey: ["blogs"] });
        navigate.push("/blogs");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsPosting(false);
    }
  };

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
        <ImageToUrlParent/>
      </div>
      <div className="lg:col-span-6 col-span-12 ">
        <Tiptap setContent={setContent} />
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

          <BlogImagetaker
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            file={file}
            removeImage={removeImage}
          />

          {/* <div className="mt-2"> */}
          {/* <Tiptap value={value} onChange={setValue} /> */}
          {/* <Tiptap /> */}
          {/* </div> */}
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
