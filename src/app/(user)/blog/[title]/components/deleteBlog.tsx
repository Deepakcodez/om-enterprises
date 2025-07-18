'use client'
import useBlogger from '@/hooks/useBlogger'
import { delelteBlog } from '@/services/services'
import { Trash } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

export default function DeleteBlogButton ({ blogId }: { blogId: string }) {
  const { isBlogger } = useBlogger()

  const handleDelete = async () => {
    if (!blogId) return toast.error('Blog ID is required to delete the blog')
    try {
      await delelteBlog(blogId)
      toast.success('Blog deleted successfully')
    } catch (error) {
      toast.error('Failed to delete blog')
    }
  }
  if (!isBlogger) {
    return null
  } else
    return (
      <div
        onClick={handleDelete}
        className='absolute z-50 right-12 top-58 border border-OMblue shadow-lg p-2 rounded-full text-3xl font-bold text-black lg:text-4xl text-center bg-purple-200'
      >
        <Trash className='text-purple-800' />
      </div>
    )
}
