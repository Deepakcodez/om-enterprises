'use client'
import React, { useState, useEffect } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState<string>('')

  // Add intersection observer to track active heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    )

    // Observe all headings after a short delay to ensure they're rendered
    const timeoutId = setTimeout(() => {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.observe(element)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [headings])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Adjust this value based on your header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <div className='fixed top-52 w-full p-4 text-sm text-black/70'>
      <h2 className='text-lg mb-4 font-semibold'>Table of Contents</h2>
      <ul className='space-y-2 max-h-[70vh] overflow-y-auto'>
        {headings.map(heading => (
          <li
            key={heading.id}
            className={`cursor-pointer transition-colors duration-200 border-l-2 ${
              activeHeading === heading.id
                ? 'border-purple-500 text-purple-600 bg-purple-50'
                : 'border-transparent hover:text-purple-600 hover:border-purple-300'
            } ${
              heading.level === 1
                ? 'pl-3 font-medium'
                : heading.level === 2
                ? 'pl-5'
                : heading.level === 3
                ? 'pl-7'
                : 'pl-9'
            }`}
            onClick={() => scrollToSection(heading.id)}
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
