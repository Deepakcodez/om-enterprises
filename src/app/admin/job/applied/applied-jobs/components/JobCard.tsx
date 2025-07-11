"use client"
import Button from "@/components/ui/Button";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineWorkOutline } from "react-icons/md";

const JobCard: React.FC<any> = ({ jobs, setRefresh, refresh }) => {
  const { getToken } = useCookies();
  const token = getToken();
  const[isLoading, setLoading] = useState<boolean>(false);
  const removeJob = async (jobId: any) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/delete/job/${jobId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      if(response.status === 200){
        setLoading(false);
        toast.success("Job removed successfully!");
        setRefresh(!refresh);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove job");
      setLoading(false);
    }
  };

  return (
    <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        jobs.length == 0 &&
        <h1 className="text-9xl opacity-5">NO Jobs</h1>
      }
      {jobs.map((job: any, index: number) => (
        <div
          key={index}
          className=" flex flex-col border border-gray-200 px-4 py-8 rounded-md shadow-[inset_23px_4px_28px_0px_rgba(0,_0,_0,_0.02)] backdrop-blur-lg"
        >
          <div className="flex gap-2 items-start">
            <div className="bg-OMblue  shadow-lg shadow-OMblue/50 text-white p-4 rounded-lg">
              <MdOutlineWorkOutline size={20} />
            </div>
            <h1 className="text-2xl font-semibold">{job?.title}</h1>
          </div>
          <div className="w-full flex flex-col cursor-pointer mt-4">
            <div className="flex justify-between gap-4 text-gray-500">
              <h1 className="font-semibold">Qualification:</h1>
              <p
                style={{
                  fontSize: "clamp(0.5rem, 1rem , 1.2rem)",
                }}
                className="text-start"
              >
                {job?.qualification}
              </p>
            </div>
            <div className="flex justify-between gap-4 text-gray-500">
              <h1 className="font-semibold">Gender:</h1>
              <p
                style={{
                  fontSize: "clamp(0.5rem, 1rem , 1.2rem)",
                }}
                className="text-start"
              >
                {job?.gender}
              </p>
            </div>
            <div className="flex justify-between gap-4 text-gray-500">
              <h1 className="font-semibold">Mandatory:</h1>
              <p
                style={{
                  fontSize: "clamp(0.5rem, 1rem , 1.2rem)",
                }}
                className="text-start"
              >
                {job?.mandatory}
              </p>
            </div>
            <div className="flex justify-between gap-4 text-gray-500">
              <h1 className="font-semibold">Skills:</h1>
              <p
                style={{
                  fontSize: "clamp(0.5rem, 1rem , 1.2rem)",
                }}
                className="text-start"
              >
                {job?.skill}
              </p>
            </div>
            <div className="flex justify-between gap-4 text-gray-500">
              <h1 className="font-semibold">Location:</h1>
              <p
                style={{
                  fontSize: "clamp(0.5rem, 1rem , 1.2rem)",
                }}
                className="text-start"
              >
                {job?.location}
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              removeJob(job?._id);
            }}
          >
            <Button title={isLoading ? "Removing..." : "Remove"} className="w-full rounded-lg mt-7" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
