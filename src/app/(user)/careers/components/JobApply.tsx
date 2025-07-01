import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];
interface jobApplyProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedId: string;
}
const JobApply: React.FC<jobApplyProps> = ({ setIsModalOpen, selectedId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    isFresher: false,
    availability: "",
    resume: null as File | null
  });

  // Handle text input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload via drag & drop
  const handleFileChange = (file: File) => {
    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const jobdata = new FormData();
    jobdata.append("jobId", selectedId);
    jobdata.append("name", formData.name);
    jobdata.append("email", formData.email);
    jobdata.append("isFresher", formData.isFresher.toString());
    jobdata.append("phone", formData.phone);
    jobdata.append("availability", formData.availability);
    if (formData.resume) jobdata.append("resume", formData.resume);

    try {
      const res = await axios.post(
        `${process.env.BASE_URL}/api/v1/user/apply/job`,
        jobdata,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.status === 200) {
        setIsModalOpen(false);
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          isFresher: false,
          availability: "",
          resume: null
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Submission failed.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center cursor-pointer">
      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Form</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Is Fresher
          </label>
          <input
            onChange={() =>
              setFormData((prev) => ({ ...prev, isFresher: !prev.isFresher }))
            }
            type="checkbox"
            checked={formData.isFresher}
            name="fresher"
            className="cursor-pointer cb1"
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label htmlFor="availability" className="block text-gray-700">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          >
            <option value="">Select Availability</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        {/* Resume Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Resume (PDF)</label>
          <FileUploader
            handleChange={handleFileChange}
            name="resume"
            types={fileTypes}
            multiple={false}
            label="Drag and drop or click to upload"
            hoverTitle="Drop here"
          />
          {formData.resume && (
            <p className="text-sm mt-2 text-green-600">
              Uploaded: {formData.resume.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-OMblue text-white p-2 rounded-lg hover:bg-OMblue transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApply;
