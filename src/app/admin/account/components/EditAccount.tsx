"use client"
import React from "react";
import { motion } from "motion/react";
import useCurrentUser from "@/store/currentUser";
import Input from "@/components/ui/Input";
import { Link } from "react-router-dom";
import useCookies from "@/hooks/useCookies";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

type userType = {
  name: string,
  email: string,
  phone: string
}
const EditAccount: React.FC = () => {
  const { currentUser } = useCurrentUser();
  const { getToken } = useCookies()
  const token = getToken()

  const [user, setUser] = React.useState<userType>({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || ""
  })

  const changeAdminDetails = async () => {
   try {
     const resp = await axios.put(
       `${process.env.BASE_URL}/api/v1/admin/update/details`,
       user,
       {
         headers: {
           Authorization: token,
         },
       }
 
     )
     if (resp.status === 200) {
       toast.success("Account updated successfully")
     }
     else {
       toast.error("failed to login")
     }
   } catch (error) {
    console.log(error)
    toast.error("failed to login")
   }
  }

  React.useEffect(() => {
    setUser({
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || ""
    })
  }, [currentUser])
  return (
    <>
      <motion.div
        initial={{ y: -650 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
        exit={{ y: -650, transition: { duration: 0.5 } }}
        className="w-full h-full absolute translate-y-12  bg-gray-800/50 backdrop-blur-xl rounded-lg p-4  overflow-y-scroll scrollbar-hide"
      >
        <h1 className="text-5xl font-bold text-white">Edit Account</h1>
        <div className="w-full h-full  rounded-xl px-12 py-12">
          <div className="flex justify-between items-center p-4 border-b border-gray-200/10">
            <h1 className="text-xl   text-white">Name</h1>
            <div className="flex items-center gap-2 ">
              <h1 className=" text-white">
                <Input
                  value={user?.name}
                  className="text-black"
                  placeholder="finding Admin Name"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </h1>

            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b border-gray-200/10">
            <h1 className="text-xl   text-white">Email</h1>
            <div className="flex items-center gap-2 ">
              <h1 className=" text-white">
                {/* {currentUser ? currentUser?.email : "searching...."}{" "} */}
                <Input
                  value={user?.email}
                  className="text-black"
                  placeholder="enter"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </h1>

            </div>
          </div>
          <div className="flex justify-between items-center p-4 border-b border-gray-200/10">
            <h1 className="text-xl   text-white">Phone</h1>
            <div className="flex items-center gap-2 ">
              <h1 className=" text-white">
                {/* {currentUser ? currentUser?.phone : "searching...."} */}
                <Input
                  value={user?.phone}
                  className="text-black"
                  placeholder="enter"
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />

              </h1>

            </div>
          </div>
          <div className="w-full flex justify-center my-4" >
            <Button title="Update" onClick={changeAdminDetails} />
          </div>
          <p className="text-white text-center">Want to change <Link to={'/admin/update-password'} className=" font-semibold underline">password?</Link></p>
        </div>
      </motion.div>
    </>
  );
};
export default EditAccount;
