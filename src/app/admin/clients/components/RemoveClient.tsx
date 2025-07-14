"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useCookies from "@/hooks/useCookies";

import { Client } from "./Clients";
import Button from "@/components/ui/Button";

interface RemoveClientProps {
  client: Client | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RemoveClient: React.FC<RemoveClientProps> = ({ client, setOpen }) => {
  const { getToken } = useCookies();
  const token = getToken();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/delete/client/${
          client?._id
        }`,
        {
          headers: {
            authorization: token
          }
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setOpen(false);
        toast.success("Client removed successfully!");
      } else {
        setLoading(false);
        setOpen(false);
        toast.error("Failed to remove client");
      }
    } catch (error) {
      setLoading(false);
      setOpen(false);
      console.error("Error adding teammate:", error);
      toast.error("Something went wrong!");
    }
  };
  useEffect(() => {
    setClientName(client?.companyName || "");
  }, [client]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen cursor-pointer">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">
          Are your sure to remove {clientName || "Client"}?
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
                title={isLoading ? "Removing" : "Remove"}
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

export default RemoveClient;
