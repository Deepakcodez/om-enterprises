"use client"
import Link from 'next/link'
import React from 'react'

type NavigatorProps = {
    children: React.ReactNode,
    to: string,
    className?: string
}
const Navigator:React.FC<NavigatorProps> = ( {children, to, className}) => {
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  )
}

export default Navigator
