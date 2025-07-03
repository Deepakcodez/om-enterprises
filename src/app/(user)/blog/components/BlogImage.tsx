// import placeholder from "@/assets/images/blogiamgeplaceholder.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const BlogImage = ({ image }: { image: string | StaticImport }) => {
  return (
    <>
      <div className="flex items-start gap-2 ps-4 md:ps-0 ">
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
      </div>
      <div className=" rounded-lg  mx-4 md:mx-auto  relative  overflow-hidden">
        <Image
          alt="img"
          loading="lazy"
          src={image}
          width={1200}
          height={1200}
          className="w-full md:h-[28rem] h-full object-cover absolute  "
        />
        <Image
          width={10}
          height={10}
          alt="img"
          loading="lazy"
          src={image}
          className="w-full md:h-[28rem] h-full object-cover  "
        />
      </div>
    </>
  );
};

export default BlogImage;
