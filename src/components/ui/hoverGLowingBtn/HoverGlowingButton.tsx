import React from 'react'
import './hoverGLowingBtn.css'
import { CiCompass1 } from 'react-icons/ci'

interface HoverGlowingButtonProps {
  title: string
}

const HoverGlowingButton: React.FC<HoverGlowingButtonProps> = ({ title }) => {
  return (
    <button className='btn'>
      <CiCompass1 className='text-white' />
      <span className='text'>{title}</span>
    </button>
  )
}

export default HoverGlowingButton
