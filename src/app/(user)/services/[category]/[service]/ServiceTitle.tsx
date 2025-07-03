import React from "react";


interface IProps {
    title: string;
    uoperTitle: string;
}
const ServiceTitle: React.FC<IProps> = ({ title, uoperTitle }) => {
  return (
    <div className="relative ">
      <h1 className="text-5xl font-bold absolute -top-7 left-0 right-0 text-center text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent">
        {title}
      </h1>
      <h1 className=" text-4xl font-bold text-center text-blue-950">
        {uoperTitle}
      </h1>
    </div>
  );
};

export default ServiceTitle;
