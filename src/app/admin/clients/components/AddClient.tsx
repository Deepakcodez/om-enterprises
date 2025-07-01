"use client"
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import useCookies from "@/hooks/useCookies";

interface AddClientProps {
  setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddClient: React.FC<AddClientProps> = ({setOpen}) => {
  const fileTypes = [ "PNG", ];
  const {getToken} = useCookies();
  const token = getToken();
  const [formData, setFormData] = useState({
    name: "",
    comment : "",
    rating : 0,
  });
  const [file, setFile] = useState<File | null>(null); // State to store the uploaded file

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (file: File) => {
    setFile(file); // Store the uploaded file
  };

  const validateForm = () => {
    const { name, comment, rating } = formData;

    // Basic validation
    if (!name || !comment || !rating || !file) {
      toast.error("All fields are required");
      return false;
    }


    if (formData.rating > 5 || formData.rating < 1) {
      toast.error("Rating must be between 1-5");
      return false;
    }
    

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("comment", formData.comment);
      formDataToSend.append("rating", formData.rating.toString());
      if (file) {
        formDataToSend.append("image", file); // Append the file to FormData
      }

      const response = await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/add/client`,
        formDataToSend,
        {
          headers: {
            "authorization": token,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Client added successfully!");
        setFormData({
          name: "",
          comment: "",
          rating: 0,
        });
        setFile(null); // Reset the file input
        setOpen(false)
      } else {
        setOpen(false)
        toast.error("Failed to add client");
      }
    } catch (error) {
      console.error("Error adding teammate:", error);
      toast.error("Something went wrong!");
      setOpen(false)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen cursor-pointer">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Add New Client
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
              htmlFor="designation"
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
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClient;