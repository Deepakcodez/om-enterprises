import React, { useState } from "react";
import NavbarRight from "./NavbarRight";
import XpaddingWrapper from "../XpaddingWrapper";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Navmenu from "./NavMenu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous! && latest > 600) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="OMlightBlue py-3 sticky top-0 backdrop-blur-lg z-20"
    >
      <XpaddingWrapper className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image src={logo} alt="alt" width={50} height={50} />
        </Link>
        <div className="lg:block hidden">
          <Navmenu pathname={pathname} />
        </div>
        <NavbarRight />
      </XpaddingWrapper>
    </motion.div>
  );
};

export default Navbar;
