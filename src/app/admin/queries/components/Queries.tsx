"use client"
import React from "react";

import InstantCallbacks from "./InstantCallbacks";
import ContactQuery from "./ContactQuery";
import Button from "@/components/ui/Button";

const Queries: React.FC = () => {
  const [isSectionA, setIsSectionA] = React.useState<boolean>(true);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-3">
        <div onClick={() => setIsSectionA(true)}>
          <Button
            title="Instant CallBacks"
            className={`${
              isSectionA
                ? " shadow-lg shadow-violet-500/50  "
                : " border-OMblue border text-black"
            }`}
          />
        </div>
        <div onClick={() => setIsSectionA(false)}>
          <Button
            title="Buisness Enquiry"
            className={`${
              isSectionA
                ? "border-OMblue border  text-black "
                : " text-white shadow-lg shadow-violet-500/50"
            }`}
          />
        </div>
      </div>

      <h1 className="text-5xl font-semibold text-blue-950/40">
        {isSectionA ? " Instant CallBacks" : "Buisness Enquiries"}
      </h1>

      {isSectionA ? <InstantCallbacks /> : <ContactQuery />}
    </div>
  );
};

export default Queries;
