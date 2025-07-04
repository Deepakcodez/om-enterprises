import React from 'react'
import BlogCard from '../common/BlogCard'
import { BLogType } from '@/types/Types'
import Button from '@/components/ui/Button'

const Sidebar = async ({ blogs }: { blogs: BLogType[] }) => {
  console.log('Sidebar component rendered with blogs:', blogs)
  return (
    <>
      <aside className='w-full flex flex-col gap-4'>
        {blogs.slice(0, 4).map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </aside>
      <div className='flex justify-center items-center mt-4'>
        <Button title='Read More' />
      </div>
    </>
  )
}

export default Sidebar
