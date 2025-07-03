import React from "react";

const Benifits: React.FC = () => {
  const benifits = [
    "Enhanced customer engagement",
    "Increased brand awareness",
    "Improved brand loyalty",
    "Better customer service",
    "Increased sales",
    "Better understanding of the customer",
    "Better understanding of the customer",
    "Better understanding of the customer",
  ];
  return (
    <div className="mt-28">
      <h1 className="text-center w-full text-blue-950 text-4xl">
        Benifits of Messaging
      </h1>
      <ul className=" flex flex-col  list-inside">
        {benifits.map((data, i) => (
          <li key={i} className=" text-xl">
            <h1>{data}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benifits;
