import { BLogType } from '@/types/Types'
import { Clock, Pen } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import './blogeditor.css'
import { Open_Sans } from 'next/font/google'
import Navigator from '@/utills/Navigator'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400'
})

const Blog = ({ blog }: { blog: BLogType }) => {
  return (
    <div className='flex flex-col gap-4  bg-violet-5 rounded-2xl lg:p-12'>
       {
        blog?.title && (
          <Navigator to={`/blog/editor/${blog?.url}`}>
          <div className='absolute right-12 top-42 border p-2 rounded-full text-3xl font-bold text-black lg:text-4xl text-center'>
            <Pen/>
          </div>
          </Navigator>
        )
       }
      <Image
        src={blog?.image || '/career.jpeg'}
        alt={blog?.title || 'Blog Image'}
        height={1200}
        width={1200}
        className='w-full aspect-video lg:rounded-2xl rounded-lg'
      />
      <div className={openSans.className}>
        <div className='flex flex-col gap-12 '>
          <h1 className='text-black  text-ellipsis line-clamp-2  text-3xl '>
            {blog?.title}
          </h1>
          <div>
            <article
              className={`text-gray-800 prose max-w-none`}
              dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
            />
          </div>
          <div className='flex  items-center justify-end gap-2 text-gray-500'>
            <Clock className='text-purple-500 ' size={15} />
            <p className=''>{moment(blog?.createdAt).format('MMM Do YY')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
