"use client"
import Input from '@/components/ui/Input'
import { useRouter } from 'next/router';
import React from 'react'

const TitleUrlTaker = ({
    title,
    setTitle,
    url,
    setUrl
    }: {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}) => {

const [origin, setOrigin] = React.useState('');

  React.useEffect(() => {
    // This runs only on client side after mount
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);
  
  return (

    <div>
            <Input
              placeholder='Enter title here'
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='border border-OMblue text-xs font-bold'
            />
            <div className='flex items-center  mt-4 w-full text-xs '>
              <h1 className=''>{origin}/blog/</h1>
              <div className='flex-1'>
                <Input
                  placeholder='Enter URL here'
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  className='border-0 bg-gray-50 outline-none outline-transparent  border-transparent text-xs  w-full p-1 '
                />
              </div>
            </div>
          </div>
  )
}

export default TitleUrlTaker
