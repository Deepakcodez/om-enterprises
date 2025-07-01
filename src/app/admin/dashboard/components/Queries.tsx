"use client"
import {
  getContactUsQuery,
  getInstantCallBackQuery
} from "@/services/services";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const Queries: React.FC = () => {
    const router = useRouter();
  const { data } = useQuery(queryOptions(getInstantCallBackQuery()));
  const { data: contactData } = useQuery(queryOptions(getContactUsQuery()));
  return (
    <div onClick={()=> router.push('/admin/queries')}   className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 ">
      <h1 className="text-2xl text-gray-500">Buisness Queries</h1>
      <h1 className="text-9xl  text-gray-400">
        {data && contactData ? (
          data.length + contactData.length
        ) : (
          <span className="text-2xl">loading...</span>
        )}
      </h1>
      <p className="text-gray-400">
        Buisness Queries : {contactData ? contactData.length : "loading..."}
      </p>
      <p className="text-gray-400">
        Callbacks Queries : {data ? data.length : "loading..."}
      </p>
    </div>
  );
};

export default Queries;
