'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import BlogCard from '../common/BlogCard'
import PaginationControls from './PaginationController'
import { BLogType } from '@/types/Types'
import AllblogSkelton from './AllblogSkelton'
import { getBlogsWithPagination } from '@/services/services'
import { useQuery } from '@tanstack/react-query'
import ErrorPage from '@/app/_components/common/Error'

const AllBlogWithPagination = () => {
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1', 10)
    
    const { data, isLoading, isError } = useQuery(getBlogsWithPagination(page))

    if (isLoading) {
        return <AllblogSkelton/>
    }

    if (isError) {
        return <ErrorPage/>
    }

    if (!data) {
        return <div>No blogs found</div>
    }

    const { blogs, currentPage, totalPages, totalBlogs } = data

    return (
        <div className='h-full w-full flex flex-col flex-justify-start items-center my-12'>
            <div className='h-full w-full'>
                <h1 className='text-3xl font-bold text-black text-center w-full'>All Blogs</h1>
                <p className='text-center text-gray-600 mt-2'>
                    Showing {(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, totalBlogs)} of {totalBlogs} blogs
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full px-4'>
                {blogs.map((blog: BLogType) => (
                    <div key={blog._id} className='w-full'>
                        <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
            <PaginationControls currentPage={currentPage} totalPages={totalPages} />
        </div>
    )
}

export default AllBlogWithPagination