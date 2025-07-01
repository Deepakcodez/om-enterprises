import React from 'react'

const GlowingBottomLine:React.FC = () => {
  return (
    <div className='h-1 w-24 relative lg:block hidden bg-OMblue before:content-[""] before:absolute before:-bottom-1 before:right-0 before:w-3 before:h-3 before:bg-white before:rounded-full before:border-2 before:border-OMblue before:z-10  after:content-[""] after:absolute after:-bottom-1 after:right-0 after:w-3 after:h-3 after:bg-white after:rounded-full after:border-2 after:border-OMbluen after:blur-sm after:hover:w-4 after:hover:h-4 after:hover:-bottom-2 after:hover:-right-1 after:hover:blur-lg'>
    </div>
  )
}

export default GlowingBottomLine
