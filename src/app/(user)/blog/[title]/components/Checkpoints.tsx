import React from "react";

const Checkpoints = () => {
  const data = ["af", "adf", "fadf", "daf"];
  return (
    <div className="text-black p-2 w-full flex flex-col  gap-4 fixed top-40">
      <h1 className="font-bold text-gray-600 text-lg">On this page</h1>
      <div className="flex flex-col gap-2">
        {data?.map((d, i) => (
          <>
            <div className=" w-full flex gap-2">
              <div className="w-[1px] bg-gradient-to-b from-transparent  via-purple-300 to-transparent" />
              <p>{d}</p>
            </div>
          </>
        ))}
      </div>
      <p>Scroll to top </p>
    </div>
  );
};

export default Checkpoints;
