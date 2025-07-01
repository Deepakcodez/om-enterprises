// "use client";
// import moment from "moment";

// import { motion } from "motion/react";
// import { BlogT } from "@/app/(user)/_blog/Blog";
// import Image from "next/image";
// import Link from "next/link";

// const BlogCard = ({ blog }: { blog: BlogT }) => {
//   return (
//     <Link
//       href={`/blog/${
//         blog.title
//           .replace(/\?/g, "~") // only replace question marks
//           .replace(/\s+/g, "_") // convert spaces to underscores
//       }`}
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
//         className="p-[1px] w-full h-[16rem]  bg-gradient-to-tl from-purple-400 via-gray-100 to-gray-100 rounded-[7px] hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out  "
//       >
//         <div className="bg-gray-100 p-4 rounded-md h-full relative overflow-hidden">
//           <div className="absolute -bottom-12 -right-12 h-12 w-44 bg-purple-400/50  blur-2xl  rounded-2xl " />
//           <Image
//             src={blog?.image}
//             width={1200}
//             height={1200}
//             alt=""
//             className=" w-full h-[10rem] object-cover rounded-2xl"
//           />
//           <p className="text-gray-400 text-sm mt-2">
//             {moment(blog?.date).format("MMM Do YY")}{" "}
//           </p>
//           <h1 className="truncate font-semibold text-black">{blog?.title}</h1>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default BlogCard;
