import { Suspense } from 'react'
import Blog from './components/common/Blog'
import Sidebar from './components/sidebar/Sidebar'
import Loading from './loading'
import ErrorBoundary from '@/utills/ErrorBoundary'

async function getBlogs () {
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

export default async function BlogPage () {
  const { blogs } = await getBlogs()

  return (
    <div className='grid grid-cols-12  4xl:h-[45rem] w-full  gap-12 my-12'>
      <div className='lg:col-span-8 col-span-12   '>
        <ErrorBoundary fallback={<div className='text-red-500'>Something went wrong while loading the blog.</div>}>
          <Suspense fallback={<Loading />}>
            <Blog blog={blogs.toReversed()[0]} />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className='lg:col-span-4 col-span-12'>
        <ErrorBoundary fallback={<div className='text-red-500'>Something went wrong while loading the blog.</div>}>
          <Suspense fallback={<Loading />}>
            <Sidebar blogs={blogs} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}
