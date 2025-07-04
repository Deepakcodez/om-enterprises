import Input from '@/components/ui/Input'
import React from 'react'

const BlogTagTaker = ({
    tags,
    setTags,
    tagInput,
    setTagInput,
    handleAddTag,
    removeTag
}:{
    tags: string[],
    setTags: React.Dispatch<React.SetStateAction<string[]>>,
    tagInput: string,
    setTagInput: React.Dispatch<React.SetStateAction<string>>,
    handleAddTag: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    removeTag: (tag: string) => void
}) => {
  return (
    <div className="my-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center"
              >
                {tag}
                <button 
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <Input
            placeholder="Add tags (press Enter or comma to add)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            className="border border-gray-300"
          />
          <p className="text-sm text-gray-500 mt-1">Add tags to categorize your blog post</p>
        </div>
  )
}

export default BlogTagTaker
