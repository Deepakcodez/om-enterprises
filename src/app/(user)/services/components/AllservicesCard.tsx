import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface AllservicesCardProps {
  services: { id: number; title: string }[];
  onServiceClick: (serviceId: number) => void;
}

const AllservicesCard: React.FC<AllservicesCardProps> = ({
  services,
  onServiceClick,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col w-[17rem] rounded-md p-4 border border-gray-200 bg-white shadow-lg"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            onClick={() => onServiceClick(service.id)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, ease: "easeInOut" }}
            className="px-4 py-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
          >
            {service.title}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default AllservicesCard;
