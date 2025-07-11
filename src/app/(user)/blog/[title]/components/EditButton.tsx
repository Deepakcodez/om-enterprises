'use client'
import useBlogger from '@/hooks/useBlogger'
import Navigator from '@/utills/Navigator'
import { Pen } from 'lucide-react'
import React from 'react'

export default function EditButton ({ title  }: { title: string,  }) {
  const { isBlogger } = useBlogger()

  if (!isBlogger) {
    return null
  } else
    return (
      <Navigator to={`/blog/editor/${title}`}>
        <div className='absolute right-12 top-42 border border-OMblue shadow-lg p-2 rounded-full text-3xl font-bold text-black lg:text-4xl text-center bg-purple-200'>
          <Pen className='text-purple-800' />
        </div>
      </Navigator>
    )
}
