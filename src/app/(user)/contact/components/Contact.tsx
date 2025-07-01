import React from 'react'
import XpaddingWrapper from '@/components/XpaddingWrapper'
import Enquiry from './Enquiry'
import GoogleMapEmbed from './GoogleMapEmbed'
import Head from 'next/head'
import Address from './Address'
import WideScreenHandler from '@/components/WideScreenHandler'
import UpSideSlider from '@/components/common/UpsideSlider'

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>
          {
            'Contact us | Digital marketing jobs |  career opportunities at Om enterprises  '
          }{' '}
        </title>
        <meta
          name={'Digital marketing blogs'}
          content={
            'Digital marketing blog, sms marketing, email marketing, social media marketing, content marketing, paid media marketing, search engine marketing, web development, app development, bulk sms .'
          }
        />
      </Head>
      <UpSideSlider title='Contact Us' />
      <WideScreenHandler>
        <XpaddingWrapper>
          <Address />
          <Enquiry />
        </XpaddingWrapper>
      </WideScreenHandler>
      <GoogleMapEmbed />
    </div>
  )
}

export default Contact
