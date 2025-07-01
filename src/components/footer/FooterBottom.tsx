import React from "react";
import XpaddingWrapper from "../XpaddingWrapper";
import WideScreenHandler from "../WideScreenHandler";
import Link from "next/link";

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-OMblue w-full   ">
      <WideScreenHandler className=" w-full  text-white">
        <XpaddingWrapper>
          <div className="flex md:flex-row flex-col text-sm md:text-base justify-between items-center py-2 px-4">
            <p className="">
              Copyright {currentYear} OM Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-2">
              <Link href={"/careers"} className="border-r px-2">
                Careers
              </Link>
              <Link href={"/privacy"} className="">
                Privacy Policy
              </Link>
            </div>
          </div>
        </XpaddingWrapper>
      </WideScreenHandler>
    </div>
  );
};

export default FooterBottom;
