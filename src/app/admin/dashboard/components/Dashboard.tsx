import React from "react";
import Queries from "./Queries";
import Job from "./Job";
import Plans from "./Plans";


const Dashboard: React.FC = () => {
  return (
    <div className="h-full w-full grid  grid-cols-12 gap-12 px-12 ">
      <div className="col-span-4 h-[15rem]">
        <Queries />
      </div>
      <div className="col-span-4 ">
        <Job />
      </div>
      <div className="col-span-4 ">
        <Plans />
      </div>
    </div>
  );
};

export default Dashboard;
