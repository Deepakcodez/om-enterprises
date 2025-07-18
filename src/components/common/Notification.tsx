import React from 'react'
import { motion } from 'motion/react'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { getNotificationQuery } from '@/services/services'
import { RxCross2 } from 'react-icons/rx'
import useNotification from '@/store/notification'

const Notification: React.FC = () => {
  const { setShowNotification } = useNotification()
  const { data, isPending, isError } = useQuery(
    queryOptions(getNotificationQuery())
  )
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=' absolute  z-[52] inset-0 backdrop-blur-xs bg-white/5 overflow-hidden'>
      <RxCross2
        size={25}
        className='float-right m-12'
        onClick={() => setShowNotification(false)}
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '90vh', transition: { duration: 0.2 } }}
        exit={{ height: 0 }}
        className=' absolute w-[28rem] right-44 bg-neutral-200 p-4 flex flex-col  gap-3 top-12  rounded-lg overflow-y-auto  scrollbar-hide '
      >
        {isPending && (
          <div className='flex justify-center items-center h-full'>
            <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900'></div>
          </div>
        )}
        {isError && (
          <div className='flex justify-center items-center h-full'>
            <h1 className='text-red-500'>Something went wrong</h1>
          </div>
        )}
        {data?.toReversed().map(
          (
            item: {
              title: string
              message: string
              createdAt: string | Date
            },
            index: number
          ) => {
            return (
              <motion.div
                initial={{ height: 0, width: 0 }}
                animate={{
                  height: '100%',
                  width: '100%',
                  transition: { duration: 0.2 }
                }}
                exit={{ height: 0, width: 0, fontSize: 0, opacity: 0 }}
                key={`NOTIFICATIONS_${index}`}
                className='flex flex-col   gap-1 bg-neutral-50 p-2 rounded-md hover:bg-neutral-100'
              >
                <h1 className='font-semibold opacity-30'>{item?.title}</h1>
                <h1 className=''>
                  {item?.message
                    .split('\n')
                    .map((line: string, idx: number) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                </h1>
                <p className='text-gray-400 text-xs text-right '>
                  {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }).format(new Date(item.createdAt))}
                </p>
              </motion.div>
            )
          }
        )}
      </motion.div>
    </div>
  )
}

export default Notification
