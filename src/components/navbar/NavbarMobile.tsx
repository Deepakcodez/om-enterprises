"use client"
import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import NavbarMobileMenu from "./NavbarMobileMenu";
import Image from "next/image";
import useNavbarStore from "@/store/NavbarStore";
import Link from "next/link";

const NavbarMobile: React.FC = () => {
  const { closeNavbar, isOpen } = useNavbarStore();

  // Control body scroll when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[99999999] block lg:hidden ${
        isOpen ? "block" : "hidden"
      } overflow-auto`}
    >
      <div className="relative bg-white min-h-screen w-[80%] motion-translate-x-in-[-99%] motion-translate-y-in-[0%] motion-duration-[.5s]/translate border-r-OMblue border-r-2">
        {/* cancel button */}
        <div
          className="absolute top-4 right-4 cursor-pointer text-black"
          onClick={closeNavbar}
        >
          <IoMdClose size={25} />
        </div>

        {/* logo */}
        <div className="pt-4 ps-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-[12rem] h-[4rem] object-contain"
            />
          </Link>
        </div>

        {/* menu */}
        <div className="mt-8">
          <NavbarMobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
