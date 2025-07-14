'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import BlogCard from '../common/BlogCard'
import PaginationControls from './PaginationController'
import { BLogType } from '@/types/Types'
import AllblogSkelton from './AllblogSkelton'

const AllBlogWithPagination = () => {
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page') || '1', 10)

    const [blogs, setBlogs] = useState<BLogType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalBlogs, setTotalBlogs] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchBlogs() {
            try {
                setIsLoading(true)
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/blog/withpagination?page=${page}&limit=12`)

                const data = await res.json()
                setBlogs(data.blogs)
                setCurrentPage(data.currentPage)
                setTotalPages(data.totalPages)
                setTotalBlogs(data.totalBlogs)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchBlogs()
    }, [page])

    if (isLoading) {
        return (
            <AllblogSkelton/>
        )
    }

    return (
        <div className='h-full w-full flex flex-col flex-justify-start items-center my-12'>
            <div className='h-full w-full'>
                <h1 className='text-3xl font-bold text-black text-center w-full'>All Blogs</h1>
                <p className='text-center text-gray-600 mt-2'>
                    Showing {(currentPage - 1) * 12 + 1}-{Math.min(currentPage * 12, totalBlogs)} of {totalBlogs} blogs
                </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full px-4'>
                {blogs.map((blog) => (
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