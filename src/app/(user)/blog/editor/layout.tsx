'use client'
import useBlogger from '@/hooks/useBlogger'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isBlogger, loading } = useBlogger()
  const router = useRouter()

  useEffect(() => {
    if (!loading && isBlogger === false) {
      router.push('/')
    }
  }, [loading, isBlogger, router])

  if (loading || isBlogger === undefined) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100 text-black'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!isBlogger) {
    return null // or a spinner until redirect
  }

  return <div>{children}</div>
}
