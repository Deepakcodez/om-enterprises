import type { Metadata } from 'next'
import { Geist, Geist_Mono, Tektur } from 'next/font/google'
import './globals.css'
import LayoutSelector from './LayoutSelector'
import QueryProvider from '@/utills/QueryProvider'
import { Toaster } from 'react-hot-toast'
import LoaderLayout from '../utills/loader/LoaderLayout'
import { SmoothCursor } from './_components/common/Cursor'
import LenisProvider from '@/utills/provider/lenis-provider'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"]
// });

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omtel.ae'),
  title: {
    default: 'Om Enterprises',
    template: '%s | OM Enterprises'
  },
  description:
    'OM Enterprises provides bulk SMS services and comprehensive digital marketing solutions.',
  keywords: ['bulk sms', 'digital marketing', 'sms services'],
  twitter: {
    card: 'summary_large_image',
    title: 'OM Enterprises',
    description:
      'Discover the story behind OM Enterprises and meet the team driving our success.',
    images: '../assets/images/fullllogo.png',
    site: '@omenterprises',
    creator: '@omenterprises'
  }
}
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${tektur.className}   antialiased`}>
        <QueryProvider>
          <LenisProvider>
            <LoaderLayout />
            <div className='md:block hidden'>
              <SmoothCursor />
            </div>
            <LayoutSelector>{children}</LayoutSelector>
            <Toaster position='bottom-right' />
          </LenisProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
