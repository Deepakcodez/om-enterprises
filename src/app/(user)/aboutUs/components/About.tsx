import React from 'react'
import AboutHero from './AboutHero'
import shape from '../../../../assets/images/shape1.png'
import WideScreenHandler from '@/components/WideScreenHandler'
import AboutSlideshow from './AboutSlideshow'

const AboutUs: React.FC = () => {
  return (
    <WideScreenHandler>
      <div
        style={{
          backgroundImage: `url(${shape.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          minHeight: '50rem'
        }}
        className='relative'
      >
        <AboutSlideshow />
        <AboutHero />
      </div>
    </WideScreenHandler>
  )
}

export default AboutUs
