'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function LoaderLayout () {
  const pathname = usePathname()
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(pathname === '/')

  useEffect(() => {
    // Only run if we're on the homepage
    if (pathname !== '/') return

    // Animation timing
    const duration = 200
    const steps = 10
    const intervalTime = duration / steps

    // Count from 0 to 100
    const counterInterval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(counterInterval)
          return 100
        }
        return prev + 1
      })
    }, intervalTime)

    // After 3 seconds, trigger exit animation
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => {
      clearInterval(counterInterval)
      clearTimeout(fadeTimeout)
    }
  }, [pathname]) // Add pathname to dependency array

  // Don't render anything if not on homepage
  if (pathname !== '/') return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='fixed z-50 inset-0 flex items-end bg-white'
        >
          <motion.h1
            className='text-[30rem] font-bold text-OMblue/40'
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
