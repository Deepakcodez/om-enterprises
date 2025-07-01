import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgotPassword: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState<
    string | number | undefined
  >();
  const navigate = useRouter();

  const formHandler = async () => {
    const isEmail = /\S+@\S+\.\S+/.test(emailOrPhone as string); // Check if input is an email

    try {
      // Validate input
      if (!emailOrPhone) {
        toast.error("Please provide an email or phone number");
        return;
      }

      // Prepare payload based on input type
      const payload = isEmail
        ? { email: emailOrPhone }
        : { phone: emailOrPhone };

      // Send request to backend
      const resp = await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/login/generate/otp`,
        { payload } // Match the backend's expected request body structure
      );

      // Handle response
      if (resp.status === 200) {
        toast.success(
          isEmail ? "Mail sent successfully!" : "OTP sent successfully!"
        );
        navigate.push("/admin/verify-otp");
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error: any) {
      console.error("OTP generation error:", error);
      if (error.response && error.response.status === 400) {
        toast.error("Admin not found");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await formHandler();

    // Add logic to send OTP
    console.log("Sending OTP to:", emailOrPhone);
    // Redirect to OTP verification page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Image src={logo} alt="Logo" className="h-12  mx-auto" />
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue transition duration-300"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
