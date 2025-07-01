import React from "react";
import { motion } from "motion/react";

interface JobQueryCardProps {
  name: string;
  email: string;
  isFresher: boolean;
  availability: string;
  resume: string;
  jobId: { title: string };
}

const JobQueryCard: React.FC<JobQueryCardProps> = ({
  name,
  email,
  isFresher,
  availability,
  resume,
  jobId
}) => {
  console.log(jobId, resume);
  return (
    <motion.div
      className="bg-white hover:bg-OMblue/5 duration-700 shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-2 text-gray-700 font-medium">{jobId?.title}</p>
      <p className="mt-1 text-sm text-gray-500">
        {isFresher ? "Fresher" : "Experienced"}
      </p>
      {/* <p className="mt-2 text-gray-700">{experience}</p> */}
      <p className="mt-2 text-gray-700 font-medium">
        Availability: {availability}
      </p>
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-OMblue font-medium hover:underline"
      >
        View Resume
      </a>
    </motion.div>
  );
};

export default JobQueryCard;
