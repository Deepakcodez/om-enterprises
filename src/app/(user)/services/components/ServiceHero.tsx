import XpaddingWrapper from '@/components/XpaddingWrapper'
import React from 'react'
import WorldTourAnimation from '@/components/animation/WorldTour'
import WideScreenHandler from '@/components/WideScreenHandler'


const ServiceHero:React.FC = () => {
  return (
    <WideScreenHandler>
      <XpaddingWrapper>
        <div className="w-full min-h-[35rem] h-auto  md:min-h-[35rem] xl:min-h-[45rem]  flex md:flex-row flex-col-reverse  justify-center items-center ">
          <div className="  w-full h-full flex flex-col justify-start  pb-28">
                <h1 className="text-start xl:text-5xl md:text-4xl xs:text-4xl text-3xl font-bold text-blue-950 ">
                  Communicate Customers <br /> Globally Via <span className="text-OMblue">Our Services</span>
                </h1>
                <div className='mt-4 ps-12 '>
                    <ul className=' text-black/50 list-disc '>
                        <li>Reach More Customers Across India</li>
                        <li>Direct Telecome Operator Connectivity for SMS Service</li>
                        <li>99% Service Uptime Management</li>
                        <li>100% Delivery Rate</li>
                    </ul>
                </div>
              </div>
              <div className="w-full h-full md:flex justify-center items-center  hover:scale-110 duration-700">
               <WorldTourAnimation/>
              </div>
            </div>
          </XpaddingWrapper>
        </WideScreenHandler>
  )
}

export default ServiceHero