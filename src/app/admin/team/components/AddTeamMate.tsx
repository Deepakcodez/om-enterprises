"use client"
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";
import useCookies from "@/hooks/useCookies";

interface AddTeamMateProps {
  setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddTeamMate: React.FC<AddTeamMateProps> = ({setOpen}) => {
  const fileTypes = ["JPEG", "PNG", "JPG"];
  const {getToken} = useCookies();
  const token = getToken();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
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
    const { name, designation, email, phone } = formData;

    // Basic validation
    if (!name || !designation || !email || !phone || !file) {
      toast.error("All fields are required");
      return false;
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }

    // Phone validation (simple check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number (must be 10 digits)");
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
      formDataToSend.append("designation", formData.designation);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      if (file) {
        formDataToSend.append("image", file); // Append the file to FormData
      }

      const response = await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/employee`,
        formDataToSend,
        {
          headers: {
            "authorization": token,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Teammate added successfully!");
        setFormData({
          name: "",
          designation: "",
          email: "",
          phone: "",
        });
        setFile(null); // Reset the file input
        setOpen(false)
      } else {
        setOpen(false)
        toast.error("Failed to add teammate");
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
          Add New Team-Mate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
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
              Name
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
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300"
          >
            Add Teammate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeamMate;