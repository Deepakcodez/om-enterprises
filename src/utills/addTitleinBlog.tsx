
import { JSDOM } from 'jsdom' 

export interface HeadingData {
  id: string
  text: string
  level: number
}


export function processBlogContent(content: string): {
  processedContent: string
  headings: HeadingData[]
} {
  const dom = new JSDOM(content)
  const document = dom.window.document
  
  // Find all headings
  const headingElements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
  
  const headings: HeadingData[] = []
  
  // Add IDs to headings and collect data
  headingElements.forEach((heading, index) => {
    const id = `section-${index}`
    heading.id = id
    
    headings.push({
      id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1))
    })
  })
  
  return {
    processedContent: document.body.innerHTML,
    headings
  }
}