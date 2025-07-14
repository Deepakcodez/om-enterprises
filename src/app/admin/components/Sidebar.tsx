"use client"
import {
  ChartNoAxesColumnIncreasing,
  Headset,
  House,
  Users
} from "lucide-react";

import logo from "../../../assets/logo.png";
import { PiSuitcase } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'


type SidebarOptionsType = {
  title: string;
  href: string;
  icon: (isActive: boolean) => React.ReactNode; // Pass a prop to dynamically style the icon
};

const Sidebar = () => {

  const pathname = usePathname();
  const sidebarOptions: SidebarOptionsType[] = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: (isActive) => (
        <House color={isActive ? "purple" : "gray"} height={15} width={15} />
      )
    },
    {
      title: "Job",
      href: "/admin/job",
      icon: (isActive) => (
        <PiSuitcase size={15} color={isActive ? "purple" : "gray"} />
      )
    },
    {
      title: "Clients",
      href: "/admin/clients",
      icon: (isActive) => (
        <Users color={isActive ? "purple" : "gray"} height={15} width={15} />
      )
    },
    {
      title: "Team",
      href: "/admin/team",
      icon: (isActive) => (
        <Users size={15} color={isActive ? "purple" : "gray"} />
      )
    },
    {
      title: "plan",
      href: "/admin/plans",
      icon: (isActive) => (
        <ChartNoAxesColumnIncreasing
          size={15}
          color={isActive ? "purple" : "gray"}
        />
      )
    },
    {
      title: "queries",
      href: "/admin/queries",
      icon: (isActive) => (
        <Headset size={15} color={isActive ? "purple" : "gray"} />
      )
    }
  ];

  return (
    <div className="w-[15%]   h-screen  ">
      <div className=" fixed w-[10%] h-screen">
        <Link
          href={"/"}
          className="h-16 w-full flex flex-col justify-center items-center"
        >
          <Image
            src={logo}
            alt="LOGO"
            className="h-12 w-auto"
            width={100}
            height={100}
          />
        </Link>
        <div className="w-full">
          <div className="flex flex-col gap-3 mt-12 w-full">
            {sidebarOptions.map((option, index) => {
              const isActive = pathname.includes(option.href);
              return (
                <Link
                  href={option.href}
                  key={`SIDEBAR_OPTION_${index}`}
                  className={`flex justify-center gap-1 me-12  w-full ${
                    isActive
                      ? "border-l-[.5rem] border-OMblue w-full rounded-lg"
                      : "border-l-4 border-transparent"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 w-3/4 text-sm p-2 rounded-md ${
                      isActive
                        ? "text-OMblue font-semibold bg-OMblue/10"
                        : "text-gray-500"
                    }`}
                  >
                    {option.icon(isActive)}{" "}
                    {/* Pass isActive to style the icon */}
                    {option.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
