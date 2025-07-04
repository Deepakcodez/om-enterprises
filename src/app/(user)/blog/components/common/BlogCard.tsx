import { BLogType } from '@/types/Types'
import Navigator from '@/utills/Navigator'
import { slugify } from '@/utills/Slugify'
import { Clock } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'



const BlogCard = ({ blog }: { blog: BLogType }) => {
  return (
    <Navigator to={blog.url?   `/blog/${blog?.url}` :  `/blog/${slugify(blog?.title)}`}>
      <div className='flex flex-col gap-2 bg-purple-50 p-4 rounded-2xl'>
        <Image
          src={blog?.image || '../../../../../assets/images/blogbanner.png'}
          alt={blog?.title || 'Blog Image'}
          height={200}
          width={200}
          className='w-full aspect-video rounded-2xl '
        />
        <div>
          {/* titles */}
          <div>
            <h1 className='text-black  text-lg text-ellipsis line-clamp-1'>
              {blog?.title}
            </h1>
            <div className='flex  items-center justify-end gap-2 text-gray-500'>
              <Clock className='text-purple-500 ' size={15} />
              <p className='text-sm'>
                {moment(blog?.createdAt).format('MMM Do YY')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Navigator>
  )
}

export default BlogCard
