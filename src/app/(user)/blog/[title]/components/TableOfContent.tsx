"use client"
import React, { useState, useEffect } from 'react';

const TableOfContents = ({ blogContent }: { blogContent: string }) => {
  const [headings, setHeadings] = useState<Array<{id: string, text: string, level: number}>>([]);

  useEffect(() => {
    // Create a temporary DOM element to parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(blogContent, 'text/html');
    
    // Extract headings from the parsed content
    const headingElements = Array.from(doc.querySelectorAll('h1, h2, h3'));
    console.log("headingElements:", headingElements);

    const extractedHeadings = headingElements.map((heading, index) => {
      const id = `section-${index}`;
      return {
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      };
    });

    setHeadings(extractedHeadings);
  }, [blogContent]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <div className="sticky top-4 w-full p-4 border border-gray-200 rounded-lg shadow-md bg-white text-black">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2 max-h-[80vh] overflow-y-auto">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`cursor-pointer hover:text-blue-600 transition-colors 
              ${heading.level === 1 ? 'pl-0 font-medium' : 
                heading.level === 2 ? 'pl-4' : 'pl-8'}`}
            onClick={() => scrollToSection(heading.id)}
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;