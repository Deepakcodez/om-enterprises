import React from 'react'

const BlogMetaDescriptionTaker = ({
    metaDescription,
    setMetaDescription
}:{
    metaDescription: string
    setMetaDescription: (value: string) => void
}) => {
  return (
    <div>
      <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">
        Meta Description
      </label>
      <textarea
        id="meta-description"
        rows={4}
        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none  focus:ring-indigo-500"
        placeholder="Enter meta description"
      />
    </div>
  )
}

export default BlogMetaDescriptionTaker
