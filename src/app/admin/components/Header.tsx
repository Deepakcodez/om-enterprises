"use client"
import React from "react";
import Bell from "../../../assets/icons/bell.png";
import avatar from "../../../assets/images/avatar.png";
import useNotification from "@/store/notification";

import Image from "next/image";
import Link from "next/link";


const Header: React.FC = () => {
  const{showNotification,setShowNotification} = useNotification()
  return (
    <div className="h-16   ps-12 pe-24 fixed bg-white   z-50  w-[90%] border-b">
      <div className="h-full w-full flex items-center justify-between">
       
        <div />

        {/* other buttons */}
        <div className="flex items-center gap-6">
          {/* bell icon */}
          <div onClick={()=>setShowNotification(!showNotification)} className="relative  ">
            <Image src={Bell} alt="Bell" className="h-auto w-auto" width={100} height={100} />
          </div>

          {/* profile */}
          <Link href={"/admin/account"} className="flex items-center gap-2">
            <Image
              width={30}
             
              src={avatar}
              alt="profilePic"
              className="h-8 rounded-full bg-gray-500"
            />
            <div className="flex flex-col gap-0">
              <h1 className="leading-none text-black">Anil Verma</h1>
              <h1 className="text-sm text-gray-500">Admin</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
