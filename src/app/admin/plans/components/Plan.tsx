
import React, { useState } from "react";
import AddPlanForm from "./AddPlanForm";
import PlanList from "./PlanList";
import Button from "@/components/ui/Button";

const Plan: React.FC = () => {
  const [isSectionA, setIsSectionA] = useState<boolean>(true);
  return (
    <div className="py-4">
      <div className="flex justify-center items-center gap-3">
        <div onClick={() => setIsSectionA(true)}>
          <Button
            title="Add Plan"
            className={`${
              isSectionA ? "  " : "bg-white border-OMblue border text-black"
            }`}
          />
        </div>
        <div onClick={() => setIsSectionA(false)}>
          <Button
            title="Plans"
            className={`${
              isSectionA
                ? "border-OMblue border bg-white text-black "
                : " text-white"
            }`}
          />
        </div>
      </div>

      <div className="my-12  px-4">
        {isSectionA ? <AddPlanForm /> : <PlanList />}
      </div>
    </div>
  );
};

export default Plan;
