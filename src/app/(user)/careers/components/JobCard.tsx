
import Button from "@/components/ui/Button";
import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";

interface JobCardProps {
  jobId : string
  title: string;
  qualification: string;
  gender: string;
  mandatory: string;
  skills: string;
  location: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

const JobCard: React.FC<JobCardProps> = ({
  jobId ,
  title,
  qualification,
  gender,
  mandatory,
  skills,
  location,
  isModalOpen,
  setIsModalOpen,
  setSelectedId
}) => {

  return (
    <div className="w-full flex flex-col border border-gray-200 px-4 py-8 rounded-md shadow-[inset_23px_4px_28px_0px_rgba(0,_0,_0,_0.02)] backdrop-blur-lg">
      <div className="flex gap-2 items-start">
        <div className="bg-OMblue  shadow-lg shadow-OMblue/50 text-white p-4 rounded-lg">
          <MdOutlineWorkOutline size={20} />
        </div>
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
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
            {qualification}
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
            {gender}
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
            {mandatory}
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
            {skills}
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
            {location}
          </p>
        </div>
      </div>
      <div onClick={() => {
        setSelectedId(jobId)
        setIsModalOpen(!isModalOpen)}}>
      <Button title="Apply Now" shimmer={false} className="w-full rounded-lg mt-7"  />
      </div>
    </div>
  );
};

export default JobCard;
