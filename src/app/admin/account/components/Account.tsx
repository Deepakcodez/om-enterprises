"use client"
import React from "react";
import avatar from "../../../../assets/images/avatar.png"
import useCurrentUser from "@/store/currentUser";
import { IoSettingsOutline } from "react-icons/io5";
import { motion, AnimatePresence, } from "motion/react";
import EditAccount from "./EditAccount";
import Notification from "./Notification";
import Image from "next/image";

const Account: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const [showEditAccount, setShowEditAccount] = React.useState(false);

  return (
    <div className=" h-full  ">
      <div className="px-12 h-full w-full grid grid-cols-2 gap-12 ">
        <motion.div
          className="bg-gray-200 overflow-hidden relative rounded-xl grid grid-rows-2 "
        >
          <AnimatePresence initial={false}>
            {showEditAccount && <EditAccount />}
          </AnimatePresence>
          <motion.div
            whileTap={{ rotate: 70 }}
            onClick={() => setShowEditAccount(!showEditAccount)}
            className="right-4 top-4  w-fit  absolute"
          >
            <IoSettingsOutline
              size={25}
              className={`${showEditAccount ? "text-white " : "text-black/80"
                } cursor-pointer`}
            />
          </motion.div>
          <div className="w-5/12 aspect-square  rounded-xl p-12">
            <Image
              src={avatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full h-full  rounded-xl px-12">
            <div className="">
              <h1 className="text-5xl font-semibold text-blue-950/40 w-fit">
                {currentUser ? currentUser?.name : "searching...."}{" "}
              </h1>
            </div>
            <p className="text-blue-950/20 ">CEO of Om Enterprises</p>
            <div className="flex justify-between items-center p-4 border-b border-gray-800/10">
              <h1 className="text-xl   text-blue-950/40">Email</h1>
              <div className="flex items-center gap-2 ">
                <h1 className=" text-blue-950/40">
                  {currentUser ? currentUser?.email : "searching...."}{" "}
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-b border-gray-800/10">
              <h1 className="text-xl   text-blue-950/40">Phone</h1>
              <div className="flex items-center gap-2 ">
                <h1 className=" text-blue-950/40">
                  {currentUser ? currentUser?.phone : "searching...."}
                </h1>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-rows-1 gap-12 rounded-xl  ">
          <div className="w-full h-[80vh] bg-gray-200 rounded-2xl overflow-y-scroll">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
