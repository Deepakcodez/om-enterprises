"use client"
import { useState } from "react";
import AllservicesCard from "./AllservicesCard";
import { cn } from "@/utills/cn";

const servicesData: { [key: string]: { id: number; title: string }[] } = {
  Messaging: [
    { id: 1, title: "A2P Messaging" },
    { id: 2, title: "RCS Business Messaging" },
    // { id: 3, title: "Viber Business Messages" },
    { id: 4, title: "Whatsapp Business Messages" },
    { id: 5, title: "2 Way Solution" },
    // { id: 6, title: "Acculync" },
    { id: 7, title: "Mail 2 SMS" },
    { id: 8, title: "CPAAS" },
    // { id: 9, title: "Omnichannel Communications" },
  ],
  Operator: [
    { id: 10, title: "SMSC" },
    { id: 11, title: "Instant Virtual Number" },
  ],
  Voice: [
    { id: 12, title: "Outbound Dealer" },
    { id: 13, title: "IVR" },
    { id: 14, title: "Missed Call" },
    { id: 15, title: "Click 2 Call" },
    { id: 16, title: "SMS 2 Call" },
  ],
  Marketing: [{ id: 17, title: "Email Marketing" }],
  Identity: [{ id: 18, title: "Verified SMS" }],
  "Website Development": [
    { id: 19, title: "Website Development" },
    { id: 20, title: "Website Designing" },
  ],
};

const ServicesButtons = ({
  setSelectedServiceId,
}: {
  setSelectedServiceId: (id: number) => void;
}) => {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <div className="w-full relative lg:block hidden pb-24 ">
      <div className="flex items-center justify-center flex-wrap gap-2 whitespace-nowrap">
        {Object.keys(servicesData).map((btnName) => (
          <div key={btnName} className="relative">
            <button
              onMouseEnter={() => setHoveredBtn(btnName)}
              onMouseLeave={() => setHoveredBtn(null)}
              onClick={() =>
                setHoveredBtn(hoveredBtn === btnName ? null : btnName)
              }
              className={cn("btn", "text-white md:w-auto w-fit")}
            >
              {btnName}
            </button>

            {/* Show dropdown only for the hovered button */}
            {hoveredBtn === btnName && (
              <div
                onMouseEnter={() => setHoveredBtn(btnName)}
                onMouseLeave={() => setHoveredBtn(null)}
                className="absolute left-0 top-10 z-10 "
              >
                <div className="pt-2">
                  <AllservicesCard
                    services={servicesData[btnName]}
                    onServiceClick={(serviceId) =>
                      setSelectedServiceId(serviceId)
                    }
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesButtons;
