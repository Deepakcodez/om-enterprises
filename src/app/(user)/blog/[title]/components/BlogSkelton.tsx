import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function BlogSkelton() {
  return (
        <div className='flex flex-col gap-4 bg-violet-5 rounded-2xl lg:p-12 animate-pulse'>
      {/* Breadcrumb skeleton */}
      <div className='flex items-center text-gray-500 mt-6 md:mt-0'>
        <div className='h-4 w-16 bg-gray-200 rounded'></div>
        <FaChevronRight className='font-thin mx-2' />
        <div className='h-4 w-24 bg-gray-200 rounded'></div>
      </div>

      {/* Edit button skeleton */}
      <div className='h-8 w-8 bg-gray-200 rounded-full ml-auto'></div>

      {/* Image skeleton */}
      <div className='w-full aspect-video lg:rounded-2xl rounded-lg bg-gray-200'></div>

      <div >
        <div className='flex flex-col gap-12'>
          {/* Title skeleton */}
          <div className='space-y-2'>
            <div className='h-8 w-3/4 bg-gray-200 rounded'></div>
            <div className='h-8 w-1/2 bg-gray-200 rounded'></div>
          </div>

          {/* Content skeleton */}
          <div className='space-y-4'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='space-y-2'>
                <div className='h-4 w-full bg-gray-200 rounded'></div>
                <div className='h-4 w-5/6 bg-gray-200 rounded'></div>
                <div className='h-4 w-2/3 bg-gray-200 rounded'></div>
              </div>
            ))}
          </div>

          {/* Date skeleton */}
          <div className='flex items-center justify-end gap-2'>
            <div className='h-4 w-4 bg-gray-200 rounded-full'></div>
            <div className='h-4 w-20 bg-gray-200 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
