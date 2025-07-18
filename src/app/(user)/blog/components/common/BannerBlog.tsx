"use client"
import { BLogType } from '@/types/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BannerBlog ({ blog }: { blog: BLogType }) {
  return (
    <Link
      href={`/blog/${blog.url}`}
      className='w-full  h-[300px] bg-OMblue rounded-2xl flex lg:flex-row  flex-col  items-center md:p-12 p-4 gap-4'
    >
      <div className='flex flex-col w-full md:order-1 order-2 '>
        <h1 className='text-white lg:text-4xl text-xl md:text-3xl font-bold'>
          {blog.title}
        </h1>
        <p className='text-xs text-white/50'>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(new Date(blog.date))}
        </p>
      </div>
      <div className='w-full h-fit overflow-hidden  flex justify-center md:order-2 order-1'>
        <Image
          src={blog?.image}
          height={200}
          width={200}
          alt={blog.title}
          className='w-auto h-full'
        />
      </div>
    </Link>
  )
}
