"use client";

import { useState } from "react";
import ImageToUrl from "./ImageToUrl";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import CreateCategory from "./CreateCategory";

export default function ImageToUrlParent() {
  const [isCopied, setIsCopied] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setIsCopied(true);
      // Reset after 2 seconds
      setTimeout(() => setIsCopied(false), 500);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold ">Upload Image</h1>
      <p className="mb-6 text-gray-400 text-sm">This Drop-zone provide you the direct image url</p>

      <ImageToUrl
        onUploadComplete={(url) => {
          console.log("Upload complete! Image URL:", url);
          setImageUrl(url);
        }}
      />

      {imageUrl && (
        <motion.div
          onTap={copyToClipBoard}
          animate={{
            backgroundColor: isCopied ? "#d6ffdd" : "#f9fafb", 
          
          }}
          whileTap={{scale:1.07}}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-gray-50 rounded-lg"
        >
          <h2 className="font-medium mb-2">Image URL:</h2>
          <p className="text-sm break-all">{imageUrl}</p>
        </motion.div>
      )}
      
      <CreateCategory/>

    </div>
  );
}
