import React from 'react'

const BlogImagetaker = ({
    getRootProps,
    getInputProps,
    isDragActive,
    file,
    removeImage,
}:{
    getRootProps: () => any;
    getInputProps: () => any;
    isDragActive: boolean;
    file: File | null;
    removeImage: () => void;
}) => {
  return (
     <div className='my-4'>
            <div
              {...getRootProps()}
              className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors'
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className='text-gray-600'>Drop the image here...</p>
              ) : (
                <p className='text-gray-600'>
                  Drag & drop an image here, or click to select
                </p>
              )}
              <p className='text-sm text-gray-500 mt-2'>
                Supports: JPEG, JPG, PNG (Max 5MB)
              </p>
            </div>

            {file && (
              <div className='mt-4 relative flex flex-col items-center'>
                <img
                  src={URL.createObjectURL(file)}
                  className='h-40 w-auto rounded-lg object-cover'
                  alt='Upload preview'
                />
                <button
                  onClick={removeImage}
                  className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 aspect-square hover:bg-red-600'
                  aria-label='Remove image'
                >
                  ×
                </button>
                <p className='text-sm mt-1'>{file.name}</p>
              </div>
            )}
          </div>
  )
}

export default BlogImagetaker
