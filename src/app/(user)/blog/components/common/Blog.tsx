import { BLogType } from '@/types/Types'
import { Clock, Pen } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import "./blogeditor.css"
import { redirect } from 'next/navigation'

const Blog = ({ blog }: { blog: BLogType }) => {
  return (
    <div className='flex flex-col gap-4  bg-violet-5 rounded-2xl lg:p-12'>
      {
        blog.title &&
      <button    className='absolute top-44 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors'>
        <Pen color='black'/>
      </button> 
      }
      <Image
        src={blog?.image || '/career.jpeg'}
        alt={blog?.title || 'Blog Image'}
        height={1200}
        width={1200}
        className='w-full aspect-video lg:rounded-2xl rounded-lg'
      />

      <div className='flex flex-col gap-12 '>
        <h1 className='text-black  text-ellipsis line-clamp-2  text-3xl '>
          {blog?.title}
        </h1>
        <article
          className='text-gray-800 prose max-w-none'
          dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
        />
        <div className='flex  items-center justify-end gap-2 text-gray-500'>
          <Clock className='text-purple-500 ' size={15} />
          <p className=''>{moment(blog?.createdAt).format('MMM Do YY')}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog

