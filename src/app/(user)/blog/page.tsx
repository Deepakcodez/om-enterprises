import { Suspense } from 'react'
import Loading from './loading'
import ErrorBoundary from '@/utills/ErrorBoundary'
import AllBlogWithPagination from './components/allBlog.tsx/AllBlogWithPagination'
import BannerBlog from './components/common/BannerBlog'

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/v1/blog/all`, {
      next: { revalidate: 3600 }
    })

    if (!res.ok) throw new Error('Failed to fetch blogs')
    return await res.json()
  } catch (error) {
    console.error(error)
    return { blogs: [] }
  }
}

export default async function BlogPage() {
  const { blogs } = await getBlogs()

  return (
    <>
      <div className=' flex w-full mx-auto md:max-w-7xl my-12'>
        <ErrorBoundary fallback={<div className='text-red-500'>Something went wrong while loading the blog.</div>}>
          <Suspense fallback={<Loading />}>
            <BannerBlog blog={blogs.toReversed()[0]} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className='w-full'>
        <ErrorBoundary fallback={<div className='text-red-500'>Something went wrong while loading the blog.</div>}>
          <Suspense fallback={<Loading />}>
            <AllBlogWithPagination />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}
