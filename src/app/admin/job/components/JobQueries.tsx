"use client";
import React from "react";
import JobQueryCard from "./JObQueryCards";
import { getJobQueries } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

const UserCardsList: React.FC<{
  refresh: boolean;
}> = ({ refresh }) => {
  const { data, isPending, refetch } = useQuery(getJobQueries());

  React.useEffect(() => {
    refetch();
  }, [refresh]);
  return (
    // <div className="flex flex-wrap gap-6 justify-center p-6  bg-red-800  h-screen relative z-50 overflow-y-scroll">
    <div className="grid grid-cols-3 gap-6  place-items-center  ">
      {isPending && <h1>Loading...</h1>}
      {data?.toReversed().map((job: any) => (
        <JobQueryCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default UserCardsList;
