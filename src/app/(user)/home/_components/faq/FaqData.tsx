"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LuPlus } from "react-icons/lu";
import { useState } from "react";

export default function FaqData({
  question,
  answer,
  
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="bg-gray-100 rounded-lg p-6 cursor-pointer text-black"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <h1 className="md:text-2xl text-lg font-semibold">{question}</h1>
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <LuPlus className="text-2xl" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-700 lg:w-8/12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}