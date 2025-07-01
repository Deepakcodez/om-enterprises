"use client";
import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobApply from "./JobApply";
import NoOpeningsCard from "./NoOpening";
import Modal from "@/components/functionality/Modal";
import JobCardSkeleton from "./JobcardSkelton";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/services/services";

export interface Job {
  _id: string;
  title: string;
  qualification: string;
  gender: string;
  mandatory: string;
  skill: string;
  location: string;
}




export const Job: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
   const {isPending, data:jobs} = useQuery(getJobs())




  return (
    <div className="md:mt-36 mb-24">
      <div className="relative mb-12">
        <h1 className="text-3xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text ">
          OPPORTUNITIES
        </h1>
        <h1 className="text-4xl font-bold text-center text-blue-950">
          Explore Our Job Opportunities
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isPending ? (
          <JobCardSkeleton />
        ) : (
          <>
            {jobs && jobs.length > 0 ? (
              jobs.map((job:Job) => (
                <JobCard
                  key={job._id}
                  jobId={job._id}
                  title={job.title}
                  qualification={job.qualification}
                  gender={job.gender}
                  mandatory={job.mandatory}
                  skills={job.skill}
                  location={job.location}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedId={setSelectedId}
                />
              ))
            ) : (
              <div className="w-full col-span-full">
                <NoOpeningsCard />
              </div>
            )}
          </>
        )}
      </div>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <JobApply selectedId={selectedId} setIsModalOpen={setIsModalOpen} />
        </Modal>
      )}
    </div>
  );
};