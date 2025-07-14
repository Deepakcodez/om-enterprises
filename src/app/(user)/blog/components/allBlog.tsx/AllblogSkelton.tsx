import React from 'react'

export default function AllblogSkelton() {
  return (
    <div className='h-full w-full flex flex-col flex-justify-start items-center my-12'>
                <div className='h-full w-full mb-8'>
                    <div className='h-10 w-64 bg-gray-200 rounded mx-auto'></div>
                    <div className='h-5 w-96 bg-gray-200 rounded mx-auto mt-4'></div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full px-4'>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className='w-full'>
                            <div className='bg-gray-200 rounded-lg h-80 animate-pulse'></div>
                            <div className='mt-4 space-y-2'>
                                <div className='h-6 bg-gray-200 rounded w-3/4'></div>
                                <div className='h-4 bg-gray-200 rounded w-full'></div>
                                <div className='h-4 bg-gray-200 rounded w-5/6'></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex gap-2 mt-8'>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className='h-10 w-10 bg-gray-200 rounded-full'></div>
                    ))}
                </div>
            </div>
  )
}
