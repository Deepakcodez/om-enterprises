"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import useCookies from "@/hooks/useCookies";

import { Client } from "./Clients";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface UpdateClientProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  client: Client | null;
}

const UpdateClient: React.FC<UpdateClientProps> = ({ setOpen, client }) => {
  const fileTypes = ["PNG"];
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

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle File Change
  const handleFileChange = (file: File) => {
    setFile(file);
  };

  // Form Validation
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

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("comment", formData.comment);
      formDataToSend.append("rating", formData.rating.toString());
      if (file) {
        formDataToSend.append("image", file);
      }

      console.log("form to send", client, token);
      const response = await axios.put(
        `${process.env.BASE_URL}/api/v1/admin/update/client/${
          client?._id
        }`,
        formDataToSend,
        {
          headers: {
            authorization: `${token}`
          }
        }
      );

      if (response.status === 200) {
        setIsLoading(false);
        toast.success("Client updated successfully!");
        setOpen(false);
        router.push("/admin/clients"); // Redirect after update
      } else {
        toast.error("Failed to update client");
        setIsLoading(false);
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
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Logo (png 100*100)
            </label>
            <FileUploader
              multiple={false}
              handleChange={handleFileChange}
              name="file"
              types={fileTypes}
            />
            {formData.logo && (
              <Image
                src={formData.logo}
                alt="Current Logo"
                className="mt-2 h-20 w-20 object-cover rounded-md"
              />
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
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300"
          >
            {isLoading ? "Updating..." : "Update Client"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClient;
