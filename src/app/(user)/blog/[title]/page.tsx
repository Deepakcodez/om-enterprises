import React from 'react'
import Blog from '../components/common/Blog'

import { Metadata, ResolvingMetadata } from 'next'
// import TableOfContents from './components/TableOfContent'
import BlogSkelton from './components/BlogSkelton'
import { getAllBlogs } from '@/services/services'
import ErrorPage from '@/app/_components/common/Error'
import TableOfContents from './components/TableOfContent'

type Props = {
  params: Promise<{ title: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
const baseUrl = process.env.BASE_URL

const fetchBlogByTitle = async (title: string) => {
  try {
    const res = await fetch(`${baseUrl}/api/v1/blog/url/${title}`, {
      next: { 
        tags: [`blog:${title}`]
      }
    })
    if (!res.ok) throw new Error('Failed to fetch blog')
    return await res.json()
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}
// Generate static paths at build time
export async function generateStaticParams () {
  const blogs = await getAllBlogs()
  console.log('Blogs:', blogs)
  return blogs.map((blog: { url: string }) => ({
    title: blog.url
  }))
}

// Set revalidation time (ISR)
export const revalidate = 60 // Revalidate every minute

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await params

  try {
    const data = await fetchBlogByTitle(title)
    if (!data?.blog) {
      return {
        title: 'Blog Not Found | OM Enterprises',
        description: 'The requested blog post could not be found'
      }
    }

    const previousImages = (await parent).openGraph?.images || []
    const blogImage =
      data.blog.image || '../../../../assets/images//blogbanner.png'

    return {
      title: `${data.blog.title} | OM Enterprises`,
      description:
        data.blog.metaDescription ||
        data.blog.excerpt ||
        'OM Enterprises blog post',
      openGraph: {
        title: data.blog.title,
        description:
          data.blog.metaDescription ||
          data.blog.excerpt ||
          'OM Enterprises blog post',
        url: `/blog/${data.blog.url}`,
        images: [blogImage, ...previousImages],
        type: 'article',
        publishedTime: data.blog.createdAt,
        authors: [data.blog.author || 'OM Enterprises']
      },
      twitter: {
        card: 'summary_large_image',
        title: data.blog.title,
        description:
          data.blog.metaDescription ||
          data.blog.excerpt ||
          'OM Enterprises blog post',
        images: [blogImage]
      }
    }
  } catch (error) {
    return {
      title: 'Blog | OM Enterprises',
      description: 'OM Enterprises blog posts'
    }
  }
}

const SingleBlogPage = async ({
  params
}: {
  params: Promise<{ title: string }>
}) => {
  const { title } = await params

  try {
    const data = await fetchBlogByTitle(title)

    if (!data?.blog) {
      return (
        <h1 className='text-center text-2xl font-bold py-12 h-[50vh] flex items-center justify-center'>
          Blog not found
        </h1>
      )
    }

   

    return (
      <div className='grid grid-cols-12 lg:gap-3'>
        <div className='lg:col-span-3 hidden lg:flex py-12'>
          {/* <Sidebar /> */}
        </div>
        <div className='lg:col-span-6 col-span-12'>
          {data?.blog ? <Blog blog={data.blog} /> : <BlogSkelton />}
        </div>
        <div className='lg:col-span-3 hidden lg:flex'>
          <TableOfContents blogContent={data.blog.content} />
        </div>
      </div>
    )
  } catch (error) {
    return <ErrorPage />
  }
}

export default SingleBlogPage
