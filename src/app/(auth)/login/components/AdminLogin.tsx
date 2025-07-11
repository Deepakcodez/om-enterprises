"use client"
import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import useCookies from "@/hooks/useCookies";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { baseurl } from "@/utills/constant";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const navigate = useRouter();
  const { setToken } = useCookies();
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  const loginHandler = async () => {
    try {
      const resp = await axios.post(
        `${baseurl}/api/v1/admin/login`,
        { email, password }
      );
  
      if (resp.status === 200) {
        setToken(resp.data.token);
  
        const role = resp.data.role;
  
        if (role === "admin") {
          navigate.push("/admin/dashboard");
        } else if (role === "blogger") {
          navigate.push("/blogs/editor");
        } else {
          toast.error("You do not have access.");
        }
      } else {
        toast.error("Failed to login");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong during login");
    }
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your login logic here
    await loginHandler();
    setIsSubmitting(false);
  };

  const handleForgotPassword = () => {
    navigate.push("/admin/forgot-password"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Image quality={100} src={logo} alt="Logo" className=" h-24 w-auto  mx-auto" />
        <h2 className="text-2xl text-gray-900/50 font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-OMblue"
            required
          />
          <button
            type="submit"
            className="w-full bg-OMblue text-white py-2 rounded-lg hover:bg-OMblue/80 transition duration-300"
          >
            {isSubmitting ? "Loading...": "Login"}
          </button>
        </form>
        <p
          className="mt-4 text-OMblue text-sm text-center cursor-pointer hover:underline"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
