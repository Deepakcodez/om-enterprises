"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCookies from "@/hooks/useCookies";
import Image from "next/image";

interface TeamMate {
  _id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
}

const EditTeamMateDetails: React.FC<{
  emp: TeamMate;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ emp, setOpen }) => {
  const { getToken } = useCookies();
  const token = getToken();
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
  });
    const[ isLoading, setLoading] = useState<boolean>(false)
  // Initialize form data with the teammate's data
  useEffect(() => {
    if (emp) {
      setFormData({
        name: emp.name,
        designation: emp.designation,
        email: emp.email,
        phone: emp.phone,
      });
    }
  }, [emp]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, designation, email, phone } = formData;

    if (!name || !designation || !email || !phone) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Invalid phone number (must be 10 digits)");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    if (!validateForm()) return;

    try {
    
      console.log("form to send", formData);
      const response = await axios.put(
        `${process.env.BASE_URL}/api/v1/admin/employee/${emp._id}`,
        formData,
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (response.status === 200) {
        setOpen(false);
        setLoading(false)
        toast.success("Teammate updated successfully!");
      } else {
        toast.error("Failed to update teammate");
      }
    } catch (error) {
      setLoading(false)
      setOpen(false)
      console.error("Error updating teammate:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen cursor-pointer">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Edit Teammate Details
        </h2>
        <Image src={emp.image} alt="image" className="bg-gray-100 rounded-lg" />
        <form onSubmit={handleSubmit} className="space-y-4">
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
           { !isLoading ?  "Update" : "Loading..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTeamMateDetails;
