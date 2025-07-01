
import Navigator from "@/utills/Navigator";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { LuServerCog } from "react-icons/lu";
import { MdCall, MdEmail } from "react-icons/md";

const Topbar: React.FC = () => {
  return (
    <div className="w-full h-12  flex sm:justify-between justify-center  items-center px-4 OMblue text-white lg:px-24  xl:py-5 sm:py-5">
      <div className="lg:flex  items-center justify-center gap-3 hidden">
        <div className=" flex xl:flex-row flex-col items-center justify-center gap-1">
          <div className="flex items-center justify-center gap-1">
            <MdCall />
            <p className="text-sm">+91-9815300730 </p>
          </div>
          <div className=" xl:flex hidden items-center justify-center gap-1">
            <MdCall className="xl:block hidden" />
            <p className="text-sm">+91-9872144408 </p>
          </div>
        </div>

        <div className=" flex xl:flex-row flex-col items-center justify-center gap-1">
          <div className="flex items-center justify-center gap-1">
            <MdEmail className="" />
            <p className="text-sm"> info@omenterprisesgroup.in </p>
          </div>
          <div className="xl:flex  hidden items-center justify-center gap-1">
            <MdEmail className="xl:block hidden" />
            <p className="text-sm"> anil@omenterprisesgroup.in </p>
          </div>
        </div>
      </div>

      {/* center div start */}
      {/* <div className="flex items-center justify-center sm:gap-3 gap-1">
        <div className="flex items-center justify-center gap-1 bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-500 px-3 py-1 rounded-md border border-white/30 cursor-pointer h-8">
          <LiaRupeeSignSolid color="black" size={20} className=""/>
          <p className="text-black text-xs sm:text-sm">Pay Now</p>
        </div>
        <div className="flex items-center justify-center gap-1 bg-gradient-to-b from-transparent via-transparent to-black/20 px-3 py-1 rounded-md border border-white/30 cursor-pointer h-8 hover:bg-gray-50/20 duration-150">
          <LuServerCog size={20} />
          <p className="text-xs sm:text-sm">Test Our SMS Server</p>
        </div>
      </div> */}
      {/* center div end*/}

      <div className="flex items-center justify-center gap-3 ">
        {/* <Link
          href={
            "https://www.facebook.com/omenterprisesgroup"
          }
          className="cursor-pointer"
        >
          <FaFacebookF size={20} />
        </Link> */}
        <Navigator
          to="https://www.facebook.com/omenterprisesgroup"
          className="cursor-pointer"
        >
          <FaFacebookF size={20} />
        </Navigator>
        {/* <Link className="cursor-pointer" href={"https://www.linkedin.com/company/om-enterprises-group/"}>
          <FaLinkedinIn size={20} />
        </Link>
        <Link
          className="cursor-pointer"
          href={"https://www.instagram.com/omenterprisesgroup/?hl=en"}
        >
          <IoLogoInstagram size={20} />
        </Link> */}
        <Navigator
          to="https://www.linkedin.com/company/om-enterprises-group/"
          className="cursor-pointer"
        >
          <FaLinkedinIn size={20} />
        </Navigator>

        <Navigator
          to="https://www.instagram.com/omenterprisesgroup/?hl=en"
          className="cursor-pointer"
        >
          <IoLogoInstagram size={20} />
        </Navigator>
      </div>
    </div>
  );
};

export default Topbar;
