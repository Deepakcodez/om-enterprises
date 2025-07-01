"use client"
import React from 'react'
import image1 from "../../../../../assets/images/anil.png"
import { motion } from 'motion/react'
import awardImage2 from "../../../../../assets/images/awardimage2.png"
import awardImage from "../../../../../assets/images/awardiimage.png"
import Image from 'next/image'

const AboutImageSection: React.FC = () => {
  return (
    <div className=' flex justify-center items-center  relative  overflow-hidden'>
      <div className='h-[28em] w-[21rem] rounded-lg overflow-hidden '>
        <Image
          src={image1}
          alt='image1'
          className='w-full h-full object-cover '
        />

        <motion.div
          initial={{ y: -12 }}
          animate={{ y: 0 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          className='absolute md:block hidden  left-14 top-12 -z-10 w-[15rem] h-[15rem] rounded-lg bg-white '
        >
          <Image
            src={awardImage2}
            alt='image'
            className='w-full h-full object-cover rounded-lg '
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: -12 }}
        animate={{ x: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        className='absolute md:right-12 -right-12 bottom-12 md:w-[18rem] md:h-[10rem] w-[12rem] h-[8rem] rounded-lg bg-white p-1 '
      >
        <Image
          src={awardImage}
          alt='image'
          className='w-full h-full object-cover rounded-lg '
        />
      </motion.div>
    </div>
  )
}

export default AboutImageSection
