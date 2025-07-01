import React from "react";


interface AddressProps {
    title: string;
    description: string;
    icon: React.ReactNode;   
}
const AddressCard: React.FC<AddressProps> = ({ title, description, icon }) => {
  return (
    <div className="flex justify-start gap-2 py-12 px-5 items-start shadow-[1px_-2px_24px_-2px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg truncate">
      <div className=" bg-OMblue text-white p-4 rounded-lg shadow-xl shadow-OMblue/50 text-3xl">
        {icon}
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-black/70 text-wrap truncate">{description}</p>
      </div>
    </div>
  );
};

export default AddressCard;
