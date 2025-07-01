"use client"
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCookies from "@/hooks/useCookies";
import Button from "@/components/ui/Button";


interface RemoveEmpProps {
  empId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RemoveEmp: React.FC<RemoveEmpProps> = ({ empId, setOpen }) => {
  const { getToken } = useCookies();
  const token = getToken();
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("emp id", empId);
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.BASE_URL}/api/v1/admin/employee/${empId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setOpen(false);
        toast.success("Teammate added successfully!");
      } else {
        setLoading(false);
        setOpen(false);
        toast.error("Failed to add teammate");
      }
    } catch (error) {
      setLoading(false);
      setOpen(false);
      console.error("Error adding teammate:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen cursor-pointer">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Are your sure to remove Teammate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div onClick={() => setOpen(false)}>
              <Button
                title="Cancel"
                className="bg-transparent text-black border border-black/20 hover:bg-gray-100"
              />
            </div>
            <div
              onClick={() => {
                console.log("cancel");
              }}
            >
              <Button
                title={!isLoading ? "Remove" : "Loading"}
                type="submit"
                className="bg-red-400 hover:bg-red-300 text-white border border-black/20 "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RemoveEmp;
