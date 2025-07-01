"use client"
import { getJobQueries } from '@/services/services';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'


const Job:React.FC = () => {
    const { data } = useQuery(getJobQueries());
    const router = useRouter();
    
  return (
    <div onClick={()=> router.push("/admin/job")} className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 ">
    <h1 className="text-2xl text-gray-500">Job Queries</h1>
    <h1 className="text-9xl  text-gray-400">
      {data ? (
        data.length 
      ) : (
        <span className="text-2xl">loading...</span>
      )}
    </h1>
   
  </div>
  )
}

export default Job;
