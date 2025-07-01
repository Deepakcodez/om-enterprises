import React, { useState } from "react";
import OtpInput from "react-otp-input";
import toast from "react-hot-toast";
import axios from "axios";
import useCookies from "@/hooks/useCookies";
import { useRouter } from "next/navigation";

const VerifyOTP: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const { setToken } = useCookies();
  const navigate = useRouter();

  const handleOpt = async () => {
    try {
      const resp = await axios.post(
        `${process.env.BASE_URL}/api/v1/admin/login/validate/otp`,
        { otp }
      );
      console.log(resp.data);
      if (resp.statusText === "OK") {
        setToken(resp.data.token);
        toast.success("OTP verified successfully!");
        navigate.push("/admin/change-password");
      } else {
        toast.error("failed to verify OTP");
      }
    } catch (error) {
      console.log(error);

      toast.error("failed to verify OTP");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to verify OTP
    await handleOpt();
    console.log("Verifying OTP:", otp);
    navigate.push("/admin/change-password"); // Redirect to dashboard on success
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              inputType="number"
              inputStyle={{
                width: "3rem",
                height: "3rem",
                fontSize: "1.25rem",
                borderRadius: "0.5rem",
                border: "1px solid #d1d5db",
                margin: "0 0.5rem"
              }}
              shouldAutoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
