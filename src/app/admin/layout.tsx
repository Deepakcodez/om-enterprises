"use client";

import React, { useState } from "react";
import useNotification from "@/store/notification";
import { AnimatePresence } from "framer-motion";
import Notification from "@/components/common/Notification";
import RippleAnimation from "@/components/animation/RippleAnimation";

import Header from "@/app/admin/components/Header";
import Sidebar from "@/app/admin/components/Sidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isValidated, setIsValidated] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Changed to false for testing

  const { showNotification } = useNotification();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RippleAnimation />
      </div>
    );
  }

  if (!isValidated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Unauthorized
      </div>
    );
  }

  return (
    <div className="relative flex w-full">
      <AnimatePresence>{showNotification && <Notification />}</AnimatePresence>
      <Sidebar /> {/* Make sure this component exists */}
      <div className="w-screen h-auto">
        <Header />
        <div className="py-24 pb-32 pe-6 border-l min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
