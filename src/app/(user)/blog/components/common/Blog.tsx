import { BLogType } from '@/types/Types'
import { Clock } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import './blogeditor.css'
import { Open_Sans } from 'next/font/google'
import EditButton from '../../[title]/components/EditButton'
import { FaChevronRight } from 'react-icons/fa'
import blogPlaceholder from '@/assets/images/blogiamgeplaceholder.png.jpg'
import DeleteBlogButton from '../../[title]/components/deleteBlog'
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400'
})

const Blog = ({ blog }: { blog: BLogType }) => {
  return (
    <div className='flex flex-col gap-4  bg-violet-5 rounded-2xl lg:p-12'>
      <DeleteBlogButton blogId={blog._id} />

      <div className='text-md flex items-center gap-2 text-gray-500 mt-6 md:mt-0'>
        Blog
        <FaChevronRight className='font-thin' />
        {blog?.category?.name || 'Untitled'}
      </div>
      {blog && <EditButton title={blog?.url} />}

      <div
        style={{ backgroundImage: `url(${blogPlaceholder})` }}
        className='relative w-full aspect-video lg:rounded-2xl rounded-lg overflow-hidden bg-purple-100 '
      >
        <Image
          src={blog?.image || blogPlaceholder}
          alt={blog?.title || 'Blog Image'}
          height={1200}
          width={1200}
          className='w-full aspect-video lg:rounded-2xl rounded-lg'
        />
      </div>
      <div className={openSans.className}>
        <div className='flex flex-col gap-12 '>
          <h1 className='text-black  text-    text-3xl '>{blog?.title}</h1>
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
