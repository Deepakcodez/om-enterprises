'use client'

import React, { useState } from 'react'
import useNotification from '@/store/notification'
import { AnimatePresence } from 'framer-motion'
import Notification from '@/components/common/Notification'
import RippleAnimation from '@/components/animation/RippleAnimation'

import Header from '@/app/admin/components/Header'
import Sidebar from '@/app/admin/components/Sidebar'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import useCurrentUser from '@/store/currentUser'
import useCookies from '@/hooks/useCookies'

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isValidated, setIsValidated] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false) // Changed to false for testing
  const{setCurrentUser} = useCurrentUser()
  const navigate = useRouter()
  const { getToken } = useCookies()
  const token = getToken()
  const { showNotification } = useNotification()

  const validateAdmin = async () => {
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/admin/validate`,
        {
          headers: {
            Authorization: `${token}` // Include token in request header
          }
        }
      )
      setCurrentUser(resp.data.user)
      if (resp.status === 200 && resp.data.user.role === 'admin') {
        setIsValidated(true)
      } else {
        setIsValidated(false)
        navigate.push('/admin/login')
      }
    } catch (error) {
      console.error('Admin validation failed:', error)
      setIsValidated(false)
      navigate.push ('/admin/login')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    validateAdmin()
  }, [])

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <RippleAnimation />
      </div>
    )
  }

  if (!isValidated) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        Unauthorized
      </div>
    )
  }

  return (
    <div className='relative flex w-full text-black'>
      <AnimatePresence>{showNotification && <Notification />}</AnimatePresence>
      <Sidebar /> {/* Make sure this component exists */}
      <div className='w-screen h-auto'>
        <Header />
        <div className='py-24 pb-32 pe-6 border-l min-h-screen'>{children}</div>
      </div>
    </div>
  )
}

export default AdminLayout
