import { BLogType } from '@/types/Types'
import Navigator from '@/utills/Navigator'
import { slugify } from '@/utills/Slugify'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blog }: { blog: BLogType }) => {
  return (
    <Navigator
      to={blog.url ? `/blog/${blog?.url}` : `/blog/${slugify(blog?.title)}`}
    >
      <div className='flex flex-col gap-2 bg-purple-50 md:p-4 p-2 md:rounded-2xl rounded-md h-full w-full '>
        <Image
          src={blog?.image || '../../../../../assets/images/blogbanner.png'}
          alt={blog?.title || 'Blog Image'}
          height={500}
          width={500}
          className='w-full aspect-video md:rounded-2xl rounded-md '
        />
        <div>
          {/* titles */}
          <div>
            <h1 className='text-black  md:text-lg text-sm text-ellipsis line-clamp-1'>
              {blog?.title}
            </h1>
            <div className='flex  items-center justify-end gap-2 text-gray-500'>
              <Clock className='text-purple-500 ' size={15} />
              <p className='text-sm'>
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }).format(new Date(blog.date))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Navigator>
  )
}

export default BlogCard
