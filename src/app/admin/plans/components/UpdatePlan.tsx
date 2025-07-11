"use client";
import Button from "@/components/ui/Button";
import { handleUpdatePlan } from "@/services/services";
import { UpdatePlanProps } from "@/types/Types";

import React from "react";

const UpdatePlan: React.FC<UpdatePlanProps> = ({
  title,
  price,
  features,
  id,
  refresh,
  setRefresh,
  setIsModalOpen
}) => {
  const [updatedTitle, setUpdatedTitle] = React.useState<string>(title);
  const [updatedPrice, setUpdatedPrice] = React.useState<string | number>(price);
  const [isUpdating, setIsUpdating] = React.useState<boolean>(false);
  const [updatedFeatures, setUpdatedFeatures] =
    React.useState<string[]>(features);

  const handleEdit = async (id:string) => {
    setIsUpdating(true);
    const data = {
      title: updatedTitle,
      price: updatedPrice,
      descriptions: updatedFeatures
    };
    await handleUpdatePlan(id, data);
    setRefresh(!refresh);
    setIsUpdating(false);
    setIsModalOpen(false);
  };

  return (
    <div className="cursor-pointer">
      <div className="bg-gray-100 border border-gray-200 p-4  rounded-md">
        <h1 className="text-6xl text-blue-950/40 font-semibold">Update Plan</h1>

        <div className="mt-4  flex flex-col gap-1">
          <label htmlFor="title">
            <h1 className=" text-blue-950/40 font-semibold">Title</h1>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
              placeholder={title}
            />
          </label>
          <label htmlFor="price">
            <h1 className=" text-blue-950/40 font-semibold">Price</h1>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setUpdatedPrice(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
              placeholder="Enter New Price"
            />
          </label>
          <label htmlFor="features">
            <h1 className=" text-blue-950/40 font-semibold">Features</h1>
            {features.map((feature, index) => (
              <input
                key={index}
                type="text"
                name="features"
                id="features"
                onChange={(e) => {
                  console.log(e.target.value);
                  setUpdatedFeatures((prev) => {
                    prev[index] = e.target.value;
                    return prev;
                  });
                  console.log(features);
                }}
                className="p-2 mb-2 border border-gray-300 rounded-md text-blue-950/90 w-full focus:outline-none focus:border-none"
                placeholder={feature}
              />
            ))}
          </label>
          <div
            onClick={() => {
              handleEdit(id);
            }}
            className="w-full"
          >
            <Button
              title={isUpdating ? "Updating..." : "Update Plan"}
              className="hover: bg-gradient-to-br hover:from-violet-300 hover:to-violet-600 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlan;
