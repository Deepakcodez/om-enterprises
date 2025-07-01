"use client"
import { useEffect, useState } from 'react'

interface CircularProgressProps {
  percentage?: number
  size?: number
  strokeWidth?: number
  color?: string
}

export default function CircularProgress({
  percentage = 90,
  size = 100,
  strokeWidth = 8,
  color = '#9b59b6'
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0)
  
  // Calculate circle properties
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference
  
  // Animate the progress on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 300)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="relative inline-flex items-center justify-center  w-fit">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          className="stroke-gray-200"
          fill="none"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          className="transition-all duration-1000 ease-out "
          fill="white"
          cx={center}
          cy={center}
          r={radius }
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke={color}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            
          }}
        />
      </svg>
      {/* Percentage text */}
      <div className="absolute text-2xl font-semibold">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

