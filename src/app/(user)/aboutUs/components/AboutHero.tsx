import AboutAnimation from '@/components/animation/About'
import XpaddingWrapper from '@/components/XpaddingWrapper'
import React from 'react'

const AboutHero: React.FC = () => {
  return (
    <XpaddingWrapper>
      <div className=' min-h-[50rem] h-auto grid grid-cols-12 '>
        <div className='col-span-12 xl:col-span-6 flex flex-col gap-4 items-start justify-start xl:py-24 pt-24'>
          <div className='relative '>
            <h1 className='text-5xl font-bold absolute -top-7 left-0 right-0 text-start text-blue-950 bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent'>
              ABOUT
            </h1>
            <h1 className=' text-4xl font-bold text-center text-blue-950'>
              Who We Are{' '}
            </h1>
          </div>
          <div className='xl:w-[98%] w-full '>
            <p className='xl:text-lg text-base text-black/60 '>
              At OmEnterprisesGroup, we’ve been empowering brands and businesses
              for over 20 years with innovative digital marketing solutions that
              drive real results.
              <br />
              <br />
              Founded with a vision to bridge the gap between creativity and
              technology, we’ve grown into a full-service digital marketing
              agency trusted by clients across industries. Our experience spans
              a wide spectrum of services that work together to build powerful,
              result-driven strategies.
              <br />
              <br />
              From SMS Marketing that delivers instant engagement to SEO that
              keeps you at the top of search results, we bring precision and
              performance to every campaign. Our team of experts crafts
              compelling content for Social Media, impactful Email Marketing,
              and conversion-optimized PPC ads to ensure your brand never goes
              unnoticed.
              <br />
              <br />
              We also specialize in Website Development and Software Solutions
              tailored to your unique business needs. With in-house capabilities
              in Graphic Designing, Video Production, and Content Marketing, we
              ensure your message stands out — visually and strategically.
              <br />
              <br />
              What sets us apart is our commitment to data-driven growth,
              creative excellence, and long-term client partnerships. Every
              project we take on is handled with the care, clarity, and
              consistency that only decades of experience can provide.
              <br />
              <br />
              Whether you're a small business or an established enterprise,
              OmEnterprisesGroup is your partner in navigating the ever-changing
              digital landscape with confidence.
            </p>
          </div>
        </div>
        <div className='col-span-12 xl:col-span-6 flex flex-col items-center justify-center sm:p-24'>
          <AboutAnimation />
        </div>
      </div>
    </XpaddingWrapper>
  )
}

export default AboutHero
