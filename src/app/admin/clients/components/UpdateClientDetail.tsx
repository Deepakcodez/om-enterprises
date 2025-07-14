"use client"
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import useCookies from "@/hooks/useCookies";
import { Client } from "./Clients";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface UpdateClientProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  client: Client | null;
}

const UpdateClient: React.FC<UpdateClientProps> = ({ setOpen, client }) => {
  const { getToken } = useCookies();
  const token = getToken();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 0,
    logo: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const acceptedFile = acceptedFiles[0];
    if (!acceptedFile) return;
    
    // Validate PNG file
    if (!acceptedFile.type.match('image/png')) {
      toast.error("Only PNG images are allowed");
      return;
    }
    
    setFile(acceptedFile);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, comment, rating } = formData;

    if (!name || !comment || !rating) {
      toast.error("All fields are required");
      return false;
    }

    if (rating > 5 || rating < 1) {
      toast.error("Rating must be between 1-5");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("comment", formData.comment);
      formDataToSend.append("rating", formData.rating.toString());
      if (file) {
        formDataToSend.append("image", file);
      }

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/update/client/${client?._id}`,
        formDataToSend,
        {
          headers: {
            authorization: `${token}`,
            "Content-Type": "multipart/form-data",
          }
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        toast.success("Client updated successfully!");
        setOpen(false);
        router.push("/admin/clients");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error updating client:", error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (client) {
      setFormData({
        name: client.companyName || "",
        comment: client.comment || "",
        rating: client.rating || 0,
        logo: client.img || ""
      });
    }
  }, [client]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen cursor-pointer">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Update Client Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo (PNG 100×100)
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
                isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              {file ? (
                <p className="text-green-600">{file.name}</p>
              ) : isDragActive ? (
                <p className="text-blue-500">Drop the PNG file here...</p>
              ) : (
                <p>Drag & drop a PNG file here, or click to select</p>
              )}
            </div>
            {formData.logo && !file && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Current Logo:</p>
                <Image
                  src={formData.logo}
                  alt="Current Logo"
                  height={100}
                  width={100}
                  className="h-20 w-20 object-cover rounded-md"
                />
              </div>
            )}
            {file && (
              <button
                type="button"
                onClick={() => setFile(null)}
                className="mt-2 text-sm text-red-500 hover:text-red-700"
              >
                Remove file
              </button>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Client Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Updating..." : "Update Client"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClient;