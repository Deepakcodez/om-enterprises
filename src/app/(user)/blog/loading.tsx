import React from 'react'
import AllblogSkelton from './components/allBlog.tsx/AllblogSkelton'

const Loading = () => {
  return (
    <div>
      <div className='w-10/12 mx-auto my-12 bg-gray-300 animate-pulse h-72 rounded-lg'>
        <div className='h-full w-full flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-gray-700'>Loading Blogs...</h1>
          <p className='text-gray-500 mt-2'>Please wait while we fetch the latest blogs.</p>
        </div>
      </div>
    <AllblogSkelton/>
    </div>
  )
}

export default Loading