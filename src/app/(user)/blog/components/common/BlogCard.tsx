import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

type BlogCardProps = {
  title?: string;
  image?: string;
  date?: string;
};

const BlogCard = ({
  title = "title",
  image = "",
  date = "3:33",
}: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Image
        src={"/career.jpeg"}
        alt="title"
        height={200}
        width={200}
        className="w-full aspect-video rounded-2xl "
      />
      <div>
        {/* titles */}
        <div>
          <h1 className="text-black  text-xl text-ellipsis line-clamp-2">
        {title}
          </h1>
          <div className="flex  items-center justify-end gap-2 text-gray-500">
            <Clock className="text-purple-500 " size={15} />
            <p className="">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
