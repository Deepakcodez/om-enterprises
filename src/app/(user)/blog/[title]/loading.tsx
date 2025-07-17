import React from 'react'
import BlogSkelton from './components/BlogSkelton'

const Loading = () => {
  return (
    <div className='grid grid-cols-12 lg:gap-3'>
        <div className='lg:col-span-3 hidden lg:flex py-12'>
          {/* <Sidebar /> */}
        </div>
        <div className='lg:col-span-6 col-span-12'>
        <BlogSkelton />
        </div>
        <div className='lg:col-span-3 hidden lg:flex'>
          {/* <TableOfContents/> */}
        </div>
      </div>
  )
}

export default Loading