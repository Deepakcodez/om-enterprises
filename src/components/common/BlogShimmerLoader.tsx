import React from 'react'
import { motion } from 'motion/react';


const BlogShimmerLoader: React.FC = () => {
    const data: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className="grid grid-cols-4  gap-4 py-12">
            {
                data?.map((index) => <div key={index}  className=" relative lg:col-span-1 md:col-span-2 col-span-4 h-fit">
                    <div className="p-[1px] w-full h-[16rem]  bg-gradient-to-tl from-purple-400 via-gray-100 to-gray-100 rounded-[7px] hover:cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden relative ">
                        <div className="bg-gray-100 p-4 rounded-md h-full " >
                            <div className=" w-full h-[10rem] object-cover rounded-2xl bg-purple-100/20 animate-pulse" />
                            <div className="h-6 mx-4 bg-gray-600/5 rounded-full mt-1 w-1/2 animate-pulse" />
                            <div className="h-6 mx-4 bg-gray-600/5 rounded-full mt-1 w-1/4 animate-pulse" />
                        </div>
                        {/* shimmer */}
                        <motion.div
                            initial={{ x: 0, y: 0, rotate: 45, }}
                            animate={{ x: 680, y: -180, rotate: 45, 
                                transition: { duration: .8, repeat: Infinity, repeatType: 'loop' ,} 
                            }}
                            className='h-[4rem] bg-gradient-to-b from-transparent via-slate-100 to-transparent w-[36rem] absolute bottom-0 right-[17rem] ' />
                    </div>
                </div>)
            }
        </div>
    )
}

export default BlogShimmerLoader