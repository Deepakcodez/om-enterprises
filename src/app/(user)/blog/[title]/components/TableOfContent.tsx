'use client'

import React, { useEffect, useState } from 'react'

type Heading = {
  id: string
  text: string
  level: number
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const content = document.querySelector('.tiptap')
    console.log('content--->', content);
    
    if (!content) return

    const spanHeadings = content.querySelectorAll('p > span')

    const newHeadings: Heading[] = []
    let index = 0

    spanHeadings.forEach((span) => {
      const style = window.getComputedStyle(span)
      const fontSize = parseFloat(style.fontSize)

      if (fontSize >= 24) { // Treat large font as heading
        const text = span.textContent?.trim() || `heading-${index}`
        const id = `heading-${index}`
        span.setAttribute('id', id)

        newHeadings.push({
          id,
          text,
          level: fontSize >= 28 ? 2 : 3, // use size to define depth
        })

        index++
      }
    })

    setHeadings(newHeadings)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="sticky top-20 bg-white border p-4 rounded-xl shadow-md max-w-sm">
      <h2 className="font-bold text-lg mb-3">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map(h => (
          <li
            key={h.id}
            className={`cursor-pointer text-sm pl-${(h.level - 2) * 4}`}
            onClick={() => handleClick(h.id)}
          >
            {h.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
